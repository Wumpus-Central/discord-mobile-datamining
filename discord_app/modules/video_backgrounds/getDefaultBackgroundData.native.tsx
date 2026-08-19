// === Module 9665: DefaultVideoBackground ===

// Module 9665 (DefaultVideoBackground)
import set from "set" /* 2 */;
import VideoFilterType from "VideoFilterType" /* 8381 */;

const DefaultVideoBackground = VideoFilterType.DefaultVideoBackground;
let closure_1 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = set.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  return { [closure_0.OPTION_1]: closure_1, [closure_0.OPTION_2]: closure_1, [closure_0.OPTION_3]: closure_1, [closure_0.OPTION_4]: closure_1, [closure_0.OPTION_7]: closure_1, [closure_0.OPTION_8]: closure_1, [closure_0.OPTION_9]: closure_1, [closure_0.OPTION_10]: closure_1 };
};