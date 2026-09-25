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
const NavigatorHeader = fn(5931);
const headerTitle = NavigatorHeader.getHeaderNoTitle();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default function GiftCodeRedeemModal(code) {
  code = code.code;
  let giftCodeDebugOverride = code.giftCodeDebugOverride;
  let merged = Object.assign(code, Object.assign({ code: 0, giftCodeDebugOverride: 0 }));
  let obj = code(504);
  const items = [GiftCodeStore];
  if (giftCodeDebugOverride == null) {
    giftCodeDebugOverride = obj.useStateFromStores(items, () => GiftCodeStore.get(code));
  }
  const items1 = [UserStore];
  const stateFromStores = code(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp5 = useGiftCodeErrorMessageDefault(code, stateFromStores);
  if (null == stateFromStores) {
    return null;
  } else {
    closure_129_0 = stateFromStores;
    const obj2 = {};
    let items2 = obj;
    const obj3 = {
      headerTitle,
      headerLeft: tmp2(5931).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop()),
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.user = code;
        return jsx(GiftCodeRedeemStartDefault, {});
      },
    };
    obj2[obj.START] = obj3;
    const obj4 = { headerTitle, headerLeft: null, render: null };
    const tmp2Result4 = tmp2(5931);
    obj4.headerLeft = tmp2(5931).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
    obj4.render = function render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.user = code;
      return jsx(GiftCodeRedeemSuccessDefault, {});
    };
    obj2[obj.SUCCESS] = obj4;
    const obj5 = { headerTitle, headerLeft: null, render: null };
    const tmp2Result5 = tmp2(5931);
    obj5.headerLeft = tmp2(5931).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
    obj5.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(GiftCodeRedeemErrorDefault, {});
    };
    obj2[obj.ERROR] = obj5;
    if (null == giftCodeDebugOverride) {
      return null;
    } else {
      const obj6 = { screens: obj2, initialRouteStack: null };
      if (null != tmp5) {
        const obj7 = { name: items2.ERROR, params: null };
        const obj8 = { message: tmp5 };
        merged = Object.assign(merged);
        obj7.params = obj8;
        items2 = [obj7];
        let items3 = items2;
      } else {
        const obj9 = { name: items2.START, params: null };
        const obj10 = { giftCode: giftCodeDebugOverride };
        const merged1 = Object.assign(merged);
        obj9.params = obj10;
        items3 = [obj9];
      }
      obj6.initialRouteStack = items3;
      jsx(tmp2(6416).Navigator, { screens: obj2, initialRouteStack: null });
    }
    const tmp2Result6 = tmp2(5931);
  }
  const tmp2Result = code(504);
}
export { GiftCodeModalScreens };
