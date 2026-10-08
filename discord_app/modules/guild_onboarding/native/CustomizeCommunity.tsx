// discord_app/modules/guild_onboarding/native/CustomizeCommunity.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import GuildOnboardingPromptsActionCreators from "../GuildOnboardingPromptsActionCreators.tsx";
import GuildOnboardingUtils from "../GuildOnboardingUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import ConnectionCardDefault from "ConnectionCard.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import GuildOnboardingPromptsStore from "../GuildOnboardingPromptsStore.tsx";
import TextStyles from "../../rebrand/native/TextStyles.tsx";

require = fn;
function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  const tmp = closure_19();
  const isNew = _prompt.isNew;
  const items = [GuildOnboardingPromptsStore];
  const stateFromStoresArray = guildId(isNew[19]).useStateFromStoresArray(items, () =>
    GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id),
  );
  const mapped = stateFromStoresArray.map((item) => {
    closure_0 = item;
    options = _prompt.options;
    return options.find((id) => id.id === closure_0);
  });
  const found = mapped.filter(guildId(isNew[36]).isNotNullish);
  let obj = guildId(isNew[19]);
  const token = guildId(isNew[37]).useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  let obj2 = guildId(isNew[37]);
  let tmp4 = _prompt;
  const fn = function c() {
    if (isNew) {
      let combined = concat(token, "FF");
      let tmp3 = token;
    } else {
      combined = concat(token, "00");
      tmp3 = token;
    }
    const obj = { borderColor: null };
    const obj2 = ReanimatedRexport;
    const obj4 = { duration: 1, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj4.easing = Easing.in(ReanimatedRexport.Easing.ease);
    const withTimingResult = timing.withTiming(combined, obj4);
    const obj5 = ReanimatedRexport;
    const obj7 = { duration: 300, easing: null };
    const combined1 = "" + tmp3 + "00";
    const Easing2 = ReanimatedRexport.Easing;
    obj7.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj.borderColor = obj2.withSequence(withTimingResult, obj5.withDelay(500, timing.withTiming(combined1, obj7)));
    return obj;
  };
  let obj3 = guildId(isNew[38]);
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
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const handleSelectOption = _prompt(isNew[40])(guildId).handleSelectOption;
  const items1 = [guildId, _prompt, handleSelectOption, stateFromStoresArray.length];
  const callback = stateFromStoresArray.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(6814, dependencyMap.paths), "DropdownOptions", {
      guildId,
      promptId: _prompt.id,
      onSelect: function handleOptionSelected(arg0, arg1) {
        let flag = arg1;
        required = !arg1;
        if (!arg1) {
          required = required.required;
        }
        if (required) {
          required = 1 === length.length;
        }
        if (!required) {
          if (flag == null) {
            flag = false;
          }
          handleSelectOption(required, arg0, flag);
        }
      },
      canBeNew: !_prompt.isNew,
      returnToCustomize: true,
    });
  }, items1);
  let obj5 = { style: null, children: null };
  const items2 = [tmp.promptContainer, animatedStyle];
  obj5.style = items2;
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    let obj7 = { color: tmp2(tmp3[23]).BadgeColors.BRAND, text: null, style: null, textStyle: null };
    const intl = tmp2(tmp3[22]).intl;
    obj7.text = intl.string(tmp2(tmp3[22]).t.y2b7CA);
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = closure_16(tmp2(tmp3[23]).TextBadge, obj7);
  }
  const items3 = [isNew2, closure_16(closure_21, { item: _prompt }), ,];
  const obj8 = { style: tmp.dropdownContainer, onPress: callback, children: null };
  let tmp10Result = 0 === found.length;
  if (tmp10Result) {
    const obj9 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = tmp2(tmp3[22]).intl;
    obj9.children = intl2.string(tmp2(tmp3[22]).t.GmSvdA);
    tmp10Result = closure_16(tmp2(tmp3[24]).Text, obj9);
  }
  const items4 = [tmp10Result, found.map((option) => closure_1_16(closure_1_24, { option }, option.id))];
  const obj10 = { style: tmp.dropdownIconContainer, children: null };
  let obj4 = {
    isNew,
    brandColor: token,
    withSequence: guildId(isNew[38]).withSequence,
    withTiming: guildId(isNew[39]).withTiming,
    Easing: guildId(isNew[38]).Easing,
    withDelay: guildId(isNew[38]).withDelay,
  };
  obj10.children = closure_16(handleSelectOption, { style: tmp.dropdownIcon, source: tmp4(isNew[45]) });
  items4[2] = closure_16(token, obj10);
  obj8.children = items4;
  items3[2] = closure_17(guildId(isNew[44]).PressableHighlight, obj8);
  items3[3] = closure_16(closure_22, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj5.children = items3;
  return closure_17(_prompt(isNew[38]).View, obj5);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildOnboardingPromptsConstants = fn(6779);
({ GuildOnboardingTab: closure_12, OnboardingPromptType: map1 } = GuildOnboardingPromptsConstants);
const EMOJI_URL_BASE_SIZE = fn(1392).EMOJI_URL_BASE_SIZE;
const ReadStateTypes = fn(5972).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { paddingHorizontal: nativeDefault.space.PX_16 },
  sheetTitle: null,
  promptContainer: null,
  titleContainer: null,
  badge: null,
  badgeText: null,
  dropdownContainer: null,
  emptyDropdownText: null,
  dropdownPill: null,
  emojiContainer: null,
  dropdownIconContainer: null,
  dropdownIcon: null,
  optionTextEmoji: null,
  optionImageEmoji: null,
  helpText: null,
  sectionSeparator: null,
  emptyContainer: null,
  emptyContainerImage: null,
  emptyContainerHeader: null,
  connectionsContainer: null,
  connectionsPromptContainer: null,
  connectionsTitle: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.sheetTitle = { marginTop: nativeDefault.space.PX_16 };
let obj4 = { marginTop: nativeDefault.space.PX_16 };
obj2.promptContainer = {
  position: "relative",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
  borderStyle: "solid",
};
let obj5 = {
  position: "relative",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
  borderStyle: "solid",
};
obj2.titleContainer = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.badge = { position: "absolute", top: -6, right: -6 };
obj2.badgeText = { fontWeight: "bold" };
let obj6 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.dropdownContainer = {
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
let obj7 = {
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
obj2.emptyDropdownText = { marginVertical: nativeDefault.space.PX_12, marginLeft: nativeDefault.space.PX_4 };
let obj8 = { marginVertical: nativeDefault.space.PX_12, marginLeft: nativeDefault.space.PX_4 };
obj2.dropdownPill = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: 6,
  marginRight: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
obj2.emojiContainer = { display: "flex", alignItems: "center" };
const rect = { position: "absolute", right: nativeDefault.space.PX_4, top: nativeDefault.space.PX_12 };
obj2.dropdownIconContainer = rect;
obj2.dropdownIcon = { height: 32, width: 32 };
obj2.optionTextEmoji = { fontSize: 18, lineHeight: 22, marginRight: 6 };
obj2.optionImageEmoji = { height: 22, width: 22, marginRight: 6 };
let obj9 = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: 6,
  marginRight: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
obj2.helpText = { marginTop: nativeDefault.space.PX_4 };
let obj10 = { marginTop: nativeDefault.space.PX_4 };
obj2.sectionSeparator = {
  marginTop: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.emptyContainer = { height: 400, display: "flex", alignItems: "center", justifyContent: "center" };
let size = { width: 120, height: 80, marginBottom: nativeDefault.space.PX_16 };
obj2.emptyContainerImage = size;
let obj12 = {};
const merged = Object.assign(
  TextStyles(fn(1085).Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18),
);
obj12.marginBottom = nativeDefault.space.PX_4;
obj2.emptyContainerHeader = obj12;
let obj11 = {
  marginTop: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.connectionsContainer = { marginTop: nativeDefault.space.PX_12 };
let obj13 = { marginTop: nativeDefault.space.PX_12 };
obj2.connectionsPromptContainer = { marginTop: nativeDefault.space.PX_12 };
let obj14 = { marginTop: nativeDefault.space.PX_12 };
obj2.connectionsTitle = { marginBottom: nativeDefault.space.PX_4 };
let closure_19 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyCustomizeCommunity(setTab) {
      const cResult = setTab(576).c(20);
      setTab = setTab.setTab;
      const tmp4 = closure_19();
      const obj = setTab(576);
      const obj2 = setTab(4785);
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
      const isThemeDarkResult = setTab(4785).isThemeDark(stateFromStores(4991)());
      stateFromStores = setTab(504).useStateFromStores(tmp7, tmp8);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === setTab) {
          let tmp11 = cResult[4];
        }
        const tmp5Result = tmp5(isThemeDarkResult ? 11298 : 11299);
        if (cResult[5] === tmp4.emptyContainerImage) {
          if (cResult[6] === tmp5Result) {
            let tmp13 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.leKHQz);
            cResult[8] = stringResult;
            let tmp17 = stringResult;
          } else {
            tmp17 = cResult[8];
          }
          if (cResult[9] !== tmp4.emptyContainerHeader) {
            const obj3 = { style: tmp4.emptyContainerHeader, children: tmp17 };
            const tmp21 = closure_16(tmp(1200).LegacyText, obj3);
            cResult[9] = tmp4.emptyContainerHeader;
            cResult[10] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[10];
          }
          if (cResult[11] !== tmp11) {
            const intl2 = tmp(1126).intl;
            const obj4 = { onBrowseChannels: tmp11 };
            const formatResult = intl2.format(tmp(1126).t["jH+ktB"], obj4);
            cResult[11] = tmp11;
            cResult[12] = formatResult;
            let tmp22 = formatResult;
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] !== tmp22) {
            const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: tmp22 };
            const tmp26 = closure_16(tmp(5086).Text, obj5);
            cResult[13] = tmp22;
            cResult[14] = tmp26;
            let tmp24 = tmp26;
          } else {
            tmp24 = cResult[14];
          }
          if (cResult[15] === tmp4.emptyContainer) {
            if (cResult[16] === tmp24) {
              if (cResult[17] === tmp13) {
                if (cResult[18] === tmp19) {
                  let tmp27 = cResult[19];
                }
                return tmp27;
              }
            }
          }
          const obj6 = { style: tmp4.emptyContainer, children: null };
          const items1 = [tmp13, tmp19, tmp24];
          obj6.children = items1;
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
      function onBrowseChannels() {
        if (null != stateFromStores) {
          setTab(constants.BROWSE);
        }
      }
      cResult[2] = stateFromStores;
      cResult[3] = setTab;
      cResult[4] = onBrowseChannels;
      tmp11 = onBrowseChannels;
      const tmpResult = setTab(504);
    }
  : function EmptyCustomizeCommunity(setTab) {
      setTab = setTab.setTab;
      importDefault = undefined;
      const tmp = closure_19();
      const obj = setTab(4785);
      const tmp4 = importDefault;
      const isThemeDarkResult = setTab(4785).isThemeDark(useThemeDefault());
      const items = [SelectedGuildStore];
      importDefault = setTab(504).useStateFromStores(items, () => guildId.getGuildId());
      const obj3 = { style: tmp.emptyContainer, children: null };
      const obj2 = setTab(504);
      const items1 = [
        closure_16(closure_5, { style: tmp.emptyContainerImage, source: tmp4(isThemeDarkResult ? 11298 : 11299) }),
        ,
      ];
      const obj5 = { style: tmp.emptyContainerHeader, children: null };
      const intl = tmp2(1126).intl;
      obj5.children = intl.string(setTab(1126).t.leKHQz);
      items1[1] = closure_16(setTab(1200).LegacyText, obj5);
      const obj6 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      const intl2 = tmp2(1126).intl;
      obj6.children = intl2.format(setTab(1126).t["jH+ktB"], {
        onBrowseChannels() {
          if (null != closure_1) {
            setTab(constants.BROWSE);
          }
        },
      });
      items1[2] = closure_16(setTab(5086).Text, obj6);
      obj3.children = items1;
      return closure_17(closure_4, obj3);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PromptTitle(item) {
      const cResult = c.c(8);
      item = item.item;
      const tmp4 = closure_19();
      if (cResult[0] !== item.required) {
        let tmp6 = null;
        if (item.required) {
          const obj2 = { variant: "text-md/bold", color: "text-feedback-critical", children: [" ", "*"] };
          tmp6 = constants(Text_Text.Text, obj2);
        }
        cResult[0] = item.required;
        cResult[1] = tmp6;
        let tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === item.title) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4.titleContainer) {
          if (cResult[6] === tmp8) {
            let tmp10 = cResult[7];
          }
          return tmp10;
        }
        const obj3 = { style: tmp4.titleContainer, children: tmp8 };
        const tmp13 = value2(React4, obj3);
        cResult[5] = tmp4.titleContainer;
        cResult[6] = tmp8;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const items = [item.title, tmp5];
      obj4.children = items;
      const tmp9 = constants(Text_Text.Heading, obj4);
      cResult[2] = item.title;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : function PromptTitle(item) {
      item = item.item;
      const obj = { style: closure_19().titleContainer, children: null };
      const items = [item.title];
      let tmp3Result = null;
      if (item.required) {
        const obj2 = { variant: "text-md/bold", color: "text-feedback-critical", children: [" ", "*"] };
        tmp3Result = constants(Text_Text.Text, obj2);
      }
      items[1] = tmp3Result;
      obj.children = constants(Text_Text.Heading, {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: items,
      });
      return value2(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PromptHelpText(guildId) {
      const cResult = guildId(576).c(20);
      guildId = guildId.guildId;
      ({ prompt: _prompt, selectedOptionIds } = guildId);
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function o() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
      options = undefined;
      if (_prompt != null) {
        options = _prompt.options;
      }
      if (cResult[3] === options) {
        if (cResult[4] === selectedOptionIds) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] !== tmp10) {
          if (null != tmp10) {
            let selectedRoleIds = tmp(6784).getSelectedRoleIds(tmp10);
            const tmpResult3 = tmp(6784);
          } else {
            const _Set = Set;
            selectedRoleIds = new Set();
          }
          cResult[6] = tmp10;
          cResult[7] = selectedRoleIds;
        } else if (cResult[8] !== tmp10) {
          if (null != tmp10) {
            let selectedChannelIds = tmp(6784).getSelectedChannelIds(tmp10);
            const tmpResult4 = tmp(6784);
          } else {
            const _Set2 = Set;
            selectedChannelIds = new Set();
          }
          cResult[8] = tmp10;
          cResult[9] = selectedChannelIds;
        } else {
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            function formattedNameHighlight(children, arg1) {
              return closure_1_16(
                guildId(dependencyMap[24]).Text,
                { variant: "text-xs/medium", color: "mobile-text-heading-primary", children },
                arg1,
              );
            }
            cResult[10] = formattedNameHighlight;
            let tmp23 = formattedNameHighlight;
          } else {
            tmp23 = cResult[10];
          }
          if (cResult[11] === stateFromStores) {
            if (cResult[12] === _prompt) {
              if (cResult[13] === tmp18) {
                if (cResult[14] === tmp13) {
                  let tmp24 = cResult[15];
                }
                ({ helpText, helpTextAdditional } = selectedOptionIds(6804)(tmp24));
                if (cResult[16] === helpText) {
                  if (cResult[17] === helpTextAdditional) {
                    if (cResult[18] === tmp4) {
                      let tmp27 = cResult[19];
                    }
                    return tmp27;
                  }
                }
                if ("" !== helpText) {
                  const obj2 = {
                    style: tmp4.helpText,
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: null,
                  };
                  const items1 = [helpText, " ", helpTextAdditional];
                  obj2.children = items1;
                  let tmp28 = closure_17(tmp(5086).Text, obj2);
                } else {
                  tmp28 = null;
                }
                cResult[16] = helpText;
                cResult[17] = helpTextAdditional;
                cResult[18] = tmp4;
                cResult[19] = tmp28;
                tmp27 = tmp28;
                const tmp26 = selectedOptionIds(6804)(tmp24);
              }
            }
          }
          const obj3 = {
            guild: stateFromStores,
            prompt: _prompt,
            selectedRoleIds: tmp13,
            selectedChannelIds: cResult[9],
            itemHook: tmp23,
          };
          cResult[11] = stateFromStores;
          cResult[12] = _prompt;
          cResult[13] = cResult[9];
          cResult[14] = tmp13;
          cResult[15] = obj3;
          tmp24 = obj3;
        }
      }
      let found;
      if (_prompt != null) {
        const options1 = _prompt.options;
        if (options1 != null) {
          found = options1.filter((id) => selectedOptionIds.includes(id.id));
        }
      }
      let options2;
      if (_prompt != null) {
        options2 = _prompt.options;
      }
      cResult[3] = options2;
      cResult[4] = selectedOptionIds;
      cResult[5] = found;
      tmp10 = found;
      const tmpResult = guildId(504);
    }
  : function PromptHelpText(arg0) {
      ({ guildId: require, prompt: _prompt, selectedOptionIds: importDefault } = arg0);
      const tmp = closure_19();
      const items = [GuildStore];
      let found;
      const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(_require));
      if (_prompt != null) {
        options = _prompt.options;
        if (options != null) {
          found = options.filter((id) => importDefault.includes(id.id));
        }
      }
      const items1 = [found];
      const items2 = [found];
      const memo = noop.useMemo(() => {
        if (null != found) {
          let selectedRoleIds = GuildOnboardingUtils.getSelectedRoleIds(tmp);
        } else {
          const _Set = Set;
          selectedRoleIds = new Set();
        }
        return selectedRoleIds;
      }, items1);
      const memo1 = noop.useMemo(() => {
        if (null != found) {
          let selectedChannelIds = GuildOnboardingUtils.getSelectedChannelIds(tmp);
        } else {
          const _Set = Set;
          selectedChannelIds = new Set();
        }
        return selectedChannelIds;
      }, items2);
      let obj = require("initialize");
      const obj2 = {
        guild: stateFromStores,
        prompt: _prompt,
        selectedRoleIds: memo,
        selectedChannelIds: memo1,
        itemHook: function formattedNameHighlight(children, arg1) {
          return closure_1_16(
            require("Text/Text").Text,
            { variant: "text-xs/medium", color: "mobile-text-heading-primary", children },
            arg1,
          );
        },
      };
      ({ helpText, helpTextAdditional } = require("usePromptHelpText")({
        guild: stateFromStores,
        prompt: _prompt,
        selectedRoleIds: memo,
        selectedChannelIds: memo1,
        itemHook: function formattedNameHighlight(children, arg1) {
          return closure_1_16(
            require("Text/Text").Text,
            { variant: "text-xs/medium", color: "mobile-text-heading-primary", children },
            arg1,
          );
        },
      }));
      if ("" !== helpText) {
        const obj3 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: null };
        const items3 = [helpText, " ", helpTextAdditional];
        obj3.children = items3;
        let tmp9 = closure_17(require("Text/Text").Text, obj3);
      } else {
        tmp9 = null;
      }
      return tmp9;
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectionsPrompt(guildId) {
      const cResult = guildId(576).c(19);
      guildId = guildId.guildId;
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingPromptsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function l() {
          return GuildOnboardingPromptsStore.getConnections(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
      if (0 === stateFromStores.length) {
        return null;
      } else {
        const _Symbol2 = Symbol;
        ({ connectionsPromptContainer, connectionsTitle } = tmp4);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.eDVMrA);
          cResult[3] = stringResult;
          let tmp8 = stringResult;
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
          const tmp12 = closure_16(tmp(5086).Text, obj2);
          cResult[4] = tmp4.connectionsTitle;
          cResult[5] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const intl2 = tmp(1126).intl;
          obj3.children = intl2.string(tmp(1126).t.BozOXu);
          const tmp15 = closure_16(tmp(5086).Text, obj3);
          cResult[6] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === guildId) {
          if (cResult[8] === stateFromStores) {
            if (cResult[12] === tmp4.connectionsContainer) {
              if (cResult[13] === tmp17) {
                let tmp21 = cResult[14];
              }
              if (cResult[15] === tmp4.connectionsPromptContainer) {
                if (cResult[16] === tmp21) {
                  if (cResult[17] === tmp10) {
                    let tmp25 = cResult[18];
                  }
                  return tmp25;
                }
              }
              const obj4 = { style: connectionsPromptContainer, children: null };
              const items1 = [tmp10, tmp13, tmp21];
              obj4.children = items1;
              const tmp28 = closure_17(closure_4, obj4);
              cResult[15] = tmp4.connectionsPromptContainer;
              cResult[16] = tmp21;
              cResult[17] = tmp10;
              cResult[18] = tmp28;
              tmp25 = tmp28;
            }
            const obj5 = { style: tmp16, children: cResult[9] };
            const tmp24 = closure_16(closure_4, obj5);
            cResult[12] = tmp4.connectionsContainer;
            cResult[13] = cResult[9];
            cResult[14] = tmp24;
            tmp21 = tmp24;
          }
        }
        if (cResult[10] !== guildId) {
          class S {
            constructor(arg0, arg1) {
              obj = { connection: guildId, guildId, location: null };
              tmp = closure_1(closure_2[27]);
              obj.location = closure_1(closure_2[28]).CHANNELS_AND_ROLES;
              return jsx(tmp, obj, arg1);
            }
          }
          cResult[10] = guildId;
          cResult[11] = S;
        } else {
          class S {
            constructor(arg0, arg1) {
              obj = { connection: guildId, guildId, location: null };
              tmp = closure_1(closure_2[27]);
              obj.location = closure_1(closure_2[28]).CHANNELS_AND_ROLES;
              return jsx(tmp, obj, arg1);
            }
          }
        }
        const mapped = stateFromStores.map(S);
        cResult[7] = guildId;
        cResult[8] = stateFromStores;
        cResult[9] = mapped;
      }
      const tmpResult = guildId(504);
    }
  : function ConnectionsPrompt(guildId) {
      guildId = guildId.guildId;
      const tmp = closure_19();
      const items = [GuildOnboardingPromptsStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () =>
        GuildOnboardingPromptsStore.getConnections(guildId),
      );
      let tmp4 = null;
      if (0 !== stateFromStores.length) {
        const obj2 = { style: tmp.connectionsPromptContainer, children: null };
        const obj3 = {
          style: tmp.connectionsTitle,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = tmp2(1126).intl;
        obj3.children = intl.string(tmp2(1126).t.eDVMrA);
        const items1 = [closure_16(tmp2(5086).Text, obj3), ,];
        const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = tmp2(1126).intl;
        obj4.children = intl2.string(tmp2(1126).t.BozOXu);
        items1[1] = closure_16(tmp2(5086).Text, obj4);
        const obj5 = {
          style: tmp.connectionsContainer,
          children: stateFromStores.map((connection, index) => {
            const obj = { connection, guildId, location: AnalyticsLocationDefault.CHANNELS_AND_ROLES };
            return value2(ConnectionCardDefault, obj, index);
          }),
        };
        items1[2] = closure_16(closure_4, obj5);
        obj2.children = items1;
        tmp4 = closure_17(closure_4, obj2);
      }
      return tmp4;
    };
fn(558);
let obj15 = { marginBottom: nativeDefault.space.PX_4 };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DropdownOption(option) {
      const cResult = option(576).c(16);
      option = option.option;
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      let emoji = option.emoji;
      let id;
      if (emoji != null) {
        id = emoji.id;
      }
      if (cResult[1] !== id) {
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
            if (emoji2 != null) {
              id1 = emoji2.id;
            }
            usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
          }
          return usableCustomEmojiById;
        };
        cResult[1] = id1;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const obj = option(576);
      const stateFromStores = option(504).useStateFromStores(first, tmp8);
      const emoji3 = option.emoji;
      let id2;
      if (emoji3 != null) {
        id2 = emoji3.id;
      }
      let tmp12 = null != id2;
      if (!tmp12) {
        const emoji4 = option.emoji;
        let name;
        if (emoji4 != null) {
          name = emoji4.name;
        }
        tmp12 = null != name;
      }
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === tmp12) {
          const emoji5 = option.emoji;
          let name1;
          if (emoji5 != null) {
            name1 = emoji5.name;
          }
          if (cResult[5] === name1) {
            if (cResult[6] === tmp4.emojiContainer) {
              if (cResult[7] === tmp4.optionImageEmoji) {
                if (cResult[8] === tmp4.optionTextEmoji) {
                  let tmp15 = cResult[9];
                }
                if (cResult[10] !== option.title) {
                  const obj2 = { variant: "text-md/semibold", children: option.title };
                  const tmp26 = closure_16(tmp(5086).Text, obj2);
                  cResult[10] = option.title;
                  cResult[11] = tmp26;
                  let tmp24 = tmp26;
                } else {
                  tmp24 = cResult[11];
                }
                if (cResult[12] === tmp4.dropdownPill) {
                  if (cResult[13] === tmp15) {
                    if (cResult[14] === tmp24) {
                      let tmp27 = cResult[15];
                    }
                    return tmp27;
                  }
                }
                const obj3 = { style: tmp4.dropdownPill, children: null };
                const items1 = [tmp15, tmp24];
                obj3.children = items1;
                const tmp30 = closure_17(closure_4, obj3);
                cResult[12] = tmp4.dropdownPill;
                cResult[13] = tmp15;
                cResult[14] = tmp24;
                cResult[15] = tmp30;
                tmp27 = tmp30;
              }
            }
          }
        }
      }
      let tmp17Result = tmp12;
      if (tmp12) {
        const obj5 = { style: tmp4.emojiContainer, children: null };
        const obj7 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp4);
        let emojiURL;
        if (null != stateFromStores) {
          const obj8 = { id: null, animated: null, size: null };
          ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
          obj8.size = EMOJI_URL_BASE_SIZE;
          emojiURL = AvatarUtilsDefault.getEmojiURL(obj8);
          const tmp19Result = AvatarUtilsDefault;
        }
        obj7.src = emojiURL;
        const emoji6 = option.emoji;
        let str;
        if (emoji6 != null) {
          str = emoji6.name;
        }
        if (str == null) {
          str = "";
        }
        obj7.name = str;
        obj5.children = closure_16(EmojiDefault, obj7);
        tmp17Result = closure_16(closure_4, obj5);
      }
      cResult[3] = stateFromStores;
      cResult[4] = tmp12;
      const emoji7 = option.emoji;
      let name2;
      if (emoji7 != null) {
        name2 = emoji7.name;
      }
      cResult[5] = name2;
      cResult[6] = tmp4.emojiContainer;
      cResult[7] = tmp4.optionImageEmoji;
      cResult[8] = tmp4.optionTextEmoji;
      cResult[9] = tmp17Result;
      tmp15 = tmp17Result;
      const tmpResult = option(504);
    }
  : function DropdownOption(option) {
      option = option.option;
      const tmp = closure_19();
      const items = [EmojiStore];
      const stateFromStores = option(504).useStateFromStores(items, () => {
        const emoji = option.emoji;
        let id;
        if (emoji != null) {
          id = emoji.id;
        }
        let usableCustomEmojiById = null;
        if (null != id) {
          const emoji2 = option.emoji;
          let id1;
          if (emoji2 != null) {
            id1 = emoji2.id;
          }
          usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
        }
        return usableCustomEmojiById;
      });
      let emoji = option.emoji;
      let id;
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
      const obj2 = { style: tmp.dropdownPill, children: null };
      if (tmp10Result) {
        const obj3 = { style: tmp.emojiContainer, children: null };
        const obj5 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp);
        let emojiURL;
        if (null != stateFromStores) {
          const obj7 = { id: null, animated: null, size: null };
          ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
          obj7.size = EMOJI_URL_BASE_SIZE;
          emojiURL = AvatarUtilsDefault.getEmojiURL(obj7);
          const tmp11Result = AvatarUtilsDefault;
        }
        obj5.src = emojiURL;
        const emoji3 = option.emoji;
        let str;
        if (emoji3 != null) {
          str = emoji3.name;
        }
        if (str == null) {
          str = "";
        }
        obj5.name = str;
        obj3.children = closure_16(EmojiDefault, obj5);
        tmp10Result = closure_16(closure_4, obj3);
      }
      const items1 = [
        tmp10Result,
        closure_16(option(5086).Text, { variant: "text-md/semibold", children: option.title }),
      ];
      obj2.children = items1;
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
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MultipleChoicePrompt(guildId) {
      const cResult = guildId(isNew[16]).c(38);
      guildId = guildId.guildId;
      const _prompt = guildId.prompt;
      const tmp4 = closure_19();
      isNew = _prompt.isNew;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingPromptsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === _prompt.id) {
          let tmp7 = cResult[3];
        }
        const stateFromStoresArray = tmp(tmp2[19]).useStateFromStoresArray(first, tmp7);
        const handleSelectOption = _prompt(tmp2[40])(guildId).handleSelectOption;
        if (cResult[4] === handleSelectOption) {
          if (cResult[5] === _prompt) {
            if (cResult[6] === stateFromStoresArray) {
              options = cResult[7];
            }
            const token = tmp(tmp2[37]).useToken(tmp9(tmp2[13]).colors.BACKGROUND_BRAND);
            const tmpResult3 = tmp(tmp2[37]);
            const fn2 = function b() {
              if (isNew) {
                let combined = concat(token, "FF");
                let tmp3 = token;
              } else {
                combined = concat(token, "00");
                tmp3 = token;
              }
              const obj = { borderColor: null };
              const obj2 = ReanimatedRexport;
              const obj4 = { duration: 1, easing: null };
              const Easing = ReanimatedRexport.Easing;
              obj4.easing = Easing.in(ReanimatedRexport.Easing.ease);
              const withTimingResult = timing.withTiming(combined, obj4);
              const obj5 = ReanimatedRexport;
              const obj7 = { duration: 300, easing: null };
              const combined1 = "" + tmp3 + "00";
              const Easing2 = ReanimatedRexport.Easing;
              obj7.easing = Easing2.out(ReanimatedRexport.Easing.ease);
              obj.borderColor = obj2.withSequence(
                withTimingResult,
                obj5.withDelay(500, timing.withTiming(combined1, obj7)),
              );
              return obj;
            };
            let obj2 = {
              isNew,
              brandColor: token,
              withSequence: tmp(tmp2[38]).withSequence,
              withTiming: tmp(tmp2[39]).withTiming,
              Easing: tmp(tmp2[38]).Easing,
              withDelay: tmp(tmp2[38]).withDelay,
            };
            fn2.__closure = obj2;
            fn2.__workletHash = 12802766002208;
            fn2.__initData = __initData2;
            const animatedStyle = tmp(tmp2[38]).useAnimatedStyle(fn2);
            if (cResult[8] === animatedStyle) {
              if (cResult[9] === tmp4.promptContainer) {
                let tmp13 = cResult[10];
              }
              if (cResult[11] === _prompt.isNew) {
                if (cResult[12] === tmp4.badge) {
                  if (cResult[13] === tmp4.badgeText) {
                    let tmp14 = cResult[14];
                  }
                  if (cResult[15] !== _prompt) {
                    let obj3 = { item: _prompt };
                    const tmp19 = closure_16(closure_21, obj3);
                    cResult[15] = _prompt;
                    cResult[16] = tmp19;
                    let tmp16 = tmp19;
                  } else {
                    tmp16 = cResult[16];
                  }
                  if (cResult[17] === guildId) {
                    if (cResult[18] === options) {
                      if (cResult[19] === _prompt.isNew) {
                        if (cResult[20] === _prompt.options) {
                          if (cResult[21] === stateFromStoresArray) {
                            if (cResult[28] === guildId) {
                              if (cResult[29] === _prompt) {
                                if (cResult[30] === stateFromStoresArray) {
                                  let tmp24 = cResult[31];
                                }
                                if (cResult[32] === tmp13) {
                                  if (cResult[33] === tmp14) {
                                    if (cResult[34] === tmp16) {
                                      if (cResult[35] === tmp20) {
                                        if (cResult[36] === tmp24) {
                                          let tmp28 = cResult[37];
                                        }
                                        return tmp28;
                                      }
                                    }
                                  }
                                }
                                let obj4 = { style: tmp13, children: null };
                                const items1 = [tmp14, tmp16, tmp20, tmp24];
                                obj4.children = items1;
                                const tmp30 = closure_17(tmp9(tmp2[38]).View, obj4);
                                cResult[32] = tmp13;
                                cResult[33] = tmp14;
                                cResult[34] = tmp16;
                                cResult[35] = tmp20;
                                cResult[36] = tmp24;
                                cResult[37] = tmp30;
                                tmp28 = tmp30;
                              }
                            }
                            let obj5 = { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray };
                            const tmp27 = closure_16(closure_22, obj5);
                            cResult[28] = guildId;
                            cResult[29] = _prompt;
                            cResult[30] = stateFromStoresArray;
                            cResult[31] = tmp27;
                            tmp24 = tmp27;
                          }
                        }
                      }
                    }
                  }
                  if (cResult[23] === guildId) {
                    if (cResult[24] === options) {
                      if (cResult[25] === _prompt.isNew) {
                        if (cResult[26] === stateFromStoresArray) {
                          let tmp21 = cResult[27];
                        }
                        const options1 = _prompt.options;
                        const mapped = options1.map(tmp21);
                        cResult[17] = guildId;
                        cResult[18] = options;
                        ({ isNew: tmp3[19], options } = _prompt);
                        cResult[20] = options;
                        cResult[21] = stateFromStoresArray;
                        cResult[22] = mapped;
                      }
                    }
                  }
                  const fn3 = function f(option) {
                    guildId = option;
                    const obj = {
                      guildId,
                      option,
                      selected: stateFromStoresArray.includes(option.id),
                      onSelect(arg0) {
                        return options(closure_0, arg0);
                      },
                      suppressMemberCount: true,
                      canBeNew: !_prompt.isNew,
                    };
                    return closure_1_16(_prompt(isNew[46]), obj, option.id);
                  };
                  cResult[23] = guildId;
                  cResult[24] = options;
                  cResult[25] = _prompt.isNew;
                  cResult[26] = stateFromStoresArray;
                  cResult[27] = fn3;
                  tmp21 = fn3;
                }
              }
              let isNew2 = _prompt.isNew;
              if (isNew2) {
                let obj7 = { color: tmp(tmp2[23]).BadgeColors.BRAND, text: null, style: null, textStyle: null };
                const intl = tmp(tmp2[22]).intl;
                obj7.text = intl.string(tmp(tmp2[22]).t.y2b7CA);
                ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp4);
                isNew2 = closure_16(tmp(tmp2[23]).TextBadge, obj7);
              }
              cResult[11] = _prompt.isNew;
              cResult[12] = tmp4.badge;
              cResult[13] = tmp4.badgeText;
              cResult[14] = isNew2;
              tmp14 = isNew2;
            }
            const items2 = [tmp4.promptContainer, animatedStyle];
            cResult[8] = animatedStyle;
            cResult[9] = tmp4.promptContainer;
            cResult[10] = items2;
            tmp13 = items2;
            const tmpResult4 = tmp(tmp2[38]);
          }
        }
        function handleOptionSelected(arg0, arg1) {
          let flag = arg1;
          let required = !arg1;
          if (!arg1) {
            required = _prompt.required;
          }
          if (required) {
            required = 1 === stateFromStoresArray.length;
          }
          if (!required) {
            if (flag == null) {
              flag = false;
            }
            handleSelectOption(_prompt, arg0, flag);
          }
        }
        cResult[4] = handleSelectOption;
        cResult[5] = _prompt;
        cResult[6] = stateFromStoresArray;
        cResult[7] = handleOptionSelected;
        options = handleOptionSelected;
        const tmpResult = tmp(tmp2[19]);
      }
      const fn = function o() {
        return GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id);
      };
      cResult[1] = guildId;
      cResult[2] = _prompt.id;
      cResult[3] = fn;
      tmp7 = fn;
      let obj = guildId(isNew[16]);
    }
  : function MultipleChoicePrompt(guildId) {
      guildId = guildId.guildId;
      const _prompt = guildId.prompt;
      const tmp = closure_19();
      const isNew = _prompt.isNew;
      const items = [GuildOnboardingPromptsStore];
      const stateFromStoresArray = guildId(isNew[19]).useStateFromStoresArray(items, () =>
        GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id),
      );
      const handleSelectOption = _prompt(isNew[40])(guildId).handleSelectOption;
      let obj = guildId(isNew[19]);
      const token = guildId(isNew[37]).useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
      let obj2 = guildId(isNew[37]);
      const fn = function u() {
        if (isNew) {
          let combined = concat(token, "FF");
          let tmp3 = token;
        } else {
          combined = concat(token, "00");
          tmp3 = token;
        }
        const obj = { borderColor: null };
        const obj2 = ReanimatedRexport;
        const obj4 = { duration: 1, easing: null };
        const Easing = ReanimatedRexport.Easing;
        obj4.easing = Easing.in(ReanimatedRexport.Easing.ease);
        const withTimingResult = timing.withTiming(combined, obj4);
        const obj5 = ReanimatedRexport;
        const obj7 = { duration: 300, easing: null };
        const combined1 = "" + tmp3 + "00";
        const Easing2 = ReanimatedRexport.Easing;
        obj7.easing = Easing2.out(ReanimatedRexport.Easing.ease);
        obj.borderColor = obj2.withSequence(withTimingResult, obj5.withDelay(500, timing.withTiming(combined1, obj7)));
        return obj;
      };
      let obj3 = guildId(isNew[38]);
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
      const animatedStyle = obj3.useAnimatedStyle(fn);
      let obj5 = { style: null, children: null };
      const items1 = [tmp.promptContainer, animatedStyle];
      obj5.style = items1;
      let isNew2 = _prompt.isNew;
      if (isNew2) {
        const obj9 = { color: tmp2(tmp3[23]).BadgeColors.BRAND, text: null, style: null, textStyle: null };
        const intl = tmp2(tmp3[22]).intl;
        obj9.text = intl.string(tmp2(tmp3[22]).t.y2b7CA);
        ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
        isNew2 = closure_16(tmp2(tmp3[23]).TextBadge, obj9);
      }
      const items2 = [isNew2, closure_16(closure_21, { item: _prompt }), ,];
      options = _prompt.options;
      items2[2] = options.map((option) => {
        guildId = option;
        const obj = {
          guildId,
          option,
          selected: stateFromStoresArray.includes(option.id),
          onSelect(arg0) {
            let flag = arg0;
            let required = !arg0;
            if (!arg0) {
              required = _prompt.required;
            }
            if (required) {
              required = 1 === stateFromStoresArray.length;
            }
            if (!required) {
              if (flag == null) {
                flag = false;
              }
              handleSelectOption(_prompt, closure_0, flag);
            }
          },
          suppressMemberCount: true,
          canBeNew: !_prompt.isNew,
        };
        return closure_1_16(_prompt(isNew[46]), obj, option.id);
      });
      items2[3] = closure_16(closure_22, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
      obj5.children = items2;
      return closure_17(_prompt(isNew[38]).View, obj5);
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/CustomizeCommunity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomizeCommunity(guildId) {
      const cResult = guildId(576).c(47);
      guildId = guildId.guildId;
      closure_19();
      const bottom = stateFromStores(1630)().bottom;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function c() {
          return ReadStateStore.hasUnread(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      let obj = guildId(576);
      const tmp5 = stateFromStores;
      stateFromStores = guildId(504).useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[3] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        class N {
          constructor() {
            guild = closure_8.getGuild(guildId);
            prop = undefined;
            if (guild != null) {
              prop = guild.latestOnboardingQuestionId;
            }
            return prop;
          }
        }
        cResult[4] = guildId;
        cResult[5] = N;
      } else {
        class N {
          constructor() {
            guild = closure_8.getGuild(guildId);
            prop = undefined;
            if (guild != null) {
              prop = guild.latestOnboardingQuestionId;
            }
            return prop;
          }
        }
      }
      const tmpResult = guildId(504);
      const stateFromStores1 = guildId(504).useStateFromStores(tmp10, N);
      const tmpResult2 = guildId(504);
      ({ newOnboardingPrompts, onboardingPromptsWithNewAnswers, newAnswersCount, onboardingPrompts } =
        tmp5(11300)(guildId));
      if (cResult[6] === guildId) {
        class N {
          constructor() {
            guild = closure_8.getGuild(guildId);
            prop = undefined;
            if (guild != null) {
              prop = guild.latestOnboardingQuestionId;
            }
            return prop;
          }
        }
        if (cResult[9] === guildId) {
          class N {
            constructor() {
              guild = closure_8.getGuild(guildId);
              prop = undefined;
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
      class D {
        constructor() {
          tmp = guildId;
          tmp2 = null != guildId;
          if (tmp2) {
            tmp3 = closure_11;
            tmp4 = closure_11.shouldFetchPrompts(tmp) || closure_1;
            tmp2 = tmp4;
          }
          if (tmp2) {
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj = closure_0(closure_2[31]);
            onboardingPrompts = obj.fetchOnboardingPrompts(tmp);
          }
          return;
        }
      }
      cResult[6] = guildId;
      cResult[7] = stateFromStores;
      cResult[8] = D;
      const tmp14 = tmp5(11300)(guildId);
    }
  : function CustomizeCommunity(guildId) {
      guildId = guildId.guildId;
      let stateFromStores;
      const tmp = closure_19();
      const bottom = stateFromStores(1630)().bottom;
      const items = [ReadStateStore];
      stateFromStores = guildId(504).useStateFromStores(items, () =>
        ReadStateStore.hasUnread(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION),
      );
      let obj = guildId(504);
      const items1 = [GuildStore];
      const stateFromStores1 = guildId(504).useStateFromStores(items1, () => {
        guild = GuildStore.getGuild(guildId);
        let prop;
        if (guild != null) {
          prop = guild.latestOnboardingQuestionId;
        }
        return prop;
      });
      const tmp7 = stateFromStores(11300)(guildId);
      ({ newOnboardingPrompts, onboardingPromptsWithNewAnswers, onboardingPrompts } = tmp7);
      const items2 = [guildId, stateFromStores, stateFromStores1];
      ({ onboardingPromptsRaw, newAnswersCount } = tmp7);
      const effect = noop.useEffect(() => {
        let tmp2 = null != guildId;
        if (tmp2) {
          tmp2 = GuildOnboardingPromptsStore.shouldFetchPrompts(guildId) || stateFromStores;
          const tmp4 = GuildOnboardingPromptsStore.shouldFetchPrompts(guildId) || stateFromStores;
        }
        if (tmp2) {
          const onboardingPrompts = GuildOnboardingPromptsActionCreators.fetchOnboardingPrompts(guildId);
        }
      }, items2);
      const items3 = [guildId];
      const effect1 = noop.useEffect(
        () =>
          null != guildId
            ? () => {
                guildId(6789).ackGuildFeature(
                  closure_1_0,
                  constants.GUILD_ONBOARDING_QUESTION,
                  GuildOnboardingPromptsStore.ackIdForGuild(closure_1_0),
                );
                const obj = guildId(6789);
                const result = stateFromStores(6783).updateOnboardingResponses(closure_1_0);
              }
            : undefined,
        items3,
      );
      const items4 = [guildId];
      const callback = noop.useCallback((type) => {
        type = type.type;
        if (constants2.MULTIPLE_CHOICE === type) {
          const obj2 = { guildId, prompt: type };
          return value2(closure_29, obj2, type.id);
        } else if (tmp.DROPDOWN === type) {
          const obj = { guildId, prompt: type };
          return value2(DropdownPrompt, obj, type.id);
        }
      }, items4);
      if (0 === onboardingPromptsRaw.length) {
        const obj3 = { style: tmp.container, contentContainerStyle: null, children: null };
        const obj4 = { paddingBottom: bottom + tmp2(587).space.PX_16 };
        obj3.contentContainerStyle = obj4;
        const obj5 = { setTab: guildId.setTab };
        obj3.children = closure_16(closure_20, obj5);
        let tmp24Result4 = closure_16(closure_6, obj3);
      } else {
        const obj6 = { style: tmp.container, contentContainerStyle: null, children: null };
        const obj7 = { paddingBottom: bottom + tmp2(587).space.PX_16 };
        obj6.contentContainerStyle = obj7;
        let tmp24Result = newOnboardingPrompts.length > 0 || onboardingPromptsWithNewAnswers.length > 0;
        if (tmp24Result) {
          const obj8 = { children: null };
          const obj9 = {
            style: tmp.sheetTitle,
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl = tmp4(1126).intl;
          const obj10 = { count: newOnboardingPrompts.length + newAnswersCount };
          obj9.children = intl.format(tmp4(1126).t.iB5Gqe, obj10);
          const items5 = [
            closure_16(tmp4(5086).Text, obj9),
            newOnboardingPrompts.map(callback),
            onboardingPromptsWithNewAnswers.map(callback),
          ];
          const obj11 = { style: tmp.sectionSeparator };
          items5[3] = closure_16(closure_4, obj11);
          obj8.children = items5;
          tmp24Result = closure_17(closure_18, obj8);
        }
        const items6 = [tmp24Result, ,];
        let tmp24Result3 = onboardingPrompts.length > 0;
        if (tmp24Result3) {
          const obj12 = { children: null };
          const obj13 = {
            style: tmp.sheetTitle,
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl2 = tmp4(1126).intl;
          obj13.children = intl2.string(tmp4(1126).t.BGkaer);
          const items7 = [closure_16(tmp4(5086).Text, obj13), ,];
          const obj14 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const intl3 = tmp4(1126).intl;
          obj14.children = intl3.string(tmp4(1126).t.r6Vm8T);
          items7[1] = closure_16(tmp4(5086).Text, obj14);
          items7[2] = onboardingPrompts.map(callback);
          obj12.children = items7;
          tmp24Result3 = closure_17(closure_18, obj12);
        }
        items6[1] = tmp24Result3;
        const obj15 = { guildId };
        items6[2] = closure_16(closure_23, obj15);
        obj6.children = items6;
        tmp24Result4 = closure_17(closure_6, obj6);
      }
      return tmp24Result4;
    };
