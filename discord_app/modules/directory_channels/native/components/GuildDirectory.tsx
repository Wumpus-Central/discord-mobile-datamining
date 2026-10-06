// discord_app/modules/directory_channels/native/components/GuildDirectory.tsx
import TTITrackerDefault from "../../../tti_analytics/TTITracker.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import MagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import TTIAnalyticsUtils from "../../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import PlusMediumIcon from "../../../../design/components/Icon/native/redesign/generated/PlusMediumIcon.tsx";
import TTIFirstContentfulPaint from "../../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators.tsx";
import GuildDirectoryConstants2 from "../../GuildDirectoryConstants.tsx";
import useCanManageGuildDirectoryEntry from "../../useCanManageGuildDirectoryEntry.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import GuildDirectoryActionCreatorsAll from "../../GuildDirectoryActionCreators.tsx";
import GuildDirectoryRowDefault from "GuildDirectoryRow.tsx";
import GuildDirectoryPlaceholderRowDefault from "GuildDirectoryPlaceholderRow.tsx";
import HubProgressBarUtils from "../../../hub/HubProgressBarUtils.tsx";
import GuildDirectoryRowGenerator from "../GuildDirectoryRowGenerator.tsx";
import AssetRegistry from "../../../../../_runtime/12337_AssetRegistry.js";
import HubProgressHeaderDefault from "../../../hub/native/components/progress_bar/HubProgressHeader.tsx";
import GuildDirectoryCategorySelectorDefault from "GuildDirectoryCategorySelector.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import GuildDirectoryStore from "../../GuildDirectoryStore.tsx";
import GuildDirectoryConstants from "../GuildDirectoryConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
function keyExtractor(type, arg1) {
  let guildId;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  if (type === GuildDirectoryRowGenerator.RowType.ENTRY) {
    guildId = type.entry.guildId;
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
    return closure_19(closure_27, obj2);
  } else if (GuildDirectoryRowGenerator.RowType.ENTRY === type) {
    const obj = { entry: item.entry };
    return closure_19(GuildDirectoryRowDefault, obj);
  } else {
    return closure_19(GuildDirectoryPlaceholderRowDefault, {});
  }
}
let react = react_mod;
({ View: hasOwnProperty, Image: metroRequire, SectionList: metroImportDefault, StyleSheet } = react_native);
const DirectoryEntryCategories = GuildDirectoryConstants2.DirectoryEntryCategories;
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryConstants.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: map1, DirectoryChannelScrollBehavior: closure_14 } = GuildDirectoryConstants);
({
  AnalyticsObjectTypes: closure_15,
  AnalyticsObjects: closure_16,
  AnalyticEvents: closure_17,
  GuildFeatures: closure_18,
} = Constants);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = Fragment);
const ArrayResult = Array(20);
let closure_22 = ArrayResult.fill(null);
let createStyles = createStyles_mod;
let obj = {
  border: obj2,
  list: obj3,
  headerWrapper: { overflow: "hidden", height: GUILD_DIRECTORY_BASE_HEADER_HEIGHT },
  backgroundImage: { resizeMode: "cover", width: "100%" },
  textWrapper: { position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, alignContent: "center" },
  headerTitle: { textAlign: "center", marginBottom: 8 },
  headerDescription: { lineHeight: 18, textAlign: "center", paddingHorizontal: 20, marginBottom: 72 },
  footer: { flexDirection: "row", padding: 16, alignItems: "center" },
  addIcon: size,
  categorySectionText: { padding: 16, paddingBottom: 4 },
};
obj2 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = {
  marginRight: 16,
  height: 40,
  width: 40,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let closure_23 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let sum;
      const obj = HubProgressBarUtils;
      const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(arg0);
      const obj2 = HubProgressBarUtils;
      if (null == obj2.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
        sum = GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
      } else {
        sum = map1 + GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
      }
      return sum;
    }
  : (arg0) => {
      let sum;
      const obj = HubProgressBarUtils;
      const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(arg0);
      const obj2 = HubProgressBarUtils;
      if (null == obj2.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
        sum = GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
      } else {
        sum = map1 + GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
      }
      return sum;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(3);
      children = children.children;
      const tmp4 = closure_23();
      if (cResult[0] === children) {
        let tmp5;
        if (cResult[1] === tmp4.categorySectionText) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const obj2 = {
        style: tmp4.categorySectionText,
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children,
      };
      const tmp6 = closure_19(Text_Text.Text, obj2);
      cResult[0] = children;
      cResult[1] = tmp4.categorySectionText;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (children) => {
      children = children.children;
      const obj = {
        style: closure_23().categorySectionText,
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children,
      };
      return closure_19(Text_Text.Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guild;
      let headerTitle;
      let items1;
      let items2;
      let items3;
      let onPressSearch;
      let textWrapper;
      let tmp10;
      let tmp14;
      let tmp16;
      let tmp19;
      let tmp20;
      let tmp22;
      let tmp25;
      let tmp26;
      let tmp30;
      let tmp33;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(33);
      ({ guild, onPressSearch } = arg0);
      const tmp4 = closure_23();
      if (cResult[0] !== guild.features) {
        const features = guild.features;
        const hasItem = features.has(constants3.HUB);
        cResult[0] = guild.features;
        cResult[1] = hasItem;
        tmp5 = hasItem;
      } else {
        tmp5 = cResult[1];
      }
      const headerWrapper = tmp4.headerWrapper;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = AssetRegistry;
        cResult[2] = tmpResult;
        tmp8 = tmpResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp4.backgroundImage) {
        const obj2 = { source: tmp8, style: tmp4.backgroundImage };
        const tmp13 = closure_19(metroRequire, obj2);
        cResult[3] = tmp4.backgroundImage;
        cResult[4] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[4];
      }
      ({ textWrapper, headerTitle } = tmp4);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.IT7qoC);
        cResult[5] = stringResult;
        tmp14 = stringResult;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] !== tmp4.headerTitle) {
        const obj3 = {
          style: headerTitle,
          variant: "heading-xl/extrabold",
          color: "text-overlay-light",
          children: tmp14,
        };
        const tmp18 = closure_19(Text_Text.Text, obj3);
        cResult[6] = tmp4.headerTitle;
        cResult[7] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] !== tmp4.headerDescription) {
        const items = [tmp4.headerDescription];
        cResult[8] = tmp4.headerDescription;
        cResult[9] = items;
        tmp19 = items;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t["5PoYts"]);
        cResult[10] = stringResult1;
        tmp20 = stringResult1;
      } else {
        tmp20 = cResult[10];
      }
      if (cResult[11] !== tmp19) {
        const obj4 = { style: tmp19, variant: "text-sm/medium", color: "text-overlay-light", children: tmp20 };
        const tmp24 = closure_19(Text_Text.Text, obj4);
        cResult[11] = tmp19;
        cResult[12] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[12];
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp28 = closure_19(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" });
        const intl3 = intl4.intl;
        const stringResult2 = intl3.string(intl4.t.nL2wKD);
        cResult[13] = tmp28;
        cResult[14] = stringResult2;
        tmp26 = stringResult2;
        tmp25 = tmp28;
      } else {
        tmp25 = cResult[13];
        tmp26 = cResult[14];
      }
      if (cResult[15] !== onPressSearch) {
        const obj5 = { variant: "primary-overlay", icon: tmp25, text: tmp26, onPress: onPressSearch };
        const tmp32 = closure_19(components_Button_Button.Button, obj5);
        cResult[15] = onPressSearch;
        cResult[16] = tmp32;
        tmp30 = tmp32;
      } else {
        tmp30 = cResult[16];
      }
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp35 = closure_19(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
        cResult[17] = tmp35;
        tmp33 = tmp35;
      } else {
        tmp33 = cResult[17];
      }
      if (cResult[18] === tmp4.textWrapper) {
        if (cResult[19] === tmp22) {
          if (cResult[20] === tmp30) {
            let tmp36;
            if (cResult[21] === tmp16) {
              tmp36 = cResult[22];
            }
            if (cResult[23] === tmp4.headerWrapper) {
              if (cResult[24] === tmp36) {
                let tmp38;
                if (cResult[25] === tmp10) {
                  tmp38 = cResult[26];
                }
                if (cResult[27] === guild) {
                  let tmp42;
                  if (cResult[28] === tmp5) {
                    tmp42 = cResult[29];
                  }
                  if (cResult[30] === tmp38) {
                    let tmp46;
                    if (cResult[31] === tmp42) {
                      tmp46 = cResult[32];
                    }
                    return tmp46;
                  }
                  const obj6 = { children: items1 };
                  items1 = [tmp38, tmp42];
                  const tmp49 = closure_20(closure_21, obj6);
                  cResult[30] = tmp38;
                  cResult[31] = tmp42;
                  cResult[32] = tmp49;
                  tmp46 = tmp49;
                }
                let tmp43 = null;
                if (tmp5) {
                  const obj7 = { guild, onDirectoryPage: true };
                  tmp43 = closure_19(HubProgressHeaderDefault, obj7);
                }
                cResult[27] = guild;
                cResult[28] = tmp5;
                cResult[29] = tmp43;
                tmp42 = tmp43;
              }
            }
            const obj8 = { style: headerWrapper, children: items2 };
            items2 = [tmp10, tmp36];
            const tmp41 = closure_20(hasOwnProperty, obj8);
            cResult[23] = tmp4.headerWrapper;
            cResult[24] = tmp36;
            cResult[25] = tmp10;
            cResult[26] = tmp41;
            tmp38 = tmp41;
          }
        }
      }
      const obj9 = { style: textWrapper, children: items3 };
      items3 = [tmp16, tmp22, tmp30, tmp33];
      const tmp37 = closure_20(hasOwnProperty, obj9);
      cResult[18] = tmp4.textWrapper;
      cResult[19] = tmp22;
      cResult[20] = tmp30;
      cResult[21] = tmp16;
      cResult[22] = tmp37;
      tmp36 = tmp37;
    }
  : (guild) => {
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let items2;
      guild = guild.guild;
      const onPressSearch = guild.onPressSearch;
      const tmp = closure_23();
      const features = guild.features;
      const obj = { style: tmp.headerWrapper, children: items };
      const obj2 = { source: AssetRegistry, style: tmp.backgroundImage };
      const hasItem = features.has(constants3.HUB);
      items = [closure_19(metroRequire, obj2)];
      const obj3 = { style: tmp.textWrapper, children: items1 };
      const obj4 = {
        style: tmp.headerTitle,
        variant: "heading-xl/extrabold",
        color: "text-overlay-light",
        children: intl.string(intl4.t.IT7qoC),
      };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items1 = [closure_19(Text, obj4), , ,];
      const obj5 = {
        style: items2,
        variant: "text-sm/medium",
        color: "text-overlay-light",
        children: intl2.string(intl4.t["5PoYts"]),
      };
      items2 = [tmp.headerDescription];
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items1[1] = closure_19(Text2, obj5);
      const obj6 = {
        variant: "primary-overlay",
        icon: closure_19(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }),
        text: intl3.string(intl4.t.nL2wKD),
        onPress: onPressSearch,
      };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items1[2] = closure_19(Button, obj6);
      items1[3] = closure_19(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
      items[1] = closure_20(hasOwnProperty, obj3);
      const children = [closure_20(hasOwnProperty, obj)];
      let tmp5Result = null;
      if (hasItem) {
        const obj7 = { guild, onDirectoryPage: true };
        tmp5Result = closure_19(HubProgressHeaderDefault, obj7);
      }
      children[1] = tmp5Result;
      return closure_20(closure_21, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let intl2;
      let items;
      let obj = guild(576);
      const cResult = obj.c(15);
      guild = guild.guild;
      const channel = guild.channel;
      const hideFooter = guild.hideFooter;
      const tmp4 = closure_23();
      let obj2 = guild(11949);
      let tmp5 = null;
      if (obj2.useCanCreateOrAddGuildInDirectory(channel)) {
        tmp5 = null;
        if (!hideFooter) {
          let first;
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(guild(1126).t.H9jxS1);
            cResult[0] = stringResult;
            first = stringResult;
          } else {
            first = cResult[0];
          }
          if (cResult[1] === channel.id) {
            if (cResult[2] === guild.id) {
              let tmp9;
              let tmp10;
              let tmp13;
              let tmp17;
              if (cResult[3] === guild.name) {
                tmp9 = cResult[4];
              }
              const _Symbol2 = Symbol;
              if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp12 = closure_19(guild(10991).PlusMediumIcon, {});
                cResult[5] = tmp12;
                tmp10 = tmp12;
              } else {
                tmp10 = cResult[5];
              }
              if (cResult[6] !== tmp4.addIcon) {
                const obj3 = { style: tmp4.addIcon, children: tmp10 };
                const tmp16 = closure_19(closure_5, obj3);
                cResult[6] = tmp4.addIcon;
                cResult[7] = tmp16;
                tmp13 = tmp16;
              } else {
                tmp13 = cResult[7];
              }
              const _Symbol3 = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = {
                  variant: "text-md/semibold",
                  color: "mobile-text-heading-primary",
                  children: intl2.string(guild(1126).t.H9jxS1),
                };
                const Text = tmp(4892).Text;
                intl2 = tmp(1126).intl;
                const tmp19 = closure_19(Text, obj4);
                cResult[8] = tmp19;
                tmp17 = tmp19;
              } else {
                tmp17 = cResult[8];
              }
              if (cResult[9] === tmp4.footer) {
                let tmp20;
                if (cResult[10] === tmp13) {
                  tmp20 = cResult[11];
                }
                if (cResult[12] === tmp9) {
                  let tmp24;
                  if (cResult[13] === tmp20) {
                    tmp24 = cResult[14];
                  }
                  tmp5 = tmp24;
                }
                const obj5 = { accessibilityRole: "button", accessibilityLabel: first, onPress: tmp9, children: tmp20 };
                const tmp26 = closure_19(guild(5916).PressableOpacity, obj5);
                cResult[12] = tmp9;
                cResult[13] = tmp20;
                cResult[14] = tmp26;
                tmp24 = tmp26;
              }
              const obj6 = { style: tmp4.footer, children: items };
              items = [tmp13, tmp17];
              const tmp23 = closure_20(closure_5, obj6);
              cResult[9] = tmp4.footer;
              cResult[10] = tmp13;
              cResult[11] = tmp23;
              tmp20 = tmp23;
            }
          }
          const fn = function l() {
            const obj = GuildDirectoryAddModalActionCreatorsDefault;
            const obj2 = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
            return obj.open(obj2);
          };
          cResult[1] = channel.id;
          cResult[2] = guild.id;
          cResult[3] = guild.name;
          cResult[4] = fn;
          tmp9 = fn;
        }
      }
      return tmp5;
    }
  : (hideFooter) => {
      let channel;
      let intl;
      let intl2;
      let items;
      let obj3;
      let require;
      let user;
      ({ guild: require, channel } = hideFooter);
      hideFooter = hideFooter.hideFooter;
      const tmp = closure_23();
      let obj = useCanManageGuildDirectoryEntry;
      let tmp4 = null;
      if (obj.useCanCreateOrAddGuildInDirectory(channel)) {
        tmp4 = null;
        if (!hideFooter) {
          let obj2 = {
            accessibilityRole: "button",
            accessibilityLabel: intl.string(intl4.t.H9jxS1),
            onPress() {
              const obj = GuildDirectoryAddModalActionCreatorsDefault;
              const obj2 = {
                directoryGuildName: require.name,
                directoryGuildId: require.id,
                directoryChannelId: channel.id,
              };
              return obj.open(obj2);
            },
            children: closure_20(closure_5, obj3),
          };
          const PressableOpacity = Pressables.PressableOpacity;
          intl = intl4.intl;
          obj3 = { style: tmp.footer, children: items };
          const obj4 = { style: tmp.addIcon, children: closure_19(PlusMediumIcon.PlusMediumIcon, {}) };
          items = [closure_19(closure_5, obj4)];
          const obj5 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: intl2.string(intl4.t.H9jxS1),
          };
          const Text = Text_Text.Text;
          intl2 = intl4.intl;
          items[1] = closure_19(Text, obj5);
          tmp4 = closure_19(PressableOpacity, obj2);
        }
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let allEntriesCount;
      let closure_4;
      let first;
      let items5;
      let onCategorySelected;
      let ref;
      let tmp10;
      let tmp24;
      let tmp7;
      const tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(75);
      channel = channel.channel;
      const guildId = channel.guildId;
      closure_23();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [allEntriesCount];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function c() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      dependencyMap = react.useRef(null);
      const bottom = guildId(1618)().bottom;
      react = closure_24(stateFromStores);
      const tmp9 = closure_24(stateFromStores);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ref];
        cResult[3] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== channel.id) {
        class T {
          constructor() {
            let directoryCategoryCounts;
            let isFetchingResult;
            currentCategoryId = GuildDirectoryStore.getCurrentCategoryId(channel.id);
            let tmp3 = null;
            const getDirectoryEntries = GuildDirectoryStore.getDirectoryEntries;
            const id = channel.id;
            if (currentCategoryId !== DirectoryEntryCategories.ALL) {
              tmp3 = currentCategoryId;
            }
            directoryEntries = getDirectoryEntries(id, tmp3);
            const directoryAllEntriesCount = GuildDirectoryStore.getDirectoryAllEntriesCount(channel.id);
            const obj2 = {
              currentCategoryId,
              directoryEntries,
              directoryIsFetching: isFetchingResult,
              allEntriesCount: directoryAllEntriesCount,
              categoryCounts: directoryCategoryCounts,
            };
            directoryCategoryCounts = GuildDirectoryStore.getDirectoryCategoryCounts(channel.id);
            isFetchingResult = GuildDirectoryStore.isFetching();
            if (!isFetchingResult) {
              isFetchingResult = null === currentCategoryId && null == directoryEntries;
            }
            return obj2;
          }
        }
        cResult[4] = channel.id;
        cResult[5] = T;
      } else {
        class T {
          constructor() {
            let directoryCategoryCounts;
            let isFetchingResult;
            currentCategoryId = GuildDirectoryStore.getCurrentCategoryId(channel.id);
            let tmp3 = null;
            const getDirectoryEntries = GuildDirectoryStore.getDirectoryEntries;
            const id = channel.id;
            if (currentCategoryId !== DirectoryEntryCategories.ALL) {
              tmp3 = currentCategoryId;
            }
            directoryEntries = getDirectoryEntries(id, tmp3);
            const directoryAllEntriesCount = GuildDirectoryStore.getDirectoryAllEntriesCount(channel.id);
            const obj2 = {
              currentCategoryId,
              directoryEntries,
              directoryIsFetching: isFetchingResult,
              allEntriesCount: directoryAllEntriesCount,
              categoryCounts: directoryCategoryCounts,
            };
            directoryCategoryCounts = GuildDirectoryStore.getDirectoryCategoryCounts(channel.id);
            isFetchingResult = GuildDirectoryStore.isFetching();
            if (!isFetchingResult) {
              isFetchingResult = null === currentCategoryId && null == directoryEntries;
            }
            return obj2;
          }
        }
      }
      const tmpResult4 = tmp(504);
      const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp10, T);
      let currentCategoryId = stateFromStoresObject.currentCategoryId;
      let directoryEntries = stateFromStoresObject.directoryEntries;
      const directoryIsFetching = stateFromStoresObject.directoryIsFetching;
      allEntriesCount = stateFromStoresObject.allEntriesCount;
      const categoryCounts = stateFromStoresObject.categoryCounts;
      if (cResult[6] === directoryEntries) {
        let tmp16;
        class T {
          constructor() {
            let directoryCategoryCounts;
            let isFetchingResult;
            currentCategoryId = GuildDirectoryStore.getCurrentCategoryId(channel.id);
            let tmp3 = null;
            const getDirectoryEntries = GuildDirectoryStore.getDirectoryEntries;
            const id = channel.id;
            if (currentCategoryId !== DirectoryEntryCategories.ALL) {
              tmp3 = currentCategoryId;
            }
            directoryEntries = getDirectoryEntries(id, tmp3);
            const directoryAllEntriesCount = GuildDirectoryStore.getDirectoryAllEntriesCount(channel.id);
            const obj2 = {
              currentCategoryId,
              directoryEntries,
              directoryIsFetching: isFetchingResult,
              allEntriesCount: directoryAllEntriesCount,
              categoryCounts: directoryCategoryCounts,
            };
            directoryCategoryCounts = GuildDirectoryStore.getDirectoryCategoryCounts(channel.id);
            isFetchingResult = GuildDirectoryStore.isFetching();
            if (!isFetchingResult) {
              isFetchingResult = null === currentCategoryId && null == directoryEntries;
            }
            return obj2;
          }
        }
        const effect = obj3.useEffect(F, items5);
        if (cResult[10] !== channel.id) {
          class W {
            constructor() {
              return () => {
                const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
                if (null != lastMessageIdResult) {
                  const obj = channel(ref[32]);
                  const obj2 = {
                    object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                    objectType: constants.ACK_AUTOMATIC,
                  };
                  obj.ack(id.id, obj2, true, true, lastMessageIdResult);
                }
              };
            }
          }
          const items2 = [channel.id];
          cResult[10] = channel.id;
          cResult[11] = W;
          cResult[12] = items2;
          tmp16 = items2;
        } else {
          class W {
            constructor() {
              return () => {
                const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
                if (null != lastMessageIdResult) {
                  const obj = channel(ref[32]);
                  const obj2 = {
                    object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                    objectType: constants.ACK_AUTOMATIC,
                  };
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
                  const obj = channel(ref[32]);
                  const obj2 = {
                    object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                    objectType: constants.ACK_AUTOMATIC,
                  };
                  obj.ack(id.id, obj2, true, true, lastMessageIdResult);
                }
              };
            }
          }
        } else {
          let directoryRows;
          class W {
            constructor() {
              return () => {
                const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
                if (null != lastMessageIdResult) {
                  const obj = channel(ref[32]);
                  const obj2 = {
                    object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                    objectType: constants.ACK_AUTOMATIC,
                  };
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
                    const obj = channel(ref[32]);
                    const obj2 = {
                      object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                      objectType: constants.ACK_AUTOMATIC,
                    };
                    obj.ack(id.id, obj2, true, true, lastMessageIdResult);
                  }
                };
              }
            }
            let _Object = Object;
            directoryRows = obj5.generateDirectoryRows(
              directoryIsFetching,
              Object.values(directoryEntries),
              currentCategoryId,
            );
          } else {
            class W {
              constructor() {
                return () => {
                  const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
                  if (null != lastMessageIdResult) {
                    const obj = channel(ref[32]);
                    const obj2 = {
                      object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                      objectType: constants.ACK_AUTOMATIC,
                    };
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
        const ref2 = obj3.useRef(0);
        const tmpResult5 = tmp(4716);
        const _location = tmpResult5.useLocation();
        const tmpResult6 = tmp(4716);
        const history = tmpResult6.useHistory();
        if (cResult[17] === history) {
          let tmp27;
          class W {
            constructor() {
              return () => {
                const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
                if (null != lastMessageIdResult) {
                  const obj = channel(ref[32]);
                  const obj2 = {
                    object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                    objectType: constants.ACK_AUTOMATIC,
                  };
                  obj.ack(id.id, obj2, true, true, lastMessageIdResult);
                }
              };
            }
          }
          const effect2 = obj3.useEffect(J, tmp24);
          if (cResult[21] !== channel.id) {
            class X {
              constructor() {
                const obj = GuildDirectoryActionCreatorsAll;
                directoryEntries = obj.fetchDirectoryEntries(channel.id);
                const obj2 = GuildDirectoryActionCreatorsAll;
                const directoryCounts = obj2.fetchDirectoryCounts(channel.id);
              }
            }
            const items3 = [channel.id];
            cResult[21] = channel.id;
            cResult[22] = X;
            cResult[23] = items3;
            tmp27 = items3;
          } else {
            class X {
              constructor() {
                const obj = GuildDirectoryActionCreatorsAll;
                directoryEntries = obj.fetchDirectoryEntries(channel.id);
                const obj2 = GuildDirectoryActionCreatorsAll;
                const directoryCounts = obj2.fetchDirectoryCounts(channel.id);
              }
            }
            tmp27 = cResult[23];
          }
          const effect3 = obj3.useEffect(X, tmp27);
          if (cResult[24] === channel.id) {
            class X {
              constructor() {
                const obj = GuildDirectoryActionCreatorsAll;
                directoryEntries = obj.fetchDirectoryEntries(channel.id);
                const obj2 = GuildDirectoryActionCreatorsAll;
                const directoryCounts = obj2.fetchDirectoryCounts(channel.id);
              }
            }
          }
          cResult[24] = channel.id;
          cResult[25] = currentCategoryId;
          if (stateFromStores != null) {
            class X {
              constructor() {
                const obj = GuildDirectoryActionCreatorsAll;
                directoryEntries = obj.fetchDirectoryEntries(channel.id);
                const obj2 = GuildDirectoryActionCreatorsAll;
                const directoryCounts = obj2.fetchDirectoryCounts(channel.id);
              }
            }
          }
          function ee() {
            let id;
            const obj = {
              directory_channel_id: channel.id,
              directory_guild_id: id,
              primary_category_id: currentCategoryId,
            };
            id = undefined;
            const track = AnalyticsUtilsDefault.track;
            const GUILD_DIRECTORY_CHANNEL_VIEWED = constants.GUILD_DIRECTORY_CHANNEL_VIEWED;
            AnalyticsUtilsDefault;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            track(GUILD_DIRECTORY_CHANNEL_VIEWED, obj);
          }
          cResult[26] = undefined;
          cResult[27] = ee;
          class J {
            constructor() {
              const state = _location.state;
              let scrollBehavior;
              if (state != null) {
                scrollBehavior = state.scrollBehavior;
              }
              if (scrollBehavior === onCategorySelected.GUILD_LIST_TOP) {
                const current = ref.current;
                if (current != null) {
                  current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
                }
                const obj = { state: {} };
                const replaced = history.replace(obj);
              }
            }
          }
        }
        class J {
          constructor() {
            const state = _location.state;
            let scrollBehavior;
            if (state != null) {
              scrollBehavior = state.scrollBehavior;
            }
            if (scrollBehavior === onCategorySelected.GUILD_LIST_TOP) {
              const current = ref.current;
              if (current != null) {
                current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
              }
              const obj = { state: {} };
              const replaced = history.replace(obj);
            }
          }
        }
        const items4 = [_location, history];
        cResult[17] = history;
        cResult[18] = _location;
        cResult[19] = J;
        cResult[20] = items4;
        tmp24 = items4;
      }
      class F {
        constructor() {
          const obj = TTIAnalyticsUtils;
          obj.trackAppUIViewed();
          let obj2 = directoryEntries;
          const recordRender = TTITrackerDefault.recordRender;
          const _Object = Object;
          TTITrackerDefault;
          if (directoryEntries == null) {
            obj2 = {};
          }
          recordRender(keys(obj2).length, !directoryIsFetching);
        }
      }
      items5 = [directoryEntries, directoryIsFetching];
      cResult[6] = directoryEntries;
      cResult[7] = directoryIsFetching;
      cResult[8] = F;
      cResult[9] = items5;
    }
  : (channel) => {
      let closure_4;
      let items10;
      let items9;
      let obj11;
      let obj12;
      let obj13;
      let obj7;
      channel = channel.channel;
      const guildId = channel.guildId;
      dependencyMap = undefined;
      react = undefined;
      let allEntriesCount;
      let ref;
      function handleTapCategory() {
        if (ref2.current >= closure_4) {
          ref.current = true;
        }
      }
      const tmp = closure_23();
      let tmp3 = dependencyMap;
      const tmp2 = channel;
      let obj = channel(504);
      const items = [allEntriesCount];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj2 = react;
      dependencyMap = react.useRef(null);
      const bottom = guildId(1618)().bottom;
      react = closure_24(stateFromStores);
      const items1 = [ref];
      const obj3 = channel(504);
      const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
        let directoryCategoryCounts;
        let isFetchingResult;
        currentCategoryId = GuildDirectoryStore.getCurrentCategoryId(channel.id);
        let tmp3 = null;
        const getDirectoryEntries = GuildDirectoryStore.getDirectoryEntries;
        const id = channel.id;
        if (currentCategoryId !== DirectoryEntryCategories.ALL) {
          tmp3 = currentCategoryId;
        }
        directoryEntries = getDirectoryEntries(id, tmp3);
        const directoryAllEntriesCount = GuildDirectoryStore.getDirectoryAllEntriesCount(channel.id);
        const obj2 = {
          currentCategoryId,
          directoryEntries,
          directoryIsFetching: isFetchingResult,
          allEntriesCount: directoryAllEntriesCount,
          categoryCounts: directoryCategoryCounts,
        };
        directoryCategoryCounts = GuildDirectoryStore.getDirectoryCategoryCounts(channel.id);
        isFetchingResult = GuildDirectoryStore.isFetching();
        if (!isFetchingResult) {
          isFetchingResult = null === currentCategoryId && null == directoryEntries;
        }
        return obj2;
      });
      let currentCategoryId = stateFromStoresObject.currentCategoryId;
      let directoryEntries = stateFromStoresObject.directoryEntries;
      const directoryIsFetching = stateFromStoresObject.directoryIsFetching;
      allEntriesCount = stateFromStoresObject.allEntriesCount;
      const categoryCounts = stateFromStoresObject.categoryCounts;
      const items2 = [directoryEntries, directoryIsFetching];
      const effect = react.useEffect(() => {
        const obj = TTIAnalyticsUtils;
        obj.trackAppUIViewed();
        let obj2 = directoryEntries;
        const recordRender = TTITrackerDefault.recordRender;
        const _Object = Object;
        TTITrackerDefault;
        if (directoryEntries == null) {
          obj2 = {};
        }
        recordRender(keys(obj2).length, !directoryIsFetching);
      }, items2);
      const items3 = [channel.id];
      const effect1 = react.useEffect(() => {
        let id;
        return () => {
          const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
          if (null != lastMessageIdResult) {
            const obj = channel(ref[32]);
            const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
            obj.ack(id.id, obj2, true, true, lastMessageIdResult);
          }
        };
      }, items3);
      const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
      const memo = react.useMemo(() => {
        let directoryRows;
        if (directoryIsFetching) {
          directoryRows = closure_22;
        } else if (null != directoryEntries) {
          const _Object = Object;
          const obj = GuildDirectoryRowGenerator;
          directoryRows = obj.generateDirectoryRows(tmp, Object.values(tmp2), currentCategoryId);
        } else {
          directoryRows = [];
        }
        return directoryRows;
      }, items4);
      ref = react.useRef(null);
      const ref2 = react.useRef(0);
      const obj4 = channel(4716);
      const _location = obj4.useLocation();
      const obj5 = channel(4716);
      const history = obj5.useHistory();
      const items5 = [_location, history];
      const effect2 = react.useEffect(() => {
        const state = _location.state;
        let scrollBehavior;
        if (state != null) {
          scrollBehavior = state.scrollBehavior;
        }
        if (scrollBehavior === handleTapCategory.GUILD_LIST_TOP) {
          const current = ref.current;
          if (current != null) {
            current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
          }
          const obj = { state: {} };
          const replaced = history.replace(obj);
        }
      }, items5);
      const items6 = [channel.id];
      const effect3 = react.useEffect(() => {
        const obj = GuildDirectoryActionCreatorsAll;
        directoryEntries = obj.fetchDirectoryEntries(channel.id);
        const obj2 = GuildDirectoryActionCreatorsAll;
        const directoryCounts = obj2.fetchDirectoryCounts(channel.id);
      }, items6);
      let id;
      const useEffect = react.useEffect;
      const tmp5 = guildId;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const items7 = [id, channel.id, currentCategoryId];
      const effect4 = useEffect(() => {
        let id;
        const obj = {
          directory_channel_id: channel.id,
          directory_guild_id: id,
          primary_category_id: currentCategoryId,
        };
        id = undefined;
        const track = AnalyticsUtilsDefault.track;
        const GUILD_DIRECTORY_CHANNEL_VIEWED = constants.GUILD_DIRECTORY_CHANNEL_VIEWED;
        AnalyticsUtilsDefault;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        track(GUILD_DIRECTORY_CHANNEL_VIEWED, obj);
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
      let tmp18 = null;
      if (null != stateFromStores) {
        if (!directoryIsFetching) {
          let tmp25;
          if (0 === allEntriesCount) {
            const obj6 = { style: obj7, children: items9 };
            obj7 = { paddingBottom: bottom };
            const obj8 = { style: tmp.border };
            items9 = [closure_19(currentCategoryId, obj8), ,];
            const obj9 = { guild: stateFromStores, channel };
            items9[1] = closure_19(tmp5(12441), obj9);
            items9[2] = closure_19(tmp2(11520).TTIFirstContentfulPaint, { label: "guild_directory_empty" });
            tmp25 = closure_20(currentCategoryId, obj6);
          }
          tmp18 = tmp25;
        }
        const obj10 = { children: closure_19(directoryIsFetching, obj11) };
        obj11 = {
          ref,
          onScroll(nativeEvent) {
            ref2.current = nativeEvent.nativeEvent.contentOffset.y;
          },
          scrollEventThrottle: 16,
          contentContainerStyle: obj12,
          windowSize: 10,
          ListHeaderComponent: closure_19(closure_28, obj13),
          sections: items10,
          stickySectionHeadersEnabled: true,
          style: tmp.list,
          scrollIndicatorInsets: { right: 1 },
          keyExtractor,
          renderItem,
          renderSectionHeader() {
            const obj = { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount };
            return closure_19(GuildDirectoryCategorySelectorDefault, obj);
          },
          ListFooterComponent() {
            const obj = { guild: stateFromStores, channel, hideFooter: false };
            return closure_19(closure_29, obj);
          },
        };
        items10 = [{ data: memo }];
        obj12 = { paddingBottom: bottom };
        obj13 = {
          guild: stateFromStores,
          onPressSearch() {
            const obj = GuildDirectorySearchModalActionCreatorsDefault;
            const obj2 = { channel };
            obj.open(obj2);
          },
        };
        const obj14 = { data: memo };
        tmp25 = closure_19(currentCategoryId, obj10);
      }
      return tmp18;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectory.tsx");

export default tmp7;
