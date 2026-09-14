// === Module 11010: ApplicationStreamActivityStatus ===

// Module 11010 (ApplicationStreamActivityStatus)
import util from "util" /* 1114 */;
import ActivityStatusIconDefault from "ActivityStatusIcon" /* 11011 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 11014 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ApplicationStreamActivityStatus.tsx");

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
    const intl2 = util.intl;
    const obj = { name: tmp2 };
    let formatResult = intl2.format(util.t["0wJXSh"], obj);
    let tmp7 = require;
  } else {
    const intl = util.intl;
    formatResult = intl.string(util.t.eXan7B);
    tmp7 = require;
  }
  let tmp12 = !hideIcon;
  if (!hideIcon) {
    const obj2 = { icon: tmp7(11012).TvIcon, style: iconStyle };
    tmp12 = React3(ActivityStatusIconDefault, obj2);
  }
  const children = [tmp12, ];
  let tmp16 = !flag;
  if (!flag) {
    const obj3 = { style: textStyle, maxFontSizeMultiplier, children: formatResult };
    tmp16 = React3(ActivityStatusTextDefault, obj3);
  }
  children[1] = tmp16;
  return hasOwnProperty(React4, { children });
};