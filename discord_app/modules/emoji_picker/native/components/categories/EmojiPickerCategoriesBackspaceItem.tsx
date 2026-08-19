// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategoriesBackspaceItem.tsx
import noop from "../../../../../../_runtime/00019_noop.js";
import { Pressable } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { NODE_MARGIN } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesBackspaceItem.tsx");

export default function EmojiPickerCategoriesBackspaceItem(onBackspace) {
  onBackspace = onBackspace.onBackspace;
  let React;
  ({ style, iconStyle } = onBackspace);
  const interval = new onBackspace(4259).Interval();
  dependencyMap = React.useRef(interval);
  const delayedCall = new onBackspace(4259).DelayedCall(500, () => {
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
    const current = closure_2.current;
    return () => {
      current.stop();
      current.cancel();
    };
  });
  const obj = { top: NODE_MARGIN, bottom: NODE_MARGIN, right: NODE_MARGIN, left: NODE_MARGIN };
  const intl = onBackspace(1236).intl;
  obj[3] = intl.string(onBackspace(1236).t["4SnBzF"]);
  obj[5] = callback1;
  obj[6] = callback;
  const items2 = [iconStyle, { opacity: 0.5 }];
  obj[7] = jsx(onBackspace(9442).BackspaceIcon, { style: items2 });
  return <Pressable top={NODE_MARGIN} bottom={NODE_MARGIN} right={NODE_MARGIN} left={NODE_MARGIN} />;
};