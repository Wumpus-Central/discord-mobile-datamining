// === Module 15730: YOU_SCREEN_ID ===

// Module 15730 (YOU_SCREEN_ID)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouConstants.tsx");

export const YOU_SCREEN_ID = "you-screen-native-id";
export const YOU_BANNER_IMAGE_HEIGHT = 150;
export const YOU_AVATAR_PADDING = 6;
export const YOU_AVATAR_SIZE = Button.AVATAR_SIZE_MAP[Button.AvatarSizes.XXLARGE];
export const YOU_CUSTOM_STATUS_MODAL_KEY = "you-custom-status-modal-key";
export const YOU_ACCOUNT_ACTION_SHEET_KEY = "you-account-action-sheet-key";
export const YOU_CARD_BORDER_RADIUS = ThemesDefault.radii.lg;
export const YOU_CARD_BORDER_WIDTH = 1;
export const YOU_SCROLL_EVENT_THROTTLE = 16;
export const YOU_ACTION_SHEET_TOP_INSET = 12;
export const YOU_SCREEN_DROP_SHADOW = { xOffset: 0, yOffset: 2, shadowColorIos: "#000000", shadowOpacity: 0.08, shadowRadius: 2.62, elevation: 4, shadowColorAndroid: "#000000" };