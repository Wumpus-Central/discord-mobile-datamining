// === Module 10007: getDefaultBackgroundData ===

// Module 10007 (getDefaultBackgroundData)
import util from "util" /* 1115 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 7320 */;
import _modDef10008 from "module_10008" /* 10008 */;
import _modDef10009 from "module_10009" /* 10009 */;
import _modDef10010 from "module_10010" /* 10010 */;
import _modDef10011 from "module_10011" /* 10011 */;
import size from "module_2" /* 2 */;

const DefaultVideoBackground = VideoBackgroundConstants.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = size.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  const obj = {};
  const obj2 = { id: DefaultVideoBackground.OPTION_1, source: _modDef10008, name: null };
  const intl = util.intl;
  obj2.name = intl.string(util.t.SHUTBj);
  obj[DefaultVideoBackground.OPTION_1] = obj2;
  const obj3 = { id: DefaultVideoBackground.OPTION_2, source: _modDef10009, name: null };
  const intl2 = util.intl;
  obj3.name = intl2.string(util.t.UxTcIq);
  obj[DefaultVideoBackground.OPTION_2] = obj3;
  const obj4 = { id: DefaultVideoBackground.OPTION_3, source: _modDef10010, name: null };
  const intl3 = util.intl;
  obj4.name = intl3.string(util.t.HFBsc8);
  obj[DefaultVideoBackground.OPTION_3] = obj4;
  const obj5 = { id: DefaultVideoBackground.OPTION_4, source: _modDef10011, name: null };
  const intl4 = util.intl;
  obj5.name = intl4.string(util.t["/Dl3+Z"]);
  obj[DefaultVideoBackground.OPTION_4] = obj5;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};