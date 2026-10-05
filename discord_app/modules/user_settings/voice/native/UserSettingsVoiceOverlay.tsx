// === Module 9670: UserSettingsVoiceOverlay ===

// Module 9670 (UserSettingsVoiceOverlay)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6698 */;
import UserSettingsVoice from "UserSettingsVoice" /* 9657 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 9671 */;
import react from "react" /* 19 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 9658 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let enabled;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MobileVoiceOverlayStore];
    const fn = function s() {
      return enabled.getEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.bNqkD9);
    cResult[2] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t["9CSZJm"]);
    const intl3 = intl4.intl;
    const stringResult2 = intl3.string(intl4.t.Wfoivk);
    cResult[3] = stringResult1;
    cResult[4] = stringResult2;
    tmp11 = stringResult2;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const UserSettingsTableRowGroup = UserSettingsVoice.UserSettingsTableRowGroup;
    ({ label: tmp10, subLabel: tmp11, value: stateFromStores, onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled });
    const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    const tmp17 = <UserSettingsTableRowGroup title={tmp8} hasIcons={false}>{null}</UserSettingsTableRowGroup>;
    cResult[5] = stateFromStores;
    cResult[6] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[6];
  }
  return tmp14;
}) : (() => {
  let enabled;
  let intl2;
  let intl3;
  const items = [MobileVoiceOverlayStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => enabled.getEnabled());
  const UserSettingsTableRowGroup = UserSettingsVoice.UserSettingsTableRowGroup;
  const intl = intl4.intl;
  ({ label: intl2.string(intl4.t["9CSZJm"]), subLabel: intl3.string(intl4.t.Wfoivk), value: stateFromStores, onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled });
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  return <UserSettingsTableRowGroup title={intl.string(intl4.t.bNqkD9)} hasIcons={false}>{null}</UserSettingsTableRowGroup>;
});
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default tmp3;