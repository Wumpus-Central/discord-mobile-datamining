// discord_app/modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx
import noop from "noop";
import { ComponentActions } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { ChatIcon } from "../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { set } from "../../../core/native/NativeView.tsx";
import { useChatBadge } from "../hooks/useChatBadge.tsx";
import { VoicePanelIconButton } from "../shared/VoicePanelIconButton.tsx";

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
  const tmp5 = useChatBadge(channelId.channelId);
  const tmp6 = closure_6;
  let obj = { icon: null, accessibilityLabel: null, onPress: null };
  const tmp7 = set;
  obj = { color: null, size: "sm" };
  obj[0] = Themes.colors.WHITE;
  obj[0] = callback(ChatIcon /* ChatIcon */.ChatIcon, obj);
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t["5KxXrK"]);
  obj[2] = callback;
  const children = [callback(VoicePanelIconButton, obj), ];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.badgeContainer;
    const obj1 = { style: null };
    const items1 = [, ];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    obj1[0] = items1;
    obj[1] = tmp8(tmp3(5663), obj1);
    tmp8Result = tmp8(tmp3(5663), obj);
    const tmp3Result = tmp3(5663);
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
};