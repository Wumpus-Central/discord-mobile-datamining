// === Module 9459: InfoBox ===

// Module 9459 (InfoBox)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 4800 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4812 */;
import Text_Text from "Text/Text" /* 4886 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { infoBox: { borderRadius: nativeDefault.radii.xs, padding: 8, borderStyle: "solid", borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, flexDirection: "row", alignItems: "center", gap: 8 }, infoBoxWarning: null, infoText: null };
let obj3 = { borderRadius: nativeDefault.radii.xs, padding: 8, borderStyle: "solid", borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, flexDirection: "row", alignItems: "center", gap: 8 };
obj2.infoBoxWarning = { borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
obj2.infoText = { flex: 1 };
let closure_6 = createStyles.createStyles(obj2);
let obj5 = { INFO: "info", WARNING: "warning" };
const ReactCompilerGating = fn(558);
let obj4 = { borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/InfoBox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ children, style: infoBoxWarning, look } = arg0);
  if (undefined === look) {
    look = obj5.INFO;
  }
  const tmp5 = closure_6();
  if (cResult[0] === look) {
    if (cResult[1] === infoBoxWarning) {
      if (cResult[2] === tmp5.infoBox) {
        if (cResult[3] === tmp5.infoBoxWarning) {
          if (cResult[9] === children) {
            if (cResult[10] === tmp5.infoText) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] === tmp6) {
              if (cResult[13] === tmp7) {
                if (cResult[14] === tmp14) {
                  if (cResult[15] === tmp15) {
                    let tmp18 = cResult[16];
                  }
                  return tmp18;
                }
              }
            }
            const obj2 = { style: tmp7, children: null };
            const items = [tmp14, tmp15];
            obj2.children = items;
            const tmp20 = hasOwnProperty(tmp6, obj2);
            cResult[12] = tmp6;
            cResult[13] = tmp7;
            cResult[14] = tmp14;
            cResult[15] = tmp15;
            cResult[16] = tmp20;
            tmp18 = tmp20;
          }
          const obj3 = { style: tmp5.infoText, variant: "text-sm/semibold", children };
          const tmp17 = React4(Text_Text.Text, obj3);
          cResult[9] = children;
          cResult[10] = tmp5.infoText;
          cResult[11] = tmp17;
          tmp15 = tmp17;
        }
      }
    }
  }
  let items3 = obj5;
  const items1 = [tmp5.infoBox];
  const items2 = [, ];
  ({ infoBox: arr3[0], infoBoxWarning: arr3[1] } = tmp5);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { color: nativeDefault.colors.TEXT_LINK };
    const tmp10 = React4(CircleInformationIcon.CircleInformationIcon, obj4);
    cResult[7] = tmp10;
    let CircleErrorIcon = tmp10;
  } else {
    CircleErrorIcon = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    obj5 = {};
    obj5[items3.INFO] = CircleErrorIcon;
    CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    const obj6 = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    obj5[items3.WARNING] = React4(CircleErrorIcon, obj6);
    cResult[8] = obj5;
    let tmp11 = obj5;
  } else {
    tmp11 = cResult[8];
  }
  items3 = [infoBoxWarning, ...{ [closure_1_7.INFO]: items1, [closure_1_7.WARNING]: items2 }[look]];
  cResult[0] = look;
  cResult[1] = infoBoxWarning;
  ({ infoBox: tmp3[2], infoBoxWarning } = tmp5);
  cResult[3] = infoBoxWarning;
  cResult[4] = View;
  cResult[5] = tmp11;
  cResult[6] = items3;
}) : ((look) => {
  let INFO = look.look;
  ({ children, style } = look);
  if (INFO === undefined) {
    INFO = obj5.INFO;
  }
  const tmp2 = closure_6();
  const items = [tmp2.infoBox];
  const items1 = [, ];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp2);
  const obj = {};
  obj[obj5.INFO] = React4(CircleInformationIcon.CircleInformationIcon, { color: nativeDefault.colors.TEXT_LINK });
  const obj2 = { color: nativeDefault.colors.TEXT_LINK };
  obj[obj5.WARNING] = React4(CircleErrorIcon2.CircleErrorIcon, { color: nativeDefault.colors.ICON_FEEDBACK_WARNING });
  const obj4 = { style: null, children: null };
  const items2 = [style, ...{ [closure_1_7.INFO]: items, [closure_1_7.WARNING]: items1 }[INFO]];
  obj4.style = items2;
  const items3 = [obj[INFO], ];
  obj5 = { style: tmp2.infoText, variant: "text-sm/semibold", children };
  items3[1] = React4(Text_Text.Text, obj5);
  obj4.children = items3;
  return hasOwnProperty(View, obj4);
});
export const InfoBoxLooks = obj5;