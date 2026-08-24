// === Module 16442: VoicePanelHeaderChatButton ===

// Module 16442 (VoicePanelHeaderChatButton)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ChatIcon from "ChatIcon" /* 6905 */;
import setDefault from "set" /* 7228 */;
import _modDef16351 from "module_16351" /* 16351 */;
import useChatBadgeDefault from "useChatBadge" /* 16443 */;
import closure_3 from "noop" /* 19 */;
import { ComponentActions } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: null, notificationBadge: null };
createCacheKey = { width: 8, height: 8, borderRadius: ThemesDefault.radii.round };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default function VoicePanelHeaderChatButton(channelId) {
  const tmp = callback2();
  const callback = React.useCallback(() => {
    const ComponentDispatch = callback(table[5]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp5 = useChatBadgeDefault(channelId.channelId);
  const tmp6 = closure_6;
  let obj = { icon: null, accessibilityLabel: null, onPress: null };
  const tmp7 = setDefault;
  obj = { color: ThemesDefault.colors.WHITE, size: "sm" };
  obj[0] = callback(ChatIcon.ChatIcon, obj);
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["5KxXrK"]);
  obj[2] = callback;
  const children = [callback(_modDef16351, obj), ];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.badgeContainer;
    obj1 = { style: null };
    const items1 = [, ];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    obj1[0] = items1;
    obj[1] = tmp8(tmp3(7228), obj1);
    tmp8Result = tmp8(tmp3(7228), obj);
    const tmp3Result = tmp3(7228);
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
};