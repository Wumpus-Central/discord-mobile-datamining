// discord_app/modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx");

export default function AppDetailsOverflowMenu(application) {
  application = application.application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  let installAppProps;
  let obj = application(installAppProps[2]);
  installAppProps = obj.getInstallAppProps(application);
  obj1 = application(installAppProps[3]);
  let result = obj1.canInstallApplication(installAppProps);
  if (result) {
    result = null != onAddAppMenuClick;
  }
  const items = [];
  if (result) {
    obj = { label: null, action: null, IconComponent: null };
    let intl = tmp(tmp2[4]).intl;
    obj[0] = intl.string(tmp(tmp2[4]).t.NgXl3C);
    obj[1] = function action() {
      return onAddAppMenuClick({ installAppProps });
    };
    obj[2] = tmp(tmp2[5]).CirclePlusIcon;
    items.push(obj);
  }
  const DeveloperMode = tmp(tmp2[6]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    obj = { label: null, action: null, IconComponent: null };
    const intl2 = tmp(tmp2[4]).intl;
    obj[0] = intl2.string(tmp(tmp2[4]).t["+NP/b2"]);
    obj[1] = function action() {
      application(installAppProps[7]).copy(application.id);
      const obj = application(installAppProps[7]);
      application(installAppProps[8]).presentIdCopied();
    };
    obj[2] = tmp(tmp2[9]).IdIcon;
    items.push(obj);
  }
  let tmp8 = null;
  if (0 !== items.length) {
    obj1 = { items: null, children: null };
    obj1[0] = items;
    obj1[1] = function children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[12]) };
      const merged1 = Object.assign(merged);
      const intl = application(installAppProps[4]).intl;
      obj.accessibilityLabel = intl.string(application(installAppProps[4]).t.PdRCRg);
      obj.maxFontSizeMultiplier = 1.5;
      return callback(application(installAppProps[11]).IconButton, obj);
    };
    tmp8 = jsx(tmp(tmp2[10]).ContextMenu, { items: null, children: null });
  }
  return tmp8;
};