// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_variant_1_properties.tsx
import _mod1188 from "../../../../../../../_runtime/metro/01188__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import help_article from "help_article.tsx";
import cta_button from "cta_button.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1188).MessageType;
class FeatureCard$Type extends MessageType {
  constructor() {
    items = [, , , , , , , ,];
    items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "pill", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "body", kind: "scalar", T: 9 };
    items[3] = { no: 4, name: "image_link", kind: "scalar", T: 9 };
    items[4] = { no: 5, name: "image_link_light_theme", kind: "scalar", T: 9 };
    items[5] = {
      no: 6,
      name: "header_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[6] = {
      no: 7,
      name: "pill_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    obj = { no: 8, name: "body_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).LocalizedString;
      }
    }
    obj.T = T;
    items[7] = obj;
    items[8] = {
      no: 9,
      name: "help_article",
      kind: "message",
      T() {
        return require("help_article").HelpArticle;
      },
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.FeatureCard", items, T);
    return tmp;
  }
}
const prototype = FeatureCard$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { header: "", pill: "", body: "", imageLink: "", imageLinkLightTheme: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
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
        obj.pill = pos.string();
      } else if (3 === tmp5) {
        obj.body = pos.string();
      } else if (4 === tmp5) {
        obj.imageLink = pos.string();
      } else if (5 === tmp5) {
        obj.imageLinkLightTheme = pos.string();
      } else if (6 === tmp5) {
        let LocalizedString3 = localized_string.LocalizedString;
        obj.headerLocalized = LocalizedString3.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.headerLocalized,
        );
      } else if (7 === tmp5) {
        let LocalizedString2 = localized_string.LocalizedString;
        obj.pillLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.pillLocalized);
      } else if (8 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (9 === tmp5) {
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
              onRead = _mod1188.UnknownFieldHandler.onRead;
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
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(header.header);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.pill) {
    tag.tag(2, _mod1188.WireType.LengthDelimited).string(header.pill);
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.body) {
    tag.tag(3, _mod1188.WireType.LengthDelimited).string(header.body);
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.imageLink) {
    tag.tag(4, _mod1188.WireType.LengthDelimited).string(header.imageLink);
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.imageLinkLightTheme) {
    tag.tag(5, _mod1188.WireType.LengthDelimited).string(header.imageLinkLightTheme);
    const tagResult4 = tag.tag(5, _mod1188.WireType.LengthDelimited);
  }
  if (header.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult5 = tag.tag(6, _mod1188.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.pillLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult6 = tag.tag(7, _mod1188.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(
      header.pillLocalized,
      tag.tag(7, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(
      header.pillLocalized,
      tag.tag(7, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.bodyLocalized) {
    const LocalizedString3 = localized_string.LocalizedString;
    const tagResult7 = tag.tag(8, _mod1188.WireType.LengthDelimited);
    const joined2 = LocalizedString3.internalBinaryWrite(
      header.bodyLocalized,
      tag.tag(8, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = LocalizedString3.internalBinaryWrite(
      header.bodyLocalized,
      tag.tag(8, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.helpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult8 = tag.tag(9, _mod1188.WireType.LengthDelimited);
    const joined3 = HelpArticle.internalBinaryWrite(
      header.helpArticle,
      tag.tag(9, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult3 = HelpArticle.internalBinaryWrite(
      header.helpArticle,
      tag.tag(9, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, header, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "header", kind: "scalar", T: 9 },
  { no: 2, name: "pill", kind: "scalar", T: 9 },
  { no: 3, name: "body", kind: "scalar", T: 9 },
  { no: 4, name: "image_link", kind: "scalar", T: 9 },
  { no: 5, name: "image_link_light_theme", kind: "scalar", T: 9 },
  {
    no: 6,
    name: "header_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  {
    no: 7,
    name: "pill_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  {
    no: 8,
    name: "body_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  {
    no: 9,
    name: "help_article",
    kind: "message",
    T() {
      return require("help_article").HelpArticle;
    },
  },
];
const object = new Object("discord_protos.premium_marketing.v1.FeatureCard", items, tmp5, tmp4, tmp3);
const MessageType2 = fn(1188).MessageType;
class Variant1Storage$Type extends MessageType2 {
  constructor() {
    items = [, ,];
    items[0] = {
      no: 1,
      name: "hero_art_localized_video_links_dark_theme",
      kind: "map",
      K: 9,
      V: { kind: "scalar", T: 9 },
    };
    items[1] = {
      no: 2,
      name: "hero_art_localized_video_links_light_theme",
      kind: "map",
      K: 9,
      V: { kind: "scalar", T: 9 },
    };
    items[2] = { no: 3, name: "hero_art_video_subtitle_links", kind: "map", K: 9, V: { kind: "scalar", T: 9 } };
    tmp = new tmp("discord_protos.premium_marketing.v1.Variant1Storage", items, new.target);
    return tmp;
  }
}
const prototype2 = Variant1Storage$Type.prototype;
prototype2["create"] = function create(arr) {
  let obj = {
    heroArtLocalizedVideoLinksDarkTheme: {},
    heroArtLocalizedVideoLinksLightTheme: {},
    heroArtVideoSubtitleLinks: {},
  };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
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
      if (1 === tmp5) {
        let binaryReadMap1Result = self.binaryReadMap1(obj.heroArtLocalizedVideoLinksDarkTheme, pos, readUnknownField);
      } else if (2 === tmp5) {
        let binaryReadMap2Result = self.binaryReadMap2(obj.heroArtLocalizedVideoLinksLightTheme, pos, readUnknownField);
      } else if (3 === tmp5) {
        let binaryReadMap3Result = self.binaryReadMap3(obj.heroArtVideoSubtitleLinks, pos, readUnknownField);
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
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype2["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let str;
  let str2;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = _slicedToArray(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
      let stringResult = tmp3;
      if (1 === tmp6) {
        stringResult = pos.string();
        let stringResult1 = tmp2;
      } else if (2 !== tmp6) {
        break;
      } else {
        stringResult1 = pos.string();
      }
      tmp2 = stringResult1;
      tmp3 = stringResult;
      str = stringResult1;
      str2 = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_dark_theme",
    );
    throw error;
  }
  if (str2 == null) {
    str2 = "";
  }
  if (str == null) {
    str = "";
  }
  arg0[str2] = str;
};
prototype2["binaryReadMap2"] = function binaryReadMap2(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let str;
  let str2;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = _slicedToArray(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
      let stringResult = tmp3;
      if (1 === tmp6) {
        stringResult = pos.string();
        let stringResult1 = tmp2;
      } else if (2 !== tmp6) {
        break;
      } else {
        stringResult1 = pos.string();
      }
      tmp2 = stringResult1;
      tmp3 = stringResult;
      str = stringResult1;
      str2 = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_light_theme",
    );
    throw error;
  }
  if (str2 == null) {
    str2 = "";
  }
  if (str == null) {
    str = "";
  }
  arg0[str2] = str;
};
prototype2["binaryReadMap3"] = function binaryReadMap3(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  let str;
  let str2;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = _slicedToArray(pos.tag(), 2);
      [tmp6, r10019] = tmp5;
      let stringResult = tmp3;
      if (1 === tmp6) {
        stringResult = pos.string();
        let stringResult1 = tmp2;
      } else if (2 !== tmp6) {
        break;
      } else {
        stringResult1 = pos.string();
      }
      tmp2 = stringResult1;
      tmp3 = stringResult;
      str = stringResult1;
      str2 = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_video_subtitle_links",
    );
    throw error;
  }
  if (str2 == null) {
    str2 = "";
  }
  if (str == null) {
    str = "";
  }
  arg0[str2] = str;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(
  heroArtLocalizedVideoLinksDarkTheme,
  tag,
  writeUnknownFields,
) {
  const keys = Object.keys(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksDarkTheme);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1188.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = stringResult.tag(2, _mod1188.WireType.LengthDelimited);
    let stringResult1 = tagResult2.string(
      heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksDarkTheme[nextResult],
    );
    let joined = stringResult1.join();
    continue;
  }
  const keys1 = Object.keys(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksLightTheme);
  for (const item10053 of keys1) {
    let tagResult3 = require("../../../../../../../_runtime/metro/00002__.js");
    let forkResult1 = tagResult3.fork();
    let tagResult4 = forkResult1.tag(1, _mod1188.WireType.LengthDelimited);
    let stringResult2 = tagResult4.string(item10053);
    let tagResult5 = stringResult2.tag(2, _mod1188.WireType.LengthDelimited);
    let stringResult3 = tagResult5.string(arg0.heroArtLocalizedVideoLinksLightTheme[item10053]);
    let joined1 = stringResult3.join();
    continue;
  }
  const keys2 = Object.keys(heroArtLocalizedVideoLinksDarkTheme.heroArtVideoSubtitleLinks);
  const iter2 = keys2[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tagResult6 = tag.tag(3, _mod1188.WireType.LengthDelimited);
    let forkResult2 = tagResult6.fork();
    let tagResult7 = forkResult2.tag(1, _mod1188.WireType.LengthDelimited);
    let stringResult4 = tagResult7.string(nextResult1);
    let tagResult8 = stringResult4.tag(2, _mod1188.WireType.LengthDelimited);
    let stringResult5 = tagResult8.string(heroArtLocalizedVideoLinksDarkTheme.heroArtVideoSubtitleLinks[nextResult1]);
    let joined2 = stringResult5.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, heroArtLocalizedVideoLinksDarkTheme, tag);
  }
  return tag;
};
const items1 = [
  { no: 1, name: "hero_art_localized_video_links_dark_theme", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
  { no: 2, name: "hero_art_localized_video_links_light_theme", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
  { no: 3, name: "hero_art_video_subtitle_links", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
];
tmp2 = new tmp2(
  "discord_protos.premium_marketing.v1.Variant1Storage",
  items1,
  tmp5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  Variant1Storage$Type,
  tmp2,
);
let closure_4 = tmp2;
const MessageType3 = fn(1188).MessageType;
class Subtitle$Type extends MessageType3 {
  constructor() {
    items = [, ,];
    items[0] = { no: 1, name: "link", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "locale", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "is_default", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.premium_marketing.v1.Subtitle", items, new.target);
    return tmp;
  }
}
const prototype3 = Subtitle$Type.prototype;
prototype3["create"] = function create(arr) {
  let obj = { link: "", locale: "", isDefault: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        obj.link = pos.string();
      } else if (2 === tmp5) {
        obj.locale = pos.string();
      } else if (3 === tmp5) {
        obj.isDefault = pos.bool();
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
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(link, tag, writeUnknownFields) {
  if ("" !== link.link) {
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(link.link);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== link.locale) {
    tag.tag(2, _mod1188.WireType.LengthDelimited).string(link.locale);
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
  }
  if (false !== link.isDefault) {
    tag.tag(3, _mod1188.WireType.Varint).bool(link.isDefault);
    const tagResult2 = tag.tag(3, _mod1188.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, link, tag);
  }
  return tag;
};
const items2 = [
  { no: 1, name: "link", kind: "scalar", T: 9 },
  { no: 2, name: "locale", kind: "scalar", T: 9 },
  { no: 3, name: "is_default", kind: "scalar", T: 8 },
];
const variant1StorageType = new Variant1Storage$Type(
  "discord_protos.premium_marketing.v1.Subtitle",
  items2,
  tmp5,
  tmp4,
  Subtitle$Type,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  Variant1Storage$Type,
  items2,
  tmp,
  fn,
  dependencyMap,
  object,
);
const MessageType4 = fn(1188).MessageType;
class Disclaimer$Type extends MessageType4 {
  constructor() {
    items = [, ,];
    items[0] = { no: 1, name: "disclaimer_text", kind: "scalar", T: 9 };
    obj = { no: 2, name: "disclaimer_help_article", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).HelpArticle;
      }
    }
    obj.T = T;
    items[1] = obj;
    items[2] = {
      no: 3,
      name: "disclaimer_text_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.Disclaimer", items, T);
    return tmp;
  }
}
const prototype4 = Disclaimer$Type.prototype;
prototype4["create"] = function create(arr) {
  let obj = { disclaimerText: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        obj.disclaimerText = pos.string();
      } else if (2 === tmp5) {
        let HelpArticle = help_article.HelpArticle;
        obj.disclaimerHelpArticle = HelpArticle.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.disclaimerHelpArticle,
        );
      } else if (3 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.disclaimerTextLocalized = LocalizedString.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.disclaimerTextLocalized,
        );
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
              onRead = _mod1188.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype4["internalBinaryWrite"] = function internalBinaryWrite(disclaimerText, tag, writeUnknownFields) {
  if ("" !== disclaimerText.disclaimerText) {
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(disclaimerText.disclaimerText);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  if (disclaimerText.disclaimerHelpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
    const joined = HelpArticle.internalBinaryWrite(
      disclaimerText.disclaimerHelpArticle,
      tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = HelpArticle.internalBinaryWrite(
      disclaimerText.disclaimerHelpArticle,
      tag.tag(2, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (disclaimerText.disclaimerTextLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
    const joined1 = LocalizedString.internalBinaryWrite(
      disclaimerText.disclaimerTextLocalized,
      tag.tag(3, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(
      disclaimerText.disclaimerTextLocalized,
      tag.tag(3, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, disclaimerText, tag);
  }
  return tag;
};
const items3 = [
  { no: 1, name: "disclaimer_text", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "disclaimer_help_article",
    kind: "message",
    T() {
      return require("help_article").HelpArticle;
    },
  },
  {
    no: 3,
    name: "disclaimer_text_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
];
const subtitleType = new Subtitle$Type(
  "discord_protos.premium_marketing.v1.Disclaimer",
  items3,
  tmp5,
  Disclaimer$Type,
  Subtitle$Type,
  "create",
  "internalBinaryRead",
  "internalBinaryWrite",
  items3,
  new.target,
  tmp,
  fn,
  dependencyMap,
  object,
  tmp2,
);
const MessageType5 = fn(1188).MessageType;
class AnnouncementModalVariant1Properties$Type extends MessageType5 {
  constructor() {
    items = [, , , , , , , , , , , , , , , , , ,];
    items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "subheader", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "video_link", kind: "scalar", T: 9 };
    items[3] = { no: 4, name: "help_article_id", kind: "scalar", T: 9 };
    items[4] = {
      no: 5,
      name: "feature_cards",
      kind: "message",
      repeat: 1,
      T() {
        return object;
      },
    };
    items[5] = {
      no: 6,
      name: "button",
      kind: "message",
      T() {
        return require("cta_button").CTAButton;
      },
    };
    items[6] = { no: 8, name: "hero_art_video_link_light_theme", kind: "scalar", T: 9 };
    items[7] = { no: 9, name: "hero_art_image_link_dark_theme", kind: "scalar", T: 9 };
    items[8] = { no: 10, name: "hero_art_image_link_light_theme", kind: "scalar", T: 9 };
    items[9] = { no: 11, name: "modal_top_pill", kind: "scalar", T: 9 };
    items[10] = {
      no: 13,
      name: "hero_art_video_subtitles",
      kind: "message",
      repeat: 1,
      T() {
        return variant1StorageType;
      },
    };
    items[11] = {
      no: 14,
      name: "storage",
      kind: "message",
      T() {
        return closure_1_4;
      },
    };
    items[12] = {
      no: 15,
      name: "disclaimer",
      kind: "message",
      T() {
        return subtitleType;
      },
    };
    items[13] = {
      no: 18,
      name: "help_article",
      kind: "message",
      T() {
        return require("help_article").HelpArticle;
      },
    };
    items[14] = {
      no: 19,
      name: "header_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    obj = { no: 20, name: "subheader_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).LocalizedString;
      }
    }
    obj.T = T;
    items[15] = obj;
    items[16] = {
      no: 21,
      name: "modal_top_pill_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[17] = { no: 7, name: "dismiss_key", kind: "scalar", T: 9 };
    items[18] = { no: 12, name: "body", kind: "scalar", T: 9 };
    tmp = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties", items, T);
    return tmp;
  }
}
const prototype5 = AnnouncementModalVariant1Properties$Type.prototype;
prototype5["create"] = function create(arr) {
  let obj = {
    header: "",
    subheader: "",
    videoLink: "",
    helpArticleId: "",
    featureCards: [],
    heroArtVideoLinkLightTheme: "",
    heroArtImageLinkDarkTheme: "",
    heroArtImageLinkLightTheme: "",
    modalTopPill: "",
    heroArtVideoSubtitles: [],
    dismissKey: "",
    body: "",
  };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, arg2, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = _slicedToArray(pos.tag(), 2);
    const tmp3 = _slicedToArray(pos.tag(), 2);
  }
  return obj;
};
prototype5["internalBinaryWrite"] = function internalBinaryWrite(header, tag, writeUnknownFields) {
  let length;
  let length2;
  if ("" !== header.header) {
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(header.header);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.subheader) {
    tag.tag(2, _mod1188.WireType.LengthDelimited).string(header.subheader);
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.videoLink) {
    tag.tag(3, _mod1188.WireType.LengthDelimited).string(header.videoLink);
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.helpArticleId) {
    tag.tag(4, _mod1188.WireType.LengthDelimited).string(header.helpArticleId);
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
  }
  let num5 = 0;
  if (0 < header.featureCards.length) {
    do {
      let tagResult4 = tag.tag(5, _mod1188.WireType.LengthDelimited);
      let internalBinaryWriteResult = object.internalBinaryWrite(
        header.featureCards[num5],
        tagResult4.fork(),
        writeUnknownFields,
      );
      let joined = internalBinaryWriteResult.join();
      num5 = num5 + 1;
      length = header.featureCards.length;
    } while (num5 < length);
  }
  if (header.button) {
    const CTAButton = cta_button.CTAButton;
    const tagResult5 = tag.tag(6, _mod1188.WireType.LengthDelimited);
    const joined1 = CTAButton.internalBinaryWrite(
      header.button,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = CTAButton.internalBinaryWrite(
      header.button,
      tag.tag(6, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== header.heroArtVideoLinkLightTheme) {
    tag.tag(8, _mod1188.WireType.LengthDelimited).string(header.heroArtVideoLinkLightTheme);
    const tagResult6 = tag.tag(8, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.heroArtImageLinkDarkTheme) {
    tag.tag(9, _mod1188.WireType.LengthDelimited).string(header.heroArtImageLinkDarkTheme);
    const tagResult7 = tag.tag(9, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.heroArtImageLinkLightTheme) {
    tag.tag(10, _mod1188.WireType.LengthDelimited).string(header.heroArtImageLinkLightTheme);
    const tagResult8 = tag.tag(10, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.modalTopPill) {
    tag.tag(11, _mod1188.WireType.LengthDelimited).string(header.modalTopPill);
    const tagResult9 = tag.tag(11, _mod1188.WireType.LengthDelimited);
  }
  let num11 = 0;
  if (0 < header.heroArtVideoSubtitles.length) {
    do {
      let tagResult10 = tag.tag(13, _mod1188.WireType.LengthDelimited);
      let internalBinaryWriteResult2 = variant1StorageType.internalBinaryWrite(
        header.heroArtVideoSubtitles[num11],
        tagResult10.fork(),
        writeUnknownFields,
      );
      let joined2 = internalBinaryWriteResult2.join();
      num11 = num11 + 1;
      length2 = header.heroArtVideoSubtitles.length;
    } while (num11 < length2);
  }
  if (header.storage) {
    const tagResult11 = tag.tag(14, _mod1188.WireType.LengthDelimited);
    const joined3 = closure_4
      .internalBinaryWrite(header.storage, tag.tag(14, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult3 = closure_4.internalBinaryWrite(
      header.storage,
      tag.tag(14, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.disclaimer) {
    const tagResult12 = tag.tag(15, _mod1188.WireType.LengthDelimited);
    const joined4 = subtitleType
      .internalBinaryWrite(header.disclaimer, tag.tag(15, _mod1188.WireType.LengthDelimited).fork(), writeUnknownFields)
      .join();
    const internalBinaryWriteResult4 = subtitleType.internalBinaryWrite(
      header.disclaimer,
      tag.tag(15, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.helpArticle) {
    const HelpArticle = help_article.HelpArticle;
    const tagResult13 = tag.tag(18, _mod1188.WireType.LengthDelimited);
    const joined5 = HelpArticle.internalBinaryWrite(
      header.helpArticle,
      tag.tag(18, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult5 = HelpArticle.internalBinaryWrite(
      header.helpArticle,
      tag.tag(18, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult14 = tag.tag(19, _mod1188.WireType.LengthDelimited);
    const joined6 = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(19, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult6 = LocalizedString.internalBinaryWrite(
      header.headerLocalized,
      tag.tag(19, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.subheaderLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult15 = tag.tag(20, _mod1188.WireType.LengthDelimited);
    const joined7 = LocalizedString2.internalBinaryWrite(
      header.subheaderLocalized,
      tag.tag(20, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult7 = LocalizedString2.internalBinaryWrite(
      header.subheaderLocalized,
      tag.tag(20, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (header.modalTopPillLocalized) {
    const LocalizedString3 = localized_string.LocalizedString;
    const tagResult16 = tag.tag(21, _mod1188.WireType.LengthDelimited);
    const joined8 = LocalizedString3.internalBinaryWrite(
      header.modalTopPillLocalized,
      tag.tag(21, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult8 = LocalizedString3.internalBinaryWrite(
      header.modalTopPillLocalized,
      tag.tag(21, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== header.dismissKey) {
    tag.tag(7, _mod1188.WireType.LengthDelimited).string(header.dismissKey);
    const tagResult17 = tag.tag(7, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== header.body) {
    tag.tag(12, _mod1188.WireType.LengthDelimited).string(header.body);
    const tagResult18 = tag.tag(12, _mod1188.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, header, tag);
  }
  return tag;
};
const announcementModalVariant1PropertiesType = new AnnouncementModalVariant1Properties$Type();
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_variant_1_properties.tsx",
);

export const FeatureCard = object;
export const Variant1Storage = tmp2;
export const Subtitle = variant1StorageType;
export const Disclaimer = subtitleType;
export const AnnouncementModalVariant1Properties = announcementModalVariant1PropertiesType;
