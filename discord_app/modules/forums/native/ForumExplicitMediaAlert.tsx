// === Module 9395: ForumExplicitMediaAlert ===

// Module 9395 (ForumExplicitMediaAlert)
import nativeDefault from "native" /* 576 */;
import ExplicitMediaActionCreators from "ExplicitMediaActionCreators" /* 9396 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, title: null, body: null, buttonContainer: null, text: null };
createStyles = { padding: nativeDefault.space.PX_16, alignItems: "stretch" };
createStyles.container = createStyles;
createStyles.title = { marginBottom: nativeDefault.space.PX_16 };
let obj1 = { marginBottom: nativeDefault.space.PX_16 };
createStyles.body = { marginTop: nativeDefault.space.PX_16 };
let obj2 = { marginTop: nativeDefault.space.PX_16 };
createStyles.buttonContainer = { marginVertical: nativeDefault.space.PX_16 };
createStyles.text = { textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumExplicitMediaAlert.tsx");

export default function ForumExplicitMediaAlert(arg0) {
  ({ channelId: require, messageId: importDefault, onClose } = arg0);
  const tmp = closure_6();
  let obj = { noDefaultButtons: true, style: tmp.container, onClose, children: null };
  obj = { accessibilityRole: "header", variant: "heading-md/extrabold", color: "text-default", style: null, children: null };
  const items = [, ];
  ({ title: arr[0], text: arr[1] } = tmp);
  obj.style = items;
  const intl = require("util").intl;
  obj.children = intl.string(require("util").t.B3vFdU);
  const items1 = [closure_4(require("Text/Text").Text, obj), , , ];
  obj = { style: null, maxFontSizeMultiplier: 1, variant: "text-md/normal", children: null };
  const items2 = [, ];
  ({ body: arr3[0], text: arr3[1] } = tmp);
  obj.style = items2;
  const intl2 = require("util").intl;
  obj.children = intl2.string(require("util").t.i4AbAS);
  items1[1] = closure_4(require("Text/Text").Text, obj);
  const obj1 = { style: tmp.buttonContainer, children: null };
  const obj2 = { variant: "primary", size: "md", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj2.text = intl3.string(require("util").t.WAI6xu);
  obj2.onPress = onClose;
  obj1.children = closure_4(require("components/Button/Button").Button, obj2);
  items1[2] = closure_4(View, obj1);
  const obj3 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl4 = require("util").intl;
  obj3.children = intl4.format(require("util").t["APQGZ+"], {
    handleFalsePositiveHook() {
      onClose();
      const result = ExplicitMediaActionCreators.handleSenderFalsePositiveFlow(closure_1_0, importDefault);
    }
  });
  items1[3] = closure_4(require("Text/Text").Text, obj3);
  obj.children = items1;
  return closure_5(require("common/Alert"), obj);
};