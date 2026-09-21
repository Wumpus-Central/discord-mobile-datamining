// === Module 17493: MinimizeActivityButton ===

// Module 17493 (MinimizeActivityButton)
import _modDef11421 from "module_11421" /* 11421 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ActivityPanelModes = fn(9315).ActivityPanelModes;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles({ buttonParent: { flexShrink: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default noop.memo(function MinimizeActivityButton(arg0) {
  ({ activityName, setMode } = arg0);
  const items = [setMode];
  const callback = noop.useCallback(() => {
    setMode(ActivityPanelModes.PIP);
  }, items);
  if (undefined !== activityName) {
    if ("" !== activityName) {
      const obj2 = { style: tmp2.buttonParent, children: null };
      const obj3 = { icon: _modDef11421, accessibilityLabel: null, onPress: null, text: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true };
      const intl2 = setMode(1115).intl;
      obj3.accessibilityLabel = intl2.string(setMode(1115).t.brPQ5U);
      obj3.onPress = callback;
      obj3.text = activityName;
      obj2.children = jsx(setMode(5186).Button, { icon: _modDef11421, accessibilityLabel: null, onPress: null, text: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true });
      let tmp3 = <View style={tmp2.buttonParent}>{null}</View>;
    }
    return tmp3;
  }
  const obj = { icon: _modDef11421, accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 };
  const intl = setMode(1115).intl;
  obj.accessibilityLabel = intl.string(setMode(1115).t.brPQ5U);
  obj.onPress = callback;
  tmp3 = jsx(setMode(8179).IconButton, { icon: _modDef11421, accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 });
});