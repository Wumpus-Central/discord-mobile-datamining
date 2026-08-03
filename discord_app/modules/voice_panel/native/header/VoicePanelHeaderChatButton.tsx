// === Module 15977: VoicePanelHeaderChatButton ===

// Module 15977 (VoicePanelHeaderChatButton)
import noop from "noop";
import { ComponentActions } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: null, notificationBadge: null };
createCacheKey = { width: 8, height: 8, borderRadius: require("Themes").radii.round };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default function VoicePanelHeaderChatButton(channelId) {
  const tmp = createCacheKey();
  const callback = React.useCallback(() => {
    const ComponentDispatch = callback(table[5]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp5 = importDefault(15978)(channelId.channelId);
  const tmp6 = closure_6;
  let obj = { icon: null, accessibilityLabel: null, onPress: null };
  const tmp7 = importDefault(5572);
  obj = { color: null, size: "sm" };
  obj[0] = importDefault(712).colors.WHITE;
  obj[0] = callback(require(4690) /* ChatIcon */.ChatIcon, obj);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["5KxXrK"]);
  obj[2] = callback;
  const children = [callback(importDefault(15883), obj), ];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.badgeContainer;
    const obj1 = { style: null };
    const items1 = [, ];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    obj1[0] = items1;
    obj[1] = tmp8(tmp3(5572), obj1);
    tmp8Result = tmp8(tmp3(5572), obj);
    const tmp3Result = tmp3(5572);
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
};