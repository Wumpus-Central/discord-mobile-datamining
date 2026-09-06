// discord_app/modules/video_backgrounds/getDefaultBackgroundData.native.tsx
import util from "../../intl/index.native.tsx";
import VideoBackgroundConstants from "VideoBackgroundConstants.tsx";
import _modDef9102 from "../../../discord_assets/assets/video-backgrounds/backgrounds/cybercity.png.js";
import _modDef9103 from "../../../discord_assets/assets/video-backgrounds/backgrounds/movie.png.js";
import _modDef9104 from "../../../discord_assets/assets/video-backgrounds/backgrounds/tropical.png.js";
import _modDef9105 from "../../../discord_assets/assets/video-backgrounds/backgrounds/vaporwave.png.js";
import size from "../../../_runtime/metro/00002__.js";

const DefaultVideoBackground = VideoBackgroundConstants.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = size.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  let obj = {};
  obj = { id: DefaultVideoBackground.OPTION_1, source: _modDef9102, name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.SHUTBj);
  obj[DefaultVideoBackground.OPTION_1] = obj;
  obj = { id: DefaultVideoBackground.OPTION_2, source: _modDef9103, name: null };
  const intl2 = util.intl;
  obj.name = intl2.string(util.t.UxTcIq);
  obj[DefaultVideoBackground.OPTION_2] = obj;
  const obj1 = { id: DefaultVideoBackground.OPTION_3, source: _modDef9104, name: null };
  const intl3 = util.intl;
  obj1.name = intl3.string(util.t.HFBsc8);
  obj[DefaultVideoBackground.OPTION_3] = obj1;
  const obj2 = { id: DefaultVideoBackground.OPTION_4, source: _modDef9105, name: null };
  const intl4 = util.intl;
  obj2.name = intl4.string(util.t["/Dl3+Z"]);
  obj[DefaultVideoBackground.OPTION_4] = obj2;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
}
