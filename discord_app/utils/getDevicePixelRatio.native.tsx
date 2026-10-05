// discord_app/utils/getDevicePixelRatio.native.tsx
import react_native from "../../_runtime/00017_react-native.js";
import size from "../../_runtime/metro/00002__.js";

const PixelRatio = react_native.PixelRatio;
const result = size.fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
}
