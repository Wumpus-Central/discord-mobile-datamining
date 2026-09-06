// === Module 246: renderApplication ===

// Module 246 (renderApplication)
import _modDef38 from "module_38" /* 38 */;
import renderElementAll from "renderElement" /* 114 */;
import childrenDefault from "children" /* 251 */;
import RootTagContext from "RootTagContext" /* 253 */;
import noop from "module_19" /* 19 */;

const frozenDefault = tmp(257);
require = fn;
const module_247 = fn(247);
const jsx = fn(21).jsx;

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
  obj.initialProps = frozen;
  obj.internal_excludeLogBox = isLogBox;
  obj = {};
  const merged = Object.assign(initialProps);
  obj.rootTag = rootTag;
  obj.children = <RootComponent />;
  let tmp4Result = tmp4(childrenDefault, obj);
  if (true === useOffscreen) {
    if (null != displayMode) {
      let str = "hidden";
      if (displayMode === frozenDefault.VISIBLE) {
        str = "visible";
      }
      obj = { mode: str, children: tmp4Result };
      tmp4Result = tmp4(noop.unstable_Activity, obj);
    }
  }
  const obj1 = { element: tmp4Result, rootTag: null };
  const obj4 = renderElementAll;
  obj1.rootTag = RootTagContext.createRootTag(rootTag);
  obj4.renderElement(obj1);
};