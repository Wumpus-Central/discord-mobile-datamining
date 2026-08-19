// === Module 246: renderApplication ===

// Module 246 (renderApplication)
import _modDef38 from "module_38" /* 38 */;
import renderElementAll from "renderElement" /* 114 */;
import childrenDefault from "children" /* 251 */;
import RootTagContext from "RootTagContext" /* 253 */;
import frozenDefault from "frozen" /* 257 */;
import noop from "noop" /* 19 */;
import module_247 from "module_247" /* 247 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;

export default function renderApplication(arg0) {
  ({ initialProps, rootTag, debugName, displayMode } = arg0);
  ({ RootComponent, WrapperComponent, rootViewStyle, isLogBox, useOffscreen } = arg0);
  _modDef38(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
  let obj = { rootTag, WrapperComponent, rootViewStyle, initialProps: null, internal_excludeLogBox: null, children: null };
  let frozen = initialProps;
  if (initialProps == null) {
    const _Object = Object;
    frozen = Object.freeze({});
  }
  obj[3] = frozen;
  obj[4] = isLogBox;
  obj = {};
  const merged = Object.assign(initialProps);
  obj.rootTag = rootTag;
  obj[5] = <RootComponent />;
  let tmp4Result = jsx(childrenDefault, {});
  if (true === useOffscreen) {
    if (null != displayMode) {
      let str = "hidden";
      if (displayMode === frozenDefault.VISIBLE) {
        str = "visible";
      }
      obj = { mode: null, children: null };
      obj[0] = str;
      obj[1] = tmp4Result;
      tmp4Result = <unstable_Activity.unstable_Activity mode={null}>{null}</unstable_Activity.unstable_Activity>;
    }
  }
  obj1 = { element: tmp4Result, rootTag: null };
  const obj4 = renderElementAll;
  obj1[1] = RootTagContext.createRootTag(rootTag);
  obj4.renderElement(obj1);
};