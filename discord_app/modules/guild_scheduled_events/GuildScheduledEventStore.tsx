// discord_app/modules/guild_scheduled_events/GuildScheduledEventStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";

function scheduledEventSort(status) {
  ({ id, scheduled_start_time } = status);
  let tmp = null != status;
  if (tmp) {
    status = undefined;
    if (status != null) {
      status = status.status;
    }
    tmp = status === constants.ACTIVE;
  }
  let str = "\u0001";
  if (tmp) {
    str = "\0";
  }
  return "" + str + "-" + new Date(scheduled_start_time).getTime() + "-" + id;
}
function saveEvent(id) {
  const result = secondaryIndexMap.set(id.id, id);
  closure_9 = closure_9 + 1;
}
function addGuildEventUser(guild_scheduled_event_id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  guild_scheduled_event_id = guild_scheduled_event_id.guild_scheduled_event_id;
  if (null == dependencyMap[guild_scheduled_event_id]) {
    dependencyMap[guild_scheduled_event_id] = {};
  }
  let guild_scheduled_event_exception_id = guild_scheduled_event_id.guild_scheduled_event_exception_id;
  if (guild_scheduled_event_exception_id == null) {
    guild_scheduled_event_exception_id = SERIES;
  }
  if (null == dependencyMap[guild_scheduled_event_id][guild_scheduled_event_exception_id]) {
    dependencyMap[guild_scheduled_event_id][guild_scheduled_event_exception_id] = {};
  }
  dependencyMap[guild_scheduled_event_id][guild_scheduled_event_exception_id][guild_scheduled_event_id.user_id] =
    guild_scheduled_event_id;
  if (flag) {
    let guild_scheduled_event_exception_id2 = guild_scheduled_event_id.guild_scheduled_event_exception_id;
    if (guild_scheduled_event_exception_id2 == null) {
      guild_scheduled_event_exception_id2 = SERIES;
    }
    let num;
    if (dependencyMap2[guild_scheduled_event_id.guild_scheduled_event_id] != null) {
      num = tmp4[guild_scheduled_event_exception_id2];
    }
    if (num == null) {
      num = 0;
    }
    if (null == guild_scheduled_event_id.guild_scheduled_event_exception_id) {
      let num3 = -1;
      if (null == guild_scheduled_event_id.guild_scheduled_event_exception_id) {
        num3 = -1;
      }
      ({
        guild_scheduled_event_id: guild_scheduled_event_id2,
        guild_scheduled_event_exception_id: guild_scheduled_event_exception_id3,
      } = guild_scheduled_event_id);
      const sum = num + num3;
      if (guild_scheduled_event_exception_id3 == null) {
        guild_scheduled_event_exception_id3 = SERIES;
      }
      if (null == dependencyMap2[guild_scheduled_event_id2]) {
        dependencyMap2[guild_scheduled_event_id2] = {};
      }
      dependencyMap2[guild_scheduled_event_id2][guild_scheduled_event_exception_id3] = sum;
    }
    num3 = 1;
  }
  if (flag2) {
    closure_9 = closure_9 + 1;
  }
}
function removeGuildEventUser(guild_scheduled_event_exception_id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  guild_scheduled_event_exception_id = guild_scheduled_event_exception_id.guild_scheduled_event_exception_id;
  if (guild_scheduled_event_exception_id == null) {
    guild_scheduled_event_exception_id = SERIES;
  }
  let tmp4;
  if (dependencyMap[guild_scheduled_event_exception_id.guild_scheduled_event_id] != null) {
    if (tmp3[guild_scheduled_event_exception_id] != null) {
      tmp4 = tmp5[guild_scheduled_event_exception_id.user_id];
    }
  }
  let tmp7 = !tmp6;
  if (null == tmp4) {
    tmp7 = guild_scheduled_event_exception_id.user_id === AuthenticationStore.getId();
  }
  if (!tmp7) {
    if (dependencyMap[guild_scheduled_event_exception_id.guild_scheduled_event_id] != null) {
      if (tmp9[guild_scheduled_event_exception_id] != null) {
        const user_id = guild_scheduled_event_exception_id.user_id;
        delete tmp2[tmp];
      }
    }
    let guild_scheduled_event_exception_id2 = guild_scheduled_event_exception_id.guild_scheduled_event_exception_id;
    if (guild_scheduled_event_exception_id2 == null) {
      guild_scheduled_event_exception_id2 = SERIES;
    }
    let num;
    if (dependencyMap2[guild_scheduled_event_exception_id.guild_scheduled_event_id] != null) {
      num = tmp11[guild_scheduled_event_exception_id2];
    }
    if (num == null) {
      num = 0;
    }
    if (null == guild_scheduled_event_exception_id.guild_scheduled_event_exception_id) {
      let num3 = 1;
      if (null == guild_scheduled_event_exception_id.guild_scheduled_event_exception_id) {
        num3 = 1;
      }
      ({ guild_scheduled_event_id, guild_scheduled_event_exception_id: guild_scheduled_event_exception_id3 } =
        guild_scheduled_event_exception_id);
      const sum = num + num3;
      if (guild_scheduled_event_exception_id3 == null) {
        guild_scheduled_event_exception_id3 = SERIES;
      }
      if (null == dependencyMap2[guild_scheduled_event_id]) {
        dependencyMap2[guild_scheduled_event_id] = {};
      }
      dependencyMap2[guild_scheduled_event_id][guild_scheduled_event_exception_id3] = sum;
      if (flag) {
        closure_9 = closure_9 + 1;
      }
    }
    num3 = -1;
  }
}
function handleGuildScheduledEventUpdateOrCreate(guildScheduledEvent) {
  guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
  const result = secondaryIndexMap.set(guildScheduledEvent.id, guildScheduledEvent);
  closure_9 = closure_9 + 1;
  return true;
}
function handleGuildScheduledEventExceptionCreateOrUpdate(eventException) {
  eventException = eventException.eventException;
  let obj = secondaryIndexMap;
  value = secondaryIndexMap.get(eventException.event_id);
  if (null == value) {
    return false;
  } else {
    const guild_scheduled_event_exceptions = value.guild_scheduled_event_exceptions;
    const findIndexResult = guild_scheduled_event_exceptions.findIndex(
      (event_exception_id) => event_exception_id.event_exception_id === eventException.event_exception_id,
    );
    const items = [];
    HermesBuiltin.arraySpread(value.guild_scheduled_event_exceptions, 0);
    if (findIndexResult < 0) {
      items.push(eventException);
    } else {
      items[findIndexResult] = eventException;
    }
    obj = {};
    const merged = Object.assign(value);
    obj.guild_scheduled_event_exceptions = items;
    const result = obj.set(obj.id, obj);
    closure_9 = closure_9 + 1;
    return true;
  }
}
const GuildScheduledEventsConstants = fn(1963);
({
  GuildScheduledEventStatus: closure_4,
  GuildScheduledEventStatusDone: hasOwnProperty,
  GuildScheduledEventUserResponses: metroRequire,
} = GuildScheduledEventsConstants);
let StaticGuildEventIndexes = {
  EVENT: "event",
  EVENT_ACTIVE: "active",
  EVENT_UPCOMING: "event-upcoming",
  GUILD_EVENT(arg0) {
    return "" + arg0 + "-" + obj.EVENT;
  },
  GUILD_EVENT_ACTIVE(guild_id) {
    return "" + guild_id + "-" + obj.EVENT_ACTIVE;
  },
  GUILD_EVENT_UPCOMING(guild_id) {
    return "" + guild_id + "-" + obj.EVENT_UPCOMING;
  },
  CHANNEL_EVENT(channel_id) {
    return "" + channel_id + "-" + obj.EVENT;
  },
  CHANNEL_EVENT_ACTIVE(channel_id) {
    return "" + channel_id + "-" + obj.EVENT_ACTIVE;
  },
  CHANNEL_EVENT_UPCOMING(channel_id) {
    return "" + channel_id + "-" + obj.EVENT_UPCOMING;
  },
};
const secondaryIndexMap = new fn(4195).SecondaryIndexMap(function scheduledEventIndex(status) {
  ({ guild_id, entity_id, channel_id } = status);
  const items = [guild_id];
  if (null != entity_id) {
    items.push(entity_id);
  }
  items.push(obj.GUILD_EVENT(guild_id));
  if (null != channel_id) {
    items.push(obj.CHANNEL_EVENT(channel_id));
  }
  let tmp4 = null != status;
  if (tmp4) {
    status = undefined;
    if (status != null) {
      status = status.status;
    }
    tmp4 = status === constants.ACTIVE;
  }
  if (tmp4) {
    items.push(obj.EVENT_ACTIVE);
    items.push(obj.GUILD_EVENT_ACTIVE(guild_id));
    if (null != channel_id) {
      items.push(obj.CHANNEL_EVENT_ACTIVE(channel_id));
    }
  }
  const hasItem = set.has(status.status);
  if (!hasItem) {
    items.push(obj.EVENT_UPCOMING);
    items.push(obj.GUILD_EVENT_UPCOMING(guild_id));
    if (null != channel_id) {
      items.push(obj.CHANNEL_EVENT_UPCOMING(channel_id));
    }
  }
  return items;
}, scheduledEventSort);
let closure_9 = 0;
let closure_10 = [];
const SERIES = "SERIES";
const dependencyMap = {};
const dependencyMap2 = {};
const Store = initializeDefault.Store;
class GuildScheduledEventStore extends Store {}
const prototype = GuildScheduledEventStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, GuildMemberStore);
};
prototype["getGuildScheduledEvent"] = function getGuildScheduledEvent(eventId) {
  let tmp = null;
  if (null != eventId) {
    value = secondaryIndexMap.get(eventId);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
prototype["getGuildEventCountByIndex"] = function getGuildEventCountByIndex(arg0) {
  return secondaryIndexMap.size(arg0);
};
prototype["getGuildScheduledEventsForGuild"] = function getGuildScheduledEventsForGuild(guildId) {
  if (null == guildId) {
    let items = [];
  } else {
    items = secondaryIndexMap.values(guildId);
  }
  return items;
};
prototype["getGuildScheduledEventsByIndex"] = function getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult) {
  return secondaryIndexMap.values(GUILD_EVENT_UPCOMINGResult);
};
prototype["getRsvpVersion"] = function getRsvpVersion() {
  return closure_9;
};
prototype["getRsvp"] = function getRsvp(id, c1, id2) {
  if (null == id) {
    return null;
  } else {
    let tmp = c1;
    if (c1 == null) {
      tmp = SERIES;
    }
    let tmp4;
    if (dependencyMap[id] != null) {
      if (tmp3[tmp] != null) {
        tmp4 = tmp5[id2];
      }
    }
    return tmp4;
  }
};
prototype["isInterestedInEventRecurrence"] = function isInterestedInEventRecurrence(id, c1) {
  id = AuthenticationStore.getId();
  const rsvp = this.getRsvp(id, null, id);
  const rsvp1 = this.getRsvp(id, c1, id);
  let response;
  if (rsvp != null) {
    response = rsvp.response;
  }
  let response1;
  if (rsvp1 != null) {
    response1 = rsvp1.response;
  }
  let response2;
  if (rsvp1 != null) {
    response2 = rsvp1.response;
  }
  return (
    (response === constants2.INTERESTED && response2 !== constants2.UNINTERESTED) || response1 === constants2.INTERESTED
  );
};
prototype["getUserCount"] = function getUserCount(arg0, arg1) {
  if (null == arg0) {
    return 0;
  } else {
    let num;
    if (dependencyMap2[arg0] != null) {
      num = tmp2[SERIES];
    }
    if (num == null) {
      num = 0;
    }
    let diff = num;
    if (null != arg1) {
      let num2;
      if (dependencyMap2[arg0] != null) {
        num2 = tmp7[arg1];
      }
      if (num2 == null) {
        num2 = 0;
      }
      diff = num - num2;
    }
    return diff;
  }
};
prototype["hasUserCount"] = function hasUserCount(arg0, arg1) {
  let tmp = arg1;
  if (arg1 == null) {
    tmp = SERIES;
  }
  let tmp3;
  if (dependencyMap2[arg0] != null) {
    tmp3 = tmp2[tmp];
  }
  return null != tmp3;
};
prototype["isActive"] = function isActive(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    value = secondaryIndexMap.get(arg0);
    let tmp4 = null != value;
    if (tmp4) {
      let status;
      if (value != null) {
        status = value.status;
      }
      tmp4 = status === constants.ACTIVE;
    }
    tmp = tmp4;
  }
  return tmp;
};
prototype["getActiveEventByChannel"] = function getActiveEventByChannel(id) {
  if (null != id) {
    const self = this;
    return this.getGuildScheduledEventsByIndex(obj.CHANNEL_EVENT_ACTIVE(id))[0];
  }
};
prototype["getUsersForGuildEvent"] = function getUsersForGuildEvent(arg0, arg1) {
  if (null == arg0) {
    return {};
  } else {
    let tmp = arg1;
    if (arg1 == null) {
      tmp = SERIES;
    }
    let obj;
    if (dependencyMap[arg0] != null) {
      obj = tmp3[tmp];
    }
    if (obj == null) {
      obj = {};
    }
    return obj;
  }
};
GuildScheduledEventStore.displayName = "GuildScheduledEventStore";
StaticGuildEventIndexes = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    secondaryIndexMap.clear();
    closure_9 = 0;
    closure_12 = {};
    closure_13 = {};
    const item = closure_10.forEach(saveEvent);
    const item1 = guilds.forEach((guild_scheduled_events) => {
      const prop = guild_scheduled_events.guild_scheduled_events;
      return prop.forEach((id) => {
        const result = closure_1_8.set(id.id, id);
        closure_9 = closure_9 + 1;
      });
    });
    return true;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    c0 = false;
    const values = secondaryIndexMap.values(obj.GUILD_EVENT(guild.id));
    const item = values.forEach((id) => {
      secondaryIndexMap.delete(id.id);
      delete tmp[tmp2];
      if (c0) {
        delete tmp[tmp2];
      }
      closure_9 = closure_9 + 1;
    });
    const prop = guild.guild_scheduled_events;
    const item1 = prop.forEach((id) => {
      const result = secondaryIndexMap.set(id.id, id);
      closure_9 = closure_9 + 1;
    });
    return true;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    c0 = true;
    const values = secondaryIndexMap.values(obj.GUILD_EVENT(guild.guild.id));
    const item = values.forEach((id) => {
      secondaryIndexMap.delete(id.id);
      delete tmp[tmp2];
      if (c0) {
        delete tmp[tmp2];
      }
      closure_9 = closure_9 + 1;
    });
    return true;
  },
  FETCH_GUILD_EVENT: function handleFetchGuildEvent(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const result = secondaryIndexMap.set(guildScheduledEvent.id, guildScheduledEvent);
    closure_9 = closure_9 + 1;
  },
  FETCH_GUILD_EVENTS_FOR_GUILD: function handleFetchGuildEventsForGuild(guildScheduledEvents) {
    guildScheduledEvents = guildScheduledEvents.guildScheduledEvents;
    const values = secondaryIndexMap.values(obj.GUILD_EVENT(guildScheduledEvents.guildId), true);
    const mapped = values.map((id) => id.id);
    const mapped1 = guildScheduledEvents.map((id) => id.id);
    obj = _modDef12;
    const item = obj.difference(mapped, mapped1).forEach((item) => {
      set.delete(item);
      delete tmp[tmp2];
      delete tmp[tmp2];
      closure_9 = closure_9 + 1;
    });
    for (const item10029 of guildScheduledEvents) {
      let tmp5 = saveEvent(item10029);
      continue;
    }
    return true;
  },
  GUILD_SCHEDULED_EVENT_CREATE: handleGuildScheduledEventUpdateOrCreate,
  GUILD_SCHEDULED_EVENT_UPDATE: handleGuildScheduledEventUpdateOrCreate,
  GUILD_SCHEDULED_EVENT_DELETE: function handleGuildScheduledEventDelete(guildScheduledEvent) {
    secondaryIndexMap.delete(guildScheduledEvent.guildScheduledEvent.id);
    delete tmp[tmp2];
    delete tmp[tmp2];
    closure_9 = closure_9 + 1;
    return true;
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function handleRsvpCreate(arg0) {
    ({ userId, guildEventId, guildEventExceptionId } = arg0);
    let tmp = guildEventExceptionId;
    ({ guildId, response } = arg0);
    if (guildEventExceptionId == null) {
      tmp = SERIES;
    }
    let tmp3;
    if (dependencyMap[guildEventId] != null) {
      if (tmp2[tmp] != null) {
        tmp3 = tmp4[userId];
      }
    }
    if (null != tmp3) {
      removeGuildEventUser(tmp3, false);
    }
    const obj = {
      user_id: userId,
      guild_scheduled_event_id: guildEventId,
      member: null,
      guild_scheduled_event_exception_id: null,
      response: null,
    };
    const member = GuildMemberStore.getMember(guildId, userId);
    obj.member = member;
    obj.guild_scheduled_event_exception_id = guildEventExceptionId;
    obj.response = response;
    addGuildEventUser(obj);
    return true;
  },
  GUILD_SCHEDULED_EVENT_USER_REMOVE: function handleRsvpDelete(userId) {
    removeGuildEventUser({
      user_id: userId.userId,
      guild_scheduled_event_id: userId.guildEventId,
      guild_scheduled_event_exception_id: userId.guildEventExceptionId,
      response: userId.response,
    });
  },
  GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function handleFetchGuildEventsForUser(guildScheduledEventUsers) {
    const prop = guildScheduledEventUsers.guildScheduledEventUsers;
    const item = prop.forEach((item) => {
      addGuildEventUser(item, false, false);
    });
    closure_9 = closure_9 + 1;
    return true;
  },
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function handleFetchUsersForGuildEventSuccess(guildScheduledEventUsers) {
    const prop = guildScheduledEventUsers.guildScheduledEventUsers;
    const item = prop.forEach((item) => {
      addGuildEventUser(item, false, false);
    });
    closure_9 = closure_9 + 1;
    return true;
  },
  GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function handleEventUserCountsFetchSuccess(eventId) {
    eventId = eventId.eventId;
    const counts = eventId.counts;
    if (null == dependencyMap2[eventId]) {
      dependencyMap2[eventId] = {};
    }
    dependencyMap2[eventId][SERIES] = counts.eventCount;
    eventId(counts[5]).forEachKey(counts.recurrenceCounts, (arg0) => {
      let tmp = arg0;
      const diff = counts.eventCount - counts.recurrenceCounts[arg0];
      if (arg0 == null) {
        tmp = SERIES;
      }
      if (null == dependencyMap[eventId]) {
        dependencyMap[tmp2] = {};
      }
      dependencyMap[eventId][tmp] = diff;
    });
  },
  INVITE_RESOLVE_SUCCESS: function handleInviteResolveSuccess(invite) {
    const guild_scheduled_event = invite.invite.guild_scheduled_event;
    let flag = null != guild_scheduled_event;
    if (flag) {
      const result = secondaryIndexMap.set(guild_scheduled_event.id, guild_scheduled_event);
      closure_9 = closure_9 + 1;
      flag = true;
    }
    return flag;
  },
  GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: handleGuildScheduledEventExceptionCreateOrUpdate,
  GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: handleGuildScheduledEventExceptionCreateOrUpdate,
  GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function handleGuildScheduledEventExceptionDelete(eventException) {
    eventException = eventException.eventException;
    let obj = secondaryIndexMap;
    value = secondaryIndexMap.get(eventException.event_id);
    if (null == value) {
      return false;
    } else {
      const prop = value.guild_scheduled_event_exceptions;
      obj = {};
      const found = prop.filter(
        (event_exception_id) => event_exception_id.event_exception_id !== eventException.event_exception_id,
      );
      const merged = Object.assign(value);
      obj.guild_scheduled_event_exceptions = found;
      const result = obj.set(obj.id, obj);
      closure_9 = closure_9 + 1;
      return true;
    }
  },
  GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function handleGuildScheduledEventExceptionsDelete(eventId) {
    let obj = secondaryIndexMap;
    value = secondaryIndexMap.get(eventId.eventId);
    let flag = null != value;
    if (flag) {
      obj = {};
      const merged = Object.assign(value);
      obj.guild_scheduled_event_exceptions = [];
      const result = obj.set(obj.id, obj);
      closure_9 = closure_9 + 1;
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    secondaryIndexMap.clear();
    return true;
  },
};
const guildScheduledEventStore = new GuildScheduledEventStore(DispatcherDefault, StaticGuildEventIndexes);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventStore.tsx");

export default guildScheduledEventStore;
export { StaticGuildEventIndexes };
export { scheduledEventSort };
export const isGuildScheduledEventActive = function isGuildScheduledEventActive(status) {
  let tmp = null != status;
  if (tmp) {
    status = undefined;
    if (status != null) {
      status = status.status;
    }
    tmp = status === constants.ACTIVE;
  }
  return tmp;
};
export const isEventUpcoming = function isEventUpcoming(guild_scheduled_event) {
  return !set.has(guild_scheduled_event.status);
};
export const eventScheduledToStartWithin = function eventScheduledToStartWithin(scheduled_start_time, arg1) {
  const time = new Date(scheduled_start_time.scheduled_start_time).getTime();
  return time < Date.now() + 1000 * arg1;
};
export const isGuildEventEnded = function isGuildEventEnded(guildScheduledEvent) {
  let hasItem = null != guildScheduledEvent;
  if (hasItem) {
    hasItem = set.has(guildScheduledEvent.status);
  }
  return hasItem;
};
