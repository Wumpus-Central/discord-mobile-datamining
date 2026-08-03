import { Image } from "get ActivityIndicator";

const re4 = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
obj = { escape: obj, invisibleUnicode: null, text: null, emoji: null, customEmoji: null, channelMention: null, channelOrMessageUrl: null, mediaPostLink: null, attachmentLink: null, silentPrefix: null };
obj = {
  requiredFirstCharacters: ["\\"],
  match(arg0, allowEscape) {
    if (false === allowEscape.allowEscape) {
      return null;
    } else {
      const match = /^\\([^0-9A-Za-z\s])/.exec(arg0);
      if (null == match) {
        let tmp3 = match;
      } else {
        tmp3 = null;
        if (!obj.hasSurrogates(match[0])) {
          const _JSON = JSON;
          const json = JSON.stringify(match[0]);
          tmp3 = null;
        }
        obj = importDefault(3896);
      }
      return tmp3;
    }
  }
};
obj = {};
let merged = Object.assign(require("t").defaultRules.escape);
obj.requiredFirstCharacters = undefined;
obj.match = function match(arg0) {
  return regex.exec(arg0);
};
obj.parse = function parse() {
  return { type: "text", content: "" };
};
obj[1] = obj;
obj[2] = {
  parse(arg0, arg1, nested) {
    if (nested.nested) {
      let obj = { content: null };
      obj[0] = arg0[0];
      return obj;
    } else {
      obj = importDefault(3896);
      const result = obj.maybeTranslateSurrogatesToInlineEmoji(arg0[0]);
      if (null == result) {
        obj = { content: null };
        obj[0] = arg0[0];
        let tmp9 = obj;
      } else {
        const obj1 = {};
        const merged = Object.assign(nested);
        obj1.nested = true;
        tmp9 = arg1(result, obj1);
      }
      return tmp9;
    }
  }
};
obj[3] = {
  parse(content) {
    let obj = importDefault(3896);
    obj = { type: "emoji", content: content[0], surrogate: obj.convertNameToSurrogate(content[1]) };
    return obj;
  }
};
obj[4] = {
  order: require("textRegexp").order,
  requiredFirstCharacters: ["<"],
  match(arg0) {
    return /^<(a)?:(\w+):(\d+)>/.exec(arg0);
  },
  parse(arg0, arg1, disableAnimatedEmoji) {
    let tmp;
    let tmp2;
    let tmp3;
    [, tmp, tmp2, tmp3] = arg0;
    let flag = disableAnimatedEmoji.disableAnimatedEmoji;
    if (flag === undefined) {
      flag = false;
    }
    let obj = importDefault(1416);
    obj = { id: tmp3, animated: "a" === tmp, size: 48 };
    let emojiURL = obj.getEmojiURL(obj);
    const emojiURL1 = importDefault(1416).getEmojiURL({ id: tmp3, animated: false, size: 48 });
    obj = { id: tmp3, alt: tmp2, src: null, frozenSrc: null };
    if (flag) {
      emojiURL = emojiURL1;
    }
    obj[2] = emojiURL;
    obj[3] = emojiURL1;
    return obj;
  }
};
obj[5] = {
  parse(arg0, arg1, arg2) {
    const channelMention = importDefault(4696).channelMention;
    const parsed = channelMention.parse(arg0, arg1, arg2);
    const obj = {};
    const merged = Object.assign(parsed);
    const content = parsed.content;
    let mapped = content;
    if (null != content) {
      mapped = content;
      if (typeof content !== "y") {
        const _Array = Array;
        let arr2 = content;
        if (!(content instanceof Array)) {
          const items = [content];
          arr2 = items;
        }
        mapped = arr2.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
            const obj2 = callback(table[1]);
          }
          return tmp;
        });
      }
    }
    obj.content = mapped;
    const inContent = parsed.inContent;
    let mapped1 = inContent;
    if (null != inContent) {
      mapped1 = inContent;
      if (typeof inContent !== "y") {
        const _Array2 = Array;
        let arr4 = inContent;
        if (!(inContent instanceof Array)) {
          const items1 = [inContent];
          arr4 = items1;
        }
        mapped1 = arr4.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
            const obj2 = callback(table[1]);
          }
          return tmp;
        });
      }
    }
    obj.inContent = mapped1;
    return obj;
  }
};
obj[6] = {
  parse(arg0, arg1, arg2) {
    const channelOrMessageUrl = importDefault(4696).channelOrMessageUrl;
    const parsed = channelOrMessageUrl.parse(arg0, arg1, arg2);
    const obj = {};
    const merged = Object.assign(parsed);
    const content = parsed.content;
    let mapped = content;
    if (null != content) {
      mapped = content;
      if (typeof content !== "y") {
        const _Array = Array;
        let arr2 = content;
        if (!(content instanceof Array)) {
          const items = [content];
          arr2 = items;
        }
        mapped = arr2.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
            const obj2 = callback(table[1]);
          }
          return tmp;
        });
      }
    }
    obj.content = mapped;
    const inContent = parsed.inContent;
    let mapped1 = inContent;
    if (null != inContent) {
      mapped1 = inContent;
      if (typeof inContent !== "y") {
        const _Array2 = Array;
        let arr4 = inContent;
        if (!(inContent instanceof Array)) {
          const items1 = [inContent];
          arr4 = items1;
        }
        mapped1 = arr4.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
            const obj2 = callback(table[1]);
          }
          return tmp;
        });
      }
    }
    obj.inContent = mapped1;
    return obj;
  }
};
obj[7] = {
  parse(arg0, arg1, arg2) {
    const mediaPostLink = importDefault(4696).mediaPostLink;
    const parsed = mediaPostLink.parse(arg0, arg1, arg2);
    let obj = {};
    let merged = Object.assign(parsed);
    const content = parsed.content;
    let mapped = content;
    if (null != content) {
      mapped = content;
      if (typeof content !== "y") {
        const _Array = Array;
        let arr2 = content;
        if (!(content instanceof Array)) {
          const items = [content];
          arr2 = items;
        }
        mapped = arr2.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
            const obj2 = callback(table[1]);
          }
          return tmp;
        });
      }
    }
    obj.content = mapped;
    const inContent = parsed.inContent;
    let mapped1 = inContent;
    if (null != inContent) {
      mapped1 = inContent;
      if (typeof inContent !== "y") {
        const _Array2 = Array;
        let arr4 = inContent;
        if (!(inContent instanceof Array)) {
          const items1 = [inContent];
          arr4 = items1;
        }
        mapped1 = arr4.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
            const obj2 = callback(table[1]);
          }
          return tmp;
        });
      }
    }
    obj.inContent = mapped1;
    return obj;
  }
};
obj[8] = {
  parse(arg0, arg1, arg2) {
    const attachmentLink = importDefault(4699).attachmentLink;
    return attachmentLink.parse(arg0, arg1, arg2);
  }
};
let obj1 = {
  order: require("textRegexp").order,
  requiredFirstCharacters: ["<"],
  match(arg0) {
    return /^<(a)?:(\w+):(\d+)>/.exec(arg0);
  },
  parse(arg0, arg1, disableAnimatedEmoji) {
    let tmp;
    let tmp2;
    let tmp3;
    [, tmp, tmp2, tmp3] = arg0;
    let flag = disableAnimatedEmoji.disableAnimatedEmoji;
    if (flag === undefined) {
      flag = false;
    }
    let obj = importDefault(1416);
    obj = { id: tmp3, animated: "a" === tmp, size: 48 };
    let emojiURL = obj.getEmojiURL(obj);
    const emojiURL1 = importDefault(1416).getEmojiURL({ id: tmp3, animated: false, size: 48 });
    obj = { id: tmp3, alt: tmp2, src: null, frozenSrc: null };
    if (flag) {
      emojiURL = emojiURL1;
    }
    obj[2] = emojiURL;
    obj[3] = emojiURL1;
    return obj;
  }
};
obj[9] = {
  order: require("textRegexp").order,
  requiredFirstCharacters: ["@"],
  match(arg0) {
    return /^(@silent(?![^\s]))/.exec(arg0);
  },
  parse(content) {
    return { type: "text", content: content[0] };
  }
};
let obj2 = {
  order: require("textRegexp").order,
  requiredFirstCharacters: ["@"],
  match(arg0) {
    return /^(@silent(?![^\s]))/.exec(arg0);
  },
  parse(content) {
    return { type: "text", content: content[0] };
  }
};
let result = require("parseRawEmojiObject").fileFinishedImporting("modules/markup/PlatformMarkupRules.native.tsx");

export default obj;
export const decorateWithIcon = function decorateWithIcon(arg0) {
  let mapped = arg0;
  if (null != arg0) {
    mapped = arg0;
    if (typeof arg0 !== "y") {
      const _Array = Array;
      let arr2 = arg0;
      if (!(arg0 instanceof Array)) {
        const items = [arg0];
        arr2 = items;
      }
      mapped = arr2.map((type) => {
        let tmp = type;
        if ("channel" === type.type) {
          const obj = {};
          const merged = Object.assign(type);
          const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(type.iconType));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          obj.icon = uri;
          tmp = obj;
          const obj2 = callback(table[1]);
        }
        return tmp;
      });
    }
  }
  return mapped;
};