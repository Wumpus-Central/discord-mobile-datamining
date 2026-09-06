// discord_app/modules/launchpad/native/LaunchPadSearchResults.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import sortByMatchScore from "../../autocompleter/index.tsx";
import RedesignCategory from "../../channel_list_v2/native/items/RedesignCategory.tsx";
import getLayoutStylesDefault from "shared/getLayoutStyles.tsx";
import renderChannelPressableWrapperDefault from "shared/renderChannelPressableWrapper.tsx";
import renderChannelWrapperDefault from "shared/renderChannelWrapper.tsx";
import getScaledChannelRowHeightDefault from "shared/getScaledChannelRowHeight.tsx";
import UnreadBadgeDefault from "shared/UnreadBadge.tsx";
import renderChannelContentDefault from "shared/renderChannelContent.tsx";
import shared_renderChannelBadgeDefault from "shared/renderChannelBadge.tsx";
import shared_TextChannelDefault from "shared/TextChannel.tsx";
import shared_DMChannelDefault from "shared/DMChannel.tsx";
import VoiceOrStageChannelDefault from "shared/VoiceOrStageChannel.tsx";
import LaunchPadSearchResultUserDefault from "LaunchPadSearchResultUser.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function renderItemJSX(result) {
  result = result.result;
  if (null == result) {
    return null;
  } else {
    const type = result.type;
    if (sortByMatchScore.AutocompleterResultTypes.GUILD === type) {
      let obj = { guild: result.record };
      return React7(closure_14, obj);
    } else if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL === type) {
      obj = { channel: result.record, navigationReplace: true, showGuildBadgeIcon: true };
      return React7(shared_TextChannelDefault, obj);
    } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
      const obj1 = { channel: result.record, navigationReplace: true };
      return React7(shared_DMChannelDefault, obj1);
    } else if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj2 = { channel: result.record };
      return React7(VoiceOrStageChannelDefault, obj2);
    } else if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
      ({ record: obj4.user, comparator: obj4.comparator } = result);
      return React7(LaunchPadSearchResultUserDefault, { user: null, comparator: null });
    } else if (sortByMatchScore.AutocompleterResultTypes.HEADER === type) {
      const obj4 = { name: result.record.text, styles: tmp };
      return RedesignCategory.renderCategoryItem(obj4);
    } else {
      obj = { variant: "text-sm/semibold", children: result.type };
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
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const scrollIndicatorInsets = { bottom: 24 };
fn(4560);
let obj = {
  listContainer: { minHeight: 16 },
  list: { flex: -1, marginTop: 8 },
  guildIcon: null,
  categoryWrapper: null,
  pressable: null,
  pressableUnderlayColor: null,
};
obj = { borderRadius: nativeDefault.radii.sm };
obj.guildIcon = obj;
const createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.categoryWrapper = createStyles;
obj.pressable = { flex: 1 };
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
  let obj = guild(504);
  const items1 = [GuildReadStateStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({
    unread: GuildReadStateStore.hasUnread(guild.id),
    mentionCount: GuildReadStateStore.getMentionCount(guild.id),
    isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id),
  }));
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj1 = guild(4982);
  const fontScale = obj1.useFontScale();
  let obj2 = guild(504);
  const items2 = [LocaleStore];
  const stateFromStores = obj2.useStateFromStores(items2, () => locale.locale);
  obj = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: null, children: null };
  const items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  obj.style = items3;
  obj = { children: null };
  const tmp7 = renderChannelPressableWrapperDefault;
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items4 = [closure_9(UnreadBadgeDefault, obj1), ,];
  obj2 = { size: tmp2.icon.guildIconSize, guild, style: null };
  const items5 = [tmp.guildIcon, tmp2.icon.margin];
  obj2.style = items5;
  items4[1] = closure_9(GuildIconDefault, obj2);
  const obj3 = { name: guild.name, mentionBadge: null };
  const tmp8 = renderChannelWrapperDefault;
  obj3.mentionBadge = shared_renderChannelBadgeDefault({
    mentionCount,
    locale: stateFromStores,
    isMentionLowImportance,
  });
  items4[2] = renderChannelContentDefault(obj3);
  obj.children = items4;
  obj.children = tmp8(closure_11(closure_10, obj), { fontScale });
  return tmp7(closure_9(guild(5123).PressableHighlight, obj));
});
let closure_16 = noop.memo((arg0) => {
  ({ name, onPress, note } = arg0);
  let obj = RedesignCategory;
  const categoryStyles = obj.useCategoryStyles();
  const tmp = closure_13();
  obj = {
    style: tmp.categoryWrapper,
    children: RedesignCategory.renderCategoryItem({
      name,
      onPress,
      note,
      noteAlignment: "end",
      styles: categoryStyles,
    }),
  };
  return React7(View, obj);
});
let obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const memoResult = noop.memo(function InitialResultsInner(history) {
  history = history.history;
  const unreads = history.unreads;
  const toggleExpandedHistory = history.toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  let str = history.selectedGuildId;
  c7 = undefined;
  const tmp = closure_13();
  let obj = history(toggleExpandedHistory[25]);
  const categoryStyles = obj.useCategoryStyles();
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
  const someResult = unreads.some(
    (type) => type.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL,
  );
  c7 = someResult;
  const items2 = [toggleExpandedHistory, expandedHistory, stateFromStores, someResult];
  const callback1 = expandedHistory.useCallback((arg0) => {
    if (0 === arg0) {
      let obj = { name: null, note: null, onPress: null };
      const intl3 = util.intl;
      obj.name = intl3.string(util.t["Xmh+5e"]);
      obj = { variant: "text-xs/semibold", color: "text-brand", children: null };
      const intl4 = util.intl;
      const string = intl4.string;
      let t2 = util.t;
      if (expandedHistory) {
        t2 = string(t2["3BdvgI"]);
        obj.children = t2;
        let tmp14 = obj;
      } else {
        obj.children = string(t2["/XSoJ+"]);
        tmp14 = obj;
      }
      obj.note = React7(Text_Text.Text, tmp14);
      obj.onPress = toggleExpandedHistory;
    } else if (null != stateFromStores) {
      const intl2 = util.intl;
      let t = { guildName: tmp17 };
      intl2.formatToPlainString(c7 ? t["+DrQVp"] : t["+lFj35"], t);
      const tmp9 = c7 ? t["+DrQVp"] : t["+lFj35"];
    } else {
      const intl = util.intl;
      t = util.t;
      const obj1 = { name: intl.string(c7 ? t.C5viSQ : t.ieCAhD) };
      return React7(tmp2, obj1);
    }
  }, items2);
  let tmp9 = unreads(toggleExpandedHistory[9])();
  const voiceUsers = tmp9;
  const obj2 = history(toggleExpandedHistory[11]);
  const tmp2 = toggleExpandedHistory;
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
  obj = { style: tmp.listContainer, children: null };
  if (history.length > 0) {
    obj = {
      optimizeListItemRender: true,
      batchesToRender: 6,
      style: tmp.list,
      sectionSize: tmp9.category.height,
      itemSize: callback2,
      renderItem: callback,
      renderSection: callback1,
      sections: null,
      sectionFooterSize: 8,
      footerSize: 8,
      scrollIndicatorInsets: null,
      chunkBase: null,
      keyboardShouldPersistTaps: "always",
    };
    const items4 = [tmp12, unreads.length];
    obj.sections = items4;
    obj.scrollIndicatorInsets = scrollIndicatorInsets;
    obj.chunkBase = unreads(toggleExpandedHistory[28])().height;
    if (str == null) {
      str = "default";
    }
    let tmp13Result = tmp13(tmp5(tmp2[30]), obj, str);
    const tmp5Result = tmp5(tmp2[30]);
  } else {
    tmp13Result = null;
  }
  obj.children = tmp13Result;
  return fontScale(str, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = noop.memo(function SearchResultsInner(results) {
  results = results.results;
  let ref;
  noop = undefined;
  const tmp = closure_13();
  let obj = results(ref[25]);
  const categoryStyles = obj.useCategoryStyles();
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
  const fontScale = results(ref[12]).useFontScale();
  const items2 = [fontScale, results, tmp8];
  obj = { style: tmp.listContainer, children: null };
  let tmp11Result = null;
  if (results.length > 0) {
    obj = {
      ref,
      optimizeListItemRender: true,
      batchesToRender: 6,
      style: tmp.list,
      sectionSize: tmp8.category.height,
      itemSize: tmp10,
      renderSection: renderSearchResultsSection,
      renderItem: callback,
      sections: null,
      footerSize: 16,
      scrollIndicatorInsets: null,
      chunkBase: null,
      keyboardShouldPersistTaps: "always",
    };
    const items3 = [results.length];
    obj.sections = items3;
    obj.scrollIndicatorInsets = scrollIndicatorInsets;
    obj.chunkBase = categoryStyles(ref[28])().height;
    tmp11Result = closure_9(categoryStyles(ref[30]), obj);
  }
  obj.children = tmp11Result;
  return closure_9(fontScale, obj);
});
