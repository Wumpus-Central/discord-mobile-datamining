// discord_app/modules/guild_onboarding/native/GuildOnboardingPrompt.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MemberVerificationActionCreatorsDefault from "../../guild_member_verification/MemberVerificationActionCreators.tsx";
import TermsFieldListDefault from "../../guild_member_verification/native/components/form_fields/TermsFieldList.tsx";
import NavigatorConstants from "../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import GuildOnboardingConstants from "GuildOnboardingConstants.tsx";
import GuildOnboardingUtils from "../GuildOnboardingUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import MemberVerificationFormStore from "../../guild_member_verification/MemberVerificationFormStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildOnboardingPromptsStore from "../GuildOnboardingPromptsStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let closure_0, importDefault, navigation, option;

let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
function formattedNameHighlight(children, arg1) {
  const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
  return closure_15(Text_Text.Text, obj, arg1);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({
  Image: hasOwnProperty,
  View: metroRequire,
  ScrollView: metroImportDefault,
  FlatList: metroImportAll,
} = react_native);
const constants = GuildOnboardingConstants.GuildOnboardingModalStates;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let c18 = 48;
let createStyles = createStyles_mod;
let obj = {
  flex: { flex: 1 },
  container: obj2,
  scrollContainer: obj3,
  scrollContainerGradient: { position: "absolute", height: 48, width: "100%", left: 0, top: -48 },
  promptHeader: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 },
  requiredSeparator: size,
  countText: {},
  title: { marginBottom: 32 },
  helpText: { marginTop: 8, marginBottom: 8, textAlign: "center" },
  footer: obj4,
  footerText: { paddingHorizontal: 16, paddingBottom: 8, paddingTop: 8 },
  footerContent: { width: "100%", paddingHorizontal: 16 },
  optionTextEmoji: { fontSize: 18, lineHeight: 22, marginRight: 6 },
  optionImageEmoji: { height: 22, width: 22, marginRight: 6 },
  emojiContainer: { display: "flex", alignItems: "center" },
  dropdownContainer: obj5,
  emptyDropdownText: { marginTop: 16 },
  dropdownPill: obj6,
  dropdownIconContainer: { position: "absolute", right: 4, top: 8 },
  dropdownIcon: { height: 32, width: 32 },
};
obj2 = {
  display: "flex",
  flex: 1,
  flexGrow: 1,
  marginTop: NavigatorConstants.NAV_BAR_HEIGHT,
  marginBottom: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
createStyles = createStyles.createStyles;
obj3 = {
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  paddingHorizontal: 16,
  paddingTop: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
size = {
  flexShrink: 0,
  marginHorizontal: 8,
  color: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.xs,
};
obj4 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  bottom: 0,
  paddingBottom: 8,
  position: "absolute",
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
obj5 = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  padding: 8,
  paddingRight: 32,
  minHeight: 48,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  position: "relative",
};
obj6 = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: 6,
  marginRight: 8,
  marginTop: 8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_5;
      let first;
      let stateFromStores;
      let tmp10;
      let tmp12;
      let tmp15;
      let tmp8;
      let tmp2 = stateFromStores;
      let obj = guildId(stateFromStores[14]);
      const cResult = obj.c(72);
      guildId = guildId.guildId;
      closure_19();
      let obj2 = guildId(stateFromStores[15]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [MemberVerificationFormStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function c() {
          return MemberVerificationFormStore.getRulesPrompt(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = guildId(tmp2[16]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[3] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        const fn2 = function v() {
          const guild = GuildStore.getGuild(guildId);
          let rulesChannelId;
          if (guild != null) {
            rulesChannelId = guild.rulesChannelId;
          }
          return rulesChannelId;
        };
        cResult[4] = guildId;
        cResult[5] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const tmpResult4 = guildId(tmp2[16]);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12);
      const bottom = navigation(tmp2[17])().bottom;
      const tmp14 = navigation;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [MemberVerificationFormStore];
        cResult[6] = items2;
        tmp15 = items2;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] !== guildId) {
        class R {
          constructor() {
            return MemberVerificationFormStore.get(guildId);
          }
        }
        cResult[7] = guildId;
        cResult[8] = R;
      } else {
        class R {
          constructor() {
            return MemberVerificationFormStore.get(guildId);
          }
        }
      }
      const tmpResult5 = guildId(tmp2[16]);
      const stateFromStores2 = tmpResult5.useStateFromStores(tmp15, R);
      [r10083, closure_5] = stateFromStores1(stateFromStores2.useState(false), 2);
      stateFromStores1(stateFromStores2.useState(false), 2);
      const tmpResult6 = guildId(tmp2[18]);
      const token = tmpResult6.useToken(tmp14(tmp2[12]).colors.BACKGROUND_BASE_LOWER);
      if (cResult[9] !== token) {
        class R {
          constructor() {
            return MemberVerificationFormStore.get(guildId);
          }
        }
        const alphaResult = obj7.alpha(0);
        cResult[9] = token;
        cResult[10] = alphaResult.hex();
        const hexResult = alphaResult.hex();
      } else {
        class R {
          constructor() {
            return MemberVerificationFormStore.get(guildId);
          }
        }
      }
      if (cResult[11] !== token) {
        class R {
          constructor() {
            return MemberVerificationFormStore.get(guildId);
          }
        }
        const alphaResult1 = obj9.alpha(1);
        cResult[11] = token;
        cResult[12] = alphaResult1.hex();
        const hexResult1 = alphaResult1.hex();
      } else {
        class R {
          constructor() {
            return MemberVerificationFormStore.get(guildId);
          }
        }
      }
      if (cResult[13] === tmp21) {
        class R {
          constructor() {
            return MemberVerificationFormStore.get(guildId);
          }
        }
        if (null == stateFromStores) {
          class R {
            constructor() {
              return MemberVerificationFormStore.get(guildId);
            }
          }
        } else {
          class R {
            constructor() {
              return MemberVerificationFormStore.get(guildId);
            }
          }
          class U {
            constructor() {
              let items;
              const tmp2 = null != stateFromStores && null != stateFromStores2;
              if (tmp2) {
                const obj = { formFields: items };
                const submitVerificationForm = MemberVerificationActionCreatorsDefault.submitVerificationForm;
                MemberVerificationActionCreatorsDefault;
                const merged = Object.assign(stateFromStores2);
                const obj2 = { response: true };
                const merged1 = Object.assign(stateFromStores);
                items = [obj2];
                const result = submitVerificationForm(guildId, obj);
                navigation.push(constants.COMPLETED);
              }
            }
          }
          cResult[16] = stateFromStores;
          cResult[17] = stateFromStores2;
          cResult[18] = guildId;
          cResult[19] = navigation;
          cResult[20] = U;
        }
      }
      const items3 = [tmp21, tmp23];
      cResult[13] = tmp21;
      cResult[14] = tmp23;
      cResult[15] = items3;
    }
  : (guildId) => {
      let _undefined;
      let c5;
      let closure_1;
      let closure_4;
      let intl2;
      let items10;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let stringResult;
      let tmp8;
      guildId = guildId.guildId;
      let stateFromStores;
      c5 = undefined;
      const tmp = closure_19();
      let tmp2 = guildId;
      let obj = guildId(stateFromStores[15]);
      importDefault = obj.useNavigation();
      let obj2 = guildId(stateFromStores[16]);
      let items = [MemberVerificationFormStore];
      stateFromStores = obj2.useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
      const items1 = [GuildStore];
      const obj3 = guildId(stateFromStores[16]);
      _slicedToArray = obj3.useStateFromStores(items1, () => {
        const guild = GuildStore.getGuild(guildId);
        rulesChannelId = undefined;
        if (guild != null) {
          rulesChannelId = guild.rulesChannelId;
        }
        return rulesChannelId;
      });
      const bottom = require("useSafeAreaInsets")().bottom;
      const sum = 64 + bottom;
      const items2 = [MemberVerificationFormStore];
      const obj4 = guildId(stateFromStores[16]);
      react = obj4.useStateFromStores(items2, () => MemberVerificationFormStore.get(guildId));
      [tmp8, c5] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      const obj5 = guildId(stateFromStores[18]);
      const token = obj5.useToken(require("native").colors.BACKGROUND_BASE_LOWER);
      const items3 = [,];
      const obj6 = require("../../../../_runtime/metro/00683__.js")(token);
      const alphaResult = obj6.alpha(0);
      items3[0] = alphaResult.hex();
      const obj8 = require("../../../../_runtime/metro/00683__.js")(token);
      const alphaResult1 = obj8.alpha(1);
      items3[1] = alphaResult1.hex();
      let tmp12Result = null;
      const tmp5 = importDefault;
      if (null != stateFromStores) {
        const sum1 = sum + 8;
        const obj7 = { top: true, style: items4, children: items9 };
        items4 = [,];
        ({ flex: arr5[0], container: arr5[1] } = tmp);
        const obj10 = {
          contentContainerStyle: items5,
          data: [0],
          renderItem() {
            const obj = { rules: stateFromStores.values, rulesChannelId };
            return closure_15(TermsFieldListDefault, obj);
          },
          onEndReached() {
            return _undefined(true);
          },
        };
        items5 = [tmp.scrollContainer];
        const obj11 = { paddingBottom: sum1 };
        const obj9 = { style: tmp.flex, children: items6 };
        items5[1] = obj11;
        const SafeAreaPaddingView = tmp2(tmp3[27]).SafeAreaPaddingView;
        items6 = [closure_15(closure_8, obj10)];
        const obj12 = { style: items7, children: items8 };
        items7 = [, ,];
        ({ footer: arr8[0], footerContent: arr8[1] } = tmp);
        const obj13 = { paddingBottom: bottom };
        items7[2] = obj13;
        const obj14 = { style: tmp.footerText, variant: "text-xs/medium", children: stringResult };
        const Text = tmp2(tmp3[23]).Text;
        const intl = tmp2(tmp3[22]).intl;
        const string = intl.string;
        const t = tmp2(tmp3[22]).t;
        if (tmp8) {
          stringResult = string(t.arAe3I);
        } else {
          stringResult = string(t.D0CVAc);
        }
        items8 = [closure_15(Text, obj14)];
        const obj15 = {
          variant: "primary",
          size: "md",
          grow: true,
          disabled: !tmp8,
          text: intl2.string(tmp2(stateFromStores[22]).t["0KL0ot"]),
          onPress() {
            let items;
            const tmp2 = null != stateFromStores && null != closure_4;
            if (tmp2) {
              const obj = { formFields: items };
              const submitVerificationForm = MemberVerificationActionCreatorsDefault.submitVerificationForm;
              MemberVerificationActionCreatorsDefault;
              const merged = Object.assign(closure_4);
              const obj2 = { response: true };
              const merged1 = Object.assign(stateFromStores);
              items = [obj2];
              const result = submitVerificationForm(guildId, obj);
              closure_1.push(constants.COMPLETED);
            }
          },
        };
        const Button = tmp2(tmp3[24]).Button;
        intl2 = tmp2(tmp3[22]).intl;
        items8[1] = closure_15(Button, obj15);
        items6[1] = closure_16(closure_6, obj12);
        items9 = [closure_16(closure_6, obj9)];
        const obj16 = {
          style: items10,
          start: tmp2(stateFromStores[26]).VerticalGradient.START,
          end: tmp2(stateFromStores[26]).VerticalGradient.END,
          colors: items3,
          pointerEvents: "none",
        };
        items10 = [tmp.scrollContainerGradient];
        const obj17 = { bottom: sum1 };
        items10[1] = obj17;
        const tmp5Result = tmp5(stateFromStores[25]);
        items9[1] = closure_15(tmp5Result, obj16);
        tmp12Result = closure_16(SafeAreaPaddingView, obj7);
      }
      return tmp12Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentPrompt;
      let currentPromptIndex;
      let intl2;
      let items;
      let items1;
      let items2;
      let numberOfPrompts;
      const obj = react2;
      const cResult = obj.c(19);
      ({ currentPrompt, numberOfPrompts, currentPromptIndex } = arg0);
      const tmp4 = closure_19();
      if (cResult[0] === currentPromptIndex) {
        let tmp7;
        if (cResult[1] === numberOfPrompts) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === tmp4.countText) {
          let tmp9;
          if (cResult[4] === tmp7) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === currentPrompt.required) {
            let tmp12;
            if (cResult[7] === tmp4.requiredSeparator) {
              tmp12 = cResult[8];
            }
            if (cResult[9] === tmp4.promptHeader) {
              if (cResult[10] === tmp9) {
                let tmp20;
                if (cResult[11] === tmp12) {
                  tmp20 = cResult[12];
                }
                if (cResult[13] === currentPrompt.title) {
                  let tmp24;
                  if (cResult[14] === tmp4.title) {
                    tmp24 = cResult[15];
                  }
                  if (cResult[16] === tmp20) {
                    let tmp27;
                    if (cResult[17] === tmp24) {
                      tmp27 = cResult[18];
                    }
                    return tmp27;
                  }
                  const obj2 = { children: items };
                  items = [tmp20, tmp24];
                  const tmp30 = authStore3(closure_17, obj2);
                  cResult[16] = tmp20;
                  cResult[17] = tmp24;
                  cResult[18] = tmp30;
                  tmp27 = tmp30;
                }
                const obj3 = {
                  style: tmp4.title,
                  accessibilityRole: "header",
                  variant: "heading-xl/semibold",
                  color: "mobile-text-heading-primary",
                  children: currentPrompt.title,
                };
                const tmp26 = closure_15(Text_Text.Text, obj3);
                cResult[13] = currentPrompt.title;
                cResult[14] = tmp4.title;
                cResult[15] = tmp26;
                tmp24 = tmp26;
              }
            }
            const obj4 = { style: tmp5, children: items1 };
            items1 = [tmp9, tmp12];
            const tmp23 = authStore3(metroRequire, obj4);
            cResult[9] = tmp4.promptHeader;
            cResult[10] = tmp9;
            cResult[11] = tmp12;
            cResult[12] = tmp23;
            tmp20 = tmp23;
          }
          let required;
          if (currentPrompt != null) {
            required = currentPrompt.required;
          }
          let tmp15 = null;
          if (required) {
            const obj5 = { children: items2 };
            const obj6 = { style: tmp4.requiredSeparator };
            items2 = [closure_15(metroRequire, obj6)];
            const obj7 = { variant: "text-sm/medium", color: "text-brand", children: intl2.string(intl3.t.Ur8Vrt) };
            const Text = Text_Text.Text;
            intl2 = intl3.intl;
            items2[1] = closure_15(Text, obj7);
            tmp15 = authStore3(closure_17, obj5);
          }
          cResult[6] = currentPrompt.required;
          cResult[7] = tmp4.requiredSeparator;
          cResult[8] = tmp15;
          tmp12 = tmp15;
        }
        const obj8 = { style: tmp6, variant: "text-sm/medium", color: "text-muted", children: tmp7 };
        const tmp11 = closure_15(Text_Text.Text, obj8);
        cResult[3] = tmp4.countText;
        cResult[4] = tmp7;
        cResult[5] = tmp11;
        tmp9 = tmp11;
      }
      const intl = intl3.intl;
      const obj9 = { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts };
      const formatResult = intl.format(intl3.t.isV0NW, obj9);
      cResult[0] = currentPromptIndex;
      cResult[1] = numberOfPrompts;
      cResult[2] = formatResult;
      tmp7 = formatResult;
    }
  : (currentPrompt) => {
      let currentPromptIndex;
      let intl;
      let intl2;
      let items;
      let items1;
      let items2;
      let numberOfPrompts;
      let obj3;
      currentPrompt = currentPrompt.currentPrompt;
      ({ numberOfPrompts, currentPromptIndex } = currentPrompt);
      const tmp = closure_19();
      const obj = { style: tmp.promptHeader, children: items };
      const obj2 = {
        style: tmp.countText,
        variant: "text-sm/medium",
        color: "text-muted",
        children: intl.format(intl3.t.isV0NW, obj3),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      obj3 = { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts };
      items = [closure_15(Text, obj2)];
      let required;
      if (currentPrompt != null) {
        required = currentPrompt.required;
      }
      let tmp2Result = null;
      if (required) {
        const obj4 = { children: items1 };
        const obj5 = { style: tmp.requiredSeparator };
        items1 = [closure_15(metroRequire, obj5)];
        const obj6 = { variant: "text-sm/medium", color: "text-brand", children: intl2.string(intl3.t.Ur8Vrt) };
        const Text2 = Text_Text.Text;
        intl2 = intl3.intl;
        items1[1] = closure_15(Text2, obj6);
        tmp2Result = authStore3(closure_17, obj4);
      }
      const obj7 = { children: items2 };
      items[1] = tmp2Result;
      items2 = [authStore3(metroRequire, obj)];
      const obj8 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        children: currentPrompt.title,
      };
      items2[1] = closure_15(Text_Text.Text, obj8);
      return authStore3(closure_17, obj7);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (guildId) {
      let combined;
      let currentPrompt;
      let first;
      let handleOnPress;
      let helpText;
      let helpTextAdditional;
      let intl2;
      let items2;
      let items3;
      let items4;
      let lastPrompt;
      let selectedOptionIds;
      let tmp7;
      const obj = guildId(576);
      const cResult = obj.c(51);
      guildId = guildId.guildId;
      ({ currentPrompt, selectedOptionIds } = guildId);
      ({ handleOnPress, lastPrompt } = guildId);
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function n() {
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
      let tmp9 = 0 === selectedOptionIds.length;
      if (tmp9) {
        let required;
        if (currentPrompt != null) {
          required = currentPrompt.required;
        }
        tmp9 = !required;
      }
      if (cResult[3] === tmp9) {
        let tmp12;
        if (cResult[4] === lastPrompt) {
          tmp12 = cResult[5];
        }
        let tmp14 = 0 === selectedOptionIds.length;
        if (tmp14) {
          let required1;
          if (currentPrompt != null) {
            required1 = currentPrompt.required;
          }
          tmp14 = required1;
        }
        let options;
        const tmp17 = cResult[6];
        if (currentPrompt != null) {
          options = currentPrompt.options;
        }
        if (tmp17 === options) {
          let tmp20;
          let tmp23;
          let tmp25;
          if (cResult[7] === selectedOptionIds) {
            tmp20 = cResult[8];
          }
          if (cResult[9] !== tmp20) {
            let selectedRoleIds;
            if (null != tmp20) {
              const tmpResult4 = guildId(6608);
              selectedRoleIds = tmpResult4.getSelectedRoleIds(tmp20);
            } else {
              const _Set = Set;
              const self = this;
              const self2 = this;
              selectedRoleIds = new Set();
            }
            cResult[9] = tmp20;
            cResult[10] = selectedRoleIds;
            tmp23 = selectedRoleIds;
          } else {
            tmp23 = cResult[10];
          }
          if (cResult[11] !== tmp20) {
            let selectedChannelIds;
            if (null != tmp20) {
              const tmpResult5 = guildId(6608);
              selectedChannelIds = tmpResult5.getSelectedChannelIds(tmp20);
            } else {
              const _Set2 = Set;
              const self3 = this;
              const self4 = this;
              selectedChannelIds = new Set();
            }
            cResult[11] = tmp20;
            cResult[12] = selectedChannelIds;
            tmp25 = selectedChannelIds;
          } else {
            tmp25 = cResult[12];
          }
          if (cResult[13] === currentPrompt) {
            if (cResult[14] === stateFromStores) {
              if (cResult[15] === tmp25) {
                let tmp27;
                let tmp32;
                let tmp34;
                if (cResult[16] === tmp23) {
                  tmp27 = cResult[17];
                }
                ({ helpText, helpTextAdditional } = selectedOptionIds(6627)(tmp27));
                selectedOptionIds(6627)(tmp27);
                const tmpResult6 = guildId(4586);
                const token = tmpResult6.useToken(selectedOptionIds(587).colors.BACKGROUND_BASE_LOWER);
                if (cResult[18] !== token) {
                  const obj7 = selectedOptionIds(683)(token);
                  const alphaResult = obj7.alpha(0);
                  const hexResult = alphaResult.hex();
                  cResult[18] = token;
                  cResult[19] = hexResult;
                  tmp32 = hexResult;
                } else {
                  tmp32 = cResult[19];
                }
                if (cResult[20] !== token) {
                  const obj9 = selectedOptionIds(683)(token);
                  const alphaResult1 = obj9.alpha(1);
                  const hexResult1 = alphaResult1.hex();
                  cResult[20] = token;
                  cResult[21] = hexResult1;
                  tmp34 = hexResult1;
                } else {
                  tmp34 = cResult[21];
                }
                if (cResult[22] === tmp32) {
                  let tmp36;
                  let tmp37;
                  if (cResult[23] === tmp34) {
                    tmp36 = cResult[24];
                  }
                  if (cResult[25] !== tmp4.scrollContainerGradient) {
                    const items1 = [tmp4.scrollContainerGradient];
                    cResult[25] = tmp4.scrollContainerGradient;
                    cResult[26] = items1;
                    tmp37 = items1;
                  } else {
                    tmp37 = cResult[26];
                  }
                  if (cResult[27] === tmp36) {
                    let tmp38;
                    if (cResult[28] === tmp37) {
                      tmp38 = cResult[29];
                    }
                    if (cResult[30] === tmp14) {
                      let tmp42;
                      let tmp46;
                      if (cResult[31] === tmp4.helpText) {
                        tmp42 = cResult[32];
                      }
                      if (cResult[33] === helpText) {
                        if (cResult[34] === helpTextAdditional) {
                          let tmp45;
                          if (cResult[35] === tmp4.helpText) {
                            tmp45 = cResult[36];
                          }
                          let str6 = "primary";
                          if (tmp9) {
                            str6 = "primary";
                            if (!lastPrompt) {
                              str6 = "secondary";
                            }
                          }
                          if (cResult[37] === tmp12) {
                            if (cResult[38] === tmp14) {
                              if (cResult[39] === handleOnPress) {
                                let tmp48;
                                if (cResult[40] === str6) {
                                  tmp48 = cResult[41];
                                }
                                if (cResult[42] === tmp4.footerContent) {
                                  if (cResult[43] === tmp42) {
                                    if (cResult[44] === tmp45) {
                                      let tmp51;
                                      if (cResult[45] === tmp48) {
                                        tmp51 = cResult[46];
                                      }
                                      if (cResult[47] === tmp4.footer) {
                                        if (cResult[48] === tmp38) {
                                          let tmp55;
                                          if (cResult[49] === tmp51) {
                                            tmp55 = cResult[50];
                                          }
                                          return tmp55;
                                        }
                                      }
                                      const obj2 = { style: tmp4.footer, children: items2 };
                                      items2 = [tmp38, tmp51];
                                      const tmp58 = closure_16(closure_6, obj2);
                                      cResult[47] = tmp4.footer;
                                      cResult[48] = tmp38;
                                      cResult[49] = tmp51;
                                      cResult[50] = tmp58;
                                      tmp55 = tmp58;
                                    }
                                  }
                                }
                                const obj3 = { style: tmp4.footerContent, children: items3 };
                                items3 = [tmp42, tmp45, tmp48];
                                const tmp54 = closure_16(closure_6, obj3);
                                cResult[42] = tmp4.footerContent;
                                cResult[43] = tmp42;
                                cResult[44] = tmp45;
                                cResult[45] = tmp48;
                                cResult[46] = tmp54;
                                tmp51 = tmp54;
                              }
                            }
                          }
                          const obj4 = {
                            variant: str6,
                            size: "md",
                            grow: true,
                            text: tmp12,
                            onPress: handleOnPress,
                            disabled: tmp14,
                          };
                          const tmp50 = closure_15(guildId(5601).Button, obj4);
                          cResult[37] = tmp12;
                          cResult[38] = tmp14;
                          cResult[39] = handleOnPress;
                          cResult[40] = str6;
                          cResult[41] = tmp50;
                          tmp48 = tmp50;
                        }
                      }
                      if ("" !== helpText) {
                        const obj5 = {
                          style: tmp4.helpText,
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: items4,
                        };
                        items4 = [helpText, " ", helpTextAdditional];
                        tmp46 = closure_16(tmp(4892).Text, obj5);
                      } else {
                        tmp46 = null;
                      }
                      cResult[33] = helpText;
                      cResult[34] = helpTextAdditional;
                      cResult[35] = tmp4.helpText;
                      cResult[36] = tmp46;
                      tmp45 = tmp46;
                    }
                    let tmp43 = null;
                    if (tmp14) {
                      const obj6 = {
                        style: tmp4.helpText,
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: intl2.string(guildId(1126).t.dA1dSf),
                      };
                      const Text = tmp(4892).Text;
                      intl2 = tmp(1126).intl;
                      tmp43 = closure_15(Text, obj6);
                    }
                    cResult[30] = tmp14;
                    cResult[31] = tmp4.helpText;
                    cResult[32] = tmp43;
                    tmp42 = tmp43;
                  }
                  const obj8 = {
                    style: tmp37,
                    start: guildId(1105).VerticalGradient.START,
                    end: guildId(1105).VerticalGradient.END,
                    colors: tmp36,
                    pointerEvents: "none",
                  };
                  const tmp29Result = selectedOptionIds(5612);
                  const tmp41 = closure_15(tmp29Result, obj8);
                  cResult[27] = tmp36;
                  cResult[28] = tmp37;
                  cResult[29] = tmp41;
                  tmp38 = tmp41;
                }
                const items5 = [tmp32, tmp34];
                cResult[22] = tmp32;
                cResult[23] = tmp34;
                cResult[24] = items5;
                tmp36 = items5;
              }
            }
          }
          const obj10 = {
            guild: stateFromStores,
            prompt: currentPrompt,
            selectedRoleIds: tmp23,
            selectedChannelIds: tmp25,
            itemHook: formattedNameHighlight,
          };
          cResult[13] = currentPrompt;
          cResult[14] = stateFromStores;
          cResult[15] = tmp25;
          cResult[16] = tmp23;
          cResult[17] = obj10;
          tmp27 = obj10;
        }
        let found;
        if (currentPrompt != null) {
          const options1 = currentPrompt.options;
          if (options1 != null) {
            found = options1.filter((id) => selectedOptionIds.includes(id.id));
          }
        }
        let options2;
        if (currentPrompt != null) {
          options2 = currentPrompt.options;
        }
        cResult[6] = options2;
        cResult[7] = selectedOptionIds;
        cResult[8] = found;
        tmp20 = found;
      }
      const intl = tmp(1126).intl;
      const string = intl.string;
      const t = tmp(1126).t;
      if (lastPrompt) {
        const _HermesInternal = HermesInternal;
        combined = "" + string(t["8SuVoE"]) + " \u{1F389}";
      } else if (tmp9) {
        combined = string(t["5Wxrcd"]);
      } else {
        combined = string(t.PDTjLN);
      }
      cResult[3] = tmp9;
      cResult[4] = lastPrompt;
      cResult[5] = combined;
      tmp12 = combined;
    }
  : (lastPrompt) => {
      let combined;
      let currentPrompt;
      let helpText;
      let helpTextAdditional;
      let intl2;
      let items4;
      let items5;
      let items6;
      let items7;
      let require;
      let selectedOptionIds;
      let tmp18Result;
      ({ guildId: require, currentPrompt, selectedOptionIds } = lastPrompt);
      lastPrompt = lastPrompt.lastPrompt;
      let found;
      const handleOnPress = lastPrompt.handleOnPress;
      const tmp = closure_19();
      let obj = require("get initialized");
      const items = [GuildStore];
      let tmp5 = 0 === selectedOptionIds.length;
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(_require));
      if (tmp5) {
        let required;
        if (currentPrompt != null) {
          required = currentPrompt.required;
        }
        tmp5 = !required;
      }
      const intl = require("intl").intl;
      const string = intl.string;
      const t = require("intl").t;
      if (lastPrompt) {
        const _HermesInternal = HermesInternal;
        combined = "" + string(t["8SuVoE"]) + " \u{1F389}";
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
        prompt: currentPrompt,
        selectedRoleIds: memo,
        selectedChannelIds: memo1,
        itemHook: formattedNameHighlight,
      };
      ({ helpText, helpTextAdditional } = selectedOptionIds(found[29])(obj2));
      selectedOptionIds(found[29])(obj2);
      const tmp2Result = require("useToken");
      const token = tmp2Result.useToken(selectedOptionIds(tmp3[12]).colors.BACKGROUND_BASE_LOWER);
      const items3 = [,];
      const obj4 = selectedOptionIds(found[19])(token);
      const alphaResult = obj4.alpha(0);
      items3[0] = alphaResult.hex();
      const obj6 = selectedOptionIds(found[19])(token);
      const alphaResult1 = obj6.alpha(1);
      items3[1] = alphaResult1.hex();
      const obj3 = { style: tmp.footer, children: items5 };
      const obj5 = {
        style: items4,
        start: require("ConstantsIOS").VerticalGradient.START,
        end: require("ConstantsIOS").VerticalGradient.END,
        colors: items3,
        pointerEvents: "none",
      };
      items4 = [tmp.scrollContainerGradient];
      const tmp21 = selectedOptionIds(found[25]);
      items5 = [closure_15(tmp21, obj5)];
      let tmp20Result = null;
      const obj7 = { style: tmp.footerContent, children: items6 };
      if (tmp10) {
        const obj8 = {
          style: tmp.helpText,
          variant: "text-xs/medium",
          color: "text-default",
          children: intl2.string(require("intl").t.dA1dSf),
        };
        const Text = require("Text/Text").Text;
        intl2 = require("intl").intl;
        tmp20Result = closure_15(Text, obj8);
      }
      items6 = [tmp20Result, ,];
      if ("" !== helpText) {
        const obj9 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: items7 };
        items7 = [helpText, " ", helpTextAdditional];
        tmp18Result = closure_16(require("Text/Text").Text, obj9);
      } else {
        tmp18Result = null;
      }
      items6[1] = tmp18Result;
      let str4 = "primary";
      const Button = require("components/Button/Button").Button;
      if (tmp5) {
        str4 = "primary";
        if (!lastPrompt) {
          str4 = "secondary";
        }
      }
      items6[2] = closure_15(Button, {
        variant: str4,
        size: "md",
        grow: true,
        text: combined,
        onPress: handleOnPress,
        disabled: tmp10,
      });
      items5[1] = closure_16(closure_6, obj7);
      return closure_16(closure_6, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let currentPromptIndex;
      let first;
      let items1;
      let items2;
      let lastPrompt;
      let numberOfPrompts;
      let selectOption;
      const tmp = guildId;
      let obj = guildId(selectOption[14]);
      const cResult = obj.c(40);
      guildId = guildId.guildId;
      const currentPrompt = guildId.currentPrompt;
      ({ lastPrompt, currentPromptIndex, numberOfPrompts, selectOption } = guildId);
      const handleOnPress = guildId.handleOnPress;
      const tmp4 = closure_19();
      const bottom = currentPrompt(selectOption[17])().bottom;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingPromptsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === currentPrompt) {
        let tmp7;
        let tmp8;
        let tmp12;
        if (cResult[2] === guildId) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = tmp(selectOption[16]);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
        const sum = 64 + bottom + c18 + c18;
        if (cResult[5] !== sum) {
          const obj2 = { paddingBottom: sum, position: "relative" };
          cResult[5] = sum;
          cResult[6] = obj2;
          tmp12 = obj2;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp4.scrollContainer) {
          let tmp13;
          if (cResult[8] === tmp12) {
            tmp13 = cResult[9];
          }
          if (cResult[10] === currentPrompt) {
            if (cResult[11] === currentPromptIndex) {
              let tmp14;
              let tmp17;
              if (cResult[12] === numberOfPrompts) {
                tmp14 = cResult[13];
              }
              if (cResult[14] === currentPrompt.id) {
                if (cResult[15] === currentPrompt.options) {
                  if (cResult[16] === guildId) {
                    if (cResult[17] === selectOption) {
                      let tmp20;
                      if (cResult[18] === stateFromStoresArray) {
                        tmp17 = cResult[19];
                      }
                      if (cResult[25] !== tmp17) {
                        const obj3 = { children: null };
                        class D {
                          constructor(arg0) {
                            closure_0 = guildId;
                            tmp = closure_1_15;
                            obj = {
                              option: guildId,
                              guildId: closure_0,
                              onSelect(flag) {
                                const id = currentPrompt.id;
                                const id2 = option.id;
                                if (flag == null) {
                                  flag = false;
                                }
                                return selectOption(id, id2, flag);
                              },
                              selected: null,
                            };
                            tmp2 = currentPrompt(selectOption[30]);
                            flag = closure_3.includes(guildId.id);
                            if (flag == null) {
                              flag = false;
                            }
                            obj.selected = flag;
                            return tmp(tmp2, obj, guildId.id);
                          }
                        }
                        const tmp23 = closure_15(closure_6, obj3);
                        cResult[25] = tmp17;
                        cResult[26] = tmp23;
                        tmp20 = tmp23;
                      } else {
                        tmp20 = cResult[26];
                      }
                      if (cResult[27] === tmp13) {
                        if (cResult[28] === tmp14) {
                          let tmp24;
                          if (cResult[29] === tmp20) {
                            tmp24 = cResult[30];
                          }
                          if (cResult[31] === currentPrompt) {
                            if (cResult[32] === guildId) {
                              if (cResult[33] === handleOnPress) {
                                if (cResult[34] === lastPrompt) {
                                  let tmp27;
                                  if (cResult[35] === stateFromStoresArray) {
                                    tmp27 = cResult[36];
                                  }
                                  if (cResult[37] === tmp24) {
                                    let tmp30;
                                    if (cResult[38] === tmp27) {
                                      tmp30 = cResult[39];
                                    }
                                    return tmp30;
                                  }
                                  class D {
                                    constructor(arg0) {
                                      closure_0 = guildId;
                                      tmp = closure_1_15;
                                      obj = {
                                        option: guildId,
                                        guildId: closure_0,
                                        onSelect(flag) {
                                          const id = currentPrompt.id;
                                          const id2 = option.id;
                                          if (flag == null) {
                                            flag = false;
                                          }
                                          return selectOption(id, id2, flag);
                                        },
                                        selected: null,
                                      };
                                      tmp2 = currentPrompt(selectOption[30]);
                                      flag = closure_3.includes(guildId.id);
                                      if (flag == null) {
                                        flag = false;
                                      }
                                      obj.selected = flag;
                                      return tmp(tmp2, obj, guildId.id);
                                    }
                                  }
                                  const obj4 = { children: items1 };
                                  items1 = [tmp24, tmp27];
                                  const tmp32 = closure_16(closure_17, obj4);
                                  cResult[37] = tmp24;
                                  cResult[38] = tmp27;
                                  cResult[39] = tmp32;
                                  tmp30 = tmp32;
                                }
                              }
                            }
                          }
                          class D {
                            constructor(arg0) {
                              closure_0 = guildId;
                              tmp = closure_1_15;
                              obj = {
                                option: guildId,
                                guildId: closure_0,
                                onSelect(flag) {
                                  const id = currentPrompt.id;
                                  const id2 = option.id;
                                  if (flag == null) {
                                    flag = false;
                                  }
                                  return selectOption(id, id2, flag);
                                },
                                selected: null,
                              };
                              tmp2 = currentPrompt(selectOption[30]);
                              flag = closure_3.includes(guildId.id);
                              if (flag == null) {
                                flag = false;
                              }
                              obj.selected = flag;
                              return tmp(tmp2, obj, guildId.id);
                            }
                          }
                          const obj5 = {
                            guildId,
                            currentPrompt,
                            selectedOptionIds: stateFromStoresArray,
                            handleOnPress,
                            lastPrompt,
                          };
                          const tmp29 = closure_15(closure_21, obj5);
                          cResult[31] = currentPrompt;
                          cResult[32] = guildId;
                          cResult[33] = handleOnPress;
                          cResult[34] = lastPrompt;
                          cResult[35] = stateFromStoresArray;
                          cResult[36] = tmp29;
                          tmp27 = tmp29;
                        }
                      }
                      class D {
                        constructor(arg0) {
                          closure_0 = guildId;
                          tmp = closure_1_15;
                          obj = {
                            option: guildId,
                            guildId: closure_0,
                            onSelect(flag) {
                              const id = currentPrompt.id;
                              const id2 = option.id;
                              if (flag == null) {
                                flag = false;
                              }
                              return selectOption(id, id2, flag);
                            },
                            selected: null,
                          };
                          tmp2 = currentPrompt(selectOption[30]);
                          flag = closure_3.includes(guildId.id);
                          if (flag == null) {
                            flag = false;
                          }
                          obj.selected = flag;
                          return tmp(tmp2, obj, guildId.id);
                        }
                      }
                      const obj6 = { contentContainerStyle: tmp13, children: items2 };
                      items2 = [tmp14, tmp20];
                      const tmp26 = closure_16(closure_7, obj6);
                      cResult[27] = tmp13;
                      cResult[28] = tmp14;
                      cResult[29] = tmp20;
                      cResult[30] = tmp26;
                      tmp24 = tmp26;
                    }
                  }
                }
              }
              if (cResult[20] === currentPrompt.id) {
                if (cResult[21] === guildId) {
                  if (cResult[22] === selectOption) {
                    let tmp18;
                    if (cResult[23] === stateFromStoresArray) {
                      tmp18 = cResult[24];
                    }
                    const options = currentPrompt.options;
                    const mapped = options.map(tmp18);
                    class D {
                      constructor(arg0) {
                        closure_0 = guildId;
                        tmp = closure_1_15;
                        obj = {
                          option: guildId,
                          guildId: closure_0,
                          onSelect(flag) {
                            const id = currentPrompt.id;
                            const id2 = option.id;
                            if (flag == null) {
                              flag = false;
                            }
                            return selectOption(id, id2, flag);
                          },
                          selected: null,
                        };
                        tmp2 = currentPrompt(selectOption[30]);
                        flag = closure_3.includes(guildId.id);
                        if (flag == null) {
                          flag = false;
                        }
                        obj.selected = flag;
                        return tmp(tmp2, obj, guildId.id);
                      }
                    }
                    cResult[14] = currentPrompt.id;
                    cResult[15] = currentPrompt.options;
                    cResult[16] = guildId;
                    cResult[17] = selectOption;
                    cResult[18] = stateFromStoresArray;
                    cResult[19] = mapped;
                    tmp17 = mapped;
                  }
                }
              }
              class D {
                constructor(arg0) {
                  closure_0 = guildId;
                  tmp = closure_1_15;
                  obj = {
                    option: guildId,
                    guildId: closure_0,
                    onSelect(flag) {
                      const id = currentPrompt.id;
                      const id2 = option.id;
                      if (flag == null) {
                        flag = false;
                      }
                      return selectOption(id, id2, flag);
                    },
                    selected: null,
                  };
                  tmp2 = currentPrompt(selectOption[30]);
                  flag = closure_3.includes(guildId.id);
                  if (flag == null) {
                    flag = false;
                  }
                  obj.selected = flag;
                  return tmp(tmp2, obj, guildId.id);
                }
              }
              cResult[20] = currentPrompt.id;
              cResult[21] = guildId;
              cResult[22] = selectOption;
              cResult[23] = stateFromStoresArray;
              cResult[24] = D;
              tmp18 = D;
            }
          }
          const obj7 = { currentPrompt, numberOfPrompts, currentPromptIndex };
          const tmp16 = closure_15(closure_20, obj7);
          cResult[10] = currentPrompt;
          cResult[11] = currentPromptIndex;
          cResult[12] = numberOfPrompts;
          cResult[13] = tmp16;
          tmp14 = tmp16;
        }
        const items3 = [tmp4.scrollContainer, tmp12];
        cResult[7] = tmp4.scrollContainer;
        cResult[8] = tmp12;
        cResult[9] = items3;
        tmp13 = items3;
      }
      const fn = function n() {
        let onboardingResponsesForPrompt;
        if (null != currentPrompt) {
          onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
        } else {
          onboardingResponsesForPrompt = [];
        }
        return onboardingResponsesForPrompt;
      };
      const items4 = [guildId, currentPrompt];
      cResult[1] = currentPrompt;
      cResult[2] = guildId;
      cResult[3] = fn;
      cResult[4] = items4;
      tmp8 = items4;
      tmp7 = fn;
    }
  : (guildId) => {
      let currentPromptIndex;
      let handleOnPress;
      let items2;
      let items3;
      let items4;
      let lastPrompt;
      let numberOfPrompts;
      let options;
      guildId = guildId.guildId;
      const currentPrompt = guildId.currentPrompt;
      const selectOption = guildId.selectOption;
      ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
      const tmp = closure_19();
      const bottom = currentPrompt(selectOption[17])().bottom;
      let obj = guildId(selectOption[16]);
      const items = [GuildOnboardingPromptsStore];
      const items1 = [guildId, currentPrompt];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          let onboardingResponsesForPrompt;
          if (null != currentPrompt) {
            onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
          } else {
            onboardingResponsesForPrompt = [];
          }
          return onboardingResponsesForPrompt;
        },
        items1,
      );
      const obj3 = { contentContainerStyle: items2, children: items3 };
      items2 = [tmp.scrollContainer];
      const obj2 = { children: items4 };
      const obj4 = { paddingBottom: 64 + bottom + c18 + c18, position: "relative" };
      items2[1] = obj4;
      items3 = [closure_15(closure_20, { currentPrompt, numberOfPrompts, currentPromptIndex })];
      const obj5 = {
        children: options.map((option) => {
          let flag;
          guildId = option;
          const obj = {
            option,
            guildId,
            onSelect(flag) {
              const id = currentPrompt.id;
              const id2 = option.id;
              if (flag == null) {
                flag = false;
              }
              return selectOption(id, id2, flag);
            },
            selected: flag,
          };
          const tmp2 = currentPrompt(selectOption[30]);
          flag = stateFromStoresArray.includes(option.id);
          if (flag == null) {
            flag = false;
          }
          return closure_1_15(tmp2, obj, option.id);
        }),
      };
      options = currentPrompt.options;
      items3[1] = closure_15(closure_6, obj5);
      items4 = [
        closure_16(closure_7, obj3),
        closure_15(closure_21, {
          guildId,
          currentPrompt,
          selectedOptionIds: stateFromStoresArray,
          handleOnPress,
          lastPrompt,
        }),
      ];
      return closure_16(closure_17, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (option) => {
      let first;
      let items1;
      let tmp12;
      let tmp9;
      const obj = option(576);
      const cResult = obj.c(19);
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
        const fn = function n() {
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
      if (cResult[3] !== stateFromStores) {
        let emojiURL;
        if (null != stateFromStores) {
          const obj2 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
          ({ id: obj4.id, animated: obj4.animated } = stateFromStores);
          const obj3 = AvatarUtilsDefault;
          emojiURL = obj3.getEmojiURL(obj2);
        }
        cResult[3] = stateFromStores;
        cResult[4] = emojiURL;
        tmp12 = emojiURL;
      } else {
        tmp12 = cResult[4];
      }
      const emoji3 = option.emoji;
      let str;
      if (emoji3 != null) {
        str = emoji3.name;
      }
      if (str == null) {
        str = "";
      }
      if (cResult[5] === tmp4.optionImageEmoji) {
        if (cResult[6] === tmp4.optionTextEmoji) {
          if (cResult[7] === tmp12) {
            let tmp16;
            if (cResult[8] === str) {
              tmp16 = cResult[9];
            }
            if (cResult[10] === tmp4.emojiContainer) {
              let tmp18;
              let tmp22;
              if (cResult[11] === tmp16) {
                tmp18 = cResult[12];
              }
              if (cResult[13] !== option.title) {
                const obj5 = { variant: "text-md/semibold", children: option.title };
                const tmp24 = closure_15(option(4892).Text, obj5);
                cResult[13] = option.title;
                cResult[14] = tmp24;
                tmp22 = tmp24;
              } else {
                tmp22 = cResult[14];
              }
              if (cResult[15] === tmp4.dropdownPill) {
                if (cResult[16] === tmp18) {
                  let tmp25;
                  if (cResult[17] === tmp22) {
                    tmp25 = cResult[18];
                  }
                  return tmp25;
                }
              }
              const obj6 = { style: tmp4.dropdownPill, children: items1 };
              items1 = [tmp18, tmp22];
              const tmp28 = closure_16(closure_6, obj6);
              cResult[15] = tmp4.dropdownPill;
              cResult[16] = tmp18;
              cResult[17] = tmp22;
              cResult[18] = tmp28;
              tmp25 = tmp28;
            }
            const obj7 = { style: tmp4.emojiContainer, children: tmp16 };
            const tmp21 = closure_15(closure_6, obj7);
            cResult[10] = tmp4.emojiContainer;
            cResult[11] = tmp16;
            cResult[12] = tmp21;
            tmp18 = tmp21;
          }
        }
      }
      const obj8 = {
        textEmojiStyle: tmp4.optionTextEmoji,
        fastImageStyle: tmp4.optionImageEmoji,
        src: tmp12,
        name: str,
      };
      const tmp17 = closure_15(EmojiDefault, obj8);
      cResult[5] = tmp4.optionImageEmoji;
      cResult[6] = tmp4.optionTextEmoji;
      cResult[7] = tmp12;
      cResult[8] = str;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    }
  : (option) => {
      let emojiURL;
      let items1;
      let obj4;
      let str;
      let tmp9;
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
      const obj2 = { style: tmp.dropdownPill, children: items1 };
      const obj3 = { style: tmp.emojiContainer, children: closure_15(tmp9, obj4) };
      obj4 = { textEmojiStyle: tmp.optionTextEmoji, fastImageStyle: tmp.optionImageEmoji, src: emojiURL, name: str };
      emojiURL = undefined;
      const tmp2 = option;
      tmp9 = EmojiDefault;
      if (null != stateFromStores) {
        const obj5 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
        ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
        const tmp8Result = AvatarUtilsDefault;
        emojiURL = tmp8Result.getEmojiURL(obj5);
      }
      let emoji = option.emoji;
      str = undefined;
      if (emoji != null) {
        str = emoji.name;
      }
      if (str == null) {
        str = "";
      }
      items1 = [closure_15(closure_6, obj3)];
      const obj7 = { variant: "text-md/semibold", children: option.title };
      items1[1] = closure_15(tmp2(4892).Text, obj7);
      return closure_16(closure_6, obj2);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompt.tsx");

export const RulesPrompt = tmp5;
export const MultipleChoicePrompt = tmp6;
export const DropdownPrompt = function DropdownPrompt(guildId) {
  let currentPromptIndex;
  let handleOnPress;
  let items3;
  let items4;
  let items5;
  let items6;
  let lastPrompt;
  let numberOfPrompts;
  let obj9;
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = closure_19();
  const bottom = currentPrompt(selectOption[17])().bottom;
  let obj = guildId(selectOption[16]);
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(
    items,
    () => {
      let onboardingResponsesForPrompt;
      if (null != currentPrompt) {
        onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
      } else {
        onboardingResponsesForPrompt = [];
      }
      return onboardingResponsesForPrompt;
    },
    items1,
  );
  let found;
  const tmp2 = currentPrompt;
  if (currentPrompt != null) {
    const options = currentPrompt.options;
    if (options != null) {
      found = options.filter((id) => stateFromStoresArray.includes(id.id));
    }
  }
  const items2 = [guildId, currentPrompt.id, selectOption];
  let obj2 = { contentContainerStyle: items3, children: items4 };
  items3 = [tmp.scrollContainer];
  const obj3 = { paddingBottom: 64 + bottom + c18 + c18, position: "relative" };
  items3[1] = obj3;
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      guildId,
      promptId: currentPrompt.id,
      onSelect(id, flag) {
        id = id.id;
        const id2 = id.id;
        if (flag == null) {
          flag = false;
        }
        return selectOption(id, id2, flag);
      },
    };
    obj.openLazy(asyncRequire(6637, dependencyMap.paths), "DropdownOptions", obj2);
  }, items2);
  items4 = [closure_15(closure_20, { currentPrompt, numberOfPrompts, currentPromptIndex })];
  let tmp11Result = 0 === found.length;
  const obj4 = { style: tmp.dropdownContainer, onPress: callback, children: items5 };
  const PressableHighlight = tmp4(tmp3[36]).PressableHighlight;
  if (tmp11Result) {
    const obj5 = {
      style: tmp.emptyDropdownText,
      variant: "text-sm/normal",
      color: "text-muted",
      children: "No answers selected.",
    };
    tmp11Result = closure_15(tmp4(tmp3[23]).Text, obj5);
  }
  const obj6 = { children: items6 };
  const obj7 = { children: closure_16(PressableHighlight, obj4) };
  items5 = [
    tmp11Result,
    found.map((option) => {
      const obj = { option };
      return closure_1_15(closure_1_23, obj, option.id);
    }),
  ];
  const obj8 = { style: tmp.dropdownIconContainer, children: closure_15(closure_5, obj9) };
  obj9 = { style: tmp.dropdownIcon, source: tmp2(selectOption[37]) };
  items5[2] = closure_15(closure_6, obj8);
  items4[1] = closure_15(closure_6, obj7);
  items6 = [
    closure_16(closure_7, obj2),
    closure_15(closure_21, {
      guildId,
      currentPrompt,
      selectedOptionIds: stateFromStoresArray,
      handleOnPress,
      lastPrompt,
    }),
  ];
  return closure_16(closure_17, obj6);
};
