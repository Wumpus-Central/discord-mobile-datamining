// === Module 7227: GuildOnboardingPrompt ===

// Module 7227 (GuildOnboardingPrompt)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import Text_Text from "Text/Text" /* 4632 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5628 */;
import TermsFieldListDefault from "TermsFieldList" /* 5682 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 7209 */;
import EmojiDefault from "Emoji" /* 7233 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5540 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5653 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7203 */;

const require = globalThis.__r;

require = fn;
function PromptHeader(currentPrompt) {
  currentPrompt = currentPrompt.currentPrompt;
  ({ numberOfPrompts, currentPromptIndex } = currentPrompt);
  const tmp = closure_18();
  const obj = { style: tmp.promptHeader, children: null };
  const obj2 = { style: tmp.countText, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.isV0NW, { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts });
  const items = [__initData(Text_Text.Text, obj2), ];
  let required;
  if (currentPrompt != null) {
    required = currentPrompt.required;
  }
  let tmp2Result = null;
  if (required) {
    const obj4 = { children: null };
    const obj5 = { style: tmp.requiredSeparator };
    const items1 = [__initData(timestampProducer, obj5), ];
    const obj6 = { variant: "text-sm/medium", color: "text-brand", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(util.t.Ur8Vrt);
    items1[1] = __initData(Text_Text.Text, obj6);
    obj4.children = items1;
    tmp2Result = value2(closure_1_17, obj4);
  }
  const obj7 = { children: null };
  items[1] = tmp2Result;
  obj.children = items;
  const items2 = [value2(timestampProducer, obj), __initData(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: currentPrompt.title })];
  obj7.children = items2;
  return value2(closure_1_17, obj7);
}
function PromptFooter(onPress) {
  ({ guildId: require, currentPrompt, selectedOptionIds } = onPress);
  const lastPrompt = onPress.lastPrompt;
  let found;
  const tmp = closure_18();
  const items = [GuildStore];
  let tmp5 = 0 === selectedOptionIds.length;
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(require));
  if (tmp5) {
    let required;
    if (currentPrompt != null) {
      required = currentPrompt.required;
    }
    tmp5 = !required;
  }
  const intl = require("util").intl;
  const string = intl.string;
  const t = require("util").t;
  if (lastPrompt) {
    const _HermesInternal = HermesInternal;
    let combined = "" + string(t["8SuVoE"]) + " \u{1F389}";
  } else if (tmp5) {
    combined = string(t["5Wxrcd"]);
  } else {
    combined = string(t.PDTjLN);
  }
  let tmp10 = 0 === selectedOptionIds.length;
  if (tmp10) {
    let required1;
    if (currentPrompt != null) {
      required1 = currentPrompt.required;
    }
    tmp10 = required1;
  }
  found = undefined;
  if (currentPrompt != null) {
    const options = currentPrompt.options;
    if (options != null) {
      found = options.filter((id) => selectedOptionIds.includes(id.id));
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
  const obj2 = { guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight };
  ({ helpText, helpTextAdditional } = selectedOptionIds(found[27])({ guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight }));
  const tmp16 = selectedOptionIds(found[27])({ guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight });
  const token = require("useToken").useToken(selectedOptionIds(tmp3[12]).colors.BACKGROUND_BASE_LOWER);
  const tmp2Result = require("useToken");
  const obj4 = selectedOptionIds(found[17])(token);
  const items3 = [selectedOptionIds(found[17])(token).alpha(0).hex(), ];
  const alphaResult = selectedOptionIds(found[17])(token).alpha(0);
  const obj6 = selectedOptionIds(found[17])(token);
  items3[1] = selectedOptionIds(found[17])(token).alpha(1).hex();
  const obj3 = { style: tmp.footer, children: null };
  const obj5 = { style: null, start: null, end: null, colors: null, pointerEvents: "none" };
  const items4 = [tmp.scrollContainerGradient];
  obj5.style = items4;
  const alphaResult1 = selectedOptionIds(found[17])(token).alpha(1);
  obj5.start = require("ConstantsIOS").VerticalGradient.START;
  obj5.end = require("ConstantsIOS").VerticalGradient.END;
  obj5.colors = items3;
  const items5 = [closure_15(selectedOptionIds(found[24]), obj5), ];
  const obj7 = { style: tmp.footerContent, children: null };
  let tmp20Result = null;
  if (tmp10) {
    const obj8 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: null };
    const intl2 = require("util").intl;
    obj8.children = intl2.string(require("util").t.dA1dSf);
    tmp20Result = closure_15(require("Text/Text").Text, obj8);
  }
  const items6 = [tmp20Result, , ];
  if ("" !== helpText) {
    const obj9 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: null };
    const items7 = [helpText, " ", helpTextAdditional];
    obj9.children = items7;
    let tmp18Result = closure_16(require("Text/Text").Text, obj9);
  } else {
    tmp18Result = null;
  }
  items6[1] = tmp18Result;
  let str4 = "primary";
  if (tmp5) {
    str4 = "primary";
    if (!lastPrompt) {
      str4 = "secondary";
    }
  }
  items6[2] = closure_15(require("components/Button/Button").Button, { variant: str4, size: "md", grow: true, text: combined, onPress: onPress.handleOnPress, disabled: tmp10 });
  obj7.children = items6;
  items5[1] = closure_16(closure_6, obj7);
  obj3.children = items5;
  return closure_16(closure_6, obj3);
}
function formattedNameHighlight(children, arg1) {
  return __initData(Text_Text.Text, { variant: "text-xs/medium", color: "mobile-text-heading-primary", children }, arg1);
}
function DropdownOption(option) {
  option = option.option;
  const tmp = closure_18();
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
  const obj2 = { style: tmp.dropdownPill, children: null };
  const obj3 = { style: tmp.emojiContainer, children: null };
  const obj4 = { textEmojiStyle: tmp.optionTextEmoji, fastImageStyle: tmp.optionImageEmoji, src: null, name: null };
  let emojiURL;
  const obj = option(504);
  const tmp2 = option;
  if (null != stateFromStores) {
    const obj5 = { id: null, animated: null, size: null };
    ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
    obj5.size = EMOJI_URL_BASE_SIZE;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj5);
    const tmp8Result = AvatarUtilsDefault;
  }
  obj4.src = emojiURL;
  let emoji = option.emoji;
  let str;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  obj4.name = str;
  obj3.children = closure_15(EmojiDefault, obj4);
  const items1 = [closure_15(closure_6, obj3), closure_15(tmp2(4632).Text, { variant: "text-md/semibold", children: option.title })];
  obj2.children = items1;
  return closure_16(closure_6, obj2);
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
let closure_13 = fn(7200).GuildOnboardingModalStates;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { flex: { flex: 1 }, container: { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5763).NAV_BAR_HEIGHT, marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, scrollContainer: null, scrollContainerGradient: null, promptHeader: null, requiredSeparator: null, countText: null, title: null, helpText: null, footer: null, footerText: null, footerContent: null, optionTextEmoji: null, optionImageEmoji: null, emojiContainer: null, dropdownContainer: null, emptyDropdownText: null, dropdownPill: null, dropdownIconContainer: null, dropdownIcon: null };
let obj3 = { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5763).NAV_BAR_HEIGHT, marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.scrollContainer = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.scrollContainerGradient = { position: "absolute", height: 48, width: "100%", left: 0, top: -48 };
obj2.promptHeader = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
let size = { flexShrink: 0, marginHorizontal: 8, color: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: 4, height: 4, borderRadius: nativeDefault.radii.xs };
obj2.requiredSeparator = size;
obj2.countText = {};
obj2.title = { marginBottom: 32 };
obj2.helpText = { marginTop: 8, marginBottom: 8, textAlign: "center" };
let obj4 = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.footer = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.footerText = { paddingHorizontal: 16, paddingBottom: 8, paddingTop: 8 };
obj2.footerContent = { width: "100%", paddingHorizontal: 16 };
obj2.optionTextEmoji = { fontSize: 18, lineHeight: 22, marginRight: 6 };
obj2.optionImageEmoji = { height: 22, width: 22, marginRight: 6 };
obj2.emojiContainer = { display: "flex", alignItems: "center" };
let obj5 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.dropdownContainer = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
obj2.emptyDropdownText = { marginTop: 16 };
let obj6 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
obj2.dropdownPill = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: 8, marginTop: 8, display: "flex", flexDirection: "row", alignItems: "center" };
obj2.dropdownIconContainer = { position: "absolute", right: 4, top: 8 };
obj2.dropdownIcon = { height: 32, width: 32 };
let closure_18 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompt.tsx");

