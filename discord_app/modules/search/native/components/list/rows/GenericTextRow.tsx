// === Module 17068: GenericTextRow ===

// Module 17068 (GenericTextRow)
import Text_Text from "Text/Text" /* 4718 */;
import SearchListRow from "SearchListRow" /* 17035 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_6 = createStyles.createStyles({ title: { flexDirection: "row" }, container: { padding: 10 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GenericTextRow.tsx");

export default noop.memo(function GenericTextRow(text) {
  text = text.text;
  require = text;
  ({ icon, onPress } = text);
  ({ trailing, accessibilityActions, onAccessibilityAction } = text);
  const tmp = closure_6();
  const items = [onPress, text];
  let obj = { style: tmp.title, children: null };
  const onPress1 = noop.useCallback(asyncGeneratorStep(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c1 = 1;
            c0 = 1;
            const obj4 = { value: onPress(text), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c0 = tmp;
        throw tmp7;
      }
    }
  }), items);
  obj.children = jsx(Text_Text.Text, { lineClamp: 1, variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.container, children: text });
  const label = <View style={tmp.title}>{null}</View>;
  let icon1 = null != icon;
  if (icon1) {
    icon1 = <icon size="sm" color="mobile-text-heading-primary" />;
  }
  return jsx(SearchListRow.SearchListRow, { icon: icon1, label, onPress: onPress1, trailing, accessibilityActions, onAccessibilityAction });
});