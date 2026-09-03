// === Module 15758: frozen ===

// Module 15758 (frozen)
import set from "set" /* 2 */;

const frozen = Object.freeze({ NOTIFICATIONS_REDESIGN: "Notifications (Redesign)", NOTIF_REALTIME: "Realtime", NOTIF_CATEGORY_SOCIAL: "Category social", NOTIF_CATEGORY_SERVER: "Category server", NOTIF_CATEGORY_OTHER: "Category other" });
const result = set.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsSections.tsx");

export const MobileNotifSettingsSections = frozen;