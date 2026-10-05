// _runtime/01210_MessageType.js
import typeofJsonValue from "01199_typeofJsonValue.js";
import binaryReadOptions from "01203_binaryReadOptions.js";
import binaryWriteOptions from "01206_binaryWriteOptions.js";
import jsonReadOptions from "01208_jsonReadOptions.js";
import ScalarType from "01211_ScalarType.js";
import ReflectionTypeCheck from "01213_ReflectionTypeCheck.js";
import ReflectionJsonReader from "01215_ReflectionJsonReader.js";
import ReflectionJsonWriter from "01217_ReflectionJsonWriter.js";
import ReflectionBinaryReader from "01218_ReflectionBinaryReader.js";
import ReflectionBinaryWriter from "01220_ReflectionBinaryWriter.js";
import reflectionCreate from "01221_reflectionCreate.js";
import reflectionMergePartial from "01222_reflectionMergePartial.js";
import reflectionEquals from "01223_reflectionEquals.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class MessageType {
  constructor(typeName, arr, arg2) {
    const self = this;
    let obj = arg2;
    _classCallCheck(this, MessageType);
    this.defaultCheckDepth = 16;
    this.typeName = typeName;
    this.fields = arr.map(ScalarType.normalizeFieldInfo);
    if (null == arg2) {
      obj = {};
    }
    self.options = obj;
    const reflectionTypeCheck = new ReflectionTypeCheck.ReflectionTypeCheck(self);
    self.refTypeCheck = reflectionTypeCheck;
    const reflectionJsonReader = new ReflectionJsonReader.ReflectionJsonReader(self);
    self.refJsonReader = reflectionJsonReader;
    const reflectionJsonWriter = new ReflectionJsonWriter.ReflectionJsonWriter(self);
    self.refJsonWriter = reflectionJsonWriter;
    const reflectionBinaryReader = new ReflectionBinaryReader.ReflectionBinaryReader(self);
    self.refBinReader = reflectionBinaryReader;
    const reflectionBinaryWriter = new ReflectionBinaryWriter.ReflectionBinaryWriter(self);
    self.refBinWriter = reflectionBinaryWriter;
  }
}
const entry = {
  key: "create",
  value: function create(arr) {
    const obj = reflectionCreate;
    const reflectionCreateResult = obj.reflectionCreate(this);
    if (undefined !== arr) {
      const tmpResult = reflectionMergePartial;
      const result = tmpResult.reflectionMergePartial(this, reflectionCreateResult, arr);
    }
    return reflectionCreateResult;
  },
};
const items = [
  entry,
  {
    key: "clone",
    value: function clone(arr) {
      const obj2 = this.create();
      const obj = reflectionMergePartial;
      const result = obj.reflectionMergePartial(this, obj2, arr);
      return obj2;
    },
  },
  {
    key: "equals",
    value: function equals(arg0, arg1) {
      const obj = reflectionEquals;
      return obj.reflectionEquals(this, arg0, arg1);
    },
  },
  {
    key: "is",
    value: function is(arg0) {
      const self = this;
      let defaultCheckDepth = arg1;
      if (arg1 === undefined) {
        defaultCheckDepth = self.defaultCheckDepth;
      }
      const refTypeCheck = self.refTypeCheck;
      return refTypeCheck.is(arg0, defaultCheckDepth, false);
    },
  },
  {
    key: "isAssignable",
    value: function isAssignable(arg0, arg1) {
      const self = this;
      let defaultCheckDepth = arg1;
      if (arg1 === undefined) {
        defaultCheckDepth = self.defaultCheckDepth;
      }
      const refTypeCheck = self.refTypeCheck;
      return refTypeCheck.is(arg0, defaultCheckDepth, true);
    },
  },
  {
    key: "mergePartial",
    value: function mergePartial(EmojiFrecency, arr) {
      const obj = reflectionMergePartial;
      const result = obj.reflectionMergePartial(this, EmojiFrecency, arr);
    },
  },
  {
    key: "fromBinary",
    value: function fromBinary(toBinaryResult, BINARY_READ_OPTIONS) {
      const obj = binaryReadOptions;
      const binaryReadOptionsResult = obj.binaryReadOptions(BINARY_READ_OPTIONS);
      return this.internalBinaryRead(
        binaryReadOptionsResult.readerFactory(toBinaryResult),
        toBinaryResult.byteLength,
        binaryReadOptionsResult,
      );
    },
  },
  {
    key: "fromJson",
    value: function fromJson(arg0, arg1) {
      const internalJsonRead = this.internalJsonRead;
      const obj = jsonReadOptions;
      return internalJsonRead(arg0, obj.jsonReadOptions(arg1));
    },
  },
  {
    key: "fromJsonString",
    value: function fromJsonString(arg0, arg1) {
      return this.fromJson(JSON.parse(arg0), arg1);
    },
  },
  {
    key: "toJson",
    value: function toJson(arg0, prettySpaces) {
      const internalJsonWrite = this.internalJsonWrite;
      const obj = jsonReadOptions;
      return internalJsonWrite(arg0, obj.jsonWriteOptions(prettySpaces));
    },
  },
  {
    key: "toJsonString",
    value: function toJsonString(arg0, prettySpaces) {
      prettySpaces = undefined;
      const _JSON = JSON;
      const toJsonResult = this.toJson(arg0, prettySpaces);
      if (null != prettySpaces) {
        prettySpaces = prettySpaces.prettySpaces;
      }
      let num = 0;
      if (null !== prettySpaces) {
        num = 0;
        if (undefined !== prettySpaces) {
          num = prettySpaces;
        }
      }
      return stringify(toJsonResult, null, num);
    },
  },
  {
    key: "toBinary",
    value: function toBinary(favoriteGifs, arg1) {
      const obj = binaryWriteOptions;
      const binaryWriteOptionsResult = obj.binaryWriteOptions(arg1);
      const internalBinaryWriteResult = this.internalBinaryWrite(
        favoriteGifs,
        binaryWriteOptionsResult.writerFactory(),
        binaryWriteOptionsResult,
      );
      return internalBinaryWriteResult.finish();
    },
  },
  {
    key: "internalJsonRead",
    value: function internalJsonRead(obj, arg1, arg2) {
      const self = this;
      if (null !== obj) {
        if (typeof obj === "object") {
          const _Array = Array;
          if (!Array.isArray(obj)) {
            let obj2 = arg2;
            if (null == arg2) {
              obj2 = self.create();
            }
            const refJsonReader = self.refJsonReader;
            refJsonReader.read(obj, obj2, arg1);
            return obj2;
          }
        }
      }
      const typeName = self.typeName;
      obj = typeofJsonValue;
      const error = new Error("Unable to parse message " + typeName + " from JSON " + obj.typeofJsonValue(obj) + ".");
      throw error;
    },
  },
  {
    key: "internalJsonWrite",
    value: function internalJsonWrite(arg0, arg1) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.write(arg0, arg1);
    },
  },
  {
    key: "internalBinaryWrite",
    value: function internalBinaryWrite(arg0, arg1, arg2) {
      const refBinWriter = this.refBinWriter;
      refBinWriter.write(arg0, arg1, arg2);
      return arg1;
    },
  },
  {
    key: "internalBinaryRead",
    value: function internalBinaryRead(arg0, arg1, arg2, arg3) {
      const self = this;
      let obj = arg3;
      if (null == arg3) {
        obj = self.create();
      }
      const refBinReader = self.refBinReader;
      refBinReader.read(arg0, obj, arg2, arg1);
      return obj;
    },
  },
];
const MessageType_export = _createClass(MessageType, items);

export { MessageType_export as MessageType };
