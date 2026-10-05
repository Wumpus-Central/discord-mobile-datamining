// === Module 9007: confirmActivityAgeGateAlert ===

// Module 9007 (confirmActivityAgeGateAlert)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import ActivityAnnouncementDefault from "ActivityAnnouncement" /* 9008 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let description;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertBodyText: obj2 };
obj2 = { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((description) => {
  let first;
  let items;
  const obj = react2;
  const cResult = obj.c(7);
  description = description.description;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = React3(ActivityAnnouncementDefault, {});
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === description) {
    let tmp9;
    if (cResult[2] === tmp4.alertBodyText) {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp4.alertContainer) {
      let tmp11;
      if (cResult[5] === tmp9) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
    const obj2 = { style: tmp4.alertContainer, children: items };
    items = [first, tmp9];
    const tmp14 = hasOwnProperty(View, obj2);
    cResult[4] = tmp4.alertContainer;
    cResult[5] = tmp9;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  const obj3 = { style: tmp4.alertBodyText, variant: "text-md/normal", children: description };
  const tmp10 = React3(Text_Text.Text, obj3);
  cResult[1] = description;
  cResult[2] = tmp4.alertBodyText;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : ((description) => {
  let items;
  description = description.description;
  const tmp = closure_6();
  const obj = { style: tmp.alertContainer, children: items };
  items = [React3(ActivityAnnouncementDefault, {}), ];
  const obj2 = { style: tmp.alertBodyText, variant: "text-md/normal", children: description };
  items[1] = React3(Text_Text.Text, obj2);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export const confirmActivityAgeGateAlert = function confirmActivityAgeGateAlert(arg0) {
  let application;
  let intl2;
  let intl3;
  let intl4;
  let onAgree;
  let onDisagree;
  ({ application, onAgree, onDisagree } = arg0);
  const intl = intl5.intl;
  const obj = { applicationName: application.name };
  const formatToPlainStringResult = intl.formatToPlainString(intl5.t.OgmIqy, obj);
  const obj2 = { title: intl2.string(intl5.t.SSDPOF), children: React3(closure_7, { description: formatToPlainStringResult }), cancelText: intl3.string(intl5.t.hg1uxn), confirmText: intl4.string(intl5.t.wVq7uo), onConfirm: onAgree, onCancel: onDisagree, confirmColor: native.ButtonColors.RED, isDismissable: false };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  return resolve(show(obj2));
};