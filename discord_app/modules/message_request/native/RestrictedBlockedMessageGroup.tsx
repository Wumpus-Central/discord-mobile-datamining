// === Module 15815: RestrictedBlockedMessageGroup ===

// Module 15815 (RestrictedBlockedMessageGroup)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { toggle: null };
createCacheKey = { marginLeft: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_CONTENT_INSET, marginVertical: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default function RestrictedBlockedMessageGroup(arg0) {
  let c1;
  let messages;
  let require;
  let tmp3;
  ({ messages, renderMessage: require } = arg0);
  let dependencyMap;
  const tmp = createCacheKey();
  [tmp3, c1] = callback(React.useState(false), 2);
  callback = React.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  let obj = { style: tmp.toggle, accessibilityRole: "button", accessibilityState: { expanded: mapped }, onPress: callback, children: null };
  obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { count: messages.length };
  obj[2] = intl.format(require(1236) /* getSystemLocale */.t["+FcYM/"], obj);
  obj[4] = callback2(require(4251) /* Text */.Text, obj);
  const children = [callback2(require(4783) /* PressableBase */.PressableOpacity, obj), ];
  if (mapped) {
    mapped = messages.map((id) => outer1_5(outer1_4, { children: callback(id) }, id.id));
  }
  children[1] = mapped;
  return closure_6(View, { children });
};