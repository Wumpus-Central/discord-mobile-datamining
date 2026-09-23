// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GiftCodeRedeemStartDefault from "GiftCodeRedeemStart.tsx";
import useGiftCodeErrorMessageDefault from "useGiftCodeErrorMessage.tsx";
import GiftCodeRedeemSuccessDefault from "GiftCodeRedeemSuccess.tsx";
import GiftCodeRedeemErrorDefault from "GiftCodeRedeemError.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GiftCodeStore from "../../../../stores/GiftCodeStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const GiftCodeModalScreens = { START: "giftcode-start", SUCCESS: "giftcode-success", ERROR: "giftcode-error" };
const NavigatorHeader = fn(5927);
const headerTitle = NavigatorHeader.getHeaderNoTitle();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default function GiftCodeRedeemModal(code) {
  code = code.code;
  let merged = Object.assign(code, Object.assign({ code: 0 }));
  let obj = code(504);
  const items = [GiftCodeStore];
  const stateFromStores = obj.useStateFromStores(items, () => GiftCodeStore.get(code));
  const items1 = [UserStore];
  const stateFromStores1 = code(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp6 = useGiftCodeErrorMessageDefault(code, stateFromStores1);
  if (null == stateFromStores1) {
    return null;
  } else {
    closure_129_0 = stateFromStores1;
    const obj3 = {};
    let items2 = obj;
    const obj4 = {
      headerTitle,
      headerLeft: tmp2(5927).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop()),
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.user = code;
        return jsx(GiftCodeRedeemStartDefault, {});
      },
    };
    obj3[obj.START] = obj4;
    const obj5 = { headerTitle, headerLeft: null, render: null };
    const tmp2Result = tmp2(5927);
    obj5.headerLeft = tmp2(5927).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
    obj5.render = function render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.user = code;
      return jsx(GiftCodeRedeemSuccessDefault, {});
    };
    obj3[obj.SUCCESS] = obj5;
    const obj6 = { headerTitle, headerLeft: null, render: null };
    const tmp2Result3 = tmp2(5927);
    obj6.headerLeft = tmp2(5927).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
    obj6.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(GiftCodeRedeemErrorDefault, {});
    };
    obj3[obj.ERROR] = obj6;
    if (null == stateFromStores) {
      return null;
    } else {
      const obj7 = { screens: obj3, initialRouteStack: null };
      if (null != tmp6) {
        const obj8 = { name: items2.ERROR, params: null };
        const obj9 = { message: tmp6 };
        merged = Object.assign(merged);
        obj8.params = obj9;
        items2 = [obj8];
        let items3 = items2;
      } else {
        const obj10 = { name: items2.START, params: null };
        const obj11 = { giftCode: stateFromStores };
        const merged1 = Object.assign(merged);
        obj10.params = obj11;
        items3 = [obj10];
      }
      obj7.initialRouteStack = items3;
      jsx(tmp2(7331).Navigator, { screens: obj3, initialRouteStack: null });
    }
    const tmp2Result4 = tmp2(5927);
  }
  const obj2 = code(504);
}
export { GiftCodeModalScreens };
