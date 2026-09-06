// === Module 7124: GuildOnboardingPrompt ===

// Module 7124 (GuildOnboardingPrompt)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5547 */;
import TermsFieldListDefault from "TermsFieldList" /* 5601 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 7106 */;
import EmojiDefault from "Emoji" /* 7130 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5572 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7100 */;

require = fn;
function PromptHeader(currentPrompt) {
  currentPrompt = currentPrompt.currentPrompt;
  ({ numberOfPrompts, currentPromptIndex } = currentPrompt);
  const tmp = closure_18();
  let obj = { style: tmp.promptHeader, children: null };
  obj = { style: tmp.countText, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj = { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts };
  obj.children = intl.format(util.t.isV0NW, obj);
  const items = [__initData(Text_Text.Text, obj), ];
  let required;
  if (currentPrompt != null) {
    required = currentPrompt.required;
  }
  let tmp2Result = null;
  if (required) {
    const obj1 = { children: null };
    const obj2 = { style: tmp.requiredSeparator };
    const items1 = [__initData(timestampProducer, obj2), ];
    const obj3 = { variant: "text-sm/medium", color: "text-brand", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(util.t.Ur8Vrt);
    items1[1] = __initData(Text_Text.Text, obj3);
    obj1.children = items1;
    tmp2Result = value2(closure_1_17, obj1);
  }
  const obj4 = { children: null };
  items[1] = tmp2Result;
  obj.children = items;
  const items2 = [value2(timestampProducer, obj), __initData(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: currentPrompt.title })];
  obj4.children = items2;
  return value2(closure_1_17, obj4);
}
function PromptFooter(onPress) {
  ({ guildId: require, currentPrompt, selectedOptionIds } = onPress);
  const lastPrompt = onPress.lastPrompt;
  let found;
  const tmp = closure_18();
  let obj = require("initialize");
  const items = [GuildStore];
  let tmp5 = 0 === selectedOptionIds.length;
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
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
  obj = { guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight };
  ({ helpText, helpTextAdditional } = selectedOptionIds(found[27])(obj));
  const tmp16 = selectedOptionIds(found[27])(obj);
  const token = require("useToken").useToken(selectedOptionIds(tmp3[12]).colors.BACKGROUND_BASE_LOWER);
  let obj3 = selectedOptionIds(tmp3[17])(token);
  const tmp2Result = require("useToken");
  const items3 = [obj3.alpha(0).hex(), ];
  const alphaResult = obj3.alpha(0);
  const obj6 = selectedOptionIds(found[17])(token);
  items3[1] = selectedOptionIds(found[17])(token).alpha(1).hex();
  obj = { style: tmp.footer, children: null };
  const obj1 = { style: null, start: null, end: null, colors: null, pointerEvents: "none" };
  const items4 = [tmp.scrollContainerGradient];
  obj1.style = items4;
  const alphaResult1 = selectedOptionIds(found[17])(token).alpha(1);
  obj1.start = require("ConstantsIOS").VerticalGradient.START;
  obj1.end = require("ConstantsIOS").VerticalGradient.END;
  obj1.colors = items3;
  const items5 = [closure_15(selectedOptionIds(found[24]), obj1), ];
  const obj2 = { style: tmp.footerContent, children: null };
  let tmp20Result = null;
  if (tmp10) {
    obj3 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: null };
    const intl2 = require("util").intl;
    obj3.children = intl2.string(require("util").t.dA1dSf);
    tmp20Result = closure_15(require("Text/Text").Text, obj3);
  }
  const items6 = [tmp20Result, , ];
  if ("" !== helpText) {
    const obj4 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: null };
    const items7 = [helpText, " ", helpTextAdditional];
    obj4.children = items7;
    let tmp18Result = closure_16(require("Text/Text").Text, obj4);
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
  obj2.children = items6;
  items5[1] = closure_16(closure_6, obj2);
  obj.children = items5;
  return closure_16(closure_6, obj);
}
function formattedNameHighlight(children, arg1) {
  return __initData(Text_Text.Text, { variant: "text-xs/medium", color: "mobile-text-heading-primary", children }, arg1);
}
function DropdownOption(option) {
  option = option.option;
  const tmp = closure_18();
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
  obj = { style: tmp.dropdownPill, children: null };
  obj = { style: tmp.emojiContainer, children: null };
  const obj1 = { textEmojiStyle: tmp.optionTextEmoji, fastImageStyle: tmp.optionImageEmoji, src: null, name: null };
  let emojiURL;
  if (null != stateFromStores) {
    const obj2 = { id: null, animated: null, size: null };
    ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
    obj2.size = EMOJI_URL_BASE_SIZE;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
    const tmp8Result = AvatarUtilsDefault;
  }
  obj1.src = emojiURL;
  let emoji = option.emoji;
  let str;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  obj1.name = str;
  obj.children = closure_15(EmojiDefault, obj1);
  const items1 = [closure_15(closure_6, obj), closure_15(option(4556).Text, { variant: "text-md/semibold", children: option.title })];
  obj.children = items1;
  return closure_16(closure_6, obj);
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
let closure_13 = fn(7097).GuildOnboardingModalStates;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1 }, container: null, scrollContainer: null, scrollContainerGradient: null, promptHeader: null, requiredSeparator: null, countText: null, title: null, helpText: null, footer: null, footerText: null, footerContent: null, optionTextEmoji: null, optionImageEmoji: null, emojiContainer: null, dropdownContainer: null, emptyDropdownText: null, dropdownPill: null, dropdownIconContainer: null, dropdownIcon: null };
createStyles = { display: "flex", flex: 1, flexGrow: 1, marginTop: fn(5682).NAV_BAR_HEIGHT, marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.scrollContainer = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.scrollContainerGradient = { position: "absolute", height: 48, width: "100%", left: 0, top: -48 };
createStyles.promptHeader = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
let size = { flexShrink: 0, marginHorizontal: 8, color: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: 4, height: 4, borderRadius: nativeDefault.radii.xs };
createStyles.requiredSeparator = size;
createStyles.countText = {};
createStyles.title = { marginBottom: 32 };
createStyles.helpText = { marginTop: 8, marginBottom: 8, textAlign: "center" };
let obj1 = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.footer = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.footerText = { paddingHorizontal: 16, paddingBottom: 8, paddingTop: 8 };
createStyles.footerContent = { width: "100%", paddingHorizontal: 16 };
createStyles.optionTextEmoji = { fontSize: 18, lineHeight: 22, marginRight: 6 };
createStyles.optionImageEmoji = { height: 22, width: 22, marginRight: 6 };
createStyles.emojiContainer = { display: "flex", alignItems: "center" };
let obj2 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.dropdownContainer = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
createStyles.emptyDropdownText = { marginTop: 16 };
let obj3 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
createStyles.dropdownPill = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: 8, marginTop: 8, display: "flex", flexDirection: "row", alignItems: "center" };
createStyles.dropdownIconContainer = { position: "absolute", right: 4, top: 8 };
createStyles.dropdownIcon = { height: 32, width: 32 };
let closure_18 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompt.tsx");

