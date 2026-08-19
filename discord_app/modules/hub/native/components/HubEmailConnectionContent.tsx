// === Module 11909: HubEmailConnectionContent ===

// Module 11909 (HubEmailConnectionContent)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import useNavigation from "useNavigation" /* 1500 */;
import Text from "Text" /* 4734 */;
import Button2 from "Button" /* 4745 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 5447 */;
import HubEmailConnectionModal from "HubEmailConnectionModal" /* 11905 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import HubEmailConnectionSteps from "HubEmailConnectionSteps" /* 11897 */;
import { MarketingURLs } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ HubEmailConnectionSteps: c9, INVITE_ROUTING_HUB_GUILD_ID: c10 } = HubEmailConnectionSteps);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createCacheKey = { borderRadius: ThemesDefault.radii.lg };
createCacheKey[6] = createCacheKey;
createCacheKey[7] = { flexGrow: 2, minHeight: ThemesDefault.space.PX_24 };
createCacheKey[8] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionContent.tsx");

export default function HubEmailConnectionContent(arg0) {
  ({ onClose: require, invite } = arg0);
  let callback;
  let React;
  function _signup() {
    const self = this;
    const tmp = first(function*() {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp4;
              let guilds_info = tmp6;
              c0 = undefined;
              let guildId;
              guilds_info = undefined;
              v0(null);
              closure_1_4(true);
              v0 = 2;
              let id;
              if (lib != null) {
                const guild = tmp105.guild;
                if (guild != null) {
                  id = guild.id;
                }
              }
              guildId = id;
              if (id == null) {
                let id1;
                if (tmp105 != null) {
                  let channel = tmp105.channel;
                  if (channel != null) {
                    id1 = channel.id;
                  }
                }
                channel = closure_1_8.getChannel(id1);
                guildId = undefined;
                if (channel != null) {
                  guildId = channel.getGuildId();
                }
              }
              c0 = guildId;
              if (guildId == null) {
                c0 = undefined;
              }
              if (c0 === closure_1_10) {
                c0 = undefined;
              }
              c6 = 3;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = lib(guilds_info[12]).sendVerificationEmail(closure_3, true, c0);
              return obj1;
            }
          } else if (1 === tmp9) {
            v0 = 0;
            callback(false);
            throw callback;
          } else {
            if (2 === tmp9) {
              v0 = 1;
              closure_3 = callback;
              const aPIError = new closure_1_0(guilds_info[13]).APIError(closure_3);
              v0(aPIError);
              v0 = 0;
              closure_1_4(false);
              c7 = 3;
            } else {
              if (3 === tmp9) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  lib = arg1;
                  guilds_info = lib.guilds_info;
                  if (lib.has_matching_guild) {
                    if (null != closure_1_0) {
                      const obj2 = { email: null, onClose: null, guildId: null };
                      obj2[0] = closure_3;
                      obj2[1] = c0;
                      obj2[2] = c0;
                      guilds_info.push(closure_1_9.VERIFY_PIN, obj2);
                    }
                  }
                  if (0 === guilds_info.length) {
                    let obj3 = { email: null, onClose: null };
                    obj3[0] = closure_3;
                    obj3[1] = c0;
                    guilds_info.push(closure_1_9.SUBMIT_SCHOOL, obj3);
                  } else if (1 === guilds_info.length) {
                    obj3 = lib(guilds_info[12]);
                    c6 = 4;
                    c7 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = obj3.sendVerificationEmail(closure_3, true, guilds_info[0].id);
                    return obj4;
                  } else {
                    const obj5 = { email: null, onClose: null, guildsInfo: null };
                    obj5[0] = closure_3;
                    obj5[1] = c0;
                    obj5[2] = guilds_info;
                    guilds_info.push(closure_1_9.SELECT_SCHOOL, obj5);
                  }
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                closure_1_4(false);
                c7 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                obj = { email: null, onClose: null, guildId: null };
                obj[0] = closure_3;
                obj[1] = c0;
                obj[2] = guilds_info[0].id;
                guilds_info.push(closure_1_9.VERIFY_PIN, obj);
              }
              v0 = 1;
            }
            v0 = 0;
            closure_1_4(false);
            c7 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
        } catch (tmp87) {
          callback = tmp87;
          if (tmp5 === v0) {
            c7 = tmp3;
            throw tmp87;
          } else if (tmp2 === tmp89) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    });
    closure_7 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  const tmp4 = callback(React.useState(""), 2);
  const first = tmp4[0];
  const tmp6 = callback(React.useState(false), 2);
  callback = tmp6[1];
  [obj2, c5] = callback(React.useState(null), 2);
  const ref = React.useRef(null);
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.H1jCHH);
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
        const intl2 = getSystemLocale.intl;
        obj = { guildName: null, count: null };
        obj[0] = invite.guild.name;
        obj[1] = invite.approximate_member_count;
        formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t["4T4+p1"], obj);
      }
    }
  }
  obj = { ref, contentContainerStyle: null, children: null };
  const items = [tmp.scrollViewContainer, ];
  obj1 = { paddingBottom: invite(5441)().insets.bottom + invite(712).space.PX_16 };
  items[1] = obj1;
  obj[1] = items;
  obj2 = { style: tmp.container, children: null };
  const tmp16 = _signup;
  const tmp7 = callback(React.useState(null), 2);
  const items1 = [callback2(ref, { style: tmp.header, children: callback2(AccountAgeTier10LargeBadge.StudyGroupsSpotIllustration, { scale: 0.75 }) }), callback2(Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: formatToPlainStringResult }), , ];
  let obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = getSystemLocale.intl;
  obj5[3] = intl3.format(getSystemLocale.t["6kzaqs"], {
    onClick() {
      invite(paths[18]).openLazy(callback(paths[20])(paths[19], paths.paths), "HubEmailConnectionDescriptionActionsheet");
    }
  });
  items1[2] = callback2(Text.Text, obj5);
  let obj7 = { label: null, placeholder: null, value: null, textContentType: "emailAddress", autoCapitalize: "none", keyboardType: "email-address", hint: null, textStyle: null, onChangeText: null, style: null, clearButtonVisibility: null, error: null, onFocus: null, onBlur: null };
  let obj3 = { style: tmp.header, children: callback2(AccountAgeTier10LargeBadge.StudyGroupsSpotIllustration, { scale: 0.75 }) };
  const intl4 = getSystemLocale.intl;
  obj7[0] = intl4.string(getSystemLocale.t["K/7rLI"]);
  const intl5 = getSystemLocale.intl;
  obj7[1] = intl5.string(getSystemLocale.t.ImAOh5);
  obj7[2] = first;
  const intl6 = getSystemLocale.intl;
  obj7[6] = intl6.format(getSystemLocale.t.RPT0vj, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  obj7[7] = tmp.textInput;
  obj7[8] = tmp4[1];
  obj7[9] = tmp.input;
  obj7[10] = Button.ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (obj1 != null) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  const obj9 = { children: null };
  obj7[11] = anyErrorMessage;
  obj7[12] = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj7[13] = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items1[3] = callback2(invite(8575), obj7);
  obj2[1] = items1;
  const items2 = [callback(ref, obj2), callback2(ref, { style: tmp.growSpacing }), ];
  const obj11 = { style: tmp.buttonContainer, children: null };
  const obj12 = { size: "lg", text: null, onPress: null, loading: null };
  const intl7 = getSystemLocale.intl;
  obj12[1] = intl7.string(getSystemLocale.t["8vmKO0"]);
  obj12[2] = function signup() {
    const self = this;
    const apply = _signup.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj12[3] = tmp6[0];
  obj11[1] = callback2(Button2.Button, obj12);
  items2[2] = callback2(ref, obj11);
  obj[2] = items2;
  obj9[0] = callback(tmp16, obj);
  return callback2(HubEmailConnectionModal.HubEmailConnectionScreen, obj9);
};