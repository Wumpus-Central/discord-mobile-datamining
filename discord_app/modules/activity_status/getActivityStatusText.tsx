// === Module 9192: getActivityStatusText ===

// Module 9192 (getActivityStatusText)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7431 */;
import StatusDisplayTypes from "StatusDisplayTypes" /* 9193 */;

const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/activity_status/getActivityStatusText.tsx");

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
    if (status_display_type1 !== tmp15(9193).StatusDisplayTypes.STATE) {
      let status_display_type2;
      if (name != null) {
        status_display_type2 = name.status_display_type;
      }
      let tmp17 = tmp12;
      if (tmp20) {
        tmp17 = tmp5;
      }
      tmp20 = status_display_type2 === tmp15(9193).StatusDisplayTypes.DETAILS && null != tmp5;
    } else {
      tmp17 = tmp8;
    }
  } else {
    tmp17 = tmp2;
  }
  if (isEmbeddedActivityDefault(name)) {
    const tmp28 = tmp21(9194)(tmp2);
    let obj = { text: null, tooltip: null };
    obj[0] = tmp28;
    obj[1] = tmp28;
    return obj;
  } else {
    let type1;
    if (name != null) {
      type1 = name.type;
    }
    if (type1 === tmp11.PLAYING) {
      if (null != tmp17) {
        obj = { text: null, tooltip: null };
        obj[0] = tmp17;
        const intl8 = tmp15(1236).intl;
        obj1 = { game: null };
        obj1[0] = tmp17;
        obj[1] = intl8.formatToPlainString(tmp15(1236).t.lFApmz, obj1);
        return obj;
      }
    }
    if (tmp21(9195)(name)) {
      if (flag) {
        if (null != tmp8) {
          const parts = tmp8.split("; ");
          let joined;
          if (parts != null) {
            joined = parts.join(", ");
          }
          const obj2 = { text: null, tooltip: null };
          obj2[0] = joined;
          const intl7 = tmp15(1236).intl;
          const obj3 = { name: null };
          obj3[0] = joined;
          obj2[1] = intl7.formatToPlainString(tmp15(1236).t.Vnuxue, obj3);
          return obj2;
        }
      }
    }
    if (tmp15Result.isStageActivity(name)) {
      if (null != tmp2) {
        const obj4 = { text: null, tooltip: null };
        obj4[0] = tmp2;
        const intl6 = tmp15(1236).intl;
        const obj5 = { name: null };
        obj5[0] = tmp2;
        obj4[1] = intl6.formatToPlainString(tmp15(1236).t.pW3Ip3, obj5);
        let obj16 = obj4;
      }
      return obj16;
    }
    let type2;
    if (name != null) {
      type2 = name.type;
    }
    if (type2 === tmp11.LISTENING) {
      if (null != tmp17) {
        const obj6 = { text: null, tooltip: null };
        obj6[0] = tmp17;
        const intl5 = tmp15(1236).intl;
        const obj7 = { name: null };
        obj7[0] = tmp17;
        obj6[1] = intl5.formatToPlainString(tmp15(1236).t.Vnuxue, obj7);
        obj16 = obj6;
      }
    }
    if (tmp21(8561)(name)) {
      if (flag) {
        if (null != tmp5) {
          const obj8 = { text: null, tooltip: null };
          obj8[0] = tmp5;
          const intl4 = tmp15(1236).intl;
          const obj9 = { name: null };
          obj9[0] = tmp5;
          obj8[1] = intl4.formatToPlainString(tmp15(1236).t.pW3Ip3, obj9);
          obj16 = obj8;
        }
      }
    }
    let type3;
    if (name != null) {
      type3 = name.type;
    }
    if (type3 === tmp11.WATCHING) {
      if (null != tmp17) {
        const obj10 = { text: null, tooltip: null };
        obj10[0] = tmp17;
        const intl3 = tmp15(1236).intl;
        const obj11 = { name: null };
        obj11[0] = tmp17;
        obj10[1] = intl3.formatToPlainString(tmp15(1236).t.pW3Ip3, obj11);
        obj16 = obj10;
      }
    }
    let type4;
    if (name != null) {
      type4 = name.type;
    }
    if (type4 === tmp11.COMPETING) {
      if (null != tmp17) {
        const obj12 = { text: null, tooltip: null };
        obj12[0] = tmp17;
        const intl2 = tmp15(1236).intl;
        const obj13 = { name: null };
        obj13[0] = tmp17;
        obj12[1] = intl2.formatToPlainString(tmp15(1236).t.QQ2wVE, obj13);
        obj16 = obj12;
      }
    }
    let type5;
    if (name != null) {
      type5 = name.type;
    }
    if (type5 === tmp11.STREAMING) {
      if (null != tmp17) {
        const obj14 = { text: null, tooltip: null };
        obj14[0] = tmp17;
        const intl = tmp15(1236).intl;
        const obj15 = { name: null };
        obj15[0] = tmp17;
        obj14[1] = intl.formatToPlainString(tmp15(1236).t["0wJXSh"], obj15);
        obj16 = obj14;
      }
    }
    obj16 = {};
    tmp15Result = tmp15(9196);
  }
};