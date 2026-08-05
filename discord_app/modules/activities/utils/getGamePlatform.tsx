// discord_app/modules/activities/utils/getGamePlatform.tsx
import ME from "ME";
import { isOnXbox } from "isOnXbox.tsx";

let c3;
let obj1;
({ ActivityTypes: obj1, ActivityGamePlatforms: c3 } = ME);
const result = require("set").fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

export default function getGamePlatform(type) {
  let tmp = null;
  if (null != type) {
    tmp = null;
    if (null != type.type) {
      tmp = null;
      if (type.type === constants.PLAYING) {
        if (isOnXbox(type)) {
          let DESKTOP = constants2.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = constants2.DESKTOP;
        }
      }
    }
  }
  return tmp;
};