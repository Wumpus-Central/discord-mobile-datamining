// === Module 12531: ForumTagFilterActionSheet ===

// Module 12531 (ForumTagFilterActionSheet)
import initialize from "initialize" /* 504 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import EmojiDefault from "Emoji" /* 6819 */;
import Tracking from "Tracking" /* 7903 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5987 */;

require = fn;
const ForumChannelStore = fn(11675);
({ useForumChannelStore: metroRequire, useForumChannelStoreApi: closure_7 } = ForumChannelStore);
const Constants = fn(1085);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: c10 } = Constants);
const jsx = fn(21).jsx;
let c12 = 18;
const createStyles = fn(5092);
let closure_13 = createStyles.createStyles({ emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" }, imageEmoji: { height: 18, width: 18 }, textEmoji: { fontSize: 14, lineHeight: 20 } });
fn(558);
const ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiIcon(emojiId) {
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
    const fn = function n() {
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
  const tmp15 = jsx(EmojiDefault, { style: tmp4.emoji, textEmojiStyle: tmp4.textEmoji, fastImageStyle: tmp4.imageEmoji, src: tmp9, name: str });
  cResult[5] = tmp4.emoji;
  cResult[6] = tmp4.imageEmoji;
  cResult[7] = tmp4.textEmoji;
  cResult[8] = tmp9;
  cResult[9] = str;
  cResult[10] = tmp15;
  tmp14 = tmp15;
  const obj5 = { style: tmp4.emoji, textEmojiStyle: tmp4.textEmoji, fastImageStyle: tmp4.imageEmoji, src: tmp9, name: str };
  const tmpResult = emojiId(504);
}) : (function EmojiIcon(arg0) {
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
  const obj2 = { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: null, name: null };
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
  return jsx(EmojiDefault, { style: tmp.emoji, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: null, name: null });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumTagFilterActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostTagsActionSheet(channel) {
  const cResult = availableTags(first[8]).c(29);
  availableTags = channel.channel;
  const tagFilter = closure_6(availableTags.id).tagFilter;
  const tmp4 = closure_7();
  importDefault = tmp4;
  if (cResult[0] !== tagFilter) {
    let _Set = Set;
    let set = new Set(tagFilter);
    cResult[0] = tagFilter;
    cResult[1] = set;
    let tmp5 = set;
  } else {
    tmp5 = cResult[1];
  }
  [first, _slicedToArray] = noop.useState(tmp5);
  if (cResult[2] === availableTags.guild_id) {
    if (cResult[3] === availableTags.id) {
      if (cResult[4] === first) {
        let tmp14 = cResult[5];
      }
      noop = tmp14;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        function handleClear() {
          closure_3(new Set());
        }
        cResult[6] = handleClear;
        let tmp16 = handleClear;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] === availableTags.id) {
        if (cResult[8] === first) {
          if (cResult[9] === tmp4) {
            let tmp17 = cResult[10];
          }
          const unmountEffect = tmp(tmp2[10]).useUnmountEffect(tmp17);
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(tmp2[11]).intl;
            const stringResult = intl.string(tmp(tmp2[11]).t.TdqRTh);
            cResult[11] = stringResult;
            let tmp19 = stringResult;
          } else {
            tmp19 = cResult[11];
          }
          if (cResult[12] !== first.size) {
            let str2 = " ";
            if (first.size > 0) {
              const intl2 = tmp(tmp2[11]).intl;
              let obj2 = { count: first.size };
              str2 = intl2.formatToPlainString(tmp(tmp2[11]).t["/FzHJK"], obj2);
            }
            cResult[12] = first.size;
            cResult[13] = str2;
            let tmp21 = str2;
          } else {
            tmp21 = cResult[13];
          }
          const _Symbol3 = Symbol;
          class H {
            constructor() {
              state = closure_1.getState();
              setTagFilterResult = state.setTagFilter(channel.id, closure_2);
              return;
            }
          }
          if (tmp22 === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { onPress: tmp16, label: null };
            const intl3 = tmp(tmp2[11]).intl;
            obj3.label = intl3.string(tmp(tmp2[11]).t.VkKicb);
            const tmp25 = jsx(tmp(tmp2[12]).ActionSheetHeaderPressableText, { onPress: tmp16, label: null });
            class H {
              constructor() {
                state = closure_1.getState();
                setTagFilterResult = state.setTagFilter(channel.id, closure_2);
                return;
              }
            }
            cResult[14] = tmp25;
            let tmp23 = tmp25;
          } else {
            tmp23 = cResult[14];
          }
          if (cResult[15] !== tmp21) {
            let obj4 = { title: tmp19, subtitle: tmp21, leading: tmp23 };
            const tmp28 = jsx(tmp(tmp2[13]).BottomSheetTitleHeader, { title: tmp19, subtitle: tmp21, leading: tmp23 });
            cResult[15] = tmp21;
            class H {
              constructor() {
                state = closure_1.getState();
                setTagFilterResult = state.setTagFilter(channel.id, closure_2);
                return;
              }
            }
            cResult[16] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[16];
          }
          if (cResult[17] === availableTags.availableTags) {
            if (cResult[18] === first) {
              if (cResult[19] === tmp14) {
                if (cResult[24] !== cResult[20]) {
                  const obj5 = { children: null };
                  const obj6 = { hasIcons: true, children: tmp29 };
                  obj5.children = jsx(tmp(tmp2[16]).TableRowGroup, { hasIcons: true, children: tmp29 });
                  const tmp35 = jsx(tmp(tmp2[15]).BottomSheetScrollView, { children: null });
                  class H {
                    constructor() {
                      state = closure_1.getState();
                      setTagFilterResult = state.setTagFilter(channel.id, closure_2);
                      return;
                    }
                  }
                  cResult[25] = tmp35;
                  let tmp33 = tmp35;
                } else {
                  tmp33 = cResult[25];
                }
                if (cResult[26] === tmp33) {
                  if (cResult[27] === tmp26) {
                    let tmp36 = cResult[28];
                  }
                  return tmp36;
                }
                const obj7 = { scrollable: true, header: tmp26, children: tmp33 };
                class H {
                  constructor() {
                    state = closure_1.getState();
                    setTagFilterResult = state.setTagFilter(channel.id, closure_2);
                    return;
                  }
                }
                cResult[26] = tmp33;
                cResult[27] = tmp26;
                class L {
                  constructor(arg0) {
                    closure_0 = channel;
                    obj = { icon: null, label: channel.name, accessibilityLabel: null, checked: null, onPress: null };
                    obj1 = { emojiId: channel.emojiId, emojiName: channel.emojiName };
                    obj.icon = closure_1_11(closure_1_14, obj1);
                    intl = channel(closure_2[11]).intl;
                    obj4 = { tagName: channel.name };
                    obj.accessibilityLabel = intl.formatToPlainString(channel(closure_2[11]).t.tXXD6v, obj4);
                    obj.checked = closure_2.has(channel.id);
                    obj.onPress = function onPress() {
                      return closure_4(closure_0);
                    };
                    return closure_1_11(channel(closure_2[14]).TableCheckboxRow, obj, channel.id);
                  }
                }
                tmp36 = jsx(tmp(tmp2[17]).ActionSheet, { scrollable: true, header: tmp26, children: tmp33 });
                const tmp38 = jsx(tmp(tmp2[17]).ActionSheet, { scrollable: true, header: tmp26, children: tmp33 });
              }
            }
          }
          if (cResult[21] === first) {
            if (cResult[22] === tmp14) {
              let tmp30 = cResult[23];
            }
            const availableTags1 = availableTags.availableTags;
            const mapped = availableTags1.map(tmp30);
            availableTags = availableTags.availableTags;
            cResult[17] = availableTags;
            cResult[18] = first;
            class H {
              constructor() {
                state = closure_1.getState();
                setTagFilterResult = state.setTagFilter(channel.id, closure_2);
                return;
              }
            }
            cResult[19] = tmp14;
            cResult[20] = mapped;
          }
          class L {
            constructor(arg0) {
              closure_0 = channel;
              obj = { icon: null, label: channel.name, accessibilityLabel: null, checked: null, onPress: null };
              obj1 = { emojiId: channel.emojiId, emojiName: channel.emojiName };
              obj.icon = closure_1_11(closure_1_14, obj1);
              intl = channel(closure_2[11]).intl;
              obj4 = { tagName: channel.name };
              obj.accessibilityLabel = intl.formatToPlainString(channel(closure_2[11]).t.tXXD6v, obj4);
              obj.checked = closure_2.has(channel.id);
              obj.onPress = function onPress() {
                return closure_4(closure_0);
              };
              return closure_1_11(channel(closure_2[14]).TableCheckboxRow, obj, channel.id);
            }
          }
          cResult[21] = first;
          cResult[22] = tmp14;
          cResult[23] = L;
          tmp30 = L;
          const tmpResult = tmp(tmp2[10]);
        }
      }
      class H {
        constructor() {
          state = closure_1.getState();
          setTagFilterResult = state.setTagFilter(channel.id, closure_2);
          return;
        }
      }
      cResult[7] = availableTags.id;
      cResult[8] = first;
      cResult[9] = tmp4;
      cResult[10] = H;
      tmp17 = H;
    }
  }
  function toggleTag(arg0) {
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
      ({ guild_id: obj3.guildId, id: obj3.channelId } = availableTags);
      obj4.tagId = obj.id;
      const _Array = FORUM_CHANNEL_HEADER.Array;
      obj4.filterTagIds = _Array.from(set);
      obj4.added = !set.has(obj.id);
      obj = { page: constants2.GUILD_CHANNEL, section: null, object: null };
      FORUM_CHANNEL_HEADER = constants3.FORUM_CHANNEL_HEADER;
      obj.section = FORUM_CHANNEL_HEADER;
      obj.object = constants.CHANNEL_TAG;
      obj4.location = obj;
      const result = Tracking.trackForumTagFilterClicked(obj4);
      closure_3(set);
    }
  }
  cResult[2] = availableTags.guild_id;
  cResult[3] = availableTags.id;
  cResult[4] = first;
  cResult[5] = toggleTag;
  tmp14 = toggleTag;
  let obj = availableTags(first[8]);
}) : (function ForumPostTagsActionSheet(channel) {
  channel = channel.channel;
  first = undefined;
  _slicedToArray = undefined;
  let state = closure_7();
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
    onPress: function handleClear() {
      closure_3(new Set());
    },
    label: null
  };
  const intl3 = tmp4(tmp5[11]).intl;
  obj5.label = intl3.string(channel(first[11]).t.VkKicb);
  obj2.leading = jsx(channel(first[12]).ActionSheetHeaderPressableText, {
    onPress: function handleClear() {
      closure_3(new Set());
    },
    label: null
  });
  obj4.header = jsx(channel(first[13]).BottomSheetTitleHeader, { title: null, subtitle: null, leading: null });
  const obj6 = { children: null };
  const obj7 = { hasIcons: true, children: null };
  const availableTags = channel.availableTags;
  obj7.children = availableTags.map((emojiId) => {
    closure_0 = emojiId;
    let obj = { icon: <closure_1_14 emojiId={emojiId.emojiId} emojiName={emojiId.emojiName} />, label: emojiId.name, accessibilityLabel: null, checked: null, onPress: null };
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
        const result = Tracking.trackForumTagFilterClicked(obj4);
        closure_3(set);
      }
    };
    return jsx(channel(first[14]).TableCheckboxRow, { icon: <closure_1_14 emojiId={emojiId.emojiId} emojiName={emojiId.emojiName} />, label: emojiId.name, accessibilityLabel: null, checked: null, onPress: null }, emojiId.id);
  });
  obj6.children = jsx(channel(first[16]).TableRowGroup, { hasIcons: true, children: null });
  obj4.children = jsx(channel(first[15]).BottomSheetScrollView, { children: null });
  return jsx(channel(first[17]).ActionSheet, { scrollable: true, header: null, children: null });
});