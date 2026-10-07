// discord_app/modules/user_profile/native/UserProfileActivityBadges.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GroupIcon from "../../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
import AppsIcon2 from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import isEmbeddedActivityDefault from "../../activities/utils/isEmbeddedActivity.tsx";
import utils from "../../content_inventory/utils.tsx";
import GameControllerIcon from "../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import MusicIcon from "../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import TvIcon from "../../../design/components/Icon/native/redesign/generated/TvIcon.tsx";
import conjurePresenceActivity from "../../conjure/presence/conjurePresenceActivity.tsx";
import TopicsIcon from "../../../design/components/Icon/native/redesign/generated/TopicsIcon.tsx";
import HourglassIcon from "../../../design/components/Icon/native/redesign/generated/HourglassIcon.tsx";
import shouldShowActivityTimeBarDefault from "../utils/shouldShowActivityTimeBar.tsx";
import Badges from "../../icymi/native/content_inventory/Badges.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getTimestampBadgeIcon(activity, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    let AppsIcon = HourglassIcon.HourglassIcon;
  } else {
    if (!isEmbeddedActivityDefault(activity)) {
      if (!obj.isConjurePresenceActivity(activity)) {
        if (activity.type === ActivityTypes.WATCHING) {
          AppsIcon = TvIcon.TvIcon;
        } else if (activity.type === tmp5.LISTENING) {
          AppsIcon = MusicIcon.MusicIcon;
        } else {
          AppsIcon = GameControllerIcon.GameControllerIcon;
        }
      }
      obj = conjurePresenceActivity;
    }
    AppsIcon = AppsIcon2.AppsIcon;
  }
  return AppsIcon;
}
const View = fn(17).View;
const ActivityTypes = fn(1085).ActivityTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({
  container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 },
  bold: { fontWeight: "bold" },
});
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (activity) => {
      const cResult = c.c(16);
      activity = activity.activity;
      const tmp4 = closure_7();
      const timestamps = activity.timestamps;
      let start;
      if (timestamps != null) {
        start = timestamps.start;
      }
      if (start == null) {
        start = activity.created_at;
      }
      if (null != start) {
        if (!shouldShowActivityTimeBarDefault(activity)) {
          const timestamps2 = activity.timestamps;
          if (timestamps2 != null) {
            const end = timestamps2.end;
          }
          const timestamps3 = activity.timestamps;
          let flag;
          if (timestamps3 != null) {
            flag = timestamps3.isCountDown;
          }
          if (flag == null) {
            flag = false;
          }
          let tmp6 = flag;
          if (flag) {
            tmp6 = null != end;
          }
          if (tmp6) {
            tmp6 = end > obj2.useTimestampTickedNow().now;
          }
          if (cResult[0] === activity) {
            if (cResult[1] === tmp6) {
              let tmp7 = cResult[2];
            }
            if (cResult[3] !== tmp7) {
              const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
              const tmp12 = hasOwnProperty(tmp7, obj3);
              cResult[3] = tmp7;
              cResult[4] = tmp12;
              let tmp10 = tmp12;
            } else {
              tmp10 = cResult[4];
            }
            if (cResult[5] === end) {
              if (cResult[6] === flag) {
                if (cResult[7] === start) {
                  let tmp13 = cResult[8];
                }
                if (cResult[9] === tmp4.bold) {
                  if (cResult[10] === tmp13) {
                    let tmp14 = cResult[11];
                  }
                  if (cResult[12] === tmp4.container) {
                    if (cResult[13] === tmp10) {
                      if (cResult[14] === tmp14) {
                        let tmp17 = cResult[15];
                      }
                      return tmp17;
                    }
                  }
                  const obj4 = { style: tmp4.container, children: null };
                  const items = [tmp10, tmp14];
                  obj4.children = items;
                  const tmp20 = timestampProducer(View, obj4);
                  cResult[12] = tmp4.container;
                  cResult[13] = tmp10;
                  cResult[14] = tmp14;
                  cResult[15] = tmp20;
                  tmp17 = tmp20;
                }
                const obj5 = { entry: tmp13, style: tmp4.bold };
                const tmp16 = hasOwnProperty(Badges.ActiveTimestamp, obj5);
                cResult[9] = tmp4.bold;
                cResult[10] = tmp13;
                cResult[11] = tmp16;
                tmp14 = tmp16;
              }
            }
            const obj6 = { start, end, isCountDown: flag };
            cResult[5] = end;
            cResult[6] = flag;
            cResult[7] = start;
            cResult[8] = obj6;
            tmp13 = obj6;
          }
          const tmp9 = getTimestampBadgeIcon(activity, tmp6);
          cResult[0] = activity;
          cResult[1] = tmp6;
          cResult[2] = tmp9;
          tmp7 = tmp9;
        }
      }
      return null;
    }
  : (activity) => {
      activity = activity.activity;
      const tmp = closure_7();
      const timestamps = activity.timestamps;
      let start;
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
          let tmp7 = flag;
          if (flag) {
            tmp7 = null != end;
          }
          if (tmp7) {
            tmp7 = end > obj.useTimestampTickedNow().now;
          }
          const obj2 = { style: tmp.container, children: null };
          const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
          const items = [hasOwnProperty(getTimestampBadgeIcon(activity, tmp7), obj3)];
          const obj4 = { entry: null, style: null };
          const obj5 = { start, end, isCountDown: flag };
          obj4.entry = obj5;
          obj4.style = tmp.bold;
          items[1] = hasOwnProperty(Badges.ActiveTimestamp, obj4);
          obj2.children = items;
          return timestampProducer(View, obj2);
        }
      }
      return null;
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (activity) => {
      const cResult = c.c(9);
      activity = activity.activity;
      let container = closure_7();
      if (!isEmbeddedActivityDefault(activity)) {
        if (null != activity.party) {
          if (cResult[0] === activity.party) {
            if (cResult[1] === activity.state) {
              let tmp6 = cResult[2];
            }
            if (null == tmp6) {
              return null;
            } else {
              const _Symbol = Symbol;
              if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
                const tmp12 = hasOwnProperty(GroupIcon.GroupIcon, obj2);
                cResult[3] = tmp12;
                let tmp10 = tmp12;
              } else {
                tmp10 = cResult[3];
              }
              if (cResult[4] !== tmp6) {
                const obj3 = { variant: "text-sm/medium", color: "text-muted", children: tmp6 };
                const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
                cResult[4] = tmp6;
                cResult[5] = tmp15;
                let tmp13 = tmp15;
              } else {
                tmp13 = cResult[5];
              }
              if (cResult[6] === container.container) {
              }
              const obj4 = { style: container.container, children: null };
              const items = [tmp10, tmp13];
              obj4.children = items;
              const tmp19 = timestampProducer(View, obj4);
              container = container.container;
              cResult[6] = container;
              cResult[7] = tmp13;
              cResult[8] = tmp19;
            }
          }
          const richGameStateBadgeText = utils.getRichGameStateBadgeText(activity.state, activity.party);
          cResult[0] = activity.party;
          cResult[1] = activity.state;
          cResult[2] = richGameStateBadgeText;
          tmp6 = richGameStateBadgeText;
          const tmpResult = utils;
        }
      }
      return null;
    }
  : (activity) => {
      activity = activity.activity;
      if (!isEmbeddedActivityDefault(activity)) {
        if (null != activity.party) {
          const richGameStateBadgeText = utils.getRichGameStateBadgeText(activity.state, activity.party);
          let tmp8 = null;
          if (null != richGameStateBadgeText) {
            const obj = { style: tmp.container, children: null };
            const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
            const items = [hasOwnProperty(GroupIcon.GroupIcon, obj2)];
            const obj3 = { variant: "text-sm/medium", color: "text-muted", children: richGameStateBadgeText };
            items[1] = hasOwnProperty(Text_Text.Text, obj3);
            obj.children = items;
            tmp8 = timestampProducer(View, obj);
          }
          return tmp8;
        }
      }
      return null;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export const TimestampBadge = tmp4;
export const PartyBadge = tmp5;
export const EpisodeBadge = ReactCompilerGating.isReactCompilerEnabled()
  ? (activity) => {
      const cResult = c.c(8);
      let container = closure_7();
      const assets = activity.activity.assets;
      let large_text;
      if (assets != null) {
        large_text = assets.large_text;
      }
      if (cResult[0] !== large_text) {
        const episodeBadgeText = utils.getEpisodeBadgeText(large_text);
        cResult[0] = large_text;
        cResult[1] = episodeBadgeText;
        let tmp5 = episodeBadgeText;
        const tmpResult = utils;
      } else {
        tmp5 = cResult[1];
      }
      if (null == tmp5) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
          const tmp11 = hasOwnProperty(TopicsIcon.TopicsIcon, obj2);
          cResult[2] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] !== tmp5) {
          const obj3 = { variant: "text-sm/medium", color: "text-muted", children: tmp5 };
          const tmp14 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[3] = tmp5;
          cResult[4] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[5] === container.container) {
        }
        const obj4 = { style: container.container, children: null };
        const items = [tmp8, tmp12];
        obj4.children = items;
        const tmp18 = timestampProducer(View, obj4);
        container = container.container;
        cResult[5] = container;
        cResult[6] = tmp12;
        cResult[7] = tmp18;
      }
    }
  : (activity) => {
      const tmp = closure_7();
      const assets = activity.activity.assets;
      let large_text;
      if (assets != null) {
        large_text = assets.large_text;
      }
      const episodeBadgeText = utils.getEpisodeBadgeText(large_text);
      let tmp6 = null;
      if (null != episodeBadgeText) {
        const obj2 = { style: tmp.container, children: null };
        const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
        const items = [hasOwnProperty(TopicsIcon.TopicsIcon, obj3)];
        const obj4 = { variant: "text-sm/medium", color: "text-muted", children: episodeBadgeText };
        items[1] = hasOwnProperty(Text_Text.Text, obj4);
        obj2.children = items;
        tmp6 = timestampProducer(View, obj2);
      }
      return tmp6;
    };
