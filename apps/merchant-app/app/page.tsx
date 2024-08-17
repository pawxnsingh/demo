"use client";

import balanceAtom from "@repo/store/balanceAtom";
import { useRecoilValue } from "recoil";

export default function () {
  console.log(balanceAtom);
  const balance = useRecoilValue(balanceAtom);

  return (
    <div>
      hi there
      {JSON.stringify(balanceAtom)}
      {balance}
    </div>
  );
}
