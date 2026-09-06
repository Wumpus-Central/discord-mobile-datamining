// discord_app/modules/parent_tools/native/ChangeSpendingLimitModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ChangeSpendingLimitScreen(teenId) {
  _require = undefined;
  importDefault = async function _handleSave(dependencyMap) {
    await closure_2_0();
    if (1 === tmp7) {
      dependencyMap = 0;
      const intl = tmp3(1114).intl;
      tmp3(4258).presentFailedToast(intl.string(v2(2396).Wu8BK2));
      c3 = 3;
      tmp3(4258);
    } else if (dependencyMap === 1) {
      c3 = 3;
      throw arg1;
    } else if (dependencyMap !== 2) {
      const obj2 = {
        key: "SPENDING_CONTROLS_CHANGED",
        content: null,
        IconComponent: null,
        iconColor: "status-positive",
      };
      const intl2 = tmp3(1114).intl;
      obj2.content = intl2.string(v2(2396)["2WKfG1"]);
      obj2.IconComponent = tmp3(4520).CircleCheckIcon;
      v2(4259).open(obj2);
      let arr = v2(4763);
      arr = arr.pop();
      dependencyMap = 0;
      v2(4259);
    }
    return arg1;
  };
  let formatToPlainStringResult = closure_8();
  let obj = require("ChangeSpendingLimitFormState");
  const changeSpendingLimitFormState = obj.useChangeSpendingLimitFormState(teenId.teenId);
  ({ amountInput, isOverspending, canSave, isSubmitting, monthlySpend, save: c0 } = changeSpendingLimitFormState);
  let formatPriceResult = null;
  ({ handleAmountChange, currencySymbol, exponent, isClearingCap, renewalDate } = changeSpendingLimitFormState);
  if (null != monthlySpend) {
    formatPriceResult = null;
    if (monthlySpend > 0) {
      formatPriceResult = tmp2(7234).formatPrice(monthlySpend, tmp5);
      const tmp2Result = tmp2(7234);
    }
  }
  obj = { spacing: nativeDefault.space.PX_16, children: null };
  obj = { variant: "text-sm/normal", children: null };
  let intl = tmp2(1114).intl;
  obj.children = intl.string(_modDef2396.IFguF2);
  const items = [closure_6(require("Text/Text").Text, obj)];
  const obj1 = { spacing: nativeDefault.space.PX_8, children: null };
  let obj2 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl2 = tmp2(1114).intl;
  obj2.children = intl2.string(_modDef2396["1fHSu2"]);
  const items1 = [closure_6(require("Text/Text").Text, obj2), ,];
  const obj3 = {
    accessibilityLabel: null,
    value: null,
    onChange: null,
    leadingText: null,
    placeholder: null,
    keyboardType: null,
    isClearable: true,
  };
  const intl3 = tmp2(1114).intl;
  obj3.accessibilityLabel = intl3.string(_modDef2396["1fHSu2"]);
  obj3.value = amountInput;
  obj3.onChange = handleAmountChange;
  let tmp12;
  if (tmp7) {
    tmp12 = currencySymbol;
  }
  obj3.leadingText = tmp12;
  const intl4 = tmp2(1114).intl;
  obj3.placeholder = intl4.string(_modDef2396.DjSv82);
  let str = "number-pad";
  if (exponent > 0) {
    str = "decimal-pad";
  }
  obj3.keyboardType = str;
  const items2 = [closure_6(require("TextInput").TextInput, obj3)];
  let tmp9Result = null;
  if (isOverspending) {
    const obj4 = { style: formatToPlainStringResult.warningOverlay, pointerEvents: "none" };
    tmp9Result = tmp9(tmp11, obj4);
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
    const obj5 = { children: null };
    items1[2] = null;
    obj1.children = items1;
    items[1] = tmp8(tmp2(4973).Stack, obj1);
    obj.children = items;
    obj5.children = tmp8(tmp2(4973).Stack, obj);
    const items3 = [tmp9(tmp2(8422).ModalContent, obj5)];
    if (isClearingCap) {
      const obj6 = { variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
      const intl8 = tmp2(1114).intl;
      obj6.text = intl8.string(tmp10(2396).JZDGJ8);
      obj6.onPress = handleSave;
      obj6.disabled = isSubmitting;
      obj6.loading = isSubmitting;
      let obj7 = obj6;
    } else {
      obj7 = { text: null, onPress: null, disabled: null, loading: null };
      const intl7 = tmp2(1114).intl;
      obj7.text = intl7.string(tmp2(1114).t["R3BPH+"]);
      obj7.onPress = handleSave;
      let tmp16 = !canSave;
      if (canSave) {
        tmp16 = isSubmitting;
      }
      obj7.disabled = tmp16;
      obj7.loading = isSubmitting;
    }
    const obj8 = { children: null };
    const obj9 = { children: null };
    const obj10 = { children: null };
    const items4 = [tmp9(tmp2(4975).Button, obj7)];
    const obj11 = { variant: "tertiary", text: null, onPress: null };
    const intl9 = tmp2(1114).intl;
    obj11.text = intl9.string(tmp2(1114).t["ETE/oC"]);
    obj11.onPress = tmp10(4763).pop;
    items4[1] = tmp9(tmp2(4975).Button, obj11);
    obj10.children = items4;
    obj9.children = tmp8(tmp2(5433).ButtonGroup, obj10);
    items3[1] = tmp9(tmp2(11926).ModalFooter, obj9);
    obj8.children = items3;
    return tmp8(tmp2(8421).ModalScreen, obj8);
  } else if (isOverspending) {
    const obj12 = { style: formatToPlainStringResult.warningRow, children: null };
    const obj13 = { size: "xs", color: tmp10(576).colors.ICON_FEEDBACK_WARNING };
    const items5 = [tmp9(tmp2(8588).WarningIcon, obj13)];
    const obj14 = { variant: "text-sm/normal", style: formatToPlainStringResult.warningText, children: null };
    const intl6 = tmp2(1114).intl;
    const obj15 = { amount: formatPriceResult, date: renewalDate };
    formatToPlainStringResult = intl6.formatToPlainString(tmp10(2396).Tk6x4X, obj15);
    obj14.children = formatToPlainStringResult;
    items5[1] = tmp9(tmp2(4556).Text, obj14);
    obj12.children = items5;
    tmp9Result = tmp8(tmp11, obj12);
  } else {
    const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl5 = tmp2(1114).intl;
    const obj17 = { amount: formatPriceResult };
    obj16.children = intl5.formatToPlainString(tmp10(2396).pfAlRY, obj17);
    tmp9Result = tmp9(tmp2(4556).Text, obj16);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { warningOverlay: null, warningRow: null, warningText: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.borderRadius = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
createStyles.borderWidth = 1;
createStyles.borderColor = nativeDefault.colors.ICON_FEEDBACK_WARNING;
createStyles.backgroundColor = nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING;
createStyles.warningOverlay = createStyles;
createStyles.warningRow = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
let obj1 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
createStyles.warningText = { flex: 1, color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ChangeSpendingLimitModal.tsx");

export default function ChangeSpendingLimitModal(teenId) {
  teenId = teenId.teenId;
  const items = [teenId];
  const memo = noop.useMemo(() => {
    let obj = { CHANGE_SPENDING_LIMIT: null };
    obj = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { variant: "text-md/semibold", children: null };
        const intl = teenId(1114).intl;
        obj.children = intl.string(closure_1_1(2396).xMRO6A);
        return closure_1_6(teenId(4556).Text, obj);
      },
      render() {
        return closure_2_6(ChangeSpendingLimitScreen, { teenId });
      },
    };
    obj.CHANGE_SPENDING_LIMIT = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: memo, headerBackTitle: null };
  let intl = teenId(1114).intl;
  obj.headerBackTitle = intl.string(teenId(1114).t["13/7kX"]);
  return closure_6(teenId(11928).Modal, obj);
}
