// discord_app/modules/activities/panel/native/ActivityPanelSystemUIManager.tsx
import importAllResult from "noop";
import { ActivityPanelModes } from "ActivityPanelModes";
import jsxProd from "jsxProd";

let c5;
let closure_6;
let error;
const require = arg1;
class BaseActivityPanelSystemUIManager {
  constructor(arg0) {
    ({ mode, isWindowLandscape } = global);
    tmp = mode === ActivityPanelModes.PANEL;
    tmp2 = closure_2;
    obj = require("set");
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
  const context = importAllResult.useContext(importDefault(15959));
  return callback(BaseActivityPanelSystemUIManager, { mode: context.mode, isWindowLandscape: context.wrapperDimensions.isWindowLandscape });
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default memoResult;
export { BaseActivityPanelSystemUIManager };