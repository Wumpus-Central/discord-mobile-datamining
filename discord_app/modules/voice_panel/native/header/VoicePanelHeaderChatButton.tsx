// discord_app/modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ChatIcon from "../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import setDefault from "../../../core/native/NativeView.tsx";
import _modDef16351 from "../shared/VoicePanelIconButton.tsx";
import useChatBadgeDefault from "../hooks/useChatBadge.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { ComponentActions } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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