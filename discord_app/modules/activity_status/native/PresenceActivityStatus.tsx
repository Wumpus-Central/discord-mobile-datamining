// === Module 10887: PresenceActivityStatus ===

// Module 10887 (PresenceActivityStatus)
import AppsIcon2 from "AppsIcon" /* 5106 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7739 */;
import GameControllerIcon from "GameControllerIcon" /* 9223 */;
import MusicIcon from "MusicIcon" /* 9911 */;
import TvIcon from "TvIcon" /* 10883 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10888 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

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
    let obj = { icon: AppsIcon, style: iconStyle };
    tmp12 = React4(tmp(10882), obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (!flag) {
    obj = { style: textStyle, maxFontSizeMultiplier, children: getActivityStatusTextDefault(activity, true).text };
    tmp15 = React4(tmp(10885), obj);
  }
  children[1] = tmp15;
  return timestampProducer(hasOwnProperty, { children });
};