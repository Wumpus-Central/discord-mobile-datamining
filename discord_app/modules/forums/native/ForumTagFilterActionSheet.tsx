// discord_app/modules/forums/native/ForumTagFilterActionSheet.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import tracking_Tracking from "../tracking/Tracking.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";

require = fn;
const ForumChannelStore = fn(11615);
({ useForumChannelStore: metroRequire, useForumChannelStoreApi: closure_7 } = ForumChannelStore);
const Constants = fn(1085);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: c10 } = Constants);
const jsx = fn(21).jsx;
let c12 = 18;
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles({
  emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" },
  imageEmoji: { height: 18, width: 18 },
  textEmoji: { fontSize: 14, lineHeight: 20 },
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiId) => {
      const cResult = emojiId(576).c(11);
      emojiId = emojiId.emojiId;
      let str = emojiId.emojiName;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== emojiId) {
        const fn = function o() {
          let usableCustomEmojiById = null;
          if (null != emojiId) {
            usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
          }
          return usableCustomEmojiById;
        };
        cResult[1] = emojiId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = emojiId(576);
      const stateFromStores = emojiId(504).useStateFromStores(first, tmp7);
      if (cResult[3] !== stateFromStores) {
        let emojiURL;
        if (null != stateFromStores) {
          const obj2 = { id: null, animated: null, size: null };
          ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
          obj2.size = size;
          emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
        }
        cResult[3] = stateFromStores;
        cResult[4] = emojiURL;
        let tmp9 = emojiURL;
      } else {
        tmp9 = cResult[4];
      }
      if (str == null) {
        str = "";
      }
      if (cResult[5] === tmp4.emoji) {
        if (cResult[6] === tmp4.imageEmoji) {
          if (cResult[7] === tmp4.textEmoji) {
            if (cResult[8] === tmp9) {
              if (cResult[9] === str) {
                let tmp14 = cResult[10];
              }
              return tmp14;
            }
          }
        }
      }
      const tmp15 = jsx(EmojiDefault, {
        style: tmp4.emoji,
        textEmojiStyle: tmp4.textEmoji,
        fastImageStyle: tmp4.imageEmoji,
        src: tmp9,
        name: str,
      });
      cResult[5] = tmp4.emoji;
      cResult[6] = tmp4.imageEmoji;
      cResult[7] = tmp4.textEmoji;
      cResult[8] = tmp9;
      cResult[9] = str;
      cResult[10] = tmp15;
      tmp14 = tmp15;
      const obj5 = {
        style: tmp4.emoji,
        textEmojiStyle: tmp4.textEmoji,
        fastImageStyle: tmp4.imageEmoji,
        src: tmp9,
        name: str,
      };
      const tmpResult = emojiId(504);
    }
  : (arg0) => {
      ({ emojiId: require, emojiName } = arg0);
      const tmp = closure_13();
      const items = [EmojiStore];
      const stateFromStores = initialize.useStateFromStores(items, () => {
        let usableCustomEmojiById = null;
        if (null != require) {
          usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
        }
        return usableCustomEmojiById;
      });
      const obj2 = {
        style: tmp.emoji,
        textEmojiStyle: tmp.textEmoji,
        fastImageStyle: tmp.imageEmoji,
        src: null,
        name: null,
      };
      let emojiURL;
      if (null != stateFromStores) {
        const obj3 = { id: null, animated: null, size: null };
        ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
        obj3.size = size;
        emojiURL = AvatarUtilsDefault.getEmojiURL(obj3);
        const tmp5Result = AvatarUtilsDefault;
      }
      obj2.src = emojiURL;
      if (emojiName == null) {
        emojiName = "";
      }
      obj2.name = emojiName;
      return jsx(EmojiDefault, {
        style: tmp.emoji,
        textEmojiStyle: tmp.textEmoji,
        fastImageStyle: tmp.imageEmoji,
        src: null,
        name: null,
      });
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(first[8]).c(29);
      channel = channel.channel;
      const tagFilter = closure_6(channel.id).tagFilter;
      const tmp2 = closure_7();
      importDefault = tmp2;
      if (cResult[0] !== tagFilter) {
        let _Set = Set;
        let set = new Set(tagFilter);
        cResult[0] = tagFilter;
        cResult[1] = set;
        let tmp3 = set;
      } else {
        tmp3 = cResult[1];
      }
      [first, _slicedToArray] = noop.useState(tmp3);
      if (cResult[2] === channel.guild_id) {
        if (cResult[3] === channel.id) {
          if (cResult[4] === first) {
            let tmp12 = cResult[5];
          }
          noop = tmp12;
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor() {
                set = new Set();
                tmp2 = closure_3(set);
                return;
              }
            }
            cResult[6] = F;
          } else {
            class F {
              constructor() {
                set = new Set();
                tmp2 = closure_3(set);
                return;
              }
            }
          }
          if (cResult[7] === channel.id) {
            class F {
              constructor() {
                set = new Set();
                tmp2 = closure_3(set);
                return;
              }
            }
          }
          class H {
            constructor() {
              state = closure_1.getState();
              setTagFilterResult = state.setTagFilter(channel.id, closure_2);
              return;
            }
          }
          cResult[7] = channel.id;
          cResult[8] = first;
          cResult[9] = tmp2;
          cResult[10] = H;
        }
      }
      const fn = function _(arg0) {
        let obj = arg0;
        if (null != arg0) {
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
      cResult[2] = channel.guild_id;
      cResult[3] = channel.id;
      cResult[4] = first;
      cResult[5] = fn;
      tmp12 = fn;
      let obj = channel(first[8]);
    }
  : (channel) => {
      channel = channel.channel;
      first = undefined;
      _slicedToArray = undefined;
      state = closure_7();
      [first, _slicedToArray] = noop.useState(new Set(closure_6(channel.id).tagFilter));
      let set = new Set(closure_6(channel.id).tagFilter);
      const unmountEffect = channel(first[10]).useUnmountEffect(() => {
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
        label: null,
      };
      const intl3 = tmp4(tmp5[11]).intl;
      obj5.label = intl3.string(channel(first[11]).t.VkKicb);
      obj2.leading = jsx(channel(first[12]).ActionSheetHeaderPressableText, {
        onPress() {
          closure_3(new Set());
        },
        label: null,
      });
      obj4.header = jsx(channel(first[13]).BottomSheetTitleHeader, { title: null, subtitle: null, leading: null });
      const obj6 = { children: null };
      const obj7 = { hasIcons: true, children: null };
      const availableTags = channel.availableTags;
      obj7.children = availableTags.map((emojiId) => {
        closure_0 = emojiId;
        let obj = {
          icon: <closure_1_14 emojiId={emojiId.emojiId} emojiName={emojiId.emojiName} />,
          label: emojiId.name,
          accessibilityLabel: null,
          checked: null,
          onPress: null,
        };
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
            const obj4 = {
              guildId: null,
              channelId: null,
              tagId: null,
              filterTagIds: null,
              added: null,
              location: null,
            };
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
        return jsx(
          channel(first[14]).TableCheckboxRow,
          {
            icon: <closure_1_14 emojiId={emojiId.emojiId} emojiName={emojiId.emojiName} />,
            label: emojiId.name,
            accessibilityLabel: null,
            checked: null,
            onPress: null,
          },
          emojiId.id,
        );
      });
      obj6.children = jsx(channel(first[16]).TableRowGroup, { hasIcons: true, children: null });
      obj4.children = jsx(channel(first[15]).BottomSheetScrollView, { children: null });
      return jsx(channel(first[17]).ActionSheet, { scrollable: true, header: null, children: null });
    };
