// === Module 17212: MinimizeActivityButton ===

// Module 17212 (MinimizeActivityButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9001 */;
import AssetRegistryDefault from "AssetRegistry" /* 10858 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ buttonParent: { flexShrink: 1 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activityName;
  let setMode;
  let tmp4;
  let tmp6;
  let tmp8;
  const obj = setMode(576);
  const cResult = obj.c(12);
  ({ activityName, setMode } = arg0);
  if (cResult[0] !== setMode) {
    const fn = function c() {
      setMode(ActivityPanelModes.PIP);
    };
    cResult[0] = setMode;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = closure_7();
  if (undefined !== activityName) {
    if ("" !== activityName) {
      let tmp13;
      const _Symbol = Symbol;
      const buttonParent = tmp5.buttonParent;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = setMode(1126).intl;
        const stringResult = intl2.string(setMode(1126).t.brPQ5U);
        cResult[2] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] === activityName) {
        let tmp15;
        if (cResult[4] === tmp4) {
          tmp15 = cResult[5];
        }
        if (cResult[6] === tmp5.buttonParent) {
          let tmp19;
          if (cResult[7] === tmp15) {
            tmp19 = cResult[8];
          }
          return tmp19;
        }
        const tmp22 = <View style={buttonParent}>{tmp15}</View>;
        cResult[6] = tmp5.buttonParent;
        cResult[7] = tmp15;
        cResult[8] = tmp22;
        tmp19 = tmp22;
      }
      const Button = setMode(5601).Button;
      const tmp18 = <Button icon={AssetRegistryDefault} accessibilityLabel={tmp13} onPress={tmp4} text={activityName} size="sm" variant="secondary-overlay" maxFontSizeMultiplier={1} shrink />;
      cResult[3] = activityName;
      cResult[4] = tmp4;
      cResult[5] = tmp18;
      tmp15 = tmp18;
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = setMode(1126).intl;
    const stringResult1 = intl.string(setMode(1126).t.brPQ5U);
    cResult[9] = stringResult1;
    tmp6 = stringResult1;
  } else {
    tmp6 = cResult[9];
  }
  if (cResult[10] !== tmp4) {
    const IconButton = setMode(7586).IconButton;
    const tmp11 = <IconButton icon={AssetRegistryDefault} accessibilityLabel={tmp6} onPress={tmp4} size="sm" variant="secondary-overlay" maxFontSizeMultiplier={1} />;
    cResult[10] = tmp4;
    cResult[11] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[11];
  }
  return tmp8;
}) : ((arg0) => {
  let activityName;
  let intl2;
  let setMode;
  ({ activityName, setMode } = arg0);
  const items = [setMode];
  const callback = react.useCallback(() => {
    setMode(ActivityPanelModes.PIP);
  }, items);
  if (undefined !== activityName) {
    let tmp3;
    if ("" !== activityName) {
      ({ icon: AssetRegistryDefault, accessibilityLabel: intl2.string(setMode(1126).t.brPQ5U), onPress: callback, text: activityName, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true });
      const Button = setMode(5601).Button;
      intl2 = setMode(1126).intl;
      tmp3 = <View style={tmp2.buttonParent}>{null}</View>;
    }
    return tmp3;
  }
  const IconButton = setMode(7586).IconButton;
  const intl = setMode(1126).intl;
  tmp3 = <IconButton icon={AssetRegistryDefault} accessibilityLabel={intl.string(setMode(1126).t.brPQ5U)} onPress={callback} size="sm" variant="secondary-overlay" maxFontSizeMultiplier={1} />;
}));
const result = size.fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default memoResult;