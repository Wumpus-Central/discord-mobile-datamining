// discord_app/modules/video_backgrounds/VideoBackgroundConstants.tsx
import set from "../../../_runtime/00002_set.js";

let obj = {
  OPTION_1: 0,
  [0]: "OPTION_1",
  OPTION_2: 1,
  [1]: "OPTION_2",
  OPTION_3: 2,
  [2]: "OPTION_3",
  OPTION_4: 3,
  [3]: "OPTION_4",
  OPTION_7: 7,
  [7]: "OPTION_7",
  OPTION_8: 8,
  [8]: "OPTION_8",
  OPTION_9: 9,
  [9]: "OPTION_9",
  OPTION_10: 10,
  [10]: "OPTION_10",
};
const items = [, , ,];
({ OPTION_7: arr[0], OPTION_8: arr[1], OPTION_9: arr[2], OPTION_10: arr[3] } = obj);
const items1 = [, , , , , , ,];
({
  OPTION_7: arr2[0],
  OPTION_8: arr2[1],
  OPTION_9: arr2[2],
  OPTION_10: arr2[3],
  OPTION_1: arr2[4],
  OPTION_2: arr2[5],
  OPTION_3: arr2[6],
  OPTION_4: arr2[7],
} = obj);
const reduced = items1.reduce((arg0, arg1, arg2) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj[arg1] = arg2;
  return obj;
}, {});
const result = set.fileFinishedImporting("modules/video_backgrounds/VideoBackgroundConstants.tsx");

export const VideoFilterType = { BACKGROUND: 0, [0]: "BACKGROUND" };
export const DefaultVideoBackground = obj;
export const ANIMATED_DEFAULT_VIDEO_BACKGROUNDS = items;
export const DEFAULT_VIDEO_BACKGROUND_SORT = reduced;
export const BLUR_BACKGROUND_OPTION = "blur";
export const BACKGROUND_REPLACEMENT_SIZE = { width: 1280, height: 720 };
export const MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES = 10485760;