export const RulesPrompt = function RulesPrompt(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  c5 = undefined;
  let START = closure_18();
  let END = stateFromStores;
  let obj = guildId(stateFromStores[13]);
  importDefault = obj.useNavigation();
  let obj1 = guildId(stateFromStores[14]);
  let items = [MemberVerificationFormStore];
  stateFromStores = obj1.useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  let obj2 = guildId(stateFromStores[14]);
  const items1 = [GuildStore];
  _slicedToArray = obj2.useStateFromStores(items1, () => {
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
  noop = obj3.useStateFromStores(items2, () => MemberVerificationFormStore.get(guildId));
  [tmp6, c5] = _slicedToArray(noop.useState(false), 2);
  let obj4 = guildId(stateFromStores[16]);
  const token = obj4.useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  let obj5 = require("module_672")(token);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const items3 = [obj5.alpha(0).hex(), ];
  let obj7 = require("module_672")(token);
  const alphaResult = obj5.alpha(0);
  items3[1] = obj7.alpha(1).hex();
  if (null == stateFromStores) {
    return null;
  } else {
    const sum1 = sum + 8;
    obj = { top: true, style: null, children: null };
    const items4 = [, ];
    ({ flex: arr5[0], container: arr5[1] } = START);
    obj.style = items4;
    let tmp11Result = closure_6;
    obj = { style: START.flex, children: null };
    obj1 = { contentContainerStyle: null, data: null, renderItem: null, onEndReached: null };
    const items5 = [START.scrollContainer, ];
    obj2 = { paddingBottom: sum1 };
    items5[1] = obj2;
    obj1.contentContainerStyle = items5;
    obj1.data = [0];
    obj1.renderItem = function renderItem() {
      return __initData(TermsFieldListDefault, { rules: stateFromStores.values, rulesChannelId });
    };
    obj1.onEndReached = function onEndReached() {
      return _undefined(true);
    };
    let items6 = [closure_15(closure_8, obj1), ];
    obj3 = { style: null, children: null };
    const items7 = [, , ];
    ({ footer: arr8[0], footerContent: arr8[1] } = START);
    obj4 = { paddingBottom: bottom };
    items7[2] = obj4;
    obj3.style = items7;
    let Text = tmp(END[20]).Text;
    obj5 = { style: START.footerText, variant: "text-xs/medium", children: null };
    const intl = tmp(END[21]).intl;
    let intl2 = intl.string;
    let string = tmp(END[21]).t;
    if (stringResult) {
      let intl2Result = intl2(string.arAe3I);
    } else {
      intl2Result = intl2(string.D0CVAc);
    }
    obj5.children = intl2Result;
    tmp11Result = closure_15(Text, obj5);
    obj5 = [tmp11Result, ];
    const obj6 = { variant: "primary", size: "md", grow: true, disabled: !stringResult, text: null, onPress: null };
    intl2 = tmp(END[21]).intl;
    string = intl2.string;
    stringResult = string(tmp(END[21]).t["0KL0ot"]);
    obj6.text = stringResult;
    obj6.onPress = function onPress() {
      let tmp2 = null != stateFromStores;
      if (tmp2) {
        tmp2 = null != closure_4;
      }
      if (tmp2) {
        let obj = {};
        const merged = Object.assign(closure_4);
        obj = {};
        const merged1 = Object.assign(stateFromStores);
        obj.response = true;
        const items = [obj];
        obj.formFields = items;
        const result = obj.submitVerificationForm(guildId, obj);
        closure_1.push(constants.COMPLETED);
      }
    };
    Text = closure_15(tmp(END[22]).Button, obj6);
    obj5[1] = Text;
    obj3.children = obj5;
    obj3 = closure_16(tmp11Result, obj3);
    items6[1] = obj3;
    obj.children = items6;
    let tmp9Result = closure_16(tmp11Result, obj);
    obj = [tmp9Result, ];
    tmp3 = tmp3(END[24]);
    obj7 = { style: null, start: null, end: null, colors: null, pointerEvents: "none" };
    const items8 = [START.scrollContainerGradient, ];
    items6 = { bottom: sum1 };
    items8[1] = items6;
    obj7.style = items8;
    START = tmp(END[25]).VerticalGradient.START;
    obj7.start = START;
    END = tmp(END[25]).VerticalGradient.END;
    obj7.end = END;
    obj7.colors = items3;
    tmp11Result = closure_15(tmp3, obj7);
    obj[1] = tmp11Result;
    obj.children = obj;
    tmp9Result = closure_16(tmp(END[18]).SafeAreaPaddingView, obj);
  }
  const alphaResult1 = obj7.alpha(1);
};
export const MultipleChoicePrompt = function MultipleChoicePrompt(guildId) {
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  let obj = guildId(selectOption[14]);
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  obj = { children: null };
  obj = { contentContainerStyle: null, children: null };
  const items2 = [closure_18().scrollContainer, ];
  const tmp = closure_18();
  items2[1] = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  obj.contentContainerStyle = items2;
  const items3 = [closure_15(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj2 = { children: null };
  const options = currentPrompt.options;
  obj2.children = options.map((option) => {
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
  items3[1] = closure_15(closure_6, obj2);
  obj.children = items3;
  const items4 = [closure_16(closure_7, obj), closure_15(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj.children = items4;
  return closure_16(closure_17, obj);
};
export const DropdownPrompt = function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = closure_18();
  let obj = guildId(selectOption[14]);
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
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
  obj = { contentContainerStyle: null, children: null };
  const items3 = [tmp.scrollContainer, ];
  obj = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  items3[1] = obj;
  obj.contentContainerStyle = items3;
  const callback = noop.useCallback(() => {
    const obj = {
      guildId,
      promptId: currentPrompt.id,
      onSelect(id, flag) {
        if (flag == null) {
          flag = false;
        }
        return selectOption(id.id, id.id, flag);
      }
    };
    obj.openLazy(asyncRequireImpl(7135, dependencyMap.paths), "DropdownOptions", obj);
  }, items2);
  const items4 = [closure_15(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj1 = { style: tmp.dropdownContainer, onPress: callback, children: null };
  let tmp11Result = 0 === found.length;
  if (tmp11Result) {
    const obj2 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted", children: "No answers selected." };
    tmp11Result = closure_15(tmp4(tmp3[20]).Text, obj2);
  }
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items5 = [tmp11Result, found.map((option) => closure_1_15(DropdownOption, { option }, option.id)), ];
  const obj5 = { style: tmp.dropdownIconContainer, children: closure_15(closure_5, { style: tmp.dropdownIcon, source: currentPrompt(selectOption[35]) }) };
  items5[2] = closure_15(closure_6, obj5);
  obj1.children = items5;
  obj4.children = closure_16(guildId(selectOption[34]).PressableHighlight, obj1);
  items4[1] = closure_15(closure_6, obj4);
  obj.children = items4;
  const items6 = [closure_16(closure_7, obj), closure_15(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj3.children = items6;
  return closure_16(closure_17, obj3);
};