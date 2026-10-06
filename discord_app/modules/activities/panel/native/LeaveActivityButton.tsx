// === Module 17218: LeaveActivityButton ===

// Module 17218 (LeaveActivityButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9001 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9024 */;
import AssetRegistryDefault from "AssetRegistry" /* 9590 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let selfEmbeddedActivity;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t["Hi1/aQ"]);
    const intl2 = intl3.intl;
    const stringResult1 = intl2.string(intl3.t.k0Aph0);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] !== onPress) {
    const Button = components_Button_Button.Button;
    const tmp11 = <Button onPress={onPress} icon={AssetRegistryDefault} text={tmp4} accessibilityLabel={tmp5} variant="destructive" size="sm" maxFontSizeMultiplier={1} />;
    cResult[2] = onPress;
    cResult[3] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : ((onPress) => {
  const Button = components_Button_Button.Button;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <Button onPress={onPress.onPress} icon={AssetRegistryDefault} text={intl.string(intl3.t["Hi1/aQ"])} accessibilityLabel={intl2.string(intl3.t.k0Aph0)} variant="destructive" size="sm" maxFontSizeMultiplier={1} />;
});
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((selfEmbeddedActivity) => {
  let obj = selfEmbeddedActivity(576);
  const cResult = obj.c(4);
  selfEmbeddedActivity = selfEmbeddedActivity.selfEmbeddedActivity;
  const setMode = selfEmbeddedActivity.setMode;
  let applicationId;
  const first = cResult[0];
  if (selfEmbeddedActivity != null) {
    applicationId = selfEmbeddedActivity.applicationId;
  }
  if (first === applicationId) {
    let _location;
    const tmp4 = cResult[1];
    if (selfEmbeddedActivity != null) {
      _location = selfEmbeddedActivity.location;
    }
    if (tmp4 === _location) {
      let tmp6;
      if (cResult[2] === setMode) {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const tmp7 = <closure_5 onPress={function onPress() {
    const tmp = setMode(ActivityPanelModes.DISCONNECTED);
    const timerId = setTimeout(() => {
      let applicationId;
      let _location;
      const leaveActivity = setMode(dependencyMap[8]).leaveActivity;
      setMode(dependencyMap[8]);
      if (selfEmbeddedActivity != null) {
        _location = selfEmbeddedActivity.location;
      }
      const obj = { location: _location, applicationId };
      applicationId = undefined;
      if (selfEmbeddedActivity != null) {
        applicationId = selfEmbeddedActivity.applicationId;
      }
      leaveActivity(obj);
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
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : ((arg0) => {
  ({ selfEmbeddedActivity: require, setMode: importDefault } = arg0);
  return <closure_5 onPress={function onPress() {
    const tmp = importDefault(ActivityPanelModes.DISCONNECTED);
    const timerId = setTimeout(() => {
      let applicationId;
      let _location;
      const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
      EmbeddedActivitiesNativeManagerDefault;
      if (closure_1_0 != null) {
        _location = closure_1_0.location;
      }
      const obj = { location: _location, applicationId };
      applicationId = undefined;
      if (closure_1_0 != null) {
        applicationId = closure_1_0.applicationId;
      }
      leaveActivity(obj);
    }, 400);
  }} />;
}));
const result = size.fileFinishedImporting("modules/activities/panel/native/LeaveActivityButton.tsx");

export default memoResult;
export const BaseLeaveActivityButton = tmp2;