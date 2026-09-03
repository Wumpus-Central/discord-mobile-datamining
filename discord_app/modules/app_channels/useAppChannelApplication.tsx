// === Module 11425: useAppChannelApplication ===

// Module 11425 (useAppChannelApplication)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import fetchApplication from "fetchApplication" /* 5963 */;

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