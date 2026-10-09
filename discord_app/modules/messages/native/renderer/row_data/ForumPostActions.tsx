// === Module 7874: ForumPostActions ===

// Module 7874 (ForumPostActions)
import Constants from "Constants" /* 1085 */;
import ReactionUtils from "ReactionUtils" /* 4721 */;
import _modDef4777 from "module_4777" /* 4777 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7872 */;
import _modDef7875 from "module_7875" /* 7875 */;
import size from "module_2" /* 2 */;

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
        const obj4 = { id: emojiId, name: "a", animated: customGuildEmoji.animated, src: -1326776318, displayName: 659095553 };
        const obj5 = { id: emojiId, animated: customGuildEmoji.animated, size: 48 };
        obj4.src = emojiId(str2[10]).getEmojiURL(obj5);
        const obj6 = emojiId(str2[10]);
        const obj7 = {
          expensive() {
                  return ReactionUtils.getAccessibleEmojiDisplayName(false, 0, { id: emojiId, name: str2, animated: customGuildEmoji.animated });
                },
          cheap: str2
        };
        obj4.displayName = customGuildEmoji(str2[11]).getAccessibilityLabelOrCheapFallbackUnsafe(obj7);
        tmp = obj4;
        const obj8 = customGuildEmoji(str2[11]);
      }
    }
    if (null != emojiName) {
      str = emojiName;
      if (emojiName == null) {
        str = "";
      }
      const obj = { id: "Array", name: emojiName, animated: null, src: emojiId(str2[13]).getURL(emojiName), displayName: 0 };
      let obj2 = emojiId(str2[13]);
      const obj9 = {
        expensive() {
              const obj2 = { id: "Array", name: str, animated: null };
              return ReactionUtils.getAccessibleEmojiDisplayName(false, 0, obj2);
            },
        cheap: str
      };
      obj.displayName = customGuildEmoji(str2[11]).getAccessibilityLabelOrCheapFallbackUnsafe(obj9);
      tmp = obj;
      const obj3 = customGuildEmoji(str2[11]);
    }
  }
  let tmp8;
  if (null != tmp) {
    const obj10 = { emoji: tmp, me: false, count: 0 };
    tmp8 = obj10;
  }
  return tmp8;
};
export const createForumPostActions = function createForumPostActions(arg0) {
  ({ isFollowing, defaultReaction } = arg0);
  ({ hasReactions, showMediaPostSharePrompt } = arg0);
  const getAssetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed;
  if (isFollowing) {
    let assetUriForEmbed = getAssetUriForEmbed(_modDef4777);
    let tmp6 = importDefault;
    let tmp8 = require;
  } else {
    assetUriForEmbed = getAssetUriForEmbed(_modDef7875);
    tmp6 = importDefault;
    tmp8 = require;
  }
  if (null != assetUriForEmbed) {
    let stringResult;
    const assetUriForEmbed1 = tmp8(7872).getAssetUriForEmbed(tmp6(5041));
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
      const obj = { title: null, subtitle: null, cta: null, icon: null, closeIcon: null };
      const intl2 = tmp8(1126).intl;
      obj.title = intl2.string(tmp8(1126).t["5uAO7d"]);
      const intl3 = tmp8(1126).intl;
      const obj2 = { helpArticleUrl: null };
      const obj3 = { url: tmp6(2127).getCreatorSupportArticleURL(HelpdeskArticles.MEDIA_CHANNEL) };
      obj2.helpArticleUrl = obj3;
      obj.subtitle = intl3.formatToParts(tmp8(1126).t.YtCu5p, obj2);
      const intl4 = tmp8(1126).intl;
      obj.cta = intl4.string(tmp8(1126).t.C5UQC9);
      const tmp6Result = tmp6(2127);
      obj.icon = tmp8(7872).getAssetUriForEmbed(tmp6(7876));
      const tmp8Result3 = tmp8(7872);
      obj.closeIcon = tmp8(7872).getAssetUriForEmbed(tmp6(6774));
      tmp14 = obj;
      const tmp8Result4 = tmp8(7872);
    }
    const obj4 = { numDisplayedReactions: 3, isFollowing, followIcon: assetUriForEmbed, followLabel: null, shareIcon: null, shareLabel: null, defaultReaction: null, addReactLabel: null, sharePrompt: null };
    const intl5 = tmp8(1126).intl;
    const string = intl5.string;
    const t = tmp8(1126).t;
    if (isFollowing) {
      let stringResult1 = string(t["OtF+lC"]);
    } else {
      stringResult1 = string(t["0rQinA"]);
    }
    obj4.followLabel = stringResult1;
    obj4.shareIcon = assetUriForEmbed1;
    const intl6 = tmp8(1126).intl;
    obj4.shareLabel = intl6.string(tmp8(1126).t.Ej3B3Y);
    obj4.defaultReaction = defaultReaction;
    obj4.addReactLabel = stringResult;
    obj4.sharePrompt = tmp14;
    return obj4;
  } else {
    const _HermesInternal = HermesInternal;
    tmp6(1255).captureMessage("Forum follow is null. isFollowing: " + isFollowing + " icon: " + tmp6(isFollowing ? 4777 : 7875));
    const tmp6Result2 = tmp6(1255);
  }
};