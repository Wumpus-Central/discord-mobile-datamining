// === Module 9170: PresenceActivityStatus ===

// Module 9170 (PresenceActivityStatus)
import noopAll from "noop" /* 19 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7417 */;
import GameControllerIcon from "GameControllerIcon" /* 9119 */;
import TvIcon from "TvIcon" /* 9166 */;
import AppsIcon2 from "AppsIcon" /* 9171 */;
import MusicIcon from "MusicIcon" /* 9172 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 9174 */;
import { ActivityTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

export default function PresenceActivityStatus(hideText) {
  ({ activity, hideIcon } = hideText);
  ({ iconStyle, textStyle, maxFontSizeMultiplier } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (hideIcon) {
    if (flag) {
      return null;
    }
  }
  if (isEmbeddedActivityDefault(activity)) {
    let AppsIcon = AppsIcon2.AppsIcon;
  } else if (activity.type === ActivityTypes.PLAYING) {
    AppsIcon = GameControllerIcon.GameControllerIcon;
  } else if (activity.type === tmp3.LISTENING) {
    AppsIcon = MusicIcon.MusicIcon;
  } else {
    if (activity.type !== tmp3.WATCHING) {
      if (activity.type !== tmp3.STREAMING) {
        AppsIcon = null;
        if (activity.type === tmp3.COMPETING) {
          AppsIcon = GameControllerIcon.GameControllerIcon;
        }
      }
    }
    AppsIcon = TvIcon.TvIcon;
  }
  let tmp12 = !hideIcon;
  if (!hideIcon) {
    tmp12 = null != AppsIcon;
  }
  if (tmp12) {
    let obj = { icon: null, style: null };
    obj[0] = AppsIcon;
    obj[1] = iconStyle;
    tmp12 = callback(tmp(9165), obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (!flag) {
    obj = { style: null, maxFontSizeMultiplier: null, children: null };
    obj[0] = textStyle;
    obj[1] = maxFontSizeMultiplier;
    obj[2] = getActivityStatusTextDefault(activity, true).text;
    tmp15 = callback(tmp(9168), obj);
  }
  children[1] = tmp15;
  return closure_6(closure_5, { children });
};