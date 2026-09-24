// === Module 17549: LaunchPadSearchResults ===

// Module 17549 (LaunchPadSearchResults)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import GuildIconDefault from "GuildIcon" /* 5889 */;
import transitionToGuild from "transitionToGuild" /* 7672 */;
import sortByMatchScore from "sortByMatchScore" /* 10182 */;
import RedesignCategory from "RedesignCategory" /* 16532 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 17231 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 17232 */;
import getScaledChannelRowHeightDefault from "getScaledChannelRowHeight" /* 17233 */;
import renderChannelContentDefault from "renderChannelContent" /* 17234 */;
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper" /* 17550 */;
import UnreadBadgeDefault from "UnreadBadge" /* 17551 */;
import shared_renderChannelBadgeDefault from "shared/renderChannelBadge" /* 17552 */;
import shared_TextChannelDefault from "shared/TextChannel" /* 17553 */;
import shared_DMChannelDefault from "shared/DMChannel" /* 17558 */;
import VoiceOrStageChannelDefault from "VoiceOrStageChannel" /* 17559 */;
import LaunchPadSearchResultUserDefault from "LaunchPadSearchResultUser" /* 17561 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2111 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7960 */;
import GuildStore from "GuildStore" /* 2066 */;

require = fn;
function renderItemJSX(result) {
  result = result.result;
  if (null == result) {
    return null;
  } else {
    const type = result.type;
    if (sortByMatchScore.AutocompleterResultTypes.GUILD === type) {
      const obj2 = { guild: result.record };
      return React7(closure_14, obj2);
    } else if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL === type) {
      const obj3 = { channel: result.record, navigationReplace: true, showGuildBadgeIcon: true };
      return React7(shared_TextChannelDefault, obj3);
    } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
      const obj5 = { channel: result.record, navigationReplace: true };
      return React7(shared_DMChannelDefault, obj5);
    } else if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj6 = { channel: result.record };
      return React7(VoiceOrStageChannelDefault, obj6);
    } else if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
      ({ record: obj4.user, comparator: obj4.comparator } = result);
      return React7(LaunchPadSearchResultUserDefault, { user: null, comparator: null });
    } else if (sortByMatchScore.AutocompleterResultTypes.HEADER === type) {
      const obj8 = { name: result.record.text, styles: tmp };
      return RedesignCategory.renderCategoryItem(obj8);
    } else {
      const obj = { variant: "text-sm/semibold", children: result.type };
      return React7(Text_Text.Text, obj);
    }
  }
}
function renderSearchResultsSection() {
  const obj = { name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t["zkoeq/"]);
  return React7(closure_16, obj);
}
const View = fn(17).View;
const UnreadSetting = fn(5011).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const scrollIndicatorInsets = { bottom: 24 };
const createStyles = fn(4829);
let obj = { listContainer: { minHeight: 16 }, list: { flex: -1, marginTop: 8 }, guildIcon: { borderRadius: nativeDefault.radii.sm }, categoryWrapper: null, pressable: null, pressableUnderlayColor: null };
let obj3 = { borderRadius: nativeDefault.radii.sm };
obj.categoryWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.pressable = { flex: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.pressableUnderlayColor = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = noop.memo((guild) => {
  guild = guild.guild;
  const tmp = closure_13();
  const tmp2 = getLayoutStylesDefault();
  const items = [guild.id];
  const callback = noop.useCallback(() => {
    transitionToGuild.transitionToGuild(guild.id);
  }, items);
  const items1 = [GuildReadStateStore];
  const stateFromStoresObject = guild(504).useStateFromStoresObject(items1, () => ({ unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) }));
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  const obj = guild(504);
  const fontScale = guild(5280).useFontScale();
  const obj2 = guild(5280);
  const items2 = [LocaleStore];
  const stateFromStores = guild(504).useStateFromStores(items2, () => locale.locale);
  const obj3 = guild(504);
  const obj4 = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: null, children: null };
  const items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  obj4.style = items3;
  const obj5 = { children: null };
  const tmp7 = renderChannelPressableWrapperDefault;
  const items4 = [closure_9(UnreadBadgeDefault, { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES }), , ];
  const obj7 = { size: tmp2.icon.guildIconSize, guild, style: null };
  const items5 = [tmp.guildIcon, tmp2.icon.margin];
  obj7.style = items5;
  items4[1] = closure_9(GuildIconDefault, obj7);
  const obj8 = { name: guild.name, mentionBadge: null };
  const obj6 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const tmp8 = renderChannelWrapperDefault;
  obj8.mentionBadge = shared_renderChannelBadgeDefault({ mentionCount, locale: stateFromStores, isMentionLowImportance });
  items4[2] = renderChannelContentDefault(obj8);
  obj5.children = items4;
  obj4.children = tmp8(closure_11(closure_10, obj5), { fontScale });
  return tmp7(closure_9(guild(5427).PressableHighlight, obj4));
});
let closure_16 = noop.memo((arg0) => {
  ({ name, onPress, note } = arg0);
  const tmp = closure_13();
  const categoryStyles = RedesignCategory.useCategoryStyles();
  return React7(View, { style: tmp.categoryWrapper, children: RedesignCategory.renderCategoryItem({ name, onPress, note, noteAlignment: "end", styles: categoryStyles }) });
});
let obj5 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const memoResult = noop.memo(function InitialResultsInner(history) {
  history = history.history;
  const unreads = history.unreads;
  const toggleExpandedHistory = history.toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  let str = history.selectedGuildId;
  c7 = undefined;
  const tmp = closure_13();
  const categoryStyles = history(toggleExpandedHistory[25]).useCategoryStyles();
  let obj = history(toggleExpandedHistory[25]);
  const tmp2 = toggleExpandedHistory;
  const items = [c7];
  const stateFromStores = history(toggleExpandedHistory[11]).useStateFromStores(items, () => {
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
  const callback = expandedHistory.useCallback((arg0, arg1) => {
    if (0 === arg0) {
      let tmp3 = history[arg1];
    } else {
      tmp3 = unreads[arg1];
    }
    return renderItemJSX({ result: tmp3, categoryStyles });
  }, items1);
  const someResult = unreads.some((type) => type.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL);
  c7 = someResult;
  const items2 = [toggleExpandedHistory, expandedHistory, stateFromStores, someResult];
  const callback1 = expandedHistory.useCallback((arg0) => {
    if (0 === arg0) {
      const obj = { name: null, note: null, onPress: null };
      const intl3 = util.intl;
      obj.name = intl3.string(util.t["Xmh+5e"]);
      const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: null };
      const intl4 = util.intl;
      const string = intl4.string;
      let t2 = util.t;
      if (expandedHistory) {
        t2 = string(t2["3BdvgI"]);
        obj2.children = t2;
        let tmp14 = obj2;
      } else {
        obj2.children = string(t2["/XSoJ+"]);
        tmp14 = obj2;
      }
      obj.note = React7(Text_Text.Text, tmp14);
      obj.onPress = toggleExpandedHistory;
    } else if (null != stateFromStores) {
      const intl2 = util.intl;
      const t1 = { guildName: tmp17 };
      intl2.formatToPlainString(c7 ? t1["+DrQVp"] : t1["+lFj35"], t1);
      const tmp9 = c7 ? t1["+DrQVp"] : t1["+lFj35"];
    } else {
      const intl = util.intl;
      const t = util.t;
      const obj3 = { name: intl.string(c7 ? t.C5viSQ : t.ieCAhD) };
      return React7(tmp2, obj3);
    }
  }, items2);
  let tmp9 = unreads(toggleExpandedHistory[9])();
  const voiceUsers = tmp9;
  let obj2 = history(toggleExpandedHistory[11]);
  const tmp5 = unreads;
  const fontScale = history(toggleExpandedHistory[12]).useFontScale();
  const items3 = [fontScale, history, unreads, tmp9];
  const callback2 = expandedHistory.useCallback((arg0, arg1) => {
    if (null == arg1) {
      return 0;
    } else {
      if (0 === arg0) {
        let tmp3 = history[arg1];
      } else {
        tmp3 = unreads[arg1];
      }
      let tmp6 = dependencyMap;
      if (tmp3.type === sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL) {
        tmp6 = getScaledChannelRowHeightDefault(fontScale);
        let diff = tmp6 + voiceUsers.voiceUsers.height - 2;
      } else {
        diff = getScaledChannelRowHeightDefault(fontScale);
      }
    }
  }, items3);
  if (!expandedHistory) {
    const _Math = Math;
    Math.max(5 - unreads.length, 2);
  }
  const obj4 = { style: tmp.listContainer, children: null };
  if (history.length > 0) {
    const obj5 = { optimizeListItemRender: true, batchesToRender: 6, style: tmp.list, sectionSize: tmp9.category.height, itemSize: callback2, renderItem: callback, renderSection: callback1, sections: null, sectionFooterSize: 8, footerSize: 8, scrollIndicatorInsets: null, chunkBase: null, keyboardShouldPersistTaps: "always" };
    const items4 = [tmp12, unreads.length];
    obj5.sections = items4;
    obj5.scrollIndicatorInsets = scrollIndicatorInsets;
    obj5.chunkBase = unreads(toggleExpandedHistory[28])().height;
    if (str == null) {
      str = "default";
    }
    let tmp13Result = tmp13(tmp5(tmp2[30]), obj5, str);
    const tmp5Result = tmp5(tmp2[30]);
  } else {
    tmp13Result = null;
  }
  obj4.children = tmp13Result;
  return fontScale(str, obj4);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = noop.memo(function SearchResultsInner(results) {
  results = results.results;
  let ref;
  noop = undefined;
  const tmp = closure_13();
  const categoryStyles = results(ref[25]).useCategoryStyles();
  const items = [results, categoryStyles];
  const callback = noop.useCallback((arg0, arg1) => renderItemJSX({ result: results[arg1], categoryStyles }), items);
  ref = noop.useRef(null);
  const items1 = [results.query];
  const effect = noop.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      const scrollToTop = current.scrollToTop;
      if (scrollToTop != null) {
        scrollToTop(false);
      }
    }
  }, items1);
  const tmp8 = categoryStyles(ref[9])();
  noop = tmp8;
  const obj = results(ref[25]);
  const tmp2 = ref;
  const tmp4 = categoryStyles;
  const fontScale = results(ref[12]).useFontScale();
  const items2 = [fontScale, results, tmp8];
  const obj3 = { style: tmp.listContainer, children: null };
  let tmp11Result = null;
  if (results.length > 0) {
    const obj4 = { ref, optimizeListItemRender: true, batchesToRender: 6, style: tmp.list, sectionSize: tmp8.category.height, itemSize: tmp10, renderSection: renderSearchResultsSection, renderItem: callback, sections: null, footerSize: 16, scrollIndicatorInsets: null, chunkBase: null, keyboardShouldPersistTaps: "always" };
    const items3 = [results.length];
    obj4.sections = items3;
    obj4.scrollIndicatorInsets = scrollIndicatorInsets;
    obj4.chunkBase = categoryStyles(ref[28])().height;
    tmp11Result = closure_9(tmp4(tmp2[30]), obj4);
  }
  obj3.children = tmp11Result;
  return closure_9(fontScale, obj3);
});