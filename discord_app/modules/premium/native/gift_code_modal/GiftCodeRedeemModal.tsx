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
const NavigatorHeader = fn(5624);
const headerTitle = NavigatorHeader.getHeaderNoTitle();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default function GiftCodeRedeemModal(code) {
  code = code.code;
  let merged = Object.assign(code, Object.assign({ code: 0 }));
  let screens = code(504);
  const items = [GiftCodeStore];
  const stateFromStores = screens.useStateFromStores(items, () => GiftCodeStore.get(code));
  let obj1 = code(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp6 = useGiftCodeErrorMessageDefault(code, stateFromStores1);
  if (null == stateFromStores1) {
    return null;
  } else {
    closure_129_0 = stateFromStores1;
    screens = {};
    let items2 = screens;
    screens = { headerTitle, headerLeft: null, render: null };
    let tmp2Result = tmp2(5624);
    screens.headerLeft = tmp2Result.getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
    screens.render = function render(arg0) {
      obj = {};
      const merged = Object.assign(arg0);
      obj.user = code;
      return jsx(GiftCodeRedeemStartDefault, {});
    };
    screens[screens.START] = screens;
    obj1 = { headerTitle, headerLeft: null, render: null };
    tmp2Result = tmp2(5624);
    obj1.headerLeft = tmp2Result.getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
    obj1.render = function render(arg0) {
      obj = {};
      const merged = Object.assign(arg0);
      obj.user = code;
      return jsx(GiftCodeRedeemSuccessDefault, {});
    };
    screens[screens.SUCCESS] = obj1;
    const obj2 = {
      headerTitle,
      headerLeft: tmp2(5624).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop()),
      render(arg0) {
        const merged = Object.assign(arg0);
        return jsx(GiftCodeRedeemErrorDefault, {});
      },
    };
    screens[screens.ERROR] = obj2;
    if (null == stateFromStores) {
      return null;
    } else {
      const obj3 = { screens, initialRouteStack: null };
      if (null != tmp6) {
        const obj4 = { name: items2.ERROR, params: null };
        const obj5 = { message: tmp6 };
        merged = Object.assign(merged);
        obj4.params = obj5;
        items2 = [obj4];
        let items3 = items2;
      } else {
        const obj6 = { name: items2.START, params: null };
        const obj7 = { giftCode: stateFromStores };
        const merged1 = Object.assign(merged);
        obj6.params = obj7;
        items3 = [obj6];
      }
      obj3.initialRouteStack = items3;
      jsx(tmp2(7000).Navigator, { screens, initialRouteStack: null });
    }
    const tmp2Result1 = tmp2(5624);
  }
}
export { GiftCodeModalScreens };
