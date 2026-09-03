// === Module 7869: createDefaultReaction ===

// Module 7869 (createDefaultReaction)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import frozen from "frozen" /* 7867 */;

const HelpdeskArticles = ME.HelpdeskArticles;
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/ForumPostActions.tsx");

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
        let obj = { id: null, name: "a", animated: "a", src: "isArray", displayName: "icon" };
        obj[0] = emojiId;
        obj[2] = customGuildEmoji.animated;
        obj = { id: null, animated: null, size: 48 };
        obj[0] = emojiId;
        obj[1] = customGuildEmoji.animated;
        obj[3] = emojiId(str2[10]).getEmojiURL(obj);
        const obj6 = emojiId(str2[10]);
        obj1 = { expensive: null, cheap: null };
        obj1[0] = function expensive() {
          let obj = customGuildEmoji(str2[12]);
          obj = { id: emojiId, name: str2, animated: customGuildEmoji.animated };
          return obj.getAccessibleEmojiDisplayName(false, 0, obj);
        };
        obj1[1] = str2;
        obj[4] = customGuildEmoji(str2[11]).getAccessibilityLabelOrCheapFallbackUnsafe(obj1);
        tmp = obj;
        const obj8 = customGuildEmoji(str2[11]);
      }
    }
    if (null != emojiName) {
      str = emojiName;
      if (emojiName == null) {
        str = "";
      }
      obj = { id: "Array", name: false, animated: null, src: null, displayName: "fast" };
      obj[1] = emojiName;
      obj1 = emojiId(str2[13]);
      obj[3] = obj1.getURL(emojiName);
      let obj2 = customGuildEmoji(str2[11]);
      obj2 = { expensive: null, cheap: null };
      obj2[0] = function expensive() {
        let obj = customGuildEmoji(str2[12]);
        obj = { id: "Array", name: false, animated: null };
        obj[1] = str;
        return obj.getAccessibleEmojiDisplayName(false, 0, obj);
      };
      obj2[1] = str;
      obj[4] = obj2.getAccessibilityLabelOrCheapFallbackUnsafe(obj2);
      tmp = obj;
    }
  }
  let tmp8;
  if (null != tmp) {
    const obj3 = { emoji: null, me: false, count: 0 };
    obj3[0] = tmp;
    tmp8 = obj3;
  }
  return tmp8;
};
export const createForumPostActions = function createForumPostActions(arg0) {
  ({ isFollowing, defaultReaction } = arg0);
  ({ hasReactions, showMediaPostSharePrompt } = arg0);
  const getAssetUriForEmbed = frozen.getAssetUriForEmbed;
  if (isFollowing) {
    let assetUriForEmbed = getAssetUriForEmbed(tmp4(4430));
    let tmp6 = tmp4;
    let tmp8 = tmp;
  } else {
    assetUriForEmbed = getAssetUriForEmbed(tmp4(7870));
    tmp6 = tmp4;
    tmp8 = tmp;
  }
  if (null != assetUriForEmbed) {
    let tmp8Result = tmp8(7867);
    let stringResult;
    const assetUriForEmbed1 = tmp8Result.getAssetUriForEmbed(tmp6(4422));
    if (!hasReactions) {
      let emoji;
      if (defaultReaction != null) {
        emoji = defaultReaction.emoji;
      }
      if (null == emoji) {
        const intl = tmp8(1233).intl;
        stringResult = intl.string(tmp8(1233).t.xpOyTO);
      }
    }
    let tmp14;
    if (showMediaPostSharePrompt) {
      let obj = { title: null, subtitle: null, cta: null, icon: null, closeIcon: null };
      const intl2 = tmp8(1233).intl;
      obj[0] = intl2.string(tmp8(1233).t["5uAO7d"]);
      const intl3 = tmp8(1233).intl;
      obj = { helpArticleUrl: null };
      obj1 = { url: null };
      let tmp6Result = tmp6(1994);
      obj1[0] = tmp6Result.getCreatorSupportArticleURL(HelpdeskArticles.MEDIA_CHANNEL);
      obj[0] = obj1;
      obj[1] = intl3.formatToParts(tmp8(1233).t.YtCu5p, obj);
      const intl4 = tmp8(1233).intl;
      obj[2] = intl4.string(tmp8(1233).t.C5UQC9);
      tmp8Result = tmp8(7867);
      obj[3] = tmp8Result.getAssetUriForEmbed(tmp6(7871));
      obj[4] = tmp8(7867).getAssetUriForEmbed(tmp6(7824));
      tmp14 = obj;
      const tmp8Result1 = tmp8(7867);
    }
    const obj2 = { numDisplayedReactions: 3, isFollowing: null, followIcon: null, followLabel: null, shareIcon: null, shareLabel: null, defaultReaction: null, addReactLabel: null, sharePrompt: null };
    obj2[1] = isFollowing;
    obj2[2] = assetUriForEmbed;
    const intl5 = tmp8(1233).intl;
    const string = intl5.string;
    const t = tmp8(1233).t;
    if (isFollowing) {
      let stringResult1 = string(t["OtF+lC"]);
    } else {
      stringResult1 = string(t["0rQinA"]);
    }
    obj2[3] = stringResult1;
    obj2[4] = assetUriForEmbed1;
    const intl6 = tmp8(1233).intl;
    obj2[5] = intl6.string(tmp8(1233).t.Ej3B3Y);
    obj2[6] = defaultReaction;
    obj2[7] = stringResult;
    obj2[8] = tmp14;
    return obj2;
  } else {
    tmp6Result = tmp6(1205);
    const _HermesInternal = HermesInternal;
    tmp6Result.captureMessage("Forum follow is null. isFollowing: " + isFollowing + " icon: " + tmp6(isFollowing ? 4430 : 7870));
  }
};