// === Module 15104: ChangeSpendingLimitModal ===

// Module 15104 (ChangeSpendingLimitModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2565 from "module_2565" /* 2565 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import WarningIcon from "WarningIcon" /* 5004 */;
import Text_Text from "Text/Text" /* 5087 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderMonthlySpendLine(formatPriceResult, isOverspending, renewalDate, warningRow) {
  if (null == formatPriceResult) {
    return null;
  } else if (isOverspending) {
    const obj2 = { style: warningRow.warningRow, children: null };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    const items = [timestampProducer(WarningIcon.WarningIcon, obj3), ];
    const obj4 = { variant: "text-sm/normal", style: warningRow.warningText, children: null };
    const intl2 = util.intl;
    const obj5 = { amount: formatPriceResult, date: renewalDate };
    obj4.children = intl2.formatToPlainString(_modDef2565.Tk6x4X, obj5);
    items[1] = timestampProducer(Text_Text.Text, obj4);
    obj2.children = items;
    let tmp6 = React5(hasOwnProperty, obj2);
  } else {
    const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl = util.intl;
    const obj6 = { amount: formatPriceResult };
    obj.children = intl.formatToPlainString(_modDef2565.pfAlRY, obj6);
    tmp6 = timestampProducer(Text_Text.Text, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { warningOverlay: null, warningRow: null, warningText: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
obj3.borderWidth = 1;
obj3.borderColor = nativeDefault.colors.ICON_FEEDBACK_WARNING;
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING;
obj2.warningOverlay = obj3;
obj2.warningRow = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj2.warningText = { flex: 1, color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeSpendingLimitScreen(teenId) {
  const cResult = require("c").c(62);
  const tmp4 = closure_8();
  const obj = require("c");
  const changeSpendingLimitFormState = require("ChangeSpendingLimitFormState").useChangeSpendingLimitFormState(teenId.teenId);
  ({ amountInput, handleAmountChange, currency, currencySymbol, exponent, isClearingCap, isOverspending, canSave, isSubmitting, renewalDate, monthlySpend, save } = changeSpendingLimitFormState);
  _require = save;
  if (cResult[0] !== save) {
    _require = asyncGeneratorStep(async () => {
      await tmp3();
      if (1 === tmp7) {
        c2 = 0;
        const intl = tmp3(1126).intl;
        tmp3(4767).presentFailedToast(intl.string(_modDef2565.Wu8BK2));
        c3 = 3;
        tmp3(4767);
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const obj7 = { key: "SPENDING_CONTROLS_CHANGED", content: null, IconComponent: null, iconColor: "status-positive" };
        const intl2 = tmp3(1126).intl;
        obj7.content = intl2.string(_modDef2565["2WKfG1"]);
        obj7.IconComponent = tmp3(4993).CircleCheckIcon;
        ToastActionCreatorsDefault.open(obj7);
        ToastActionCreatorsDefault;
        ModalActionCreatorsDefault.pop();
        c2 = 0;
        ModalActionCreatorsDefault;
      }
      return value;
    });
    function handleSave() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[0] = save;
    cResult[1] = handleSave;
    let tmp6 = handleSave;
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
                    if (cResult[36] === cResult[11]) {
                      if (cResult[37] === tmp12) {
                        if (cResult[38] === tmp13) {
                          if (cResult[39] === tmp14) {
                            if (cResult[40] === tmp15) {
                              let tmp58 = cResult[41];
                            }
                            if (cResult[42] === tmp9) {
                              if (cResult[43] === tmp16) {
                                if (cResult[44] === tmp17) {
                                  if (cResult[45] === tmp58) {
                                    let tmp61 = cResult[46];
                                  }
                                  if (cResult[47] === tmp10) {
                                    if (cResult[48] === tmp61) {
                                      let tmp64 = cResult[49];
                                    }
                                    if (cResult[50] === canSave) {
                                      if (cResult[51] === tmp6) {
                                        if (cResult[52] === isClearingCap) {
                                          if (cResult[53] === isSubmitting) {
                                            const _Symbol = Symbol;
                                            if (cResult[55] === Symbol.for("react.memo_cache_sentinel")) {
                                              const obj3 = { variant: "tertiary", text: null, onPress: null };
                                              const intl7 = tmp(1126).intl;
                                              obj3.text = intl7.string(tmp(1126).t["ETE/oC"]);
                                              obj3.onPress = ModalActionCreatorsDefault.pop;
                                              const tmp77 = closure_6(tmp(5376).Button, obj3);
                                              cResult[55] = tmp77;
                                              let tmp74 = tmp77;
                                            } else {
                                              tmp74 = cResult[55];
                                            }
                                            if (cResult[56] !== cResult[54]) {
                                              const obj4 = { children: null };
                                              const obj5 = { children: null };
                                              const items = [tmp67, tmp74];
                                              obj5.children = items;
                                              obj4.children = closure_7(tmp(5965).ButtonGroup, obj5);
                                              const tmp81 = closure_6(tmp(11493).ModalFooter, obj4);
                                              cResult[56] = tmp67;
                                              cResult[57] = tmp81;
                                              let tmp78 = tmp81;
                                            } else {
                                              tmp78 = cResult[57];
                                            }
                                            if (cResult[58] === tmp11) {
                                              if (cResult[59] === tmp64) {
                                                if (cResult[60] === tmp78) {
                                                  let tmp82 = cResult[61];
                                                }
                                                return tmp82;
                                              }
                                            }
                                            const obj6 = { children: null };
                                            const items1 = [tmp64, tmp78];
                                            obj6.children = items1;
                                            const tmp84 = closure_7(tmp11, obj6);
                                            cResult[58] = tmp11;
                                            cResult[59] = tmp64;
                                            cResult[60] = tmp78;
                                            cResult[61] = tmp84;
                                            tmp82 = tmp84;
                                          }
                                        }
                                      }
                                    }
                                    if (isClearingCap) {
                                      let obj7 = { variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
                                      const intl6 = tmp(1126).intl;
                                      obj7.text = intl6.string(_modDef2565.JZDGJ8);
                                      obj7.onPress = tmp6;
                                      obj7.disabled = isSubmitting;
                                      obj7.loading = isSubmitting;
                                      let obj8 = obj7;
                                    } else {
                                      obj8 = { text: null, onPress: null, disabled: null, loading: null };
                                      const intl5 = tmp(1126).intl;
                                      obj8.text = intl5.string(tmp(1126).t["R3BPH+"]);
                                      obj8.onPress = tmp6;
                                      let tmp69 = !canSave;
                                      if (canSave) {
                                        tmp69 = isSubmitting;
                                      }
                                      obj8.disabled = tmp69;
                                      obj8.loading = isSubmitting;
                                    }
                                    const tmp68Result = closure_6(tmp(5376).Button, obj8);
                                    cResult[50] = canSave;
                                    cResult[51] = tmp6;
                                    cResult[52] = isClearingCap;
                                    cResult[53] = isSubmitting;
                                    cResult[54] = tmp68Result;
                                  }
                                  const obj9 = { children: tmp61 };
                                  const tmp66 = closure_6(tmp10, obj9);
                                  cResult[47] = tmp10;
                                  cResult[48] = tmp61;
                                  cResult[49] = tmp66;
                                  tmp64 = tmp66;
                                }
                              }
                            }
                            const obj10 = { spacing: tmp16, children: null };
                            const items2 = [tmp17, tmp58];
                            obj10.children = items2;
                            const tmp63 = closure_7(tmp9, obj10);
                            cResult[42] = tmp9;
                            cResult[43] = tmp16;
                            cResult[44] = tmp17;
                            cResult[45] = tmp58;
                            cResult[46] = tmp63;
                            tmp61 = tmp63;
                          }
                        }
                      }
                    }
                    const obj11 = { spacing: cResult[15], children: null };
                    const items3 = [cResult[16], cResult[17], cResult[18]];
                    obj11.children = items3;
                    const tmp60 = closure_7(cResult[11], obj11);
                    cResult[36] = cResult[11];
                    cResult[37] = cResult[15];
                    cResult[38] = cResult[16];
                    cResult[39] = cResult[17];
                    cResult[40] = cResult[18];
                    cResult[41] = tmp60;
                    tmp58 = tmp60;
                  }
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
      formatPriceResult = tmp(6933).formatPrice(monthlySpend, currency);
      const tmpResult = tmp(6933);
    }
  }
  const ModalScreen = tmp(7511).ModalScreen;
  const ModalContent = tmp(7512).ModalContent;
  const Stack = tmp(5374).Stack;
  const PX_16 = nativeDefault.space.PX_16;
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const obj12 = { variant: "text-sm/normal", children: null };
    let intl = tmp(1126).intl;
    obj12.children = intl.string(_modDef2565.IFguF2);
    const tmp23 = closure_6(tmp(5087).Text, obj12);
    cResult[21] = tmp23;
    let tmp21 = tmp23;
  } else {
    tmp21 = cResult[21];
  }
  const Stack2 = tmp(5374).Stack;
  const PX_8 = nativeDefault.space.PX_8;
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    const obj13 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    let intl2 = tmp(1126).intl;
    obj13.children = intl2.string(_modDef2565["1fHSu2"]);
    const tmp26 = closure_6(tmp(5087).Text, obj13);
    cResult[22] = tmp26;
    let tmp24 = tmp26;
  } else {
    tmp24 = cResult[22];
  }
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult = intl3.string(_modDef2565["1fHSu2"]);
    cResult[23] = stringResult;
    let tmp27 = stringResult;
  } else {
    tmp27 = cResult[23];
  }
  let tmp29;
  if (tmp19) {
    tmp29 = currencySymbol;
  }
  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult1 = intl4.string(_modDef2565.DjSv82);
    cResult[24] = stringResult1;
    let tmp30 = stringResult1;
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
        if (cResult[28] === tmp29) {
          let tmp32 = cResult[29];
        }
        if (cResult[30] === isOverspending) {
          if (cResult[31] === tmp4) {
            let tmp34 = cResult[32];
          }
          if (cResult[33] === tmp32) {
            if (cResult[34] === tmp34) {
              let tmp38 = cResult[35];
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
          }
          const obj14 = { children: null };
          const items4 = [tmp32, tmp34];
          obj14.children = items4;
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
  const tmp33 = closure_6(require("TextInput").TextInput, { accessibilityLabel: tmp27, value: amountInput, onChange: handleAmountChange, leadingText: tmp29, placeholder: tmp30, keyboardType: str, clearable: true });
  cResult[25] = amountInput;
  cResult[26] = handleAmountChange;
  cResult[27] = str;
  cResult[28] = tmp29;
  cResult[29] = tmp33;
  tmp32 = tmp33;
  const obj2 = require("ChangeSpendingLimitFormState");
  tmp19 = amountInput.length > 0;
}) : (function ChangeSpendingLimitScreen(teenId) {
  _require = undefined;
  importDefault = async function _handleSave2(dependencyMap) {
    await closure_2_0();
    if (1 === tmp7) {
      dependencyMap = 0;
      const intl = tmp3(1126).intl;
      tmp3(4767).presentFailedToast(intl.string(v2(2565).Wu8BK2));
      c3 = 3;
      tmp3(4767);
    } else if (dependencyMap === 1) {
      c3 = 3;
      throw value;
    } else if (dependencyMap !== 2) {
      const obj7 = { key: "SPENDING_CONTROLS_CHANGED", content: null, IconComponent: null, iconColor: "status-positive" };
      const intl2 = tmp3(1126).intl;
      obj7.content = intl2.string(v2(2565)["2WKfG1"]);
      obj7.IconComponent = tmp3(4993).CircleCheckIcon;
      v2(4768).open(obj7);
      v2(4768);
      v2(5941).pop();
      dependencyMap = 0;
      v2(5941);
    }
    return value;
  };
  const tmp = closure_8();
  const changeSpendingLimitFormState = require("ChangeSpendingLimitFormState").useChangeSpendingLimitFormState(teenId.teenId);
  ({ amountInput, isOverspending, canSave, isSubmitting, renewalDate, monthlySpend, save: c0 } = changeSpendingLimitFormState);
  let formatPriceResult = null;
  ({ handleAmountChange, currencySymbol, exponent, isClearingCap } = changeSpendingLimitFormState);
  if (null != monthlySpend) {
    formatPriceResult = null;
    if (monthlySpend > 0) {
      formatPriceResult = tmp2(6933).formatPrice(monthlySpend, tmp5);
      const tmp2Result = tmp2(6933);
    }
  }
  const obj2 = { spacing: nativeDefault.space.PX_16, children: null };
  const obj3 = { variant: "text-sm/normal", children: null };
  let intl = tmp2(1126).intl;
  obj3.children = intl.string(_modDef2565.IFguF2);
  const items = [closure_6(require("Text/Text").Text, obj3), ];
  const obj4 = { spacing: nativeDefault.space.PX_8, children: null };
  const obj5 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl2 = tmp2(1126).intl;
  obj5.children = intl2.string(_modDef2565["1fHSu2"]);
  const items1 = [closure_6(require("Text/Text").Text, obj5), , ];
  const obj6 = { accessibilityLabel: null, value: null, onChange: null, leadingText: null, placeholder: null, keyboardType: null, clearable: true };
  const intl3 = tmp2(1126).intl;
  obj6.accessibilityLabel = intl3.string(_modDef2565["1fHSu2"]);
  obj6.value = amountInput;
  obj6.onChange = handleAmountChange;
  let tmp12;
  if (tmp7) {
    tmp12 = currencySymbol;
  }
  obj6.leadingText = tmp12;
  const intl4 = tmp2(1126).intl;
  obj6.placeholder = intl4.string(_modDef2565.DjSv82);
  let str = "number-pad";
  if (exponent > 0) {
    str = "decimal-pad";
  }
  obj6.keyboardType = str;
  const items2 = [closure_6(require("TextInput").TextInput, obj6), ];
  let tmp9Result = null;
  if (isOverspending) {
    let obj7 = { style: tmp.warningOverlay, pointerEvents: "none" };
    tmp9Result = closure_6(closure_5, obj7);
  }
  function handleSave() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const obj8 = { children: null };
  items2[1] = tmp9Result;
  items1[1] = closure_7(closure_5, { children: items2 });
  items1[2] = renderMonthlySpendLine(formatPriceResult, isOverspending, renewalDate, tmp);
  obj4.children = items1;
  items[1] = closure_7(require("Stack/Stack").Stack, obj4);
  obj2.children = items;
  obj8.children = closure_7(require("Stack/Stack").Stack, obj2);
  const items3 = [closure_6(require("ModalContent").ModalContent, obj8), ];
  if (isClearingCap) {
    const obj9 = { variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
    const intl6 = tmp2(1126).intl;
    obj9.text = intl6.string(tmp10(2565).JZDGJ8);
    obj9.onPress = handleSave;
    obj9.disabled = isSubmitting;
    obj9.loading = isSubmitting;
    let obj10 = obj9;
  } else {
    obj10 = { text: null, onPress: null, disabled: null, loading: null };
    const intl5 = tmp2(1126).intl;
    obj10.text = intl5.string(tmp2(1126).t["R3BPH+"]);
    obj10.onPress = handleSave;
    let tmp14 = !canSave;
    if (canSave) {
      tmp14 = isSubmitting;
    }
    obj10.disabled = tmp14;
    obj10.loading = isSubmitting;
  }
  const obj11 = { children: null };
  const obj12 = { children: null };
  const obj13 = { children: null };
  const items4 = [closure_6(require("components/Button/Button").Button, obj10), ];
  const obj14 = { variant: "tertiary", text: null, onPress: null };
  const intl7 = tmp2(1126).intl;
  obj14.text = intl7.string(require("util").t["ETE/oC"]);
  obj14.onPress = ModalActionCreatorsDefault.pop;
  items4[1] = closure_6(require("components/Button/Button").Button, obj14);
  obj13.children = items4;
  obj12.children = closure_7(require("ButtonGroup").ButtonGroup, obj13);
  items3[1] = closure_6(require("ModalFooter").ModalFooter, obj12);
  obj11.children = items3;
  return closure_7(require("ModalScreen").ModalScreen, obj11);
});
ReactCompilerGating = fn(558);
let obj5 = { flex: 1, color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ChangeSpendingLimitModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeSpendingLimitModal(teenId) {
  const cResult = teenId(576).c(5);
  teenId = teenId.teenId;
  if (cResult[0] !== teenId) {
    const obj2 = { CHANGE_SPENDING_LIMIT: null };
    const obj3 = {
      headerShown: true,
      headerLeft: tmp(6205).getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
          const obj = { variant: "text-md/semibold", children: null };
          const intl = teenId(1126).intl;
          obj.children = intl.string(closure_1_1(2565).xMRO6A);
          return closure_1_6(teenId(5087).Text, obj);
        },
      render() {
          return closure_2_6(closure_2_10, { teenId });
        }
    };
    obj2.CHANGE_SPENDING_LIMIT = obj3;
    cResult[0] = teenId;
    cResult[1] = obj2;
    let tmp4 = obj2;
    const tmpResult = tmp(6205);
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["13/7kX"]);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj4 = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: tmp4, headerBackTitle: tmp6 };
    const tmp10 = closure_6(tmp(10568).Modal, obj4);
    cResult[3] = tmp4;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (function ChangeSpendingLimitModal(teenId) {
  teenId = teenId.teenId;
  const items = [teenId];
  const memo = noop.useMemo(() => {
    let obj = { CHANGE_SPENDING_LIMIT: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { variant: "text-md/semibold", children: null };
        const intl = teenId(1126).intl;
        obj.children = intl.string(closure_1_1(2565).xMRO6A);
        return closure_1_6(teenId(5087).Text, obj);
      },
      render() {
        return closure_2_6(closure_2_10, { teenId });
      }
    };
    obj.CHANGE_SPENDING_LIMIT = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: memo, headerBackTitle: null };
  let intl = teenId(1126).intl;
  obj.headerBackTitle = intl.string(teenId(1126).t["13/7kX"]);
  return closure_6(teenId(10568).Modal, obj);
});