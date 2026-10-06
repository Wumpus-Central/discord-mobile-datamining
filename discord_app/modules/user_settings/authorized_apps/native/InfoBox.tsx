// === Module 9472: InfoBox ===

// Module 9472 (InfoBox)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 4806 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4818 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { infoBox: obj2, infoBoxWarning: obj3, infoText: { flex: 1 } };
obj2 = { borderRadius: nativeDefault.radii.xs, padding: 8, borderStyle: "solid", borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, flexDirection: "row", alignItems: "center", gap: 8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
let closure_6 = createStyles(obj);
let obj4 = { INFO: "info", WARNING: "warning" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let look;
  let style;
  let tmp10;
  let tmp14;
  const obj = react2;
  const cResult = obj.c(17);
  ({ children, style, look } = arg0);
  if (undefined === look) {
    look = obj4.INFO;
  }
  const tmp5 = closure_6();
  if (cResult[0] === look) {
    if (cResult[1] === style) {
      if (cResult[2] === tmp5.infoBox) {
        let tmp6;
        let tmp7;
        let tmp8;
        if (cResult[3] === tmp5.infoBoxWarning) {
          tmp6 = cResult[4];
          tmp7 = cResult[5];
          tmp8 = cResult[6];
        }
        if (cResult[9] === children) {
          let tmp18;
          if (cResult[10] === tmp5.infoText) {
            tmp18 = cResult[11];
          }
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp8) {
              if (cResult[14] === tmp7[look]) {
                let tmp21;
                if (cResult[15] === tmp18) {
                  tmp21 = cResult[16];
                }
                return tmp21;
              }
            }
          }
          const obj2 = { style: tmp8, children: items };
          items = [tmp7[look], tmp18];
          const tmp23 = hasOwnProperty(tmp6, obj2);
          cResult[12] = tmp6;
          cResult[13] = tmp8;
          cResult[14] = tmp7[look];
          cResult[15] = tmp18;
          cResult[16] = tmp23;
          tmp21 = tmp23;
        }
        const obj3 = { style: tmp5.infoText, variant: "text-sm/semibold", children };
        const tmp20 = React3(Text_Text.Text, obj3);
        cResult[9] = children;
        cResult[10] = tmp5.infoText;
        cResult[11] = tmp20;
        tmp18 = tmp20;
      }
    }
  }
  const items1 = [tmp5.infoBox];
  const items2 = [, ];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp5);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    obj4 = { color: nativeDefault.colors.TEXT_LINK };
    const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
    const tmp13 = React3(CircleInformationIcon, obj4);
    cResult[7] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = {};
    obj5[obj4.INFO] = tmp10;
    const WARNING = tmp9.WARNING;
    const obj6 = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    obj5[WARNING] = React3(CircleErrorIcon, obj6);
    cResult[8] = obj5;
    tmp14 = obj5;
  } else {
    tmp14 = cResult[8];
  }
  const items3 = [style, ...{ [closure_1_7.INFO]: items1, [closure_1_7.WARNING]: items2 }[look]];
  cResult[0] = look;
  cResult[1] = style;
  cResult[2] = tmp5.infoBox;
  cResult[3] = tmp5.infoBoxWarning;
  cResult[4] = View;
  cResult[5] = tmp14;
  cResult[6] = items3;
  tmp7 = tmp14;
  tmp8 = items3;
  tmp6 = View;
}) : ((look) => {
  let children;
  let items2;
  let items3;
  let style;
  let INFO = look.look;
  ({ children, style } = look);
  if (INFO === undefined) {
    INFO = obj4.INFO;
  }
  const tmp2 = closure_6();
  const items = [tmp2.infoBox];
  const items1 = [, ];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp2);
  const obj = {};
  const INFO2 = obj4.INFO;
  const obj2 = { color: nativeDefault.colors.TEXT_LINK };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  obj[INFO2] = React3(CircleInformationIcon, obj2);
  const WARNING = obj4.WARNING;
  const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
  const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
  obj[WARNING] = React3(CircleErrorIcon, obj3);
  obj4 = { style: items2, children: items3 };
  items2 = [style, ...{ [closure_1_7.INFO]: items, [closure_1_7.WARNING]: items1 }[INFO]];
  items3 = [obj[INFO], ];
  const obj5 = { style: tmp2.infoText, variant: "text-sm/semibold", children };
  items3[1] = React3(Text_Text.Text, obj5);
  return hasOwnProperty(View, obj4);
});
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/InfoBox.tsx");

export default tmp5;
export const InfoBoxLooks = obj4;