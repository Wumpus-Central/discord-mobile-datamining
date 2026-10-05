// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GiftCodeRedeemStartDefault from "GiftCodeRedeemStart.tsx";
import useGiftCodeErrorMessageDefault from "useGiftCodeErrorMessage.tsx";
import GiftCodeRedeemSuccessDefault from "GiftCodeRedeemSuccess.tsx";
import GiftCodeRedeemErrorDefault from "GiftCodeRedeemError.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import GiftCodeStore from "../../../../stores/GiftCodeStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, code;

const f106376 = () => {
  const arr = ModalActionCreatorsDefault;
  return arr.pop();
};
const f106378 = () => {
  const arr = ModalActionCreatorsDefault;
  return arr.pop();
};
const f106380 = () => {
  const arr = ModalActionCreatorsDefault;
  return arr.pop();
};
function render(arg0) {
  GiftCodeRedeemErrorDefault;
  const merged = Object.assign(arg0);
  return <tmp />;
}
let closure_3 = ["code", "giftCodeDebugOverride"];
const jsx = Fragment.jsx;
const GiftCodeModalScreens = { START: "giftcode-start", SUCCESS: "giftcode-success", ERROR: "giftcode-error" };
const headerTitle = NavigatorHeader.getHeaderNoTitle();
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (code) => {
      let closure_0;
      let currentUser;
      let obj10;
      let obj8;
      let stateFromStores;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp6;
      let tmpResult6;
      let tmpResult7;
      let tmpResult8;
      const obj = require("react");
      const cResult = obj.c(18);
      if (cResult[0] !== code) {
        code = code.code;
        _require = code;
        const giftCodeDebugOverride = code.giftCodeDebugOverride;
        const tmp9 = _objectWithoutProperties(code, closure_3);
        cResult[0] = code;
        cResult[1] = code;
        cResult[2] = giftCodeDebugOverride;
        cResult[3] = tmp9;
        tmp6 = tmp9;
        stateFromStores = giftCodeDebugOverride;
      } else {
        _require = cResult[1];
        stateFromStores = cResult[2];
        tmp6 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GiftCodeStore];
        cResult[4] = items;
        tmp10 = items;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== tmp4) {
        const fn = function v() {
          return GiftCodeStore.get(closure_0);
        };
        cResult[5] = tmp4;
        cResult[6] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[6];
      }
      const tmpResult = require("get initialized");
      if (stateFromStores == null) {
        stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        const fn2 = function _() {
          return currentUser.getCurrentUser();
        };
        cResult[7] = items1;
        cResult[8] = fn2;
        tmp14 = fn2;
        tmp13 = items1;
      } else {
        tmp13 = cResult[7];
        tmp14 = cResult[8];
      }
      const tmpResult5 = require("get initialized");
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp13, tmp14);
      const tmp17 = useGiftCodeErrorMessageDefault(tmp4, stateFromStores1);
      if (null == stateFromStores1) {
        return null;
      } else {
        let tmp18;
        if (cResult[9] !== stateFromStores1) {
          const obj2 = {};
          const START = obj.START;
          const obj3 = {
            headerTitle,
            headerLeft: tmpResult6.getHeaderCloseButton(f106376),
            render(arg0) {
              GiftCodeRedeemStartDefault;
              const merged = Object.assign(arg0);
              return <tmp user={stateFromStores} />;
            },
          };
          obj2[START] = obj3;
          tmpResult6 = require("NavigatorHeader");
          const SUCCESS = obj.SUCCESS;
          const obj4 = {
            headerTitle,
            headerLeft: tmpResult7.getHeaderCloseButton(f106378),
            render(arg0) {
              GiftCodeRedeemSuccessDefault;
              const merged = Object.assign(arg0);
              return <tmp user={stateFromStores} />;
            },
          };
          obj2[SUCCESS] = obj4;
          tmpResult7 = require("NavigatorHeader");
          const ERROR = obj.ERROR;
          const obj5 = { headerTitle, headerLeft: tmpResult8.getHeaderCloseButton(f106380), render };
          obj2[ERROR] = obj5;
          cResult[9] = stateFromStores1;
          cResult[10] = obj2;
          tmp18 = obj2;
          tmpResult8 = require("NavigatorHeader");
        } else {
          tmp18 = cResult[10];
        }
        let tmp21 = null;
        if (null != stateFromStores) {
          let items3;
          if (cResult[11] === tmp17) {
            if (cResult[12] === stateFromStores) {
              let tmp22;
              if (cResult[13] === tmp6) {
                tmp22 = cResult[14];
              }
              if (cResult[15] === tmp18) {
                let tmp31;
                if (cResult[16] === tmp22) {
                  tmp31 = cResult[17];
                }
                tmp21 = tmp31;
              }
              const tmp33 = jsx(require("Navigator").Navigator, { screens: tmp18, initialRouteStack: tmp22 });
              cResult[15] = tmp18;
              cResult[16] = tmp22;
              cResult[17] = tmp33;
              tmp31 = tmp33;
            }
          }
          if (null != tmp17) {
            const obj7 = { name: obj.ERROR, params: obj8 };
            obj8 = { message: tmp17 };
            const merged = Object.assign(tmp6);
            const items2 = [obj7];
            items3 = items2;
          } else {
            const obj9 = { name: obj.START, params: obj10 };
            obj10 = { giftCode: stateFromStores };
            const merged1 = Object.assign(tmp6);
            items3 = [obj9];
          }
          cResult[11] = tmp17;
          cResult[12] = stateFromStores;
          cResult[13] = tmp6;
          cResult[14] = items3;
          tmp22 = items3;
        }
        return tmp21;
      }
    }
  : (code) => {
      let currentUser;
      let obj10;
      let obj8;
      let tmp2Result4;
      let tmp2Result5;
      let tmp2Result6;
      code = code.code;
      let giftCodeDebugOverride = code.giftCodeDebugOverride;
      let merged = Object.assign(code, Object.assign({ code: 0, giftCodeDebugOverride: 0 }));
      const obj = code(504);
      const items = [GiftCodeStore];
      if (giftCodeDebugOverride == null) {
        giftCodeDebugOverride = obj.useStateFromStores(items, () => GiftCodeStore.get(code));
      }
      const items1 = [UserStore];
      const tmp2Result = code(504);
      const stateFromStores = tmp2Result.useStateFromStores(items1, () => currentUser.getCurrentUser());
      const tmp5 = useGiftCodeErrorMessageDefault(code, stateFromStores);
      if (null == stateFromStores) {
        return null;
      } else {
        const obj2 = {};
        const START = obj.START;
        const obj3 = {
          headerTitle,
          headerLeft: tmp2Result4.getHeaderCloseButton(f106376),
          render(arg0) {
            GiftCodeRedeemStartDefault;
            const merged = Object.assign(arg0);
            return <tmp user={stateFromStores} />;
          },
        };
        obj2[START] = obj3;
        tmp2Result4 = code(6010);
        const SUCCESS = obj.SUCCESS;
        const obj4 = {
          headerTitle,
          headerLeft: tmp2Result5.getHeaderCloseButton(f106378),
          render(arg0) {
            GiftCodeRedeemSuccessDefault;
            const merged = Object.assign(arg0);
            return <tmp user={stateFromStores} />;
          },
        };
        obj2[SUCCESS] = obj4;
        tmp2Result5 = code(6010);
        const ERROR = obj.ERROR;
        const obj5 = { headerTitle, headerLeft: tmp2Result6.getHeaderCloseButton(f106380), render };
        obj2[ERROR] = obj5;
        let tmp6Result = null;
        tmp2Result6 = code(6010);
        if (null != giftCodeDebugOverride) {
          let items3;
          const Navigator = tmp2(6496).Navigator;
          if (null != tmp5) {
            const obj7 = { name: obj.ERROR, params: obj8 };
            obj8 = { message: tmp5 };
            const merged1 = Object.assign(merged);
            const items2 = [obj7];
            items3 = items2;
          } else {
            const obj9 = { name: obj.START, params: obj10 };
            obj10 = { giftCode: giftCodeDebugOverride };
            const merged2 = Object.assign(merged);
            items3 = [obj9];
          }
          tmp6Result = <Navigator screens={obj2} initialRouteStack={items3} />;
        }
        return tmp6Result;
      }
    };
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default tmp3;
export { GiftCodeModalScreens };
