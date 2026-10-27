// === Module 7810: Constants ===

// Module 7810 (Constants)
import Constants from "Constants" /* 1095 */;
import size from "module_2" /* 2 */;

const obj = { GUILD: 0, [0]: "GUILD", GROUP_DM: 1, [1]: "GROUP_DM", FRIEND: 2, [2]: "FRIEND" };
const items = [, ];
({ GUILD: arr[0], GROUP_DM: arr[1] } = obj);
const result = size.fileFinishedImporting("modules/instant_invite/Constants.tsx");

export const InviteSendStates = { SENDING: "sending", SENT: "sent", ERROR: "error" };
export const InviteTypes = obj;
export const DESKTOP_APP_REDIRECTABLE_INVITE_TYPES = new Set(items);
export const InviteTargetTypes = Constants.InviteTargetTypes;
export const InstantInviteModalPages = { MAIN: "main", SETTINGS: "settings" };