// discord_app/modules/activity_status/native/PresenceActivityStatus.tsx
import "noop";
import { ActivityTypes } from "ME";
import jsxProd from "jsxProd";
import { AppsIcon } from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import { GameControllerIcon } from "../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import { MusicIcon } from "../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import { TvIcon } from "../../../design/components/Icon/native/redesign/generated/TvIcon.tsx";
import { isEmbeddedActivity } from "../../activities/utils/isEmbeddedActivity.tsx";
import { getActivityStatusText } from "../getActivityStatusText.tsx";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

export default function PresenceActivityStatus(hideText) {
  let activity;
  let hideIcon;
  let iconStyle;
  let maxFontSizeMultiplier;
  let textStyle;
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
  if (isEmbeddedActivity(activity)) {
    let AppsIcon = AppsIcon.AppsIcon;
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
    tmp12 = callback(tmp(9643), obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (!flag) {
    obj = { style: null, maxFontSizeMultiplier: null, children: null };
    obj[0] = textStyle;
    obj[1] = maxFontSizeMultiplier;
    obj[2] = getActivityStatusText(activity, true).text;
    tmp15 = callback(tmp(9646), obj);
  }
  children[1] = tmp15;
  return closure_6(closure_5, { children });
};