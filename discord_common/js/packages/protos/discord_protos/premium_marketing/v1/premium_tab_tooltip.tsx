// === Module 10138: premium_tab_tooltip ===

// Module 10138 (premium_tab_tooltip)
import _mod1187 from "module_1187" /* 1187 */;
import localized_string from "localized_string" /* 10122 */;
import theme_aware_asset from "theme_aware_asset" /* 10132 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1187).MessageType;
class PremiumTabTooltip$Type extends MessageType {
  constructor() {
    items = [, , , , ];
    items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "asset",
      kind: "message",
      T() {
            return require("theme_aware_asset").ThemeAwareAsset;
          }
    };
    obj = { no: 4, name: "header_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    obj.T = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "body_localized",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.PremiumTabTooltip", items, T);
    return tmp1;
  }
}
const prototype = PremiumTabTooltip$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = { header: "", body: "" };
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
        obj.header = pos.string();
      } else if (2 === tmp5) {
        obj.body = pos.string();
      } else if (3 === tmp5) {
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (4 === tmp5) {
        let LocalizedString2 = localized_string.LocalizedString;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
      } else if (5 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(header, tag, writeUnknownFields) {
  if ("" !== header.header) {
    tag.tag(1, _mod1187.WireType.LengthDelimited).string(header.header);
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
  }
  if ("" !== header.body) {
    tag.tag(2, _mod1187.WireType.LengthDelimited).string(header.body);
    const tagResult1 = tag.tag(2, _mod1187.WireType.LengthDelimited);
  }
  if (header.asset) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult2 = tag.tag(3, _mod1187.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1187.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(4, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(4, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult4 = tag.tag(5, _mod1187.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(5, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(5, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, header, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "header", kind: "scalar", T: 9 },
  { no: 2, name: "body", kind: "scalar", T: 9 },
  {
    no: 3,
    name: "asset",
    kind: "message",
    T() {
      return require("theme_aware_asset").ThemeAwareAsset;
    }
  },
,

];
let obj = { no: 4, name: "header_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).LocalizedString;
  }
}
obj.T = T;
items[3] = obj;
items[4] = {
  no: 5,
  name: "body_localized",
  kind: "message",
  T() {
    return require("localized_string").LocalizedString;
  }
};
const prototype1 = new prototype("discord_protos.premium_marketing.v1.PremiumTabTooltip", items, tmp, T, PremiumTabTooltip$Type, prototype, items);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab_tooltip.tsx");

export const PremiumTabTooltip = prototype1;