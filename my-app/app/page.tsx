"use client";
import CustomMap from "@/components/CustomMap";
import { GridDoc } from "@/components/GridDoc";
import { TableDoc } from "@/components/TableDoc";
import { DataTableDemo } from "@/components/TableDocV2";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <GridDoc />
      </div>

      <div>
        <TableDoc />
      </div>

      <div>
        <DataTableDemo />
      </div>
    </main>
  );
}
