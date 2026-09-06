// _runtime/00246_renderApplication.js
import _modDef38 from "metro/00038__.js";
import renderElementAll from "00114_renderElement.js";
import childrenDefault from "00251_children.js";
import RootTagContext from "00253_RootTagContext.js";
import frozenDefault from "00257_frozen.js";
import noop from "metro/00019__.js";

require = fn;
const module_247 = fn(247);
const jsx = fn(21).jsx;

export default function renderApplication(arg0) {
  ({ initialProps, rootTag, debugName, displayMode } = arg0);
  ({ RootComponent, WrapperComponent, rootViewStyle, isLogBox, useOffscreen } = arg0);
  _modDef38(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
  let obj = {
    rootTag,
    WrapperComponent,
    rootViewStyle,
    initialProps: null,
    internal_excludeLogBox: null,
    children: null,
  };
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
  let tmp4Result = jsx(childrenDefault, {});
  if (true === useOffscreen) {
    if (null != displayMode) {
      let str = "hidden";
      if (displayMode === frozenDefault.VISIBLE) {
        str = "visible";
      }
      obj = { mode: str, children: tmp4Result };
      tmp4Result = <noop.unstable_Activity mode={str}>{tmp4Result}</noop.unstable_Activity>;
    }
  }
  const obj1 = { element: tmp4Result, rootTag: null };
  const obj4 = renderElementAll;
  obj1.rootTag = RootTagContext.createRootTag(rootTag);
  obj4.renderElement(obj1);
}
