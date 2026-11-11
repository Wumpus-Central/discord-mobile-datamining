// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_panel.tsx
import _mod1197 from "../../../../../../../_runtime/metro/01197__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import cta_button from "cta_button.tsx";
import theme_aware_asset from "theme_aware_asset.tsx";
import announcement_modal_perk_card from "announcement_modal_perk_card.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1197).MessageType;
class AnnouncementModalPanel$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "asset",
      kind: "message",
      T() {
        return require("theme_aware_asset").ThemeAwareAsset;
      },
    };
    items = [, , , , , , , , , , ,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "title_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[2] = {
      no: 3,
      name: "body_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[3] = {
      no: 4,
      name: "legalese_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[4] = { no: 5, name: "terms_url", kind: "scalar", T: 9 };
    items[5] = {
      no: 6,
      name: "button",
      kind: "message",
      T() {
        return require("cta_button").CTAButton;
      },
    };
    obj1 = { no: 7, name: "perk_title_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    obj1.T = T;
    items[6] = obj1;
    items[7] = {
      no: 8,
      name: "perk_cards",
      kind: "message",
      repeat: 1,
      T() {
        return require("announcement_modal_perk_card").AnnouncementModalPerkCard;
      },
    };
    items[8] = { no: 9, name: "title", kind: "scalar", T: 9 };
    items[9] = { no: 10, name: "body", kind: "scalar", T: 9 };
    items[10] = { no: 11, name: "legalese", kind: "scalar", T: 9 };
    items[11] = { no: 12, name: "perk_title", kind: "scalar", T: 9 };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalPanel", items, T);
    return tmp1;
  }
}
const prototype = AnnouncementModalPanel$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { termsUrl: "", perkCards: [], title: "", body: "", legalese: "", perkTitle: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1197.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1197.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1197;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, arg2, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = pos.tag();
    const tmp3 = _slicedToArray(pos.tag(), 2);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(asset, tag, writeUnknownFields) {
  if (asset.asset) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(
      asset.asset,
      tag.tag(1, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(
      asset.asset,
      tag.tag(1, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (asset.titleLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(
      asset.titleLocalized,
      tag.tag(2, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(
      asset.titleLocalized,
      tag.tag(2, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (asset.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
    const joined2 = LocalizedString2.internalBinaryWrite(
      asset.bodyLocalized,
      tag.tag(3, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(
      asset.bodyLocalized,
      tag.tag(3, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (asset.legaleseLocalized) {
    const LocalizedString3 = localized_string.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
    const joined3 = LocalizedString3.internalBinaryWrite(
      asset.legaleseLocalized,
      tag.tag(4, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult3 = LocalizedString3.internalBinaryWrite(
      asset.legaleseLocalized,
      tag.tag(4, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== asset.termsUrl) {
    tag.tag(5, _mod1197.WireType.LengthDelimited).string(asset.termsUrl);
    const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
  }
  if (asset.button) {
    const CTAButton = cta_button.CTAButton;
    const tagResult5 = tag.tag(6, _mod1197.WireType.LengthDelimited);
    const joined4 = CTAButton.internalBinaryWrite(
      asset.button,
      tag.tag(6, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult4 = CTAButton.internalBinaryWrite(
      asset.button,
      tag.tag(6, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (asset.perkTitleLocalized) {
    const LocalizedString4 = localized_string.LocalizedString;
    const tagResult6 = tag.tag(7, _mod1197.WireType.LengthDelimited);
    const joined5 = LocalizedString4.internalBinaryWrite(
      asset.perkTitleLocalized,
      tag.tag(7, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult5 = LocalizedString4.internalBinaryWrite(
      asset.perkTitleLocalized,
      tag.tag(7, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let num8 = 0;
  if (0 < asset.perkCards.length) {
    do {
      let AnnouncementModalPerkCard = announcement_modal_perk_card.AnnouncementModalPerkCard;
      let tagResult7 = tag.tag(8, _mod1197.WireType.LengthDelimited);
      let internalBinaryWriteResult6 = AnnouncementModalPerkCard.internalBinaryWrite(
        asset.perkCards[num8],
        tagResult7.fork(),
        writeUnknownFields,
      );
      let joined6 = internalBinaryWriteResult6.join();
      num8 = num8 + 1;
      length = asset.perkCards.length;
    } while (num8 < length);
  }
  if ("" !== asset.title) {
    tag.tag(9, _mod1197.WireType.LengthDelimited).string(asset.title);
    const tagResult8 = tag.tag(9, _mod1197.WireType.LengthDelimited);
  }
  if ("" !== asset.body) {
    tag.tag(10, _mod1197.WireType.LengthDelimited).string(asset.body);
    const tagResult9 = tag.tag(10, _mod1197.WireType.LengthDelimited);
  }
  if ("" !== asset.legalese) {
    tag.tag(11, _mod1197.WireType.LengthDelimited).string(asset.legalese);
    const tagResult10 = tag.tag(11, _mod1197.WireType.LengthDelimited);
  }
  if ("" !== asset.perkTitle) {
    tag.tag(12, _mod1197.WireType.LengthDelimited).string(asset.perkTitle);
    const tagResult11 = tag.tag(12, _mod1197.WireType.LengthDelimited);
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
    },
  },
  {
    no: 2,
    name: "title_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  {
    no: 3,
    name: "body_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  {
    no: 4,
    name: "legalese_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  { no: 5, name: "terms_url", kind: "scalar", T: 9 },
  {
    no: 6,
    name: "button",
    kind: "message",
    T() {
      return require("cta_button").CTAButton;
    },
  },
  ,
  ,
  ,
  ,
  ,
];
let obj2 = { no: 7, name: "perk_title_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).LocalizedString;
  }
}
obj2.T = T;
items[6] = obj2;
items[7] = {
  no: 8,
  name: "perk_cards",
  kind: "message",
  repeat: 1,
  T() {
    return require("announcement_modal_perk_card").AnnouncementModalPerkCard;
  },
};
items[8] = { no: 9, name: "title", kind: "scalar", T: 9 };
items[9] = { no: 10, name: "body", kind: "scalar", T: 9 };
items[10] = { no: 11, name: "legalese", kind: "scalar", T: 9 };
items[11] = { no: 12, name: "perk_title", kind: "scalar", T: 9 };
const prototype1 = new prototype(
  "discord_protos.premium_marketing.v1.AnnouncementModalPanel",
  items,
  tmp,
  T,
  AnnouncementModalPanel$Type,
  prototype,
  items,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_panel.tsx",
);

export const AnnouncementModalPanel = prototype1;
