// discord_app/modules/activities/confirmExternalAppLaunchAlert.native.tsx
import util from "../../intl/index.native.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import _modDef9544 from "../../../_runtime/metro/09544__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
function ConfirmActivityGateContent(activityName) {
  const tmp = closure_8();
  let obj = { style: tmp.alertContainer, children: null };
  obj = { source: _modDef9544, style: tmp.announcementBirb };
  const items = [timestampProducer(React3, obj), , ,];
  obj = { style: tmp.alertEyebrowText, variant: "eyebrow", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["06YebE"]);
  items[1] = timestampProducer(Text_Text.Text, obj);
  const obj1 = { style: tmp.alertTitleText, variant: "heading-lg/bold", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.format(util.t["Z/eMDT"], { activityName: activityName.application.name });
  items[2] = timestampProducer(Text_Text.Text, obj1);
  const obj3 = { style: tmp.alertSubtitleText, variant: "text-sm/normal", children: null };
  const intl3 = util.intl;
  obj3.children = intl3.string(util.t.z81WwD);
  items[3] = timestampProducer(Text_Text.Text, obj3);
  obj.children = items;
  return React5(React4, obj);
}
function LinkButton() {
  let obj = { style: closure_8().linkWrapper, children: null };
  obj = {
    variant: "secondary",
    size: "sm",
    onPress() {
      LinkingDefault.openURL(PRIVATE_APPS_HELP_ARTICLE);
    },
    text: null,
  };
  const intl = util.intl;
  obj.text = intl.string(util.t.E0gf5l);
  obj.children = timestampProducer(components_Button_Button.Button, obj);
  return timestampProducer(React4, obj);
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const PRIVATE_APPS_HELP_ARTICLE = fn(1920).PRIVATE_APPS_HELP_ARTICLE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  alertContainer: { display: "flex", alignItems: "center", padding: 8 },
  alertEyebrowText: { marginTop: 40, textAlign: "center" },
  alertTitleText: { marginTop: 16, textAlign: "center" },
  alertSubtitleText: { marginTop: 16, textAlign: "center" },
  announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 },
  linkWrapper: { marginTop: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export const confirmExternalAppLaunchAlert = function confirmExternalAppLaunchAlert(arg0) {
  ({ application, onConfirm, onCancel } = arg0);
  const obj = {
    title: "",
    children: timestampProducer(ConfirmActivityGateContent, { application }),
    onConfirm,
    confirmText: null,
    onCancel: null,
    cancelText: null,
    footer: null,
  };
  const intl = util.intl;
  obj.confirmText = intl.string(util.t["3PatSz"]);
  obj.onCancel = onCancel;
  const intl2 = util.intl;
  obj.cancelText = intl2.string(util.t["ETE/oC"]);
  obj.footer = timestampProducer(LinkButton, {});
  return Promise.resolve(obj.show(obj));
};
