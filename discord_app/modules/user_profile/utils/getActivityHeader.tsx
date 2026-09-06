// === Module 13014: getActivityHeader ===

// Module 13014 (getActivityHeader)
import util from "util" /* 1114 */;
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils" /* 10892 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13015 */;
import getActivityPlatformDefault from "getActivityPlatform" /* 13016 */;
import getActivityPlatformDisplayNameDefault from "getActivityPlatformDisplayName" /* 13019 */;
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
    let type;
    if (tmp4 != null) {
      type = tmp4.type;
    }
    if (type === constants2.XBOX) {
      let obj = { text: null, platformIcon: null, platformLabel: null };
      const intl21 = util.intl;
      obj = { platform: null };
      const intl22 = util.intl;
      obj.platform = intl22.string(util.t.Nfvo72);
      obj.text = intl21.formatToPlainString(util.t.A17aM8, obj);
      obj.platformIcon = icon;
      obj.platformLabel = str;
      return obj;
    }
  }
  if (session_id.type === constants.PLAYING) {
    let type1;
    if (tmp4 != null) {
      type1 = tmp4.type;
    }
    if (type1 === constants2.PLAYSTATION) {
      const obj1 = { text: null, platformIcon: null, platformLabel: null };
      const intl19 = util.intl;
      const obj2 = { platform: null };
      const intl20 = util.intl;
      obj2.platform = intl20.string(util.t.fFl4jo);
      obj1.text = intl19.formatToPlainString(util.t.A17aM8, obj2);
      obj1.platformIcon = icon;
      obj1.platformLabel = str;
      return obj1;
    }
  }
  if (session_id.type === constants.PLAYING) {
    let type2;
    if (tmp4 != null) {
      type2 = tmp4.type;
    }
    if (type2 === constants2.META_QUEST_OR_HORIZON) {
      const intl17 = util.intl;
      const intl18 = util.intl;
      const string2 = intl18.string;
      const t2 = util.t;
      if (tmp31) {
        let string2Result = string2(t2.BrHQaq);
      } else {
        string2Result = string2(t2.p6vL0e);
      }
      const obj3 = { text: null, platformIcon: null, platformLabel: null };
      const obj4 = { platform: string2Result };
      obj3.text = intl17.formatToPlainString(util.t.A17aM8, obj4);
      obj3.platformIcon = icon;
      obj3.platformLabel = str;
      return obj3;
    }
  }
  if (session_id.type === constants.WATCHING) {
    let type3;
    if (tmp4 != null) {
      type3 = tmp4.type;
    }
    if (type3 === constants2.META_QUEST_OR_HORIZON) {
      const intl15 = util.intl;
      const intl16 = util.intl;
      const string = intl16.string;
      const t = util.t;
      if (tmp28) {
        let stringResult = string(t.BrHQaq);
      } else {
        stringResult = string(t.p6vL0e);
      }
      const obj5 = { text: null, platformIcon: null, platformLabel: null };
      const obj6 = { platform: stringResult };
      obj5.text = intl15.formatToPlainString(util.t.ENbTKQ, obj6);
      obj5.platformIcon = icon;
      obj5.platformLabel = str;
      return obj5;
    }
  }
  if (session_id.type === constants.STREAMING) {
    let type4;
    if (tmp4 != null) {
      type4 = tmp4.type;
    }
    if (type4 === constants2.TWITCH) {
      const obj7 = { text: null, platformIcon: null, platformLabel: null };
      const intl13 = util.intl;
      const obj8 = { name: null };
      const intl14 = util.intl;
      obj8.name = intl14.string(util.t.q4pBG3);
      obj7.text = intl13.formatToPlainString(util.t["4CQq9Q"], obj8);
      obj7.platformIcon = icon;
      obj7.platformLabel = str;
      return obj7;
    }
  }
  if (session_id.type === constants.STREAMING) {
    let type5;
    if (tmp4 != null) {
      type5 = tmp4.type;
    }
    if (type5 === constants2.YOUTUBE) {
      const obj9 = { text: null, platformIcon: null, platformLabel: null };
      const intl11 = util.intl;
      const obj10 = { name: null };
      const intl12 = util.intl;
      obj10.name = intl12.string(util.t.aS6cK4);
      obj9.text = intl11.formatToPlainString(util.t["4CQq9Q"], obj10);
      obj9.platformIcon = icon;
      obj9.platformLabel = str;
      return obj9;
    }
  }
  if (null != tmp3) {
    type = session_id.type;
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
      const obj11 = { text: null, platformIcon: null, platformLabel: null };
      const intl10 = util.intl;
      const obj12 = { platform: tmp35 };
      obj11.text = intl10.formatToPlainString(Dzgz4u, obj12);
      obj11.platformIcon = icon;
      obj11.platformLabel = str;
      return obj11;
    }
    tmp35 = getActivityPlatformDisplayNameDefault(tmp3, session_id);
  }
  if (session_id.type === constants.PLAYING) {
    const obj13 = { text: null, platformIcon: null, platformLabel: null };
    const intl9 = util.intl;
    obj13.text = intl9.string(util.t.BMTj28);
    obj13.platformIcon = icon;
    obj13.platformLabel = str;
    obj = obj13;
  } else if (session_id.type === constants.STREAMING) {
    const obj14 = { text: null, platformIcon: null, platformLabel: null };
    const intl8 = util.intl;
    obj14.text = intl8.string(util.t["Jpkr/q"]);
    obj14.platformIcon = icon;
    obj14.platformLabel = str;
    obj = obj14;
  } else {
    if (obj29.isStageActivity(session_id)) {
      const obj15 = { text: null };
      const intl7 = util.intl;
      const obj16 = { name: session_id.name };
      obj15.text = intl7.formatToPlainString(util.t.pW3Ip3, obj16);
      obj = obj15;
    } else {
      if (session_id.type === constants.LISTENING) {
        if (null != session_id.details) {
          const obj17 = { text: null, platformIcon: null, platformLabel: null };
          const intl6 = util.intl;
          const obj18 = { name: session_id.name };
          obj17.text = intl6.formatToPlainString(util.t["b+lA5+"], obj18);
          obj17.platformIcon = icon;
          obj17.platformLabel = str;
          obj = obj17;
        }
      }
      if (session_id.type === constants.LISTENING) {
        const obj19 = { text: null, platformIcon: null, platformLabel: null };
        const intl5 = util.intl;
        obj19.text = intl5.string(util.t.dBISa6);
        obj19.platformIcon = icon;
        obj19.platformLabel = str;
        obj = obj19;
      } else {
        if (session_id.type === constants.WATCHING) {
          if (null != session_id.details) {
            const obj20 = { text: null, platformIcon: null, platformLabel: null };
            const intl4 = util.intl;
            const obj21 = { name: session_id.name };
            obj20.text = intl4.formatToPlainString(util.t.mqdfDc, obj21);
            obj20.platformIcon = icon;
            obj20.platformLabel = str;
            obj = obj20;
          }
        }
        if (session_id.type === constants.WATCHING) {
          const obj22 = { text: null, platformIcon: null, platformLabel: null };
          const intl3 = util.intl;
          obj22.text = intl3.string(util.t.GpNXjC);
          obj22.platformIcon = icon;
          obj22.platformLabel = str;
          obj = obj22;
        } else {
          if (session_id.type === constants.COMPETING) {
            if (null != session_id.details) {
              const obj23 = { text: null, platformIcon: null, platformLabel: null };
              const intl2 = util.intl;
              const obj24 = { name: session_id.name };
              obj23.text = intl2.formatToPlainString(util.t.oHF7Ch, obj24);
              obj23.platformIcon = icon;
              obj23.platformLabel = str;
              obj = obj23;
            }
          }
          if (session_id.type === constants.COMPETING) {
            const obj25 = { text: null, platformIcon: null, platformLabel: null };
            const intl = util.intl;
            obj25.text = intl.string(util.t.OzCsIA);
            obj25.platformIcon = icon;
            obj25.platformLabel = str;
            obj = obj25;
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