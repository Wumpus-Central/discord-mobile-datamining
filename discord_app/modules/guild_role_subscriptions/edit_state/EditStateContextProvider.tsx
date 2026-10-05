// discord_app/modules/guild_role_subscriptions/edit_state/EditStateContextProvider.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let children;

let closure_2 = ["children"];
const jsx = Fragment.jsx;
const redux = react.createContext(undefined);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      const context = react.useContext(redux);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("No edit state; are you missing an <EditStateContextProvider />?");
        throw error;
      } else {
        return context;
      }
    }
  : function () {
      const context = react.useContext(redux);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("No edit state; are you missing an <EditStateContextProvider />?");
        throw error;
      } else {
        return context;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let tmp2;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] !== children) {
        children = children.children;
        const tmp6 = _objectWithoutProperties(children, closure_2);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = tmp6;
        tmp3 = tmp6;
        tmp2 = children;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      if (cResult[3] === tmp2) {
        let tmp7;
        if (cResult[4] === tmp3) {
          tmp7 = cResult[5];
        }
        return tmp7;
      }
      const tmp8 = <redux.Provider value={tmp3}>{tmp2}</redux.Provider>;
      cResult[3] = tmp2;
      cResult[4] = tmp3;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (children) => (
      <redux.Provider value={Object.assign(children, Object.assign({ children: 0 }))}>
        {children.children}
      </redux.Provider>
    );
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/EditStateContextProvider.tsx");

export const useEditStateContext = tmp2;
export const EditStateContextProvider = tmp3;
