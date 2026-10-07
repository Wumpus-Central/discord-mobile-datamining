// _runtime/00621_hashSet.js
import _mod611 from "metro/00611__.js";

export default function hashSet(arg0, arg1) {
  const self = this;
  ({ __data__, size } = this);
  let num = 1;
  if (this.has(arg0)) {
    num = 0;
  }
  self.size = size + num;
  if (!_mod611) {
    let str = arg1;
  } else {
    str = "__lodash_hash_undefined__";
  }
  __data__[arg0] = str;
  return self;
}
