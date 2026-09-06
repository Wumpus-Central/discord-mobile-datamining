// discord_app/modules/markup/PlatformMarkupRules.native.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import util from "../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import getGameMediaRefURLDefault from "../games/getGameMediaRefURL.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import _modDef4257 from "../../../_runtime/metro/04257__.js";
import MarkupTextRuleDefault from "MarkupTextRule.tsx";
import MarkupChannelMentionRuleDefault from "MarkupChannelMentionRule.tsx";
import MarkupAttachmentLinkRuleDefault from "MarkupAttachmentLinkRule.tsx";
import utils_ChannelUtils from "../../utils/native/ChannelUtils.tsx";
import useGameMentionData from "../game_mentions/hooks/useGameMentionData.tsx";
import MarkupInvisibleUnicode from "MarkupInvisibleUnicode.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    },
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
  silentPrefix: null,
};
obj = {};
let merged = Object.assign(_modDef4257.defaultRules.escape);
obj.requiredFirstCharacters = undefined;
obj.match = function match(arg0) {
  const INVISIBLE_CHAR_REGEX = MarkupInvisibleUnicode.INVISIBLE_CHAR_REGEX;
  return INVISIBLE_CHAR_REGEX.exec(arg0);
};
obj.parse = function parse() {
  return { type: "text", content: "" };
};
obj.invisibleUnicode = obj;
obj.text = {
  parse(arg0, fn, nested) {
    if (nested.nested) {
      let obj = { content: arg0[0] };
      return obj;
    } else {
      obj = UnicodeEmojisDefault;
      const result = obj.maybeTranslateSurrogatesToInlineEmoji(arg0[0]);
      if (null == result) {
        obj = { content: arg0[0] };
        let tmp9 = obj;
      } else {
        const obj1 = {};
        const merged = Object.assign(nested);
        obj1.nested = true;
        tmp9 = fn(result, obj1);
      }
      return tmp9;
    }
  },
};
obj.emoji = {
  parse(content) {
    let obj = UnicodeEmojisDefault;
    obj = { type: "emoji", content: content[0], surrogate: obj.convertNameToSurrogate(content[1]) };
    return obj;
  },
};
obj = {
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
    let obj = { id: tmp3, animated: "a" === tmp, size: 48 };
    let emojiURL = obj.getEmojiURL(obj);
    const emojiURL1 = AvatarUtilsDefault.getEmojiURL({ id: tmp3, animated: false, size: 48 });
    obj = { id: tmp3, alt: tmp2, src: null, frozenSrc: null };
    if (flag) {
      emojiURL = emojiURL1;
    }
    obj.src = emojiURL;
    obj.frozenSrc = emojiURL1;
    return obj;
  },
};
obj.customEmoji = obj;
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
  },
};
obj.gameMention = {
  parse(gameId, arg1, channelId) {
    let obj = useGameMentionData;
    const gameMentionData = obj.getGameMentionData(tmp);
    let gameIcon;
    if (gameMentionData != null) {
      gameIcon = gameMentionData.gameIcon;
    }
    obj = {
      type: "gameMention",
      gameId: tmp,
      channelId: channelId.channelId,
      icon: getGameMediaRefURLDefault(tmp, gameIcon, { size: 32 }),
      displayName: null,
    };
    let gameName;
    if (gameMentionData != null) {
      gameName = gameMentionData.gameName;
    }
    if (gameName == null) {
      const intl = util.intl;
      gameName = intl.string(util.t["11pdXZ"]);
    }
    obj.displayName = gameName;
    return obj;
  },
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
  },
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
  },
};
obj.attachmentLink = {
  parse(arg0, arg1, arg2) {
    const attachmentLink = MarkupAttachmentLinkRuleDefault.attachmentLink;
    return attachmentLink.parse(arg0, arg1, arg2);
  },
};
obj.silentPrefix = {
  order: MarkupTextRuleDefault.order,
  requiredFirstCharacters: ["@"],
  match(arg0) {
    return /^(@silent(?![^\s]))/.exec(arg0);
  },
  parse(content) {
    return { type: "text", content: content[0] };
  },
};
let result = size.fileFinishedImporting("modules/markup/PlatformMarkupRules.native.tsx");

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
  let obj = useGameMentionData;
  const gameMentionData = obj.getGameMentionData(gameId);
  let gameIcon;
  if (gameMentionData != null) {
    gameIcon = gameMentionData.gameIcon;
  }
  obj = {
    type: "gameMention",
    gameId,
    channelId: channelId.channelId,
    icon: getGameMediaRefURLDefault(gameId, gameIcon, { size: 32 }),
    displayName: null,
  };
  let gameName;
  if (gameMentionData != null) {
    gameName = gameMentionData.gameName;
  }
  if (gameName == null) {
    const intl = util.intl;
    gameName = intl.string(util.t["11pdXZ"]);
  }
  obj.displayName = gameName;
  return obj;
};
