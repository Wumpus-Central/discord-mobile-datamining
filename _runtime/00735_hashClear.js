// === Module 735: hashClear ===

// Module 735 (hashClear)

export default function hashClear() {
  let obj = {};
  if (require(736) /* getNative */) {
    obj = require(736) /* getNative */(null);
  } else {
    obj = {};
  }
  obj.__data__ = obj;
  obj.size = 0;
};