// discord_app/modules/tabs/ChannelTabsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import router_utils from "../routing/router_utils.tsx";
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import matchPathCompat from "../routing/matchPathCompat.tsx";
import RouteUtils from "../routing/RouteUtils.tsx";
import transitionToChannel from "../routing/transitionToChannel.tsx";
import ChannelRTCActionCreatorsDefault from "../../actions/ChannelRTCActionCreators.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import ChannelTabRoutes from "ChannelTabRoutes.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import ChannelTabsStore from "ChannelTabsStore.tsx";

require = fn;
function getPageName(routePath) {
  const first = routePath.split(/[?#]/)[0];
  if (first === metroImportDefault.FRIENDS) {
    return "friends";
  } else if (first === metroImportDefault.COLLECTIBLES_SHOP) {
    return "shop";
  } else if (first === metroImportDefault.QUEST_HOME) {
    return "quests";
  } else if (first === metroImportDefault.APPLICATION_STORE) {
    return "nitro";
  } else {
    const RouteParam = RouteUtils.RouteParam;
    const CHANNELResult = metroImportDefault.CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?");
    const obj3 = { path: CHANNELResult, exact: true };
    let str2 = "other";
    if (null != obj2.matchPath(first, obj3)) {
      str2 = "conjure";
    }
    return str2;
  }
}
function getTabProperties(found) {
  const tabs = ChannelTabsStore.getTabs();
  const obj = {
    tab_kind: found.kind,
    tab_route: null,
    channel_id: null,
    guild_id: null,
    tab_count: null,
    pinned_tab_count: null,
  };
  let tmp = null;
  if ("route" === found.kind) {
    const first = found.routePath.split(/[?#]/)[0];
    let str3 = "friends";
    if (first !== metroImportDefault.FRIENDS) {
      str3 = "shop";
      if (first !== metroImportDefault.COLLECTIBLES_SHOP) {
        str3 = "quests";
        if (first !== metroImportDefault.QUEST_HOME) {
          str3 = "nitro";
          if (first !== metroImportDefault.APPLICATION_STORE) {
            const RouteParam = RouteUtils.RouteParam;
            const CHANNELResult = metroImportDefault.CHANNEL(
              RouteParam.guildId(),
              StaticChannelRoute.CONJURE,
              ":projectId?",
            );
            const obj3 = { path: CHANNELResult, exact: true };
            let str2 = "other";
            if (null != obj2.matchPath(first, obj3)) {
              str2 = "conjure";
            }
            str3 = str2;
            obj2 = matchPathCompat;
          }
        }
      }
    }
    tmp = str3;
  }
  obj.tab_route = tmp;
  let channelId = null;
  if ("channel" === found.kind) {
    channelId = found.channelId;
  }
  obj.channel_id = channelId;
  let guildId = null;
  if ("channel" === found.kind) {
    guildId = null;
    if (!obj4.isFavoritesGuildId(found.guildId)) {
      guildId = found.guildId;
    }
    obj4 = FavoritesUtils;
  }
  obj.guild_id = guildId;
  obj.tab_count = tabs.length;
  obj.pinned_tab_count = tabs.filter((pinned) => pinned.pinned).length;
  return obj;
}
function trackChannelTabOpened(tabs, close, is_new_tab, focused) {
  let tmp = prop;
  if (prop === undefined) {
    tmp = null;
  }
  tabs = ChannelTabsStore.getTabs();
  const obj = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
  const iter = tabs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("route" === nextResult.kind) {
      let tmp6 = getPageName(tmp3.routePath);
      obj[tmp6] = obj[tmp6] + 1;
    }
    continue;
  }
  const obj2 = {};
  const merged = Object.assign(getTabProperties(tabs));
  obj2.method = close;
  obj2.is_new_tab = is_new_tab;
  obj2.focused = focused;
  obj2.tab_index = tabs.findIndex((id) => id.id === tabs.id);
  obj2.is_pinned = tabs.pinned;
  ({
    friends: obj4.friends_tab_count,
    shop: obj4.shop_tab_count,
    quests: obj4.quests_tab_count,
    nitro: obj4.nitro_tab_count,
    conjure: obj4.conjure_tab_count,
    other: obj4.other_page_tab_count,
  } = obj);
  let section;
  if (tmp != null) {
    section = tmp.section;
  }
  if (section == null) {
    section = null;
  }
  obj2.new_tab_section = section;
  let resultIndex;
  if (tmp != null) {
    resultIndex = tmp.resultIndex;
  }
  if (resultIndex == null) {
    resultIndex = null;
  }
  obj2.new_tab_result_index = resultIndex;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_OPENED, obj2);
}
function navigateActiveTabHistory(arg0) {
  if (ChannelTabsStore.isEnabled()) {
    const activeTab = ChannelTabsStore.getActiveTab();
    if (null == activeTab) {
      return ChannelTabsStore.Passthrough;
    } else {
      if ("channel" === activeTab.kind) {
        if (SelectedChannelStore.getCurrentlySelectedChannelId() !== activeTab.channelId) {
          return ChannelTabsStore.Passthrough;
        }
      }
      const sum = activeTab.index + arg0;
      if (sum >= 0) {
        if (sum < activeTab.entries.length) {
          if ("route" === activeTab.entries[sum].kind) {
            let str3 = "CHANNEL_TABS_FORWARD";
            if (-1 === arg0) {
              str3 = "CHANNEL_TABS_BACK";
            }
            const obj2 = { type: str3 };
            DispatcherDefault.dispatch(obj2);
            router_utils.transitionTo(tmp37.routePath);
            let Navigated = ChannelTabsStore.Navigated;
          } else if (null == ChannelStore.getChannel(tmp37.channelId)) {
            if (null != tmp37.guildId) {
              let str2 = "CHANNEL_TABS_FORWARD";
              if (-1 === arg0) {
                str2 = "CHANNEL_TABS_BACK";
              }
              const obj3 = { type: str2 };
              DispatcherDefault.dispatch(obj3);
              router_utils.transitionTo(metroImportDefault.CHANNEL(tmp37.guildId, tmp37.channelId));
              let Noop = ChannelTabsStore.Navigated;
            } else {
              Noop = ChannelTabsStore.Noop;
            }
          } else {
            let str = "CHANNEL_TABS_FORWARD";
            if (-1 === arg0) {
              str = "CHANNEL_TABS_BACK";
            }
            const obj4 = { type: str };
            DispatcherDefault.dispatch(obj4);
            ({ channelId, guildId } = tmp37);
            const obj5 = {};
            let flag = obj5.openVoiceChat;
            if (flag === undefined) {
              flag = true;
            }
            const transitionExtras = obj5.transitionExtras;
            const channel = ChannelStore.getChannel(channelId);
            if (flag) {
              flag = null != channel;
            }
            if (flag) {
              flag = channel.isGuildVocal();
            }
            if (flag) {
              ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
              const tmp38Result = ChannelRTCActionCreatorsDefault;
            }
            if (null != guildId) {
              const obj8 = { openChannel: true };
              const obj7 = router_utils;
              const merged = Object.assign(transitionExtras);
              obj7.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), obj8);
              const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
            } else {
              transitionToChannel.transitionToChannel(channelId, transitionExtras);
            }
            Navigated = ChannelTabsStore.Navigated;
          }
          return Navigated;
        }
      }
      return ChannelTabsStore.Noop;
    }
  } else {
    return ChannelTabsStore.Passthrough;
  }
}
function selectChannelTab(id, keyboard_cycle, arg2) {
  closure_0 = id;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    if (ChannelTabsStore.getActiveTabId() !== id) {
      const obj3 = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: found.id };
      DispatcherDefault.dispatch(obj3);
      trackChannelTabOpened(found, keyboard_cycle, false, true);
      if (obj === undefined) {
        obj = {};
      }
      if ("route" === found.kind) {
        router_utils.transitionTo(found.routePath, obj.transitionExtras);
      } else {
        ({ channelId: channelId2, guildId: guildId2 } = found);
        let obj7 = obj;
        if (obj === undefined) {
          obj7 = {};
        }
        let flag6 = obj7.openVoiceChat;
        if (flag6 === undefined) {
          flag6 = true;
        }
        const transitionExtras2 = obj7.transitionExtras;
        const channel = ChannelStore.getChannel(channelId2);
        if (flag6) {
          flag6 = null != channel;
        }
        if (flag6) {
          flag6 = channel.isGuildVocal();
        }
        if (flag6) {
          ChannelRTCActionCreatorsDefault.updateChatOpen(channelId2, true);
          const tmp18Result = ChannelRTCActionCreatorsDefault;
        }
        if (null != guildId2) {
          const obj9 = { openChannel: true };
          const obj14 = router_utils;
          const merged = Object.assign(transitionExtras2);
          obj14.transitionTo(metroImportDefault.CHANNEL(guildId2, channelId2), obj9);
          const CHANNELResult = metroImportDefault.CHANNEL(guildId2, channelId2);
        } else {
          transitionToChannel.transitionToChannel(channelId2, transitionExtras2);
        }
      }
    } else if ("channel" === found.kind) {
      if (SelectedChannelStore.getCurrentlySelectedChannelId() !== found.channelId) {
        ({ channelId, guildId } = found);
        const obj10 = {};
        let flag = obj10.openVoiceChat;
        if (flag === undefined) {
          flag = true;
        }
        const transitionExtras = obj10.transitionExtras;
        const channel1 = ChannelStore.getChannel(channelId);
        if (flag) {
          flag = null != channel1;
        }
        if (flag) {
          flag = channel1.isGuildVocal();
        }
        if (flag) {
          ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
        }
        if (null != guildId) {
          const obj11 = { openChannel: true };
          const obj6 = router_utils;
          const merged1 = Object.assign(transitionExtras);
          obj6.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), obj11);
          const CHANNELResult1 = metroImportDefault.CHANNEL(guildId, channelId);
        } else {
          transitionToChannel.transitionToChannel(channelId, transitionExtras);
        }
      }
    }
  }
}
const Constants = fn(1072);
({ AnalyticEvents: closure_6, Routes: metroImportDefault } = Constants);
const StaticChannelRoute = fn(4679).StaticChannelRoute;
const TabHistoryNavResult = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export function showCallViewOnJoin(id) {
  let isEnabledResult = ChannelTabsStore.isEnabled();
  if (isEnabledResult) {
    const channel = ChannelStore.getChannel(id);
    let isGuildVocalResult;
    if (channel != null) {
      isGuildVocalResult = channel.isGuildVocal();
    }
    isEnabledResult = true === isGuildVocalResult;
  }
  if (isEnabledResult) {
    ChannelRTCActionCreatorsDefault.updateChatOpen(id, false);
  }
}
export { trackChannelTabOpened };
export function openChannelTab(channelId, guildId, close) {
  let activeTabId = arg3;
  if (arg3 === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  if (null != ChannelTabsStore.getActiveTab()) {
    const obj2 = { type: "CHANNEL_TABS_OPEN", location: null, background: true, sourceTabId: null };
    const obj6 = { kind: "channel", channelId, guildId };
    obj2.location = obj6;
    obj2.sourceTabId = activeTabId;
    DispatcherDefault.dispatch(obj2);
    const tabs = ChannelTabsStore.getTabs();
    if (tabs.length > ChannelTabsStore.getTabs().length) {
      trackChannelTabOpened(
        tabs[tabs.length - 1],
        close,
        true,
        ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id,
        null,
      );
    }
  } else {
    const obj7 = {};
    let flag = obj7.openVoiceChat;
    if (flag === undefined) {
      flag = true;
    }
    const transitionExtras = obj7.transitionExtras;
    const channel = ChannelStore.getChannel(channelId);
    if (flag) {
      flag = null != channel;
    }
    if (flag) {
      flag = channel.isGuildVocal();
    }
    if (flag) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      const obj8 = { openChannel: true };
      const obj5 = router_utils;
      const merged = Object.assign(transitionExtras);
      obj5.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), obj8);
      const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
    } else {
      transitionToChannel.transitionToChannel(channelId, transitionExtras);
    }
  }
}
export function openChannelTabActive(id, guildId, close) {
  if (activeTabId === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  let tmp3 = prop;
  if (prop === undefined) {
    tmp3 = null;
  }
  if (null != ChannelTabsStore.getActiveTab()) {
    const obj2 = { type: "CHANNEL_TABS_OPEN", location: null, sourceTabId: null };
    const obj6 = { kind: "channel", channelId: id, guildId };
    obj2.location = obj6;
    obj2.sourceTabId = activeTabId;
    if (tmp3 === undefined) {
      tmp3 = null;
    }
    DispatcherDefault.dispatch(obj2);
    const tabs = ChannelTabsStore.getTabs();
    let tmp22 = null;
    if (tabs.length > ChannelTabsStore.getTabs().length) {
      trackChannelTabOpened(
        tabs[tabs.length - 1],
        close,
        true,
        ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id,
        tmp3,
      );
      tmp22 = tmp24;
    }
    let tmp29 = null != tmp22;
    if (tmp29) {
      tmp29 = SelectedChannelStore.getCurrentlySelectedChannelId() !== id;
    }
    if (tmp29) {
      const obj7 = {};
      let flag4 = obj7.openVoiceChat;
      if (flag4 === undefined) {
        flag4 = true;
      }
      const transitionExtras2 = obj7.transitionExtras;
      const channel = ChannelStore.getChannel(id);
      if (flag4) {
        flag4 = null != channel;
      }
      if (flag4) {
        flag4 = channel.isGuildVocal();
      }
      if (flag4) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(id, true);
        const tmp19Result = ChannelRTCActionCreatorsDefault;
      }
      if (null != guildId) {
        const obj8 = { openChannel: true };
        const obj14 = router_utils;
        const merged = Object.assign(transitionExtras2);
        obj14.transitionTo(metroImportDefault.CHANNEL(guildId, id), obj8);
        const CHANNELResult = metroImportDefault.CHANNEL(guildId, id);
      } else {
        transitionToChannel.transitionToChannel(id, transitionExtras2);
      }
    }
  } else {
    const obj10 = {};
    let flag = obj10.openVoiceChat;
    if (flag === undefined) {
      flag = true;
    }
    const transitionExtras = obj10.transitionExtras;
    const channel1 = ChannelStore.getChannel(id);
    if (flag) {
      flag = null != channel1;
    }
    if (flag) {
      flag = channel1.isGuildVocal();
    }
    if (flag) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(id, true);
    }
    if (null != guildId) {
      const obj11 = { openChannel: true };
      const obj5 = router_utils;
      const merged1 = Object.assign(transitionExtras);
      obj5.transitionTo(metroImportDefault.CHANNEL(guildId, id), obj11);
      const CHANNELResult1 = metroImportDefault.CHANNEL(guildId, id);
    } else {
      transitionToChannel.transitionToChannel(id, transitionExtras);
    }
  }
}
export function openFreshTabAt(tabLocationForPath, close) {
  let tmp = prop;
  if (prop === undefined) {
    tmp = null;
  }
  if (tmp === undefined) {
    tmp = null;
  }
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_OPEN", location: tabLocationForPath, sourceTabId: null });
  const tabs = ChannelTabsStore.getTabs();
  let tmp3 = null;
  if (tabs.length > ChannelTabsStore.getTabs().length) {
    trackChannelTabOpened(
      tabs[tabs.length - 1],
      close,
      true,
      ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id,
      tmp,
    );
    tmp3 = tmp5;
  }
  let id;
  if (tmp3 != null) {
    id = tmp3.id;
  }
  if (id == null) {
    id = null;
  }
  return id;
}
export function openFriendsTabActive(close) {
  if (null == ChannelTabsStore.getActiveTab()) {
    router_utils.transitionTo(metroImportDefault.FRIENDS);
    return null;
  } else {
    const obj2 = { type: "CHANNEL_TABS_OPEN", location: ChannelTabRoutes.getFriendsTabLocation() };
    DispatcherDefault.dispatch(obj2);
    const tabs = ChannelTabsStore.getTabs();
    let tmp7 = null;
    if (tabs.length > ChannelTabsStore.getTabs().length) {
      trackChannelTabOpened(
        tabs[tabs.length - 1],
        close,
        true,
        ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id,
        null,
      );
      tmp7 = tmp2;
    }
    let id = null;
    if (null != tmp7) {
      if (tmp15Result.getHistory().location.pathname !== metroImportDefault.FRIENDS) {
        router_utils.transitionTo(tmp9.FRIENDS);
        const tmp15Result2 = router_utils;
      }
      id = tmp7.id;
      tmp15Result = router_utils;
    }
    return id;
  }
}
export function navigateToRoute(routePath, routeLabel) {
  const activeTabId = ChannelTabsStore.getActiveTabId();
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel });
  const activeTab = ChannelTabsStore.getActiveTab();
  if (tmp4) {
    trackChannelTabOpened(activeTab, "page_navigation", true, true);
  }
  const obj2 = { type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel };
  tmp4 = null != activeTabId && null != activeTab && activeTab.id !== activeTabId;
}
export { TabHistoryNavResult };
export function goBackInActiveTab() {
  return navigateActiveTabHistory(-1);
}
export function goForwardInActiveTab() {
  return navigateActiveTabHistory(1);
}
export function setChannelTabsEnabled(enabled) {
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_SET_ENABLED", enabled });
}
export { selectChannelTab };
export function switchToOpenChannelTab(dMFromUserId, quick_switcher, transitionExtras) {
  closure_0 = dMFromUserId;
  if (ChannelTabsStore.isEnabled()) {
    const activeTab = ChannelTabsStore.getActiveTab();
    let kind;
    if (activeTab != null) {
      kind = activeTab.kind;
    }
    if ("channel" === kind) {
      if (activeTab.channelId === dMFromUserId) {
        return false;
      }
    }
    const tabs = ChannelTabsStore.getTabs();
    const found = tabs.find((kind) => {
      let tmp = "channel" === kind.kind;
      if (tmp) {
        tmp = kind.channelId === closure_0;
      }
      return tmp;
    });
    let flag2 = null != found;
    if (flag2) {
      const obj2 = { openVoiceChat: false, transitionExtras };
      selectChannelTab(found.id, quick_switcher, obj2);
      flag2 = true;
    }
    return flag2;
  } else {
    return false;
  }
}
export function cycleChannelTab(arg0) {
  const tabs = ChannelTabsStore.getTabs();
  if (tabs.length > 1) {
    const findIndexResult = tabs.findIndex((id) => id.id === activeTabId.getActiveTabId());
    if (-1 !== findIndexResult) {
      selectChannelTab(tabs[(findIndexResult + arg0 + tabs.length) % tabs.length].id, "keyboard_cycle");
    }
  }
}
export function moveChannelTab(tabId, toIndex) {
  closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const findIndexResult = tabs.findIndex((id) => id.id === closure_0);
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_MOVE", tabId, toIndex });
  const tabs1 = ChannelTabsStore.getTabs();
  const findIndexResult1 = tabs1.findIndex((id) => id.id === closure_0);
  if (tmp6) {
    const obj3 = {};
    const merged = Object.assign(getTabProperties(tabs1[findIndexResult1]));
    obj3.from_index = findIndexResult;
    obj3.to_index = findIndexResult1;
    obj3.is_pinned = tabs1[findIndexResult1].pinned;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_REORDERED, obj3);
    const tmp2Result = AppAnalyticsUtilsDefault;
  }
  const obj = { type: "CHANNEL_TABS_MOVE", tabId, toIndex };
  tmp6 = -1 !== findIndexResult && -1 !== findIndexResult1 && findIndexResult1 !== findIndexResult;
}
export function setChannelTabPinned(tabId, pinned, source) {
  closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  pinned = undefined;
  if (found != null) {
    pinned = found.pinned;
  }
  DispatcherDefault.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId, pinned });
  const tabs1 = ChannelTabsStore.getTabs();
  const found1 = tabs1.find((id) => id.id === closure_0);
  if (tmp7) {
    const obj4 = {};
    const merged = Object.assign(getTabProperties(found1));
    obj4.source = source;
    obj4.pinned = found1.pinned;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_PIN_TOGGLED, obj4);
    const tmp3Result = AppAnalyticsUtilsDefault;
  }
  const obj3 = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned };
  tmp7 = null != found1 && pinned !== found1.pinned;
}
export function trackChannelTabPinToggled(pinned, source) {
  const obj2 = {};
  const merged = Object.assign(getTabProperties(pinned));
  obj2.source = source;
  obj2.pinned = pinned.pinned;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_PIN_TOGGLED, obj2);
}
export function closeChannelTab(tabId, source) {
  closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    const tmp25 = ChannelTabsStore.getActiveTabId() === tabId;
    const obj2 = { type: "CHANNEL_TABS_CLOSE", tabId };
    DispatcherDefault.dispatch(obj2);
    const tabs1 = ChannelTabsStore.getTabs();
    const someResult = tabs1.some((id) => id.id === closure_0);
    if (!someResult) {
      const obj3 = {};
      const merged = Object.assign(getTabProperties(found));
      obj3.source = source;
      obj3.was_active = tmp25;
      obj3.was_pinned = found.pinned;
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.CHANNEL_TAB_CLOSED, obj3);
      const tmp26Result = AppAnalyticsUtilsDefault;
    }
    if (tmp25) {
      const activeTab = ChannelTabsStore.getActiveTab();
      if (null != activeTab) {
        if (!someResult) {
          trackChannelTabOpened(activeTab, "close", false, true);
        }
        const obj4 = {};
        if ("route" === activeTab.kind) {
          router_utils.transitionTo(activeTab.routePath, obj4.transitionExtras);
        } else {
          ({ channelId, guildId } = activeTab);
          let flag3 = obj4.openVoiceChat;
          if (flag3 === undefined) {
            flag3 = true;
          }
          const transitionExtras = obj4.transitionExtras;
          const channel = ChannelStore.getChannel(channelId);
          if (flag3) {
            flag3 = null != channel;
          }
          if (flag3) {
            flag3 = channel.isGuildVocal();
          }
          if (flag3) {
            ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, true);
            const tmp26Result2 = ChannelRTCActionCreatorsDefault;
          }
          if (null != guildId) {
            const obj5 = { openChannel: true };
            const obj8 = router_utils;
            const merged1 = Object.assign(transitionExtras);
            obj8.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), obj5);
            const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
          } else {
            transitionToChannel.transitionToChannel(channelId, transitionExtras);
          }
        }
      }
    }
  }
}
