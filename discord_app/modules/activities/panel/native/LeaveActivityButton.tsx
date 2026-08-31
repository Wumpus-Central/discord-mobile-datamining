// discord_app/modules/activities/panel/native/LeaveActivityButton.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import registerAssetDefault from "../../../../../_runtime/09965_registerAsset.js";
import { ActivityPanelModes } from "../ActivityPanelConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
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
    callback(closure_1_3.DISCONNECTED);
    const timerId = setTimeout(() => {
      let obj = closure_1_1(closure_1_2[6]);
      let _location;
      if (closure_0 != null) {
        _location = tmp.location;
      }
      obj = { location: _location, applicationId: null };
      let applicationId;
      if (closure_0 != null) {
        applicationId = tmp.applicationId;
      }
      obj[1] = applicationId;
      obj.leaveActivity(obj);
    }, 400);
  }} />;
});
const result = require("set").fileFinishedImporting("modules/activities/panel/native/LeaveActivityButton.tsx");

export default memoResult;
export { BaseLeaveActivityButton };