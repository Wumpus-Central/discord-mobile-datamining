// discord_app/modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import useActivityApplications from "useActivityApplications.tsx";
import AppLauncherSearchUtils from "../../../utils/AppLauncherSearchUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import AppLauncherOnboardingStore from "../stores/AppLauncherOnboardingStore.tsx";

require = fn;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFrecencyCommandIds(context) {
      const cResult = context(576).c(6);
      context = context.context;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      let channel = context.channel;
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (cResult[1] !== guild_id) {
        const channel2 = context.channel;
        let guild_id1;
        if (channel2 != null) {
          guild_id1 = channel2.guild_id;
        }
        const fn = function o() {
          const channel = context.channel;
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return GuildStore.getGuild(guild_id);
        };
        cResult[1] = guild_id1;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = context(576);
      const stateFromStores = context(504).useStateFromStores(first, tmp7);
      if (cResult[3] === context.channel) {
        if (cResult[4] === stateFromStores) {
          let tmp10 = cResult[5];
        }
        return tmp(9227).useTopCommands(tmp10);
      }
      const obj2 = { channel: context.channel, guild: stateFromStores };
      cResult[3] = context.channel;
      cResult[4] = stateFromStores;
      cResult[5] = obj2;
      tmp10 = obj2;
      const tmpResult = context(504);
    }
  : function useFrecencyCommandIds(context) {
      context = context.context;
      const items = [GuildStore];
      const obj = context(504);
      const obj2 = {
        channel: context.channel,
        guild: context(504).useStateFromStores(items, () => {
          const channel = context.channel;
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return GuildStore.getGuild(guild_id);
        }),
      };
      return context(9227).useTopCommands(obj2);
    };
ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAppsMap(context) {
      const cResult = c.c(4);
      context = context.context;
      if (cResult[0] !== context) {
        const obj2 = {
          context,
          onlyWithCommands: true,
          includeBuiltIn: false,
          includeEmbeddedApps: false,
          includeNonEmbeddedApps: true,
        };
        cResult[0] = context;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const apps = AppLauncherSearchUtils.useApplicationsInContext(tmp4).apps;
      if (cResult[2] !== apps) {
        const _Map = Map;
        const map = new Map();
        for (const item10031 of apps) {
          let result = map.set(item10031.id, item10031);
          continue;
        }
        cResult[2] = apps;
        cResult[3] = map;
        let tmp5 = map;
      } else {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  : function useAppsMap(context) {
      const apps = AppLauncherSearchUtils.useApplicationsInContext({
        context: context.context,
        onlyWithCommands: true,
        includeBuiltIn: false,
        includeEmbeddedApps: false,
        includeNonEmbeddedApps: true,
      }).apps;
      const items = [apps];
      return noop.useMemo(() => {
        const map = new Map();
        for (const item10011 of apps) {
          let result = map.set(item10011.id, item10011);
          continue;
        }
        return map;
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCommandsMap(context) {
      const cResult = c.c(4);
      context = context.context;
      if (cResult[0] !== context) {
        const obj2 = { context, includeBuiltIn: false };
        cResult[0] = context;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const commands = AppLauncherSearchUtils.useApplicationCommandsInContext(tmp4).commands;
      if (cResult[2] !== commands) {
        const _Map = Map;
        const map = new Map();
        for (const item10031 of commands) {
          let result = map.set(item10031.id, item10031);
          continue;
        }
        cResult[2] = commands;
        cResult[3] = map;
        let tmp5 = map;
      } else {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  : function useCommandsMap(context) {
      const commands = AppLauncherSearchUtils.useApplicationCommandsInContext({
        context: context.context,
        includeBuiltIn: false,
      }).commands;
      const items = [commands];
      return noop.useMemo(() => {
        const map = new Map();
        for (const item10011 of commands) {
          let result = map.set(item10011.id, item10011);
          continue;
        }
        return map;
      }, items);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx");

export const useBannerBots = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBannerBots(context) {
      const cResult = c.c(23);
      context = context.context;
      if (cResult[0] !== context) {
        const obj2 = { context };
        cResult[0] = context;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const obj3 = closure_6(tmp4);
      if (cResult[2] !== context) {
        const obj4 = {
          context,
          onlyWithCommands: true,
          includeBuiltIn: false,
          includeEmbeddedApps: false,
          includeNonEmbeddedApps: true,
        };
        cResult[2] = context;
        cResult[3] = obj4;
        let tmp5 = obj4;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== context) {
        const obj5 = { context };
        cResult[4] = context;
        cResult[5] = obj5;
        let tmp6 = obj5;
      } else {
        tmp6 = cResult[5];
      }
      const obj7 = closure_7(tmp6);
      if (cResult[6] !== context) {
        const obj6 = { context };
        cResult[6] = context;
        cResult[7] = obj6;
        let tmp7 = obj6;
      } else {
        tmp7 = cResult[7];
      }
      const tmp8 = closure_5(tmp7);
      const channel = context.channel;
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (cResult[8] !== guild_id) {
        const obj8 = { guildId: guild_id, fetchesShelf: true };
        cResult[8] = guild_id;
        cResult[9] = obj8;
        let tmp10 = obj8;
      } else {
        tmp10 = cResult[9];
      }
      const tmpResult = AppLauncherSearchUtils;
      const activityApplications = useActivityApplications.useActivityApplications(tmp10);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AppLauncherOnboardingStore];
        class M {
          constructor() {
            return closure_1_4.getRecentApplicationCommandMetadata();
          }
        }
        cResult[10] = items;
        cResult[11] = M;
        let tmp13 = M;
        let tmp12 = items;
      } else {
        tmp12 = cResult[10];
        tmp13 = cResult[11];
      }
      const tmpResult3 = useActivityApplications;
      const stateFromStores = initialize.useStateFromStores(tmp12, tmp13);
      if (cResult[12] === activityApplications) {
        if (cResult[13] === obj3) {
          if (cResult[14] === tmpResult.useApplicationsInContext(tmp5).apps) {
            if (cResult[15] === obj7) {
              if (cResult[16] === tmp8) {
                if (cResult[17] === stateFromStores) {
                  require = tmp16;
                  class M {
                    constructor() {
                      return closure_1_4.getRecentApplicationCommandMetadata();
                    }
                  }
                  if (cResult[20] === cResult[18]) {
                    if (cResult[21] === tmp18) {
                      let tmp27 = cResult[22];
                    }
                    return tmp27;
                  }
                  const obj9 = { firstBotApplication: cResult[18], secondBotApplication: tmp18 };
                  cResult[20] = cResult[18];
                  cResult[21] = tmp18;
                  cResult[22] = obj9;
                  tmp27 = obj9;
                }
              }
            }
          }
        }
      }
      value = null;
      if (null != stateFromStores) {
        value = obj3.get(stateFromStores.applicationId);
      }
      require = value;
      for (const item10092 of tmp8) {
        value3 = obj7.get(item10092);
        if (null != value3) {
          let value4 = obj3.get(tmp21.applicationId);
          class M {
            constructor() {
              return closure_1_4.getRecentApplicationCommandMetadata();
            }
          }
        }
        continue;
      }
      const tmpResult4 = initialize;
    }
  : function useBannerBots(context) {
      context = context.context;
      let first1;
      const obj = closure_6({ context });
      const apps = first1(11697).useApplicationsInContext({
        context,
        onlyWithCommands: true,
        includeBuiltIn: false,
        includeEmbeddedApps: false,
        includeNonEmbeddedApps: true,
      }).apps;
      const obj2 = first1(11697);
      const tmp2 = first1;
      const obj3 = closure_7({ context });
      const tmp4 = closure_5({ context });
      const channel = context.channel;
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const activityApplications = first1(11667).useActivityApplications({ guildId: guild_id, fetchesShelf: true });
      const obj4 = first1(11667);
      const items = [AppLauncherOnboardingStore];
      const stateFromStores = tmp2(504).useStateFromStores(items, () =>
        recentApplicationCommandMetadata.getRecentApplicationCommandMetadata(),
      );
      value = null;
      if (null != stateFromStores) {
        value = obj.get(stateFromStores.applicationId);
      }
      let tmp9 = value;
      first1 = value;
      for (const item10048 of tmp4) {
        value3 = obj3.get(item10048);
        if (null != value3) {
          let value4 = obj.get(tmp11.applicationId);
          let tmp14 = value4;
          if (null != value4) {
            if (null == tmp9) {
              tmp9 = tmp14;
              first1 = tmp14;
            } else {
              let id;
              if (tmp9 != null) {
                id = tmp9.id;
              }
              if (tmp14.id !== id) {
                let found = value4;
                obj6.return();
                break;
              }
              if (null == tmp9) {
                if (apps.length > 0) {
                  let first = apps[0];
                  tmp9 = first;
                  first1 = first;
                }
                if (apps.length > 1) {
                  found = apps[1];
                }
              } else if (null == found) {
                found = apps.find((id) => {
                  id = undefined;
                  if (first1 != null) {
                    id = first1.id;
                  }
                  return id.id !== id;
                });
              }
              if (null == tmp9) {
                first1 = activityApplications[0];
                tmp9 = first1;
                found = activityApplications[1];
              } else if (null == found) {
                found = activityApplications[0];
              }
              let obj5 = { firstBotApplication: tmp9, secondBotApplication: found };
              return obj5;
            }
          }
        }
        continue;
      }
      const tmp2Result = tmp2(504);
    };
