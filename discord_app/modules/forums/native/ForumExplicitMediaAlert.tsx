// === Module 12793: ForumExplicitMediaAlert ===

// Module 12793 (ForumExplicitMediaAlert)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, title: null, body: null, buttonContainer: null, text: null };
createCacheKey = { padding: ThemesDefault.space.PX_16, alignItems: "stretch" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: ThemesDefault.space.PX_16 };
let obj1 = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_16 };
let obj2 = { marginTop: ThemesDefault.space.PX_16 };
createCacheKey[3] = { marginVertical: ThemesDefault.space.PX_16 };
createCacheKey[4] = { textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginVertical: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/forums/native/ForumExplicitMediaAlert.tsx");

export default function ForumExplicitMediaAlert(arg0) {
  ({ channelId: require, messageId: importDefault, onClose } = arg0);
  const tmp = callback3();
  let obj = { noDefaultButtons: true, style: tmp.container, onClose, children: null };
  obj = { accessibilityRole: "header", variant: "heading-md/extrabold", color: "text-default", style: items, children: null };
  items = [, ];
  ({ title: arr[0], text: arr[1] } = tmp);
  const intl = require(onClose[7]).intl;
  obj[4] = intl.string(require(onClose[7]).t.B3vFdU);
  const items1 = [callback(require(onClose[6]).Text, obj), , , ];
  obj = { style: items2, maxFontSizeMultiplier: 1, variant: "text-md/normal", children: null };
  items2 = [, ];
  ({ body: arr3[0], text: arr3[1] } = tmp);
  const intl2 = require(onClose[7]).intl;
  obj[3] = intl2.string(require(onClose[7]).t.i4AbAS);
  items1[1] = callback(require(onClose[6]).Text, obj);
  obj1 = { style: tmp.buttonContainer, children: null };
  const obj2 = { variant: "primary", size: "md", text: null, onPress: null };
  const intl3 = require(onClose[7]).intl;
  obj2[2] = intl3.string(require(onClose[7]).t.WAI6xu);
  obj2[3] = onClose;
  obj1[1] = callback(require(onClose[8]).Button, obj2);
  items1[2] = callback(View, obj1);
  const obj3 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl4 = require(onClose[7]).intl;
  obj3[3] = intl4.format(require(onClose[7]).t["APQGZ+"], {
    handleFalsePositiveHook() {
      onClose();
      const result = closure_1_0(onClose[9]).handleSenderFalsePositiveFlow(closure_0, closure_1);
    }
  });
  items1[3] = callback(require(onClose[6]).Text, obj3);
  obj[3] = items1;
  return callback2(importDefault(onClose[5]), obj);
};