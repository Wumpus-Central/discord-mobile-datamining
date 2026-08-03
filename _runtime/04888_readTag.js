const require = arg1;
function readTag(byteLength, IFD_TYPE_0TH, sum, sum, byteOrder, arg5) {
  let obj = importDefault(4885);
  const typeSize = obj.getTypeSize("SHORT");
  sum = typeSize + importDefault(4885).getTypeSize("SHORT");
  const obj2 = importDefault(4885);
  const sum1 = sum + importDefault(4885).getTypeSize("LONG");
  const obj3 = importDefault(4885);
  const shortAt = importDefault(4885).getShortAt(byteLength, sum, byteOrder);
  const obj4 = importDefault(4885);
  const shortAt1 = importDefault(4885).getShortAt(byteLength, sum + typeSize, byteOrder);
  const obj5 = importDefault(4885);
  const longAt = importDefault(4885).getLongAt(byteLength, sum + sum, byteOrder);
  if (undefined !== importDefault(4885).typeSizes[shortAt1]) {
    if ((function tagValueFitsInOffsetSlot(shortAt1, longAt) {
      const result = callback(4885).typeSizes[shortAt1] * longAt;
      return result <= callback(4885).getTypeSize("LONG");
    })(shortAt1, longAt)) {
      const sum2 = sum + sum1;
      let str = getTagValue(byteLength, sum2, shortAt1, longAt, byteOrder);
      let tmp21 = sum2;
    } else {
      const longAt1 = tmp4(4885).getLongAt(byteLength, sum + sum1, byteOrder);
      str = "<faulty value>";
      tmp21 = longAt1;
      if ((function tagValueFitsInDataView(byteLength, sum, longAt1, shortAt1, longAt) {
        sum = sum + longAt1;
        return sum + callback(4885).typeSizes[shortAt1] * longAt <= byteLength.byteLength;
      })(byteLength, sum, longAt1, shortAt1, longAt)) {
        str = getTagValue(byteLength, sum + longAt1, shortAt1, longAt, byteOrder, 33723 === shortAt);
        tmp21 = longAt1;
      }
      const tmp4Result = tmp4(4885);
    }
    let tmp34 = str;
    if (shortAt1 === tmp4(4885).tagTypes.ASCII) {
      tmp34 = (function decodeAsciiValue(arr) {
        try {
          return arr.map((arg0) => decodeURIComponent(escape(arg0)));
        } catch (err) {
          return tmp;
        }
      })((function splitNullSeparatedAsciiString(arg0) {
        const items = [];
        let num = 0;
        let num2 = 0;
        if (0 < arg0.length) {
          do {
            let tmp = num2;
            let tmp2 = num;
            if ("\0" !== arg0[num2]) {
              if (undefined === items[num]) {
                items[num] = "";
              }
              items[num] = items[num] + arg0[num2];
              let sum = num;
            } else {
              sum = num + 1;
            }
            num2 = num2 + 1;
            num = sum;
          } while (num2 < arg0.length);
        }
        return items;
      })(str));
    }
    const _HermesInternal = HermesInternal;
    let combined = "undefined-" + shortAt;
    let descriptionResult = tmp34;
    if (undefined !== tmp4(4889)[IFD_TYPE_0TH][shortAt]) {
      if (undefined !== tmp4(4889)[IFD_TYPE_0TH][shortAt].name) {
        if (undefined !== tmp4(4889)[IFD_TYPE_0TH][shortAt].description) {
          try {
            descriptionResult = tmp4(4889)[IFD_TYPE_0TH][shortAt].description(tmp34);
            combined = tmp39;
            const obj8 = tmp4(4889)[IFD_TYPE_0TH][shortAt];
          } catch (err) {
            descriptionResult = getDescriptionFromTagValue(tmp2);
            combined = tmp;
          }
        }
      }
      if (shortAt1 !== tmp4(4885).tagTypes.RATIONAL) {
        if (shortAt1 !== tmp4(4885).tagTypes.SRATIONAL) {
          combined = tmp4(4889)[IFD_TYPE_0TH][shortAt];
          descriptionResult = getDescriptionFromTagValue(tmp34);
        }
      }
      combined = tmp4(4889)[IFD_TYPE_0TH][shortAt];
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
    result = longAt * importDefault(4885).typeSizes[shortAt1];
    BYTE = importDefault(4885).tagTypes.BYTE;
  }
  let sum = sum2;
  const items = [];
  for (let num = 0; num < result; num = num + 1) {
    let tmp5 = obj;
    let arr = items.push(obj[BYTE](byteLength, sum, byteOrder));
    let tmp7 = importDefault;
    let tmp8 = dependencyMap;
    sum = sum + importDefault(4885).typeSizes[BYTE];
  }
  if (BYTE === importDefault(4885).tagTypes.ASCII) {
    let asciiValue = importDefault(4885).getAsciiValue(items);
    const tmp9Result = importDefault(4885);
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
let obj = { 1: null, 2: require("module_4885").getByteAt, 3: require("module_4885").getAsciiAt, 4: require("module_4885").getShortAt, 5: require("module_4885").getLongAt, 7: require("module_4885").getRationalAt, 9: null, 10: require("module_4885").getUndefinedAt, 13: null };
obj[9] = require("module_4885").getSlongAt;
obj[10] = require("module_4885").getSrationalAt;
obj[13] = require("module_4885").getIfdPointerAt;
function readIfd(byteLength, IFD_TYPE_0TH, sum, sum, byteOrder, arg5, arg6) {
  let obj = importDefault(4885);
  const typeSize = obj.getTypeSize("SHORT");
  let num = 0;
  if (sum + obj2.getTypeSize("SHORT") <= byteLength.byteLength) {
    num = importDefault(4885).getShortAt(byteLength, sum, byteOrder);
    const tmpResult = importDefault(4885);
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
        let tmp6 = readTag;
        let num2 = 0;
        let tmp7 = byteLength;
        let tmp8 = IFD_TYPE_0TH;
        let tmp9 = sum;
        let tmp10 = tmp22;
        let tmp11 = byteOrder;
        let tmp12 = arg5;
        let tmp13 = readTag(byteLength, IFD_TYPE_0TH, sum, tmp22, byteOrder, arg5);
        let tmp14 = num3;
        let tmp15 = tmp22;
        if (undefined !== tmp13) {
          obj = { id: null, value: null, description: null };
          ({ id: obj7[0], value: obj7[1], description: obj7[2] } = tmp13);
          obj[tmp13.name] = obj;
          let tmp19 = "MakerNote" === tmp13.name;
          if (!tmp19) {
            let tmp16 = require;
            let tmp17 = dependencyMap;
            let tmp18 = IFD_TYPE_0TH === require(4889) /* importDefaultResult1 */.IFD_TYPE_PENTAX && "LevelInfo" === tmp13.name;
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
  if (importDefault(4871).USE_THUMBNAIL) {
    let tmp23Result = tmp23(4885);
    if (tmp5 < byteLength.byteLength - tmp23Result.getTypeSize("LONG")) {
      tmp23Result = tmp23(4885);
      const longAt = tmp23Result.getLongAt(byteLength, tmp5, byteOrder);
      let tmp26 = 0 !== longAt;
      if (tmp26) {
        tmp26 = IFD_TYPE_0TH === require(4889) /* importDefaultResult1 */.IFD_TYPE_0TH;
      }
      if (tmp26) {
        obj.Thumbnail = readIfd(byteLength, require(4889) /* importDefaultResult1 */.IFD_TYPE_1ST, sum, sum + longAt, byteOrder, arg5);
      }
    }
  }
  return obj;
}

export const get0thIfdOffset = function get0thIfdOffset(buffer, sum, byteOrder) {
  return sum + importDefault(4885).getLongAt(buffer, sum + 4, byteOrder);
};
export { readIfd };