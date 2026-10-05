// === Module 1211: ScalarType ===

// Module 1211 (ScalarType)
import lowerCamelCase from "lowerCamelCase" /* 1212 */;

let ScalarType = exports.ScalarType;
if (!ScalarType) {
  let obj = {};
  exports.ScalarType = obj;
  ScalarType = obj;
}
ScalarType.DOUBLE = 1;
ScalarType[1] = "DOUBLE";
ScalarType.FLOAT = 2;
ScalarType[2] = "FLOAT";
ScalarType.INT64 = 3;
ScalarType[3] = "INT64";
ScalarType.UINT64 = 4;
ScalarType[4] = "UINT64";
ScalarType.INT32 = 5;
ScalarType[5] = "INT32";
ScalarType.FIXED64 = 6;
ScalarType[6] = "FIXED64";
ScalarType.FIXED32 = 7;
ScalarType[7] = "FIXED32";
ScalarType.BOOL = 8;
ScalarType[8] = "BOOL";
ScalarType.STRING = 9;
ScalarType[9] = "STRING";
ScalarType.BYTES = 12;
ScalarType[12] = "BYTES";
ScalarType.UINT32 = 13;
ScalarType[13] = "UINT32";
ScalarType.SFIXED32 = 15;
ScalarType[15] = "SFIXED32";
ScalarType.SFIXED64 = 16;
ScalarType[16] = "SFIXED64";
ScalarType.SINT32 = 17;
ScalarType[17] = "SINT32";
ScalarType.SINT64 = 18;
ScalarType[18] = "SINT64";
let LongType = exports.LongType;
if (!LongType) {
  let obj2 = {};
  exports.LongType = obj2;
  LongType = obj2;
}
LongType.BIGINT = 0;
LongType[0] = "BIGINT";
LongType.STRING = 1;
LongType[1] = "STRING";
LongType.NUMBER = 2;
LongType[2] = "NUMBER";
let RepeatType = exports.RepeatType;
if (!RepeatType) {
  const obj3 = {};
  exports.RepeatType = obj3;
  RepeatType = obj3;
}
RepeatType.NO = 0;
RepeatType[0] = "NO";
RepeatType.PACKED = 1;
RepeatType[1] = "PACKED";
RepeatType.UNPACKED = 2;
RepeatType[2] = "UNPACKED";

export const normalizeFieldInfo = function normalizeFieldInfo(localName) {
  localName = localName.localName;
  if (null === localName) {
    const obj = lowerCamelCase;
    localName = obj.lowerCamelCase(localName.name);
  }
  localName.localName = localName;
  let jsonName = localName.jsonName;
  if (null === jsonName) {
    const obj2 = lowerCamelCase;
    jsonName = obj2.lowerCamelCase(localName.name);
  }
  localName.jsonName = jsonName;
  const NO = localName.repeat ?? RepeatType.NO;
  localName.repeat = NO;
  let opt = localName.opt;
  if (null === opt) {
    let tmp6 = !localName.repeat;
    if (tmp6) {
      tmp6 = !localName.oneof && "message" == localName.kind;
      const tmp7 = !localName.oneof && "message" == localName.kind;
    }
    opt = tmp6;
  }
  localName.opt = opt;
  return localName;
};
export const readFieldOptions = function readFieldOptions(fields, arg1, arg2, fromJson) {
  let closure_0 = arg1;
  fields = fields.fields;
  const found = fields.find((localName, index) => localName.localName == closure_0 || index == tmp);
  let options;
  if (null !== found) {
    if (undefined !== found) {
      options = found.options;
    }
  }
  let fromJsonResult;
  if (options) {
    if (options[arg2]) {
      fromJsonResult = fromJson.fromJson(options[arg2]);
    }
  }
  return fromJsonResult;
};
export const readFieldOption = function readFieldOption(fields, arg1, arg2, fromJson) {
  let closure_0 = arg1;
  fields = fields.fields;
  const found = fields.find((localName, index) => localName.localName == closure_0 || index == tmp);
  let options;
  if (null !== found) {
    if (undefined !== found) {
      options = found.options;
    }
  }
  if (options) {
    let tmp5 = tmp4;
    if (undefined !== options[arg2]) {
      let fromJsonResult = tmp4;
      if (fromJson) {
        fromJsonResult = fromJson.fromJson(tmp4);
      }
      tmp5 = fromJsonResult;
    }
    return tmp5;
  }
};
export const readMessageOption = function readMessageOption(arg0, arg1, fromJson) {
  let tmp2 = tmp;
  if (undefined !== arg0.options[arg1]) {
    let fromJsonResult = tmp;
    if (fromJson) {
      fromJsonResult = fromJson.fromJson(tmp);
    }
    tmp2 = fromJsonResult;
  }
  return tmp2;
};