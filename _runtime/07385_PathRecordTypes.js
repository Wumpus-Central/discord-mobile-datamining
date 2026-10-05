// _runtime/07385_PathRecordTypes.js
import _mod7345 from "metro/07345__.js";
import _modDef7362 from "metro/07362__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

function parseBezierKnot(dataView, arg1) {
  const items = [];
  let num = 0;
  do {
    let sum = arg1 + num;
    let push = items.push;
    let obj = _modDef7362;
    let longAt = obj.getLongAt(dataView, sum);
    let num2 = -1;
    if (longAt >>> 31 === 0) {
      num2 = 1;
    }
    let str = (2130706432 & longAt) >>> 24;
    let _parseInt = parseInt;
    let obj2 = _mod7345;
    let str2 = longAt & parseInt(obj2.strRepeat("1", 24), 2);
    let tmp7 = _mod7345;
    let parseFloatRadix = tmp7.parseFloatRadix;
    let text = `${str.toString(2)}.`;
    let obj3 = _mod7345;
    let result = num2 * parseFloatRadix(`${str.toString(2)}.` + obj3.padStart(str2.toString(2), 24, "0"), 2);
    let tmp2Result = _modDef7362;
    let longAt1 = tmp2Result.getLongAt(dataView, sum + 4);
    let num3 = -1;
    if (longAt1 >>> 31 === 0) {
      num3 = 1;
    }
    let str3 = (2130706432 & longAt1) >>> 24;
    let _parseInt2 = parseInt;
    let tmp6Result = _mod7345;
    let str4 = longAt1 & parseInt(tmp6Result.strRepeat("1", 24), 2);
    let tmp6Result3 = _mod7345;
    let parseFloatRadix2 = tmp6Result3.parseFloatRadix;
    let text1 = `${str3.toString(2)}.`;
    let tmp6Result4 = _mod7345;
    let items1 = [
      num3 * parseFloatRadix2(`${str3.toString(2)}.` + tmp6Result4.padStart(str4.toString(2), 24, "0"), 2),
      result,
    ];
    let arr = push(items1);
    num = num + 8;
  } while (num < 24);
  return items;
}
let obj = {
  CLOSED_SUBPATH_LENGTH: 0,
  CLOSED_SUBPATH_BEZIER_LINKED: 1,
  CLOSED_SUBPATH_BEZIER_UNLINKED: 2,
  OPEN_SUBPATH_LENGTH: 3,
  OPEN_SUBPATH_BEZIER_LINKED: 4,
  OPEN_SUBPATH_BEZIER_UNLINKED: 5,
  FILL_RULE: 6,
  CLIPBOARD: 7,
  INITIAL_FILL_RULE: 8,
};
let obj2 = { 2000: null, 2999: null };
obj2[2000] = {
  name: "PathInformation",
  description: function pathResource(byteLength) {
    let num;
    let obj4;
    const types = {};
    const paths = [];
    for (let num = 0; num < byteLength.byteLength; num = num + 26) {
      let obj2 = _modDef7362;
      let shortAt = obj2.getShortAt(byteLength, num);
      if (closure_4[shortAt]) {
        if (!types[shortAt]) {
          types[shortAt] = closure_4[shortAt].description;
        }
        let obj = { type: shortAt, path: obj4.path(byteLength, num + 2) };
        obj4 = closure_4[shortAt];
        let push = paths.push;
        let arr = push(obj);
      }
    }
    return JSON.stringify({ types, paths });
  },
};
obj2[2999] = {
  name: "ClippingPathName",
  description(getUint8) {
    const obj = _mod7345;
    return _slicedToArray(obj.getPascalStringFromDataView(getUint8, 0), 2)[1];
  },
};
let obj3 = {
  description: "Closed subpath length",
  path(dataView, sum) {
    const items = [];
    const obj = _modDef7362;
    items[0] = obj.getShortAt(dataView, sum);
    return items;
  },
};
let obj4 = {
  description: "Open subpath length",
  path(dataView, sum) {
    const items = [];
    const obj = _modDef7362;
    items[0] = obj.getShortAt(dataView, sum);
    return items;
  },
};
let closure_4 = {
  [obj.CLOSED_SUBPATH_LENGTH]: obj3,
  [obj.CLOSED_SUBPATH_BEZIER_LINKED]: { description: "Closed subpath Bezier knot, linked", path: parseBezierKnot },
  [obj.CLOSED_SUBPATH_BEZIER_UNLINKED]: { description: "Closed subpath Bezier knot, unlinked", path: parseBezierKnot },
  [obj.OPEN_SUBPATH_LENGTH]: obj4,
  [obj.OPEN_SUBPATH_BEZIER_LINKED]: { description: "Open subpath Bezier knot, linked", path: parseBezierKnot },
  [obj.OPEN_SUBPATH_BEZIER_UNLINKED]: { description: "Open subpath Bezier knot, unlinked", path: parseBezierKnot },
  [obj.FILL_RULE]: {
    description: "Path fill rule",
    path() {
      return [];
    },
  },
  [obj.INITIAL_FILL_RULE]: {
    description: "Initial fill rule",
    path(dataView, sum) {
      const items = [];
      const obj = _modDef7362;
      items[0] = obj.getShortAt(dataView, sum);
      return items;
    },
  },
  [obj.CLIPBOARD]: {
    description: "Clipboard",
    path: function parseClipboard(dataView, sum) {
      const obj = _modDef7362;
      const longAt = obj.getLongAt(dataView, sum);
      let num = -1;
      let num2 = -1;
      if (longAt >>> 31 === 0) {
        num2 = 1;
      }
      const obj2 = _mod7345;
      const str2 = longAt & parseInt(obj2.strRepeat("1", 24), 2);
      const parseFloatRadix = _mod7345.parseFloatRadix;
      _mod7345;
      const text = `${str.toString(2)}.`;
      const items = [, , ,];
      const obj3 = _mod7345;
      items[0] =
        num2 *
        parseFloatRadix(`${((2130706432 & longAt) >>> 24).toString(2)}.` + obj3.padStart(str2.toString(2), 24, "0"), 2);
      sum = sum + 4;
      const tmpResult = _modDef7362;
      const longAt1 = tmpResult.getLongAt(dataView, sum);
      let num3 = num;
      if (longAt1 >>> 31 === 0) {
        num3 = 1;
      }
      const tmp4Result = _mod7345;
      const str4 = longAt1 & parseInt(tmp4Result.strRepeat("1", 24), 2);
      const parseFloatRadix2 = _mod7345.parseFloatRadix;
      _mod7345;
      const text1 = `${str3.toString(2)}.`;
      const tmp4Result13 = _mod7345;
      items[1] =
        num3 *
        parseFloatRadix2(
          `${((2130706432 & longAt1) >>> 24).toString(2)}.` + tmp4Result13.padStart(str4.toString(2), 24, "0"),
          2,
        );
      const sum1 = sum + 8;
      const tmpResult4 = _modDef7362;
      const longAt2 = tmpResult4.getLongAt(dataView, sum1);
      let num4 = num;
      if (longAt2 >>> 31 === 0) {
        num4 = 1;
      }
      const tmp4Result14 = _mod7345;
      const str6 = longAt2 & parseInt(tmp4Result14.strRepeat("1", 24), 2);
      const parseFloatRadix3 = _mod7345.parseFloatRadix;
      _mod7345;
      const text2 = `${str5.toString(2)}.`;
      const tmp4Result16 = _mod7345;
      items[2] =
        num4 *
        parseFloatRadix3(
          `${((2130706432 & longAt2) >>> 24).toString(2)}.` + tmp4Result16.padStart(str6.toString(2), 24, "0"),
          2,
        );
      const sum2 = sum + 12;
      const tmpResult5 = _modDef7362;
      const longAt3 = tmpResult5.getLongAt(dataView, sum2);
      let num5 = num;
      if (longAt3 >>> 31 === 0) {
        num5 = 1;
      }
      const tmp4Result17 = _mod7345;
      const str8 = longAt3 & parseInt(tmp4Result17.strRepeat("1", 24), 2);
      const parseFloatRadix4 = _mod7345.parseFloatRadix;
      _mod7345;
      const text3 = `${str7.toString(2)}.`;
      const tmp4Result19 = _mod7345;
      items[3] =
        num5 *
        parseFloatRadix4(
          `${((2130706432 & longAt3) >>> 24).toString(2)}.` + tmp4Result19.padStart(str8.toString(2), 24, "0"),
          2,
        );
      const items1 = [items];
      const sum3 = sum + 16;
      const tmpResult6 = _modDef7362;
      const longAt4 = tmpResult6.getLongAt(dataView, sum3);
      if (longAt4 >>> 31 === 0) {
        num = 1;
      }
      const tmp4Result20 = _mod7345;
      const str10 = longAt4 & parseInt(tmp4Result20.strRepeat("1", 24), 2);
      const parseFloatRadix5 = _mod7345.parseFloatRadix;
      _mod7345;
      const text4 = `${str9.toString(2)}.`;
      const tmp4Result22 = _mod7345;
      items1[1] =
        num *
        parseFloatRadix5(
          `${((2130706432 & longAt4) >>> 24).toString(2)}.` + tmp4Result22.padStart(str10.toString(2), 24, "0"),
          2,
        );
      return items1;
    },
  },
};

export default obj2;
export const PathRecordTypes = obj;
