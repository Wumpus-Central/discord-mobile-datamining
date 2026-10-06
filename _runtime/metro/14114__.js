// _runtime/metro/14114__.js
import _mod14083 from "14083__.js";
import _mod14115 from "14115__.js";
import getOwnPropertyDescriptor from "14082__.js";

const f66212 = () => {
  const obj = {
    get() {
      return 7;
    },
  };
  return 7 !== Object.defineProperty(_mod14115("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14083(f66212);

export default !getOwnPropertyDescriptor && !_mod14083(f66212);
