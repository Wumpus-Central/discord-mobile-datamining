// discord_app/utils/getDevicePixelRatio.native.tsx
import set from "../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../_runtime/00017_get_ActivityIndicator.js";

const PixelRatio = get_ActivityIndicator.PixelRatio;
const result = set.fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
};