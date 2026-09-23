// === Module 16040: CheckpointWelcomeScreen ===

// Module 16040 (CheckpointWelcomeScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import _modDef3002 from "module_3002" /* 3002 */;
import _modDef3034 from "module_3034" /* 3034 */;
import UserUtils from "UserUtils" /* 4671 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 16041 */;
import CheckpointTextDefault from "CheckpointText" /* 16042 */;
import CheckpointKnickKnacksDefault from "CheckpointKnickKnacks" /* 16043 */;
import UserStore from "UserStore" /* 1372 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4827 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1 }, title: { transformOrigin: "left", width: 340 }, titleText: { textTransform: "uppercase", fontSize: 72, lineHeight: 72, letterSpacing: -2.88 }, subtitle: { maxWidth: 327, marginTop: nativeDefault.space.PX_12 }, content: { flex: 1, justifyContent: "center" }, knickKnacks: null };
let obj2 = { maxWidth: 327, marginTop: nativeDefault.space.PX_12 };
obj.knickKnacks = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx");

export default function CheckpointWelcomeScreen() {
  const tmp = closure_7();
  const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const name = UserUtils.useName(stateFromStores);
  const obj3 = { children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.content, children: null };
  const obj6 = { style: null, children: null };
  const items1 = [tmp.title, ];
  const obj7 = { transform: null };
  const items2 = [{ scale: bound }];
  obj7.transform = items2;
  items1[1] = obj7;
  obj6.style = items1;
  const obj8 = { style: tmp.titleText, variant: "display-lg", children: null };
  const tmp5 = CheckpointScreenDefault;
  const intl = util.intl;
  obj8.children = intl.string(_modDef3002["CdU/PF"]);
  obj6.children = hasOwnProperty(CheckpointTextDefault, obj8);
  const items3 = [hasOwnProperty(View, obj6), , ];
  const obj9 = { style: tmp.subtitle, children: null };
  const obj10 = { variant: "heading-xl/medium", children: null };
  const intl2 = util.intl;
  obj10.children = intl2.format(_modDef3034.xhZ23b, { username: name });
  obj9.children = hasOwnProperty(CheckpointTextDefault, obj10);
  items3[1] = hasOwnProperty(View, obj9);
  items3[2] = hasOwnProperty(CheckpointKnickKnacksDefault, { style: tmp.knickKnacks });
  obj5.children = items3;
  obj4.children = timestampProducer(View, obj5);
  obj3.children = hasOwnProperty(View, obj4);
  return hasOwnProperty(tmp5, obj3);
};