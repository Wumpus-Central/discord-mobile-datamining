// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategoriesBackspaceItem.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../Constants.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import Timers from "../../../../../../discord_common/js/packages/timers/Timers.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const Pressable = react_native.Pressable;
const NODE_MARGIN = Constants.NODE_MARGIN;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting(
  "modules/emoji_picker/native/components/categories/EmojiPickerCategoriesBackspaceItem.tsx",
);

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
  return (
    <Pressable
      hitSlop={rect}
      style={style}
      accessibilityRole="keyboardkey"
      accessibilityLabel={intl.string(intl2.t["4SnBzF"])}
      delayLongPress={500}
      onPressOut={callback1}
      onLongPress={callback}
    >
      {null}
    </Pressable>
  );
}
