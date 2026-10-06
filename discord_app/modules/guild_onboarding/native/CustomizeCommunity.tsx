// discord_app/modules/guild_onboarding/native/CustomizeCommunity.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import ReadStateConstants from "../../read_states/ReadStateConstants.tsx";
import GuildOnboardingPromptsActionCreators from "../GuildOnboardingPromptsActionCreators.tsx";
import GuildOnboardingUtils from "../GuildOnboardingUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import ConnectionCardDefault from "ConnectionCard.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import GuildOnboardingPromptsStore from "../GuildOnboardingPromptsStore.tsx";
import GuildOnboardingPromptsConstants from "../GuildOnboardingPromptsConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, item, type;

let closure_12;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
function DropdownPrompt(guildId) {
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let obj17;
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  const tmp = closure_19();
  const isNew = _prompt.isNew;
  let tmp3 = isNew;
  let obj = guildId(isNew[19]);
  const items = [GuildOnboardingPromptsStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () =>
    GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id),
  );
  const mapped = stateFromStoresArray.map((item) => {
    let closure_0 = item;
    const options = _prompt.options;
    return options.find((id) => id.id === closure_0);
  });
  const found = mapped.filter(guildId(isNew[36]).isNotNullish);
  let obj2 = guildId(isNew[37]);
  let tmp4 = _prompt;
  const token = obj2.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  let obj3 = guildId(isNew[38]);
  const fn = function c() {
    let Easing;
    let Easing2;
    let combined;
    let combined1;
    let obj3;
    let tmp3;
    let withDelay;
    let withSequence;
    let withTiming2;
    let withTimingResult;
    if (isNew) {
      combined = concat(token, "FF");
      tmp3 = token;
    } else {
      combined = concat(token, "00");
      tmp3 = token;
    }
    const obj = { borderColor: withSequence(withTimingResult, withDelay(500, withTiming2(combined1, obj3))) };
    withSequence = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj2 = { duration: 1, easing: Easing.in(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    withTimingResult = withTiming(combined, obj2);
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    withTiming2 = timing.withTiming;
    obj3 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    timing;
    combined1 = "" + tmp3 + "00";
    Easing2 = ReanimatedRexport.Easing;
    return obj;
  };
  fn.__closure = {
    isNew,
    brandColor: token,
    withSequence: guildId(isNew[38]).withSequence,
    withTiming: guildId(isNew[39]).withTiming,
    Easing: guildId(isNew[38]).Easing,
    withDelay: guildId(isNew[38]).withDelay,
  };
  fn.__workletHash = 16609373875235;
  fn.__initData = __initData;
  ({
    isNew,
    brandColor: token,
    withSequence: guildId(isNew[38]).withSequence,
    withTiming: guildId(isNew[39]).withTiming,
    Easing: guildId(isNew[38]).Easing,
    withDelay: guildId(isNew[38]).withDelay,
  });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const handleSelectOption = _prompt(isNew[40])(guildId).handleSelectOption;
  const items1 = [guildId, _prompt, handleSelectOption, stateFromStoresArray.length];
  const callback = stateFromStoresArray.useCallback(() => {
    let length;
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      guildId,
      promptId: _prompt.id,
      onSelect(arg0, arg1) {
        let flag = arg1;
        required = !arg1 && required.required && 1 === length.length;
        if (!required) {
          const tmp4 = required;
          if (flag == null) {
            flag = false;
          }
          handleSelectOption(tmp4, arg0, flag);
        }
      },
      canBeNew: !_prompt.isNew,
      returnToCustomize: true,
    };
    obj.openLazy(asyncRequire(6637, dependencyMap.paths), "DropdownOptions", obj2);
  }, items1);
  const obj5 = { style: items2, children: items3 };
  items2 = [tmp.promptContainer, animatedStyle];
  let isNew2 = _prompt.isNew;
  const View = _prompt(isNew[38]).View;
  if (isNew2) {
    const obj7 = {
      color: guildId(tmp3[23]).BadgeColors.BRAND,
      text: intl.string(guildId(tmp3[22]).t.y2b7CA),
      style: null,
      textStyle: null,
    };
    const TextBadge = tmp2(tmp3[23]).TextBadge;
    intl = tmp2(tmp3[22]).intl;
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = closure_16(TextBadge, obj7);
  }
  items3 = [isNew2, closure_16(closure_21, { item: _prompt }), ,];
  let tmp10Result = 0 === found.length;
  const obj8 = { style: tmp.dropdownContainer, onPress: callback, children: items4 };
  const PressableHighlight = tmp2(tmp3[44]).PressableHighlight;
  if (tmp10Result) {
    const obj9 = {
      style: tmp.emptyDropdownText,
      variant: "text-sm/normal",
      color: "text-muted",
      children: intl2.string(guildId(tmp3[22]).t.GmSvdA),
    };
    const Text = tmp2(tmp3[24]).Text;
    intl2 = tmp2(tmp3[22]).intl;
    tmp10Result = closure_16(Text, obj9);
  }
  items4 = [
    tmp10Result,
    found.map((option) => {
      const obj = { option };
      return closure_1_16(closure_1_24, obj, option.id);
    }),
  ];
  const obj10 = { style: tmp.dropdownIconContainer, children: closure_16(handleSelectOption, obj17) };
  obj17 = { style: tmp.dropdownIcon, source: tmp4(tmp3[45]) };
  items4[2] = closure_16(token, obj10);
  items3[2] = closure_17(PressableHighlight, obj8);
  items3[3] = closure_16(closure_22, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  return closure_17(View, obj5);
}
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ GuildOnboardingTab: closure_12, OnboardingPromptType: map1 } = GuildOnboardingPromptsConstants);
const Fonts = Constants.Fonts;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  sheetTitle: obj3,
  promptContainer: obj4,
  titleContainer: obj5,
  badge: { position: "absolute", top: -6, right: -6 },
  badgeText: { fontWeight: "bold" },
  dropdownContainer: obj6,
  emptyDropdownText: obj7,
  dropdownPill: obj8,
  emojiContainer: { display: "flex", alignItems: "center" },
  dropdownIconContainer: rect,
  dropdownIcon: { height: 32, width: 32 },
  optionTextEmoji: { fontSize: 18, lineHeight: 22, marginRight: 6 },
  optionImageEmoji: { height: 22, width: 22, marginRight: 6 },
  helpText: obj9,
  sectionSeparator: obj10,
  emptyContainer: { height: 400, display: "flex", alignItems: "center", justifyContent: "center" },
  emptyContainerImage: size,
  emptyContainerHeader: obj11,
  connectionsContainer: obj12,
  connectionsPromptContainer: obj13,
  connectionsTitle: obj14,
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
obj4 = {
  position: "relative",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
  borderStyle: "solid",
};
obj5 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
obj6 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  padding: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_32,
  minHeight: 48,
  marginBottom: nativeDefault.space.PX_12,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  position: "relative",
};
obj7 = { marginVertical: nativeDefault.space.PX_12, marginLeft: nativeDefault.space.PX_4 };
obj8 = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: 6,
  marginRight: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
