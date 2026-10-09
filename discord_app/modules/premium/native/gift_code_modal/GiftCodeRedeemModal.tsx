// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GiftCodeRedeemStartDefault from "GiftCodeRedeemStart.tsx";
import useGiftCodeErrorMessageDefault from "useGiftCodeErrorMessage.tsx";
import GiftCodeRedeemSuccessDefault from "GiftCodeRedeemSuccess.tsx";
import GiftCodeRedeemErrorDefault from "GiftCodeRedeemError.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GiftCodeStore from "../../../../stores/GiftCodeStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["code", "giftCodeDebugOverride"];
const jsx = fn(21).jsx;
const GiftCodeModalScreens = { START: "giftcode-start", SUCCESS: "giftcode-success", ERROR: "giftcode-error" };
const NavigatorHeader = fn(6205);
const headerTitle = NavigatorHeader.getHeaderNoTitle();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GiftCodeRedeemModal(code) {
      let Navigator = _require;
      let tmp = dependencyMap;
      const obj = require("c");
      const cResult = obj.c(18);
      if (cResult[0] !== code) {
        code = code.code;
        _require = code;
        const giftCodeDebugOverride = code.giftCodeDebugOverride;
        const tmp8 = _objectWithoutProperties(code, closure_3);
        cResult[0] = code;
        cResult[1] = code;
        cResult[2] = giftCodeDebugOverride;
        cResult[3] = tmp8;
        let tmp5 = tmp8;
        let stateFromStores = giftCodeDebugOverride;
      } else {
        _require = cResult[1];
        stateFromStores = cResult[2];
        tmp5 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GiftCodeStore];
        cResult[4] = items;
        let tmp9 = items;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== tmp3) {
        const fn = function v() {
          return GiftCodeStore.get(closure_0);
        };
        cResult[5] = tmp3;
        cResult[6] = fn;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[6];
      }
      if (stateFromStores == null) {
        stateFromStores = NavigatorResult.useStateFromStores(tmp9, tmp11);
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        const fn2 = function _() {
          return currentUser.getCurrentUser();
        };
        cResult[7] = items1;
        cResult[8] = fn2;
        let tmp13 = fn2;
        let tmp12 = items1;
      } else {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
      }
      NavigatorResult = Navigator(504);
      const stateFromStores1 = Navigator(504).useStateFromStores(tmp12, tmp13);
      const tmp16 = useGiftCodeErrorMessageDefault(tmp3, stateFromStores1);
      if (null == stateFromStores1) {
        return null;
      } else {
        if (cResult[9] !== stateFromStores1) {
          closure_129_0 = stateFromStores1;
          const obj2 = {};
          const obj3 = {
            headerTitle,
            headerLeft: Navigator(6205).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop()),
            render(arg0) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.user = code;
              return jsx(GiftCodeRedeemStartDefault, {});
            },
          };
          obj2[obj.START] = obj3;
          const obj4 = { headerTitle, headerLeft: null, render: null };
          const NavigatorResult2 = Navigator(6205);
          obj4.headerLeft = Navigator(6205).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
          obj4.render = function render(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.user = code;
            return jsx(GiftCodeRedeemSuccessDefault, {});
          };
          obj2[obj.SUCCESS] = obj4;
          const obj5 = { headerTitle, headerLeft: null, render: null };
          const NavigatorResult3 = Navigator(6205);
          obj5.headerLeft = Navigator(6205).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
          obj5.render = function render(arg0) {
            const merged = Object.assign(arg0);
            return jsx(GiftCodeRedeemErrorDefault, {});
          };
          obj2[obj.ERROR] = obj5;
          cResult[9] = stateFromStores1;
          cResult[10] = obj2;
          let tmp17 = obj2;
          const NavigatorResult4 = Navigator(6205);
        } else {
          tmp17 = cResult[10];
        }
        if (null == stateFromStores) {
          return null;
        } else {
          if (cResult[11] === tmp16) {
            if (cResult[12] === stateFromStores) {
              if (cResult[13] === tmp5) {
                if (cResult[15] === tmp17) {
                }
                Navigator = Navigator(6686).Navigator;
                const obj6 = { screens: tmp17, initialRouteStack: cResult[14] };
                tmp = <Navigator screens={tmp17} initialRouteStack={cResult[14]} />;
                cResult[15] = tmp17;
                cResult[16] = cResult[14];
                cResult[17] = tmp;
              }
            }
          }
          if (null != tmp16) {
            const obj7 = { name: obj.ERROR, params: null };
            const obj8 = { message: tmp16 };
            const merged = Object.assign(tmp5);
            obj7.params = obj8;
            const items2 = [obj7];
            let items3 = items2;
          } else {
            const obj9 = { name: obj.START, params: null };
            const obj10 = { giftCode: stateFromStores };
            const merged1 = Object.assign(tmp5);
            obj9.params = obj10;
            items3 = [obj9];
          }
          cResult[11] = tmp16;
          cResult[12] = stateFromStores;
          cResult[13] = tmp5;
          cResult[14] = items3;
        }
      }
      const NavigatorResult1 = Navigator(504);
    }
  : function GiftCodeRedeemModal(code) {
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
          headerLeft: tmp2(6205).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop()),
          render(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.user = code;
            return jsx(GiftCodeRedeemStartDefault, {});
          },
        };
        obj2[obj.START] = obj3;
        const obj4 = { headerTitle, headerLeft: null, render: null };
        const tmp2Result4 = tmp2(6205);
        obj4.headerLeft = tmp2(6205).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
        obj4.render = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.user = code;
          return jsx(GiftCodeRedeemSuccessDefault, {});
        };
        obj2[obj.SUCCESS] = obj4;
        const obj5 = { headerTitle, headerLeft: null, render: null };
        const tmp2Result5 = tmp2(6205);
        obj5.headerLeft = tmp2(6205).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
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
          jsx(tmp2(6686).Navigator, { screens: obj2, initialRouteStack: null });
        }
        const tmp2Result6 = tmp2(6205);
      }
      const tmp2Result = code(504);
    };
export { GiftCodeModalScreens };
