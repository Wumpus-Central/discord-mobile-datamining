// === Module 10821: theme_aware_asset ===

// Module 10821 (theme_aware_asset)
import _mod1187 from "module_1187" /* 1187 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1187).MessageType;
class ThemeAwareAsset$Type extends MessageType {
  constructor() {
    items = [, , , ];
    items[0] = { no: 1, name: "light_url", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "dark_url", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "light_static_url", kind: "scalar", T: 9 };
    items[3] = { no: 4, name: "dark_static_url", kind: "scalar", T: 9 };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.ThemeAwareAsset", items, new.target);
    return tmp1;
  }
}
const prototype = ThemeAwareAsset$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = { lightUrl: "", darkUrl: "", lightStaticUrl: "", darkStaticUrl: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1187.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1187.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1187;
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
        obj.lightUrl = pos.string();
      } else if (2 === tmp5) {
        obj.darkUrl = pos.string();
      } else if (3 === tmp5) {
        obj.lightStaticUrl = pos.string();
      } else if (4 === tmp5) {
        obj.darkStaticUrl = pos.string();
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
              onRead = _mod1187.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(lightUrl, tag, writeUnknownFields) {
  if ("" !== lightUrl.lightUrl) {
    tag.tag(1, _mod1187.WireType.LengthDelimited).string(lightUrl.lightUrl);
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
  }
  if ("" !== lightUrl.darkUrl) {
    tag.tag(2, _mod1187.WireType.LengthDelimited).string(lightUrl.darkUrl);
    const tagResult1 = tag.tag(2, _mod1187.WireType.LengthDelimited);
  }
  if ("" !== lightUrl.lightStaticUrl) {
    tag.tag(3, _mod1187.WireType.LengthDelimited).string(lightUrl.lightStaticUrl);
    const tagResult2 = tag.tag(3, _mod1187.WireType.LengthDelimited);
  }
  if ("" !== lightUrl.darkStaticUrl) {
    tag.tag(4, _mod1187.WireType.LengthDelimited).string(lightUrl.darkStaticUrl);
    const tagResult3 = tag.tag(4, _mod1187.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, lightUrl, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "light_url", kind: "scalar", T: 9 }, { no: 2, name: "dark_url", kind: "scalar", T: 9 }, { no: 3, name: "light_static_url", kind: "scalar", T: 9 }, { no: 4, name: "dark_static_url", kind: "scalar", T: 9 }];
const prototype1 = new prototype("discord_protos.premium_marketing.v1.ThemeAwareAsset", items, tmp, ThemeAwareAsset$Type, prototype, items, fn);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/theme_aware_asset.tsx");

export const ThemeAwareAsset = prototype1;