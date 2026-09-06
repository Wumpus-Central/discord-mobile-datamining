// discord_app/modules/guild_onboarding/native/CustomizeCommunity.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
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
  const tmp = closure_19();
  setTab(4269);
  let obj1 = setTab(504);
  const items = [SelectedGuildStore];
  importDefault = obj1.useStateFromStores(items, () => guildId.getGuildId());
  let obj = { style: tmp.emptyContainer, children: null };
  obj = { style: tmp.emptyContainerImage, source: importDefault(obj.isThemeDark(useThemeDefault()) ? 11551 : 11552) };
  const items1 = [closure_16(closure_5, obj), ,];
  obj1 = { style: tmp.emptyContainerHeader, children: null };
  const intl = tmp2(1114).intl;
  obj1.children = intl.string(setTab(1114).t.leKHQz);
  items1[1] = closure_16(setTab(1178).LegacyText, obj1);
  const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl2 = tmp2(1114).intl;
  obj2.children = intl2.format(setTab(1114).t["jH+ktB"], {
    onBrowseChannels() {
      if (null != closure_1) {
        setTab(constants.BROWSE);
      }
    },
  });
  items1[2] = closure_16(setTab(4556).Text, obj2);
  obj.children = items1;
  return closure_17(closure_4, obj);
}
function PromptTitle(item) {
  item = item.item;
  let obj = { style: closure_19().titleContainer, children: null };
  const items = [item.title];
  let tmp3Result = null;
  if (item.required) {
    obj = { variant: "text-md/bold", color: "text-feedback-critical", children: [" ", "*"] };
    tmp3Result = closure_1_17(Text_Text.Text, obj);
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
  let found;
  let obj = require("initialize");
  const items = [GuildStore];
  found = undefined;
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
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
  obj = {
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
  const tmp = closure_19();
  ({ helpText, helpTextAdditional } = require("usePromptHelpText")(obj));
  if ("" !== helpText) {
    obj = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: null };
    const items3 = [helpText, " ", helpTextAdditional];
    obj.children = items3;
    let tmp9 = closure_17(require("Text/Text").Text, obj);
  } else {
    tmp9 = null;
  }
  return tmp9;
}
function ConnectionsPrompt(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_19();
  let obj = guildId(504);
  const items = [GuildOnboardingPromptsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingPromptsStore.getConnections(guildId));
  let tmp4 = null;
  if (0 !== stateFromStores.length) {
    obj = { style: tmp.connectionsPromptContainer, children: null };
    obj = {
      style: tmp.connectionsTitle,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = tmp2(1114).intl;
    obj.children = intl.string(tmp2(1114).t.eDVMrA);
    const items1 = [closure_16(tmp2(4556).Text, obj), ,];
    const obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp2(1114).intl;
    obj1.children = intl2.string(tmp2(1114).t.BozOXu);
    items1[1] = closure_16(tmp2(4556).Text, obj1);
    const obj2 = {
      style: tmp.connectionsContainer,
      children: stateFromStores.map((connection, index) => {
        const obj = { connection, guildId, location: AnalyticsLocationDefault.CHANNELS_AND_ROLES };
        return value2(ConnectionCardDefault, obj, index);
      }),
    };
    items1[2] = closure_16(closure_4, obj2);
    obj.children = items1;
    tmp4 = closure_17(closure_4, obj);
  }
  return tmp4;
}
function DropdownOption(option) {
  option = option.option;
  const tmp = closure_19();
  let obj = option(504);
  const items = [EmojiStore];
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
  obj = { style: tmp.dropdownPill, children: null };
  if (tmp10Result) {
    obj = { style: tmp.emojiContainer, children: null };
    const obj1 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj2 = { id: null, animated: null, size: null };
      ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
      obj2.size = EMOJI_URL_BASE_SIZE;
      emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
      const tmp11Result = AvatarUtilsDefault;
    }
    obj1.src = emojiURL;
    const emoji3 = option.emoji;
    let str;
    if (emoji3 != null) {
      str = emoji3.name;
    }
    if (str == null) {
      str = "";
    }
    obj1.name = str;
    obj.children = closure_16(EmojiDefault, obj1);
    tmp10Result = closure_16(closure_4, obj);
  }
  const items1 = [tmp10Result, closure_16(option(4556).Text, { variant: "text-md/semibold", children: option.title })];
  obj.children = items1;
  return closure_17(closure_4, obj);
}
function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  const tmp = closure_19();
  const isNew = _prompt.isNew;
  let obj = guildId(isNew[17]);
  const items = [GuildOnboardingPromptsStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () =>
    GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id),
  );
  const mapped = stateFromStoresArray.map((item) => {
    closure_0 = item;
    const options = _prompt.options;
    return options.find((id) => id.id === closure_0);
  });
  const found = mapped.filter(guildId(isNew[34]).isNotNullish);
  let obj1 = guildId(isNew[35]);
  const token = obj1.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  let obj2 = guildId(isNew[36]);
  const fn = function c() {
    if (isNew) {
      let combined = concat(token, "FF");
      let tmp3 = token;
    } else {
      combined = concat(token, "00");
      tmp3 = token;
    }
    let obj = { borderColor: null };
    const obj2 = ReanimatedRexport;
    obj = { duration: 1, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.in(ReanimatedRexport.Easing.ease);
    const withTimingResult = timing.withTiming(combined, obj);
    const obj5 = ReanimatedRexport;
    obj = { duration: 300, easing: null };
    const combined1 = "" + tmp3 + "00";
    const Easing2 = ReanimatedRexport.Easing;
    obj.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj.borderColor = obj2.withSequence(withTimingResult, obj5.withDelay(500, timing.withTiming(combined1, obj)));
    return obj;
  };
  obj = {
    isNew,
    brandColor: token,
    withSequence: guildId(isNew[36]).withSequence,
    withTiming: guildId(isNew[37]).withTiming,
    Easing: guildId(isNew[36]).Easing,
    withDelay: guildId(isNew[36]).withDelay,
  };
  fn.__closure = obj;
  fn.__workletHash = 16609373875235;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  const items1 = [guildId, _prompt, handleSelectOption, stateFromStoresArray.length];
  const callback = stateFromStoresArray.useCallback(() => {
    const obj = {
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
    };
    obj.openLazy(asyncRequireImpl(7135, dependencyMap.paths), "DropdownOptions", obj);
  }, items1);
  obj = { style: null, children: null };
  const items2 = [tmp.promptContainer, animatedStyle];
  obj.style = items2;
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    obj1 = { color: tmp2(tmp3[20]).BadgeColors.BRAND, text: null, style: null, textStyle: null };
    const intl = tmp2(tmp3[21]).intl;
    obj1.text = intl.string(tmp2(tmp3[21]).t.y2b7CA);
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = closure_16(tmp2(tmp3[20]).TextBadge, obj1);
  }
  const items3 = [isNew2, closure_16(PromptTitle, { item: _prompt }), ,];
  obj2 = { style: tmp.dropdownContainer, onPress: callback, children: null };
  let tmp10Result = 0 === found.length;
  if (tmp10Result) {
    let obj3 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = tmp2(tmp3[21]).intl;
    obj3.children = intl2.string(tmp2(tmp3[21]).t.GmSvdA);
    tmp10Result = closure_16(tmp2(tmp3[22]).Text, obj3);
  }
  const items4 = [tmp10Result, found.map((option) => closure_1_16(DropdownOption, { option }, option.id))];
  const obj4 = {
    style: tmp.dropdownIconContainer,
    children: closure_16(handleSelectOption, { style: tmp.dropdownIcon, source: _prompt(isNew[43]) }),
  };
  items4[2] = closure_16(token, obj4);
  obj2.children = items4;
  items3[2] = closure_17(guildId(isNew[42]).PressableHighlight, obj2);
  items3[3] = closure_16(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj.children = items3;
  return closure_17(_prompt(isNew[36]).View, obj);
}
function MultipleChoicePrompt(guildId) {
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  const tmp = closure_19();
  const isNew = _prompt.isNew;
  let obj = guildId(isNew[17]);
  const items = [GuildOnboardingPromptsStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () =>
    GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id),
  );
  const handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  let obj1 = guildId(isNew[35]);
  const token = obj1.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  const fn = function p() {
    if (isNew) {
      let combined = concat(token, "FF");
      let tmp3 = token;
    } else {
      combined = concat(token, "00");
      tmp3 = token;
    }
    let obj = { borderColor: null };
    const obj2 = ReanimatedRexport;
    obj = { duration: 1, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.in(ReanimatedRexport.Easing.ease);
    const withTimingResult = timing.withTiming(combined, obj);
    const obj5 = ReanimatedRexport;
    obj = { duration: 300, easing: null };
    const combined1 = "" + tmp3 + "00";
    const Easing2 = ReanimatedRexport.Easing;
    obj.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj.borderColor = obj2.withSequence(withTimingResult, obj5.withDelay(500, timing.withTiming(combined1, obj)));
    return obj;
  };
  obj = {
    isNew,
    brandColor: token,
    withSequence: guildId(isNew[36]).withSequence,
    withTiming: guildId(isNew[37]).withTiming,
    Easing: guildId(isNew[36]).Easing,
    withDelay: guildId(isNew[36]).withDelay,
  };
  fn.__closure = obj;
  fn.__workletHash = 12802766002208;
  fn.__initData = __initData2;
  const animatedStyle = guildId(isNew[36]).useAnimatedStyle(fn);
  obj = { style: null, children: null };
  const items1 = [tmp.promptContainer, animatedStyle];
  obj.style = items1;
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    obj1 = { color: tmp2(tmp3[20]).BadgeColors.BRAND, text: null, style: null, textStyle: null };
    const intl = tmp2(tmp3[21]).intl;
    obj1.text = intl.string(tmp2(tmp3[21]).t.y2b7CA);
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = closure_16(tmp2(tmp3[20]).TextBadge, obj1);
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
  obj.children = items2;
  return closure_17(_prompt(isNew[36]).View, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildOnboardingPromptsConstants = fn(7101);
({ GuildOnboardingTab: closure_12, OnboardingPromptType: map1 } = GuildOnboardingPromptsConstants);
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const ReadStateTypes = fn(4742).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
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
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.sheetTitle = { marginTop: nativeDefault.space.PX_16 };
let obj1 = { marginTop: nativeDefault.space.PX_16 };
createStyles.promptContainer = {
  position: "relative",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
  borderStyle: "solid",
};
let obj2 = {
  position: "relative",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
  borderStyle: "solid",
};
createStyles.titleContainer = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
createStyles.badge = { position: "absolute", top: -6, right: -6 };
createStyles.badgeText = { fontWeight: "bold" };
let obj3 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
createStyles.dropdownContainer = {
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
let obj4 = {
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
createStyles.emptyDropdownText = { marginVertical: nativeDefault.space.PX_12, marginLeft: nativeDefault.space.PX_4 };
let obj5 = { marginVertical: nativeDefault.space.PX_12, marginLeft: nativeDefault.space.PX_4 };
createStyles.dropdownPill = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: 6,
  marginRight: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
createStyles.emojiContainer = { display: "flex", alignItems: "center" };
const rect = { position: "absolute", right: nativeDefault.space.PX_4, top: nativeDefault.space.PX_12 };
createStyles.dropdownIconContainer = rect;
createStyles.dropdownIcon = { height: 32, width: 32 };
createStyles.optionTextEmoji = { fontSize: 18, lineHeight: 22, marginRight: 6 };
createStyles.optionImageEmoji = { height: 22, width: 22, marginRight: 6 };
let obj6 = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: 6,
  marginRight: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
createStyles.helpText = { marginTop: nativeDefault.space.PX_4 };
let obj7 = { marginTop: nativeDefault.space.PX_4 };
createStyles.sectionSeparator = {
  marginTop: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.emptyContainer = { height: 400, display: "flex", alignItems: "center", justifyContent: "center" };
let size = { width: 120, height: 80, marginBottom: nativeDefault.space.PX_16 };
createStyles.emptyContainerImage = size;
let obj9 = {};
const merged = Object.assign(
  TextStyles(fn(1074).Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18),
);
obj9.marginBottom = nativeDefault.space.PX_4;
createStyles.emptyContainerHeader = obj9;
let obj8 = {
  marginTop: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.connectionsContainer = { marginTop: nativeDefault.space.PX_12 };
let obj10 = { marginTop: nativeDefault.space.PX_12 };
createStyles.connectionsPromptContainer = { marginTop: nativeDefault.space.PX_12 };
let obj11 = { marginTop: nativeDefault.space.PX_12 };
createStyles.connectionsTitle = { marginBottom: nativeDefault.space.PX_4 };
let closure_19 = createStyles.createStyles(createStyles);
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
  const bottom = stateFromStores(1611)().bottom;
  let obj = guildId(504);
  const items = [ReadStateStore];
  stateFromStores = obj.useStateFromStores(items, () =>
    ReadStateStore.hasUnread(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION),
  );
  let obj1 = guildId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(guildId);
    let prop;
    if (guild != null) {
      prop = guild.latestOnboardingQuestionId;
    }
    return prop;
  });
  const tmp7 = stateFromStores(11553)(guildId);
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
            guildId(7110).ackGuildFeature(
              closure_1_0,
              constants.GUILD_ONBOARDING_QUESTION,
              GuildOnboardingPromptsStore.ackIdForGuild(closure_1_0),
            );
            const obj = guildId(7110);
            const result = stateFromStores(7105).updateOnboardingResponses(closure_1_0);
          }
        : undefined,
    items3,
  );
  const items4 = [guildId];
  const callback = noop.useCallback((type) => {
    type = type.type;
    if (constants2.MULTIPLE_CHOICE === type) {
      let obj = { guildId, prompt: type };
      return value2(MultipleChoicePrompt, obj, type.id);
    } else if (tmp.DROPDOWN === type) {
      obj = { guildId, prompt: type };
      return value2(DropdownPrompt, obj, type.id);
    }
  }, items4);
  if (0 === onboardingPromptsRaw.length) {
    obj = { style: tmp.container, contentContainerStyle: null, children: null };
    obj = { paddingBottom: bottom + tmp2(576).space.PX_16 };
    obj.contentContainerStyle = obj;
    obj1 = { setTab: guildId.setTab };
    obj.children = closure_16(EmptyCustomizeCommunity, obj1);
    let tmp24Result1 = closure_16(closure_6, obj);
  } else {
    const obj2 = { style: tmp.container, contentContainerStyle: null, children: null };
    const obj3 = { paddingBottom: bottom + tmp2(576).space.PX_16 };
    obj2.contentContainerStyle = obj3;
    let tmp24Result = newOnboardingPrompts.length > 0 || onboardingPromptsWithNewAnswers.length > 0;
    if (tmp24Result) {
      const obj4 = { children: null };
      const obj5 = {
        style: tmp.sheetTitle,
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = tmp4(1114).intl;
      const obj6 = { count: newOnboardingPrompts.length + newAnswersCount };
      obj5.children = intl.format(tmp4(1114).t.iB5Gqe, obj6);
      const items5 = [
        closure_16(tmp4(4556).Text, obj5),
        newOnboardingPrompts.map(callback),
        onboardingPromptsWithNewAnswers.map(callback),
      ];
      const obj7 = { style: tmp.sectionSeparator };
      items5[3] = closure_16(closure_4, obj7);
      obj4.children = items5;
      tmp24Result = closure_17(closure_18, obj4);
    }
    const items6 = [tmp24Result, ,];
    tmp24Result = onboardingPrompts.length > 0;
    if (tmp24Result) {
      const obj8 = { children: null };
      const obj9 = {
        style: tmp.sheetTitle,
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl2 = tmp4(1114).intl;
      obj9.children = intl2.string(tmp4(1114).t.BGkaer);
      const items7 = [closure_16(tmp4(4556).Text, obj9), ,];
      const obj10 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl3 = tmp4(1114).intl;
      obj10.children = intl3.string(tmp4(1114).t.r6Vm8T);
      items7[1] = closure_16(tmp4(4556).Text, obj10);
      items7[2] = onboardingPrompts.map(callback);
      obj8.children = items7;
      tmp24Result = closure_17(closure_18, obj8);
    }
    items6[1] = tmp24Result;
    const obj11 = { guildId };
    items6[2] = closure_16(ConnectionsPrompt, obj11);
    obj2.children = items6;
    tmp24Result1 = closure_17(closure_6, obj2);
  }
  return tmp24Result1;
}