export const RulesPrompt = function RulesPrompt(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  c5 = undefined;
  let START = closure_18();
  let END = stateFromStores;
  importDefault = guildId(stateFromStores[13]).useNavigation();
  let obj = guildId(stateFromStores[13]);
  let items = [MemberVerificationFormStore];
  stateFromStores = guildId(stateFromStores[14]).useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  let obj2 = guildId(stateFromStores[14]);
  const items1 = [GuildStore];
  _slicedToArray = guildId(stateFromStores[14]).useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(guildId);
    rulesChannelId = undefined;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  let tmp3 = importDefault;
  const bottom = require("useSafeAreaInsets")().bottom;
  const sum = 64 + bottom;
  let obj3 = guildId(stateFromStores[14]);
  const items2 = [MemberVerificationFormStore];
  noop = guildId(stateFromStores[14]).useStateFromStores(items2, () => MemberVerificationFormStore.get(guildId));
  const obj4 = guildId(stateFromStores[14]);
  [tmp6, c5] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const token = guildId(stateFromStores[16]).useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const obj5 = guildId(stateFromStores[16]);
  const obj6 = require("module_672")(token);
  const items3 = [require("module_672")(token).alpha(0).hex(), ];
  const alphaResult = require("module_672")(token).alpha(0);
  const obj8 = require("module_672")(token);
  items3[1] = require("module_672")(token).alpha(1).hex();
  if (null == stateFromStores) {
    return null;
  } else {
    const sum1 = sum + 8;
    const obj7 = { top: true, style: null, children: null };
    const items4 = [, ];
    ({ flex: arr5[0], container: arr5[1] } = START);
    obj7.style = items4;
    let tmp11Result2 = closure_6;
    let obj9 = { style: START.flex, children: null };
    const obj10 = { contentContainerStyle: null, data: null, renderItem: null, onEndReached: null };
    const items5 = [START.scrollContainer, ];
    const obj11 = { paddingBottom: sum1 };
    items5[1] = obj11;
    obj10.contentContainerStyle = items5;
    obj10.data = [0];
    obj10.renderItem = function renderItem() {
      return __initData(TermsFieldListDefault, { rules: stateFromStores.values, rulesChannelId });
    };
    obj10.onEndReached = function onEndReached() {
      return _undefined(true);
    };
    let items6 = [closure_15(closure_8, obj10), ];
    let obj12 = { style: null, children: null };
    const items7 = [, , ];
    ({ footer: arr8[0], footerContent: arr8[1] } = START);
    const obj13 = { paddingBottom: bottom };
    items7[2] = obj13;
    obj12.style = items7;
    let Text = tmp(END[20]).Text;
    let obj14 = { style: START.footerText, variant: "text-xs/medium", children: null };
    const intl = tmp(END[21]).intl;
    let intl2 = intl.string;
    let string = tmp(END[21]).t;
    if (stringResult) {
      let intl2Result = intl2(string.arAe3I);
    } else {
      intl2Result = intl2(string.D0CVAc);
    }
    obj14.children = intl2Result;
    obj14 = [, ];
    obj14[0] = closure_15(Text, obj14);
    const obj15 = { variant: "primary", size: "md", grow: true, disabled: !stringResult, text: null, onPress: null };
    intl2 = tmp(END[21]).intl;
    string = intl2.string;
    stringResult = string(tmp(END[21]).t["0KL0ot"]);
    obj15.text = stringResult;
    obj15.onPress = function onPress() {
      let tmp2 = null != stateFromStores;
      if (tmp2) {
        tmp2 = null != closure_4;
      }
      if (tmp2) {
        const obj2 = {};
        const merged = Object.assign(closure_4);
        const obj3 = {};
        const merged1 = Object.assign(stateFromStores);
        obj3.response = true;
        const items = [obj3];
        obj2.formFields = items;
        const result = MemberVerificationActionCreatorsDefault.submitVerificationForm(guildId, obj2);
        closure_1.push(constants.COMPLETED);
      }
    };
    Text = closure_15(tmp(END[22]).Button, obj15);
    obj14[1] = Text;
    obj12.children = obj14;
    obj12 = closure_16(tmp11Result2, obj12);
    items6[1] = obj12;
    obj9.children = items6;
    const tmp11Result = closure_15(Text, obj14);
    obj9 = [, ];
    obj9[0] = closure_16(tmp11Result2, obj9);
    tmp3 = tmp3(END[24]);
    const obj16 = { style: null, start: null, end: null, colors: null, pointerEvents: "none" };
    const items8 = [START.scrollContainerGradient, ];
    items6 = { bottom: sum1 };
    items8[1] = items6;
    obj16.style = items8;
    START = tmp(END[25]).VerticalGradient.START;
    obj16.start = START;
    END = tmp(END[25]).VerticalGradient.END;
    obj16.end = END;
    obj16.colors = items3;
    tmp11Result2 = closure_15(tmp3, obj16);
    obj9[1] = tmp11Result2;
    obj7.children = obj9;
    closure_16(tmp(END[18]).SafeAreaPaddingView, obj7);
    const tmp9Result = closure_16(tmp11Result2, obj9);
  }
  const alphaResult1 = require("module_672")(token).alpha(1);
};
export const MultipleChoicePrompt = function MultipleChoicePrompt(guildId) {
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = closure_18();
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = guildId(selectOption[14]).useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  const obj2 = { children: null };
  const obj3 = { contentContainerStyle: null, children: null };
  const items2 = [tmp.scrollContainer, ];
  let obj = guildId(selectOption[14]);
  items2[1] = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  obj3.contentContainerStyle = items2;
  const items3 = [closure_15(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj5 = { children: null };
  const options = currentPrompt.options;
  obj5.children = options.map((option) => {
    guildId = option;
    const obj = {
      option,
      guildId,
      onSelect(flag) {
        if (flag == null) {
          flag = false;
        }
        return selectOption(currentPrompt.id, option.id, flag);
      },
      selected: null
    };
    let flag = stateFromStoresArray.includes(option.id);
    if (flag == null) {
      flag = false;
    }
    obj.selected = flag;
    return closure_1_15(currentPrompt(selectOption[28]), obj, option.id);
  });
  items3[1] = closure_15(closure_6, obj5);
  obj3.children = items3;
  const items4 = [closure_16(closure_7, obj3), closure_15(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj2.children = items4;
  return closure_16(closure_17, obj2);
};
export const DropdownPrompt = function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = closure_18();
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = guildId(selectOption[14]).useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  let found;
  if (currentPrompt != null) {
    const options = currentPrompt.options;
    if (options != null) {
      found = options.filter((id) => stateFromStoresArray.includes(id.id));
    }
  }
  const items2 = [guildId, currentPrompt.id, selectOption];
  const obj2 = { contentContainerStyle: null, children: null };
  const items3 = [tmp.scrollContainer, ];
  const obj = guildId(selectOption[14]);
  const tmp2 = currentPrompt;
  items3[1] = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  obj2.contentContainerStyle = items3;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7238, dependencyMap.paths), "DropdownOptions", {
      guildId,
      promptId: currentPrompt.id,
      onSelect(id, flag) {
        if (flag == null) {
          flag = false;
        }
        return selectOption(id.id, id.id, flag);
      }
    });
  }, items2);
  const items4 = [closure_15(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj4 = { style: tmp.dropdownContainer, onPress: callback, children: null };
  let tmp11Result = 0 === found.length;
  if (tmp11Result) {
    const obj5 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted", children: "No answers selected." };
    tmp11Result = closure_15(tmp4(tmp3[20]).Text, obj5);
  }
  const obj6 = { children: null };
  const obj7 = { children: null };
  const items5 = [tmp11Result, found.map((option) => closure_1_15(DropdownOption, { option }, option.id)), ];
  const obj8 = { style: tmp.dropdownIconContainer, children: null };
  const obj3 = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  obj8.children = closure_15(closure_5, { style: tmp.dropdownIcon, source: tmp2(selectOption[35]) });
  items5[2] = closure_15(closure_6, obj8);
  obj4.children = items5;
  obj7.children = closure_16(guildId(selectOption[34]).PressableHighlight, obj4);
  items4[1] = closure_15(closure_6, obj7);
  obj2.children = items4;
  const items6 = [closure_16(closure_7, obj2), closure_15(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj6.children = items6;
  return closure_16(closure_17, obj6);
};