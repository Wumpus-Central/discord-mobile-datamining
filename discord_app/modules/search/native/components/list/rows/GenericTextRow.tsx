// === Module 15540: ? ===

// Module 15540
import Text from "Text";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let require = arg1;
let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles({ title: { flexDirection: "row" }, container: { padding: 10 } });
const memoResult = importAllResult.memo(function GenericTextRow(text) {
  let accessibilityActions;
  let icon;
  let onAccessibilityAction;
  let onPress;
  let trailing;
  text = text.text;
  const require = text;
  ({ icon, onPress } = text);
  ({ trailing, accessibilityActions, onAccessibilityAction } = text);
  const tmp = callback2();
  const items = [onPress, text];
  let obj = { style: tmp.title, children: null };
  onPress = importAllResult.useCallback(callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 1;
            c0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = v0(c0);
            return obj1;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
  obj = { lineClamp: 1, variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.container, children: text };
  obj[1] = jsx(require(onPress[5]).Text, { lineClamp: 1, variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.container, children: text });
  const label = <View lineClamp={1} variant="text-md/medium" color="mobile-text-heading-primary" style={tmp.container}>{text}</View>;
  icon = null != icon;
  if (icon) {
    icon = tmp3(icon, { size: "sm", color: "mobile-text-heading-primary" });
  }
  return jsx(require(onPress[6]).SearchListRow, { icon, label, onPress, trailing, accessibilityActions, onAccessibilityAction });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/list/rows/GenericTextRow.tsx");

export default memoResult;