// discord_app/modules/hub/native/components/HubEmailConnectionContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import native2 from "../../../../design/assets/native.tsx";
import HubEmailConnectionModal from "HubEmailConnectionModal.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const HubConstants = fn(12719);
({ HubEmailConnectionSteps: closure_9, INVITE_ROUTING_HUB_GUILD_ID: c10 } = HubConstants);
const MarketingURLs = fn(1074).MarketingURLs;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = {
  container: { paddingHorizontal: 16 },
  header: { marginTop: 16, marginBottom: 16, alignSelf: "center" },
  scrollViewContainer: { flexGrow: 2 },
  title: { textAlign: "center", marginBottom: 8 },
  description: { textAlign: "center", marginBottom: 24 },
  input: { marginBottom: 32 },
  textInput: null,
  growSpacing: null,
  buttonContainer: null,
};
createStyles = { borderRadius: nativeDefault.radii.lg };
createStyles.textInput = createStyles;
createStyles.growSpacing = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
let obj1 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
createStyles.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionContent.tsx");

export default function HubEmailConnectionContent(arg0) {
  ({ onClose: require, invite } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  closure_7 = async function _signup() {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp4;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            let guilds_info;
            noop(null);
            _slicedToArray(true);
            c5 = 2;
            let id;
            if (invite != null) {
              const guild = invite.guild;
              if (guild != null) {
                id = guild.id;
              }
            }
            let guildId = id;
            if (id == null) {
              let id1;
              if (invite != null) {
                let channel = invite.channel;
                if (channel != null) {
                  id1 = channel.id;
                }
              }
              channel = channel.getChannel(id1);
              guildId = undefined;
              if (channel != null) {
                guildId = channel.getGuildId();
              }
            }
            let _undefined = guildId;
            if (guildId == null) {
              _undefined = undefined;
            }
            closure_130_0 = _undefined;
            if (_undefined === closure_1_10) {
              closure_130_0 = undefined;
            }
            c6 = 3;
            c7 = 1;
            const obj1 = {
              value: guildId(tmp6[12]).sendVerificationEmail(asyncGeneratorStep, true, _undefined),
              done: false,
            };
            return obj1;
          }
        } else if (1 === tmp9) {
          c5 = 0;
          closure_131_4(false);
          throw closure_4;
        } else {
          if (2 === tmp9) {
            c5 = 1;
            closure_130_3 = closure_4;
            const aPIError = new _undefined(tmp6[13]).APIError(closure_130_3);
            closure_131_5(aPIError);
            c5 = 0;
            closure_131_4(false);
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
                    const obj2 = { email: closure_131_3, onClose: closure_131_0, guildId: closure_130_0 };
                    closure_131_2.push(constants.VERIFY_PIN, obj2);
                  }
                }
                if (0 === guilds_info.length) {
                  let obj3 = { email: closure_131_3, onClose: closure_131_0 };
                  closure_131_2.push(constants.SUBMIT_SCHOOL, obj3);
                } else if (1 === guilds_info.length) {
                  obj3 = guildId(tmp6[12]);
                  c6 = 4;
                  c7 = 1;
                  const obj4 = {
                    value: obj3.sendVerificationEmail(closure_131_3, true, guilds_info[0].id),
                    done: false,
                  };
                  return obj4;
                } else {
                  const obj5 = { email: closure_131_3, onClose: closure_131_0, guildsInfo: guilds_info };
                  closure_131_2.push(constants.SELECT_SCHOOL, obj5);
                }
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_131_4(false);
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              obj = { email: closure_131_3, onClose: closure_131_0, guildId: guilds_info[0].id };
              closure_131_2.push(constants.VERIFY_PIN, obj);
            }
            c5 = 1;
          }
          c5 = 0;
          closure_131_4(false);
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
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
  const tmp = closure_14();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  const tmp4 = _slicedToArray(noop.useState(""), 2);
  value = tmp4[0];
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp6[1];
  [obj2, c5] = _slicedToArray(noop.useState(null), 2);
  const ref = noop.useRef(null);
  const intl = util.intl;
  const stringResult = intl.string(util.t.H1jCHH);
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
        const intl2 = util.intl;
        obj = { guildName: invite.guild.name, count: invite.approximate_member_count };
        formatToPlainStringResult = intl2.formatToPlainString(util.t["4T4+p1"], obj);
      }
    }
  }
  obj = { ref, contentContainerStyle: null, children: null };
  const items = [tmp.scrollViewContainer];
  let obj1 = { paddingBottom: invite(6981)().insets.bottom + invite(576).space.PX_16 };
  items[1] = obj1;
  obj.contentContainerStyle = items;
  obj2 = { style: tmp.container, children: null };
  const tmp16 = closure_7;
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  const items1 = [
    closure_12(ref, { style: tmp.header, children: closure_12(native2.InkQuillSpotIllustration, { scale: 0.75 }) }),
    closure_12(Text_Text.Text, {
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      style: tmp.title,
      accessibilityRole: "header",
      children: formatToPlainStringResult,
    }),
    ,
  ];
  let obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  obj5.children = intl3.format(util.t["6kzaqs"], {
    onClick() {
      invite(paths[18]).openLazy(
        require("asyncRequireImpl")(paths[19], paths.paths),
        "HubEmailConnectionDescriptionActionsheet",
      );
    },
  });
  items1[2] = closure_12(Text_Text.Text, obj5);
  let obj7 = {
    label: null,
    placeholder: null,
    value: null,
    textContentType: "emailAddress",
    autoCapitalize: "none",
    keyboardType: "email-address",
    hint: null,
    textStyle: null,
    onChangeText: null,
    style: null,
    clearButtonVisibility: null,
    error: null,
    onFocus: null,
    onBlur: null,
  };
  let obj3 = { style: tmp.header, children: closure_12(native2.InkQuillSpotIllustration, { scale: 0.75 }) };
  let obj4 = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: tmp.title,
    accessibilityRole: "header",
    children: formatToPlainStringResult,
  };
  let obj6 = {
    onClick() {
      invite(paths[18]).openLazy(
        require("asyncRequireImpl")(paths[19], paths.paths),
        "HubEmailConnectionDescriptionActionsheet",
      );
    },
  };
  const intl4 = util.intl;
  obj7.label = intl4.string(util.t["K/7rLI"]);
  const intl5 = util.intl;
  obj7.placeholder = intl5.string(util.t.ImAOh5);
  obj7.value = value;
  const intl6 = util.intl;
  obj7.hint = intl6.format(util.t.RPT0vj, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  obj7.textStyle = tmp.textInput;
  obj7.onChangeText = tmp4[1];
  obj7.style = tmp.input;
  obj7.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (obj1 != null) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  const obj9 = { children: null };
  obj7.error = anyErrorMessage;
  obj7.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj7.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items1[3] = closure_12(invite(6605), obj7);
  obj2.children = items1;
  const items2 = [closure_13(ref, obj2), closure_12(ref, { style: tmp.growSpacing })];
  const obj11 = { style: tmp.buttonContainer, children: null };
  const obj12 = { size: "lg", text: null, onPress: null, loading: null };
  const intl7 = util.intl;
  obj12.text = intl7.string(util.t["8vmKO0"]);
  obj12.onPress = function signup() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj12.loading = tmp6[0];
  obj11.children = closure_12(components_Button_Button.Button, obj12);
  items2[2] = closure_12(ref, obj11);
  obj.children = items2;
  obj9.children = closure_13(tmp16, obj);
  return closure_12(HubEmailConnectionModal.HubEmailConnectionScreen, obj9);
}
