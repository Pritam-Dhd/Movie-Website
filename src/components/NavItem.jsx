"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const NavItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Link
          className={`hover:text-blue-600 font-semibold ${
            genre === param
              ? "underline underline-offset-8 decoration-4 decoration-blue-600 rounded-lg"
              : ""
          }`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </div>
    </Suspense>
  );
};

export default NavItem;
