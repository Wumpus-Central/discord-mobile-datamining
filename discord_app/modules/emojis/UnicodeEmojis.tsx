// === Module 4213: UnicodeEmojis ===

// Module 4213 (UnicodeEmojis)
import _modDef12 from "module_12" /* 12 */;
import EmojiTypes from "EmojiTypes" /* 4216 */;
import _mod13984 from "module_13984" /* 13984 */;
import defaultImageSrcGenerator from "defaultImageSrcGenerator" /* 4214 */;

require = fn;
function parseRawEmojiObject(item10011) {
  value = weakMap.get(item10011);
  if (null != value) {
    return value;
  } else {
    const tmp5 = new Emoji(item10011);
    const result = weakMap.set(item10011, tmp5);
    return tmp5;
  }
}
function findInlineEmojisFromSurrogates(text, arg1) {
  if (true !== arg1) {
    if (!re8.test(text)) {
      let obj = { type: "text", text };
      items = [obj];
      return items;
    }
  }
  let match = text.match(re9);
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
      if (null != ``) {
        if ("" !== ``) {
          if (tmp3 === closure_13) {
            text = `${tmp3}`;
            let str3 = "";
            let tmp18 = require("module_4215").surrogateToEmoji[`${tmp3}`];
            let tmp19 = null;
            if (null != tmp18) {
              tmp19 = require("module_4215").emojis[tmp18];
            }
            let first;
            if (tmp19 != null) {
              first = tmp19.names[0];
            }
            if (null != first) {
              obj = { type: "emoji", surrogate: text, emojiName: null };
              let _HermesInternal2 = HermesInternal;
              obj.emojiName = ":" + first + ":";
            } else {
              obj = { type: "text", text };
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
          } else if (re15.test(tmp3)) {
            sum = str + tmp3;
          } else {
            let tmp12 = require("module_4215").surrogateToEmoji[str];
            let tmp13 = null;
            if (null != tmp12) {
              tmp13 = require("module_4215").emojis[tmp12];
            }
            let first1;
            if (tmp13 != null) {
              first1 = tmp13.names[0];
            }
            if (null != first1) {
              let obj1 = { type: "emoji", surrogate: str, emojiName: null };
              let _HermesInternal = HermesInternal;
              obj1.emojiName = ":" + first1 + ":";
              let obj2 = obj1;
            } else {
              obj2 = { type: "text", text: str };
            }
            arr = items1.push(obj2);
            text = tmp3;
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
      text = tmp3;
      str3 = str;
      sum = tmp3;
    }
  }
  if (!tmp23) {
    return items1;
  } else {
    const tmp26 = require("module_4215").surrogateToEmoji[str2];
    let tmp27 = null;
    if (null != tmp26) {
      tmp27 = require("module_4215").emojis[tmp26];
    }
    let first2;
    if (tmp27 != null) {
      first2 = tmp27.names[0];
    }
    if (null != first2) {
      const obj3 = { type: "emoji", surrogate: str2, emojiName: null };
      combined = ":" + first2 + ":";
      obj3.emojiName = combined;
      let obj4 = obj3;
    } else {
      obj4 = { type: "text", text: str2 };
    }
    items1.push(obj4);
  }
  tmp23 = null != str2 && "" !== str2;
}
let global = null;
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
    obj.type = closure_0(closure_2[2]).EmojiTypes.UNICODE;
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
        tmp7 = closure_0(closure_2[1]).emojis[tmp3];
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
  get: function names() {
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
      if (null != global) {
        const convert = defaultImageSrcGenerator.convert;
        let str = convert.toCodePoint(global);
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
      let uRL = require("EmojiUtils").getURL(defaultDiversityChild.surrogates);
      const obj2 = require("EmojiUtils");
    } else {
      uRL = require("EmojiUtils").getURL(tmp.surrogates);
      const obj = require("EmojiUtils");
    }
    return uRL;
  },
  set: undefined
});
Object.defineProperty(prototype, "name", {
  get: function name() {
    const self = this;
    if (this.hasDiversity) {
      if (null != global) {
        const tmp6 = require("module_4215").surrogateToEmoji[global];
        let tmp7 = null;
        if (null != tmp6) {
          tmp7 = require("module_4215").emojis[tmp6];
        }
        let first;
        if (tmp7 != null) {
          first = tmp7.names[0];
        }
        const _HermesInternal = HermesInternal;
        let uniqueName = "" + self.uniqueName + "::" + first;
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
    _modDef12.each(tmp.diversityChildren, arg0);
  }
};
prototype["forEachName"] = function forEachName(arg0) {
  _modDef12.each(this.names, arg0);
};
const map = new Map();
let closure_13 = String.fromCodePoint(917631);
let closure_14 = String.fromCodePoint(127988);
const re15 = /^(?:\uDB40[\uDC61-\uDC7A])$/;
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/UnicodeEmojis.tsx");

export default {
  getDefaultDiversitySurrogate() {
    return global;
  },
  setDefaultDiversitySurrogate(value) {
    let tmp = null;
    if (null != value) {
      tmp = null;
      if ("" !== value) {
        tmp = value;
      }
    }
    global = tmp;
  },
  getCategories() {
    return Object.keys(require("module_4215").emojisByCategory);
  },
  getByName(arg0) {
    const tmp3 = require("module_4215").nameToEmoji[arg0];
    let tmp4 = null;
    if (null != tmp3) {
      tmp4 = require("module_4215").emojis[tmp3];
    }
    let tmp5 = null;
    if (null != tmp4) {
      value = weakMap.get(tmp4);
      if (null == value) {
        const tmp10 = new Emoji(tmp4);
        const result = weakMap.set(tmp4, tmp10);
        value = tmp10;
      }
      tmp5 = value;
    }
    return tmp5;
  },
  getByCategory(name) {
    value = map.get(name);
    if (null == value) {
      const tmp4 = require("module_4215").emojisByCategory[name];
      const emojis = require("module_4215").emojis;
      const result = require("EmojiUtils").filterUnsupportedEmojis(emojis.slice(tmp4[0], tmp4[1]));
      const mapped = result.map(parseRawEmojiObject);
      const result1 = map.set(name, mapped);
      value = mapped;
      const obj2 = require("EmojiUtils");
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
      const tmp3 = require("module_4215").nameToEmoji[arg1];
      let tmp4 = null;
      if (null != tmp3) {
        tmp4 = require("module_4215").emojis[tmp3];
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
      const mapped = findInlineEmojisFromSurrogates(text, true).map((type) => "text" === type.type ? type.text : type.emojiName);
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
    const mapped = findInlineEmojisFromSurrogates(c2).map((type) => "text" === type.type ? type.text : type.emojiName);
    return mapped.join("");
  },
  convertNameToSurrogate(emojiName) {
    let str = arg1;
    if (arg1 === undefined) {
      str = "";
    }
    const tmp3 = require("module_4215").nameToEmoji[emojiName];
    let tmp4 = null;
    if (null != tmp3) {
      tmp4 = require("module_4215").emojis[tmp3];
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
    const tmp3 = require("module_4215").surrogateToEmoji[name];
    let tmp4 = null;
    if (null != tmp3) {
      tmp4 = require("module_4215").emojis[tmp3];
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
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(key10009) : call(tmp3, key10009)) {
      str = _mod13984[key10009];
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
    const tmp4 = require("module_4215").surrogateToEmoji[reduced];
    let tmp5 = null;
    if (null != tmp4) {
      tmp5 = require("module_4215").emojis[tmp4];
    }
    let str;
    if (tmp5 != null) {
      str = tmp5.names[0];
    }
    if (str == null) {
      str = "";
    }
    const tmp6 = require("module_4215").nameToEmoji[str];
    let tmp7 = null;
    if (null != tmp6) {
      tmp7 = require("module_4215").emojis[tmp6];
    }
    let tmp8 = null;
    if (null != tmp7) {
      value = weakMap.get(tmp7);
      if (null == value) {
        const tmp13 = new Emoji(tmp7);
        const result = weakMap.set(tmp7, tmp13);
        value = tmp13;
      }
      tmp8 = value;
    }
    return tmp8;
  },
  forEach(fn) {
    for (const item10011 of tmp) {
      let hasMultiDiversityParent = item10011.hasDiversityParent;
      if (!hasMultiDiversityParent) {
        hasMultiDiversityParent = item10011.hasMultiDiversityParent;
      }
      if (!hasMultiDiversityParent) {
        let tmp6 = arg0(parseRawEmojiObject(item10011));
      }
      continue;
    }
  },
  numDiversitySprites: fn(4215).numDiversitySprites,
  numNonDiversitySprites: fn(4215).numNonDiversitySprites,
  EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  EMOJI_NAME_AND_DIVERSITY_RE: tmp3,
  EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
  hasSurrogates(match) {
    return _modDef12.toArray(match).some((item) => null != require("module_4215").surrogateToEmoji[item]);
  }
};
export const DIVERSITY_SURROGATES = items;
export { Emoji };
export const asUnicodeEmoji = function asUnicodeEmoji(id) {
  let tmp = null;
  if (null == id.id) {
    tmp = null;
    if (null != id.name) {
      tmp = null;
      if (id.name.length > 0) {
        const obj = { name: id.name, id: null };
        tmp = obj;
      }
    }
  }
  return tmp;
};