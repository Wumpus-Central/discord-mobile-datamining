// discord_app/modules/activity_status/getActivityStatusText.tsx
import Constants from "../../Constants.tsx";
import isEmbeddedActivityDefault from "../activities/utils/isEmbeddedActivity.tsx";
import StatusDisplayTypes from "../../../discord_common/js/shared/shared-constants/StatusDisplayTypes.tsx";
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
    if (status_display_type1 !== tmp15(10889).StatusDisplayTypes.STATE) {
      let status_display_type2;
      if (name != null) {
        status_display_type2 = name.status_display_type;
      }
      let tmp17 = tmp12;
      if (tmp20) {
        tmp17 = tmp5;
      }
      tmp20 = status_display_type2 === tmp15(10889).StatusDisplayTypes.DETAILS && null != tmp5;
    } else {
      tmp17 = tmp8;
    }
  } else {
    tmp17 = tmp2;
  }
  if (isEmbeddedActivityDefault(name)) {
    const tmp28 = tmp21(10890)(tmp2);
    let obj = { text: tmp28, tooltip: tmp28 };
    return obj;
  } else {
    let type1;
    if (name != null) {
      type1 = name.type;
    }
    if (type1 === tmp11.PLAYING) {
      if (null != tmp17) {
        obj = { text: tmp17, tooltip: null };
        const intl8 = tmp15(1114).intl;
        const obj1 = { game: tmp17 };
        obj.tooltip = intl8.formatToPlainString(tmp15(1114).t.lFApmz, obj1);
        return obj;
      }
    }
    if (tmp21(10891)(name)) {
      if (flag) {
        if (null != tmp8) {
          const parts = tmp8.split("; ");
          let joined;
          if (parts != null) {
            joined = parts.join(", ");
          }
          const obj2 = { text: joined, tooltip: null };
          const intl7 = tmp15(1114).intl;
          const obj3 = { name: joined };
          obj2.tooltip = intl7.formatToPlainString(tmp15(1114).t.Vnuxue, obj3);
          return obj2;
        }
      }
    }
    if (tmp15Result.isStageActivity(name)) {
      if (null != tmp2) {
        const obj4 = { text: tmp2, tooltip: null };
        const intl6 = tmp15(1114).intl;
        const obj5 = { name: tmp2 };
        obj4.tooltip = intl6.formatToPlainString(tmp15(1114).t.pW3Ip3, obj5);
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
        const obj6 = { text: tmp17, tooltip: null };
        const intl5 = tmp15(1114).intl;
        const obj7 = { name: tmp17 };
        obj6.tooltip = intl5.formatToPlainString(tmp15(1114).t.Vnuxue, obj7);
        obj16 = obj6;
      }
    }
    if (tmp21(8344)(name)) {
      if (flag) {
        if (null != tmp5) {
          const obj8 = { text: tmp5, tooltip: null };
          const intl4 = tmp15(1114).intl;
          const obj9 = { name: tmp5 };
          obj8.tooltip = intl4.formatToPlainString(tmp15(1114).t.pW3Ip3, obj9);
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
        const obj10 = { text: tmp17, tooltip: null };
        const intl3 = tmp15(1114).intl;
        const obj11 = { name: tmp17 };
        obj10.tooltip = intl3.formatToPlainString(tmp15(1114).t.pW3Ip3, obj11);
        obj16 = obj10;
      }
    }
    let type4;
    if (name != null) {
      type4 = name.type;
    }
    if (type4 === tmp11.COMPETING) {
      if (null != tmp17) {
        const obj12 = { text: tmp17, tooltip: null };
        const intl2 = tmp15(1114).intl;
        const obj13 = { name: tmp17 };
        obj12.tooltip = intl2.formatToPlainString(tmp15(1114).t.QQ2wVE, obj13);
        obj16 = obj12;
      }
    }
    let type5;
    if (name != null) {
      type5 = name.type;
    }
    if (type5 === tmp11.STREAMING) {
      if (null != tmp17) {
        const obj14 = { text: tmp17, tooltip: null };
        const intl = tmp15(1114).intl;
        const obj15 = { name: tmp17 };
        obj14.tooltip = intl.formatToPlainString(tmp15(1114).t["0wJXSh"], obj15);
        obj16 = obj14;
      }
    }
    obj16 = {};
    tmp15Result = tmp15(10892);
  }
}
