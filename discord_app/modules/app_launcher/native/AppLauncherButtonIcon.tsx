// === Module 12497: AppLauncherButtonIcon ===

// Module 12497 (AppLauncherButtonIcon)
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import AppsIcon from "AppsIcon" /* 5278 */;
import PlusLargeIcon from "PlusLargeIcon" /* 11216 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = function AppLauncherButtonIcon(style) {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = { style: { overflow: "hidden" }, children: null };
  if (tmp3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    const items = [style, ];
    const obj3 = { transform: null };
    const items1 = [{ rotate: "45deg" }];
    obj3.transform = items1;
    items[1] = obj3;
    obj2.style = items;
    let tmp4Result = jsx(PlusLargeIcon.PlusLargeIcon, {});
  } else {
    const obj4 = { style };
    const merged2 = Object.assign(merged);
    tmp4Result = jsx(AppsIcon.AppsIcon, { style });
  }
  obj.children = tmp4Result;
  return <View style={{ overflow: "hidden" }}>{null}</View>;
};