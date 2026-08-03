// === Module 10109: items ===

// Module 10109 (items)
const items = [require("create").HubProgressStep.JOIN_GUILD, require("create").HubProgressStep.INVITE_USER, require("create").HubProgressStep.CONTACT_SYNC];
const result = require("set").fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";