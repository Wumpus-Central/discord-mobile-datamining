// === Module 5440: ModalScreen ===

// Module 5440 (ModalScreen)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5441 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

noopAll;
const createCacheKey = { flex: 1, flexDirection: "column", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export const ModalScreen = function ModalScreen(children) {
  let backgroundColor = children.backgroundColor;
  const tmp = callback();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const style = [tmp.container, ];
  if (backgroundColor == null) {
    backgroundColor = tmp.container.backgroundColor;
  }
  style[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  return <View style={style}>{children.children}</View>;
};