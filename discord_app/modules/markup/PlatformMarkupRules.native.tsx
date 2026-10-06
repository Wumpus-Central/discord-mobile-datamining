// discord_app/modules/markup/PlatformMarkupRules.native.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import intl2 from "../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import _modDef1936 from "../../../_runtime/metro/01936__.js";
import getGameMediaRefURLDefault from "../games/getGameMediaRefURL.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import MarkupTextRuleDefault from "MarkupTextRule.tsx";
import MarkupChannelMentionRuleDefault from "MarkupChannelMentionRule.tsx";
import MarkupAttachmentLinkRuleDefault from "MarkupAttachmentLinkRule.tsx";
import utils_ChannelUtils from "../../utils/native/ChannelUtils.tsx";
import useGameMentionData from "../game_mentions/hooks/useGameMentionData.tsx";
import MarkupInvisibleUnicode from "MarkupInvisibleUnicode.tsx";
import size from "../../../_runtime/metro/00002__.js";

let resolveAssetSource;

let obj2;
let obj3;
let obj4;
const f91052 = (type) => {
  let uri;
  let tmp = type;
  if ("channel" === type.type) {
    const obj = { icon: uri };
    const merged = Object.assign(type);
    resolveAssetSource = resolveAssetSource.resolveAssetSource;
    const obj2 = utils_ChannelUtils;
    const assetSource = resolveAssetSource(obj2.getChannelMentionIcon(type.iconType));
    uri = undefined;
    if (assetSource != null) {
      uri = assetSource.uri;
    }
    tmp = obj;
  }
  return tmp;
};
const Image = react_native.Image;
let obj = {
  escape: {
    requiredFirstCharacters: ["\\"],
    match(arg0, allowEscape) {
      if (false === allowEscape.allowEscape) {
        return null;
      } else {
        let tmp3;
        const obj3 = /^\\([^0-9A-Za-z\s])/;
        const match = obj3.exec(arg0);
        if (null == match) {
          tmp3 = match;
        } else {
          tmp3 = null;
          const obj = UnicodeEmojisDefault;
          if (!obj.hasSurrogates(match[0])) {
            const _JSON = JSON;
            const json = JSON.stringify(match[0]);
            tmp3 = null;
          }
        }
        return tmp3;
      }
    },
  },
  invisibleUnicode: obj2,
  text: {
    parse(arg0, fn, nested) {
      if (nested.nested) {
        return { content: arg0[0] };
      } else {
        let tmp9;
        const obj = UnicodeEmojisDefault;
        const result = obj.maybeTranslateSurrogatesToInlineEmoji(arg0[0]);
        if (null == result) {
          tmp9 = { content: arg0[0] };
          const obj3 = { content: arg0[0] };
        } else {
          const obj4 = { nested: true };
          const merged = Object.assign(nested);
          tmp9 = fn(result, obj4);
        }
        return tmp9;
      }
    },
  },
  emoji: {
    parse(content) {
      const obj = UnicodeEmojisDefault;
      const obj2 = { type: "emoji", content: content[0], surrogate: obj.convertNameToSurrogate(content[1]) };
      return obj2;
    },
  },
  customEmoji: obj3,
  channelMention: {
    parse(arg0, arg1, arg2) {
      let mapped;
      let mapped1;
      const channelMention = MarkupChannelMentionRuleDefault.channelMention;
      const parsed = channelMention.parse(arg0, arg1, arg2);
      const obj = { content: mapped, inContent: mapped1 };
      const merged = Object.assign(parsed);
      const content = parsed.content;
      mapped = content;
      if (null != content) {
        mapped = content;
        if (typeof content !== "string") {
          const _Array = Array;
          let arr2 = content;
          if (!(content instanceof Array)) {
            const items = [content];
            arr2 = items;
          }
          mapped = arr2.map(f91052);
        }
      }
      const inContent = parsed.inContent;
      mapped1 = inContent;
      if (null != inContent) {
        mapped1 = inContent;
        if (typeof inContent !== "string") {
          const _Array2 = Array;
          let arr4 = inContent;
          if (!(inContent instanceof Array)) {
            const items1 = [inContent];
            arr4 = items1;
          }
          mapped1 = arr4.map(f91052);
        }
      }
      return obj;
    },
  },
  gameMention: {
    parse(gameId, arg1, channelId) {
      let gameName;
      const obj = useGameMentionData;
      const gameMentionData = obj.getGameMentionData(tmp);
      let gameIcon;
      const tmp5 = getGameMediaRefURLDefault;
      if (gameMentionData != null) {
        gameIcon = gameMentionData.gameIcon;
      }
      const obj2 = {
        type: "gameMention",
        gameId: gameId[1],
        channelId: channelId.channelId,
        icon: tmp5(gameId[1], gameIcon, { size: 32 }),
        displayName: gameName,
      };
      gameName = undefined;
      if (gameMentionData != null) {
        gameName = gameMentionData.gameName;
      }
      if (gameName == null) {
        const intl = intl2.intl;
        gameName = intl.string(intl2.t["11pdXZ"]);
      }
      return obj2;
    },
  },
  channelOrMessageUrl: {
    parse(arg0, arg1, arg2) {
      let mapped;
      let mapped1;
      const channelOrMessageUrl = MarkupChannelMentionRuleDefault.channelOrMessageUrl;
      const parsed = channelOrMessageUrl.parse(arg0, arg1, arg2);
      const obj = { content: mapped, inContent: mapped1 };
      const merged = Object.assign(parsed);
      const content = parsed.content;
      mapped = content;
      if (null != content) {
        mapped = content;
        if (typeof content !== "string") {
          const _Array = Array;
          let arr2 = content;
          if (!(content instanceof Array)) {
            const items = [content];
            arr2 = items;
          }
          mapped = arr2.map(f91052);
        }
      }
      const inContent = parsed.inContent;
      mapped1 = inContent;
      if (null != inContent) {
        mapped1 = inContent;
        if (typeof inContent !== "string") {
          const _Array2 = Array;
          let arr4 = inContent;
          if (!(inContent instanceof Array)) {
            const items1 = [inContent];
            arr4 = items1;
          }
          mapped1 = arr4.map(f91052);
        }
      }
      return obj;
    },
  },
  mediaPostLink: {
    parse(arg0, arg1, arg2) {
      let mapped;
      let mapped1;
      const mediaPostLink = MarkupChannelMentionRuleDefault.mediaPostLink;
      const parsed = mediaPostLink.parse(arg0, arg1, arg2);
      let obj = { content: mapped, inContent: mapped1 };
      let merged = Object.assign(parsed);
      const content = parsed.content;
      mapped = content;
      if (null != content) {
        mapped = content;
        if (typeof content !== "string") {
          const _Array = Array;
          let arr2 = content;
          if (!(content instanceof Array)) {
            const items = [content];
            arr2 = items;
          }
          mapped = arr2.map(f91052);
        }
      }
      const inContent = parsed.inContent;
      mapped1 = inContent;
      if (null != inContent) {
        mapped1 = inContent;
        if (typeof inContent !== "string") {
          const _Array2 = Array;
          let arr4 = inContent;
          if (!(inContent instanceof Array)) {
            const items1 = [inContent];
            arr4 = items1;
          }
          mapped1 = arr4.map(f91052);
        }
      }
      return obj;
    },
  },
  attachmentLink: {
    parse(arg0, arg1, arg2) {
      const attachmentLink = MarkupAttachmentLinkRuleDefault.attachmentLink;
      return attachmentLink.parse(arg0, arg1, arg2);
    },
  },
  silentPrefix: obj4,
};
obj2 = {
  requiredFirstCharacters: undefined,
  match(arg0) {
    const INVISIBLE_CHAR_REGEX = MarkupInvisibleUnicode.INVISIBLE_CHAR_REGEX;
    return INVISIBLE_CHAR_REGEX.exec(arg0);
  },
  parse() {
    return { type: "text", content: "" };
  },
};
let merged = Object.assign(_modDef1936.defaultRules.escape);
obj3 = {
  order: MarkupTextRuleDefault.order,
  requiredFirstCharacters: ["<"],
  match(arg0) {
    const obj = /^<(a)?:(\w+):(\d+)>/;
    return obj.exec(arg0);
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
    const obj = AvatarUtilsDefault;
    const obj2 = { id: tmp3, animated: "a" === tmp, size: 48 };
    let emojiURL = obj.getEmojiURL(obj2);
    const obj3 = AvatarUtilsDefault;
    const emojiURL1 = obj3.getEmojiURL({ id: tmp3, animated: false, size: 48 });
    const obj4 = { id: tmp3, alt: tmp2, src: emojiURL, frozenSrc: emojiURL1 };
    if (flag) {
      emojiURL = emojiURL1;
    }
    return obj4;
  },
};
obj4 = {
  order: MarkupTextRuleDefault.order,
  requiredFirstCharacters: ["@"],
  match(arg0) {
    const obj = /^(@silent(?![^\s]))/;
    return obj.exec(arg0);
  },
  parse(content) {
    return { type: "text", content: content[0] };
  },
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
      mapped = arr2.map(f91052);
    }
  }
  return mapped;
};
export const hydrateGameMention = function hydrateGameMention(gameId, channelId) {
  let gameName;
  const obj = useGameMentionData;
  const gameMentionData = obj.getGameMentionData(gameId);
  let gameIcon;
  const tmp4 = getGameMediaRefURLDefault;
  if (gameMentionData != null) {
    gameIcon = gameMentionData.gameIcon;
  }
  const obj2 = {
    type: "gameMention",
    gameId,
    channelId: channelId.channelId,
    icon: tmp4(gameId, gameIcon, { size: 32 }),
    displayName: gameName,
  };
  gameName = undefined;
  if (gameMentionData != null) {
    gameName = gameMentionData.gameName;
  }
  if (gameName == null) {
    const intl = intl2.intl;
    gameName = intl.string(intl2.t["11pdXZ"]);
  }
  return obj2;
};
