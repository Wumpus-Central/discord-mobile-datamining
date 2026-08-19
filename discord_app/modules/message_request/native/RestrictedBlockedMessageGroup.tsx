// === Module 16117: RestrictedBlockedMessageGroup ===

// Module 16117 (RestrictedBlockedMessageGroup)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { marginLeft: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_CONTENT_INSET, marginVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default function RestrictedBlockedMessageGroup(arg0) {
  ({ messages, renderMessage: require } = arg0);
  dependencyMap = undefined;
  const tmp = callback3();
  [tmp3, c1] = callback(React.useState(false), 2);
  callback = React.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  const intl = getSystemLocale.intl;
  const obj = { count: messages.length };
  obj[2] = intl.format(getSystemLocale.t["+FcYM/"], obj);
  obj[4] = callback2(Text.Text, obj);
  const children = [callback2(PressableBase.PressableOpacity, obj), ];
  if (mapped) {
    mapped = messages.map((item, index) => closure_1_5(View, { children: callback(item) }, item.id));
  }
  children[1] = mapped;
  return callback(View, { children });
};