// === Module 8891: useGuildEvents ===

// Module 8891 (useGuildEvents)
import setDefault from "set" /* 687 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "getUncachedChannelPermissions" /* 4021 */;
import scheduledEventSort from "scheduledEventSort" /* 4370 */;
import closure_9 from "scheduledEventSort" /* 4370 */;
import closure_10 from "initialize" /* 8892 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ isGuildScheduledEventActive: error, StaticGuildEventIndexes: closure_8 } = scheduledEventSort);
({ GuildScheduledEventEntityTypes: unpackModuleId, GuildScheduledEventStatus: closure_12 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ BasicPermissions: map1, GuildFeatures: closure_14 } = ME);
let closure_15 = [];
let closure_16 = 15 * setDefault.Millis.MINUTE;
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEvents.tsx");

export default function useGuildEvents(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_5, closure_9, closure_6, closure_4];
  const items1 = [arg1, arg0];
  return _require(589).useStateFromStoresArray(items, () => {
    const guild = closure_1_5.getGuild(closure_0);
    if (null == guild) {
      let found = closure_1_15;
    } else {
      let GUILD_EVENT_UPCOMINGResult = closure_1;
      if (closure_1 == null) {
        GUILD_EVENT_UPCOMINGResult = closure_1_8.GUILD_EVENT_UPCOMING(guild.id);
      }
      const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult);
      found = guildScheduledEventsByIndex.filter((channel_id) => {
        channel_id = channel_id.channel_id;
        if (null == channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(channel_id);
          let canBasicChannelResult = null != basicChannel;
          if (canBasicChannelResult) {
            canBasicChannelResult = closure_6.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          }
          return canBasicChannelResult;
        }
      });
    }
    return found;
  }, items1);
};
export const useActiveEvent = function useActiveEvent(id) {
  const _require = id;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    const basicChannel = closure_1_4.getBasicChannel(closure_0);
    if (null != basicChannel) {
      if (closure_1_6.canBasicChannel(closure_1_13.VIEW_CHANNEL, basicChannel)) {
        let guild_id;
        if (basicChannel != null) {
          guild_id = basicChannel.guild_id;
        }
        if (null == guild_id) {
          return null;
        } else {
          const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.CHANNEL_EVENT_ACTIVE(closure_0));
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
};
export const useActiveEventsByChannel = function useActiveEventsByChannel(arg0) {
  const _require = arg0;
  const items = [closure_9];
  const items1 = [arg0];
  stateFromStoresArray = _require(stateFromStoresArray[10]).useStateFromStoresArray(items, () => closure_1_9.getGuildScheduledEventsForGuild(closure_0), items1);
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const map = new Map();
    const item = stateFromStoresArray.forEach((channel_id) => {
      channel_id = channel_id.channel_id;
      if (null != channel_id) {
        const result = map.set(channel_id, channel_id);
      }
    });
    return map;
  }, items2);
};
export const useGuildUpcomingEvents = function useGuildUpcomingEvents(arg0) {
  const _require = arg0;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [arg0];
  return _require(589).useStateFromStoresArray(items, () => {
    const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.GUILD_EVENT_UPCOMING(closure_0));
    return guildScheduledEventsByIndex.filter((entity_type) => {
      if (entity_type.entity_type !== constants.NONE) {
        if (entity_type.status === constants2.SCHEDULED) {
          if (null == entity_type.channel_id) {
            return true;
          } else {
            basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
            let canBasicChannelResult = null != basicChannel;
            if (canBasicChannelResult) {
              canBasicChannelResult = closure_6.canBasicChannel(constants3.VIEW_CHANNEL, basicChannel);
            }
            return canBasicChannelResult;
          }
        }
      }
      return false;
    });
  }, items1);
};
export const useGuildUpcomingEventsNotice = function useGuildUpcomingEventsNotice(arg0) {
  let nextShownUpcomingEventNoticeType;
  let tmp8;
  const _require = arg0;
  let obj = _require(stateFromStoresArray[10]);
  const items = [closure_9, closure_4, closure_6];
  const items1 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.GUILD_EVENT_UPCOMING(closure_0));
    return guildScheduledEventsByIndex.filter((entity_type) => {
      if (entity_type.entity_type !== constants.NONE) {
        if (entity_type.status === constants2.SCHEDULED) {
          if (null == entity_type.channel_id) {
            return true;
          } else {
            basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
            let canBasicChannelResult = null != basicChannel;
            if (canBasicChannelResult) {
              canBasicChannelResult = closure_6.canBasicChannel(constants3.VIEW_CHANNEL, basicChannel);
            }
            return canBasicChannelResult;
          }
        }
      }
      return false;
    });
  }, items1);
  const items2 = [closure_10];
  const stateFromStoresObject = _require(stateFromStoresArray[10]).useStateFromStoresObject(items2, () => store.getAllEventDismissals());
  const obj2 = _require(stateFromStoresArray[10]);
  const items3 = [closure_10];
  const stateFromStoresObject1 = _require(stateFromStoresArray[10]).useStateFromStoresObject(items3, () => store.getAllUpcomingNoticeSeenTimes());
  const obj3 = _require(stateFromStoresArray[10]);
  const items4 = [closure_9];
  const items5 = [stateFromStoresArray];
  const stateFromStoresObject2 = _require(stateFromStoresArray[10]).useStateFromStoresObject(items4, () => {
    if (null == stateFromStoresArray) {
      let reduced = {};
    } else {
      reduced = stateFromStoresArray.reduce((arg0, id) => {
        let obj = callback(table[11]);
        obj = {};
        const nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(id);
        const merged = Object.assign(arg0);
        obj[id.id] = interestedInEventRecurrence.isInterestedInEventRecurrence(id.id, nextRecurrenceIdInEvent);
        return obj;
      }, {});
    }
    return reduced;
  }, items5);
  const obj4 = _require(stateFromStoresArray[10]);
  const items6 = [closure_5];
  const stateFromStores = _require(stateFromStoresArray[10]).useStateFromStores(items6, () => closure_1_5.getGuild(closure_0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = !features.has(constants.COMMUNITY);
  }
  if (hasItem) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants.INTERNAL_EMPLOYEE_ONLY);
  }
  if (null != stateFromStoresArray) {
    if (null != stateFromStoresObject2) {
      if (hasItem) {
        let num = 0;
        if (0 < stateFromStoresArray.length) {
          while (true) {
            tmp8 = stateFromStoresArray[num];
            let tmp9 = stateFromStoresObject[tmp8.id];
            let tmp10 = stateFromStoresObject1[tmp8.id];
            let flag = stateFromStoresObject2[tmp8.id];
            let tmp11 = num;
            if (flag == null) {
              flag = false;
            }
            let tmp12 = _require;
            let tmp13 = stateFromStoresArray;
            let obj6 = _require(stateFromStoresArray[12]);
            let tmp14 = obj6;
            let tmp15 = tmp8;
            let tmp16 = tmp9;
            let tmp17 = tmp10;
            let tmp18 = flag;
            nextShownUpcomingEventNoticeType = obj6.getNextShownUpcomingEventNoticeType(tmp8, tmp9, tmp10, flag);
            if (null != nextShownUpcomingEventNoticeType) {
              break;
            } else {
              num = num + 1;
            }
          }
          obj = { upcomingEvent: null, noticeType: null };
          obj[0] = tmp8;
          obj[1] = nextShownUpcomingEventNoticeType;
          return obj;
        }
      }
    }
  }
};
export const useGuildActiveEvent = function useGuildActiveEvent(guild_id) {
  const _require = guild_id;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [guild_id];
  return _require(589).useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.GUILD_EVENT_ACTIVE(closure_0));
    return guildScheduledEventsByIndex.find((entity_type) => {
      if (entity_type.entity_type !== constants.NONE) {
        if (callback(entity_type)) {
          if (null == entity_type.channel_id) {
            return true;
          } else {
            basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
            let canBasicChannelResult = null != basicChannel;
            if (canBasicChannelResult) {
              canBasicChannelResult = closure_6.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel);
            }
            return canBasicChannelResult;
          }
        }
      }
      return false;
    });
  }, items1);
};
export const useGuildChannelScheduledEvents = function useGuildChannelScheduledEvents(id) {
  const _require = id;
  const items = [closure_9];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.CHANNEL_EVENT_UPCOMING(closure_0)), items1);
};
export const useFirstActiveEventChannel = function useFirstActiveEventChannel(id) {
  const _require = id;
  const items = [closure_4, closure_9];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.GUILD_EVENT_ACTIVE(closure_0));
    const found = guildScheduledEventsByIndex.find((channel_id) => null != channel.getChannel(channel_id.channel_id));
    let channel_id;
    if (found != null) {
      channel_id = found.channel_id;
    }
    return closure_1_4.getChannel(channel_id);
  }, items1);
};
export const useImminentUpcomingGuildEvents = function useImminentUpcomingGuildEvents(id) {
  const _require = id;
  [tmp2, dependencyMap] = stateFromStores(React.useState(() => Date.now()), 2);
  const effect = React.useEffect(() => {
    const interval = setInterval(() => {
      callback(Date.now());
    }, closure_1_16);
    return () => clearInterval(closure_0);
  }, []);
  const tmp = stateFromStores(React.useState(() => Date.now()), 2);
  let items = [closure_9];
  const items1 = [id, tmp2];
  stateFromStores = _require(589).useStateFromStores(items, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.CHANNEL_EVENT_UPCOMING(tmp));
    }
    return items;
  }, items1);
  const items2 = [stateFromStores];
  return React.useMemo(() => stateFromStores.filter((status) => {
    const eventSchedule = callback(8791).getEventSchedule(status);
    ({ startTime, endTime } = eventSchedule);
    const obj = callback(8791);
    let toISOStringResult1;
    const obj2 = callback(8785);
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
};