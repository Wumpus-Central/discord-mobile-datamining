// === Module 10804: help_article ===

// Module 10804 (help_article)
import _mod1187 from "module_1187" /* 1187 */;
import localized_string from "localized_string" /* 10803 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1187).MessageType;
class HelpArticle$Type extends MessageType {
  constructor() {
    items = [, , ];
    items[0] = { no: 1, name: "id", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "link_text", kind: "scalar", T: 9 };
    items[2] = {
      no: 3,
      name: "link_text_localized",
      kind: "message",
      T() {
            return localized_string.LocalizedString;
          }
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.HelpArticle", items, new.target);
    return tmp1;
  }
}
const prototype = HelpArticle$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = { id: "", linkText: "" };
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
        obj.id = pos.string();
      } else if (2 === tmp5) {
        obj.linkText = pos.string();
      } else if (3 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.linkTextLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.linkTextLocalized);
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(id, tag, writeUnknownFields) {
  if ("" !== id.id) {
    tag.tag(1, _mod1187.WireType.LengthDelimited).string(id.id);
    const tagResult = tag.tag(1, _mod1187.WireType.LengthDelimited);
  }
  if ("" !== id.linkText) {
    tag.tag(2, _mod1187.WireType.LengthDelimited).string(id.linkText);
    const tagResult1 = tag.tag(2, _mod1187.WireType.LengthDelimited);
  }
  if (id.linkTextLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1187.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(id.linkTextLocalized, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(id.linkTextLocalized, tag.tag(3, _mod1187.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1187.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, id, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "id", kind: "scalar", T: 9 },
  { no: 2, name: "link_text", kind: "scalar", T: 9 },
  {
    no: 3,
    name: "link_text_localized",
    kind: "message",
    T() {
      return localized_string.LocalizedString;
    }
  }
];
const prototype1 = new prototype("discord_protos.premium_marketing.v1.HelpArticle", items, tmp, HelpArticle$Type, prototype, items, fn);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/help_article.tsx");

export const HelpArticle = prototype1;