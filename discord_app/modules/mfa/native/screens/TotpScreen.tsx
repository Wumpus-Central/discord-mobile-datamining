// discord_app/modules/mfa/native/screens/TotpScreen.tsx
import MFA from "../../../../../discord_common/js/shared/MFA.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function isValidClipboardCode(arg0) {
  let isMatch = arg0.length === MFA.TOTP_CODE_LENGTH;
  if (isMatch) {
    isMatch = /^\d+$/.test(arg0);
    const obj = /^\d+$/;
  }
  return isMatch;
}
let jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/TotpScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TotpScreen(arg0) {
      const cResult = require("c").c(24);
      ({ mfaChallenge, finish } = arg0);
      _require = finish;
      let obj = require("c");
      [tmp5, importDefault] = noop.useState(false);
      [first, asyncGeneratorStep] = noop.useState("");
      const tmp4 = _slicedToArray(noop.useState(false), 2);
      [tmp8, _slicedToArray] = noop.useState(undefined);
      let tmp7 = _slicedToArray(noop.useState(undefined), 2);
      [tmp10, noop] = noop.useState(false);
      if (cResult[0] !== finish) {
        _require = asyncGeneratorStep(async (data) => {
          c6 = 0;
          c7 = 0;
          c5 = 0;
          return (async (arg0) => {
            if (c7 === 2) {
              c7 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c7 = 2;
                let tmp7 = c6;
                if (0 === c6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_2 = tmp7;
                    closure_130_0 = undefined;
                    tmp3(data);
                    tmp7 = isValidClipboardCode(data);
                    if (tmp7) {
                      tmp28(undefined);
                      message(true);
                      v0 = 1;
                      const obj4 = { mfaType: "totp", data };
                      c6 = 2;
                      c7 = 1;
                      const obj5 = { value: data(obj4), done: false };
                      return obj5;
                    }
                  }
                } else {
                  if (1 === tmp7) {
                    v0 = 0;
                    closure_130_0 = tmp28;
                    message = undefined;
                    if (closure_130_0 != null) {
                      const body = closure_130_0.body;
                      if (body != null) {
                        message = body.message;
                      }
                    }
                    if (message == null) {
                      message = closure_130_0.message;
                    }
                    tmp28(message);
                  } else if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    c7 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    v0(true);
                    v0 = 0;
                  }
                  tmp7 = message(false);
                }
                c7 = 3;
              } catch (tmp28) {
                if (tmp4 === v0) {
                  c7 = tmp2;
                  throw tmp28;
                } else {
                  c6 = tmp;
                }
              }
            }
          })();
        });
        function t1() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[0] = finish;
        cResult[1] = t1;
        let tmp11 = t1;
      } else {
        tmp11 = cResult[1];
      }
      jsx = tmp11;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[7]).intl;
        const stringResult = intl.string(tmp(tmp2[7]).t.uc00u5);
        cResult[2] = stringResult;
        let tmp13 = stringResult;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[7]).intl;
        const stringResult1 = intl2.string(tmp(tmp2[7]).t.HZPBOd);
        const intl3 = tmp(tmp2[7]).intl;
        const stringResult2 = intl3.string(tmp(tmp2[7]).t.tARzgo);
        cResult[3] = stringResult1;
        cResult[4] = stringResult2;
        let tmp16 = stringResult2;
        let tmp15 = stringResult1;
      } else {
        tmp15 = cResult[3];
        tmp16 = cResult[4];
      }
      let tmp19 = tmp5;
      if (!tmp5) {
        tmp19 = tmp10;
      }
      if (cResult[5] === tmp8) {
        if (cResult[6] === tmp11) {
          if (cResult[7] === tmp19) {
            let tmp20 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[7]).intl;
            const stringResult3 = intl4.string(tmp(tmp2[7]).t.geKm7t);
            cResult[9] = stringResult3;
          }
          let tmp25 = tmp5;
          if (!tmp5) {
            tmp25 = tmp10;
          }
          if (cResult[10] === first) {
            if (cResult[11] === tmp11) {
              let tmp26 = cResult[12];
            }
            if (!tmp5) {
              tmp5 = tmp10;
            }
            if (!tmp5) {
              tmp5 = first.length !== tmp(tmp2[4]).TOTP_CODE_LENGTH;
            }
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp25) {
                if (cResult[15] === tmp26) {
                  let tmp27 = cResult[16];
                }
                if (cResult[17] === finish) {
                  if (cResult[18] === mfaChallenge) {
                    let tmp31 = cResult[19];
                  }
                  if (cResult[20] === tmp27) {
                    if (cResult[21] === tmp31) {
                      if (cResult[22] === tmp20) {
                        let tmp32 = cResult[23];
                      }
                      return tmp32;
                    }
                  }
                  let obj2 = { headerText: tmp13, input: tmp20, submit: null, screenProps: null, mfaMethod: "totp" };
                  class A {
                    constructor() {
                      tmp = closure_6(closure_2);
                      return;
                    }
                  }
                  obj2.screenProps = tmp31;
                  const tmp35 = jsx(require("MfaOptionScreen"), {
                    headerText: tmp13,
                    input: tmp20,
                    submit: null,
                    screenProps: null,
                    mfaMethod: "totp",
                  });
                  cResult[20] = tmp27;
                  cResult[21] = tmp31;
                  cResult[22] = tmp20;
                  cResult[23] = tmp35;
                  tmp32 = tmp35;
                }
                let obj3 = { mfaChallenge, finish };
                cResult[17] = finish;
                class A {
                  constructor() {
                    tmp = closure_6(closure_2);
                    return;
                  }
                }
                cResult[18] = mfaChallenge;
                cResult[19] = obj3;
                tmp31 = obj3;
              }
            }
            let obj4 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
            class A {
              constructor() {
                tmp = closure_6(closure_2);
                return;
              }
            }
            obj4.loading = tmp25;
            obj4.onPress = tmp26;
            obj4.disabled = tmp5;
            const tmp30 = jsx(require("button"), {
              variant: "primary",
              text: null,
              loading: null,
              onPress: null,
              disabled: null,
            });
            cResult[13] = tmp5;
            cResult[14] = tmp25;
            cResult[15] = tmp26;
            cResult[16] = tmp30;
            tmp27 = tmp30;
          }
          class A {
            constructor() {
              tmp = closure_6(closure_2);
              return;
            }
          }
          cResult[10] = first;
          cResult[11] = tmp11;
          cResult[12] = A;
          tmp26 = A;
        }
      }
      let obj5 = {
        label: tmp15,
        placeholder: tmp16,
        isValidClipboardCode,
        maxLength: null,
        onChangeCode: null,
        error: null,
        isDisabled: null,
        textContentType: "oneTimeCode",
        autoComplete: "one-time-code",
        keyboardType: "number-pad",
      };
      const tmp9 = _slicedToArray(noop.useState(false), 2);
      obj5.maxLength = require("MFA").TOTP_CODE_LENGTH;
      obj5.onChangeCode = tmp11;
      obj5.error = tmp8;
      obj5.isDisabled = tmp19;
      const tmp22 = jsx(require("ClipboardCopyInput"), {
        label: tmp15,
        placeholder: tmp16,
        isValidClipboardCode,
        maxLength: null,
        onChangeCode: null,
        error: null,
        isDisabled: null,
        textContentType: "oneTimeCode",
        autoComplete: "one-time-code",
        keyboardType: "number-pad",
      });
      cResult[5] = tmp8;
      cResult[6] = tmp11;
      cResult[7] = tmp19;
      cResult[8] = tmp22;
      tmp20 = tmp22;
      const tmp21 = require("ClipboardCopyInput");
    }
  : function TotpScreen(finish) {
      finish = finish.finish;
      importDefault = undefined;
      first = undefined;
      asyncGeneratorStep = undefined;
      _slicedToArray = undefined;
      noop = undefined;
      [tmp2, c1] = noop.useState(false);
      [first, asyncGeneratorStep] = noop.useState("");
      const tmp = _slicedToArray(noop.useState(false), 2);
      [tmp5, c4] = noop.useState(undefined);
      const tmp4 = _slicedToArray(noop.useState(undefined), 2);
      [tmp7, c5] = noop.useState(false);
      _require = asyncGeneratorStep(async (data) => {
        c6 = 0;
        c7 = 0;
        c5 = 0;
        return (async (arg0) => {
          if (c7 === 2) {
            c7 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c7 = 2;
              let tmp7 = c6;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_2 = tmp7;
                  tmp3(data);
                  tmp7 = isValidClipboardCode(data);
                  if (tmp7) {
                    tmp28(undefined);
                    message(true);
                    v0 = 1;
                    const obj4 = { mfaType: "totp", data };
                    c6 = 2;
                    c7 = 1;
                    const obj5 = { value: data(obj4), done: false };
                    return obj5;
                  }
                }
              } else {
                if (1 === tmp7) {
                  v0 = 0;
                  closure_130_0 = tmp28;
                  message = undefined;
                  if (closure_130_0 != null) {
                    const body = closure_130_0.body;
                    if (body != null) {
                      message = body.message;
                    }
                  }
                  if (message == null) {
                    message = closure_130_0.message;
                  }
                  tmp28(message);
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v0 = 0;
                  c7 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  v0(true);
                  v0 = 0;
                }
                tmp7 = message(false);
              }
              c7 = 3;
            } catch (tmp28) {
              if (tmp4 === v0) {
                c7 = tmp2;
                throw tmp28;
              } else {
                c6 = tmp;
              }
            }
          }
        })();
      });
      const items = [finish];
      const onChangeCode = noop.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, items);
      let obj = { headerText: null, input: null, submit: null, screenProps: null, mfaMethod: "totp" };
      const tmp10 = importDefault;
      const tmp6 = _slicedToArray(noop.useState(false), 2);
      const intl = require("util").intl;
      obj.headerText = intl.string(require("util").t.uc00u5);
      let obj2 = {
        label: null,
        placeholder: null,
        isValidClipboardCode: null,
        maxLength: null,
        onChangeCode: null,
        error: null,
        isDisabled: null,
        textContentType: "oneTimeCode",
        autoComplete: "one-time-code",
        keyboardType: "number-pad",
      };
      const tmp12 = require("MfaOptionScreen");
      const intl2 = require("util").intl;
      obj2.label = intl2.string(require("util").t.HZPBOd);
      const intl3 = require("util").intl;
      obj2.placeholder = intl3.string(require("util").t.tARzgo);
      obj2.isValidClipboardCode = isValidClipboardCode;
      obj2.maxLength = require("MFA").TOTP_CODE_LENGTH;
      obj2.onChangeCode = onChangeCode;
      obj2.error = tmp5;
      let tmp15 = tmp2;
      if (!tmp2) {
        tmp15 = tmp7;
      }
      obj2.isDisabled = tmp15;
      obj.input = onChangeCode(require("ClipboardCopyInput"), obj2);
      let obj3 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
      const tmp14 = require("ClipboardCopyInput");
      const intl4 = tmp13(tmp11[7]).intl;
      obj3.text = intl4.string(require("util").t.geKm7t);
      let tmp17 = tmp2;
      if (!tmp2) {
        tmp17 = tmp7;
      }
      obj3.loading = tmp17;
      obj3.onPress = function onPress() {
        callback(first);
      };
      if (!tmp2) {
        tmp2 = tmp7;
      }
      if (!tmp2) {
        tmp2 = first.length !== tmp13(tmp11[4]).TOTP_CODE_LENGTH;
      }
      obj3.disabled = tmp2;
      obj.submit = onChangeCode(tmp10(first[9]), obj3);
      obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
      return onChangeCode(tmp12, obj);
    };
