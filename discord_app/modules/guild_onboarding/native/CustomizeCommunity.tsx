// discord_app/modules/guild_onboarding/native/CustomizeCommunity.tsx
import registerAsset from "registerAsset";
import get_ActivityIndicator from "initialize";
import getEmojiToGroupId from "getEmojiToGroupId";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import handleConnectionOpen from "handleConnectionOpen";
import handleUpdate from "handleUpdate";
import serverPromptToClientPrompt from "serverPromptToClientPrompt";
import { EMOJI_URL_BASE_SIZE } from "set";
import { ReadStateTypes } from "ReadStateTypes";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { useTheme } from "../../../hooks/useTheme.tsx";
import { Emoji } from "../../emojis/native/Emoji.tsx";

let c4;
let c5;
let closure_12;
let closure_16;
let closure_17;
let closure_18;
let closure_6;
let map1;
const require = arg1;
function EmptyCustomizeCommunity(setTab) {
  setTab = setTab.setTab;
  let importDefault;
  const tmp = createCacheKey();
  let obj = setTab(4011);
  let obj1 = setTab(589);
  const items = [handleConnectionOpen];
  importDefault = obj1.useStateFromStores(items, () => guildId.getGuildId());
  obj = { style: tmp.emptyContainer, children: null };
  obj = { style: tmp.emptyContainerImage, source: importDefault(obj.isThemeDark(useTheme()) ? 11024 : 11025) };
  const items1 = [closure_16(closure_5, obj), , ];
  obj1 = { style: tmp.emptyContainerHeader, children: null };
  const intl = tmp2(1236).intl;
  obj1[1] = intl.string(setTab(1236).t.leKHQz);
  items1[1] = closure_16(setTab(1297).LegacyText, obj1);
  const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl2 = tmp2(1236).intl;
  obj2[2] = intl2.format(setTab(1236).t["jH+ktB"], {
    onBrowseChannels() {
      if (null != closure_1) {
        setTab(outer1_12.BROWSE);
      }
    }
  });
  items1[2] = closure_16(setTab(4299).Text, obj2);
  obj[1] = items1;
  return closure_17(closure_4, obj);
}
function PromptTitle(item) {
  item = item.item;
  let obj = { style: createCacheKey().titleContainer, children: null };
  const items = [item.title, ];
  let tmp3Result = null;
  if (item.required) {
    obj = { variant: "text-md/bold", color: "text-feedback-critical", children: null };
    obj[2] = [" ", "*"];
    tmp3Result = tmp3(Text.Text, obj);
  }
  items[1] = tmp3Result;
  obj[1] = closure_17(Text.Heading, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: items });
  return closure_16(closure_4, obj);
}
function PromptHelpText(arg0) {
  let _prompt;
  let helpText;
  let helpTextAdditional;
  let importDefault;
  let require;
  ({ guildId: require, prompt: _prompt, selectedOptionIds: importDefault } = arg0);
  let found;
  let obj = require(found[17]);
  const items = [createGuildRecordFromRust];
  found = undefined;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(closure_0));
  if (_prompt != null) {
    const options = _prompt.options;
    if (options != null) {
      found = options.filter((id) => closure_1.includes(id.id));
    }
  }
  const items1 = [found];
  const items2 = [found];
  const memo = React.useMemo(() => {
    if (null != found) {
      let selectedRoleIds = outer1_0(found[23]).getSelectedRoleIds(tmp);
      const obj = outer1_0(found[23]);
    } else {
      const _Set = Set;
      selectedRoleIds = new Set();
    }
    return selectedRoleIds;
  }, items1);
  const memo1 = React.useMemo(() => {
    if (null != found) {
      let selectedChannelIds = outer1_0(found[23]).getSelectedChannelIds(tmp);
      const obj = outer1_0(found[23]);
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
    itemHook(children) {
      return callback2(callback(found[22]).Text, { variant: "text-xs/medium", color: "mobile-text-heading-primary", children }, arg1);
    }
  };
  const tmp = createCacheKey();
  const tmp2 = require;
  ({ helpText, helpTextAdditional } = importDefault(found[24])(obj));
  if ("" !== helpText) {
    obj = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj[0] = tmp.helpText;
    const items3 = [helpText, " ", helpTextAdditional];
    obj[3] = items3;
    let tmp9 = callback2(tmp2(tmp3[22]).Text, obj);
  } else {
    tmp9 = null;
  }
  return tmp9;
}
function ConnectionsPrompt(guildId) {
  guildId = guildId.guildId;
  const tmp = createCacheKey();
  let obj = guildId(589);
  const items = [handleUpdate];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getConnections(guildId));
  let tmp4 = null;
  if (0 !== stateFromStores.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.connectionsPromptContainer;
    obj = { style: null, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj[0] = tmp.connectionsTitle;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t.eDVMrA);
    const items1 = [callback(tmp2(4299).Text, obj), , ];
    const obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp2(1236).intl;
    obj1[2] = intl2.string(tmp2(1236).t.BozOXu);
    items1[1] = callback(tmp2(4299).Text, obj1);
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.connectionsContainer;
    obj2[1] = stateFromStores.map((connection) => {
      const obj = { connection, guildId, location: null };
      obj[2] = outer1_1(outer1_2[26]).CHANNELS_AND_ROLES;
      return outer1_16(outer1_1(outer1_2[25]), obj, arg1);
    });
    items1[2] = callback(closure_4, obj2);
    obj[1] = items1;
    tmp4 = callback2(closure_4, obj);
  }
  return tmp4;
}
function DropdownOption(option) {
  option = option.option;
  const tmp = createCacheKey();
  let obj = option(589);
  const items = [getEmojiToGroupId];
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
      usableCustomEmojiById = outer1_7.getUsableCustomEmojiById(id1);
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
    obj = { style: null, children: null };
    obj[0] = tmp.emojiContainer;
    const obj1 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ optionTextEmoji: obj4[0], optionImageEmoji: obj4[1] } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj2 = { id: null, animated: null, size: null };
      ({ id: obj6[0], animated: obj6[1] } = stateFromStores);
      obj2[2] = EMOJI_URL_BASE_SIZE;
      emojiURL = tmp11(1416).getEmojiURL(obj2);
      const tmp11Result = tmp11(1416);
    }
    obj1[2] = emojiURL;
    const emoji3 = option.emoji;
    let str;
    if (emoji3 != null) {
      str = emoji3.name;
    }
    if (str == null) {
      str = "";
    }
    obj1[3] = str;
    obj[1] = callback(Emoji, obj1);
    tmp10Result = tmp10(tmp9, obj);
    tmp11 = importDefault;
    const tmp12 = Emoji;
  }
  const items1 = [tmp10Result, callback(option(4299).Text, { variant: "text-md/semibold", children: option.title })];
  obj[1] = items1;
  return closure_17(closure_4, obj);
}
function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  let isNew;
  let stateFromStoresArray;
  let token;
  let handleSelectOption;
  const tmp = createCacheKey();
  isNew = _prompt.isNew;
  let obj = guildId(isNew[17]);
  const items = [handleUpdate];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => outer1_11.getOnboardingResponsesForPrompt(guildId, _prompt.id));
  const mapped = stateFromStoresArray.map((arg0) => {
    let closure_0 = arg0;
    const options = _prompt.options;
    return options.find((id) => id.id === closure_0);
  });
  const found = mapped.filter(guildId(isNew[34]).isNotNullish);
  let obj1 = guildId(isNew[35]);
  token = obj1.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  let obj2 = guildId(isNew[36]);
  const fn = function c() {
    if (isNew) {
      let combined = concat(tmp, "FF");
      let tmp3 = tmp;
    } else {
      combined = concat(tmp, "00");
      tmp3 = tmp;
    }
    let obj = { borderColor: null };
    const obj2 = guildId(isNew[36]);
    obj = { duration: 1, easing: null };
    const Easing = guildId(isNew[36]).Easing;
    obj[1] = Easing.in(guildId(isNew[36]).Easing.ease);
    const obj3 = guildId(isNew[37]);
    const withTimingResult = guildId(isNew[37]).withTiming(combined, obj);
    const obj5 = guildId(isNew[36]);
    obj = { duration: 300, easing: null };
    const combined1 = "" + tmp3 + "00";
    const Easing2 = guildId(isNew[36]).Easing;
    obj[1] = Easing2.out(guildId(isNew[36]).Easing.ease);
    obj[0] = obj2.withSequence(withTimingResult, obj5.withDelay(500, guildId(isNew[37]).withTiming(combined1, obj)));
    return obj;
  };
  obj = { isNew, brandColor: token, withSequence: guildId(isNew[36]).withSequence, withTiming: guildId(isNew[37]).withTiming, Easing: guildId(isNew[36]).Easing, withDelay: guildId(isNew[36]).withDelay };
  fn.__closure = obj;
  fn.__workletHash = 16609373875235;
  fn.__initData = closure_25;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  const items1 = [guildId, _prompt, handleSelectOption, stateFromStoresArray.length];
  const callback = stateFromStoresArray.useCallback(() => {
    let obj = _prompt(isNew[39]);
    obj = {
      guildId,
      promptId: _prompt.id,
      onSelect(arg0, arg1) {
        let flag = arg1;
        let required = !arg1;
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
          closure_5(required, arg0, flag);
          const tmp3 = closure_5;
          const tmp4 = required;
        }
      },
      canBeNew: !_prompt.isNew,
      returnToCustomize: true
    };
    obj.openLazy(guildId(isNew[41])(isNew[40], isNew.paths), "DropdownOptions", obj);
  }, items1);
  obj = { style: items2, children: null };
  items2 = [tmp.promptContainer, animatedStyle];
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    obj1 = { color: null, text: null, style: null, textStyle: null };
    obj1[0] = tmp2(tmp3[20]).BadgeColors.BRAND;
    const intl = tmp2(tmp3[21]).intl;
    obj1[1] = intl.string(tmp2(tmp3[21]).t.y2b7CA);
    ({ badge: obj6[2], badgeText: obj6[3] } = tmp);
    isNew2 = callback(tmp2(tmp3[20]).TextBadge, obj1);
  }
  const items3 = [isNew2, callback(PromptTitle, { item: _prompt }), , ];
  obj2 = { style: tmp.dropdownContainer, onPress: callback, children: null };
  let tmp10Result = 0 === found.length;
  if (tmp10Result) {
    let obj3 = { style: null, variant: "text-sm/normal", color: "text-muted", children: null };
    obj3[0] = tmp.emptyDropdownText;
    const intl2 = tmp2(tmp3[21]).intl;
    obj3[3] = intl2.string(tmp2(tmp3[21]).t.GmSvdA);
    tmp10Result = tmp10(tmp2(tmp3[22]).Text, obj3);
  }
  const items4 = [tmp10Result, found.map((id) => callback(closure_24, { option: id }, id.id)), ];
  const obj4 = { style: tmp.dropdownIconContainer, children: null };
  obj4[1] = callback(handleSelectOption, { style: tmp.dropdownIcon, source: _prompt(isNew[43]) });
  items4[2] = callback(token, obj4);
  obj2[2] = items4;
  items3[2] = closure_17(guildId(isNew[42]).PressableHighlight, obj2);
  items3[3] = callback(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj[1] = items3;
  return closure_17(_prompt(isNew[36]).View, obj);
}
function MultipleChoicePrompt(guildId) {
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  let isNew;
  let stateFromStoresArray;
  let handleSelectOption;
  let token;
  const tmp = createCacheKey();
  isNew = _prompt.isNew;
  let obj = guildId(isNew[17]);
  const items = [handleUpdate];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => outer1_11.getOnboardingResponsesForPrompt(guildId, _prompt.id));
  handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  let obj1 = guildId(isNew[35]);
  token = obj1.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  const fn = function p() {
    if (isNew) {
      let combined = concat(tmp, "FF");
      let tmp3 = tmp;
    } else {
      combined = concat(tmp, "00");
      tmp3 = tmp;
    }
    let obj = { borderColor: null };
    const obj2 = guildId(isNew[36]);
    obj = { duration: 1, easing: null };
    const Easing = guildId(isNew[36]).Easing;
    obj[1] = Easing.in(guildId(isNew[36]).Easing.ease);
    const obj3 = guildId(isNew[37]);
    const withTimingResult = guildId(isNew[37]).withTiming(combined, obj);
    const obj5 = guildId(isNew[36]);
    obj = { duration: 300, easing: null };
    const combined1 = "" + tmp3 + "00";
    const Easing2 = guildId(isNew[36]).Easing;
    obj[1] = Easing2.out(guildId(isNew[36]).Easing.ease);
    obj[0] = obj2.withSequence(withTimingResult, obj5.withDelay(500, guildId(isNew[37]).withTiming(combined1, obj)));
    return obj;
  };
  obj = { isNew, brandColor: token, withSequence: guildId(isNew[36]).withSequence, withTiming: guildId(isNew[37]).withTiming, Easing: guildId(isNew[36]).Easing, withDelay: guildId(isNew[36]).withDelay };
  fn.__closure = obj;
  fn.__workletHash = 12802766002208;
  fn.__initData = closure_27;
  const animatedStyle = guildId(isNew[36]).useAnimatedStyle(fn);
  obj = { style: items1, children: null };
  items1 = [tmp.promptContainer, animatedStyle];
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    obj1 = { color: null, text: null, style: null, textStyle: null };
    obj1[0] = tmp2(tmp3[20]).BadgeColors.BRAND;
    const intl = tmp2(tmp3[21]).intl;
    obj1[1] = intl.string(tmp2(tmp3[21]).t.y2b7CA);
    ({ badge: obj6[2], badgeText: obj6[3] } = tmp);
    isNew2 = callback(tmp2(tmp3[20]).TextBadge, obj1);
  }
  const items2 = [isNew2, callback(PromptTitle, { item: _prompt }), , ];
  const options = _prompt.options;
  items2[2] = options.map((id) => {
    let closure_0 = id;
    const obj = { guildId: closure_0, option: id, selected: null, onSelect: null, suppressMemberCount: true, canBeNew: null };
    obj[2] = stateFromStoresArray.includes(id.id);
    obj[3] = function onSelect(arg0) {
      let flag = arg0;
      let required = !arg0;
      if (!arg0) {
        required = outer1_1.required;
      }
      if (required) {
        required = 1 === outer1_3.length;
      }
      if (!required) {
        if (flag == null) {
          flag = false;
        }
        outer1_4(outer1_1, closure_0, flag);
        const tmp4 = outer1_4;
        const tmp5 = outer1_1;
      }
    };
    obj[5] = !_prompt.isNew;
    return outer1_16(_prompt(isNew[44]), obj, id.id);
  });
  items2[3] = callback(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj[1] = items2;
  return closure_17(_prompt(isNew[36]).View, obj);
}
({ View: c4, Image: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ GuildOnboardingTab: closure_12, OnboardingPromptType: map1 } = serverPromptToClientPrompt);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
createCacheKey = { container: null, sheetTitle: null, promptContainer: null, titleContainer: null, badge: null, badgeText: null, dropdownContainer: null, emptyDropdownText: null, dropdownPill: null, emojiContainer: null, dropdownIconContainer: null, dropdownIcon: null, optionTextEmoji: null, optionImageEmoji: null, helpText: null, sectionSeparator: null, emptyContainer: null, emptyContainerImage: null, emptyContainerHeader: null, connectionsContainer: null, connectionsPromptContainer: null, connectionsTitle: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_16 };
let obj1 = { marginTop: require("Themes").space.PX_16 };
createCacheKey[2] = { position: "relative", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginTop: require("Themes").space.PX_12, padding: require("Themes").space.PX_12, borderRadius: require("Themes").radii.md, borderWidth: 2, borderStyle: "solid" };
let obj2 = { position: "relative", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginTop: require("Themes").space.PX_12, padding: require("Themes").space.PX_12, borderRadius: require("Themes").radii.md, borderWidth: 2, borderStyle: "solid" };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", marginBottom: require("Themes").space.PX_12 };
createCacheKey[4] = { position: "absolute", top: -6, right: -6 };
createCacheKey[5] = { fontWeight: "bold" };
let obj3 = { flexDirection: "row", alignItems: "center", marginBottom: require("Themes").space.PX_12 };
createCacheKey[6] = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, padding: require("Themes").space.PX_8, paddingRight: require("Themes").space.PX_32, minHeight: 48, marginBottom: require("Themes").space.PX_12, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
let obj4 = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, padding: require("Themes").space.PX_8, paddingRight: require("Themes").space.PX_32, minHeight: 48, marginBottom: require("Themes").space.PX_12, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
createCacheKey[7] = { marginVertical: require("Themes").space.PX_12, marginLeft: require("Themes").space.PX_4 };
let obj5 = { marginVertical: require("Themes").space.PX_12, marginLeft: require("Themes").space.PX_4 };
createCacheKey[8] = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8, display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[9] = { display: "flex", alignItems: "center" };
let obj6 = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8, display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[10] = { position: "absolute", right: require("Themes").space.PX_4, top: require("Themes").space.PX_12 };
createCacheKey[11] = { height: 32, width: 32 };
createCacheKey[12] = { fontSize: 18, lineHeight: 22, marginRight: 6 };
createCacheKey[13] = { height: 22, width: 22, marginRight: 6 };
let obj7 = { position: "absolute", right: require("Themes").space.PX_4, top: require("Themes").space.PX_12 };
createCacheKey[14] = { marginTop: require("Themes").space.PX_4 };
let obj8 = { marginTop: require("Themes").space.PX_4 };
createCacheKey[15] = { marginTop: require("Themes").space.PX_24, marginBottom: require("Themes").space.PX_16, height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[16] = { height: 400, display: "flex", alignItems: "center", justifyContent: "center" };
let obj9 = { marginTop: require("Themes").space.PX_24, marginBottom: require("Themes").space.PX_16, height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[17] = { width: 120, height: 80, marginBottom: require("Themes").space.PX_16 };
let obj11 = {};
let obj10 = { width: 120, height: 80, marginBottom: require("Themes").space.PX_16 };
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.DISPLAY_SEMIBOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj11.marginBottom = require("Themes").space.PX_4;
createCacheKey[18] = obj11;
createCacheKey[19] = { marginTop: require("Themes").space.PX_12 };
const obj12 = { marginTop: require("Themes").space.PX_12 };
createCacheKey[20] = { marginTop: require("Themes").space.PX_12 };
const obj13 = { marginTop: require("Themes").space.PX_12 };
createCacheKey[21] = { marginBottom: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_25 = { code: "function CustomizeCommunityTsx1(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}" };
let closure_27 = { code: "function CustomizeCommunityTsx2(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}" };
const obj14 = { marginBottom: require("Themes").space.PX_4 };
let result = require("getEmojiToGroupId").fileFinishedImporting("modules/guild_onboarding/native/CustomizeCommunity.tsx");

export default function CustomizeCommunity(guildId) {
  let newAnswersCount;
  let newOnboardingPrompts;
  let onboardingPrompts;
  let onboardingPromptsRaw;
  let onboardingPromptsWithNewAnswers;
  guildId = guildId.guildId;
  let stateFromStores;
  const tmp = createCacheKey();
  const bottom = stateFromStores(1609)().bottom;
  let obj = guildId(589);
  const items = [generateOldThreadCutoff];
  stateFromStores = obj.useStateFromStores(items, () => outer1_9.hasUnread(guildId, outer1_15.GUILD_ONBOARDING_QUESTION));
  let obj1 = guildId(589);
  const items1 = [createGuildRecordFromRust];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const guild = outer1_8.getGuild(guildId);
    let prop;
    if (guild != null) {
      prop = guild.latestOnboardingQuestionId;
    }
    return prop;
  });
  const tmp7 = stateFromStores(11026)(guildId);
  ({ newOnboardingPrompts, onboardingPromptsWithNewAnswers, onboardingPrompts } = tmp7);
  const items2 = [guildId, stateFromStores, stateFromStores1];
  ({ onboardingPromptsRaw, newAnswersCount } = tmp7);
  const effect = React.useEffect(() => {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = outer1_11.shouldFetchPrompts(tmp) || stateFromStores;
      const tmp4 = outer1_11.shouldFetchPrompts(tmp) || stateFromStores;
    }
    if (tmp2) {
      const onboardingPrompts = guildId(outer1_2[29]).fetchOnboardingPrompts(tmp);
      const obj = guildId(outer1_2[29]);
    }
  }, items2);
  const items3 = [guildId];
  const effect1 = React.useEffect(() => null != guildId ? (() => {
    outer1_0(outer1_2[30]).ackGuildFeature(closure_0, outer1_15.GUILD_ONBOARDING_QUESTION, outer1_11.ackIdForGuild(closure_0));
    const obj = outer1_0(outer1_2[30]);
    const result = outer1_1(outer1_2[31]).updateOnboardingResponses(closure_0);
  }) : undefined, items3);
  const items4 = [guildId];
  const callback = React.useCallback((type) => {
    type = type.type;
    if (outer1_13.MULTIPLE_CHOICE === type) {
      let obj = { guildId: null, prompt: null };
      obj[0] = guildId;
      obj[1] = type;
      return outer1_16(outer1_28, obj, type.id);
    } else if (tmp.DROPDOWN === type) {
      obj = { guildId: null, prompt: null };
      obj[0] = guildId;
      obj[1] = type;
      return outer1_16(outer1_26, obj, type.id);
    }
  }, items4);
  if (0 === onboardingPromptsRaw.length) {
    obj = { style: null, contentContainerStyle: null, children: null };
    obj[0] = tmp.container;
    obj = { paddingBottom: null };
    obj[0] = bottom + tmp2(712).space.PX_16;
    obj[1] = obj;
    obj1 = { setTab: null };
    obj1[0] = guildId.setTab;
    obj[2] = callback(EmptyCustomizeCommunity, obj1);
    let tmp24Result1 = callback(closure_6, obj);
  } else {
    const obj2 = { style: null, contentContainerStyle: null, children: null };
    obj2[0] = tmp.container;
    const obj3 = { paddingBottom: null };
    obj3[0] = bottom + tmp2(712).space.PX_16;
    obj2[1] = obj3;
    let tmp24Result = newOnboardingPrompts.length > 0 || onboardingPromptsWithNewAnswers.length > 0;
    if (tmp24Result) {
      const obj4 = { children: null };
      const obj5 = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
      obj5[0] = tmp.sheetTitle;
      const intl = tmp4(1236).intl;
      const obj6 = { count: null };
      obj6[0] = newOnboardingPrompts.length + newAnswersCount;
      obj5[3] = intl.format(tmp4(1236).t.iB5Gqe, obj6);
      const items5 = [callback(tmp4(4299).Text, obj5), newOnboardingPrompts.map(callback), onboardingPromptsWithNewAnswers.map(callback), ];
      const obj7 = { style: null };
      obj7[0] = tmp.sectionSeparator;
      items5[3] = callback(closure_4, obj7);
      obj4[0] = items5;
      tmp24Result = tmp24(closure_18, obj4);
    }
    const items6 = [tmp24Result, , ];
    tmp24Result = onboardingPrompts.length > 0;
    if (tmp24Result) {
      const obj8 = { children: null };
      const obj9 = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
      obj9[0] = tmp.sheetTitle;
      const intl2 = tmp4(1236).intl;
      obj9[3] = intl2.string(tmp4(1236).t.BGkaer);
      const items7 = [callback(tmp4(4299).Text, obj9), , ];
      const obj10 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl3 = tmp4(1236).intl;
      obj10[2] = intl3.string(tmp4(1236).t.r6Vm8T);
      items7[1] = callback(tmp4(4299).Text, obj10);
      items7[2] = onboardingPrompts.map(callback);
      obj8[0] = items7;
      tmp24Result = tmp24(closure_18, obj8);
    }
    items6[1] = tmp24Result;
    const obj11 = { guildId: null };
    obj11[0] = guildId;
    items6[2] = callback(ConnectionsPrompt, obj11);
    obj2[2] = items6;
    tmp24Result1 = tmp24(closure_6, obj2);
    const tmp25 = closure_6;
  }
  return tmp24Result1;
};