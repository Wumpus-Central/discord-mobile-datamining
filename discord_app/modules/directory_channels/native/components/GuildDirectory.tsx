// === Module 12392: GuildDirectory ===

// Module 12392 (GuildDirectory)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import FastImageDefault from "FastImage" /* 6156 */;
import Pressables from "Pressables" /* 6184 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6739 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7196 */;
import PlusMediumIcon from "PlusMediumIcon" /* 10604 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11492 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11996 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12004 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 12012 */;
import GuildDirectoryRowDefault from "GuildDirectoryRow" /* 12031 */;
import GuildDirectoryPlaceholderRowDefault from "GuildDirectoryPlaceholderRow" /* 12032 */;
import HubProgressBarUtils from "HubProgressBarUtils" /* 12393 */;
import GuildDirectoryRowGenerator from "GuildDirectoryRowGenerator" /* 12394 */;
import _mod12395 from "module_12395" /* 12395 */;
import HubProgressHeaderDefault from "HubProgressHeader" /* 12396 */;
import GuildDirectoryCategorySelectorDefault from "GuildDirectoryCategorySelector" /* 12521 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 12008 */;

require = fn;
function keyExtractor(type, arg1) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  if (type === GuildDirectoryRowGenerator.RowType.ENTRY) {
    let guildId = type.entry.guildId;
  } else {
    let type1;
    if (type != null) {
      type1 = type.type;
    }
    const _HermesInternal = HermesInternal;
    guildId = "" + type1 + arg1.toString();
  }
  return guildId;
}
function renderItem(item) {
  item = item.item;
  let type;
  if (item != null) {
    type = item.type;
  }
  if (GuildDirectoryRowGenerator.RowType.HEADER === type) {
    const obj2 = { children: item.header };
    return collapsedCategories(closure_26, obj2);
  } else if (GuildDirectoryRowGenerator.RowType.ENTRY === type) {
    const obj = { entry: item.entry };
    return collapsedCategories(GuildDirectoryRowDefault, obj);
  } else {
    return collapsedCategories(GuildDirectoryPlaceholderRowDefault, {});
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, SectionList: metroRequire, StyleSheet } = get_ActivityIndicator);
const DirectoryEntryCategories = fn(12001).DirectoryEntryCategories;
const GuildDirectoryConstants = fn(12006);
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryConstants.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: closure_12, DirectoryChannelScrollBehavior: map1 } = GuildDirectoryConstants);
const Constants = fn(1085);
({ AnalyticsObjectTypes: closure_14, AnalyticsObjects: closure_15, AnalyticEvents: closure_16, GuildFeatures: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let closure_21 = Array(20).fill(null);
const createStyles = fn(5092);
let obj = { border: null, list: null, headerWrapper: null, backgroundImage: null, textWrapper: null, headerTitle: null, headerDescription: null, footer: null, addIcon: null, categorySectionText: null };
const ArrayResult = Array(20);
obj.border = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj3 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.list = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.headerWrapper = { overflow: "hidden", height: GUILD_DIRECTORY_BASE_HEADER_HEIGHT };
obj.backgroundImage = { resizeMode: "cover", width: "100%" };
obj.textWrapper = { position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, alignContent: "center" };
obj.headerTitle = { textAlign: "center", marginBottom: 8 };
obj.headerDescription = { lineHeight: 18, textAlign: "center", paddingHorizontal: 20, marginBottom: 72 };
obj.footer = { flexDirection: "row", padding: 16, alignItems: "center" };
let size = { marginRight: 16, height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.addIcon = size;
obj.categorySectionText = { padding: 16, paddingBottom: 4 };
let closure_22 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function useListHeaderHeight(arg0) {
  const hubProgressBarCompletedSteps = HubProgressBarUtils.useHubProgressBarCompletedSteps(arg0);
  if (null == obj2.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  } else {
    sum = __initData + GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  }
  return sum;
}) : (function useListHeaderHeight(arg0) {
  const hubProgressBarCompletedSteps = HubProgressBarUtils.useHubProgressBarCompletedSteps(arg0);
  if (null == obj2.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  } else {
    sum = __initData + GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  }
  return sum;
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryHeaderRowItem(children) {
  const cResult = c.c(3);
  children = children.children;
  const tmp4 = closure_22();
  if (cResult[0] === children) {
    if (cResult[1] === tmp4.categorySectionText) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = collapsedCategories(Text_Text.Text, { style: tmp4.categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children });
  cResult[0] = children;
  cResult[1] = tmp4.categorySectionText;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { style: tmp4.categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
}) : (function GuildDirectoryHeaderRowItem(children) {
  const tmp = closure_22();
  return collapsedCategories(Text_Text.Text, { style: closure_22().categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: children.children });
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryHeader(arg0) {
  const cResult = c.c(31);
  ({ guild, onPressSearch } = arg0);
  const tmp4 = closure_22();
  if (cResult[0] !== guild.features) {
    const features = guild.features;
    const hasItem = features.has(constants2.HUB);
    cResult[0] = guild.features;
    cResult[1] = hasItem;
    let tmp5 = hasItem;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod12395;
    cResult[2] = tmpResult;
    let tmp8 = tmpResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4.backgroundImage) {
    const obj2 = { source: tmp8, style: tmp4.backgroundImage };
    const tmp13 = collapsedCategories(FastImageDefault, obj2);
    cResult[3] = tmp4.backgroundImage;
    cResult[4] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  ({ textWrapper, headerTitle } = tmp4);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.IT7qoC);
    cResult[5] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== tmp4.headerTitle) {
    const obj3 = { style: headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light", children: tmp14 };
    const tmp18 = collapsedCategories(Text_Text.Text, obj3);
    cResult[6] = tmp4.headerTitle;
    cResult[7] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["5PoYts"]);
    cResult[8] = stringResult1;
    let tmp19 = stringResult1;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] !== tmp4.headerDescription) {
    const obj4 = { style: tmp4.headerDescription, variant: "text-sm/medium", color: "text-overlay-light", children: tmp19 };
    const tmp23 = collapsedCategories(Text_Text.Text, obj4);
    cResult[9] = tmp4.headerDescription;
    cResult[10] = tmp23;
    let tmp21 = tmp23;
  } else {
    tmp21 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp27 = collapsedCategories(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" });
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t.nL2wKD);
    cResult[11] = tmp27;
    cResult[12] = stringResult2;
    let tmp25 = stringResult2;
    let tmp24 = tmp27;
  } else {
    tmp24 = cResult[11];
    tmp25 = cResult[12];
  }
  if (cResult[13] !== onPressSearch) {
    const obj5 = { variant: "primary-overlay", icon: tmp24, text: tmp25, onPress: onPressSearch };
    const tmp31 = collapsedCategories(components_Button_Button.Button, obj5);
    cResult[13] = onPressSearch;
    cResult[14] = tmp31;
    let tmp29 = tmp31;
  } else {
    tmp29 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp34 = collapsedCategories(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
    cResult[15] = tmp34;
    let tmp32 = tmp34;
  } else {
    tmp32 = cResult[15];
  }
  if (cResult[16] === tmp4.textWrapper) {
    if (cResult[17] === tmp21) {
      if (cResult[18] === tmp29) {
        if (cResult[19] === tmp16) {
          let tmp35 = cResult[20];
        }
        if (cResult[21] === tmp4.headerWrapper) {
          if (cResult[22] === tmp35) {
            if (cResult[23] === tmp10) {
              let tmp37 = cResult[24];
            }
            if (cResult[25] === guild) {
              if (cResult[26] === tmp5) {
                let tmp41 = cResult[27];
              }
              if (cResult[28] === tmp37) {
                if (cResult[29] === tmp41) {
                  let tmp45 = cResult[30];
                }
                return tmp45;
              }
              const obj6 = { children: null };
              const items = [tmp37, tmp41];
              obj6.children = items;
              const tmp48 = closure_1_19(closure_1_20, obj6);
              cResult[28] = tmp37;
              cResult[29] = tmp41;
              cResult[30] = tmp48;
              tmp45 = tmp48;
            }
            let tmp42 = null;
            if (tmp5) {
              const obj7 = { guild, onDirectoryPage: true };
              tmp42 = collapsedCategories(HubProgressHeaderDefault, obj7);
            }
            cResult[25] = guild;
            cResult[26] = tmp5;
            cResult[27] = tmp42;
            tmp41 = tmp42;
          }
        }
        const obj8 = { style: tmp4.headerWrapper, children: null };
        const items1 = [tmp10, tmp35];
        obj8.children = items1;
        const tmp40 = closure_1_19(hasOwnProperty, obj8);
        cResult[21] = tmp4.headerWrapper;
        cResult[22] = tmp35;
        cResult[23] = tmp10;
        cResult[24] = tmp40;
        tmp37 = tmp40;
      }
    }
  }
  const obj9 = { style: textWrapper, children: null };
  const items2 = [tmp16, tmp21, tmp29, tmp32];
  obj9.children = items2;
  const tmp36 = closure_1_19(hasOwnProperty, obj9);
  cResult[16] = tmp4.textWrapper;
  cResult[17] = tmp21;
  cResult[18] = tmp29;
  cResult[19] = tmp16;
  cResult[20] = tmp36;
  tmp35 = tmp36;
}) : (function GuildDirectoryHeader(guild) {
  guild = guild.guild;
  const tmp = closure_22();
  const features = guild.features;
  const obj = { style: tmp.headerWrapper, children: null };
  const hasItem = features.has(constants2.HUB);
  const obj2 = { source: _mod12395, style: tmp.backgroundImage };
  const items = [collapsedCategories(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.textWrapper, children: null };
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.IT7qoC);
  const items1 = [collapsedCategories(Text_Text.Text, obj4), , , ];
  const obj5 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["5PoYts"]);
  items1[1] = collapsedCategories(Text_Text.Text, obj5);
  const obj6 = { variant: "primary-overlay", icon: collapsedCategories(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }), text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.nL2wKD);
  obj6.onPress = guild.onPressSearch;
  items1[2] = collapsedCategories(components_Button_Button.Button, obj6);
  items1[3] = collapsedCategories(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
  obj3.children = items1;
  items[1] = closure_1_19(hasOwnProperty, obj3);
  obj.children = items;
  const children = [closure_1_19(hasOwnProperty, obj), ];
  let tmp5Result = null;
  if (hasItem) {
    const obj7 = { guild, onDirectoryPage: true };
    tmp5Result = collapsedCategories(HubProgressHeaderDefault, obj7);
  }
  children[1] = tmp5Result;
  return closure_1_19(closure_1_20, { children });
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryFooter(guild) {
  let PressableOpacity = guild;
  let tmp = dependencyMap;
  const cResult = guild(576).c(15);
  guild = guild.guild;
  const channel = guild.channel;
  const tmp3 = closure_22();
  const obj = guild(576);
  let tmp4 = null;
  if (obj2.useCanCreateOrAddGuildInDirectory(channel)) {
    tmp4 = null;
    if (!guild.hideFooter) {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = PressableOpacity(1126).intl;
        const stringResult = intl.string(PressableOpacity(1126).t.H9jxS1);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channel.id) {
        if (cResult[2] === guild.id) {
          if (cResult[3] === guild.name) {
            let tmp8 = cResult[4];
          }
          const _Symbol2 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp11 = closure_18(PressableOpacity(10604).PlusMediumIcon, {});
            cResult[5] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] !== tmp3.addIcon) {
            const obj3 = { style: tmp3.addIcon, children: tmp9 };
            const tmp15 = closure_18(closure_5, obj3);
            cResult[6] = tmp3.addIcon;
            cResult[7] = tmp15;
            let tmp12 = tmp15;
          } else {
            tmp12 = cResult[7];
          }
          const _Symbol3 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
            const intl2 = PressableOpacity(1126).intl;
            obj4.children = intl2.string(PressableOpacity(1126).t.H9jxS1);
            const tmp18 = closure_18(PressableOpacity(5088).Text, obj4);
            cResult[8] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[8];
          }
          if (cResult[9] === tmp3.footer) {
            if (cResult[10] === tmp12) {
              let tmp19 = cResult[11];
            }
            if (cResult[12] === tmp8) {
            }
            PressableOpacity = PressableOpacity(6184).PressableOpacity;
            const obj5 = { accessibilityRole: "button", accessibilityLabel: first, onPress: tmp8, children: tmp19 };
            tmp = closure_18(PressableOpacity, obj5);
            cResult[12] = tmp8;
            cResult[13] = tmp19;
            cResult[14] = tmp;
          }
          const obj6 = { style: tmp3.footer, children: null };
          const items = [tmp12, tmp16];
          obj6.children = items;
          const tmp22 = closure_19(closure_5, obj6);
          cResult[9] = tmp3.footer;
          cResult[10] = tmp12;
          cResult[11] = tmp22;
          tmp19 = tmp22;
        }
      }
      const fn = function l() {
        return GuildDirectoryAddModalActionCreatorsDefault.open({ directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id });
      };
      cResult[1] = channel.id;
      cResult[2] = guild.id;
      cResult[3] = guild.name;
      cResult[4] = fn;
      tmp8 = fn;
    }
  }
  return tmp4;
}) : (function GuildDirectoryFooter(hideFooter) {
  ({ guild: require, channel } = hideFooter);
  const tmp = closure_22();
  let tmp4 = null;
  if (obj.useCanCreateOrAddGuildInDirectory(channel)) {
    tmp4 = null;
    if (!hideFooter.hideFooter) {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t.H9jxS1);
      obj2.onPress = function onPress() {
        return GuildDirectoryAddModalActionCreatorsDefault.open({ directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id });
      };
      const obj3 = { style: tmp.footer, children: null };
      const obj4 = { style: tmp.addIcon, children: closure_18(PlusMediumIcon.PlusMediumIcon, {}) };
      const items = [closure_18(closure_5, obj4), ];
      const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.H9jxS1);
      items[1] = closure_18(Text_Text.Text, obj5);
      obj3.children = items;
      obj2.children = closure_19(closure_5, obj3);
      tmp4 = closure_18(Pressables.PressableOpacity, obj2);
    }
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectory.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectory(channel) {
  const cResult = channel(576).c(75);
  channel = channel.channel;
  const guildId = channel.guildId;
  closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [directoryIsFetching];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function f() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, tmp7);
  dependencyMap = noop.useRef(null);
  const bottom = guildId(1631)().bottom;
  const tmpResult = channel(504);
  noop = closure_23(stateFromStores);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [categoryCounts];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== channel.id) {
    class R {
      constructor() {
        obj = closure_9;
        tmp = channel;
        currentCategoryId = closure_9.getCurrentCategoryId(channel.id);
        tmp3 = null;
        if (currentCategoryId !== DirectoryEntryCategories.ALL) {
          tmp3 = currentCategoryId;
        }
        directoryEntries = closure_9.getDirectoryEntries(channel.id, tmp3);
        directoryAllEntriesCount = obj.getDirectoryAllEntriesCount(tmp.id);
        obj1 = { currentCategoryId, directoryEntries, directoryIsFetching: null, allEntriesCount: null, categoryCounts: null };
        directoryCategoryCounts = obj.getDirectoryCategoryCounts(tmp.id);
        isFetchingResult = obj.isFetching();
        if (!isFetchingResult) {
          tmp8 = null === currentCategoryId && null == directoryEntries;
          isFetchingResult = tmp8;
        }
        obj1.directoryIsFetching = isFetchingResult;
        obj1.allEntriesCount = directoryAllEntriesCount;
        obj1.categoryCounts = directoryCategoryCounts;
        return obj1;
      }
    }
    cResult[4] = channel.id;
    cResult[5] = R;
  } else {
    class R {
      constructor() {
        obj = closure_9;
        tmp = channel;
        currentCategoryId = closure_9.getCurrentCategoryId(channel.id);
        tmp3 = null;
        if (currentCategoryId !== DirectoryEntryCategories.ALL) {
          tmp3 = currentCategoryId;
        }
        directoryEntries = closure_9.getDirectoryEntries(channel.id, tmp3);
        directoryAllEntriesCount = obj.getDirectoryAllEntriesCount(tmp.id);
        obj1 = { currentCategoryId, directoryEntries, directoryIsFetching: null, allEntriesCount: null, categoryCounts: null };
        directoryCategoryCounts = obj.getDirectoryCategoryCounts(tmp.id);
        isFetchingResult = obj.isFetching();
        if (!isFetchingResult) {
          tmp8 = null === currentCategoryId && null == directoryEntries;
          isFetchingResult = tmp8;
        }
        obj1.directoryIsFetching = isFetchingResult;
        obj1.allEntriesCount = directoryAllEntriesCount;
        obj1.categoryCounts = directoryCategoryCounts;
        return obj1;
      }
    }
  }
  const tmp9 = closure_23(stateFromStores);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp10, R);
  let currentCategoryId = stateFromStoresObject.currentCategoryId;
  let directoryEntries = stateFromStoresObject.directoryEntries;
  directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  const allEntriesCount = stateFromStoresObject.allEntriesCount;
  categoryCounts = stateFromStoresObject.categoryCounts;
  if (cResult[6] === directoryEntries) {
    class R {
      constructor() {
        obj = closure_9;
        tmp = channel;
        currentCategoryId = closure_9.getCurrentCategoryId(channel.id);
        tmp3 = null;
        if (currentCategoryId !== DirectoryEntryCategories.ALL) {
          tmp3 = currentCategoryId;
        }
        directoryEntries = closure_9.getDirectoryEntries(channel.id, tmp3);
        directoryAllEntriesCount = obj.getDirectoryAllEntriesCount(tmp.id);
        obj1 = { currentCategoryId, directoryEntries, directoryIsFetching: null, allEntriesCount: null, categoryCounts: null };
        directoryCategoryCounts = obj.getDirectoryCategoryCounts(tmp.id);
        isFetchingResult = obj.isFetching();
        if (!isFetchingResult) {
          tmp8 = null === currentCategoryId && null == directoryEntries;
          isFetchingResult = tmp8;
        }
        obj1.directoryIsFetching = isFetchingResult;
        obj1.allEntriesCount = directoryAllEntriesCount;
        obj1.categoryCounts = directoryCategoryCounts;
        return obj1;
      }
    }
    const effect = obj3.useEffect(fn2, items5);
    if (cResult[10] !== channel.id) {
      class W {
        constructor() {
          return () => {
            const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[33]);
              const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: onCategorySelected.ACK_AUTOMATIC };
              obj.ack(id.id, obj2, true, true, lastMessageIdResult);
            }
          };
        }
      }
      const items2 = [channel.id];
      cResult[10] = channel.id;
      cResult[11] = W;
      cResult[12] = items2;
      let tmp16 = items2;
    } else {
      class W {
        constructor() {
          return () => {
            const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[33]);
              const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: onCategorySelected.ACK_AUTOMATIC };
              obj.ack(id.id, obj2, true, true, lastMessageIdResult);
            }
          };
        }
      }
      tmp16 = cResult[12];
    }
    const effect1 = obj3.useEffect(W, tmp16);
    if (directoryIsFetching) {
      class W {
        constructor() {
          return () => {
            const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[33]);
              const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: onCategorySelected.ACK_AUTOMATIC };
              obj.ack(id.id, obj2, true, true, lastMessageIdResult);
            }
          };
        }
      }
    } else {
      class W {
        constructor() {
          return () => {
            const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[33]);
              const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: onCategorySelected.ACK_AUTOMATIC };
              obj.ack(id.id, obj2, true, true, lastMessageIdResult);
            }
          };
        }
      }
      if (null != directoryEntries) {
        class W {
          constructor() {
            return () => {
              const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
              if (null != lastMessageIdResult) {
                const obj = channel(closure_3[33]);
                const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: onCategorySelected.ACK_AUTOMATIC };
                obj.ack(id.id, obj2, true, true, lastMessageIdResult);
              }
            };
          }
        }
        const _Object = Object;
        const directoryRows = obj5.generateDirectoryRows(directoryIsFetching, Object.values(directoryEntries), currentCategoryId);
      } else {
        class W {
          constructor() {
            return () => {
              const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
              if (null != lastMessageIdResult) {
                const obj = channel(closure_3[33]);
                const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: onCategorySelected.ACK_AUTOMATIC };
                obj.ack(id.id, obj2, true, true, lastMessageIdResult);
              }
            };
          }
        }
      }
      cResult[13] = currentCategoryId;
      cResult[14] = directoryEntries;
      cResult[15] = directoryIsFetching;
      cResult[16] = directoryRows;
    }
    obj3.useRef(null);
    obj3.useRef(0);
    const _location = tmp(4950).useLocation();
    const tmpResult5 = tmp(4950);
    const history = tmp(4950).useHistory();
    if (cResult[17] === history) {
      class W {
        constructor() {
          return () => {
            const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[33]);
              const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: onCategorySelected.ACK_AUTOMATIC };
              obj.ack(id.id, obj2, true, true, lastMessageIdResult);
            }
          };
        }
      }
      const effect2 = obj3.useEffect(J, tmp24);
      if (cResult[21] !== channel.id) {
        class X {
          constructor() {
            obj = closure_2(closure_3[35]);
            directoryEntries = obj.fetchDirectoryEntries(channel.id);
            obj2 = closure_2(closure_3[35]);
            directoryCounts = obj2.fetchDirectoryCounts(channel.id);
            return;
          }
        }
        const items3 = [channel.id];
        cResult[21] = channel.id;
        cResult[22] = X;
        cResult[23] = items3;
        let tmp27 = items3;
      } else {
        class X {
          constructor() {
            obj = closure_2(closure_3[35]);
            directoryEntries = obj.fetchDirectoryEntries(channel.id);
            obj2 = closure_2(closure_3[35]);
            directoryCounts = obj2.fetchDirectoryCounts(channel.id);
            return;
          }
        }
        tmp27 = cResult[23];
      }
      const effect3 = obj3.useEffect(X, tmp27);
      if (cResult[24] === channel.id) {
        class X {
          constructor() {
            obj = closure_2(closure_3[35]);
            directoryEntries = obj.fetchDirectoryEntries(channel.id);
            obj2 = closure_2(closure_3[35]);
            directoryCounts = obj2.fetchDirectoryCounts(channel.id);
            return;
          }
        }
      }
      cResult[24] = channel.id;
      cResult[25] = currentCategoryId;
      if (stateFromStores != null) {
        class X {
          constructor() {
            obj = closure_2(closure_3[35]);
            directoryEntries = obj.fetchDirectoryEntries(channel.id);
            obj2 = closure_2(closure_3[35]);
            directoryCounts = obj2.fetchDirectoryCounts(channel.id);
            return;
          }
        }
      }
      function ee() {
        const obj2 = { directory_channel_id: channel.id, directory_guild_id: null, primary_category_id: null };
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        obj2.directory_guild_id = id;
        obj2.primary_category_id = currentCategoryId;
        AnalyticsUtilsDefault.track(constants.GUILD_DIRECTORY_CHANNEL_VIEWED, obj2);
      }
      cResult[26] = undefined;
      cResult[27] = ee;
      class J {
        constructor() {
          state = closure_12.state;
          scrollBehavior = undefined;
          if (state != null) {
            scrollBehavior = state.scrollBehavior;
          }
          if (scrollBehavior === closure_13.GUILD_LIST_TOP) {
            tmp2 = closure_10;
            current = closure_10.current;
            if (current != null) {
              scrollToLocationResult = current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
            }
            tmp4 = closure_13;
            obj = { state: null };
            obj.state = {};
            replaced = closure_13.replace(obj);
          }
          return;
        }
      }
    }
    class J {
      constructor() {
        state = closure_12.state;
        scrollBehavior = undefined;
        if (state != null) {
          scrollBehavior = state.scrollBehavior;
        }
        if (scrollBehavior === closure_13.GUILD_LIST_TOP) {
          tmp2 = closure_10;
          current = closure_10.current;
          if (current != null) {
            scrollToLocationResult = current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
          }
          tmp4 = closure_13;
          obj = { state: null };
          obj.state = {};
          replaced = closure_13.replace(obj);
        }
        return;
      }
    }
    const items4 = [_location, history];
    cResult[17] = history;
    cResult[18] = _location;
    cResult[19] = J;
    cResult[20] = items4;
    tmp24 = items4;
    const tmpResult6 = tmp(4950);
  }
  fn2 = function k() {
    TTIAnalyticsUtils.trackAppUIViewed();
    let obj3 = directoryEntries;
    if (directoryEntries == null) {
      obj3 = {};
    }
    TTITrackerDefault.recordRender(Object.keys(obj3).length, !directoryIsFetching);
  };
  items5 = [directoryEntries, directoryIsFetching];
  cResult[6] = directoryEntries;
  cResult[7] = directoryIsFetching;
  cResult[8] = fn2;
  cResult[9] = items5;
  const tmpResult4 = channel(504);
}) : (function GuildDirectory(channel) {
  channel = channel.channel;
  const guildId = channel.guildId;
  noop = undefined;
  let directoryIsFetching;
  let categoryCounts;
  function handleTapCategory() {
    if (ref2.current >= closure_4) {
      closure_3.current = true;
    }
  }
  let tmp = closure_22();
  const items = [directoryIsFetching];
  let handleTapSearch = channel(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = noop.useRef(null);
  let bottom = guildId(1631)().bottom;
  noop = closure_23(handleTapSearch);
  let obj = channel(504);
  let obj2 = noop;
  const tmp2 = channel;
  const tmp4 = guildId;
  const items1 = [categoryCounts];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items1, () => {
    currentCategoryId = GuildDirectoryStore.getCurrentCategoryId(channel.id);
    let tmp3 = null;
    if (currentCategoryId !== DirectoryEntryCategories.ALL) {
      tmp3 = currentCategoryId;
    }
    directoryEntries = GuildDirectoryStore.getDirectoryEntries(channel.id, tmp3);
    const directoryAllEntriesCount = GuildDirectoryStore.getDirectoryAllEntriesCount(channel.id);
    const obj2 = { currentCategoryId, directoryEntries, directoryIsFetching: null, allEntriesCount: null, categoryCounts: null };
    const directoryCategoryCounts = GuildDirectoryStore.getDirectoryCategoryCounts(channel.id);
    let isFetchingResult = GuildDirectoryStore.isFetching();
    if (!isFetchingResult) {
      isFetchingResult = null === currentCategoryId && null == directoryEntries;
      const tmp8 = null === currentCategoryId && null == directoryEntries;
    }
    obj2.directoryIsFetching = isFetchingResult;
    obj2.allEntriesCount = directoryAllEntriesCount;
    obj2.categoryCounts = directoryCategoryCounts;
    return obj2;
  });
  let currentCategoryId = stateFromStoresObject.currentCategoryId;
  let directoryEntries = stateFromStoresObject.directoryEntries;
  directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  const allEntriesCount = stateFromStoresObject.allEntriesCount;
  categoryCounts = stateFromStoresObject.categoryCounts;
  const items2 = [directoryEntries, directoryIsFetching];
  const effect = noop.useEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    let obj3 = directoryEntries;
    if (directoryEntries == null) {
      obj3 = {};
    }
    TTITrackerDefault.recordRender(Object.keys(obj3).length, !directoryIsFetching);
  }, items2);
  const items3 = [channel.id];
  const effect1 = noop.useEffect(() => () => {
    const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
    if (null != lastMessageIdResult) {
      const obj = channel(closure_3[33]);
      const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: handleTapCategory.ACK_AUTOMATIC };
      obj.ack(id.id, obj2, true, true, lastMessageIdResult);
    }
  }, items3);
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  let memo = noop.useMemo(() => {
    if (directoryIsFetching) {
      let directoryRows = closure_21;
    } else if (null != directoryEntries) {
      const _Object = Object;
      directoryRows = GuildDirectoryRowGenerator.generateDirectoryRows(tmp, Object.values(tmp2), currentCategoryId);
    } else {
      directoryRows = [];
    }
    return directoryRows;
  }, items4);
  let ref = noop.useRef(null);
  noop.useRef(0);
  let obj3 = channel(504);
  const _location = channel(4950).useLocation();
  const obj5 = channel(4950);
  const history = channel(4950).useHistory();
  const items5 = [_location, history];
  const effect2 = noop.useEffect(() => {
    const state = _location.state;
    let scrollBehavior;
    if (state != null) {
      scrollBehavior = state.scrollBehavior;
    }
    if (scrollBehavior === map1.GUILD_LIST_TOP) {
      const current = ref.current;
      if (current != null) {
        current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
      }
      const obj = { state: {} };
      const replaced = history.replace(obj);
    }
  }, items5);
  const items6 = [channel.id];
  const effect3 = noop.useEffect(() => {
    directoryEntries = GuildDirectoryActionCreatorsAll.fetchDirectoryEntries(channel.id);
    const directoryCounts = GuildDirectoryActionCreatorsAll.fetchDirectoryCounts(channel.id);
  }, items6);
  let id;
  if (handleTapSearch != null) {
    id = handleTapSearch.id;
  }
  const items7 = [id, channel.id, currentCategoryId];
  const effect4 = noop.useEffect(() => {
    const obj2 = { directory_channel_id: channel.id, directory_guild_id: null, primary_category_id: null };
    let id;
    if (handleTapSearch != null) {
      id = handleTapSearch.id;
    }
    obj2.directory_guild_id = id;
    obj2.primary_category_id = currentCategoryId;
    AnalyticsUtilsDefault.track(constants.GUILD_DIRECTORY_CHANNEL_VIEWED, obj2);
  }, items7);
  const items8 = [memo];
  const effect5 = obj2.useEffect(() => {
    if (ref.current) {
      const current = ref.current;
      if (current != null) {
        current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
      }
      tmp.current = null;
    }
  }, items8);
  if (null == handleTapSearch) {
    return null;
  } else {
    if (!directoryIsFetching) {
      if (0 === allEntriesCount) {
        const obj4 = { style: null, children: null };
        const obj7 = { paddingBottom: bottom };
        obj4.style = obj7;
        const obj8 = { style: tmp.border };
        const items9 = [closure_18(currentCategoryId, obj8), , ];
        const obj9 = { guild: handleTapSearch, channel };
        items9[1] = closure_18(tmp4(12523), obj9);
        items9[2] = closure_18(tmp2(11492).TTIFirstContentfulPaint, { label: "guild_directory_empty" });
        obj4.children = items9;
        let tmp19 = closure_19(currentCategoryId, obj4);
      }
    }
    const obj10 = { children: null };
    const obj11 = {
      ref,
      onScroll: function handleScroll(nativeEvent) {
          closure_11.current = nativeEvent.nativeEvent.contentOffset.y;
        },
      scrollEventThrottle: 16,
      contentContainerStyle: null,
      windowSize: 10,
      ListHeaderComponent: null,
      sections: null,
      stickySectionHeadersEnabled: true,
      style: null,
      scrollIndicatorInsets: null,
      keyExtractor: null,
      renderItem: null,
      renderSectionHeader: null,
      ListFooterComponent: null
    };
    const obj12 = { paddingBottom: bottom };
    obj11.contentContainerStyle = obj12;
    bottom = closure_27;
    const obj13 = { guild: handleTapSearch, onPressSearch: null };
    handleTapSearch = function handleTapSearch() {
      GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
    };
    obj13.onPressSearch = handleTapSearch;
    obj11.ListHeaderComponent = closure_18(closure_27, obj13);
    ref = { data: memo };
    memo = [ref];
    obj11.sections = memo;
    obj11.style = tmp.list;
    obj11.scrollIndicatorInsets = { right: 1 };
    tmp = keyExtractor;
    obj11.keyExtractor = keyExtractor;
    obj11.renderItem = renderItem;
    obj11.renderSectionHeader = function renderSectionHeader() {
      return collapsedCategories(GuildDirectoryCategorySelectorDefault, { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount });
    };
    obj11.ListFooterComponent = function ListFooterComponent() {
      return collapsedCategories(closure_28, { guild: handleTapSearch, channel, hideFooter: false });
    };
    obj10.children = closure_18(directoryEntries, obj11);
    tmp19 = closure_18(currentCategoryId, obj10);
  }
  const obj6 = channel(4950);
});