import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
  pages: { signIn: "/login" },
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
      }

      return session;
    },
  },
};

// export default NextAuth(authOptions);
