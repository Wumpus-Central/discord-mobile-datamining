// discord_app/modules/virtual_currency/native/OrbCheckoutMenu.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ textInput: { marginBottom: 16 }, title: { marginBottom: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutMenu.tsx");

export default function OrbCheckoutMenu() {
  const tmp = closure_7();
  const tmp2 = _slicedToArray(noop.useState("1409898407849365565"), 2);
  value = tmp2[0];
  closure_1 = tmp2[1];
  const items = [value];
  const callback = noop.useCallback(() => {
    if (null != first) {
      const obj = {
        skuId: tmp,
        analyticsLocations: [],
        onCheckoutSuccess() {
          closure_1_1(closure_1_2[7]).open({
            key: "ORB_CHECKOUT_SUCCESS",
            content: "Successfully redeemed item with Orbs",
          });
        },
      };
      obj.pushLazy(asyncRequireImpl(13152, dependencyMap.paths), obj);
    }
  }, items);
  let obj = { children: null };
  obj = { style: tmp.title, variant: "text-md/bold", children: "Redeem SKU for Orbs" };
  const items1 = [closure_5(value(4556).Text, obj), , ,];
  obj = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value,
    onChange(arg0) {
      return closure_1(arg0);
    },
    isClearable: true,
  };
  items1[1] = closure_5(value(6606).TextInput, obj);
  items1[2] = closure_5(value(4556).Text, {
    style: tmp.title,
    variant: "text-md/bold",
    children: "Checkout will open with the orb price of the product, if it exists",
  });
  items1[3] = closure_5(value(4975).Button, {
    text: "Open Orbs Checkout",
    variant: "primary",
    onPress: callback,
    disabled: null == value,
  });
  obj.children = items1;
  return closure_6(value(5607).Card, obj);
}
