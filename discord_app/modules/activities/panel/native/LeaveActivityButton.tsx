// === Module 17499: LeaveActivityButton ===

// Module 17499 (LeaveActivityButton)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 10623 */;
import _modDef10783 from "module_10783" /* 10783 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(6072).ActivityPanelModes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseLeaveActivityButton(onPress) {
  const cResult = c.c(4);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["Hi1/aQ"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.k0Aph0);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] !== onPress) {
    const obj2 = { onPress, icon: _modDef10783, text: tmp4, accessibilityLabel: tmp5, variant: "destructive", size: "sm", maxFontSizeMultiplier: 1 };
    const tmp11 = jsx(components_Button_Button.Button, { onPress, icon: _modDef10783, text: tmp4, accessibilityLabel: tmp5, variant: "destructive", size: "sm", maxFontSizeMultiplier: 1 });
    cResult[2] = onPress;
    cResult[3] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function BaseLeaveActivityButton(onPress) {
  const obj = { onPress: onPress.onPress, icon: _modDef10783, text: null, accessibilityLabel: null, variant: "destructive", size: "sm", maxFontSizeMultiplier: 1 };
  const intl = util.intl;
  obj.text = intl.string(util.t["Hi1/aQ"]);
  const intl2 = util.intl;
  obj.accessibilityLabel = intl2.string(util.t.k0Aph0);
  return jsx(components_Button_Button.Button, { onPress: onPress.onPress, icon: _modDef10783, text: null, accessibilityLabel: null, variant: "destructive", size: "sm", maxFontSizeMultiplier: 1 });
});
let closure_5 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/LeaveActivityButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LeaveActivityButton(selfEmbeddedActivity) {
  const cResult = selfEmbeddedActivity(576).c(4);
  selfEmbeddedActivity = selfEmbeddedActivity.selfEmbeddedActivity;
  const setMode = selfEmbeddedActivity.setMode;
  let applicationId;
  if (selfEmbeddedActivity != null) {
    applicationId = selfEmbeddedActivity.applicationId;
  }
  if (cResult[0] === applicationId) {
    let _location;
    if (selfEmbeddedActivity != null) {
      _location = selfEmbeddedActivity.location;
    }
    if (cResult[1] === _location) {
      if (cResult[2] === setMode) {
        let tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const tmp5 = <closure_5 onPress={function onPress() {
    setMode(ActivityPanelModes.DISCONNECTED);
    const timerId = setTimeout(() => {
      let _location;
      if (selfEmbeddedActivity != null) {
        _location = selfEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: null };
      let applicationId;
      if (selfEmbeddedActivity != null) {
        applicationId = selfEmbeddedActivity.applicationId;
      }
      obj2.applicationId = applicationId;
      setMode(dependencyMap[8]).leaveActivity(obj2);
      const obj = setMode(dependencyMap[8]);
    }, 400);
  }} />;
  let applicationId1;
  if (selfEmbeddedActivity != null) {
    applicationId1 = selfEmbeddedActivity.applicationId;
  }
  cResult[0] = applicationId1;
  let _location1;
  if (selfEmbeddedActivity != null) {
    _location1 = selfEmbeddedActivity.location;
  }
  cResult[1] = _location1;
  cResult[2] = setMode;
  cResult[3] = tmp5;
  tmp4 = tmp5;
}) : (function LeaveActivityButton(arg0) {
  ({ selfEmbeddedActivity: require, setMode: importDefault } = arg0);
  return <closure_5 onPress={function onPress() {
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
  }} />;
}));
export const BaseLeaveActivityButton = tmp2;