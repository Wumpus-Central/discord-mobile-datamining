// discord_app/modules/messages/native/renderer/row_data/ForumPostActions.tsx
import Constants from "../../../../../Constants.tsx";
import ReactionUtils from "../../../../reactions/ReactionUtils.tsx";
import _modDef4512 from "../../../../../../_runtime/metro/04512__.js";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import _modDef7949 from "../../../../../../_runtime/metro/07949__.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/ForumPostActions.tsx");

export const createDefaultReaction = function createDefaultReaction(arg0) {
  ({ defaultReactionEmoji, customGuildEmoji } = arg0);
  let emojiId;
  let str2;
  let str;
  let tmp;
  if (null != defaultReactionEmoji) {
    emojiId = defaultReactionEmoji.emojiId;
    const emojiName = defaultReactionEmoji.emojiName;
    if (null != emojiId) {
      if (null != customGuildEmoji) {
        str2 = customGuildEmoji.name;
        if (str2 == null) {
          str2 = "";
        }
        let obj = {
          id: emojiId,
          name: "a",
          animated: customGuildEmoji.animated,
          src: "<string:1365331342>",
          displayName: "<string:659423233>",
        };
        obj = { id: emojiId, animated: customGuildEmoji.animated, size: 48 };
        obj.src = emojiId(str2[10]).getEmojiURL(obj);
        const obj6 = emojiId(str2[10]);
        let obj1 = {
          expensive() {
            const obj = { id: emojiId, name: str2, animated: customGuildEmoji.animated };
            return obj.getAccessibleEmojiDisplayName(false, 0, obj);
          },
          cheap: str2,
        };
        obj.displayName = customGuildEmoji(str2[11]).getAccessibilityLabelOrCheapFallbackUnsafe(obj1);
        tmp = obj;
        const obj8 = customGuildEmoji(str2[11]);
      }
    }
    if (null != emojiName) {
      str = emojiName;
      if (emojiName == null) {
        str = "";
      }
      obj = { id: "Array", name: emojiName, animated: null, src: null, displayName: "fast" };
      obj1 = emojiId(str2[13]);
      obj.src = obj1.getURL(emojiName);
      customGuildEmoji(str2[11]);
      const obj2 = {
        expensive() {
          const obj = { id: "Array", name: str, animated: null };
          return obj.getAccessibleEmojiDisplayName(false, 0, obj);
        },
        cheap: str,
      };
      obj.displayName = obj2.getAccessibilityLabelOrCheapFallbackUnsafe(obj2);
      tmp = obj;
    }
  }
  let tmp8;
  if (null != tmp) {
    const obj3 = { emoji: tmp, me: false, count: 0 };
    tmp8 = obj3;
  }
  return tmp8;
};
export const createForumPostActions = function createForumPostActions(arg0) {
  ({ isFollowing, defaultReaction } = arg0);
  ({ hasReactions, showMediaPostSharePrompt } = arg0);
  const getAssetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed;
  if (isFollowing) {
    let assetUriForEmbed = getAssetUriForEmbed(_modDef4512);
    let tmp6 = importDefault;
    let tmp8 = require;
  } else {
    assetUriForEmbed = getAssetUriForEmbed(_modDef7949);
    tmp6 = importDefault;
    tmp8 = require;
  }
  if (null != assetUriForEmbed) {
    let tmp8Result = tmp8(7946);
    let stringResult;
    const assetUriForEmbed1 = tmp8Result.getAssetUriForEmbed(tmp6(4504));
    if (!hasReactions) {
      let emoji;
      if (defaultReaction != null) {
        emoji = defaultReaction.emoji;
      }
      if (null == emoji) {
        const intl = tmp8(1114).intl;
        stringResult = intl.string(tmp8(1114).t.xpOyTO);
      }
    }
    let tmp14;
    if (showMediaPostSharePrompt) {
      let obj = { title: null, subtitle: null, cta: null, icon: null, closeIcon: null };
      const intl2 = tmp8(1114).intl;
      obj.title = intl2.string(tmp8(1114).t["5uAO7d"]);
      const intl3 = tmp8(1114).intl;
      obj = { helpArticleUrl: null };
      const obj1 = { url: null };
      let tmp6Result = tmp6(2024);
      obj1.url = tmp6Result.getCreatorSupportArticleURL(HelpdeskArticles.MEDIA_CHANNEL);
      obj.helpArticleUrl = obj1;
      obj.subtitle = intl3.formatToParts(tmp8(1114).t.YtCu5p, obj);
      const intl4 = tmp8(1114).intl;
      obj.cta = intl4.string(tmp8(1114).t.C5UQC9);
      tmp8Result = tmp8(7946);
      obj.icon = tmp8Result.getAssetUriForEmbed(tmp6(7950));
      obj.closeIcon = tmp8(7946).getAssetUriForEmbed(tmp6(7089));
      tmp14 = obj;
      const tmp8Result1 = tmp8(7946);
    }
    const obj2 = {
      numDisplayedReactions: 3,
      isFollowing,
      followIcon: assetUriForEmbed,
      followLabel: null,
      shareIcon: null,
      shareLabel: null,
      defaultReaction: null,
      addReactLabel: null,
      sharePrompt: null,
    };
    const intl5 = tmp8(1114).intl;
    const string = intl5.string;
    const t = tmp8(1114).t;
    if (isFollowing) {
      let stringResult1 = string(t["OtF+lC"]);
    } else {
      stringResult1 = string(t["0rQinA"]);
    }
    obj2.followLabel = stringResult1;
    obj2.shareIcon = assetUriForEmbed1;
    const intl6 = tmp8(1114).intl;
    obj2.shareLabel = intl6.string(tmp8(1114).t.Ej3B3Y);
    obj2.defaultReaction = defaultReaction;
    obj2.addReactLabel = stringResult;
    obj2.sharePrompt = tmp14;
    return obj2;
  } else {
    tmp6Result = tmp6(1232);
    const _HermesInternal = HermesInternal;
    tmp6Result.captureMessage(
      "Forum follow is null. isFollowing: " + isFollowing + " icon: " + tmp6(isFollowing ? 4512 : 7949),
    );
  }
};
