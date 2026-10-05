// discord_app/modules/in_app_reports/native/components/InAppReportsTextElement.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CustomMarkupAll from "../../../markup/CustomMarkup.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  container: { marginBottom: 16, paddingHorizontal: 16 },
  header: { marginBottom: 8 },
  body: { marginBottom: 16 },
});
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
        const obj3 = {
          style: tmp.header,
          variant: "heading-md/extrabold",
          color: "mobile-text-heading-primary",
          children: header,
        };
        tmp7 = hasOwnProperty(Text_Text.Text, obj3);
      }
      items = [tmp7];
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
}
