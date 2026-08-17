// discord_app/modules/emojis/UnicodeEmojis.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import EmojiTypes from "EmojiTypes.tsx";
import _mod13444 from "../../../_runtime/metro/13444__.js";
import closure_3 from "../../../node_modules/.pnpm/@discordapp+twemoji@16.0.1/node_modules/@discordapp/twemoji/dist/twemoji.npm.js";
import closure_13 from "module_917631" /* 917631 */;
import closure_14 from "module_127988" /* 127988 */;
import { 04036__ } from "../../../_runtime/metro/04036__.js";
import { getEmojiUnavailableReason } from "../../utils/EmojiUtils.tsx";

require = arg1;
function parseRawEmojiObject(arg0) {
  const value = weakMap.get(arg0);
  if (null != value) {
    return value;
  } else {
    const tmp5 = new Emoji(arg0);
    const result = obj.set(arg0, tmp5);
    return tmp5;
  }
  obj = weakMap;
}
function findInlineEmojisFromSurrogates(content, arg1) {
  if (true !== arg1) {
    if (!regex.test(content)) {
      let obj = { type: "text", text: null };
      obj[1] = content;
      items = [obj];
      return items;
    }
  }
  let match = content.match(closure_9);
  if (match == null) {
    match = [];
  }
  const items1 = [];
  let combined = globalThis;
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < match.length) {
    while (true) {
      let tmp3 = match[num];
      let tmp4 = num;
      let tmp5 = str;
      if (null != ``) {
        if ("" !== ``) {
          let tmp9 = closure_13;
          if (tmp3 === closure_13) {
            let text = `${tmp3}`;
            let str3 = "";
            let tmp16 = require;
            let tmp17 = dependencyMap;
            let tmp18 = 04036__.surrogateToEmoji[`${tmp3}`];
            let tmp19 = null;
            if (null != tmp18) {
              tmp19 = tmp16(4036).emojis[tmp18];
            }
            let first;
            if (tmp19 != null) {
              first = tmp19.names[0];
            }
            if (null != first) {
              obj = { type: "emoji", surrogate: null, emojiName: null };
              obj[1] = text;
              let _HermesInternal2 = HermesInternal;
              obj[2] = ":" + first + ":";
            } else {
              obj = { type: "text", text: null };
              obj[1] = text;
            }
            if (items1.length > 0) {
              let tmp21 = items1[items1.length - 1];
              if ("text" === obj.type) {
                if ("text" === tmp21.type) {
                  tmp21.text = tmp21.text + obj.text;
                  let sum = str3;
                }
              }
            }
            let arr = items1.push(obj);
            sum = str3;
          } else {
            let tmp30 = regex2;
            if (regex2.test(tmp3)) {
              sum = str + tmp3;
            } else {
              let tmp10 = require;
              let tmp11 = dependencyMap;
              let tmp12 = 04036__.surrogateToEmoji[str];
              let tmp13 = null;
              if (null != tmp12) {
                tmp13 = tmp10(4036).emojis[tmp12];
              }
              let first1;
              if (tmp13 != null) {
                first1 = tmp13.names[0];
              }
              if (null != first1) {
                obj1 = { type: "emoji", surrogate: null, emojiName: null };
                obj1[1] = str;
                let _HermesInternal = HermesInternal;
                obj1[2] = ":" + first1 + ":";
                let obj2 = obj1;
              } else {
                obj2 = { type: "text", text: null };
                obj2[1] = str;
              }
              arr = items1.push(obj2);
              text = tmp3;
              str3 = "";
            }
          }
          num = num + 1;
          str = sum;
          str2 = sum;
          if (num >= match.length) {
            break;
          }
        }
      }
      let tmp6 = closure_14;
      text = tmp3;
      str3 = str;
      sum = tmp3;
    }
  }
  if (!tmp23) {
    return items1;
  } else {
    const tmp26 = 04036__.surrogateToEmoji[str2];
    let tmp27 = null;
    if (null != tmp26) {
      tmp27 = tmp24(4036).emojis[tmp26];
    }
    let first2;
    if (tmp27 != null) {
      first2 = tmp27.names[0];
    }
    if (null != first2) {
      const obj3 = { type: "emoji", surrogate: null, emojiName: null };
      obj3[1] = str2;
      combined = ":" + first2 + ":";
      obj3[2] = combined;
      let obj4 = obj3;
    } else {
      obj4 = { type: "text", text: null };
      obj4[1] = str2;
    }
    items1.push(obj4);
    tmp24 = require;
  }
}
let c4 = null;
const weakMap = new WeakMap();
let items = ["\u{1F3FB}", "\u{1F3FC}", "\u{1F3FD}", "\u{1F3FE}", "\u{1F3FF}"];
let tmp3 = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
const re7 = tmp3;
const re8 = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/;
const re9 = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
let Emoji;
class Emoji {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.emojiObject = global;
    obj.type = require("EmojiTypes").EmojiTypes.UNICODE;
    obj.uniqueName = global.names[0];
    obj.surrogates = global.surrogates;
    obj.diversityChildren = {};
    if (null != global.diversityChildren) {
      diversityChildren = global.diversityChildren;
      tmp14 = diversityChildren;
      tmp15 = diversityChildren[Symbol.iterator]();
      str = "-";
      tmp2 = diversityChildren;
      tmp4 = tmp15;
      while (tmp15 !== undefined) {
        tmp5 = closure_0;
        tmp6 = closure_2;
        tmp7 = require("module_4036").emojis[tmp3];
        tmp8 = tmp7;
        if (null != tmp7.diversity) {
          tmp9 = tmp7;
          diversity = tmp8.diversity;
          tmp11 = Emoji;
          tmp12 = new.target;
          tmp13 = tmp8;
          joined = diversity.join("-");
          obj.diversityChildren[joined] = new Emoji(tmp7);
        }
        continue;
      }
    }
    return obj;
  }
}
const prototype = Emoji.prototype;
Object.defineProperty(prototype, "names", {
  get: function names(arg0) {
    return this.emojiObject.names;
  },
  set: undefined
});
Object.defineProperty(prototype, "allNamesString", {
  get: function allNamesString() {
    const self = this;
    if (this.names.length > 1) {
      const names = self.names;
      const _HermesInternal2 = HermesInternal;
      let combined = ":" + names.join(": :") + ":";
    } else {
      const _HermesInternal = HermesInternal;
      combined = ":" + self.uniqueName + ":";
    }
    return combined;
  },
  set: undefined
});
Object.defineProperty(prototype, "unicodeVersion", {
  get: function unicodeVersion() {
    let num = this.emojiObject.unicodeVersion;
    if (num == null) {
      num = 0;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasDiversity", {
  get: function hasDiversity() {
    return this.emojiObject.hasDiversity;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasMultiDiversity", {
  get: function hasMultiDiversity() {
    return this.emojiObject.hasMultiDiversity;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasDiversityParent", {
  get: function hasDiversityParent() {
    return this.emojiObject.hasDiversityParent;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasMultiDiversityParent", {
  get: function hasMultiDiversityParent() {
    return this.emojiObject.hasMultiDiversityParent;
  },
  set: undefined
});
Object.defineProperty(prototype, "managed", {
  get: function managed() {
    return true;
  },
  set: undefined
});
Object.defineProperty(prototype, "animated", {
  get: function animated() {
    return false;
  },
  set: undefined
});
Object.defineProperty(prototype, "defaultDiversityChild", {
  get: function defaultDiversityChild() {
    if (this.hasDiversity) {
      if (null != c4) {
        convert = convert.convert;
        let str = convert.toCodePoint(c4);
        if (str == null) {
          str = "";
        }
        return tmp.diversityChildren[str];
      }
    }
    return null;
  },
  set: undefined
});
Object.defineProperty(prototype, "url", {
  get: function url() {
    const defaultDiversityChild = this.defaultDiversityChild;
    if (null != defaultDiversityChild) {
      let uRL = getEmojiUnavailableReason.getURL(defaultDiversityChild.surrogates);
      const obj2 = getEmojiUnavailableReason;
    } else {
      uRL = getEmojiUnavailableReason.getURL(tmp.surrogates);
      const obj = getEmojiUnavailableReason;
    }
    return uRL;
  },
  set: undefined
});
Object.defineProperty(prototype, "name", {
  get: function name() {
    const self = this;
    if (this.hasDiversity) {
      if (null != c4) {
        const tmp6 = 04036__.surrogateToEmoji[c4];
        let tmp7 = null;
        if (null != tmp6) {
          tmp7 = tmp4(4036).emojis[tmp6];
        }
        let first;
        if (tmp7 != null) {
          first = tmp7.names[0];
        }
        const _HermesInternal = HermesInternal;
        let uniqueName = "" + self.uniqueName + "::" + first;
        tmp4 = require;
      }
      return uniqueName;
    }
    uniqueName = self.uniqueName;
  },
  set: undefined
});
Object.defineProperty(prototype, "optionallyDiverseSequence", {
  get: function optionallyDiverseSequence() {
    const defaultDiversityChild = this.defaultDiversityChild;
    return null != defaultDiversityChild ? defaultDiversityChild.surrogates : this.surrogates;
  },
  set: undefined
});
prototype["forEachDiversity"] = function forEachDiversity(arg0) {
  if (null != this.diversityChildren) {
    applyDefault.each(tmp.diversityChildren, arg0);
    const obj = applyDefault;
  }
};
prototype["forEachName"] = function forEachName(arg0) {
  applyDefault.each(this.names, arg0);
};
const map = new Map();
const re15 = /^(?:\uDB40[\uDC61-\uDC7A])$/;
let obj = {
  getDefaultDiversitySurrogate() {
    return c4;
  },
  setDefaultDiversitySurrogate(value) {
    let tmp = null;
    if (null != value) {
      tmp = null;
      if ("" !== value) {
        tmp = value;
      }
    }
    closure_4 = tmp;
  },
  getCategories() {
    return Object.keys(04036__.emojisByCategory);
  },
  getByName(arg0) {
    const tmp3 = 04036__.nameToEmoji[arg0];
    let tmp4 = null;
    if (null != tmp3) {
      tmp4 = 04036__.emojis[tmp3];
    }
    let tmp5 = null;
    if (null != tmp4) {
      let value = weakMap.get(tmp4);
      if (null == value) {
        const tmp10 = new Emoji(tmp4);
        const result = obj.set(tmp4, tmp10);
        value = tmp10;
      }
      tmp5 = value;
      obj = weakMap;
    }
    return tmp5;
  },
  getByCategory(name) {
    let value = map.get(name);
    if (null == value) {
      const tmp4 = 04036__.emojisByCategory[name];
      const emojis = 04036__.emojis;
      const result = getEmojiUnavailableReason.filterUnsupportedEmojis(emojis.slice(tmp4[0], tmp4[1]));
      const mapped = result.map(parseRawEmojiObject);
      const result1 = map.set(name, mapped);
      value = mapped;
      const obj2 = getEmojiUnavailableReason;
    }
    return value;
  },
  contentHasUnicodeOrEmoji(arg0) {
    return regex.test(arg0);
  },
  translateInlineEmojiToSurrogates(emojiName) {
    return emojiName.replace(closure_7, (arg0, arg1) => {
      let str = arg0;
      if (arg0 === undefined) {
        str = "";
      }
      const tmp3 = callback(table[1]).nameToEmoji[arg1];
      let tmp4 = null;
      if (null != tmp3) {
        tmp4 = callback(table[1]).emojis[tmp3];
      }
      let surrogates;
      if (tmp4 != null) {
        surrogates = tmp4.surrogates;
      }
      if (surrogates == null) {
        surrogates = str;
      }
      return surrogates;
    });
  },
  maybeTranslateSurrogatesToInlineEmoji(content) {
    if (regex.test(content)) {
      const mapped = findInlineEmojisFromSurrogates(content, true).map((type) => "text" === type.type ? type.text : type.emojiName);
      const joined = mapped.join("");
      let tmp4 = null;
      if (joined !== content) {
        tmp4 = joined;
      }
      return tmp4;
    } else {
      return null;
    }
  },
  findInlineEmojisFromSurrogates,
  translateSurrogatesToInlineEmoji(content) {
    const mapped = findInlineEmojisFromSurrogates(content).map((type) => "text" === type.type ? type.text : type.emojiName);
    return mapped.join("");
  },
  convertNameToSurrogate(emojiName) {
    let str = arg1;
    if (arg1 === undefined) {
      str = "";
    }
    const tmp3 = 04036__.nameToEmoji[emojiName];
    let tmp4 = null;
    if (null != tmp3) {
      tmp4 = 04036__.emojis[tmp3];
    }
    let surrogates;
    if (tmp4 != null) {
      surrogates = tmp4.surrogates;
    }
    if (surrogates == null) {
      surrogates = str;
    }
    return surrogates;
  },
  convertSurrogateToName(name, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    let str = arg2;
    if (arg2 === undefined) {
      str = "";
    }
    const tmp3 = 04036__.surrogateToEmoji[name];
    let tmp4 = null;
    if (null != tmp3) {
      tmp4 = 04036__.emojis[tmp3];
    }
    let first;
    if (tmp4 != null) {
      first = tmp4.names[0];
    }
    if (first == null) {
      first = str;
    }
    let combined = first;
    if (flag) {
      const _HermesInternal = HermesInternal;
      combined = ":" + first + ":";
    }
    return combined;
  },
  convertShortcutToName(key10009) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    let str = arg2;
    if (arg2 === undefined) {
      str = "";
    }
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(key10009) : call(tmp3, key10009)) {
      str = _mod13444[key10009];
    }
    let combined = str;
    if (flag) {
      const _HermesInternal = HermesInternal;
      combined = ":" + str + ":";
    }
    return combined;
  },
  convertSurrogateToBase(surrogates) {
    const reduced = items.reduce((str) => str.replace(arg1, ""), surrogates);
    const tmp4 = 04036__.surrogateToEmoji[reduced];
    let tmp5 = null;
    if (null != tmp4) {
      tmp5 = tmp2(4036).emojis[tmp4];
    }
    let str;
    if (tmp5 != null) {
      str = tmp5.names[0];
    }
    if (str == null) {
      str = "";
    }
    const tmp6 = 04036__.nameToEmoji[str];
    let tmp7 = null;
    if (null != tmp6) {
      tmp7 = tmp2(4036).emojis[tmp6];
    }
    let tmp8 = null;
    if (null != tmp7) {
      let value = weakMap.get(tmp7);
      if (null == value) {
        const tmp13 = new Emoji(tmp7);
        const result = obj.set(tmp7, tmp13);
        value = tmp13;
      }
      tmp8 = value;
      obj = weakMap;
    }
    return tmp8;
  },
  forEach(arg0) {
    for (const item10011 of tmp) {
      let tmp2 = item10011;
      let hasMultiDiversityParent = item10011.hasDiversityParent;
      if (!hasMultiDiversityParent) {
        let tmp3 = item10011;
        hasMultiDiversityParent = tmp2.hasMultiDiversityParent;
      }
      if (!hasMultiDiversityParent) {
        let tmp4 = parseRawEmojiObject;
        let tmp5 = item10011;
        let tmp6 = arg0(parseRawEmojiObject(tmp2));
      }
      continue;
    }
  },
  numDiversitySprites: require("module_4036").numDiversitySprites,
  numNonDiversitySprites: require("module_4036").numNonDiversitySprites,
  EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  EMOJI_NAME_AND_DIVERSITY_RE: tmp3,
  EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
  hasSurrogates(tags) {
    const obj = applyDefault;
    return applyDefault.toArray(tags).some((arg0) => null != callback(table[1]).surrogateToEmoji[arg0]);
  }
};
let result = require("set").fileFinishedImporting("modules/emojis/UnicodeEmojis.tsx");

export default obj;
export const DIVERSITY_SURROGATES = items;
export { Emoji };
export const asUnicodeEmoji = function asUnicodeEmoji(id) {
  let tmp = null;
  if (null == id.id) {
    tmp = null;
    if (null != id.name) {
      tmp = null;
      if (id.name.length > 0) {
        const obj = { name: null, id: null };
        obj[0] = id.name;
        tmp = obj;
      }
    }
  }
  return tmp;
};