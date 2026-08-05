// discord_app/modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx
import { getRootNavigationRef } from "../../RootNavigationRef.native.tsx";
const result = require("CommonActions").fileFinishedImporting("modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx");

export const convertPortraitToLandscapeScreens = function convertPortraitToLandscapeScreens() {
  let obj = getRootNavigationRef;
  const store = obj.getRootNavigationRef();
  if (null != store) {
    let state = store.getState();
    if (null != state) {
      let tmpResult = tmp(4106);
      const coerceMainRouteResult = tmpResult.coerceMainRoute(state.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 !== state2.index) {
            tmpResult = tmp(4106);
            if (null != tmpResult.coerceChannelRoute(state2.routes[1])) {
              const coerceTabsRouteResult = tmp(4106).coerceTabsRoute(state2.routes[0]);
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
                  coerceMainRouteResult.state = obj;
                  const items1 = [coerceMainRouteResult];
                  const routes1 = state.routes;
                  HermesBuiltin.arraySpread(routes1.slice(1), 1);
                  const CommonActions = tmp(1485).CommonActions;
                  obj = {};
                  const merged1 = Object.assign(state);
                  obj.routes = items1;
                  obj.index = items1.length - 1;
                  store.dispatch(CommonActions.reset(obj));
                }
                tmpResult2 = tmp(4106);
              }
              const tmpResult1 = tmp(4106);
            }
          }
        }
      }
    }
  }
};
export const convertLandscapeToPortraitScreens = function convertLandscapeToPortraitScreens() {
  let obj = getRootNavigationRef;
  const store = obj.getRootNavigationRef();
  if (null != store) {
    let state = store.getState();
    if (null != state) {
      let tmpResult = tmp(4106);
      const coerceMainRouteResult = tmpResult.coerceMainRoute(state.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 === state.index) {
            if (0 !== state2.index) {
              tmpResult = tmp(4106);
            }
          }
          const coerceTabsRouteResult = tmp(4106).coerceTabsRoute(state2.routes[0]);
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
            const coerceGuildsRouteResult = tmp(4106).coerceGuildsRoute(tmp5);
            if (null != coerceGuildsRouteResult) {
              obj = {};
              const merged = Object.assign(state2);
              obj.index = state2.index + 1;
              const items = [state2.routes[0], ];
              const params3 = coerceGuildsRouteResult.params;
              let channelId;
              if (params3 != null) {
                channelId = params3.channelId;
              }
              if (channelId == null) {
                const _HermesInternal = HermesInternal;
                channelId = "channel-" + tmp(514).v4();
                const tmpResult3 = tmp(514);
              }
              obj = { name: "channel", key: null, params: null };
              obj[1] = channelId;
              const params = coerceGuildsRouteResult.params;
              let channelId1;
              if (params != null) {
                channelId1 = params.channelId;
              }
              const obj1 = { channelId: null, guildId: null };
              obj1[0] = channelId1;
              const params2 = coerceGuildsRouteResult.params;
              let guildId;
              if (params2 != null) {
                guildId = params2.guildId;
              }
              obj1[1] = guildId;
              obj[2] = obj1;
              items[1] = obj;
              const routes = state2.routes;
              HermesBuiltin.arraySpread(routes.slice(1), 2);
              obj.routes = items;
              coerceMainRouteResult.state = obj;
              const items1 = [coerceMainRouteResult];
              const routes1 = state.routes;
              HermesBuiltin.arraySpread(routes1.slice(1), 1);
              const CommonActions = tmp(1485).CommonActions;
              const obj2 = {};
              const merged1 = Object.assign(state);
              obj2.routes = items1;
              obj2.index = items1.length - 1;
              store.dispatch(CommonActions.reset(obj2));
            }
            const tmpResult2 = tmp(4106);
          }
          const tmpResult1 = tmp(4106);
        }
      }
    }
  }
};