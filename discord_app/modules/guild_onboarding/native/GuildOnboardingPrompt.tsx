// discord_app/modules/guild_onboarding/native/GuildOnboardingPrompt.tsx
import DropdownOptionRow from "DropdownOptionRow";
import TermsFieldListItem from "TermsFieldListItem";
import get_ActivityIndicator from "n";
import getEmojiToGroupId from "getEmojiToGroupId";
import get from "get";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleUpdate from "handleUpdate";
import { GuildOnboardingModalStates as closure_13 } from "GUILD_ONBOARDING_MODAL_KEY";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getAvatarURL } from "../../../utils/AvatarUtils.tsx";
import { Emoji } from "../../emojis/native/Emoji.tsx";

let c5;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function PromptHeader(currentPrompt) {
  let currentPromptIndex;
  let numberOfPrompts;
  currentPrompt = currentPrompt.currentPrompt;
  ({ numberOfPrompts, currentPromptIndex } = currentPrompt);
  const tmp = createCacheKey();
  let obj = { style: tmp.promptHeader, children: null };
  obj = { style: tmp.countText, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj = { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts };
  obj[3] = intl.format(getSystemLocale.t.isV0NW, obj);
  const items = [callback2(Text.Text, obj), ];
  let required;
  if (currentPrompt != null) {
    required = currentPrompt.required;
  }
  let tmp2Result = null;
  if (required) {
    const obj1 = { children: null };
    const obj2 = { style: null };
    obj2[0] = tmp.requiredSeparator;
    const items1 = [tmp5(tmp4, obj2), ];
    const obj3 = { variant: "text-sm/medium", color: "text-brand", children: null };
    const intl2 = tmp6(1236).intl;
    obj3[2] = intl2.string(tmp6(1236).t.Ur8Vrt);
    items1[1] = tmp5(tmp6(4281).Text, obj3);
    obj1[0] = items1;
    tmp2Result = tmp2(tmp3, obj1);
  }
  const obj4 = { children: null };
  items[1] = tmp2Result;
  obj[1] = items;
  const items2 = [closure_16(closure_6, obj), callback2(Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: currentPrompt.title })];
  obj4[0] = items2;
  return closure_16(closure_17, obj4);
}
function PromptFooter(onPress) {
  let currentPrompt;
  let helpText;
  let helpTextAdditional;
  let require;
  let selectedOptionIds;
  ({ guildId: require, currentPrompt, selectedOptionIds } = onPress);
  const lastPrompt = onPress.lastPrompt;
  let found;
  const tmp = createCacheKey();
  let obj = require(found[14]);
  const items = [createGuildRecordFromRust];
  let tmp5 = 0 === selectedOptionIds.length;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getGuild(closure_0));
  if (tmp5) {
    let required;
    if (currentPrompt != null) {
      required = currentPrompt.required;
    }
    tmp5 = !required;
  }
  const intl = tmp2(tmp3[21]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[21]).t;
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
  const memo = React.useMemo(() => {
    if (null != found) {
      let selectedRoleIds = outer1_0(found[26]).getSelectedRoleIds(tmp);
      const obj = outer1_0(found[26]);
    } else {
      const _Set = Set;
      selectedRoleIds = new Set();
    }
    return selectedRoleIds;
  }, items1);
  const memo1 = React.useMemo(() => {
    if (null != found) {
      let selectedChannelIds = outer1_0(found[26]).getSelectedChannelIds(tmp);
      const obj = outer1_0(found[26]);
    } else {
      const _Set = Set;
      selectedChannelIds = new Set();
    }
    return selectedChannelIds;
  }, items2);
  obj = { guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight };
  ({ helpText, helpTextAdditional } = selectedOptionIds(found[27])(obj));
  const tmp16 = selectedOptionIds(found[27])(obj);
  const token = require(found[16]).useToken(selectedOptionIds(tmp3[12]).colors.BACKGROUND_BASE_LOWER);
  let obj3 = selectedOptionIds(tmp3[17])(token);
  const tmp2Result = require(found[16]);
  const items3 = [obj3.alpha(0).hex(), ];
  const alphaResult = obj3.alpha(0);
  const obj6 = selectedOptionIds(found[17])(token);
  items3[1] = selectedOptionIds(found[17])(token).alpha(1).hex();
  obj = { style: tmp.footer, children: null };
  const obj1 = { style: items4, start: null, end: null, colors: null, pointerEvents: "none" };
  items4 = [tmp.scrollContainerGradient];
  const alphaResult1 = selectedOptionIds(found[17])(token).alpha(1);
  obj1[1] = require(found[25]).VerticalGradient.START;
  obj1[2] = require(found[25]).VerticalGradient.END;
  obj1[3] = items3;
  const items5 = [callback2(selectedOptionIds(found[24]), obj1), ];
  const obj2 = { style: tmp.footerContent, children: null };
  let tmp20Result = null;
  if (tmp10) {
    obj3 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj3[0] = tmp.helpText;
    const intl2 = tmp2(tmp3[21]).intl;
    obj3[3] = intl2.string(tmp2(tmp3[21]).t.dA1dSf);
    tmp20Result = tmp20(tmp2(tmp3[20]).Text, obj3);
  }
  const items6 = [tmp20Result, , ];
  if ("" !== helpText) {
    const obj4 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj4[0] = tmp.helpText;
    const items7 = [helpText, " ", helpTextAdditional];
    obj4[3] = items7;
    let tmp18Result = tmp18(tmp2(tmp3[20]).Text, obj4);
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
  items6[2] = callback2(require(found[22]).Button, { variant: str4, size: "md", grow: true, text: combined, onPress: onPress.handleOnPress, disabled: tmp10 });
  obj2[1] = items6;
  items5[1] = closure_16(closure_6, obj2);
  obj[1] = items5;
  return closure_16(closure_6, obj);
}
function formattedNameHighlight(children) {
  return callback2(Text.Text, { variant: "text-xs/medium", color: "mobile-text-heading-primary", children }, arg1);
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
      usableCustomEmojiById = outer1_9.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  obj = { style: tmp.dropdownPill, children: null };
  obj = { style: tmp.emojiContainer, children: null };
  const obj1 = { textEmojiStyle: tmp.optionTextEmoji, fastImageStyle: tmp.optionImageEmoji, src: null, name: null };
  let emojiURL;
  if (null != stateFromStores) {
    const obj2 = { id: null, animated: null, size: null };
    ({ id: obj6[0], animated: obj6[1] } = stateFromStores);
    obj2[2] = EMOJI_URL_BASE_SIZE;
    emojiURL = getAvatarURL.getEmojiURL(obj2);
    const tmp8Result = getAvatarURL;
  }
  obj1[2] = emojiURL;
  let emoji = option.emoji;
  let str;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  obj1[3] = str;
  obj[1] = closure_15(Emoji, obj1);
  const items1 = [closure_15(closure_6, obj), closure_15(option(4281).Text, { variant: "text-md/semibold", children: option.title })];
  obj[1] = items1;
  return closure_16(closure_6, obj);
}
({ Image: c5, View: closure_6, ScrollView: error, FlatList: metroImportAll } = get_ActivityIndicator);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
createCacheKey = { flex: { flex: 1 }, container: null, scrollContainer: null, scrollContainerGradient: null, promptHeader: null, requiredSeparator: null, countText: null, title: null, helpText: null, footer: null, footerText: null, footerContent: null, optionTextEmoji: null, optionImageEmoji: null, emojiContainer: null, dropdownContainer: null, emptyDropdownText: null, dropdownPill: null, dropdownIconContainer: null, dropdownIcon: null };
createCacheKey = { display: "flex", flex: 1, flexGrow: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, marginBottom: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[3] = { position: "absolute", height: 48, width: "100%", left: 0, top: -48 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
let obj1 = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[5] = { flexShrink: 0, marginHorizontal: 8, color: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BORDER_SUBTLE, width: 4, height: 4, borderRadius: require("Themes").radii.xs };
createCacheKey[6] = {};
createCacheKey[7] = { marginBottom: 32 };
createCacheKey[8] = { marginTop: 8, marginBottom: 8, textAlign: "center" };
let obj2 = { flexShrink: 0, marginHorizontal: 8, color: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BORDER_SUBTLE, width: 4, height: 4, borderRadius: require("Themes").radii.xs };
createCacheKey[9] = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[10] = { paddingHorizontal: 16, paddingBottom: 8, paddingTop: 8 };
createCacheKey[11] = { width: "100%", paddingHorizontal: 16 };
createCacheKey[12] = { fontSize: 18, lineHeight: 22, marginRight: 6 };
createCacheKey[13] = { height: 22, width: 22, marginRight: 6 };
createCacheKey[14] = { display: "flex", alignItems: "center" };
let obj3 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[15] = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
createCacheKey[16] = { marginTop: 16 };
let obj4 = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
createCacheKey[17] = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: 8, marginTop: 8, display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[18] = { position: "absolute", right: 4, top: 8 };
createCacheKey[19] = { height: 32, width: 32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: 8, marginTop: 8, display: "flex", flexDirection: "row", alignItems: "center" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompt.tsx");

export const RulesPrompt = function RulesPrompt(guildId) {
  let c5;
  let tmp6;
  guildId = guildId.guildId;
  let importDefault;
  let stateFromStores;
  let callback;
  let React;
  c5 = undefined;
  let START = createCacheKey();
  let END = stateFromStores;
  let obj = guildId(stateFromStores[13]);
  importDefault = obj.useNavigation();
  let obj1 = guildId(stateFromStores[14]);
  let items = [get];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_10.getRulesPrompt(guildId));
  let obj2 = guildId(stateFromStores[14]);
  const items1 = [createGuildRecordFromRust];
  callback = obj2.useStateFromStores(items1, () => {
    const guild = outer1_11.getGuild(guildId);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  let tmp3 = importDefault;
  const bottom = importDefault(stateFromStores[15])().bottom;
  const sum = 64 + bottom;
  let obj3 = guildId(stateFromStores[14]);
  const items2 = [get];
  React = obj3.useStateFromStores(items2, () => outer1_10.get(guildId));
  [tmp6, c5] = callback(React.useState(false), 2);
  let obj4 = guildId(stateFromStores[16]);
  const token = obj4.useToken(importDefault(stateFromStores[12]).colors.BACKGROUND_BASE_LOWER);
  let obj5 = importDefault(stateFromStores[17])(token);
  const tmp5 = callback(React.useState(false), 2);
  const items3 = [obj5.alpha(0).hex(), ];
  let obj7 = importDefault(stateFromStores[17])(token);
  const alphaResult = obj5.alpha(0);
  items3[1] = obj7.alpha(1).hex();
  if (null == stateFromStores) {
    return null;
  } else {
    const sum1 = sum + 8;
    obj = { top: true, style: null, children: null };
    const items4 = [, ];
    ({ flex: arr5[0], container: arr5[1] } = START);
    obj[1] = items4;
    let tmp11Result = closure_6;
    obj = { style: null, children: null };
    obj[0] = START.flex;
    obj1 = { contentContainerStyle: null, data: null, renderItem: null, onEndReached: null };
    const items5 = [START.scrollContainer, ];
    obj2 = { paddingBottom: null };
    obj2[0] = sum1;
    items5[1] = obj2;
    obj1[0] = items5;
    obj1[1] = [0];
    obj1[2] = function renderItem() {
      return outer1_15(arr(stateFromStores[19]), { rules: stateFromStores.values, rulesChannelId: DropdownOptionRow });
    };
    obj1[3] = function onEndReached() {
      return _undefined(true);
    };
    let items6 = [callback2(closure_8, obj1), ];
    obj3 = { style: null, children: null };
    const items7 = [, , ];
    ({ footer: arr8[0], footerContent: arr8[1] } = START);
    obj4 = { paddingBottom: null };
    obj4[0] = bottom;
    items7[2] = obj4;
    obj3[0] = items7;
    let Text = tmp(END[20]).Text;
    obj5 = { style: null, variant: "text-xs/medium", children: null };
    obj5[0] = START.footerText;
    const intl = tmp(END[21]).intl;
    let intl2 = intl.string;
    let string = tmp(END[21]).t;
    if (stringResult) {
      let intl2Result = intl2(string.arAe3I);
    } else {
      intl2Result = intl2(string.D0CVAc);
    }
    obj5[2] = intl2Result;
    tmp11Result = tmp11(Text, obj5);
    obj5 = [tmp11Result, ];
    const obj6 = { variant: "primary", size: "md", grow: true, disabled: null, text: null, onPress: null };
    obj6[3] = !stringResult;
    intl2 = tmp(END[21]).intl;
    string = intl2.string;
    stringResult = string(tmp(END[21]).t["0KL0ot"]);
    obj6[4] = stringResult;
    obj6[5] = function onPress() {
      let tmp2 = null != stateFromStores;
      if (tmp2) {
        tmp2 = null != TermsFieldListItem;
      }
      if (tmp2) {
        let obj = arr(stateFromStores[23]);
        obj = {};
        const merged = Object.assign(TermsFieldListItem);
        obj = {};
        const merged1 = Object.assign(tmp);
        obj.response = true;
        const items = [obj];
        obj.formFields = items;
        const result = obj.submitVerificationForm(guildId, obj);
        arr = arr.push(outer1_13.COMPLETED);
      }
    };
    Text = tmp11(tmp(END[22]).Button, obj6);
    obj5[1] = Text;
    obj3[1] = obj5;
    obj3 = tmp9(tmp11Result, obj3);
    items6[1] = obj3;
    obj[1] = items6;
    let tmp9Result = tmp9(tmp11Result, obj);
    obj = [tmp9Result, ];
    tmp3 = tmp3(END[24]);
    obj7 = { style: null, start: null, end: null, colors: null, pointerEvents: "none" };
    const items8 = [START.scrollContainerGradient, ];
    items6 = { bottom: null };
    items6[0] = sum1;
    items8[1] = items6;
    obj7[0] = items8;
    START = tmp(END[25]).VerticalGradient.START;
    obj7[1] = START;
    END = tmp(END[25]).VerticalGradient.END;
    obj7[2] = END;
    obj7[3] = items3;
    tmp11Result = tmp11(tmp3, obj7);
    obj[1] = tmp11Result;
    obj[2] = obj;
    tmp9Result = tmp9(tmp(END[18]).SafeAreaPaddingView, obj);
  }
};
export const MultipleChoicePrompt = function MultipleChoicePrompt(guildId) {
  let currentPromptIndex;
  let handleOnPress;
  let lastPrompt;
  let numberOfPrompts;
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  let stateFromStoresArray;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  let obj = guildId(selectOption[14]);
  const items = [handleUpdate];
  const items1 = [guildId, currentPrompt];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = outer1_12.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  obj = { children: null };
  obj = { contentContainerStyle: items2, children: null };
  items2 = [createCacheKey().scrollContainer, ];
  const tmp = createCacheKey();
  items2[1] = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  const items3 = [callback2(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj1 = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  const options = currentPrompt.options;
  items3[1] = callback2(closure_6, {
    children: options.map((id) => {
      let closure_0 = id;
      const obj = {
        option: id,
        guildId: closure_0,
        onSelect(arg0) {
          let flag = arg0;
          if (arg0 == null) {
            flag = false;
          }
          return outer1_2(outer1_1.id, id.id, flag);
        },
        selected: null
      };
      let flag = stateFromStoresArray.includes(id.id);
      if (flag == null) {
        flag = false;
      }
      obj[3] = flag;
      return outer1_15(currentPrompt(selectOption[28]), obj, id.id);
    })
  });
  obj[1] = items3;
  const items4 = [callback3(closure_7, obj), callback2(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj[0] = items4;
  return callback3(closure_17, obj);
};
export const DropdownPrompt = function DropdownPrompt(guildId) {
  let currentPromptIndex;
  let handleOnPress;
  let lastPrompt;
  let numberOfPrompts;
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  let stateFromStoresArray;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = createCacheKey();
  let obj = guildId(selectOption[14]);
  const items = [handleUpdate];
  const items1 = [guildId, currentPrompt];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = outer1_12.getOnboardingResponsesForPrompt(guildId, tmp.id);
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
  obj = { contentContainerStyle: items3, children: null };
  items3 = [tmp.scrollContainer, ];
  obj = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  items3[1] = obj;
  const callback = React.useCallback(() => {
    let obj = currentPrompt(selectOption[31]);
    obj = {
      guildId,
      promptId: currentPrompt.id,
      onSelect(id) {
        let flag = arg1;
        if (arg1 == null) {
          flag = false;
        }
        return closure_2(id.id, id.id, flag);
      }
    };
    obj.openLazy(guildId(selectOption[33])(selectOption[32], selectOption.paths), "DropdownOptions", obj);
  }, items2);
  const items4 = [callback2(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj1 = { style: tmp.dropdownContainer, onPress: callback, children: null };
  let tmp11Result = 0 === found.length;
  if (tmp11Result) {
    const obj2 = { style: null, variant: "text-sm/normal", color: "text-muted", children: "No answers selected." };
    obj2[0] = tmp.emptyDropdownText;
    tmp11Result = tmp11(tmp4(tmp3[20]).Text, obj2);
  }
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items5 = [tmp11Result, found.map((id) => callback(closure_22, { option: id }, id.id)), ];
  const obj5 = { style: tmp.dropdownIconContainer, children: null };
  obj5[1] = callback2(closure_5, { style: tmp.dropdownIcon, source: currentPrompt(selectOption[35]) });
  items5[2] = callback2(closure_6, obj5);
  obj1[2] = items5;
  obj4[0] = closure_16(guildId(selectOption[34]).PressableHighlight, obj1);
  items4[1] = callback2(closure_6, obj4);
  obj[1] = items4;
  const items6 = [closure_16(closure_7, obj), callback2(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj3[0] = items6;
  return closure_16(closure_17, obj3);
};