// === Module 8102: InAppReportsTextElement ===

// Module 8102 (InAppReportsTextElement)
import Text_Text from "Text/Text" /* 4825 */;
import CustomMarkupAll from "CustomMarkup" /* 5294 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles({ container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, body: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextElement.tsx");

export default function TextElement(element) {
  const data = element.element.data;
  ({ header, body } = data);
  const tmp = closure_7();
  let tmp3 = null;
  if (data.is_localized) {
    if (null != header) {
      const obj2 = { style: tmp.container, children: null };
      let tmp7 = null != header;
      if (tmp7) {
        const obj3 = { style: tmp.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: header };
        tmp7 = hasOwnProperty(Text_Text.Text, obj3);
      }
      const items = [tmp7, ];
      let tmp10 = null != body;
      if (tmp10) {
        const obj4 = { style: tmp.body, variant: "text-md/medium", children: ref.current(body) };
        tmp10 = hasOwnProperty(Text_Text.Text, obj4);
      }
      items[1] = tmp10;
      obj2.children = items;
      let tmp5Result = timestampProducer(View, obj2);
    } else {
      tmp5Result = null;
    }
    tmp3 = tmp5Result;
  }
  return tmp3;
};