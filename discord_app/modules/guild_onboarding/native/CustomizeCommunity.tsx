// discord_app/modules/guild_onboarding/native/CustomizeCommunity.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
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
function EmptyCustomizeCommunity(setTab) {
  setTab = setTab.setTab;
  importDefault = undefined;
  const tmp = closure_19();
  const obj = setTab(4348);
  const tmp4 = importDefault;
  const isThemeDarkResult = setTab(4348).isThemeDark(useThemeDefault());
  const items = [SelectedGuildStore];
  importDefault = setTab(504).useStateFromStores(items, () => guildId.getGuildId());
  const obj3 = { style: tmp.emptyContainer, children: null };
  const obj2 = setTab(504);
  const items1 = [
    closure_16(closure_5, { style: tmp.emptyContainerImage, source: tmp4(isThemeDarkResult ? 11701 : 11702) }),
    ,
  ];
  const obj5 = { style: tmp.emptyContainerHeader, children: null };
  const intl = tmp2(1115).intl;
  obj5.children = intl.string(setTab(1115).t.leKHQz);
  items1[1] = closure_16(setTab(1177).LegacyText, obj5);
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl2 = tmp2(1115).intl;
  obj6.children = intl2.format(setTab(1115).t["jH+ktB"], {
    onBrowseChannels() {
      if (null != closure_1) {
        setTab(constants.BROWSE);
      }
    },
  });
  items1[2] = closure_16(setTab(4636).Text, obj6);
  obj3.children = items1;
  return closure_17(closure_4, obj3);
}
function PromptTitle(item) {
  item = item.item;
  const obj = { style: closure_19().titleContainer, children: null };
  const items = [item.title];
  let tmp3Result = null;
  if (item.required) {
    const obj2 = { variant: "text-md/bold", color: "text-feedback-critical", children: [" ", "*"] };
    tmp3Result = closure_1_17(Text_Text.Text, obj2);
  }
  items[1] = tmp3Result;
  obj.children = closure_1_17(Text_Text.Heading, {
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: items,
  });
  return value2(React4, obj);
}
function PromptHelpText(arg0) {
  ({ guildId: require, prompt: _prompt, selectedOptionIds: importDefault } = arg0);
  const tmp = closure_19();
  const items = [GuildStore];
  let found;
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(require));
  if (_prompt != null) {
    const options = _prompt.options;
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
    itemHook(children, arg1) {
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
    itemHook(children, arg1) {
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
}
function ConnectionsPrompt(guildId) {
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
    const intl = tmp2(1115).intl;
    obj3.children = intl.string(tmp2(1115).t.eDVMrA);
    const items1 = [closure_16(tmp2(4636).Text, obj3), ,];
    const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp2(1115).intl;
    obj4.children = intl2.string(tmp2(1115).t.BozOXu);
    items1[1] = closure_16(tmp2(4636).Text, obj4);
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
}
function DropdownOption(option) {
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
  const items1 = [tmp10Result, closure_16(option(4636).Text, { variant: "text-md/semibold", children: option.title })];
  obj2.children = items1;
  return closure_17(closure_4, obj2);
}
function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  const tmp = closure_19();
  const isNew = _prompt.isNew;
  const items = [GuildOnboardingPromptsStore];
  const stateFromStoresArray = guildId(isNew[17]).useStateFromStoresArray(items, () =>
    GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id),
  );
  const mapped = stateFromStoresArray.map((item) => {
    closure_0 = item;
    const options = _prompt.options;
    return options.find((id) => id.id === closure_0);
  });
  const found = mapped.filter(guildId(isNew[34]).isNotNullish);
  let obj = guildId(isNew[17]);
  const token = guildId(isNew[35]).useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  let obj2 = guildId(isNew[35]);
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
  let obj3 = guildId(isNew[36]);
  fn.__closure = {
    isNew,
    brandColor: token,
    withSequence: guildId(isNew[36]).withSequence,
    withTiming: guildId(isNew[37]).withTiming,
    Easing: guildId(isNew[36]).Easing,
    withDelay: guildId(isNew[36]).withDelay,
  };
  fn.__workletHash = 16609373875235;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  const items1 = [guildId, _prompt, handleSelectOption, stateFromStoresArray.length];
  const callback = stateFromStoresArray.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7249, dependencyMap.paths), "DropdownOptions", {
      guildId,
      promptId: _prompt.id,
      onSelect(arg0, arg1) {
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
    let obj7 = { color: tmp2(tmp3[20]).BadgeColors.BRAND, text: null, style: null, textStyle: null };
    const intl = tmp2(tmp3[21]).intl;
    obj7.text = intl.string(tmp2(tmp3[21]).t.y2b7CA);
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = closure_16(tmp2(tmp3[20]).TextBadge, obj7);
  }
  const items3 = [isNew2, closure_16(PromptTitle, { item: _prompt }), ,];
  const obj8 = { style: tmp.dropdownContainer, onPress: callback, children: null };
  let tmp10Result = 0 === found.length;
  if (tmp10Result) {
    const obj9 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = tmp2(tmp3[21]).intl;
    obj9.children = intl2.string(tmp2(tmp3[21]).t.GmSvdA);
    tmp10Result = closure_16(tmp2(tmp3[22]).Text, obj9);
  }
  const items4 = [tmp10Result, found.map((option) => closure_1_16(DropdownOption, { option }, option.id))];
  const obj10 = { style: tmp.dropdownIconContainer, children: null };
  let obj4 = {
    isNew,
    brandColor: token,
    withSequence: guildId(isNew[36]).withSequence,
    withTiming: guildId(isNew[37]).withTiming,
    Easing: guildId(isNew[36]).Easing,
    withDelay: guildId(isNew[36]).withDelay,
  };
  obj10.children = closure_16(handleSelectOption, { style: tmp.dropdownIcon, source: tmp4(isNew[43]) });
  items4[2] = closure_16(token, obj10);
  obj8.children = items4;
  items3[2] = closure_17(guildId(isNew[42]).PressableHighlight, obj8);
  items3[3] = closure_16(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj5.children = items3;
  return closure_17(_prompt(isNew[36]).View, obj5);
}
function MultipleChoicePrompt(guildId) {
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  const tmp = closure_19();
  const isNew = _prompt.isNew;
  const items = [GuildOnboardingPromptsStore];
  const stateFromStoresArray = guildId(isNew[17]).useStateFromStoresArray(items, () =>
    GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id),
  );
  const handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  let obj = guildId(isNew[17]);
  const token = guildId(isNew[35]).useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  let obj2 = guildId(isNew[35]);
  const fn = function p() {
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
  let obj3 = guildId(isNew[36]);
  fn.__closure = {
    isNew,
    brandColor: token,
    withSequence: guildId(isNew[36]).withSequence,
    withTiming: guildId(isNew[37]).withTiming,
    Easing: guildId(isNew[36]).Easing,
    withDelay: guildId(isNew[36]).withDelay,
  };
  fn.__workletHash = 12802766002208;
  fn.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj5 = { style: null, children: null };
  const items1 = [tmp.promptContainer, animatedStyle];
  obj5.style = items1;
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    const obj9 = { color: tmp2(tmp3[20]).BadgeColors.BRAND, text: null, style: null, textStyle: null };
    const intl = tmp2(tmp3[21]).intl;
    obj9.text = intl.string(tmp2(tmp3[21]).t.y2b7CA);
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = closure_16(tmp2(tmp3[20]).TextBadge, obj9);
  }
  const items2 = [isNew2, closure_16(PromptTitle, { item: _prompt }), ,];
  const options = _prompt.options;
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
    return closure_1_16(_prompt(isNew[44]), obj, option.id);
  });
  items2[3] = closure_16(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj5.children = items2;
  return closure_17(_prompt(isNew[36]).View, obj5);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildOnboardingPromptsConstants = fn(7215);
({ GuildOnboardingTab: closure_12, OnboardingPromptType: map1 } = GuildOnboardingPromptsConstants);
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const ReadStateTypes = fn(4822).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const createStyles = fn(4640);
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
  TextStyles(fn(1074).Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18),
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
const __initData = {
  code: 'function CustomizeCommunityTsx1(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":brandColor+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}',
};
const __initData2 = {
  code: 'function CustomizeCommunityTsx2(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":brandColor+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}',
};
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/CustomizeCommunity.tsx");

export default function CustomizeCommunity(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  const tmp = closure_19();
  const bottom = stateFromStores(1612)().bottom;
  const items = [ReadStateStore];
  stateFromStores = guildId(504).useStateFromStores(items, () =>
    ReadStateStore.hasUnread(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION),
  );
  let obj = guildId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(guildId);
    let prop;
    if (guild != null) {
      prop = guild.latestOnboardingQuestionId;
    }
    return prop;
  });
  const tmp7 = stateFromStores(11703)(guildId);
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
            guildId(7224).ackGuildFeature(
              closure_1_0,
              constants.GUILD_ONBOARDING_QUESTION,
              GuildOnboardingPromptsStore.ackIdForGuild(closure_1_0),
            );
            const obj = guildId(7224);
            const result = stateFromStores(7219).updateOnboardingResponses(closure_1_0);
          }
        : undefined,
    items3,
  );
  const items4 = [guildId];
  const callback = noop.useCallback((type) => {
    type = type.type;
    if (constants2.MULTIPLE_CHOICE === type) {
      const obj2 = { guildId, prompt: type };
      return value2(MultipleChoicePrompt, obj2, type.id);
    } else if (tmp.DROPDOWN === type) {
      const obj = { guildId, prompt: type };
      return value2(DropdownPrompt, obj, type.id);
    }
  }, items4);
  if (0 === onboardingPromptsRaw.length) {
    const obj3 = { style: tmp.container, contentContainerStyle: null, children: null };
    const obj4 = { paddingBottom: bottom + tmp2(576).space.PX_16 };
    obj3.contentContainerStyle = obj4;
    const obj5 = { setTab: guildId.setTab };
    obj3.children = closure_16(EmptyCustomizeCommunity, obj5);
    let tmp24Result4 = closure_16(closure_6, obj3);
  } else {
    const obj6 = { style: tmp.container, contentContainerStyle: null, children: null };
    const obj7 = { paddingBottom: bottom + tmp2(576).space.PX_16 };
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
      const intl = tmp4(1115).intl;
      const obj10 = { count: newOnboardingPrompts.length + newAnswersCount };
      obj9.children = intl.format(tmp4(1115).t.iB5Gqe, obj10);
      const items5 = [
        closure_16(tmp4(4636).Text, obj9),
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
      const intl2 = tmp4(1115).intl;
      obj13.children = intl2.string(tmp4(1115).t.BGkaer);
      const items7 = [closure_16(tmp4(4636).Text, obj13), ,];
      const obj14 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl3 = tmp4(1115).intl;
      obj14.children = intl3.string(tmp4(1115).t.r6Vm8T);
      items7[1] = closure_16(tmp4(4636).Text, obj14);
      items7[2] = onboardingPrompts.map(callback);
      obj12.children = items7;
      tmp24Result3 = closure_17(closure_18, obj12);
    }
    items6[1] = tmp24Result3;
    const obj15 = { guildId };
    items6[2] = closure_16(ConnectionsPrompt, obj15);
    obj6.children = items6;
    tmp24Result4 = closure_17(closure_6, obj6);
  }
  return tmp24Result4;
}
