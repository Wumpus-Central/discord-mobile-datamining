// discord_app/modules/app_launcher/native/AppLauncherButtonIcon.tsx
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import AppsIcon from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import PlusLargeIcon from "../../../design/components/Icon/native/redesign/generated/PlusLargeIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = function AppLauncherButtonIcon(style) {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  let obj = { style: { overflow: "hidden" }, children: null };
  if (tmp3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    obj = {};
    const merged1 = Object.assign(merged);
    const items = [style];
    obj = { transform: null };
    const items1 = [{ rotate: "45deg" }];
    obj.transform = items1;
    items[1] = obj;
    obj.style = items;
    let tmp4Result = jsx(PlusLargeIcon.PlusLargeIcon, { transform: null });
  } else {
    const obj1 = { style };
    const merged2 = Object.assign(merged);
    tmp4Result = jsx(AppsIcon.AppsIcon, { style });
  }
  obj.children = tmp4Result;
  return <View style={{ overflow: "hidden" }}>{null}</View>;
};
