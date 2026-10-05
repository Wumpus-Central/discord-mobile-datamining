// discord_app/modules/interaction_components/native/SelectMenuNativeComponent.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import SelectActionComponentViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/SelectActionComponentViewNativeComponent.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let model;

let closure_3 = ["model"];
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (model) => {
      let tmp11;
      let tmp3;
      let tmp4;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(9);
      if (cResult[0] !== model) {
        model = model.model;
        const tmp7 = _objectWithoutProperties(model, closure_3);
        cResult[0] = model;
        cResult[1] = model;
        cResult[2] = tmp7;
        tmp4 = tmp7;
        tmp3 = model;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] !== tmp3) {
        const _JSON = JSON;
        const json = JSON.stringify(tmp3);
        cResult[3] = tmp3;
        cResult[4] = json;
        tmp8 = json;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { width: "100%" };
        cResult[5] = obj2;
        tmp11 = obj2;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        let tmp12;
        if (cResult[7] === tmp8) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
      SelectActionComponentViewNativeComponentDefault;
      const merged = Object.assign(tmp4);
      const tmp15 = <tmp13 model={tmp8} style={tmp11} />;
      cResult[6] = tmp4;
      cResult[7] = tmp8;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
  : (model) => {
      model = model.model;
      const merged = Object.assign(model, Object.assign({ model: 0 }));
      SelectActionComponentViewNativeComponentDefault;
      const merged1 = Object.assign(merged);
      return <tmp2 model={JSON.stringify(model)} style={{ width: "100%" }} />;
    };
const result = size.fileFinishedImporting("modules/interaction_components/native/SelectMenuNativeComponent.tsx");

export default tmp3;
