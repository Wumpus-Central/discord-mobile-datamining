// === Module 17397: LaunchPadSearchResults ===

// Module 17397 (LaunchPadSearchResults)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import transitionToGuild from "transitionToGuild" /* 6845 */;
import _mod9496 from "module_9496" /* 9496 */;
import RedesignCategory from "RedesignCategory" /* 16032 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16832 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16833 */;
import getScaledChannelRowHeightDefault from "getScaledChannelRowHeight" /* 16834 */;
import renderChannelContentDefault from "renderChannelContent" /* 16835 */;
import UnreadBadgeDefault from "UnreadBadge" /* 17398 */;
import renderChannelBadgeDefault from "renderChannelBadge" /* 17399 */;
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper" /* 17400 */;
import shared_TextChannelDefault from "shared/TextChannel" /* 17401 */;
import shared_DMChannelDefault from "shared/DMChannel" /* 17406 */;
import VoiceOrStageChannelDefault from "VoiceOrStageChannel" /* 17407 */;
import LaunchPadSearchResultUserDefault from "LaunchPadSearchResultUser" /* 17409 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7121 */;
import GuildStore_mod from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let categoryStyles, history, results;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function renderItemJSX(result) {
  result = result.result;
  if (null == result) {
    return null;
  } else {
    const type = result.type;
    if (_mod9496.AutocompleterResultTypes.GUILD === type) {
      const obj2 = { guild: result.record };
      return React4(closure_14, obj2);
    } else if (_mod9496.AutocompleterResultTypes.TEXT_CHANNEL === type) {
      const obj3 = { channel: result.record, navigationReplace: true, showGuildBadgeIcon: true };
      return React4(shared_TextChannelDefault, obj3);
    } else if (_mod9496.AutocompleterResultTypes.GROUP_DM === type) {
      const obj5 = { channel: result.record, navigationReplace: true };
      return React4(shared_DMChannelDefault, obj5);
    } else if (_mod9496.AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj6 = { channel: result.record };
      return React4(VoiceOrStageChannelDefault, obj6);
    } else if (_mod9496.AutocompleterResultTypes.USER === type) {
      const obj7 = { user: null, comparator: null };
      ({ record: obj4.user, comparator: obj4.comparator } = result);
      return React4(LaunchPadSearchResultUserDefault, obj7);
    } else if (_mod9496.AutocompleterResultTypes.HEADER === type) {
      const obj8 = { name: result.record.text, styles: tmp };
      const tmp13Result = RedesignCategory;
      return tmp13Result.renderCategoryItem(obj8);
    } else {
      const obj = { variant: "text-sm/semibold", children: result.type };
      return React4(Text_Text.Text, obj);
    }
  }
}
function renderSearchResultsSection() {
  let intl;
  const obj = { name: intl.string(intl5.t["zkoeq/"]) };
  intl = intl5.intl;
  return React4(closure_16, obj);
}
let react = react_mod;
const View = react_native.View;
let GuildStore = GuildStore_mod;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
const scrollIndicatorInsets = { bottom: 24 };
let createStyles = createStyles_mod;
let obj = { listContainer: { minHeight: 16 }, list: { flex: -1, marginTop: 8 }, guildIcon: obj2, categoryWrapper: obj3, pressable: { flex: 1 }, pressableUnderlayColor: obj4 };
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_13 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let first;
  let isMentionLowImportance;
  let locale;
  let mentionCount;
  let obj4;
  let tmp14;
  let tmp15;
  let tmp9;
  let unread;
  let obj = guild(576);
  const cResult = obj.c(35);
  guild = guild.guild;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = getLayoutStylesDefault();
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function b() {
      const obj = transitionToGuild;
      obj.transitionToGuild(guild.id);
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildReadStateStore];
    cResult[3] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guild.id) {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
    cResult[4] = guild.id;
    cResult[5] = R;
  } else {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
  }
  const tmpResult = guild(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp9, R);
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  const tmpResult3 = guild(5602);
  const fontScale = tmpResult3.useFontScale();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
    const items1 = [LocaleStore];
    const fn2 = function _() {
      return locale.locale;
    };
    cResult[6] = items1;
    cResult[7] = fn2;
    tmp15 = fn2;
    tmp14 = items1;
  } else {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult4 = guild(504);
  const stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
    tmp18[0] = first.container.borderRadius;
    cResult[8] = tmp18;
  } else {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
  }
  if (cResult[9] !== tmp4.pressable) {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
    tmp20[0] = tmp4.pressable;
    tmp20[1] = tmp18;
    cResult[9] = tmp4.pressable;
    cResult[10] = tmp20;
  } else {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
  }
  if (cResult[11] !== unread) {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
    const obj2 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
    cResult[11] = unread;
    cResult[12] = closure_9(UnreadBadgeDefault, obj2);
    const tmp24 = closure_9(UnreadBadgeDefault, obj2);
  } else {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
  }
  if (cResult[13] !== tmp4.guildIcon) {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
    tmp26[0] = tmp4.guildIcon;
    tmp26[1] = first.icon.margin;
    cResult[13] = tmp4.guildIcon;
    cResult[14] = tmp26;
  } else {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
  }
  if (cResult[15] === guild) {
    class R {
      constructor() {
        const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
        return obj;
      }
    }
    if (cResult[18] === guild.name) {
      class R {
        constructor() {
          const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
          return obj;
        }
      }
    }
    const obj3 = { name: guild.name, mentionBadge: renderChannelBadgeDefault(obj4) };
    obj4 = { mentionCount, locale: stateFromStores, isMentionLowImportance };
    const tmp30 = renderChannelContentDefault;
    cResult[18] = guild.name;
    cResult[19] = isMentionLowImportance;
    cResult[20] = stateFromStores;
    cResult[21] = mentionCount;
    cResult[22] = tmp30(obj3);
    const tmp30Result = tmp30(obj3);
  }
  const obj5 = { size: first.icon.guildIconSize, guild, style: tmp26 };
  cResult[15] = guild;
  cResult[16] = tmp26;
  cResult[17] = closure_9(GuildIconDefault, obj5);
  closure_9(GuildIconDefault, obj5);
}) : ((guild) => {
  let isMentionLowImportance;
  let items3;
  let items4;
  let items5;
  let locale;
  let mentionCount;
  let obj5;
  let tmp8;
  let unread;
  guild = guild.guild;
  const tmp = closure_13();
  const tmp2 = getLayoutStylesDefault();
  const items = [guild.id];
  const callback = react.useCallback(() => {
    const obj = transitionToGuild;
    obj.transitionToGuild(guild.id);
  }, items);
  let obj = guild(504);
  const items1 = [GuildReadStateStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => {
    const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
    return obj;
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  const obj2 = guild(5602);
  const fontScale = obj2.useFontScale();
  const items2 = [LocaleStore];
  const obj3 = guild(504);
  const stateFromStores = obj3.useStateFromStores(items2, () => locale.locale);
  const obj4 = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items3, children: tmp8(closure_11(closure_10, obj5), { fontScale }) };
  items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  const tmp7 = renderChannelPressableWrapperDefault;
  const PressableHighlight = guild(5909).PressableHighlight;
  obj5 = { children: items4 };
  items4 = [, , ];
  const obj6 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  tmp8 = renderChannelWrapperDefault;
  items4[0] = closure_9(UnreadBadgeDefault, obj6);
  const obj7 = { size: tmp2.icon.guildIconSize, guild, style: items5 };
  items5 = [tmp.guildIcon, tmp2.icon.margin];
  items4[1] = closure_9(GuildIconDefault, obj7);
  const obj8 = { name: guild.name, mentionBadge: renderChannelBadgeDefault({ mentionCount, locale: stateFromStores, isMentionLowImportance }) };
  const tmp9 = renderChannelContentDefault;
  items4[2] = tmp9(obj8);
  return tmp7(closure_9(PressableHighlight, obj4));
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let name;
  let note;
  let onPress;
  const obj = react2;
  const cResult = obj.c(8);
  ({ name, onPress, note } = arg0);
  const tmp4 = closure_13();
  const obj2 = RedesignCategory;
  categoryStyles = obj2.useCategoryStyles();
  if (cResult[0] === categoryStyles) {
    if (cResult[1] === name) {
      if (cResult[2] === note) {
        let tmp6;
        if (cResult[3] === onPress) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === tmp6) {
          let tmp8;
          if (cResult[6] === tmp4.categoryWrapper) {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
        const obj3 = { style: tmp4.categoryWrapper, children: tmp6 };
        const tmp11 = React4(View, obj3);
        cResult[5] = tmp6;
        cResult[6] = tmp4.categoryWrapper;
        cResult[7] = tmp11;
        tmp8 = tmp11;
      }
    }
  }
  const tmpResult = RedesignCategory;
  const renderCategoryItemResult = tmpResult.renderCategoryItem({ name, onPress, note, noteAlignment: "end", styles: categoryStyles });
  cResult[0] = categoryStyles;
  cResult[1] = name;
  cResult[2] = note;
  cResult[3] = onPress;
  cResult[4] = renderCategoryItemResult;
  tmp6 = renderCategoryItemResult;
}) : ((arg0) => {
  let name;
  let note;
  let onPress;
  ({ name, onPress, note } = arg0);
  const tmp = closure_13();
  const obj = RedesignCategory;
  categoryStyles = obj.useCategoryStyles();
  const obj2 = RedesignCategory;
  const obj3 = { style: tmp.categoryWrapper, children: obj2.renderCategoryItem({ name, onPress, note, noteAlignment: "end", styles: categoryStyles }) };
  return React4(View, obj3);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((history) => {
  let first;
  let tmp8;
  let toggleExpandedHistory;
  let voiceUsers;
  const tmp = history;
  let obj = history(toggleExpandedHistory[10]);
  const cResult = obj.c(33);
  history = history.history;
  const unreads = history.unreads;
  toggleExpandedHistory = history.toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  const selectedGuildId = history.selectedGuildId;
  closure_13();
  let obj2 = history(toggleExpandedHistory[27]);
  categoryStyles = obj2.useCategoryStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== selectedGuildId) {
    const fn = function l() {
      if (null != selectedGuildId) {
        const guild = GuildStore.getGuild(tmp);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        return name;
      }
    };
    cResult[1] = selectedGuildId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(toggleExpandedHistory[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  const height = unreads(tmp2[30])().height;
  if (cResult[3] === categoryStyles) {
    if (cResult[4] === history) {
      if (cResult[7] !== unreads) {
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor(type) {
              return type.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL;
            }
          }
          cResult[9] = L;
        } else {
          class L {
            constructor(type) {
              return type.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL;
            }
          }
        }
        cResult[7] = unreads;
        cResult[8] = unreads.some(L);
        const someResult = unreads.some(L);
      } else {
        class L {
          constructor(type) {
            return type.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL;
          }
        }
      }
      GuildStore = tmp11;
      if (cResult[10] === expandedHistory) {
        class L {
          constructor(type) {
            return type.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL;
          }
        }
      }
      const fn2 = function z(arg0) {
        let Text;
        let intl3;
        let obj4;
        let tmp13;
        if (0 === arg0) {
          const obj2 = { name: intl3.string(intl5.t["Xmh+5e"]), note: React4(Text, tmp13), onPress: toggleExpandedHistory };
          intl3 = intl5.intl;
          const obj3 = { variant: "text-xs/semibold", color: "text-brand", children: null };
          Text = Text_Text.Text;
          const intl4 = intl5.intl;
          const string2 = intl4.string;
          const t3 = intl5.t;
          if (expandedHistory) {
            obj3.children = string2(t3["3BdvgI"]);
            tmp13 = obj3;
          } else {
            obj3.children = string2(t3["/XSoJ+"]);
            tmp13 = obj3;
          }
          obj4 = obj2;
        } else {
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl2 = intl5.intl;
            const formatToPlainString = intl2.formatToPlainString;
            const t2 = intl5.t;
            const obj = { guildName: tmp15 };
            formatToPlainStringResult = formatToPlainString(GuildStore ? t2["+DrQVp"] : t2["+lFj35"], obj);
          } else {
            const intl = intl5.intl;
            const string = intl.string;
            const t = intl5.t;
            formatToPlainStringResult = string(GuildStore ? t.C5viSQ : t.ieCAhD);
          }
          obj4 = { name: formatToPlainStringResult };
        }
        return React4(closure_16, obj4);
      };
      cResult[10] = expandedHistory;
      cResult[11] = tmp11;
      cResult[12] = stateFromStores;
      cResult[13] = toggleExpandedHistory;
      cResult[14] = fn2;
    }
  }
  class E {
    constructor(arg0, arg1) {
      let tmp3;
      if (0 === arg0) {
        tmp3 = history[arg1];
      } else {
        tmp3 = unreads[arg1];
      }
      const obj = { result: tmp3, categoryStyles };
      return renderItemJSX(obj);
    }
  }
  cResult[3] = categoryStyles;
  cResult[4] = history;
  cResult[5] = unreads;
  cResult[6] = E;
}) : ((history) => {
  let items4;
  let tmp13Result;
  history = history.history;
  const unreads = history.unreads;
  const toggleExpandedHistory = history.toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  let str = history.selectedGuildId;
  let c7;
  const tmp = closure_13();
  let obj = history(toggleExpandedHistory[27]);
  categoryStyles = obj.useCategoryStyles();
  let obj2 = history(toggleExpandedHistory[13]);
  const items = [c7];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (null != str) {
      const guild = GuildStore.getGuild(tmp);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      return name;
    }
  });
  const items1 = [history, unreads, categoryStyles];
  const height = unreads(toggleExpandedHistory[30])().height;
  const callback = expandedHistory.useCallback((arg0, arg1) => {
    let tmp3;
    if (0 === arg0) {
      tmp3 = history[arg1];
    } else {
      tmp3 = unreads[arg1];
    }
    const obj = { result: tmp3, categoryStyles };
    return renderItemJSX(obj);
  }, items1);
  const someResult = unreads.some((type) => type.type === history(toggleExpandedHistory[22]).AutocompleterResultTypes.VOICE_CHANNEL);
  c7 = someResult;
  const items2 = [toggleExpandedHistory, expandedHistory, stateFromStores, someResult];
  const callback1 = expandedHistory.useCallback((arg0) => {
    let Text;
    let intl3;
    let obj4;
    let tmp13;
    if (0 === arg0) {
      const obj2 = { name: intl3.string(intl5.t["Xmh+5e"]), note: React4(Text, tmp13), onPress: toggleExpandedHistory };
      intl3 = intl5.intl;
      const obj3 = { variant: "text-xs/semibold", color: "text-brand", children: null };
      Text = Text_Text.Text;
      const intl4 = intl5.intl;
      const string2 = intl4.string;
      const t3 = intl5.t;
      if (expandedHistory) {
        obj3.children = string2(t3["3BdvgI"]);
        tmp13 = obj3;
      } else {
        obj3.children = string2(t3["/XSoJ+"]);
        tmp13 = obj3;
      }
      obj4 = obj2;
    } else {
      let formatToPlainStringResult;
      if (null != stateFromStores) {
        const intl2 = intl5.intl;
        const formatToPlainString = intl2.formatToPlainString;
        const t2 = intl5.t;
        const obj = { guildName: tmp15 };
        formatToPlainStringResult = formatToPlainString(c7 ? t2["+DrQVp"] : t2["+lFj35"], obj);
      } else {
        const intl = intl5.intl;
        const string = intl.string;
        const t = intl5.t;
        formatToPlainStringResult = string(c7 ? t.C5viSQ : t.ieCAhD);
      }
      obj4 = { name: formatToPlainStringResult };
    }
    return React4(closure_16, obj4);
  }, items2);
  const tmp9 = unreads(toggleExpandedHistory[11])();
  const voiceUsers = tmp9;
  let obj3 = history(toggleExpandedHistory[14]);
  const fontScale = obj3.useFontScale();
  const items3 = [fontScale, history, unreads, tmp9];
  const callback2 = expandedHistory.useCallback((arg0, arg1) => {
    let num = 0;
    if (null != arg1) {
      let tmp3;
      let diff;
      if (0 === arg0) {
        tmp3 = history[arg1];
      } else {
        tmp3 = unreads[arg1];
      }
      if (tmp3.type === _mod9496.AutocompleterResultTypes.VOICE_CHANNEL) {
        diff = getScaledChannelRowHeightDefault(fontScale) + voiceUsers.voiceUsers.height - 2;
      } else {
        diff = getScaledChannelRowHeightDefault(fontScale);
      }
      num = diff;
    }
    return num;
  }, items3);
  const tmp2 = toggleExpandedHistory;
  const tmp5 = unreads;
  if (!expandedHistory) {
    const _Math = Math;
    let num = 5;
    Math.max(5 - unreads.length, 2);
  }
  let tmp13 = fontScale;
  let obj4 = { style: tmp.listContainer, children: tmp13Result };
  const tmp14 = str;
  if (history.length > 0) {
    const obj5 = { optimizeListItemRender: true, batchesToRender: 6, style: tmp.list, sectionSize: tmp9.category.height, itemSize: callback2, renderItem: callback, renderSection: callback1, sections: items4, sectionFooterSize: 8, footerSize: 8, scrollIndicatorInsets, chunkBase: height, keyboardShouldPersistTaps: "always" };
    items4 = [tmp12, unreads.length];
    const tmp5Result = tmp5(tmp2[32]);
    if (str == null) {
      str = "default";
    }
    tmp13Result = tmp13(tmp5Result, obj5, str);
  } else {
    tmp13Result = null;
  }
  return tmp13(tmp14, obj4);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((results) => {
  let items;
  let ref;
  let voiceUsers;
  let obj = results(ref[10]);
  const cResult = obj.c(19);
  const tmp = results;
  results = results.results;
  const query = results.query;
  const tmp4 = closure_13();
  const obj2 = results(ref[27]);
  categoryStyles = obj2.useCategoryStyles();
  const height = categoryStyles(ref[30])().height;
  const tmp6 = categoryStyles;
  if (cResult[0] === categoryStyles) {
    let tmp7;
    if (cResult[1] === results) {
      tmp7 = cResult[2];
    }
    ref = react.useRef(null);
    const _Symbol = Symbol;
    const obj3 = react;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          const current = ref.current;
          if (current != null) {
            const scrollToTop = current.scrollToTop;
            if (scrollToTop != null) {
              scrollToTop(false);
            }
          }
        }
      }
      let num = 3;
      cResult[3] = I;
    } else {
      class I {
        constructor() {
          const current = ref.current;
          if (current != null) {
            const scrollToTop = current.scrollToTop;
            if (scrollToTop != null) {
              scrollToTop(false);
            }
          }
        }
      }
    }
    if (cResult[4] !== query) {
      class I {
        constructor() {
          const current = ref.current;
          if (current != null) {
            const scrollToTop = current.scrollToTop;
            if (scrollToTop != null) {
              scrollToTop(false);
            }
          }
        }
      }
      tmp13[0] = query;
      cResult[4] = query;
      cResult[5] = tmp13;
    } else {
      class I {
        constructor() {
          const current = ref.current;
          if (current != null) {
            const scrollToTop = current.scrollToTop;
            if (scrollToTop != null) {
              scrollToTop(false);
            }
          }
        }
      }
    }
    const effect = obj3.useEffect(I, tmp13);
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          const current = ref.current;
          if (current != null) {
            const scrollToTop = current.scrollToTop;
            if (scrollToTop != null) {
              scrollToTop(false);
            }
          }
        }
      }
      cResult[6] = tmp16;
    } else {
      class I {
        constructor() {
          const current = ref.current;
          if (current != null) {
            const scrollToTop = current.scrollToTop;
            if (scrollToTop != null) {
              scrollToTop(false);
            }
          }
        }
      }
    }
    react = tmp16;
    const tmpResult = tmp(ref[14]);
    const fontScale = tmpResult.useFontScale();
    if (cResult[7] === fontScale) {
      class I {
        constructor() {
          const current = ref.current;
          if (current != null) {
            const scrollToTop = current.scrollToTop;
            if (scrollToTop != null) {
              scrollToTop(false);
            }
          }
        }
      }
      if (cResult[10] === height) {
        class I {
          constructor() {
            const current = ref.current;
            if (current != null) {
              const scrollToTop = current.scrollToTop;
              if (scrollToTop != null) {
                scrollToTop(false);
              }
            }
          }
        }
      }
      let tmp20 = null;
      if (results.length > 0) {
        class I {
          constructor() {
            const current = ref.current;
            if (current != null) {
              const scrollToTop = current.scrollToTop;
              if (scrollToTop != null) {
                scrollToTop(false);
              }
            }
          }
        }
        const obj4 = { ref, optimizeListItemRender: true, batchesToRender: 6, style: tmp4.list, sectionSize: tmp16.category.height, itemSize: tmp18, renderSection: renderSearchResultsSection, renderItem: tmp7, sections: items, footerSize: 16, scrollIndicatorInsets, chunkBase: height, keyboardShouldPersistTaps: "always" };
        items = [results.length];
        tmp20 = closure_9(tmp6(tmp2[32]), obj4);
      }
      cResult[10] = height;
      cResult[11] = tmp18;
      cResult[12] = tmp7;
      cResult[13] = results.length;
      cResult[14] = tmp4.list;
      cResult[15] = tmp20;
    }
    const fn2 = function _(arg0, arg1) {
      let num = 0;
      if (null != arg1) {
        let diff;
        if (results[arg1].type === _mod9496.AutocompleterResultTypes.VOICE_CHANNEL) {
          diff = getScaledChannelRowHeightDefault(fontScale) + react.voiceUsers.height - 2;
        } else {
          diff = getScaledChannelRowHeightDefault(fontScale);
        }
        num = diff;
      }
      return num;
    };
    cResult[7] = fontScale;
    cResult[8] = results;
    cResult[9] = fn2;
  }
  const fn = function l(arg0, arg1) {
    const obj = { result: results[arg1], categoryStyles };
    return renderItemJSX(obj);
  };
  cResult[0] = categoryStyles;
  cResult[1] = results;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((results) => {
  let items3;
  let tmp11Result;
  let voiceUsers;
  results = results.results;
  let ref;
  react = undefined;
  const query = results.query;
  const tmp = closure_13();
  let obj = results(ref[27]);
  categoryStyles = obj.useCategoryStyles();
  const items = [results, categoryStyles];
  const height = categoryStyles(ref[30])().height;
  const callback = react.useCallback((arg0, arg1) => {
    const obj = { result: results[arg1], categoryStyles };
    return renderItemJSX(obj);
  }, items);
  const tmp2 = ref;
  ref = react.useRef(null);
  const items1 = [query];
  const effect = react.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      const scrollToTop = current.scrollToTop;
      if (scrollToTop != null) {
        scrollToTop(false);
      }
    }
  }, items1);
  const tmp8 = categoryStyles(ref[11])();
  react = tmp8;
  const obj2 = results(ref[14]);
  const fontScale = obj2.useFontScale();
  const items2 = [fontScale, results, tmp8];
  const obj3 = { style: tmp.listContainer, children: tmp11Result };
  tmp11Result = null;
  const tmp12 = fontScale;
  const tmp4 = categoryStyles;
  if (results.length > 0) {
    const obj4 = { ref, optimizeListItemRender: true, batchesToRender: 6, style: tmp.list, sectionSize: tmp8.category.height, itemSize: tmp10, renderSection: renderSearchResultsSection, renderItem: callback, sections: items3, footerSize: 16, scrollIndicatorInsets, chunkBase: height, keyboardShouldPersistTaps: "always" };
    items3 = [results.length];
    tmp11Result = closure_9(tmp4(tmp2[32]), obj4);
  }
  return closure_9(tmp12, obj3);
}));
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = memoResult1;