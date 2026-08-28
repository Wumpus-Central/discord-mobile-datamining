// discord_app/modules/virtual_currency/native/OrbCheckoutMenu.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ textInput: { marginBottom: 16 }, title: { marginBottom: 8 } });
const result = require("set").fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutMenu.tsx");

export default function OrbCheckoutMenu() {
  const tmp = callback4();
  const tmp2 = callback(React.useState("1409898407849365565"), 2);
  const first = tmp2[0];
  closure_1 = tmp2[1];
  const items = [first];
  callback = React.useCallback(() => {
    if (null != first) {
      let obj = callback(closure_1_2[4]);
      obj = { skuId: null, analyticsLocations: null, onCheckoutSuccess: null };
      obj[0] = tmp;
      obj[1] = [];
      obj[2] = function onCheckoutSuccess() {
        callback(table[7]).open({ key: "ORB_CHECKOUT_SUCCESS", content: "Successfully redeemed item with Orbs" });
      };
      obj.pushLazy(first(closure_1_2[6])(closure_1_2[5], closure_1_2.paths), obj);
    }
  }, items);
  let obj = { children: null };
  obj = { style: tmp.title, variant: "text-md/bold", children: "Redeem SKU for Orbs" };
  const items1 = [callback2(first(4442).Text, obj), , , ];
  obj = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value: first,
    onChange(arg0) {
      return callback(arg0);
    },
    isClearable: true
  };
  items1[1] = callback2(first(7652).TextInput, obj);
  items1[2] = callback2(first(4442).Text, { style: tmp.title, variant: "text-md/bold", children: "Checkout will open with the orb price of the product, if it exists" });
  items1[3] = callback2(first(4893).Button, { text: "Open Orbs Checkout", variant: "primary", onPress: callback, disabled: null == first });
  obj[0] = items1;
  return callback3(first(5566).Card, obj);
};