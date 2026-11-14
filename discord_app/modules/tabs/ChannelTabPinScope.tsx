// discord_app/modules/tabs/ChannelTabPinScope.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/tabs/ChannelTabPinScope.tsx");

export function isSameTabLocation(atResult, items1) {
  if ("route" === atResult.kind) {
    let tmp = "route" === items1.kind && atResult.routePath === items1.routePath;
    const tmp2 = "route" === items1.kind && atResult.routePath === items1.routePath;
  } else {
    tmp = "channel" === items1.kind && atResult.channelId === items1.channelId;
  }
  return tmp;
}
export function wouldNavigationLeavePinnedTab(found, arg1) {
  let routePath = found;
  const pinned = found.pinned;
  if (!pinned) {
    return pinned;
  } else {
    let routePath2 = arg1;
    if ("route" === routePath.kind) {
      let tmp2 = "route" === routePath2.kind;
      if (tmp2) {
        routePath = routePath.routePath;
        routePath2 = routePath2.routePath;
        tmp2 = routePath === routePath2;
      }
    } else {
      const tmp = "channel" === routePath2.kind && routePath.channelId === routePath2.channelId;
    }
  }
}
