// discord_app/modules/app_channels/useAppChannelApplication.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import fetchApplication from "../applications/ApplicationActionCreators.tsx";

const ChannelTypes = ME.ChannelTypes;
const result = set.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = function useAppChannelApplication(stateFromStores) {
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = stateFromStores.application_id;
  }
  return fetchApplication.useApplication(application_id).data;
};
