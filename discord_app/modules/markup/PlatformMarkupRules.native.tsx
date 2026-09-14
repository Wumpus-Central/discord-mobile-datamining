// === Module 5108: PlatformMarkupRules ===

// Module 5108 (PlatformMarkupRules)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 1924 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4289 */;
import _modDef4333 from "module_4333" /* 4333 */;
import MarkupTextRuleDefault from "MarkupTextRule" /* 5086 */;
import MarkupChannelMentionRuleDefault from "MarkupChannelMentionRule" /* 5087 */;
import MarkupAttachmentLinkRuleDefault from "MarkupAttachmentLinkRule" /* 5090 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5109 */;
import useGameMentionData from "useGameMentionData" /* 5188 */;
import MarkupInvisibleUnicode from "MarkupInvisibleUnicode" /* 5203 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
let obj = {
  escape: {
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
          obj = UnicodeEmojisDefault;
        }
        return tmp3;
      }
    }
  },
  invisibleUnicode: null,
  text: null,
  emoji: null,
  customEmoji: null,
  channelMention: null,
  gameMention: null,
  channelOrMessageUrl: null,
  mediaPostLink: null,
  attachmentLink: null,
  silentPrefix: null
};
let obj2 = {};
let merged = Object.assign(_modDef4333.defaultRules.escape);
obj2.requiredFirstCharacters = undefined;
obj2.match = function match(arg0) {
  const INVISIBLE_CHAR_REGEX = MarkupInvisibleUnicode.INVISIBLE_CHAR_REGEX;
  return INVISIBLE_CHAR_REGEX.exec(arg0);
};
obj2.parse = function parse() {
  return { type: "text", content: "" };
};
obj.invisibleUnicode = obj2;
obj.text = {
  parse(arg0, fn, nested) {
    if (nested.nested) {
      const obj2 = { content: arg0[0] };
      return obj2;
    } else {
      const result = UnicodeEmojisDefault.maybeTranslateSurrogatesToInlineEmoji(arg0[0]);
      if (null == result) {
        const obj3 = { content: arg0[0] };
        let tmp9 = obj3;
      } else {
        const obj4 = {};
        const merged = Object.assign(nested);
        obj4.nested = true;
        tmp9 = fn(result, obj4);
      }
      return tmp9;
    }
  }
};
obj.emoji = {
  parse(content) {
    return { type: "emoji", content: content[0], surrogate: UnicodeEmojisDefault.convertNameToSurrogate(content[1]) };
  }
};
obj.customEmoji = {
  order: MarkupTextRuleDefault.order,
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
    let emojiURL = AvatarUtilsDefault.getEmojiURL({ id: tmp3, animated: "a" === tmp, size: 48 });
    const obj2 = { id: tmp3, animated: "a" === tmp, size: 48 };
    const emojiURL1 = AvatarUtilsDefault.getEmojiURL({ id: tmp3, animated: false, size: 48 });
    const obj4 = { id: tmp3, alt: tmp2, src: null, frozenSrc: null };
    if (flag) {
      emojiURL = emojiURL1;
    }
    obj4.src = emojiURL;
    obj4.frozenSrc = emojiURL1;
    return obj4;
  }
};
obj.channelMention = {
  parse(arg0, arg1, arg2) {
    const channelMention = MarkupChannelMentionRuleDefault.channelMention;
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
        mapped = arr2.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
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
        mapped1 = arr4.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    obj.inContent = mapped1;
    return obj;
  }
};
obj.gameMention = {
  parse(gameId, arg1, channelId) {
    const gameMentionData = useGameMentionData.getGameMentionData(tmp);
    let gameIcon;
    if (gameMentionData != null) {
      gameIcon = gameMentionData.gameIcon;
    }
    const obj2 = { type: "gameMention", gameId: gameId[1], channelId: channelId.channelId, icon: getGameMediaRefURLDefault(gameId[1], gameIcon, { size: 32 }), displayName: null };
    let gameName;
    if (gameMentionData != null) {
      gameName = gameMentionData.gameName;
    }
    if (gameName == null) {
      const intl = util.intl;
      gameName = intl.string(util.t["11pdXZ"]);
    }
    obj2.displayName = gameName;
    return obj2;
  }
};
obj.channelOrMessageUrl = {
  parse(arg0, arg1, arg2) {
    const channelOrMessageUrl = MarkupChannelMentionRuleDefault.channelOrMessageUrl;
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
        mapped = arr2.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
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
        mapped1 = arr4.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    obj.inContent = mapped1;
    return obj;
  }
};
obj.mediaPostLink = {
  parse(arg0, arg1, arg2) {
    const mediaPostLink = MarkupChannelMentionRuleDefault.mediaPostLink;
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
        mapped = arr2.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
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
        mapped1 = arr4.map((type) => {
          let tmp = type;
          if ("channel" === type.type) {
            const obj = {};
            const merged = Object.assign(type);
            const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelMentionIcon(type.iconType));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.icon = uri;
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    obj.inContent = mapped1;
    return obj;
  }
};
obj.attachmentLink = {
  parse(arg0, arg1, arg2) {
    const attachmentLink = MarkupAttachmentLinkRuleDefault.attachmentLink;
    return attachmentLink.parse(arg0, arg1, arg2);
  }
};
let obj3 = {
  order: MarkupTextRuleDefault.order,
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
    let emojiURL = AvatarUtilsDefault.getEmojiURL({ id: tmp3, animated: "a" === tmp, size: 48 });
    const obj2 = { id: tmp3, animated: "a" === tmp, size: 48 };
    const emojiURL1 = AvatarUtilsDefault.getEmojiURL({ id: tmp3, animated: false, size: 48 });
    const obj4 = { id: tmp3, alt: tmp2, src: null, frozenSrc: null };
    if (flag) {
      emojiURL = emojiURL1;
    }
    obj4.src = emojiURL;
    obj4.frozenSrc = emojiURL1;
    return obj4;
  }
};
obj.silentPrefix = {
  order: MarkupTextRuleDefault.order,
  requiredFirstCharacters: ["@"],
  match(arg0) {
    return /^(@silent(?![^\s]))/.exec(arg0);
  },
  parse(content) {
    return { type: "text", content: content[0] };
  }
};
let result = size.fileFinishedImporting("modules/markup/PlatformMarkupRules.native.tsx");

export default obj;
export const decorateWithIcon = function decorateWithIcon(content) {
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
      mapped = arr2.map((type) => {
        let tmp = type;
        if ("channel" === type.type) {
          const obj = {};
          const merged = Object.assign(type);
          const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelMentionIcon(type.iconType));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          obj.icon = uri;
          tmp = obj;
        }
        return tmp;
      });
    }
  }
  return mapped;
};
export const hydrateGameMention = function hydrateGameMention(gameId, channelId) {
  const gameMentionData = useGameMentionData.getGameMentionData(gameId);
  let gameIcon;
  if (gameMentionData != null) {
    gameIcon = gameMentionData.gameIcon;
  }
  const obj2 = { type: "gameMention", gameId, channelId: channelId.channelId, icon: getGameMediaRefURLDefault(gameId, gameIcon, { size: 32 }), displayName: null };
  let gameName;
  if (gameMentionData != null) {
    gameName = gameMentionData.gameName;
  }
  if (gameName == null) {
    const intl = util.intl;
    gameName = intl.string(util.t["11pdXZ"]);
  }
  obj2.displayName = gameName;
  return obj2;
};