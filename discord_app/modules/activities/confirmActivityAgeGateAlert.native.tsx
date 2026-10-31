// === Module 11743: confirmActivityAgeGateAlert ===

// Module 11743 (confirmActivityAgeGateAlert)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5958 */;
import ActivityAnnouncementDefault from "ActivityAnnouncement" /* 11744 */;
import noop from "module_19" /* 19 */;

require = fn;
function ConfirmActivityGateContent(children) {
  const tmp = closure_6();
  const obj = { style: tmp.alertContainer, children: null };
  const items = [React4(ActivityAnnouncementDefault, {}), React4(Text_Text.Text, { style: tmp.alertBodyText, variant: "text-md/normal", children: children.description })];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
const obj2 = { alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertBodyText: { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export function confirmActivityAgeGateAlert(arg0) {
  ({ application, onAgree, onDisagree } = arg0);
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.OgmIqy, { applicationName: application.name });
  const obj = { applicationName: application.name };
  const obj3 = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null, isDismissable: false };
  const intl2 = util.intl;
  obj3.title = intl2.string(util.t.SSDPOF);
  obj3.children = React4(ConfirmActivityGateContent, { description: formatToPlainStringResult });
  const intl3 = util.intl;
  obj3.cancelText = intl3.string(util.t.hg1uxn);
  const intl4 = util.intl;
  obj3.confirmText = intl4.string(util.t.wVq7uo);
  obj3.onConfirm = onAgree;
  obj3.onCancel = onDisagree;
  obj3.confirmColor = native.ButtonColors.RED;
  return Promise.resolve(AlertActionCreatorsDefault.show(obj3));
}