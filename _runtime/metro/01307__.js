// _runtime/metro/01307__.js
import { typeofJsonValue } from "../01308_typeofJsonValue.js";
import { parts } from "../01309_parts.js";
import { fromCharCodes } from "../01310_fromCharCodes.js";
import { UnknownFieldHandler } from "../01311_UnknownFieldHandler.js";
import { binaryReadOptions } from "../01312_binaryReadOptions.js";
import { _isNativeReflectConstruct } from "../01314__isNativeReflectConstruct.js";
import { binaryWriteOptions } from "../01315_binaryWriteOptions.js";
import { assert } from "../01316_assert.js";
import { jsonReadOptions } from "../01317_jsonReadOptions.js";
import { MessageType } from "../01319_MessageType.js";
import { RepeatType } from "../01320_RepeatType.js";
import { lowerCamelCase } from "../01321_lowerCamelCase.js";
import { ReflectionTypeCheck } from "../01322_ReflectionTypeCheck.js";
import { isOneofGroup } from "../01323_isOneofGroup.js";
import { ReflectionJsonReader } from "../01324_ReflectionJsonReader.js";
import { ReflectionJsonWriter } from "../01326_ReflectionJsonWriter.js";
import { ReflectionBinaryReader } from "../01327_ReflectionBinaryReader.js";
import { reflectionScalarDefault } from "../01328_reflectionScalarDefault.js";
import { ReflectionBinaryWriter } from "../01329_ReflectionBinaryWriter.js";
import { reflectionCreate } from "../01330_reflectionCreate.js";
import { reflectionMergePartial } from "../01331_reflectionMergePartial.js";
import { primitiveEq } from "../01332_primitiveEq.js";
import { containsMessageType } from "../01333_containsMessageType.js";
import { isEnumObject } from "../01334_isEnumObject.js";
import { 01318__ } from "01318__.js";
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return typeofJsonValue.typeofJsonValue;
  }
};
Object.defineProperty(arg5, "typeofJsonValue", obj);
obj = {
  enumerable: true,
  get() {
    return typeofJsonValue.isJsonObject;
  }
};
Object.defineProperty(arg5, "isJsonObject", obj);
obj = {
  enumerable: true,
  get() {
    return parts.base64decode;
  }
};
Object.defineProperty(arg5, "base64decode", obj);
Object.defineProperty(arg5, "base64encode", {
  enumerable: true,
  get() {
    return parts.base64encode;
  }
});
Object.defineProperty(arg5, "utf8read", {
  enumerable: true,
  get() {
    return fromCharCodes.utf8read;
  }
});
Object.defineProperty(arg5, "WireType", {
  enumerable: true,
  get() {
    return UnknownFieldHandler.WireType;
  }
});
Object.defineProperty(arg5, "mergeBinaryOptions", {
  enumerable: true,
  get() {
    return UnknownFieldHandler.mergeBinaryOptions;
  }
});
Object.defineProperty(arg5, "UnknownFieldHandler", {
  enumerable: true,
  get() {
    return UnknownFieldHandler.UnknownFieldHandler;
  }
});
Object.defineProperty(arg5, "BinaryReader", {
  enumerable: true,
  get() {
    return binaryReadOptions.BinaryReader;
  }
});
Object.defineProperty(arg5, "binaryReadOptions", {
  enumerable: true,
  get() {
    return binaryReadOptions.binaryReadOptions;
  }
});
Object.defineProperty(arg5, "BinaryWriter", {
  enumerable: true,
  get() {
    return binaryWriteOptions.BinaryWriter;
  }
});
Object.defineProperty(arg5, "binaryWriteOptions", {
  enumerable: true,
  get() {
    return binaryWriteOptions.binaryWriteOptions;
  }
});
Object.defineProperty(arg5, "PbLong", {
  enumerable: true,
  get() {
    return _isNativeReflectConstruct.PbLong;
  }
});
Object.defineProperty(arg5, "PbULong", {
  enumerable: true,
  get() {
    return _isNativeReflectConstruct.PbULong;
  }
});
Object.defineProperty(arg5, "jsonReadOptions", {
  enumerable: true,
  get() {
    return jsonReadOptions.jsonReadOptions;
  }
});
Object.defineProperty(arg5, "jsonWriteOptions", {
  enumerable: true,
  get() {
    return jsonReadOptions.jsonWriteOptions;
  }
});
Object.defineProperty(arg5, "mergeJsonOptions", {
  enumerable: true,
  get() {
    return jsonReadOptions.mergeJsonOptions;
  }
});
Object.defineProperty(arg5, "MESSAGE_TYPE", {
  enumerable: true,
  get() {
    return 01318__.MESSAGE_TYPE;
  }
});
Object.defineProperty(arg5, "MessageType", {
  enumerable: true,
  get() {
    return MessageType.MessageType;
  }
});
Object.defineProperty(arg5, "ScalarType", {
  enumerable: true,
  get() {
    return RepeatType.ScalarType;
  }
});
Object.defineProperty(arg5, "LongType", {
  enumerable: true,
  get() {
    return RepeatType.LongType;
  }
});
Object.defineProperty(arg5, "RepeatType", {
  enumerable: true,
  get() {
    return RepeatType.RepeatType;
  }
});
Object.defineProperty(arg5, "normalizeFieldInfo", {
  enumerable: true,
  get() {
    return RepeatType.normalizeFieldInfo;
  }
});
Object.defineProperty(arg5, "readFieldOptions", {
  enumerable: true,
  get() {
    return RepeatType.readFieldOptions;
  }
});
Object.defineProperty(arg5, "readFieldOption", {
  enumerable: true,
  get() {
    return RepeatType.readFieldOption;
  }
});
Object.defineProperty(arg5, "readMessageOption", {
  enumerable: true,
  get() {
    return RepeatType.readMessageOption;
  }
});
Object.defineProperty(arg5, "ReflectionTypeCheck", {
  enumerable: true,
  get() {
    return ReflectionTypeCheck.ReflectionTypeCheck;
  }
});
Object.defineProperty(arg5, "reflectionCreate", {
  enumerable: true,
  get() {
    return reflectionCreate.reflectionCreate;
  }
});
Object.defineProperty(arg5, "reflectionScalarDefault", {
  enumerable: true,
  get() {
    return reflectionScalarDefault.reflectionScalarDefault;
  }
});
Object.defineProperty(arg5, "reflectionMergePartial", {
  enumerable: true,
  get() {
    return reflectionMergePartial.reflectionMergePartial;
  }
});
Object.defineProperty(arg5, "reflectionEquals", {
  enumerable: true,
  get() {
    return primitiveEq.reflectionEquals;
  }
});
Object.defineProperty(arg5, "ReflectionBinaryReader", {
  enumerable: true,
  get() {
    return ReflectionBinaryReader.ReflectionBinaryReader;
  }
});
Object.defineProperty(arg5, "ReflectionBinaryWriter", {
  enumerable: true,
  get() {
    return ReflectionBinaryWriter.ReflectionBinaryWriter;
  }
});
Object.defineProperty(arg5, "ReflectionJsonReader", {
  enumerable: true,
  get() {
    return ReflectionJsonReader.ReflectionJsonReader;
  }
});
Object.defineProperty(arg5, "ReflectionJsonWriter", {
  enumerable: true,
  get() {
    return ReflectionJsonWriter.ReflectionJsonWriter;
  }
});
Object.defineProperty(arg5, "containsMessageType", {
  enumerable: true,
  get() {
    return containsMessageType.containsMessageType;
  }
});
Object.defineProperty(arg5, "isOneofGroup", {
  enumerable: true,
  get() {
    return isOneofGroup.isOneofGroup;
  }
});
Object.defineProperty(arg5, "setOneofValue", {
  enumerable: true,
  get() {
    return isOneofGroup.setOneofValue;
  }
});
Object.defineProperty(arg5, "getOneofValue", {
  enumerable: true,
  get() {
    return isOneofGroup.getOneofValue;
  }
});
Object.defineProperty(arg5, "clearOneofValue", {
  enumerable: true,
  get() {
    return isOneofGroup.clearOneofValue;
  }
});
Object.defineProperty(arg5, "getSelectedOneofValue", {
  enumerable: true,
  get() {
    return isOneofGroup.getSelectedOneofValue;
  }
});
Object.defineProperty(arg5, "listEnumValues", {
  enumerable: true,
  get() {
    return isEnumObject.listEnumValues;
  }
});
Object.defineProperty(arg5, "listEnumNames", {
  enumerable: true,
  get() {
    return isEnumObject.listEnumNames;
  }
});
Object.defineProperty(arg5, "listEnumNumbers", {
  enumerable: true,
  get() {
    return isEnumObject.listEnumNumbers;
  }
});
Object.defineProperty(arg5, "isEnumObject", {
  enumerable: true,
  get() {
    return isEnumObject.isEnumObject;
  }
});
Object.defineProperty(arg5, "lowerCamelCase", {
  enumerable: true,
  get() {
    return lowerCamelCase.lowerCamelCase;
  }
});
Object.defineProperty(arg5, "assert", {
  enumerable: true,
  get() {
    return assert.assert;
  }
});
Object.defineProperty(arg5, "assertNever", {
  enumerable: true,
  get() {
    return assert.assertNever;
  }
});
Object.defineProperty(arg5, "assertInt32", {
  enumerable: true,
  get() {
    return assert.assertInt32;
  }
});
Object.defineProperty(arg5, "assertUInt32", {
  enumerable: true,
  get() {
    return assert.assertUInt32;
  }
});
Object.defineProperty(arg5, "assertFloat32", {
  enumerable: true,
  get() {
    return assert.assertFloat32;
  }
});