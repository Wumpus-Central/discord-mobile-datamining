// === Module 12422: HubEmailConnectionPinVerify ===

// Module 12422 (HubEmailConnectionPinVerify)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import AssetRegistryDefault from "AssetRegistry" /* 4822 */;
import HubJoinManagerDefault from "HubJoinManager" /* 12423 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6, email, importDefault;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
function presentResendToast(content) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: "HUB_EMAIL_RESET", content, icon: AssetRegistryDefault };
  obj.open(obj2);
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, Image: metroImportDefault } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 24 }, label: { textAlign: "center", marginBottom: 12 }, error: { alignSelf: "center", marginVertical: 8 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((email) => {
  let items1;
  let obj4;
  let onClose;
  let tmp5;
  let tmp6;
  const tmp = email;
  let obj = email(onClose[10]);
  const cResult = obj.c(38);
  email = email.email;
  const guildId = email.guildId;
  onClose = email.onClose;
  const tmp4 = closure_11();
  if (cResult[0] !== onClose) {
    const fn = function y() {
      let obj = HubJoinManagerDefault;
      obj.initialize(() => {
        closure_1_2(true);
        guildId(onClose[12])();
      });
      return () => {
        const obj = guildId(onClose[11]);
        obj.terminate();
      };
    };
    const items = [onClose];
    cResult[0] = onClose;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[3] === email) {
    let tmp8;
    if (cResult[4] === guildId) {
      tmp8 = cResult[5];
    }
    let obj3 = guildId(tmp2[16]);
    const throttleResult = obj3.throttle(tmp8, 1000);
    const tmp13 = _slicedToArray(react.useState(null), 2);
    [obj4, _slicedToArray] = tmp13;
    const tmp9 = guildId;
    if (cResult[6] === email) {
      if (cResult[7] === guildId) {
        let tmp14;
        let tmp18;
        let tmp22;
        let tmp24;
        if (cResult[8] === onClose) {
          tmp14 = cResult[9];
        }
        const HubEmailConnectionScreen = tmp(tmp2[18]).HubEmailConnectionScreen;
        const _Symbol = Symbol;
        const container = tmp4.container;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          let obj5 = { source: tmp9(tmp2[19]) };
          const tmp21 = closure_9(closure_7, obj5);
          cResult[10] = tmp21;
          tmp18 = tmp21;
        } else {
          tmp18 = cResult[10];
        }
        const _Symbol2 = Symbol;
        const title = tmp4.title;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(tmp2[14]).intl;
          const stringResult = intl.string(tmp(onClose[14]).t.SJ3Lxc);
          cResult[11] = stringResult;
          tmp22 = stringResult;
        } else {
          tmp22 = cResult[11];
        }
        if (cResult[12] !== tmp4.title) {
          let obj6 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp22 };
          const tmp26 = closure_9(tmp(onClose[20]).Text, obj6);
          cResult[12] = tmp4.title;
          cResult[13] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[13];
        }
        const Text = tmp(tmp2[20]).Text;
        const description = tmp4.description;
        let intl2 = tmp(tmp2[14]).intl;
        const obj7 = { onClick: throttleResult, email };
        const formatResult = intl2.format(tmp(onClose[14]).t["b+W0oq"], obj7);
        if (cResult[14] === Text) {
          if (cResult[15] === tmp4.description) {
            let tmp28;
            let tmp31;
            let tmp33;
            let tmp36;
            if (cResult[16] === formatResult) {
              tmp28 = cResult[17];
            }
            const _Symbol3 = Symbol;
            const label = tmp4.label;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(tmp2[14]).intl;
              const stringResult1 = intl3.string(tmp(onClose[14]).t.rpWT1s);
              cResult[18] = stringResult1;
              tmp31 = stringResult1;
            } else {
              tmp31 = cResult[18];
            }
            if (cResult[19] !== tmp4.label) {
              const obj8 = { style: label, variant: "text-sm/semibold", color: "text-muted", children: tmp31 };
              const tmp35 = closure_9(tmp(onClose[20]).Text, obj8);
              cResult[19] = tmp4.label;
              cResult[20] = tmp35;
              tmp33 = tmp35;
            } else {
              tmp33 = cResult[20];
            }
            if (cResult[21] !== tmp14) {
              const obj9 = { hasError: false, count: 8, onCodeEntered: tmp14, codeType: tmp(onClose[21]).CodeType.ALPHANUMERIC };
              const CodeBlocks = tmp(tmp2[21]).CodeBlocks;
              const tmp38 = closure_9(CodeBlocks, obj9);
              cResult[21] = tmp14;
              cResult[22] = tmp38;
              tmp36 = tmp38;
            } else {
              tmp36 = cResult[22];
            }
            if (cResult[23] === obj4) {
              let tmp39;
              if (cResult[24] === tmp4.error) {
                tmp39 = cResult[25];
              }
              if (cResult[26] === closure_6) {
                if (cResult[27] === tmp4.container) {
                  if (cResult[28] === tmp28) {
                    if (cResult[29] === tmp33) {
                      if (cResult[30] === tmp36) {
                        if (cResult[31] === tmp39) {
                          if (cResult[32] === tmp18) {
                            let tmp42;
                            if (cResult[33] === tmp24) {
                              tmp42 = cResult[34];
                            }
                            if (cResult[35] === HubEmailConnectionScreen) {
                              let tmp45;
                              if (cResult[36] === tmp42) {
                                tmp45 = cResult[37];
                              }
                              return tmp45;
                            }
                            const obj10 = { children: tmp42 };
                            const tmp47 = closure_9(HubEmailConnectionScreen, obj10);
                            cResult[35] = HubEmailConnectionScreen;
                            cResult[36] = tmp42;
                            cResult[37] = tmp47;
                            tmp45 = tmp47;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj11 = { style: container, children: items1 };
              items1 = [tmp18, tmp24, tmp28, tmp33, tmp36, tmp39];
              const tmp44 = closure_10(closure_6, obj11);
              cResult[26] = closure_6;
              cResult[27] = tmp4.container;
              cResult[28] = tmp28;
              cResult[29] = tmp33;
              cResult[30] = tmp36;
              cResult[31] = tmp39;
              cResult[32] = tmp18;
              cResult[33] = tmp24;
              cResult[34] = tmp44;
              tmp42 = tmp44;
            }
            let tmp40 = null != obj4;
            if (tmp40) {
              const obj12 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp4.error, children: obj4.getAnyErrorMessage() };
              const Text2 = tmp(tmp2[20]).Text;
              tmp40 = closure_9(Text2, obj12);
            }
            cResult[23] = obj4;
            cResult[24] = tmp4.error;
            cResult[25] = tmp40;
            tmp39 = tmp40;
          }
        }
        const obj13 = { style: description, variant: "text-sm/medium", color: "text-default", children: formatResult };
        const tmp30 = closure_9(Text, obj13);
        cResult[14] = Text;
        cResult[15] = tmp4.description;
        cResult[16] = formatResult;
        cResult[17] = tmp30;
        tmp28 = tmp30;
      }
    }
    let closure_0 = _asyncToGenerator(async function(arg0) {
      let closure_2;
      let closure_3;
      let obj3;
      if (c6 === 2) {
        c6 = 3;
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
        let c4;
        try {
          let guild2;
          let closure_1;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              guild2 = undefined;
              closure_1 = undefined;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj3.verifyCode(guild2, closure_1, guild2), done: false };
              obj3 = guildId(onClose[13]);
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_1 = tmp34;
              const self = this;
              const self2 = this;
              const aPIError = new guild2(onClose[15]).APIError(closure_1);
              tmp34(aPIError);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              guild2 = guild.getGuild(closure_1);
              if (null != guild2) {
                tmp(true);
                const obj = guild2(onClose[17]);
                obj.transitionToGuild(guild2.id);
              }
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp34) {
          if (0 === c4) {
            c6 = 3;
            throw tmp34;
          } else {
            c5 = 1;
          }
        }
      }
    });
    function handleCodeEntered() {
      return closure_0(...arguments);
    }
    cResult[6] = email;
    cResult[7] = guildId;
    cResult[8] = onClose;
    cResult[9] = handleCodeEntered;
    tmp14 = handleCodeEntered;
  }
  closure_0 = _asyncToGenerator(async function() {
    let obj3;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            aPIError = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj6 = { value: obj3.sendVerificationEmail(closure_0, true, closure_1), done: false };
            obj3 = guildId(onClose[13]);
            return obj6;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            closure_0 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(onClose[15]).APIError(closure_0);
            let anyErrorMessage;
            const obj2 = aPIError;
            if (aPIError != null) {
              anyErrorMessage = obj2.getAnyErrorMessage();
            }
            closure_0 = anyErrorMessage;
            if (anyErrorMessage == null) {
              const intl2 = closure_0(onClose[14]).intl;
              closure_0 = intl2.string(closure_0(onClose[14]).t.FPzC5z);
            }
            presentResendToast(closure_0);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const intl = closure_0(onClose[14]).intl;
            presentResendToast(intl.string(closure_0(onClose[14]).t["2bO4dz"]));
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp34) {
        closure_3 = tmp34;
        if (0 === c4) {
          c6 = 3;
          throw tmp34;
        } else {
          c5 = 1;
        }
      }
    }
  });
  const fn2 = function() {
    return closure_0(...arguments);
  };
  cResult[3] = email;
  cResult[4] = guildId;
  cResult[5] = fn2;
  tmp8 = fn2;
}) : ((email) => {
  let c3;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj2;
  let onClose;
  email = email.email;
  ({ guildId: importDefault, onClose } = email);
  _slicedToArray = undefined;
  let obj = function _handleCodeEntered2() {
    obj = _asyncToGenerator(async function(arg0) {
      let closure_0;
      let obj3;
      if (c6 === 2) {
        c6 = 3;
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
        let c4;
        try {
          let closure_2;
          let closure_1;
          let guild2;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              guild2 = undefined;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj3.verifyCode(guild2, importDefault, email), done: false };
              obj3 = closure_1(closure_2[13]);
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_1 = closure_3;
              const self = this;
              const self2 = this;
              const aPIError = new guild2(closure_2[15]).APIError(closure_1);
              closure_130_3(aPIError);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              guild2 = guild.getGuild(closure_130_1);
              if (null != guild2) {
                closure_130_2(true);
                obj = guild2(closure_2[17]);
                obj.transitionToGuild(guild2.id);
              }
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp34) {
          closure_3 = tmp34;
          if (0 === c4) {
            c6 = 3;
            throw tmp34;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_11();
  const items = [onClose];
  const effect = react.useEffect(() => {
    obj = HubJoinManagerDefault;
    obj.initialize(() => {
      closure_1_2(true);
      require("navigateToLastChannel")();
    });
    return () => {
      obj = closure_1_1(onClose[11]);
      obj.terminate();
    };
  }, items);
  obj = require("module_12");
  const throttleResult = obj.throttle(obj(function*() {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj3;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            onClose = tmp;
            importDefault = tmp4;
            aPIError = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj6 = { value: obj3.sendVerificationEmail(email, true, importDefault), done: false };
            obj3 = require("HubActionCreators");
            return obj6;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            importDefault = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new email(onClose[15]).APIError(importDefault);
            let anyErrorMessage;
            const obj2 = aPIError;
            if (aPIError != null) {
              anyErrorMessage = obj2.getAnyErrorMessage();
            }
            email = anyErrorMessage;
            if (anyErrorMessage == null) {
              const intl2 = email(onClose[14]).intl;
              email = intl2.string(email(onClose[14]).t.FPzC5z);
            }
            presentResendToast(email);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const intl = email(onClose[14]).intl;
            presentResendToast(intl.string(email(onClose[14]).t["2bO4dz"]));
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp34) {
        closure_3 = tmp34;
        if (0 === c4) {
          c6 = 3;
          throw tmp34;
        } else {
          c5 = 1;
        }
      }
    }
  }), 1000);
  [obj2, c3] = _slicedToArray(react.useState(null), 2);
  let obj3 = { style: tmp.container, children: items1 };
  const tmp5 = _slicedToArray(react.useState(null), 2);
  let obj4 = { source: require("AssetRegistry") };
  const HubEmailConnectionScreen = email(onClose[18]).HubEmailConnectionScreen;
  items1 = [closure_9(closure_7, obj4), , , , , ];
  let obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(email(onClose[14]).t.SJ3Lxc) };
  const Text = email(onClose[20]).Text;
  intl = email(onClose[14]).intl;
  items1[1] = closure_9(Text, obj5);
  let obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.format(email(onClose[14]).t["b+W0oq"], { onClick: throttleResult, email }) };
  const Text2 = email(onClose[20]).Text;
  intl2 = email(onClose[14]).intl;
  items1[2] = closure_9(Text2, obj6);
  const obj7 = { style: tmp.label, variant: "text-sm/semibold", color: "text-muted", children: intl3.string(email(onClose[14]).t.rpWT1s) };
  const Text3 = email(onClose[20]).Text;
  intl3 = email(onClose[14]).intl;
  items1[3] = closure_9(Text3, obj7);
  const obj8 = {
    hasError: false,
    count: 8,
    onCodeEntered: function handleCodeEntered(arg0) {
      return obj(...arguments);
    },
    codeType: email(onClose[21]).CodeType.ALPHANUMERIC
  };
  const CodeBlocks = email(onClose[21]).CodeBlocks;
  items1[4] = closure_9(CodeBlocks, obj8);
  let tmp6Result = null != obj2;
  const tmp7 = email;
  if (tmp6Result) {
    const obj9 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp.error, children: obj2.getAnyErrorMessage() };
    const Text4 = tmp7(onClose[20]).Text;
    tmp6Result = closure_9(Text4, obj9);
  }
  items1[5] = tmp6Result;
  const obj10 = { children: closure_10(closure_6, obj3) };
  return closure_9(HubEmailConnectionScreen, obj10);
});
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionPinVerify.tsx");

export default tmp4;