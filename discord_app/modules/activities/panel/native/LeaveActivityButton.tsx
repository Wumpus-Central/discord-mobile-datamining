// === Module 16255: BaseLeaveActivityButton ===

// Module 16255 (BaseLeaveActivityButton)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4745 */;
import registerAssetDefault from "registerAsset" /* 12515 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8703 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
class BaseLeaveActivityButton {
  constructor(arg0) {
    obj = { onPress: global.onPress, icon: require("registerAsset"), text: null, accessibilityLabel: null, variant: "destructive", size: "sm", maxFontSizeMultiplier: 1 };
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t["Hi1/aQ"]);
    intl2 = require("getSystemLocale").intl;
    obj[3] = intl2.string(require("getSystemLocale").t.k0Aph0);
    return jsx(require("Button").Button, obj);
  }
}
const memoResult = importAllResult.memo(function LeaveActivityButton(arg0) {
  ({ selfEmbeddedActivity: require, setMode: importDefault } = arg0);
  return <BaseLeaveActivityButton onPress={function onPress() {
    callback(ActivityPanelModes.DISCONNECTED);
    const timerId = setTimeout(() => {
      let obj = closure_1_1(closure_1_2[6]);
      let _location;
      if (closure_0 != null) {
        _location = closure_0.location;
      }
      obj = { location: _location, applicationId: null };
      let applicationId;
      if (closure_0 != null) {
        applicationId = closure_0.applicationId;
      }
      obj[1] = applicationId;
      obj.leaveActivity(obj);
    }, 400);
  }} />;
});
const result = require("obj132").fileFinishedImporting("modules/activities/panel/native/LeaveActivityButton.tsx");

export default memoResult;
export { BaseLeaveActivityButton };