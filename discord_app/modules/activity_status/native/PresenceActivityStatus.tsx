// === Module 11041: PresenceActivityStatus ===

// Module 11041 (PresenceActivityStatus)
import AppsIcon2 from "AppsIcon" /* 5193 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7859 */;
import GameControllerIcon from "GameControllerIcon" /* 9377 */;
import MusicIcon from "MusicIcon" /* 10062 */;
import ActivityStatusIconDefault from "ActivityStatusIcon" /* 11036 */;
import TvIcon from "TvIcon" /* 11037 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 11039 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 11042 */;
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
  } else if (activity.type === ActivityTypes.LISTENING) {
    AppsIcon = MusicIcon.MusicIcon;
  } else {
    if (activity.type !== ActivityTypes.WATCHING) {
      if (activity.type !== ActivityTypes.STREAMING) {
        AppsIcon = null;
        if (activity.type === ActivityTypes.COMPETING) {
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
    const obj = { icon: AppsIcon, style: iconStyle };
    tmp12 = React4(ActivityStatusIconDefault, obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (!flag) {
    const obj2 = { style: textStyle, maxFontSizeMultiplier, children: getActivityStatusTextDefault(activity, true).text };
    tmp15 = React4(ActivityStatusTextDefault, obj2);
  }
  children[1] = tmp15;
  return timestampProducer(hasOwnProperty, { children });
};