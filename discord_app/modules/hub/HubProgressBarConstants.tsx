// discord_app/modules/hub/HubProgressBarConstants.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [
  preloaded_user_settings.HubProgressStep.JOIN_GUILD,
  preloaded_user_settings.HubProgressStep.INVITE_USER,
  preloaded_user_settings.HubProgressStep.CONTACT_SYNC,
];
const result = size.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";
