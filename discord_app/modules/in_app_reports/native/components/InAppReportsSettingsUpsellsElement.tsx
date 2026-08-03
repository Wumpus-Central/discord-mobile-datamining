// === Module 12528: SettingsUpsellsTableRow ===

// Module 12528 (SettingsUpsellsTableRow)
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "openUserSettings";
import ensureGuildLoaded from "ensureGuildLoaded";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let error;
let metroImportAll;
const require = arg1;
function SettingsUpsellsTableRow(arg0) {
  let description;
  let disabledTitle;
  let importDefault;
  let require;
  let title;
  ({ onButtonClick: require, trackSettingsUpsellsAction: importDefault } = arg0);
  let dependencyMap;
  ({ title, disabledTitle, description } = arg0);
  const tmp = callback(React.useState(false), 2);
  dependencyMap = tmp[1];
  importDefault(4682)(() => {
    callback2(outer1_0(7822).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED);
  });
  const obj = {
    title,
    disabledTitle,
    description,
    disabled: tmp[0],
    onPress() {
      callback();
      dependencyMap(true);
      callback2(outer1_0(7822).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_APPLY_CLICKED);
    },
    icon: null
  };
  obj[5] = callback2(require(5910) /* SettingsIcon */.SettingsIcon, {});
  return callback2(importDefault(12522), obj);
}
({ AnalyticEvents: error, UserSettingsSections: metroImportAll } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, settingsContainer: null, goToSettingsText: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "100%", marginBottom: require("Themes").space.PX_8 };
let obj1 = { width: "100%", marginBottom: require("Themes").space.PX_8 };
createCacheKey[2] = { marginTop: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginTop: require("Themes").space.PX_4 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx");

export default function SettingsUpsellElement(settingsUpsells) {
  let importDefault;
  let reportId;
  settingsUpsells = settingsUpsells.settingsUpsells;
  ({ channelId: importDefault, reportId } = settingsUpsells);
  const reportType = settingsUpsells.reportType;
  const reportSubType = settingsUpsells.reportSubType;
  let closure_5;
  const tmp = createCacheKey();
  let obj = settingsUpsells(reportId[12]);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(closure_1));
  let obj1 = settingsUpsells(reportId[13]);
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
      let getDescription;
      let getDisabledTitle;
      let onApply;
      ({ getDisabledTitle, getDescription, onApply } = getTitle);
      return outer1_9(outer1_12, { title: getTitle.getTitle(), disabledTitle: getDisabledTitle(), description: getDescription(), onButtonClick: onApply, trackSettingsUpsellsAction: callback(settingsUpsells[arg1]) }, arg1);
    });
    obj[1] = callback2(tmp2(tmp3[14]).TableRowGroup, obj1);
    const items1 = [callback2(closure_5, obj), ];
    const obj2 = { variant: "text-sm/medium", style: null, children: null };
    obj2[1] = tmp.goToSettingsText;
    const intl2 = tmp2(tmp3[15]).intl;
    const obj3 = { goToSettingsHook: null };
    obj3[0] = function goToSettingsHook() {
      let obj = settingsUpsells(reportId[17]);
      obj = { screen: outer1_8.CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj);
      obj = { report_id: reportId, report_type: reportType.name, report_subtype: reportSubType, action: settingsUpsells(reportId[9]).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED };
      outer1_1(reportId[18]).trackWithMetadata(outer1_7.IAR_SETTINGS_UPSELLS_ACTION, obj);
    };
    obj2[2] = intl2.format(tmp2(tmp3[15]).t["u7mo+k"], obj3);
    items1[1] = callback2(tmp2(tmp3[16]).Text, obj2);
    obj[1] = items1;
    tmp6 = callback3(closure_5, obj);
  }
  return tmp6;
};