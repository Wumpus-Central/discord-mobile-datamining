// discord_app/modules/hub/HubProgressBarConstants.tsx
import set from "../../../_runtime/00002_set.js";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";

const items = [create.HubProgressStep.JOIN_GUILD, create.HubProgressStep.INVITE_USER, create.HubProgressStep.CONTACT_SYNC];
const result = set.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";