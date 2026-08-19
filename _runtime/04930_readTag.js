// _runtime/04930_readTag.js
import _modDef4913 from "metro/04913__.js";
import _modDef4927 from "metro/04927__.js";
import importDefaultResult1 from "04931_importDefaultResult1.js";
import importDefaultResult1Default from "04931_importDefaultResult1.js";

require = arg1;
function readTag(byteLength, IFD_TYPE_0TH, sum, sum, byteOrder, arg5) {
  obj = _modDef4927;
  const typeSize = obj.getTypeSize("SHORT");
  sum = typeSize + _modDef4927.getTypeSize("SHORT");
  const sum1 = sum + _modDef4927.getTypeSize("LONG");
  const shortAt = _modDef4927.getShortAt(byteLength, sum, byteOrder);
  const shortAt1 = _modDef4927.getShortAt(byteLength, sum + typeSize, byteOrder);
  const longAt = _modDef4927.getLongAt(byteLength, sum + sum, byteOrder);
  if (undefined !== _modDef4927.typeSizes[shortAt1]) {
    if ((function tagValueFitsInOffsetSlot(shortAt1, longAt) {
      const result = callback(4927).typeSizes[shortAt1] * longAt;
      return result <= callback(4927).getTypeSize("LONG");
    })(shortAt1, longAt)) {
      const sum2 = sum + sum1;
      let str = getTagValue(byteLength, sum2, shortAt1, longAt, byteOrder);
      let tmp21 = sum2;
    } else {
      const longAt1 = _modDef4927.getLongAt(byteLength, sum + sum1, byteOrder);
      str = "<faulty value>";
      tmp21 = longAt1;
      if ((function tagValueFitsInDataView(byteLength, sum, longAt1, shortAt1, longAt) {
        sum = sum + longAt1;
        return sum + callback(4927).typeSizes[shortAt1] * longAt <= byteLength.byteLength;
      })(byteLength, sum, longAt1, shortAt1, longAt)) {
        str = getTagValue(byteLength, sum + longAt1, shortAt1, longAt, byteOrder, 33723 === shortAt);
        tmp21 = longAt1;
      }
      const tmp4Result = _modDef4927;
    }
    let tmp34 = str;
    if (shortAt1 === _modDef4927.tagTypes.ASCII) {
      tmp34 = (function decodeAsciiValue(arr) {
        try {
          return arr.map((item, index) => decodeURIComponent(escape(item)));
        } catch (err) {
          return tmp;
        }
      })((function splitNullSeparatedAsciiString(tagValue) {
        const items = [];
        let num = 0;
        let num2 = 0;
        if (0 < tagValue.length) {
          do {
            if ("\0" !== tagValue[num2]) {
              if (undefined === items[num]) {
                items[num] = "";
              }
              items[num] = items[num] + tagValue[num2];
              let sum = num;
            } else {
              sum = num + 1;
            }
            num2 = num2 + 1;
            num = sum;
          } while (num2 < tagValue.length);
        }
        return items;
      })(str));
    }
    const _HermesInternal = HermesInternal;
    let combined = "undefined-" + shortAt;
    let descriptionResult = tmp34;
    if (undefined !== importDefaultResult1Default[IFD_TYPE_0TH][shortAt]) {
      if (undefined !== importDefaultResult1Default[IFD_TYPE_0TH][shortAt].name) {
        if (undefined !== importDefaultResult1Default[IFD_TYPE_0TH][shortAt].description) {
          try {
            descriptionResult = importDefaultResult1Default[IFD_TYPE_0TH][shortAt].description(tmp34);
            combined = tmp39;
          } catch (err) {
            descriptionResult = getDescriptionFromTagValue(tmp2);
            combined = tmp;
          }
        }
      }
      if (shortAt1 !== _modDef4927.tagTypes.RATIONAL) {
        if (shortAt1 !== _modDef4927.tagTypes.SRATIONAL) {
          combined = importDefaultResult1Default[IFD_TYPE_0TH][shortAt];
          descriptionResult = getDescriptionFromTagValue(tmp34);
        }
      }
      combined = importDefaultResult1Default[IFD_TYPE_0TH][shortAt];
      descriptionResult = `${tmp34[0] / tmp34[1]}`;
    }
    obj = { id: null, name: null, value: null, description: null, __offset: null };
    obj[0] = shortAt;
    obj[1] = combined;
    obj[2] = tmp34;
    obj[3] = descriptionResult;
    obj[4] = tmp21;
    return obj;
  }
}
function getTagValue(byteLength, sum2, shortAt1, longAt, byteOrder, arg5) {
  let flag = arg5;
  if (arg5 === undefined) {
    flag = false;
  }
  let result = longAt;
  let BYTE = shortAt1;
  if (flag) {
    result = longAt * _modDef4927.typeSizes[shortAt1];
    BYTE = _modDef4927.tagTypes.BYTE;
  }
  let sum = sum2;
  const items = [];
  for (let num = 0; num < result; num = num + 1) {
    let arr = items.push(obj[BYTE](byteLength, sum, byteOrder));
    sum = sum + _modDef4927.typeSizes[BYTE];
  }
  if (BYTE === _modDef4927.tagTypes.ASCII) {
    let asciiValue = _modDef4927.getAsciiValue(items);
    const tmp9Result = _modDef4927;
  } else {
    asciiValue = items;
    if (1 === items.length) {
      asciiValue = items[0];
    }
  }
  return asciiValue;
}
function getDescriptionFromTagValue(join) {
  let joined = join;
  if (join instanceof Array) {
    joined = join.join(", ");
  }
  return joined;
}
let obj = { 1: null, 2: _modDef4927.getByteAt, 3: _modDef4927.getAsciiAt, 4: _modDef4927.getShortAt, 5: _modDef4927.getLongAt, 7: _modDef4927.getRationalAt, 9: null, 10: _modDef4927.getUndefinedAt, 13: null };
obj[9] = _modDef4927.getSlongAt;
obj[10] = _modDef4927.getSrationalAt;
obj[13] = _modDef4927.getIfdPointerAt;
function readIfd(byteLength, IFD_TYPE_0TH, sum, sum, byteOrder, arg5, arg6) {
  obj = _modDef4927;
  const typeSize = obj.getTypeSize("SHORT");
  let num = 0;
  if (sum + obj2.getTypeSize("SHORT") <= byteLength.byteLength) {
    num = _modDef4927.getShortAt(byteLength, sum, byteOrder);
    const tmpResult = _modDef4927;
  }
  obj = {};
  sum = sum + typeSize;
  let tmp5 = sum;
  if (0 < num) {
    let num3 = 0;
    let tmp22 = sum;
    tmp5 = sum;
    if (sum + 12 <= byteLength.byteLength) {
      while (true) {
        let tmp13 = readTag(byteLength, IFD_TYPE_0TH, sum, tmp22, byteOrder, arg5);
        if (undefined !== tmp13) {
          obj = { id: null, value: null, description: null };
          ({ id: obj7[0], value: obj7[1], description: obj7[2] } = tmp13);
          obj[tmp13.name] = obj;
          let tmp19 = "MakerNote" === tmp13.name;
          if (!tmp19) {
            let tmp18 = IFD_TYPE_0TH === importDefaultResult1.IFD_TYPE_PENTAX && "LevelInfo" === tmp13.name;
            tmp19 = tmp18;
          }
          if (tmp19) {
            obj[tmp13.name].__offset = tmp13.__offset;
          }
        }
        let sum1 = tmp22 + 12;
        let sum2 = num3 + 1;
        tmp5 = sum1;
        if (sum2 >= num) {
          break;
        } else {
          num3 = sum2;
          tmp22 = sum1;
          tmp5 = sum1;
          if (sum1 + 12 > byteLength.byteLength) {
            break;
          }
        }
      }
    }
  }
  if (_modDef4913.USE_THUMBNAIL) {
    let tmp23Result = _modDef4927;
    if (tmp5 < byteLength.byteLength - tmp23Result.getTypeSize("LONG")) {
      tmp23Result = _modDef4927;
      const longAt = tmp23Result.getLongAt(byteLength, tmp5, byteOrder);
      let tmp26 = 0 !== longAt;
      if (tmp26) {
        tmp26 = IFD_TYPE_0TH === importDefaultResult1.IFD_TYPE_0TH;
      }
      if (tmp26) {
        obj.Thumbnail = readIfd(byteLength, importDefaultResult1.IFD_TYPE_1ST, sum, sum + longAt, byteOrder, arg5);
      }
    }
  }
  return obj;
}

export const get0thIfdOffset = function get0thIfdOffset(buffer, c5, byteOrder) {
  return c5 + _modDef4927.getLongAt(buffer, c5 + 4, byteOrder);
};
export { readIfd };