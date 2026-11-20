// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/nitro_home_section_header.tsx
import _mod1196 from "../../../../../../../_runtime/metro/01196__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import help_article from "help_article.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1196).MessageType;
class NitroHomeSectionHeader$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "header_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items = [, , , ,];
    items[0] = obj;
    items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
    obj1 = { no: 3, name: "subheader_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).LocalizedString;
      }
    }
    obj1.T = T;
    items[2] = obj1;
    items[3] = { no: 4, name: "subheader", kind: "scalar", T: 9 };
    items[4] = {
      no: 5,
      name: "help_article",
      kind: "message",
      T() {
        return require("help_article").HelpArticle;
      },
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.NitroHomeSectionHeader", items, T);
    return tmp1;
  }
}
const prototype = NitroHomeSectionHeader$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { header: "", subheader: "" };
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
        let LocalizedString2 = localized_string.LocalizedString;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.headerLocalized,
        );
      } else if (2 === tmp5) {
        obj.header = pos.string();
      } else if (3 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.subheaderLocalized = LocalizedString.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.subheaderLocalized,
        );
      } else if (4 === tmp5) {
        obj.subheader = pos.string();
      } else if (5 === tmp5) {
        let HelpArticle = help_article.HelpArticle;
        obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
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
prototype["internalBinaryWrite"] = function internalBinaryWrite(headerLocalized, tag, writeUnknownFields) {
  if (headerLocalized.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(
      headerLocalized.headerLocalized,
      tag.tag(1, _mod1196.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(
      headerLocalized.headerLocalized,
      tag.tag(1, _mod1196.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== headerLocalized.header) {
    tag.tag(2, _mod1196.WireType.LengthDelimited).string(headerLocalized.header);
    const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
  }
  if (headerLocalized.subheaderLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(
      headerLocalized.subheaderLocalized,
      tag.tag(3, _mod1196.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(
      headerLocalized.subheaderLocalized,
      tag.tag(3, _mod1196.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== headerLocalized.subheader) {
    tag.tag(4, _mod1196.WireType.LengthDelimited).string(headerLocalized.subheader);
    const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
  }
  if (headerLocalized.helpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
    const joined2 = HelpArticle.internalBinaryWrite(
      headerLocalized.helpArticle,
      tag.tag(5, _mod1196.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = HelpArticle.internalBinaryWrite(
      headerLocalized.helpArticle,
      tag.tag(5, _mod1196.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1196.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, headerLocalized, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "header_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  { no: 2, name: "header", kind: "scalar", T: 9 },
  ,
  ,
];
let obj2 = { no: 3, name: "subheader_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[2]).LocalizedString;
  }
}
obj2.T = T;
items[2] = obj2;
items[3] = { no: 4, name: "subheader", kind: "scalar", T: 9 };
items[4] = {
  no: 5,
  name: "help_article",
  kind: "message",
  T() {
    return require("help_article").HelpArticle;
  },
};
const prototype1 = new prototype(
  "discord_protos.premium_marketing.v1.NitroHomeSectionHeader",
  items,
  tmp,
  T,
  NitroHomeSectionHeader$Type,
  prototype,
  items,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/nitro_home_section_header.tsx",
);

export const NitroHomeSectionHeader = prototype1;
