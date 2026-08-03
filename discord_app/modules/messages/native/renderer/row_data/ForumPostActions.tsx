// === Module 7855: createDefaultReaction ===

// Module 7855 (createDefaultReaction)
import { HelpdeskArticles } from "ME";

let result = require("registerAsset").fileFinishedImporting("modules/messages/native/renderer/row_data/ForumPostActions.tsx");

export const createDefaultReaction = function createDefaultReaction(arg0) {
  let customGuildEmoji;
  let defaultReactionEmoji;
  let emojiId;
  let emojiName;
  ({ defaultReactionEmoji, customGuildEmoji } = arg0);
  let obj = require(7859) /* apexExperiment */;
  const result = obj.shouldSkipAccessibilityLabels();
  let tmp4;
  if (null != defaultReactionEmoji) {
    ({ emojiId, emojiName } = defaultReactionEmoji);
    if (null != emojiId) {
      if (null != customGuildEmoji) {
        let str2 = customGuildEmoji.name;
        if (str2 == null) {
          str2 = "";
        }
        obj = { id: null, name: "a", animated: 1802240002, src: 21168131, displayName: -268434591 };
        obj[0] = emojiId;
        obj[2] = customGuildEmoji.animated;
        obj = { id: null, animated: null, size: 48 };
        obj[0] = emojiId;
        obj[1] = customGuildEmoji.animated;
        obj[3] = importDefault(1416).getEmojiURL(obj);
        let accessibleEmojiDisplayName = str2;
        if (!result) {
          let tmpResult = tmp(3894);
          const obj1 = { id: null, name: null, animated: null };
          obj1[0] = emojiId;
          obj1[1] = str2;
          obj1[2] = customGuildEmoji.animated;
          accessibleEmojiDisplayName = tmpResult.getAccessibleEmojiDisplayName(false, 0, obj1);
        }
        obj[4] = accessibleEmojiDisplayName;
        tmp4 = obj;
        const obj7 = importDefault(1416);
      }
    }
    if (null != emojiName) {
      let str = emojiName;
      if (emojiName == null) {
        str = "";
      }
      let obj2 = { id: "Array", name: false, animated: null, src: null, displayName: 0 };
      obj2[1] = emojiName;
      obj2 = importDefault(3900);
      obj2[3] = obj2.getURL(emojiName);
      let accessibleEmojiDisplayName1 = str;
      if (!result) {
        tmpResult = tmp(3894);
        const obj3 = { id: "Array", name: false, animated: null };
        obj3[1] = str;
        accessibleEmojiDisplayName1 = tmpResult.getAccessibleEmojiDisplayName(false, 0, obj3);
      }
      obj2[4] = accessibleEmojiDisplayName1;
      tmp4 = obj2;
    }
  }
  let tmp9;
  if (null != tmp4) {
    const obj4 = { emoji: null, me: false, count: 0 };
    obj4[0] = tmp4;
    tmp9 = obj4;
  }
  return tmp9;
};
export const createForumPostActions = function createForumPostActions(arg0) {
  let defaultReaction;
  let hasReactions;
  let isFollowing;
  let showMediaPostSharePrompt;
  ({ isFollowing, defaultReaction } = arg0);
  ({ hasReactions, showMediaPostSharePrompt } = arg0);
  const getAssetUriForEmbed = require(7853) /* frozen */.getAssetUriForEmbed;
  if (isFollowing) {
    let assetUriForEmbed = getAssetUriForEmbed(tmp4(4208));
    let tmp6 = tmp4;
    let tmp8 = tmp;
  } else {
    assetUriForEmbed = getAssetUriForEmbed(tmp4(7856));
    tmp6 = tmp4;
    tmp8 = tmp;
  }
  if (null != assetUriForEmbed) {
    let tmp8Result = tmp8(7853);
    let stringResult;
    const assetUriForEmbed1 = tmp8Result.getAssetUriForEmbed(tmp6(4200));
    if (!hasReactions) {
      let emoji;
      if (defaultReaction != null) {
        emoji = defaultReaction.emoji;
      }
      if (null == emoji) {
        const intl = tmp8(1236).intl;
        stringResult = intl.string(tmp8(1236).t.xpOyTO);
      }
    }
    let tmp14;
    if (showMediaPostSharePrompt) {
      let obj = { title: null, subtitle: null, cta: null, icon: null, closeIcon: null };
      const intl2 = tmp8(1236).intl;
      obj[0] = intl2.string(tmp8(1236).t["5uAO7d"]);
      const intl3 = tmp8(1236).intl;
      obj = { helpArticleUrl: null };
      const obj1 = { url: null };
      let tmp6Result = tmp6(1945);
      obj1[0] = tmp6Result.getCreatorSupportArticleURL(HelpdeskArticles.MEDIA_CHANNEL);
      obj[0] = obj1;
      obj[1] = intl3.formatToParts(tmp8(1236).t.YtCu5p, obj);
      const intl4 = tmp8(1236).intl;
      obj[2] = intl4.string(tmp8(1236).t.C5UQC9);
      tmp8Result = tmp8(7853);
      obj[3] = tmp8Result.getAssetUriForEmbed(tmp6(7857));
      obj[4] = tmp8(7853).getAssetUriForEmbed(tmp6(7858));
      tmp14 = obj;
      const tmp8Result1 = tmp8(7853);
    }
    const obj2 = { numDisplayedReactions: 3, isFollowing: null, followIcon: null, followLabel: null, shareIcon: null, shareLabel: null, defaultReaction: null, addReactLabel: null, sharePrompt: null };
    obj2[1] = isFollowing;
    obj2[2] = assetUriForEmbed;
    const intl5 = tmp8(1236).intl;
    const string = intl5.string;
    const t = tmp8(1236).t;
    if (isFollowing) {
      let stringResult1 = string(t["OtF+lC"]);
    } else {
      stringResult1 = string(t["0rQinA"]);
    }
    obj2[3] = stringResult1;
    obj2[4] = assetUriForEmbed1;
    const intl6 = tmp8(1236).intl;
    obj2[5] = intl6.string(tmp8(1236).t.Ej3B3Y);
    obj2[6] = defaultReaction;
    obj2[7] = stringResult;
    obj2[8] = tmp14;
    return obj2;
  } else {
    tmp6Result = tmp6(1208);
    const _HermesInternal = HermesInternal;
    tmp6Result.captureMessage("Forum follow is null. isFollowing: " + isFollowing + " icon: " + tmp6(isFollowing ? 4208 : 7856));
  }
};