// === Module 11680: useBannerBots ===

// Module 11680 (useBannerBots)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import useActivityApplications2 from "useActivityApplications" /* 11652 */;
import AppLauncherSearchUtils from "AppLauncherSearchUtils" /* 11681 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import AppLauncherOnboardingStore from "AppLauncherOnboardingStore" /* 11659 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let map;

let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  let first;
  let tmp8;
  const obj = context(576);
  const cResult = obj.c(6);
  context = context.context;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let channel = context.channel;
  let guild_id;
  const tmp6 = cResult[1];
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (tmp6 !== guild_id) {
    const channel2 = context.channel;
    let guild_id1;
    if (channel2 != null) {
      guild_id1 = channel2.guild_id;
    }
    const fn = function o() {
      const channel = context.channel;
      let guild_id;
      const getGuild = GuildStore.getGuild;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return getGuild(guild_id);
    };
    cResult[1] = guild_id1;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = context(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === context.channel) {
    let tmp11;
    if (cResult[4] === stateFromStores) {
      tmp11 = cResult[5];
    }
    const tmpResult2 = context(8804);
    return tmpResult2.useTopCommands(tmp11);
  }
  const obj2 = { channel: context.channel, guild: stateFromStores };
  cResult[3] = context.channel;
  cResult[4] = stateFromStores;
  cResult[5] = obj2;
  tmp11 = obj2;
}) : ((context) => {
  context = context.context;
  const items = [GuildStore];
  const obj = context(504);
  const obj2 = {
    channel: context.channel,
    guild: obj.useStateFromStores(items, () => {
      const channel = context.channel;
      let guild_id;
      const getGuild = GuildStore.getGuild;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return getGuild(guild_id);
    })
  };
  const obj3 = context(8804);
  return obj3.useTopCommands(obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function(context) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  context = context.context;
  if (cResult[0] !== context) {
    const obj2 = { context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true };
    cResult[0] = context;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = AppLauncherSearchUtils;
  const apps = tmpResult.useApplicationsInContext(tmp4).apps;
  if (cResult[2] !== apps) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    for (const item10031 of apps) {
      let result = map.set(item10031.id, item10031);
      continue;
    }
    cResult[2] = apps;
    cResult[3] = map;
    tmp5 = map;
  } else {
    tmp5 = cResult[3];
  }
  return tmp5;
}) : ((context) => {
  context = context.context;
  const obj = AppLauncherSearchUtils;
  const apps = obj.useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
  const items = [apps];
  return react.useMemo(() => {
    map = new Map();
    for (const item10011 of apps) {
      let result = map.set(item10011.id, item10011);
      continue;
    }
    return map;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function(context) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  context = context.context;
  if (cResult[0] !== context) {
    const obj2 = { context, includeBuiltIn: false };
    cResult[0] = context;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = AppLauncherSearchUtils;
  const commands = tmpResult.useApplicationCommandsInContext(tmp4).commands;
  if (cResult[2] !== commands) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    for (const item10031 of commands) {
      let result = map.set(item10031.id, item10031);
      continue;
    }
    cResult[2] = commands;
    cResult[3] = map;
    tmp5 = map;
  } else {
    tmp5 = cResult[3];
  }
  return tmp5;
}) : ((context) => {
  context = context.context;
  const obj = AppLauncherSearchUtils;
  const commands = obj.useApplicationCommandsInContext({ context, includeBuiltIn: false }).commands;
  const items = [commands];
  return react.useMemo(() => {
    map = new Map();
    for (const item10011 of commands) {
      let result = map.set(item10011.id, item10011);
      continue;
    }
    return map;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  let recentApplicationCommandMetadata;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(23);
  context = context.context;
  if (cResult[0] !== context) {
    const obj2 = { context };
    cResult[0] = context;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const obj3 = closure_6(tmp5);
  if (cResult[2] !== context) {
    const obj4 = { context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true };
    cResult[2] = context;
    cResult[3] = obj4;
    tmp6 = obj4;
  } else {
    tmp6 = cResult[3];
  }
  const tmp2Result = AppLauncherSearchUtils;
  const apps = tmp2Result.useApplicationsInContext(tmp6).apps;
  if (cResult[4] !== context) {
    const obj5 = { context };
    cResult[4] = context;
    cResult[5] = obj5;
    tmp7 = obj5;
  } else {
    tmp7 = cResult[5];
  }
  const obj7 = closure_7(tmp7);
  if (cResult[6] !== context) {
    const obj6 = { context };
    cResult[6] = context;
    cResult[7] = obj6;
    tmp8 = obj6;
  } else {
    tmp8 = cResult[7];
  }
  const tmp9 = closure_5(tmp8);
  const channel = context.channel;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (cResult[8] !== guild_id) {
    const obj8 = { guildId: guild_id, fetchesShelf: true };
    cResult[8] = guild_id;
    cResult[9] = obj8;
    tmp11 = obj8;
  } else {
    tmp11 = cResult[9];
  }
  const tmp2Result3 = useActivityApplications2;
  const activityApplications = tmp2Result3.useActivityApplications(tmp11);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppLauncherOnboardingStore];
    class E {
      constructor() {
        return closure_1_4.getRecentApplicationCommandMetadata();
      }
    }
    cResult[10] = items;
    cResult[11] = E;
    tmp14 = E;
    tmp13 = items;
  } else {
    tmp13 = cResult[10];
    tmp14 = cResult[11];
  }
  const tmp2Result4 = get_initialized;
  const stateFromStores = tmp2Result4.useStateFromStores(tmp13, tmp14);
  if (cResult[12] === activityApplications) {
    if (cResult[13] === obj3) {
      if (cResult[14] === apps) {
        if (cResult[15] === obj7) {
          if (cResult[16] === tmp9) {
            let tmp18;
            if (cResult[17] === stateFromStores) {
              tmp18 = tmp17;
              require = tmp17;
              class E {
                constructor() {
                  return closure_1_4.getRecentApplicationCommandMetadata();
                }
              }
            }
            if (cResult[20] === tmp18) {
              let tmp27;
              if (cResult[21] === tmp) {
                tmp27 = cResult[22];
              }
              return tmp27;
            }
            class E {
              constructor() {
                return closure_1_4.getRecentApplicationCommandMetadata();
              }
            }
            tmp28[0] = tmp18;
            tmp28[1] = tmp;
            cResult[20] = tmp18;
            cResult[21] = tmp;
            cResult[22] = tmp28;
            tmp27 = tmp28;
          }
        }
      }
    }
  }
  let value = null;
  if (null != stateFromStores) {
    value = obj3.get(stateFromStores.applicationId);
  }
  tmp18 = value;
  require = value;
  for (const item10090 of tmp9) {
    let value3 = obj7.get(item10090);
    if (null != value3) {
      let value4 = obj3.get(tmp21.applicationId);
      class E {
        constructor() {
          return closure_1_4.getRecentApplicationCommandMetadata();
        }
      }
    }
    continue;
  }
}) : ((context) => {
  let recentApplicationCommandMetadata;
  context = context.context;
  let first1;
  const obj = closure_6({ context });
  const obj2 = first1(11681);
  const apps = obj2.useApplicationsInContext({ context, onlyWithCommands: true, includeBuiltIn: false, includeEmbeddedApps: false, includeNonEmbeddedApps: true }).apps;
  const obj3 = closure_7({ context });
  const channel = context.channel;
  let guild_id;
  const tmp4 = closure_5({ context });
  const useActivityApplications = first1(11652).useActivityApplications;
  first1(11652);
  const tmp2 = first1;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const activityApplications = useActivityApplications({ guildId: guild_id, fetchesShelf: true });
  const items = [AppLauncherOnboardingStore];
  const tmp2Result = tmp2(504);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => recentApplicationCommandMetadata.getRecentApplicationCommandMetadata());
  let value = null;
  if (null != stateFromStores) {
    value = obj.get(stateFromStores.applicationId);
  }
  let tmp10 = value;
  first1 = value;
  for (const item10048 of tmp4) {
    let value3 = obj3.get(item10048);
    if (null != value3) {
      let value4 = obj.get(tmp12.applicationId);
      let tmp15 = value4;
      if (null != value4) {
        if (null == tmp10) {
          tmp10 = tmp15;
          first1 = tmp15;
        } else {
          let found;
          let id1;
          let id = tmp15.id;
          if (tmp10 != null) {
            id1 = tmp10.id;
          }
          if (id !== id1) {
            found = value4;
            obj5.return();
            break;
          }
          if (null == tmp10) {
            if (apps.length > 0) {
              let first = apps[0];
              tmp10 = first;
              first1 = first;
            }
            if (apps.length > 1) {
              found = apps[1];
            }
          } else if (null == found) {
            found = apps.find((id) => {
              let id1;
              id = id.id;
              if (first1 != null) {
                id1 = first1.id;
              }
              return id !== id1;
            });
          }
          if (null == tmp10) {
            first1 = activityApplications[0];
            tmp10 = first1;
            found = activityApplications[1];
          } else if (null == found) {
            found = activityApplications[0];
          }
          let obj4 = { firstBotApplication: tmp10, secondBotApplication: found };
          return obj4;
        }
      }
    }
    continue;
  }
});
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx");

export const useBannerBots = tmp2;