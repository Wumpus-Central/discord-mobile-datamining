// discord_app/modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx
import ToastUtils from "../../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../../utils/ClipboardUtils.native.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx",
);

export default function AppDetailsOverflowMenu(application) {
  application = application.application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  let installAppProps;
  let obj = application(installAppProps[2]);
  installAppProps = obj.getInstallAppProps(application);
  let obj1 = application(installAppProps[3]);
  let result = obj1.canInstallApplication(installAppProps);
  if (result) {
    result = null != onAddAppMenuClick;
  }
  const items = [];
  if (result) {
    obj = { label: null, action: null, IconComponent: null };
    let intl = tmp(tmp2[4]).intl;
    obj.label = intl.string(tmp(tmp2[4]).t.NgXl3C);
    obj.action = function action() {
      return onAddAppMenuClick({ installAppProps });
    };
    obj.IconComponent = tmp(tmp2[5]).CirclePlusIcon;
    items.push(obj);
  }
  const DeveloperMode = tmp(tmp2[6]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    obj = { label: null, action: null, IconComponent: null };
    const intl2 = tmp(tmp2[4]).intl;
    obj.label = intl2.string(tmp(tmp2[4]).t["+NP/b2"]);
    obj.action = function action() {
      ClipboardUtils.copy(application.id);
      ToastUtils.presentIdCopied();
    };
    obj.IconComponent = tmp(tmp2[9]).IdIcon;
    items.push(obj);
  }
  let tmp8 = null;
  if (0 !== items.length) {
    obj1 = {
      items,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = {
          ref: ref.ref,
          size: "sm",
          variant: "secondary-overlay",
          icon: onAddAppMenuClick(installAppProps[12]),
        };
        const merged1 = Object.assign(merged);
        const intl = application(installAppProps[4]).intl;
        obj.accessibilityLabel = intl.string(application(installAppProps[4]).t.PdRCRg);
        obj.maxFontSizeMultiplier = 1.5;
        return jsx(application(installAppProps[11]).IconButton, {
          ref: ref.ref,
          size: "sm",
          variant: "secondary-overlay",
          icon: onAddAppMenuClick(installAppProps[12]),
        });
      },
    };
    tmp8 = jsx(tmp(tmp2[10]).ContextMenu, {
      items,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = {
          ref: ref.ref,
          size: "sm",
          variant: "secondary-overlay",
          icon: onAddAppMenuClick(installAppProps[12]),
        };
        const merged1 = Object.assign(merged);
        const intl = application(installAppProps[4]).intl;
        obj.accessibilityLabel = intl.string(application(installAppProps[4]).t.PdRCRg);
        obj.maxFontSizeMultiplier = 1.5;
        return jsx(application(installAppProps[11]).IconButton, {
          ref: ref.ref,
          size: "sm",
          variant: "secondary-overlay",
          icon: onAddAppMenuClick(installAppProps[12]),
        });
      },
    });
  }
  return tmp8;
}
