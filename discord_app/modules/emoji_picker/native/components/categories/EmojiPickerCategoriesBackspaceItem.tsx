// === Module 9983: EmojiPickerCategoriesBackspaceItem ===

// Module 9983 (EmojiPickerCategoriesBackspaceItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import Timers from "Timers" /* 2046 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const NODE_MARGIN = Constants.NODE_MARGIN;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesBackspaceItem.tsx");

export default function EmojiPickerCategoriesBackspaceItem(onBackspace) {
  let iconStyle;
  let style;
  onBackspace = onBackspace.onBackspace;
  ({ style, iconStyle } = onBackspace);
  const useRef = react.useRef;
  const interval = new Timers.Interval();
  let closure_1 = useRef(interval);
  const useRef2 = react.useRef;
  const delayedCall = new Timers.DelayedCall(500, () => {
    const current = closure_2.current;
    current.cancel();
    const current2 = ref.current;
    current2.start(50, onBackspace);
  });
  let closure_2 = useRef2(delayedCall);
  const items = [onBackspace];
  const items1 = [onBackspace];
  const callback = react.useCallback(() => {
    onBackspace();
    const current = closure_2.current;
    current.delay();
  }, items);
  const callback1 = react.useCallback(() => {
    const current = closure_2.current;
    current.cancel();
    const current2 = ref.current;
    current2.stop();
    onBackspace();
  }, items1);
  const effect = react.useEffect(() => {
    const current = closure_2.current;
    return () => {
      current.stop();
      current.cancel();
    };
  });
  const rect = { top: NODE_MARGIN, bottom: NODE_MARGIN, right: NODE_MARGIN, left: NODE_MARGIN };
  const intl = intl2.intl;
  const items2 = [iconStyle, { opacity: 0.5 }];
  return <Pressable hitSlop={rect} style={style} accessibilityRole="keyboardkey" accessibilityLabel={intl.string(intl2.t["4SnBzF"])} delayLongPress={500} onPressOut={callback1} onLongPress={callback}>{null}</Pressable>;
};