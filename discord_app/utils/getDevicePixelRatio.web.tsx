// discord_app/utils/getDevicePixelRatio.web.tsx
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
}
