// discord_app/modules/user_settings/content_and_social/FriendRequestAlertsV2.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2025-10-friend-request-alerts-v2",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/FriendRequestAlertsV2.tsx");

export const useIsFriendRequestAlertsV2Enabled = function useIsFriendRequestAlertsV2Enabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isFriendRequestAlertsV2Enabled = function isFriendRequestAlertsV2Enabled(maybeConfirmFriendRequestAccept) {
  return closure_0.getConfig({ location: maybeConfirmFriendRequestAccept }).enabled;
};
