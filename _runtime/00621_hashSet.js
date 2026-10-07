// === Module 621: hashSet ===

// Module 621 (hashSet)
import _mod611 from "module_611" /* 611 */;


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
};