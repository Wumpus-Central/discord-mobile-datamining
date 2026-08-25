// === Module 9792: ApplicationStreamActivityStatus ===

// Module 9792 (ApplicationStreamActivityStatus)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ActivityStatusIconDefault from "ActivityStatusIcon" /* 9793 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 9796 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/activity_status/native/ApplicationStreamActivityStatus.tsx");

export default function ApplicationStreamActivityStatus(hideText) {
  ({ game, hideIcon } = hideText);
  ({ iconStyle, textStyle, maxFontSizeMultiplier } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (hideIcon) {
    if (flag) {
      return null;
    }
  }
  let name;
  if (game != null) {
    name = game.name;
  }
  let tmp2 = null;
  if ("" !== name) {
    let name1;
    if (game != null) {
      name1 = game.name;
    }
    tmp2 = name1;
  }
  if (null != tmp2) {
    const intl2 = getSystemLocale.intl;
    let obj = { name: null };
    obj[0] = tmp2;
    let formatResult = intl2.format(getSystemLocale.t["0wJXSh"], obj);
    let tmp7 = require;
  } else {
    const intl = getSystemLocale.intl;
    formatResult = intl.string(getSystemLocale.t.eXan7B);
    tmp7 = require;
  }
  let tmp12 = !hideIcon;
  if (!hideIcon) {
    obj = { icon: null, style: null };
    obj[0] = tmp7(9794).TvIcon;
    obj[1] = iconStyle;
    tmp12 = callback(ActivityStatusIconDefault, obj);
    const tmp15 = ActivityStatusIconDefault;
  }
  const children = [tmp12, ];
  let tmp16 = !flag;
  if (!flag) {
    obj = { style: null, maxFontSizeMultiplier: null, children: null };
    obj[0] = textStyle;
    obj[1] = maxFontSizeMultiplier;
    obj[2] = formatResult;
    tmp16 = callback(ActivityStatusTextDefault, obj);
  }
  children[1] = tmp16;
  return closure_5(closure_4, { children });
};