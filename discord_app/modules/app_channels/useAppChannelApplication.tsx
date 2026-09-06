// discord_app/modules/app_channels/useAppChannelApplication.tsx
import Constants from "../../Constants.tsx";
import ApplicationActionCreators from "../applications/ApplicationActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = function useAppChannelApplication(stateFromStores) {
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = stateFromStores.application_id;
  }
  return ApplicationActionCreators.useApplication(application_id).data;
};