rect = { position: "absolute", right: nativeDefault.space.PX_4, top: nativeDefault.space.PX_12 };
obj9 = { marginTop: nativeDefault.space.PX_4 };
obj10 = {
  marginTop: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
size = { width: 120, height: 80, marginBottom: nativeDefault.space.PX_16 };
obj11 = { marginBottom: nativeDefault.space.PX_4 };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj12 = { marginTop: nativeDefault.space.PX_12 };
obj13 = { marginTop: nativeDefault.space.PX_12 };
obj14 = { marginBottom: nativeDefault.space.PX_4 };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (setTab) => {
      let guildId;
      let items1;
      let stateFromStores;
      let tmp7;
      let tmp8;
      const obj = setTab(576);
      const cResult = obj.c(20);
      setTab = setTab.setTab;
      const tmp4 = closure_19();
      const obj2 = setTab(4593);
      const isThemeDarkResult = obj2.isThemeDark(stateFromStores(4797)());
      const tmp5 = stateFromStores;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function s() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = setTab(504);
      stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[2] === stateFromStores) {
        let tmp11;
        if (cResult[3] === setTab) {
          tmp11 = cResult[4];
        }
        const emptyContainer = tmp4.emptyContainer;
        const tmp5Result = tmp5(isThemeDarkResult ? 11181 : 11182);
        if (cResult[5] === tmp4.emptyContainerImage) {
          let tmp13;
          let tmp17;
          let tmp19;
          let tmp22;
          let tmp24;
          if (cResult[6] === tmp5Result) {
            tmp13 = cResult[7];
          }
          const _Symbol = Symbol;
          const emptyContainerHeader = tmp4.emptyContainerHeader;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(setTab(1126).t.leKHQz);
            cResult[8] = stringResult;
            tmp17 = stringResult;
          } else {
            tmp17 = cResult[8];
          }
          if (cResult[9] !== tmp4.emptyContainerHeader) {
            const obj3 = { style: emptyContainerHeader, children: tmp17 };
            const tmp21 = closure_16(setTab(1188).LegacyText, obj3);
            cResult[9] = tmp4.emptyContainerHeader;
            cResult[10] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[10];
          }
          if (cResult[11] !== tmp11) {
            const intl2 = tmp(1126).intl;
            const obj4 = { onBrowseChannels: tmp11 };
            const formatResult = intl2.format(setTab(1126).t["jH+ktB"], obj4);
            cResult[11] = tmp11;
            cResult[12] = formatResult;
            tmp22 = formatResult;
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] !== tmp22) {
            const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: tmp22 };
            const tmp26 = closure_16(setTab(4892).Text, obj5);
            cResult[13] = tmp22;
            cResult[14] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[14];
          }
          if (cResult[15] === tmp4.emptyContainer) {
            if (cResult[16] === tmp24) {
              if (cResult[17] === tmp13) {
                let tmp27;
                if (cResult[18] === tmp19) {
                  tmp27 = cResult[19];
                }
                return tmp27;
              }
            }
          }
          const obj6 = { style: emptyContainer, children: items1 };
          items1 = [tmp13, tmp19, tmp24];
          const tmp30 = closure_17(closure_4, obj6);
          cResult[15] = tmp4.emptyContainer;
          cResult[16] = tmp24;
          cResult[17] = tmp13;
          cResult[18] = tmp19;
          cResult[19] = tmp30;
          tmp27 = tmp30;
        }
        const obj7 = { style: tmp4.emptyContainerImage, source: tmp5Result };
        const tmp16 = closure_16(closure_5, obj7);
        cResult[5] = tmp4.emptyContainerImage;
        cResult[6] = tmp5Result;
        cResult[7] = tmp16;
        tmp13 = tmp16;
      }
      const fn2 = function w() {
        if (null != stateFromStores) {
          setTab(constants.BROWSE);
        }
      };
      cResult[2] = stateFromStores;
      cResult[3] = setTab;
      cResult[4] = fn2;
      tmp11 = fn2;
    }
  : (setTab) => {
      let closure_1;
      let guildId;
      let intl;
      let intl2;
      let items1;
      let obj7;
      setTab = setTab.setTab;
      importDefault = undefined;
      const tmp = closure_19();
      const obj = setTab(4593);
      const items = [SelectedGuildStore];
      const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
      const obj2 = setTab(504);
      const tmp4 = importDefault;
      importDefault = obj2.useStateFromStores(items, () => guildId.getGuildId());
      const obj3 = { style: tmp.emptyContainer, children: items1 };
      items1 = [, ,];
      const obj4 = { style: tmp.emptyContainerImage, source: tmp4(isThemeDarkResult ? 11181 : 11182) };
      items1[0] = closure_16(closure_5, obj4);
      const obj5 = { style: tmp.emptyContainerHeader, children: intl.string(setTab(1126).t.leKHQz) };
      const LegacyText = tmp2(1188).LegacyText;
      intl = tmp2(1126).intl;
      items1[1] = closure_16(LegacyText, obj5);
      const obj6 = {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: intl2.format(setTab(1126).t["jH+ktB"], obj7),
      };
      const Text = tmp2(4892).Text;
      intl2 = tmp2(1126).intl;
      obj7 = {
        onBrowseChannels() {
          if (null != closure_1) {
            setTab(constants.BROWSE);
          }
        },
      };
      items1[2] = closure_16(Text, obj6);
      return closure_17(closure_4, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (item) => {
      let items;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(8);
      item = item.item;
      const tmp4 = closure_19();
      if (cResult[0] !== item.required) {
        let tmp6 = null;
        if (item.required) {
          const obj2 = { variant: "text-md/bold", color: "text-feedback-critical", children: [" ", "*"] };
          tmp6 = closure_17(Text_Text.Text, obj2);
        }
        cResult[0] = item.required;
        cResult[1] = tmp6;
        tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === item.title) {
        let tmp8;
        if (cResult[3] === tmp5) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4.titleContainer) {
          let tmp10;
          if (cResult[6] === tmp8) {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
        const obj3 = { style: tmp4.titleContainer, children: tmp8 };
        const tmp13 = authStore3(React3, obj3);
        cResult[5] = tmp4.titleContainer;
        cResult[6] = tmp8;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: items };
      items = [item.title, tmp5];
      const tmp9 = closure_17(Text_Text.Heading, obj4);
      cResult[2] = item.title;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (item) => {
      let Heading;
      let items;
      item = item.item;
      const obj = {
        style: closure_19().titleContainer,
        children: closure_17(Heading, {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: items,
        }),
      };
      items = [item.title];
      let tmp3Result = null;
      Heading = Text_Text.Heading;
      if (item.required) {
        const obj2 = { variant: "text-md/bold", color: "text-feedback-critical", children: [" ", "*"] };
        tmp3Result = closure_17(Text_Text.Text, obj2);
      }
      items[1] = tmp3Result;
      return authStore3(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (guildId) {
      let _prompt;
      let first;
      let selectedOptionIds;
      let tmp7;
      let obj = guildId(576);
      const cResult = obj.c(20);
      guildId = guildId.guildId;
      ({ prompt: _prompt, selectedOptionIds } = guildId);
      closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function o() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      let options;
      const tmp9 = cResult[3];
      if (_prompt != null) {
        options = _prompt.options;
      }
      if (tmp9 === options) {
        let tmp11;
        let tmp14;
        let tmp16;
        if (cResult[4] === selectedOptionIds) {
          tmp11 = cResult[5];
        }
        if (cResult[6] !== tmp11) {
          let selectedRoleIds;
          if (null != tmp11) {
            const tmpResult3 = guildId(6608);
            selectedRoleIds = tmpResult3.getSelectedRoleIds(tmp11);
          } else {
            const _Set = Set;
            const self = this;
            const self2 = this;
            selectedRoleIds = new Set();
          }
          cResult[6] = tmp11;
          cResult[7] = selectedRoleIds;
          tmp14 = selectedRoleIds;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] !== tmp11) {
          let selectedChannelIds;
          if (null != tmp11) {
            const tmpResult4 = guildId(6608);
            selectedChannelIds = tmpResult4.getSelectedChannelIds(tmp11);
          } else {
            const _Set2 = Set;
            const self3 = this;
            const self4 = this;
            selectedChannelIds = new Set();
          }
          cResult[8] = tmp11;
          cResult[9] = selectedChannelIds;
          tmp16 = selectedChannelIds;
        } else {
          tmp16 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(children, arg1) {
              const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
              return closure_1_16(guildId(dependencyMap[24]).Text, obj, arg1);
            }
          }
          cResult[10] = S;
        } else {
          class S {
            constructor(children, arg1) {
              const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
              return closure_1_16(guildId(dependencyMap[24]).Text, obj, arg1);
            }
          }
        }
        if (cResult[11] === stateFromStores) {
          class S {
            constructor(children, arg1) {
              const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
              return closure_1_16(guildId(dependencyMap[24]).Text, obj, arg1);
            }
          }
        }
        const obj2 = {
          guild: stateFromStores,
          prompt: _prompt,
          selectedRoleIds: tmp14,
          selectedChannelIds: tmp16,
          itemHook: S,
        };
        cResult[11] = stateFromStores;
        cResult[12] = _prompt;
        cResult[13] = tmp16;
        cResult[14] = tmp14;
        cResult[15] = obj2;
      }
      if (_prompt != null) {
        class S {
          constructor(children, arg1) {
            const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
            return closure_1_16(guildId(dependencyMap[24]).Text, obj, arg1);
          }
        }
        if (tmp13 != null) {
          class S {
            constructor(children, arg1) {
              const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
              return closure_1_16(guildId(dependencyMap[24]).Text, obj, arg1);
            }
          }
        }
      }
      if (_prompt != null) {
        class S {
          constructor(children, arg1) {
            const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
            return closure_1_16(guildId(dependencyMap[24]).Text, obj, arg1);
          }
        }
      }
      cResult[3] = undefined;
      cResult[4] = selectedOptionIds;
      cResult[5] = undefined;
      tmp11 = tmp12;
    }
  : (arg0) => {
      let _prompt;
      let helpText;
      let helpTextAdditional;
      let items3;
      let require;
      let tmp9;
      ({ guildId: require, prompt: _prompt, selectedOptionIds: importDefault } = arg0);
      let found;
      const tmp = closure_19();
      let obj = require("get initialized");
      const items = [GuildStore];
      found = undefined;
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(_require));
      if (_prompt != null) {
        const options = _prompt.options;
        if (options != null) {
          found = options.filter((id) => importDefault.includes(id.id));
        }
      }
      const items1 = [found];
      const items2 = [found];
      const memo = react.useMemo(function () {
        let selectedRoleIds;
        if (null != found) {
          const obj = GuildOnboardingUtils;
          selectedRoleIds = obj.getSelectedRoleIds(tmp);
        } else {
          const _Set = Set;
          const self = this;
          const self2 = this;
          selectedRoleIds = new Set();
        }
        return selectedRoleIds;
      }, items1);
      const memo1 = react.useMemo(function () {
        let selectedChannelIds;
        if (null != found) {
          const obj = GuildOnboardingUtils;
          selectedChannelIds = obj.getSelectedChannelIds(tmp);
        } else {
          const _Set = Set;
          const self = this;
          const self2 = this;
          selectedChannelIds = new Set();
        }
        return selectedChannelIds;
      }, items2);
      const obj2 = {
        guild: stateFromStores,
        prompt: _prompt,
        selectedRoleIds: memo,
        selectedChannelIds: memo1,
        itemHook(children, arg1) {
          const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
          return closure_1_16(require("Text/Text").Text, obj, arg1);
        },
      };
      ({ helpText, helpTextAdditional } = require("usePromptHelpText")(obj2));
      require("usePromptHelpText")(obj2);
      if ("" !== helpText) {
        const obj3 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: items3 };
        items3 = [helpText, " ", helpTextAdditional];
        tmp9 = closure_17(require("Text/Text").Text, obj3);
      } else {
        tmp9 = null;
      }
      return tmp9;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let connectionsPromptContainer;
      let connectionsTitle;
      let first;
      let intl2;
      let items1;
      let tmp7;
      let tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(19);
      guildId = guildId.guildId;
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingPromptsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function l() {
          return GuildOnboardingPromptsStore.getConnections(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (0 === stateFromStores.length) {
        return null;
      } else {
        let tmp8;
        let tmp10;
        let tmp13;
        const _Symbol2 = Symbol;
        ({ connectionsPromptContainer, connectionsTitle } = tmp4);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.eDVMrA);
          cResult[3] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp4.connectionsTitle) {
          const obj2 = {
            style: connectionsTitle,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: tmp8,
          };
          const tmp12 = closure_16(tmp(4892).Text, obj2);
          cResult[4] = tmp4.connectionsTitle;
          cResult[5] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-xs/medium", color: "text-muted", children: intl2.string(tmp(1126).t.BozOXu) };
          const Text = tmp(4892).Text;
          intl2 = tmp(1126).intl;
          const tmp15 = closure_16(Text, obj3);
          cResult[6] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === guildId) {
          let tmp17;
          if (cResult[8] === stateFromStores) {
            tmp17 = cResult[9];
          }
          if (cResult[12] === tmp4.connectionsContainer) {
            let tmp20;
            if (cResult[13] === tmp17) {
              tmp20 = cResult[14];
            }
            if (cResult[15] === tmp4.connectionsPromptContainer) {
              if (cResult[16] === tmp20) {
                let tmp24;
                if (cResult[17] === tmp10) {
                  tmp24 = cResult[18];
                }
                return tmp24;
              }
            }
            const obj4 = { style: connectionsPromptContainer, children: items1 };
            items1 = [tmp10, tmp13, tmp20];
            const tmp27 = closure_17(closure_4, obj4);
            cResult[15] = tmp4.connectionsPromptContainer;
            cResult[16] = tmp20;
            cResult[17] = tmp10;
            cResult[18] = tmp27;
            tmp24 = tmp27;
          }
          const obj5 = { style: tmp16, children: tmp17 };
          const tmp23 = closure_16(closure_4, obj5);
          cResult[12] = tmp4.connectionsContainer;
          cResult[13] = tmp17;
          cResult[14] = tmp23;
          tmp20 = tmp23;
        }
        if (cResult[10] !== guildId) {
          class S {
            constructor(connection, arg1) {
              const obj = { connection, guildId, location: AnalyticsLocationDefault.CHANNELS_AND_ROLES };
              const tmp = ConnectionCardDefault;
              return authStore3(tmp, obj, arg1);
            }
          }
          cResult[10] = guildId;
          cResult[11] = S;
        } else {
          class S {
            constructor(connection, arg1) {
              const obj = { connection, guildId, location: AnalyticsLocationDefault.CHANNELS_AND_ROLES };
              const tmp = ConnectionCardDefault;
              return authStore3(tmp, obj, arg1);
            }
          }
        }
        const mapped = stateFromStores.map(S);
        cResult[7] = guildId;
        cResult[8] = stateFromStores;
        cResult[9] = mapped;
        tmp17 = mapped;
      }
    }
  : (guildId) => {
      let intl;
      let intl2;
      let items1;
      guildId = guildId.guildId;
      let tmp = closure_19();
      let obj = guildId(504);
      const items = [GuildOnboardingPromptsStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingPromptsStore.getConnections(guildId));
      let tmp4 = null;
      if (0 !== stateFromStores.length) {
        const obj2 = { style: tmp.connectionsPromptContainer, children: items1 };
        const obj3 = {
          style: tmp.connectionsTitle,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: intl.string(guildId(1126).t.eDVMrA),
        };
        const Text = tmp2(4892).Text;
        intl = tmp2(1126).intl;
        items1 = [closure_16(Text, obj3), ,];
        const obj4 = { variant: "text-xs/medium", color: "text-muted", children: intl2.string(guildId(1126).t.BozOXu) };
        const Text2 = tmp2(4892).Text;
        intl2 = tmp2(1126).intl;
        items1[1] = closure_16(Text2, obj4);
        const obj5 = {
          style: tmp.connectionsContainer,
          children: stateFromStores.map((connection, index) => {
            const obj = { connection, guildId, location: AnalyticsLocationDefault.CHANNELS_AND_ROLES };
            const tmp = ConnectionCardDefault;
            return authStore3(tmp, obj, index);
          }),
        };
        items1[2] = closure_16(closure_4, obj5);
        tmp4 = closure_17(closure_4, obj2);
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let newAnswersCount;
      let newOnboardingPrompts;
      let onboardingPrompts;
      let onboardingPromptsWithNewAnswers;
      let stateFromStores;
      let tmp10;
      let tmp8;
      const tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(47);
      guildId = guildId.guildId;
      const tmp4 = closure_19();
      const bottom = stateFromStores(1618)().bottom;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function c() {
          return ReadStateStore.hasUnread(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[3] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        class P {
          constructor() {
            const guild = GuildStore.getGuild(guildId);
            let prop;
            if (guild != null) {
              prop = guild.latestOnboardingQuestionId;
            }
            return prop;
          }
        }
        cResult[4] = guildId;
        cResult[5] = P;
      } else {
        class P {
          constructor() {
            const guild = GuildStore.getGuild(guildId);
            let prop;
            if (guild != null) {
              prop = guild.latestOnboardingQuestionId;
            }
            return prop;
          }
        }
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, P);
      ({ newOnboardingPrompts, onboardingPromptsWithNewAnswers, newAnswersCount, onboardingPrompts } =
        stateFromStores(11183)(guildId));
      stateFromStores(11183)(guildId);
      if (cResult[6] === guildId) {
        class P {
          constructor() {
            const guild = GuildStore.getGuild(guildId);
            let prop;
            if (guild != null) {
              prop = guild.latestOnboardingQuestionId;
            }
            return prop;
          }
        }
        if (cResult[9] === guildId) {
          class P {
            constructor() {
              const guild = GuildStore.getGuild(guildId);
              let prop;
              if (guild != null) {
                prop = guild.latestOnboardingQuestionId;
              }
              return prop;
            }
          }
        }
        const items2 = [guildId, stateFromStores, stateFromStores1];
        cResult[9] = guildId;
        cResult[10] = stateFromStores;
        cResult[11] = stateFromStores1;
        cResult[12] = items2;
      }
      class O {
        constructor() {
          let tmp2 = null != guildId;
          if (tmp2) {
            tmp2 = GuildOnboardingPromptsStore.shouldFetchPrompts(guildId) || stateFromStores;
            GuildOnboardingPromptsStore.shouldFetchPrompts(guildId) || stateFromStores;
          }
          if (tmp2) {
            const obj = GuildOnboardingPromptsActionCreators;
            const onboardingPrompts = obj.fetchOnboardingPrompts(guildId);
          }
        }
      }
      cResult[6] = guildId;
      cResult[7] = stateFromStores;
      cResult[8] = O;
    }
  : (guildId) => {
      let intl;
      let intl2;
      let intl3;
      let items5;
      let items6;
      let items7;
      let newAnswersCount;
      let newOnboardingPrompts;
      let obj10;
      let obj4;
      let obj5;
      let obj7;
      let onboardingPrompts;
      let onboardingPromptsRaw;
      let onboardingPromptsWithNewAnswers;
      let tmp24Result4;
      guildId = guildId.guildId;
      let stateFromStores;
      const setTab = guildId.setTab;
      const tmp = closure_19();
      let tmp2 = stateFromStores;
      const bottom = stateFromStores(1618)().bottom;
      const tmp4 = guildId;
      let obj = guildId(504);
      const items = [ReadStateStore];
      stateFromStores = obj.useStateFromStores(items, () =>
        ReadStateStore.hasUnread(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION),
      );
      let obj2 = guildId(504);
      const items1 = [GuildStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        const guild = GuildStore.getGuild(guildId);
        let prop;
        if (guild != null) {
          prop = guild.latestOnboardingQuestionId;
        }
        return prop;
      });
      const tmp7 = stateFromStores(11183)(guildId);
      ({ newOnboardingPrompts, onboardingPromptsWithNewAnswers, onboardingPrompts } = tmp7);
      const items2 = [guildId, stateFromStores, stateFromStores1];
      ({ onboardingPromptsRaw, newAnswersCount } = tmp7);
      const effect = react.useEffect(() => {
        let tmp2 = null != guildId;
        if (tmp2) {
          tmp2 = GuildOnboardingPromptsStore.shouldFetchPrompts(guildId) || stateFromStores;
          GuildOnboardingPromptsStore.shouldFetchPrompts(guildId) || stateFromStores;
        }
        if (tmp2) {
          const obj = GuildOnboardingPromptsActionCreators;
          const onboardingPrompts = obj.fetchOnboardingPrompts(guildId);
        }
      }, items2);
      const items3 = [guildId];
      const effect1 = react.useEffect(
        () =>
          null != guildId
            ? () => {
                const obj = guildId(dependencyMap[32]);
                obj.ackGuildFeature(
                  closure_1_0,
                  constants.GUILD_ONBOARDING_QUESTION,
                  GuildOnboardingPromptsStore.ackIdForGuild(closure_1_0),
                );
                const obj2 = stateFromStores(dependencyMap[33]);
                const result = obj2.updateOnboardingResponses(closure_1_0);
              }
            : undefined,
        items3,
      );
      const items4 = [guildId];
      const callback = react.useCallback((type) => {
        type = type.type;
        if (map1.MULTIPLE_CHOICE === type) {
          const obj2 = { guildId, prompt: type };
          return authStore3(closure_29, obj2, type.id);
        } else if (tmp.DROPDOWN === type) {
          const obj = { guildId, prompt: type };
          return authStore3(DropdownPrompt, obj, type.id);
        }
      }, items4);
      if (0 === onboardingPromptsRaw.length) {
        const obj3 = { style: tmp.container, contentContainerStyle: obj4, children: closure_16(closure_20, obj5) };
        obj4 = { paddingBottom: bottom + tmp2(587).space.PX_16 };
        obj5 = { setTab };
        tmp24Result4 = closure_16(closure_6, obj3);
      } else {
        const obj6 = { style: tmp.container, contentContainerStyle: obj7, children: items6 };
        let tmp24Result = newOnboardingPrompts.length > 0 || onboardingPromptsWithNewAnswers.length > 0;
        obj7 = { paddingBottom: bottom + tmp2(587).space.PX_16 };
        if (tmp24Result) {
          const obj8 = { children: items5 };
          const obj9 = {
            style: tmp.sheetTitle,
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: intl.format(tmp4(1126).t.iB5Gqe, obj10),
          };
          const Text = tmp4(4892).Text;
          intl = tmp4(1126).intl;
          obj10 = { count: newOnboardingPrompts.length + newAnswersCount };
          items5 = [
            closure_16(Text, obj9),
            newOnboardingPrompts.map(callback),
            onboardingPromptsWithNewAnswers.map(callback),
          ];
          const obj11 = { style: tmp.sectionSeparator };
          items5[3] = closure_16(closure_4, obj11);
          tmp24Result = closure_17(closure_18, obj8);
        }
        items6 = [tmp24Result, ,];
        let tmp24Result3 = onboardingPrompts.length > 0;
        if (tmp24Result3) {
          const obj12 = { children: items7 };
          const obj13 = {
            style: tmp.sheetTitle,
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: intl2.string(tmp4(1126).t.BGkaer),
          };
          const Text2 = tmp4(4892).Text;
          intl2 = tmp4(1126).intl;
          items7 = [closure_16(Text2, obj13), ,];
          const obj14 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(tmp4(1126).t.r6Vm8T) };
          const Text3 = tmp4(4892).Text;
          intl3 = tmp4(1126).intl;
          items7[1] = closure_16(Text3, obj14);
          items7[2] = onboardingPrompts.map(callback);
          tmp24Result3 = closure_17(closure_18, obj12);
        }
        items6[1] = tmp24Result3;
        const obj15 = { guildId };
        items6[2] = closure_16(closure_23, obj15);
        tmp24Result4 = closure_17(closure_6, obj6);
      }
      return tmp24Result4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (option) => {
      let emojiURL;
      let first;
      let items1;
      let obj7;
      let str;
      let tmp22;
      let tmp9;
      const obj = option(576);
      const cResult = obj.c(16);
      option = option.option;
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      let emoji = option.emoji;
      let id;
      const tmp7 = cResult[1];
      if (emoji != null) {
        id = emoji.id;
      }
      if (tmp7 !== id) {
        let emoji2 = option.emoji;
        let id1;
        if (emoji2 != null) {
          id1 = emoji2.id;
        }
        const fn = function l() {
          const emoji = option.emoji;
          let id;
          if (emoji != null) {
            id = emoji.id;
          }
          let usableCustomEmojiById = null;
          if (null != id) {
            const emoji2 = option.emoji;
            let id1;
            const getUsableCustomEmojiById = EmojiStore.getUsableCustomEmojiById;
            if (emoji2 != null) {
              id1 = emoji2.id;
            }
            usableCustomEmojiById = getUsableCustomEmojiById(id1);
          }
          return usableCustomEmojiById;
        };
        cResult[1] = id1;
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = option(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      const emoji3 = option.emoji;
      let id2;
      if (emoji3 != null) {
        id2 = emoji3.id;
      }
      let tmp13 = null != id2;
      if (!tmp13) {
        const emoji4 = option.emoji;
        let name;
        if (emoji4 != null) {
          name = emoji4.name;
        }
        tmp13 = null != name;
      }
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === tmp13) {
          const emoji5 = option.emoji;
          let name1;
          const tmp15 = cResult[5];
          if (emoji5 != null) {
            name1 = emoji5.name;
          }
          if (tmp15 === name1) {
            if (cResult[6] === tmp4.emojiContainer) {
              if (cResult[7] === tmp4.optionImageEmoji) {
                let tmp17;
                let tmp26;
                if (cResult[8] === tmp4.optionTextEmoji) {
                  tmp17 = cResult[9];
                }
                if (cResult[10] !== option.title) {
                  const obj2 = { variant: "text-md/semibold", children: option.title };
                  const tmp28 = closure_16(option(4892).Text, obj2);
                  cResult[10] = option.title;
                  cResult[11] = tmp28;
                  tmp26 = tmp28;
                } else {
                  tmp26 = cResult[11];
                }
                if (cResult[12] === tmp4.dropdownPill) {
                  if (cResult[13] === tmp17) {
                    let tmp29;
                    if (cResult[14] === tmp26) {
                      tmp29 = cResult[15];
                    }
                    return tmp29;
                  }
                }
                const obj3 = { style: tmp4.dropdownPill, children: items1 };
                items1 = [tmp17, tmp26];
                const tmp32 = closure_17(closure_4, obj3);
                cResult[12] = tmp4.dropdownPill;
                cResult[13] = tmp17;
                cResult[14] = tmp26;
                cResult[15] = tmp32;
                tmp29 = tmp32;
              }
            }
          }
        }
      }
      let tmp19Result = tmp13;
      if (tmp19Result) {
        const obj5 = { style: tmp4.emojiContainer, children: closure_16(tmp22, obj7) };
        obj7 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
        ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp4);
        emojiURL = undefined;
        tmp22 = EmojiDefault;
        if (null != stateFromStores) {
          const obj8 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
          ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
          const tmp21Result = AvatarUtilsDefault;
          emojiURL = tmp21Result.getEmojiURL(obj8);
        }
        const emoji6 = option.emoji;
        str = undefined;
        if (emoji6 != null) {
          str = emoji6.name;
        }
        if (str == null) {
          str = "";
        }
        tmp19Result = closure_16(closure_4, obj5);
      }
      cResult[3] = stateFromStores;
      cResult[4] = tmp13;
      const emoji7 = option.emoji;
      let name2;
      if (emoji7 != null) {
        name2 = emoji7.name;
      }
      cResult[5] = name2;
      cResult[6] = tmp4.emojiContainer;
      cResult[7] = tmp4.optionImageEmoji;
      cResult[8] = tmp4.optionTextEmoji;
      cResult[9] = tmp19Result;
      tmp17 = tmp19Result;
    }
  : (option) => {
      let emojiURL;
      let items1;
      let obj5;
      let str;
      let tmp12;
      option = option.option;
      const tmp = closure_19();
      const items = [EmojiStore];
      const obj = option(504);
      const stateFromStores = obj.useStateFromStores(items, () => {
        const emoji = option.emoji;
        let id;
        if (emoji != null) {
          id = emoji.id;
        }
        let usableCustomEmojiById = null;
        if (null != id) {
          const emoji2 = option.emoji;
          let id1;
          const getUsableCustomEmojiById = EmojiStore.getUsableCustomEmojiById;
          if (emoji2 != null) {
            id1 = emoji2.id;
          }
          usableCustomEmojiById = getUsableCustomEmojiById(id1);
        }
        return usableCustomEmojiById;
      });
      let emoji = option.emoji;
      let id;
      const tmp2 = option;
      if (emoji != null) {
        id = emoji.id;
      }
      let tmp10Result = null != id;
      if (!tmp10Result) {
        let emoji2 = option.emoji;
        let name;
        if (emoji2 != null) {
          name = emoji2.name;
        }
        tmp10Result = null != name;
      }
      const obj2 = { style: tmp.dropdownPill, children: items1 };
      if (tmp10Result) {
        const obj3 = { style: tmp.emojiContainer, children: closure_16(tmp12, obj5) };
        obj5 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
        ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp);
        emojiURL = undefined;
        tmp12 = EmojiDefault;
        if (null != stateFromStores) {
          const obj7 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
          ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
          const tmp11Result = AvatarUtilsDefault;
          emojiURL = tmp11Result.getEmojiURL(obj7);
        }
        const emoji3 = option.emoji;
        str = undefined;
        if (emoji3 != null) {
          str = emoji3.name;
        }
        if (str == null) {
          str = "";
        }
        tmp10Result = closure_16(closure_4, obj3);
      }
      items1 = [tmp10Result];
      const obj12 = { variant: "text-md/semibold", children: option.title };
      items1[1] = closure_16(tmp2(4892).Text, obj12);
      return closure_17(closure_4, obj2);
    };
const __initData = {
  code: 'function CustomizeCommunityTsx1(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":brandColor+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}',
};
const __initData2 = {
  code: 'function CustomizeCommunityTsx2(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":brandColor+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}',
};
const __initData3 = {
  code: 'function CustomizeCommunityTsx3(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":brandColor+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}',
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let intl;
      let isNew;
      let items1;
      let tmp = guildId;
      let obj = guildId(isNew[16]);
      const cResult = obj.c(38);
      guildId = guildId.guildId;
      const _prompt = guildId.prompt;
      const tmp4 = closure_19();
      isNew = _prompt.isNew;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingPromptsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        let tmp7;
        if (cResult[2] === _prompt.id) {
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(isNew[19]);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7);
        const handleSelectOption = _prompt(tmp2[40])(guildId).handleSelectOption;
        if (cResult[4] === handleSelectOption) {
          if (cResult[5] === _prompt) {
            let tmp10;
            if (cResult[6] === stateFromStoresArray) {
              tmp10 = cResult[7];
            }
            let closure_5 = tmp10;
            const tmpResult3 = tmp(isNew[37]);
            const token = tmpResult3.useToken(tmp9(tmp2[13]).colors.BACKGROUND_BRAND);
            const fn3 = function y() {
              let Easing;
              let Easing2;
              let combined;
              let combined1;
              let obj3;
              let tmp3;
              let withDelay;
              let withSequence;
              let withTiming2;
              let withTimingResult;
              if (isNew) {
                combined = concat(token, "FF");
                tmp3 = token;
              } else {
                combined = concat(token, "00");
                tmp3 = token;
              }
              const obj = { borderColor: withSequence(withTimingResult, withDelay(500, withTiming2(combined1, obj3))) };
              withSequence = ReanimatedRexport.withSequence;
              ReanimatedRexport;
              const obj2 = { duration: 1, easing: Easing.in(ReanimatedRexport.Easing.ease) };
              const withTiming = timing.withTiming;
              timing;
              Easing = ReanimatedRexport.Easing;
              withTimingResult = withTiming(combined, obj2);
              withDelay = ReanimatedRexport.withDelay;
              ReanimatedRexport;
              withTiming2 = timing.withTiming;
              obj3 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
              timing;
              combined1 = "" + tmp3 + "00";
              Easing2 = ReanimatedRexport.Easing;
              return obj;
            };
            let obj2 = {
              isNew,
              brandColor: token,
              withSequence: tmp(isNew[38]).withSequence,
              withTiming: tmp(isNew[39]).withTiming,
              Easing: tmp(isNew[38]).Easing,
              withDelay: tmp(isNew[38]).withDelay,
            };
            const useAnimatedStyle = tmp(isNew[38]).useAnimatedStyle;
            tmp(isNew[38]);
            fn3.__closure = obj2;
            fn3.__workletHash = 12802766002208;
            fn3.__initData = __initData2;
            const animatedStyle = useAnimatedStyle(fn3);
            if (cResult[8] === animatedStyle) {
              let tmp15;
              if (cResult[9] === tmp4.promptContainer) {
                tmp15 = cResult[10];
              }
              if (cResult[11] === _prompt.isNew) {
                if (cResult[12] === tmp4.badge) {
                  let tmp16;
                  let tmp18;
                  let tmp22;
                  if (cResult[13] === tmp4.badgeText) {
                    tmp16 = cResult[14];
                  }
                  if (cResult[15] !== _prompt) {
                    let obj3 = { item: _prompt };
                    const tmp21 = closure_16(closure_21, obj3);
                    cResult[15] = _prompt;
                    cResult[16] = tmp21;
                    tmp18 = tmp21;
                  } else {
                    tmp18 = cResult[16];
                  }
                  if (cResult[17] === guildId) {
                    if (cResult[18] === tmp10) {
                      if (cResult[19] === _prompt.isNew) {
                        if (cResult[20] === _prompt.options) {
                          if (cResult[21] === stateFromStoresArray) {
                            tmp22 = cResult[22];
                          }
                          if (cResult[28] === guildId) {
                            if (cResult[29] === _prompt) {
                              let tmp25;
                              if (cResult[30] === stateFromStoresArray) {
                                tmp25 = cResult[31];
                              }
                              if (cResult[32] === tmp15) {
                                if (cResult[33] === tmp16) {
                                  if (cResult[34] === tmp18) {
                                    if (cResult[35] === tmp22) {
                                      let tmp29;
                                      if (cResult[36] === tmp25) {
                                        tmp29 = cResult[37];
                                      }
                                      return tmp29;
                                    }
                                  }
                                }
                              }
                              const obj4 = { style: tmp15, children: items1 };
                              items1 = [tmp16, tmp18, tmp22, tmp25];
                              const tmp31 = closure_17(_prompt(isNew[38]).View, obj4);
                              cResult[32] = tmp15;
                              cResult[33] = tmp16;
                              cResult[34] = tmp18;
                              cResult[35] = tmp22;
                              cResult[36] = tmp25;
                              cResult[37] = tmp31;
                              tmp29 = tmp31;
                            }
                          }
                          const obj6 = { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray };
                          const tmp28 = closure_16(closure_22, obj6);
                          cResult[28] = guildId;
                          cResult[29] = _prompt;
                          cResult[30] = stateFromStoresArray;
                          cResult[31] = tmp28;
                          tmp25 = tmp28;
                        }
                      }
                    }
                  }
                  if (cResult[23] === guildId) {
                    if (cResult[24] === tmp10) {
                      if (cResult[25] === _prompt.isNew) {
                        let tmp23;
                        if (cResult[26] === stateFromStoresArray) {
                          tmp23 = cResult[27];
                        }
                        const options = _prompt.options;
                        const mapped = options.map(tmp23);
                        cResult[17] = guildId;
                        cResult[18] = tmp10;
                        cResult[19] = _prompt.isNew;
                        cResult[20] = _prompt.options;
                        cResult[21] = stateFromStoresArray;
                        cResult[22] = mapped;
                        tmp22 = mapped;
                      }
                    }
                  }
                  const fn4 = function f(option) {
                    guildId = option;
                    const obj = {
                      guildId,
                      option,
                      selected: stateFromStoresArray.includes(option.id),
                      onSelect(arg0) {
                        return closure_5(option, arg0);
                      },
                      suppressMemberCount: true,
                      canBeNew: !_prompt.isNew,
                    };
                    const tmp = _prompt(isNew[46]);
                    return closure_1_16(tmp, obj, option.id);
                  };
                  cResult[23] = guildId;
                  cResult[24] = tmp10;
                  cResult[25] = _prompt.isNew;
                  cResult[26] = stateFromStoresArray;
                  cResult[27] = fn4;
                  tmp23 = fn4;
                }
              }
              let isNew2 = _prompt.isNew;
              if (isNew2) {
                const obj7 = {
                  color: tmp(isNew[23]).BadgeColors.BRAND,
                  text: intl.string(tmp(isNew[22]).t.y2b7CA),
                  style: null,
                  textStyle: null,
                };
                const TextBadge = tmp(tmp2[23]).TextBadge;
                intl = tmp(tmp2[22]).intl;
                ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp4);
                isNew2 = closure_16(TextBadge, obj7);
              }
              cResult[11] = _prompt.isNew;
              cResult[12] = tmp4.badge;
              cResult[13] = tmp4.badgeText;
              cResult[14] = isNew2;
              tmp16 = isNew2;
            }
            const items2 = [tmp4.promptContainer, animatedStyle];
            cResult[8] = animatedStyle;
            cResult[9] = tmp4.promptContainer;
            cResult[10] = items2;
            tmp15 = items2;
          }
        }
        const fn2 = function h(arg0, arg1) {
          let flag = arg1;
          const required = !arg1 && _prompt.required && 1 === stateFromStoresArray.length;
          if (!required) {
            if (flag == null) {
              flag = false;
            }
            handleSelectOption(_prompt, arg0, flag);
          }
        };
        cResult[4] = handleSelectOption;
        cResult[5] = _prompt;
        cResult[6] = stateFromStoresArray;
        cResult[7] = fn2;
        tmp10 = fn2;
      }
      const fn = function o() {
        return GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id);
      };
      cResult[1] = guildId;
      cResult[2] = _prompt.id;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : (guildId) => {
      let intl;
      let items1;
      let items2;
      guildId = guildId.guildId;
      const _prompt = guildId.prompt;
      let tmp = closure_19();
      const isNew = _prompt.isNew;
      let tmp3 = isNew;
      let obj = guildId(isNew[19]);
      const items = [GuildOnboardingPromptsStore];
      const stateFromStoresArray = obj.useStateFromStoresArray(items, () =>
        GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id),
      );
      const handleSelectOption = _prompt(isNew[40])(guildId).handleSelectOption;
      let obj2 = guildId(isNew[37]);
      const token = obj2.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
      let obj3 = guildId(isNew[38]);
      const fn = function u() {
        let Easing;
        let Easing2;
        let combined;
        let combined1;
        let obj3;
        let tmp3;
        let withDelay;
        let withSequence;
        let withTiming2;
        let withTimingResult;
        if (isNew) {
          combined = concat(token, "FF");
          tmp3 = token;
        } else {
          combined = concat(token, "00");
          tmp3 = token;
        }
        const obj = { borderColor: withSequence(withTimingResult, withDelay(500, withTiming2(combined1, obj3))) };
        withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const obj2 = { duration: 1, easing: Easing.in(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        withTimingResult = withTiming(combined, obj2);
        withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        withTiming2 = timing.withTiming;
        obj3 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
        timing;
        combined1 = "" + tmp3 + "00";
        Easing2 = ReanimatedRexport.Easing;
        return obj;
      };
      fn.__closure = {
        isNew,
        brandColor: token,
        withSequence: guildId(isNew[38]).withSequence,
        withTiming: guildId(isNew[39]).withTiming,
        Easing: guildId(isNew[38]).Easing,
        withDelay: guildId(isNew[38]).withDelay,
      };
      fn.__workletHash = 2571550962849;
      fn.__initData = __initData3;
      ({
        isNew,
        brandColor: token,
        withSequence: guildId(isNew[38]).withSequence,
        withTiming: guildId(isNew[39]).withTiming,
        Easing: guildId(isNew[38]).Easing,
        withDelay: guildId(isNew[38]).withDelay,
      });
      const animatedStyle = obj3.useAnimatedStyle(fn);
      const obj5 = { style: items1, children: items2 };
      items1 = [tmp.promptContainer, animatedStyle];
      let isNew2 = _prompt.isNew;
      const View = _prompt(isNew[38]).View;
      if (isNew2) {
        const obj9 = {
          color: guildId(tmp3[23]).BadgeColors.BRAND,
          text: intl.string(guildId(tmp3[22]).t.y2b7CA),
          style: null,
          textStyle: null,
        };
        const TextBadge = tmp2(tmp3[23]).TextBadge;
        intl = tmp2(tmp3[22]).intl;
        ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
        isNew2 = closure_16(TextBadge, obj9);
      }
      items2 = [isNew2, closure_16(closure_21, { item: _prompt }), ,];
      const options = _prompt.options;
      items2[2] = options.map((option) => {
        guildId = option;
        const obj = {
          guildId,
          option,
          selected: stateFromStoresArray.includes(option.id),
          onSelect(arg0) {
            let flag = arg0;
            const required = !arg0 && _prompt.required && 1 === stateFromStoresArray.length;
            if (!required) {
              if (flag == null) {
                flag = false;
              }
              handleSelectOption(_prompt, option, flag);
            }
          },
          suppressMemberCount: true,
          canBeNew: !_prompt.isNew,
        };
        const tmp = _prompt(isNew[46]);
        return closure_1_16(tmp, obj, option.id);
      });
      items2[3] = closure_16(closure_22, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
      return closure_17(View, obj5);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding/native/CustomizeCommunity.tsx");

export default tmp8;
