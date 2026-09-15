// discord_app/modules/virtual_currency/native/OrbCheckoutMenu.tsx
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let closure_7 = createStyles.createStyles({ textInput: { marginBottom: 16 }, title: { marginBottom: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutMenu.tsx");

export default function OrbCheckoutMenu() {
  const tmp = closure_7();
  [value, closure_1] = noop.useState("1409898407849365565");
  const items = [value];
  const callback = noop.useCallback(() => {
    if (null != first) {
      const obj2 = {
        skuId: tmp,
        analyticsLocations: [],
        onCheckoutSuccess() {
          closure_1_1(closure_1_2[7]).open({
            key: "ORB_CHECKOUT_SUCCESS",
            content: "Successfully redeemed item with Orbs",
          });
        },
      };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13290, dependencyMap.paths), obj2);
    }
  }, items);
  let obj = { children: null };
  const items1 = [
    closure_5(value(4635).Text, { style: tmp.title, variant: "text-md/bold", children: "Redeem SKU for Orbs" }),
    closure_5(value(6711).TextInput, {
      containerStyle: tmp.textInput,
      label: "SKU ID",
      value,
      onChange(arg0) {
        return closure_1(arg0);
      },
      isClearable: true,
    }),
    closure_5(value(4635).Text, {
      style: tmp.title,
      variant: "text-md/bold",
      children: "Checkout will open with the orb price of the product, if it exists",
    }),
    closure_5(value(5059).Button, {
      text: "Open Orbs Checkout",
      variant: "primary",
      onPress: callback,
      disabled: null == value,
    }),
  ];
  obj.children = items1;
  return closure_6(value(5692).Card, obj);
}
