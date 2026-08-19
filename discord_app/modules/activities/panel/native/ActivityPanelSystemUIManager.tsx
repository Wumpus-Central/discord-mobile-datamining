// === Module 16257: BaseActivityPanelSystemUIManager ===

// Module 16257 (BaseActivityPanelSystemUIManager)
import obj132 from "obj132" /* 500 */;
import componentDidMountDefault from "componentDidMount" /* 8032 */;
import pushStackEntryDefault from "pushStackEntry" /* 8680 */;
import useActivityWebViewLockDefault from "useActivityWebViewLock" /* 16234 */;
import importAllResult from "noop" /* 19 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8703 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
class BaseActivityPanelSystemUIManager {
  constructor(arg0) {
    ({ mode, isWindowLandscape } = global);
    tmp = mode === ActivityPanelModes.PANEL;
    tmp2 = closure_2;
    obj = require("obj132");
    tmp3 = obj.isIOS() && tmp;
    tmp7Result = null;
    tmp4 = jsxs;
    tmp5 = Fragment;
    if (mode !== ActivityPanelModes.PIP) {
      tmp8 = closure_1;
      tmp7 = jsx;
      tmp10 = !isWindowLandscape;
      tmp9 = require("componentDidMount");
      if (isWindowLandscape) {
        tmp10 = !tmp;
      }
      obj = { hidden: null, barStyle: "light-content" };
      obj[0] = !tmp10;
      tmp7Result = tmp7(tmp9, obj);
    }
    items = [, ];
    items[0] = tmp7Result;
    tmp11 = jsx;
    tmp12 = require("pushStackEntry");
    if (tmp) {
      tmp = !tmp3;
    }
    obj1 = { children: null };
    items[1] = tmp11(tmp12, { prefersHidden: tmp, prefersDeferringSystemGestures: tmp3 });
    obj1[0] = items;
    return tmp4(tmp5, obj1);
  }
}
let c3 = importAllResult;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const memoResult = importAllResult.memo(() => {
  const context = importAllResult.useContext(useActivityWebViewLockDefault);
  return callback(BaseActivityPanelSystemUIManager, { mode: context.mode, isWindowLandscape: context.wrapperDimensions.isWindowLandscape });
});
const result = require("obj132").fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default memoResult;
export { BaseActivityPanelSystemUIManager };