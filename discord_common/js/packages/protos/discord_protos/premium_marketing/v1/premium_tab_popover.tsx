// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab_popover.tsx
import _mod1307 from "../../../../../../../_runtime/metro/01307__.js";
import create from "../../common/v1/localized_string.tsx";
import create2 from "help_article.tsx";
import create3 from "cta_button.tsx";
import create4 from "theme_aware_asset.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import { MessageType } from "../../../../../../../_runtime/metro/01307__.js";

require = fn;
class PremiumTabPopover$Type extends MessageType {
  constructor() {
    items = [, , , , , , , ];
    items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "asset",
      kind: "message",
      T() {
            return callback(7643).ThemeAwareAsset;
          }
    };
    items[3] = {
      no: 4,
      name: "button",
      kind: "message",
      T() {
            return callback(7635).CTAButton;
          }
    };
    items[4] = { no: 5, name: "help_article_id", kind: "scalar", T: 9 };
    items[5] = {
      no: 6,
      name: "help_article",
      kind: "message",
      T() {
            return callback(7634).HelpArticle;
          }
    };
    obj = { no: 7, name: "header_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[6] = obj;
    items[7] = {
      no: 8,
      name: "body_localized",
      kind: "message",
      T() {
            return callback(7633).LocalizedString;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.PremiumTabPopover", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = PremiumTabPopover$Type.prototype;
prototype["create"] = function create(arr) {
  const _Object = Object;
  const obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1307.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1307.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1307;
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
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.header = pos.string();
      } else if (2 === tmp5) {
        obj.body = pos.string();
      } else if (3 === tmp5) {
        let ThemeAwareAsset = create4.ThemeAwareAsset;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
      } else if (4 === tmp5) {
        let CTAButton = create3.CTAButton;
        obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
      } else if (5 === tmp5) {
        obj.helpArticleId = pos.string();
      } else if (6 === tmp5) {
        let HelpArticle = create2.HelpArticle;
        obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
      } else if (7 === tmp5) {
        let LocalizedString2 = create.LocalizedString;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
      } else if (8 === tmp5) {
        let LocalizedString = create.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1307.UnknownFieldHandler.onRead;
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
    tag.tag(1, _mod1307.WireType.LengthDelimited).string(header.header);
    const tagResult = tag.tag(1, _mod1307.WireType.LengthDelimited);
  }
  if ("" !== header.body) {
    tag.tag(2, _mod1307.WireType.LengthDelimited).string(header.body);
    const tagResult1 = tag.tag(2, _mod1307.WireType.LengthDelimited);
  }
  if (header.asset) {
    const ThemeAwareAsset = create4.ThemeAwareAsset;
    const tagResult2 = tag.tag(3, _mod1307.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.button) {
    const CTAButton = create3.CTAButton;
    const tagResult3 = tag.tag(4, _mod1307.WireType.LengthDelimited);
    const joined1 = CTAButton.internalBinaryWrite(header.button, tag.tag(4, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = CTAButton.internalBinaryWrite(header.button, tag.tag(4, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== header.helpArticleId) {
    tag.tag(5, _mod1307.WireType.LengthDelimited).string(header.helpArticleId);
    const tagResult4 = tag.tag(5, _mod1307.WireType.LengthDelimited);
  }
  if (header.helpArticle) {
    const HelpArticle = create2.HelpArticle;
    const tagResult5 = tag.tag(6, _mod1307.WireType.LengthDelimited);
    const joined2 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(6, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(6, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.headerLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult6 = tag.tag(7, _mod1307.WireType.LengthDelimited);
    const joined3 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(7, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(7, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (header.bodyLocalized) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult7 = tag.tag(8, _mod1307.WireType.LengthDelimited);
    const joined4 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(8, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(8, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
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
      return callback(7643).ThemeAwareAsset;
    }
  },
  {
    no: 4,
    name: "button",
    kind: "message",
    T() {
      return callback(7635).CTAButton;
    }
  },
  { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
  {
    no: 6,
    name: "help_article",
    kind: "message",
    T() {
      return callback(7634).HelpArticle;
    }
  },
,

];
let obj = { no: 7, name: "header_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[6] = obj;
items[7] = {
  no: 8,
  name: "body_localized",
  kind: "message",
  T() {
    return callback(7633).LocalizedString;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.PremiumTabPopover", items, tmp, T, PremiumTabPopover$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("obj132").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab_popover.tsx");

export const PremiumTabPopover = prototype;