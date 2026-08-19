// _runtime/00517_unsafeStringify.js
import validateDefault from "00518_validate.js";

importDefault = arg2;
const dependencyMap = arg6;
function unsafeStringify(array, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  return items[array[num]] + items[array[num + 1]] + items[array[num + 2]] + items[array[num + 3]] + "-" + items[array[num + 4]] + items[array[num + 5]] + "-" + items[array[num + 6]] + items[array[num + 7]] + "-" + items[array[num + 8]] + items[array[num + 9]] + "-" + items[array[num + 10]] + items[array[num + 11]] + items[array[num + 12]] + items[array[num + 13]] + items[array[num + 14]] + items[array[num + 15]];
}
const items = [];
let num = 0;
do {
  let str = num + 256;
  str = require("../discord_app/utils/checkEnv.tsx");
  let arr = items.push(require("../discord_app/modules/debug/logAppStart.tsx"));
  num = num + 1;
} while (num < 256);
arg5.default = function stringify(array) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  const tmp = unsafeStringify(array, num);
  if (validateDefault(tmp)) {
    return tmp;
  } else {
    const _TypeError = TypeError;
    throw TypeError("Stringified UUID is invalid");
  }
};
arg5.unsafeStringify = unsafeStringify;