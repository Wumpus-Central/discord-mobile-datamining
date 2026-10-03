// === Module 17500: LabelLayoutComponent ===

// Module 17500 (LabelLayoutComponent)
import c from "c" /* 576 */;
import Server from "Server" /* 1985 */;
import Input from "Input" /* 6423 */;
import ComponentStateContext from "ComponentStateContext" /* 7795 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ label, description, component, renderComponent } = arg0);
  const componentError = ComponentStateContext.useComponentError(component);
  if (component.type === Server.ComponentType.CHECKBOX) {
    if (cResult[0] === component) {
      if (cResult[1] === renderComponent) {
        let tmp15 = cResult[2];
      }
      return tmp15;
    }
    const renderComponentResult = renderComponent(component, "label-child");
    cResult[0] = component;
    cResult[1] = renderComponent;
    cResult[2] = renderComponentResult;
    tmp15 = renderComponentResult;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { width: "100%" };
      cResult[3] = obj3;
      let tmp5 = obj3;
    } else {
      tmp5 = cResult[3];
    }
    if (cResult[4] === component) {
      if (cResult[5] === renderComponent) {
        let tmp6 = cResult[6];
      }
      if (cResult[7] !== tmp6) {
        const obj4 = { style: tmp5, children: tmp6 };
        const tmp11 = <View style={tmp5}>{tmp6}</View>;
        cResult[7] = tmp6;
        cResult[8] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[8];
      }
      if (cResult[9] === component.required) {
        if (cResult[10] === description) {
          if (cResult[11] === componentError) {
            if (cResult[12] === label) {
              if (cResult[13] === tmp8) {
                let tmp12 = cResult[14];
              }
              return tmp12;
            }
          }
        }
      }
      const obj5 = { label, description, required: component.required, errorMessage: componentError, children: tmp8 };
      const tmp14 = jsx(Input.Input, { label, description, required: component.required, errorMessage: componentError, children: tmp8 });
      cResult[9] = component.required;
      cResult[10] = description;
      cResult[11] = componentError;
      cResult[12] = label;
      cResult[13] = tmp8;
      cResult[14] = tmp14;
      tmp12 = tmp14;
    }
    const renderComponentResult1 = renderComponent(component, "label-child");
    cResult[4] = component;
    cResult[5] = renderComponent;
    cResult[6] = renderComponentResult1;
    tmp6 = renderComponentResult1;
  }
}) : ((arg0) => {
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  const componentError = ComponentStateContext.useComponentError(component);
  if (component.type === Server.ComponentType.CHECKBOX) {
    let renderComponentResult = renderComponent(component, "label-child");
  } else {
    const obj2 = { label, description, required: component.required, errorMessage: componentError, children: null };
    const obj3 = { style: { width: "100%" }, children: renderComponent(component, "label-child") };
    obj2.children = <View style={{ width: "100%" }}>{renderComponent(component, "label-child")}</View>;
    renderComponentResult = jsx(Input.Input, { label, description, required: component.required, errorMessage: componentError, children: null });
  }
  return renderComponentResult;
});