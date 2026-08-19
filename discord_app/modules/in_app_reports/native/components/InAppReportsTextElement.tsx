// discord_app/modules/in_app_reports/native/components/InAppReportsTextElement.tsx
import Text from "../../../../design/components/Text/native/Text.tsx";
import createRulesAll from "../../../markup/CustomMarkup.native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, body: { marginBottom: 16 } });
const result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextElement.tsx");

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
      let tmp5Result = callback(View, obj);
    } else {
      tmp5Result = null;
    }
    tmp3 = tmp5Result;
  }
  return tmp3;
};