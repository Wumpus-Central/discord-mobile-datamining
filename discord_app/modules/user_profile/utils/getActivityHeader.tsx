// === Module 12115: getActivityHeader ===

// Module 12115 (getActivityHeader)
import ME from "ME";

let c3;
let c4;
({ ActivityTypes: c3, PlatformTypes: c4 } = ME);
const result = require("PlatformTypes").fileFinishedImporting("modules/user_profile/utils/getActivityHeader.tsx");

export default function getActivityHeader(session_id) {
  const tmp3 = importDefault(12116)(session_id.session_id);
  const tmp4 = importDefault(12117)(session_id);
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
      const intl21 = require(1236) /* getSystemLocale */.intl;
      obj = { platform: null };
      const intl22 = require(1236) /* getSystemLocale */.intl;
      obj[0] = intl22.string(require(1236) /* getSystemLocale */.t.Nfvo72);
      obj[0] = intl21.formatToPlainString(require(1236) /* getSystemLocale */.t.A17aM8, obj);
      obj[1] = icon;
      obj[2] = str;
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
      const intl19 = require(1236) /* getSystemLocale */.intl;
      const obj2 = { platform: null };
      const intl20 = require(1236) /* getSystemLocale */.intl;
      obj2[0] = intl20.string(require(1236) /* getSystemLocale */.t.fFl4jo);
      obj1[0] = intl19.formatToPlainString(require(1236) /* getSystemLocale */.t.A17aM8, obj2);
      obj1[1] = icon;
      obj1[2] = str;
      return obj1;
    }
  }
  if (session_id.type === constants.PLAYING) {
    let type2;
    if (tmp4 != null) {
      type2 = tmp4.type;
    }
    if (type2 === constants2.META_QUEST_OR_HORIZON) {
      const intl17 = require(1236) /* getSystemLocale */.intl;
      const intl18 = require(1236) /* getSystemLocale */.intl;
      const string2 = intl18.string;
      const t2 = require(1236) /* getSystemLocale */.t;
      if (tmp31) {
        let string2Result = string2(t2.BrHQaq);
      } else {
        string2Result = string2(t2.p6vL0e);
      }
      const obj3 = { text: null, platformIcon: null, platformLabel: null };
      const obj4 = { platform: null };
      obj4[0] = string2Result;
      obj3[0] = intl17.formatToPlainString(require(1236) /* getSystemLocale */.t.A17aM8, obj4);
      obj3[1] = icon;
      obj3[2] = str;
      return obj3;
    }
  }
  if (session_id.type === constants.WATCHING) {
    let type3;
    if (tmp4 != null) {
      type3 = tmp4.type;
    }
    if (type3 === constants2.META_QUEST_OR_HORIZON) {
      const intl15 = require(1236) /* getSystemLocale */.intl;
      const intl16 = require(1236) /* getSystemLocale */.intl;
      const string = intl16.string;
      const t = require(1236) /* getSystemLocale */.t;
      if (tmp28) {
        let stringResult = string(t.BrHQaq);
      } else {
        stringResult = string(t.p6vL0e);
      }
      const obj5 = { text: null, platformIcon: null, platformLabel: null };
      const obj6 = { platform: null };
      obj6[0] = stringResult;
      obj5[0] = intl15.formatToPlainString(require(1236) /* getSystemLocale */.t.ENbTKQ, obj6);
      obj5[1] = icon;
      obj5[2] = str;
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
      const intl13 = require(1236) /* getSystemLocale */.intl;
      const obj8 = { name: null };
      const intl14 = require(1236) /* getSystemLocale */.intl;
      obj8[0] = intl14.string(require(1236) /* getSystemLocale */.t.q4pBG3);
      obj7[0] = intl13.formatToPlainString(require(1236) /* getSystemLocale */.t["4CQq9Q"], obj8);
      obj7[1] = icon;
      obj7[2] = str;
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
      const intl11 = require(1236) /* getSystemLocale */.intl;
      const obj10 = { name: null };
      const intl12 = require(1236) /* getSystemLocale */.intl;
      obj10[0] = intl12.string(require(1236) /* getSystemLocale */.t.aS6cK4);
      obj9[0] = intl11.formatToPlainString(require(1236) /* getSystemLocale */.t["4CQq9Q"], obj10);
      obj9[1] = icon;
      obj9[2] = str;
      return obj9;
    }
  }
  if (null != tmp3) {
    type = session_id.type;
    if (tmp5.PLAYING === type) {
      let Dzgz4u = require(1236) /* getSystemLocale */.t.A17aM8;
    } else if (tmp5.WATCHING === type) {
      Dzgz4u = require(1236) /* getSystemLocale */.t.ENbTKQ;
    } else if (tmp5.LISTENING === type) {
      Dzgz4u = require(1236) /* getSystemLocale */.t.EcHzWI;
    } else if (tmp5.COMPETING === type) {
      Dzgz4u = require(1236) /* getSystemLocale */.t.ikpHeS;
    } else if (tmp5.STREAMING === type) {
      Dzgz4u = require(1236) /* getSystemLocale */.t.Dzgz4u;
    }
    if (undefined !== Dzgz4u) {
      const obj11 = { text: null, platformIcon: null, platformLabel: null };
      const intl10 = require(1236) /* getSystemLocale */.intl;
      const obj12 = { platform: null };
      obj12[0] = tmp35;
      obj11[0] = intl10.formatToPlainString(Dzgz4u, obj12);
      obj11[1] = icon;
      obj11[2] = str;
      return obj11;
    }
    tmp35 = tmp(12120)(tmp3, session_id);
  }
  if (session_id.type === constants.PLAYING) {
    const obj13 = { text: null, platformIcon: null, platformLabel: null };
    const intl9 = require(1236) /* getSystemLocale */.intl;
    obj13[0] = intl9.string(require(1236) /* getSystemLocale */.t.BMTj28);
    obj13[1] = icon;
    obj13[2] = str;
    obj = obj13;
  } else if (session_id.type === tmp5.STREAMING) {
    const obj14 = { text: null, platformIcon: null, platformLabel: null };
    const intl8 = require(1236) /* getSystemLocale */.intl;
    obj14[0] = intl8.string(require(1236) /* getSystemLocale */.t["Jpkr/q"]);
    obj14[1] = icon;
    obj14[2] = str;
    obj = obj14;
  } else {
    if (obj29.isStageActivity(session_id)) {
      const obj15 = { text: null };
      const intl7 = tmp37(1236).intl;
      const obj16 = { name: null };
      obj16[0] = session_id.name;
      obj15[0] = intl7.formatToPlainString(tmp37(1236).t.pW3Ip3, obj16);
      obj = obj15;
    } else {
      if (session_id.type === tmp5.LISTENING) {
        if (null != session_id.details) {
          const obj17 = { text: null, platformIcon: null, platformLabel: null };
          const intl6 = tmp37(1236).intl;
          const obj18 = { name: null };
          obj18[0] = session_id.name;
          obj17[0] = intl6.formatToPlainString(tmp37(1236).t["b+lA5+"], obj18);
          obj17[1] = icon;
          obj17[2] = str;
          obj = obj17;
        }
      }
      if (session_id.type === tmp5.LISTENING) {
        const obj19 = { text: null, platformIcon: null, platformLabel: null };
        const intl5 = tmp37(1236).intl;
        obj19[0] = intl5.string(tmp37(1236).t.dBISa6);
        obj19[1] = icon;
        obj19[2] = str;
        obj = obj19;
      } else {
        if (session_id.type === tmp5.WATCHING) {
          if (null != session_id.details) {
            const obj20 = { text: null, platformIcon: null, platformLabel: null };
            const intl4 = tmp37(1236).intl;
            const obj21 = { name: null };
            obj21[0] = session_id.name;
            obj20[0] = intl4.formatToPlainString(tmp37(1236).t.mqdfDc, obj21);
            obj20[1] = icon;
            obj20[2] = str;
            obj = obj20;
          }
        }
        if (session_id.type === tmp5.WATCHING) {
          const obj22 = { text: null, platformIcon: null, platformLabel: null };
          const intl3 = tmp37(1236).intl;
          obj22[0] = intl3.string(tmp37(1236).t.GpNXjC);
          obj22[1] = icon;
          obj22[2] = str;
          obj = obj22;
        } else {
          if (session_id.type === tmp5.COMPETING) {
            if (null != session_id.details) {
              const obj23 = { text: null, platformIcon: null, platformLabel: null };
              const intl2 = tmp37(1236).intl;
              const obj24 = { name: null };
              obj24[0] = session_id.name;
              obj23[0] = intl2.formatToPlainString(tmp37(1236).t.oHF7Ch, obj24);
              obj23[1] = icon;
              obj23[2] = str;
              obj = obj23;
            }
          }
          if (session_id.type === tmp5.COMPETING) {
            const obj25 = { text: null, platformIcon: null, platformLabel: null };
            const intl = tmp37(1236).intl;
            obj25[0] = intl.string(tmp37(1236).t.OzCsIA);
            obj25[1] = icon;
            obj25[2] = str;
            obj = obj25;
          } else {
            obj = { text: "r", platformIcon: "PX_16", platformLabel: "TRANSPARENT" };
            obj[1] = icon;
            obj[2] = str;
          }
        }
      }
    }
    obj29 = require(9262) /* unpackStageChannelParty */;
  }
  return obj;
};