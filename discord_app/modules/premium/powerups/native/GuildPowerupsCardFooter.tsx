// === Module 12002: GuildPowerupsCardFooter ===

// Module 12002 (GuildPowerupsCardFooter)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2518 from "module_2518" /* 2518 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4788 */;
import Text_Text from "Text/Text" /* 4825 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6023 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6396 */;
import BoostGemIcon from "BoostGemIcon" /* 8670 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 11976 */;
import entitlementExpirationDateToStringDefault from "entitlementExpirationDateToString" /* 12003 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

class GuildPowerupCardFooterActive {
  constructor(arg0) {
    obj = { style: closure_6().inline, children: null };
    obj1 = { size: "xs", color: closure_1(closure_2[4]).colors.STATUS_POSITIVE };
    items = [, ];
    items[0] = jsx(closure_0(closure_2[3]).CircleCheckIcon, obj1);
    items[1] = jsx(closure_0(closure_2[5]).Text, { color: "status-positive", variant: "text-sm/bold", children: global.text });
    obj.children = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterExpiring {
  constructor(arg0) {
    obj = { style: closure_6().inline, children: null };
    obj1 = { size: "xs", color: closure_1(closure_2[4]).colors.STATUS_WARNING };
    items = [, ];
    items[0] = jsx(closure_0(closure_2[6]).CircleErrorIcon, obj1);
    obj5 = { color: "text-feedback-warning", variant: "text-sm/bold", children: null };
    intl = closure_0(closure_2[7]).intl;
    obj6 = { dateString: closure_1(closure_2[9])(global.dateString) };
    obj5.children = intl.formatToMarkdownString(closure_1(closure_2[8])["ol/ao/"], obj6);
    items[1] = jsx(closure_0(closure_2[5]).Text, obj5);
    obj.children = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterRemoving {
  constructor(arg0) {
    obj = { style: closure_6().inline, children: null };
    obj1 = { size: "xs", color: closure_1(closure_2[4]).colors.STATUS_WARNING };
    items = [, ];
    items[0] = jsx(closure_0(closure_2[6]).CircleErrorIcon, obj1);
    obj5 = { color: "text-feedback-warning", variant: "text-sm/bold", children: null };
    intl = closure_0(closure_2[7]).intl;
    obj6 = { dateString: closure_1(closure_2[10])(global.removingAt) };
    obj5.children = intl.formatToPlainString(closure_1(closure_2[8])["6e2ry1"], obj6);
    items[1] = jsx(closure_0(closure_2[5]).Text, obj5);
    obj.children = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterStatus {
  constructor(arg0) {
    status = global.status;
    if (null == status) {
      return null;
    } else {
      type = status.type;
      str3 = "expiring";
      if ("expiring" === type) {
        tmp5 = jsx;
        tmp6 = GuildPowerupCardFooterExpiring;
        obj1 = { dateString: null };
        obj1.dateString = status.expiringAt;
        return jsx(GuildPowerupCardFooterExpiring, obj1);
      } else {
        str = "removing";
        if ("removing" === type) {
          tmp3 = jsx;
          tmp4 = GuildPowerupCardFooterRemoving;
          obj4 = { removingAt: null };
          obj4.removingAt = status.removingAt;
          return jsx(GuildPowerupCardFooterRemoving, obj4);
        } else {
          str2 = "active";
          if ("active" === type) {
            tmp = jsx;
            tmp2 = GuildPowerupCardFooterActive;
            obj = { text: null };
            obj.text = status.statusText;
            return jsx(GuildPowerupCardFooterActive, obj);
          } else {
            return;
          }
        }
      }
    }
  }
}
class GuildPowerupCardFooterCost {
  constructor(arg0) {
    ({ cost, costDecorator } = global);
    tmp2 = closure_0;
    tmp3 = closure_2;
    tmp = closure_6();
    tmp4 = closure_0(closure_2[11]);
    tmp7Result = null;
    if (null != cost) {
      obj = { style: null, children: null };
      obj.style = tmp.inline;
      tmp7 = jsxs;
      tmp8 = View;
      tmp9 = jsx;
      obj1 = { size: "sm", color: null };
      tmp10 = closure_1;
      obj1.color = closure_1(tmp3[4]).unsafe_rawColors.GUILD_BOOSTING_PINK;
      items = [, ];
      items[0] = jsx(tmp2(tmp3[12]).BoostGemIcon, obj1);
      str = "heading-sm/semibold";
      if (tmp5) {
        str = "experimental/body-sm/semibold";
      }
      obj5 = { variant: null, color: "text-subtle", children: null };
      obj5.variant = str;
      intl = tmp2(tmp3[7]).intl;
      obj6 = { required: null, decorator: null };
      obj6.required = cost;
      if (costDecorator == null) {
        costDecorator = "";
      }
      obj6.decorator = costDecorator;
      obj5.children = intl.formatToPlainString(tmp2(tmp3[7]).t.t2Wbo1, obj6);
      items[1] = tmp9(tmp2(tmp3[5]).Text, obj5);
      obj.children = items;
      tmp7Result = tmp7(tmp8, obj);
    }
    return tmp7Result;
  }
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const timestampProducer = createStyles.createStyles({ container: { justifyContent: "space-between" }, inline: { flexDirection: "row", alignItems: "center", gap: 2 } });
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCardFooter.tsx");

export { GuildPowerupCardFooterActive };
export { GuildPowerupCardFooterExpiring };
export { GuildPowerupCardFooterRemoving };
export { GuildPowerupCardFooterStatus };
export { GuildPowerupCardFooterCost };
export const GuildPowerupsCardFooter = function GuildPowerupsCardFooter(status) {
  const obj = { style: null, children: null };
  const items = [, , ];
  ({ inline: arr[0], container: arr[1] } = closure_6());
  items[2] = status.style;
  obj.style = items;
  const items1 = [React4(GuildPowerupCardFooterCost, { cost: status.cost, costDecorator: status.costDecorator }), React4(GuildPowerupCardFooterStatus, { status: status.status })];
  obj.children = items1;
  return hasOwnProperty(View, obj);
};