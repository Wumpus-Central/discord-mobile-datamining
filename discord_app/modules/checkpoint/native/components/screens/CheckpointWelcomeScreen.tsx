// === Module 13584: CheckpointWelcomeScreen ===

// Module 13584 (CheckpointWelcomeScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import _modDef3059 from "module_3059" /* 3059 */;
import _modDef3091 from "module_3091" /* 3091 */;
import UserUtils from "UserUtils" /* 5063 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13585 */;
import TextWritingAnimation from "TextWritingAnimation" /* 13586 */;
import CheckpointKnickKnacksDefault from "CheckpointKnickKnacks" /* 13588 */;
import UserStore from "UserStore" /* 1384 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const TextWritingAnimationDefault = TextWritingAnimation;

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
  const obj6 = { isStepHeading: true, style: null, textStyle: tmp.titleText, text: null, delay: 100, variant: "display-lg" };
  const items1 = [tmp.title, ];
  const obj7 = { transform: null };
  const items2 = [{ scale: bound }];
  obj7.transform = items2;
  items1[1] = obj7;
  obj6.style = items1;
  const tmp5 = CheckpointScreenDefault;
  const intl = util.intl;
  obj6.text = intl.string(_modDef3059["CdU/PF"]);
  const items3 = [hasOwnProperty(TextWritingAnimationDefault, obj6), , ];
  const obj8 = { style: tmp.subtitle, text: null, delay: null, variant: "heading-xl/medium" };
  const intl2 = util.intl;
  obj8.text = intl2.formatToPlainString(_modDef3091.xhZ23b, { username: name });
  obj8.delay = 100 + TextWritingAnimation.DURATION;
  items3[1] = hasOwnProperty(TextWritingAnimationDefault, obj8);
  items3[2] = hasOwnProperty(CheckpointKnickKnacksDefault, { style: tmp.knickKnacks });
  obj5.children = items3;
  obj4.children = timestampProducer(View, obj5);
  obj3.children = hasOwnProperty(View, obj4);
  return hasOwnProperty(tmp5, obj3);
};