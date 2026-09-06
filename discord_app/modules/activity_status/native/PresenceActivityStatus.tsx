// discord_app/modules/activity_status/native/PresenceActivityStatus.tsx
import AppsIcon2 from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import isEmbeddedActivityDefault from "../../activities/utils/isEmbeddedActivity.tsx";
import GameControllerIcon from "../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import MusicIcon from "../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import ActivityStatusIconDefault from "ActivityStatusIcon.tsx";
import TvIcon from "../../../design/components/Icon/native/redesign/generated/TvIcon.tsx";
import ActivityStatusTextDefault from "ActivityStatusText.tsx";
import getActivityStatusTextDefault from "../getActivityStatusText.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    let obj = { icon: AppsIcon, style: iconStyle };
    tmp12 = React4(ActivityStatusIconDefault, obj);
  }
  const children = [tmp12];
  let tmp15 = !flag;
  if (!flag) {
    obj = { style: textStyle, maxFontSizeMultiplier, children: getActivityStatusTextDefault(activity, true).text };
    tmp15 = React4(ActivityStatusTextDefault, obj);
  }
  children[1] = tmp15;
  return timestampProducer(hasOwnProperty, { children });
}
