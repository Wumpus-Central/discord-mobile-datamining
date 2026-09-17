// discord_app/modules/tti_analytics/native/navigation/NavTTIView.tsx
import useComponentRenderSpan from "useComponentRenderSpan.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function IncludedNavTTIView(onLayout) {
  onLayout = onLayout.onLayout;
  ({ name, children } = onLayout);
  const merged = Object.assign(onLayout, Object.assign({ name: 0, onLayout: 0, children: 0 }));
  const onLayout2 = useComponentRenderSpan.useComponentRenderSpan(name).onLayout;
  const items = [onLayout2, onLayout];
  const obj2 = {};
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
  obj2.onLayout = onLayout;
  obj2.children = children;
  return <View />;
}
let closure_2 = ["tracking"];
let closure_3 = ["tracking", "name"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTIView.tsx");

export const NavTTIView = function NavTTIView(tracking) {
  if ("exclude" === tracking.tracking) {
    const tracking2 = tracking.tracking;
    const obj2 = {};
    const merged = Object.assign(_objectWithoutProperties(tracking, closure_2));
    return <View />;
  } else {
    tracking = tracking.tracking;
    const tmp3 = _objectWithoutProperties(tracking, closure_3);
    if (obj.isNavigationTTIEnabled()) {
      const obj3 = {};
      const merged1 = Object.assign(tmp3);
      obj3.name = tracking.name;
      let tmp6Result = <IncludedNavTTIView />;
    } else {
      const obj4 = {};
      const merged2 = Object.assign(tmp3);
      tmp6Result = <View />;
    }
    return tmp6Result;
  }
};
