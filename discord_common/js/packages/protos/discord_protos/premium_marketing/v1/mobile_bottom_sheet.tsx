// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/mobile_bottom_sheet.tsx
import _mod1307 from "../../../../../../../_runtime/metro/01307__.js";
import create from "../../common/v1/localized_string.tsx";
import create2 from "help_article.tsx";
import create3 from "cta_button.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import { MessageType } from "../../../../../../../_runtime/metro/01307__.js";

require = fn;
class MobileBottomSheet$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , ];
    items[0] = { no: 1, name: "asset_url", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "body", kind: "scalar", T: 9 };
    items[3] = { no: 4, name: "help_article_id", kind: "scalar", T: 9 };
    items[4] = {
      no: 5,
      name: "button",
      kind: "message",
      T() {
            return callback(7635).CTAButton;
          }
    };
    items[5] = {
      no: 6,
      name: "dismissible_content",
      kind: "enum",
      T() {
            const items = ["discord_protos.discord_users.v1.DismissibleContent", callback(1377).DismissibleContent];
            return items;
          }
    };
    items[6] = {
      no: 7,
      name: "help_article",
      kind: "message",
      T() {
            return callback(7634).HelpArticle;
          }
    };
    obj = { no: 8, name: "header_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[7] = obj;
    items[8] = {
      no: 9,
      name: "body_localized",
      kind: "message",
      T() {
            return callback(7633).LocalizedString;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.MobileBottomSheet", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = MobileBottomSheet$Type.prototype;
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
        obj.assetUrl = pos.string();
      } else if (2 === tmp5) {
        obj.header = pos.string();
      } else if (3 === tmp5) {
        obj.body = pos.string();
      } else if (4 === tmp5) {
        obj.helpArticleId = pos.string();
      } else if (5 === tmp5) {
        let CTAButton = create3.CTAButton;
        obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
      } else if (6 === tmp5) {
        obj.dismissibleContent = pos.int32();
      } else if (7 === tmp5) {
        let HelpArticle = create2.HelpArticle;
        obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
      } else if (8 === tmp5) {
        let LocalizedString2 = create.LocalizedString;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
      } else if (9 === tmp5) {
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(assetUrl, tag, writeUnknownFields) {
  if ("" !== assetUrl.assetUrl) {
    tag.tag(1, _mod1307.WireType.LengthDelimited).string(assetUrl.assetUrl);
    const tagResult = tag.tag(1, _mod1307.WireType.LengthDelimited);
  }
  if ("" !== assetUrl.header) {
    tag.tag(2, _mod1307.WireType.LengthDelimited).string(assetUrl.header);
    const tagResult1 = tag.tag(2, _mod1307.WireType.LengthDelimited);
  }
  if ("" !== assetUrl.body) {
    tag.tag(3, _mod1307.WireType.LengthDelimited).string(assetUrl.body);
    const tagResult2 = tag.tag(3, _mod1307.WireType.LengthDelimited);
  }
  if ("" !== assetUrl.helpArticleId) {
    tag.tag(4, _mod1307.WireType.LengthDelimited).string(assetUrl.helpArticleId);
    const tagResult3 = tag.tag(4, _mod1307.WireType.LengthDelimited);
  }
  if (assetUrl.button) {
    const CTAButton = create3.CTAButton;
    const tagResult4 = tag.tag(5, _mod1307.WireType.LengthDelimited);
    const joined = CTAButton.internalBinaryWrite(assetUrl.button, tag.tag(5, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = CTAButton.internalBinaryWrite(assetUrl.button, tag.tag(5, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (0 !== assetUrl.dismissibleContent) {
    tag.tag(6, _mod1307.WireType.Varint).int32(assetUrl.dismissibleContent);
    const tagResult5 = tag.tag(6, _mod1307.WireType.Varint);
  }
  if (assetUrl.helpArticle) {
    const HelpArticle = create2.HelpArticle;
    const tagResult6 = tag.tag(7, _mod1307.WireType.LengthDelimited);
    const joined1 = HelpArticle.internalBinaryWrite(assetUrl.helpArticle, tag.tag(7, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = HelpArticle.internalBinaryWrite(assetUrl.helpArticle, tag.tag(7, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.headerLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult7 = tag.tag(8, _mod1307.WireType.LengthDelimited);
    const joined2 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(8, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(8, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.bodyLocalized) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult8 = tag.tag(9, _mod1307.WireType.LengthDelimited);
    const joined3 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(9, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(9, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, assetUrl, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "asset_url", kind: "scalar", T: 9 },
  { no: 2, name: "header", kind: "scalar", T: 9 },
  { no: 3, name: "body", kind: "scalar", T: 9 },
  { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
  {
    no: 5,
    name: "button",
    kind: "message",
    T() {
      return callback(7635).CTAButton;
    }
  },
  {
    no: 6,
    name: "dismissible_content",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.DismissibleContent", callback(1377).DismissibleContent];
      return items;
    }
  },
  {
    no: 7,
    name: "help_article",
    kind: "message",
    T() {
      return callback(7634).HelpArticle;
    }
  },
,

];
let obj = { no: 8, name: "header_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[7] = obj;
items[8] = {
  no: 9,
  name: "body_localized",
  kind: "message",
  T() {
    return callback(7633).LocalizedString;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.MobileBottomSheet", items, tmp, T, MobileBottomSheet$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("obj132").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/mobile_bottom_sheet.tsx");

export const MobileBottomSheet = prototype;