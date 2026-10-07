// === Module 15586: PaymentFlowTest ===

// Module 15586 (PaymentFlowTest)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import NativePaymentContext from "NativePaymentContext" /* 10564 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: null, textInput: null, title: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = { padding: nativeDefault.space.PX_16 };
obj.textInput = { marginBottom: 16 };
obj.title = { marginBottom: 8 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = value(first1[8]).c(31);
  const tmp4 = closure_9();
  const tmp6 = first2(noop.useState("1341506443580276736"), 2);
  value = tmp6[0];
  importDefault = tmp6[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  let obj = value(first1[8]);
  const stateFromStores = value(first1[9]).useStateFromStores(tmp8, tmp9);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp5Result = first2(noop.useState(id), 2);
  first1 = tmp5Result[0];
  const tmpResult = value(first1[9]);
  first2 = first2(noop.useState(undefined), 2)[0];
  if (cResult[2] === first2) {
    if (cResult[3] === first1) {
      if (cResult[4] === value) {
        let tmp18 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = closure_7(tmp(tmp2[10]).Text, { variant: "text-lg/bold", children: "Android Payment Flow Test" });
        cResult[6] = tmp21;
      }
      if (cResult[7] !== tmp4.title) {
        let obj3 = { style: tmp4.title, variant: "text-md/bold", children: "Gift Purchase SKU" };
        const tmp24 = closure_7(tmp(tmp2[10]).Text, obj3);
        cResult[7] = tmp4.title;
        cResult[8] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(arg0) {
            return closure_1(arg0);
          }
        }
        cResult[9] = U;
      } else {
        class U {
          constructor(arg0) {
            return closure_1(arg0);
          }
        }
      }
      if (cResult[10] === value) {
        class U {
          constructor(arg0) {
            return closure_1(arg0);
          }
        }
        if (cResult[13] === first1) {
          class U {
            constructor(arg0) {
              return closure_1(arg0);
            }
          }
          if (cResult[16] === first2) {
            class U {
              constructor(arg0) {
                return closure_1(arg0);
              }
            }
            if (cResult[19] === tmp18) {
              class U {
                constructor(arg0) {
                  return closure_1(arg0);
                }
              }
              if (cResult[22] === tmp36) {
                class U {
                  constructor(arg0) {
                    return closure_1(arg0);
                  }
                }
              }
              const obj4 = { children: null };
              const items1 = [tmp22, tmp26, tmp29, tmp32, tmp36];
              obj4.children = items1;
              const tmp41 = closure_8(tmp(tmp2[13]).Card, obj4);
              cResult[22] = tmp36;
              cResult[23] = tmp22;
              cResult[24] = tmp26;
              cResult[25] = tmp29;
              cResult[26] = tmp32;
              cResult[27] = tmp41;
            }
            const obj5 = { disabled: null === value || null === first1, text: "Send Gift", onPress: tmp18 };
            const tmp38 = closure_7(tmp(tmp2[12]).Button, obj5);
            cResult[19] = tmp18;
            cResult[20] = null === value || null === first1;
            cResult[21] = tmp38;
          }
          const obj6 = { containerStyle: tmp4.textInput, label: "Gift Message (Optional)", value: first2, placeholder: "Here's a gift for you!", onChange: tmp17, clearable: true };
          const tmp34 = closure_7(tmp(tmp2[11]).TextInput, obj6);
          cResult[16] = first2;
          cResult[17] = tmp4.textInput;
          cResult[18] = tmp34;
        }
        const obj7 = { containerStyle: tmp4.textInput, label: "Gift Recipient ID", value: first1, placeholder: "Recipient User ID", onChange: tmp5Result[1], clearable: true };
        const tmp31 = closure_7(tmp(tmp2[11]).TextInput, obj7);
        cResult[13] = first1;
        cResult[14] = tmp4.textInput;
        cResult[15] = tmp31;
      }
      const obj8 = { containerStyle: tmp4.textInput, label: "SKU ID", value, placeholder: "Default: 1341506443580276736 (Anime Shy)", onChange: U, clearable: true };
      const tmp28 = closure_7(tmp(tmp2[11]).TextInput, obj8);
      cResult[10] = value;
      cResult[11] = tmp4.textInput;
      cResult[12] = tmp28;
    }
  }
  class I {
    constructor() {
      tmp2 = null != closure_0;
      tmp = closure_0;
      if (tmp2) {
        tmp3 = closure_2;
        tmp2 = null != closure_2;
      }
      if (tmp2) {
        obj = { selectedSkuId: null, requestType: "giftSku", giftRecipientId: null, giftMessage: null };
        obj.selectedSkuId = tmp;
        tmp4 = closure_2;
        obj.giftRecipientId = closure_2;
        tmp5 = closure_3;
        obj.giftMessage = closure_3;
        tmp6 = closure_1;
        tmp7 = closure_2;
        obj2 = closure_1(closure_2[15]);
        hideActionSheetResult = obj2.hideActionSheet();
        obj3 = closure_1(closure_2[15]);
        tmp9 = closure_0;
        str = "SimpleRequestOTPActionSheet";
        openLazyResult = obj3.openLazy(closure_0(closure_2[17])(closure_2[16], closure_2.paths), "SimpleRequestOTPActionSheet", obj);
      }
      return;
    }
  }
  cResult[2] = first2;
  cResult[3] = first1;
  cResult[4] = value;
  cResult[5] = I;
  tmp18 = I;
  const tmp5Result2 = first2(noop.useState(undefined), 2);
}) : (() => {
  const tmp = closure_9();
  const tmp3 = first2(noop.useState("1341506443580276736"), 2);
  value = tmp3[0];
  closure_1 = tmp3[1];
  const items = [UserStore];
  const stateFromStores = value(first1[9]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2Result = first2(noop.useState(id), 2);
  first1 = tmp2Result[0];
  const tmp2Result2 = first2(noop.useState(undefined), 2);
  first2 = tmp2Result2[0];
  let obj3 = { spacing: 16, style: tmp.container, children: null };
  const items1 = [closure_7(value(first1[10]).Text, { variant: "text-lg/bold", children: "Android Payment Flow Test" }), ];
  const items2 = [
    closure_7(value(first1[10]).Text, { style: tmp.title, variant: "text-md/bold", children: "Gift Purchase SKU" }),
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
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15587, dependencyMap.paths), "SimpleRequestOTPActionSheet", obj);
      }
    }
  });
  obj8.children = items2;
  items1[1] = closure_8(value(first1[13]).Card, obj8);
  obj3.children = items1;
  return closure_8(value(first1[14]).Stack, obj3);
});
ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTest.android.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(11);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[1] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === insets.bottom) {
    if (cResult[3] === insets.left) {
      if (cResult[4] === insets.right) {
        if (cResult[5] === insets.top) {
          let tmp7 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = React5(closure_10, {});
          cResult[7] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[7];
        }
        if (cResult[8] === tmp4.wrap) {
          if (cResult[9] === tmp7) {
            let tmp12 = cResult[10];
          }
          return tmp12;
        }
        const obj3 = { skuIDs: tmp6, activeSubscription: null, children: null };
        const obj4 = { style: tmp4.wrap, contentContainerStyle: tmp7, children: tmp8 };
        obj3.children = React5(ScrollView, obj4);
        const tmp15 = React5(NativePaymentContext.NativePaymentContextProvider, obj3);
        cResult[8] = tmp4.wrap;
        cResult[9] = tmp7;
        cResult[10] = tmp15;
        tmp12 = tmp15;
      }
    }
  }
  const obj5 = { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right };
  cResult[2] = insets.bottom;
  cResult[3] = insets.left;
  cResult[4] = insets.right;
  cResult[5] = insets.top;
  cResult[6] = obj5;
  tmp7 = obj5;
}) : (() => {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj = { skuIDs: [], activeSubscription: null, children: null };
  const tmp = closure_9();
  obj.children = React5(ScrollView, { style: closure_9().wrap, contentContainerStyle: { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }, children: React5(closure_10, {}) });
  return React5(NativePaymentContext.NativePaymentContextProvider, obj);
}));