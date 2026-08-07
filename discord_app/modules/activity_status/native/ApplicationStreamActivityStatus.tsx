// discord_app/modules/activity_status/native/ApplicationStreamActivityStatus.tsx
import "noop";
import jsxProd from "jsxProd";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ActivityStatusIcon } from "ActivityStatusIcon.tsx";
import { ActivityStatusText } from "ActivityStatusText.tsx";

let c3;
let c4;
let c5;
const require = arg1;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
const result = require("getSystemLocale").fileFinishedImporting("modules/activity_status/native/ApplicationStreamActivityStatus.tsx");

export default function ApplicationStreamActivityStatus(hideText) {
  let game;
  let hideIcon;
  let iconStyle;
  let maxFontSizeMultiplier;
  let textStyle;
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
    obj[0] = tmp7(9579).TvIcon;
    obj[1] = iconStyle;
    tmp12 = callback(ActivityStatusIcon, obj);
    const tmp15 = ActivityStatusIcon;
  }
  const children = [tmp12, ];
  let tmp16 = !flag;
  if (!flag) {
    obj = { style: null, maxFontSizeMultiplier: null, children: null };
    obj[0] = textStyle;
    obj[1] = maxFontSizeMultiplier;
    obj[2] = formatResult;
    tmp16 = callback(ActivityStatusText, obj);
  }
  children[1] = tmp16;
  return closure_5(closure_4, { children });
};