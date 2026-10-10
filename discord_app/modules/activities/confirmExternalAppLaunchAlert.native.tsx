// === Module 10874: confirmExternalAppLaunchAlert ===

// Module 10874 (confirmExternalAppLaunchAlert)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import LinkingDefault from "Linking" /* 4806 */;
import Text_Text from "Text/Text" /* 5088 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import FastImageDefault from "FastImage" /* 6156 */;
import _modDef10875 from "module_10875" /* 10875 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const PRIVATE_APPS_HELP_ARTICLE = fn(2024).PRIVATE_APPS_HELP_ARTICLE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles({ alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertEyebrowText: { marginTop: 40, textAlign: "center" }, alertTitleText: { marginTop: 16, textAlign: "center" }, alertSubtitleText: { marginTop: 16, textAlign: "center" }, announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 }, linkWrapper: { marginTop: 8 } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConfirmActivityGateContent(application) {
  const cResult = c.c(19);
  application = application.application;
  const tmp4 = closure_7();
  if (cResult[0] !== tmp4.announcementBirb) {
    const obj2 = { source: _modDef10875, style: tmp4.announcementBirb };
    const tmp9 = hasOwnProperty(FastImageDefault, obj2);
    cResult[0] = tmp4.announcementBirb;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["06YebE"]);
    cResult[2] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.alertEyebrowText) {
    const obj3 = { style: tmp4.alertEyebrowText, variant: "eyebrow", children: tmp10 };
    const tmp14 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[3] = tmp4.alertEyebrowText;
    cResult[4] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== application.name) {
    const intl2 = util.intl;
    const obj4 = { activityName: application.name };
    const formatResult = intl2.format(util.t["Z/eMDT"], obj4);
    cResult[5] = application.name;
    cResult[6] = formatResult;
    let tmp15 = formatResult;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp4.alertTitleText) {
    if (cResult[8] === tmp15) {
      let tmp17 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult1 = intl3.string(util.t.z81WwD);
      cResult[10] = stringResult1;
      let tmp19 = stringResult1;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] !== tmp4.alertSubtitleText) {
      const obj5 = { style: tmp4.alertSubtitleText, variant: "text-sm/normal", children: tmp19 };
      const tmp23 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[11] = tmp4.alertSubtitleText;
      cResult[12] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[12];
    }
    if (cResult[13] === tmp4.alertContainer) {
      if (cResult[14] === tmp21) {
        if (cResult[15] === tmp5) {
          if (cResult[16] === tmp12) {
            if (cResult[17] === tmp17) {
              let tmp24 = cResult[18];
            }
            return tmp24;
          }
        }
      }
    }
    const obj6 = { style: tmp4.alertContainer, children: null };
    const items = [tmp5, tmp12, tmp17, tmp21];
    obj6.children = items;
    const tmp27 = timestampProducer(View, obj6);
    cResult[13] = tmp4.alertContainer;
    cResult[14] = tmp21;
    cResult[15] = tmp5;
    cResult[16] = tmp12;
    cResult[17] = tmp17;
    cResult[18] = tmp27;
    tmp24 = tmp27;
  }
  const tmp18 = hasOwnProperty(Text_Text.Text, { style: tmp4.alertTitleText, variant: "heading-lg/bold", children: tmp15 });
  cResult[7] = tmp4.alertTitleText;
  cResult[8] = tmp15;
  cResult[9] = tmp18;
  tmp17 = tmp18;
}) : (function ConfirmActivityGateContent(activityName) {
  const tmp = closure_7();
  const obj = { style: tmp.alertContainer, children: null };
  const obj2 = { source: _modDef10875, style: tmp.announcementBirb };
  const items = [hasOwnProperty(FastImageDefault, obj2), , , ];
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
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function LinkButton() {
  const cResult = c.c(4);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handlePress() {
      LinkingDefault.openURL(PRIVATE_APPS_HELP_ARTICLE);
    }
    cResult[0] = handlePress;
    let first = handlePress;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "secondary", size: "sm", onPress: first, text: null };
    const intl = util.intl;
    obj2.text = intl.string(util.t.E0gf5l);
    const tmp8 = hasOwnProperty(components_Button_Button.Button, obj2);
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4.linkWrapper) {
    const obj3 = { style: tmp4.linkWrapper, children: tmp6 };
    const tmp12 = hasOwnProperty(View, obj3);
    cResult[2] = tmp4.linkWrapper;
    cResult[3] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (function LinkButton() {
  const obj = { style: closure_7().linkWrapper, children: null };
  const obj2 = {
    variant: "secondary",
    size: "sm",
    onPress: function handlePress() {
      LinkingDefault.openURL(PRIVATE_APPS_HELP_ARTICLE);
    },
    text: null
  };
  const intl = util.intl;
  obj2.text = intl.string(util.t.E0gf5l);
  obj.children = hasOwnProperty(components_Button_Button.Button, obj2);
  return hasOwnProperty(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export const confirmExternalAppLaunchAlert = function confirmExternalAppLaunchAlert(arg0) {
  ({ application, onConfirm, onCancel } = arg0);
  const obj2 = { title: "", children: hasOwnProperty(closure_8, { application }), onConfirm, confirmText: null, onCancel: null, cancelText: null, footer: null, isDismissable: false };
  const intl = util.intl;
  obj2.confirmText = intl.string(util.t["3PatSz"]);
  obj2.onCancel = onCancel;
  const intl2 = util.intl;
  obj2.cancelText = intl2.string(util.t["ETE/oC"]);
  obj2.footer = hasOwnProperty(closure_9, {});
  return Promise.resolve(AlertActionCreatorsDefault.show(obj2));
};