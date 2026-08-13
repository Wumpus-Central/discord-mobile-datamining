// discord_app/modules/virtual_currency/native/OrbCheckoutMenu.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ textInput: { marginBottom: 16 }, title: { marginBottom: 8 } });
const result = require("jsxProd").fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutMenu.tsx");

export default function OrbCheckoutMenu() {
  const tmp = callback4();
  const tmp2 = callback(React.useState("1409898407849365565"), 2);
  const first = tmp2[0];
  let closure_1 = tmp2[1];
  const items = [first];
  callback = React.useCallback(() => {
    if (null != first) {
      let obj = callback(outer1_2[4]);
      obj = { skuId: null, analyticsLocations: null, onCheckoutSuccess: null };
      obj[0] = tmp;
      obj[1] = [];
      obj[2] = function onCheckoutSuccess() {
        callback(table[7]).open({ key: "ORB_CHECKOUT_SUCCESS", content: "Successfully redeemed item with Orbs" });
      };
      obj.pushLazy(first(outer1_2[6])(outer1_2[5], outer1_2.paths), obj);
    }
  }, items);
  let obj = { children: null };
  obj = { style: tmp.title, variant: "text-md/bold", children: "Redeem SKU for Orbs" };
  const items1 = [callback2(first(4338).Text, obj), , , ];
  obj = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value: first,
    onChange(arg0) {
      return callback(arg0);
    },
    isClearable: true
  };
  items1[1] = callback2(first(7835).TextInput, obj);
  items1[2] = callback2(first(4338).Text, { style: tmp.title, variant: "text-md/bold", children: "Checkout will open with the orb price of the product, if it exists" });
  items1[3] = callback2(first(4755).Button, { text: "Open Orbs Checkout", variant: "primary", onPress: callback, disabled: null == first });
  obj[0] = items1;
  return callback3(first(5416).Card, obj);
};