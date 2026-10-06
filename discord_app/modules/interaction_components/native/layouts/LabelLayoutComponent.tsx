// === Module 17569: LabelLayoutComponent ===

// Module 17569 (LabelLayoutComponent)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Server from "Server" /* 1985 */;
import Input2 from "Input" /* 6430 */;
import ComponentStateContext from "ComponentStateContext" /* 7806 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let component;
  let description;
  let label;
  let renderComponent;
  const obj = react2;
  const cResult = obj.c(15);
  ({ label, description, component, renderComponent } = arg0);
  const obj2 = ComponentStateContext;
  const componentError = obj2.useComponentError(component);
  if (component.type === Server.ComponentType.CHECKBOX) {
    if (cResult[0] === component) {
      let tmp15;
      if (cResult[1] === renderComponent) {
        tmp15 = cResult[2];
      }
      return tmp15;
    }
    const renderComponentResult = renderComponent(component, "label-child");
    cResult[0] = component;
    cResult[1] = renderComponent;
    cResult[2] = renderComponentResult;
    tmp15 = renderComponentResult;
  } else {
    let tmp5;
    const _Symbol = Symbol;
    const required = component.required;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { width: "100%" };
      cResult[3] = obj3;
      tmp5 = obj3;
    } else {
      tmp5 = cResult[3];
    }
    if (cResult[4] === component) {
      let tmp6;
      let tmp8;
      if (cResult[5] === renderComponent) {
        tmp6 = cResult[6];
      }
      if (cResult[7] !== tmp6) {
        const tmp11 = <View style={tmp5}>{tmp6}</View>;
        cResult[7] = tmp6;
        cResult[8] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[8];
      }
      if (cResult[9] === component.required) {
        if (cResult[10] === description) {
          if (cResult[11] === componentError) {
            if (cResult[12] === label) {
              let tmp12;
              if (cResult[13] === tmp8) {
                tmp12 = cResult[14];
              }
              return tmp12;
            }
          }
        }
      }
      const tmp14 = jsx(Input2.Input, { label, description, required, errorMessage: componentError, children: tmp8 });
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
  let component;
  let description;
  let label;
  let renderComponent;
  let renderComponentResult;
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  const obj = ComponentStateContext;
  const componentError = obj.useComponentError(component);
  if (component.type === Server.ComponentType.CHECKBOX) {
    renderComponentResult = renderComponent(component, "label-child");
  } else {
    ({ style: { width: "100%" }, children: renderComponent(component, "label-child") });
    const Input = Input2.Input;
    renderComponentResult = <Input label={label} description={description} required={component.required} errorMessage={componentError}>{null}</Input>;
  }
  return renderComponentResult;
});
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default tmp3;