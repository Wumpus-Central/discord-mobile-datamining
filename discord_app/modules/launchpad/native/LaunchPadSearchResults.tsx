// === Module 16195: renderItemJSX ===

// Module 16195 (renderItemJSX)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import Text from "Text" /* 4734 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 7188 */;
import sortByMatchScore from "sortByMatchScore" /* 7593 */;
import renderCategoryItem from "renderCategoryItem" /* 15369 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16196 */;
import itemsDefault from "items" /* 16197 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16198 */;
import _modDef16200 from "module_16200" /* 16200 */;
import ChannelContentDefault from "ChannelContent" /* 16201 */;
import renderChannelBadgeDefault from "renderChannelBadge" /* 16203 */;
import _modDef16204 from "module_16204" /* 16204 */;
import _modDef16210 from "module_16210" /* 16210 */;
import handleVoiceOrStageChannelConnectPressDefault from "handleVoiceOrStageChannelConnectPress" /* 16211 */;
import userDefault from "user" /* 16213 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel" /* 5383 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
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
    } else if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL === type) {
      obj = { channel: null, navigationReplace: true, showGuildBadgeIcon: true };
      obj[0] = result.record;
      return callback(_modDef16204, obj);
    } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
      obj1 = { channel: null, navigationReplace: true };
      obj1[0] = result.record;
      return callback(_modDef16210, obj1);
    } else if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj2 = { channel: null };
      obj2[0] = result.record;
      return callback(handleVoiceOrStageChannelConnectPressDefault, obj2);
    } else if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
      ({ record: obj4[0], comparator: obj4[1] } = result);
      return callback(userDefault, { user: null, comparator: null });
    } else if (sortByMatchScore.AutocompleterResultTypes.HEADER === type) {
      const obj4 = { name: null, styles: null, isRefreshEnabled: null };
      obj4[0] = result.record.text;
      obj4[1] = tmp;
      obj4[2] = tmp2;
      return renderCategoryItem.renderCategoryItem(obj4);
    } else {
      obj = { variant: "text-sm/semibold", children: null };
      obj[1] = result.type;
      return callback(Text.Text, obj);
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
let obj = { borderRadius: ThemesDefault.radii.sm };
obj[2] = obj;
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
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
    guild(dependencyMap[10]).transitionToGuild(guild.id);
  }, items);
  let obj = guild(589);
  const items1 = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ unread: closure_1_6.hasUnread(guild.id), mentionCount: closure_1_6.getMentionCount(guild.id), isMentionLowImportance: closure_1_6.getIsMentionLowImportance(guild.id) }));
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  obj1 = guild(4751);
  const fontScale = obj1.useFontScale();
  let obj2 = guild(589);
  const items2 = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items2, () => locale.locale);
  const items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  obj = { children: null };
  const tmp7 = itemsDefault;
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items4 = [callback(_modDef16200, obj1), , ];
  obj2 = { size: tmp2.icon.guildIconSize, guild, style: items5 };
  items5 = [tmp.guildIcon, tmp2.icon.margin];
  items4[1] = callback(GuildIconSizesDefault, obj2);
  const obj3 = { name: guild.name, mentionBadge: null };
  const tmp8 = renderChannelWrapperDefault;
  obj3[1] = renderChannelBadgeDefault({ mentionCount, locale: stateFromStores, isMentionLowImportance });
  items4[2] = ChannelContentDefault(obj3);
  obj[0] = items4;
  obj[3] = tmp8(callback2(closure_10, obj), { fontScale });
  return tmp7(callback(guild(5433).PressableHighlight, obj));
});
let closure_16 = importAllResult.memo((arg0) => {
  ({ name, onPress, note } = arg0);
  let obj = renderCategoryItem;
  const categoryStyles = obj.useCategoryStyles();
  const tmp = callback3();
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("WrappedCategoryItem");
  obj = { style: tmp.categoryWrapper, children: renderCategoryItem.renderCategoryItem({ name, onPress, note, styles: categoryStyles, isRefreshEnabled: tmp3 }) };
  return callback(View, obj);
});
const memoResult = importAllResult.memo(function InitialResultsInner(history) {
  history = history.history;
  const unreads = history.unreads;
  const toggleExpandedHistory = history.toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  let str = history.selectedGuildId;
  let stateFromStores;
  const tmp = callback3();
  let obj = history(toggleExpandedHistory[25]);
  const categoryStyles = obj.useCategoryStyles();
  const tmp5 = unreads(toggleExpandedHistory[27])("InitialResults");
  closure_6 = tmp5;
  const items = [stateFromStores];
  stateFromStores = history(toggleExpandedHistory[11]).useStateFromStores(items, () => {
    if (null != str) {
      const guild = stateFromStores.getGuild(tmp);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      return name;
    }
  });
  const items1 = [history, unreads, categoryStyles, tmp5];
  const callback = expandedHistory.useCallback((arg0, arg1) => {
    if (0 === arg0) {
      let tmp3 = history[arg1];
    } else {
      tmp3 = unreads[arg1];
    }
    return renderItemJSX({ result: tmp3, categoryStyles, isRefreshEnabled: closure_6 });
  }, items1);
  const someResult = unreads.some((item, index) => item.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL);
  c8 = someResult;
  const items2 = [toggleExpandedHistory, expandedHistory, stateFromStores, someResult];
  const callback1 = expandedHistory.useCallback((arg0) => {
    if (0 === arg0) {
      let obj = { name: null, note: null, onPress: null };
      const intl3 = history(toggleExpandedHistory[28]).intl;
      obj[0] = intl3.string(history(toggleExpandedHistory[28]).t["Xmh+5e"]);
      obj = { variant: "text-xs/semibold", color: "text-brand", children: null };
      const intl4 = history(toggleExpandedHistory[28]).intl;
      const string = intl4.string;
      let t2 = history(toggleExpandedHistory[28]).t;
      if (expandedHistory) {
        t2 = string(t2["3BdvgI"]);
        obj[2] = t2;
        let tmp14 = obj;
      } else {
        obj[2] = string(t2["/XSoJ+"]);
        tmp14 = obj;
      }
      obj[1] = callback(history(toggleExpandedHistory[26]).Text, tmp14);
      obj[2] = toggleExpandedHistory;
    } else if (null != stateFromStores) {
      const intl2 = history(toggleExpandedHistory[28]).intl;
      history(toggleExpandedHistory[28]).t;
      let t = { guildName: null };
      t[0] = tmp17;
      intl2.formatToPlainString(c8 ? t["+DrQVp"] : t["+lFj35"], t);
    } else {
      const intl = history(toggleExpandedHistory[28]).intl;
      t = history(toggleExpandedHistory[28]).t;
      obj1 = { name: null };
      obj1[0] = intl.string(c8 ? t.C5viSQ : t.ieCAhD);
      return callback(tmp2, obj1);
    }
  }, items2);
  const tmp10 = unreads(toggleExpandedHistory[9])();
  closure_9 = tmp10;
  const obj2 = history(toggleExpandedHistory[11]);
  const tmp2 = toggleExpandedHistory;
  const tmp4 = unreads;
  const fontScale = history(toggleExpandedHistory[12]).useFontScale();
  const items3 = [fontScale, history, unreads, tmp10];
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
        tmp6 = unreads(tmp6[30])(fontScale);
        let diff = tmp6 + voiceUsers.voiceUsers.height - 2;
      } else {
        diff = unreads(tmp6[30])(fontScale);
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
    obj[3] = tmp10.category.height;
    obj[4] = callback2;
    obj[5] = callback;
    obj[6] = callback1;
    const items4 = [tmp13, unreads.length];
    obj[7] = items4;
    obj[10] = closure_12;
    obj[11] = unreads(toggleExpandedHistory[29])().height;
    if (str == null) {
      str = "default";
    }
    let tmp14Result = tmp14(tmp4(tmp2[31]), obj, str);
    const tmp4Result = tmp4(tmp2[31]);
  } else {
    tmp14Result = null;
  }
  obj[1] = tmp14Result;
  return closure_9(str, obj);
});
const memoResult1 = importAllResult.memo(function SearchResultsInner(results) {
  results = results.results;
  let ref;
  const tmp = callback3();
  let obj = results(15369);
  const categoryStyles = obj.useCategoryStyles();
  const tmp5 = categoryStyles(1367)("SearchResults");
  dependencyMap = tmp5;
  const items = [results, categoryStyles, tmp5];
  const callback = ref.useCallback((arg0, arg1) => renderItemJSX({ result: results[arg1], categoryStyles, isRefreshEnabled: closure_2 }), items);
  ref = ref.useRef(null);
  const items1 = [results.query];
  const effect = ref.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      const scrollToTop = current.scrollToTop;
      if (scrollToTop != null) {
        scrollToTop(false);
      }
    }
  }, items1);
  const tmp9 = categoryStyles(16196)();
  closure_4 = tmp9;
  const fontScale = results(4751).useFontScale();
  const items2 = [fontScale, results, tmp9];
  obj = { style: tmp.listContainer, children: null };
  let tmp12Result = null;
  if (results.length > 0) {
    obj = { ref: null, optimizeListItemRender: true, batchesToRender: 6, style: null, sectionSize: null, itemSize: null, renderSection: null, renderItem: null, sections: null, footerSize: 16, scrollIndicatorInsets: null, chunkBase: null, keyboardShouldPersistTaps: "always" };
    obj[0] = ref;
    obj[3] = tmp.list;
    obj[4] = tmp9.category.height;
    obj[5] = tmp11;
    obj[6] = renderSearchResultsSection;
    obj[7] = callback;
    const items3 = [results.length];
    obj[8] = items3;
    obj[10] = closure_12;
    obj[11] = categoryStyles(1494)().height;
    tmp12Result = callback(categoryStyles(8124), obj);
  }
  obj[1] = tmp12Result;
  return callback(closure_4, obj);
});
let result = require("obj132").fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = memoResult1;