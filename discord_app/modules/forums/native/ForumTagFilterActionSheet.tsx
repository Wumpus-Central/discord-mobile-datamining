// discord_app/modules/forums/native/ForumTagFilterActionSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import tracking_Tracking from "../tracking/Tracking.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ForumChannelStore from "../ForumChannelStore.tsx";
import Constants from "../../../Constants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let emojiId, importDefault, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ useForumChannelStore: metroRequire, useForumChannelStoreApi: metroImportDefault } = ForumChannelStore);
({ AnalyticsObjects: metroImportAll, AnalyticsPages: c9, AnalyticsSections: c10 } = Constants);
const jsx = Fragment.jsx;
let c12 = 18;
let closure_13 = createStyles.createStyles({
  emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" },
  imageEmoji: { height: 18, width: 18 },
  textEmoji: { fontSize: 14, lineHeight: 20 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (channel) {
      let closure_3;
      let closure_4;
      let first;
      let tmp3;
      let obj = channel(first[8]);
      const cResult = obj.c(29);
      channel = channel.channel;
      const tagFilter = closure_6(channel.id).tagFilter;
      const tmp2 = closure_7();
      importDefault = tmp2;
      if (cResult[0] !== tagFilter) {
        let _Set = Set;
        let self = this;
        let self2 = this;
        set = new Set(tagFilter);
        cResult[0] = tagFilter;
        cResult[1] = set;
        tmp3 = set;
      } else {
        tmp3 = cResult[1];
      }
      [first, _slicedToArray] = react.useState(tmp3);
      if (cResult[2] === channel.guild_id) {
        if (cResult[3] === channel.id) {
          let tmp10;
          if (cResult[4] === first) {
            tmp10 = cResult[5];
          }
          react = tmp10;
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor() {
                set = new Set();
                closure_3(set);
              }
            }
            cResult[6] = F;
          } else {
            class F {
              constructor() {
                set = new Set();
                closure_3(set);
              }
            }
          }
          if (cResult[7] === channel.id) {
            class F {
              constructor() {
                set = new Set();
                closure_3(set);
              }
            }
          }
          class H {
            constructor() {
              state = state.getState();
              state.setTagFilter(channel.id, first);
            }
          }
          cResult[7] = channel.id;
          cResult[8] = first;
          cResult[9] = tmp2;
          cResult[10] = H;
        }
      }
      const fn = function _(id) {
        let obj2;
        if (null != id) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(first);
          if (set.has(id.id)) {
            set.delete(id.id);
          } else {
            set.add(id.id);
          }
          const obj = {
            guildId: null,
            channelId: null,
            tagId: id.id,
            filterTagIds: Array.from(set),
            added: !set.has(id.id),
            location: obj2,
          };
          ({ guild_id: obj.guildId, id: obj.channelId } = channel);
          const _Array = Array;
          const trackForumTagFilterClicked = tracking_Tracking.trackForumTagFilterClicked;
          tracking_Tracking;
          obj2 = {
            page: constants.GUILD_CHANNEL,
            section: constants2.FORUM_CHANNEL_HEADER,
            object: metroImportAll.CHANNEL_TAG,
          };
          const result = trackForumTagFilterClicked(obj);
          closure_3(set);
        }
      };
      cResult[2] = channel.guild_id;
      cResult[3] = channel.id;
      cResult[4] = first;
      cResult[5] = fn;
      tmp10 = fn;
    }
  : (channel) => {
      let availableTags;
      let closure_3;
      let first;
      let intl;
      let intl3;
      let str;
      channel = channel.channel;
      first = undefined;
      _slicedToArray = undefined;
      const tagFilter = closure_6(channel.id).tagFilter;
      let state = closure_7();
      const useState = react.useState;
      set = new Set(tagFilter);
      [first, _slicedToArray] = useState(set);
      let obj = channel(first[10]);
      const unmountEffect = obj.useUnmountEffect(() => {
        state = state.getState();
        state.setTagFilter(channel.id, first);
      });
      const ActionSheet = channel(first[17]).ActionSheet;
      let obj2 = { title: intl.string(channel(first[11]).t.TdqRTh), subtitle: str, leading: null };
      const BottomSheetTitleHeader = channel(first[13]).BottomSheetTitleHeader;
      intl = channel(first[11]).intl;
      str = " ";
      if (first.size > 0) {
        const intl2 = tmp4(tmp5[11]).intl;
        let obj3 = { count: first.size };
        str = intl2.formatToPlainString(tmp4(tmp5[11]).t["/FzHJK"], obj3);
      }
      ({
        onPress() {
          set = new Set();
          closure_3(set);
        },
        label: intl3.string(channel(first[11]).t.VkKicb),
      });
      const ActionSheetHeaderPressableText = tmp4(tmp5[12]).ActionSheetHeaderPressableText;
      intl3 = tmp4(tmp5[11]).intl;
      const BottomSheetScrollView = tmp4(tmp5[15]).BottomSheetScrollView;
      ({
        hasIcons: true,
        children: availableTags.map((emojiId) => {
          let obj2 = { emojiId: emojiId.emojiId, emojiName: emojiId.emojiName };
          const TableCheckboxRow = channel(first[14]).TableCheckboxRow;
          const intl = channel(first[11]).intl;
          const obj3 = { tagName: emojiId.name };
          return (
            <TableCheckboxRow
              key={emojiId.id}
              icon={null}
              label={emojiId.name}
              accessibilityLabel={intl.formatToPlainString(channel(first[11]).t.tXXD6v, obj3)}
              checked={first.has(emojiId.id)}
              onPress={function onPress() {
                let obj2;
                if (null != emojiId) {
                  const _Set = Set;
                  const self = this;
                  const self2 = this;
                  set = new Set(first);
                  if (set.has(emojiId.id)) {
                    set.delete(emojiId.id);
                  } else {
                    set.add(emojiId.id);
                  }
                  const obj = {
                    guildId: null,
                    channelId: null,
                    tagId: emojiId.id,
                    filterTagIds: Array.from(set),
                    added: !set.has(emojiId.id),
                    location: obj2,
                  };
                  ({ guild_id: obj.guildId, id: obj.channelId } = channel);
                  const _Array = Array;
                  const trackForumTagFilterClicked = tracking_Tracking.trackForumTagFilterClicked;
                  tracking_Tracking;
                  obj2 = {
                    page: constants.GUILD_CHANNEL,
                    section: constants2.FORUM_CHANNEL_HEADER,
                    object: metroImportAll.CHANNEL_TAG,
                  };
                  const result = trackForumTagFilterClicked(obj);
                  closure_3(set);
                }
              }}
            />
          );
        }),
      });
      availableTags = channel.availableTags;
      const TableRowGroup = tmp4(tmp5[16]).TableRowGroup;
      return (
        <ActionSheet scrollable header={null}>
          {null}
        </ActionSheet>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiId) => {
      let first;
      let tmp7;
      let tmp9;
      const tmp = emojiId;
      const obj = emojiId(576);
      const cResult = obj.c(11);
      emojiId = emojiId.emojiId;
      let str = emojiId.emojiName;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] !== stateFromStores) {
        let emojiURL;
        if (null != stateFromStores) {
          const obj2 = { id: null, animated: null, size };
          ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
          const obj3 = AvatarUtilsDefault;
          emojiURL = obj3.getEmojiURL(obj2);
        }
        cResult[3] = stateFromStores;
        cResult[4] = emojiURL;
        tmp9 = emojiURL;
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
              let tmp14;
              if (cResult[9] === str) {
                tmp14 = cResult[10];
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
    }
  : (arg0) => {
      let emojiName;
      ({ emojiId: require, emojiName } = arg0);
      const tmp = closure_13();
      const items = [EmojiStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => {
        let usableCustomEmojiById = null;
        if (null != require) {
          usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
        }
        return usableCustomEmojiById;
      });
      let emojiURL;
      EmojiDefault;
      if (null != stateFromStores) {
        const obj3 = { id: null, animated: null, size };
        ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
        const tmp5Result = AvatarUtilsDefault;
        emojiURL = tmp5Result.getEmojiURL(obj3);
      }
      if (emojiName == null) {
        emojiName = "";
      }
      return (
        <tmp6
          style={tmp.emoji}
          textEmojiStyle={tmp.textEmoji}
          fastImageStyle={tmp.imageEmoji}
          src={emojiURL}
          name={emojiName}
        />
      );
    };
let result = size.fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default tmp4;
