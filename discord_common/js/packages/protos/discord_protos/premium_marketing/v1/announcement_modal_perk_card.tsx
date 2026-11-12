// === Module 9600: announcement_modal_perk_card ===

// Module 9600 (announcement_modal_perk_card)
import _mod1197 from "module_1197" /* 1197 */;
import localized_string from "localized_string" /* 9563 */;
import theme_aware_asset from "theme_aware_asset" /* 9573 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1197).MessageType;
class AnnouncementModalPerkCard$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "asset",
      kind: "message",
      T() {
            return require("theme_aware_asset").ThemeAwareAsset;
          }
    };
    items = [, , , , ];
    items[0] = obj;
    obj1 = { no: 2, name: "title_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    obj1.T = T;
    items[1] = obj1;
    items[2] = {
      no: 3,
      name: "body_localized",
      kind: "message",
      T() {
            return require("localized_string").LocalizedString;
          }
    };
    items[3] = { no: 4, name: "title", kind: "scalar", T: 9 };
    items[4] = { no: 5, name: "body", kind: "scalar", T: 9 };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalPerkCard", items, T);
    return tmp1;
  }
}
const prototype = AnnouncementModalPerkCard$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { title: "", body: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1197.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1197.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1197;
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
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (2 === tmp5) {
        let LocalizedString2 = localized_string.LocalizedString;
        obj.titleLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.titleLocalized);
      } else if (3 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (4 === tmp5) {
        obj.title = pos.string();
      } else if (5 === tmp5) {
        obj.body = pos.string();
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
              onRead = _mod1197.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(asset, tag, writeUnknownFields) {
  if (asset.asset) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.titleLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(asset.titleLocalized, tag.tag(2, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(asset.titleLocalized, tag.tag(2, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1197.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== asset.title) {
    tag.tag(4, _mod1197.WireType.LengthDelimited).string(asset.title);
    const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
  }
  if ("" !== asset.body) {
    tag.tag(5, _mod1197.WireType.LengthDelimited).string(asset.body);
    const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1197.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, asset, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "asset",
    kind: "message",
    T() {
      return require("theme_aware_asset").ThemeAwareAsset;
    }
  },
,
,
,

];
let obj2 = { no: 2, name: "title_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).LocalizedString;
  }
}
obj2.T = T;
items[1] = obj2;
items[2] = {
  no: 3,
  name: "body_localized",
  kind: "message",
  T() {
    return require("localized_string").LocalizedString;
  }
};
items[3] = { no: 4, name: "title", kind: "scalar", T: 9 };
items[4] = { no: 5, name: "body", kind: "scalar", T: 9 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.AnnouncementModalPerkCard", items, tmp, T, AnnouncementModalPerkCard$Type, prototype, items);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_perk_card.tsx");

export const AnnouncementModalPerkCard = prototype1;