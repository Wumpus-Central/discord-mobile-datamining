// === Module 15712: SelectMenuNativeComponent ===

// Module 15712 (SelectMenuNativeComponent)
import SelectActionComponentViewNativeComponentDefault from "SelectActionComponentViewNativeComponent" /* 15713 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/SelectMenuNativeComponent.tsx");

export default function SelectMenuNativeComponent(model) {
  const merged = Object.assign(model, Object.assign({ model: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.model = JSON.stringify(model.model);
  obj.style = { width: "100%" };
  return jsx(SelectActionComponentViewNativeComponentDefault, {});
};