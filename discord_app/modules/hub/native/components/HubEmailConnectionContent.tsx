// discord_app/modules/hub/native/components/HubEmailConnectionContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl8 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import HubEmailConnectionModal from "HubEmailConnectionModal.tsx";
import InkQuillSpotIllustration from "../../../../design/components/mana-assets/native/generated/InkQuillSpotIllustration.native.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import HubConstants from "../../HubConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c6, c7, closure_4, dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ HubEmailConnectionSteps: c9, INVITE_ROUTING_HUB_GUILD_ID: c10 } = HubConstants);
const MarketingURLs = Constants.MarketingURLs;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { paddingHorizontal: 16 },
  header: { marginTop: 16, marginBottom: 16, alignSelf: "center" },
  scrollViewContainer: { flexGrow: 2 },
  title: { textAlign: "center", marginBottom: 8 },
  description: { textAlign: "center", marginBottom: 24 },
  input: { marginBottom: 32 },
  textInput: obj2,
  growSpacing: obj3,
  buttonContainer: obj4,
};
obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionContent.tsx");

export default function HubEmailConnectionContent(arg0) {
  let Button;
  let _undefined;
  let anyErrorMessage;
  let c5;
  let first1;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let invite;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj12;
  let obj16;
  let obj2;
  let paths;
  let tmp6;
  let value;
  ({ onClose: require, invite } = arg0);
  dependencyMap = undefined;
  value = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let obj = function _signup() {
    obj = _asyncToGenerator(async function () {
      let getChannel;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let closure_3;
          let guildId;
          let guildId2;
          let guilds_info;
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
              closure_3 = tmp;
              guildId = undefined;
              guildId2 = undefined;
              guilds_info = undefined;
              _undefined(null);
              closure_2_4(true);
              c5 = 2;
              let id;
              if (invite != null) {
                const guild = invite.guild;
                if (guild != null) {
                  id = guild.id;
                }
              }
              guildId = id;
              if (id == null) {
                let id1;
                getChannel = getChannel.getChannel;
                if (invite != null) {
                  const channel = invite.channel;
                  if (channel != null) {
                    id1 = channel.id;
                  }
                }
                const channel1 = getChannel(id1);
                guildId = undefined;
                if (channel1 != null) {
                  guildId = channel1.getGuildId();
                }
              }
              if (guildId == null) {
                guildId = undefined;
              }
              const tmp73 = guildId;
              if (guildId === closure_1_10) {
                guildId = undefined;
              }
              const obj10 = guildId(guilds_info[12]);
              guilds_info = obj10.sendVerificationEmail(_asyncToGenerator, true, tmp73);
              c6 = 3;
              c7 = 1;
              const obj5 = { value: guilds_info, done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            guilds_info = closure_131_4(false);
            throw closure_4;
          } else {
            if (2 === c6) {
              c5 = 1;
              closure_3 = closure_4;
              guilds_info = closure_131_5;
              const self = this;
              const self2 = this;
              const aPIError = new guildId(guilds_info[13]).APIError(closure_3);
              closure_131_5(aPIError);
            } else {
              if (3 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  closure_131_4(false);
                  c7 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  guildId2 = value;
                  guilds_info = guildId2.guilds_info;
                  if (guildId2.has_matching_guild) {
                    if (null != guildId) {
                      const obj7 = { email: closure_131_3, onClose: closure_131_0, guildId };
                      closure_131_2.push(constants.VERIFY_PIN, obj7);
                    }
                  }
                  if (0 === guilds_info.length) {
                    const obj8 = { email: closure_131_3, onClose: closure_131_0 };
                    closure_131_2.push(constants.SUBMIT_SCHOOL, obj8);
                  } else if (1 === guilds_info.length) {
                    const obj4 = guildId(guilds_info[12]);
                    guilds_info = obj4.sendVerificationEmail(closure_131_3, true, guilds_info[0].id);
                    c6 = 4;
                    c7 = 1;
                    const obj9 = { value: guilds_info, done: false };
                    return obj9;
                  } else {
                    const obj11 = { email: closure_131_3, onClose: closure_131_0, guildsInfo: guilds_info };
                    closure_131_2.push(constants.SELECT_SCHOOL, obj11);
                  }
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_131_4(false);
                c7 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                obj = { email: closure_131_3, onClose: closure_131_0, guildId: guilds_info[0].id };
                closure_131_2.push(constants.VERIFY_PIN, obj);
              }
              c5 = 1;
            }
            c5 = 0;
            closure_131_4(false);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp78) {
          closure_4 = tmp78;
          if (0 === c5) {
            c7 = 3;
            throw tmp78;
          } else if (1 === tmp80) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_14();
  const tmp3 = dependencyMap;
  obj = useNavigation;
  dependencyMap = obj.useNavigation();
  [value, tmp6] = react.useState("");
  [first1, _slicedToArray] = react.useState(false);
  [obj2, c5] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const insets = invite(6478)().insets;
  const ref = react.useRef(null);
  const intl = intl8.intl;
  const stringResult = intl.string(intl8.t.H1jCHH);
  let guild;
  if (invite != null) {
    guild = invite.guild;
  }
  let formatToPlainStringResult = stringResult;
  if (null != guild) {
    formatToPlainStringResult = stringResult;
    if (invite.guild.id !== closure_10) {
      let prop;
      if (invite != null) {
        prop = invite.approximate_member_count;
      }
      formatToPlainStringResult = stringResult;
      if (null != prop) {
        const name = invite.guild.name;
        const intl2 = intl8.intl;
        let obj3 = { guildName: name, count: invite.approximate_member_count };
        formatToPlainStringResult = intl2.formatToPlainString(intl8.t["4T4+p1"], obj3);
      }
    }
  }
  let obj4 = { ref, contentContainerStyle: items, children: items2 };
  items = [tmp.scrollViewContainer];
  let obj5 = { paddingBottom: insets.bottom + invite(587).space.PX_16 };
  const HubEmailConnectionScreen = HubEmailConnectionModal.HubEmailConnectionScreen;
  items[1] = obj5;
  let obj6 = { style: tmp.container, children: items1 };
  let obj7 = {
    style: tmp.header,
    children: closure_12(InkQuillSpotIllustration.InkQuillSpotIllustration, { scale: 0.75 }),
  };
  items1 = [closure_12(ref, obj7), , ,];
  let obj8 = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: tmp.title,
    accessibilityRole: "header",
    children: formatToPlainStringResult,
  };
  items1[1] = closure_12(Text_Text.Text, obj8);
  let obj9 = {
    style: tmp.description,
    variant: "text-sm/medium",
    color: "text-default",
    children: intl3.format(intl8.t["6kzaqs"], obj10),
  };
  const Text = Text_Text.Text;
  intl3 = intl8.intl;
  obj10 = {
    onClick() {
      obj = invite(paths[18]);
      obj.openLazy(require("asyncRequire")(paths[19], paths.paths), "HubEmailConnectionDescriptionActionsheet");
    },
  };
  items1[2] = closure_12(Text, obj9);
  let obj11 = {
    label: intl4.string(intl8.t["K/7rLI"]),
    placeholder: intl5.string(intl8.t.ImAOh5),
    value,
    textContentType: "emailAddress",
    autoCapitalize: "none",
    keyboardType: "email-address",
    hint: intl6.format(intl8.t.RPT0vj, obj12),
    textStyle: tmp.textInput,
    onChangeText: tmp6,
    style: tmp.input,
    clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT,
    error: anyErrorMessage,
    onFocus() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    },
    onBlur() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    },
  };
  const tmp10Result = invite(6104);
  intl4 = intl8.intl;
  intl5 = intl8.intl;
  intl6 = intl8.intl;
  obj12 = { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY };
  anyErrorMessage = undefined;
  const tmp18 = obj;
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  const obj13 = { children: closure_13(tmp18, obj4) };
  items1[3] = closure_12(tmp10Result, obj11);
  items2 = [closure_13(tmp19, obj6), ,];
  const obj14 = { style: tmp.growSpacing };
  items2[1] = closure_12(ref, obj14);
  const obj15 = { style: tmp.buttonContainer, children: closure_12(Button, obj16) };
  obj16 = {
    size: "lg",
    text: intl7.string(intl8.t["8vmKO0"]),
    onPress: function signup() {
      return obj(...arguments);
    },
    loading: first1,
  };
  Button = components_Button_Button.Button;
  intl7 = intl8.intl;
  items2[2] = closure_12(ref, obj15);
  return closure_12(HubEmailConnectionScreen, obj13);
}
