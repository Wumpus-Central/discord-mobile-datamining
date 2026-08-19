// discord_app/modules/markup/PlatformMarkupRules.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import getSystemLocale from "../../intl/index.native.tsx";
import getAvatarURLDefault from "../../utils/AvatarUtils.tsx";
import parseRawEmojiObjectDefault from "../emojis/UnicodeEmojis.tsx";
import tDefault from "../../../_runtime/04092_t.js";
import getGameMediaRefURLDefault from "../games/getGameMediaRefURL.tsx";
import textRegexpDefault from "MarkupTextRule.tsx";
import getChannelDefault from "MarkupChannelMentionRule.tsx";
import _modDef6819 from "MarkupAttachmentLinkRule.tsx";
import getGameMentionData from "../game_mentions/hooks/useGameMentionData.tsx";

const Image = get_ActivityIndicator.Image;
const re4 = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
let obj = {};
let merged = Object.assign(tDefault.defaultRules.escape);
obj.requiredFirstCharacters = undefined;
obj.match = function match(arg0) {
  return regex.exec(arg0);
};
obj.parse = function parse() {
  return { type: "text", content: "" };
};
obj[1] = obj;
obj[2] = {
  parse(arg0, fn, nested) {
    if (nested.nested) {
      let obj = { content: null };
      obj[0] = arg0[0];
      return obj;
    } else {
      obj = parseRawEmojiObjectDefault;
      const result = obj.maybeTranslateSurrogatesToInlineEmoji(arg0[0]);
      if (null == result) {
        obj = { content: null };
        obj[0] = arg0[0];
        let tmp9 = obj;
      } else {
        obj1 = {};
        const merged = Object.assign(nested);
        obj1.nested = true;
        tmp9 = fn(result, obj1);
      }
      return tmp9;
    }
  }
};
obj[3] = {
  parse(content) {
    let obj = parseRawEmojiObjectDefault;
    obj = { type: "emoji", content: content[0], surrogate: obj.convertNameToSurrogate(content[1]) };
    return obj;
  }
};
obj[4] = {
  order: textRegexpDefault.order,
  requiredFirstCharacters: ["<"],
  match(arg0) {
    return /^<(a)?:(\w+):(\d+)>/.exec(arg0);
  },
  parse(arg0, arg1, disableAnimatedEmoji) {
    [, tmp, tmp2, tmp3] = arg0;
    let flag = disableAnimatedEmoji.disableAnimatedEmoji;
    if (flag === undefined) {
      flag = false;
    }
    let obj = { id: tmp3, animated: "a" === tmp, size: 48 };
    let emojiURL = obj.getEmojiURL(obj);
    const emojiURL1 = getAvatarURLDefault.getEmojiURL({ id: tmp3, animated: false, size: 48 });
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
    const channelMention = getChannelDefault.channelMention;
    const parsed = channelMention.parse(arg0, arg1, arg2);
    const obj = {};
    const merged = Object.assign(parsed);
    const content = parsed.content;
    let mapped = content;
    if (null != content) {
      mapped = content;
      if (typeof content !== "string") {
        const _Array = Array;
        let arr2 = content;
        if (!(content instanceof Array)) {
          const items = [content];
          arr2 = items;
        }
        mapped = arr2.map((item, index) => {
          let tmp = item;
          if ("channel" === item.type) {
            const obj = {};
            const merged = Object.assign(item);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(item.iconType));
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
      if (typeof inContent !== "string") {
        const _Array2 = Array;
        let arr4 = inContent;
        if (!(inContent instanceof Array)) {
          const items1 = [inContent];
          arr4 = items1;
        }
        mapped1 = arr4.map((item, index) => {
          let tmp = item;
          if ("channel" === item.type) {
            const obj = {};
            const merged = Object.assign(item);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(item.iconType));
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
  parse(closure_0, arg1, channelId) {
    let obj = getGameMentionData;
    const gameMentionData = obj.getGameMentionData(tmp);
    let gameIcon;
    if (gameMentionData != null) {
      gameIcon = gameMentionData.gameIcon;
    }
    obj = { type: "gameMention", gameId: tmp, channelId: channelId.channelId, icon: getGameMediaRefURLDefault(tmp, gameIcon, { size: 32 }), displayName: null };
    let gameName;
    if (gameMentionData != null) {
      gameName = gameMentionData.gameName;
    }
    if (gameName == null) {
      const intl = getSystemLocale.intl;
      gameName = intl.string(getSystemLocale.t["11pdXZ"]);
    }
    obj[4] = gameName;
    return obj;
  }
};
obj[7] = {
  parse(arg0, arg1, arg2) {
    const channelOrMessageUrl = getChannelDefault.channelOrMessageUrl;
    const parsed = channelOrMessageUrl.parse(arg0, arg1, arg2);
    const obj = {};
    const merged = Object.assign(parsed);
    const content = parsed.content;
    let mapped = content;
    if (null != content) {
      mapped = content;
      if (typeof content !== "string") {
        const _Array = Array;
        let arr2 = content;
        if (!(content instanceof Array)) {
          const items = [content];
          arr2 = items;
        }
        mapped = arr2.map((item, index) => {
          let tmp = item;
          if ("channel" === item.type) {
            const obj = {};
            const merged = Object.assign(item);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(item.iconType));
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
      if (typeof inContent !== "string") {
        const _Array2 = Array;
        let arr4 = inContent;
        if (!(inContent instanceof Array)) {
          const items1 = [inContent];
          arr4 = items1;
        }
        mapped1 = arr4.map((item, index) => {
          let tmp = item;
          if ("channel" === item.type) {
            const obj = {};
            const merged = Object.assign(item);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(item.iconType));
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
    const mediaPostLink = getChannelDefault.mediaPostLink;
    const parsed = mediaPostLink.parse(arg0, arg1, arg2);
    let obj = {};
    let merged = Object.assign(parsed);
    const content = parsed.content;
    let mapped = content;
    if (null != content) {
      mapped = content;
      if (typeof content !== "string") {
        const _Array = Array;
        let arr2 = content;
        if (!(content instanceof Array)) {
          const items = [content];
          arr2 = items;
        }
        mapped = arr2.map((item, index) => {
          let tmp = item;
          if ("channel" === item.type) {
            const obj = {};
            const merged = Object.assign(item);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(item.iconType));
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
      if (typeof inContent !== "string") {
        const _Array2 = Array;
        let arr4 = inContent;
        if (!(inContent instanceof Array)) {
          const items1 = [inContent];
          arr4 = items1;
        }
        mapped1 = arr4.map((item, index) => {
          let tmp = item;
          if ("channel" === item.type) {
            const obj = {};
            const merged = Object.assign(item);
            const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(item.iconType));
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
obj[9] = {
  parse(arg0, arg1, arg2) {
    const attachmentLink = _modDef6819.attachmentLink;
    return attachmentLink.parse(arg0, arg1, arg2);
  }
};
obj[10] = {
  order: textRegexpDefault.order,
  requiredFirstCharacters: ["@"],
  match(arg0) {
    return /^(@silent(?![^\s]))/.exec(arg0);
  },
  parse(content) {
    return { type: "text", content: content[0] };
  }
};
let result = obj132.fileFinishedImporting("modules/markup/PlatformMarkupRules.native.tsx");

export default obj;
export const decorateWithIcon = function decorateWithIcon(str) {
  let mapped = str;
  if (null != str) {
    mapped = str;
    if (typeof str !== "string") {
      const _Array = Array;
      let arr2 = str;
      if (!(str instanceof Array)) {
        const items = [str];
        arr2 = items;
      }
      mapped = arr2.map((item, index) => {
        let tmp = item;
        if ("channel" === item.type) {
          const obj = {};
          const merged = Object.assign(item);
          const assetSource = closure_3.resolveAssetSource(callback(table[1]).getChannelMentionIcon(item.iconType));
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