// === Module 12538: EmojiIcon ===

// Module 12538 (EmojiIcon)
import initialize from "initialize" /* 586 */;
import getAvatarURLDefault from "getAvatarURL" /* 1430 */;
import EmojiDefault from "Emoji" /* 5594 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "getEmojiToGroupId" /* 5410 */;
import set from "set" /* 11802 */;
import ME from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function EmojiIcon(arg0) {
  ({ emojiId: require, emojiName } = arg0);
  const tmp = callback4();
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != closure_0) {
      usableCustomEmojiById = closure_1_5.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  obj = { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: null, name: null };
  let emojiURL;
  if (null != stateFromStores) {
    obj = { id: null, animated: null, size: 18 };
    ({ id: obj4[0], animated: obj4[1] } = stateFromStores);
    emojiURL = getAvatarURLDefault.getEmojiURL(obj);
    const tmp5Result = getAvatarURLDefault;
  }
  obj[3] = emojiURL;
  if (emojiName == null) {
    emojiName = "";
  }
  obj[4] = emojiName;
  return jsx(EmojiDefault, { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: null, name: null });
}
({ useForumChannelStore: closure_6, useForumChannelStoreApi: error } = set);
({ AnalyticsObjects: closure_8, AnalyticsPages: c9, AnalyticsSections: c10 } = ME);
let closure_12 = createCacheKey.createStyles({ emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" }, imageEmoji: { height: 18, width: 18 }, textEmoji: { fontSize: 14, lineHeight: 20 } });
let result = set.fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default function ForumPostTagsActionSheet(channel) {
  channel = channel.channel;
  closure_1 = undefined;
  let first;
  let callback;
  closure_1 = callback3();
  const tmp2 = callback(React.useState(new Set(callback2(channel.id).tagFilter)), 2);
  first = tmp2[0];
  callback = tmp2[1];
  let obj = channel(first[8]);
  const unmountEffect = obj.useUnmountEffect(() => {
    state = state.getState();
    state.setTagFilter(channel.id, first);
  });
  obj = { title: null, subtitle: null, leading: null };
  let intl = channel(first[11]).intl;
  obj[0] = intl.string(channel(first[11]).t.TdqRTh);
  let str = " ";
  if (first.size > 0) {
    const intl2 = tmp4(tmp5[11]).intl;
    obj = { count: null };
    obj[0] = first.size;
    str = intl2.formatToPlainString(tmp4(tmp5[11]).t["/FzHJK"], obj);
  }
  obj1 = { scrollable: true, header: null, children: null };
  obj[1] = str;
  let obj2 = {
    onPress() {
      callback(new Set());
    },
    label: null
  };
  const intl3 = tmp4(tmp5[11]).intl;
  obj2[1] = intl3.string(channel(first[11]).t.VkKicb);
  obj[2] = jsx(channel(first[12]).ActionSheetHeaderPressableText, {
    onPress() {
      callback(new Set());
    },
    label: null
  });
  obj1[1] = jsx(channel(first[10]).BottomSheetTitleHeader, { title: null, subtitle: null, leading: null });
  const obj3 = { children: null };
  let set = new Set(callback2(channel.id).tagFilter);
  const availableTags = channel.availableTags;
  obj3[0] = jsx(channel(first[14]).TableRowGroup, {
    hasIcons: true,
    children: availableTags.map((emojiId) => {
      closure_0 = emojiId;
      let obj = { icon: null, label: null, accessibilityLabel: null, checked: null, onPress: null };
      obj = { emojiId: emojiId.emojiId, emojiName: emojiId.emojiName };
      obj[0] = closure_1_11(closure_1_13, obj);
      obj[1] = emojiId.name;
      const intl = channel(first[11]).intl;
      obj = { tagName: emojiId.name };
      obj[2] = intl.formatToPlainString(channel(first[11]).t.tXXD6v, obj);
      obj[3] = first.has(emojiId.id);
      obj[4] = function onPress() {
        let obj = closure_0;
        if (null != closure_0) {
          let FORUM_CHANNEL_HEADER = globalThis;
          const _Set = Set;
          const set = new Set(closure_1_2);
          if (set.has(obj.id)) {
            set.delete(obj.id);
          } else {
            set.add(obj.id);
          }
          obj = { guildId: null, channelId: null, tagId: null, filterTagIds: null, added: null, location: null };
          ({ guild_id: obj3[0], id: obj3[1] } = closure_0);
          obj[2] = obj.id;
          const _Array = FORUM_CHANNEL_HEADER.Array;
          obj[3] = _Array.from(set);
          obj[4] = !set.has(obj.id);
          obj = { page: null, section: null, object: null };
          obj[0] = closure_2_9.GUILD_CHANNEL;
          FORUM_CHANNEL_HEADER = closure_2_10.FORUM_CHANNEL_HEADER;
          obj[1] = FORUM_CHANNEL_HEADER;
          obj[2] = closure_2_8.CHANNEL_TAG;
          obj[5] = obj;
          const result = channel(first[7]).trackForumTagFilterClicked(obj);
          closure_1_3(set);
          const obj2 = channel(first[7]);
        }
      };
      return closure_1_11(channel(first[15]).TableCheckboxRow, obj, emojiId.id);
    })
  });
  obj1[2] = jsx(channel(first[13]).BottomSheetScrollView, { children: null });
  return jsx(channel(first[9]).ActionSheet, { scrollable: true, header: null, children: null });
};