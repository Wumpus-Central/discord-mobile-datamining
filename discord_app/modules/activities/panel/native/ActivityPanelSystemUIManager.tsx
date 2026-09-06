// discord_app/modules/activities/panel/native/ActivityPanelSystemUIManager.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import StatusBarDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import HomeIndicatorDefault from "../../../voice_panel/native/HomeIndicator.tsx";
import ActivityPanelStateContextDefault from "ActivityPanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class BaseActivityPanelSystemUIManager {
  constructor(arg0) {
    ({ mode, isWindowLandscape } = global);
    tmp = mode === ActivityPanelModes.PANEL;
    tmp2 = closure_2;
    obj = closure_0(closure_2[4]);
    tmp3 = obj.isIOS() && tmp;
    tmp7Result = null;
    tmp4 = jsxs;
    tmp5 = Fragment;
    if (mode !== ActivityPanelModes.PIP) {
      tmp8 = closure_1;
      tmp7 = jsx;
      tmp10 = !isWindowLandscape;
      tmp9 = closure_1(tmp2[5]);
      if (isWindowLandscape) {
        tmp10 = !tmp;
      }
      obj = { hidden: null, barStyle: "light-content" };
      obj.hidden = !tmp10;
      tmp7Result = tmp7(tmp9, obj);
    }
    items = [,];
    items[0] = tmp7Result;
    tmp11 = jsx;
    tmp12 = closure_1(tmp2[6]);
    if (tmp) {
      tmp = !tmp3;
    }
    obj1 = { children: null };
    items[1] = tmp11(tmp12, { prefersHidden: tmp, prefersDeferringSystemGestures: tmp3 });
    obj1.children = items;
    return tmp4(tmp5, obj1);
  }
}
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default noop.memo(() => {
  const context = noop.useContext(ActivityPanelStateContextDefault);
  return hasOwnProperty(BaseActivityPanelSystemUIManager, {
    mode: context.mode,
    isWindowLandscape: context.wrapperDimensions.isWindowLandscape,
  });
});
export { BaseActivityPanelSystemUIManager };
