// discord_app/modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons.tsx";
import ApplicationWidgetMarkupUtils from "../../application_widget/ApplicationWidgetMarkupUtils.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ Image: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { fieldTextRow: obj2, fieldIcon: { width: 16, height: 16 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let color;
      let field;
      let items;
      let obj5;
      let skeletonWidthChars;
      let variant;
      const obj = react2;
      const cResult = obj.c(17);
      ({ field, variant, color, skeletonWidthChars } = arg0);
      const tmp4 = closure_6();
      if ("hidden" === field.status) {
        return null;
      } else if ("skeleton" === field.status) {
        if (cResult[0] === skeletonWidthChars) {
          let tmp19;
          if (cResult[1] === variant) {
            tmp19 = cResult[2];
          }
          return tmp19;
        }
        const obj2 = { variant, widthChars: skeletonWidthChars };
        const tmp21 = React3(UserProfileApplicationWidgetSkeletons.TextSkeleton, obj2);
        cResult[0] = skeletonWidthChars;
        cResult[1] = variant;
        cResult[2] = tmp21;
        tmp19 = tmp21;
      } else {
        if (cResult[3] === field.text) {
          let tmp5;
          if (cResult[4] === variant) {
            tmp5 = cResult[5];
          }
          if (cResult[6] === color) {
            if (cResult[7] === tmp5) {
              let tmp7;
              if (cResult[8] === variant) {
                tmp7 = cResult[9];
              }
              if (cResult[10] === field.icon) {
                let tmp10;
                if (cResult[11] === tmp4.fieldIcon) {
                  tmp10 = cResult[12];
                }
                if (cResult[13] === tmp4.fieldTextRow) {
                  if (cResult[14] === tmp7) {
                    let tmp15;
                    if (cResult[15] === tmp10) {
                      tmp15 = cResult[16];
                    }
                    return tmp15;
                  }
                }
                const obj3 = { style: tmp23, children: items };
                items = [tmp7, tmp10];
                const tmp18 = hasOwnProperty(_false, obj3);
                cResult[13] = tmp4.fieldTextRow;
                cResult[14] = tmp7;
                cResult[15] = tmp10;
                cResult[16] = tmp18;
                tmp15 = tmp18;
              }
              let tmp12 = null != field.icon;
              if (tmp12) {
                const obj4 = { source: obj5, style: tmp4.fieldIcon, resizeMode: "contain" };
                obj5 = { uri: field.icon.url };
                tmp12 = React3(React2, obj4);
              }
              cResult[10] = field.icon;
              cResult[11] = tmp4.fieldIcon;
              cResult[12] = tmp12;
              tmp10 = tmp12;
            }
          }
          const obj6 = { variant, color, lineClamp: 2, children: tmp5 };
          const tmp9 = React3(Text_Text.Text, obj6);
          cResult[6] = color;
          cResult[7] = tmp5;
          cResult[8] = variant;
          cResult[9] = tmp9;
          tmp7 = tmp9;
        }
        const obj7 = { linkVariant: variant };
        const tmpResult = ApplicationWidgetMarkupUtils;
        const result = tmpResult.parseApplicationWidgetText(field.text, obj7);
        cResult[3] = field.text;
        cResult[4] = variant;
        cResult[5] = result;
        tmp5 = result;
      }
    }
  : (arg0) => {
      let color;
      let field;
      let items;
      let obj5;
      let obj6;
      let obj7;
      let skeletonWidthChars;
      let variant;
      ({ field, variant } = arg0);
      ({ color, skeletonWidthChars } = arg0);
      const tmp = closure_6();
      let tmp2 = null;
      if ("hidden" !== field.status) {
        let tmp9Result;
        if ("skeleton" === field.status) {
          const obj2 = { variant, widthChars: skeletonWidthChars };
          tmp9Result = React3(UserProfileApplicationWidgetSkeletons.TextSkeleton, obj2);
        } else {
          const obj3 = { style: tmp.fieldTextRow, children: items };
          const obj4 = { variant, color, lineClamp: 2, children: obj6.parseApplicationWidgetText(field.text, obj5) };
          const Text = Text_Text.Text;
          obj5 = { linkVariant: variant };
          obj6 = ApplicationWidgetMarkupUtils;
          items = [React3(Text, obj4)];
          let tmp11Result = null != field.icon;
          if (tmp11Result) {
            const obj = { source: obj7, style: tmp.fieldIcon, resizeMode: "contain" };
            obj7 = { uri: field.icon.url };
            tmp11Result = React3(React2, obj);
          }
          items[1] = tmp11Result;
          tmp9Result = hasOwnProperty(_false, obj3);
        }
        tmp2 = tmp9Result;
      }
      return tmp2;
    };
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx");

export const formatDurationNarrow = function formatDurationNarrow(value) {
  let num = 0;
  if (Number.isFinite(value)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(value));
  }
  const rounded = Math.floor(num / 3600000);
  const result = Math.floor(num / 60000) % 60;
  const result1 = Math.floor(num / 1000) % 60;
  const items = [];
  if (rounded > 0) {
    const push = items.push;
    const intl = intl4.intl;
    const obj = { hours: rounded };
    push(intl.formatToPlainString(intl4.t.rhY1Rs, obj));
  }
  if (0 < result) {
    const push2 = items.push;
    const intl2 = intl4.intl;
    const obj2 = { minutes: result };
    push2(intl2.formatToPlainString(intl4.t["XIGt+W"], obj2));
  }
  let tmp10 = result1 > 0;
  if (0 >= result1) {
    tmp10 = 0 === items.length;
  }
  if (tmp10) {
    const push3 = items.push;
    const intl3 = intl4.intl;
    const obj3 = { seconds: result1 };
    push3(intl3.formatToPlainString(intl4.t.pyvjRp, obj3));
  }
  return items.join(" ");
};
export const FieldText = tmp5;
