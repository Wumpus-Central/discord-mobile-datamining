// === Module 12872: SettingsUpsellsTableRow ===

// Module 12872 (SettingsUpsellsTableRow)
import ThemesDefault from "Themes" /* 712 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4766 */;
import SettingsIcon from "SettingsIcon" /* 7393 */;
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow" /* 12866 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function SettingsUpsellsTableRow(arg0) {
  ({ onButtonClick: require, trackSettingsUpsellsAction: importDefault } = arg0);
  dependencyMap = undefined;
  ({ title, disabledTitle, description } = arg0);
  const tmp = callback(React.useState(false), 2);
  dependencyMap = tmp[1];
  useMountLayoutEffectDefault(() => {
    callback2(closure_1_0(8179).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED);
  });
  const obj = {
    title,
    disabledTitle,
    description,
    disabled: tmp[0],
    onPress() {
      callback();
      dependencyMap(true);
      callback2(closure_1_0(8179).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_APPLY_CLICKED);
    },
    icon: callback2(SettingsIcon.SettingsIcon, {})
  };
  return callback2(InAppReportsUpsellsTableRowDefault, obj);
}
({ AnalyticEvents: error, UserSettingsSections: closure_8 } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, settingsContainer: null, goToSettingsText: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "100%", marginBottom: ThemesDefault.space.PX_8 };
let obj1 = { width: "100%", marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_4 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginTop: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx");

export default function SettingsUpsellElement(settingsUpsells) {
  settingsUpsells = settingsUpsells.settingsUpsells;
  ({ channelId: importDefault, reportId } = settingsUpsells);
  const reportType = settingsUpsells.reportType;
  const reportSubType = settingsUpsells.reportSubType;
  closure_5 = undefined;
  const tmp = callback4();
  let obj = settingsUpsells(reportId[12]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(closure_1));
  obj1 = settingsUpsells(reportId[13]);
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  const settingsUpsellsConfigs = obj1.useSettingsUpsellsConfigs(settingsUpsells, type);
  closure_5 = settingsUpsells(reportId[9]).useTrackSettingsUpsellsAction(reportType, reportSubType, reportId);
  let tmp6 = null;
  if (0 !== settingsUpsellsConfigs.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.settingsContainer;
    obj1 = { title: null, hasIcons: true, children: null };
    const intl = tmp2(tmp3[15]).intl;
    obj1[0] = intl.string(tmp2(tmp3[15]).t["1yxTIJ"]);
    obj1[2] = settingsUpsellsConfigs.map((getTitle) => {
      ({ getDisabledTitle, getDescription, onApply } = getTitle);
      return closure_1_9(closure_1_12, { title: getTitle.getTitle(), disabledTitle: getDisabledTitle(), description: getDescription(), onButtonClick: onApply, trackSettingsUpsellsAction: callback(settingsUpsells[arg1]) }, arg1);
    });
    obj[1] = callback2(tmp2(tmp3[14]).TableRowGroup, obj1);
    const items1 = [callback2(closure_5, obj), ];
    const obj2 = { variant: "text-sm/medium", style: null, children: null };
    obj2[1] = tmp.goToSettingsText;
    const intl2 = tmp2(tmp3[15]).intl;
    const obj3 = { goToSettingsHook: null };
    obj3[0] = function goToSettingsHook() {
      let obj = settingsUpsells(reportId[17]);
      obj = { screen: closure_1_8.CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj);
      obj = { report_id: reportId, report_type: reportType.name, report_subtype: reportSubType, action: settingsUpsells(reportId[9]).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED };
      closure_1_1(reportId[18]).trackWithMetadata(closure_1_7.IAR_SETTINGS_UPSELLS_ACTION, obj);
    };
    obj2[2] = intl2.format(tmp2(tmp3[15]).t["u7mo+k"], obj3);
    items1[1] = callback2(tmp2(tmp3[16]).Text, obj2);
    obj[1] = items1;
    tmp6 = callback3(closure_5, obj);
  }
  return tmp6;
};