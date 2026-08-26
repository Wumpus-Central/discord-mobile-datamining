// === Module 14435: ChangeSpendingLimitScreen ===

// Module 14435 (ChangeSpendingLimitScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
function ChangeSpendingLimitScreen(teenId) {
  let _require;
  function _handleSave(arg0) {
    const self = this;
    const tmp = closure_1_3(function*() {
      closure_0 = tmp3;
      dependencyMap = 1;
      yield closure_1_0();
      if (1 === tmp7) {
        dependencyMap = 0;
        obj1 = closure_1_0(4161);
        const intl = closure_1_0(1236).intl;
        obj1.presentFailedToast(intl.string(v0(2369).Wu8BK2));
        c3 = 3;
      } else if (arg0 === 1) {
        c3 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj2 = { key: "SPENDING_CONTROLS_CHANGED", content: null, IconComponent: null, iconColor: "status-positive" };
        const intl2 = closure_1_0(1236).intl;
        obj2[1] = intl2.string(v0(2369)["2WKfG1"]);
        obj2[2] = closure_1_0(4404).CircleCheckIcon;
        v0(4162).open(obj2);
        let arr = v0(4675);
        arr = arr.pop();
        dependencyMap = 0;
        const obj6 = v0(4162);
      }
      dependencyMap = 0;
      return arg1;
    });
    closure_1 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let formatToPlainStringResult = callback2();
  let obj = _require(14436);
  const changeSpendingLimitFormState = obj.useChangeSpendingLimitFormState(teenId.teenId);
  ({ amountInput, isOverspending, canSave, isSubmitting, monthlySpend, save: c0 } = changeSpendingLimitFormState);
  let formatPriceResult = null;
  ({ handleAmountChange, currencySymbol, exponent, isClearingCap, renewalDate } = changeSpendingLimitFormState);
  if (null != monthlySpend) {
    formatPriceResult = null;
    if (monthlySpend > 0) {
      formatPriceResult = tmp2(6028).formatPrice(monthlySpend, tmp5);
      const tmp2Result = tmp2(6028);
    }
  }
  obj = { spacing: _handleSave(712).space.PX_16, children: null };
  obj = { variant: "text-sm/normal", children: null };
  let intl = tmp2(1236).intl;
  obj[1] = intl.string(_handleSave(2369).IFguF2);
  const items = [callback(_require(4440).Text, obj), ];
  obj1 = { spacing: _handleSave(712).space.PX_8, children: null };
  let obj2 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl2 = tmp2(1236).intl;
  obj2[2] = intl2.string(_handleSave(2369)["1fHSu2"]);
  const items1 = [callback(_require(4440).Text, obj2), , ];
  const obj3 = { accessibilityLabel: null, value: null, onChange: null, leadingText: null, placeholder: null, keyboardType: null, isClearable: true };
  const intl3 = tmp2(1236).intl;
  obj3[0] = intl3.string(_handleSave(2369)["1fHSu2"]);
  obj3[1] = amountInput;
  obj3[2] = handleAmountChange;
  let tmp12;
  if (tmp7) {
    tmp12 = currencySymbol;
  }
  obj3[3] = tmp12;
  const intl4 = tmp2(1236).intl;
  obj3[4] = intl4.string(_handleSave(2369).DjSv82);
  let str = "number-pad";
  if (exponent > 0) {
    str = "decimal-pad";
  }
  obj3[5] = str;
  const items2 = [callback(_require(8002).TextInput, obj3), ];
  let tmp9Result = null;
  if (isOverspending) {
    const obj4 = { style: null, pointerEvents: "none" };
    obj4[0] = formatToPlainStringResult.warningOverlay;
    tmp9Result = tmp9(tmp11, obj4);
  }
  items2[1] = tmp9Result;
  items1[1] = closure_7(closure_5, { children: items2 });
  if (null == formatPriceResult) {
    function handleSave() {
      const self = this;
      const apply = _handleSave.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    const obj5 = { children: null };
    items1[2] = null;
    obj1[1] = items1;
    items[1] = tmp8(tmp2(4877).Stack, obj1);
    obj[1] = items;
    obj5[0] = tmp8(tmp2(4877).Stack, obj);
    const items3 = [tmp9(tmp2(8020).ModalContent, obj5), ];
    if (isClearingCap) {
      let obj6 = { variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
      const intl8 = tmp2(1236).intl;
      obj6[1] = intl8.string(tmp10(2369).JZDGJ8);
      obj6[2] = handleSave;
      obj6[3] = isSubmitting;
      obj6[4] = isSubmitting;
      let obj7 = obj6;
    } else {
      obj7 = { text: null, onPress: null, disabled: null, loading: null };
      const intl7 = tmp2(1236).intl;
      obj7[0] = intl7.string(tmp2(1236).t["R3BPH+"]);
      obj7[1] = handleSave;
      let tmp16 = !canSave;
      if (canSave) {
        tmp16 = isSubmitting;
      }
      obj7[2] = tmp16;
      obj7[3] = isSubmitting;
    }
    const obj8 = { children: null };
    const obj9 = { children: null };
    const obj10 = { children: null };
    const items4 = [tmp9(tmp2(4879).Button, obj7), ];
    const obj11 = { variant: "tertiary", text: null, onPress: null };
    const intl9 = tmp2(1236).intl;
    obj11[1] = intl9.string(tmp2(1236).t["ETE/oC"]);
    obj11[2] = tmp10(4675).pop;
    items4[1] = tmp9(tmp2(4879).Button, obj11);
    obj10[0] = items4;
    obj9[0] = tmp8(tmp2(5323).ButtonGroup, obj10);
    items3[1] = tmp9(tmp2(11567).ModalFooter, obj9);
    obj8[0] = items3;
    return tmp8(tmp2(8019).ModalScreen, obj8);
  } else if (isOverspending) {
    const obj12 = { style: null, children: null };
    obj12[0] = formatToPlainStringResult.warningRow;
    const obj13 = { size: "xs", color: null };
    obj13[1] = tmp10(712).colors.ICON_FEEDBACK_WARNING;
    const items5 = [tmp9(tmp2(8180).WarningIcon, obj13), ];
    const obj14 = { variant: "text-sm/normal", style: null, children: null };
    obj14[1] = formatToPlainStringResult.warningText;
    const intl6 = tmp2(1236).intl;
    const obj15 = { amount: null, date: null };
    obj15[0] = formatPriceResult;
    obj15[1] = renewalDate;
    formatToPlainStringResult = intl6.formatToPlainString(tmp10(2369).Tk6x4X, obj15);
    obj14[2] = formatToPlainStringResult;
    items5[1] = tmp9(tmp2(4440).Text, obj14);
    obj12[1] = items5;
    tmp9Result = tmp8(tmp11, obj12);
  } else {
    const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl5 = tmp2(1236).intl;
    const obj17 = { amount: null };
    obj17[0] = formatPriceResult;
    obj16[2] = intl5.formatToPlainString(tmp10(2369).pfAlRY, obj17);
    tmp9Result = tmp9(tmp2(4440).Text, obj16);
  }
}
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { warningOverlay: null, warningRow: null, warningText: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.borderRadius = ThemesDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
createCacheKey.borderWidth = 1;
createCacheKey.borderColor = ThemesDefault.colors.ICON_FEEDBACK_WARNING;
createCacheKey.backgroundColor = ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "flex-start" };
let obj1 = { flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "flex-start" };
createCacheKey[2] = { flex: 1, color: ThemesDefault.colors.ICON_FEEDBACK_WARNING };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = { flex: 1, color: ThemesDefault.colors.ICON_FEEDBACK_WARNING };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/ChangeSpendingLimitModal.tsx");

export default function ChangeSpendingLimitModal(teenId) {
  teenId = teenId.teenId;
  const items = [teenId];
  const memo = React.useMemo(() => {
    let obj = { CHANGE_SPENDING_LIMIT: null };
    obj = {
      headerShown: true,
      headerLeft: teenId(closure_1_2[23]).getHeaderCloseButton(closure_1_1(closure_1_2[13]).pop),
      headerTitle() {
        const obj = { variant: "text-md/semibold", children: null };
        const intl = callback(1236).intl;
        obj[1] = intl.string(callback2(2369).xMRO6A);
        return callback3(callback(4440).Text, obj);
      },
      render() {
        return closure_1_6(closure_1_9, { teenId: closure_0 });
      }
    };
    obj[0] = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: memo, headerBackTitle: null };
  let intl = teenId(1236).intl;
  obj[2] = intl.string(teenId(1236).t["13/7kX"]);
  return callback(teenId(11569).Modal, obj);
};