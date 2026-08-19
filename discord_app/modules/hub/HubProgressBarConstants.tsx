// === Module 11506: items ===

// Module 11506 (items)
import obj132 from "obj132" /* 2 */;
import create from "create" /* 1306 */;

const items = [create.HubProgressStep.JOIN_GUILD, create.HubProgressStep.INVITE_USER, create.HubProgressStep.CONTACT_SYNC];
const result = obj132.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";