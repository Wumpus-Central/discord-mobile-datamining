// === Module 12196: GuildPowerupsCardFooter ===

// Module 12196 (GuildPowerupsCardFooter)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2553 from "module_2553" /* 2553 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4798 */;
import CircleErrorIcon from "CircleErrorIcon" /* 4806 */;
import BoostGemIcon from "BoostGemIcon" /* 4832 */;
import Text_Text from "Text/Text" /* 4892 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6477 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12172 */;
import entitlementExpirationDateToStringDefault from "entitlementExpirationDateToString" /* 12197 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = createStyles.createStyles({ container: { justifyContent: "space-between" }, inline: { flexDirection: "row", alignItems: "center", gap: 2 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  const cResult = c.c(6);
  text = text.text;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_POSITIVE };
    const tmp8 = React4(CircleCheckIcon.CircleCheckIcon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== text) {
    const obj3 = { color: "status-positive", variant: "text-sm/bold", children: text };
    const tmp11 = React4(Text_Text.Text, obj3);
    cResult[1] = text;
    cResult[2] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp4.inline) {
    if (cResult[4] === tmp9) {
      let tmp12 = cResult[5];
    }
    return tmp12;
  }
  const obj4 = { style: tmp4.inline, children: null };
  const items = [first, tmp9];
  obj4.children = items;
  const tmp13 = hasOwnProperty(View, obj4);
  cResult[3] = tmp4.inline;
  cResult[4] = tmp9;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : ((children) => {
  const obj = { style: closure_6().inline, children: null };
  const items = [React4(CircleCheckIcon.CircleCheckIcon, { size: "xs", color: nativeDefault.colors.STATUS_POSITIVE }), React4(Text_Text.Text, { color: "status-positive", variant: "text-sm/bold", children: children.text })];
  obj.children = items;
  return hasOwnProperty(View, obj);
});
let closure_7 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((dateString) => {
  const cResult = c.c(8);
  dateString = dateString.dateString;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_WARNING };
    const tmp8 = React4(CircleErrorIcon.CircleErrorIcon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== dateString) {
    const intl = util.intl;
    const obj3 = { dateString: entitlementExpirationDateToStringDefault(dateString) };
    const result = intl.formatToMarkdownString(_modDef2553["ol/ao/"], obj3);
    cResult[1] = dateString;
    cResult[2] = result;
    let tmp9 = result;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp9) {
    const obj4 = { color: "text-feedback-warning", variant: "text-sm/bold", children: tmp9 };
    const tmp14 = React4(Text_Text.Text, obj4);
    cResult[3] = tmp9;
    cResult[4] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp4.inline) {
    if (cResult[6] === tmp12) {
      let tmp15 = cResult[7];
    }
    return tmp15;
  }
  const obj5 = { style: tmp4.inline, children: null };
  const items = [first, tmp12];
  obj5.children = items;
  const tmp16 = hasOwnProperty(View, obj5);
  cResult[5] = tmp4.inline;
  cResult[6] = tmp12;
  cResult[7] = tmp16;
  tmp15 = tmp16;
}) : ((dateString) => {
  const obj = { style: closure_6().inline, children: null };
  const items = [React4(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: nativeDefault.colors.STATUS_WARNING }), ];
  const obj3 = { color: "text-feedback-warning", variant: "text-sm/bold", children: null };
  const intl = util.intl;
  const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_WARNING };
  obj3.children = intl.formatToMarkdownString(_modDef2553["ol/ao/"], { dateString: entitlementExpirationDateToStringDefault(dateString.dateString) });
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
let closure_8 = tmp4;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((removingAt) => {
  const cResult = c.c(8);
  removingAt = removingAt.removingAt;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_WARNING };
    const tmp8 = React4(CircleErrorIcon.CircleErrorIcon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== removingAt) {
    const intl = util.intl;
    const obj3 = { dateString: getGuildPowerupFormattedDateStringDefault(removingAt) };
    const formatToPlainStringResult = intl.formatToPlainString(_modDef2553["6e2ry1"], obj3);
    cResult[1] = removingAt;
    cResult[2] = formatToPlainStringResult;
    let tmp9 = formatToPlainStringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp9) {
    const obj4 = { color: "text-feedback-warning", variant: "text-sm/bold", children: tmp9 };
    const tmp14 = React4(Text_Text.Text, obj4);
    cResult[3] = tmp9;
    cResult[4] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp4.inline) {
    if (cResult[6] === tmp12) {
      let tmp15 = cResult[7];
    }
    return tmp15;
  }
  const obj5 = { style: tmp4.inline, children: null };
  const items = [first, tmp12];
  obj5.children = items;
  const tmp16 = hasOwnProperty(View, obj5);
  cResult[5] = tmp4.inline;
  cResult[6] = tmp12;
  cResult[7] = tmp16;
  tmp15 = tmp16;
}) : ((removingAt) => {
  const obj = { style: closure_6().inline, children: null };
  const items = [React4(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: nativeDefault.colors.STATUS_WARNING }), ];
  const obj3 = { color: "text-feedback-warning", variant: "text-sm/bold", children: null };
  const intl = util.intl;
  const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_WARNING };
  obj3.children = intl.formatToPlainString(_modDef2553["6e2ry1"], { dateString: getGuildPowerupFormattedDateStringDefault(removingAt.removingAt) });
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
let closure_9 = tmp5;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((status) => {
  const cResult = c.c(6);
  status = status.status;
  if (null == status) {
    return null;
  } else {
    const type = status.type;
    if ("expiring" === type) {
      if (cResult[0] !== status.expiringAt) {
        const obj2 = { dateString: status.expiringAt };
        const tmp13 = React4(closure_8, obj2);
        cResult[0] = status.expiringAt;
        cResult[1] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[1];
      }
      return tmp10;
    } else if ("removing" === type) {
      if (cResult[2] !== status.removingAt) {
        const obj3 = { removingAt: status.removingAt };
        const tmp9 = React4(closure_9, obj3);
        cResult[2] = status.removingAt;
        cResult[3] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    } else if ("active" === type) {
      if (cResult[4] !== status.statusText) {
        const obj4 = { text: status.statusText };
        const tmp5 = React4(closure_7, obj4);
        cResult[4] = status.statusText;
        cResult[5] = tmp5;
        let tmp2 = tmp5;
      } else {
        tmp2 = cResult[5];
      }
      return tmp2;
    }
  }
}) : ((status) => {
  status = status.status;
  if (null == status) {
    return null;
  } else {
    const type = status.type;
    if ("expiring" === type) {
      const obj2 = { dateString: status.expiringAt };
      return React4(closure_8, obj2);
    } else if ("removing" === type) {
      const obj3 = { removingAt: status.removingAt };
      return React4(closure_9, obj3);
    } else if ("active" === type) {
      const obj = { text: status.statusText };
      return React4(closure_7, obj);
    }
  }
});
let closure_10 = tmp6;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ cost, costDecorator } = arg0);
  const tmp4 = closure_6();
  ManaTypeConsolidationExperiment;
  if (null == cost) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
      const tmp10 = React4(BoostGemIcon.BoostGemIcon, obj2);
      cResult[0] = tmp10;
      let first = tmp10;
    } else {
      first = cResult[0];
    }
    let str = "heading-sm/semibold";
    if (tmp6) {
      str = "experimental/body-sm/semibold";
    }
    if (cResult[1] === cost) {
      if (cResult[2] === costDecorator) {
        let tmp11 = cResult[3];
      }
      if (cResult[4] === str) {
        if (cResult[5] === tmp11) {
          let tmp13 = cResult[6];
        }
        if (cResult[7] === tmp4.inline) {
          if (cResult[8] === tmp13) {
            let tmp16 = cResult[9];
          }
          return tmp16;
        }
        const obj3 = { style: tmp4.inline, children: null };
        const items = [first, tmp13];
        obj3.children = items;
        const tmp19 = hasOwnProperty(View, obj3);
        cResult[7] = tmp4.inline;
        cResult[8] = tmp13;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const obj4 = { variant: str, color: "text-subtle", children: tmp11 };
      const tmp15 = React4(Text_Text.Text, obj4);
      cResult[4] = str;
      cResult[5] = tmp11;
      cResult[6] = tmp15;
      tmp13 = tmp15;
    }
    const intl = util.intl;
    const obj5 = { required: cost, decorator: null };
    let str2 = costDecorator;
    if (costDecorator == null) {
      str2 = "";
    }
    obj5.decorator = str2;
    const formatToPlainStringResult = intl.formatToPlainString(util.t.t2Wbo1, obj5);
    cResult[1] = cost;
    cResult[2] = costDecorator;
    cResult[3] = formatToPlainStringResult;
    tmp11 = formatToPlainStringResult;
  }
}) : ((arg0) => {
  ({ cost, costDecorator } = arg0);
  ManaTypeConsolidationExperiment;
  let tmp7Result = null;
  if (null != cost) {
    const obj = { style: tmp.inline, children: null };
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
    const items = [React4(BoostGemIcon.BoostGemIcon, obj2), ];
    let str = "heading-sm/semibold";
    if (tmp5) {
      str = "experimental/body-sm/semibold";
    }
    const obj3 = { variant: str, color: "text-subtle", children: null };
    const intl = util.intl;
    const obj4 = { required: cost, decorator: null };
    if (costDecorator == null) {
      costDecorator = "";
    }
    obj4.decorator = costDecorator;
    obj3.children = intl.formatToPlainString(util.t.t2Wbo1, obj4);
    items[1] = React4(Text_Text.Text, obj3);
    obj.children = items;
    tmp7Result = hasOwnProperty(View, obj);
  }
  return tmp7Result;
});
let closure_11 = tmp7;
let ReactCompilerGating = ReactCompilerGating_mod;
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCardFooter.tsx");

export const GuildPowerupCardFooterActive = tmp3;
export const GuildPowerupCardFooterExpiring = tmp4;
export const GuildPowerupCardFooterRemoving = tmp5;
export const GuildPowerupCardFooterStatus = tmp6;
export const GuildPowerupCardFooterCost = tmp7;
export const GuildPowerupsCardFooter = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  const tmp2 = closure_6();
  ({ cost, costDecorator, status, style } = arg0);
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.container) {
      if (cResult[2] === tmp2.inline) {
        let tmp3 = cResult[3];
      }
      if (cResult[4] === cost) {
        if (cResult[5] === costDecorator) {
          let tmp4 = cResult[6];
        }
        if (cResult[7] !== status) {
          const obj2 = { status };
          const tmp11 = React4(closure_10, obj2);
          cResult[7] = status;
          cResult[8] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[8];
        }
        if (cResult[9] === tmp3) {
          if (cResult[10] === tmp4) {
            if (cResult[11] === tmp8) {
              let tmp12 = cResult[12];
            }
            return tmp12;
          }
        }
        const obj3 = { style: tmp3, children: null };
        const items = [tmp4, tmp8];
        obj3.children = items;
        const tmp15 = hasOwnProperty(View, obj3);
        cResult[9] = tmp3;
        cResult[10] = tmp4;
        cResult[11] = tmp8;
        cResult[12] = tmp15;
        tmp12 = tmp15;
      }
      const obj4 = { cost, costDecorator };
      const tmp7 = React4(closure_11, obj4);
      cResult[4] = cost;
      cResult[5] = costDecorator;
      cResult[6] = tmp7;
      tmp4 = tmp7;
    }
  }
  const items1 = [, , ];
  ({ inline: arr[0], container: arr[1] } = tmp2);
  items1[2] = style;
  cResult[0] = style;
  cResult[1] = tmp2.container;
  cResult[2] = tmp2.inline;
  cResult[3] = items1;
  tmp3 = items1;
}) : ((status) => {
  const obj = { style: null, children: null };
  const items = [, , ];
  ({ inline: arr[0], container: arr[1] } = closure_6());
  items[2] = status.style;
  obj.style = items;
  const items1 = [React4(closure_11, { cost: status.cost, costDecorator: status.costDecorator }), React4(closure_10, { status: status.status })];
  obj.children = items1;
  return hasOwnProperty(View, obj);
});