// === Module 9681: VideoBackgroundOptions ===

// Module 9681 (VideoBackgroundOptions)
import nativeDefault from "native" /* 587 */;
import getDefaultBackgroundDataDefault from "getDefaultBackgroundData" /* 9318 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const Image = fn(17).Image;
const BLUR_BACKGROUND_OPTION = fn(6484).BLUR_BACKGROUND_OPTION;
const jsx = fn(21).jsx;
const none = "none";
const createStyles = fn(4890);
let obj2 = { imageThumbnail: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: nativeDefault.radii.lg };
obj2.imageThumbnail = size;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/native/VideoBackgroundOptions.tsx");

export const NONE_VALUE = "none";
export const toVideoBackgroundRadioValue = function toVideoBackgroundRadioValue(lastUsedVideoBackgroundOption) {
  if (null == lastUsedVideoBackgroundOption) {
    let tmp2 = none;
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
export const useVideoBackgroundRadioOptions = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(5);
  const tmp4 = closure_7();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Object = Object;
    const values = Object.values(getDefaultBackgroundDataDefault());
    const found = values.filter((source) => "" !== source.source);
    cResult[0] = found;
    let first = found;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: none, label: null, icon: null };
    const intl = tmp(1126).intl;
    obj2.label = intl.string(tmp(1126).t.fUdMeO);
    const obj3 = { IconComponent: tmp(7588).DenyIcon };
    obj2.icon = jsx(tmp(5999).TableRowIcon, { IconComponent: tmp(7588).DenyIcon });
    cResult[1] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { value: BLUR_BACKGROUND_OPTION, label: null, icon: null };
    const intl2 = tmp(1126).intl;
    obj4.label = intl2.string(tmp(1126).t.LhSyL8);
    const obj5 = { IconComponent: tmp(9682).BlurBackgroundIcon };
    obj4.icon = jsx(tmp(5999).TableRowIcon, { IconComponent: tmp(9682).BlurBackgroundIcon });
    cResult[2] = obj4;
    let tmp10 = obj4;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const items = [tmp7, tmp10];
    HermesBuiltin.arraySpread(first.map((uri) => {
      const obj = { value: uri.id, label: uri.name, icon: <Image source={{ uri: uri.source }} style={imageThumbnail.imageThumbnail} resizeMode="cover" /> };
      return obj;
    }), 2);
    cResult[3] = tmp4;
    cResult[4] = items;
    let tmp13 = items;
  } else {
    tmp13 = cResult[4];
  }
  return tmp13;
}) : (() => {
  _require = closure_7();
  const values = Object.values(getDefaultBackgroundDataDefault());
  const found = values.filter((source) => "" !== source.source);
  let obj = { value: none, label: null, icon: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.fUdMeO);
  obj.icon = jsx(require("TableRowIcon").TableRowIcon, { IconComponent: require("DenyIcon").DenyIcon });
  const items = [obj, ];
  const obj3 = { value: BLUR_BACKGROUND_OPTION, label: null, icon: null };
  const intl2 = require("util").intl;
  obj3.label = intl2.string(require("util").t.LhSyL8);
  const obj2 = { IconComponent: require("DenyIcon").DenyIcon };
  obj3.icon = jsx(require("TableRowIcon").TableRowIcon, { IconComponent: require("BlurBackgroundIcon").BlurBackgroundIcon });
  items[1] = obj3;
  HermesBuiltin.arraySpread(found.map((uri) => {
    const obj = { value: uri.id, label: uri.name, icon: <Image source={{ uri: uri.source }} style={imageThumbnail.imageThumbnail} resizeMode="cover" /> };
    return obj;
  }), 2);
  return items;
});