// discord_app/modules/activity_status/native/PresenceActivityStatus.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import AppsIcon2 from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import isEmbeddedActivityDefault from "../../activities/utils/isEmbeddedActivity.tsx";
import GameControllerIcon2 from "../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import MusicIcon from "../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import ActivityStatusIconDefault from "ActivityStatusIcon.tsx";
import TvIcon from "../../../design/components/Icon/native/redesign/generated/TvIcon.tsx";
import ActivityStatusTextDefault from "ActivityStatusText.tsx";
import conjurePresenceActivity from "../../conjure/presence/conjurePresenceActivity.tsx";
import getActivityStatusTextDefault from "../getActivityStatusText.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroRequire;
function getActivityStatusIcon(activity) {
  let AppsIcon;
  const flag = false;
  if (!isEmbeddedActivityDefault(activity)) {
    let GameControllerIcon;
    const obj = conjurePresenceActivity;
    if (!obj.isConjurePresenceActivity(activity)) {
      if (activity.type === ActivityTypes.PLAYING) {
        GameControllerIcon = GameControllerIcon2.GameControllerIcon;
      } else if (activity.type === ActivityTypes.LISTENING) {
        GameControllerIcon = MusicIcon.MusicIcon;
      } else {
        if (activity.type !== ActivityTypes.WATCHING) {
          if (activity.type !== ActivityTypes.STREAMING) {
            GameControllerIcon = null;
            if (activity.type === ActivityTypes.COMPETING) {
              GameControllerIcon = GameControllerIcon2.GameControllerIcon;
            }
          }
        }
        GameControllerIcon = TvIcon.TvIcon;
      }
    }
    return GameControllerIcon;
  }
  if (flag) {
    AppsIcon = GameControllerIcon2.GameControllerIcon;
  } else {
    AppsIcon = AppsIcon2.AppsIcon;
  }
  GameControllerIcon = AppsIcon;
}
const ActivityTypes = Constants.ActivityTypes;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activity;
      let hideIcon;
      let hideText;
      let iconStyle;
      let items;
      let maxFontSizeMultiplier;
      let textStyle;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(16);
      ({ activity, iconStyle, textStyle, maxFontSizeMultiplier, hideIcon, hideText } = arg0);
      if (undefined !== hideIcon && hideIcon) {
        if (undefined !== hideText && hideText) {
          return null;
        }
      }
      if (cResult[0] !== activity) {
        const tmp7 = getActivityStatusTextDefault(activity, true);
        cResult[0] = activity;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      const text = tmp5.text;
      if (cResult[2] !== activity) {
        const tmp10 = getActivityStatusIcon(activity);
        cResult[2] = activity;
        cResult[3] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp8) {
        if (cResult[5] === (undefined !== hideIcon && hideIcon)) {
          let tmp11;
          if (cResult[6] === iconStyle) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === (undefined !== hideText && hideText)) {
            if (cResult[9] === maxFontSizeMultiplier) {
              if (cResult[10] === text) {
                let tmp16;
                if (cResult[11] === textStyle) {
                  tmp16 = cResult[12];
                }
                if (cResult[13] === tmp11) {
                  let tmp20;
                  if (cResult[14] === tmp16) {
                    tmp20 = cResult[15];
                  }
                  return tmp20;
                }
                const obj2 = { children: items };
                items = [tmp11, tmp16];
                const tmp23 = metroRequire(hasOwnProperty, obj2);
                cResult[13] = tmp11;
                cResult[14] = tmp16;
                cResult[15] = tmp23;
                tmp20 = tmp23;
              }
            }
          }
          let tmp17 = !tmp4;
          if (tmp17) {
            const obj3 = { style: textStyle, maxFontSizeMultiplier, children: text };
            tmp17 = React3(ActivityStatusTextDefault, obj3);
          }
          cResult[8] = undefined !== hideText && hideText;
          cResult[9] = maxFontSizeMultiplier;
          cResult[10] = text;
          cResult[11] = textStyle;
          cResult[12] = tmp17;
          tmp16 = tmp17;
        }
      }
      let tmp12 = !tmp3 && null != tmp8;
      if (tmp12) {
        const obj4 = { icon: tmp8, style: iconStyle };
        tmp12 = React3(ActivityStatusIconDefault, obj4);
      }
      cResult[4] = tmp8;
      cResult[5] = undefined !== hideIcon && hideIcon;
      cResult[6] = iconStyle;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  : (hideText) => {
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
      const text = getActivityStatusTextDefault(activity, true).text;
      const tmp3 = getActivityStatusIcon(activity);
      let tmp6 = !hideIcon && null != tmp3;
      if (tmp6) {
        const obj = { icon: tmp3, style: iconStyle };
        tmp6 = React3(ActivityStatusIconDefault, obj);
      }
      const children = [tmp6];
      let tmp9 = !flag;
      if (tmp9) {
        const obj2 = { style: textStyle, maxFontSizeMultiplier, children: text };
        tmp9 = React3(ActivityStatusTextDefault, obj2);
      }
      children[1] = tmp9;
      return metroRequire(hasOwnProperty, { children });
    };
const result = size.fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

export default tmp4;
