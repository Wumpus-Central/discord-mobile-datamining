// _runtime/15547_PLAY_MODE.js
let obj = {
  UNSTARTED: "unstarted",
  ENDED: "ended",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering",
  VIDEO_CUED: "video cued",
};
obj = { "-1": obj.UNSTARTED, 0: null, 1: null, 2: null, 3: null, 5: null };
({ ENDED: obj2[0], PLAYING: obj2[1], PAUSED: obj2[2], BUFFERING: obj2[3], VIDEO_CUED: obj2[5] } = obj);
obj = {
  INVALID_PARAMETER: "invalid_parameter",
  HTML5_ERROR: "HTML5_error",
  VIDEO_NOT_FOUND: "video_not_found",
  EMBED_NOT_ALLOWED: "embed_not_allowed",
};
({
  HTML5_ERROR: obj4[5],
  VIDEO_NOT_FOUND: obj4[100],
  EMBED_NOT_ALLOWED: obj4[101],
  EMBED_NOT_ALLOWED: obj4[150],
} = obj);

export const PLAY_MODE = true;
export const PAUSE_MODE = false;
export const MUTE_MODE = true;
export const UNMUTE_MODE = false;
export const PLAYER_STATES_NAMES = obj;
export const PLAYER_STATES = obj;
export const PLAYER_ERROR_NAMES = obj;
export const PLAYER_ERROR = { 2: null, 5: null, 100: obj.INVALID_PARAMETER, 101: null, 150: null };
export const CUSTOM_USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36";
export const DEFAULT_BASE_URL = "https://lonelycpp.github.io/react-native-youtube-iframe/iframe.html";
