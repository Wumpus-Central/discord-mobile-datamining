// === Module 7607: ForumPostActions ===

// Module 7607 (ForumPostActions)
import Constants from "Constants" /* 1085 */;
import ReactionUtils from "ReactionUtils" /* 4521 */;
import AssetRegistryDefault from "AssetRegistry" /* 4578 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7605 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7608 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/ForumPostActions.tsx");

export const createDefaultReaction = function createDefaultReaction(arg0) {
  let customGuildEmoji;
  let defaultReactionEmoji;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
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
        const obj4 = { id: emojiId, name: "a", animated: customGuildEmoji.animated, src: obj6.getEmojiURL(obj5), displayName: obj8.getAccessibilityLabelOrCheapFallbackUnsafe(obj7) };
        obj5 = { id: emojiId, animated: customGuildEmoji.animated, size: 48 };
        obj6 = emojiId(str2[10]);
        obj7 = {
          expensive() {
                  const obj = ReactionUtils;
                  const obj2 = { id: emojiId, name: str2, animated: customGuildEmoji.animated };
                  return obj.getAccessibleEmojiDisplayName(false, 0, obj2);
                },
          cheap: str2
        };
        tmp = obj4;
        obj8 = customGuildEmoji(str2[11]);
      }
    }
    if (null != emojiName) {
      str = emojiName;
      if (emojiName == null) {
        str = "";
      }
      let obj = { id: "Array", name: emojiName, animated: null, src: obj2.getURL(emojiName), displayName: obj3.getAccessibilityLabelOrCheapFallbackUnsafe(obj9) };
      obj2 = emojiId(str2[13]);
      obj9 = {
        expensive() {
              const obj2 = { id: "Array", name: str, animated: null };
              const obj = ReactionUtils;
              return obj.getAccessibleEmojiDisplayName(false, 0, obj2);
            },
        cheap: str
      };
      tmp = obj;
      obj3 = customGuildEmoji(str2[11]);
    }
  }
  let tmp8;
  if (null != tmp) {
    tmp8 = { emoji: tmp, me: false, count: 0 };
    const obj10 = { emoji: tmp, me: false, count: 0 };
  }
  return tmp8;
};
export const createForumPostActions = function createForumPostActions(arg0) {
  let YtCu5p;
  let assetUriForEmbed;
  let defaultReaction;
  let formatToParts;
  let hasReactions;
  let intl2;
  let intl4;
  let intl6;
  let isFollowing;
  let obj2;
  let obj3;
  let showMediaPostSharePrompt;
  let stringResult1;
  let tmp6;
  let tmp6Result2;
  let tmp8;
  let tmp8Result3;
  let tmp8Result4;
  ({ isFollowing, defaultReaction } = arg0);
  ({ hasReactions, showMediaPostSharePrompt } = arg0);
  const getAssetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed;
  renderer_EmbedUtils;
  if (isFollowing) {
    assetUriForEmbed = getAssetUriForEmbed(AssetRegistryDefault);
    tmp6 = importDefault;
    tmp8 = require;
  } else {
    assetUriForEmbed = getAssetUriForEmbed(AssetRegistryDefault2);
    tmp6 = importDefault;
    tmp8 = require;
  }
  if (null == assetUriForEmbed) {
    const _HermesInternal = HermesInternal;
    const tmp6Result = tmp6(1242);
    tmp6Result.captureMessage("Forum follow is null. isFollowing: " + isFollowing + " icon: " + tmp6(isFollowing ? 4578 : 7608));
  }
  let stringResult;
  const tmp8Result = tmp8(7605);
  const assetUriForEmbed1 = tmp8Result.getAssetUriForEmbed(tmp6(4840));
  if (!hasReactions) {
    let emoji;
    if (defaultReaction != null) {
      emoji = defaultReaction.emoji;
    }
    if (null == emoji) {
      const intl = tmp8(1126).intl;
      stringResult = intl.string(tmp8(1126).t.xpOyTO);
    }
  }
  let tmp14;
  if (showMediaPostSharePrompt) {
    const obj = { title: intl2.string(tmp8(1126).t["5uAO7d"]), subtitle: formatToParts(YtCu5p, obj2), cta: intl4.string(tmp8(1126).t.C5UQC9), icon: tmp8Result3.getAssetUriForEmbed(tmp6(7609)), closeIcon: tmp8Result4.getAssetUriForEmbed(tmp6(6584)) };
    intl2 = tmp8(1126).intl;
    const intl3 = tmp8(1126).intl;
    formatToParts = intl3.formatToParts;
    obj2 = { helpArticleUrl: obj3 };
    obj3 = { url: tmp6Result2.getCreatorSupportArticleURL(HelpdeskArticles.MEDIA_CHANNEL) };
    YtCu5p = tmp8(1126).t.YtCu5p;
    tmp6Result2 = tmp6(2115);
    intl4 = tmp8(1126).intl;
    tmp8Result3 = tmp8(7605);
    tmp14 = obj;
    tmp8Result4 = tmp8(7605);
  }
  const obj4 = { numDisplayedReactions: 3, isFollowing, followIcon: assetUriForEmbed, followLabel: stringResult1, shareIcon: assetUriForEmbed1, shareLabel: intl6.string(tmp8(1126).t.Ej3B3Y), defaultReaction, addReactLabel: stringResult, sharePrompt: tmp14 };
  const intl5 = tmp8(1126).intl;
  const string = intl5.string;
  const t = tmp8(1126).t;
  if (isFollowing) {
    stringResult1 = string(t["OtF+lC"]);
  } else {
    stringResult1 = string(t["0rQinA"]);
  }
  intl6 = tmp8(1126).intl;
  return obj4;
};