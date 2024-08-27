"use client";

import Image from "next/image";
import Callout from "./callout";
import { useMDXComponent } from "next-contentlayer2/hooks";

const components = {
  Image,
  Callout,
};
export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <div className="prose lg:prose-xl max-w-full">
      <Component components={components} />
    </div>
  );
}
