// === Module 9427: SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY ===

// Module 9427 (SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/rtc/SecureFramesConstants.tsx");

export const SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY = "secure_frames_linking_bottom_sheet_key";
export const SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY = "secure_frames_call_verification_bottom_sheet_key";
export const SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY = "secure_frames_stream_verification_bottom_sheet_key";
export const SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY = "secure_frames_user_verification_modal_key";
export const EPOCH_AUTHENTICATOR_CHUNK_SIZE = 5;
export const EPOCH_AUTHENTICATOR_LENGTH = 30;
export const EPOCH_AUTHENTICATOR_COLUMNS = 3;
export const USER_VERIFICATION_CHUNK_SIZE = 5;
export const USER_VERIFICATION_LENGTH = 45;
export const USER_VERIFICATION_NUM_COLUMNS = 3;
export const USER_VERIFIED_TOAST_KEY = "user_verified_toast_key";
export const AnalyticsSecureFramesUserVerification = { MATCH: "match", OTHER_USER_ALREADY_VERIFIED: "other_user_already_verified", OTHER_USER_INCONSISTENT_KEYS: "other_user_inconsistent_keys", FINGERPRINT_MISMATCH: "fingerprint_mismatch", UNABLE_TO_VERIFY: "unable_to_verify", OTHER_USER_DISCONNECTED: "other_user_disconnected", CURRENT_USER_DISCONNECTED: "current_user_disconnected" };
export const END_TO_END_ENCRYPTION_DISABLED = 0;
export const AnalyticsRTCConnectionPanelTab = { RTC_DEBUG_PANEL: "rtc_debug_panel", RTC_SECURE_FRAMES: "rtc_secure_frames" };
export const SECURE_FRAMES_PUBLIC_KEY_VERSION = 1;
export const SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION = 0;