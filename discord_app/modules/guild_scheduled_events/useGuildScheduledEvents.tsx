// === Module 9160: useGuildScheduledEvents ===

// Module 9160 (useGuildScheduledEvents)
import DurationsDefault from "Durations" /* 1102 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 7037 */;
import UpcomingEventNoticesStore from "UpcomingEventNoticesStore" /* 9161 */;

const require = globalThis.__r;

const require = fn;
let GuildScheduledEventStore = fn(7037);
({ isGuildScheduledEventActive: closure_7, StaticGuildEventIndexes: closure_8 } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const GuildScheduledEventsConstants = fn(2057);
({ GuildScheduledEventEntityTypes: closure_11, GuildScheduledEventStatus: closure_12 } = GuildScheduledEventsConstants);
const Constants = fn(1085);
({ BasicPermissions: map1, GuildFeatures: closure_14 } = Constants);
let closure_15 = [];
let closure_16 = 15 * DurationsDefault.Millis.MINUTE;
fn(558);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildScheduledEventStore, PermissionStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp9 = cResult[3];
      let tmp10 = cResult[4];
    }
    return tmp(504).useStateFromStoresArray(first, tmp9, tmp10);
  }
  const fn = function s() {
    guild = GuildStore.getGuild(closure_0);
    if (null == guild) {
      let found = closure_15;
    } else {
      let GUILD_EVENT_UPCOMINGResult = closure_1;
      if (closure_1 == null) {
        GUILD_EVENT_UPCOMINGResult = closure_2_8.GUILD_EVENT_UPCOMING(guild.id);
      }
      const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult);
      found = guildScheduledEventsByIndex.filter((channel_id) => {
        channel_id = channel_id.channel_id;
        if (null == channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(channel_id);
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = closure_1_6.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
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
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore, GuildScheduledEventStore, PermissionStore, ChannelStore];
  const items1 = [arg1, arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    guild = GuildStore.getGuild(closure_0);
    if (null == guild) {
      let found = closure_15;
    } else {
      let GUILD_EVENT_UPCOMINGResult = closure_1;
      if (closure_1 == null) {
        GUILD_EVENT_UPCOMINGResult = closure_2_8.GUILD_EVENT_UPCOMING(guild.id);
      }
      const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult);
      found = guildScheduledEventsByIndex.filter((channel_id) => {
        channel_id = channel_id.channel_id;
        if (null == channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(channel_id);
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = closure_1_6.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          return canBasicChannelResult;
        }
      });
    }
    return found;
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const basicChannel = ChannelStore.getBasicChannel(closure_0);
      if (null != basicChannel) {
        if (PermissionStore.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel)) {
          let guild_id;
          if (basicChannel != null) {
            guild_id = basicChannel.guild_id;
          }
          if (null == guild_id) {
            return null;
          } else {
            const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.CHANNEL_EVENT_ACTIVE(closure_0));
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
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const basicChannel = ChannelStore.getBasicChannel(closure_0);
    if (null != basicChannel) {
      if (PermissionStore.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel)) {
        let guild_id;
        if (basicChannel != null) {
          guild_id = basicChannel.guild_id;
        }
        if (null == guild_id) {
          return null;
        } else {
          const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.CHANNEL_EVENT_ACTIVE(closure_0));
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
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.GUILD_EVENT_UPCOMING(closure_0));
      return guildScheduledEventsByIndex.filter((entity_type) => {
        if (entity_type.entity_type !== constants.NONE) {
          if (entity_type.status === constants2.SCHEDULED) {
            if (null == entity_type.channel_id) {
              return true;
            } else {
              basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
              let canBasicChannelResult = null != basicChannel;
              if (canBasicChannelResult) {
                canBasicChannelResult = closure_1_6.canBasicChannel(constants3.VIEW_CHANNEL, basicChannel);
              }
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
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.GUILD_EVENT_UPCOMING(closure_0));
    return guildScheduledEventsByIndex.filter((entity_type) => {
      if (entity_type.entity_type !== constants.NONE) {
        if (entity_type.status === constants2.SCHEDULED) {
          if (null == entity_type.channel_id) {
            return true;
          } else {
            basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
            let canBasicChannelResult = null != basicChannel;
            if (canBasicChannelResult) {
              canBasicChannelResult = closure_1_6.canBasicChannel(constants3.VIEW_CHANNEL, basicChannel);
            }
            return canBasicChannelResult;
          }
        }
      }
      return false;
    });
  }, items1);
});
let closure_17 = tmp8;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStoresArray) {
    const _Map = Map;
    const map = new Map();
    dependencyMap = map;
    const item = stateFromStoresArray.forEach((channel_id) => {
      channel_id = channel_id.channel_id;
      if (null != channel_id) {
        const result = closure_1.set(channel_id, channel_id);
      }
    });
    cResult[4] = stateFromStoresArray;
    cResult[5] = map;
    const tmp8 = map;
  } else {
    dependencyMap = cResult[5];
  }
  return tmp8;
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildScheduledEventStore];
  const items1 = [arg0];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => GuildScheduledEventStore.getGuildScheduledEventsForGuild(closure_0), items1);
  const items2 = [stateFromStoresArray];
  return noop.useMemo(() => {
    const map = new Map();
    const item = stateFromStoresArray.forEach((channel_id) => {
      channel_id = channel_id.channel_id;
      if (null != channel_id) {
        const result = map.set(channel_id, channel_id);
      }
    });
    return map;
  }, items2);
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(11);
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
  const obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UpcomingEventNoticesStore];
    const fn2 = function o() {
      return UpcomingEventNoticesStore.getAllUpcomingNoticeSeenTimes();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildScheduledEventStore];
    cResult[4] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4) {
    const fn3 = function h() {
      if (null == closure_1) {
        let reduced = {};
      } else {
        reduced = closure_1.reduce((acc, id) => {
          const obj2 = {};
          const nextRecurrenceIdInEvent = closure_1_0(closure_1_1[13]).getNextRecurrenceIdInEvent(id);
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
    let tmp16 = items3;
    let tmp15 = fn3;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult4 = require("initialize");
  const stateFromStoresObject2 = require("initialize").useStateFromStoresObject(tmp13, tmp15, tmp16);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildStore];
    cResult[8] = items4;
    let tmp18 = items4;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] !== arg0) {
    class G {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
    cResult[9] = arg0;
    cResult[10] = G;
  } else {
    class G {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
  }
  const tmpResult5 = require("initialize");
  const stateFromStores = require("initialize").useStateFromStores(tmp18, G);
  let hasItem = null != stateFromStores;
  if (hasItem) {
    class G {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
    hasItem = !obj6.has(constants3.COMMUNITY);
  }
  if (hasItem) {
    class G {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
    hasItem = obj7.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  if (null != tmp4) {
    class G {
      constructor() {
        return closure_5.getGuild(closure_0);
      }
    }
  }
  const tmpResult6 = require("initialize");
}) : ((arg0) => {
  let nextShownUpcomingEventNoticeType;
  let tmp8;
  _require = arg0;
  const arr = closure_17(arg0);
  const items = [UpcomingEventNoticesStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => UpcomingEventNoticesStore.getAllEventDismissals());
  const obj = require("initialize");
  const items1 = [UpcomingEventNoticesStore];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items1, () => UpcomingEventNoticesStore.getAllUpcomingNoticeSeenTimes());
  let obj2 = require("initialize");
  const items2 = [GuildScheduledEventStore];
  const items3 = [arr];
  const stateFromStoresObject2 = require("initialize").useStateFromStoresObject(items2, () => {
    if (null == arr) {
      let reduced = {};
    } else {
      reduced = arr.reduce((acc, id) => {
        const obj2 = {};
        const nextRecurrenceIdInEvent = closure_1_0(arr[13]).getNextRecurrenceIdInEvent(id);
        const merged = Object.assign(acc);
        obj2[id.id] = interestedInEventRecurrence.isInterestedInEventRecurrence(id.id, nextRecurrenceIdInEvent);
        return obj2;
      }, {});
    }
    return reduced;
  }, items3);
  const obj3 = require("initialize");
  const items4 = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items4, () => GuildStore.getGuild(closure_0));
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
          const obj6 = { upcomingEvent: tmp8, noticeType: nextShownUpcomingEventNoticeType };
          return obj6;
        }
      }
    }
  }
  const obj4 = require("initialize");
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (GuildScheduledEventStore !== undefined) {
        if (ChannelStore !== undefined) {
          closure_0 = ChannelStore;
          if (PermissionStore !== undefined) {
            closure_1 = PermissionStore;
            const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.GUILD_EVENT_ACTIVE(tmp));
            return guildScheduledEventsByIndex.find((entity_type) => {
              if (entity_type.entity_type !== constants.NONE) {
                if (closure_2_7(entity_type)) {
                  if (null == entity_type.channel_id) {
                    return true;
                  } else {
                    basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
                    let canBasicChannelResult = null != basicChannel;
                    if (canBasicChannelResult) {
                      canBasicChannelResult = closure_1.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel);
                    }
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
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (GuildScheduledEventStore !== undefined) {
      if (ChannelStore !== undefined) {
        let basicChannel = ChannelStore;
        if (PermissionStore !== undefined) {
          closure_1 = PermissionStore;
          const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.GUILD_EVENT_ACTIVE(tmp));
          return guildScheduledEventsByIndex.find((entity_type) => {
            if (entity_type.entity_type !== constants.NONE) {
              if (closure_2_7(entity_type)) {
                if (null == entity_type.channel_id) {
                  return true;
                } else {
                  basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
                  let canBasicChannelResult = null != basicChannel;
                  if (canBasicChannelResult) {
                    canBasicChannelResult = closure_1.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel);
                  }
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
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.CHANNEL_EVENT_UPCOMING(closure_0));
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildScheduledEventStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.CHANNEL_EVENT_UPCOMING(closure_0)), items1);
});
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GuildScheduledEventStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.GUILD_EVENT_ACTIVE(closure_0));
      const found = guildScheduledEventsByIndex.find((channel_id) => null != channel.getChannel(channel_id.channel_id));
      let channel_id;
      if (found != null) {
        channel_id = found.channel_id;
      }
      return ChannelStore.getChannel(channel_id);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelStore, GuildScheduledEventStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.GUILD_EVENT_ACTIVE(closure_0));
    const found = guildScheduledEventsByIndex.find((channel_id) => null != channel.getChannel(channel_id.channel_id));
    let channel_id;
    if (found != null) {
      channel_id = found.channel_id;
    }
    return ChannelStore.getChannel(channel_id);
  }, items1);
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
  closure_0 = tmp;
  let tmp2 = arg3;
  if (arg3 === undefined) {
    tmp2 = PermissionStore;
  }
  closure_1 = tmp2;
  const guildScheduledEventsByIndex = obj.getGuildScheduledEventsByIndex(closure_8.GUILD_EVENT_ACTIVE(guildId));
  return guildScheduledEventsByIndex.find((entity_type) => {
    if (entity_type.entity_type !== constants.NONE) {
      if (closure_2_7(entity_type)) {
        if (null == entity_type.channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = closure_1.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel);
          }
          return canBasicChannelResult;
        }
      }
    }
    return false;
  });
}
const size = fn(2);
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
export const useImminentUpcomingGuildEvents = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return Date.now();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let obj = require("c");
  const tmp = _require;
  [tmp6, dependencyMap] = noop.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      const interval = setInterval(() => {
        dependencyMap(Date.now());
      }, closure_1_16);
      return () => clearInterval(closure_0);
    };
    let items = [];
    cResult[1] = fn2;
    cResult[2] = items;
    let tmp8 = items;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildScheduledEventStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        if (null == closure_0) {
          items = [];
        } else {
          tmp2 = closure_9;
          tmp3 = StaticGuildEventIndexes;
          items = closure_9.getGuildScheduledEventsByIndex(StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(tmp));
        }
        return items;
      }
    }
    cResult[4] = arg0;
    cResult[5] = S;
  } else {
    class S {
      constructor() {
        if (null == closure_0) {
          items = [];
        } else {
          tmp2 = closure_9;
          tmp3 = StaticGuildEventIndexes;
          items = closure_9.getGuildScheduledEventsByIndex(StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(tmp));
        }
        return items;
      }
    }
  }
  if (cResult[6] === arg0) {
    class S {
      constructor() {
        if (null == closure_0) {
          items = [];
        } else {
          tmp2 = closure_9;
          tmp3 = StaticGuildEventIndexes;
          items = closure_9.getGuildScheduledEventsByIndex(StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(tmp));
        }
        return items;
      }
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp10, S, items2);
    if (cResult[9] !== stateFromStores) {
      class S {
        constructor() {
          if (null == closure_0) {
            items = [];
          } else {
            tmp2 = closure_9;
            tmp3 = StaticGuildEventIndexes;
            items = closure_9.getGuildScheduledEventsByIndex(StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(tmp));
          }
          return items;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(arg0) {
            obj = closure_0(closure_1[15]);
            eventSchedule = obj.getEventSchedule(arg0);
            ({ startTime, endTime } = eventSchedule);
            obj2 = closure_0(closure_1[13]);
            toISOStringResult1 = undefined;
            toISOStringResult = startTime.toISOString();
            if (endTime != null) {
              toISOStringResult1 = endTime.toISOString();
            }
            eventTimeData = obj2.getEventTimeData(toISOStringResult, toISOStringResult1);
            withinStartWindow = arg0.status !== closure_1_12.ACTIVE;
            if (withinStartWindow) {
              withinStartWindow = eventTimeData.withinStartWindow;
            }
            if (withinStartWindow) {
              num = 15;
              withinStartWindow = eventTimeData.diffMinutes < 15;
            }
            return withinStartWindow;
          }
        }
        cResult[11] = A;
      } else {
        class A {
          constructor(arg0) {
            obj = closure_0(closure_1[15]);
            eventSchedule = obj.getEventSchedule(arg0);
            ({ startTime, endTime } = eventSchedule);
            obj2 = closure_0(closure_1[13]);
            toISOStringResult1 = undefined;
            toISOStringResult = startTime.toISOString();
            if (endTime != null) {
              toISOStringResult1 = endTime.toISOString();
            }
            eventTimeData = obj2.getEventTimeData(toISOStringResult, toISOStringResult1);
            withinStartWindow = arg0.status !== closure_1_12.ACTIVE;
            if (withinStartWindow) {
              withinStartWindow = eventTimeData.withinStartWindow;
            }
            if (withinStartWindow) {
              num = 15;
              withinStartWindow = eventTimeData.diffMinutes < 15;
            }
            return withinStartWindow;
          }
        }
      }
      const found = stateFromStores.filter(A);
      cResult[9] = stateFromStores;
      cResult[10] = found;
    } else {
      class A {
        constructor(arg0) {
          obj = closure_0(closure_1[15]);
          eventSchedule = obj.getEventSchedule(arg0);
          ({ startTime, endTime } = eventSchedule);
          obj2 = closure_0(closure_1[13]);
          toISOStringResult1 = undefined;
          toISOStringResult = startTime.toISOString();
          if (endTime != null) {
            toISOStringResult1 = endTime.toISOString();
          }
          eventTimeData = obj2.getEventTimeData(toISOStringResult, toISOStringResult1);
          withinStartWindow = arg0.status !== closure_1_12.ACTIVE;
          if (withinStartWindow) {
            withinStartWindow = eventTimeData.withinStartWindow;
          }
          if (withinStartWindow) {
            num = 15;
            withinStartWindow = eventTimeData.diffMinutes < 15;
          }
          return withinStartWindow;
        }
      }
    }
    const tmpResult = tmp(504);
  }
  items2 = [arg0, tmp6];
  cResult[6] = arg0;
  cResult[7] = tmp6;
  cResult[8] = items2;
  const tmp5 = _slicedToArray(noop.useState(first), 2);
}) : ((arg0) => {
  _require = arg0;
  [tmp2, dependencyMap] = stateFromStores(noop.useState(() => Date.now()), 2);
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => {
      closure_1_1(Date.now());
    }, closure_1_16);
    return () => clearInterval(closure_0);
  }, []);
  const tmp = stateFromStores(noop.useState(() => Date.now()), 2);
  let items = [GuildScheduledEventStore];
  const items1 = [arg0, tmp2];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = GuildScheduledEventStore.getGuildScheduledEventsByIndex(closure_2_8.CHANNEL_EVENT_UPCOMING(tmp));
    }
    return items;
  }, items1);
  const items2 = [stateFromStores];
  return noop.useMemo(() => stateFromStores.filter((status) => {
    const eventSchedule = closure_1_0(9166).getEventSchedule(status);
    ({ startTime, endTime } = eventSchedule);
    const obj = closure_1_0(9166);
    let toISOStringResult1;
    const obj2 = closure_1_0(9163);
    if (endTime != null) {
      toISOStringResult1 = endTime.toISOString();
    }
    const eventTimeData = obj2.getEventTimeData(startTime.toISOString(), toISOStringResult1);
    let withinStartWindow = status.status !== constants.ACTIVE;
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.withinStartWindow;
    }
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.diffMinutes < 15;
    }
    return withinStartWindow;
  }), items2);
});