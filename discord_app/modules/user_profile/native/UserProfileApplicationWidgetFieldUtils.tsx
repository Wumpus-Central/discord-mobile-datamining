// discord_app/modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons.tsx";
import ApplicationWidgetMarkupUtils from "../../application_widget/ApplicationWidgetMarkupUtils.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  fieldTextRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 },
  fieldIcon: { width: 16, height: 16 },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
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
    const intl = util.intl;
    const obj = { hours: rounded };
    items.push(intl.formatToPlainString(util.t.rhY1Rs, obj));
  }
  if (0 < result) {
    const intl2 = util.intl;
    const obj2 = { minutes: result };
    items.push(intl2.formatToPlainString(util.t["XIGt+W"], obj2));
  }
  let tmp10 = result1 > 0;
  if (0 >= result1) {
    tmp10 = 0 === items.length;
  }
  if (tmp10) {
    const intl3 = util.intl;
    const obj3 = { seconds: result1 };
    items.push(intl3.formatToPlainString(util.t.pyvjRp, obj3));
  }
  return items.join(" ");
};
export const FieldText = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(17);
      ({ field, variant, color, skeletonWidthChars } = arg0);
      const tmp4 = closure_6();
      if ("hidden" === field.status) {
        return null;
      } else if ("skeleton" === field.status) {
        if (cResult[0] === skeletonWidthChars) {
          if (cResult[1] === variant) {
            let tmp19 = cResult[2];
          }
          return tmp19;
        }
        const obj2 = { variant, widthChars: skeletonWidthChars };
        const tmp21 = React4(UserProfileApplicationWidgetSkeletons.TextSkeleton, obj2);
        cResult[0] = skeletonWidthChars;
        cResult[1] = variant;
        cResult[2] = tmp21;
        tmp19 = tmp21;
      } else {
        if (cResult[3] === field.text) {
          if (cResult[4] === variant) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] === color) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === variant) {
                let tmp7 = cResult[9];
              }
              if (cResult[10] === field.icon) {
                if (cResult[11] === tmp4.fieldIcon) {
                  let tmp10 = cResult[12];
                }
                if (cResult[13] === tmp4.fieldTextRow) {
                  if (cResult[14] === tmp7) {
                    if (cResult[15] === tmp10) {
                      let tmp15 = cResult[16];
                    }
                    return tmp15;
                  }
                }
                const obj3 = { style: tmp23, children: null };
                const items = [tmp7, tmp10];
                obj3.children = items;
                const tmp18 = hasOwnProperty(React3, obj3);
                cResult[13] = tmp4.fieldTextRow;
                cResult[14] = tmp7;
                cResult[15] = tmp10;
                cResult[16] = tmp18;
                tmp15 = tmp18;
              }
              let tmp12 = null != field.icon;
              if (tmp12) {
                const obj4 = { source: null, style: null, resizeMode: "contain" };
                const obj5 = { uri: field.icon.url };
                obj4.source = obj5;
                obj4.style = tmp4.fieldIcon;
                tmp12 = React4(React2, obj4);
              }
              cResult[10] = field.icon;
              cResult[11] = tmp4.fieldIcon;
              cResult[12] = tmp12;
              tmp10 = tmp12;
            }
          }
          const obj6 = { variant, color, lineClamp: 2, children: tmp5 };
          const tmp9 = React4(Text_Text.Text, obj6);
          cResult[6] = color;
          cResult[7] = tmp5;
          cResult[8] = variant;
          cResult[9] = tmp9;
          tmp7 = tmp9;
        }
        const obj7 = { linkVariant: variant };
        const result = ApplicationWidgetMarkupUtils.parseApplicationWidgetText(field.text, obj7);
        cResult[3] = field.text;
        cResult[4] = variant;
        cResult[5] = result;
        tmp5 = result;
        const tmpResult = ApplicationWidgetMarkupUtils;
      }
    }
  : (arg0) => {
      ({ field, variant } = arg0);
      ({ color, skeletonWidthChars } = arg0);
      const tmp = closure_6();
      if ("hidden" === field.status) {
        return null;
      } else if ("skeleton" === field.status) {
        const obj2 = { variant, widthChars: skeletonWidthChars };
        let tmp9Result = React4(UserProfileApplicationWidgetSkeletons.TextSkeleton, obj2);
      } else {
        const obj3 = { style: tmp.fieldTextRow, children: null };
        const obj4 = { variant, color, lineClamp: 2, children: null };
        const obj5 = { linkVariant: variant };
        obj4.children = ApplicationWidgetMarkupUtils.parseApplicationWidgetText(field.text, obj5);
        const items = [React4(Text_Text.Text, obj4)];
        let tmp11Result = null != field.icon;
        if (tmp11Result) {
          const obj = { source: null, style: null, resizeMode: "contain" };
          const obj7 = { uri: field.icon.url };
          obj.source = obj7;
          obj.style = tmp.fieldIcon;
          tmp11Result = React4(React2, obj);
        }
        items[1] = tmp11Result;
        obj3.children = items;
        tmp9Result = hasOwnProperty(React3, obj3);
      }
    };
