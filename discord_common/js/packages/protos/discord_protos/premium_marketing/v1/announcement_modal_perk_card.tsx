// === Module 9208: announcement_modal_perk_card ===

// Module 9208 (announcement_modal_perk_card)
import _mod1196 from "module_1196" /* 1196 */;
import localized_string from "localized_string" /* 9170 */;
import theme_aware_asset from "theme_aware_asset" /* 9174 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const AnnouncementModalPerkIcon = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", NITRO_WHEEL: 1, [1]: "NITRO_WHEEL", XBOX: 2, [2]: "XBOX", GAME_CONTROLLER: 3, [3]: "GAME_CONTROLLER", ORBS: 4, [4]: "ORBS", SHOP: 5, [5]: "SHOP", GIFT: 6, [6]: "GIFT", BOOST_GEM: 7, [7]: "BOOST_GEM", REACTION: 8, [8]: "REACTION", STICKER: 9, [9]: "STICKER", UPLOAD: 10, [10]: "UPLOAD", PAINT_PALETTE: 11, [11]: "PAINT_PALETTE", SCREEN_STREAM: 12, [12]: "SCREEN_STREAM", SOUNDBOARD: 13, [13]: "SOUNDBOARD", SPARKLES: 14, [14]: "SPARKLES" };
const MessageType = fn(1196).MessageType;
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
  _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1196.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1196;
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
              onRead = _mod1196.UnknownFieldHandler.onRead;
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
    const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.titleLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(asset.titleLocalized, tag.tag(2, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(asset.titleLocalized, tag.tag(2, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (asset.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== asset.title) {
    tag.tag(4, _mod1196.WireType.LengthDelimited).string(asset.title);
    const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
  }
  if ("" !== asset.body) {
    tag.tag(5, _mod1196.WireType.LengthDelimited).string(asset.body);
    const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1196.UnknownFieldHandler.onWrite;
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
  {
    no: 2,
    name: "title_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  {
    no: 3,
    name: "body_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  { no: 4, name: "title", kind: "scalar", T: 9 },
  { no: 5, name: "body", kind: "scalar", T: 9 }
];
const MessageType2 = fn(1196).MessageType;
class AnnouncementModalIconPerkCard$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 6,
      name: "icon",
      kind: "enum",
      T() {
            items = ["discord_protos.premium_marketing.v1.AnnouncementModalPerkIcon", AnnouncementModalPerkIcon, "ANNOUNCEMENT_MODAL_PERK_ICON_"];
            return items;
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
    tmp1 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalIconPerkCard", items, T);
    return tmp1;
  }
}
const prototype2 = AnnouncementModalIconPerkCard$Type.prototype;
prototype2["create"] = function create(partialSettings) {
  const obj = { icon: 0, title: "", body: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1196.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1196;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
      if (6 === tmp5) {
        obj.icon = pos.int32();
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
              onRead = _mod1196.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(icon, tag, writeUnknownFields) {
  if (0 !== icon.icon) {
    tag.tag(6, _mod1196.WireType.Varint).int32(icon.icon);
    const tagResult = tag.tag(6, _mod1196.WireType.Varint);
  }
  if (icon.titleLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(icon.titleLocalized, tag.tag(2, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(icon.titleLocalized, tag.tag(2, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (icon.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(icon.bodyLocalized, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(icon.bodyLocalized, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== icon.title) {
    tag.tag(4, _mod1196.WireType.LengthDelimited).string(icon.title);
    const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
  }
  if ("" !== icon.body) {
    tag.tag(5, _mod1196.WireType.LengthDelimited).string(icon.body);
    const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1196.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, icon, tag);
  }
  return tag;
};
const items1 = [
  {
    no: 6,
    name: "icon",
    kind: "enum",
    T() {
      items = ["discord_protos.premium_marketing.v1.AnnouncementModalPerkIcon", AnnouncementModalPerkIcon, "ANNOUNCEMENT_MODAL_PERK_ICON_"];
      return items;
    }
  },
,
,
,

];
const obj4 = { no: 2, name: "title_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).LocalizedString;
  }
}
obj4.T = T;
items1[1] = obj4;
items1[2] = {
  no: 3,
  name: "body_localized",
  kind: "message",
  T() {
    return require("localized_string").LocalizedString;
  }
};
items1[3] = { no: 4, name: "title", kind: "scalar", T: 9 };
items1[4] = { no: 5, name: "body", kind: "scalar", T: 9 };
let obj2 = {
  no: 1,
  name: "asset",
  kind: "message",
  T() {
    return require("theme_aware_asset").ThemeAwareAsset;
  }
};
const obj3 = {
  no: 6,
  name: "icon",
  kind: "enum",
  T() {
    items = ["discord_protos.premium_marketing.v1.AnnouncementModalPerkIcon", AnnouncementModalPerkIcon, "ANNOUNCEMENT_MODAL_PERK_ICON_"];
    return items;
  }
};
let tmp4 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalPerkCard", items, tmp3, "create", "internalBinaryRead", tmp2, "internalBinaryWrite", AnnouncementModalPerkCard$Type, tmp, fn);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_perk_card.tsx");

export { AnnouncementModalPerkIcon };
export const AnnouncementModalPerkCard = tmp4;
export const AnnouncementModalIconPerkCard = new "internalBinaryWrite"("discord_protos.premium_marketing.v1.AnnouncementModalIconPerkCard", items1, tmp3, "create", T, AnnouncementModalIconPerkCard$Type, "internalBinaryWrite", items1, undefined, fn, dependencyMap, AnnouncementModalPerkIcon);