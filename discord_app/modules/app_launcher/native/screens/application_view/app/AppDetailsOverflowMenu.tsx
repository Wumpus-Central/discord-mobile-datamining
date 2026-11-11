// discord_app/modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx
import ToastUtils from "../../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../../utils/ClipboardUtils.native.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx",
);

export default function AppDetailsOverflowMenu(application) {
  application = application.application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  dependencyMap = application(12608).getInstallAppProps(application);
  let obj = application(12608);
  const tmp3 = onAddAppMenuClick(13366);
  let tmp3Result = tmp3(application(12608).getInstallableApplication(application));
  if (tmp3Result) {
    tmp3Result = null != onAddAppMenuClick;
  }
  items = [];
  if (tmp3Result) {
    const obj3 = { label: null, action: null, IconComponent: null };
    let intl = tmp(1113).intl;
    obj3.label = intl.string(tmp(1113).t.NgXl3C);
    obj3.action = function action() {
      return onAddAppMenuClick({ installAppProps });
    };
    obj3.IconComponent = tmp(13367).CirclePlusIcon;
    items.push(obj3);
  }
  const DeveloperMode = tmp(5068).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    const obj4 = { label: null, action: null, IconComponent: null };
    const intl2 = tmp(1113).intl;
    obj4.label = intl2.string(tmp(1113).t["+NP/b2"]);
    obj4.action = function action() {
      ClipboardUtils.copy(application.id);
      ToastUtils.presentIdCopied();
    };
    obj4.IconComponent = tmp(11568).IdIcon;
    items.push(obj4);
  }
  let tmp8 = null;
  if (0 !== items.length) {
    const obj5 = {
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
    tmp8 = jsx(tmp(9082).ContextMenu, {
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
