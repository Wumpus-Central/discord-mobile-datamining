// discord_app/modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useMountLayoutEffectDefault from "../../../../hooks/useMountEffect.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import getReportMenu from "../../ReportUtils.tsx";
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function SettingsUpsellsTableRow(arg0) {
  ({ onButtonClick: require, trackSettingsUpsellsAction: importDefault } = arg0);
  ({ title, disabledTitle, description } = arg0);
  const tmp = callback(React.useState(false), 2);
  dependencyMap = tmp[1];
  useMountLayoutEffectDefault(() => {
    callback2(getReportMenu.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_VIEWED);
  });
  const obj = {
    title,
    disabledTitle,
    description,
    disabled: tmp[0],
    onPress() {
      callback();
      dependencyMap(true);
      callback2(getReportMenu.TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_APPLY_CLICKED);
    },
    icon: callback2(SettingsIcon.SettingsIcon, {})
  };
  return callback2(InAppReportsUpsellsTableRowDefault, obj);
}
({ AnalyticEvents: error, UserSettingsSections: closure_8 } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "100%", marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_4 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsSettingsUpsellsElement.tsx");

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
    const intl = tmp2(reportId[15]).intl;
    obj1[0] = intl.string(tmp2(reportId[15]).t["1yxTIJ"]);
    obj1[2] = settingsUpsellsConfigs.map((item, index) => {
      ({ getDisabledTitle, getDescription, onApply } = item);
      return closure_1_9(SettingsUpsellsTableRow, { title: item.getTitle(), disabledTitle: getDisabledTitle(), description: getDescription(), onButtonClick: onApply, trackSettingsUpsellsAction: callback(settingsUpsells[index]) }, index);
    });
    obj[1] = callback2(tmp2(reportId[14]).TableRowGroup, obj1);
    const items1 = [callback2(closure_5, obj), ];
    const obj2 = { variant: "text-sm/medium", style: null, children: null };
    obj2[1] = tmp.goToSettingsText;
    const intl2 = tmp2(reportId[15]).intl;
    const obj3 = { goToSettingsHook: null };
    obj3[0] = function goToSettingsHook() {
      settingsUpsells(reportId[17]);
      let obj = { screen: closure_1_8.CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj);
      obj = { report_id: reportId, report_type: reportType.name, report_subtype: reportSubType, action: settingsUpsells(reportId[9]).TrackIarSettingsUpsellsActionType.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED };
      importDefault(reportId[18]).trackWithMetadata(closure_1_7.IAR_SETTINGS_UPSELLS_ACTION, obj);
    };
    obj2[2] = intl2.format(tmp2(reportId[15]).t["u7mo+k"], obj3);
    items1[1] = callback2(tmp2(reportId[16]).Text, obj2);
    obj[1] = items1;
    tmp6 = callback3(closure_5, obj);
  }
  return tmp6;
};