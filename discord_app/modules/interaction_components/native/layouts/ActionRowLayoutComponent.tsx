// discord_app/modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let components;
      let renderComponents;
      const obj = react2;
      const cResult = obj.c(5);
      ({ components, renderComponents } = arg0);
      let tmp2 = null;
      if (null != components) {
        tmp2 = null;
        if (0 !== components.length) {
          if (cResult[0] === components) {
            let tmp3;
            let tmp5;
            if (cResult[1] === renderComponents) {
              tmp3 = cResult[2];
            }
            if (cResult[3] !== tmp3) {
              const tmp8 = <View>{tmp3}</View>;
              cResult[3] = tmp3;
              cResult[4] = tmp8;
              tmp5 = tmp8;
            } else {
              tmp5 = cResult[4];
            }
            tmp2 = tmp5;
          }
          const renderComponentsResult = renderComponents(components);
          cResult[0] = components;
          cResult[1] = renderComponents;
          cResult[2] = renderComponentsResult;
          tmp3 = renderComponentsResult;
        }
      }
      return tmp2;
    }
  : (components) => {
      components = components.components;
      let tmp2 = null;
      if (null != components) {
        tmp2 = null;
        if (0 !== components.length) {
          tmp2 = <View>{tmp(components)}</View>;
        }
      }
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

export default tmp3;
