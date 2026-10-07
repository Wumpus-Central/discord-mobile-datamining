// === Module 12422: HubEmailConnectionPinVerify ===

// Module 12422 (HubEmailConnectionPinVerify)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import _modDef4822 from "module_4822" /* 4822 */;
import HubJoinManagerDefault from "HubJoinManager" /* 12423 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;

const require = globalThis.__r;

const require = fn;
function presentResendToast(content) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "HUB_EMAIL_RESET", content, icon: _modDef4822 });
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let closure_11 = createStyles.createStyles({ container: { alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 24 }, label: { textAlign: "center", marginBottom: 12 }, error: { alignSelf: "center", marginVertical: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionPinVerify.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((email) => {
  const cResult = require("c").c(38);
  email = email.email;
  _require = email;
  const guildId = email.guildId;
  onClose = email.onClose;
  const tmp4 = closure_11();
  if (cResult[0] !== onClose) {
    const fn = function y() {
      HubJoinManagerDefault.initialize(() => {
        dependencyMap(true);
        guildId(onClose[12])();
      });
      return () => {
        guildId(12423).terminate();
      };
    };
    const items = [onClose];
    cResult[0] = onClose;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[3] === email) {
    if (cResult[4] === guildId) {
      let tmp8 = cResult[5];
    }
    const obj3 = guildId(tmp2[16]);
    const tmp9 = guildId;
    const throttleResult = guildId(tmp2[16]).throttle(tmp8, 1000);
    [obj4, _slicedToArray] = noop.useState(null);
    if (cResult[6] === email) {
      if (cResult[7] === guildId) {
        if (cResult[8] === onClose) {
          let tmp14 = cResult[9];
        }
        const HubEmailConnectionScreen = tmp(tmp2[18]).HubEmailConnectionScreen;
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { source: tmp9(tmp2[19]) };
          const tmp21 = closure_9(closure_7, obj5);
          cResult[10] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(tmp2[14]).intl;
          const stringResult = intl.string(tmp(tmp2[14]).t.SJ3Lxc);
          cResult[11] = stringResult;
          let tmp22 = stringResult;
        } else {
          tmp22 = cResult[11];
        }
        if (cResult[12] !== tmp4.title) {
          const obj6 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp22 };
          const tmp26 = closure_9(tmp(tmp2[20]).Text, obj6);
          cResult[12] = tmp4.title;
          cResult[13] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[13];
        }
        const Text = tmp(tmp2[20]).Text;
        let intl2 = tmp(tmp2[14]).intl;
        const obj7 = { onClick: throttleResult, email };
        const formatResult = intl2.format(tmp(tmp2[14]).t["b+W0oq"], obj7);
        if (cResult[14] === Text) {
          if (cResult[15] === tmp4.description) {
            if (cResult[16] === formatResult) {
              let tmp28 = cResult[17];
            }
            const _Symbol3 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(tmp2[14]).intl;
              const stringResult1 = intl3.string(tmp(tmp2[14]).t.rpWT1s);
              cResult[18] = stringResult1;
              let tmp31 = stringResult1;
            } else {
              tmp31 = cResult[18];
            }
            if (cResult[19] !== tmp4.label) {
              const obj8 = { style: tmp4.label, variant: "text-sm/semibold", color: "text-muted", children: tmp31 };
              const tmp35 = closure_9(tmp(tmp2[20]).Text, obj8);
              cResult[19] = tmp4.label;
              cResult[20] = tmp35;
              let tmp33 = tmp35;
            } else {
              tmp33 = cResult[20];
            }
            if (cResult[21] !== tmp14) {
              const obj9 = { hasError: false, count: 8, onCodeEntered: tmp14, codeType: tmp(tmp2[21]).CodeType.ALPHANUMERIC };
              const tmp38 = closure_9(tmp(tmp2[21]).CodeBlocks, obj9);
              cResult[21] = tmp14;
              cResult[22] = tmp38;
              let tmp36 = tmp38;
            } else {
              tmp36 = cResult[22];
            }
            if (cResult[23] === obj4) {
              if (cResult[24] === tmp4.error) {
                let tmp39 = cResult[25];
              }
              if (cResult[26] === closure_6) {
                if (cResult[27] === tmp4.container) {
                  if (cResult[28] === tmp28) {
                    if (cResult[29] === tmp33) {
                      if (cResult[30] === tmp36) {
                        if (cResult[31] === tmp39) {
                          if (cResult[32] === tmp18) {
                            if (cResult[33] === tmp24) {
                              let tmp42 = cResult[34];
                            }
                            if (cResult[35] === HubEmailConnectionScreen) {
                              if (cResult[36] === tmp42) {
                                let tmp45 = cResult[37];
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
              const obj11 = { style: tmp4.container, children: null };
              const items1 = [tmp18, tmp24, tmp28, tmp33, tmp36, tmp39];
              obj11.children = items1;
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
              tmp40 = closure_9(tmp(tmp2[20]).Text, obj12);
            }
            cResult[23] = obj4;
            cResult[24] = tmp4.error;
            cResult[25] = tmp40;
            tmp39 = tmp40;
          }
        }
        const obj13 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: formatResult };
        const tmp30 = closure_9(Text, obj13);
        cResult[14] = Text;
        cResult[15] = tmp4.description;
        cResult[16] = formatResult;
        cResult[17] = tmp30;
        tmp28 = tmp30;
      }
    }
    _require = asyncGeneratorStep(async (arg0) => {
      await guildId(onClose[13]).verifyCode(closure_0, closure_1, closure_0);
      if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = tmp39;
        const aPIError = new closure_0(onClose[15]).APIError(closure_129_1);
        tmp39(aPIError);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const guild2 = guild.getGuild(closure_1);
        if (null != guild2) {
          tmp3(true);
          closure_0(onClose[17]).transitionToGuild(guild2.id);
          closure_0(onClose[17]);
        }
        c4 = 0;
      }
      return value;
    });
    function handleCodeEntered() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[6] = email;
    cResult[7] = guildId;
    cResult[8] = onClose;
    cResult[9] = handleCodeEntered;
    tmp14 = handleCodeEntered;
    const tmp13 = _slicedToArray(noop.useState(null), 2);
  }
  _require = asyncGeneratorStep(async () => {
    closure_2 = tmp3;
    await guildId(onClose[13]).sendVerificationEmail(closure_0, true, closure_1);
    if (1 === tmp7) {
      c4 = 0;
      closure_129_0 = closure_3;
      const aPIError = new closure_0(onClose[15]).APIError(closure_129_0);
      closure_129_1 = aPIError;
      let anyErrorMessage;
      if (closure_129_1 != null) {
        anyErrorMessage = obj2.getAnyErrorMessage();
      }
      closure_0 = anyErrorMessage;
      if (anyErrorMessage == null) {
        const intl2 = closure_0(onClose[14]).intl;
        closure_0 = intl2.string(closure_0(onClose[14]).t.FPzC5z);
      }
      presentResendToast(closure_0);
      c6 = 3;
      obj2 = closure_129_1;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const intl = closure_0(onClose[14]).intl;
      presentResendToast(intl.string(closure_0(onClose[14]).t["2bO4dz"]));
      c4 = 0;
    }
    return value;
  });
  const fn2 = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[3] = email;
  cResult[4] = guildId;
  cResult[5] = fn2;
  tmp8 = fn2;
  const obj = require("c");
}) : ((email) => {
  email = email.email;
  ({ guildId: importDefault, onClose } = email);
  _slicedToArray = undefined;
  asyncGeneratorStep = async function _handleCodeEntered2(arg0) {
    await closure_1(tmp3[13]).verifyCode(closure_0, closure_2_1, email);
    if (1 === tmp7) {
      c4 = 0;
      closure_129_1 = closure_3;
      const aPIError = new email(tmp3[15]).APIError(closure_129_1);
      closure_130_3(aPIError);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const guild2 = guild.getGuild(closure_130_1);
      if (null != guild2) {
        closure_130_2(true);
        email(tmp3[17]).transitionToGuild(guild2.id);
        email(tmp3[17]);
      }
      c4 = 0;
    }
    return value;
  };
  const tmp = closure_11();
  const items = [onClose];
  const effect = noop.useEffect(() => {
    HubJoinManagerDefault.initialize(() => {
      dependencyMap(true);
      require("navigateToLastChannel")();
    });
    return () => {
      closure_1_1(12423).terminate();
    };
  }, items);
  const obj = require("module_12");
  const throttleResult = require("module_12").throttle(asyncGeneratorStep(async () => {
    await closure_1(tmp3[13]).sendVerificationEmail(email, true, importDefault);
    if (1 === tmp7) {
      c4 = 0;
      closure_129_1 = closure_3;
      const aPIError = new email(tmp3[15]).APIError(closure_129_1);
      closure_129_0 = aPIError;
      let anyErrorMessage;
      if (closure_129_0 != null) {
        anyErrorMessage = obj2.getAnyErrorMessage();
      }
      email = anyErrorMessage;
      if (anyErrorMessage == null) {
        const intl2 = email(tmp3[14]).intl;
        email = intl2.string(email(tmp3[14]).t.FPzC5z);
      }
      presentResendToast(email);
      c6 = 3;
      obj2 = closure_129_0;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const intl = email(tmp3[14]).intl;
      presentResendToast(intl.string(email(tmp3[14]).t["2bO4dz"]));
      c4 = 0;
    }
    return value;
  }), 1000);
  [obj2, c3] = noop.useState(null);
  const obj3 = { style: tmp.container, children: null };
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  const tmp7 = email;
  const items1 = [closure_9(closure_7, { source: require("module_12424") }), , , , , ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = email(onClose[14]).intl;
  obj5.children = intl.string(email(onClose[14]).t.SJ3Lxc);
  items1[1] = closure_9(email(onClose[20]).Text, obj5);
  const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = email(onClose[14]).intl;
  obj6.children = intl2.format(email(onClose[14]).t["b+W0oq"], { onClick: throttleResult, email });
  items1[2] = closure_9(email(onClose[20]).Text, obj6);
  const obj7 = { style: tmp.label, variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl3 = email(onClose[14]).intl;
  obj7.children = intl3.string(email(onClose[14]).t.rpWT1s);
  items1[3] = closure_9(email(onClose[20]).Text, obj7);
  const obj4 = { source: require("module_12424") };
  items1[4] = closure_9(email(onClose[21]).CodeBlocks, {
    hasError: false,
    count: 8,
    onCodeEntered: function handleCodeEntered(arg0) {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    codeType: email(onClose[21]).CodeType.ALPHANUMERIC
  });
  let tmp6Result = null != obj2;
  if (tmp6Result) {
    const obj9 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp.error, children: obj2.getAnyErrorMessage() };
    tmp6Result = closure_9(tmp7(onClose[20]).Text, obj9);
  }
  const obj8 = {
    hasError: false,
    count: 8,
    onCodeEntered: function handleCodeEntered(arg0) {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    codeType: email(onClose[21]).CodeType.ALPHANUMERIC
  };
  items1[5] = tmp6Result;
  obj3.children = items1;
  return closure_9(email(onClose[18]).HubEmailConnectionScreen, { children: closure_10(closure_6, obj3) });
});