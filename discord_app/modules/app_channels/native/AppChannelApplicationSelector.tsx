// discord_app/modules/app_channels/native/AppChannelApplicationSelector.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppChannelApplicationActionSheet from "AppChannelApplicationActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationSelector.tsx");

export default function AppChannelApplicationSelector(guildId) {
  let disabled;
  let fn;
  let hasNoApplications;
  let intl3;
  let name;
  let onChange;
  let selectedApplication;
  let tmp5Result;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const selectedApplicationId = guildId.selectedApplicationId;
  ({ onChange: jsx, disabled } = guildId);
  const tmp = guildId;
  let tmp2 = selectedApplicationId;
  const description = guildId.description;
  let obj = guildId(selectedApplicationId[2]);
  const appChannelApplicationOptions = obj.useAppChannelApplicationOptions(
    guildId,
    channelId,
    selectedApplicationId,
    disabled,
  );
  ({ selectedApplication, hasNoApplications } = appChannelApplicationOptions);
  if (null != selectedApplication) {
    name = selectedApplication.name;
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
  const TableRowGroup = tmp(tmp2[4]).TableRowGroup;
  const intl2 = tmp(tmp2[3]).intl;
  ({
    label: name,
    accessibilityLabel: "" + intl3.string(tmp(tmp2[3]).t.oYTLIL) + " " + name,
    icon: tmp5Result,
    onPress: fn,
    arrow: true !== disabled && !hasNoApplications,
    disabled: !(true !== disabled && !hasNoApplications),
  });
  const TableRow = tmp(tmp2[5]).TableRow;
  intl3 = tmp(tmp2[3]).intl;
  tmp5Result = null;
  if (null != selectedApplication) {
    tmp5Result = jsx(channelId(tmp2[6]), { application: selectedApplication });
  }
  fn = undefined;
  if (true !== disabled && !hasNoApplications) {
    fn = () => {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { guildId, channelId, selectedApplicationId, onChange: jsx };
      const tmp2 = asyncRequire(9223, dependencyMap.paths);
      openLazy(tmp2, AppChannelApplicationActionSheet.APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY, obj);
    };
  }
  return (
    <TableRowGroup title={intl2.string(tmp(tmp2[3]).t.oYTLIL)} description={description} hasIcons>
      {null}
    </TableRowGroup>
  );
}
