// === Module 9007: confirmActivityAgeGateAlert ===

// Module 9007 (confirmActivityAgeGateAlert)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import ActivityAnnouncementDefault from "ActivityAnnouncement" /* 9008 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertBodyText: { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((description) => {
  const cResult = c.c(7);
  description = description.description;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = React4(ActivityAnnouncementDefault, {});
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === description) {
    if (cResult[2] === tmp4.alertBodyText) {
      let tmp9 = cResult[3];
    }
    if (cResult[4] === tmp4.alertContainer) {
      if (cResult[5] === tmp9) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
    const obj2 = { style: tmp4.alertContainer, children: null };
    const items = [first, tmp9];
    obj2.children = items;
    const tmp14 = hasOwnProperty(View, obj2);
    cResult[4] = tmp4.alertContainer;
    cResult[5] = tmp9;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = React4(Text_Text.Text, { style: tmp4.alertBodyText, variant: "text-md/normal", children: description });
  cResult[1] = description;
  cResult[2] = tmp4.alertBodyText;
  cResult[3] = tmp10;
  tmp9 = tmp10;
  const obj3 = { style: tmp4.alertBodyText, variant: "text-md/normal", children: description };
}) : ((children) => {
  const tmp = closure_6();
  const obj = { style: tmp.alertContainer, children: null };
  const items = [React4(ActivityAnnouncementDefault, {}), React4(Text_Text.Text, { style: tmp.alertBodyText, variant: "text-md/normal", children: children.description })];
  obj.children = items;
  return hasOwnProperty(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export const confirmActivityAgeGateAlert = function confirmActivityAgeGateAlert(arg0) {
  ({ application, onAgree, onDisagree } = arg0);
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.OgmIqy, { applicationName: application.name });
  const obj = { applicationName: application.name };
  const obj3 = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null, isDismissable: false };
  const intl2 = util.intl;
  obj3.title = intl2.string(util.t.SSDPOF);
  obj3.children = React4(closure_7, { description: formatToPlainStringResult });
  const intl3 = util.intl;
  obj3.cancelText = intl3.string(util.t.hg1uxn);
  const intl4 = util.intl;
  obj3.confirmText = intl4.string(util.t.wVq7uo);
  obj3.onConfirm = onAgree;
  obj3.onCancel = onDisagree;
  obj3.confirmColor = native.ButtonColors.RED;
  return Promise.resolve(AlertActionCreatorsDefault.show(obj3));
};