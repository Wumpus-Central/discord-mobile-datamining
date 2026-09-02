// === Module 16716: RestrictedBlockedMessageGroup ===

// Module 16716 (RestrictedBlockedMessageGroup)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import PressableBase from "PressableBase" /* 5076 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { toggle: null };
createCacheKey = { marginLeft: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_CONTENT_INSET, marginVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default function RestrictedBlockedMessageGroup(arg0) {
  ({ messages, renderMessage: require } = arg0);
  dependencyMap = undefined;
  const tmp = callback3();
  [tmp3, c1] = callback(React.useState(false), 2);
  callback = React.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  let obj = { style: tmp.toggle, accessibilityRole: "button", accessibilityState: { expanded: mapped }, onPress: callback, children: null };
  obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj = { count: messages.length };
  obj[2] = intl.format(getSystemLocale.t["+FcYM/"], obj);
  obj[4] = callback2(Text.Text, obj);
  const children = [callback2(PressableBase.PressableOpacity, obj), ];
  if (mapped) {
    mapped = messages.map((id) => closure_1_5(closure_1_4, { children: callback(id) }, id.id));
  }
  children[1] = mapped;
  return closure_6(View, { children });
};