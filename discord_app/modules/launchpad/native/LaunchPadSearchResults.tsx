// === Module 16812: renderItemJSX ===

// Module 16812 (renderItemJSX)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 6013 */;
import sortByMatchScore from "sortByMatchScore" /* 9950 */;
import renderCategoryItem from "renderCategoryItem" /* 15942 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16813 */;
import itemsDefault from "items" /* 16814 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16815 */;
import _modDef16817 from "module_16817" /* 16817 */;
import ChannelContentDefault from "ChannelContent" /* 16818 */;
import renderChannelBadgeDefault from "renderChannelBadge" /* 16820 */;
import _modDef16821 from "module_16821" /* 16821 */;
import _modDef16827 from "module_16827" /* 16827 */;
import handleVoiceOrStageChannelConnectPressDefault from "handleVoiceOrStageChannelConnectPress" /* 16828 */;
import userDefault from "user" /* 16830 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "_getSystemLocale" /* 1995 */;
import closure_6 from "updateGuildUnreadSentinel" /* 7391 */;
import closure_7 from "createGuildRecordFromRust" /* 1908 */;
import { UnreadSetting } from "ReadStateTypes" /* 4703 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function renderItemJSX(result) {
  result = result.result;
  if (null == result) {
    return null;
  } else {
    const type = result.type;
    if (sortByMatchScore.AutocompleterResultTypes.GUILD === type) {
      let obj = { guild: null };
      obj[0] = result.record;
      return callback(closure_14, obj);
    } else if (tmp13(9950).AutocompleterResultTypes.TEXT_CHANNEL === type) {
      obj = { channel: null, navigationReplace: true, showGuildBadgeIcon: true };
      obj[0] = result.record;
      return callback(_modDef16821, obj);
    } else if (tmp13(9950).AutocompleterResultTypes.GROUP_DM === type) {
      obj1 = { channel: null, navigationReplace: true };
      obj1[0] = result.record;
      return callback(_modDef16827, obj1);
    } else if (tmp13(9950).AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj2 = { channel: null };
      obj2[0] = result.record;
      return callback(handleVoiceOrStageChannelConnectPressDefault, obj2);
    } else if (tmp13(9950).AutocompleterResultTypes.USER === type) {
      ({ record: obj4[0], comparator: obj4[1] } = result);
      return callback(userDefault, { user: null, comparator: null });
    } else if (tmp13(9950).AutocompleterResultTypes.HEADER === type) {
      const obj4 = { name: null, styles: null };
      obj4[0] = result.record.text;
      obj4[1] = tmp;
      return tmp13(15942).renderCategoryItem(obj4);
    } else {
      obj = { variant: "text-sm/semibold", children: null };
      obj[1] = result.type;
      return callback(tmp13(4474).Text, obj);
    }
  }
}
function renderSearchResultsSection() {
  const obj = { name: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["zkoeq/"]);
  return callback(closure_16, obj);
}
let c3 = importAllResult;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = { bottom: 24 };
let obj = { listContainer: { minHeight: 16 }, list: { flex: -1, marginTop: 8 }, guildIcon: null, categoryWrapper: null, pressable: null, pressableUnderlayColor: null };
obj = { borderRadius: ThemesDefault.radii.sm };
obj[2] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[3] = createCacheKey;
obj[4] = { flex: 1 };
obj[5] = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.memo((guild) => {
  guild = guild.guild;
  const tmp = callback3();
  const tmp2 = getLayoutStyleDefault();
  const items = [guild.id];
  const callback = importAllResult.useCallback(() => {
    guild(closure_1_2[10]).transitionToGuild(guild.id);
  }, items);
  let obj = guild(586);
  const items1 = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ unread: closure_1_6.hasUnread(guild.id), mentionCount: closure_1_6.getMentionCount(guild.id), isMentionLowImportance: closure_1_6.getIsMentionLowImportance(guild.id) }));
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  obj1 = guild(4936);
  const fontScale = obj1.useFontScale();
  let obj2 = guild(586);
  const items2 = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items2, () => locale.locale);
  obj = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items3, children: null };
  items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  obj = { children: null };
  const tmp7 = itemsDefault;
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items4 = [callback(_modDef16817, obj1), , ];
  obj2 = { size: tmp2.icon.guildIconSize, guild, style: items5 };
  items5 = [tmp.guildIcon, tmp2.icon.margin];
  items4[1] = callback(GuildIconSizesDefault, obj2);
  const obj3 = { name: guild.name, mentionBadge: null };
  const tmp8 = renderChannelWrapperDefault;
  obj3[1] = renderChannelBadgeDefault({ mentionCount, locale: stateFromStores, isMentionLowImportance });
  items4[2] = ChannelContentDefault(obj3);
  obj[0] = items4;
  obj[3] = tmp8(callback2(closure_10, obj), { fontScale });
  return tmp7(callback(guild(5077).PressableHighlight, obj));
});
let closure_16 = importAllResult.memo((arg0) => {
  ({ name, onPress, note } = arg0);
  let obj = renderCategoryItem;
  const categoryStyles = obj.useCategoryStyles();
  const tmp = callback3();
  obj = { style: tmp.categoryWrapper, children: renderCategoryItem.renderCategoryItem({ name, onPress, note, noteAlignment: "end", styles: categoryStyles }) };
  return callback(View, obj);
});
let obj2 = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const memoResult = importAllResult.memo(function InitialResultsInner(history) {
  history = history.history;
  const unreads = history.unreads;
  const toggleExpandedHistory = history.toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  let str = history.selectedGuildId;
  let categoryStyles;
  let stateFromStores;
  c7 = undefined;
  closure_8 = undefined;
  let fontScale;
  const tmp = callback3();
  let obj = history(toggleExpandedHistory[25]);
  categoryStyles = obj.useCategoryStyles();
  const items = [c7];
  stateFromStores = history(toggleExpandedHistory[11]).useStateFromStores(items, () => {
    if (null != str) {
      const guild = _undefined.getGuild(tmp);
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
    return closure_1_15({ result: tmp3, categoryStyles });
  }, items1);
  const someResult = unreads.some((type) => type.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL);
  c7 = someResult;
  const items2 = [toggleExpandedHistory, expandedHistory, stateFromStores, someResult];
  const callback1 = expandedHistory.useCallback((arg0) => {
    if (0 === arg0) {
      let obj = { name: null, note: null, onPress: null };
      const intl3 = history(toggleExpandedHistory[27]).intl;
      obj[0] = intl3.string(history(toggleExpandedHistory[27]).t["Xmh+5e"]);
      obj = { variant: "text-xs/semibold", color: "text-brand", children: null };
      const intl4 = history(toggleExpandedHistory[27]).intl;
      const string = intl4.string;
      let t2 = history(toggleExpandedHistory[27]).t;
      if (expandedHistory) {
        t2 = string(t2["3BdvgI"]);
        obj[2] = t2;
        let tmp14 = obj;
      } else {
        obj[2] = string(t2["/XSoJ+"]);
        tmp14 = obj;
      }
      obj[1] = tmp(history(toggleExpandedHistory[26]).Text, tmp14);
      obj[2] = toggleExpandedHistory;
    } else if (null != stateFromStores) {
      const intl2 = history(toggleExpandedHistory[27]).intl;
      let t = history(toggleExpandedHistory[27]).t;
      t = { guildName: null };
      t[0] = tmp17;
      intl2.formatToPlainString(c7 ? t["+DrQVp"] : t["+lFj35"], t);
      const tmp9 = c7 ? t["+DrQVp"] : t["+lFj35"];
    } else {
      const intl = history(toggleExpandedHistory[27]).intl;
      t = history(toggleExpandedHistory[27]).t;
      obj1 = { name: null };
      obj1[0] = intl.string(c7 ? t.C5viSQ : t.ieCAhD);
      return tmp(tmp2, obj1);
    }
  }, items2);
  let tmp9 = unreads(toggleExpandedHistory[9])();
  closure_8 = tmp9;
  const obj2 = history(toggleExpandedHistory[11]);
  const tmp2 = toggleExpandedHistory;
  const tmp5 = unreads;
  fontScale = history(toggleExpandedHistory[12]).useFontScale();
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
      let tmp6 = toggleExpandedHistory;
      if (tmp3.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL) {
        tmp6 = unreads(tmp6[29])(fontScale);
        let diff = tmp6 + voiceUsers.voiceUsers.height - 2;
      } else {
        diff = unreads(tmp6[29])(fontScale);
      }
    }
  }, items3);
  if (!expandedHistory) {
    const _Math = Math;
    Math.max(5 - unreads.length, 2);
  }
  obj = { style: tmp.listContainer, children: null };
  if (history.length > 0) {
    obj = { optimizeListItemRender: true, batchesToRender: 6, style: null, sectionSize: null, itemSize: null, renderItem: null, renderSection: null, sections: null, sectionFooterSize: 8, footerSize: 8, scrollIndicatorInsets: null, chunkBase: null, keyboardShouldPersistTaps: "always" };
    obj[2] = tmp.list;
    obj[3] = tmp9.category.height;
    obj[4] = callback2;
    obj[5] = callback;
    obj[6] = callback1;
    const items4 = [tmp12, unreads.length];
    obj[7] = items4;
    obj[10] = closure_12;
    obj[11] = unreads(toggleExpandedHistory[28])().height;
    if (str == null) {
      str = "default";
    }
    let tmp13Result = tmp13(tmp5(tmp2[30]), obj, str);
    const tmp5Result = tmp5(tmp2[30]);
  } else {
    tmp13Result = null;
  }
  obj[1] = tmp13Result;
  return fontScale(str, obj);
});
const memoResult1 = importAllResult.memo(function SearchResultsInner(results) {
  results = results.results;
  let categoryStyles;
  let ref;
  importAllResult = undefined;
  let fontScale;
  const tmp = callback3();
  let obj = results(ref[25]);
  categoryStyles = obj.useCategoryStyles();
  const items = [results, categoryStyles];
  const callback = importAllResult.useCallback((arg0, arg1) => closure_1_15({ result: results[arg1], categoryStyles }), items);
  ref = importAllResult.useRef(null);
  const items1 = [results.query];
  const effect = importAllResult.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      const scrollToTop = current.scrollToTop;
      if (scrollToTop != null) {
        scrollToTop(false);
      }
    }
  }, items1);
  const tmp8 = categoryStyles(ref[9])();
  importAllResult = tmp8;
  fontScale = results(ref[12]).useFontScale();
  const items2 = [fontScale, results, tmp8];
  obj = { style: tmp.listContainer, children: null };
  let tmp11Result = null;
  if (results.length > 0) {
    obj = { ref: null, optimizeListItemRender: true, batchesToRender: 6, style: null, sectionSize: null, itemSize: null, renderSection: null, renderItem: null, sections: null, footerSize: 16, scrollIndicatorInsets: null, chunkBase: null, keyboardShouldPersistTaps: "always" };
    obj[0] = ref;
    obj[3] = tmp.list;
    obj[4] = tmp8.category.height;
    obj[5] = tmp10;
    obj[6] = renderSearchResultsSection;
    obj[7] = callback;
    const items3 = [results.length];
    obj[8] = items3;
    obj[10] = closure_12;
    obj[11] = categoryStyles(ref[28])().height;
    tmp11Result = tmp11(categoryStyles(ref[30]), obj);
  }
  obj[1] = tmp11Result;
  return closure_9(fontScale, obj);
});
let result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = memoResult1;