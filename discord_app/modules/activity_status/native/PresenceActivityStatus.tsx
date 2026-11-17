// === Module 14141: PresenceActivityStatus ===

// Module 14141 (PresenceActivityStatus)
import ActivityTypes from "ActivityTypes" /* 6066 */;
import GameControllerIcon2 from "GameControllerIcon" /* 7448 */;
import AppsIcon from "AppsIcon" /* 8112 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 8480 */;
import MusicIcon from "MusicIcon" /* 11572 */;
import ActivityStatusIconDefault from "ActivityStatusIcon" /* 14136 */;
import TvIcon from "TvIcon" /* 14137 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 14139 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 14142 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
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
  if (!isEmbeddedActivityDefault(activity)) {
    if (!obj.isConjurePresenceActivity(activity)) {
      if (activity.type === ActivityTypes.ActivityTypes.PLAYING) {
        let GameControllerIcon = GameControllerIcon2.GameControllerIcon;
      } else if (activity.type === ActivityTypes.ActivityTypes.LISTENING) {
        GameControllerIcon = MusicIcon.MusicIcon;
      } else {
        if (activity.type !== ActivityTypes.ActivityTypes.WATCHING) {
          if (activity.type !== ActivityTypes.ActivityTypes.STREAMING) {
            GameControllerIcon = null;
            if (activity.type === ActivityTypes.ActivityTypes.COMPETING) {
              GameControllerIcon = GameControllerIcon2.GameControllerIcon;
            }
          }
        }
        GameControllerIcon = TvIcon.TvIcon;
      }
    }
    let tmp7 = !hideIcon;
    if (!hideIcon) {
      tmp7 = null != GameControllerIcon;
    }
    if (tmp7) {
      const obj2 = { icon: GameControllerIcon, style: iconStyle };
      tmp7 = React3(ActivityStatusIconDefault, obj2);
    }
    items = [tmp7, ];
    let tmp10 = !flag;
    if (!flag) {
      const obj3 = { style: textStyle, maxFontSizeMultiplier, children: getActivityStatusTextDefault(activity, true).text };
      tmp10 = React3(ActivityStatusTextDefault, obj3);
    }
    const obj4 = { children: null };
    items[1] = tmp10;
    obj4.children = items;
    return hasOwnProperty(React4, obj4);
  }
  GameControllerIcon = AppsIcon.AppsIcon;
};