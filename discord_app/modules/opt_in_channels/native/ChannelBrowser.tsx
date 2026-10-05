// === Module 11173: ChannelBrowser ===

// Module 11173 (ChannelBrowser)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7043 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6606 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let guild, guildId, importDefault;

let closure_12;
let closure_14;
let items;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
function keyExtractor(section) {
  return "" + section.section + "-" + section.row;
}
const View = react_native.View;
const Fonts = Constants.Fonts;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, header: obj2, categoryContainer: obj3, categoryTitle: { marginBottom: 0 }, channelTitle: { flexDirection: "row", alignItems: "center" }, selectAllContainer: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexShrink: 0 }, selectAllCheckbox: obj4, newBadge: { fontFamily: Fonts.DISPLAY_EXTRABOLD }, nuxCard: obj5, nuxCloseContainer: rect, nuxHeader: obj6, nuxHeaderText: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 }, nuxBody: { textAlign: "center", marginBottom: 4 } };
obj2 = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
obj4 = { marginRight: nativeDefault.space.PX_4, transform: items };
items = [{ scale: 0.75 }];
obj5 = { position: "relative", padding: 0, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, marginBottom: 0, borderRadius: nativeDefault.radii.md, alignItems: "center" };
rect = { position: "absolute", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, top: 16, right: 16 };
obj6 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", padding: 16, borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let items3;
  let onChannelClick;
  let stateFromStores;
  let tmp12;
  let tmp16;
  let tmp6;
  let tmp8;
  const tmp = guildId;
  const tmp2 = onChannelClick;
  let obj = guildId(onChannelClick[14]);
  const cResult = obj.c(43);
  guildId = guildId.guildId;
  let tmp4 = closure_15();
  let obj2 = items3;
  [tmp6, importDefault] = stateFromStores(items3.useState(""), 2);
  stateFromStores(items3.useState(""), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    const num = 0;
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const insets = require("useSafeAreaInsetsKeyboardAware")(first).insets;
  onChannelClick = require("useBatchUpdateChannelSettings")(guildId).onChannelClick;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[1] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== guildId) {
    class B {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[2] = guildId;
    cResult[3] = B;
  } else {
    class B {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmpResult = tmp(tmp2[17]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, B);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items1 = [GuildCategoryStore];
    cResult[4] = items1;
    tmp12 = items1;
  } else {
    class B {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[5] !== guildId) {
    class B {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[5] = guildId;
    cResult[6] = tmp14;
  } else {
    class B {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmpResult6 = tmp(tmp2[17]);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp12, tmp14);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items2 = [GuildChannelStore];
    cResult[7] = items2;
    tmp16 = items2;
  } else {
    class B {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[8] !== guildId) {
    class N {
      constructor() {
        return GuildChannelStore.getChannels(guildId);
      }
    }
    cResult[8] = guildId;
    cResult[9] = N;
  } else {
    class N {
      constructor() {
        return GuildChannelStore.getChannels(guildId);
      }
    }
  }
  const tmpResult7 = tmp(tmp2[17]);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp16, N);
  const tmpResult8 = tmp(tmp2[18]);
  const filterCategoriesByQuery = tmpResult8.useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, tmp6);
  const tmpResult9 = tmp(tmp2[19]);
  let result = tmpResult9.useIsDismissibleContentDismissed_UNSAFE(tmp(tmp2[20]).DismissibleContent.CHANNEL_BROWSER_NUX);
  const tmpResult10 = tmp(tmp2[18]);
  const channelBrowserSections = tmpResult10.useChannelBrowserSections(guildId, filterCategoriesByQuery, 64);
  if (cResult[10] === filterCategoriesByQuery) {
    class N {
      constructor() {
        return GuildChannelStore.getChannels(guildId);
      }
    }
    if (cResult[13] !== guildId) {
      class N {
        constructor() {
          return GuildChannelStore.getChannels(guildId);
        }
      }
      let result1 = obj10.hasNotSetUpChannelOptIn(guildId);
      cResult[13] = guildId;
      cResult[14] = result1;
    } else {
      class N {
        constructor() {
          return GuildChannelStore.getChannels(guildId);
        }
      }
    }
    result1 = tmp22;
    const _Symbol = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return GuildChannelStore.getChannels(guildId);
        }
      }
      cResult[15] = tmp25;
    } else {
      class N {
        constructor() {
          return GuildChannelStore.getChannels(guildId);
        }
      }
    }
    const effect = obj2.useEffect(tmp25);
    const _Symbol2 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return GuildChannelStore.getChannels(guildId);
        }
      }
      cResult[16] = tmp28;
    } else {
      class N {
        constructor() {
          return GuildChannelStore.getChannels(guildId);
        }
      }
    }
    if (cResult[17] === tmp22) {
      class N {
        constructor() {
          return GuildChannelStore.getChannels(guildId);
        }
      }
    }
    class Q {
      constructor(item) {
        const channel = item.item.channel;
        let tmp4 = null;
        if (null != channel) {
          let tmp5Result;
          if (tmp) {
            const obj2 = { channel, onChannelClick };
            tmp5Result = closure_12(closure_17, obj2, channel.id);
          } else {
            const obj = { channel, guild: stateFromStores, isFirst: 0 === tmp2, isLast: tmp3, forceChecked: result1, onChannelClick };
            tmp5Result = closure_12(closure_18, obj, channel.id);
          }
          tmp4 = tmp5Result;
        }
        return tmp4;
      }
    }
    cResult[17] = tmp22;
    cResult[18] = stateFromStores;
    cResult[19] = onChannelClick;
    cResult[20] = Q;
  }
  items3 = [];
  const item = channelBrowserSections.forEach((rowCount, section) => {
    let channel1;
    if (rowCount.rowCount > 0) {
      let num;
      const channel = filterCategoriesByQuery._categories[section].channel;
      const obj2 = { isSection: true, section, row: -1, channel, isLast: false };
      items3.push(obj2);
      for (let num = 0; num < rowCount.rowCount; num = num + 1) {
        let obj = { isSection: false, section, row: num, channel: channel1, isLast: num >= filterCategoriesByQuery[channel.id].length - 1 };
        let tmp3 = filterCategoriesByQuery[channel.id][num];
        channel1 = undefined;
        let push = items3.push;
        if (tmp3 != null) {
          channel1 = tmp3.channel;
        }
        let arr2 = push(obj);
      }
    }
  });
  cResult[10] = filterCategoriesByQuery;
  cResult[11] = channelBrowserSections;
  cResult[12] = items3;
}) : ((guildId) => {
  let Text;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj16;
  guildId = guildId.guildId;
  let onChannelClick;
  let stateFromStores;
  let filterCategoriesByQuery;
  const tmp = closure_15();
  const tmp2 = stateFromStores(filterCategoriesByQuery.useState(""), 2);
  importDefault = tmp2[1];
  let tmp4 = importDefault;
  const first = tmp2[0];
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  onChannelClick = require("useBatchUpdateChannelSettings")(guildId).onChannelClick;
  let obj = guildId(onChannelClick[17]);
  let items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(onChannelClick[17]);
  const items1 = [GuildCategoryStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildCategoryStore.getCategories(guildId));
  const items2 = [GuildChannelStore];
  const obj3 = guildId(onChannelClick[17]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => GuildChannelStore.getChannels(guildId));
  const obj4 = guildId(onChannelClick[18]);
  filterCategoriesByQuery = obj4.useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, first);
  const obj5 = guildId(onChannelClick[19]);
  let result = obj5.useIsDismissibleContentDismissed_UNSAFE(guildId(onChannelClick[20]).DismissibleContent.CHANNEL_BROWSER_NUX);
  const obj6 = guildId(onChannelClick[18]);
  const channelBrowserSections = obj6.useChannelBrowserSections(guildId, filterCategoriesByQuery, 64);
  const items3 = [filterCategoriesByQuery, channelBrowserSections];
  const memo = filterCategoriesByQuery.useMemo(() => {
    const items = [];
    const item = channelBrowserSections.forEach((rowCount, section) => {
      let channel1;
      if (rowCount.rowCount > 0) {
        let num;
        const channel = filterCategoriesByQuery._categories[section].channel;
        const obj2 = { isSection: true, section, row: -1, channel, isLast: false };
        items.push(obj2);
        for (let num = 0; num < rowCount.rowCount; num = num + 1) {
          let obj = { isSection: false, section, row: num, channel: channel1, isLast: num >= filterCategoriesByQuery[channel.id].length - 1 };
          let tmp3 = filterCategoriesByQuery[channel.id][num];
          channel1 = undefined;
          let push = items.push;
          if (tmp3 != null) {
            channel1 = tmp3.channel;
          }
          let arr2 = push(obj);
        }
      }
    });
    return items;
  }, items3);
  const obj7 = guildId(onChannelClick[21]);
  const result1 = obj7.hasNotSetUpChannelOptIn(guildId);
  const effect = filterCategoriesByQuery.useEffect(() => {
    const obj = guildId(onChannelClick[19]);
    const obj2 = { dismissAction: constants.DISMISS };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[20]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX, obj2);
  });
  const items4 = [stateFromStores, result1, onChannelClick];
  const obj8 = { style: tmp.container, children: items5 };
  const obj9 = { style: tmp.header, children: closure_12(guildId(onChannelClick[22]).SearchField, obj10) };
  const callback = filterCategoriesByQuery.useCallback((item) => {
    const channel = item.item.channel;
    let tmp4 = null;
    if (null != channel) {
      let tmp5Result;
      if (tmp) {
        const obj2 = { channel, onChannelClick };
        tmp5Result = closure_12(closure_17, obj2, channel.id);
      } else {
        const obj = { channel, guild: stateFromStores, isFirst: 0 === tmp2, isLast: tmp3, forceChecked: result1, onChannelClick };
        tmp5Result = closure_12(closure_18, obj, channel.id);
      }
      tmp4 = tmp5Result;
    }
    return tmp4;
  }, items4);
  obj10 = {
    size: "md",
    onChange(arg0) {
      return closure_1(arg0);
    }
  };
  items5 = [closure_12(channelBrowserSections, obj9), ];
  let tmp17Result = null;
  const FlashList = guildId(onChannelClick[30]).FlashList;
  if (!result) {
    const obj11 = { style: tmp.nuxCard, children: items6 };
    const Card = tmp6(tmp5[23]).Card;
    const obj12 = {
      onPress() {
          const obj = guildId(onChannelClick[19]);
          const obj2 = { dismissAction: constants.DISMISS };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[20]).DismissibleContent.CHANNEL_BROWSER_NUX, obj2);
        },
      accessibilityRole: "button",
      accessibilityLabel: intl.string(guildId(onChannelClick[25]).t.cpT0Cq),
      style: tmp.nuxCloseContainer,
      children: closure_12(guildId(onChannelClick[26]).CircleXIcon, {})
    };
    const PressableOpacity = tmp6(tmp5[24]).PressableOpacity;
    intl = tmp6(tmp5[25]).intl;
    items6 = [closure_12(PressableOpacity, obj12), , ];
    const obj13 = { source: tmp4(onChannelClick[28]) };
    const tmp4Result = tmp4(onChannelClick[27]);
    items6[1] = closure_12(tmp4Result, obj13);
    const obj14 = { style: tmp.nuxHeader, children: items7 };
    const obj15 = { style: tmp.nuxHeaderText, children: closure_12(Text, obj16) };
    obj16 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl2.string(guildId(onChannelClick[25]).t.utqWEC) };
    Text = tmp6(tmp5[29]).Text;
    intl2 = tmp6(tmp5[25]).intl;
    items7 = [closure_12(channelBrowserSections, obj15), , ];
    const obj17 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: intl3.string(guildId(onChannelClick[25]).t["+9etcM"]) };
    const Text2 = tmp6(tmp5[29]).Text;
    intl3 = tmp6(tmp5[25]).intl;
    items7[1] = closure_12(Text2, obj17);
    const obj18 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: intl4.format(guildId(onChannelClick[25]).t.Z0axjk, {}) };
    const Text3 = tmp6(tmp5[29]).Text;
    intl4 = tmp6(tmp5[25]).intl;
    items7[2] = closure_12(Text3, obj18);
    items6[2] = closure_13(channelBrowserSections, obj14);
    tmp17Result = closure_13(Card, obj11);
  }
  const obj19 = { ListHeaderComponent: tmp17Result, accessibilityLabel: intl5.string(guildId(onChannelClick[25]).t.et6wav), renderItem: callback, data: memo, contentContainerStyle: { paddingBottom: insets.bottom + tmp4(onChannelClick[12]).space.PX_16, paddingHorizontal: tmp4(onChannelClick[12]).space.PX_16 }, keyExtractor };
  intl5 = tmp6(tmp5[25]).intl;
  ({ paddingBottom: insets.bottom + tmp4(onChannelClick[12]).space.PX_16, paddingHorizontal: tmp4(onChannelClick[12]).space.PX_16 });
  items5[1] = closure_12(FlashList, obj19);
  return closure_13(channelBrowserSections, obj8);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let intl;
  let items2;
  let obj7;
  const obj = channel(576);
  const cResult = obj.c(27);
  channel = channel.channel;
  const onChannelClick = channel.onChannelClick;
  const tmp4 = closure_15();
  const tmp5 = onChannelClick(5043)(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    let tmp8;
    let tmp10;
    if (cResult[2] === channel.id) {
      tmp8 = cResult[3];
    }
    const tmpResult = channel(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
    const id = channel.id;
    if (cResult[4] !== stateFromStores) {
      const obj2 = { checked: stateFromStores };
      cResult[4] = stateFromStores;
      cResult[5] = obj2;
      tmp10 = obj2;
    } else {
      tmp10 = cResult[5];
    }
    const tmpResult2 = channel(4594);
    const checkboxA11yNative = tmpResult2.useCheckboxA11yNative(tmp10);
    if (cResult[6] === channel.guild_id) {
      if (cResult[7] === channel.id) {
        let tmp12;
        let accessibilityState;
        if (cResult[8] === onChannelClick) {
          tmp12 = cResult[9];
        }
        let str2 = "text";
        if ("null" !== id) {
          str2 = checkboxA11yNative.accessibilityRole;
        }
        if ("null" !== id) {
          accessibilityState = checkboxA11yNative.accessibilityState;
        }
        if (cResult[10] === tmp5) {
          let tmp14;
          if (cResult[11] === tmp4.categoryTitle) {
            tmp14 = cResult[12];
          }
          if (cResult[13] === "null" === id) {
            if (cResult[14] === stateFromStores) {
              if (cResult[15] === tmp4.selectAllCheckbox) {
                let tmp16;
                if (cResult[16] === tmp4.selectAllContainer) {
                  tmp16 = cResult[17];
                }
                if (cResult[18] === tmp14) {
                  let tmp21;
                  if (cResult[19] === tmp16) {
                    tmp21 = cResult[20];
                  }
                  if (cResult[21] === tmp4.categoryContainer) {
                    if (cResult[22] === tmp12) {
                      if (cResult[23] === str2) {
                        if (cResult[24] === accessibilityState) {
                          let tmp25;
                          if (cResult[25] === tmp21) {
                            tmp25 = cResult[26];
                          }
                          return tmp25;
                        }
                      }
                    }
                  }
                  const obj3 = { style: tmp4.categoryContainer, onPress: tmp12, accessibilityRole: str2, accessibilityState, children: null };
                  class T {
                    constructor() {
                      return onChannelClick(channel.guild_id, channel.id, channel.id);
                    }
                  }
                  const tmp27 = closure_12(channel(5909).PressableOpacity, obj3);
                  cResult[21] = tmp4.categoryContainer;
                  cResult[22] = tmp12;
                  cResult[23] = str2;
                  cResult[24] = accessibilityState;
                  cResult[25] = tmp21;
                  cResult[26] = tmp27;
                  tmp25 = tmp27;
                }
                const items1 = [, ];
                const obj4 = { children: null };
                items1[0] = tmp14;
                items1[1] = tmp16;
                class T {
                  constructor() {
                    return onChannelClick(channel.guild_id, channel.id, channel.id);
                  }
                }
                const tmp24 = closure_13(closure_14, obj4);
                cResult[18] = tmp14;
                cResult[19] = tmp16;
                cResult[20] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
          let tmp17 = null;
          if ("null" !== id) {
            const obj5 = { style: tmp4.selectAllContainer, children: items2 };
            const obj6 = { style: tmp4.selectAllCheckbox, children: closure_12(channel(5991).FormCheckbox, obj7) };
            obj7 = { checked: null };
            class T {
              constructor() {
                return onChannelClick(channel.guild_id, channel.id, channel.id);
              }
            }
            items2 = [closure_12(View, obj6), ];
            const obj8 = { variant: "text-xs/semibold", color: "interactive-text-default", children: intl.string(channel(1126).t.mSQwnW) };
            const Text = tmp(4886).Text;
            intl = tmp(1126).intl;
            items2[1] = closure_12(Text, obj8);
            tmp17 = closure_13(View, obj5);
          }
          cResult[13] = "null" === id;
          cResult[14] = stateFromStores;
          class T {
            constructor() {
              return onChannelClick(channel.guild_id, channel.id, channel.id);
            }
          }
          cResult[15] = tmp4.selectAllCheckbox;
          cResult[16] = tmp4.selectAllContainer;
          cResult[17] = tmp17;
          tmp16 = tmp17;
        }
        class T {
          constructor() {
            return onChannelClick(channel.guild_id, channel.id, channel.id);
          }
        }
        const obj9 = { style: tmp4.categoryTitle, title: tmp5, lineClamp: 1 };
        const tmp15 = closure_12(channel(6074).TableRowGroupTitle, obj9);
        cResult[10] = tmp5;
        cResult[11] = tmp4.categoryTitle;
        cResult[12] = tmp15;
        tmp14 = tmp15;
      }
    }
    class T {
      constructor() {
        return onChannelClick(channel.guild_id, channel.id, channel.id);
      }
    }
    cResult[6] = channel.guild_id;
    cResult[7] = channel.id;
    cResult[8] = onChannelClick;
    cResult[9] = T;
    tmp12 = T;
  }
  const fn = function l() {
    return UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id);
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp8 = fn;
}) : ((channel) => {
  let accessibilityState;
  let intl;
  let items1;
  let items2;
  let obj7;
  let str;
  channel = channel.channel;
  const onChannelClick = channel.onChannelClick;
  const tmp = closure_15();
  const items = [UserGuildSettingsStore];
  const tmp3 = onChannelClick(5043)(channel);
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id));
  const obj2 = channel(4594);
  const checkboxA11yNative = obj2.useCheckboxA11yNative({ checked: stateFromStores });
  const obj3 = {
    style: tmp.categoryContainer,
    onPress() {
      return onChannelClick(channel.guild_id, channel.id, channel.id);
    },
    accessibilityRole: str,
    accessibilityState,
    children: closure_13(closure_14, { children: items1 })
  };
  str = "text";
  const PressableOpacity = channel(5909).PressableOpacity;
  if ("null" !== channel.id) {
    str = checkboxA11yNative.accessibilityRole;
  }
  accessibilityState = undefined;
  if ("null" !== channel.id) {
    accessibilityState = checkboxA11yNative.accessibilityState;
  }
  items1 = [, ];
  const obj4 = { style: tmp.categoryTitle, title: tmp3, lineClamp: 1 };
  items1[0] = closure_12(channel(6074).TableRowGroupTitle, obj4);
  let tmp10Result = null;
  if ("null" !== channel.id) {
    const obj5 = { style: tmp.selectAllContainer, children: items2 };
    const obj6 = { style: tmp.selectAllCheckbox, children: closure_12(channel(5991).FormCheckbox, obj7) };
    obj7 = { checked: stateFromStores };
    items2 = [closure_12(View, obj6), ];
    const obj8 = { variant: "text-xs/semibold", color: "interactive-text-default", children: intl.string(channel(1126).t.mSQwnW) };
    const Text = tmp4(4886).Text;
    intl = tmp4(1126).intl;
    items2[1] = closure_12(Text, obj8);
    tmp10Result = closure_13(View, obj5);
  }
  items1[1] = tmp10Result;
  return closure_12(PressableOpacity, obj3);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let _slicedToArray;
  let first;
  let isFirst;
  let isLast;
  let onChannelClick;
  const obj = channel(onChannelClick[14]);
  const cResult = obj.c(58);
  channel = channel.channel;
  guild = channel.guild;
  ({ isFirst, isLast, onChannelClick } = channel);
  closure_15();
  const tmp5 = _slicedToArray(react.useState(0), 2);
  [r10024, _slicedToArray] = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    let tmp8;
    let tmp10;
    if (cResult[2] === channel.id) {
      tmp8 = cResult[3];
    }
    const tmpResult = channel(onChannelClick[17]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [NewChannelsStore];
      cResult[4] = items1;
      tmp10 = items1;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === channel.id) {
      let tmp15;
      let id;
      const tmp12 = cResult[6];
      if (guild != null) {
        id = guild.id;
      }
      if (tmp12 === id) {
        tmp15 = cResult[7];
      }
      if (cResult[8] === channel.id) {
        let tmp18;
        let tmp20;
        if (cResult[9] === guild) {
          tmp18 = cResult[10];
        }
        const tmpResult6 = channel(onChannelClick[17]);
        const stateFromStores1 = tmpResult6.useStateFromStores(tmp10, tmp15, tmp18);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [UserGuildSettingsStore];
          cResult[11] = items2;
          tmp20 = items2;
        } else {
          tmp20 = cResult[11];
        }
        if (cResult[12] === channel.guild_id) {
          let tmp22;
          if (cResult[13] === channel.parent_id) {
            tmp22 = cResult[14];
          }
          const tmpResult7 = channel(onChannelClick[17]);
          const stateFromStores2 = tmpResult7.useStateFromStores(tmp20, tmp22);
          guild(onChannelClick[31])(channel);
          let topic = channel.topic;
          class D {
            constructor() {
              const isChannelOptedInResult = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.parent_id);
              return isChannelOptedInResult;
            }
          }
          if (!tmp27) {
            const tmpResult8 = channel(onChannelClick[18]);
            topic = tmpResult8.getActiveAgoTimestamp(channel.id);
          }
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(nativeEvent) {
                guild(nativeEvent.nativeEvent.layout.width);
              }
            }
            cResult[15] = O;
          } else {
            class O {
              constructor(nativeEvent) {
                guild(nativeEvent.nativeEvent.layout.width);
              }
            }
          }
          class I {
            constructor() {
              let id;
              const shouldIndicateNewChannel = NewChannelsStore.shouldIndicateNewChannel;
              if (guild != null) {
                id = guild.id;
              }
              return shouldIndicateNewChannel(id, channel.id);
            }
          }
          const token = obj6.useToken(tmp24(onChannelClick[12]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
          const tmpResult9 = channel(onChannelClick[35]);
          const token1 = tmpResult9.useToken(tmp24(onChannelClick[12]).modules.mobile.TABLE_ROW_LABEL_COLOR);
          if (null == guild) {
            class O {
              constructor(nativeEvent) {
                guild(nativeEvent.nativeEvent.layout.width);
              }
            }
          } else {
            class O {
              constructor(nativeEvent) {
                guild(nativeEvent.nativeEvent.layout.width);
              }
            }
            const tmpResult10 = channel(onChannelClick[36]);
            const channelIconWithGuild = tmpResult10.getChannelIconWithGuild(channel, guild);
            cResult[16] = channel;
            cResult[17] = guild;
            class D {
              constructor() {
                const isChannelOptedInResult = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.parent_id);
                return isChannelOptedInResult;
              }
            }
            cResult[18] = channelIconWithGuild;
          }
        }
        class D {
          constructor() {
            const isChannelOptedInResult = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.parent_id);
            return isChannelOptedInResult;
          }
        }
        cResult[12] = channel.guild_id;
        cResult[13] = channel.parent_id;
        class I {
          constructor() {
            let id;
            const shouldIndicateNewChannel = NewChannelsStore.shouldIndicateNewChannel;
            if (guild != null) {
              id = guild.id;
            }
            return shouldIndicateNewChannel(id, channel.id);
          }
        }
        cResult[14] = D;
        tmp22 = D;
      }
      const items3 = [, guild];
      cResult[8] = channel.id;
      class I {
        constructor() {
          let id;
          const shouldIndicateNewChannel = NewChannelsStore.shouldIndicateNewChannel;
          if (guild != null) {
            id = guild.id;
          }
          return shouldIndicateNewChannel(id, channel.id);
        }
      }
      cResult[10] = items3;
      tmp18 = items3;
    }
    cResult[5] = channel.id;
    if (guild != null) {
      class O {
        constructor(nativeEvent) {
          guild(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    class I {
      constructor() {
        let id;
        const shouldIndicateNewChannel = NewChannelsStore.shouldIndicateNewChannel;
        if (guild != null) {
          id = guild.id;
        }
        return shouldIndicateNewChannel(id, channel.id);
      }
    }
    cResult[6] = undefined;
    cResult[7] = I;
    tmp15 = I;
  }
  const fn = function c() {
    return UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id);
  };
  ({ guild_id: tmp3[1], id: tmp3[2] } = channel);
  cResult[3] = fn;
  tmp8 = fn;
}) : ((channel) => {
  let TextBadge;
  let _undefined;
  let c3;
  let intl;
  let isFirst;
  let isLast;
  let items4;
  let items5;
  let obj12;
  let obj13;
  let obj7;
  let obj8;
  let parseTopicResult;
  let tmp3;
  channel = channel.channel;
  const onChannelClick = channel.onChannelClick;
  guild = undefined;
  ({ isFirst, isLast, forceChecked } = channel);
  const tmp = closure_15();
  [tmp3, c3] = guild(react.useState(0), 2);
  guild(react.useState(0), 2);
  const items = [UserGuildSettingsStore];
  const obj2 = channel(onChannelClick[17]);
  let stateFromStores = obj2.useStateFromStores(items, () => UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id));
  const items1 = [NewChannelsStore];
  const items2 = [channel.id, guild];
  const obj3 = channel(onChannelClick[17]);
  let stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let id;
    const shouldIndicateNewChannel = NewChannelsStore.shouldIndicateNewChannel;
    if (guild != null) {
      id = guild.id;
    }
    return shouldIndicateNewChannel(id, channel.id);
  }, items2);
  const items3 = [UserGuildSettingsStore];
  const obj4 = channel(onChannelClick[17]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => {
    const isChannelOptedInResult = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.parent_id);
    return isChannelOptedInResult;
  });
  let topic = channel.topic;
  let isGuildVocalResult = null != topic;
  const tmp10 = guild(onChannelClick[31])(channel);
  if (isGuildVocalResult) {
    isGuildVocalResult = 0 !== topic.length;
  }
  if (!isGuildVocalResult) {
    isGuildVocalResult = channel.isGuildVocal();
  }
  if (!isGuildVocalResult) {
    const tmp4Result = channel(onChannelClick[18]);
    topic = tmp4Result.getActiveAgoTimestamp(channel.id);
  }
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp4Result5 = channel(onChannelClick[35]);
  const token = tmp4Result5.useToken(tmp9(tmp5[12]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  channel(onChannelClick[35]);
  if (null == guild) {
    return null;
  } else {
    const tmp4Result7 = channel(onChannelClick[36]);
    const channelIconWithGuild = tmp4Result7.getChannelIconWithGuild(channel, guild);
    let rulesChannelId;
    const getChannelIconComponent = channel(onChannelClick[36]).getChannelIconComponent;
    channel(onChannelClick[36]);
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    const obj5 = { isRulesChannel: rulesChannelId === channel.id };
    const channelIconComponent = getChannelIconComponent(channel, obj5);
    const obj6 = {
      start: isFirst,
      end: isLast,
      disabled: stateFromStores2,
      icon: closure_12(channel(onChannelClick[38]).TableRowIcon, obj7),
      label: closure_13(View, obj8),
      subLabel: parseTopicResult,
      subLabelLineClamp: 1,
      onPress() {
          return onChannelClick(guild.id, channel.id, channel.parent_id);
        },
      checked: stateFromStores
    };
    const TableCheckboxRow = tmp4(tmp5[37]).TableCheckboxRow;
    let tmp21;
    obj7 = { source: channelIconWithGuild, IconComponent: channelIconComponent };
    obj8 = { style: tmp.channelTitle, children: items5 };
    const Text = tmp4(tmp5[29]).Text;
    if (stateFromStores1) {
      tmp21 = { marginRight: tmp3 + 8 };
      const obj9 = { marginRight: tmp3 + 8 };
    }
    const obj10 = { lineClamp: 1, style: items4, variant: token, color: tmp15, children: tmp10 };
    items4 = [tmp21];
    items5 = [closure_12(Text, obj10), ];
    if (stateFromStores1) {
      const obj11 = { style: obj12, onLayout: callback, children: closure_12(TextBadge, obj13) };
      obj12 = { marginLeft: -tmp3 };
      obj13 = { color: channel(onChannelClick[39]).BadgeColors.BRAND, text: intl.string(channel(onChannelClick[25]).t.y2b7CA), textStyle: tmp.newBadge };
      TextBadge = tmp4(tmp5[39]).TextBadge;
      intl = tmp4(tmp5[25]).intl;
      stateFromStores1 = closure_12(View, obj11);
    }
    items5[1] = stateFromStores1;
    parseTopicResult = null;
    if (null != topic) {
      parseTopicResult = null;
      if (topic.length > 0) {
        const obj14 = { channelId: channel.id, shouldCloseModal: true };
        const tmp9Result = guild(onChannelClick[40]);
        parseTopicResult = tmp9Result.parseTopic(topic, true, obj14);
      }
    }
    if (!stateFromStores) {
      stateFromStores = stateFromStores2;
    }
    if (!stateFromStores) {
      stateFromStores = forceChecked;
    }
    return closure_12(TableCheckboxRow, obj6);
  }
}));
let result = size.fileFinishedImporting("modules/opt_in_channels/native/ChannelBrowser.tsx");

export default tmp5;