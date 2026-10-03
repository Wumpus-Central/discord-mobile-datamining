// discord_app/modules/activity_status/native/ApplicationStreamActivityStatus.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import ActivityStatusIconDefault from "ActivityStatusIcon.tsx";
import TvIcon from "../../../design/components/Icon/native/redesign/generated/TvIcon.tsx";
import ActivityStatusTextDefault from "ActivityStatusText.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ApplicationStreamActivityStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(13);
      ({ game, iconStyle, textStyle, maxFontSizeMultiplier, hideIcon, hideText } = arg0);
      if (undefined !== hideIcon && hideIcon) {
        if (tmp5) {
          return null;
        }
      }
      let name;
      if (game != null) {
        name = game.name;
      }
      let tmp7 = null;
      if ("" !== name) {
        let name1;
        if (game != null) {
          name1 = game.name;
        }
        tmp7 = name1;
      }
      if (cResult[0] !== tmp7) {
        if (null != tmp7) {
          const intl2 = util.intl;
          const obj2 = { name: tmp7 };
          let formatResult = intl2.format(util.t["0wJXSh"], obj2);
        } else {
          const intl = util.intl;
          formatResult = intl.string(util.t.eXan7B);
        }
        cResult[0] = tmp7;
        cResult[1] = formatResult;
      } else {
        if (cResult[2] === tmp4) {
          if (cResult[3] === iconStyle) {
            let tmp12 = cResult[4];
          }
          if (cResult[5] === tmp5) {
            if (cResult[6] === maxFontSizeMultiplier) {
              if (cResult[7] === tmp9) {
                if (cResult[8] === textStyle) {
                  let tmp17 = cResult[9];
                }
                if (cResult[10] === tmp12) {
                  if (cResult[11] === tmp17) {
                    let tmp21 = cResult[12];
                  }
                  return tmp21;
                }
                const obj3 = { children: null };
                const items = [tmp12, tmp17];
                obj3.children = items;
                const tmp24 = hasOwnProperty(React4, obj3);
                cResult[10] = tmp12;
                cResult[11] = tmp17;
                cResult[12] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
          let tmp18 = !tmp5;
          if (!tmp5) {
            const obj4 = { style: textStyle, maxFontSizeMultiplier, children: tmp9 };
            tmp18 = React3(ActivityStatusTextDefault, obj4);
          }
          cResult[5] = tmp5;
          cResult[6] = maxFontSizeMultiplier;
          cResult[7] = tmp9;
          cResult[8] = textStyle;
          cResult[9] = tmp18;
          tmp17 = tmp18;
        }
        let tmp13 = !tmp4;
        if (!tmp4) {
          const obj5 = { icon: TvIcon.TvIcon, style: iconStyle };
          tmp13 = React3(ActivityStatusIconDefault, obj5);
        }
        cResult[2] = tmp4;
        cResult[3] = iconStyle;
        cResult[4] = tmp13;
        tmp12 = tmp13;
      }
    }
  : (hideText) => {
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
        const obj2 = { icon: tmp7(10616).TvIcon, style: iconStyle };
        tmp12 = React3(ActivityStatusIconDefault, obj2);
      }
      const children = [tmp12];
      let tmp16 = !flag;
      if (!flag) {
        const obj3 = { style: textStyle, maxFontSizeMultiplier, children: formatResult };
        tmp16 = React3(ActivityStatusTextDefault, obj3);
      }
      children[1] = tmp16;
      return hasOwnProperty(React4, { children });
    };
