// === Module 14876: TestView ===

// Module 14876 (TestView)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { ScrollView } from "NativePaymentContextProvider";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
function TestView() {
  const tmp = callback2();
  let obj = importAllResult;
  const tmp3 = first2(importAllResult.useState("1341506443580276736"), 2);
  const first = tmp3[0];
  let closure_1 = tmp3[1];
  let obj1 = first(first1[7]);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp2Result = tmp2(importAllResult.useState(id), 2);
  first1 = tmp2Result[0];
  tmp2Result = tmp2(obj.useState(undefined), 2);
  first2 = tmp2Result[0];
  obj = { spacing: 16, style: tmp.container, children: null };
  const items1 = [callback(first(first1[9]).Text, { variant: "text-lg/bold", children: "Android Payment Flow Test" }), ];
  obj = { style: tmp.title, variant: "text-md/bold", children: "Gift Purchase SKU" };
  const items2 = [callback(first(first1[9]).Text, obj), , , , ];
  obj1 = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value: first,
    placeholder: "Default: 1341506443580276736 (Anime Shy)",
    onChange(arg0) {
      return callback(arg0);
    },
    isClearable: true
  };
  items2[1] = callback(first(first1[11]).TextInput, obj1);
  items2[2] = callback(first(first1[11]).TextInput, { containerStyle: tmp.textInput, label: "Gift Recipient ID", value: first1, placeholder: "Recipient User ID", onChange: tmp2Result[1], isClearable: true });
  items2[3] = callback(first(first1[11]).TextInput, { containerStyle: tmp.textInput, label: "Gift Message (Optional)", value: first2, placeholder: "Here's a gift for you!", onChange: tmp2Result[1], isClearable: true });
  let tmp15 = null === first;
  if (!tmp15) {
    tmp15 = null === first1;
  }
  const obj4 = { children: null };
  items2[4] = callback(first(first1[12]).Button, {
    disabled: tmp15,
    text: "Send Gift",
    onPress() {
      let tmp2 = null != first;
      if (tmp2) {
        tmp2 = null != first1;
      }
      if (tmp2) {
        const obj = { selectedSkuId: null, requestType: "giftSku", giftRecipientId: null, giftMessage: null };
        obj[0] = first;
        obj[2] = first1;
        obj[3] = first2;
        callback(first1[13]).hideActionSheet();
        const obj2 = callback(first1[13]);
        callback(first1[13]).openLazy(first(first1[15])(first1[14], first1.paths), "SimpleRequestOTPActionSheet", obj);
        const obj3 = callback(first1[13]);
      }
    }
  });
  obj4[0] = items2;
  items1[1] = closure_8(first(first1[10]).Card, obj4);
  obj[2] = items1;
  return closure_8(first(first1[8]).Stack, obj);
}
let c4 = importAllResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { wrap: null, container: null, textInput: null, title: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
createCacheKey = { padding: require("Themes").space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { marginBottom: 16 };
obj[3] = { marginBottom: 8 };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function PaymentFlowTest() {
  const insets = importDefault(5281)({ includeKeyboardHeight: true }).insets;
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = { style: callback2().wrap, contentContainerStyle: obj, children: null };
  obj = { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right };
  obj[2] = callback(TestView, {});
  obj[2] = callback(ScrollView, obj);
  return callback(require(8950) /* NativePaymentContextProvider */.NativePaymentContextProvider, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTest.android.tsx");

export default memoResult;