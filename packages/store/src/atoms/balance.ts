import { atom } from "recoil";

const balanceAtom = atom({
  key: "balance",
  default: "100000",
});

export default balanceAtom;
