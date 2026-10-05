// === Module 9160: useGuildScheduledEvents ===

// Module 9160 (useGuildScheduledEvents)
import DurationsDefault from "Durations" /* 1102 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 7037 */;
import UpcomingEventNoticesStore from "UpcomingEventNoticesStore" /* 9161 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map;

let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ isGuildScheduledEventActive: metroImportDefault, StaticGuildEventIndexes: metroImportAll } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ GuildScheduledEventEntityTypes: unpackModuleId, GuildScheduledEventStatus: closure_12 } = GuildScheduledEventsConstants);
({ BasicPermissions: map1, GuildFeatures: closure_14 } = Constants);
let closure_15 = [];
let closure_16 = 15 * DurationsDefault.Millis.MINUTE;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildScheduledEventStore, PermissionStore, ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp9;
    let tmp10;
    if (cResult[2] === arg0) {
      tmp9 = cResult[3];
      tmp10 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStoresArray(first, tmp9, tmp10);
  }
  const fn = function s() {
    let found;
    const guild = GuildStore.getGuild(closure_0);
    if (null == guild) {
      found = closure_15;
    } else {
      let GUILD_EVENT_UPCOMINGResult = closure_1;
      const getGuildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex;
      if (closure_1 == null) {
        GUILD_EVENT_UPCOMINGResult = metroImportAll.GUILD_EVENT_UPCOMING(guild.id);
      }
      const guildScheduledEventsByIndex = getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult);
      found = guildScheduledEventsByIndex.filter((channel_id) => {
        channel_id = channel_id.channel_id;
        if (null == channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(channel_id);
          const canBasicChannelResult = null != basicChannel && closure_1_6.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          return canBasicChannelResult;
        }
      });
    }
    return found;
  };
  const items1 = [arg1, arg0];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore, GuildScheduledEventStore, PermissionStore, ChannelStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let found;
    const guild = GuildStore.getGuild(closure_0);
    if (null == guild) {
      found = closure_15;
    } else {
      let GUILD_EVENT_UPCOMINGResult = closure_1;
      const getGuildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex;
      if (closure_1 == null) {
        GUILD_EVENT_UPCOMINGResult = metroImportAll.GUILD_EVENT_UPCOMING(guild.id);
      }
      const guildScheduledEventsByIndex = getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult);
      found = guildScheduledEventsByIndex.filter((channel_id) => {
        channel_id = channel_id.channel_id;
        if (null == channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(channel_id);
          const canBasicChannelResult = null != basicChannel && closure_1_6.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          return canBasicChannelResult;
        }
      });
    }
    return found;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const basicChannel = ChannelStore.getBasicChannel(closure_0);
      if (null != basicChannel) {
        if (PermissionStore.canBasicChannel(map1.VIEW_CHANNEL, basicChannel)) {
          let guild_id;
          if (basicChannel != null) {
            guild_id = basicChannel.guild_id;
          }
          if (null == guild_id) {
            return null;
          } else {
            const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_ACTIVE(closure_0));
            let first = null;
            if (guildScheduledEventsByIndex.length > 0) {
              first = guildScheduledEventsByIndex[0];
            }
            return first;
          }
        }
      }
      return null;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const basicChannel = ChannelStore.getBasicChannel(closure_0);
    if (null != basicChannel) {
      if (PermissionStore.canBasicChannel(map1.VIEW_CHANNEL, basicChannel)) {
        let guild_id;
        if (basicChannel != null) {
          guild_id = basicChannel.guild_id;
        }
        if (null == guild_id) {
          return null;
        } else {
          const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_ACTIVE(closure_0));
          let first = null;
          if (guildScheduledEventsByIndex.length > 0) {
            first = guildScheduledEventsByIndex[0];
          }
          return first;
        }
      }
    }
    return null;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let closure_0;
  let closure_1;
  let first;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return GuildScheduledEventStore.getGuildScheduledEventsForGuild(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStoresArray) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    dependencyMap = map;
    const item = stateFromStoresArray.forEach((channel_id) => {
      channel_id = channel_id.channel_id;
      if (null != channel_id) {
        const result = closure_1.set(channel_id, channel_id);
      }
    });
    cResult[4] = stateFromStoresArray;
    cResult[5] = map;
    tmp8 = map;
  } else {
    dependencyMap = cResult[5];
  }
  return tmp8;
}) : ((arg0) => {
  let closure_0;
  let stateFromStoresArray;
  _require = arg0;
  const items = [GuildScheduledEventStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildScheduledEventStore.getGuildScheduledEventsForGuild(closure_0), items1);
  const items2 = [stateFromStoresArray];
  return react.useMemo(() => {
    map = new Map();
    const item = stateFromStoresArray.forEach((channel_id) => {
      channel_id = channel_id.channel_id;
      if (null != channel_id) {
        const result = map.set(channel_id, channel_id);
      }
    });
    return map;
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.GUILD_EVENT_UPCOMING(closure_0));
      return guildScheduledEventsByIndex.filter((entity_type) => {
        if (entity_type.entity_type !== constants.NONE) {
          if (entity_type.status === constants2.SCHEDULED) {
            if (null == entity_type.channel_id) {
              return true;
            } else {
              basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
              const canBasicChannelResult = null != basicChannel && closure_1_6.canBasicChannel(constants3.VIEW_CHANNEL, basicChannel);
              return canBasicChannelResult;
            }
          }
        }
        return false;
      });
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.GUILD_EVENT_UPCOMING(closure_0));
    return guildScheduledEventsByIndex.filter((entity_type) => {
      if (entity_type.entity_type !== constants.NONE) {
        if (entity_type.status === constants2.SCHEDULED) {
          if (null == entity_type.channel_id) {
            return true;
          } else {
            basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
            const canBasicChannelResult = null != basicChannel && closure_1_6.canBasicChannel(constants3.VIEW_CHANNEL, basicChannel);
            return canBasicChannelResult;
          }
        }
      }
      return false;
    });
  }, items1);
});
let closure_17 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(11);
  const tmp4 = closure_17(arg0);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UpcomingEventNoticesStore];
    const fn = function l() {
      return UpcomingEventNoticesStore.getAllEventDismissals();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UpcomingEventNoticesStore];
    const fn2 = function o() {
      return UpcomingEventNoticesStore.getAllUpcomingNoticeSeenTimes();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult4 = require("get initialized");
  const stateFromStoresObject1 = tmpResult4.useStateFromStoresObject(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildScheduledEventStore];
    cResult[4] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4) {
    const fn3 = function h() {
      let interestedInEventRecurrence;
      let reduced;
      if (null == closure_1) {
        reduced = {};
      } else {
        reduced = closure_1.reduce((acc, id) => {
          const obj2 = {};
          const obj = closure_1_0(closure_1_1[13]);
          const nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(id);
          const merged = Object.assign(acc);
          obj2[id.id] = interestedInEventRecurrence.isInterestedInEventRecurrence(id.id, nextRecurrenceIdInEvent);
          return obj2;
        }, {});
      }
      return reduced;
    };
    const items3 = [tmp4];
    cResult[5] = tmp4;
    cResult[6] = fn3;
    cResult[7] = items3;
    tmp16 = items3;
    tmp15 = fn3;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult5 = require("get initialized");
  const stateFromStoresObject2 = tmpResult5.useStateFromStoresObject(tmp13, tmp15, tmp16);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildStore];
    cResult[8] = items4;
    tmp18 = items4;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] !== arg0) {
    class G {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    cResult[9] = arg0;
    cResult[10] = G;
  } else {
    class G {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
  }
  const tmpResult6 = require("get initialized");
  const stateFromStores = tmpResult6.useStateFromStores(tmp18, G);
  let hasItem = null != stateFromStores;
  if (hasItem) {
    class G {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    hasItem = !obj6.has(constants3.COMMUNITY);
  }
  if (hasItem) {
    class G {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    hasItem = obj7.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  if (null != tmp4) {
    class G {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
  }
}) : ((arg0) => {
  let closure_0;
  let nextShownUpcomingEventNoticeType;
  let tmp8;
  _require = arg0;
  let arr = closure_17(arg0);
  let obj = require("get initialized");
  const items = [UpcomingEventNoticesStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => UpcomingEventNoticesStore.getAllEventDismissals());
  let obj2 = require("get initialized");
  const items1 = [UpcomingEventNoticesStore];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => UpcomingEventNoticesStore.getAllUpcomingNoticeSeenTimes());
  const items2 = [GuildScheduledEventStore];
  const items3 = [arr];
  const obj3 = require("get initialized");
  const stateFromStoresObject2 = obj3.useStateFromStoresObject(items2, () => {
    let interestedInEventRecurrence;
    let reduced;
    if (null == arr) {
      reduced = {};
    } else {
      reduced = arr.reduce((acc, id) => {
        const obj2 = {};
        const obj = closure_1_0(arr[13]);
        const nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(id);
        const merged = Object.assign(acc);
        obj2[id.id] = interestedInEventRecurrence.isInterestedInEventRecurrence(id.id, nextRecurrenceIdInEvent);
        return obj2;
      }, {});
    }
    return reduced;
  }, items3);
  const items4 = [GuildStore];
  const obj4 = require("get initialized");
  const stateFromStores = obj4.useStateFromStores(items4, () => GuildStore.getGuild(closure_0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = !features.has(constants3.COMMUNITY);
  }
  if (hasItem) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  if (null != arr) {
    if (null != stateFromStoresObject2) {
      if (hasItem) {
        let num = 0;
        if (0 < arr.length) {
          while (true) {
            tmp8 = arr[num];
            let tmp9 = stateFromStoresObject[tmp8.id];
            let tmp10 = stateFromStoresObject1[tmp8.id];
            let flag = stateFromStoresObject2[tmp8.id];
            if (flag == null) {
              flag = false;
            }
            let obj5 = require("GuildScheduledEventUtils");
            nextShownUpcomingEventNoticeType = obj5.getNextShownUpcomingEventNoticeType(tmp8, tmp9, tmp10, flag);
            if (null != nextShownUpcomingEventNoticeType) {
              break;
            } else {
              num = num + 1;
            }
          }
          return { upcomingEvent: tmp8, noticeType: nextShownUpcomingEventNoticeType };
        }
      }
    }
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (GuildScheduledEventStore !== undefined) {
        if (ChannelStore !== undefined) {
          closure_0 = ChannelStore;
          if (PermissionStore !== undefined) {
            let closure_1 = PermissionStore;
            const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.GUILD_EVENT_ACTIVE(tmp));
            return guildScheduledEventsByIndex.find((entity_type) => {
              if (entity_type.entity_type !== constants.NONE) {
                if (closure_2_7(entity_type)) {
                  if (null == entity_type.channel_id) {
                    return true;
                  } else {
                    basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
                    const canBasicChannelResult = null != basicChannel && closure_1.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel);
                    return canBasicChannelResult;
                  }
                }
              }
              return false;
            });
          }
        }
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (GuildScheduledEventStore !== undefined) {
      if (ChannelStore !== undefined) {
        closure_0 = ChannelStore;
        if (PermissionStore !== undefined) {
          let closure_1 = PermissionStore;
          const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.GUILD_EVENT_ACTIVE(tmp));
          return guildScheduledEventsByIndex.find((entity_type) => {
            if (entity_type.entity_type !== constants.NONE) {
              if (closure_2_7(entity_type)) {
                if (null == entity_type.channel_id) {
                  return true;
                } else {
                  basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
                  const canBasicChannelResult = null != basicChannel && closure_1.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel);
                  return canBasicChannelResult;
                }
              }
            }
            return false;
          });
        }
      }
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_UPCOMING(closure_0));
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildScheduledEventStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_UPCOMING(closure_0)), items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GuildScheduledEventStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let channel;
      const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.GUILD_EVENT_ACTIVE(closure_0));
      const found = guildScheduledEventsByIndex.find((channel_id) => null != channel.getChannel(channel_id.channel_id));
      let channel_id;
      const getChannel = ChannelStore.getChannel;
      if (found != null) {
        channel_id = found.channel_id;
      }
      return getChannel(channel_id);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore, GuildScheduledEventStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let channel;
    const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.GUILD_EVENT_ACTIVE(closure_0));
    const found = guildScheduledEventsByIndex.find((channel_id) => null != channel.getChannel(channel_id.channel_id));
    let channel_id;
    const getChannel = ChannelStore.getChannel;
    if (found != null) {
      channel_id = found.channel_id;
    }
    return getChannel(channel_id);
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let items2;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return Date.now();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [tmp6, dependencyMap] = react.useState(first);
  _slicedToArray(react.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      const interval = setInterval(() => {
        closure_1_1(Date.now());
      }, closure_1_16);
      return () => clearInterval(closure_0);
    };
    let items = [];
    cResult[1] = fn2;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = react.useEffect(tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildScheduledEventStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        let items;
        if (null == closure_0) {
          items = [];
        } else {
          items = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_UPCOMING(tmp));
        }
        return items;
      }
    }
    cResult[4] = arg0;
    cResult[5] = S;
  } else {
    class S {
      constructor() {
        let items;
        if (null == closure_0) {
          items = [];
        } else {
          items = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_UPCOMING(tmp));
        }
        return items;
      }
    }
  }
  if (cResult[6] === arg0) {
    let tmp13;
    class S {
      constructor() {
        let items;
        if (null == closure_0) {
          items = [];
        } else {
          items = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_UPCOMING(tmp));
        }
        return items;
      }
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp10, S, items2);
    if (cResult[9] !== stateFromStores) {
      class S {
        constructor() {
          let items;
          if (null == closure_0) {
            items = [];
          } else {
            items = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_UPCOMING(tmp));
          }
          return items;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(status) {
            let endTime;
            let startTime;
            const obj = closure_0(dependencyMap[15]);
            const eventSchedule = obj.getEventSchedule(status);
            ({ startTime, endTime } = eventSchedule);
            const getEventTimeData = closure_0(dependencyMap[13]).getEventTimeData;
            let toISOStringResult1;
            closure_0(dependencyMap[13]);
            const toISOStringResult = startTime.toISOString();
            if (endTime != null) {
              toISOStringResult1 = endTime.toISOString();
            }
            const eventTimeData = getEventTimeData(toISOStringResult, toISOStringResult1);
            let withinStartWindow = status.status !== constants.ACTIVE;
            const diffMinutes = eventTimeData.diffMinutes;
            if (withinStartWindow) {
              withinStartWindow = eventTimeData.withinStartWindow;
            }
            if (withinStartWindow) {
              withinStartWindow = diffMinutes < 15;
            }
            return withinStartWindow;
          }
        }
        cResult[11] = A;
      } else {
        class A {
          constructor(status) {
            let endTime;
            let startTime;
            const obj = closure_0(dependencyMap[15]);
            const eventSchedule = obj.getEventSchedule(status);
            ({ startTime, endTime } = eventSchedule);
            const getEventTimeData = closure_0(dependencyMap[13]).getEventTimeData;
            let toISOStringResult1;
            closure_0(dependencyMap[13]);
            const toISOStringResult = startTime.toISOString();
            if (endTime != null) {
              toISOStringResult1 = endTime.toISOString();
            }
            const eventTimeData = getEventTimeData(toISOStringResult, toISOStringResult1);
            let withinStartWindow = status.status !== constants.ACTIVE;
            const diffMinutes = eventTimeData.diffMinutes;
            if (withinStartWindow) {
              withinStartWindow = eventTimeData.withinStartWindow;
            }
            if (withinStartWindow) {
              withinStartWindow = diffMinutes < 15;
            }
            return withinStartWindow;
          }
        }
      }
      const found = stateFromStores.filter(A);
      cResult[9] = stateFromStores;
      cResult[10] = found;
      tmp13 = found;
    } else {
      class A {
        constructor(status) {
          let endTime;
          let startTime;
          const obj = closure_0(dependencyMap[15]);
          const eventSchedule = obj.getEventSchedule(status);
          ({ startTime, endTime } = eventSchedule);
          const getEventTimeData = closure_0(dependencyMap[13]).getEventTimeData;
          let toISOStringResult1;
          closure_0(dependencyMap[13]);
          const toISOStringResult = startTime.toISOString();
          if (endTime != null) {
            toISOStringResult1 = endTime.toISOString();
          }
          const eventTimeData = getEventTimeData(toISOStringResult, toISOStringResult1);
          let withinStartWindow = status.status !== constants.ACTIVE;
          const diffMinutes = eventTimeData.diffMinutes;
          if (withinStartWindow) {
            withinStartWindow = eventTimeData.withinStartWindow;
          }
          if (withinStartWindow) {
            withinStartWindow = diffMinutes < 15;
          }
          return withinStartWindow;
        }
      }
    }
    return tmp13;
  }
  items2 = [arg0, tmp6];
  cResult[6] = arg0;
  cResult[7] = tmp6;
  cResult[8] = items2;
}) : ((arg0) => {
  let closure_0;
  let stateFromStores;
  let tmp2;
  _require = arg0;
  const tmp = stateFromStores(react.useState(() => Date.now()), 2);
  [tmp2, dependencyMap] = tmp;
  const effect = react.useEffect(() => {
    const interval = setInterval(() => {
      closure_1_1(Date.now());
    }, closure_1_16);
    return () => clearInterval(closure_0);
  }, []);
  let obj = require("get initialized");
  let items = [GuildScheduledEventStore];
  const items1 = [arg0, tmp2];
  stateFromStores = obj.useStateFromStores(items, () => {
    let items;
    if (null == closure_0) {
      items = [];
    } else {
      items = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_UPCOMING(tmp));
    }
    return items;
  }, items1);
  const items2 = [stateFromStores];
  return react.useMemo(() => stateFromStores.filter((status) => {
    let endTime;
    let startTime;
    const obj = closure_1_0(closure_1_1[15]);
    const eventSchedule = obj.getEventSchedule(status);
    ({ startTime, endTime } = eventSchedule);
    const getEventTimeData = closure_1_0(closure_1_1[13]).getEventTimeData;
    let toISOStringResult1;
    closure_1_0(closure_1_1[13]);
    const toISOStringResult = startTime.toISOString();
    if (endTime != null) {
      toISOStringResult1 = endTime.toISOString();
    }
    const eventTimeData = getEventTimeData(toISOStringResult, toISOStringResult1);
    let withinStartWindow = status.status !== constants.ACTIVE;
    const diffMinutes = eventTimeData.diffMinutes;
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.withinStartWindow;
    }
    if (withinStartWindow) {
      withinStartWindow = diffMinutes < 15;
    }
    return withinStartWindow;
  }), items2);
});
function getGuildActiveEvent(guildId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = GuildScheduledEventStore;
  }
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = ChannelStore;
  }
  let closure_0 = tmp;
  let tmp2 = arg3;
  if (arg3 === undefined) {
    tmp2 = PermissionStore;
  }
  let closure_1 = tmp2;
  const guildScheduledEventsByIndex = obj.getGuildScheduledEventsByIndex(closure_8.GUILD_EVENT_ACTIVE(guildId));
  return guildScheduledEventsByIndex.find((entity_type) => {
    if (entity_type.entity_type !== constants.NONE) {
      if (closure_2_7(entity_type)) {
        if (null == entity_type.channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
          const canBasicChannelResult = null != basicChannel && closure_1.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel);
          return canBasicChannelResult;
        }
      }
    }
    return false;
  });
}
let result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEvents.tsx");

export default tmp5;
export const useActiveEvent = tmp6;
export const useActiveEventsByChannel = tmp7;
export const useGuildUpcomingEvents = tmp8;
export const useGuildUpcomingEventsNotice = tmp9;
export { getGuildActiveEvent };
export const useGuildActiveEvent = tmp10;
export const useGuildChannelScheduledEvents = tmp11;
export const useFirstActiveEventChannel = tmp12;
export const useImminentUpcomingGuildEvents = tmp13;