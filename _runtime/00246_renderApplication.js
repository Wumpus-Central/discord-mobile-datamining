// === Module 246: renderApplication ===

// Module 246 (renderApplication)
import _modDef38 from "module_38" /* 38 */;
import renderElementAll from "renderElement" /* 114 */;
import childrenDefault from "children" /* 251 */;
import RootTagContext from "RootTagContext" /* 253 */;
import frozenDefault from "frozen" /* 257 */;
import noop from "module_19" /* 19 */;

require = fn;
const module_247 = fn(247);
const jsx = fn(21).jsx;

export default function renderApplication(arg0) {
  ({ initialProps, rootTag, debugName, displayMode } = arg0);
  ({ RootComponent, WrapperComponent, rootViewStyle, isLogBox, useOffscreen } = arg0);
  _modDef38(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
  const obj = { rootTag, WrapperComponent, rootViewStyle, initialProps: null, internal_excludeLogBox: null, children: null };
  let frozen = initialProps;
  if (initialProps == null) {
    const _Object = Object;
    frozen = Object.freeze({});
  }
  obj.initialProps = frozen;
  obj.internal_excludeLogBox = isLogBox;
  const obj2 = {};
  const merged = Object.assign(initialProps);
  obj2.rootTag = rootTag;
  obj.children = <RootComponent />;
  const tmp4Result = jsx(childrenDefault, { rootTag, WrapperComponent, rootViewStyle, initialProps: null, internal_excludeLogBox: null, children: null });
  let tmp4Result2 = tmp4Result;
  if (true === useOffscreen) {
    tmp4Result2 = tmp4Result;
    if (null != displayMode) {
      let str = "hidden";
      if (displayMode === frozenDefault.VISIBLE) {
        str = "visible";
      }
      const obj3 = { mode: str, children: tmp4Result };
      tmp4Result2 = <noop.unstable_Activity mode={str}>{tmp4Result}</noop.unstable_Activity>;
    }
  }
  const obj5 = { element: tmp4Result2, rootTag: null };
  const obj4 = renderElementAll;
  obj5.rootTag = RootTagContext.createRootTag(rootTag);
  obj4.renderElement(obj5);
};