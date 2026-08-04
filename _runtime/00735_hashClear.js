// _runtime/00735_hashClear.js

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