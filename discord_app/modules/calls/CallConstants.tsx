// === Module 4581: CallConstants ===

// Module 4581 (CallConstants)
import size from "module_2" /* 2 */;

let PictureInPictureTypes = { STREAM: 0, [0]: "STREAM", HIDDEN_STREAM: 1, [1]: "HIDDEN_STREAM", USER: 2, [2]: "USER", ACTIVITY: 3, [3]: "ACTIVITY" };
PictureInPictureTypes = { VIDEO: 0, [0]: "VIDEO", CAMERA_PREVIEW: 1, [1]: "CAMERA_PREVIEW" };
const result = size.fileFinishedImporting("modules/calls/CallConstants.tsx");

export const ParticipantTypes = PictureInPictureTypes;
export const ContextMenuTileTypes = { STREAM: "STREAM", USER: "USER", ACTIVITY: "ACTIVITY" };
export const ParticipantSelectionTypes = { NONE: "NONE", AUTO: "AUTO" };
export const VoicePlatforms = { DESKTOP: 0, [0]: "DESKTOP", MOBILE: 1, [1]: "MOBILE", XBOX: 2, [2]: "XBOX", PLAYSTATION: 3, [3]: "PLAYSTATION", QUEST: 4, [4]: "QUEST" };
export const CallMenuEntrypoint = { CONTEXT_MENU: "Context Menu", THREE_DOT: "Three-Dot", CARET: "Caret", OTHER_BUTTON: "Other Button" };
export const isStreamParticipant = function isStreamParticipant(selectedParticipant) {
  let type;
  if (selectedParticipant != null) {
    type = selectedParticipant.type;
  }
  let tmp3 = type === obj.STREAM;
  if (!tmp3) {
    let type1;
    if (selectedParticipant != null) {
      type1 = selectedParticipant.type;
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
export const isActivityParticipant = function isActivityParticipant(participant) {
  let type;
  if (participant != null) {
    type = participant.type;
  }
  return type === obj.ACTIVITY;
};
export { PictureInPictureTypes };
export const DEFAULT_PIP_WIDTH = { [PictureInPictureTypes.VIDEO]: 320, [PictureInPictureTypes.CAMERA_PREVIEW]: 160 };
export const MAX_PIP_WIDTH = { [PictureInPictureTypes.VIDEO]: 960, [PictureInPictureTypes.CAMERA_PREVIEW]: 480 };
export const MIN_PIP_WIDTH = { [PictureInPictureTypes.VIDEO]: 200, [PictureInPictureTypes.CAMERA_PREVIEW]: 160 };
export const EMOJI_PICKER_EMOJI_TO_SHOW_COUNT = 8;
export const MIN_CALL_WIDTH = 550;
export const MIN_CALL_HEIGHT = 230;