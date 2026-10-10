// discord_app/modules/activity_status/getActivityStatusText.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import isEmbeddedActivityDefault from "../activities/utils/isEmbeddedActivity.tsx";
import isCrunchyrollActivityDefault from "../activities/utils/isCrunchyrollActivity.tsx";
import conjurePresenceActivity from "../conjure/presence/conjurePresenceActivity.tsx";
import StatusDisplayTypes from "../../../discord_common/js/shared/shared-constants/StatusDisplayTypes.tsx";
import getChannelCopyForEmbeddedActivityDefault from "../activities/utils/getChannelCopyForEmbeddedActivity.tsx";
import isListeningOnSpotifyDefault from "../activities/utils/isListeningOnSpotify.tsx";
import StageChannelRichPresenceUtils from "../stage_channels/StageChannelRichPresenceUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activity_status/getActivityStatusText.tsx");

export default function getActivityStatusText(name) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  let tmp2 = null;
  if ("" !== name) {
    let name1;
    if (name != null) {
      name1 = name.name;
    }
    tmp2 = name1;
  }
  let details;
  if (name != null) {
    details = name.details;
  }
  let tmp5 = null;
  if ("" !== details) {
    let details1;
    if (name != null) {
      details1 = name.details;
    }
    tmp5 = details1;
  }
  let state;
  if (name != null) {
    state = name.state;
  }
  let tmp8 = null;
  if ("" !== state) {
    let state1;
    if (name != null) {
      state1 = name.state;
    }
    tmp8 = state1;
  }
  let type;
  if (name != null) {
    type = name.type;
  }
  let tmp12 = tmp2;
  if (type === ActivityTypes.STREAMING) {
    let tmp13 = tmp5;
    if (tmp5 == null) {
      tmp13 = tmp2;
    }
    tmp12 = tmp13;
  }
  let status_display_type;
  if (name != null) {
    status_display_type = name.status_display_type;
  }
  if (status_display_type !== StatusDisplayTypes.StatusDisplayTypes.NAME) {
    let status_display_type1;
    if (name != null) {
      status_display_type1 = name.status_display_type;
    }
    if (status_display_type1 !== StatusDisplayTypes.StatusDisplayTypes.STATE) {
      let status_display_type2;
      if (name != null) {
        status_display_type2 = name.status_display_type;
      }
      let tmp17 = tmp12;
      if (tmp20) {
        tmp17 = tmp5;
      }
      tmp20 = status_display_type2 === StatusDisplayTypes.StatusDisplayTypes.DETAILS && null != tmp5;
    } else {
      tmp17 = tmp8;
    }
  } else {
    tmp17 = tmp2;
  }
  if (!isEmbeddedActivityDefault(name)) {
    if (!tmp15Result.isConjurePresenceActivity(name)) {
      let type1;
      if (name != null) {
        type1 = name.type;
      }
      if (type1 === ActivityTypes.PLAYING) {
        if (null != tmp17) {
          const obj = { text: tmp17, tooltip: null };
          const intl8 = util.intl;
          const obj2 = { game: tmp17 };
          obj.tooltip = intl8.formatToPlainString(util.t.lFApmz, obj2);
          return obj;
        }
      }
      if (isListeningOnSpotifyDefault(name)) {
        if (flag) {
          if (null != tmp8) {
            const parts = tmp8.split("; ");
            let joined;
            if (parts != null) {
              joined = parts.join(", ");
            }
            const obj3 = { text: joined, tooltip: null };
            const intl7 = util.intl;
            const obj4 = { name: joined };
            obj3.tooltip = intl7.formatToPlainString(util.t.Vnuxue, obj4);
            return obj3;
          }
        }
      }
      if (tmp15Result2.isStageActivity(name)) {
        if (null != tmp2) {
          const obj5 = { text: tmp2, tooltip: null };
          const intl6 = util.intl;
          const obj6 = { name: tmp2 };
          obj5.tooltip = intl6.formatToPlainString(util.t.pW3Ip3, obj6);
          let obj17 = obj5;
        }
        return obj17;
      }
      let type2;
      if (name != null) {
        type2 = name.type;
      }
      if (type2 === ActivityTypes.LISTENING) {
        if (null != tmp17) {
          const obj7 = { text: tmp17, tooltip: null };
          const intl5 = util.intl;
          const obj8 = { name: tmp17 };
          obj7.tooltip = intl5.formatToPlainString(util.t.Vnuxue, obj8);
          obj17 = obj7;
        }
      }
      if (isCrunchyrollActivityDefault(name)) {
        if (flag) {
          if (null != tmp5) {
            const obj9 = { text: tmp5, tooltip: null };
            const intl4 = util.intl;
            const obj10 = { name: tmp5 };
            obj9.tooltip = intl4.formatToPlainString(util.t.pW3Ip3, obj10);
            obj17 = obj9;
          }
        }
      }
      let type3;
      if (name != null) {
        type3 = name.type;
      }
      if (type3 === ActivityTypes.WATCHING) {
        if (null != tmp17) {
          const obj11 = { text: tmp17, tooltip: null };
          const intl3 = util.intl;
          const obj12 = { name: tmp17 };
          obj11.tooltip = intl3.formatToPlainString(util.t.pW3Ip3, obj12);
          obj17 = obj11;
        }
      }
      let type4;
      if (name != null) {
        type4 = name.type;
      }
      if (type4 === ActivityTypes.COMPETING) {
        if (null != tmp17) {
          const obj13 = { text: tmp17, tooltip: null };
          const intl2 = util.intl;
          const obj14 = { name: tmp17 };
          obj13.tooltip = intl2.formatToPlainString(util.t.QQ2wVE, obj14);
          obj17 = obj13;
        }
      }
      let type5;
      if (name != null) {
        type5 = name.type;
      }
      if (type5 === ActivityTypes.STREAMING) {
        if (null != tmp17) {
          const obj15 = { text: tmp17, tooltip: null };
          const intl = util.intl;
          const obj16 = { name: tmp17 };
          obj15.tooltip = intl.formatToPlainString(util.t["0wJXSh"], obj16);
          obj17 = obj15;
        }
      }
      obj17 = {};
      tmp15Result2 = StageChannelRichPresenceUtils;
    }
    tmp15Result = conjurePresenceActivity;
  }
  const text = getChannelCopyForEmbeddedActivityDefault(tmp2);
  return { text, tooltip: text };
}
