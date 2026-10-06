// discord_app/modules/virtual_currency/native/OrbCheckoutMenu.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ textInput: { marginBottom: 16 }, title: { marginBottom: 8 } });
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutMenu.tsx");

export default function OrbCheckoutMenu() {
  let closure_1;
  let items1;
  let value;
  const tmp = closure_7();
  [value, closure_1] = react.useState("1409898407849365565");
  const items = [value];
  const callback = react.useCallback(() => {
    if (null != first) {
      let obj = ModalActionCreatorsDefault;
      const obj2 = {
        skuId: tmp,
        analyticsLocations: [],
        onCheckoutSuccess() {
          const obj = closure_1_1(closure_1_2[7]);
          obj.open({ key: "ORB_CHECKOUT_SUCCESS", content: "Successfully redeemed item with Orbs" });
        },
      };
      obj.pushLazy(asyncRequire(13008, dependencyMap.paths), obj2);
    }
  }, items);
  let obj = { children: items1 };
  const Card = value(6002).Card;
  let obj2 = { style: tmp.title, variant: "text-md/bold", children: "Redeem SKU for Orbs" };
  items1 = [closure_5(value(4892).Text, obj2), , ,];
  const obj3 = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value,
    onChange(arg0) {
      return closure_1(arg0);
    },
    clearable: true,
  };
  items1[1] = closure_5(value(6105).TextInput, obj3);
  const obj4 = {
    style: tmp.title,
    variant: "text-md/bold",
    children: "Checkout will open with the orb price of the product, if it exists",
  };
  items1[2] = closure_5(value(4892).Text, obj4);
  const obj5 = { text: "Open Orbs Checkout", variant: "primary", onPress: callback, disabled: null == value };
  items1[3] = closure_5(value(5601).Button, obj5);
  return closure_6(Card, obj);
}
