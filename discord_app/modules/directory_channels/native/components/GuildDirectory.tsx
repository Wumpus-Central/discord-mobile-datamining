// === Module 12334: GuildDirectory ===

// Module 12334 (GuildDirectory)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Pressables from "Pressables" /* 5916 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6555 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6997 */;
import PlusMediumIcon from "PlusMediumIcon" /* 10991 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11520 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11942 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11950 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11958 */;
import GuildDirectoryRowDefault from "GuildDirectoryRow" /* 11977 */;
import GuildDirectoryPlaceholderRowDefault from "GuildDirectoryPlaceholderRow" /* 11978 */;
import HubProgressBarUtils from "HubProgressBarUtils" /* 12335 */;
import GuildDirectoryRowGenerator from "GuildDirectoryRowGenerator" /* 12336 */;
import _mod12337 from "module_12337" /* 12337 */;
import HubProgressHeaderDefault from "HubProgressHeader" /* 12338 */;
import GuildDirectoryCategorySelectorDefault from "GuildDirectoryCategorySelector" /* 12439 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11954 */;

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
    return closure_1_19(closure_27, obj2);
  } else if (GuildDirectoryRowGenerator.RowType.ENTRY === type) {
    const obj = { entry: item.entry };
    return closure_1_19(GuildDirectoryRowDefault, obj);
  } else {
    return closure_1_19(GuildDirectoryPlaceholderRowDefault, {});
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, SectionList: closure_7, StyleSheet } = get_ActivityIndicator);
const DirectoryEntryCategories = fn(11947).DirectoryEntryCategories;
const GuildDirectoryConstants = fn(11952);
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryConstants.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: map1, DirectoryChannelScrollBehavior: closure_14 } = GuildDirectoryConstants);
const Constants = fn(1085);
({ AnalyticsObjectTypes: closure_15, AnalyticsObjects: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let closure_22 = Array(20).fill(null);
const createStyles = fn(4896);
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
let closure_23 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const hubProgressBarCompletedSteps = HubProgressBarUtils.useHubProgressBarCompletedSteps(arg0);
  if (null == obj2.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  } else {
    sum = __initData2 + GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  }
  return sum;
}) : ((arg0) => {
  const hubProgressBarCompletedSteps = HubProgressBarUtils.useHubProgressBarCompletedSteps(arg0);
  if (null == obj2.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  } else {
    sum = __initData2 + GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  }
  return sum;
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(3);
  children = children.children;
  const tmp4 = closure_23();
  if (cResult[0] === children) {
    if (cResult[1] === tmp4.categorySectionText) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = closure_1_19(Text_Text.Text, { style: tmp4.categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children });
  cResult[0] = children;
  cResult[1] = tmp4.categorySectionText;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { style: tmp4.categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
}) : ((children) => {
  const tmp = closure_23();
  return closure_1_19(Text_Text.Text, { style: closure_23().categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: children.children });
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(33);
  ({ guild, onPressSearch } = arg0);
  const tmp4 = closure_23();
  if (cResult[0] !== guild.features) {
    const features = guild.features;
    const hasItem = features.has(constants3.HUB);
    cResult[0] = guild.features;
    cResult[1] = hasItem;
    let tmp5 = hasItem;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod12337;
    cResult[2] = tmpResult;
    let tmp8 = tmpResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4.backgroundImage) {
    const obj2 = { source: tmp8, style: tmp4.backgroundImage };
    const tmp13 = closure_1_19(timestampProducer, obj2);
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
    const tmp18 = closure_1_19(Text_Text.Text, obj3);
    cResult[6] = tmp4.headerTitle;
    cResult[7] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] !== tmp4.headerDescription) {
    const items = [tmp4.headerDescription];
    cResult[8] = tmp4.headerDescription;
    cResult[9] = items;
    let tmp19 = items;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["5PoYts"]);
    cResult[10] = stringResult1;
    let tmp20 = stringResult1;
  } else {
    tmp20 = cResult[10];
  }
  if (cResult[11] !== tmp19) {
    const obj4 = { style: tmp19, variant: "text-sm/medium", color: "text-overlay-light", children: tmp20 };
    const tmp24 = closure_1_19(Text_Text.Text, obj4);
    cResult[11] = tmp19;
    cResult[12] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp28 = closure_1_19(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" });
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t.nL2wKD);
    cResult[13] = tmp28;
    cResult[14] = stringResult2;
    let tmp26 = stringResult2;
    let tmp25 = tmp28;
  } else {
    tmp25 = cResult[13];
    tmp26 = cResult[14];
  }
  if (cResult[15] !== onPressSearch) {
    const obj5 = { variant: "primary-overlay", icon: tmp25, text: tmp26, onPress: onPressSearch };
    const tmp32 = closure_1_19(components_Button_Button.Button, obj5);
    cResult[15] = onPressSearch;
    cResult[16] = tmp32;
    let tmp30 = tmp32;
  } else {
    tmp30 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp35 = closure_1_19(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
    cResult[17] = tmp35;
    let tmp33 = tmp35;
  } else {
    tmp33 = cResult[17];
  }
  if (cResult[18] === tmp4.textWrapper) {
    if (cResult[19] === tmp22) {
      if (cResult[20] === tmp30) {
        if (cResult[21] === tmp16) {
          let tmp36 = cResult[22];
        }
        if (cResult[23] === tmp4.headerWrapper) {
          if (cResult[24] === tmp36) {
            if (cResult[25] === tmp10) {
              let tmp38 = cResult[26];
            }
            if (cResult[27] === guild) {
              if (cResult[28] === tmp5) {
                let tmp42 = cResult[29];
              }
              if (cResult[30] === tmp38) {
                if (cResult[31] === tmp42) {
                  let tmp46 = cResult[32];
                }
                return tmp46;
              }
              const obj6 = { children: null };
              const items1 = [tmp38, tmp42];
              obj6.children = items1;
              const tmp49 = closure_1_20(closure_1_21, obj6);
              cResult[30] = tmp38;
              cResult[31] = tmp42;
              cResult[32] = tmp49;
              tmp46 = tmp49;
            }
            let tmp43 = null;
            if (tmp5) {
              const obj7 = { guild, onDirectoryPage: true };
              tmp43 = closure_1_19(HubProgressHeaderDefault, obj7);
            }
            cResult[27] = guild;
            cResult[28] = tmp5;
            cResult[29] = tmp43;
            tmp42 = tmp43;
          }
        }
        const obj8 = { style: tmp4.headerWrapper, children: null };
        const items2 = [tmp10, tmp36];
        obj8.children = items2;
        const tmp41 = closure_1_20(hasOwnProperty, obj8);
        cResult[23] = tmp4.headerWrapper;
        cResult[24] = tmp36;
        cResult[25] = tmp10;
        cResult[26] = tmp41;
        tmp38 = tmp41;
      }
    }
  }
  const obj9 = { style: textWrapper, children: null };
  const items3 = [tmp16, tmp22, tmp30, tmp33];
  obj9.children = items3;
  const tmp37 = closure_1_20(hasOwnProperty, obj9);
  cResult[18] = tmp4.textWrapper;
  cResult[19] = tmp22;
  cResult[20] = tmp30;
  cResult[21] = tmp16;
  cResult[22] = tmp37;
  tmp36 = tmp37;
}) : ((guild) => {
  guild = guild.guild;
  const tmp = closure_23();
  const features = guild.features;
  const obj = { style: tmp.headerWrapper, children: null };
  const obj2 = { source: null, style: null };
  const hasItem = features.has(constants3.HUB);
  obj2.source = _mod12337;
  obj2.style = tmp.backgroundImage;
  const items = [closure_1_19(timestampProducer, obj2), ];
  const obj3 = { style: tmp.textWrapper, children: null };
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.IT7qoC);
  const items1 = [closure_1_19(Text_Text.Text, obj4), , , ];
  const obj5 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const items2 = [tmp.headerDescription];
  obj5.style = items2;
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["5PoYts"]);
  items1[1] = closure_1_19(Text_Text.Text, obj5);
  const obj6 = { variant: "primary-overlay", icon: closure_1_19(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }), text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.nL2wKD);
  obj6.onPress = guild.onPressSearch;
  items1[2] = closure_1_19(components_Button_Button.Button, obj6);
  items1[3] = closure_1_19(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
  obj3.children = items1;
  items[1] = closure_1_20(hasOwnProperty, obj3);
  obj.children = items;
  const children = [closure_1_20(hasOwnProperty, obj), ];
  let tmp5Result = null;
  if (hasItem) {
    const obj7 = { guild, onDirectoryPage: true };
    tmp5Result = closure_1_19(HubProgressHeaderDefault, obj7);
  }
  children[1] = tmp5Result;
  return closure_1_20(closure_1_21, { children });
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let PressableOpacity = guild;
  let tmp = dependencyMap;
  const cResult = guild(576).c(15);
  guild = guild.guild;
  const channel = guild.channel;
  const tmp3 = closure_23();
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
            const tmp11 = closure_19(PressableOpacity(10991).PlusMediumIcon, {});
            cResult[5] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] !== tmp3.addIcon) {
            const obj3 = { style: tmp3.addIcon, children: tmp9 };
            const tmp15 = closure_19(closure_5, obj3);
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
            const tmp18 = closure_19(PressableOpacity(4892).Text, obj4);
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
            PressableOpacity = PressableOpacity(5916).PressableOpacity;
            const obj5 = { accessibilityRole: "button", accessibilityLabel: first, onPress: tmp8, children: tmp19 };
            tmp = closure_19(PressableOpacity, obj5);
            cResult[12] = tmp8;
            cResult[13] = tmp19;
            cResult[14] = tmp;
          }
          const obj6 = { style: tmp3.footer, children: null };
          const items = [tmp12, tmp16];
          obj6.children = items;
          const tmp22 = closure_20(closure_5, obj6);
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
}) : ((hideFooter) => {
  ({ guild: require, channel } = hideFooter);
  const tmp = closure_23();
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
      const obj4 = { style: tmp.addIcon, children: closure_19(PlusMediumIcon.PlusMediumIcon, {}) };
      const items = [closure_19(closure_5, obj4), ];
      const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.H9jxS1);
      items[1] = closure_19(Text_Text.Text, obj5);
      obj3.children = items;
      obj2.children = closure_20(closure_5, obj3);
      tmp4 = closure_19(Pressables.PressableOpacity, obj2);
    }
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectory.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(75);
  channel = channel.channel;
  const guildId = channel.guildId;
  closure_23();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [allEntriesCount];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
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
  const bottom = guildId(1618)().bottom;
  const tmpResult = channel(504);
  noop = closure_24(stateFromStores);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ref];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== channel.id) {
    class T {
      constructor() {
        obj = closure_10;
        tmp = channel;
        currentCategoryId = closure_10.getCurrentCategoryId(channel.id);
        tmp3 = null;
        if (currentCategoryId !== DirectoryEntryCategories.ALL) {
          tmp3 = currentCategoryId;
        }
        directoryEntries = closure_10.getDirectoryEntries(channel.id, tmp3);
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
    cResult[5] = T;
  } else {
    class T {
      constructor() {
        obj = closure_10;
        tmp = channel;
        currentCategoryId = closure_10.getCurrentCategoryId(channel.id);
        tmp3 = null;
        if (currentCategoryId !== DirectoryEntryCategories.ALL) {
          tmp3 = currentCategoryId;
        }
        directoryEntries = closure_10.getDirectoryEntries(channel.id, tmp3);
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
  const tmp9 = closure_24(stateFromStores);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp10, T);
  let currentCategoryId = stateFromStoresObject.currentCategoryId;
  let directoryEntries = stateFromStoresObject.directoryEntries;
  const directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  allEntriesCount = stateFromStoresObject.allEntriesCount;
  const categoryCounts = stateFromStoresObject.categoryCounts;
  if (cResult[6] === directoryEntries) {
    class T {
      constructor() {
        obj = closure_10;
        tmp = channel;
        currentCategoryId = closure_10.getCurrentCategoryId(channel.id);
        tmp3 = null;
        if (currentCategoryId !== DirectoryEntryCategories.ALL) {
          tmp3 = currentCategoryId;
        }
        directoryEntries = closure_10.getDirectoryEntries(channel.id, tmp3);
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
    const effect = obj3.useEffect(F, items5);
    if (cResult[10] !== channel.id) {
      class W {
        constructor() {
          return () => {
            const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[32]);
              const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
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
            const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[32]);
              const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
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
            const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[32]);
              const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
              obj.ack(id.id, obj2, true, true, lastMessageIdResult);
            }
          };
        }
      }
    } else {
      class W {
        constructor() {
          return () => {
            const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[32]);
              const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
              obj.ack(id.id, obj2, true, true, lastMessageIdResult);
            }
          };
        }
      }
      if (null != directoryEntries) {
        class W {
          constructor() {
            return () => {
              const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
              if (null != lastMessageIdResult) {
                const obj = channel(closure_3[32]);
                const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
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
              const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
              if (null != lastMessageIdResult) {
                const obj = channel(closure_3[32]);
                const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
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
    ref = obj3.useRef(null);
    obj3.useRef(0);
    const _location = tmp(4716).useLocation();
    const tmpResult5 = tmp(4716);
    const history = tmp(4716).useHistory();
    if (cResult[17] === history) {
      class W {
        constructor() {
          return () => {
            const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
            if (null != lastMessageIdResult) {
              const obj = channel(closure_3[32]);
              const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
              obj.ack(id.id, obj2, true, true, lastMessageIdResult);
            }
          };
        }
      }
      const effect2 = obj3.useEffect(J, tmp24);
      if (cResult[21] !== channel.id) {
        class X {
          constructor() {
            obj = closure_2(closure_3[34]);
            directoryEntries = obj.fetchDirectoryEntries(channel.id);
            obj2 = closure_2(closure_3[34]);
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
            obj = closure_2(closure_3[34]);
            directoryEntries = obj.fetchDirectoryEntries(channel.id);
            obj2 = closure_2(closure_3[34]);
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
            obj = closure_2(closure_3[34]);
            directoryEntries = obj.fetchDirectoryEntries(channel.id);
            obj2 = closure_2(closure_3[34]);
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
            obj = closure_2(closure_3[34]);
            directoryEntries = obj.fetchDirectoryEntries(channel.id);
            obj2 = closure_2(closure_3[34]);
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
        AnalyticsUtilsDefault.track(constants2.GUILD_DIRECTORY_CHANNEL_VIEWED, obj2);
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
          if (scrollBehavior === closure_14.GUILD_LIST_TOP) {
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
        if (scrollBehavior === closure_14.GUILD_LIST_TOP) {
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
    const tmpResult6 = tmp(4716);
  }
  class F {
    constructor() {
      obj = closure_0(closure_3[30]);
      trackAppUIViewedResult = obj.trackAppUIViewed();
      obj2 = closure_1(closure_3[31]);
      obj1 = directoryEntries;
      if (directoryEntries == null) {
        obj1 = {};
      }
      recordRenderResult = obj2.recordRender(Object.keys(obj1).length, !directoryIsFetching);
      return;
    }
  }
  items5 = [directoryEntries, directoryIsFetching];
  cResult[6] = directoryEntries;
  cResult[7] = directoryIsFetching;
  cResult[8] = F;
  cResult[9] = items5;
  const tmpResult4 = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  const guildId = channel.guildId;
  noop = undefined;
  let allEntriesCount;
  let ref;
  function handleTapCategory() {
    if (ref2.current >= closure_4) {
      closure_3.current = true;
    }
  }
  let tmp = closure_23();
  const items = [allEntriesCount];
  let onPressSearch = channel(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = noop.useRef(null);
  let bottom = guildId(1618)().bottom;
  noop = closure_24(onPressSearch);
  let obj = channel(504);
  let obj2 = noop;
  const tmp2 = channel;
  const tmp4 = guildId;
  const items1 = [ref];
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
  const directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  allEntriesCount = stateFromStoresObject.allEntriesCount;
  const categoryCounts = stateFromStoresObject.categoryCounts;
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
    const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
    if (null != lastMessageIdResult) {
      const obj = channel(closure_3[32]);
      const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
      obj.ack(id.id, obj2, true, true, lastMessageIdResult);
    }
  }, items3);
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  let memo = noop.useMemo(() => {
    if (directoryIsFetching) {
      let directoryRows = closure_22;
    } else if (null != directoryEntries) {
      const _Object = Object;
      directoryRows = GuildDirectoryRowGenerator.generateDirectoryRows(tmp, Object.values(tmp2), currentCategoryId);
    } else {
      directoryRows = [];
    }
    return directoryRows;
  }, items4);
  ref = noop.useRef(null);
  noop.useRef(0);
  let obj3 = channel(504);
  const _location = channel(4716).useLocation();
  const obj5 = channel(4716);
  const history = channel(4716).useHistory();
  const items5 = [_location, history];
  const effect2 = noop.useEffect(() => {
    state = _location.state;
    let scrollBehavior;
    if (state != null) {
      scrollBehavior = state.scrollBehavior;
    }
    if (scrollBehavior === constants.GUILD_LIST_TOP) {
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
  if (onPressSearch != null) {
    id = onPressSearch.id;
  }
  const items7 = [id, channel.id, currentCategoryId];
  const effect4 = noop.useEffect(() => {
    const obj2 = { directory_channel_id: channel.id, directory_guild_id: null, primary_category_id: null };
    let id;
    if (onPressSearch != null) {
      id = onPressSearch.id;
    }
    obj2.directory_guild_id = id;
    obj2.primary_category_id = currentCategoryId;
    AnalyticsUtilsDefault.track(constants2.GUILD_DIRECTORY_CHANNEL_VIEWED, obj2);
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
  if (null == onPressSearch) {
    return null;
  } else {
    if (!directoryIsFetching) {
      if (0 === allEntriesCount) {
        const obj4 = { style: null, children: null };
        const obj7 = { paddingBottom: bottom };
        obj4.style = obj7;
        const obj8 = { style: tmp.border };
        const items9 = [closure_19(currentCategoryId, obj8), , ];
        const obj9 = { guild: onPressSearch, channel };
        items9[1] = closure_19(tmp4(12441), obj9);
        items9[2] = closure_19(tmp2(11520).TTIFirstContentfulPaint, { label: "guild_directory_empty" });
        obj4.children = items9;
        let tmp19 = closure_20(currentCategoryId, obj4);
      }
    }
    const obj10 = { children: null };
    const obj11 = {
      ref,
      onScroll(nativeEvent) {
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
    bottom = closure_28;
    const obj13 = { guild: onPressSearch, onPressSearch: null };
    onPressSearch = function onPressSearch() {
      GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
    };
    obj13.onPressSearch = onPressSearch;
    obj11.ListHeaderComponent = closure_19(closure_28, obj13);
    ref = { data: memo };
    memo = [ref];
    obj11.sections = memo;
    obj11.style = tmp.list;
    obj11.scrollIndicatorInsets = { right: 1 };
    tmp = keyExtractor;
    obj11.keyExtractor = keyExtractor;
    obj11.renderItem = renderItem;
    obj11.renderSectionHeader = function renderSectionHeader() {
      return closure_2_19(GuildDirectoryCategorySelectorDefault, { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount });
    };
    obj11.ListFooterComponent = function ListFooterComponent() {
      return closure_2_19(closure_29, { guild: onPressSearch, channel, hideFooter: false });
    };
    obj10.children = closure_19(directoryIsFetching, obj11);
    tmp19 = closure_19(currentCategoryId, obj10);
  }
  const obj6 = channel(4716);
});