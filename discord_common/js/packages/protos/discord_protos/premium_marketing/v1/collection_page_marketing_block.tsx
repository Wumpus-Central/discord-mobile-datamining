// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/collection_page_marketing_block.tsx
import _mod1197 from "../../../../../../../_runtime/metro/01197__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import cta_button from "cta_button.tsx";
import theme_aware_asset from "theme_aware_asset.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1197).MessageType;
class CollectionPageMarketingBlock$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "title_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items = [, , ,];
    items[0] = obj;
    items[1] = { no: 2, name: "title", kind: "scalar", T: 9 };
    obj1 = { no: 3, name: "art", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).ThemeAwareAsset;
      }
    }
    obj1.T = T;
    items[2] = obj1;
    items[3] = {
      no: 4,
      name: "button",
      kind: "message",
      T() {
        return require("cta_button").CTAButton;
      },
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.CollectionPageMarketingBlock", items, T);
    return tmp1;
  }
}
const prototype = CollectionPageMarketingBlock$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { title: "" };
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
        let LocalizedString = localized_string.LocalizedString;
        obj.titleLocalized = LocalizedString.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.titleLocalized,
        );
      } else if (2 === tmp5) {
        obj.title = pos.string();
      } else if (3 === tmp5) {
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.art = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.art);
      } else if (4 === tmp5) {
        let CTAButton = cta_button.CTAButton;
        obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(titleLocalized, tag, writeUnknownFields) {
  if (titleLocalized.titleLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(
      titleLocalized.titleLocalized,
      tag.tag(1, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(
      titleLocalized.titleLocalized,
      tag.tag(1, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== titleLocalized.title) {
    tag.tag(2, _mod1197.WireType.LengthDelimited).string(titleLocalized.title);
    const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
  }
  if (titleLocalized.art) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
    const joined1 = ThemeAwareAsset.internalBinaryWrite(
      titleLocalized.art,
      tag.tag(3, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = ThemeAwareAsset.internalBinaryWrite(
      titleLocalized.art,
      tag.tag(3, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (titleLocalized.button) {
    const CTAButton = cta_button.CTAButton;
    const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
    const joined2 = CTAButton.internalBinaryWrite(
      titleLocalized.button,
      tag.tag(4, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = CTAButton.internalBinaryWrite(
      titleLocalized.button,
      tag.tag(4, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1197.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, titleLocalized, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "title_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  { no: 2, name: "title", kind: "scalar", T: 9 },
  ,
];
let obj2 = { no: 3, name: "art", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).ThemeAwareAsset;
  }
}
obj2.T = T;
items[2] = obj2;
items[3] = {
  no: 4,
  name: "button",
  kind: "message",
  T() {
    return require("cta_button").CTAButton;
  },
};
const prototype1 = new prototype(
  "discord_protos.premium_marketing.v1.CollectionPageMarketingBlock",
  items,
  tmp,
  T,
  CollectionPageMarketingBlock$Type,
  prototype,
  items,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/collection_page_marketing_block.tsx",
);

export const CollectionPageMarketingBlock = prototype1;
