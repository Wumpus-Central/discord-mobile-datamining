// discord_app/modules/activity_status/native/PresenceActivityStatus.tsx
import c from "../../../../_runtime/00576_c.js";
import AppsIcon2 from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import isEmbeddedActivityDefault from "../../activities/utils/isEmbeddedActivity.tsx";
import GameControllerIcon2 from "../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import MusicIcon from "../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import ActivityStatusIconDefault from "ActivityStatusIcon.tsx";
import TvIcon from "../../../design/components/Icon/native/redesign/generated/TvIcon.tsx";
import ActivityStatusTextDefault from "ActivityStatusText.tsx";
import conjurePresenceActivity from "../../conjure/presence/conjurePresenceActivity.tsx";
import getActivityStatusTextDefault from "../getActivityStatusText.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getActivityStatusIcon(activity) {
  const flag = false;
  let tmp = dependencyMap;
  if (!isEmbeddedActivityDefault(activity)) {
    if (!obj.isConjurePresenceActivity(activity)) {
      if (activity.type === ActivityTypes.PLAYING) {
        let GameControllerIcon = GameControllerIcon2.GameControllerIcon;
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
      return GameControllerIcon;
    }
    obj = conjurePresenceActivity;
  }
  if (flag) {
    tmp = GameControllerIcon2;
    let AppsIcon = tmp.GameControllerIcon;
  } else {
    AppsIcon = AppsIcon2.AppsIcon;
  }
}
const ActivityTypes = fn(1085).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(16);
      ({ activity, iconStyle, textStyle, maxFontSizeMultiplier, hideIcon, hideText } = arg0);
      if (undefined !== hideIcon && hideIcon) {
        if (tmp4) {
          return null;
        }
      }
      if (cResult[0] !== activity) {
        const tmp7 = getActivityStatusTextDefault(activity, true);
        cResult[0] = activity;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      const text = tmp5.text;
      if (cResult[2] !== activity) {
        const tmp10 = getActivityStatusIcon(activity);
        cResult[2] = activity;
        cResult[3] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp8) {
        if (cResult[5] === tmp3) {
          if (cResult[6] === iconStyle) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === tmp4) {
            if (cResult[9] === maxFontSizeMultiplier) {
              if (cResult[10] === text) {
                if (cResult[11] === textStyle) {
                  let tmp16 = cResult[12];
                }
                if (cResult[13] === tmp11) {
                  if (cResult[14] === tmp16) {
                    let tmp20 = cResult[15];
                  }
                  return tmp20;
                }
                const obj2 = { children: null };
                const items = [tmp11, tmp16];
                obj2.children = items;
                const tmp23 = timestampProducer(hasOwnProperty, obj2);
                cResult[13] = tmp11;
                cResult[14] = tmp16;
                cResult[15] = tmp23;
                tmp20 = tmp23;
              }
            }
          }
          let tmp17 = !tmp4;
          if (!tmp4) {
            const obj3 = { style: textStyle, maxFontSizeMultiplier, children: text };
            tmp17 = React4(ActivityStatusTextDefault, obj3);
          }
          cResult[8] = tmp4;
          cResult[9] = maxFontSizeMultiplier;
          cResult[10] = text;
          cResult[11] = textStyle;
          cResult[12] = tmp17;
          tmp16 = tmp17;
        }
      }
      let tmp12 = !tmp3;
      if (!(undefined !== hideIcon && hideIcon)) {
        tmp12 = null != tmp8;
      }
      if (tmp12) {
        const obj4 = { icon: tmp8, style: iconStyle };
        tmp12 = React4(ActivityStatusIconDefault, obj4);
      }
      cResult[4] = tmp8;
      cResult[5] = undefined !== hideIcon && hideIcon;
      cResult[6] = iconStyle;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  : (hideText) => {
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
      const tmp3 = getActivityStatusIcon(activity);
      let tmp6 = !hideIcon;
      if (!hideIcon) {
        tmp6 = null != tmp3;
      }
      if (tmp6) {
        const obj = { icon: tmp3, style: iconStyle };
        tmp6 = React4(ActivityStatusIconDefault, obj);
      }
      const children = [tmp6];
      let tmp9 = !flag;
      if (!flag) {
        const obj2 = {
          style: textStyle,
          maxFontSizeMultiplier,
          children: getActivityStatusTextDefault(activity, true).text,
        };
        tmp9 = React4(ActivityStatusTextDefault, obj2);
      }
      children[1] = tmp9;
      return timestampProducer(hasOwnProperty, { children });
    };
