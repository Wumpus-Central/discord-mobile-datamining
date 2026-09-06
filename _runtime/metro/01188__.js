// _runtime/metro/01188__.js
import { typeofJsonValue } from "../01189_typeofJsonValue.js";
import { parts } from "../01190_parts.js";
import { fromCharCodes } from "../01191_fromCharCodes.js";
import { UnknownFieldHandler } from "../01192_UnknownFieldHandler.js";
import { binaryReadOptions } from "../01193_binaryReadOptions.js";
import { _isNativeReflectConstruct } from "../01195__isNativeReflectConstruct.js";
import { binaryWriteOptions } from "../01196_binaryWriteOptions.js";
import { assert } from "../01197_assert.js";
import { jsonReadOptions } from "../01198_jsonReadOptions.js";
import { MessageType } from "../01200_MessageType.js";
import { RepeatType } from "../01201_RepeatType.js";
import { lowerCamelCase } from "../01202_lowerCamelCase.js";
import { ReflectionTypeCheck } from "../01203_ReflectionTypeCheck.js";
import { isOneofGroup } from "../01204_isOneofGroup.js";
import { ReflectionJsonReader } from "../01205_ReflectionJsonReader.js";
import { ReflectionJsonWriter } from "../01207_ReflectionJsonWriter.js";
import { ReflectionBinaryReader } from "../01208_ReflectionBinaryReader.js";
import { reflectionScalarDefault } from "../01209_reflectionScalarDefault.js";
import { ReflectionBinaryWriter } from "../01210_ReflectionBinaryWriter.js";
import { reflectionCreate } from "../01211_reflectionCreate.js";
import { reflectionMergePartial } from "../01212_reflectionMergePartial.js";
import { primitiveEq } from "../01213_primitiveEq.js";
import { containsMessageType } from "../01214_containsMessageType.js";
import { isEnumObject } from "../01215_isEnumObject.js";
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return typeofJsonValue /* typeofJsonValue */.typeofJsonValue;
  },
};
Object.defineProperty(arg5, "typeofJsonValue", obj);
obj = {
  enumerable: true,
  get() {
    return typeofJsonValue /* typeofJsonValue */.isJsonObject;
  },
};
Object.defineProperty(arg5, "isJsonObject", obj);
obj = {
  enumerable: true,
  get() {
    return parts /* parts */.base64decode;
  },
};
Object.defineProperty(arg5, "base64decode", obj);
Object.defineProperty(arg5, "base64encode", {
  enumerable: true,
  get() {
    return parts /* parts */.base64encode;
  },
});
Object.defineProperty(arg5, "utf8read", {
  enumerable: true,
  get() {
    return fromCharCodes /* fromCharCodes */.utf8read;
  },
});
Object.defineProperty(arg5, "WireType", {
  enumerable: true,
  get() {
    return UnknownFieldHandler /* UnknownFieldHandler */.WireType;
  },
});
Object.defineProperty(arg5, "mergeBinaryOptions", {
  enumerable: true,
  get() {
    return UnknownFieldHandler /* UnknownFieldHandler */.mergeBinaryOptions;
  },
});
Object.defineProperty(arg5, "UnknownFieldHandler", {
  enumerable: true,
  get() {
    return UnknownFieldHandler /* UnknownFieldHandler */.UnknownFieldHandler;
  },
});
Object.defineProperty(arg5, "BinaryReader", {
  enumerable: true,
  get() {
    return binaryReadOptions /* binaryReadOptions */.BinaryReader;
  },
});
Object.defineProperty(arg5, "binaryReadOptions", {
  enumerable: true,
  get() {
    return binaryReadOptions /* binaryReadOptions */.binaryReadOptions;
  },
});
Object.defineProperty(arg5, "BinaryWriter", {
  enumerable: true,
  get() {
    return binaryWriteOptions /* binaryWriteOptions */.BinaryWriter;
  },
});
Object.defineProperty(arg5, "binaryWriteOptions", {
  enumerable: true,
  get() {
    return binaryWriteOptions /* binaryWriteOptions */.binaryWriteOptions;
  },
});
Object.defineProperty(arg5, "PbLong", {
  enumerable: true,
  get() {
    return _isNativeReflectConstruct /* _isNativeReflectConstruct */.PbLong;
  },
});
Object.defineProperty(arg5, "PbULong", {
  enumerable: true,
  get() {
    return _isNativeReflectConstruct /* _isNativeReflectConstruct */.PbULong;
  },
});
Object.defineProperty(arg5, "jsonReadOptions", {
  enumerable: true,
  get() {
    return jsonReadOptions /* jsonReadOptions */.jsonReadOptions;
  },
});
Object.defineProperty(arg5, "jsonWriteOptions", {
  enumerable: true,
  get() {
    return jsonReadOptions /* jsonReadOptions */.jsonWriteOptions;
  },
});
Object.defineProperty(arg5, "mergeJsonOptions", {
  enumerable: true,
  get() {
    return jsonReadOptions /* jsonReadOptions */.mergeJsonOptions;
  },
});
Object.defineProperty(arg5, "MESSAGE_TYPE", {
  enumerable: true,
  get() {
    return require("01199__.js").MESSAGE_TYPE;
  },
});
Object.defineProperty(arg5, "MessageType", {
  enumerable: true,
  get() {
    return MessageType /* MessageType */.MessageType;
  },
});
Object.defineProperty(arg5, "ScalarType", {
  enumerable: true,
  get() {
    return RepeatType /* RepeatType */.ScalarType;
  },
});
Object.defineProperty(arg5, "LongType", {
  enumerable: true,
  get() {
    return RepeatType /* RepeatType */.LongType;
  },
});
Object.defineProperty(arg5, "RepeatType", {
  enumerable: true,
  get() {
    return RepeatType /* RepeatType */.RepeatType;
  },
});
Object.defineProperty(arg5, "normalizeFieldInfo", {
  enumerable: true,
  get() {
    return RepeatType /* RepeatType */.normalizeFieldInfo;
  },
});
Object.defineProperty(arg5, "readFieldOptions", {
  enumerable: true,
  get() {
    return RepeatType /* RepeatType */.readFieldOptions;
  },
});
Object.defineProperty(arg5, "readFieldOption", {
  enumerable: true,
  get() {
    return RepeatType /* RepeatType */.readFieldOption;
  },
});
Object.defineProperty(arg5, "readMessageOption", {
  enumerable: true,
  get() {
    return RepeatType /* RepeatType */.readMessageOption;
  },
});
Object.defineProperty(arg5, "ReflectionTypeCheck", {
  enumerable: true,
  get() {
    return ReflectionTypeCheck /* ReflectionTypeCheck */.ReflectionTypeCheck;
  },
});
Object.defineProperty(arg5, "reflectionCreate", {
  enumerable: true,
  get() {
    return reflectionCreate /* reflectionCreate */.reflectionCreate;
  },
});
Object.defineProperty(arg5, "reflectionScalarDefault", {
  enumerable: true,
  get() {
    return reflectionScalarDefault /* reflectionScalarDefault */.reflectionScalarDefault;
  },
});
Object.defineProperty(arg5, "reflectionMergePartial", {
  enumerable: true,
  get() {
    return reflectionMergePartial /* reflectionMergePartial */.reflectionMergePartial;
  },
});
Object.defineProperty(arg5, "reflectionEquals", {
  enumerable: true,
  get() {
    return primitiveEq /* primitiveEq */.reflectionEquals;
  },
});
Object.defineProperty(arg5, "ReflectionBinaryReader", {
  enumerable: true,
  get() {
    return ReflectionBinaryReader /* ReflectionBinaryReader */.ReflectionBinaryReader;
  },
});
Object.defineProperty(arg5, "ReflectionBinaryWriter", {
  enumerable: true,
  get() {
    return ReflectionBinaryWriter /* ReflectionBinaryWriter */.ReflectionBinaryWriter;
  },
});
Object.defineProperty(arg5, "ReflectionJsonReader", {
  enumerable: true,
  get() {
    return ReflectionJsonReader /* ReflectionJsonReader */.ReflectionJsonReader;
  },
});
Object.defineProperty(arg5, "ReflectionJsonWriter", {
  enumerable: true,
  get() {
    return ReflectionJsonWriter /* ReflectionJsonWriter */.ReflectionJsonWriter;
  },
});
Object.defineProperty(arg5, "containsMessageType", {
  enumerable: true,
  get() {
    return containsMessageType /* containsMessageType */.containsMessageType;
  },
});
Object.defineProperty(arg5, "isOneofGroup", {
  enumerable: true,
  get() {
    return isOneofGroup /* isOneofGroup */.isOneofGroup;
  },
});
Object.defineProperty(arg5, "setOneofValue", {
  enumerable: true,
  get() {
    return isOneofGroup /* isOneofGroup */.setOneofValue;
  },
});
Object.defineProperty(arg5, "getOneofValue", {
  enumerable: true,
  get() {
    return isOneofGroup /* isOneofGroup */.getOneofValue;
  },
});
Object.defineProperty(arg5, "clearOneofValue", {
  enumerable: true,
  get() {
    return isOneofGroup /* isOneofGroup */.clearOneofValue;
  },
});
Object.defineProperty(arg5, "getSelectedOneofValue", {
  enumerable: true,
  get() {
    return isOneofGroup /* isOneofGroup */.getSelectedOneofValue;
  },
});
Object.defineProperty(arg5, "listEnumValues", {
  enumerable: true,
  get() {
    return isEnumObject /* isEnumObject */.listEnumValues;
  },
});
Object.defineProperty(arg5, "listEnumNames", {
  enumerable: true,
  get() {
    return isEnumObject /* isEnumObject */.listEnumNames;
  },
});
Object.defineProperty(arg5, "listEnumNumbers", {
  enumerable: true,
  get() {
    return isEnumObject /* isEnumObject */.listEnumNumbers;
  },
});
Object.defineProperty(arg5, "isEnumObject", {
  enumerable: true,
  get() {
    return isEnumObject /* isEnumObject */.isEnumObject;
  },
});
Object.defineProperty(arg5, "lowerCamelCase", {
  enumerable: true,
  get() {
    return lowerCamelCase /* lowerCamelCase */.lowerCamelCase;
  },
});
Object.defineProperty(arg5, "assert", {
  enumerable: true,
  get() {
    return assert /* assert */.assert;
  },
});
Object.defineProperty(arg5, "assertNever", {
  enumerable: true,
  get() {
    return assert /* assert */.assertNever;
  },
});
Object.defineProperty(arg5, "assertInt32", {
  enumerable: true,
  get() {
    return assert /* assert */.assertInt32;
  },
});
Object.defineProperty(arg5, "assertUInt32", {
  enumerable: true,
  get() {
    return assert /* assert */.assertUInt32;
  },
});
Object.defineProperty(arg5, "assertFloat32", {
  enumerable: true,
  get() {
    return assert /* assert */.assertFloat32;
  },
});
