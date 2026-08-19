// discord_app/utils/getDevicePixelRatio.native.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../_runtime/00017_get_ActivityIndicator.js";

const PixelRatio = get_ActivityIndicator.PixelRatio;
const result = obj132.fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
};