// discord_app/modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import initialize from "initialize";
import { useApplicationsInContext } from "../../../utils/AppLauncherSearchUtils.tsx";
import { useActivityApplications } from "useActivityApplications.tsx";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx");

export const useBannerBots = function useBannerBots(context) {
  context = context.context;
  let _require;
  let obj = (function useAppsMap(context) {
    let apps;
    apps = apps(11511).useApplicationsInContext({ context: context.context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
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
  let apps = _useApplicationsInContext.useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
  const obj2 = _useApplicationsInContext;
  const tmp2 = _require;
  const obj3 = (function useCommandsMap(context) {
    let commands;
    commands = commands(11511).useApplicationCommandsInContext({ context: context.context, includeBuiltIn: false }).commands;
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
    const items = [createGuildRecordFromRust];
    obj = {
      channel: context.channel,
      guild: obj.useStateFromStores(items, () => {
        const channel = context.channel;
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return outer1_3.getGuild(guild_id);
      })
    };
    return context(8396).useTopCommands(obj);
  })({ context });
  let channel = context.channel;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const activityApplications = _useActivityApplications.useActivityApplications({ guildId: guild_id, fetchesShelf: true });
  const obj4 = _useActivityApplications;
  let items = [initialize];
  const stateFromStores = tmp2(589).useStateFromStores(items, () => recentApplicationCommandMetadata.getRecentApplicationCommandMetadata());
  let value = null;
  if (null != stateFromStores) {
    value = obj.get(stateFromStores.applicationId);
  }
  let tmp9 = value;
  _require = value;
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
          _require = tmp14;
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
              _require = first;
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
                if (_undefined != null) {
                  id = _undefined.id;
                }
                return id.id !== id;
              });
            }
          }
          let tmp24 = tmp9;
          if (null == tmp9) {
            let first1 = activityApplications[0];
            tmp9 = first1;
            _require = first1;
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