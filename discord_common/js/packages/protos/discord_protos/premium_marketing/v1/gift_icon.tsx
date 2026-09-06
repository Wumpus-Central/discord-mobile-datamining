// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_icon.tsx
import _mod1188 from "../../../../../../../_runtime/metro/01188__.js";
import gradient from "gradient.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1188).MessageType;
class GiftIcon$Type extends MessageType {
  constructor() {
    items = [, , ,];
    items[0] = { no: 1, name: "box_animation_url", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 };
    items[3] = {
      no: 4,
      name: "gradient",
      kind: "message",
      T() {
        return gradient.Gradient;
      },
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.GiftIcon", items, new.target);
    return tmp;
  }
}
let prototype = GiftIcon$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { boxAnimationUrl: "", trinketAnimationUrl: "", trinketGlowAnimationUrl: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = _slicedToArray(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.boxAnimationUrl = pos.string();
      } else if (2 === tmp5) {
        obj.trinketAnimationUrl = pos.string();
      } else if (3 === tmp5) {
        obj.trinketGlowAnimationUrl = pos.string();
      } else if (4 === tmp5) {
        let Gradient = gradient.Gradient;
        obj.gradient = Gradient.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.gradient);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(boxAnimationUrl, tag, writeUnknownFields) {
  if ("" !== boxAnimationUrl.boxAnimationUrl) {
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(boxAnimationUrl.boxAnimationUrl);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== boxAnimationUrl.trinketAnimationUrl) {
    tag.tag(2, _mod1188.WireType.LengthDelimited).string(boxAnimationUrl.trinketAnimationUrl);
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== boxAnimationUrl.trinketGlowAnimationUrl) {
    tag.tag(3, _mod1188.WireType.LengthDelimited).string(boxAnimationUrl.trinketGlowAnimationUrl);
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
  }
  if (boxAnimationUrl.gradient) {
    const Gradient = gradient.Gradient;
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
    const joined = Gradient.internalBinaryWrite(
      boxAnimationUrl.gradient,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Gradient.internalBinaryWrite(
      boxAnimationUrl.gradient,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, boxAnimationUrl, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "box_animation_url", kind: "scalar", T: 9 },
  { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 },
  { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 },
  {
    no: 4,
    name: "gradient",
    kind: "message",
    T() {
      return gradient.Gradient;
    },
  },
];
prototype = new prototype(
  "discord_protos.premium_marketing.v1.GiftIcon",
  items,
  tmp,
  GiftIcon$Type,
  prototype,
  items,
  fn,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_icon.tsx",
);

export const GiftIcon = prototype;
