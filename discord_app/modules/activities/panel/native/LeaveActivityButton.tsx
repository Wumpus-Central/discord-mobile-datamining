// discord_app/modules/activities/panel/native/LeaveActivityButton.tsx
import util from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../native/EmbeddedActivitiesNativeManager.tsx";
import _modDef10257 from "../../../../../_runtime/metro/10257__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class BaseLeaveActivityButton {
  constructor(arg0) {
    obj = {
      onPress: global.onPress,
      icon: closure_1(closure_2[4]),
      text: null,
      accessibilityLabel: null,
      variant: "destructive",
      size: "sm",
      maxFontSizeMultiplier: 1,
    };
    intl = closure_0(closure_2[5]).intl;
    obj.text = intl.string(closure_0(closure_2[5]).t["Hi1/aQ"]);
    intl2 = closure_0(closure_2[5]).intl;
    obj.accessibilityLabel = intl2.string(closure_0(closure_2[5]).t.k0Aph0);
    return jsx(closure_0(closure_2[3]).Button, obj);
  }
}
const ActivityPanelModes = fn(9392).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/LeaveActivityButton.tsx");

export default noop.memo(function LeaveActivityButton(arg0) {
  ({ selfEmbeddedActivity: require, setMode: importDefault } = arg0);
  return (
    <BaseLeaveActivityButton
      onPress={function onPress() {
        importDefault(ActivityPanelModes.DISCONNECTED);
        const timerId = setTimeout(() => {
          let _location;
          if (closure_1_0 != null) {
            _location = closure_1_0.location;
          }
          const obj2 = { location: _location, applicationId: null };
          let applicationId;
          if (closure_1_0 != null) {
            applicationId = closure_1_0.applicationId;
          }
          obj2.applicationId = applicationId;
          EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
        }, 400);
      }}
    />
  );
});
export { BaseLeaveActivityButton };
