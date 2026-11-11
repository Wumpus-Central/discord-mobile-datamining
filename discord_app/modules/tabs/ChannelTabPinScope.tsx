// === Module 10210: ChannelTabPinScope ===

// Module 10210 (ChannelTabPinScope)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const FRIENDS = Constants.Routes.FRIENDS;
const result = size.fileFinishedImporting("modules/tabs/ChannelTabPinScope.tsx");

export function isSameTabLocation(atResult, items2) {
  if ("route" === atResult.kind) {
    let tmp = "route" === items2.kind && atResult.routePath === items2.routePath;
    const tmp2 = "route" === items2.kind && atResult.routePath === items2.routePath;
  } else {
    tmp = "channel" === items2.kind && atResult.channelId === items2.channelId;
  }
  return tmp;
}
export function getPinScopeForLocation(kind) {
  if ("route" === kind.kind) {
    let obj2 = null;
    if (kind.routePath === FRIENDS) {
      obj2 = { kind: "dms" };
    }
    let obj = obj2;
  } else if (null != kind.guildId) {
    const obj3 = { kind: "guild", guildId: kind.guildId };
    obj = obj3;
  } else {
    obj = { kind: "dms" };
  }
  return obj;
}
export function isLocationInPinScope(kind, arg1) {
  let routePath = arg1;
  if ("dms" === kind.kind) {
    if ("route" === routePath.kind) {
      routePath = routePath.routePath;
      let tmp3 = routePath === FRIENDS;
    } else {
      tmp3 = null == routePath.guildId;
    }
  } else {
    return "channel" === routePath.kind && routePath.guildId === kind.guildId;
  }
}
export function isSamePinScope(pinScope, scope) {
  if (null != pinScope) {
    if (null != scope) {
      if ("guild" === pinScope.kind) {
        let tmp = "guild" === scope.kind && pinScope.guildId === scope.guildId;
        const tmp2 = "guild" === scope.kind && pinScope.guildId === scope.guildId;
      } else {
        tmp = "dms" === scope.kind;
      }
    }
    return tmp;
  }
  tmp = null == pinScope && null == scope;
}
export function wouldNavigationLeavePinnedTab(found, arg1) {
  let routePath = arg1;
  const pinned = found.pinned;
  if (!pinned) {
    let tmp5 = !tmp;
    if (!tmp) {
      if (null == found.pinScope) {
        tmp5 = tmp7;
      } else {
        const pinScope = found.pinScope;
        if ("dms" !== pinScope.kind) {
          const tmp8 = "channel" === routePath.kind && routePath.guildId === pinScope.guildId;
        }
        if ("route" === routePath.kind) {
          routePath = routePath.routePath;
          let tmp9 = routePath === FRIENDS;
        } else {
          tmp9 = null == routePath.guildId;
        }
      }
    }
    return tmp5;
  } else if ("route" === found.kind) {
    let tmp3 = `route` === routePath.kind;
    if (tmp3) {
      tmp3 = found.routePath === routePath.routePath;
    }
  } else {
    const tmp2 = "channel" === routePath.kind && found.channelId === routePath.channelId;
  }
}