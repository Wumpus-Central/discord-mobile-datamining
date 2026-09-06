// discord_app/modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx");

export const convertPortraitToLandscapeScreens = function convertPortraitToLandscapeScreens() {
  let obj = RootNavigationRef;
  const store = obj.getRootNavigationRef();
  if (null != store) {
    let state = store.getState();
    if (null != state) {
      let tmpResult = tmp(4417);
      const coerceMainRouteResult = tmpResult.coerceMainRoute(state.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 !== state2.index) {
            tmpResult = tmp(4417);
            if (null != tmpResult.coerceChannelRoute(state2.routes[1])) {
              const coerceTabsRouteResult = tmp(4417).coerceTabsRoute(state2.routes[0]);
              if (null != coerceTabsRouteResult) {
                const state3 = coerceTabsRouteResult.state;
                let tmp4;
                if (state3 != null) {
                  state = coerceTabsRouteResult.state;
                  let index;
                  if (state != null) {
                    index = state.index;
                  }
                  tmp4 = state3.routes[index];
                }
                if (null != tmpResult2.coerceGuildsRoute(tmp4)) {
                  obj = {};
                  const merged = Object.assign(state2);
                  obj.index = state2.index - 1;
                  const items = [state2.routes[0]];
                  const routes = state2.routes;
                  HermesBuiltin.arraySpread(routes.slice(2), 1);
                  obj.routes = items;
                  const routes1 = state.routes;
                  const substr = routes1.slice(1);
                  obj = {};
                  const merged1 = Object.assign(coerceMainRouteResult);
                  obj.state = obj;
                  const items1 = [obj];
                  HermesBuiltin.arraySpread(substr, 1);
                  const CommonActions = tmp(1488).CommonActions;
                  const obj1 = {};
                  const merged2 = Object.assign(state);
                  obj1.routes = items1;
                  obj1.index = items1.length - 1;
                  store.dispatch(CommonActions.reset(obj1));
                }
                tmpResult2 = tmp(4417);
              }
              const tmpResult1 = tmp(4417);
            }
          }
        }
      }
    }
  }
};
export const convertLandscapeToPortraitScreens = function convertLandscapeToPortraitScreens() {
  let obj = RootNavigationRef;
  const store = obj.getRootNavigationRef();
  if (null != store) {
    let state = store.getState();
    if (null != state) {
      let tmpResult = tmp(4417);
      const coerceMainRouteResult = tmpResult.coerceMainRoute(state.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 === state.index) {
            if (0 !== state2.index) {
              tmpResult = tmp(4417);
            }
          }
          const coerceTabsRouteResult = tmp(4417).coerceTabsRoute(state2.routes[0]);
          if (null != coerceTabsRouteResult) {
            const state3 = coerceTabsRouteResult.state;
            let tmp5;
            if (state3 != null) {
              state = coerceTabsRouteResult.state;
              let index;
              if (state != null) {
                index = state.index;
              }
              tmp5 = state3.routes[index];
            }
            const coerceGuildsRouteResult = tmp(4417).coerceGuildsRoute(tmp5);
            if (null != coerceGuildsRouteResult) {
              obj = {};
              const merged = Object.assign(state2);
              obj.index = state2.index + 1;
              const items = [state2.routes[0]];
              const params3 = coerceGuildsRouteResult.params;
              let channelId;
              if (params3 != null) {
                channelId = params3.channelId;
              }
              if (channelId == null) {
                const _HermesInternal = HermesInternal;
                channelId = "channel-" + tmp(1256).v4();
                const tmpResult3 = tmp(1256);
              }
              obj = { name: "channel", key: channelId, params: null };
              const params = coerceGuildsRouteResult.params;
              let channelId1;
              if (params != null) {
                channelId1 = params.channelId;
              }
              const obj1 = { channelId: channelId1, guildId: null };
              const params2 = coerceGuildsRouteResult.params;
              let guildId;
              if (params2 != null) {
                guildId = params2.guildId;
              }
              obj1.guildId = guildId;
              obj.params = obj1;
              items[1] = obj;
              const routes = state2.routes;
              HermesBuiltin.arraySpread(routes.slice(1), 2);
              obj.routes = items;
              const routes1 = state.routes;
              const substr = routes1.slice(1);
              const obj2 = {};
              const merged1 = Object.assign(coerceMainRouteResult);
              obj2.state = obj;
              const items1 = [obj2];
              HermesBuiltin.arraySpread(substr, 1);
              const CommonActions = tmp(1488).CommonActions;
              const obj3 = {};
              const merged2 = Object.assign(state);
              obj3.routes = items1;
              obj3.index = items1.length - 1;
              store.dispatch(CommonActions.reset(obj3));
            }
            const tmpResult2 = tmp(4417);
          }
          const tmpResult1 = tmp(4417);
        }
      }
    }
  }
};
