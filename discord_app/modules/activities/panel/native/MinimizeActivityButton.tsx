// === Module 16459: ? ===

// Module 16459
import registerAssetDefault from "registerAsset" /* 9694 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9982 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
let c3 = importAllResult;
let closure_7 = createCacheKey.createStyles({ buttonParent: { flexShrink: 1 } });
const memoResult = importAllResult.memo(function MinimizeActivityButton(arg0) {
  ({ activityName, setMode } = arg0);
  const items = [setMode];
  const callback = importAllResult.useCallback(() => {
    setMode(closure_1_5.PIP);
  }, items);
  if (undefined !== activityName) {
    if ("" !== activityName) {
      let obj = { style: null, children: null };
      obj[0] = tmp2.buttonParent;
      obj = { icon: null, accessibilityLabel: null, onPress: null, text: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true };
      obj[0] = registerAssetDefault;
      const intl2 = setMode(1236).intl;
      obj[1] = intl2.string(setMode(1236).t.brPQ5U);
      obj[2] = callback;
      obj[3] = activityName;
      obj[1] = jsx(setMode(4879).Button, { icon: null, accessibilityLabel: null, onPress: null, text: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true });
      let tmp3 = <View icon={null} accessibilityLabel={null} onPress={null} text={null} size="sm" variant="secondary-overlay" maxFontSizeMultiplier={1} shrink />;
    }
    return tmp3;
  }
  obj = { icon: registerAssetDefault, accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 };
  const intl = setMode(1236).intl;
  obj[1] = intl.string(setMode(1236).t.brPQ5U);
  obj[2] = callback;
  tmp3 = jsx(setMode(7963).IconButton, { icon: registerAssetDefault, accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 });
});
const result = require("set").fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default memoResult;