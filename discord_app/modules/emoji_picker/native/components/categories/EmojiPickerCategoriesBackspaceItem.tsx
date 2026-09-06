// === Module 10361: EmojiPickerCategoriesBackspaceItem ===

// Module 10361 (EmojiPickerCategoriesBackspaceItem)
import util from "util" /* 1114 */;
import Timers from "Timers" /* 4447 */;
import BackspaceIcon from "BackspaceIcon" /* 10362 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const NODE_MARGIN = fn(1074).NODE_MARGIN;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesBackspaceItem.tsx");

export default function EmojiPickerCategoriesBackspaceItem(onBackspace) {
  onBackspace = onBackspace.onBackspace;
  ({ style, iconStyle } = onBackspace);
  const interval = new Timers.Interval();
  noop.useRef(interval);
  const delayedCall = new Timers.DelayedCall(500, () => {
    const current = closure_2.current;
    current.cancel();
    const current2 = ref.current;
    current2.start(50, onBackspace);
  });
  closure_2 = noop.useRef(delayedCall);
  const items = [onBackspace];
  const items1 = [onBackspace];
  const callback = noop.useCallback(() => {
    onBackspace();
    const current = closure_2.current;
    current.delay();
  }, items);
  const callback1 = noop.useCallback(() => {
    const current = closure_2.current;
    current.cancel();
    const current2 = ref.current;
    current2.stop();
    onBackspace();
  }, items1);
  const effect = noop.useEffect(() => {
    const current = closure_2.current;
    return () => {
      current.stop();
      current.cancel();
    };
  });
  let obj = { hitSlop: null, style, accessibilityRole: "keyboardkey", accessibilityLabel: null, delayLongPress: 500, onPressOut: null, onLongPress: null, children: null };
  const rect = { top: NODE_MARGIN, bottom: NODE_MARGIN, right: NODE_MARGIN, left: NODE_MARGIN };
  obj.hitSlop = rect;
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["4SnBzF"]);
  obj.onPressOut = callback1;
  obj.onLongPress = callback;
  obj = { style: null };
  const items2 = [iconStyle, { opacity: 0.5 }];
  obj.style = items2;
  obj.children = jsx(BackspaceIcon.BackspaceIcon, { style: null });
  return <Pressable style={null} />;
};