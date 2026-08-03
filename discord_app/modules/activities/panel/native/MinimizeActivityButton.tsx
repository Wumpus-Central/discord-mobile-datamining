// === Module 15942: ? ===

// Module 15942
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let closure_7 = createCacheKey.createStyles({ buttonParent: { flexShrink: 1 } });
const memoResult = importAllResult.memo(function MinimizeActivityButton(arg0) {
  let activityName;
  let setMode;
  ({ activityName, setMode } = arg0);
  const items = [setMode];
  const callback = importAllResult.useCallback(() => {
    setMode(outer1_5.PIP);
  }, items);
  if (undefined !== activityName) {
    if ("" !== activityName) {
      let obj = { style: null, children: null };
      obj[0] = tmp2.buttonParent;
      obj = { icon: null, accessibilityLabel: null, onPress: null, text: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true };
      obj[0] = importDefault(8708);
      const intl2 = setMode(1236).intl;
      obj[1] = intl2.string(setMode(1236).t.brPQ5U);
      obj[2] = callback;
      obj[3] = activityName;
      obj[1] = jsx(setMode(4666).Button, { icon: null, accessibilityLabel: null, onPress: null, text: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true });
      let tmp3 = <View icon={null} accessibilityLabel={null} onPress={null} text={null} size="sm" variant="secondary-overlay" maxFontSizeMultiplier={1} shrink />;
    }
    return tmp3;
  }
  obj = { icon: null, accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 };
  obj[0] = importDefault(8708);
  const intl = setMode(1236).intl;
  obj[1] = intl.string(setMode(1236).t.brPQ5U);
  obj[2] = callback;
  tmp3 = jsx(setMode(7660).IconButton, { icon: null, accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 });
});
const result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default memoResult;