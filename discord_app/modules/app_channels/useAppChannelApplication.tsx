// === Module 7487: useAppChannelApplication ===

// Module 7487 (useAppChannelApplication)
import Constants from "Constants" /* 1072 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6939 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export function useAppChannelApplication(stateFromStores) {
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  application_id = undefined;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = stateFromStores.application_id;
  }
  return ApplicationActionCreators.useApplication(application_id).data;
}