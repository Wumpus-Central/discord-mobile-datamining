// === Module 18075: ActionRowLayoutComponent ===

// Module 18075 (ActionRowLayoutComponent)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ActionRowLayoutComponent(arg0) {
  const cResult = c.c(5);
  ({ components, renderComponents } = arg0);
  let tmp2 = null;
  if (null != components) {
    tmp2 = null;
    if (0 !== components.length) {
      if (cResult[0] === components) {
        if (cResult[1] === renderComponents) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] !== tmp3) {
          const obj2 = { children: tmp3 };
          const tmp8 = <View>{tmp3}</View>;
          cResult[3] = tmp3;
          cResult[4] = tmp8;
        }
      }
      const renderComponentsResult = renderComponents(components);
      cResult[0] = components;
      cResult[1] = renderComponents;
      cResult[2] = renderComponentsResult;
      tmp3 = renderComponentsResult;
    }
  }
  return tmp2;
}) : (function ActionRowLayoutComponent(components) {
  components = components.components;
  let tmp2 = null;
  if (null != components) {
    tmp2 = null;
    if (0 !== components.length) {
      const obj = { children: tmp(components) };
      tmp2 = <View>{tmp(components)}</View>;
    }
  }
  return tmp2;
});