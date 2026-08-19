// === Module 6547: PostponeRender ===

// Module 6547 (PostponeRender)
import ThemesDefault from "Themes" /* 712 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4761 */;
import _modDef6551 from "module_6551" /* 6551 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ View: c5, StyleSheet } = get_ActivityIndicator);
const createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOWER;
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = function PostponeRender(children) {
  children = children.children;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  const tmp2 = callback(React.useState(postpone), 2);
  const first = tmp2[0];
  importDefault = tmp2[1];
  dependencyMap = React.useRef(undefined);
  useMountLayoutEffectDefault(() => {
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
    children = jsx(first(6549).SceneLoadingIndicator, {});
  }
  if (ignoreKeyboard) {
    let tmp4Result = closure_5;
  } else {
    tmp4Result = _modDef6551;
  }
  const style = [callback2().view, viewStyle];
  return <tmp4Result style={style}>{children}</tmp4Result>;
};