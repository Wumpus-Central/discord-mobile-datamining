// === Module 12828: UserProfileActivityBadges ===

// Module 12828 (UserProfileActivityBadges)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 4886 */;
import GroupIcon2 from "GroupIcon" /* 5873 */;
import AppsIcon2 from "AppsIcon" /* 5890 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7229 */;
import utils from "utils" /* 7818 */;
import GameControllerIcon from "GameControllerIcon" /* 8739 */;
import MusicIcon from "MusicIcon" /* 9571 */;
import TvIcon from "TvIcon" /* 10616 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10621 */;
import TopicsIcon2 from "TopicsIcon" /* 11276 */;
import HourglassIcon from "HourglassIcon" /* 12702 */;
import useTimestampTickedNow from "useTimestampTickedNow" /* 12829 */;
import shouldShowActivityTimeBarDefault from "shouldShowActivityTimeBar" /* 12830 */;
import Badges from "Badges" /* 12831 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function getTimestampBadgeIcon(activity, arg1) {
  let AppsIcon;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    AppsIcon = HourglassIcon.HourglassIcon;
  } else {
    if (!isEmbeddedActivityDefault(activity)) {
      const obj = conjurePresenceActivity;
      if (!obj.isConjurePresenceActivity(activity)) {
        if (activity.type === ActivityTypes.WATCHING) {
          AppsIcon = TvIcon.TvIcon;
        } else if (activity.type === tmp5.LISTENING) {
          AppsIcon = MusicIcon.MusicIcon;
        } else {
          AppsIcon = GameControllerIcon.GameControllerIcon;
        }
      }
    }
    AppsIcon = AppsIcon2.AppsIcon;
  }
  return AppsIcon;
}
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, bold: { fontWeight: "bold" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((activity) => {
  let items;
  const obj = react2;
  const cResult = obj.c(16);
  activity = activity.activity;
  const tmp4 = closure_7();
  const timestamps = activity.timestamps;
  let start;
  const obj2 = useTimestampTickedNow;
  const now = obj2.useTimestampTickedNow().now;
  if (timestamps != null) {
    start = timestamps.start;
  }
  if (start == null) {
    start = activity.created_at;
  }
  if (null != start) {
    if (!shouldShowActivityTimeBarDefault(activity)) {
      const timestamps2 = activity.timestamps;
      let end;
      if (timestamps2 != null) {
        end = timestamps2.end;
      }
      const timestamps3 = activity.timestamps;
      let flag;
      if (timestamps3 != null) {
        flag = timestamps3.isCountDown;
      }
      if (flag == null) {
        flag = false;
      }
      if (cResult[0] === activity) {
        let tmp8;
        let tmp11;
        if (cResult[1] === (flag && null != end && end > now)) {
          tmp8 = cResult[2];
        }
        if (cResult[3] !== tmp8) {
          const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
          const tmp13 = hasOwnProperty(tmp8, obj3);
          cResult[3] = tmp8;
          cResult[4] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] === end) {
          if (cResult[6] === flag) {
            let tmp14;
            if (cResult[7] === start) {
              tmp14 = cResult[8];
            }
            if (cResult[9] === tmp4.bold) {
              let tmp15;
              if (cResult[10] === tmp14) {
                tmp15 = cResult[11];
              }
              if (cResult[12] === tmp4.container) {
                if (cResult[13] === tmp11) {
                  let tmp18;
                  if (cResult[14] === tmp15) {
                    tmp18 = cResult[15];
                  }
                  return tmp18;
                }
              }
              const obj4 = { style: tmp4.container, children: items };
              items = [tmp11, tmp15];
              const tmp21 = metroRequire(View, obj4);
              cResult[12] = tmp4.container;
              cResult[13] = tmp11;
              cResult[14] = tmp15;
              cResult[15] = tmp21;
              tmp18 = tmp21;
            }
            const obj5 = { entry: tmp14, style: tmp4.bold };
            const tmp17 = hasOwnProperty(Badges.ActiveTimestamp, obj5);
            cResult[9] = tmp4.bold;
            cResult[10] = tmp14;
            cResult[11] = tmp17;
            tmp15 = tmp17;
          }
        }
        const obj6 = { start, end, isCountDown: flag };
        cResult[5] = end;
        cResult[6] = flag;
        cResult[7] = start;
        cResult[8] = obj6;
        tmp14 = obj6;
      }
      const tmp10 = getTimestampBadgeIcon(activity, flag && null != end && end > now);
      cResult[0] = activity;
      cResult[1] = flag && null != end && end > now;
      cResult[2] = tmp10;
      tmp8 = tmp10;
    }
  }
  return null;
}) : ((activity) => {
  let items;
  let obj5;
  activity = activity.activity;
  const tmp = closure_7();
  const timestamps = activity.timestamps;
  let start;
  const obj = useTimestampTickedNow;
  const now = obj.useTimestampTickedNow().now;
  if (timestamps != null) {
    start = timestamps.start;
  }
  if (start == null) {
    start = activity.created_at;
  }
  if (null != start) {
    if (!shouldShowActivityTimeBarDefault(activity)) {
      const timestamps2 = activity.timestamps;
      let end;
      if (timestamps2 != null) {
        end = timestamps2.end;
      }
      const timestamps3 = activity.timestamps;
      let flag;
      if (timestamps3 != null) {
        flag = timestamps3.isCountDown;
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = { style: tmp.container, children: items };
      const tmp7 = flag && null != end && end > now;
      const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
      const tmp6Result = getTimestampBadgeIcon(activity, tmp7);
      items = [hasOwnProperty(tmp6Result, obj3), ];
      const obj4 = { entry: obj5, style: tmp.bold };
      obj5 = { start, end, isCountDown: flag };
      items[1] = hasOwnProperty(Badges.ActiveTimestamp, obj4);
      return metroRequire(View, obj2);
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((activity) => {
  let items;
  const obj = react2;
  const cResult = obj.c(9);
  activity = activity.activity;
  const tmp4 = closure_7();
  if (!isEmbeddedActivityDefault(activity)) {
    if (null != activity.party) {
      if (cResult[0] === activity.party) {
        let tmp7;
        if (cResult[1] === activity.state) {
          tmp7 = cResult[2];
        }
        let tmp9 = null;
        if (null != tmp7) {
          let tmp11;
          let tmp14;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
            const GroupIcon = GroupIcon2.GroupIcon;
            const tmp13 = hasOwnProperty(GroupIcon, obj2);
            cResult[3] = tmp13;
            tmp11 = tmp13;
          } else {
            tmp11 = cResult[3];
          }
          if (cResult[4] !== tmp7) {
            const obj3 = { variant: "text-sm/medium", color: "text-muted", children: tmp7 };
            const tmp16 = hasOwnProperty(Text_Text.Text, obj3);
            cResult[4] = tmp7;
            cResult[5] = tmp16;
            tmp14 = tmp16;
          } else {
            tmp14 = cResult[5];
          }
          if (cResult[6] === tmp4.container) {
            let tmp17;
            if (cResult[7] === tmp14) {
              tmp17 = cResult[8];
            }
            tmp9 = tmp17;
          }
          const obj4 = { style: tmp4.container, children: items };
          items = [tmp11, tmp14];
          const tmp20 = metroRequire(View, obj4);
          cResult[6] = tmp4.container;
          cResult[7] = tmp14;
          cResult[8] = tmp20;
          tmp17 = tmp20;
        }
        return tmp9;
      }
      const tmpResult = utils;
      const richGameStateBadgeText = tmpResult.getRichGameStateBadgeText(activity.state, activity.party);
      cResult[0] = activity.party;
      cResult[1] = activity.state;
      cResult[2] = richGameStateBadgeText;
      tmp7 = richGameStateBadgeText;
    }
  }
  return null;
}) : ((activity) => {
  let items;
  activity = activity.activity;
  const tmp = closure_7();
  if (!isEmbeddedActivityDefault(activity)) {
    if (null != activity.party) {
      const obj4 = utils;
      const richGameStateBadgeText = obj4.getRichGameStateBadgeText(activity.state, activity.party);
      let tmp8 = null;
      if (null != richGameStateBadgeText) {
        const obj = { style: tmp.container, children: items };
        const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
        const GroupIcon = GroupIcon2.GroupIcon;
        items = [hasOwnProperty(GroupIcon, obj2), ];
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: richGameStateBadgeText };
        items[1] = hasOwnProperty(Text_Text.Text, obj3);
        tmp8 = metroRequire(View, obj);
      }
      return tmp8;
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((activity) => {
  let items;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
  activity = activity.activity;
  const tmp4 = closure_7();
  const assets = activity.assets;
  let large_text;
  if (assets != null) {
    large_text = assets.large_text;
  }
  if (cResult[0] !== large_text) {
    const tmpResult = utils;
    const episodeBadgeText = tmpResult.getEpisodeBadgeText(large_text);
    cResult[0] = large_text;
    cResult[1] = episodeBadgeText;
    tmp6 = episodeBadgeText;
  } else {
    tmp6 = cResult[1];
  }
  let tmp8 = null;
  if (null != tmp6) {
    let tmp10;
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
      const TopicsIcon = TopicsIcon2.TopicsIcon;
      const tmp13 = hasOwnProperty(TopicsIcon, obj2);
      cResult[2] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj3 = { variant: "text-sm/medium", color: "text-muted", children: tmp6 };
      const tmp16 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[3] = tmp6;
      cResult[4] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      let tmp17;
      if (cResult[6] === tmp14) {
        tmp17 = cResult[7];
      }
      tmp8 = tmp17;
    }
    const obj4 = { style: tmp4.container, children: items };
    items = [tmp10, tmp14];
    const tmp20 = metroRequire(View, obj4);
    cResult[5] = tmp4.container;
    cResult[6] = tmp14;
    cResult[7] = tmp20;
    tmp17 = tmp20;
  }
  return tmp8;
}) : ((activity) => {
  let items;
  activity = activity.activity;
  const assets = activity.assets;
  let large_text;
  const tmp = closure_7();
  const getEpisodeBadgeText = utils.getEpisodeBadgeText;
  utils;
  if (assets != null) {
    large_text = assets.large_text;
  }
  const episodeBadgeText = getEpisodeBadgeText(large_text);
  let tmp7 = null;
  if (null != episodeBadgeText) {
    const obj = { style: tmp.container, children: items };
    const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const TopicsIcon = TopicsIcon2.TopicsIcon;
    items = [hasOwnProperty(TopicsIcon, obj2), ];
    const obj3 = { variant: "text-sm/medium", color: "text-muted", children: episodeBadgeText };
    items[1] = hasOwnProperty(Text_Text.Text, obj3);
    tmp7 = metroRequire(View, obj);
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export const TimestampBadge = tmp4;
export const PartyBadge = tmp5;
export const EpisodeBadge = tmp6;