// === Module 9681: VideoBackgroundOptions ===

// Module 9681 (VideoBackgroundOptions)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 6484 */;
import getDefaultBackgroundDataDefault from "getDefaultBackgroundData" /* 9318 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let size;
const Image = react_native.Image;
const BLUR_BACKGROUND_OPTION = VideoBackgroundConstants.BLUR_BACKGROUND_OPTION;
const jsx = Fragment.jsx;
const none = "none";
let obj = { imageThumbnail: size };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: nativeDefault.radii.lg };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let imageThumbnail;
  let intl;
  let intl2;
  let tmp11;
  let tmp14;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp5 = closure_7();
  _require = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Object = Object;
    const values = Object.values(getDefaultBackgroundDataDefault());
    const found = values.filter((source) => "" !== source.source);
    cResult[0] = found;
    first = found;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: none, label: intl.string(require("intl").t.fUdMeO), icon: null };
    intl = tmp2(1126).intl;
    ({ IconComponent: require("DenyIcon").DenyIcon });
    const TableRowIcon = tmp2(5999).TableRowIcon;
    cResult[1] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { value: BLUR_BACKGROUND_OPTION, label: intl2.string(require("intl").t.LhSyL8), icon: null };
    intl2 = tmp2(1126).intl;
    ({ IconComponent: require("BlurBackgroundIcon").BlurBackgroundIcon });
    const TableRowIcon2 = tmp2(5999).TableRowIcon;
    cResult[2] = obj4;
    tmp11 = obj4;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const items = [tmp8, tmp11];
    HermesBuiltin.arraySpread(items, first.map((uri) => ({ value: uri.id, label: uri.name, icon: null })), 2);
    cResult[3] = tmp5;
    cResult[4] = items;
    tmp14 = items;
  } else {
    tmp14 = cResult[4];
  }
  return tmp14;
}) : (() => {
  let imageThumbnail;
  let intl;
  let intl2;
  _require = closure_7();
  const values = Object.values(getDefaultBackgroundDataDefault());
  const found = values.filter((source) => "" !== source.source);
  const obj = { value: none, label: intl.string(require("intl").t.fUdMeO), icon: null };
  intl = require("intl").intl;
  const obj2 = { IconComponent: require("DenyIcon").DenyIcon };
  const TableRowIcon = require("TableRowIcon").TableRowIcon;
  const items = [obj, ];
  const obj3 = { value: BLUR_BACKGROUND_OPTION, label: intl2.string(require("intl").t.LhSyL8), icon: null };
  intl2 = require("intl").intl;
  ({ IconComponent: require("BlurBackgroundIcon").BlurBackgroundIcon });
  const TableRowIcon2 = require("TableRowIcon").TableRowIcon;
  items[1] = obj3;
  HermesBuiltin.arraySpread(items, found.map((uri) => ({ value: uri.id, label: uri.name, icon: null })), 2);
  return items;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/video_backgrounds/native/VideoBackgroundOptions.tsx");

export const NONE_VALUE = "none";
export const toVideoBackgroundRadioValue = function toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption) {
  let tmp2;
  if (null == lastUsedVideoBackgroundOption) {
    tmp2 = none;
  } else {
    tmp2 = lastUsedVideoBackgroundOption;
    if (lastUsedVideoBackgroundOption !== BLUR_BACKGROUND_OPTION) {
      tmp2 = lastUsedVideoBackgroundOption;
      if (typeof lastUsedVideoBackgroundOption !== "number") {
        tmp2 = none;
      }
    }
  }
  return tmp2;
};
export function fromVideoBackgroundRadioValue(arg0) {
  let tmp = null;
  if (arg0 !== none) {
    tmp = arg0;
  }
  return tmp;
}
export const parseVideoBackgroundRadioValue = function parseVideoBackgroundRadioValue(arg0) {
  let NumberResult = arg0;
  if (arg0 !== none) {
    NumberResult = arg0;
    if (arg0 !== BLUR_BACKGROUND_OPTION) {
      const _Number = Number;
      NumberResult = Number(arg0);
    }
  }
  return NumberResult;
};
export const useVideoBackgroundRadioOptions = tmp3;