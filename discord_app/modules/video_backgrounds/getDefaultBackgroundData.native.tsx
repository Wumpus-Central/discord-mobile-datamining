// === Module 9191: getDefaultBackgroundData ===

// Module 9191 (getDefaultBackgroundData)
import util from "util" /* 1114 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 7060 */;
import _modDef9192 from "module_9192" /* 9192 */;
import _modDef9193 from "module_9193" /* 9193 */;
import _modDef9194 from "module_9194" /* 9194 */;
import _modDef9195 from "module_9195" /* 9195 */;
import size from "module_2" /* 2 */;

const DefaultVideoBackground = VideoBackgroundConstants.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = size.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  let obj = {};
  obj = { id: DefaultVideoBackground.OPTION_1, source: _modDef9192, name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.SHUTBj);
  obj[DefaultVideoBackground.OPTION_1] = obj;
  obj = { id: DefaultVideoBackground.OPTION_2, source: _modDef9193, name: null };
  const intl2 = util.intl;
  obj.name = intl2.string(util.t.UxTcIq);
  obj[DefaultVideoBackground.OPTION_2] = obj;
  const obj1 = { id: DefaultVideoBackground.OPTION_3, source: _modDef9194, name: null };
  const intl3 = util.intl;
  obj1.name = intl3.string(util.t.HFBsc8);
  obj[DefaultVideoBackground.OPTION_3] = obj1;
  const obj2 = { id: DefaultVideoBackground.OPTION_4, source: _modDef9195, name: null };
  const intl4 = util.intl;
  obj2.name = intl4.string(util.t["/Dl3+Z"]);
  obj[DefaultVideoBackground.OPTION_4] = obj2;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};