// discord_app/modules/premium/native/useStoreConnectionErrorAlert.tsx
import intl3 from "../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let stateFromStores;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let obj = stateFromStores(576);
      const cResult = obj.c(5);
      const tmp = stateFromStores;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [IAPStore];
        const fn = function s() {
          return IAPStore.hasConnectionError();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function c() {
          let intl;
          let intl2;
          if (stateFromStores) {
            const obj = { title: intl.string(intl3.t["U+H+kd"]), body: intl2.string(intl3.t.Q9OYlM) };
            const show = AlertActionCreatorsDefault.show;
            AlertActionCreatorsDefault;
            intl = intl3.intl;
            intl2 = intl3.intl;
            show(obj);
          }
        };
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        cResult[4] = items1;
        tmp9 = items1;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = react.useEffect(tmp8, tmp9);
    }
  : () => {
      let stateFromStores;
      let obj = stateFromStores(504);
      const items = [IAPStore];
      stateFromStores = obj.useStateFromStores(items, () => IAPStore.hasConnectionError());
      const items1 = [stateFromStores];
      const effect = react.useEffect(() => {
        let intl;
        let intl2;
        if (stateFromStores) {
          const obj = { title: intl.string(intl3.t["U+H+kd"]), body: intl2.string(intl3.t.Q9OYlM) };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl3.intl;
          intl2 = intl3.intl;
          show(obj);
        }
      }, items1);
    };
const result = size.fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default tmp2;
