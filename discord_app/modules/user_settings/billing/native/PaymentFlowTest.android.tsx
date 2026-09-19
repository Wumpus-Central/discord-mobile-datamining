// === Module 16000: PaymentFlowTest ===

// Module 16000 (PaymentFlowTest)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7221 */;
import NativePaymentContext from "NativePaymentContext" /* 11083 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function TestView() {
  const tmp = closure_9();
  const tmp3 = first2(noop.useState("1341506443580276736"), 2);
  value = tmp3[0];
  closure_1 = tmp3[1];
  const items = [UserStore];
  const stateFromStores = value(first1[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2Result = first2(noop.useState(id), 2);
  first1 = tmp2Result[0];
  const tmp2Result2 = first2(noop.useState(undefined), 2);
  first2 = tmp2Result2[0];
  let obj3 = { spacing: 16, style: tmp.container, children: null };
  const items1 = [closure_7(value(first1[9]).Text, { variant: "text-lg/bold", children: "Android Payment Flow Test" }), ];
  const items2 = [
    closure_7(value(first1[9]).Text, { style: tmp.title, variant: "text-md/bold", children: "Gift Purchase SKU" }),
    closure_7(value(first1[11]).TextInput, {
      containerStyle: tmp.textInput,
      label: "SKU ID",
      value,
      placeholder: "Default: 1341506443580276736 (Anime Shy)",
      onChange(arg0) {
        return closure_1(arg0);
      },
      clearable: true
    }),
    closure_7(value(first1[11]).TextInput, { containerStyle: tmp.textInput, label: "Gift Recipient ID", value: first1, placeholder: "Recipient User ID", onChange: tmp2Result[1], clearable: true }),
    closure_7(value(first1[11]).TextInput, { containerStyle: tmp.textInput, label: "Gift Message (Optional)", value: first2, placeholder: "Here's a gift for you!", onChange: tmp2Result2[1], clearable: true }),

  ];
  let tmp15 = null === value;
  if (!tmp15) {
    tmp15 = null === first1;
  }
  const obj8 = { children: null };
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
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16001, dependencyMap.paths), "SimpleRequestOTPActionSheet", obj);
      }
    }
  });
  obj8.children = items2;
  items1[1] = closure_8(value(first1[10]).Card, obj8);
  obj3.children = items1;
  return closure_8(value(first1[8]).Stack, obj3);
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: null, textInput: null, title: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = { padding: nativeDefault.space.PX_16 };
obj.textInput = { marginBottom: 16 };
obj.title = { marginBottom: 8 };
let closure_9 = createStyles.createStyles(obj);
const obj4 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTest.android.tsx");

export default noop.memo(function PaymentFlowTest() {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj = { skuIDs: [], activeSubscription: null, children: null };
  const tmp = closure_9();
  obj.children = React5(ScrollView, { style: closure_9().wrap, contentContainerStyle: { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }, children: React5(TestView, {}) });
  return React5(NativePaymentContext.NativePaymentContextProvider, obj);
});