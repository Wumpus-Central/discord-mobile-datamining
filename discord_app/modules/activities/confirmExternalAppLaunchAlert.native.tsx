// === Module 9692: confirmExternalAppLaunchAlert ===

// Module 9692 (confirmExternalAppLaunchAlert)
import util from "util" /* 1115 */;
import LinkingDefault from "Linking" /* 4520 */;
import Text_Text from "Text/Text" /* 4825 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5195 */;
import components_Button_Button from "components/Button/Button" /* 5273 */;
import _modDef9693 from "module_9693" /* 9693 */;
import noop from "module_19" /* 19 */;

require = fn;
function ConfirmActivityGateContent(activityName) {
  const tmp = closure_8();
  const obj = { style: tmp.alertContainer, children: null };
  const items = [timestampProducer(React3, { source: _modDef9693, style: tmp.announcementBirb }), , , ];
  const obj3 = { style: tmp.alertEyebrowText, variant: "eyebrow", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["06YebE"]);
  items[1] = timestampProducer(Text_Text.Text, obj3);
  const obj4 = { style: tmp.alertTitleText, variant: "heading-lg/bold", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.format(util.t["Z/eMDT"], { activityName: activityName.application.name });
  items[2] = timestampProducer(Text_Text.Text, obj4);
  const obj6 = { style: tmp.alertSubtitleText, variant: "text-sm/normal", children: null };
  const intl3 = util.intl;
  obj6.children = intl3.string(util.t.z81WwD);
  items[3] = timestampProducer(Text_Text.Text, obj6);
  obj.children = items;
  return React5(React4, obj);
}
function LinkButton() {
  const obj = { style: closure_8().linkWrapper, children: null };
  const obj2 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      LinkingDefault.openURL(PRIVATE_APPS_HELP_ARTICLE);
    },
    text: null
  };
  const intl = util.intl;
  obj2.text = intl.string(util.t.E0gf5l);
  obj.children = timestampProducer(components_Button_Button.Button, obj2);
  return timestampProducer(React4, obj);
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const PRIVATE_APPS_HELP_ARTICLE = fn(2004).PRIVATE_APPS_HELP_ARTICLE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({ alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertEyebrowText: { marginTop: 40, textAlign: "center" }, alertTitleText: { marginTop: 16, textAlign: "center" }, alertSubtitleText: { marginTop: 16, textAlign: "center" }, announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 }, linkWrapper: { marginTop: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export const confirmExternalAppLaunchAlert = function confirmExternalAppLaunchAlert(arg0) {
  ({ application, onConfirm, onCancel } = arg0);
  const obj2 = { title: "", children: timestampProducer(ConfirmActivityGateContent, { application }), onConfirm, confirmText: null, onCancel: null, cancelText: null, footer: null, isDismissable: false };
  const intl = util.intl;
  obj2.confirmText = intl.string(util.t["3PatSz"]);
  obj2.onCancel = onCancel;
  const intl2 = util.intl;
  obj2.cancelText = intl2.string(util.t["ETE/oC"]);
  obj2.footer = timestampProducer(LinkButton, {});
  return Promise.resolve(AlertActionCreatorsDefault.show(obj2));
};