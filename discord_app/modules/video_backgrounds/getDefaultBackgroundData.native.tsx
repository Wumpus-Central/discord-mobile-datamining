// === Module 9106: getDefaultBackgroundData ===

// Module 9106 (getDefaultBackgroundData)
import util from "util" /* 1114 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 6987 */;
import _modDef9107 from "module_9107" /* 9107 */;
import _modDef9108 from "module_9108" /* 9108 */;
import _modDef9109 from "module_9109" /* 9109 */;
import _modDef9110 from "module_9110" /* 9110 */;
import size from "module_2" /* 2 */;

const DefaultVideoBackground = VideoBackgroundConstants.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = size.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  let obj = {};
  obj = { id: DefaultVideoBackground.OPTION_1, source: _modDef9107, name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.SHUTBj);
  obj[DefaultVideoBackground.OPTION_1] = obj;
  obj = { id: DefaultVideoBackground.OPTION_2, source: _modDef9108, name: null };
  const intl2 = util.intl;
  obj.name = intl2.string(util.t.UxTcIq);
  obj[DefaultVideoBackground.OPTION_2] = obj;
  const obj1 = { id: DefaultVideoBackground.OPTION_3, source: _modDef9109, name: null };
  const intl3 = util.intl;
  obj1.name = intl3.string(util.t.HFBsc8);
  obj[DefaultVideoBackground.OPTION_3] = obj1;
  const obj2 = { id: DefaultVideoBackground.OPTION_4, source: _modDef9110, name: null };
  const intl4 = util.intl;
  obj2.name = intl4.string(util.t["/Dl3+Z"]);
  obj[DefaultVideoBackground.OPTION_4] = obj2;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};