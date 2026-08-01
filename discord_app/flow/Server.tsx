// === Module 1906: PermissionOverwriteType ===

// Module 1906 (PermissionOverwriteType)
const result = require("set").fileFinishedImporting("flow/Server.tsx");

export const PermissionOverwriteType = { ROLE: 0, [0]: "ROLE", MEMBER: 1, [1]: "MEMBER" };
export const GuildBoostUpsellType = { FIRST_BOOSTER: 0, [0]: "FIRST_BOOSTER" };
export const AgeVerificationStatusUkAndAusOnly = { UNVERIFIED: 1, [1]: "UNVERIFIED", VERIFIED_TEEN: 2, [2]: "VERIFIED_TEEN", VERIFIED_ADULT: 3, [3]: "VERIFIED_ADULT", INFERRED_ADULT: 4, [4]: "INFERRED_ADULT", CLIENT_ONLY_PENDING: 99999, [99999]: "CLIENT_ONLY_PENDING" };
export const GameCompanyRole = { UNKNOWN: 0, [0]: "UNKNOWN", PUBLISHER: 1, [1]: "PUBLISHER", DEVELOPER: 2, [2]: "DEVELOPER" };
export const EmbeddedActivitySupportedPlatforms = { IOS: "ios", ANDROID: "android", WEB: "web" };
export const EmbeddedActivityLabelTypes = { NONE: 0, [0]: "NONE", NEW: 1, [1]: "NEW", UPDATED: 2, [2]: "UPDATED" };
export const EmbeddedActivitySurfaces = { VOICE_LAUNCHER: "voice_launcher", TEXT_LAUNCHER: "text_launcher" };
export const GameLinkTypes = { LINKED: 1, [1]: "LINKED", OFFICIAL: 2, [2]: "OFFICIAL", NVIDIA: 3, [3]: "NVIDIA" };
export const ApplicationDirectoryEntryCarouselItemType = { MEDIA_PROXY: 1, [1]: "MEDIA_PROXY", YOUTUBE: 2, [2]: "YOUTUBE" };
export const InteractionContextType = { GUILD: 0, [0]: "GUILD", BOT_DM: 1, [1]: "BOT_DM", PRIVATE_CHANNEL: 2, [2]: "PRIVATE_CHANNEL" };
export const ApplicationCommandHandler = { APP_HANDLER: 1, [1]: "APP_HANDLER", DISCORD_LAUNCH_ACTIVITY: 2, [2]: "DISCORD_LAUNCH_ACTIVITY" };
export const ApplicationCommandOptionType = { SUB_COMMAND: 1, [1]: "SUB_COMMAND", SUB_COMMAND_GROUP: 2, [2]: "SUB_COMMAND_GROUP", STRING: 3, [3]: "STRING", INTEGER: 4, [4]: "INTEGER", BOOLEAN: 5, [5]: "BOOLEAN", USER: 6, [6]: "USER", CHANNEL: 7, [7]: "CHANNEL", ROLE: 8, [8]: "ROLE", MENTIONABLE: 9, [9]: "MENTIONABLE", NUMBER: 10, [10]: "NUMBER", ATTACHMENT: 11, [11]: "ATTACHMENT" };
export const ApplicationCommandType = { CHAT: 1, [1]: "CHAT", USER: 2, [2]: "USER", MESSAGE: 3, [3]: "MESSAGE", PRIMARY_ENTRY_POINT: 4, [4]: "PRIMARY_ENTRY_POINT" };
export const InteractionTypes = { APPLICATION_COMMAND: 2, [2]: "APPLICATION_COMMAND", MESSAGE_COMPONENT: 3, [3]: "MESSAGE_COMPONENT", APPLICATION_COMMAND_AUTOCOMPLETE: 4, [4]: "APPLICATION_COMMAND_AUTOCOMPLETE", MODAL_SUBMIT: 5, [5]: "MODAL_SUBMIT" };
export const UnfurledMediaLoadingState = { UNKNOWN: 0, [0]: "UNKNOWN", LOADING: 1, [1]: "LOADING", LOADED_SUCCESS: 2, [2]: "LOADED_SUCCESS", LOADED_NOT_FOUND: 3, [3]: "LOADED_NOT_FOUND" };
export const ComponentType = { UNKNOWN: -1, [-1]: "UNKNOWN", ACTION_ROW: 1, [1]: "ACTION_ROW", BUTTON: 2, [2]: "BUTTON", STRING_SELECT: 3, [3]: "STRING_SELECT", TEXT_INPUT: 4, [4]: "TEXT_INPUT", USER_SELECT: 5, [5]: "USER_SELECT", ROLE_SELECT: 6, [6]: "ROLE_SELECT", MENTIONABLE_SELECT: 7, [7]: "MENTIONABLE_SELECT", CHANNEL_SELECT: 8, [8]: "CHANNEL_SELECT", SECTION: 9, [9]: "SECTION", TEXT_DISPLAY: 10, [10]: "TEXT_DISPLAY", THUMBNAIL: 11, [11]: "THUMBNAIL", MEDIA_GALLERY: 12, [12]: "MEDIA_GALLERY", FILE: 13, [13]: "FILE", SEPARATOR: 14, [14]: "SEPARATOR", CONTENT_INVENTORY_ENTRY: 16, [16]: "CONTENT_INVENTORY_ENTRY", CONTAINER: 17, [17]: "CONTAINER", LABEL: 18, [18]: "LABEL", FILE_UPLOAD: 19, [19]: "FILE_UPLOAD", CHECKPOINT_CARD: 20, [20]: "CHECKPOINT_CARD", RADIO_GROUP: 21, [21]: "RADIO_GROUP", CHECKBOX_GROUP: 22, [22]: "CHECKBOX_GROUP", CHECKBOX: 23, [23]: "CHECKBOX" };
export const ButtonStyle = { PRIMARY: 1, [1]: "PRIMARY", SECONDARY: 2, [2]: "SECONDARY", SUCCESS: 3, [3]: "SUCCESS", DESTRUCTIVE: 4, [4]: "DESTRUCTIVE", LINK: 5, [5]: "LINK", PREMIUM: 6, [6]: "PREMIUM" };
export const TextInputComponentStyle = { SMALL: 1, [1]: "SMALL", PARAGRAPH: 2, [2]: "PARAGRAPH" };
export const SeparatorSpacingSize = { SMALL: 1, [1]: "SMALL", LARGE: 2, [2]: "LARGE" };
export const InvoiceDiscountTypes = { SUBSCRIPTION_PLAN: 1, [1]: "SUBSCRIPTION_PLAN", ENTITLEMENT: 2, [2]: "ENTITLEMENT", PREMIUM_LEGACY_UPGRADE_PROMOTION: 3, [3]: "PREMIUM_LEGACY_UPGRADE_PROMOTION", PREMIUM_TRIAL: 4, [4]: "PREMIUM_TRIAL", DEFAULT: 5, [5]: "DEFAULT" };
export const PurchaseNotificationType = { GUILD_PRODUCT: 0, [0]: "GUILD_PRODUCT" };
export const AuthenticatorType = { WEBAUTHN: 1, [1]: "WEBAUTHN", TOTP: 2, [2]: "TOTP", SMS: 3, [3]: "SMS" };