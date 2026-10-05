// discord_app/modules/user_profile/utils/getActivityHeader.tsx
import intl23 from "../../../intl/index.native.tsx";
import StageChannelRichPresenceUtils from "../../stage_channels/StageChannelRichPresenceUtils.tsx";
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId.tsx";
import getActivityPlatformDefault from "getActivityPlatform.tsx";
import isOnMetaHorizonDefault from "../../activities/utils/isOnMetaHorizon.tsx";
import getActivityPlatformDisplayNameDefault from "getActivityPlatformDisplayName.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ ActivityTypes: c3, PlatformTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/user_profile/utils/getActivityHeader.tsx");

export default function getActivityHeader(session_id) {
  let A17aM82;
  let A17aM83;
  let formatToPlainString;
  let formatToPlainString2;
  let formatToPlainString5;
  let formatToPlainString6;
  let icon;
  let intl;
  let intl10;
  let intl12;
  let intl14;
  let intl2;
  let intl20;
  let intl22;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj;
  let obj11;
  let obj13;
  let obj19;
  let obj21;
  let obj24;
  let obj27;
  let obj3;
  let obj5;
  let v4CQq9Q;
  let v4CQq9Q1;
  const tmp3 = parseProviderRouteHeadlessSessionIdDefault(session_id.session_id);
  const tmp4 = getActivityPlatformDefault(session_id);
  if (tmp4 != null) {
    icon = tmp4.icon;
  }
  let str;
  if (tmp4 != null) {
    str = tmp4.name;
  }
  if (str == null) {
    str = "";
  }
  if (session_id.type === constants.PLAYING) {
    let type1;
    if (tmp4 != null) {
      type1 = tmp4.type;
    }
    if (type1 === constants2.XBOX) {
      const obj2 = { text: formatToPlainString6(A17aM83, obj3), platformIcon: icon, platformLabel: str };
      const intl21 = intl23.intl;
      formatToPlainString6 = intl21.formatToPlainString;
      obj3 = { platform: intl22.string(intl23.t.Nfvo72) };
      A17aM83 = intl23.t.A17aM8;
      intl22 = intl23.intl;
      return obj2;
    }
  }
  if (session_id.type === constants.PLAYING) {
    let type2;
    if (tmp4 != null) {
      type2 = tmp4.type;
    }
    if (type2 === constants2.PLAYSTATION) {
      const obj4 = { text: formatToPlainString5(A17aM82, obj5), platformIcon: icon, platformLabel: str };
      const intl19 = intl23.intl;
      formatToPlainString5 = intl19.formatToPlainString;
      obj5 = { platform: intl20.string(intl23.t.fFl4jo) };
      A17aM82 = intl23.t.A17aM8;
      intl20 = intl23.intl;
      return obj4;
    }
  }
  if (session_id.type === constants.PLAYING) {
    let type3;
    if (tmp4 != null) {
      type3 = tmp4.type;
    }
    if (type3 === constants2.META_QUEST_OR_HORIZON) {
      const intl17 = intl23.intl;
      const formatToPlainString4 = intl17.formatToPlainString;
      const A17aM8 = intl23.t.A17aM8;
      const tmp33 = isOnMetaHorizonDefault(session_id);
      const intl18 = intl23.intl;
      const string2 = intl18.string;
      const t2 = intl23.t;
      if (tmp33) {
        let string2Result = string2(t2.BrHQaq);
      } else {
        string2Result = string2(t2.p6vL0e);
      }
      const obj6 = { text: formatToPlainString4(A17aM8, obj7), platformIcon: icon, platformLabel: str };
      return obj6;
    }
  }
  if (session_id.type === constants.WATCHING) {
    let type4;
    if (tmp4 != null) {
      type4 = tmp4.type;
    }
    if (type4 === constants2.META_QUEST_OR_HORIZON) {
      const intl15 = intl23.intl;
      const formatToPlainString3 = intl15.formatToPlainString;
      const ENbTKQ = intl23.t.ENbTKQ;
      const tmp30 = isOnMetaHorizonDefault(session_id);
      const intl16 = intl23.intl;
      const string = intl16.string;
      const t = intl23.t;
      if (tmp30) {
        let stringResult = string(t.BrHQaq);
      } else {
        stringResult = string(t.p6vL0e);
      }
      const obj8 = { text: formatToPlainString3(ENbTKQ, obj9), platformIcon: icon, platformLabel: str };
      return obj8;
    }
  }
  if (session_id.type === constants.STREAMING) {
    let type5;
    if (tmp4 != null) {
      type5 = tmp4.type;
    }
    if (type5 === constants2.TWITCH) {
      const obj10 = { text: formatToPlainString2(v4CQq9Q, obj11), platformIcon: icon, platformLabel: str };
      const intl13 = intl23.intl;
      formatToPlainString2 = intl13.formatToPlainString;
      obj11 = { name: intl14.string(intl23.t.q4pBG3) };
      v4CQq9Q = intl23.t["4CQq9Q"];
      intl14 = intl23.intl;
      return obj10;
    }
  }
  if (session_id.type === constants.STREAMING) {
    let type6;
    if (tmp4 != null) {
      type6 = tmp4.type;
    }
    if (type6 === constants2.YOUTUBE) {
      const obj12 = { text: formatToPlainString(v4CQq9Q1, obj13), platformIcon: icon, platformLabel: str };
      const intl11 = intl23.intl;
      formatToPlainString = intl11.formatToPlainString;
      obj13 = { name: intl12.string(intl23.t.aS6cK4) };
      v4CQq9Q1 = intl23.t["4CQq9Q"];
      intl12 = intl23.intl;
      return obj12;
    }
  }
  if (null != tmp3) {
    let Dzgz4u;
    const type = session_id.type;
    const tmp37 = getActivityPlatformDisplayNameDefault(tmp3, session_id);
    if (constants.PLAYING === type) {
      Dzgz4u = intl23.t.A17aM8;
    } else if (constants.WATCHING === type) {
      Dzgz4u = intl23.t.ENbTKQ;
    } else if (constants.LISTENING === type) {
      Dzgz4u = intl23.t.EcHzWI;
    } else if (constants.COMPETING === type) {
      Dzgz4u = intl23.t.ikpHeS;
    } else if (constants.STREAMING === type) {
      Dzgz4u = intl23.t.Dzgz4u;
    }
    if (undefined !== Dzgz4u) {
      const obj14 = { text: intl10.formatToPlainString(Dzgz4u, obj15), platformIcon: icon, platformLabel: str };
      intl10 = intl23.intl;
      return obj14;
    }
  }
  if (session_id.type === constants.PLAYING) {
    const obj16 = { text: intl9.string(intl23.t.BMTj28), platformIcon: icon, platformLabel: str };
    intl9 = intl23.intl;
    obj = obj16;
  } else if (session_id.type === constants.STREAMING) {
    const obj17 = { text: intl8.string(intl23.t["Jpkr/q"]), platformIcon: icon, platformLabel: str };
    intl8 = intl23.intl;
    obj = obj17;
  } else {
    const obj29 = StageChannelRichPresenceUtils;
    if (obj29.isStageActivity(session_id)) {
      const obj18 = { text: intl7.formatToPlainString(intl23.t.pW3Ip3, obj19) };
      intl7 = intl23.intl;
      obj = obj18;
      obj19 = { name: session_id.name };
    } else {
      if (session_id.type === constants.LISTENING) {
        if (null != session_id.details) {
          const obj20 = {
            text: intl6.formatToPlainString(intl23.t["b+lA5+"], obj21),
            platformIcon: icon,
            platformLabel: str,
          };
          intl6 = intl23.intl;
          obj = obj20;
          obj21 = { name: session_id.name };
        }
      }
      if (session_id.type === constants.LISTENING) {
        const obj22 = { text: intl5.string(intl23.t.dBISa6), platformIcon: icon, platformLabel: str };
        intl5 = intl23.intl;
        obj = obj22;
      } else {
        if (session_id.type === constants.WATCHING) {
          if (null != session_id.details) {
            const obj23 = {
              text: intl4.formatToPlainString(intl23.t.mqdfDc, obj24),
              platformIcon: icon,
              platformLabel: str,
            };
            intl4 = intl23.intl;
            obj = obj23;
            obj24 = { name: session_id.name };
          }
        }
        if (session_id.type === constants.WATCHING) {
          const obj25 = { text: intl3.string(intl23.t.GpNXjC), platformIcon: icon, platformLabel: str };
          intl3 = intl23.intl;
          obj = obj25;
        } else {
          if (session_id.type === constants.COMPETING) {
            if (null != session_id.details) {
              const obj26 = {
                text: intl2.formatToPlainString(intl23.t.oHF7Ch, obj27),
                platformIcon: icon,
                platformLabel: str,
              };
              intl2 = intl23.intl;
              obj = obj26;
              obj27 = { name: session_id.name };
            }
          }
          if (session_id.type === constants.COMPETING) {
            const obj28 = { text: intl.string(intl23.t.OzCsIA), platformIcon: icon, platformLabel: str };
            intl = intl23.intl;
            obj = obj28;
          } else {
            obj = { text: "r", platformIcon: icon, platformLabel: str };
          }
        }
      }
    }
  }
  return obj;
}
