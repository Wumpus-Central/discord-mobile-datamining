// === Module 17129: ChangeSpendingLimitModal ===

// Module 17129 (ChangeSpendingLimitModal)
import nativeDefault from "native" /* 575 */;
import _modDef2664 from "module_2664" /* 2664 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import NavigatorHeader from "NavigatorHeader" /* 7064 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeChangeSpendingLimitModal() {
  ModalActionCreatorsDefault.popWithKey(closure_6);
}
function ChangeSpendingLimitScreen(teenId) {
  _require = undefined;
  importDefault = async function _handleSave(dependencyMap) {
    await closure_2_0();
    if (1 === tmp7) {
      dependencyMap = 0;
      const intl = tmp3(1113).intl;
      tmp3(5836).presentFailedToast(intl.string(v2(2664).Wu8BK2));
      c3 = 3;
      tmp3(5836);
    } else if (dependencyMap === 1) {
      c3 = 3;
      throw value;
    } else if (dependencyMap !== 2) {
      const obj7 = { text: null, variant: "success" };
      const intl2 = tmp3(1113).intl;
      obj7.text = intl2.string(v2(2664)["2WKfG1"]);
      v2(5837).open("SPENDING_CONTROLS_CHANGED", obj7);
      v2(5837);
      v2(6799).pop();
      dependencyMap = 0;
      v2(6799);
    }
    return value;
  };
  let formatToPlainStringResult = closure_9();
  const changeSpendingLimitFormState = require("ChangeSpendingLimitFormState").useChangeSpendingLimitFormState(teenId.teenId, closeChangeSpendingLimitModal);
  ({ amountInput, isOverspending, canSave, isSubmitting, monthlySpend, save: c0 } = changeSpendingLimitFormState);
  if (changeSpendingLimitFormState.isLoaded) {
    let formatPriceResult = null;
    if (null != monthlySpend) {
      formatPriceResult = null;
      if (monthlySpend > 0) {
        formatPriceResult = tmp2(7477).formatPrice(monthlySpend, tmp6);
        const tmp2Result = tmp2(7477);
      }
    }
    const obj2 = { spacing: nativeDefault.space.PX_16, children: null };
    const obj3 = { variant: "body-sm/normal", children: null };
    let intl2 = tmp2(1113).intl;
    obj3.children = intl2.string(_modDef2664.IFguF2);
    items = [closure_7(tmp2(5751).Text, obj3), ];
    const obj4 = { spacing: nativeDefault.space.PX_8, children: null };
    const obj5 = { variant: "body-sm/semibold", color: "text-subtle", children: null };
    const intl3 = tmp2(1113).intl;
    obj5.children = intl3.string(_modDef2664["1fHSu2"]);
    const items1 = [closure_7(tmp2(5751).Text, obj5), , ];
    const obj6 = { accessibilityLabel: null, value: null, onChange: null, leadingText: null, placeholder: null, keyboardType: null, clearable: true };
    const intl4 = tmp2(1113).intl;
    obj6.accessibilityLabel = intl4.string(_modDef2664["1fHSu2"]);
    obj6.value = amountInput;
    obj6.onChange = tmp5;
    let tmp22;
    if (tmp17) {
      tmp22 = tmp7;
    }
    obj6.leadingText = tmp22;
    const intl5 = tmp2(1113).intl;
    obj6.placeholder = intl5.string(_modDef2664.DjSv82);
    let str = "number-pad";
    if (tmp8 > 0) {
      str = "decimal-pad";
    }
    obj6.keyboardType = str;
    const items2 = [closure_7(tmp2(7148).TextInput, obj6), ];
    let tmp19Result = null;
    if (isOverspending) {
      let obj7 = { style: formatToPlainStringResult.warningOverlay, pointerEvents: "none" };
      tmp19Result = closure_7(closure_5, obj7);
    }
    const obj8 = { children: null };
    items2[1] = tmp19Result;
    obj8.children = items2;
    items1[1] = closure_8(closure_5, obj8);
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
      const obj9 = { children: null };
      items1[2] = null;
      obj4.children = items1;
      items[1] = closure_8(tmp2(6159).Stack, obj4);
      obj2.children = items;
      obj9.children = closure_8(tmp2(6159).Stack, obj2);
      const items3 = [closure_7(tmp2(8043).ModalContent, obj9), ];
      if (tmp9) {
        const obj10 = { variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
        const intl9 = tmp2(1113).intl;
        obj10.text = intl9.string(tmp20(2664).JZDGJ8);
        obj10.onPress = handleSave;
        obj10.disabled = isSubmitting;
        obj10.loading = isSubmitting;
        let obj11 = obj10;
      } else {
        obj11 = { text: null, onPress: null, disabled: null, loading: null };
        const intl8 = tmp2(1113).intl;
        obj11.text = intl8.string(tmp2(1113).t["R3BPH+"]);
        obj11.onPress = handleSave;
        let tmp27 = !canSave;
        if (canSave) {
          tmp27 = isSubmitting;
        }
        obj11.disabled = tmp27;
        obj11.loading = isSubmitting;
      }
      const obj12 = { children: null };
      const obj13 = { children: null };
      const obj14 = { children: null };
      const items4 = [closure_7(tmp2(5758).Button, obj11), ];
      const obj15 = { variant: "tertiary", text: null, onPress: null };
      const intl10 = tmp2(1113).intl;
      obj15.text = intl10.string(tmp2(1113).t["ETE/oC"]);
      obj15.onPress = tmp20(6799).pop;
      items4[1] = closure_7(tmp2(5758).Button, obj15);
      obj14.children = items4;
      obj13.children = closure_8(tmp2(6822).ButtonGroup, obj14);
      items3[1] = closure_7(tmp2(13452).ModalFooter, obj13);
      obj12.children = items3;
      return closure_8(tmp2(8041).ModalScreen, obj12);
    } else if (isOverspending) {
      const obj16 = { style: formatToPlainStringResult.warningRow, children: null };
      const obj17 = { size: "xs", color: tmp20(575).colors.ICON_FEEDBACK_WARNING };
      const items5 = [closure_7(tmp2(8096).WarningIcon, obj17), ];
      const obj18 = { variant: "body-sm/normal", style: formatToPlainStringResult.warningText, children: null };
      const intl7 = tmp2(1113).intl;
      const obj19 = { amount: formatPriceResult, date: tmp10 };
      formatToPlainStringResult = intl7.formatToPlainString(tmp20(2664).Tk6x4X, obj19);
      obj18.children = formatToPlainStringResult;
      items5[1] = closure_7(tmp2(5751).Text, obj18);
      obj16.children = items5;
      let tmp19Result1 = closure_8(closure_5, obj16);
    } else {
      const obj20 = { variant: "body-sm/normal", color: "text-muted", children: null };
      const intl6 = tmp2(1113).intl;
      const obj21 = { amount: formatPriceResult };
      obj20.children = intl6.formatToPlainString(tmp20(2664).pfAlRY, obj21);
      tmp19Result1 = closure_7(tmp2(5751).Text, obj20);
    }
    tmp17 = amountInput.length > 0;
  } else {
    const obj22 = { children: null };
    const obj23 = { children: null };
    const obj24 = { style: formatToPlainStringResult.loading, children: closure_7(tmp2(7015).ActivityIndicator, {}) };
    obj23.children = closure_7(closure_5, obj24);
    const items6 = [closure_7(tmp2(8043).ModalContent, obj23), ];
    const obj25 = { children: null };
    const obj26 = { variant: "tertiary", text: null, onPress: null };
    let intl = tmp2(1113).intl;
    obj26.text = intl.string(tmp2(1113).t["ETE/oC"]);
    obj26.onPress = ModalActionCreatorsDefault.pop;
    obj25.children = closure_7(tmp2(5758).Button, obj26);
    items6[1] = closure_7(tmp2(13452).ModalFooter, obj25);
    obj22.children = items6;
    return closure_8(tmp2(8041).ModalScreen, obj22);
  }
  const obj = require("ChangeSpendingLimitFormState");
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
let closure_6 = fn(7792).CHANGE_SPENDING_LIMIT_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { warningOverlay: null, warningRow: null, warningText: null, loading: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
obj3.borderWidth = 1;
obj3.borderColor = nativeDefault.colors.ICON_FEEDBACK_WARNING;
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_WARNING;
obj2.warningOverlay = obj3;
obj2.warningRow = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj2.warningText = { flex: 1, color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj5 = { flex: 1, color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj2.loading = { alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ChangeSpendingLimitModal.tsx");

export default function ChangeSpendingLimitModal(teenId) {
  teenId = teenId.teenId;
  items = [teenId];
  const memo = noop.useMemo(() => {
    let obj = { CHANGE_SPENDING_LIMIT: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { variant: "body-md/semibold", children: null };
        const intl = teenId(1113).intl;
        obj.children = intl.string(closure_1_1(2664).xMRO6A);
        return closure_1_7(teenId(5751).Text, obj);
      },
      render() {
        return closure_2_7(ChangeSpendingLimitScreen, { teenId });
      }
    };
    obj.CHANGE_SPENDING_LIMIT = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: memo, headerBackTitle: null };
  let intl = teenId(1113).intl;
  obj.headerBackTitle = intl.string(teenId(1113).t["13/7kX"]);
  return closure_7(teenId(11627).Modal, obj);
};