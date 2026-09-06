// discord_app/modules/activities/panel/native/LeaveActivityButton.tsx
import util from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import _modDef9074 from "../../../../../_runtime/metro/09074__.js";
import EmbeddedActivitiesNativeManagerDefault from "../../native/EmbeddedActivitiesNativeManager.tsx";
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
const ActivityPanelModes = fn(9505).ActivityPanelModes;
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
          let obj = EmbeddedActivitiesNativeManagerDefault;
          let _location;
          if (closure_1_0 != null) {
            _location = tmp.location;
          }
          obj = { location: _location, applicationId: null };
          let applicationId;
          if (closure_1_0 != null) {
            applicationId = tmp.applicationId;
          }
          obj.applicationId = applicationId;
          obj.leaveActivity(obj);
        }, 400);
      }}
    />
  );
});
export { BaseLeaveActivityButton };
