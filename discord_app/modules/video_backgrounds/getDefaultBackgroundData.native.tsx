// discord_app/modules/video_backgrounds/getDefaultBackgroundData.native.tsx
import set from "../../../_runtime/00002_set.js";
import getSystemLocale from "../../intl/index.native.tsx";
import VideoFilterType from "VideoBackgroundConstants.tsx";
import metadataDefault from "../../../discord_assets/assets/video-backgrounds/backgrounds/cybercity.png.js";
import metadataDefault2 from "../../../discord_assets/assets/video-backgrounds/backgrounds/movie.png.js";
import metadataDefault3 from "../../../discord_assets/assets/video-backgrounds/backgrounds/tropical.png.js";
import metadataDefault4 from "../../../discord_assets/assets/video-backgrounds/backgrounds/vaporwave.png.js";

const DefaultVideoBackground = VideoFilterType.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = set.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  let obj = {};
  obj = { id: DefaultVideoBackground.OPTION_1, source: metadataDefault, name: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.SHUTBj);
  obj[DefaultVideoBackground.OPTION_1] = obj;
  obj = { id: DefaultVideoBackground.OPTION_2, source: metadataDefault2, name: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.UxTcIq);
  obj[DefaultVideoBackground.OPTION_2] = obj;
  obj1 = { id: DefaultVideoBackground.OPTION_3, source: metadataDefault3, name: null };
  const intl3 = getSystemLocale.intl;
  obj1[2] = intl3.string(getSystemLocale.t.HFBsc8);
  obj[DefaultVideoBackground.OPTION_3] = obj1;
  const obj2 = { id: DefaultVideoBackground.OPTION_4, source: metadataDefault4, name: null };
  const intl4 = getSystemLocale.intl;
  obj2[2] = intl4.string(getSystemLocale.t["/Dl3+Z"]);
  obj[DefaultVideoBackground.OPTION_4] = obj2;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};