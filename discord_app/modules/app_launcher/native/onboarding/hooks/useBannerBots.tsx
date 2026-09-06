// === Module 12066: useBannerBots ===

// Module 12066 (useBannerBots)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import AppLauncherOnboardingStore from "AppLauncherOnboardingStore" /* 12045 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx");

export const useBannerBots = function useBannerBots(context) {
  context = context.context;
  let first1;
  let obj = (function useAppsMap(context) {
    const apps = first1(12067).useApplicationsInContext({ context: context.context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
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
  let apps = first1(12067).useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
  const obj2 = first1(12067);
  const tmp2 = first1;
  const obj3 = (function useCommandsMap(context) {
    const commands = first1(12067).useApplicationCommandsInContext({ context: context.context, includeBuiltIn: false }).commands;
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
    let obj = context(504);
    const items = [closure_3];
    obj = {
      channel: context.channel,
      guild: obj.useStateFromStores(items, () => {
        const channel = context.channel;
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild.getGuild(guild_id);
      })
    };
    return context(9299).useTopCommands(obj);
  })({ context });
  let channel = context.channel;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const activityApplications = first1(12038).useActivityApplications({ guildId: guild_id, fetchesShelf: true });
  const obj4 = first1(12038);
  let items = [AppLauncherOnboardingStore];
  const stateFromStores = tmp2(504).useStateFromStores(items, () => recentApplicationCommandMetadata.getRecentApplicationCommandMetadata());
  value = null;
  if (null != stateFromStores) {
    value = obj.get(stateFromStores.applicationId);
  }
  let tmp9 = value;
  first1 = value;
  for (const item10049 of tmp4) {
    value = obj3.get(item10049);
    if (null != value) {
      let value1 = obj.get(tmp11.applicationId);
      let tmp14 = value1;
      if (null != value1) {
        if (null == tmp9) {
          tmp9 = tmp14;
          first1 = tmp14;
        } else {
          let id;
          if (tmp9 != null) {
            id = tmp9.id;
          }
          if (tmp14.id !== id) {
            let found = value1;
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
          obj = { firstBotApplication: tmp9, secondBotApplication: found };
          return obj;
        }
      }
    }
    continue;
  }
  const tmp2Result = tmp2(504);
};