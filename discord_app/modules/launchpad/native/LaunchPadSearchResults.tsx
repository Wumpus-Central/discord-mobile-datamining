// discord_app/modules/launchpad/native/LaunchPadSearchResults.tsx
import importAllResult from "renderChannelBadge";
import { View } from "GuildIconSizes";
import _getSystemLocale from "_getSystemLocale";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "module_15950";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { sortByMatchScore } from "../../autocompleter/index.tsx";
import { renderCategoryItem } from "../../channel_list_v2/native/items/RedesignCategory.tsx";
import { GuildIconSizes } from "../../guild/native/GuildIcon.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { user } from "LaunchPadSearchResultUser.tsx";
import { DMChannel } from "shared/DMChannel.tsx";
import { getLayoutStyle } from "shared/getLayoutStyles.tsx";
import { renderChannelBadge } from "shared/renderChannelBadge.tsx";
import { ChannelContent } from "shared/renderChannelContent.tsx";
import { items } from "shared/renderChannelPressableWrapper.tsx";
import { renderChannelWrapper } from "shared/renderChannelWrapper.tsx";
import { TextChannel } from "shared/TextChannel.tsx";
import { UnreadBadge } from "shared/UnreadBadge.tsx";
import { handleVoiceOrStageChannelConnectPress } from "shared/VoiceOrStageChannel.tsx";

