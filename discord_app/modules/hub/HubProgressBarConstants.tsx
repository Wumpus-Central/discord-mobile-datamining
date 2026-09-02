// === Module 9942: items ===

// Module 9942 (items)
import set from "set" /* 2 */;
import create from "create" /* 1305 */;

const items = [create.HubProgressStep.JOIN_GUILD, create.HubProgressStep.INVITE_USER, create.HubProgressStep.CONTACT_SYNC];
const result = set.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";