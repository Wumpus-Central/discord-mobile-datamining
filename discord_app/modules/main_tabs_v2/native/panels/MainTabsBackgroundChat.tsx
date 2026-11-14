// === Module 18717: MainTabsBackgroundChat ===

// Module 18717 (MainTabsBackgroundChat)
import Link from "Link" /* 1503 */;
import useChatLayoutDefault from "useChatLayout" /* 5495 */;
import Portal from "Portal" /* 5508 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 18715 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c5 = "main-tabs-background-chat";
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsBackgroundChat.tsx");

export function useIsBackgroundChatInGuilds(type) {
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (isChatLockedOpen) {
    type = undefined;
    if (type != null) {
      type = type.type;
    }
    isChatLockedOpen = type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
  }
  return isChatLockedOpen;
}
export function BackgroundChatHost() {
  return jsx(Portal.PortalHost, { name: maintabsbackgroundchat });
}
export function BackgroundChatPortal(arg0) {
  ({ screen, children } = arg0);
  const context = noop.useContext(Link.NavigationContext);
  const context1 = noop.useContext(Link.NavigationRouteContext);
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (isChatLockedOpen) {
    let type;
    if (screen != null) {
      type = screen.type;
    }
    isChatLockedOpen = type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
  }
  let tmp7 = children;
  if (isChatLockedOpen) {
    const obj = { hostName: maintabsbackgroundchat, children: null };
    const obj2 = { value: context, children: null };
    const obj3 = { value: context1, children };
    obj2.children = jsx(Link.NavigationRouteContext.Provider, { value: context1, children });
    obj.children = jsx(Link.NavigationContext.Provider, { value: context, children: null });
    tmp7 = jsx(Portal.Portal, { hostName: maintabsbackgroundchat, children: null });
  }
  return tmp7;
}