// discord_app/modules/search/native/components/list/rows/GenericTextRow.tsx
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import SearchListRow from "../SearchListRow.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
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
  onPress = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              c1 = 1;
              c0 = 1;
              const obj1 = { value: onPress(text), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
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
    }),
    items,
  );
  obj = {
    lineClamp: 1,
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    style: tmp.container,
    children: text,
  };
  obj.children = jsx(Text_Text.Text, {
    lineClamp: 1,
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    style: tmp.container,
    children: text,
  });
  const label = (
    <View lineClamp={1} variant="text-md/medium" color="mobile-text-heading-primary" style={tmp.container}>
      {text}
    </View>
  );
  icon = null != icon;
  if (icon) {
    icon = <icon size="sm" color="mobile-text-heading-primary" />;
  }
  return jsx(SearchListRow.SearchListRow, {
    icon,
    label,
    onPress,
    trailing,
    accessibilityActions,
    onAccessibilityAction,
  });
});
