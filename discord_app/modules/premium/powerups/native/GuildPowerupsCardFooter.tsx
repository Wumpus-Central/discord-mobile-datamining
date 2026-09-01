// discord_app/modules/premium/powerups/native/GuildPowerupsCardFooter.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../GuildPowerups.messages.js";
import CircleCheckIcon from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import apexExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import getGuildPowerupFormattedDateStringDefault from "../utils/getGuildPowerupFormattedDateString.tsx";
import entitlementExpirationDateToStringDefault from "../utils/entitlementExpirationDateToString.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

class GuildPowerupCardFooterActive {
  constructor(arg0) {
    obj = { style: closure_6().inline, children: null };
    obj = { size: "xs", color: require("Themes").colors.STATUS_POSITIVE };
    items = [,];
    items[0] = jsx(require("CircleCheckIcon").CircleCheckIcon, obj);
    items[1] = jsx(require("Text").Text, { color: "status-positive", variant: "text-sm/bold", children: global.text });
    obj[1] = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterExpiring {
  constructor(arg0) {
    obj = { style: closure_6().inline, children: null };
    obj = { size: "xs", color: require("Themes").colors.STATUS_WARNING };
    items = [,];
    items[0] = jsx(require("CircleErrorIcon").CircleErrorIcon, obj);
    obj1 = { color: "text-feedback-warning", variant: "text-sm/bold", children: null };
    intl = require("getSystemLocale").intl;
    obj2 = { dateString: require("entitlementExpirationDateToString")(global.dateString) };
    obj1[2] = intl.formatToMarkdownString(require("messagesProxy")["ol/ao/"], obj2);
    items[1] = jsx(require("Text").Text, obj1);
    obj[1] = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterRemoving {
  constructor(arg0) {
    obj = { style: closure_6().inline, children: null };
    obj = { size: "xs", color: require("Themes").colors.STATUS_WARNING };
    items = [,];
    items[0] = jsx(require("CircleErrorIcon").CircleErrorIcon, obj);
    obj1 = { color: "text-feedback-warning", variant: "text-sm/bold", children: null };
    intl = require("getSystemLocale").intl;
    obj2 = { dateString: require("getGuildPowerupFormattedDateString")(global.removingAt) };
    obj1[2] = intl.formatToPlainString(require("messagesProxy")["6e2ry1"], obj2);
    items[1] = jsx(require("Text").Text, obj1);
    obj[1] = items;
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
        obj = { dateString: null };
        obj[0] = status.expiringAt;
        return jsx(GuildPowerupCardFooterExpiring, obj);
      } else {
        str = "removing";
        if ("removing" === type) {
          tmp3 = jsx;
          tmp4 = GuildPowerupCardFooterRemoving;
          obj1 = { removingAt: null };
          obj1[0] = status.removingAt;
          return jsx(GuildPowerupCardFooterRemoving, obj1);
        } else {
          str2 = "active";
          if ("active" === type) {
            tmp = jsx;
            tmp2 = GuildPowerupCardFooterActive;
            obj = { text: null };
            obj[0] = status.statusText;
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
    tmp4 = require("apexExperiment");
    tmp7Result = null;
    if (null != cost) {
      obj = { style: null, children: null };
      obj[0] = tmp.inline;
      tmp7 = jsxs;
      tmp8 = View;
      tmp9 = jsx;
      obj = { size: "sm", color: null };
      tmp10 = closure_1;
      obj[1] = require("Themes").unsafe_rawColors.GUILD_BOOSTING_PINK;
      items = [,];
      items[0] = jsx(require("BoostGemIcon").BoostGemIcon, obj);
      str = "heading-sm/semibold";
      if (tmp5) {
        str = "experimental/body-sm/semibold";
      }
      obj1 = { variant: null, color: "text-subtle", children: null };
      obj1[0] = str;
      intl = require("getSystemLocale").intl;
      obj2 = { required: null, decorator: null };
      obj2[0] = cost;
      if (costDecorator == null) {
        costDecorator = "";
      }
      obj2[1] = costDecorator;
      obj1[2] = intl.formatToPlainString(require("getSystemLocale").t.t2Wbo1, obj2);
      items[1] = tmp9(require("Text").Text, obj1);
      obj[1] = items;
      tmp7Result = tmp7(tmp8, obj);
    }
    return tmp7Result;
  }
}
const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({
  container: { justifyContent: "space-between" },
  inline: { flexDirection: "row", alignItems: "center", gap: 2 },
});
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCardFooter.tsx");

export { GuildPowerupCardFooterActive };
export { GuildPowerupCardFooterExpiring };
export { GuildPowerupCardFooterRemoving };
export { GuildPowerupCardFooterStatus };
export { GuildPowerupCardFooterCost };
export const GuildPowerupsCardFooter = function GuildPowerupsCardFooter(status) {
  let obj = { style: items, children: null };
  items = [, ,];
  ({ inline: arr[0], container: arr[1] } = callback3());
  items[2] = status.style;
  obj = { cost: status.cost, costDecorator: status.costDecorator };
  const items1 = [
    callback(GuildPowerupCardFooterCost, obj),
    callback(GuildPowerupCardFooterStatus, { status: status.status }),
  ];
  obj[1] = items1;
  return callback2(View, obj);
};
