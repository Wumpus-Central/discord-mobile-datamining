// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gradient.tsx
import _mod1306 from "../../../../../../../_runtime/metro/01306__.js";
import closure_2 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import { MessageType } from "../../../../../../../_runtime/metro/01306__.js";

require = arg1;
class Gradient$Type extends MessageType {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 };
    items[1] = { no: 2, name: "angle", kind: "scalar", T: 2 };
    tmp = new tmp("discord_protos.premium_marketing.v1.Gradient", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = Gradient$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { colors: [], angle: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let colors = obj.colors;
        let arr = colors.push(pos.string());
      } else if (2 === tmp5) {
        obj.angle = pos.float();
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(colors, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < colors.colors.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(colors.colors[num]);
      num = num + 1;
      length = colors.colors.length;
    } while (num < length);
  }
  if (0 !== colors.angle) {
    tag.tag(2, _mod1306.WireType.Bit32).float(colors.angle);
    const tagResult1 = tag.tag(2, _mod1306.WireType.Bit32);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, colors, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 },
  { no: 2, name: "angle", kind: "scalar", T: 2 },
];
prototype = new prototype(
  "discord_protos.premium_marketing.v1.Gradient",
  items,
  tmp,
  Gradient$Type,
  prototype,
  items,
  arg1,
);
// ThrowIfThisInitialized (0x7c)
let result = require("set").fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gradient.tsx",
);

export const Gradient = prototype;
