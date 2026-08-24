// discord_app/utils/getDevicePixelRatio.web.tsx
import set from "../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};