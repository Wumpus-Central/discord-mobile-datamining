// discord_app/modules/user_settings/billing/native/PaymentFlowTest.android.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import NativePaymentContext from "../../../payments/native/NativePaymentContext.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function TestView() {
  const tmp = closure_9();
  let obj = noop;
  const tmp3 = first2(noop.useState("1341506443580276736"), 2);
  value = tmp3[0];
  closure_1 = tmp3[1];
  let obj1 = value(first1[7]);
  const items = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp2Result = tmp2(noop.useState(id), 2);
  first1 = tmp2Result[0];
  tmp2Result = tmp2(obj.useState(undefined), 2);
  first2 = tmp2Result[0];
  obj = { spacing: 16, style: tmp.container, children: null };
  const items1 = [closure_7(value(first1[9]).Text, { variant: "text-lg/bold", children: "Android Payment Flow Test" })];
  obj = { style: tmp.title, variant: "text-md/bold", children: "Gift Purchase SKU" };
  const items2 = [closure_7(value(first1[9]).Text, obj), , , ,];
  obj1 = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value,
    placeholder: "Default: 1341506443580276736 (Anime Shy)",
    onChange(arg0) {
      return closure_1(arg0);
    },
    isClearable: true,
  };
  items2[1] = closure_7(value(first1[11]).TextInput, obj1);
  items2[2] = closure_7(value(first1[11]).TextInput, {
    containerStyle: tmp.textInput,
    label: "Gift Recipient ID",
    value: first1,
    placeholder: "Recipient User ID",
    onChange: tmp2Result[1],
    isClearable: true,
  });
  items2[3] = closure_7(value(first1[11]).TextInput, {
    containerStyle: tmp.textInput,
    label: "Gift Message (Optional)",
    value: first2,
    placeholder: "Here's a gift for you!",
    onChange: tmp2Result[1],
    isClearable: true,
  });
  let tmp15 = null === value;
  if (!tmp15) {
    tmp15 = null === first1;
  }
  const obj4 = { children: null };
  items2[4] = closure_7(value(first1[12]).Button, {
    disabled: tmp15,
    text: "Send Gift",
    onPress() {
      let tmp2 = null != first;
      if (tmp2) {
        tmp2 = null != first1;
      }
      if (tmp2) {
        const obj = { selectedSkuId: first, requestType: "giftSku", giftRecipientId: first1, giftMessage: first2 };
        ActionSheetActionCreatorsDefault.hideActionSheet();
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(15693, dependencyMap.paths),
          "SimpleRequestOTPActionSheet",
          obj,
        );
      }
    },
  });
  obj4.children = items2;
  items1[1] = closure_8(value(first1[10]).Card, obj4);
  obj.children = items1;
  return closure_8(value(first1[8]).Stack, obj);
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let obj = { wrap: null, container: null, textInput: null, title: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.wrap = obj;
const createStyles = { padding: nativeDefault.space.PX_16 };
obj.container = createStyles;
obj.textInput = { marginBottom: 16 };
obj.title = { marginBottom: 8 };
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTest.android.tsx");

export default noop.memo(function PaymentFlowTest() {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {
    style: closure_9().wrap,
    contentContainerStyle: {
      paddingBottom: insets.bottom,
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    children: React5(TestView, {}),
  };
  obj.children = React5(ScrollView, obj);
  return React5(NativePaymentContext.NativePaymentContextProvider, obj);
});
