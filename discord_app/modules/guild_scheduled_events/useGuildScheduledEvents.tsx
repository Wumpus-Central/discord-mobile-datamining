// discord_app/modules/guild_scheduled_events/useGuildScheduledEvents.tsx
import obj132Default from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import scheduledEventSort from "GuildScheduledEventStore.tsx";
import scheduledEventSort2 from "GuildScheduledEventStore.tsx";
import initialize from "UpcomingEventNoticesStore.tsx";
import GUILD_EVENT_MAX_NAME_LENGTH from "GuildScheduledEventsConstants.tsx";
import ME from "../../Constants.tsx";

const require = fn;
({ isGuildScheduledEventActive: error, StaticGuildEventIndexes: closure_8 } = scheduledEventSort);
({ GuildScheduledEventEntityTypes: unpackModuleId, GuildScheduledEventStatus: closure_12 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ BasicPermissions: map1, GuildFeatures: closure_14 } = ME);
let closure_15 = [];
let closure_16 = 15 * obj132Default.Millis.MINUTE;
let result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEvents.tsx");

export default function useGuildEvents(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_5, closure_9, closure_6, closure_4];
  const items1 = [arg1, arg0];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    const guild = closure_1_5.getGuild(closure_0);
    if (null == guild) {
      let found = closure_1_15;
    } else {
      let GUILD_EVENT_UPCOMINGResult = closure_1;
      if (closure_1 == null) {
        GUILD_EVENT_UPCOMINGResult = closure_1_8.GUILD_EVENT_UPCOMING(guild.id);
      }
      const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult);
      found = guildScheduledEventsByIndex.filter((item, index) => {
        const channel_id = item.channel_id;
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
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
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
    const item = stateFromStoresArray.forEach((item, index) => {
      const channel_id = item.channel_id;
      if (null != channel_id) {
        const result = map.set(channel_id, item);
      }
    });
    return map;
  }, items2);
};
export const useGuildUpcomingEvents = function useGuildUpcomingEvents(arg0) {
  const _require = arg0;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [arg0];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.GUILD_EVENT_UPCOMING(closure_0));
    return guildScheduledEventsByIndex.filter((item, index) => {
      if (item.entity_type !== constants.NONE) {
        if (item.status === constants2.SCHEDULED) {
          if (null == item.channel_id) {
            return true;
          } else {
            basicChannel = basicChannel.getBasicChannel(item.channel_id);
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
    return guildScheduledEventsByIndex.filter((item, index) => {
      if (item.entity_type !== constants.NONE) {
        if (item.status === constants2.SCHEDULED) {
          if (null == item.channel_id) {
            return true;
          } else {
            basicChannel = basicChannel.getBasicChannel(item.channel_id);
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
      reduced = stateFromStoresArray.reduce((acc, item, index) => {
        callback(table[11]);
        const obj = {};
        const nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(item);
        const merged = Object.assign(acc);
        obj[item.id] = interestedInEventRecurrence.isInterestedInEventRecurrence(item.id, nextRecurrenceIdInEvent);
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
            if (flag == null) {
              flag = false;
            }
            let obj6 = _require(stateFromStoresArray[12]);
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
  const obj5 = _require(stateFromStoresArray[10]);
};
export const useGuildActiveEvent = function useGuildActiveEvent(guild_id) {
  const _require = guild_id;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [guild_id];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.GUILD_EVENT_ACTIVE(closure_0));
    return guildScheduledEventsByIndex.find((item, index) => {
      if (item.entity_type !== constants.NONE) {
        if (callback(item)) {
          if (null == item.channel_id) {
            return true;
          } else {
            basicChannel = basicChannel.getBasicChannel(item.channel_id);
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
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.CHANNEL_EVENT_UPCOMING(closure_0)), items1);
};
export const useFirstActiveEventChannel = function useFirstActiveEventChannel(id) {
  const _require = id;
  const items = [closure_4, closure_9];
  const items1 = [id];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.GUILD_EVENT_ACTIVE(closure_0));
    const found = guildScheduledEventsByIndex.find((item, index) => null != channel.getChannel(item.channel_id));
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
  stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = closure_1_9.getGuildScheduledEventsByIndex(closure_1_8.CHANNEL_EVENT_UPCOMING(tmp));
    }
    return items;
  }, items1);
  const items2 = [stateFromStores];
  return React.useMemo(() => stateFromStores.filter((item, index) => {
    const eventSchedule = callback(8791).getEventSchedule(item);
    ({ startTime, endTime } = eventSchedule);
    const obj = callback(8791);
    let toISOStringResult1;
    const obj2 = callback(8785);
    if (endTime != null) {
      toISOStringResult1 = endTime.toISOString();
    }
    const eventTimeData = obj2.getEventTimeData(startTime.toISOString(), toISOStringResult1);
    let withinStartWindow = item.status !== constants.ACTIVE;
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.withinStartWindow;
    }
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.diffMinutes < 15;
    }
    return withinStartWindow;
  }), items2);
};