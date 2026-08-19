// discord_app/modules/message_request/native/RestrictedBlockedMessageGroup.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
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