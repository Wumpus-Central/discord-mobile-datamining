// discord_app/utils/getDevicePixelRatio.native.tsx
import _mod17 from "../../_runtime/metro/00017__.js";
import size from "../../_runtime/metro/00002__.js";

const PixelRatio = _mod17.PixelRatio;
const result = size.fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
}
