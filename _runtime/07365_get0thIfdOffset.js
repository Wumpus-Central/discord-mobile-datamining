// _runtime/07365_get0thIfdOffset.js
import _modDef7348 from "metro/07348__.js";
import _modDef7362 from "metro/07362__.js";
import IFD_TYPE_0TH2 from "07366_IFD_TYPE_0TH.js";

const IFD_TYPE_0THDefault = IFD_TYPE_0TH2;

function readTag(byteLength, IFD_TYPE_0TH, sum, sum2, byteOrder, arg5) {
  function tagValueFitsInOffsetSlot(shortAt1, longAt) {
    const result = _modDef7362.typeSizes[shortAt1] * longAt;
    obj = _modDef7362;
    return result <= obj.getTypeSize("LONG");
  }
  function tagValueFitsInDataView(byteLength, sum, longAt1, shortAt1, longAt) {
    sum = sum + longAt1;
    return sum + _modDef7362.typeSizes[shortAt1] * longAt <= byteLength.byteLength;
  }
  function decodeAsciiValue(arr) {
    try {
      return arr.map((item) => decodeURIComponent(escape(item)));
    } catch (err) {
      return arr;
    }
  }
  function splitNullSeparatedAsciiString(tagValue) {
    const items = [];
    let num = 0;
    let num2 = 0;
    if (0 < tagValue.length) {
      do {
        let sum;
        if ("\0" !== tagValue[num2]) {
          if (undefined === items[num]) {
            items[num] = "";
          }
          items[num] = items[num] + tagValue[num2];
          sum = num;
        } else {
          sum = num + 1;
        }
        num2 = num2 + 1;
        num = sum;
      } while (num2 < tagValue.length);
    }
    return items;
  }
  obj = _modDef7362;
  const typeSize = obj.getTypeSize("SHORT");
  const obj2 = _modDef7362;
  sum = typeSize + obj2.getTypeSize("SHORT");
  const obj3 = _modDef7362;
  const sum1 = sum + obj3.getTypeSize("LONG");
  const obj4 = _modDef7362;
  const shortAt = obj4.getShortAt(byteLength, sum, byteOrder);
  const obj5 = _modDef7362;
  const shortAt1 = obj5.getShortAt(byteLength, sum + typeSize, byteOrder);
  const obj6 = _modDef7362;
  const longAt = obj6.getLongAt(byteLength, sum + sum, byteOrder);
  if (undefined !== _modDef7362.typeSizes[shortAt1]) {
    let str;
    let tmp18;
    let num = 0;
    if (tagValueFitsInOffsetSlot(shortAt1, longAt)) {
      sum2 = sum + sum1;
      str = getTagValue(byteLength, sum2, shortAt1, longAt, byteOrder);
      tmp18 = sum2;
    } else {
      const tmpResult = _modDef7362;
      const longAt1 = tmpResult.getLongAt(byteLength, sum + sum1, byteOrder);
      let num2 = 0;
      str = "<faulty value>";
      tmp18 = longAt1;
      if (tagValueFitsInDataView(byteLength, sum, longAt1, shortAt1, longAt)) {
        str = getTagValue(byteLength, sum + longAt1, shortAt1, longAt, byteOrder, 33723 === shortAt);
        tmp18 = longAt1;
      }
    }
    let tmp31 = str;
    if (shortAt1 === _modDef7362.tagTypes.ASCII) {
      tmp31 = decodeAsciiValue(splitNullSeparatedAsciiString(str));
    }
    const _HermesInternal = HermesInternal;
    let combined = "undefined-" + shortAt;
    let descriptionResult = tmp31;
    if (undefined !== IFD_TYPE_0THDefault[IFD_TYPE_0TH][shortAt]) {
      if (undefined !== IFD_TYPE_0THDefault[IFD_TYPE_0TH][shortAt].name) {
        if (undefined !== IFD_TYPE_0THDefault[IFD_TYPE_0TH][shortAt].description) {
          const name = IFD_TYPE_0THDefault[IFD_TYPE_0TH][shortAt].name;
          try {
            const obj8 = IFD_TYPE_0THDefault[IFD_TYPE_0TH][shortAt];
            descriptionResult = obj8.description(tmp31);
            combined = name;
          } catch (err) {
            descriptionResult = getDescriptionFromTagValue(tmp31);
            combined = name;
          }
        }
      }
      if (shortAt1 !== _modDef7362.tagTypes.RATIONAL) {
        if (shortAt1 !== _modDef7362.tagTypes.SRATIONAL) {
          combined = IFD_TYPE_0THDefault[IFD_TYPE_0TH][shortAt];
          descriptionResult = getDescriptionFromTagValue(tmp31);
        }
      }
      combined = IFD_TYPE_0THDefault[IFD_TYPE_0TH][shortAt];
      descriptionResult = `${tmp31[0] / tmp31[1]}`;
    }
    return { id: shortAt, name: combined, value: tmp31, description: descriptionResult, __offset: tmp18 };
  }
}
function getTagValue(byteLength, sum2, shortAt1, longAt, byteOrder, arg5) {
  let asciiValue;
  let flag = arg5;
  if (arg5 === undefined) {
    flag = false;
  }
  let result = longAt;
  let BYTE = shortAt1;
  if (flag) {
    result = longAt * _modDef7362.typeSizes[shortAt1];
    BYTE = _modDef7362.tagTypes.BYTE;
  }
  let sum = sum2;
  const items = [];
  for (let num = 0; num < result; num = num + 1) {
    let arr = items.push(obj[BYTE](byteLength, sum, byteOrder));
    sum = sum + _modDef7362.typeSizes[BYTE];
  }
  if (BYTE === _modDef7362.tagTypes.ASCII) {
    const tmp9Result = _modDef7362;
    asciiValue = tmp9Result.getAsciiValue(items);
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
let obj = {
  1: null,
  2: _modDef7362.getByteAt,
  3: _modDef7362.getAsciiAt,
  4: _modDef7362.getShortAt,
  5: _modDef7362.getLongAt,
  7: _modDef7362.getRationalAt,
  9: null,
  10: _modDef7362.getUndefinedAt,
  13: null,
};
obj[9] = _modDef7362.getSlongAt;
obj[10] = _modDef7362.getSrationalAt;
obj[13] = _modDef7362.getIfdPointerAt;
function readIfd(byteLength, IFD_TYPE_0TH, sum, sum2, byteOrder, arg5) {
  obj = _modDef7362;
  const typeSize = obj.getTypeSize("SHORT");
  let num = 0;
  const obj2 = _modDef7362;
  if (sum + obj2.getTypeSize("SHORT") <= byteLength.byteLength) {
    const tmpResult = _modDef7362;
    num = tmpResult.getShortAt(byteLength, sum, byteOrder);
  }
  const obj3 = {};
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
          let obj4 = { id: null, value: null, description: null };
          ({ id: obj7.id, value: obj7.value, description: obj7.description } = tmp13);
          obj3[tmp13.name] = obj4;
          let tmp19 = "MakerNote" === tmp13.name;
          if (!tmp19) {
            let tmp18 = IFD_TYPE_0TH === IFD_TYPE_0TH2.IFD_TYPE_PENTAX && "LevelInfo" === tmp13.name;
            tmp19 = tmp18;
          }
          if (tmp19) {
            obj3[tmp13.name].__offset = tmp13.__offset;
          }
        }
        let sum1 = tmp22 + 12;
        sum2 = num3 + 1;
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
  if (_modDef7348.USE_THUMBNAIL) {
    byteLength = byteLength.byteLength;
    const tmp23Result = _modDef7362;
    if (tmp5 < byteLength - tmp23Result.getTypeSize("LONG")) {
      const tmp23Result2 = _modDef7362;
      const longAt = tmp23Result2.getLongAt(byteLength, tmp5, byteOrder);
      const tmp26 = 0 !== longAt && IFD_TYPE_0TH === IFD_TYPE_0TH2.IFD_TYPE_0TH;
      if (tmp26) {
        obj3.Thumbnail = readIfd(byteLength, IFD_TYPE_0TH2.IFD_TYPE_1ST, sum, sum + longAt, byteOrder, arg5);
      }
    }
  }
  return obj3;
}

export const get0thIfdOffset = function get0thIfdOffset(buffer, c5, byteOrder) {
  obj = _modDef7362;
  return c5 + obj.getLongAt(buffer, c5 + 4, byteOrder);
};
export { readIfd };
