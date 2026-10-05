// === Module 17191: ActivityPanelSystemUIManager ===

// Module 17191 (ActivityPanelSystemUIManager)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import StatusBarDefault from "StatusBar" /* 9060 */;
import HomeIndicatorDefault from "HomeIndicator" /* 9062 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 17168 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(8705).ActivityPanelModes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ mode, isWindowLandscape } = arg0);
  let tmp5 = mode === ActivityPanelModes.PANEL;
  let tmp6 = !isWindowLandscape;
  if (isWindowLandscape) {
    tmp6 = !tmp5;
  }
  const tmp7 = PlatformUtils.isIOS() && tmp5;
  if (tmp5) {
    tmp5 = !tmp7;
  }
  if (cResult[0] === mode !== ActivityPanelModes.PIP) {
    if (cResult[1] === tmp6) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === tmp7) {
      if (cResult[4] === tmp5) {
        let tmp13 = cResult[5];
      }
      if (cResult[6] === tmp9) {
        if (cResult[7] === tmp13) {
          let tmp17 = cResult[8];
        }
        return tmp17;
      }
      const obj2 = { children: null };
      const items = [tmp9, tmp13];
      obj2.children = items;
      const tmp20 = React5(timestampProducer, obj2);
      cResult[6] = tmp9;
      cResult[7] = tmp13;
      cResult[8] = tmp20;
      tmp17 = tmp20;
    }
    const obj3 = { prefersHidden: tmp5, prefersDeferringSystemGestures: tmp7 };
    const tmp16 = hasOwnProperty(HomeIndicatorDefault, obj3);
    cResult[3] = tmp7;
    cResult[4] = tmp5;
    cResult[5] = tmp16;
    tmp13 = tmp16;
  }
  let tmp10 = null;
  if (mode !== ActivityPanelModes.PIP) {
    const obj4 = { hidden: !tmp6, barStyle: "light-content" };
    tmp10 = hasOwnProperty(StatusBarDefault, obj4);
  }
  cResult[0] = mode !== ActivityPanelModes.PIP;
  cResult[1] = tmp6;
  cResult[2] = tmp10;
  tmp9 = tmp10;
  const tmpResult = PlatformUtils;
}) : ((arg0) => {
  ({ mode, isWindowLandscape } = arg0);
  let tmp = mode === ActivityPanelModes.PANEL;
  const tmp3 = PlatformUtils.isIOS() && tmp;
  let tmp7Result = null;
  if (mode !== ActivityPanelModes.PIP) {
    let tmp10 = !isWindowLandscape;
    if (isWindowLandscape) {
      tmp10 = !tmp;
    }
    const obj2 = { hidden: !tmp10, barStyle: "light-content" };
    tmp7Result = hasOwnProperty(StatusBarDefault, obj2);
  }
  const items = [tmp7Result, ];
  if (tmp) {
    tmp = !tmp3;
  }
  const obj3 = { children: null };
  items[1] = hasOwnProperty(HomeIndicatorDefault, { prefersHidden: tmp, prefersDeferringSystemGestures: tmp3 });
  obj3.children = items;
  return React5(timestampProducer, obj3);
});
let closure_8 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const context = noop.useContext(ActivityPanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  if (cResult[0] === mode) {
    if (cResult[1] === wrapperDimensions.isWindowLandscape) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = hasOwnProperty(closure_8, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
  cResult[0] = mode;
  cResult[1] = wrapperDimensions.isWindowLandscape;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (() => {
  const context = noop.useContext(ActivityPanelStateContextDefault);
  return hasOwnProperty(closure_8, { mode: context.mode, isWindowLandscape: context.wrapperDimensions.isWindowLandscape });
}));
export const BaseActivityPanelSystemUIManager = tmp4;