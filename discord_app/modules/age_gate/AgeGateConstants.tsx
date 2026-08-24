// === Module 1221: result ===

// Module 1221 (result)
import setDefault from "set" /* 687 */;
import set from "set" /* 2 */;

const obj = { AUTH: "Register Age Gate", NEW_USER_FLOW: "NUF", CLAIM_ACCOUNT: "Claim Age Gate", NSFW_CHANNEL: "NSFW Channel", NSFW_SERVER: "NSFW Server", NSFW_SERVER_INVITE: "NSFW Server Invite", NSFW_SERVER_INVITE_EMBED: "NSFW Server Invite Embed", NSFW_VOICE_CHANNEL: "NSFW Voice Channel", LARGE_GUILD: "Large Guild", ACCESS_LARGE_GUILD_UNDERAGE: "Access Large Guild Access Underage", JOIN_LARGE_GUILD_UNDERAGE: "Join Large Guild Underage", FAMILY_CENTER: "Family Center", REGISTER: "Register", DEEP_LINK_PROMPT: "Deep Link Prompt", UNSPECIFIED: "Unspecified" };
const items = [, , ];
({ NSFW_CHANNEL: arr[0], NSFW_VOICE_CHANNEL: arr[1], NSFW_SERVER: arr[2] } = obj);
const result = 2 * setDefault.Millis.HOUR;
let set = new Set(items);
const result1 = set.fileFinishedImporting("modules/age_gate/AgeGateConstants.tsx");

export const AGE_GATE_REGISTER_TIMEOUT_MS = result;
export const NEW_USER_AGE_GATE_MODAL_KEY = "new-user-age-gate-modal";
export const EXISTING_USER_AGE_GATE_MODAL_KEY = "existing-user-age-gate-modal";
export const AgeGateSource = obj;
export const REACTIVE_CHECK_AGE_GATE_SOURCES = set;
export const AgeGateAnalyticAction = { AGE_GATE_OPEN: "AGE_GATE_OPEN", AGE_GATE_CLOSE: "AGE_GATE_CLOSE", AGE_GATE_SUBMITTED: "AGE_GATE_SUBMITTED", AGE_GATE_SUCCESS: "AGE_GATE_SUCCESS", AGE_GATE_FAILURE: "AGE_GATE_FAILURE", AGE_GATE_UNDERAGE: "AGE_GATE_UNDERAGE", AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION", AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" };