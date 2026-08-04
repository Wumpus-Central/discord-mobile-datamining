// discord_app/modules/activities/confirmExternalAppLaunchAlert.native.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { PRIVATE_APPS_HELP_ARTICLE } from "items3";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
function ConfirmActivityGateContent(activityName) {
  const tmp = callback3();
  let obj = { style: tmp.alertContainer, children: null };
  obj = { source: importDefault(10667), style: tmp.announcementBirb };
  const items = [callback(closure_3, obj), , , ];
  obj = { style: tmp.alertEyebrowText, variant: "eyebrow", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["06YebE"]);
  items[1] = callback(require(4189) /* Text */.Text, obj);
  const obj1 = { style: tmp.alertTitleText, variant: "heading-lg/bold", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl2.format(require(1236) /* getSystemLocale */.t["Z/eMDT"], { activityName: activityName.application.name });
  items[2] = callback(require(4189) /* Text */.Text, obj1);
  const obj3 = { style: tmp.alertSubtitleText, variant: "text-sm/normal", children: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj3[2] = intl3.string(require(1236) /* getSystemLocale */.t.z81WwD);
  items[3] = callback(require(4189) /* Text */.Text, obj3);
  obj[1] = items;
  return callback2(closure_4, obj);
}
function LinkButton() {
  let obj = { style: callback3().linkWrapper, children: null };
  obj = {
    variant: "secondary",
    size: "sm",
    onPress() {
      callback(table[9]).openURL(closure_5);
    },
    text: null
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.E0gf5l);
  obj[1] = callback(require(4604) /* Button */.Button, obj);
  return callback(closure_4, obj);
}
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertEyebrowText: { marginTop: 40, textAlign: "center" }, alertTitleText: { marginTop: 16, textAlign: "center" }, alertSubtitleText: { marginTop: 16, textAlign: "center" }, announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 }, linkWrapper: { marginTop: 8 } });
const result = require("items3").fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export const confirmExternalAppLaunchAlert = function confirmExternalAppLaunchAlert(arg0) {
  let application;
  let onCancel;
  let onConfirm;
  ({ application, onConfirm, onCancel } = arg0);
  let obj = importDefault(4532);
  obj = { title: "", children: callback(ConfirmActivityGateContent, { application }), onConfirm, confirmText: null, onCancel: null, cancelText: null, footer: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["3PatSz"]);
  obj[4] = onCancel;
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[5] = intl2.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  obj[6] = callback(LinkButton, {});
  return Promise.resolve(obj.show(obj));
};