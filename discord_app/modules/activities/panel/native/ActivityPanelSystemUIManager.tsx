// === Module 16858: ActivityPanelSystemUIManager ===

// Module 16858 (ActivityPanelSystemUIManager)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import StatusBarDefault from "StatusBar" /* 8839 */;
import HomeIndicatorDefault from "HomeIndicator" /* 8841 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 16835 */;
import noop from "module_19" /* 19 */;

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
      obj1 = { hidden: null, barStyle: "light-content" };
      obj1.hidden = !tmp10;
      tmp7Result = tmp7(tmp9, obj1);
    }
    items = [, ];
    items[0] = tmp7Result;
    tmp11 = jsx;
    tmp12 = closure_1(tmp2[6]);
    if (tmp) {
      tmp = !tmp3;
    }
    obj4 = { children: null };
    items[1] = tmp11(tmp12, { prefersHidden: tmp, prefersDeferringSystemGestures: tmp3 });
    obj4.children = items;
    return tmp4(tmp5, obj4);
  }
}
const ActivityPanelModes = fn(8502).ActivityPanelModes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default noop.memo(() => {
  const context = noop.useContext(ActivityPanelStateContextDefault);
  return hasOwnProperty(BaseActivityPanelSystemUIManager, { mode: context.mode, isWindowLandscape: context.wrapperDimensions.isWindowLandscape });
});
export { BaseActivityPanelSystemUIManager };