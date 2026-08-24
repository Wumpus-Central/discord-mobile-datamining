// discord_app/modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx
import closure_2 from "../../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../../stores/GuildStore.tsx";
import closure_4 from "../stores/AppLauncherOnboardingStore.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx");

export const useBannerBots = function useBannerBots(context) {
  context = context.context;
  let first1;
  let obj = (function useAppsMap(context) {
    let apps;
    apps = apps(11243).useApplicationsInContext({ context: context.context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
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
  let apps = first1(11243).useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
  const obj2 = first1(11243);
  const tmp2 = first1;
  const obj3 = (function useCommandsMap(context) {
    let commands;
    commands = commands(11243).useApplicationCommandsInContext({ context: context.context, includeBuiltIn: false }).commands;
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
    let obj = context(589);
    const items = [closure_3];
    obj = {
      channel: context.channel,
      guild: obj.useStateFromStores(items, () => {
        const channel = context.channel;
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return closure_1_3.getGuild(guild_id);
      })
    };
    return context(8457).useTopCommands(obj);
  })({ context });
  let channel = context.channel;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const activityApplications = first1(11211).useActivityApplications({ guildId: guild_id, fetchesShelf: true });
  const obj4 = first1(11211);
  let items = [closure_4];
  const stateFromStores = tmp2(589).useStateFromStores(items, () => recentApplicationCommandMetadata.getRecentApplicationCommandMetadata());
  let value = null;
  if (null != stateFromStores) {
    value = obj.get(stateFromStores.applicationId);
  }
  let tmp9 = value;
  first1 = value;
  for (const item10049 of tmp4) {
    value = obj3.get(item10049);
    if (null != value) {
      let tmp12 = value;
      let value1 = obj.get(tmp11.applicationId);
      let tmp14 = value1;
      if (null != value1) {
        let tmp15 = tmp9;
        if (null == tmp9) {
          let tmp20 = value1;
          tmp9 = tmp14;
          first1 = tmp14;
        } else {
          let tmp16 = value1;
          let tmp17 = tmp9;
          let id;
          if (tmp9 != null) {
            id = tmp9.id;
          }
          if (tmp14.id !== id) {
            let found = value1;
            let tmp19 = obj6;
            obj6.return();
            break;
          }
          let tmp21 = tmp9;
          if (null == tmp9) {
            if (apps.length > 0) {
              let first = apps[0];
              tmp9 = first;
              first1 = first;
            }
            let num = 1;
            if (apps.length > 1) {
              found = apps[1];
            }
          } else {
            let tmp22 = found;
            if (null == found) {
              found = apps.find((id) => {
                id = undefined;
                if (first1 != null) {
                  id = first1.id;
                }
                return id.id !== id;
              });
            }
          }
          let tmp24 = tmp9;
          if (null == tmp9) {
            first1 = activityApplications[0];
            tmp9 = first1;
            found = activityApplications[1];
          } else {
            let tmp25 = found;
            if (null == found) {
              found = activityApplications[0];
            }
          }
          obj = { firstBotApplication: null, secondBotApplication: null };
          obj[0] = tmp9;
          obj[1] = found;
          return obj;
        }
      }
    }
    continue;
  }
};