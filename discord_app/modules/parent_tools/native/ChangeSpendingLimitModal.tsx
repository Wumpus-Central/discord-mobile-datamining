// discord_app/modules/parent_tools/native/ChangeSpendingLimitModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl8 from "../../../intl/index.native.tsx";
import _modDef2493 from "../FamilyCenter.messages.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import WarningIcon2 from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c3, teenId;

let StyleSheet;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function renderMonthlySpendLine(formatPriceResult, isOverspending, renewalDate, warningRow) {
  let intl;
  let intl2;
  let items;
  let obj5;
  let obj6;
  let tmp = null;
  if (null != formatPriceResult) {
    let tmp7;
    const tmp2 = isOverspending;
    if (tmp2) {
      const obj2 = { style: warningRow.warningRow, children: items };
      const obj3 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
      const WarningIcon = WarningIcon2.WarningIcon;
      items = [metroRequire(WarningIcon, obj3)];
      const obj4 = {
        variant: "text-sm/normal",
        style: warningRow.warningText,
        children: intl2.formatToPlainString(_modDef2493.Tk6x4X, obj5),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl8.intl;
      obj5 = { amount: formatPriceResult, date: renewalDate };
      items[1] = metroRequire(Text2, obj4);
      tmp7 = metroImportDefault(hasOwnProperty, obj2);
    } else {
      const obj = {
        variant: "text-sm/normal",
        color: "text-muted",
        children: intl.formatToPlainString(_modDef2493.pfAlRY, obj6),
      };
      const Text = Text_Text.Text;
      intl = intl8.intl;
      obj6 = { amount: formatPriceResult };
      tmp7 = metroRequire(Text, obj);
    }
    tmp = tmp7;
  }
  return tmp;
}
({ View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { warningOverlay: obj2, warningRow: obj3, warningText: obj4 };
obj2 = {
  borderRadius: nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG,
  borderWidth: 1,
  borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj4 = { flex: 1, color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (teenId) => {
      let amountInput;
      let canSave;
      let currency;
      let currencySymbol;
      let exponent;
      let handleAmountChange;
      let intl;
      let intl2;
      let intl5;
      let intl6;
      let intl7;
      let isClearingCap;
      let isOverspending;
      let isSubmitting;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let monthlySpend;
      let obj5;
      let renewalDate;
      let save;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp21;
      let tmp24;
      let tmp27;
      let tmp30;
      let tmp59;
      let tmp6;
      let tmp8;
      let tmp9;
      let obj = save(576);
      const cResult = obj.c(62);
      teenId = teenId.teenId;
      const tmp4 = closure_8();
      let obj2 = save(14716);
      const changeSpendingLimitFormState = obj2.useChangeSpendingLimitFormState(teenId);
      ({
        amountInput,
        handleAmountChange,
        currency,
        currencySymbol,
        exponent,
        isClearingCap,
        isOverspending,
        canSave,
        isSubmitting,
        renewalDate,
        monthlySpend,
        save,
      } = changeSpendingLimitFormState);
      if (cResult[0] !== save) {
        let closure_0 = _asyncToGenerator(async () => {
          let intl2;
          if (c3 === 2) {
            c3 = 3;
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
            let c2;
            try {
              c3 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  c2 = 1;
                  c1 = 2;
                  c3 = 1;
                  const obj4 = { value: tmp(), done: false };
                  return obj4;
                }
              } else {
                if (1 === tmp4) {
                  c2 = 0;
                  const presentFailedToast = tmp(dependencyMap[16]).presentFailedToast;
                  const tmp8 = tmp(dependencyMap[16]);
                  const intl = tmp(dependencyMap[8]).intl;
                  presentFailedToast(intl.string(_modDef2493.Wu8BK2));
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  const obj5 = {
                    key: "SPENDING_CONTROLS_CHANGED",
                    content: intl2.string(_modDef2493["2WKfG1"]),
                    IconComponent: tmp(dependencyMap[14]).CircleCheckIcon,
                    iconColor: "status-positive",
                  };
                  const open = ToastActionCreatorsDefault.open;
                  intl2 = tmp(dependencyMap[8]).intl;
                  open(obj5);
                  const arr = ModalActionCreatorsDefault;
                  arr.pop();
                  c2 = 0;
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              if (0 === c2) {
                c3 = 3;
                throw tmp15;
              } else {
                c1 = 1;
              }
            }
          }
        });
        function handleSave() {
          return closure_0(...arguments);
        }
        cResult[0] = save;
        cResult[1] = handleSave;
        tmp6 = handleSave;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === amountInput) {
        if (cResult[3] === currency) {
          if (cResult[4] === currencySymbol) {
            if (cResult[5] === exponent) {
              if (cResult[6] === handleAmountChange) {
                if (cResult[7] === isOverspending) {
                  if (cResult[8] === monthlySpend) {
                    if (cResult[9] === renewalDate) {
                      if (cResult[10] === tmp4) {
                        tmp8 = cResult[11];
                        tmp9 = cResult[12];
                        tmp10 = cResult[13];
                        tmp11 = cResult[14];
                        tmp12 = cResult[15];
                        tmp13 = cResult[16];
                        tmp14 = cResult[17];
                        tmp15 = cResult[18];
                        tmp16 = cResult[19];
                        tmp17 = cResult[20];
                      }
                      if (cResult[36] === tmp8) {
                        if (cResult[37] === tmp12) {
                          if (cResult[38] === tmp13) {
                            if (cResult[39] === tmp14) {
                              let tmp48;
                              if (cResult[40] === tmp15) {
                                tmp48 = cResult[41];
                              }
                              if (cResult[42] === tmp9) {
                                if (cResult[43] === tmp16) {
                                  if (cResult[44] === tmp17) {
                                    let tmp51;
                                    if (cResult[45] === tmp48) {
                                      tmp51 = cResult[46];
                                    }
                                    if (cResult[47] === tmp10) {
                                      let tmp54;
                                      let obj8;
                                      if (cResult[48] === tmp51) {
                                        tmp54 = cResult[49];
                                      }
                                      if (cResult[50] === canSave) {
                                        if (cResult[51] === tmp6) {
                                          if (cResult[52] === isClearingCap) {
                                            let tmp57;
                                            let tmp63;
                                            let tmp67;
                                            if (cResult[53] === isSubmitting) {
                                              tmp57 = cResult[54];
                                            }
                                            const _Symbol = Symbol;
                                            if (cResult[55] === Symbol.for("react.memo_cache_sentinel")) {
                                              let obj3 = {
                                                variant: "tertiary",
                                                text: intl7.string(save(1126).t["ETE/oC"]),
                                                onPress: ModalActionCreatorsDefault.pop,
                                              };
                                              const Button2 = save(5594).Button;
                                              intl7 = save(1126).intl;
                                              const tmp66 = closure_6(Button2, obj3);
                                              cResult[55] = tmp66;
                                              tmp63 = tmp66;
                                            } else {
                                              tmp63 = cResult[55];
                                            }
                                            if (cResult[56] !== tmp57) {
                                              let obj4 = { children: closure_7(save(5592).ButtonGroup, obj5) };
                                              const ModalFooter = save(11536).ModalFooter;
                                              obj5 = { children: items };
                                              items = [tmp57, tmp63];
                                              const tmp70 = closure_6(ModalFooter, obj4);
                                              cResult[56] = tmp57;
                                              cResult[57] = tmp70;
                                              tmp67 = tmp70;
                                            } else {
                                              tmp67 = cResult[57];
                                            }
                                            if (cResult[58] === tmp11) {
                                              if (cResult[59] === tmp54) {
                                                let tmp71;
                                                if (cResult[60] === tmp67) {
                                                  tmp71 = cResult[61];
                                                }
                                                return tmp71;
                                              }
                                            }
                                            const obj6 = { children: items1 };
                                            items1 = [tmp54, tmp67];
                                            const tmp73 = closure_7(tmp11, obj6);
                                            cResult[58] = tmp11;
                                            cResult[59] = tmp54;
                                            cResult[60] = tmp67;
                                            cResult[61] = tmp73;
                                            tmp71 = tmp73;
                                          }
                                        }
                                      }
                                      const Button = save(5594).Button;
                                      if (isClearingCap) {
                                        const obj7 = {
                                          variant: "destructive",
                                          text: intl6.string(_modDef2493.JZDGJ8),
                                          onPress: tmp6,
                                          disabled: isSubmitting,
                                          loading: isSubmitting,
                                        };
                                        intl6 = save(1126).intl;
                                        obj8 = obj7;
                                      } else {
                                        obj8 = {
                                          text: intl5.string(save(1126).t["R3BPH+"]),
                                          onPress: tmp6,
                                          disabled: tmp59,
                                          loading: isSubmitting,
                                        };
                                        intl5 = save(1126).intl;
                                        tmp59 = !canSave;
                                        if (canSave) {
                                          tmp59 = isSubmitting;
                                        }
                                      }
                                      const tmp58Result = closure_6(Button, obj8);
                                      cResult[50] = canSave;
                                      cResult[51] = tmp6;
                                      cResult[52] = isClearingCap;
                                      cResult[53] = isSubmitting;
                                      cResult[54] = tmp58Result;
                                      tmp57 = tmp58Result;
                                    }
                                    const obj9 = { children: tmp51 };
                                    const tmp56 = closure_6(tmp10, obj9);
                                    cResult[47] = tmp10;
                                    cResult[48] = tmp51;
                                    cResult[49] = tmp56;
                                    tmp54 = tmp56;
                                  }
                                }
                              }
                              const obj10 = { spacing: tmp16, children: items2 };
                              items2 = [tmp17, tmp48];
                              const tmp53 = closure_7(tmp9, obj10);
                              cResult[42] = tmp9;
                              cResult[43] = tmp16;
                              cResult[44] = tmp17;
                              cResult[45] = tmp48;
                              cResult[46] = tmp53;
                              tmp51 = tmp53;
                            }
                          }
                        }
                      }
                      const obj11 = { spacing: tmp12, children: items3 };
                      items3 = [tmp13, tmp14, tmp15];
                      const tmp50 = closure_7(tmp8, obj11);
                      cResult[36] = tmp8;
                      cResult[37] = tmp12;
                      cResult[38] = tmp13;
                      cResult[39] = tmp14;
                      cResult[40] = tmp15;
                      cResult[41] = tmp50;
                      tmp48 = tmp50;
                    }
                  }
                }
              }
            }
          }
        }
      }
      let formatPriceResult = null;
      if (null != monthlySpend) {
        formatPriceResult = null;
        if (monthlySpend > 0) {
          const tmpResult = save(6736);
          formatPriceResult = tmpResult.formatPrice(monthlySpend, currency);
        }
      }
      const tmp19 = amountInput.length > 0;
      const ModalScreen = save(8095).ModalScreen;
      const ModalContent = save(8096).ModalContent;
      const Stack = save(5593).Stack;
      const PX_16 = nativeDefault.space.PX_16;
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const obj12 = { variant: "text-sm/normal", children: intl.string(_modDef2493.IFguF2) };
        const Text = save(4886).Text;
        intl = save(1126).intl;
        let tmp23 = closure_6(Text, obj12);
        cResult[21] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[21];
      }
      const Stack2 = save(5593).Stack;
      const PX_8 = nativeDefault.space.PX_8;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        const obj13 = {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: intl2.string(_modDef2493["1fHSu2"]),
        };
        const Text2 = save(4886).Text;
        intl2 = save(1126).intl;
        const tmp26 = closure_6(Text2, obj13);
        cResult[22] = tmp26;
        tmp24 = tmp26;
      } else {
        tmp24 = cResult[22];
      }
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = save(1126).intl;
        const stringResult = intl3.string(_modDef2493["1fHSu2"]);
        cResult[23] = stringResult;
        tmp27 = stringResult;
      } else {
        tmp27 = cResult[23];
      }
      let tmp29;
      if (tmp19) {
        tmp29 = currencySymbol;
      }
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = save(1126).intl;
        const stringResult1 = intl4.string(_modDef2493.DjSv82);
        cResult[24] = stringResult1;
        tmp30 = stringResult1;
      } else {
        tmp30 = cResult[24];
      }
      let str = "number-pad";
      if (exponent > 0) {
        str = "decimal-pad";
      }
      if (cResult[25] === amountInput) {
        if (cResult[26] === handleAmountChange) {
          if (cResult[27] === str) {
            let tmp32;
            if (cResult[28] === tmp29) {
              tmp32 = cResult[29];
            }
            if (cResult[30] === isOverspending) {
              let tmp34;
              if (cResult[31] === tmp4) {
                tmp34 = cResult[32];
              }
              if (cResult[33] === tmp32) {
                let tmp38;
                if (cResult[34] === tmp34) {
                  tmp38 = cResult[35];
                }
                const tmp47 = renderMonthlySpendLine(formatPriceResult, isOverspending, renewalDate, tmp4);
                cResult[2] = amountInput;
                cResult[3] = currency;
                cResult[4] = currencySymbol;
                cResult[5] = exponent;
                cResult[6] = handleAmountChange;
                cResult[7] = isOverspending;
                cResult[8] = monthlySpend;
                cResult[9] = renewalDate;
                cResult[10] = tmp4;
                cResult[11] = Stack2;
                cResult[12] = Stack;
                cResult[13] = ModalContent;
                cResult[14] = ModalScreen;
                cResult[15] = PX_8;
                cResult[16] = tmp24;
                cResult[17] = tmp38;
                cResult[18] = tmp47;
                cResult[19] = PX_16;
                cResult[20] = tmp21;
                tmp14 = tmp38;
                tmp17 = tmp21;
                tmp16 = PX_16;
                tmp15 = tmp47;
                tmp13 = tmp24;
                tmp12 = PX_8;
                tmp11 = ModalScreen;
                tmp10 = ModalContent;
                tmp9 = Stack;
                tmp8 = Stack2;
              }
              const obj14 = { children: items4 };
              items4 = [tmp32, tmp34];
              const tmp41 = closure_7(closure_5, obj14);
              cResult[33] = tmp32;
              cResult[34] = tmp34;
              cResult[35] = tmp41;
              tmp38 = tmp41;
            }
            let tmp35 = null;
            if (isOverspending) {
              const obj15 = { style: tmp4.warningOverlay, pointerEvents: "none" };
              tmp35 = closure_6(closure_5, obj15);
            }
            cResult[30] = isOverspending;
            cResult[31] = tmp4;
            cResult[32] = tmp35;
            tmp34 = tmp35;
          }
        }
      }
      const tmp33 = closure_6(save(6098).TextInput, {
        accessibilityLabel: tmp27,
        value: amountInput,
        onChange: handleAmountChange,
        leadingText: tmp29,
        placeholder: tmp30,
        keyboardType: str,
        clearable: true,
      });
      cResult[25] = amountInput;
      cResult[26] = handleAmountChange;
      cResult[27] = str;
      cResult[28] = tmp29;
      cResult[29] = tmp33;
      tmp32 = tmp33;
    }
  : (teenId) => {
      let _undefined;
      let amountInput;
      let c0;
      let canSave;
      let currencySymbol;
      let exponent;
      let handleAmountChange;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let isClearingCap;
      let isOverspending;
      let isSubmitting;
      let items;
      let items1;
      let items4;
      let monthlySpend;
      let obj10;
      let obj13;
      let renewalDate;
      let str;
      let tmp12;
      let tmp14;
      _require = undefined;
      let obj = function _handleSave2() {
        obj = _asyncToGenerator(async () => {
          let closure_0;
          let intl2;
          let v1;
          if (c3 === 2) {
            c3 = 3;
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
            let c2;
            try {
              c3 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  c2 = 1;
                  v1 = 2;
                  c3 = 1;
                  const obj4 = { value: _undefined(), done: false };
                  return obj4;
                }
              } else {
                if (1 === tmp4) {
                  c2 = 0;
                  const presentFailedToast = tmp(c2[16]).presentFailedToast;
                  const tmp8 = tmp(c2[16]);
                  const intl = tmp(c2[8]).intl;
                  presentFailedToast(intl.string(v1(c2[9]).Wu8BK2));
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c3 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  const obj5 = {
                    key: "SPENDING_CONTROLS_CHANGED",
                    content: intl2.string(v1(c2[9])["2WKfG1"]),
                    IconComponent: tmp(c2[14]).CircleCheckIcon,
                    iconColor: "status-positive",
                  };
                  const open = v1(c2[13]).open;
                  const tmp23 = v1(c2[13]);
                  intl2 = tmp(c2[8]).intl;
                  open(obj5);
                  const arr = v1(c2[15]);
                  arr.pop();
                  c2 = 0;
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              if (0 === c2) {
                c3 = 3;
                throw tmp15;
              } else {
                v1 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      };
      teenId = teenId.teenId;
      const tmp = closure_8();
      obj = require("ChangeSpendingLimitFormState");
      const changeSpendingLimitFormState = obj.useChangeSpendingLimitFormState(teenId);
      ({
        amountInput,
        isOverspending,
        canSave,
        isSubmitting,
        renewalDate,
        monthlySpend,
        save: c0,
      } = changeSpendingLimitFormState);
      let formatPriceResult = null;
      ({ handleAmountChange, currencySymbol, exponent, isClearingCap } = changeSpendingLimitFormState);
      if (null != monthlySpend) {
        formatPriceResult = null;
        if (monthlySpend > 0) {
          const tmp2Result = require("PriceUtils");
          formatPriceResult = tmp2Result.formatPrice(monthlySpend, tmp5);
        }
      }
      const tmp7 = amountInput.length > 0;
      const ModalScreen = tmp2(8095).ModalScreen;
      const ModalContent = tmp2(8096).ModalContent;
      let obj2 = { spacing: obj(587).space.PX_16, children: items };
      const Stack = tmp2(5593).Stack;
      let obj3 = { variant: "text-sm/normal", children: intl.string(obj(2493).IFguF2) };
      const Text = tmp2(4886).Text;
      intl = tmp2(1126).intl;
      items = [closure_6(Text, obj3)];
      let obj4 = { spacing: obj(587).space.PX_8, children: items1 };
      const Stack2 = tmp2(5593).Stack;
      let obj5 = { variant: "text-sm/semibold", color: "text-subtle", children: intl2.string(obj(2493)["1fHSu2"]) };
      const Text2 = tmp2(4886).Text;
      intl2 = tmp2(1126).intl;
      items1 = [closure_6(Text2, obj5), ,];
      const obj6 = {
        accessibilityLabel: intl3.string(obj(2493)["1fHSu2"]),
        value: amountInput,
        onChange: handleAmountChange,
        leadingText: tmp12,
        placeholder: intl4.string(obj(2493).DjSv82),
        keyboardType: str,
        clearable: true,
      };
      const TextInput = tmp2(6098).TextInput;
      intl3 = tmp2(1126).intl;
      tmp12 = undefined;
      if (tmp7) {
        tmp12 = currencySymbol;
      }
      intl4 = tmp2(1126).intl;
      str = "number-pad";
      if (exponent > 0) {
        str = "decimal-pad";
      }
      const items2 = [closure_6(TextInput, obj6)];
      let tmp9Result = null;
      if (isOverspending) {
        const obj7 = { style: tmp.warningOverlay, pointerEvents: "none" };
        tmp9Result = closure_6(closure_5, obj7);
      }
      function handleSave() {
        return obj(...arguments);
      }
      items2[1] = tmp9Result;
      const obj8 = { children: closure_7(Stack, obj2) };
      items1[1] = closure_7(closure_5, { children: items2 });
      items1[2] = renderMonthlySpendLine(formatPriceResult, isOverspending, renewalDate, tmp);
      items[1] = closure_7(Stack2, obj4);
      const items3 = [closure_6(ModalContent, obj8)];
      const ModalFooter = tmp2(11536).ModalFooter;
      const ButtonGroup = tmp2(5592).ButtonGroup;
      const Button = tmp2(5594).Button;
      if (isClearingCap) {
        const obj9 = {
          variant: "destructive",
          text: intl6.string(obj(2493).JZDGJ8),
          onPress: handleSave,
          disabled: isSubmitting,
          loading: isSubmitting,
        };
        intl6 = tmp2(1126).intl;
        obj10 = obj9;
      } else {
        obj10 = {
          text: intl5.string(require("intl").t["R3BPH+"]),
          onPress: handleSave,
          disabled: tmp14,
          loading: isSubmitting,
        };
        intl5 = tmp2(1126).intl;
        tmp14 = !canSave;
        if (canSave) {
          tmp14 = isSubmitting;
        }
      }
      const obj11 = { children: items3 };
      const obj12 = { children: closure_7(ButtonGroup, obj13) };
      obj13 = { children: items4 };
      items4 = [closure_6(Button, obj10)];
      const obj14 = { variant: "tertiary", text: intl7.string(require("intl").t["ETE/oC"]), onPress: obj(5093).pop };
      const Button2 = tmp2(5594).Button;
      intl7 = tmp2(1126).intl;
      items4[1] = closure_6(Button2, obj14);
      items3[1] = closure_6(ModalFooter, obj12);
      return closure_7(ModalScreen, obj11);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (teenId) => {
      let obj3;
      let tmp4;
      let tmp6;
      let tmp8;
      let tmpResult;
      const obj = teenId(576);
      const cResult = obj.c(5);
      teenId = teenId.teenId;
      if (cResult[0] !== teenId) {
        const obj2 = { CHANGE_SPENDING_LIMIT: obj3 };
        obj3 = {
          headerShown: true,
          headerLeft: tmpResult.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
          headerTitle() {
            let intl;
            const obj = { variant: "text-md/semibold", children: intl.string(closure_1_1(closure_1_2[9]).xMRO6A) };
            const Text = teenId(closure_1_2[7]).Text;
            intl = teenId(closure_1_2[8]).intl;
            return closure_1_6(Text, obj);
          },
          render() {
            const obj = { teenId };
            return closure_2_6(closure_2_10, obj);
          },
        };
        cResult[0] = teenId;
        cResult[1] = obj2;
        tmp4 = obj2;
        tmpResult = teenId(6010);
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(teenId(1126).t["13/7kX"]);
        cResult[2] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const obj4 = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: tmp4, headerBackTitle: tmp6 };
        const tmp10 = closure_6(teenId(10976).Modal, obj4);
        cResult[3] = tmp4;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : (teenId) => {
      let intl;
      teenId = teenId.teenId;
      const items = [teenId];
      const memo = react.useMemo(() => {
        let obj2;
        let obj3;
        let obj = { CHANGE_SPENDING_LIMIT: obj2 };
        obj2 = {
          headerShown: true,
          headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
          headerTitle() {
            let intl;
            const obj = { variant: "text-md/semibold", children: intl.string(closure_1_1(closure_1_2[9]).xMRO6A) };
            const Text = teenId(closure_1_2[7]).Text;
            intl = teenId(closure_1_2[8]).intl;
            return closure_1_6(Text, obj);
          },
          render() {
            const obj = { teenId };
            return closure_2_6(closure_2_10, obj);
          },
        };
        obj3 = NavigatorHeader;
        return obj;
      }, items);
      let obj = {
        initialRouteName: "CHANGE_SPENDING_LIMIT",
        screens: memo,
        headerBackTitle: intl.string(teenId(1126).t["13/7kX"]),
      };
      const Modal = teenId(10976).Modal;
      intl = teenId(1126).intl;
      return closure_6(Modal, obj);
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/ChangeSpendingLimitModal.tsx");

export default tmp6;
