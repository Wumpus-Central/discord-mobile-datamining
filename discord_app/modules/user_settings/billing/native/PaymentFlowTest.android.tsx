// discord_app/modules/user_settings/billing/native/PaymentFlowTest.android.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import NativePaymentContext from "../../../payments/native/NativePaymentContext.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefault;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, container: obj3, textInput: { marginBottom: 16 }, title: { marginBottom: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let currentUser;
      let first1;
      let first2;
      let items1;
      let tmp8;
      let tmp9;
      let value;
      let tmp2 = first1;
      let obj = value(first1[8]);
      const cResult = obj.c(31);
      const tmp4 = closure_9();
      const tmp6 = first2(react.useState("1341506443580276736"), 2);
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
      const tmpResult = value(tmp2[9]);
      const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
      let id;
      const useState = react.useState;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const tmp5Result = first2(useState(id), 2);
      first1 = tmp5Result[0];
      const tmp15 = tmp5Result[1];
      const tmp5Result2 = first2(react.useState(undefined), 2);
      first2 = tmp5Result2[0];
      if (cResult[2] === first2) {
        if (cResult[3] === first1) {
          let tmp19;
          let tmp23;
          if (cResult[4] === value) {
            tmp19 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            cResult[6] = closure_7(value(tmp2[10]).Text, {
              variant: "text-lg/bold",
              children: "Android Payment Flow Test",
            });
            const tmp22 = closure_7(value(tmp2[10]).Text, {
              variant: "text-lg/bold",
              children: "Android Payment Flow Test",
            });
          }
          if (cResult[7] !== tmp4.title) {
            let obj3 = { style: tmp4.title, variant: "text-md/bold", children: "Gift Purchase SKU" };
            const tmp25 = closure_7(value(tmp2[10]).Text, obj3);
            cResult[7] = tmp4.title;
            cResult[8] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[8];
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
                if (cResult[19] === tmp19) {
                  class U {
                    constructor(arg0) {
                      return closure_1(arg0);
                    }
                  }
                  if (cResult[22] === tmp37) {
                    class U {
                      constructor(arg0) {
                        return closure_1(arg0);
                      }
                    }
                  }
                  const obj4 = { children: items1 };
                  items1 = [tmp23, tmp27, tmp30, tmp33, tmp37];
                  cResult[22] = tmp37;
                  cResult[23] = tmp23;
                  cResult[24] = tmp27;
                  cResult[25] = tmp30;
                  cResult[26] = tmp33;
                  cResult[27] = closure_8(value(tmp2[13]).Card, obj4);
                  const tmp42 = closure_8(value(tmp2[13]).Card, obj4);
                }
                const obj5 = { disabled: null === value || null === first1, text: "Send Gift", onPress: tmp19 };
                cResult[19] = tmp19;
                cResult[20] = null === value || null === first1;
                cResult[21] = closure_7(value(tmp2[12]).Button, obj5);
                const tmp39 = closure_7(value(tmp2[12]).Button, obj5);
              }
              const obj6 = {
                containerStyle: tmp4.textInput,
                label: "Gift Message (Optional)",
                value: first2,
                placeholder: "Here's a gift for you!",
                onChange: tmp18,
                clearable: true,
              };
              cResult[16] = first2;
              cResult[17] = tmp4.textInput;
              cResult[18] = closure_7(value(tmp2[11]).TextInput, obj6);
              const tmp35 = closure_7(value(tmp2[11]).TextInput, obj6);
            }
            const obj7 = {
              containerStyle: tmp4.textInput,
              label: "Gift Recipient ID",
              value: first1,
              placeholder: "Recipient User ID",
              onChange: tmp15,
              clearable: true,
            };
            cResult[13] = first1;
            cResult[14] = tmp4.textInput;
            cResult[15] = closure_7(value(tmp2[11]).TextInput, obj7);
            const tmp32 = closure_7(value(tmp2[11]).TextInput, obj7);
          }
          const obj8 = {
            containerStyle: tmp4.textInput,
            label: "SKU ID",
            value,
            placeholder: "Default: 1341506443580276736 (Anime Shy)",
            onChange: U,
            clearable: true,
          };
          cResult[10] = value;
          cResult[11] = tmp4.textInput;
          cResult[12] = closure_7(value(tmp2[11]).TextInput, obj8);
          const tmp29 = closure_7(value(tmp2[11]).TextInput, obj8);
        }
      }
      class I {
        constructor() {
          const tmp2 = null != first && null != first1;
          if (tmp2) {
            const obj = { selectedSkuId: first, requestType: "giftSku", giftRecipientId: first1, giftMessage: first2 };
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
            const obj3 = ActionSheetActionCreatorsDefault;
            obj3.openLazy(asyncRequire(15573, dependencyMap.paths), "SimpleRequestOTPActionSheet", obj);
          }
        }
      }
      cResult[2] = first2;
      cResult[3] = first1;
      cResult[4] = value;
      cResult[5] = I;
      tmp19 = I;
    }
  : () => {
      let currentUser;
      let first1;
      let first2;
      let items1;
      const tmp = closure_9();
      let tmp2 = first2;
      const tmp3 = first2(react.useState("1341506443580276736"), 2);
      const value = tmp3[0];
      let closure_1 = tmp3[1];
      let obj2 = value(first1[9]);
      const items = [UserStore];
      const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
      let id;
      const useState = react.useState;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const tmp2Result = tmp2(useState(id), 2);
      first1 = tmp2Result[0];
      const tmp11 = tmp2Result[1];
      const tmp2Result2 = tmp2(react.useState(undefined), 2);
      first2 = tmp2Result2[0];
      let obj3 = { spacing: 16, style: tmp.container, children: items1 };
      const tmp14 = tmp2Result2[1];
      const Stack = tmp5(tmp6[14]).Stack;
      items1 = [closure_7(value(first1[10]).Text, { variant: "text-lg/bold", children: "Android Payment Flow Test" })];
      const Card = tmp5(tmp6[13]).Card;
      const items2 = [, , , ,];
      const obj4 = { style: tmp.title, variant: "text-md/bold", children: "Gift Purchase SKU" };
      items2[0] = closure_7(value(first1[10]).Text, obj4);
      const obj5 = {
        containerStyle: tmp.textInput,
        label: "SKU ID",
        value,
        placeholder: "Default: 1341506443580276736 (Anime Shy)",
        onChange(arg0) {
          return closure_1(arg0);
        },
        clearable: true,
      };
      items2[1] = closure_7(value(first1[11]).TextInput, obj5);
      const obj6 = {
        containerStyle: tmp.textInput,
        label: "Gift Recipient ID",
        value: first1,
        placeholder: "Recipient User ID",
        onChange: tmp11,
        clearable: true,
      };
      items2[2] = closure_7(value(first1[11]).TextInput, obj6);
      const obj7 = {
        containerStyle: tmp.textInput,
        label: "Gift Message (Optional)",
        value: first2,
        placeholder: "Here's a gift for you!",
        onChange: tmp14,
        clearable: true,
      };
      items2[3] = closure_7(value(first1[11]).TextInput, obj7);
      let tmp17 = null === value;
      const Button = tmp5(tmp6[12]).Button;
      if (!tmp17) {
        tmp17 = null === first1;
      }
      const obj8 = { children: items2 };
      const obj9 = {
        disabled: tmp17,
        text: "Send Gift",
        onPress() {
          const tmp2 = null != first && null != first1;
          if (tmp2) {
            const obj = { selectedSkuId: first, requestType: "giftSku", giftRecipientId: first1, giftMessage: first2 };
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
            const obj3 = ActionSheetActionCreatorsDefault;
            obj3.openLazy(asyncRequire(15573, dependencyMap.paths), "SimpleRequestOTPActionSheet", obj);
          }
        },
      };
      items2[4] = closure_7(Button, obj9);
      items1[1] = closure_8(Card, obj8);
      return closure_8(Stack, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let obj4;
        let tmp6;
        const obj = react2;
        const cResult = obj.c(11);
        const tmp4 = closure_9();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { includeKeyboardHeight: true };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [];
          cResult[1] = items;
          tmp6 = items;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === insets.bottom) {
          if (cResult[3] === insets.left) {
            if (cResult[4] === insets.right) {
              let tmp7;
              let tmp8;
              if (cResult[5] === insets.top) {
                tmp7 = cResult[6];
              }
              const _Symbol = Symbol;
              if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp11 = metroImportDefault(closure_10, {});
                cResult[7] = tmp11;
                tmp8 = tmp11;
              } else {
                tmp8 = cResult[7];
              }
              if (cResult[8] === tmp4.wrap) {
                let tmp12;
                if (cResult[9] === tmp7) {
                  tmp12 = cResult[10];
                }
                return tmp12;
              }
              const obj3 = { skuIDs: tmp6, activeSubscription: null, children: metroImportDefault(ScrollView, obj4) };
              obj4 = { style: tmp4.wrap, contentContainerStyle: tmp7, children: tmp8 };
              const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
              const tmp15 = metroImportDefault(NativePaymentContextProvider, obj3);
              cResult[8] = tmp4.wrap;
              cResult[9] = tmp7;
              cResult[10] = tmp15;
              tmp12 = tmp15;
            }
          }
        }
        const obj5 = {
          paddingBottom: insets.bottom,
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        };
        cResult[2] = insets.bottom;
        cResult[3] = insets.left;
        cResult[4] = insets.right;
        cResult[5] = insets.top;
        cResult[6] = obj5;
        tmp7 = obj5;
      }
    : () => {
        let obj2;
        const tmp = closure_9();
        const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
        const obj = { skuIDs: [], activeSubscription: null, children: metroImportDefault(ScrollView, obj2) };
        obj2 = {
          style: tmp.wrap,
          contentContainerStyle: {
            paddingBottom: insets.bottom,
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
          children: metroImportDefault(closure_10, {}),
        };
        const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
        return metroImportDefault(NativePaymentContextProvider, obj);
      },
);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTest.android.tsx");

export default memoResult;
