// === Module 12386: AppDetailsOverflowMenu ===

// Module 12386 (AppDetailsOverflowMenu)
import ToastUtils from "ToastUtils" /* 4453 */;
import ClipboardUtils from "ClipboardUtils" /* 7434 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx");

export default function AppDetailsOverflowMenu(application) {
  application = application.application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  let installAppProps;
  installAppProps = application(installAppProps[2]).getInstallAppProps(application);
  let obj = application(installAppProps[2]);
  let result = application(installAppProps[3]).canInstallApplication(installAppProps);
  if (result) {
    result = null != onAddAppMenuClick;
  }
  const items = [];
  if (result) {
    const obj3 = { label: null, action: null, IconComponent: null };
    let intl = tmp(tmp2[4]).intl;
    obj3.label = intl.string(tmp(tmp2[4]).t.NgXl3C);
    obj3.action = function action() {
      return onAddAppMenuClick({ installAppProps });
    };
    obj3.IconComponent = tmp(tmp2[5]).CirclePlusIcon;
    items.push(obj3);
  }
  const DeveloperMode = tmp(tmp2[6]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    const obj4 = { label: null, action: null, IconComponent: null };
    const intl2 = tmp(tmp2[4]).intl;
    obj4.label = intl2.string(tmp(tmp2[4]).t["+NP/b2"]);
    obj4.action = function action() {
      ClipboardUtils.copy(application.id);
      ToastUtils.presentIdCopied();
    };
    obj4.IconComponent = tmp(tmp2[9]).IdIcon;
    items.push(obj4);
  }
  let tmp8 = null;
  if (0 !== items.length) {
    const obj5 = {
      items,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[12]) };
          const merged1 = Object.assign(merged);
          const intl = application(installAppProps[4]).intl;
          obj.accessibilityLabel = intl.string(application(installAppProps[4]).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return jsx(application(installAppProps[11]).IconButton, { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[12]) });
        }
    };
    tmp8 = jsx(tmp(tmp2[10]).ContextMenu, {
      items,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[12]) };
          const merged1 = Object.assign(merged);
          const intl = application(installAppProps[4]).intl;
          obj.accessibilityLabel = intl.string(application(installAppProps[4]).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return jsx(application(installAppProps[11]).IconButton, { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[12]) });
        }
    });
  }
  return tmp8;
};