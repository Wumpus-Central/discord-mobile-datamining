// discord_app/modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === arg0) {
        let tmp2;
        if (cResult[1] === arg1) {
          tmp2 = cResult[2];
        }
        return tmp2;
      }
      const fn = function o() {
        const routes = state.getState().routes;
        const findIndexResult = routes.findIndex((name) => name.name === closure_1_1);
        if (findIndexResult >= 0) {
          state.pop(routes.length - findIndexResult - 1);
        } else {
          state.popToTop();
        }
      };
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = [arg0, arg1];
      return react.useCallback(() => {
        const routes = state.getState().routes;
        const findIndexResult = routes.findIndex((name) => name.name === closure_1_1);
        if (findIndexResult >= 0) {
          state.pop(routes.length - findIndexResult - 1);
        } else {
          state.popToTop();
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx");

export const useConnectRetry = tmp2;
