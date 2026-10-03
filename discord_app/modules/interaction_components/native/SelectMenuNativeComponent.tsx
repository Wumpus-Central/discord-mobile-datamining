// === Module 15588: SelectMenuNativeComponent ===

// Module 15588 (SelectMenuNativeComponent)
import c from "c" /* 576 */;
import SelectActionComponentViewNativeComponentDefault from "SelectActionComponentViewNativeComponent" /* 15589 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["model"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/SelectMenuNativeComponent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((model) => {
  const cResult = c.c(9);
  if (cResult[0] !== model) {
    model = model.model;
    const tmp7 = _objectWithoutProperties(model, closure_3);
    cResult[0] = model;
    cResult[1] = model;
    cResult[2] = tmp7;
    let tmp4 = tmp7;
    let tmp3 = model;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    const _JSON = JSON;
    const json = JSON.stringify(tmp3);
    cResult[3] = tmp3;
    cResult[4] = json;
    let tmp8 = json;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { width: "100%" };
    cResult[5] = obj2;
    let tmp11 = obj2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp8) {
      let tmp12 = cResult[8];
    }
    return tmp12;
  }
  const obj3 = {};
  const merged = Object.assign(tmp4);
  obj3.model = tmp8;
  obj3.style = tmp11;
  const tmp15 = jsx(SelectActionComponentViewNativeComponentDefault, {});
  cResult[6] = tmp4;
  cResult[7] = tmp8;
  cResult[8] = tmp15;
  tmp12 = tmp15;
}) : ((model) => {
  const merged = Object.assign(model, Object.assign({ model: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.model = JSON.stringify(model.model);
  obj.style = { width: "100%" };
  return jsx(SelectActionComponentViewNativeComponentDefault, {});
});