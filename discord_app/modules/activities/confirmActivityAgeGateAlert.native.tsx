// discord_app/modules/activities/confirmActivityAgeGateAlert.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import ActivityAnnouncementDefault from "native/ActivityAnnouncement.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
function ConfirmActivityGateContent(children) {
  const tmp = closure_6();
  let obj = { style: tmp.alertContainer, children: null };
  const items = [React4(ActivityAnnouncementDefault, {})];
  obj = { style: tmp.alertBodyText, variant: "text-md/normal", children: children.description };
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertBodyText: null };
createStyles = {
  fontSize: 16,
  lineHeight: 24,
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  textAlign: "center",
};
createStyles.alertBodyText = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export const confirmActivityAgeGateAlert = function confirmActivityAgeGateAlert(arg0) {
  ({ application, onAgree, onDisagree } = arg0);
  const intl = util.intl;
  let obj = { applicationName: application.name };
  const formatToPlainStringResult = intl.formatToPlainString(util.t.OgmIqy, obj);
  obj = {
    title: null,
    children: null,
    cancelText: null,
    confirmText: null,
    onConfirm: null,
    onCancel: null,
    confirmColor: null,
  };
  const intl2 = util.intl;
  obj.title = intl2.string(util.t.SSDPOF);
  obj.children = React4(ConfirmActivityGateContent, { description: formatToPlainStringResult });
  const intl3 = util.intl;
  obj.cancelText = intl3.string(util.t.hg1uxn);
  const intl4 = util.intl;
  obj.confirmText = intl4.string(util.t.wVq7uo);
  obj.onConfirm = onAgree;
  obj.onCancel = onDisagree;
  obj.confirmColor = native.ButtonColors.RED;
  return Promise.resolve(AlertActionCreatorsDefault.show(obj));
};
