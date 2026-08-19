// === Module 6805: PromptHeader ===

// Module 6805 (PromptHeader)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import Text2 from "Text" /* 4734 */;
import EmojiDefault from "Emoji" /* 6930 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import get from "get" /* 6801 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import handleUpdate from "handleUpdate" /* 6788 */;
import { GuildOnboardingModalStates as closure_13 } from "GUILD_ONBOARDING_MODAL_KEY" /* 6785 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1925 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function PromptHeader(currentPrompt) {
  currentPrompt = currentPrompt.currentPrompt;
  ({ numberOfPrompts, currentPromptIndex } = currentPrompt);
  const tmp = callback4();
  const intl = getSystemLocale.intl;
  const obj = { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts };
  obj[3] = intl.format(getSystemLocale.t.isV0NW, obj);
  const items = [callback2(Text2.Text, obj), ];
  let required;
  if (currentPrompt != null) {
    required = currentPrompt.required;
  }
  let tmp2Result = null;
  if (required) {
    obj1 = { children: null };
    const obj2 = { style: null };
    obj2[0] = tmp.requiredSeparator;
    const items1 = [callback2(closure_6, obj2), ];
    const obj3 = { variant: "text-sm/medium", color: "text-brand", children: null };
    const intl2 = getSystemLocale.intl;
    obj3[2] = intl2.string(getSystemLocale.t.Ur8Vrt);
    items1[1] = callback2(Text2.Text, obj3);
    obj1[0] = items1;
    tmp2Result = callback2(closure_17, obj1);
  }
  const obj4 = { children: null };
  items[1] = tmp2Result;
  obj[1] = items;
  const items2 = [callback2(closure_6, obj), callback2(Text2.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: currentPrompt.title })];
  obj4[0] = items2;
  return callback2(closure_17, obj4);
}
function PromptFooter(onPress) {
  ({ guildId: require, currentPrompt, selectedOptionIds } = onPress);
  const lastPrompt = onPress.lastPrompt;
  let found;
  const tmp = callback4();
  let obj = require(found[14]);
  const items = [closure_11];
  let tmp5 = 0 === selectedOptionIds.length;
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getGuild(closure_0));
  if (tmp5) {
    let required;
    if (currentPrompt != null) {
      required = currentPrompt.required;
    }
    tmp5 = !required;
  }
  const intl = require(tmp3[21]).intl;
  const string = intl.string;
  const t = require(tmp3[21]).t;
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
      found = options.filter((item, index) => selectedOptionIds.includes(item.id));
    }
  }
  const items1 = [found];
  const items2 = [found];
  const memo = React.useMemo(() => {
    if (null != found) {
      let selectedRoleIds = require(found[26]).getSelectedRoleIds(tmp);
      const obj = require(found[26]);
    } else {
      const _Set = Set;
      selectedRoleIds = new Set();
    }
    return selectedRoleIds;
  }, items1);
  const memo1 = React.useMemo(() => {
    if (null != found) {
      let selectedChannelIds = require(found[26]).getSelectedChannelIds(tmp);
      const obj = require(found[26]);
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
  obj1 = { style: items4, start: null, end: null, colors: null, pointerEvents: "none" };
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
    const intl2 = require(tmp3[21]).intl;
    obj3[3] = intl2.string(require(tmp3[21]).t.dA1dSf);
    tmp20Result = callback2(require(tmp3[20]).Text, obj3);
  }
  const items6 = [tmp20Result, , ];
  if ("" !== helpText) {
    const obj4 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj4[0] = tmp.helpText;
    const items7 = [helpText, " ", helpTextAdditional];
    obj4[3] = items7;
    let tmp18Result = callback2(require(tmp3[20]).Text, obj4);
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
  items5[1] = callback2(closure_6, obj2);
  obj[1] = items5;
  return callback2(closure_6, obj);
}
function formattedNameHighlight(children) {
  return callback2(Text2.Text, { variant: "text-xs/medium", color: "mobile-text-heading-primary", children }, arg1);
}
function DropdownOption(option) {
  option = option.option;
  const tmp = callback4();
  let obj = option(589);
  const items = [closure_9];
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
      usableCustomEmojiById = closure_1_9.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  obj = { style: tmp.emojiContainer, children: null };
  obj1 = { textEmojiStyle: tmp.optionTextEmoji, fastImageStyle: tmp.optionImageEmoji, src: null, name: null };
  let emojiURL;
  if (null != stateFromStores) {
    const obj2 = { id: null, animated: null, size: null };
    ({ id: obj6[0], animated: obj6[1] } = stateFromStores);
    obj2[2] = EMOJI_URL_BASE_SIZE;
    emojiURL = getAvatarURLDefault.getEmojiURL(obj2);
    const tmp8Result = getAvatarURLDefault;
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
  obj[1] = callback(EmojiDefault, obj1);
  const items1 = [callback(closure_6, obj), callback(option(4734).Text, { variant: "text-md/semibold", children: option.title })];
  obj[1] = items1;
  return callback2(closure_6, obj);
}
({ Image: c5, View: closure_6, ScrollView: error, FlatList: closure_8 } = get_ActivityIndicator);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createCacheKey = { display: "flex", flex: 1, flexGrow: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, marginBottom: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[3] = { position: "absolute", height: 48, width: "100%", left: 0, top: -48 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
createCacheKey[5] = { flexShrink: 0, marginHorizontal: 8, color: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, width: 4, height: 4, borderRadius: ThemesDefault.radii.xs };
createCacheKey[6] = {};
createCacheKey[7] = { marginBottom: 32 };
createCacheKey[8] = { marginTop: 8, marginBottom: 8, textAlign: "center" };
createCacheKey[9] = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[10] = { paddingHorizontal: 16, paddingBottom: 8, paddingTop: 8 };
createCacheKey[11] = { width: "100%", paddingHorizontal: 16 };
createCacheKey[12] = { fontSize: 18, lineHeight: 22, marginRight: 6 };
createCacheKey[13] = { height: 22, width: 22, marginRight: 6 };
createCacheKey[14] = { display: "flex", alignItems: "center" };
createCacheKey[15] = { borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
createCacheKey[16] = { marginTop: 16 };
createCacheKey[17] = { borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: 8, marginTop: 8, display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[18] = { position: "absolute", right: 4, top: 8 };
createCacheKey[19] = { height: 32, width: 32 };
let closure_18 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompt.tsx");

export const RulesPrompt = function RulesPrompt(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  c5 = undefined;
  let START = callback4();
  let END = stateFromStores;
  let obj = guildId(stateFromStores[13]);
  importDefault = obj.useNavigation();
  obj1 = guildId(stateFromStores[14]);
  let items = [closure_10];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_10.getRulesPrompt(guildId));
  let obj2 = guildId(stateFromStores[14]);
  const items1 = [closure_11];
  const callback = obj2.useStateFromStores(items1, () => {
    const guild = closure_1_11.getGuild(guildId);
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
  const items2 = [closure_10];
  const React = obj3.useStateFromStores(items2, () => closure_1_10.get(guildId));
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
      return closure_1_15(arr(stateFromStores[19]), { rules: stateFromStores.values, rulesChannelId: closure_3 });
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
    tmp11Result = callback2(Text, obj5);
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
        tmp2 = null != closure_4;
      }
      if (tmp2) {
        arr(stateFromStores[23]);
        const merged = Object.assign(closure_4);
        const obj = {};
        const merged1 = Object.assign(stateFromStores);
        obj.response = true;
        const items = [obj];
        obj.formFields = items;
        const result = obj.submitVerificationForm(guildId, obj);
        arr = arr.push(closure_1_13.COMPLETED);
      }
    };
    Text = callback2(tmp(END[22]).Button, obj6);
    obj5[1] = Text;
    obj3[1] = obj5;
    obj3 = callback2(tmp11Result, obj3);
    items6[1] = obj3;
    obj[1] = items6;
    let tmp9Result = callback2(tmp11Result, obj);
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
    tmp11Result = callback2(tmp3, obj7);
    obj[1] = tmp11Result;
    obj[2] = obj;
    tmp9Result = callback2(tmp(END[18]).SafeAreaPaddingView, obj);
  }
  const alphaResult1 = obj7.alpha(1);
};
export const MultipleChoicePrompt = function MultipleChoicePrompt(guildId) {
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  let obj = guildId(selectOption[14]);
  const items = [closure_12];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = closure_1_12.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  obj = { contentContainerStyle: items2, children: null };
  items2 = [callback4().scrollContainer, ];
  const tmp = callback4();
  items2[1] = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  const items3 = [callback2(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  obj1 = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  const options = currentPrompt.options;
  items3[1] = callback2(closure_6, {
    children: options.map((item, index) => {
      closure_0 = item;
      const obj = {
        option: item,
        guildId: closure_0,
        onSelect(flag) {
          if (flag == null) {
            flag = false;
          }
          return selectOption(currentPrompt.id, item.id, flag);
        },
        selected: null
      };
      let flag = stateFromStoresArray.includes(item.id);
      if (flag == null) {
        flag = false;
      }
      obj[3] = flag;
      return closure_1_15(currentPrompt(selectOption[28]), obj, item.id);
    })
  });
  obj[1] = items3;
  const items4 = [callback3(closure_7, obj), callback2(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj[0] = items4;
  return callback3(closure_17, obj);
};
export const DropdownPrompt = function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = callback4();
  let obj = guildId(selectOption[14]);
  const items = [closure_12];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = closure_1_12.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  let found;
  if (currentPrompt != null) {
    const options = currentPrompt.options;
    if (options != null) {
      found = options.filter((item, index) => stateFromStoresArray.includes(item.id));
    }
  }
  const items2 = [guildId, currentPrompt.id, selectOption];
  const items3 = [tmp.scrollContainer, ];
  obj = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  items3[1] = obj;
  const callback = React.useCallback(() => {
    currentPrompt(selectOption[31]);
    const obj = {
      guildId,
      promptId: currentPrompt.id,
      onSelect(id) {
        let flag = arg1;
        if (arg1 == null) {
          flag = false;
        }
        return callback(id.id, id.id, flag);
      }
    };
    obj.openLazy(guildId(selectOption[33])(selectOption[32], selectOption.paths), "DropdownOptions", obj);
  }, items2);
  const items4 = [callback2(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  obj1 = { style: tmp.dropdownContainer, onPress: callback, children: null };
  let tmp11Result = 0 === found.length;
  if (tmp11Result) {
    const obj2 = { style: null, variant: "text-sm/normal", color: "text-muted", children: "No answers selected." };
    obj2[0] = tmp.emptyDropdownText;
    tmp11Result = callback2(tmp4(tmp3[20]).Text, obj2);
  }
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items5 = [tmp11Result, found.map((item, index) => callback(closure_22, { option: item }, item.id)), ];
  const obj5 = { style: tmp.dropdownIconContainer, children: callback2(closure_5, { style: tmp.dropdownIcon, source: currentPrompt(selectOption[35]) }) };
  items5[2] = callback2(closure_6, obj5);
  obj1[2] = items5;
  obj4[0] = callback2(guildId(selectOption[34]).PressableHighlight, obj1);
  items4[1] = callback2(closure_6, obj4);
  obj[1] = items4;
  const items6 = [callback2(closure_7, obj), callback2(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj3[0] = items6;
  return callback2(closure_17, obj3);
};