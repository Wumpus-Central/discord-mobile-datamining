// === Module 12553: getActivityHeader ===

// Module 12553 (getActivityHeader)
import util from "util" /* 1115 */;
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils" /* 8809 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 12554 */;
import getActivityPlatformDefault from "getActivityPlatform" /* 12555 */;
import getActivityPlatformDisplayNameDefault from "getActivityPlatformDisplayName" /* 12558 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityTypes: c3, PlatformTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/user_profile/utils/getActivityHeader.tsx");

export default function getActivityHeader(session_id) {
  const tmp3 = parseProviderRouteHeadlessSessionIdDefault(session_id.session_id);
  const tmp4 = getActivityPlatformDefault(session_id);
  if (tmp4 != null) {
    const icon = tmp4.icon;
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
      const obj2 = { text: null, platformIcon: null, platformLabel: null };
      const intl21 = util.intl;
      const obj3 = { platform: null };
      const intl22 = util.intl;
      obj3.platform = intl22.string(util.t.Nfvo72);
      obj2.text = intl21.formatToPlainString(util.t.A17aM8, obj3);
      obj2.platformIcon = icon;
      obj2.platformLabel = str;
      return obj2;
    }
  }
  if (session_id.type === constants.PLAYING) {
    let type2;
    if (tmp4 != null) {
      type2 = tmp4.type;
    }
    if (type2 === constants2.PLAYSTATION) {
      const obj4 = { text: null, platformIcon: null, platformLabel: null };
      const intl19 = util.intl;
      const obj5 = { platform: null };
      const intl20 = util.intl;
      obj5.platform = intl20.string(util.t.fFl4jo);
      obj4.text = intl19.formatToPlainString(util.t.A17aM8, obj5);
      obj4.platformIcon = icon;
      obj4.platformLabel = str;
      return obj4;
    }
  }
  if (session_id.type === constants.PLAYING) {
    let type3;
    if (tmp4 != null) {
      type3 = tmp4.type;
    }
    if (type3 === constants2.META_QUEST_OR_HORIZON) {
      const intl17 = util.intl;
      const intl18 = util.intl;
      const string2 = intl18.string;
      const t2 = util.t;
      if (tmp31) {
        let string2Result = string2(t2.BrHQaq);
      } else {
        string2Result = string2(t2.p6vL0e);
      }
      const obj6 = { text: null, platformIcon: null, platformLabel: null };
      const obj7 = { platform: string2Result };
      obj6.text = intl17.formatToPlainString(util.t.A17aM8, obj7);
      obj6.platformIcon = icon;
      obj6.platformLabel = str;
      return obj6;
    }
  }
  if (session_id.type === constants.WATCHING) {
    let type4;
    if (tmp4 != null) {
      type4 = tmp4.type;
    }
    if (type4 === constants2.META_QUEST_OR_HORIZON) {
      const intl15 = util.intl;
      const intl16 = util.intl;
      const string = intl16.string;
      const t = util.t;
      if (tmp28) {
        let stringResult = string(t.BrHQaq);
      } else {
        stringResult = string(t.p6vL0e);
      }
      const obj8 = { text: null, platformIcon: null, platformLabel: null };
      const obj9 = { platform: stringResult };
      obj8.text = intl15.formatToPlainString(util.t.ENbTKQ, obj9);
      obj8.platformIcon = icon;
      obj8.platformLabel = str;
      return obj8;
    }
  }
  if (session_id.type === constants.STREAMING) {
    let type5;
    if (tmp4 != null) {
      type5 = tmp4.type;
    }
    if (type5 === constants2.TWITCH) {
      const obj10 = { text: null, platformIcon: null, platformLabel: null };
      const intl13 = util.intl;
      const obj11 = { name: null };
      const intl14 = util.intl;
      obj11.name = intl14.string(util.t.q4pBG3);
      obj10.text = intl13.formatToPlainString(util.t["4CQq9Q"], obj11);
      obj10.platformIcon = icon;
      obj10.platformLabel = str;
      return obj10;
    }
  }
  if (session_id.type === constants.STREAMING) {
    let type6;
    if (tmp4 != null) {
      type6 = tmp4.type;
    }
    if (type6 === constants2.YOUTUBE) {
      const obj12 = { text: null, platformIcon: null, platformLabel: null };
      const intl11 = util.intl;
      const obj13 = { name: null };
      const intl12 = util.intl;
      obj13.name = intl12.string(util.t.aS6cK4);
      obj12.text = intl11.formatToPlainString(util.t["4CQq9Q"], obj13);
      obj12.platformIcon = icon;
      obj12.platformLabel = str;
      return obj12;
    }
  }
  if (null != tmp3) {
    const type = session_id.type;
    if (constants.PLAYING === type) {
      let Dzgz4u = util.t.A17aM8;
    } else if (constants.WATCHING === type) {
      Dzgz4u = util.t.ENbTKQ;
    } else if (constants.LISTENING === type) {
      Dzgz4u = util.t.EcHzWI;
    } else if (constants.COMPETING === type) {
      Dzgz4u = util.t.ikpHeS;
    } else if (constants.STREAMING === type) {
      Dzgz4u = util.t.Dzgz4u;
    }
    if (undefined !== Dzgz4u) {
      const obj14 = { text: null, platformIcon: null, platformLabel: null };
      const intl10 = util.intl;
      const obj15 = { platform: tmp35 };
      obj14.text = intl10.formatToPlainString(Dzgz4u, obj15);
      obj14.platformIcon = icon;
      obj14.platformLabel = str;
      return obj14;
    }
    tmp35 = getActivityPlatformDisplayNameDefault(tmp3, session_id);
  }
  if (session_id.type === constants.PLAYING) {
    const obj16 = { text: null, platformIcon: null, platformLabel: null };
    const intl9 = util.intl;
    obj16.text = intl9.string(util.t.BMTj28);
    obj16.platformIcon = icon;
    obj16.platformLabel = str;
    let obj = obj16;
  } else if (session_id.type === constants.STREAMING) {
    const obj17 = { text: null, platformIcon: null, platformLabel: null };
    const intl8 = util.intl;
    obj17.text = intl8.string(util.t["Jpkr/q"]);
    obj17.platformIcon = icon;
    obj17.platformLabel = str;
    obj = obj17;
  } else {
    if (obj29.isStageActivity(session_id)) {
      const obj18 = { text: null };
      const intl7 = util.intl;
      const obj19 = { name: session_id.name };
      obj18.text = intl7.formatToPlainString(util.t.pW3Ip3, obj19);
      obj = obj18;
    } else {
      if (session_id.type === constants.LISTENING) {
        if (null != session_id.details) {
          const obj20 = { text: null, platformIcon: null, platformLabel: null };
          const intl6 = util.intl;
          const obj21 = { name: session_id.name };
          obj20.text = intl6.formatToPlainString(util.t["b+lA5+"], obj21);
          obj20.platformIcon = icon;
          obj20.platformLabel = str;
          obj = obj20;
        }
      }
      if (session_id.type === constants.LISTENING) {
        const obj22 = { text: null, platformIcon: null, platformLabel: null };
        const intl5 = util.intl;
        obj22.text = intl5.string(util.t.dBISa6);
        obj22.platformIcon = icon;
        obj22.platformLabel = str;
        obj = obj22;
      } else {
        if (session_id.type === constants.WATCHING) {
          if (null != session_id.details) {
            const obj23 = { text: null, platformIcon: null, platformLabel: null };
            const intl4 = util.intl;
            const obj24 = { name: session_id.name };
            obj23.text = intl4.formatToPlainString(util.t.mqdfDc, obj24);
            obj23.platformIcon = icon;
            obj23.platformLabel = str;
            obj = obj23;
          }
        }
        if (session_id.type === constants.WATCHING) {
          const obj25 = { text: null, platformIcon: null, platformLabel: null };
          const intl3 = util.intl;
          obj25.text = intl3.string(util.t.GpNXjC);
          obj25.platformIcon = icon;
          obj25.platformLabel = str;
          obj = obj25;
        } else {
          if (session_id.type === constants.COMPETING) {
            if (null != session_id.details) {
              const obj26 = { text: null, platformIcon: null, platformLabel: null };
              const intl2 = util.intl;
              const obj27 = { name: session_id.name };
              obj26.text = intl2.formatToPlainString(util.t.oHF7Ch, obj27);
              obj26.platformIcon = icon;
              obj26.platformLabel = str;
              obj = obj26;
            }
          }
          if (session_id.type === constants.COMPETING) {
            const obj28 = { text: null, platformIcon: null, platformLabel: null };
            const intl = util.intl;
            obj28.text = intl.string(util.t.OzCsIA);
            obj28.platformIcon = icon;
            obj28.platformLabel = str;
            obj = obj28;
          } else {
            obj = { text: "r", platformIcon: icon, platformLabel: str };
          }
        }
      }
    }
    obj29 = StageChannelRichPresenceUtils;
  }
  return obj;
};