// _runtime/01320_RepeatType.js
import lowerCamelCase from "01321_lowerCamelCase.js";

require = arg1;
const dependencyMap = arg6;
ScalarType.ScalarType = undefined;
ScalarType.LongType = undefined;
ScalarType.RepeatType = undefined;
ScalarType.normalizeFieldInfo = undefined;
ScalarType.readFieldOptions = undefined;
ScalarType.readFieldOption = undefined;
ScalarType.readMessageOption = undefined;
ScalarType = ScalarType.ScalarType;
if (!ScalarType) {
  let obj = {};
  ScalarType.ScalarType = obj;
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
let LongType = ScalarType.LongType;
if (!LongType) {
  obj = {};
  ScalarType.LongType = obj;
  LongType = obj;
}
LongType.BIGINT = 0;
LongType[0] = "BIGINT";
LongType.STRING = 1;
LongType[1] = "STRING";
LongType.NUMBER = 2;
LongType[2] = "NUMBER";
let RepeatType = ScalarType.RepeatType;
if (!RepeatType) {
  obj = {};
  ScalarType.RepeatType = obj;
  RepeatType = obj;
}
RepeatType.NO = 0;
RepeatType[0] = "NO";
RepeatType.PACKED = 1;
RepeatType[1] = "PACKED";
RepeatType.UNPACKED = 2;
RepeatType[2] = "UNPACKED";
ScalarType.normalizeFieldInfo = function normalizeFieldInfo(localName) {
  localName = localName.localName;
  if (null === localName) {
    localName = lowerCamelCase.lowerCamelCase(localName.name);
    const obj = lowerCamelCase;
  }
  localName.localName = localName;
  let jsonName = localName.jsonName;
  if (null === jsonName) {
    jsonName = lowerCamelCase.lowerCamelCase(localName.name);
    const obj2 = lowerCamelCase;
  }
  localName.jsonName = jsonName;
  let NO = localName.repeat;
  if (null === NO) {
    NO = RepeatType.NO;
  }
  localName.repeat = NO;
  let opt = localName.opt;
  if (null === opt) {
    const repeat = localName.repeat;
    let tmp6 = !repeat;
    if (!repeat) {
      const oneof = localName.oneof;
      let tmp7 = !oneof;
      if (!oneof) {
        tmp7 = "message" == localName.kind;
      }
      tmp6 = tmp7;
    }
    opt = tmp6;
  }
  localName.opt = opt;
  return localName;
};
ScalarType.readFieldOptions = function readFieldOptions(fields, arg1, arg2, fromJson) {
  closure_0 = arg1;
  fields = fields.fields;
  const found = fields.find((localName) => {
    let tmp2 = localName.localName == closure_0;
    if (!tmp2) {
      tmp2 = arg1 == tmp;
    }
    return tmp2;
  });
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
ScalarType.readFieldOption = function readFieldOption(fields, arg1, arg2, fromJson) {
  closure_0 = arg1;
  fields = fields.fields;
  const found = fields.find((localName) => {
    let tmp2 = localName.localName == closure_0;
    if (!tmp2) {
      tmp2 = arg1 == tmp;
    }
    return tmp2;
  });
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
ScalarType.readMessageOption = function readMessageOption(arg0, arg1, fromJson) {
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
