// === Module 5926: PostponeRender ===

// Module 5926 (PostponeRender)
import ThemesDefault from "Themes" /* 712 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4831 */;
import _modDef5930 from "module_5930" /* 5930 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ View: c5, StyleSheet } = get_ActivityIndicator);
createCacheKey = { view: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOWER;
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = function PostponeRender(children) {
  children = children.children;
  let first;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  const tmp2 = callback(React.useState(postpone), 2);
  first = tmp2[0];
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
    children = jsx(first(5928).SceneLoadingIndicator, {});
  }
  if (ignoreKeyboard) {
    let tmp4Result = closure_5;
  } else {
    tmp4Result = _modDef5930;
  }
  const style = [callback2().view, viewStyle];
  return <tmp4Result style={style}>{children}</tmp4Result>;
};