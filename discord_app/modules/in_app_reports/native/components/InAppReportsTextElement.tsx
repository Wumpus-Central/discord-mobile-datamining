// === Module 8301: InAppReportsTextElement ===

// Module 8301 (InAppReportsTextElement)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4886 */;
import CustomMarkupAll from "CustomMarkup" /* 5784 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, body: { marginBottom: 16 } });
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextElement.tsx");

export default function TextElement(element) {
  let body;
  let header;
  let items;
  const data = element.element.data;
  ({ header, body } = data);
  const is_localized = data.is_localized;
  const tmp = closure_7();
  const useRef = react.useRef;
  let tmp3 = null;
  const obj = CustomMarkupAll;
  const ref = useRef(obj.getParser());
  if (is_localized) {
    let tmp5Result;
    if (null != header) {
      let tmp7 = null != header;
      const obj2 = { style: tmp.container, children: items };
      if (tmp7) {
        const obj3 = { style: tmp.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: header };
        tmp7 = hasOwnProperty(Text_Text.Text, obj3);
      }
      items = [tmp7, ];
      let tmp10 = null != body;
      if (tmp10) {
        const obj4 = { style: tmp.body, variant: "text-md/medium", children: ref.current(body) };
        const Text = Text_Text.Text;
        tmp10 = hasOwnProperty(Text, obj4);
      }
      items[1] = tmp10;
      tmp5Result = metroRequire(View, obj2);
    } else {
      tmp5Result = null;
    }
    tmp3 = tmp5Result;
  }
  return tmp3;
};