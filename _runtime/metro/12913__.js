// _runtime/metro/12913__.js
import _mod12914 from "12914__.js";

function getProcedure(type) {
  value = map.get(type.type);
  let num = -1;
  if (null !== value) {
    num = -1;
    if (undefined !== value) {
      num = value;
    }
  }
  if (type.type === _mod12914.SelectorType.Attribute) {
    value2 = map1.get(type.action);
    let num8 = 4;
    if (null !== value2) {
      num8 = 4;
      if (undefined !== value2) {
        num8 = value2;
      }
    }
    let tmp7 = type.action === _mod12914.AttributeAction.Equals;
    if (tmp7) {
      tmp7 = "id" === type.name;
    }
    if (tmp7) {
      num8 = 9;
    }
    num = num8;
    if (type.ignoreCase) {
      num = num8 >> 1;
    }
  } else if (type.type === _mod12914.SelectorType.Pseudo) {
    let num6 = 3;
    if (type.data) {
      let num3 = 0;
      if ("has" !== type.name) {
        num3 = 0;
        if ("contains" !== type.name) {
          const _Array = Array;
          let num4 = 2;
          if (Array.isArray(type.data)) {
            const _Math = Math;
            const _Math2 = Math;
            const data = type.data;
            let num5 = min.apply(
              Math,
              data.map((arr) => {
                return min.apply(Math, arr.map(getProcedure));
              }),
            );
            if (num5 < 0) {
              num5 = 0;
            }
            num4 = num5;
          }
          num3 = num4;
        }
      }
      num6 = num3;
    }
    num = num6;
  }
  return num;
}
const items = [_mod12914.SelectorType.Universal, 50];
const items1 = [items, , ,];
const items2 = [_mod12914.SelectorType.Tag, 30];
items1[1] = items2;
const items3 = [_mod12914.SelectorType.Attribute, 1];
items1[2] = items3;
const items4 = [_mod12914.SelectorType.Pseudo, 0];
items1[3] = items4;
const map = new Map(items1);
const items5 = [_mod12914.AttributeAction.Exists, 10];
const items6 = [items5, , , , ,];
const items7 = [_mod12914.AttributeAction.Equals, 8];
items6[1] = items7;
const items8 = [_mod12914.AttributeAction.Not, 7];
items6[2] = items8;
const items9 = [_mod12914.AttributeAction.Start, 6];
items6[3] = items9;
const items10 = [_mod12914.AttributeAction.End, 6];
items6[4] = items10;
const items11 = [_mod12914.AttributeAction.Any, 5];
items6[5] = items11;
const map1 = new Map(items6);

export function isTraversal(type) {
  return !map.has(type.type);
}
export default function sortByProcedure(arr) {
  const mapped = arr.map(getProcedure);
  for (let num = 1; num < arr.length; num = num + 1) {
    let tmp2 = mapped[num];
    if (tmp2 >= 0) {
      let diff = num - 1;
      if (0 <= diff) {
        if (tmp2 < mapped[diff]) {
          let sum = diff + 1;
          arr[sum] = arr[diff];
          arr[diff] = arr[sum];
          mapped[sum] = mapped[diff];
          mapped[diff] = tmp2;
          let diff1 = diff - 1;
          while (0 <= diff1) {
            diff = diff1;
            if (tmp2 >= mapped[diff1]) {
              break;
            }
          }
        }
      }
    }
  }
}
