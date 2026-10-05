// discord_app/modules/emojis/UnicodeEmojis.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import EmojiTypes from "EmojiTypes.tsx";
import _mod13801 from "../../../_runtime/metro/13801__.js";
import twemoji.npm from "../../../node_modules/.pnpm/@discordapp+twemoji@16.0.1/node_modules/@discordapp/twemoji/dist/twemoji.npm.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let hasOwnProperty;

function parseRawEmojiObject(emojiObject) {
  const value = weakMap.get(emojiObject);
  if (null != value) {
    return value;
  } else {
    const self = this;
    const tmp4 = new Emoji(emojiObject);
    const result = weakMap.set(emojiObject, tmp4);
    return tmp4;
  }
}
function findInlineEmojisFromSurrogates(text, arg1) {
  if (true !== arg1) {
    if (!re8.test(text)) {
      items = [{ type: "text", text }];
      return items;
    }
  }
  let match = text.match(re9);
  if (match == null) {
    match = [];
  }
  const items1 = [];
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < match.length) {
    while (true) {
      let tmp2 = match[num];
      if (null != ``) {
        if ("" !== ``) {
          let sum;
          let str3;
          if (tmp2 === closure_13) {
            let obj3;
            text = `${tmp2}`;
            str3 = "";
            let tmp17 = require("../../../_runtime/metro/04525__.js").surrogateToEmoji[`${tmp2}`];
            let tmp18 = null;
            if (null != tmp17) {
              tmp18 = require("../../../_runtime/metro/04525__.js").emojis[tmp17];
            }
            let first;
            if (tmp18 != null) {
              first = tmp18.names[0];
            }
            if (null != first) {
              let obj2 = { type: "emoji", surrogate: text, emojiName: ":" + first + ":" };
              let _HermesInternal2 = HermesInternal;
              obj3 = obj2;
            } else {
              obj3 = { type: "text", text };
            }
            if (items1.length > 0) {
              let tmp20 = items1[items1.length - 1];
              if ("text" === obj3.type) {
                if ("text" === tmp20.type) {
                  tmp20.text = tmp20.text + obj3.text;
                  sum = str3;
                }
              }
            }
            let arr = items1.push(obj3);
            sum = str3;
          } else if (re15.test(tmp2)) {
            sum = str + tmp2;
          } else {
            let obj5;
            let push = items1.push;
            let tmp11 = require("../../../_runtime/metro/04525__.js").surrogateToEmoji[str];
            let tmp12 = null;
            if (null != tmp11) {
              tmp12 = require("../../../_runtime/metro/04525__.js").emojis[tmp11];
            }
            let first1;
            if (tmp12 != null) {
              first1 = tmp12.names[0];
            }
            if (null != first1) {
              let obj4 = { type: "emoji", surrogate: str, emojiName: ":" + first1 + ":" };
              let _HermesInternal = HermesInternal;
              obj5 = obj4;
            } else {
              obj5 = { type: "text", text: str };
            }
            let arr2 = push(obj5);
            text = tmp2;
            str3 = "";
          }
          num = num + 1;
          str = sum;
          str2 = sum;
          if (num >= match.length) {
            break;
          }
        }
      }
      text = tmp2;
      str3 = str;
      sum = tmp2;
    }
  }
  const tmp22 = null != str2 && "" !== str2;
  if (tmp22) {
    let obj7;
    const push2 = items1.push;
    const tmp25 = require("../../../_runtime/metro/04525__.js").surrogateToEmoji[str2];
    let tmp26 = null;
    if (null != tmp25) {
      tmp26 = require("../../../_runtime/metro/04525__.js").emojis[tmp25];
    }
    let first2;
    if (tmp26 != null) {
      first2 = tmp26.names[0];
    }
    if (null != first2) {
      const _HermesInternal3 = HermesInternal;
      obj7 = { type: "emoji", surrogate: str2, emojiName: ":" + first2 + ":" };
      const obj6 = { type: "emoji", surrogate: str2, emojiName: ":" + first2 + ":" };
    } else {
      obj7 = { type: "text", text: str2 };
    }
    push2(obj7);
  }
  return items1;
}
let c4 = null;
const weakMap = new WeakMap();
let items = ["\u{1F3FB}", "\u{1F3FC}", "\u{1F3FD}", "\u{1F3FE}", "\u{1F3FF}"];
let tmp3 = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
const re7 = tmp3;
const re8 = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/;
const re9 = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
class Emoji {
  constructor(emojiObject) {
    const obj = Object.create(new.target.prototype);
    obj.emojiObject = emojiObject;
    obj.type = EmojiTypes.EmojiTypes.UNICODE;
    obj.uniqueName = emojiObject.names[0];
    obj.surrogates = emojiObject.surrogates;
    obj.diversityChildren = {};
    if (null != emojiObject.diversityChildren) {
      const diversityChildren = emojiObject.diversityChildren;
      const tmp14 = diversityChildren[Symbol.iterator]();
      while (tmp14 !== undefined) {
        let tmp7 = require("../../../_runtime/metro/04525__.js").emojis[tmp3];
        let tmp8 = tmp7;
        if (null != tmp7.diversity) {
          let diversity = tmp8.diversity;
          let self = this;
          let joined = diversity.join("-");
          obj.diversityChildren[joined] = new Emoji(tmp7);
        }
        continue;
      }
    }
    return obj;
  }
  forEachDiversity(arg0) {
    if (null != this.diversityChildren) {
      const obj = _modDef12;
      obj.each(tmp.diversityChildren, arg0);
    }
  }
  forEachName(arg0) {
    const obj = _modDef12;
    obj.each(this.names, arg0);
  }
}
const prototype = Emoji.prototype;
Object.defineProperty(prototype, "names", {
  get: function names() {
    return this.emojiObject.names;
  },
  set: undefined
});
Object.defineProperty(prototype, "allNamesString", {
  get: function allNamesString() {
    let combined;
    const self = this;
    if (this.names.length > 1) {
      const names = self.names;
      const _HermesInternal2 = HermesInternal;
      combined = ":" + names.join(": :") + ":";
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
        const convert = module_4524.convert;
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
    let uRL;
    const defaultDiversityChild = this.defaultDiversityChild;
    if (null != defaultDiversityChild) {
      const obj2 = require("EmojiUtils");
      uRL = obj2.getURL(defaultDiversityChild.surrogates);
    } else {
      const obj = require("EmojiUtils");
      uRL = obj.getURL(tmp.surrogates);
    }
    return uRL;
  },
  set: undefined
});
Object.defineProperty(prototype, "name", {
  get: function name() {
    const self = this;
    if (this.hasDiversity) {
      let uniqueName;
      if (null != c4) {
        const uniqueName2 = self.uniqueName;
        const tmp6 = require("../../../_runtime/metro/04525__.js").surrogateToEmoji[c4];
        let tmp7 = null;
        if (null != tmp6) {
          tmp7 = require("../../../_runtime/metro/04525__.js").emojis[tmp6];
        }
        let first;
        if (tmp7 != null) {
          first = tmp7.names[0];
        }
        const _HermesInternal = HermesInternal;
        uniqueName = "" + uniqueName2 + "::" + first;
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
const map = new Map();
let closure_13 = String.fromCodePoint(917631);
let closure_14 = String.fromCodePoint(127988);
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
    c4 = tmp;
  },
  getCategories() {
    return Object.keys(require("../../../_runtime/metro/04525__.js").emojisByCategory);
  },
  getByName(arg0) {
    const tmp3 = require("../../../_runtime/metro/04525__.js").nameToEmoji[arg0];
    let tmp4 = null;
    if (null != tmp3) {
      tmp4 = require("../../../_runtime/metro/04525__.js").emojis[tmp3];
    }
    let tmp5 = null;
    if (null != tmp4) {
      let value = weakMap.get(tmp4);
      if (null == value) {
        const self = this;
        const tmp9 = new Emoji(tmp4);
        const result = weakMap.set(tmp4, tmp9);
        value = tmp9;
      }
      tmp5 = value;
    }
    return tmp5;
  },
  getByCategory(name) {
    let value = map.get(name);
    if (null == value) {
      const tmp4 = require("../../../_runtime/metro/04525__.js").emojisByCategory[name];
      const filterUnsupportedEmojis = require("EmojiUtils").filterUnsupportedEmojis;
      require("EmojiUtils");
      const emojis = require("../../../_runtime/metro/04525__.js").emojis;
      const result = filterUnsupportedEmojis(emojis.slice(tmp4[0], tmp4[1]));
      const mapped = result.map(parseRawEmojiObject);
      const result1 = map.set(name, mapped);
      value = mapped;
    }
    return value;
  },
  contentHasUnicodeOrEmoji(arg0) {
    return re8.test(arg0);
  },
  translateInlineEmojiToSurrogates(emojiName) {
    return emojiName.replace(re7, (arg0, arg1) => {
      let str = arg0;
      if (arg0 === undefined) {
        str = "";
      }
      const tmp3 = require("../../../_runtime/metro/04525__.js").nameToEmoji[arg1];
      let tmp4 = null;
      if (null != tmp3) {
        tmp4 = require("../../../_runtime/metro/04525__.js").emojis[tmp3];
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
  maybeTranslateSurrogatesToInlineEmoji(text) {
    if (re8.test(text)) {
      const arr = findInlineEmojisFromSurrogates(text, true);
      const mapped = arr.map((type) => "text" === type.type ? type.text : type.emojiName);
      const joined = mapped.join("");
      let tmp4 = null;
      if (joined !== text) {
        tmp4 = joined;
      }
      return tmp4;
    } else {
      return null;
    }
  },
  findInlineEmojisFromSurrogates,
  translateSurrogatesToInlineEmoji(c2) {
    const arr = findInlineEmojisFromSurrogates(c2);
    const mapped = arr.map((type) => "text" === type.type ? type.text : type.emojiName);
    return mapped.join("");
  },
  convertNameToSurrogate(emojiName) {
    let str = arg1;
    if (arg1 === undefined) {
      str = "";
    }
    const tmp3 = require("../../../_runtime/metro/04525__.js").nameToEmoji[emojiName];
    let tmp4 = null;
    if (null != tmp3) {
      tmp4 = require("../../../_runtime/metro/04525__.js").emojis[tmp3];
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
    const tmp3 = require("../../../_runtime/metro/04525__.js").surrogateToEmoji[name];
    let tmp4 = null;
    if (null != tmp3) {
      tmp4 = require("../../../_runtime/metro/04525__.js").emojis[tmp3];
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
  convertShortcutToName(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    let str = arg2;
    if (arg2 === undefined) {
      str = "";
    }
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(_mod13801, arg0)) {
      str = _mod13801[arg0];
    }
    let combined = str;
    if (flag) {
      const _HermesInternal = HermesInternal;
      combined = ":" + str + ":";
    }
    return combined;
  },
  convertSurrogateToBase(surrogates) {
    const reduced = items.reduce((acc, item) => acc.replace(item, ""), surrogates);
    const tmp4 = require("../../../_runtime/metro/04525__.js").surrogateToEmoji[reduced];
    let tmp5 = null;
    if (null != tmp4) {
      tmp5 = require("../../../_runtime/metro/04525__.js").emojis[tmp4];
    }
    let str;
    if (tmp5 != null) {
      str = tmp5.names[0];
    }
    if (str == null) {
      str = "";
    }
    const tmp6 = require("../../../_runtime/metro/04525__.js").nameToEmoji[str];
    let tmp7 = null;
    if (null != tmp6) {
      tmp7 = require("../../../_runtime/metro/04525__.js").emojis[tmp6];
    }
    let tmp8 = null;
    if (null != tmp7) {
      let value = weakMap.get(tmp7);
      if (null == value) {
        const self = this;
        const tmp12 = new Emoji(tmp7);
        const result = weakMap.set(tmp7, tmp12);
        value = tmp12;
      }
      tmp8 = value;
    }
    return tmp8;
  },
  forEach(fn) {
    const emojis = require("../../../_runtime/metro/04525__.js").emojis;
    for (const item10011 of emojis) {
      let hasMultiDiversityParent = item10011.hasDiversityParent || item10011.hasMultiDiversityParent;
      if (!hasMultiDiversityParent) {
        let tmp5 = fn(parseRawEmojiObject(item10011));
      }
      continue;
    }
  },
  numDiversitySprites: require("../../../_runtime/metro/04525__.js").numDiversitySprites,
  numNonDiversitySprites: require("../../../_runtime/metro/04525__.js").numNonDiversitySprites,
  EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  EMOJI_NAME_AND_DIVERSITY_RE: tmp3,
  EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
  hasSurrogates(match) {
    const obj = _modDef12;
    const toArrayResult = obj.toArray(match);
    return toArrayResult.some((item) => null != require("../../../_runtime/metro/04525__.js").surrogateToEmoji[item]);
  }
};
let result = size.fileFinishedImporting("modules/emojis/UnicodeEmojis.tsx");

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
        tmp = { name: id.name, id: null };
        const obj = { name: id.name, id: null };
      }
    }
  }
  return tmp;
};