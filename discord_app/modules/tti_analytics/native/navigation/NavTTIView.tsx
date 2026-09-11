// === Module 16604: NavTTIView ===

// Module 16604 (NavTTIView)
import useComponentRenderSpan from "useComponentRenderSpan" /* 16605 */;
import navigationTTIEnabled from "navigationTTIEnabled" /* 16609 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
function IncludedNavTTIView(onLayout) {
  onLayout = onLayout.onLayout;
  ({ spanComponent, children } = onLayout);
  const merged = Object.assign(onLayout, Object.assign({ spanComponent: 0, onLayout: 0, children: 0 }));
  let obj = useComponentRenderSpan;
  const onLayout2 = obj.useComponentRenderSpan(spanComponent).onLayout;
  const items = [onLayout2, onLayout];
  obj = {};
  const callback = noop.useCallback((arg0) => {
    if (onLayout2 != null) {
      tmp(arg0);
    }
    if (onLayout != null) {
      tmp3(arg0);
    }
  }, items);
  const merged1 = Object.assign(merged);
  if (null != onLayout2) {
    onLayout = callback;
  }
  obj.onLayout = onLayout;
  obj.children = children;
  return <View />;
}
let closure_2 = ["tracking"];
let closure_3 = ["tracking", "spanComponent"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTIView.tsx");

export const NavTTIView = function NavTTIView(tracking) {
  if ("exclude" === tracking.tracking) {
    const tracking2 = tracking.tracking;
    let obj = {};
    const merged = Object.assign(_objectWithoutProperties(tracking, closure_2));
    return <View />;
  } else {
    tracking = tracking.tracking;
    const tmp3 = _objectWithoutProperties(tracking, closure_3);
    obj = navigationTTIEnabled;
    if (obj.isNavigationTTIEnabled()) {
      obj = {};
      const merged1 = Object.assign(tmp3);
      obj.spanComponent = tracking.spanComponent;
      let tmp6Result = <IncludedNavTTIView />;
    } else {
      const obj1 = {};
      const merged2 = Object.assign(tmp3);
      tmp6Result = <View />;
    }
    return tmp6Result;
  }
};