// === Module 13190: applicationWidgetRefreshOutcome ===

// Module 13190 (applicationWidgetRefreshOutcome)
import util from "util" /* 1115 */;
import _modDef3130 from "module_3130" /* 3130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/applicationWidgetRefreshOutcome.tsx");

export default function applicationWidgetRefreshOutcome(arg0) {
  if ("dispatched" === arg0) {
    const obj2 = { text: null, ok: true };
    const intl6 = util.intl;
    obj2.text = intl6.string(_modDef3130["um/5Kc"]);
    return obj2;
  } else if ("rate_limited" === arg0) {
    const obj3 = { text: null, ok: false };
    const intl5 = util.intl;
    obj3.text = intl5.string(_modDef3130.T1n7hc);
    return obj3;
  } else if ("unauthorized" === arg0) {
    const obj4 = { text: null, ok: false };
    const intl4 = util.intl;
    obj4.text = intl4.string(_modDef3130["30UxZU"]);
    return obj4;
  } else if ("no_widget_config" === arg0) {
    const obj5 = { text: null, ok: false };
    const intl3 = util.intl;
    obj5.text = intl3.string(_modDef3130["1UFWet"]);
    return obj5;
  } else if ("undeliverable" === arg0) {
    const obj6 = { text: null, ok: false };
    const intl2 = util.intl;
    obj6.text = intl2.string(_modDef3130.ypKX9A);
    return obj6;
  } else {
    const obj = { text: null, ok: false };
    const intl = util.intl;
    obj.text = intl.string(_modDef3130.BLKD4B);
    return obj;
  }
};