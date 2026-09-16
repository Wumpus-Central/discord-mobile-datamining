// === Module 9882: AppChannelApplicationSelector ===

// Module 9882 (AppChannelApplicationSelector)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import AppChannelApplicationActionSheet from "AppChannelApplicationActionSheet" /* 9886 */;
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
  const appChannelApplicationOptions = guildId(selectedApplicationId[2]).useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId, disabled);
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
  const obj2 = { title: null, description: null, hasIcons: true, children: null };
  const intl2 = tmp(tmp2[3]).intl;
  obj2.title = intl2.string(guildId(selectedApplicationId[3]).t.oYTLIL);
  obj2.description = guildId.description;
  const obj3 = { label: name, accessibilityLabel: null, icon: null, onPress: null, arrow: null, disabled: null };
  const intl3 = tmp(tmp2[3]).intl;
  obj3.accessibilityLabel = "" + intl3.string(guildId(selectedApplicationId[3]).t.oYTLIL) + " " + name;
  let tmp5Result = null;
  if (null != selectedApplication) {
    const obj4 = { application: selectedApplication };
    tmp5Result = jsx(channelId(tmp2[6]), { application: selectedApplication });
  }
  obj3.icon = tmp5Result;
  let fn;
  if (true !== disabled && !hasNoApplications) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(asyncRequireImpl(9886, dependencyMap.paths), AppChannelApplicationActionSheet.APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY, { guildId, channelId, selectedApplicationId, onChange });
    };
  }
  obj3.onPress = fn;
  obj3.arrow = true !== disabled && !hasNoApplications;
  obj3.disabled = !(true !== disabled && !hasNoApplications);
  obj2.children = jsx(guildId(selectedApplicationId[5]).TableRow, { label: name, accessibilityLabel: null, icon: null, onPress: null, arrow: null, disabled: null });
  return jsx(guildId(selectedApplicationId[4]).TableRowGroup, { title: null, description: null, hasIcons: true, children: null });
};