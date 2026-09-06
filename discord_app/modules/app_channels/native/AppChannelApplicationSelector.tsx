// === Module 9742: AppChannelApplicationSelector ===

// Module 9742 (AppChannelApplicationSelector)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AppChannelApplicationActionSheet from "AppChannelApplicationActionSheet" /* 9746 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationSelector.tsx");

export default function AppChannelApplicationSelector(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const selectedApplicationId = guildId.selectedApplicationId;
  ({ onChange: jsx, disabled } = guildId);
  let obj = guildId(selectedApplicationId[2]);
  const appChannelApplicationOptions = obj.useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId, disabled);
  ({ selectedApplication, hasNoApplications } = appChannelApplicationOptions);
  if (null != selectedApplication) {
    let name = selectedApplication.name;
  } else {
    const intl = tmp(tmp2[3]).intl;
    const string = intl.string;
    const t = tmp(tmp2[3]).t;
    if (hasNoApplications) {
      name = string(t.MlQm3T);
    } else {
      name = string(t.F2FMFR);
    }
  }
  obj = { title: null, description: null, hasIcons: true, children: null };
  const intl2 = tmp(tmp2[3]).intl;
  obj.title = intl2.string(guildId(selectedApplicationId[3]).t.oYTLIL);
  obj.description = guildId.description;
  obj = { label: name, accessibilityLabel: null, icon: null, onPress: null, arrow: null, disabled: null };
  const intl3 = tmp(tmp2[3]).intl;
  obj.accessibilityLabel = "" + intl3.string(guildId(selectedApplicationId[3]).t.oYTLIL) + " " + name;
  let tmp5Result = null;
  if (null != selectedApplication) {
    const obj1 = { application: selectedApplication };
    tmp5Result = tmp5(channelId(tmp2[6]), obj1);
  }
  obj.icon = tmp5Result;
  let fn;
  if (true !== disabled && !hasNoApplications) {
    fn = () => {
      const obj = { guildId, channelId, selectedApplicationId, onChange };
      obj.openLazy(asyncRequireImpl(9746, dependencyMap.paths), AppChannelApplicationActionSheet.APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY, obj);
    };
  }
  obj.onPress = fn;
  obj.arrow = true !== disabled && !hasNoApplications;
  obj.disabled = !(true !== disabled && !hasNoApplications);
  obj.children = jsx(guildId(selectedApplicationId[5]).TableRow, { label: name, accessibilityLabel: null, icon: null, onPress: null, arrow: null, disabled: null });
  return jsx(guildId(selectedApplicationId[4]).TableRowGroup, { label: name, accessibilityLabel: null, icon: null, onPress: null, arrow: null, disabled: null });
};