// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import useGiftCodeErrorMessageDefault from "useGiftCodeErrorMessage.tsx";
import closure_3 from "../../../../stores/GiftCodeStore.tsx";
import closure_4 from "../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import HeaderBackImage from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";

const require = arg1;
noopAll;
let obj = { START: "giftcode-start", SUCCESS: "giftcode-success", ERROR: "giftcode-error" };
const headerNoTitle = HeaderBackImage.getHeaderNoTitle();
const result = require("set").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default function GiftCodeRedeemModal(code) {
  code = code.code;
  let stateFromStores1 = code;
  let merged = Object.assign(code, Object.create(null));
  obj = stateFromStores1(589);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.get(stateFromStores1));
  obj1 = stateFromStores1(589);
  const items1 = [closure_4];
  stateFromStores1 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp6 = useGiftCodeErrorMessageDefault(code, stateFromStores1);
  if (null == stateFromStores1) {
    return null;
  } else {
    obj = {};
    let items2 = obj;
    obj = { headerTitle: null, headerLeft: null, render: null };
    obj[0] = closure_7;
    let tmp2Result = tmp2(5460);
    obj[1] = tmp2Result.getHeaderCloseButton(() => callback(4689).pop());
    obj[2] = function render(arg0) {
      obj = {};
      const merged = Object.assign(arg0);
      obj.user = stateFromStores1;
      return closure_1_5(closure_1_1(closure_1_2[6]), obj);
    };
    obj[obj.START] = obj;
    obj1 = { headerTitle: null, headerLeft: null, render: null };
    obj1[0] = closure_7;
    tmp2Result = tmp2(5460);
    obj1[1] = tmp2Result.getHeaderCloseButton(() => callback(4689).pop());
    obj1[2] = function render(arg0) {
      obj = {};
      const merged = Object.assign(arg0);
      obj.user = stateFromStores1;
      return closure_1_5(closure_1_1(closure_1_2[7]), obj);
    };
    obj[obj.SUCCESS] = obj1;
    const obj2 = { headerTitle: null, headerLeft: null, render: null };
    obj2[0] = closure_7;
    obj2[1] = tmp2(5460).getHeaderCloseButton(() => callback(4689).pop());
    obj2[2] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(12787), {});
    };
    obj[obj.ERROR] = obj2;
    if (null == stateFromStores) {
      return null;
    } else {
      const obj3 = { screens: null, initialRouteStack: null };
      obj3[0] = obj;
      if (null != tmp6) {
        const obj4 = { name: null, params: null };
        obj4[0] = items2.ERROR;
        const obj5 = { message: null };
        obj5[0] = tmp6;
        merged = Object.assign(merged);
        obj4[1] = obj5;
        items2 = [obj4];
        let items3 = items2;
      } else {
        const obj6 = { name: null, params: null };
        obj6[0] = items2.START;
        const obj7 = { giftCode: null };
        obj7[0] = stateFromStores;
        const merged1 = Object.assign(merged);
        obj6[1] = obj7;
        items3 = [obj6];
      }
      obj3[1] = items3;
      jsx(tmp2(5973).Navigator, { screens: null, initialRouteStack: null });
      const tmp7 = jsx;
    }
    const tmp2Result1 = tmp2(5460);
  }
};
export const GiftCodeModalScreens = obj;