let c10;
let c9;
let unpackModuleId;
const require = arg1;
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
    } else if (tmp14(7229).AutocompleterResultTypes.TEXT_CHANNEL === type) {
      obj = { channel: null, navigationReplace: true, showGuildBadgeIcon: true };
      obj[0] = result.record;
      return callback(TextChannel, obj);
    } else if (tmp14(7229).AutocompleterResultTypes.GROUP_DM === type) {
      const obj1 = { channel: null, navigationReplace: true };
      obj1[0] = result.record;
      return callback(DMChannel, obj1);
    } else if (tmp14(7229).AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj2 = { channel: null };
      obj2[0] = result.record;
      return callback(handleVoiceOrStageChannelConnectPress, obj2);
    } else if (tmp14(7229).AutocompleterResultTypes.USER === type) {
      ({ record: obj4[0], comparator: obj4[1] } = result);
      return callback(user, { user: null, comparator: null });
    } else if (tmp14(7229).AutocompleterResultTypes.HEADER === type) {
      const obj4 = { name: null, styles: null, isRefreshEnabled: null };
      obj4[0] = result.record.text;
      obj4[1] = tmp;
      obj4[2] = tmp2;
      return tmp14(15151).renderCategoryItem(obj4);
    } else {
      obj = { variant: "text-sm/semibold", children: null };
      obj[1] = result.type;
      return callback(tmp14(4281).Text, obj);
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
obj = { borderRadius: require("Themes").radii.sm };
obj[2] = obj;
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[3] = createCacheKey;
obj[4] = { flex: 1 };
obj[5] = { backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.memo((guild) => {
  let isMentionLowImportance;
  let mentionCount;
  let unread;
  guild = guild.guild;
  const tmp = callback3();
  const tmp2 = getLayoutStyle();
  const items = [guild.id];
  const callback = importAllResult.useCallback(() => {
    guild(outer1_2[10]).transitionToGuild(guild.id);
  }, items);
  let obj = guild(589);
  const items1 = [updateGuildUnreadSentinel];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ unread: outer1_6.hasUnread(guild.id), mentionCount: outer1_6.getMentionCount(guild.id), isMentionLowImportance: outer1_6.getIsMentionLowImportance(guild.id) }));
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj1 = guild(4701);
  const fontScale = obj1.useFontScale();
  let obj2 = guild(589);
  const items2 = [_getSystemLocale];
  const stateFromStores = obj2.useStateFromStores(items2, () => locale.locale);
  obj = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items3, children: null };
  items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  obj = { children: null };
  const tmp7 = items;
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items4 = [callback(UnreadBadge, obj1), , ];
  obj2 = { size: tmp2.icon.guildIconSize, guild, style: items5 };
  items5 = [tmp.guildIcon, tmp2.icon.margin];
  items4[1] = callback(GuildIconSizes, obj2);
  const obj3 = { name: guild.name, mentionBadge: null };
  const tmp8 = renderChannelWrapper;
  obj3[1] = renderChannelBadge({ mentionCount, locale: stateFromStores, isMentionLowImportance });
  items4[2] = ChannelContent(obj3);
  obj[0] = items4;
  obj[3] = tmp8(callback2(closure_10, obj), { fontScale });
  return tmp7(callback(guild(4827).PressableHighlight, obj));
});
let closure_16 = importAllResult.memo((arg0) => {
  let name;
  let note;
  let onPress;
  ({ name, onPress, note } = arg0);
  let obj = renderCategoryItem;
  const categoryStyles = obj.useCategoryStyles();
  const tmp = callback3();
  const tmp3 = useIsMobileVisualRefreshExperimentEnabled("WrappedCategoryItem");
  obj = { style: tmp.categoryWrapper, children: renderCategoryItem.renderCategoryItem({ name, onPress, note, styles: categoryStyles, isRefreshEnabled: tmp3 }) };
  return callback(View, obj);
});
let obj2 = { backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_ACTIVE };
const memoResult = importAllResult.memo(function InitialResultsInner(history) {
  history = history.history;
  const unreads = history.unreads;
  const toggleExpandedHistory = history.toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  let str = history.selectedGuildId;
  let categoryStyles;
  let c6;
  let stateFromStores;
  let c8;
  let c9;
  let fontScale;
  const tmp = callback3();
  let obj = history(toggleExpandedHistory[25]);
  categoryStyles = obj.useCategoryStyles();
  const tmp5 = unreads(toggleExpandedHistory[27])("InitialResults");
  c6 = tmp5;
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
    return outer1_15({ result: tmp3, categoryStyles, isRefreshEnabled: c6 });
  }, items1);
  const someResult = unreads.some((type) => type.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL);
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
      obj[1] = tmp(history(toggleExpandedHistory[26]).Text, tmp14);
      obj[2] = toggleExpandedHistory;
    } else if (null != stateFromStores) {
      const intl2 = history(toggleExpandedHistory[28]).intl;
      let t = history(toggleExpandedHistory[28]).t;
      t = { guildName: null };
      t[0] = tmp17;
      intl2.formatToPlainString(c8 ? t["+DrQVp"] : t["+lFj35"], t);
      const tmp9 = c8 ? t["+DrQVp"] : t["+lFj35"];
    } else {
      const intl = history(toggleExpandedHistory[28]).intl;
      t = history(toggleExpandedHistory[28]).t;
      const obj1 = { name: null };
      obj1[0] = intl.string(c8 ? t.C5viSQ : t.ieCAhD);
      return tmp(tmp2, obj1);
    }
  }, items2);
  const tmp10 = unreads(toggleExpandedHistory[9])();
  c9 = tmp10;
  const obj2 = history(toggleExpandedHistory[11]);
  const tmp2 = toggleExpandedHistory;
  const tmp4 = unreads;
  fontScale = history(toggleExpandedHistory[12]).useFontScale();
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
        let diff = tmp6 + _undefined.voiceUsers.height - 2;
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
  return c9(str, obj);
});
const memoResult1 = importAllResult.memo(function SearchResultsInner(results) {
  results = results.results;
  let categoryStyles;
  let dependencyMap;
  let ref;
  let c4;
  let fontScale;
  const tmp = callback3();
  let obj = results(15151);
  categoryStyles = obj.useCategoryStyles();
  const tmp5 = categoryStyles(1348)("SearchResults");
  dependencyMap = tmp5;
  const items = [results, categoryStyles, tmp5];
  const callback = ref.useCallback((arg0, arg1) => outer1_15({ result: results[arg1], categoryStyles, isRefreshEnabled: c2 }), items);
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
  const tmp9 = categoryStyles(15942)();
  c4 = tmp9;
  fontScale = results(4701).useFontScale();
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
    obj[11] = categoryStyles(1474)().height;
    tmp12Result = tmp12(categoryStyles(7931), obj);
  }
  obj[1] = tmp12Result;
  return closure_9(c4, obj);
});
let result = require("_getSystemLocale").fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = memoResult1;