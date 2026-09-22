// === Module 9515: ForumExplicitMediaAlert ===

// Module 9515 (ForumExplicitMediaAlert)
import nativeDefault from "native" /* 576 */;
import ExplicitMediaActionCreators from "ExplicitMediaActionCreators" /* 9516 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { padding: nativeDefault.space.PX_16, alignItems: "stretch" }, title: null, body: null, buttonContainer: null, text: null };
let obj3 = { padding: nativeDefault.space.PX_16, alignItems: "stretch" };
obj2.title = { marginBottom: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj2.body = { marginTop: nativeDefault.space.PX_16 };
let obj5 = { marginTop: nativeDefault.space.PX_16 };
obj2.buttonContainer = { marginVertical: nativeDefault.space.PX_16 };
obj2.text = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumExplicitMediaAlert.tsx");

export default function ForumExplicitMediaAlert(arg0) {
  ({ channelId: require, messageId: importDefault, onClose } = arg0);
  const tmp = closure_6();
  const obj = { noDefaultButtons: true, style: tmp.container, onClose, children: null };
  const obj2 = { accessibilityRole: "header", variant: "heading-md/extrabold", color: "text-default", style: null, children: null };
  const items = [, ];
  ({ title: arr[0], text: arr[1] } = tmp);
  obj2.style = items;
  const intl = require("util").intl;
  obj2.children = intl.string(require("util").t.B3vFdU);
  const items1 = [closure_4(require("Text/Text").Text, obj2), , , ];
  const obj3 = { style: null, maxFontSizeMultiplier: 1, variant: "text-md/normal", children: null };
  const items2 = [, ];
  ({ body: arr3[0], text: arr3[1] } = tmp);
  obj3.style = items2;
  const intl2 = require("util").intl;
  obj3.children = intl2.string(require("util").t.i4AbAS);
  items1[1] = closure_4(require("Text/Text").Text, obj3);
  const obj4 = { style: tmp.buttonContainer, children: null };
  const obj5 = { variant: "primary", size: "md", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj5.text = intl3.string(require("util").t.WAI6xu);
  obj5.onPress = onClose;
  obj4.children = closure_4(require("components/Button/Button").Button, obj5);
  items1[2] = closure_4(View, obj4);
  const obj6 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl4 = require("util").intl;
  obj6.children = intl4.format(require("util").t["APQGZ+"], {
    handleFalsePositiveHook() {
      onClose();
      const result = ExplicitMediaActionCreators.handleSenderFalsePositiveFlow(closure_1_0, importDefault);
    }
  });
  items1[3] = closure_4(require("Text/Text").Text, obj6);
  obj.children = items1;
  return closure_5(require("common/Alert"), obj);
};