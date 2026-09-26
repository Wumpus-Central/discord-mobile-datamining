// discord_app/modules/video_backgrounds/native/VideoBackgroundOptions.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getDefaultBackgroundDataDefault from "../getDefaultBackgroundData.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const Image = fn(17).Image;
const BLUR_BACKGROUND_OPTION = fn(6408).BLUR_BACKGROUND_OPTION;
const jsx = fn(21).jsx;
const none = "none";
const createStyles = fn(4836);
let obj2 = { imageThumbnail: null };
let size = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  borderRadius: nativeDefault.radii.lg,
};
obj2.imageThumbnail = size;
let closure_7 = createStyles.createStyles(obj2);
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
export const useVideoBackgroundRadioOptions = function useVideoBackgroundRadioOptions() {
  _require = closure_7();
  const values = Object.values(getDefaultBackgroundDataDefault());
  const found = values.filter((source) => "" !== source.source);
  let obj = { value: none, label: null, icon: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.fUdMeO);
  obj.icon = jsx(require("TableRowIcon").TableRowIcon, { IconComponent: require("DenyIcon").DenyIcon });
  const items = [obj];
  const obj3 = { value: BLUR_BACKGROUND_OPTION, label: null, icon: null };
  const intl2 = require("util").intl;
  obj3.label = intl2.string(require("util").t.LhSyL8);
  const obj2 = { IconComponent: require("DenyIcon").DenyIcon };
  obj3.icon = jsx(require("TableRowIcon").TableRowIcon, {
    IconComponent: require("BlurBackgroundIcon").BlurBackgroundIcon,
  });
  items[1] = obj3;
  HermesBuiltin.arraySpread(
    found.map((uri) => {
      const obj = {
        value: uri.id,
        label: uri.name,
        icon: <Image source={{ uri: uri.source }} style={imageThumbnail.imageThumbnail} resizeMode="cover" />,
      };
      return obj;
    }),
    2,
  );
  return items;
};
