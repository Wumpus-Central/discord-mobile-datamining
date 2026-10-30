// === Module 609: hashSet ===

// Module 609 (hashSet)
import _mod599 from "module_599" /* 599 */;


export default function hashSet(arg0, arg1) {
  const self = this;
  ({ __data__, size } = this);
  let num = 1;
  if (this.has(arg0)) {
    num = 0;
  }
  self.size = size + num;
  if (!_mod599) {
    let str = arg1;
  } else {
    str = "__lodash_hash_undefined__";
  }
  __data__[arg0] = str;
  return self;
};