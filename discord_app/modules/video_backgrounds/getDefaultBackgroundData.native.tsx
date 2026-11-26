// === Module 6019: getDefaultBackgroundData ===

// Module 6019 (getDefaultBackgroundData)
import util from "util" /* 1112 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 6008 */;
import _modDef6020 from "module_6020" /* 6020 */;
import _modDef6021 from "module_6021" /* 6021 */;
import _modDef6022 from "module_6022" /* 6022 */;
import _modDef6023 from "module_6023" /* 6023 */;
import size from "module_2" /* 2 */;

const DefaultVideoBackground = VideoBackgroundConstants.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = size.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  const obj = {};
  const obj2 = { id: DefaultVideoBackground.OPTION_1, source: _modDef6020, name: null };
  const intl = util.intl;
  obj2.name = intl.string(util.t.SHUTBj);
  obj[DefaultVideoBackground.OPTION_1] = obj2;
  const obj3 = { id: DefaultVideoBackground.OPTION_2, source: _modDef6021, name: null };
  const intl2 = util.intl;
  obj3.name = intl2.string(util.t.UxTcIq);
  obj[DefaultVideoBackground.OPTION_2] = obj3;
  const obj4 = { id: DefaultVideoBackground.OPTION_3, source: _modDef6022, name: null };
  const intl3 = util.intl;
  obj4.name = intl3.string(util.t.HFBsc8);
  obj[DefaultVideoBackground.OPTION_3] = obj4;
  const obj5 = { id: DefaultVideoBackground.OPTION_4, source: _modDef6023, name: null };
  const intl4 = util.intl;
  obj5.name = intl4.string(util.t["/Dl3+Z"]);
  obj[DefaultVideoBackground.OPTION_4] = obj5;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};