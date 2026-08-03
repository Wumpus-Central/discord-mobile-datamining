// === Module 11885: ContactSyncLandingPage ===

// Module 11885 (ContactSyncLandingPage)
const result = require("set").fileFinishedImporting("modules/contact_sync/native/ContactSyncConstants.tsx");

export const ContactSyncLandingPage = { DEFAULT: 0, [0]: "DEFAULT", UPSELL_ACTION_SHEET: 1, [1]: "UPSELL_ACTION_SHEET" };
export const ContactSyncScenes = { WELCOME: "WELCOME", NAME_INPUT: "NAME_INPUT", SUGGESTIONS: "SUGGESTIONS", ADD_PHONE: "ADD_PHONE", VERIFY_PHONE: "VERIFY_PHONE", VERIFY_PASSWORD: "VERIFY_PASSWORD" };
export const ContactPermissions = { NOT_DETERMINED: -1, [-1]: "NOT_DETERMINED", UNAUTHORIZED: 0, [0]: "UNAUTHORIZED", AUTHORIZED: 1, [1]: "AUTHORIZED" };
export const ContactSyncSuggestionsSetting = { MUTUAL_CONTACT_INFO_ONLY: 1, [1]: "MUTUAL_CONTACT_INFO_ONLY", ANYONE_WITH_CONTACT_INFO: 2, [2]: "ANYONE_WITH_CONTACT_INFO" };
export const CONTACT_SYNC_MODAL_KEY = "contact-sync";