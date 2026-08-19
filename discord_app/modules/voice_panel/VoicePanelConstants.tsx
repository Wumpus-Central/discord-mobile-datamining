// discord_app/modules/voice_panel/VoicePanelConstants.tsx
import obj132 from "../../utils/PlatformUtils.tsx";

const obj = {};
const merged = Object.assign(obj);
obj.overshootClamping = true;
const obj1 = {};
const merged1 = Object.assign(obj);
obj1.overshootClamping = true;
const obj2 = {};
const merged2 = Object.assign(obj);
obj2.mass = 0.3;
const obj3 = { NO_VIDEO_PARTICIPANTS: "no_video_participants", CALLER_DISCONNECTED: "caller_disconnected" };
const obj4 = { [obj3.NO_VIDEO_PARTICIPANTS]: { width: 2, height: 1 } };
obj132.isAndroid();
obj132.isIOS();
const result = obj132.fileFinishedImporting("modules/voice_panel/VoicePanelConstants.tsx");

export const VoicePanelModes = obj;
export const getAnalyticsNameForVoicePanelMode = function getAnalyticsNameForVoicePanelMode(arg0) {
  if (obj.DISMISSED === arg0) {
    return "dismissed";
  } else if (obj.PIP === arg0) {
    return "pip";
  } else if (obj.PANEL === arg0) {
    return "grid";
  }
};
export const VOICE_PANEL_CHUNK_DIVISOR = 3;
export const DEFAULT_BORDER_RADIUS = 24;
export const DEFAULT_BORDER_RADIUS_PIP = 24;
export const DRAWER_SPRING_PHYSICS = { mass: 0.2, damping: 10, stiffness: 200 };
export const LAYOUT_PHYSICS = { mass: 0.3, damping: 25, stiffness: 150 };
export const UI_SHOW_HIDE_PHYSICS = { mass: 0.4, damping: 60, stiffness: 150 };
export const MODE_CHANGE_PHYSICS = obj;
export const MODE_CHANGE_PHYSICS_CLAMPED = obj;
export const BORDER_RADIUS_PHYSICS = obj1;
export const PANEL_CONTROLS_HEIGHT_PHYSICS = obj2;
export const SPEAKING_PHYSICS = { mass: 0.32, damping: 10, stiffness: 300, restDisplacementThreshold: 0.001, restSpeedThreshold: 0.001, overshootClamping: true };
export const PUSH_TO_TALK_PIP_PHYSICS = { damping: 20, mass: 0.1, stiffness: 100 };
export const DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = { mass: 0.1, damping: 20, stiffness: 500 };
export const GridItemTypes = { USER: "USER", STREAM: "STREAM", ACTIVITY: "ACTIVIY" };
export const BASE_TARGET_CARD_SIZE = 165;
export const VoicePanelCTACard = obj3;
export const VoicePanelCTACardDimensions = obj4;
export const VoicePanelCTACardDimensionKeys = new Set(Object.keys(obj4));
export const VoicePanelCardItemType = { PARTICIPANT: "participant", CTA: "cta" };
export const IS_ANDROID = obj132;
export const IS_IOS = obj132;
export const SECONDARY_PIP_TOP_MARGIN = 8;
export const VOICE_PANEL_DRAWER_MAX_WIDTH = 540;