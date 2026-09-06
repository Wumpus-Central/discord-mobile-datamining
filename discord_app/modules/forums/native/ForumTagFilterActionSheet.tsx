// discord_app/modules/forums/native/ForumTagFilterActionSheet.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import tracking_Tracking from "../tracking/Tracking.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";

require = fn;
function EmojiIcon(arg0) {
  ({ emojiId: require, emojiName } = arg0);
  const tmp = closure_12();
  let obj = initialize;
  const items = [EmojiStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != require) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  obj = { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: null, name: null };
  let emojiURL;
  if (null != stateFromStores) {
    obj = { id: null, animated: null, size: 18 };
    ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj);
    const tmp5Result = AvatarUtilsDefault;
  }
  obj.src = emojiURL;
  if (emojiName == null) {
    emojiName = "";
  }
  obj.name = emojiName;
  return jsx(EmojiDefault, {
    style: tmp.emoji,
    textEmojiStyle: tmp.textEmoji,
    fastImageStyle: tmp.imageEmoji,
    src: null,
    name: null,
  });
}
const ForumChannelStore = fn(12001);
({ useForumChannelStore: metroRequire, useForumChannelStoreApi: closure_7 } = ForumChannelStore);
const Constants = fn(1074);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({
  emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" },
  imageEmoji: { height: 18, width: 18 },
  textEmoji: { fontSize: 14, lineHeight: 20 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default function ForumPostTagsActionSheet(channel) {
  channel = channel.channel;
  _slicedToArray = undefined;
  let state = closure_7();
  const tmp2 = _slicedToArray(noop.useState(new Set(closure_6(channel.id).tagFilter)), 2);
  const first = tmp2[0];
  _slicedToArray = tmp2[1];
  let obj = channel(first[8]);
  const unmountEffect = obj.useUnmountEffect(() => {
    state = state.getState();
    state.setTagFilter(channel.id, first);
  });
  obj = { title: null, subtitle: null, leading: null };
  let intl = channel(first[11]).intl;
  obj.title = intl.string(channel(first[11]).t.TdqRTh);
  let str = " ";
  if (first.size > 0) {
    const intl2 = tmp4(tmp5[11]).intl;
    obj = { count: first.size };
    str = intl2.formatToPlainString(tmp4(tmp5[11]).t["/FzHJK"], obj);
  }
  const obj1 = { scrollable: true, header: null, children: null };
  obj.subtitle = str;
  let obj2 = {
    onPress() {
      closure_3(new Set());
    },
    label: null,
  };
  const intl3 = tmp4(tmp5[11]).intl;
  obj2.label = intl3.string(channel(first[11]).t.VkKicb);
  obj.leading = jsx(channel(first[12]).ActionSheetHeaderPressableText, {
    onPress() {
      closure_3(new Set());
    },
    label: null,
  });
  obj1.header = jsx(channel(first[10]).BottomSheetTitleHeader, { title: null, subtitle: null, leading: null });
  const obj3 = { children: null };
  const obj4 = { hasIcons: true, children: null };
  const availableTags = channel.availableTags;
  obj4.children = availableTags.map((emojiId) => {
    closure_0 = emojiId;
    let obj = { icon: null, label: null, accessibilityLabel: null, checked: null, onPress: null };
    obj = { emojiId: emojiId.emojiId, emojiName: emojiId.emojiName };
    obj.icon = <EmojiIcon emojiId={emojiId.emojiId} emojiName={emojiId.emojiName} />;
    obj.label = emojiId.name;
    const intl = channel(first[11]).intl;
    obj = { tagName: emojiId.name };
    obj.accessibilityLabel = intl.formatToPlainString(channel(first[11]).t.tXXD6v, obj);
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
        obj = { guildId: null, channelId: null, tagId: null, filterTagIds: null, added: null, location: null };
        ({ guild_id: obj3.guildId, id: obj3.channelId } = channel);
        obj.tagId = obj.id;
        const _Array = FORUM_CHANNEL_HEADER.Array;
        obj.filterTagIds = _Array.from(set);
        obj.added = !set.has(obj.id);
        obj = { page: constants2.GUILD_CHANNEL, section: null, object: null };
        FORUM_CHANNEL_HEADER = constants3.FORUM_CHANNEL_HEADER;
        obj.section = FORUM_CHANNEL_HEADER;
        obj.object = constants.CHANNEL_TAG;
        obj.location = obj;
        const result = tracking_Tracking.trackForumTagFilterClicked(obj);
        closure_3(set);
      }
    };
    return jsx(channel(first[15]).TableCheckboxRow, { tagName: emojiId.name }, emojiId.id);
  });
  obj3.children = jsx(channel(first[14]).TableRowGroup, { hasIcons: true, children: null });
  obj1.children = jsx(channel(first[13]).BottomSheetScrollView, { children: null });
  return jsx(channel(first[9]).ActionSheet, { scrollable: true, header: null, children: null });
}
