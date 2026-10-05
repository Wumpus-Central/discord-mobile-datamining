// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import TwoFASetupModal from "TwoFASetupModal.tsx";
import _mod14578 from "../../../../../../_runtime/metro/14578__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  flex: { flex: 1 },
  image: { width: 190, height: 70 },
  success: { marginTop: 33 },
  successBody: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 4,
    color: nativeDefault.colors.TEXT_STRONG,
  },
  divider: null,
  buttonWrapper: null,
  ctaDescription: null,
  errorText: null,
};
let size = { height: 2, width: 48, margin: 32, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj2.divider = size;
obj2.buttonWrapper = { alignSelf: "stretch", margin: 16, marginTop: 0 };
let obj3 = {
  fontSize: 14,
  textAlign: "center",
  marginHorizontal: 20,
  marginTop: 4,
  color: nativeDefault.colors.TEXT_STRONG,
};
obj2.ctaDescription = {
  fontSize: 14,
  textAlign: "center",
  marginTop: 4,
  marginHorizontal: 16,
  color: nativeDefault.colors.TEXT_STRONG,
};
let obj4 = {
  fontSize: 14,
  textAlign: "center",
  marginTop: 4,
  marginHorizontal: 16,
  color: nativeDefault.colors.TEXT_STRONG,
};
obj2.errorText = {
  fontSize: 14,
  textAlign: "center",
  marginHorizontal: 16,
  marginTop: 8,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = {
  fontSize: 14,
  textAlign: "center",
  marginHorizontal: 16,
  marginTop: 8,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(40);
      const tmp4 = closure_10();
      [tmp6, require] = noop.useState(false);
      const tmp5 = _slicedToArray(noop.useState(false), 2);
      [tmp8, importDefault] = noop.useState("");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          setError("");
          setRegistering = asyncGeneratorStep(async (arg0) => {
            ({ ticket, credential } = closure_0);
            const intl = closure_0(1126).intl;
            await closure_0(6086).finishRegisterWebAuthnCredential(
              intl.string(closure_0(1126).t["8H5RmH"]),
              ticket,
              credential,
            );
            if (1 === tmp7) {
              c4 = 0;
              tmp3(tmp17.body.message);
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              setError(14566).close();
              c4 = 0;
              setError(14566);
            }
            return value;
          });
          setError(dependencyMap[12]).registerPasskey({
            setRegistering,
            setError,
            onRegisterSuccess() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            },
          });
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.flex) {
        const obj2 = { style: tmp4.flex };
        const tmp13 = closure_8(closure_6, obj2);
        cResult[1] = tmp4.flex;
        cResult[2] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp4.image) {
        const obj3 = { source: _mod14578, style: tmp4.image };
        const tmp17 = closure_8(closure_7, obj3);
        cResult[3] = tmp4.image;
        cResult[4] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = util.intl;
        const stringResult = intl.string(util.t.Awk3Gw);
        cResult[5] = stringResult;
        let tmp18 = stringResult;
      } else {
        tmp18 = cResult[5];
      }
      if (cResult[6] !== tmp4.success) {
        const obj4 = {
          style: tmp4.success,
          variant: "text-lg/semibold",
          color: "mobile-text-heading-primary",
          children: tmp18,
        };
        const tmp22 = closure_8(Text_Text.Text, obj4);
        cResult[6] = tmp4.success;
        cResult[7] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t["0d1bXM"]);
        cResult[8] = stringResult1;
        let tmp23 = stringResult1;
      } else {
        tmp23 = cResult[8];
      }
      if (cResult[9] !== tmp4.successBody) {
        const obj5 = { style: tmp4.successBody, children: tmp23 };
        const tmp27 = closure_8(native.LegacyText, obj5);
        cResult[9] = tmp4.successBody;
        cResult[10] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[10];
      }
      if (cResult[11] !== tmp4.divider) {
        const obj6 = { style: tmp4.divider };
        const tmp31 = closure_8(closure_6, obj6);
        cResult[11] = tmp4.divider;
        cResult[12] = tmp31;
        let tmp28 = tmp31;
      } else {
        tmp28 = cResult[12];
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t.okgGTu);
        cResult[13] = stringResult2;
        let tmp32 = stringResult2;
      } else {
        tmp32 = cResult[13];
      }
      if (cResult[14] !== tmp4.ctaDescription) {
        const obj7 = { style: tmp4.ctaDescription, children: tmp32 };
        const tmp36 = closure_8(native.LegacyText, obj7);
        cResult[14] = tmp4.ctaDescription;
        cResult[15] = tmp36;
        let tmp34 = tmp36;
      } else {
        tmp34 = cResult[15];
      }
      if (cResult[16] !== tmp6) {
        const intl4 = util.intl;
        const string = intl4.string;
        let wePEBF = util.t;
        if (tmp6) {
          wePEBF = wePEBF.wePEBF;
          let stringResult3 = string(wePEBF);
        } else {
          stringResult3 = string(wePEBF.NIFmCJ);
        }
        cResult[16] = tmp6;
        cResult[17] = stringResult3;
      } else {
        if (cResult[18] === tmp6) {
          if (cResult[19] === tmp37) {
            let tmp40 = cResult[20];
          }
          if (cResult[21] === tmp8) {
            if (cResult[22] === tmp4.errorText) {
              let tmp43 = cResult[23];
            }
            if (cResult[24] === tmp4.buttonWrapper) {
              if (cResult[25] === tmp40) {
                if (cResult[26] === tmp43) {
                  let tmp46 = cResult[27];
                }
                if (cResult[28] !== tmp4.flex) {
                  const obj8 = { style: tmp4.flex };
                  const tmp53 = closure_8(closure_6, obj8);
                  cResult[28] = tmp4.flex;
                  cResult[29] = tmp53;
                  let tmp50 = tmp53;
                } else {
                  tmp50 = cResult[29];
                }
                if (cResult[30] === tmp4.container) {
                  if (cResult[31] === tmp28) {
                    if (cResult[32] === tmp34) {
                      if (cResult[33] === tmp46) {
                        if (cResult[34] === tmp50) {
                          if (cResult[35] === tmp10) {
                            if (cResult[36] === tmp14) {
                              if (cResult[37] === tmp20) {
                                if (cResult[38] === tmp25) {
                                  let tmp54 = cResult[39];
                                }
                                return tmp54;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj9 = { children: null };
                const obj10 = { style: tmp4.container, children: null };
                const items = [tmp10, tmp14, tmp20, tmp25, tmp28, tmp34, tmp46, tmp50];
                obj10.children = items;
                obj9.children = closure_9(closure_6, obj10);
                const tmp58 = closure_8(TwoFASetupModal.TwoFASetupModalScreen, obj9);
                cResult[30] = tmp4.container;
                cResult[31] = tmp28;
                cResult[32] = tmp34;
                cResult[33] = tmp46;
                cResult[34] = tmp50;
                cResult[35] = tmp10;
                cResult[36] = tmp14;
                cResult[37] = tmp20;
                cResult[38] = tmp25;
                cResult[39] = tmp58;
                tmp54 = tmp58;
              }
            }
            const obj11 = { style: tmp4.buttonWrapper, children: null };
            const items1 = [tmp40, tmp43];
            obj11.children = items1;
            const tmp49 = closure_9(closure_6, obj11);
            cResult[24] = tmp4.buttonWrapper;
            cResult[25] = tmp40;
            cResult[26] = tmp43;
            cResult[27] = tmp49;
            tmp46 = tmp49;
          }
          let tmp44 = "" !== tmp8;
          if (tmp44) {
            const obj12 = { style: tmp4.errorText, children: tmp8 };
            tmp44 = closure_8(native.LegacyText, obj12);
          }
          cResult[21] = tmp8;
          cResult[22] = tmp4.errorText;
          cResult[23] = tmp44;
          tmp43 = tmp44;
        }
        const obj13 = { text: cResult[17], onPress: first, disabled: tmp6, loading: tmp6, grow: true };
        const tmp42 = closure_8(components_Button_Button.Button, obj13);
        cResult[18] = tmp6;
        cResult[19] = cResult[17];
        cResult[20] = tmp42;
        tmp40 = tmp42;
      }
      const tmp7 = _slicedToArray(noop.useState(""), 2);
    }
  : () => {
      const tmp = closure_10();
      [tmp3, require] = noop.useState(false);
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      [tmp5, importDefault] = noop.useState("");
      const callback = noop.useCallback(() => {
        setRegistering = async function _onRegisterSuccess2(arg0) {
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp7 === 3) {
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
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_2 = tmp3;
                  closure_129_0 = undefined;
                  closure_129_1 = undefined;
                  ({ ticket: closure_129_0, credential: closure_129_1 } = closure_0);
                  c5 = 1;
                  c6 = 1;
                  return { value: "Set", done: true };
                }
              } else if (1 === tmp8) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  c4 = 1;
                  const intl = setRegistering(1126).intl;
                  c5 = 3;
                  c6 = 1;
                  const obj5 = {
                    value: setRegistering(6086).finishRegisterWebAuthnCredential(
                      intl.string(setRegistering(1126).t["8H5RmH"]),
                      closure_129_0,
                      closure_129_1,
                    ),
                    done: false,
                  };
                  return obj5;
                }
              } else {
                if (2 === tmp8) {
                  c4 = 0;
                  tmp5(tmp19.body.message);
                  c6 = 3;
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  setError(14566).close();
                  c4 = 0;
                  const obj = setError(14566);
                }
                c4 = 0;
                c6 = 3;
                const obj6 = { value, done: true };
                return obj6;
              }
            } catch (tmp19) {
              if (tmp4 === c4) {
                c6 = tmp2;
                throw tmp19;
              } else {
                c5 = tmp;
              }
            }
          }
        };
        setError("");
        setError(dependencyMap[12]).registerPasskey({
          setRegistering,
          setError,
          onRegisterSuccess(arg0) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          },
        });
      }, []);
      let obj = { style: tmp.container, children: null };
      const items = [closure_8(closure_6, { style: tmp.flex }), , , , , , ,];
      let obj2 = { style: tmp.flex };
      const tmp4 = _slicedToArray(noop.useState(""), 2);
      items[1] = closure_8(closure_7, { source: _mod14578, style: tmp.image });
      let obj4 = {
        style: tmp.success,
        variant: "text-lg/semibold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      let intl = util.intl;
      obj4.children = intl.string(util.t.Awk3Gw);
      items[2] = closure_8(Text_Text.Text, obj4);
      let obj5 = { style: tmp.successBody, children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t["0d1bXM"]);
      items[3] = closure_8(native.LegacyText, obj5);
      items[4] = closure_8(closure_6, { style: tmp.divider });
      const obj7 = { style: tmp.ctaDescription, children: null };
      const intl3 = util.intl;
      obj7.children = intl3.string(util.t.okgGTu);
      items[5] = closure_8(native.LegacyText, obj7);
      const obj8 = { style: tmp.buttonWrapper, children: null };
      const intl4 = util.intl;
      const string = intl4.string;
      const t = util.t;
      if (tmp3) {
        let stringResult = string(t.wePEBF);
      } else {
        stringResult = string(t.NIFmCJ);
      }
      const items1 = [
        closure_8(components_Button_Button.Button, {
          text: stringResult,
          onPress: callback,
          disabled: tmp3,
          loading: tmp3,
          grow: true,
        }),
      ];
      let tmp7Result = "" !== tmp5;
      if (tmp7Result) {
        const obj9 = { style: tmp.errorText, children: tmp5 };
        tmp7Result = closure_8(native.LegacyText, obj9);
      }
      const obj10 = { children: null };
      items1[1] = tmp7Result;
      obj8.children = items1;
      items[6] = closure_9(closure_6, obj8);
      items[7] = closure_8(closure_6, { style: tmp.flex });
      obj.children = items;
      obj10.children = closure_9(closure_6, obj);
      return closure_8(TwoFASetupModal.TwoFASetupModalScreen, obj10);
    };
