// === Module 9662: useGuildScheduledEvents ===

// Module 9662 (useGuildScheduledEvents)
import DurationsDefault from "Durations" /* 1090 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import UpcomingEventNoticesStore from "UpcomingEventNoticesStore" /* 9663 */;

const require = fn;
let GuildScheduledEventStore = fn(7526);
({ isGuildScheduledEventActive: closure_7, StaticGuildEventIndexes: closure_8 } = GuildScheduledEventStore);
const GuildScheduledEventsConstants = fn(1963);
({ GuildScheduledEventEntityTypes: closure_11, GuildScheduledEventStatus: closure_12 } = GuildScheduledEventsConstants);
const Constants = fn(1074);
({ BasicPermissions: map1, GuildFeatures: closure_14 } = Constants);
let closure_15 = [];
let closure_16 = 15 * DurationsDefault.Millis.MINUTE;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEvents.tsx");

export default function useGuildEvents(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore, GuildScheduledEventStore, PermissionStore, ChannelStore];
  const items1 = [arg1, arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    if (null == guild) {
      let found = closure_15;
    } else {
      let GUILD_EVENT_UPCOMINGResult = closure_1;
      if (closure_1 == null) {
        GUILD_EVENT_UPCOMINGResult = React6.GUILD_EVENT_UPCOMING(guild.id);
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
};
export const useActiveEvent = function useActiveEvent(id) {
  _require = id;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    const basicChannel = ChannelStore.getBasicChannel(closure_0);
    if (null != basicChannel) {
      if (PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel)) {
        let guild_id;
        if (basicChannel != null) {
          guild_id = basicChannel.guild_id;
        }
        if (null == guild_id) {
          return null;
        } else {
          const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(React6.CHANNEL_EVENT_ACTIVE(closure_0));
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
};
export const useGuildUpcomingEvents = function useGuildUpcomingEvents(arg0) {
  _require = arg0;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(React6.GUILD_EVENT_UPCOMING(closure_0));
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
};
export const useGuildUpcomingEventsNotice = function useGuildUpcomingEventsNotice(arg0) {
  let nextShownUpcomingEventNoticeType;
  let tmp8;
  _require = arg0;
  closure_129_0 = arg0;
  let obj = require("initialize");
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(React6.GUILD_EVENT_UPCOMING(closure_0));
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
  const items2 = [UpcomingEventNoticesStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => UpcomingEventNoticesStore.getAllEventDismissals());
  const obj2 = require("initialize");
  const items3 = [UpcomingEventNoticesStore];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items3, () => UpcomingEventNoticesStore.getAllUpcomingNoticeSeenTimes());
  const obj3 = require("initialize");
  const items4 = [GuildScheduledEventStore];
  const items5 = [stateFromStoresArray];
  const stateFromStoresObject2 = require("initialize").useStateFromStoresObject(items4, () => {
    if (null == stateFromStoresArray) {
      let reduced = {};
    } else {
      reduced = stateFromStoresArray.reduce((acc, id) => {
        closure_1_0(stateFromStoresArray[11]);
        const obj = {};
        const nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(id);
        const merged = Object.assign(acc);
        obj[id.id] = interestedInEventRecurrence.isInterestedInEventRecurrence(id.id, nextRecurrenceIdInEvent);
        return obj;
      }, {});
    }
    return reduced;
  }, items5);
  const obj4 = require("initialize");
  const items6 = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items6, () => GuildStore.getGuild(closure_0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = !features.has(constants2.COMMUNITY);
  }
  if (hasItem) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants2.INTERNAL_EMPLOYEE_ONLY);
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
            if (flag == null) {
              flag = false;
            }
            let obj6 = require("GuildScheduledEventUtils");
            nextShownUpcomingEventNoticeType = obj6.getNextShownUpcomingEventNoticeType(tmp8, tmp9, tmp10, flag);
            if (null != nextShownUpcomingEventNoticeType) {
              break;
            } else {
              num = num + 1;
            }
          }
          obj = { upcomingEvent: tmp8, noticeType: nextShownUpcomingEventNoticeType };
          return obj;
        }
      }
    }
  }
};
export const getGuildActiveEvent = function getGuildActiveEvent(guildId) {
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
};
export const useGuildActiveEvent = function useGuildActiveEvent(guild_id) {
  _require = guild_id;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [guild_id];
  return require("initialize").useStateFromStores(items, () => {
    if (GuildScheduledEventStore !== undefined) {
      if (tmp2 !== undefined) {
        let basicChannel = tmp2;
        if (tmp3 !== undefined) {
          closure_1 = tmp3;
          const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(React6.GUILD_EVENT_ACTIVE(tmp));
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
};
export const useGuildChannelScheduledEvents = function useGuildChannelScheduledEvents(id) {
  _require = id;
  const items = [GuildScheduledEventStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEventsByIndex(React6.CHANNEL_EVENT_UPCOMING(closure_0)), items1);
};
export const useFirstActiveEventChannel = function useFirstActiveEventChannel(id) {
  _require = id;
  const items = [ChannelStore, GuildScheduledEventStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(React6.GUILD_EVENT_ACTIVE(closure_0));
    const found = guildScheduledEventsByIndex.find((channel_id) => null != channel.getChannel(channel_id.channel_id));
    let channel_id;
    if (found != null) {
      channel_id = found.channel_id;
    }
    return ChannelStore.getChannel(channel_id);
  }, items1);
};
export const useImminentUpcomingGuildEvents = function useImminentUpcomingGuildEvents(id) {
  _require = id;
  [tmp2, dependencyMap] = stateFromStores(noop.useState(() => Date.now()), 2);
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => {
      closure_1_1(Date.now());
    }, closure_1_16);
    return () => clearInterval(closure_0);
  }, []);
  const tmp = stateFromStores(noop.useState(() => Date.now()), 2);
  let items = [GuildScheduledEventStore];
  const items1 = [id, tmp2];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = GuildScheduledEventStore.getGuildScheduledEventsByIndex(React6.CHANNEL_EVENT_UPCOMING(tmp));
    }
    return items;
  }, items1);
  const items2 = [stateFromStores];
  return noop.useMemo(() => stateFromStores.filter((status) => {
    const eventSchedule = id(9668).getEventSchedule(status);
    ({ startTime, endTime } = eventSchedule);
    const obj = id(9668);
    let toISOStringResult1;
    const obj2 = id(9665);
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