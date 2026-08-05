// discord_app/design/components/Modal/native/ModalScreen.native.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { container: null };
createCacheKey = { flex: 1, flexDirection: "column", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export const ModalScreen = function ModalScreen(children) {
  let backgroundColor = children.backgroundColor;
  const tmp = createCacheKey();
  const insets = require("../../../../modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx")().insets;
  const style = [tmp.container, ];
  if (backgroundColor == null) {
    backgroundColor = tmp.container.backgroundColor;
  }
  style[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  return <View style={style}>{arg0.children}</View>;
};