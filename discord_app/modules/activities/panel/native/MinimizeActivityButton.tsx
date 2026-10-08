// === Module 17493: MinimizeActivityButton ===

// Module 17493 (MinimizeActivityButton)
import _modDef10509 from "module_10509" /* 10509 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ActivityPanelModes = fn(6072).ActivityPanelModes;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({ buttonParent: { flexShrink: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MinimizeActivityButton(arg0) {
  const cResult = setMode(576).c(12);
  ({ activityName, setMode } = arg0);
  if (cResult[0] !== setMode) {
    const fn = function c() {
      setMode(ActivityPanelModes.PIP);
    };
    cResult[0] = setMode;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = closure_7();
  if (undefined !== activityName) {
    if ("" !== activityName) {
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = setMode(1126).intl;
        const stringResult = intl2.string(setMode(1126).t.brPQ5U);
        cResult[2] = stringResult;
        let tmp13 = stringResult;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] === activityName) {
        if (cResult[4] === tmp4) {
          let tmp15 = cResult[5];
        }
        if (cResult[6] === tmp5.buttonParent) {
          if (cResult[7] === tmp15) {
            let tmp19 = cResult[8];
          }
          return tmp19;
        }
        const obj2 = { style: tmp5.buttonParent, children: tmp15 };
        const tmp22 = <View style={tmp5.buttonParent}>{tmp15}</View>;
        cResult[6] = tmp5.buttonParent;
        cResult[7] = tmp15;
        cResult[8] = tmp22;
        tmp19 = tmp22;
      }
      const obj3 = { icon: _modDef10509, accessibilityLabel: tmp13, onPress: tmp4, text: activityName, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true };
      const tmp18 = jsx(setMode(5375).Button, { icon: _modDef10509, accessibilityLabel: tmp13, onPress: tmp4, text: activityName, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true });
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
    let tmp6 = stringResult1;
  } else {
    tmp6 = cResult[9];
  }
  if (cResult[10] !== tmp4) {
    const obj4 = { icon: _modDef10509, accessibilityLabel: tmp6, onPress: tmp4, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 };
    const tmp11 = jsx(setMode(8106).IconButton, { icon: _modDef10509, accessibilityLabel: tmp6, onPress: tmp4, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 });
    cResult[10] = tmp4;
    cResult[11] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[11];
  }
  return tmp8;
}) : (function MinimizeActivityButton(arg0) {
  ({ activityName, setMode } = arg0);
  const items = [setMode];
  const callback = noop.useCallback(() => {
    setMode(ActivityPanelModes.PIP);
  }, items);
  if (undefined !== activityName) {
    if ("" !== activityName) {
      const obj2 = { style: tmp2.buttonParent, children: null };
      const obj3 = { icon: _modDef10509, accessibilityLabel: null, onPress: null, text: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true };
      const intl2 = setMode(1126).intl;
      obj3.accessibilityLabel = intl2.string(setMode(1126).t.brPQ5U);
      obj3.onPress = callback;
      obj3.text = activityName;
      obj2.children = jsx(setMode(5375).Button, { icon: _modDef10509, accessibilityLabel: null, onPress: null, text: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true });
      let tmp3 = <View style={tmp2.buttonParent}>{null}</View>;
    }
    return tmp3;
  }
  const obj = { icon: _modDef10509, accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 };
  const intl = setMode(1126).intl;
  obj.accessibilityLabel = intl.string(setMode(1126).t.brPQ5U);
  obj.onPress = callback;
  tmp3 = jsx(setMode(8106).IconButton, { icon: _modDef10509, accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 });
}));