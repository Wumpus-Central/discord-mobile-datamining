// === Module 17567: ActionRowLayoutComponent ===

// Module 17567 (ActionRowLayoutComponent)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((components) => {
  components = components.components;
  let tmp2 = null;
  if (null != components) {
    tmp2 = null;
    if (0 !== components.length) {
      tmp2 = <View>{tmp(components)}</View>;
    }
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

export default tmp3;