// === Module 17191: ActivityPanelSystemUIManager ===

// Module 17191 (ActivityPanelSystemUIManager)
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8705 */;
import StatusBarDefault from "StatusBar" /* 9060 */;
import HomeIndicatorDefault from "HomeIndicator" /* 9062 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 17168 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let mode;
  let wrapperDimensions;
  const obj = react2;
  const cResult = obj.c(3);
  const context = react.useContext(ActivityPanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  if (cResult[0] === mode) {
    let tmp3;
    if (cResult[1] === wrapperDimensions.isWindowLandscape) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape };
  const tmp4 = hasOwnProperty(closure_8, obj2);
  cResult[0] = mode;
  cResult[1] = wrapperDimensions.isWindowLandscape;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (() => {
  const context = react.useContext(ActivityPanelStateContextDefault);
  const obj = { mode: context.mode, isWindowLandscape: context.wrapperDimensions.isWindowLandscape };
  return hasOwnProperty(closure_8, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isWindowLandscape;
  let items;
  let mode;
  const obj = react2;
  const cResult = obj.c(9);
  ({ mode, isWindowLandscape } = arg0);
  let tmp5 = mode === ActivityPanelModes.PANEL;
  let tmp6 = !isWindowLandscape;
  if (isWindowLandscape) {
    tmp6 = !tmp5;
  }
  const PIP = ActivityPanelModes.PIP;
  const tmpResult = PlatformUtils;
  const tmp7 = tmpResult.isIOS() && tmp5;
  if (tmp5) {
    tmp5 = !tmp7;
  }
  if (cResult[0] === mode !== PIP) {
    let tmp9;
    if (cResult[1] === tmp6) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === tmp7) {
      let tmp13;
      if (cResult[4] === tmp5) {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp9) {
        let tmp17;
        if (cResult[7] === tmp13) {
          tmp17 = cResult[8];
        }
        return tmp17;
      }
      const obj2 = { children: items };
      items = [tmp9, tmp13];
      const tmp20 = metroImportDefault(metroRequire, obj2);
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
  if (mode !== PIP) {
    const obj4 = { hidden: !tmp6, barStyle: "light-content" };
    tmp10 = hasOwnProperty(StatusBarDefault, obj4);
  }
  cResult[0] = mode !== PIP;
  cResult[1] = tmp6;
  cResult[2] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let isWindowLandscape;
  let mode;
  ({ mode, isWindowLandscape } = arg0);
  let tmp = mode === ActivityPanelModes.PANEL;
  const PIP = ActivityPanelModes.PIP;
  const obj = PlatformUtils;
  const tmp3 = obj.isIOS() && tmp;
  let tmp7Result = null;
  if (mode !== PIP) {
    let tmp10 = !isWindowLandscape;
    const tmp9 = StatusBarDefault;
    if (isWindowLandscape) {
      tmp10 = !tmp;
    }
    const obj2 = { hidden: !tmp10, barStyle: "light-content" };
    tmp7Result = hasOwnProperty(tmp9, obj2);
  }
  const items = [tmp7Result, ];
  const tmp12 = HomeIndicatorDefault;
  if (tmp) {
    tmp = !tmp3;
  }
  const obj3 = { children: items };
  items[1] = hasOwnProperty(tmp12, { prefersHidden: tmp, prefersDeferringSystemGestures: tmp3 });
  return metroImportDefault(metroRequire, obj3);
});
let closure_8 = tmp5;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelSystemUIManager.tsx");

export default memoResult;
export const BaseActivityPanelSystemUIManager = tmp5;