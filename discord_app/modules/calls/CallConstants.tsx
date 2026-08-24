// === Module 4544: ParticipantTypes ===

// Module 4544 (ParticipantTypes)
import set from "set" /* 2 */;

let obj = { STREAM: 0, [0]: "STREAM", HIDDEN_STREAM: 1, [1]: "HIDDEN_STREAM", USER: 2, [2]: "USER", ACTIVITY: 3, [3]: "ACTIVITY" };
obj = { VIDEO: 0, [0]: "VIDEO", CAMERA_PREVIEW: 1, [1]: "CAMERA_PREVIEW" };
const result = set.fileFinishedImporting("modules/calls/CallConstants.tsx");

export const ParticipantTypes = obj;
export const ContextMenuTileTypes = { STREAM: "STREAM", USER: "USER", ACTIVITY: "ACTIVITY" };
export const ParticipantSelectionTypes = { NONE: "NONE", AUTO: "AUTO" };
export const VoicePlatforms = { DESKTOP: 0, [0]: "DESKTOP", MOBILE: 1, [1]: "MOBILE", XBOX: 2, [2]: "XBOX", PLAYSTATION: 3, [3]: "PLAYSTATION", QUEST: 4, [4]: "QUEST" };
export const CallMenuEntrypoint = { CONTEXT_MENU: "Context Menu", THREE_DOT: "Three-Dot", CARET: "Caret", OTHER_BUTTON: "Other Button" };
export const isStreamParticipant = function isStreamParticipant(stateFromStores) {
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let tmp3 = type === obj.STREAM;
  if (!tmp3) {
    let type1;
    if (stateFromStores != null) {
      type1 = stateFromStores.type;
    }
    tmp3 = type1 === tmp2.HIDDEN_STREAM;
  }
  return tmp3;
};
export const isUserParticipant = function isUserParticipant(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  return type === obj.USER;
};
export const isActivityParticipant = function isActivityParticipant(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  return type === obj.ACTIVITY;
};
export const PictureInPictureTypes = obj;
export const DEFAULT_PIP_WIDTH = { [obj.VIDEO]: 320, [obj.CAMERA_PREVIEW]: 160 };
export const MAX_PIP_WIDTH = { [obj.VIDEO]: 960, [obj.CAMERA_PREVIEW]: 480 };
export const MIN_PIP_WIDTH = { [obj.VIDEO]: 200, [obj.CAMERA_PREVIEW]: 160 };
export const EMOJI_PICKER_EMOJI_TO_SHOW_COUNT = 8;
export const MIN_CALL_WIDTH = 550;
export const MIN_CALL_HEIGHT = 230;