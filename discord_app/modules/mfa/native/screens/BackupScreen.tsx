// discord_app/modules/mfa/native/screens/BackupScreen.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import MFA from "../../../../../discord_common/js/shared/MFA.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function removeDashes(str) {
  return str.replace(/-/g, "");
}
function isValidClipboardCode(arg0) {
  let tmp3 = arg0.length >= MFA.BACKUP_CODE_MIN_LENGTH;
  if (tmp3) {
    tmp3 = arg0.length <= MFA.BACKUP_CODE_MAX_LENGTH;
  }
  return tmp3;
}
function getFormattedExplainer(first1) {
  if (first1 > 0) {
    const obj = { variant: "text-md/normal", children: null };
    const intl = util.intl;
    const items = [intl.string(util.t.RRtlLg)];
    const intl2 = util.intl;
    const obj2 = { countdown: first1 };
    items[1] = intl2.format(util.t.tsWkAE, obj2);
    obj.children = items;
    let obj3 = obj;
  } else {
    obj3 = { variant: "text-md/normal", children: null };
    const intl3 = util.intl;
    const items1 = [intl3.string(util.t.RRtlLg)];
    const intl4 = util.intl;
    items1[1] = intl4.string(util.t.v3a6Pd);
    obj3.children = items1;
  }
  return timestampProducer(Text_Text.Text, obj3);
}
const jsxProd = fn(21);
({ jsxs: metroRequire, jsx: closure_7, Fragment: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BackupScreen(arg0) {
      const cResult = require("c").c(34);
      ({ mfaChallenge, finish } = arg0);
      _require = finish;
      const obj = require("c");
      const tmp5 = require("useWideAuthView")();
      [tmp7, importDefault] = noop.useState(false);
      [first, asyncGeneratorStep] = noop.useState("");
      const tmp6 = _slicedToArray(noop.useState(false), 2);
      [tmp10, _slicedToArray] = noop.useState(undefined);
      const tmp9 = _slicedToArray(noop.useState(undefined), 2);
      [tmp12, noop] = noop.useState(false);
      [first1, closure_7] = noop.useState(10);
      if (cResult[0] !== first1) {
        const fn = function f() {
          if (first1 > 0) {
            const _setTimeout = setTimeout;
            const timeout = setTimeout(() => {
              closure_1_7((arg0) => arg0 - 1);
            }, 1000);
            return () => clearTimeout(closure_0);
          }
        };
        const items = [first1];
        cResult[0] = first1;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp16 = items;
        let tmp15 = fn;
      } else {
        tmp15 = cResult[1];
        tmp16 = cResult[2];
      }
      const effect = noop.useEffect(tmp15, tmp16);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        function onChangeCode(arg0) {
          closure_3(arg0);
          _slicedToArray(undefined);
        }
        cResult[3] = onChangeCode;
        let tmp18 = onChangeCode;
      } else {
        tmp18 = cResult[3];
      }
      if (cResult[4] !== finish) {
        _require = asyncGeneratorStep(async (arg0) => {
          closure_3 = tmp3;
          tmp31(undefined);
          message(true);
          let v0 = 1;
          await closure_0({ mfaType: "backup", data: removeDashes(closure_0) });
          if (1 === tmp7) {
            v0 = 0;
            closure_130_0 = tmp31;
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
            tmp31(message);
            message(false);
            c7 = 3;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            v0(true);
            v0 = 0;
          }
          v0 = 0;
          return value;
        });
        function t4() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[4] = finish;
        cResult[5] = t4;
        let tmp19 = t4;
      } else {
        tmp19 = cResult[5];
      }
      closure_8 = tmp19;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[6]).intl;
        const stringResult = intl.string(tmp(tmp2[6]).t.B2T1HD);
        const intl2 = tmp(tmp2[6]).intl;
        const stringResult1 = intl2.string(tmp(tmp2[6]).t.c5J7O0);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        let tmp22 = stringResult1;
        let tmp21 = stringResult;
      } else {
        tmp21 = cResult[6];
        tmp22 = cResult[7];
      }
      if (cResult[8] !== first1) {
        const tmp27 = getFormattedExplainer(first1);
        cResult[8] = first1;
        cResult[9] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(tmp2[6]).intl;
        const stringResult2 = intl3.string(tmp(tmp2[6]).t["C/ZAw/"]);
        const intl4 = tmp(tmp2[6]).intl;
        const stringResult3 = intl4.string(tmp(tmp2[6]).t.fZSi1D);
        cResult[10] = stringResult2;
        cResult[11] = stringResult3;
        let tmp29 = stringResult3;
        let tmp28 = stringResult2;
      } else {
        tmp28 = cResult[10];
        tmp29 = cResult[11];
      }
      let tmp32 = tmp7;
      if (!tmp7) {
        tmp32 = tmp12;
      }
      if (cResult[12] === tmp10) {
        if (cResult[13] === tmp32) {
          if (cResult[14] === tmp33) {
            let tmp34 = cResult[15];
          }
          if (cResult[16] === tmp34) {
            if (cResult[17] === tmp25) {
              let tmp37 = cResult[18];
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = tmp(tmp2[6]).intl;
              const stringResult4 = intl5.string(tmp(tmp2[6]).t.geKm7t);
              cResult[19] = stringResult4;
              let tmp41 = stringResult4;
            } else {
              tmp41 = cResult[19];
            }
            let tmp43 = tmp7;
            if (!tmp7) {
              tmp43 = tmp12;
            }
            if (cResult[20] === first) {
              if (cResult[21] === tmp19) {
                let tmp44 = cResult[22];
              }
              if (!tmp7) {
                tmp7 = tmp12;
              }
              if (!tmp7) {
                tmp7 = first.length < tmp(tmp2[4]).BACKUP_CODE_MIN_LENGTH;
              }
              if (!tmp7) {
                tmp7 = first1 > 0;
              }
              if (cResult[23] === tmp43) {
                if (cResult[24] === tmp44) {
                  if (cResult[25] === tmp7) {
                    let tmp45 = cResult[26];
                  }
                  if (cResult[27] === finish) {
                    if (cResult[28] === mfaChallenge) {
                      let tmp48 = cResult[29];
                    }
                    if (cResult[30] === tmp37) {
                      if (cResult[31] === tmp45) {
                        if (cResult[32] === tmp48) {
                          let tmp49 = cResult[33];
                        }
                        return tmp49;
                      }
                    }
                    const obj3 = {
                      headerText: tmp21,
                      subtitle: tmp22,
                      input: tmp37,
                      submit: tmp45,
                      screenProps: tmp48,
                      mfaMethod: "backup",
                    };
                    const tmp51 = closure_7(require("MfaOptionScreen"), obj3);
                    cResult[30] = tmp37;
                    cResult[31] = tmp45;
                    cResult[32] = tmp48;
                    cResult[33] = tmp51;
                    tmp49 = tmp51;
                  }
                  const obj4 = { mfaChallenge, finish };
                  cResult[27] = finish;
                  cResult[28] = mfaChallenge;
                  cResult[29] = obj4;
                  tmp48 = obj4;
                }
              }
              const obj5 = { variant: "primary", text: tmp41, loading: tmp43, onPress: tmp44, disabled: tmp7 };
              const tmp47 = closure_7(require("button"), obj5);
              cResult[23] = tmp43;
              cResult[24] = tmp44;
              cResult[25] = tmp7;
              cResult[26] = tmp47;
              tmp45 = tmp47;
            }
            function ee() {
              return closure_8(first);
            }
            cResult[20] = first;
            cResult[21] = tmp19;
            cResult[22] = ee;
            tmp44 = ee;
          }
          const obj6 = { children: null };
          const items1 = [tmp25, tmp34];
          obj6.children = items1;
          const tmp40 = first1(closure_8, obj6);
          cResult[16] = tmp34;
          cResult[17] = tmp25;
          cResult[18] = tmp40;
          tmp37 = tmp40;
        }
      }
      const obj7 = {
        label: tmp28,
        placeholder: tmp29,
        isValidClipboardCode,
        maxLength: null,
        onChangeCode: null,
        error: null,
        isDisabled: null,
        autoFocus: null,
      };
      const tmp11 = _slicedToArray(noop.useState(false), 2);
      obj7.maxLength = require("MFA").BACKUP_CODE_MAX_LENGTH;
      obj7.onChangeCode = tmp18;
      obj7.error = tmp10;
      obj7.isDisabled = tmp32;
      obj7.autoFocus = !tmp5;
      const tmp36 = closure_7(require("ClipboardCopyInput"), obj7);
      cResult[12] = tmp10;
      cResult[13] = tmp32;
      cResult[14] = !tmp5;
      cResult[15] = tmp36;
      tmp34 = tmp36;
      const tmp4Result = require("ClipboardCopyInput");
    }
  : function BackupScreen(finish) {
      finish = finish.finish;
      importDefault = undefined;
      first = undefined;
      asyncGeneratorStep = undefined;
      _slicedToArray = undefined;
      noop = undefined;
      first1 = undefined;
      closure_7 = undefined;
      const tmp = importDefault;
      const tmp3 = require("useWideAuthView")();
      [tmp5, c1] = noop.useState(false);
      [first, asyncGeneratorStep] = noop.useState("");
      const tmp4 = _slicedToArray(noop.useState(false), 2);
      [tmp8, c4] = noop.useState(undefined);
      const tmp7 = _slicedToArray(noop.useState(undefined), 2);
      [tmp10, c5] = noop.useState(false);
      [first1, closure_7] = noop.useState(10);
      const items = [first1];
      const effect = noop.useEffect(() => {
        if (first1 > 0) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            closure_1_7((arg0) => arg0 - 1);
          }, 1000);
          return () => clearTimeout(closure_0);
        }
      }, items);
      _require = asyncGeneratorStep(async (arg0) => {
        closure_3 = tmp3;
        tmp31(undefined);
        message(true);
        let v0 = 1;
        await closure_0({ mfaType: "backup", data: removeDashes(closure_0) });
        if (1 === tmp7) {
          v0 = 0;
          closure_130_0 = tmp31;
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
          tmp31(message);
          message(false);
          c7 = 3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          v0(true);
          v0 = 0;
        }
        v0 = 0;
        return value;
      });
      const items1 = [finish];
      closure_8 = noop.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, items1);
      const obj = {
        headerText: null,
        subtitle: null,
        input: null,
        submit: null,
        screenProps: null,
        mfaMethod: "backup",
      };
      const tmp9 = _slicedToArray(noop.useState(false), 2);
      const intl = require("util").intl;
      obj.headerText = intl.string(require("util").t.B2T1HD);
      const intl2 = require("util").intl;
      obj.subtitle = intl2.string(require("util").t.c5J7O0);
      const items2 = [getFormattedExplainer(first1)];
      const obj2 = {
        label: null,
        placeholder: null,
        isValidClipboardCode: null,
        maxLength: null,
        onChangeCode: null,
        error: null,
        isDisabled: null,
        autoFocus: null,
      };
      const tmp15 = require("MfaOptionScreen");
      const tmp17 = first1;
      const tmp18 = closure_8;
      const intl3 = require("util").intl;
      obj2.label = intl3.string(require("util").t["C/ZAw/"]);
      const intl4 = require("util").intl;
      obj2.placeholder = intl4.string(require("util").t.fZSi1D);
      obj2.isValidClipboardCode = isValidClipboardCode;
      obj2.maxLength = require("MFA").BACKUP_CODE_MAX_LENGTH;
      obj2.onChangeCode = function onChangeCode(arg0) {
        closure_3(arg0);
        _undefined(undefined);
      };
      obj2.error = tmp8;
      let tmp20 = tmp5;
      if (!tmp5) {
        tmp20 = tmp10;
      }
      const obj3 = { children: null };
      obj2.isDisabled = tmp20;
      obj2.autoFocus = !tmp3;
      items2[1] = closure_7(require("ClipboardCopyInput"), obj2);
      obj3.children = items2;
      obj.input = tmp17(tmp18, obj3);
      const obj4 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
      const tmp19 = require("ClipboardCopyInput");
      const intl5 = tmp16(tmp2[6]).intl;
      obj4.text = intl5.string(require("util").t.geKm7t);
      let tmp22 = tmp5;
      if (!tmp5) {
        tmp22 = tmp10;
      }
      obj4.loading = tmp22;
      obj4.onPress = function onPress() {
        return closure_8(first);
      };
      if (!tmp5) {
        tmp5 = tmp10;
      }
      if (!tmp5) {
        tmp5 = first.length < tmp16(tmp2[4]).BACKUP_CODE_MIN_LENGTH;
      }
      if (!tmp5) {
        tmp5 = first1 > 0;
      }
      obj4.disabled = tmp5;
      obj.submit = closure_7(tmp(first[11]), obj4);
      obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
      return closure_7(tmp15, obj);
    };
