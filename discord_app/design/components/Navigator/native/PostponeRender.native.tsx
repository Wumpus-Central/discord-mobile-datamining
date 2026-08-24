// discord_app/design/components/Navigator/native/PostponeRender.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useMountLayoutEffectDefault from "../../../../hooks/useMountEffect.tsx";
import _modDef6551 from "../../../../modules/keyboard/native/KeyboardAwareView.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

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