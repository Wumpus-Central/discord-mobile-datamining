import _slicedToArray from "_slicedToArray";

const require = arg1;
function parseBezierKnot(dataView) {
  const items = [];
  let num = 0;
  do {
    let sum = arg1 + num;
    let tmp3 = dependencyMap;
    let tmp2 = importDefault;
    let obj = importDefault(4823);
    let longAt = obj.getLongAt(dataView, sum);
    let tmp5 = num;
    let num2 = -1;
    if (longAt >>> 31 === 0) {
      num2 = 1;
    }
    let str = (2130706432 & longAt) >>> 24;
    let _parseInt = parseInt;
    let tmp6 = require;
    let obj2 = require(4806) /* getDataView */;
    let str2 = longAt & parseInt(obj2.strRepeat("1", 24), 2);
    let obj3 = require(4806) /* getDataView */;
    let text = `${str.toString(2)}.`;
    let obj4 = require(4806) /* getDataView */;
    let result = num2 * obj3.parseFloatRadix(`${str.toString(2)}.` + obj4.padStart(str2.toString(2), 24, "0"), 2);
    let tmp2Result = tmp2(4823);
    let longAt1 = tmp2Result.getLongAt(dataView, sum + 4);
    let num3 = -1;
    if (longAt1 >>> 31 === 0) {
      num3 = 1;
    }
    let str3 = (2130706432 & longAt1) >>> 24;
    let _parseInt2 = parseInt;
    let tmp6Result = tmp6(4806);
    let str4 = longAt1 & parseInt(tmp6Result.strRepeat("1", 24), 2);
    tmp6Result = tmp6(4806);
    let text1 = `${str3.toString(2)}.`;
    let tmp6Result1 = tmp6(4806);
    let items1 = [num3 * tmp6Result.parseFloatRadix(`${str3.toString(2)}.` + tmp6Result1.padStart(str4.toString(2), 24, "0"), 2), result];
    let arr = items.push(items1);
    num = num + 8;
  } while (num < 24);
  return items;
}
let obj = { CLOSED_SUBPATH_LENGTH: 0, CLOSED_SUBPATH_BEZIER_LINKED: 1, CLOSED_SUBPATH_BEZIER_UNLINKED: 2, OPEN_SUBPATH_LENGTH: 3, OPEN_SUBPATH_BEZIER_LINKED: 4, OPEN_SUBPATH_BEZIER_UNLINKED: 5, FILL_RULE: 6, CLIPBOARD: 7, INITIAL_FILL_RULE: 8 };
obj = { 2000: null, 2999: null };
obj[2000] = {
  name: "PathInformation",
  description: function pathResource(byteLength) {
    const types = {};
    const paths = [];
    for (let num = 0; num < byteLength.byteLength; num = num + 26) {
      let tmp = importDefault;
      let tmp2 = dependencyMap;
      let obj2 = importDefault(4823);
      let shortAt = obj2.getShortAt(byteLength, num);
      let tmp4 = table;
      let tmp5 = num;
      if (table[shortAt]) {
        if (!types[shortAt]) {
          types[shortAt] = tmp4[shortAt].description;
        }
        let obj = { type: null, path: null };
        obj[0] = shortAt;
        let obj4 = tmp4[shortAt];
        obj[1] = obj4.path(byteLength, num + 2);
        let arr = paths.push(obj);
      }
    }
    return JSON.stringify({ types, paths });
  }
};
obj[2999] = {
  name: "ClippingPathName",
  description(getUint8) {
    return callback(require(4806) /* getDataView */.getPascalStringFromDataView(getUint8, 0), 2)[1];
  }
};
obj = {
  description: "Closed subpath length",
  path(dataView, sum) {
    const items = [importDefault(4823).getShortAt(dataView, sum)];
    return items;
  }
};
let closure_4 = {
  [obj.CLOSED_SUBPATH_LENGTH]: obj,
  [obj.CLOSED_SUBPATH_BEZIER_LINKED]: { description: "Closed subpath Bezier knot, linked", path: parseBezierKnot },
  [obj.CLOSED_SUBPATH_BEZIER_UNLINKED]: { description: "Closed subpath Bezier knot, unlinked", path: parseBezierKnot },
  [obj.OPEN_SUBPATH_LENGTH]: {
    description: "Open subpath length",
    path(dataView, sum) {
      const items = [importDefault(4823).getShortAt(dataView, sum)];
      return items;
    }
  },
  [obj.OPEN_SUBPATH_BEZIER_LINKED]: { description: "Open subpath Bezier knot, linked", path: parseBezierKnot },
  [obj.OPEN_SUBPATH_BEZIER_UNLINKED]: { description: "Open subpath Bezier knot, unlinked", path: parseBezierKnot },
  [obj.FILL_RULE]: {
    description: "Path fill rule",
    path() {
      return [];
    }
  },
  [obj.INITIAL_FILL_RULE]: {
    description: "Initial fill rule",
    path(dataView, sum) {
      const items = [importDefault(4823).getShortAt(dataView, sum)];
      return items;
    }
  },
  [obj.CLIPBOARD]: {
    description: "Clipboard",
    path: function parseClipboard(dataView, sum) {
      const longAt = importDefault(4823).getLongAt(dataView, sum);
      let num = -1;
      let num2 = -1;
      if (longAt >>> 31 === 0) {
        num2 = 1;
      }
      const obj = importDefault(4823);
      const obj2 = require(4806) /* getDataView */;
      const str2 = longAt & parseInt(require(4806) /* getDataView */.strRepeat("1", 24), 2);
      const text = `${str.toString(2)}.`;
      const obj3 = require(4806) /* getDataView */;
      const items = [num2 * obj3.parseFloatRadix(`${(2130706432 & longAt) >>> 24.toString(2)}.` + require(4806) /* getDataView */.padStart(str2.toString(2), 24, "0"), 2), , , ];
      sum = sum + 4;
      let tmpResult = tmp(4823);
      const longAt1 = tmpResult.getLongAt(dataView, sum);
      let num3 = num;
      if (longAt1 >>> 31 === 0) {
        num3 = 1;
      }
      let tmp4Result = tmp4(4806);
      const obj4 = require(4806) /* getDataView */;
      tmp4Result = tmp4(4806);
      const text1 = `${str3.toString(2)}.`;
      const str4 = longAt1 & parseInt(tmp4Result.strRepeat("1", 24), 2);
      items[1] = num3 * tmp4Result.parseFloatRadix(`${(2130706432 & longAt1) >>> 24.toString(2)}.` + require(4806) /* getDataView */.padStart(str4.toString(2), 24, "0"), 2);
      const sum1 = sum + 8;
      tmpResult = tmp(4823);
      const longAt2 = tmpResult.getLongAt(dataView, sum1);
      let num4 = num;
      if (longAt2 >>> 31 === 0) {
        num4 = 1;
      }
      const tmp4Result1 = require(4806) /* getDataView */;
      const tmp4Result2 = require(4806) /* getDataView */;
      const str6 = longAt2 & parseInt(require(4806) /* getDataView */.strRepeat("1", 24), 2);
      const text2 = `${str5.toString(2)}.`;
      const tmp4Result3 = require(4806) /* getDataView */;
      items[2] = num4 * tmp4Result3.parseFloatRadix(`${(2130706432 & longAt2) >>> 24.toString(2)}.` + require(4806) /* getDataView */.padStart(str6.toString(2), 24, "0"), 2);
      const sum2 = sum + 12;
      const tmp4Result4 = require(4806) /* getDataView */;
      const longAt3 = importDefault(4823).getLongAt(dataView, sum2);
      let num5 = num;
      if (longAt3 >>> 31 === 0) {
        num5 = 1;
      }
      const tmpResult1 = importDefault(4823);
      const tmp4Result5 = require(4806) /* getDataView */;
      const str8 = longAt3 & parseInt(require(4806) /* getDataView */.strRepeat("1", 24), 2);
      const text3 = `${str7.toString(2)}.`;
      const tmp4Result6 = require(4806) /* getDataView */;
      items[3] = num5 * tmp4Result6.parseFloatRadix(`${(2130706432 & longAt3) >>> 24.toString(2)}.` + require(4806) /* getDataView */.padStart(str8.toString(2), 24, "0"), 2);
      const items1 = [items, ];
      const sum3 = sum + 16;
      const tmp4Result7 = require(4806) /* getDataView */;
      const longAt4 = importDefault(4823).getLongAt(dataView, sum3);
      if (longAt4 >>> 31 === 0) {
        num = 1;
      }
      const tmpResult2 = importDefault(4823);
      const tmp4Result8 = require(4806) /* getDataView */;
      const str10 = longAt4 & parseInt(require(4806) /* getDataView */.strRepeat("1", 24), 2);
      const text4 = `${str9.toString(2)}.`;
      const tmp4Result9 = require(4806) /* getDataView */;
      items1[1] = num * tmp4Result9.parseFloatRadix(`${(2130706432 & longAt4) >>> 24.toString(2)}.` + require(4806) /* getDataView */.padStart(str10.toString(2), 24, "0"), 2);
      return items1;
    }
  }
};

export default obj;
export const PathRecordTypes = obj;