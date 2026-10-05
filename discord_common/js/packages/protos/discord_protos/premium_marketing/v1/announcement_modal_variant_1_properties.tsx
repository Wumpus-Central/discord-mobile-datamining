// === Module 10400: announcement_modal_variant_1_properties ===

// Module 10400 (announcement_modal_variant_1_properties)
import _mod1198 from "module_1198" /* 1198 */;
import localized_string from "localized_string" /* 10401 */;
import help_article from "help_article" /* 10402 */;
import cta_button from "cta_button" /* 10403 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6, internalBinaryWrite7, internalBinaryWrite8;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
const T2 = function T() {
  return require("localized_string").LocalizedString;
};
const T3 = function T() {
  return require("localized_string").LocalizedString;
};
const T4 = function T() {
  return require("help_article").HelpArticle;
};
const T5 = function T() {
  return require("localized_string").LocalizedString;
};
const MessageType = _mod1198.MessageType;
class FeatureCard$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "header", kind: "scalar", T: 9 }, { no: 2, name: "pill", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "image_link", kind: "scalar", T: 9 }, { no: 5, name: "image_link_light_theme", kind: "scalar", T: 9 }, { no: 6, name: "header_localized", kind: "message", T: T2 }, { no: 7, name: "pill_localized", kind: "message", T: T3 }, , ];
    const obj = { no: 8, name: "body_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).LocalizedString;
      }
    }
    items[7] = obj;
    items[8] = { no: 9, name: "help_article", kind: "message", T: T4 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.FeatureCard", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { header: "", pill: "", body: "", imageLink: "", imageLinkLightTheme: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
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
          obj.headerLocalized = LocalizedString3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
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
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(header, tag, writeUnknownFields) {
    if ("" !== header.header) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(header.header);
    }
    if ("" !== header.pill) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(header.pill);
    }
    if ("" !== header.body) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(header.body);
    }
    if ("" !== header.imageLink) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      tagResult3.string(header.imageLink);
    }
    if ("" !== header.imageLinkLightTheme) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      tagResult4.string(header.imageLinkLightTheme);
    }
    if (header.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const headerLocalized = header.headerLocalized;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(headerLocalized, tagResult5.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (header.pillLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString2.internalBinaryWrite;
      const pillLocalized = header.pillLocalized;
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(pillLocalized, tagResult6.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (header.bodyLocalized) {
      const LocalizedString3 = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString3.internalBinaryWrite;
      const bodyLocalized = header.bodyLocalized;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(bodyLocalized, tagResult7.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (header.helpArticle) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite4 = HelpArticle.internalBinaryWrite;
      const helpArticle = header.helpArticle;
      const tagResult8 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(helpArticle, tagResult8.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, header, tag);
    }
    return tag;
  }
}
const prototype = FeatureCard$Type.prototype;
let items = [
  { no: 1, name: "header", kind: "scalar", T: 9 },
  { no: 2, name: "pill", kind: "scalar", T: 9 },
  { no: 3, name: "body", kind: "scalar", T: 9 },
  { no: 4, name: "image_link", kind: "scalar", T: 9 },
  { no: 5, name: "image_link_light_theme", kind: "scalar", T: 9 },
  { no: 6, name: "header_localized", kind: "message", T: T2 },
  { no: 7, name: "pill_localized", kind: "message", T: T3 },
  {
    no: 8,
    name: "body_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  { no: 9, name: "help_article", kind: "message", T: T4 }
];
const object = new Object("discord_protos.premium_marketing.v1.FeatureCard", items, tmp5, tmp4, tmp3);
const MessageType2 = _mod1198.MessageType;
class Variant1Storage$Type extends MessageType2 {
  constructor() {
    const items = [{ no: 1, name: "hero_art_localized_video_links_dark_theme", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 2, name: "hero_art_localized_video_links_light_theme", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 3, name: "hero_art_video_subtitle_links", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }];
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.Variant1Storage", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { heroArtLocalizedVideoLinksDarkTheme: {}, heroArtLocalizedVideoLinksLightTheme: {}, heroArtVideoSubtitleLinks: {} };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
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
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  binaryReadMap1(arg0, pos) {
    let tmp2;
    let tmp3;
    let tmp6;
    const sum = pos.pos + pos.uint32();
    let str;
    let str2;
    if (pos.pos < sum) {
      while (true) {
        let stringResult1;
        let tmp5 = _slicedToArray(pos.tag(), 2);
        [tmp6, r10019] = tmp5;
        let stringResult = tmp3;
        if (1 === tmp6) {
          stringResult = pos.string();
          stringResult1 = tmp2;
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
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_dark_theme");
      throw error;
    }
    if (str2 == null) {
      str2 = "";
    }
    if (str == null) {
      str = "";
    }
    arg0[str2] = str;
  }
  binaryReadMap2(arg0, pos) {
    let tmp2;
    let tmp3;
    let tmp6;
    const sum = pos.pos + pos.uint32();
    let str;
    let str2;
    if (pos.pos < sum) {
      while (true) {
        let stringResult1;
        let tmp5 = _slicedToArray(pos.tag(), 2);
        [tmp6, r10019] = tmp5;
        let stringResult = tmp3;
        if (1 === tmp6) {
          stringResult = pos.string();
          stringResult1 = tmp2;
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
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_light_theme");
      throw error;
    }
    if (str2 == null) {
      str2 = "";
    }
    if (str == null) {
      str = "";
    }
    arg0[str2] = str;
  }
  binaryReadMap3(arg0, pos) {
    let tmp2;
    let tmp3;
    let tmp6;
    const sum = pos.pos + pos.uint32();
    let str;
    let str2;
    if (pos.pos < sum) {
      while (true) {
        let stringResult1;
        let tmp5 = _slicedToArray(pos.tag(), 2);
        [tmp6, r10019] = tmp5;
        let stringResult = tmp3;
        if (1 === tmp6) {
          stringResult = pos.string();
          stringResult1 = tmp2;
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
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_video_subtitle_links");
      throw error;
    }
    if (str2 == null) {
      str2 = "";
    }
    if (str == null) {
      str = "";
    }
    arg0[str2] = str;
  }
  internalBinaryWrite(heroArtLocalizedVideoLinksDarkTheme, tag, writeUnknownFields) {
    const keys = Object.keys(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksDarkTheme);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      let forkResult = tagResult.fork();
      let tagResult1 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
      let stringResult = tagResult1.string(nextResult);
      let tagResult2 = stringResult.tag(2, _mod1198.WireType.LengthDelimited);
      let stringResult1 = tagResult2.string(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksDarkTheme[nextResult]);
      let joined = stringResult1.join();
      continue;
    }
    const keys1 = Object.keys(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksLightTheme);
    for (const item10053 of keys1) {
      let tagResult3 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      let forkResult1 = tagResult3.fork();
      let tagResult4 = forkResult1.tag(1, _mod1198.WireType.LengthDelimited);
      let stringResult2 = tagResult4.string(item10053);
      let tagResult5 = stringResult2.tag(2, _mod1198.WireType.LengthDelimited);
      let stringResult3 = tagResult5.string(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksLightTheme[item10053]);
      let joined1 = stringResult3.join();
      continue;
    }
    const keys2 = Object.keys(heroArtLocalizedVideoLinksDarkTheme.heroArtVideoSubtitleLinks);
    const iter2 = keys2[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tagResult6 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      let forkResult2 = tagResult6.fork();
      let tagResult7 = forkResult2.tag(1, _mod1198.WireType.LengthDelimited);
      let stringResult4 = tagResult7.string(nextResult1);
      let tagResult8 = stringResult4.tag(2, _mod1198.WireType.LengthDelimited);
      let stringResult5 = tagResult8.string(heroArtLocalizedVideoLinksDarkTheme.heroArtVideoSubtitleLinks[nextResult1]);
      let joined2 = stringResult5.join();
      continue;
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, heroArtLocalizedVideoLinksDarkTheme, tag);
    }
    return tag;
  }
}
const prototype2 = Variant1Storage$Type.prototype;
const items1 = [{ no: 1, name: "hero_art_localized_video_links_dark_theme", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 2, name: "hero_art_localized_video_links_light_theme", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 3, name: "hero_art_video_subtitle_links", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }];
let tmp22 = new tmp2("discord_protos.premium_marketing.v1.Variant1Storage", items1, tmp5, tmp4, tmp3, "create", "internalBinaryRead", "internalBinaryWrite", Variant1Storage$Type, tmp2);
const React3 = tmp22;
const MessageType3 = _mod1198.MessageType;
class Subtitle$Type extends MessageType3 {
  constructor() {
    const items = [{ no: 1, name: "link", kind: "scalar", T: 9 }, { no: 2, name: "locale", kind: "scalar", T: 9 }, { no: 3, name: "is_default", kind: "scalar", T: 8 }];
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.Subtitle", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { link: "", locale: "", isDefault: false };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
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
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(link, tag, writeUnknownFields) {
    if ("" !== link.link) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(link.link);
    }
    if ("" !== link.locale) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(link.locale);
    }
    if (false !== link.isDefault) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.bool(link.isDefault);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, link, tag);
    }
    return tag;
  }
}
const prototype3 = Subtitle$Type.prototype;
const items2 = [{ no: 1, name: "link", kind: "scalar", T: 9 }, { no: 2, name: "locale", kind: "scalar", T: 9 }, { no: 3, name: "is_default", kind: "scalar", T: 8 }];
const variant1StorageType = new Variant1Storage$Type("discord_protos.premium_marketing.v1.Subtitle", items2, tmp5, tmp4, Subtitle$Type, "create", "internalBinaryRead", "internalBinaryWrite", Variant1Storage$Type, items2, tmp, require, dependencyMap, object);
const MessageType4 = _mod1198.MessageType;
class Disclaimer$Type extends MessageType4 {
  constructor() {
    const items = [{ no: 1, name: "disclaimer_text", kind: "scalar", T: 9 }, , ];
    const obj = { no: 2, name: "disclaimer_help_article", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).HelpArticle;
      }
    }
    items[1] = obj;
    items[2] = { no: 3, name: "disclaimer_text_localized", kind: "message", T: T5 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.Disclaimer", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { disclaimerText: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
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
          obj.disclaimerHelpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disclaimerHelpArticle);
        } else if (3 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.disclaimerTextLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disclaimerTextLocalized);
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(disclaimerText, tag, writeUnknownFields) {
    if ("" !== disclaimerText.disclaimerText) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(disclaimerText.disclaimerText);
    }
    if (disclaimerText.disclaimerHelpArticle) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite = HelpArticle.internalBinaryWrite;
      const disclaimerHelpArticle = disclaimerText.disclaimerHelpArticle;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(disclaimerHelpArticle, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (disclaimerText.disclaimerTextLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString.internalBinaryWrite;
      const disclaimerTextLocalized = disclaimerText.disclaimerTextLocalized;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(disclaimerTextLocalized, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, disclaimerText, tag);
    }
    return tag;
  }
}
const prototype4 = Disclaimer$Type.prototype;
const items3 = [
  { no: 1, name: "disclaimer_text", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "disclaimer_help_article",
    kind: "message",
    T() {
      return require("help_article").HelpArticle;
    }
  },
  { no: 3, name: "disclaimer_text_localized", kind: "message", T: T5 }
];
const subtitleType = new Subtitle$Type("discord_protos.premium_marketing.v1.Disclaimer", items3, tmp5, Disclaimer$Type, Subtitle$Type, "create", "internalBinaryRead", "internalBinaryWrite", items3, this, tmp, require, dependencyMap, object, tmp22);
const MessageType5 = _mod1198.MessageType;
class AnnouncementModalVariant1Properties$Type extends MessageType5 {
  constructor() {
    const items = [
      { no: 1, name: "header", kind: "scalar", T: 9 },
      { no: 2, name: "subheader", kind: "scalar", T: 9 },
      { no: 3, name: "video_link", kind: "scalar", T: 9 },
      { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
      {
        no: 5,
        name: "feature_cards",
        kind: "message",
        repeat: 1,
        T() {
          return object;
        }
      },
      {
        no: 6,
        name: "button",
        kind: "message",
        T() {
          return require("cta_button").CTAButton;
        }
      },
      { no: 8, name: "hero_art_video_link_light_theme", kind: "scalar", T: 9 },
      { no: 9, name: "hero_art_image_link_dark_theme", kind: "scalar", T: 9 },
      { no: 10, name: "hero_art_image_link_light_theme", kind: "scalar", T: 9 },
      { no: 11, name: "modal_top_pill", kind: "scalar", T: 9 },
      {
        no: 13,
        name: "hero_art_video_subtitles",
        kind: "message",
        repeat: 1,
        T() {
          return variant1StorageType;
        }
      },
      {
        no: 14,
        name: "storage",
        kind: "message",
        T() {
          return internalBinaryWrite;
        }
      },
      {
        no: 15,
        name: "disclaimer",
        kind: "message",
        T() {
          return subtitleType;
        }
      },
      {
        no: 18,
        name: "help_article",
        kind: "message",
        T() {
          return require("help_article").HelpArticle;
        }
      },
      {
        no: 19,
        name: "header_localized",
        kind: "message",
        T() {
          return require("localized_string").LocalizedString;
        }
      },
    ,
    ,
    ,

    ];
    const obj = { no: 20, name: "subheader_localized", kind: "message", T };
    class T {
      constructor() {
        return require("localized_string").LocalizedString;
      }
    }
    items[15] = obj;
    items[16] = {
      no: 21,
      name: "modal_top_pill_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      }
    };
    items[17] = { no: 7, name: "dismiss_key", kind: "scalar", T: 9 };
    items[18] = { no: 12, name: "body", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { header: "", subheader: "", videoLink: "", helpArticleId: "", featureCards: [], heroArtVideoLinkLightTheme: "", heroArtImageLinkDarkTheme: "", heroArtImageLinkLightTheme: "", modalTopPill: "", heroArtVideoSubtitles: [], dismissKey: "", body: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(header, tag, writeUnknownFields) {
    let length;
    let length2;
    if ("" !== header.header) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(header.header);
    }
    if ("" !== header.subheader) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(header.subheader);
    }
    if ("" !== header.videoLink) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(header.videoLink);
    }
    if ("" !== header.helpArticleId) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      tagResult3.string(header.helpArticleId);
    }
    let num5 = 0;
    if (0 < header.featureCards.length) {
      do {
        internalBinaryWrite = object.internalBinaryWrite;
        let tmp14 = header.featureCards[num5];
        let tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp14, tagResult4.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num5 = num5 + 1;
        length = header.featureCards.length;
      } while (num5 < length);
    }
    if (header.button) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite2 = CTAButton.internalBinaryWrite;
      const button = header.button;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(button, tagResult5.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("" !== header.heroArtVideoLinkLightTheme) {
      const tagResult6 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      tagResult6.string(header.heroArtVideoLinkLightTheme);
    }
    if ("" !== header.heroArtImageLinkDarkTheme) {
      const tagResult7 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      tagResult7.string(header.heroArtImageLinkDarkTheme);
    }
    if ("" !== header.heroArtImageLinkLightTheme) {
      const tagResult8 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      tagResult8.string(header.heroArtImageLinkLightTheme);
    }
    if ("" !== header.modalTopPill) {
      const tagResult9 = tag.tag(11, _mod1198.WireType.LengthDelimited);
      tagResult9.string(header.modalTopPill);
    }
    let num11 = 0;
    if (0 < header.heroArtVideoSubtitles.length) {
      do {
        internalBinaryWrite3 = variant1StorageType.internalBinaryWrite;
        let tmp34 = header.heroArtVideoSubtitles[num11];
        let tagResult10 = tag.tag(13, _mod1198.WireType.LengthDelimited);
        let internalBinaryWrite3Result = internalBinaryWrite3(tmp34, tagResult10.fork(), writeUnknownFields);
        let joined2 = internalBinaryWrite3Result.join();
        num11 = num11 + 1;
        length2 = header.heroArtVideoSubtitles.length;
      } while (num11 < length2);
    }
    if (header.storage) {
      internalBinaryWrite4 = internalBinaryWrite.internalBinaryWrite;
      const storage = header.storage;
      const tagResult11 = tag.tag(14, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(storage, tagResult11.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (header.disclaimer) {
      internalBinaryWrite5 = subtitleType.internalBinaryWrite;
      const disclaimer = header.disclaimer;
      const tagResult12 = tag.tag(15, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(disclaimer, tagResult12.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (header.helpArticle) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite6 = HelpArticle.internalBinaryWrite;
      const helpArticle = header.helpArticle;
      const tagResult13 = tag.tag(18, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(helpArticle, tagResult13.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if (header.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite7 = LocalizedString.internalBinaryWrite;
      const headerLocalized = header.headerLocalized;
      const tagResult14 = tag.tag(19, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite7Result = internalBinaryWrite7(headerLocalized, tagResult14.fork(), writeUnknownFields);
      const joined6 = internalBinaryWrite7Result.join();
    }
    if (header.subheaderLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite8 = LocalizedString2.internalBinaryWrite;
      const subheaderLocalized = header.subheaderLocalized;
      const tagResult15 = tag.tag(20, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite8Result = internalBinaryWrite8(subheaderLocalized, tagResult15.fork(), writeUnknownFields);
      const joined7 = internalBinaryWrite8Result.join();
    }
    if (header.modalTopPillLocalized) {
      const LocalizedString3 = localized_string.LocalizedString;
      const internalBinaryWrite9 = LocalizedString3.internalBinaryWrite;
      const modalTopPillLocalized = header.modalTopPillLocalized;
      const tagResult16 = tag.tag(21, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite9Result = internalBinaryWrite9(modalTopPillLocalized, tagResult16.fork(), writeUnknownFields);
      const joined8 = internalBinaryWrite9Result.join();
    }
    if ("" !== header.dismissKey) {
      const tagResult17 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      tagResult17.string(header.dismissKey);
    }
    if ("" !== header.body) {
      const tagResult18 = tag.tag(12, _mod1198.WireType.LengthDelimited);
      tagResult18.string(header.body);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, header, tag);
    }
    return tag;
  }
}
const prototype5 = AnnouncementModalVariant1Properties$Type.prototype;
const announcementModalVariant1PropertiesType = new AnnouncementModalVariant1Properties$Type();
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_variant_1_properties.tsx");

export const FeatureCard = object;
export const Variant1Storage = tmp22;
export const Subtitle = variant1StorageType;
export const Disclaimer = subtitleType;
export const AnnouncementModalVariant1Properties = announcementModalVariant1PropertiesType;