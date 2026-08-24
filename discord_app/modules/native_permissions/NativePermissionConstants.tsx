// === Module 4844: NativePermissionStatus ===

// Module 4844 (NativePermissionStatus)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/native_permissions/NativePermissionConstants.tsx");

export const NativePermissionStatus = { AUTHORIZED: "authorized", DENIED: "denied", RESTRICTED: "restricted", LIMITED: "limited", UNDETERMINED: "undetermined" };
export const NativePermissionStates = { DISMISSED: "dismissed", DENIED: "denied", ACCEPTED: "accepted", NO_DEVICES: "no_devices", ERROR: "error", NONE: "none" };
export const NativePermissionTypes = { AUDIO: "audio", CAMERA: "camera", HEADSET_CAMERA: "headset_camera", STORAGE: "storage", NOTIFICATIONS: "notifications", PHOTOS: "photos", CONTACTS: "contacts", INPUT_MONITORING: "input_monitoring", SCREEN_RECORDING: "screen_recording" };
export const NotificationAuthorizationStatus = { UNDETERMINED: 0, [0]: "UNDETERMINED", DENIED: 1, [1]: "DENIED", AUTHORIZED: 2, [2]: "AUTHORIZED", PROVISIONAL: 3, [3]: "PROVISIONAL", EPHEMERAL: 4, [4]: "EPHEMERAL" };