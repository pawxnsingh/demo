"use client";
import { useBalance } from "@repo/store/balance";
export default function Home() {
  const balance: number = useBalance();
  return (
    <div>
      hii there
      <p>{balance}</p>
    </div>
  );
}
