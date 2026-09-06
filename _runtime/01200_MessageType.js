// === Module 1200: MessageType ===

// Module 1200 (MessageType)
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const MessageType = require;
class MessageType {
  constructor(arg0, arg1, arg2) {
    self = this;
    obj = importDefault;
    tmp = closure_2(this, MessageType);
    this.defaultCheckDepth = 16;
    this.typeName = global;
    tmp2 = MessageType;
    tmp3 = closure_1;
    this.fields = require.map(require("RepeatType").normalizeFieldInfo);
    if (null == importDefault) {
      obj = {};
    }
    self.options = obj;
    reflectionTypeCheck = new require("ReflectionTypeCheck").ReflectionTypeCheck(self);
    self.refTypeCheck = reflectionTypeCheck;
    reflectionJsonReader = new require("ReflectionJsonReader").ReflectionJsonReader(self);
    self.refJsonReader = reflectionJsonReader;
    reflectionJsonWriter = new require("ReflectionJsonWriter").ReflectionJsonWriter(self);
    self.refJsonWriter = reflectionJsonWriter;
    reflectionBinaryReader = new require("ReflectionBinaryReader").ReflectionBinaryReader(self);
    self.refBinReader = reflectionBinaryReader;
    reflectionBinaryWriter = new require("ReflectionBinaryWriter").ReflectionBinaryWriter(self);
    self.refBinWriter = reflectionBinaryWriter;
    return;
  }
}
const items = [
  {
    key: "create",
    value: function create(arr) {
      const reflectionCreateResult = MessageType(1211).reflectionCreate(this);
      if (undefined !== arr) {
        const result = MessageType(1212).reflectionMergePartial(this, reflectionCreateResult, arr);
        const tmpResult = MessageType(1212);
      }
      return reflectionCreateResult;
    }
  },
  {
    key: "clone",
    value: function clone(arr) {
      let obj = this.create();
      obj = MessageType(1212);
      const result = obj.reflectionMergePartial(this, obj, arr);
      return obj;
    }
  },
  {
    key: "equals",
    value: function equals(arg0, arg1) {
      return MessageType(1213).reflectionEquals(this, arg0, arg1);
    }
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
    }
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
    }
  },
  {
    key: "mergePartial",
    value: function mergePartial(reflectionCreateResult, arr) {
      const result = MessageType(1212).reflectionMergePartial(this, reflectionCreateResult, arr);
    }
  },
  {
    key: "fromBinary",
    value: function fromBinary(toBinaryResult, BINARY_READ_OPTIONS) {
      const binaryReadOptionsResult = MessageType(1193).binaryReadOptions(BINARY_READ_OPTIONS);
      return this.internalBinaryRead(binaryReadOptionsResult.readerFactory(toBinaryResult), toBinaryResult.byteLength, binaryReadOptionsResult);
    }
  },
  {
    key: "fromJson",
    value: function fromJson(arg0, arg1) {
      return this.internalJsonRead(arg0, MessageType(1198).jsonReadOptions(arg1));
    }
  },
  {
    key: "fromJsonString",
    value: function fromJsonString(arg0, arg1) {
      return this.fromJson(JSON.parse(arg0), arg1);
    }
  },
  {
    key: "toJson",
    value: function toJson(arg0, prettySpaces) {
      return this.internalJsonWrite(arg0, MessageType(1198).jsonWriteOptions(prettySpaces));
    }
  },
  {
    key: "toJsonString",
    value: function toJsonString(arg0, prettySpaces) {
      prettySpaces = undefined;
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
      return JSON.stringify(this.toJson(arg0, prettySpaces), null, num);
    }
  },
  {
    key: "toBinary",
    value: function toBinary(favoriteGifs) {
      const binaryWriteOptionsResult = MessageType(1196).binaryWriteOptions(arg1);
      const obj = MessageType(1196);
      return this.internalBinaryWrite(favoriteGifs, binaryWriteOptionsResult.writerFactory(), binaryWriteOptionsResult).finish();
    }
  },
  {
    key: "internalJsonRead",
    value: function internalJsonRead(obj) {
      const self = this;
      if (null !== obj) {
        if (typeof obj === "object") {
          const _Array = Array;
          if (!Array.isArray(obj)) {
            obj = arg2;
            if (null == arg2) {
              obj = self.create();
            }
            const refJsonReader = self.refJsonReader;
            refJsonReader.read(obj, obj, arg1);
            return obj;
          }
        }
      }
      obj = MessageType(1189);
      error = new Error("Unable to parse message " + self.typeName + " from JSON " + obj.typeofJsonValue(obj) + ".");
      throw error;
    }
  },
  {
    key: "internalJsonWrite",
    value: function internalJsonWrite(arg0, arg1) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.write(arg0, arg1);
    }
  },
  {
    key: "internalBinaryWrite",
    value: function internalBinaryWrite(arg0, arg1, arg2) {
      const refBinWriter = this.refBinWriter;
      refBinWriter.write(arg0, arg1, arg2);
      return arg1;
    }
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
    }
  }
];

export const MessageType = _createClass(MessageType, items);