// discord_app/design/components/Navigator/native/PostponeRender.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { useMountLayoutEffect } from "../../../../hooks/useMountEffect.tsx";
import { KeyboardAwareView } from "../../../../modules/keyboard/native/KeyboardAwareView.tsx";

let StyleSheet;
let c5;
const require = arg1;
({ View: c5, StyleSheet } = get_ActivityIndicator);
createCacheKey = { view: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = require("Themes").colors.BACKGROUND_BASE_LOWER;
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = function PostponeRender(children) {
  let ignoreKeyboard;
  let postpone;
  let viewStyle;
  children = children.children;
  let first;
  let importDefault;
  let dependencyMap;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  const tmp2 = callback(React.useState(postpone), 2);
  first = tmp2[0];
  importDefault = tmp2[1];
  dependencyMap = React.useRef(undefined);
  useMountLayoutEffect(() => {
    if (first) {
      table.current = first(table[7]).runAfterInteractions(() => {
        callback(false);
      });
      return () => {
        const current = ref.current;
        if (current != null) {
          current.cancel();
        }
      };
    }
  });
  if (first) {
    children = jsx(first(5743).SceneLoadingIndicator, {});
  }
  if (ignoreKeyboard) {
    let tmp4Result = closure_5;
  } else {
    tmp4Result = KeyboardAwareView;
  }
  const style = [createCacheKey().view, viewStyle];
  return <tmp4Result style={style}>{children}</tmp4Result>;
};