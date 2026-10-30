// _runtime/metro/12821__.js
import _mod12792 from "12792__.js";

const require = globalThis.__r;

function isCommaContextStart(type) {
  let tmp = null === type;
  if (!tmp) {
    let tmp4 = type.type === _mod12792.TYPE.Comma;
    if (!tmp4) {
      tmp4 = type.type === _mod12792.TYPE.Function;
    }
    if (!tmp4) {
      tmp4 = type.type === _mod12792.TYPE.LeftParenthesis;
    }
    if (!tmp4) {
      tmp4 = type.type === _mod12792.TYPE.LeftSquareBracket;
    }
    if (!tmp4) {
      tmp4 = type.type === _mod12792.TYPE.LeftCurlyBracket;
    }
    if (!tmp4) {
      let tmp5 = type.type === _mod12792.TYPE.Delim;
      if (tmp5) {
        tmp5 = "?" !== type.value;
      }
      tmp4 = tmp5;
    }
    tmp = tmp4;
  }
  return tmp;
}
function internalMatch(arr, match, self) {
  _require = arr;
  dependencyMap = match;
  c2 = null;
  type = null;
  c4 = -1;
  closure_5 = 0;
  let prev = { type: 0, syntax: null, token: null, prev: null };
  while (true) {
    let sum = c4 + 1;
    c4 = sum;
    let tmp3 = null;
    if (sum < arr.length) {
      tmp3 = arr[c4];
    }
    type = tmp3;
    if (null === tmp3) {
      break;
    } else {
      let tmp10 = _require;
      if (tmp3.type === require("12792__.js").TYPE.WhiteSpace) {
        continue;
      } else if (type.type !== tmp10(12792).TYPE.Comment) {
        break;
      }
      continue;
    }
  }
}
const Match = "Match";
let c4 = 0;

export default {
  matchAsList(arr, match, self) {
    let obj = self;
    if (!self) {
      obj = {};
    }
    const str = internalMatch(arr, match, obj);
    if (null !== str.match) {
      let prev = str.match;
      let tmp3 = null;
      let tmp4 = null;
      if (null !== prev) {
        do {
          prev.prev = tmp3;
          tmp3 = prev;
          tmp4 = prev;
          prev = prev.prev;
        } while (null !== tmp2);
      }
      let prev2 = tmp4.prev;
      str.match = [];
      if (null !== prev2) {
        do {
          type = prev2.type;
          if (0 !== type) {
            if (2 !== type) {
              if (3 !== type) {
                match = str.match;
                let obj2 = { token: prev2.token.value, node: prev2.token.node };
                arr = match.push(obj2);
              }
            }
            let match1 = str.match;
            let obj5 = { type: null, syntax: null };
            ({ type: obj3.type, syntax: obj3.syntax } = prev2);
            let arr2 = match1.push(obj5);
          }
          prev2 = prev2.prev;
        } while (null !== prev2);
      }
    }
    return str;
  },
  matchAsTree(arr, match, self) {
    let obj = self;
    if (!self) {
      obj = {};
    }
    const str = internalMatch(arr, match, obj);
    if (null === str.match) {
      return str;
    } else {
      let prev = str.match;
      let obj2 = { syntax: match.syntax || null, match: [] };
      str.match = obj2;
      const items = [obj2];
      let tmp3 = null;
      let tmp4 = null;
      if (null !== prev) {
        do {
          prev.prev = tmp3;
          tmp3 = prev;
          tmp4 = prev;
          prev = prev.prev;
        } while (null !== tmp5);
      }
      let prev2 = tmp4.prev;
      if (null !== prev2) {
        do {
          type = prev2.type;
          if (2 === type) {
            match = obj2.match;
            let obj3 = { syntax: prev2.syntax, match: [] };
            arr = match.push(obj3);
            let arr2 = items.push(obj3);
            let tmp10 = obj3;
          } else if (3 === type) {
            let arr3 = items.pop();
            tmp10 = items[items.length - 1];
          } else {
            let match1 = obj2.match;
            let syntax = prev2.syntax;
            if (!syntax) {
              syntax = null;
            }
            let obj4 = { syntax, token: prev2.token.value, node: prev2.token.node };
            let arr7 = match1.push(obj4);
            tmp10 = obj2;
          }
          prev2 = prev2.prev;
          obj2 = tmp10;
        } while (null !== prev2);
      }
      return str;
    }
  },
  getTotalIterationCount() {
    return c4;
  },
};
