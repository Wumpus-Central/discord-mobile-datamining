// === Module 9318: getDefaultBackgroundData ===

// Module 9318 (getDefaultBackgroundData)
import util from "util" /* 1126 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 6484 */;
import _modDef9319 from "module_9319" /* 9319 */;
import _modDef9320 from "module_9320" /* 9320 */;
import _modDef9321 from "module_9321" /* 9321 */;
import _modDef9322 from "module_9322" /* 9322 */;
import size from "module_2" /* 2 */;

const DefaultVideoBackground = VideoBackgroundConstants.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = size.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  const obj = {};
  const obj2 = { id: DefaultVideoBackground.OPTION_1, source: _modDef9319, name: null };
  const intl = util.intl;
  obj2.name = intl.string(util.t.SHUTBj);
  obj[DefaultVideoBackground.OPTION_1] = obj2;
  const obj3 = { id: DefaultVideoBackground.OPTION_2, source: _modDef9320, name: null };
  const intl2 = util.intl;
  obj3.name = intl2.string(util.t.UxTcIq);
  obj[DefaultVideoBackground.OPTION_2] = obj3;
  const obj4 = { id: DefaultVideoBackground.OPTION_3, source: _modDef9321, name: null };
  const intl3 = util.intl;
  obj4.name = intl3.string(util.t.HFBsc8);
  obj[DefaultVideoBackground.OPTION_3] = obj4;
  const obj5 = { id: DefaultVideoBackground.OPTION_4, source: _modDef9322, name: null };
  const intl4 = util.intl;
  obj5.name = intl4.string(util.t["/Dl3+Z"]);
  obj[DefaultVideoBackground.OPTION_4] = obj5;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};