// _runtime/00746_hashSet.js
import { getNative } from "00736_getNative.js";

export default function hashSet(arg0, arg1) {
  let __data__;
  let size;
  const self = this;
  ({ __data__, size } = this);
  let num = 1;
  if (this.has(arg0)) {
    num = 0;
  }
  self.size = size + num;
  if (!getNative /* getNative */) {
    let str = arg1;
  } else {
    str = "__lodash_hash_undefined__";
  }
  __data__[arg0] = str;
  return self;
};