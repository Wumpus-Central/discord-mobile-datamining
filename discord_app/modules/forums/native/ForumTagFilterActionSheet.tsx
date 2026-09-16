// === Module 12907: ForumTagFilterActionSheet ===

// Module 12907 (ForumTagFilterActionSheet)
import initialize from "initialize" /* 504 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import EmojiDefault from "Emoji" /* 7240 */;
import tracking_Tracking from "tracking/Tracking" /* 7881 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5545 */;

require = fn;
function EmojiIcon(arg0) {
  ({ emojiId: require, emojiName } = arg0);
  const tmp = closure_12();
  const items = [EmojiStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != require) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  const obj2 = { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: null, name: null };
  let emojiURL;
  if (null != stateFromStores) {
    ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
    emojiURL = AvatarUtilsDefault.getEmojiURL({ id: null, animated: null, size: 18 });
    const obj3 = { id: null, animated: null, size: 18 };
    const tmp5Result = AvatarUtilsDefault;
  }
  obj2.src = emojiURL;
  if (emojiName == null) {
    emojiName = "";
  }
  obj2.name = emojiName;
  return jsx(EmojiDefault, { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: null, name: null });
}
const ForumChannelStore = fn(12143);
({ useForumChannelStore: metroRequire, useForumChannelStoreApi: closure_7 } = ForumChannelStore);
const Constants = fn(1074);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_12 = createStyles.createStyles({ emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" }, imageEmoji: { height: 18, width: 18 }, textEmoji: { fontSize: 14, lineHeight: 20 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default function ForumPostTagsActionSheet(channel) {
  channel = channel.channel;
  first = undefined;
  _slicedToArray = undefined;
  let state = closure_7();
  [first, _slicedToArray] = noop.useState(new Set(closure_6(channel.id).tagFilter));
  let set = new Set(closure_6(channel.id).tagFilter);
  const unmountEffect = channel(first[8]).useUnmountEffect(() => {
    state = state.getState();
    state.setTagFilter(channel.id, first);
  });
  let obj2 = { title: null, subtitle: null, leading: null };
  let intl = channel(first[11]).intl;
  obj2.title = intl.string(channel(first[11]).t.TdqRTh);
  let str = " ";
  if (first.size > 0) {
    const intl2 = tmp4(tmp5[11]).intl;
    const obj3 = { count: first.size };
    str = intl2.formatToPlainString(tmp4(tmp5[11]).t["/FzHJK"], obj3);
  }
  let obj4 = { scrollable: true, header: null, children: null };
  obj2.subtitle = str;
  const obj5 = {
    onPress() {
      closure_3(new Set());
    },
    label: null
  };
  const intl3 = tmp4(tmp5[11]).intl;
  obj5.label = intl3.string(channel(first[11]).t.VkKicb);
  obj2.leading = jsx(channel(first[12]).ActionSheetHeaderPressableText, {
    onPress() {
      closure_3(new Set());
    },
    label: null
  });
  obj4.header = jsx(channel(first[10]).BottomSheetTitleHeader, { title: null, subtitle: null, leading: null });
  const obj6 = { children: null };
  const obj7 = { hasIcons: true, children: null };
  const availableTags = channel.availableTags;
  obj7.children = availableTags.map((emojiId) => {
    closure_0 = emojiId;
    let obj = { icon: <EmojiIcon emojiId={emojiId.emojiId} emojiName={emojiId.emojiName} />, label: emojiId.name, accessibilityLabel: null, checked: null, onPress: null };
    const intl = channel(first[11]).intl;
    obj.accessibilityLabel = intl.formatToPlainString(channel(first[11]).t.tXXD6v, { tagName: emojiId.name });
    obj.checked = first.has(emojiId.id);
    obj.onPress = function onPress() {
      let obj = closure_0;
      if (null != closure_0) {
        let FORUM_CHANNEL_HEADER = globalThis;
        const _Set = Set;
        const set = new Set(first);
        if (set.has(obj.id)) {
          set.delete(obj.id);
        } else {
          set.add(obj.id);
        }
        const obj4 = { guildId: null, channelId: null, tagId: null, filterTagIds: null, added: null, location: null };
        ({ guild_id: obj3.guildId, id: obj3.channelId } = channel);
        obj4.tagId = obj.id;
        const _Array = FORUM_CHANNEL_HEADER.Array;
        obj4.filterTagIds = _Array.from(set);
        obj4.added = !set.has(obj.id);
        obj = { page: constants2.GUILD_CHANNEL, section: null, object: null };
        FORUM_CHANNEL_HEADER = constants3.FORUM_CHANNEL_HEADER;
        obj.section = FORUM_CHANNEL_HEADER;
        obj.object = constants.CHANNEL_TAG;
        obj4.location = obj;
        const result = tracking_Tracking.trackForumTagFilterClicked(obj4);
        closure_3(set);
      }
    };
    return jsx(channel(first[15]).TableCheckboxRow, { icon: <EmojiIcon emojiId={emojiId.emojiId} emojiName={emojiId.emojiName} />, label: emojiId.name, accessibilityLabel: null, checked: null, onPress: null }, emojiId.id);
  });
  obj6.children = jsx(channel(first[14]).TableRowGroup, { hasIcons: true, children: null });
  obj4.children = jsx(channel(first[13]).BottomSheetScrollView, { children: null });
  return jsx(channel(first[9]).ActionSheet, { scrollable: true, header: null, children: null });
};