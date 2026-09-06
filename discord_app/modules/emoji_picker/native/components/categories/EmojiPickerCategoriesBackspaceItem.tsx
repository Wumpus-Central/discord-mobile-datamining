// === Module 10361: EmojiPickerCategoriesBackspaceItem ===

// Module 10361 (EmojiPickerCategoriesBackspaceItem)
import closure_2 from "noop" /* 19 */;
import { Pressable } from "get ActivityIndicator" /* 17 */;
import { NODE_MARGIN } from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesBackspaceItem.tsx");

export default function EmojiPickerCategoriesBackspaceItem(onBackspace) {
  onBackspace = onBackspace.onBackspace;
  dependencyMap = undefined;
  let React;
  ({ style, iconStyle } = onBackspace);
  const interval = new onBackspace(4447).Interval();
  dependencyMap = React.useRef(interval);
  const delayedCall = new onBackspace(4447).DelayedCall(500, () => {
    const current = closure_2.current;
    current.cancel();
    const current2 = ref.current;
    current2.start(50, onBackspace);
  });
  React = React.useRef(delayedCall);
  const items = [onBackspace];
  const items1 = [onBackspace];
  const callback = React.useCallback(() => {
    onBackspace();
    const current = closure_2.current;
    current.delay();
  }, items);
  const callback1 = React.useCallback(() => {
    const current = closure_2.current;
    current.cancel();
    const current2 = ref.current;
    current2.stop();
    onBackspace();
  }, items1);
  const effect = React.useEffect(() => {
    current = current.current;
    current = closure_2.current;
    return () => {
      current.stop();
      current.cancel();
    };
  });
  obj = { hitSlop: obj, style, accessibilityRole: "keyboardkey", accessibilityLabel: null, delayLongPress: 500, onPressOut: null, onLongPress: null, children: null };
  obj = { top: NODE_MARGIN, bottom: NODE_MARGIN, right: NODE_MARGIN, left: NODE_MARGIN };
  const intl = onBackspace(1114).intl;
  obj[3] = intl.string(onBackspace(1114).t["4SnBzF"]);
  obj[5] = callback1;
  obj[6] = callback;
  const items2 = [iconStyle, { opacity: 0.5 }];
  obj[7] = jsx(onBackspace(10362).BackspaceIcon, { style: items2 });
  return <Pressable top={NODE_MARGIN} bottom={NODE_MARGIN} right={NODE_MARGIN} left={NODE_MARGIN} />;
};