// === Module 15092: HubEmailConnectionContent ===

// Module 15092 (HubEmailConnectionContent)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import useNavigation from "useNavigation" /* 1502 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 5320 */;
import Text_Text from "Text/Text" /* 5929 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import HubEmailConnectionModal from "HubEmailConnectionModal" /* 15088 */;
import InkQuillSpotIllustration from "InkQuillSpotIllustration" /* 15095 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_6, ScrollView: metroImportDefault } = get_ActivityIndicator);
const HubConstants = fn(15080);
({ HubEmailConnectionSteps: closure_9, INVITE_ROUTING_HUB_GUILD_ID: closure_10 } = HubConstants);
const MarketingURLs = fn(1072).MarketingURLs;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5306);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { container: { paddingHorizontal: 16 }, header: { marginTop: 16, marginBottom: 16, alignSelf: "center" }, scrollViewContainer: { flexGrow: 2 }, title: { textAlign: "center", marginBottom: 8 }, description: { alignItems: "center", marginBottom: 24 }, descriptionText: { textAlign: "center" }, learnMore: null, input: null, textInput: null, placeholder: null, growSpacing: null, buttonContainer: null };
  let str = "none";
  if (arg0) {
    str = "underline";
  }
  obj.learnMore = { alignSelf: "center", textDecorationLine: str };
  obj.input = { marginBottom: 32 };
  obj.textInput = { borderRadius: nativeDefault.radii.lg };
  const obj2 = { borderRadius: nativeDefault.radii.lg };
  obj.placeholder = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  const obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj.growSpacing = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
  const obj4 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
  obj.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionContent.tsx");

export default function HubEmailConnectionContent(arg0) {
  ({ onClose: require, invite } = arg0);
  value = undefined;
  noop = undefined;
  c6 = undefined;
  let obj4;
  function handleLearnMore() {
    invite(closure_2[13]).openLazy(require("asyncRequireImpl")(closure_2[14], closure_2.paths), "HubEmailConnectionDescriptionActionsheet");
  }
  closure_9 = async function _signup() {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp4;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            let guilds_info;
            timestampProducer(null);
            noop(true);
            c5 = 2;
            let id;
            if (invite != null) {
              guild = invite.guild;
              if (guild != null) {
                id = guild.id;
              }
            }
            let guildId = id;
            if (id == null) {
              let id1;
              if (invite != null) {
                const channel = invite.channel;
                if (channel != null) {
                  id1 = channel.id;
                }
              }
              const channel1 = channel.getChannel(id1);
              guildId = undefined;
              if (channel1 != null) {
                guildId = channel1.getGuildId();
              }
            }
            let _undefined = guildId;
            if (guildId == null) {
              _undefined = undefined;
            }
            closure_130_0 = _undefined;
            if (_undefined === obj4) {
              closure_130_0 = undefined;
            }
            c6 = 3;
            c7 = 1;
            const obj5 = { value: guildId(tmp6[16]).sendVerificationEmail(_slicedToArray, true, _undefined), done: false };
            return obj5;
          }
        } else if (1 === tmp9) {
          c5 = 0;
          closure_131_5(false);
          throw closure_4;
        } else {
          if (2 === tmp9) {
            c5 = 1;
            closure_130_3 = closure_4;
            const aPIError = new _undefined(tmp6[17]).APIError(closure_130_3);
            closure_131_6(aPIError);
            c5 = 0;
            closure_131_5(false);
            c7 = 3;
          } else {
            if (3 === tmp9) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_130_1 = value;
                guilds_info = closure_130_1.guilds_info;
                if (closure_130_1.has_matching_guild) {
                  if (null != closure_130_0) {
                    const obj6 = { email: closure_131_4, onClose: closure_131_0, guildId: closure_130_0 };
                    closure_131_3.push(constants.VERIFY_PIN, obj6);
                  }
                }
                if (0 === guilds_info.length) {
                  const obj7 = { email: closure_131_4, onClose: closure_131_0 };
                  closure_131_3.push(constants.SUBMIT_SCHOOL, obj7);
                } else if (1 === guilds_info.length) {
                  c6 = 4;
                  c7 = 1;
                  const obj8 = { value: guildId(tmp6[16]).sendVerificationEmail(closure_131_4, true, guilds_info[0].id), done: false };
                  return obj8;
                } else {
                  const obj9 = { email: closure_131_4, onClose: closure_131_0, guildsInfo: guilds_info };
                  closure_131_3.push(constants.SELECT_SCHOOL, obj9);
                }
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_131_5(false);
              c7 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              const obj = { email: closure_131_4, onClose: closure_131_0, guildId: guilds_info[0].id };
              closure_131_3.push(constants.VERIFY_PIN, obj);
            }
            c5 = 1;
          }
          c5 = 0;
          closure_131_5(false);
          c7 = 3;
          const obj12 = { value, done: true };
          return obj12;
        }
      } catch (tmp87) {
        closure_4 = tmp87;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp87;
        } else if (tmp2 === tmp89) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  };
  const tmp3 = closure_14(noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  dependencyMap = tmp3;
  closure_3 = useNavigation.useNavigation();
  const tmp4 = value(noop.useState(""), 2);
  value = tmp4[0];
  const tmp6 = value(noop.useState(false), 2);
  noop = tmp6[1];
  [obj2, c6] = value(noop.useState(null), 2);
  const ref = noop.useRef(null);
  let intl = util.intl;
  const stringResult = intl.string(util.t.H1jCHH);
  guild = undefined;
  if (invite != null) {
    guild = invite.guild;
  }
  let formatToPlainStringResult = stringResult;
  if (null != guild) {
    formatToPlainStringResult = stringResult;
    if (invite.guild.id !== obj4) {
      let prop;
      if (invite != null) {
        prop = invite.approximate_member_count;
      }
      formatToPlainStringResult = stringResult;
      if (null != prop) {
        const intl2 = util.intl;
        let obj3 = { guildName: invite.guild.name, count: invite.approximate_member_count };
        formatToPlainStringResult = intl2.formatToPlainString(util.t["4T4+p1"], obj3);
      }
    }
  }
  obj4 = { usesLearnMoreHook: false };
  const intl3 = util.intl;
  const formatResult = intl3.format(util.t["6kzaqs"], {
    learnMoreHook(children, arg1) {
      obj4.usesLearnMoreHook = true;
      const obj = { variant: "body-sm/medium", color: "text-link", style: closure_2.learnMore, accessible: true, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.vRWrrr);
      obj.onPress = handleLearnMore;
      obj.children = children;
      return application_id(Text_Text.Text, obj, arg1);
    },
    onClick: handleLearnMore
  });
  let arr = formatResult;
  if (!Array.isArray(formatResult)) {
    items = [formatResult];
    arr = items;
  }
  let obj6 = { ref, contentContainerStyle: null, children: null };
  const items1 = [tmp3.scrollViewContainer, ];
  let obj5 = {
    learnMoreHook(children, arg1) {
      obj4.usesLearnMoreHook = true;
      const obj = { variant: "body-sm/medium", color: "text-link", style: closure_2.learnMore, accessible: true, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.vRWrrr);
      obj.onPress = handleLearnMore;
      obj.children = children;
      return application_id(Text_Text.Text, obj, arg1);
    },
    onClick: handleLearnMore
  };
  const tmp7 = value(noop.useState(null), 2);
  items1[1] = { paddingBottom: invite(5913)().insets.bottom + invite(575).space.PX_16 };
  obj6.contentContainerStyle = items1;
  let obj8 = { style: tmp3.container, children: null };
  let obj7 = { paddingBottom: invite(5913)().insets.bottom + invite(575).space.PX_16 };
  const tmp17 = ref;
  const items2 = [closure_12(c6, { style: tmp3.header, children: closure_12(InkQuillSpotIllustration.InkQuillSpotIllustration, { scale: 0.75 }) }), closure_12(Text_Text.Text, { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp3.title, accessibilityRole: "header", children: formatToPlainStringResult }), , ];
  let obj11 = { style: tmp3.description, children: null };
  if (obj4.usesLearnMoreHook) {
    let mapped = arr.map((item, index) => {
      let tmp = item;
      if (typeof item === "string") {
        const obj = { style: closure_2.descriptionText, variant: "body-sm/medium", color: "text-default", children: item.trimEnd() };
        tmp = application_id(Text_Text.Text, obj, index);
      }
      return tmp;
    });
  } else {
    let obj12 = { style: tmp3.descriptionText, variant: "body-sm/medium", color: "text-default", children: formatResult };
    mapped = closure_12(Text_Text.Text, obj12);
  }
  obj11.children = mapped;
  items2[2] = closure_12(c6, obj11);
  const obj13 = { label: null, placeholder: null, placeholderTextColor: null, value: null, textContentType: "emailAddress", autoCapitalize: "none", keyboardType: "email-address", hint: null, textStyle: null, onChangeText: null, style: null, clearButtonVisibility: null, error: null, onFocus: null, onBlur: null };
  const obj10 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp3.title, accessibilityRole: "header", children: formatToPlainStringResult };
  let obj9 = { style: tmp3.header, children: closure_12(InkQuillSpotIllustration.InkQuillSpotIllustration, { scale: 0.75 }) };
  const intl4 = util.intl;
  obj13.label = intl4.string(util.t["K/7rLI"]);
  const intl5 = util.intl;
  obj13.placeholder = intl5.string(util.t.ImAOh5);
  obj13.placeholderTextColor = tmp3.placeholder.color;
  obj13.value = value;
  const intl6 = util.intl;
  obj13.hint = intl6.format(util.t.RPT0vj, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  obj13.textStyle = tmp3.textInput;
  obj13.onChangeText = tmp4[1];
  obj13.style = tmp3.input;
  obj13.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  const obj15 = { children: null };
  obj13.error = anyErrorMessage;
  obj13.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj13.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items2[3] = closure_12(invite(7617), obj13);
  obj8.children = items2;
  const items3 = [closure_13(c6, obj8), closure_12(c6, { style: tmp3.growSpacing }), ];
  const obj17 = { style: tmp3.buttonContainer, children: null };
  const obj18 = { size: "lg", text: null, onPress: null, loading: null };
  const intl7 = util.intl;
  obj18.text = intl7.string(util.t["8vmKO0"]);
  obj18.onPress = function signup() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj18.loading = tmp6[0];
  obj17.children = closure_12(components_Button_Button.Button, obj18);
  items3[2] = closure_12(c6, obj17);
  obj6.children = items3;
  obj15.children = closure_13(tmp17, obj6);
  return closure_12(HubEmailConnectionModal.HubEmailConnectionScreen, obj15);
};