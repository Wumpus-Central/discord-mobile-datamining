// === Module 13252: ConjureLinkedAppHeader ===

// Module 13252 (ConjureLinkedAppHeader)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5929 */;
import AppsIcon from "AppsIcon" /* 8101 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 10543 */;
import conjureLinkedAppData from "conjureLinkedAppData" /* 13251 */;
import ConjureLinkedAppConnectorDefault from "ConjureLinkedAppConnector" /* 13253 */;
import noop from "module_19" /* 19 */;

require = fn;
function AppName(children) {
  const project = children.project;
  const tmp = closure_6();
  const obj = { style: tmp.app, children: null };
  if (null != project) {
    const obj2 = { project, size: "header" };
    let tmp8 = React4(ConjureProjectIconDefault, obj2);
    let tmp4 = React4;
  } else {
    tmp4 = React4;
    const obj3 = { style: tmp.iconPlaceholder, children: null };
    const obj4 = { size: "xxs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    obj3.children = React4(AppsIcon.AppsIcon, obj4);
    tmp8 = React4(View, obj3);
  }
  items = [tmp8, tmp4(Text_Text.Text, { variant: "body-md/medium", color: "text-strong", lineClamp: 1, style: tmp.name, children: children.name })];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5306);
let obj2 = { header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, app: null, name: null, iconPlaceholder: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.app = { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj2.name = { flexShrink: 1 };
let size = { alignItems: "center", justifyContent: "center", width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.iconPlaceholder = size;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppHeader.tsx");

export default function ConjureLinkedAppHeader(arg0) {
  ({ caller, target, flow } = arg0);
  ({ callerProject, targetProject } = arg0);
  const obj = { style: closure_6().header, accessible: true, accessibilityLabel: conjureLinkedAppData.linkedAppHeaderAria({ caller, target }, flow), children: null };
  items = [React4(AppName, { name: caller, project: callerProject }), React4(ConjureLinkedAppConnectorDefault, { flow }), React4(AppName, { name: target, project: targetProject })];
  obj.children = items;
  return hasOwnProperty(View, obj);
};