// discord_app/modules/activity_status/native/ApplicationStreamActivityStatus.tsx
import react2 from "../../../../_runtime/00576_react.js";
import intl3 from "../../../intl/index.native.tsx";
import ActivityStatusIconDefault from "ActivityStatusIcon.tsx";
import TvIcon from "../../../design/components/Icon/native/redesign/generated/TvIcon.tsx";
import ActivityStatusTextDefault from "ActivityStatusText.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let game;
      let hideIcon;
      let hideText;
      let iconStyle;
      let items;
      let maxFontSizeMultiplier;
      let textStyle;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(13);
      ({ game, iconStyle, textStyle, maxFontSizeMultiplier, hideIcon, hideText } = arg0);
      if (undefined !== hideIcon && hideIcon) {
        if (undefined !== hideText && hideText) {
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
        let formatResult;
        if (null != tmp7) {
          const intl2 = intl3.intl;
          const obj2 = { name: tmp7 };
          formatResult = intl2.format(intl3.t["0wJXSh"], obj2);
        } else {
          const intl = intl3.intl;
          formatResult = intl.string(intl3.t.eXan7B);
        }
        cResult[0] = tmp7;
        cResult[1] = formatResult;
        tmp9 = formatResult;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === (undefined !== hideIcon && hideIcon)) {
        let tmp11;
        if (cResult[3] === iconStyle) {
          tmp11 = cResult[4];
        }
        if (cResult[5] === (undefined !== hideText && hideText)) {
          if (cResult[6] === maxFontSizeMultiplier) {
            if (cResult[7] === tmp9) {
              let tmp16;
              if (cResult[8] === textStyle) {
                tmp16 = cResult[9];
              }
              if (cResult[10] === tmp11) {
                let tmp20;
                if (cResult[11] === tmp16) {
                  tmp20 = cResult[12];
                }
                return tmp20;
              }
              const obj3 = { children: items };
              items = [tmp11, tmp16];
              const tmp23 = hasOwnProperty(React3, obj3);
              cResult[10] = tmp11;
              cResult[11] = tmp16;
              cResult[12] = tmp23;
              tmp20 = tmp23;
            }
          }
        }
        let tmp17 = !tmp5;
        if (tmp17) {
          const obj4 = { style: textStyle, maxFontSizeMultiplier, children: tmp9 };
          tmp17 = _false(ActivityStatusTextDefault, obj4);
        }
        cResult[5] = undefined !== hideText && hideText;
        cResult[6] = maxFontSizeMultiplier;
        cResult[7] = tmp9;
        cResult[8] = textStyle;
        cResult[9] = tmp17;
        tmp16 = tmp17;
      }
      let tmp12 = !tmp4;
      if (tmp12) {
        const obj5 = { icon: TvIcon.TvIcon, style: iconStyle };
        const tmp15 = ActivityStatusIconDefault;
        tmp12 = _false(tmp15, obj5);
      }
      cResult[2] = undefined !== hideIcon && hideIcon;
      cResult[3] = iconStyle;
      cResult[4] = tmp12;
      tmp11 = tmp12;
    }
  : (hideText) => {
      let formatResult;
      let game;
      let hideIcon;
      let iconStyle;
      let maxFontSizeMultiplier;
      let textStyle;
      let tmp7;
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
        const intl2 = intl3.intl;
        const obj = { name: tmp2 };
        formatResult = intl2.format(intl3.t["0wJXSh"], obj);
        tmp7 = require;
      } else {
        const intl = intl3.intl;
        formatResult = intl.string(intl3.t.eXan7B);
        tmp7 = require;
      }
      let tmp12 = !hideIcon;
      if (tmp12) {
        const obj2 = { icon: tmp7(10629).TvIcon, style: iconStyle };
        const tmp15 = ActivityStatusIconDefault;
        tmp12 = _false(tmp15, obj2);
      }
      const children = [tmp12];
      let tmp16 = !flag;
      if (tmp16) {
        const obj3 = { style: textStyle, maxFontSizeMultiplier, children: formatResult };
        tmp16 = _false(ActivityStatusTextDefault, obj3);
      }
      children[1] = tmp16;
      return hasOwnProperty(React3, { children });
    };
const result = size.fileFinishedImporting("modules/activity_status/native/ApplicationStreamActivityStatus.tsx");

export default tmp4;
