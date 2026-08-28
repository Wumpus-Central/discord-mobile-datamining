// === Module 8718: TextElement ===

// Module 8718 (TextElement)
import Text from "Text" /* 4442 */;
import createRulesAll from "createRules" /* 4913 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, body: { marginBottom: 16 } });
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextElement.tsx");

export default function TextElement(element) {
  const data = element.element.data;
  ({ header, body } = data);
  const tmp = callback2();
  let obj = createRulesAll;
  let tmp3 = null;
  if (data.is_localized) {
    if (null != header) {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      let tmp7 = null != header;
      if (tmp7) {
        obj = { style: null, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
        obj[0] = tmp.header;
        obj[3] = header;
        tmp7 = callback(Text.Text, obj);
      }
      const items = [tmp7, ];
      let tmp10 = null != body;
      if (tmp10) {
        obj1 = { style: null, variant: "text-md/medium", children: null };
        obj1[0] = tmp.body;
        obj1[2] = ref.current(body);
        tmp10 = callback(Text.Text, obj1);
      }
      items[1] = tmp10;
      obj[1] = items;
      let tmp5Result = closure_6(View, obj);
      const tmp5 = closure_6;
      const tmp6 = View;
    } else {
      tmp5Result = null;
    }
    tmp3 = tmp5Result;
  }
  return tmp3;
};