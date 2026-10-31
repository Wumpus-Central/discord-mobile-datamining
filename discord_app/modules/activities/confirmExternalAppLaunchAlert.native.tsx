// discord_app/modules/activities/confirmExternalAppLaunchAlert.native.tsx
import util from "../../intl/index.native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import FastImageDefault from "../../components_native/common/FastImage.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import _modDef11746 from "../../../_runtime/metro/11746__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
function ConfirmActivityGateContent(activityName) {
  const tmp = closure_7();
  const obj = { style: tmp.alertContainer, children: null };
  const obj2 = { source: _modDef11746, style: tmp.announcementBirb };
  const items = [hasOwnProperty(FastImageDefault, obj2), , ,];
  const obj3 = { style: tmp.alertEyebrowText, variant: "eyebrow", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["06YebE"]);
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.alertTitleText, variant: "heading-lg/bold", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.format(util.t["Z/eMDT"], { activityName: activityName.application.name });
  items[2] = hasOwnProperty(Text_Text.Text, obj4);
  const obj6 = { style: tmp.alertSubtitleText, variant: "text-sm/normal", children: null };
  const intl3 = util.intl;
  obj6.children = intl3.string(util.t.z81WwD);
  items[3] = hasOwnProperty(Text_Text.Text, obj6);
  obj.children = items;
  return timestampProducer(View, obj);
}
function LinkButton() {
  const obj = { style: closure_7().linkWrapper, children: null };
  const obj2 = {
    variant: "secondary",
    size: "sm",
    onPress: function handlePress() {
      LinkingDefault.openURL(PRIVATE_APPS_HELP_ARTICLE);
    },
    text: null,
  };
  const intl = util.intl;
  obj2.text = intl.string(util.t.E0gf5l);
  obj.children = hasOwnProperty(components_Button_Button.Button, obj2);
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const PRIVATE_APPS_HELP_ARTICLE = fn(2018).PRIVATE_APPS_HELP_ARTICLE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let closure_7 = createStyles.createStyles({
  alertContainer: { display: "flex", alignItems: "center", padding: 8 },
  alertEyebrowText: { marginTop: 40, textAlign: "center" },
  alertTitleText: { marginTop: 16, textAlign: "center" },
  alertSubtitleText: { marginTop: 16, textAlign: "center" },
  announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 },
  linkWrapper: { marginTop: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export function confirmExternalAppLaunchAlert(arg0) {
  ({ application, onConfirm, onCancel } = arg0);
  const obj2 = {
    title: "",
    children: hasOwnProperty(ConfirmActivityGateContent, { application }),
    onConfirm,
    confirmText: null,
    onCancel: null,
    cancelText: null,
    footer: null,
    isDismissable: false,
  };
  const intl = util.intl;
  obj2.confirmText = intl.string(util.t["3PatSz"]);
  obj2.onCancel = onCancel;
  const intl2 = util.intl;
  obj2.cancelText = intl2.string(util.t["ETE/oC"]);
  obj2.footer = hasOwnProperty(LinkButton, {});
  return Promise.resolve(AlertActionCreatorsDefault.show(obj2));
}
