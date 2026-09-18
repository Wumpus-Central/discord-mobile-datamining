// === Module 12308: useBannerBots ===

// Module 12308 (useBannerBots)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;
import AppLauncherOnboardingStore from "AppLauncherOnboardingStore" /* 12287 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx");

export const useBannerBots = function useBannerBots(context) {
  context = context.context;
  let first1;
  let obj = (function useAppsMap(context) {
    const apps = first1(12309).useApplicationsInContext({ context: context.context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
    const items = [apps];
    return React.useMemo(() => {
      const map = new Map();
      for (const item10011 of apps) {
        let result = map.set(item10011.id, item10011);
        continue;
      }
      return map;
    }, items);
  })({ context });
  let apps = first1(12309).useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
  let obj2 = first1(12309);
  const tmp2 = first1;
  const obj3 = (function useCommandsMap(context) {
    const commands = first1(12309).useApplicationCommandsInContext({ context: context.context, includeBuiltIn: false }).commands;
    const items = [commands];
    return React.useMemo(() => {
      const map = new Map();
      for (const item10011 of commands) {
        let result = map.set(item10011.id, item10011);
        continue;
      }
      return map;
    }, items);
  })({ context });
  const tmp4 = (function useFrecencyCommandIds(context) {
    context = context.context;
    const items = [closure_3];
    const obj = context(504);
    const obj2 = {
      channel: context.channel,
      guild: context(504).useStateFromStores(items, () => {
        const channel = context.channel;
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild.getGuild(guild_id);
      })
    };
    return context(9537).useTopCommands(obj2);
  })({ context });
  let channel = context.channel;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const activityApplications = first1(12280).useActivityApplications({ guildId: guild_id, fetchesShelf: true });
  const obj4 = first1(12280);
  let items = [AppLauncherOnboardingStore];
  const stateFromStores = tmp2(504).useStateFromStores(items, () => recentApplicationCommandMetadata.getRecentApplicationCommandMetadata());
  value = null;
  if (null != stateFromStores) {
    value = obj.get(stateFromStores.applicationId);
  }
  let tmp9 = value;
  first1 = value;
  for (const item10049 of tmp4) {
    let value3 = obj3.get(item10049);
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