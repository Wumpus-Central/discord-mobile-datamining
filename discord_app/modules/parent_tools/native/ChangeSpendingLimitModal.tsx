// === Module 15244: ChangeSpendingLimitModal ===

// Module 15244 (ChangeSpendingLimitModal)
import nativeDefault from "native" /* 576 */;
import _modDef2484 from "module_2484" /* 2484 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import NavigatorHeader from "NavigatorHeader" /* 5927 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChangeSpendingLimitScreen(teenId) {
  _require = undefined;
  importDefault = async function _handleSave(dependencyMap) {
    await closure_2_0();
    if (1 === tmp7) {
      dependencyMap = 0;
      const intl = tmp3(1115).intl;
      tmp3(4520).presentFailedToast(intl.string(v2(2484).Wu8BK2));
      c3 = 3;
      tmp3(4520);
    } else if (dependencyMap === 1) {
      c3 = 3;
      throw value;
    } else if (dependencyMap !== 2) {
      const obj7 = { key: "SPENDING_CONTROLS_CHANGED", content: null, IconComponent: null, iconColor: "status-positive" };
      const intl2 = tmp3(1115).intl;
      obj7.content = intl2.string(v2(2484)["2WKfG1"]);
      obj7.IconComponent = tmp3(4786).CircleCheckIcon;
      v2(4521).open(obj7);
      v2(4521);
      v2(5030).pop();
      dependencyMap = 0;
      v2(5030);
    }
    return value;
  };
  let formatToPlainStringResult = closure_8();
  const changeSpendingLimitFormState = require("ChangeSpendingLimitFormState").useChangeSpendingLimitFormState(teenId.teenId);
  ({ amountInput, isOverspending, canSave, isSubmitting, monthlySpend, save: c0 } = changeSpendingLimitFormState);
  let formatPriceResult = null;
  ({ handleAmountChange, currencySymbol, exponent, isClearingCap, renewalDate } = changeSpendingLimitFormState);
  if (null != monthlySpend) {
    formatPriceResult = null;
    if (monthlySpend > 0) {
      formatPriceResult = tmp2(7565).formatPrice(monthlySpend, tmp5);
      const tmp2Result = tmp2(7565);
    }
  }
  const obj2 = { spacing: nativeDefault.space.PX_16, children: null };
  const obj3 = { variant: "text-sm/normal", children: null };
  let intl = tmp2(1115).intl;
  obj3.children = intl.string(_modDef2484.IFguF2);
  const items = [closure_6(require("Text/Text").Text, obj3), ];
  const obj4 = { spacing: nativeDefault.space.PX_8, children: null };
  const obj5 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl2 = tmp2(1115).intl;
  obj5.children = intl2.string(_modDef2484["1fHSu2"]);
  const items1 = [closure_6(require("Text/Text").Text, obj5), , ];
  const obj6 = { accessibilityLabel: null, value: null, onChange: null, leadingText: null, placeholder: null, keyboardType: null, clearable: true };
  const intl3 = tmp2(1115).intl;
  obj6.accessibilityLabel = intl3.string(_modDef2484["1fHSu2"]);
  obj6.value = amountInput;
  obj6.onChange = handleAmountChange;
  let tmp12;
  if (tmp7) {
    tmp12 = currencySymbol;
  }
  obj6.leadingText = tmp12;
  const intl4 = tmp2(1115).intl;
  obj6.placeholder = intl4.string(_modDef2484.DjSv82);
  let str = "number-pad";
  if (exponent > 0) {
    str = "decimal-pad";
  }
  obj6.keyboardType = str;
  const items2 = [closure_6(require("TextInput").TextInput, obj6), ];
  let tmp9Result = null;
  if (isOverspending) {
    let obj7 = { style: formatToPlainStringResult.warningOverlay, pointerEvents: "none" };
    tmp9Result = closure_6(closure_5, obj7);
  }
  items2[1] = tmp9Result;
  items1[1] = closure_7(closure_5, { children: items2 });
  if (null == formatPriceResult) {
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
    items1[2] = null;
    obj4.children = items1;
    items[1] = closure_7(tmp2(5269).Stack, obj4);
    obj2.children = items;
    obj8.children = closure_7(tmp2(5269).Stack, obj2);
    const items3 = [closure_6(tmp2(8769).ModalContent, obj8), ];
    if (isClearingCap) {
      const obj9 = { variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
      const intl8 = tmp2(1115).intl;
      obj9.text = intl8.string(tmp10(2484).JZDGJ8);
      obj9.onPress = handleSave;
      obj9.disabled = isSubmitting;
      obj9.loading = isSubmitting;
      let obj10 = obj9;
    } else {
      obj10 = { text: null, onPress: null, disabled: null, loading: null };
      const intl7 = tmp2(1115).intl;
      obj10.text = intl7.string(tmp2(1115).t["R3BPH+"]);
      obj10.onPress = handleSave;
      let tmp16 = !canSave;
      if (canSave) {
        tmp16 = isSubmitting;
      }
      obj10.disabled = tmp16;
      obj10.loading = isSubmitting;
    }
    const obj11 = { children: null };
    const obj12 = { children: null };
    const obj13 = { children: null };
    const items4 = [closure_6(tmp2(5271).Button, obj10), ];
    const obj14 = { variant: "tertiary", text: null, onPress: null };
    const intl9 = tmp2(1115).intl;
    obj14.text = intl9.string(tmp2(1115).t["ETE/oC"]);
    obj14.onPress = tmp10(5030).pop;
    items4[1] = closure_6(tmp2(5271).Button, obj14);
    obj13.children = items4;
    obj12.children = closure_7(tmp2(5736).ButtonGroup, obj13);
    items3[1] = closure_6(tmp2(12262).ModalFooter, obj12);
    obj11.children = items3;
    return closure_7(tmp2(8768).ModalScreen, obj11);
  } else if (isOverspending) {
    const obj15 = { style: formatToPlainStringResult.warningRow, children: null };
    const obj16 = { size: "xs", color: tmp10(576).colors.ICON_FEEDBACK_WARNING };
    const items5 = [closure_6(tmp2(8942).WarningIcon, obj16), ];
    const obj17 = { variant: "text-sm/normal", style: formatToPlainStringResult.warningText, children: null };
    const intl6 = tmp2(1115).intl;
    const obj18 = { amount: formatPriceResult, date: renewalDate };
    formatToPlainStringResult = intl6.formatToPlainString(tmp10(2484).Tk6x4X, obj18);
    obj17.children = formatToPlainStringResult;
    items5[1] = closure_6(tmp2(4823).Text, obj17);
    obj15.children = items5;
    let tmp9Result1 = closure_7(closure_5, obj15);
  } else {
    const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl5 = tmp2(1115).intl;
    const obj20 = { amount: formatPriceResult };
    obj19.children = intl5.formatToPlainString(tmp10(2484).pfAlRY, obj20);
    tmp9Result1 = closure_6(tmp2(4823).Text, obj19);
  }
  const obj = require("ChangeSpendingLimitFormState");
  tmp7 = amountInput.length > 0;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ChangeSpendingLimitModal.tsx");

export default function ChangeSpendingLimitModal(teenId) {
  teenId = teenId.teenId;
  const items = [teenId];
  const memo = noop.useMemo(() => {
    let obj = { CHANGE_SPENDING_LIMIT: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { variant: "text-md/semibold", children: null };
        const intl = teenId(1115).intl;
        obj.children = intl.string(closure_1_1(2484).xMRO6A);
        return closure_1_6(teenId(4823).Text, obj);
      },
      render() {
        return closure_2_6(ChangeSpendingLimitScreen, { teenId });
      }
    };
    obj.CHANGE_SPENDING_LIMIT = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: memo, headerBackTitle: null };
  let intl = teenId(1115).intl;
  obj.headerBackTitle = intl.string(teenId(1115).t["13/7kX"]);
  return closure_6(teenId(11545).Modal, obj);
};