// === Module 7050: GuildScheduledEventStore ===

// Module 7050 (GuildScheduledEventStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SecondaryIndexMap from "SecondaryIndexMap" /* 4510 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import size from "module_2" /* 2 */;

let closure_13;

let closure_4;
let hasOwnProperty;
let metroRequire;
function scheduledEventSort(status) {
  let id;
  let scheduled_start_time;
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
  const date = new Date(scheduled_start_time);
  return "" + str + "-" + date.getTime() + "-" + id;
}
function saveEvent(id) {
  const result = secondaryIndexMap.set(id.id, id);
  closure_9 = closure_9 + 1;
}
function addGuildEventUser(guild_scheduled_event_id, arg1, arg2) {
  let guild_scheduled_event_exception_id3;
  let guild_scheduled_event_id2;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  guild_scheduled_event_id = guild_scheduled_event_id.guild_scheduled_event_id;
  if (null == closure_12[guild_scheduled_event_id]) {
    closure_12[guild_scheduled_event_id] = {};
  }
  let guild_scheduled_event_exception_id = guild_scheduled_event_id.guild_scheduled_event_exception_id;
  if (guild_scheduled_event_exception_id == null) {
    guild_scheduled_event_exception_id = SERIES;
  }
  if (null == closure_12[guild_scheduled_event_id][guild_scheduled_event_exception_id]) {
    closure_12[guild_scheduled_event_id][guild_scheduled_event_exception_id] = {};
  }
  closure_12[guild_scheduled_event_id][guild_scheduled_event_exception_id][guild_scheduled_event_id.user_id] = guild_scheduled_event_id;
  if (flag) {
    let guild_scheduled_event_exception_id2 = guild_scheduled_event_id.guild_scheduled_event_exception_id;
    if (guild_scheduled_event_exception_id2 == null) {
      guild_scheduled_event_exception_id2 = SERIES;
    }
    let num;
    if (closure_13[guild_scheduled_event_id.guild_scheduled_event_id] != null) {
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
      ({ guild_scheduled_event_id: guild_scheduled_event_id2, guild_scheduled_event_exception_id: guild_scheduled_event_exception_id3 } = guild_scheduled_event_id);
      const sum = num + num3;
      if (guild_scheduled_event_exception_id3 == null) {
        guild_scheduled_event_exception_id3 = SERIES;
      }
      if (null == closure_13[guild_scheduled_event_id2]) {
        closure_13[guild_scheduled_event_id2] = {};
      }
      closure_13[guild_scheduled_event_id2][guild_scheduled_event_exception_id3] = sum;
    }
    num3 = 1;
  }
  if (flag2) {
    closure_9 = closure_9 + 1;
  }
}
function removeGuildEventUser(guild_scheduled_event_exception_id, arg1) {
  let guild_scheduled_event_exception_id3;
  let guild_scheduled_event_id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  guild_scheduled_event_exception_id = guild_scheduled_event_exception_id.guild_scheduled_event_exception_id;
  if (guild_scheduled_event_exception_id == null) {
    guild_scheduled_event_exception_id = SERIES;
  }
  let tmp2;
  if (closure_12[guild_scheduled_event_exception_id.guild_scheduled_event_id] != null) {
    if (closure_12[guild_scheduled_event_exception_id.guild_scheduled_event_id][guild_scheduled_event_exception_id] != null) {
      tmp2 = tmp3[guild_scheduled_event_exception_id.user_id];
    }
  }
  const tmp4 = null != tmp2;
  const tmp5 = !tmp4 && guild_scheduled_event_exception_id.user_id === AuthenticationStore.getId();
  if (!tmp5) {
    if (closure_12[guild_scheduled_event_exception_id.guild_scheduled_event_id] != null) {
      if (closure_12[guild_scheduled_event_exception_id.guild_scheduled_event_id][guild_scheduled_event_exception_id] != null) {
        delete closure_12[guild_scheduled_event_exception_id.guild_scheduled_event_id][guild_scheduled_event_exception_id][guild_scheduled_event_exception_id.user_id];
      }
    }
    let guild_scheduled_event_exception_id2 = guild_scheduled_event_exception_id.guild_scheduled_event_exception_id;
    if (guild_scheduled_event_exception_id2 == null) {
      guild_scheduled_event_exception_id2 = SERIES;
    }
    let num;
    if (closure_13[guild_scheduled_event_exception_id.guild_scheduled_event_id] != null) {
      num = tmp10[guild_scheduled_event_exception_id2];
    }
    if (num == null) {
      num = 0;
    }
    if (null == guild_scheduled_event_exception_id.guild_scheduled_event_exception_id) {
      let num3 = 1;
      if (null == guild_scheduled_event_exception_id.guild_scheduled_event_exception_id) {
        num3 = 1;
      }
      ({ guild_scheduled_event_id, guild_scheduled_event_exception_id: guild_scheduled_event_exception_id3 } = guild_scheduled_event_exception_id);
      const sum = num + num3;
      if (guild_scheduled_event_exception_id3 == null) {
        guild_scheduled_event_exception_id3 = SERIES;
      }
      if (null == closure_13[guild_scheduled_event_id]) {
        closure_13[guild_scheduled_event_id] = {};
      }
      closure_13[guild_scheduled_event_id][guild_scheduled_event_exception_id3] = sum;
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
  const value = secondaryIndexMap.get(eventException.event_id);
  if (null == value) {
    return false;
  } else {
    const guild_scheduled_event_exceptions = value.guild_scheduled_event_exceptions;
    const findIndexResult = guild_scheduled_event_exceptions.findIndex((event_exception_id) => event_exception_id.event_exception_id === eventException.event_exception_id);
    const items = [];
    HermesBuiltin.arraySpread(items, value.guild_scheduled_event_exceptions, 0);
    if (findIndexResult < 0) {
      items.push(eventException);
    } else {
      items[findIndexResult] = eventException;
    }
    const obj2 = { guild_scheduled_event_exceptions: items };
    const merged = Object.assign(value);
    const result = secondaryIndexMap.set(obj2.id, obj2);
    closure_9 = closure_9 + 1;
    return true;
  }
}
({ GuildScheduledEventStatus: closure_4, GuildScheduledEventStatusDone: hasOwnProperty, GuildScheduledEventUserResponses: metroRequire } = GuildScheduledEventsConstants);
const StaticGuildEventIndexes = {
  EVENT: "event",
  EVENT_ACTIVE: "active",
  EVENT_UPCOMING: "event-upcoming",
  GUILD_EVENT(arg0) {
    return "" + arg0 + "-" + obj.EVENT;
  },
  GUILD_EVENT_ACTIVE(guild_id) {
    return "" + guild_id + "-" + obj.EVENT_ACTIVE;
  },
  GUILD_EVENT_UPCOMING(id) {
    return "" + id + "-" + obj.EVENT_UPCOMING;
  },
  CHANNEL_EVENT(channel_id) {
    return "" + channel_id + "-" + obj.EVENT;
  },
  CHANNEL_EVENT_ACTIVE(channel_id) {
    return "" + channel_id + "-" + obj.EVENT_ACTIVE;
  },
  CHANNEL_EVENT_UPCOMING(channel_id) {
    return "" + channel_id + "-" + obj.EVENT_UPCOMING;
  }
};
const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(function scheduledEventIndex(status) {
  let channel_id;
  let entity_id;
  let guild_id;
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
  const hasItem = hasOwnProperty.has(status.status);
  const tmp11 = !hasItem;
  if (tmp11) {
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
let closure_12 = {};
const Store = get_initializedDefault.Store;
class GuildScheduledEventStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, GuildMemberStore);
  }
  getGuildScheduledEvent(eventId) {
    let tmp = null;
    if (null != eventId) {
      let value = secondaryIndexMap.get(eventId);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  getGuildEventCountByIndex(arg0) {
    return secondaryIndexMap.size(arg0);
  }
  getGuildScheduledEventsForGuild(guildId) {
    let items;
    if (null == guildId) {
      items = [];
    } else {
      items = secondaryIndexMap.values(guildId);
    }
    return items;
  }
  getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult) {
    return secondaryIndexMap.values(GUILD_EVENT_UPCOMINGResult);
  }
  getRsvpVersion() {
    return closure_9;
  }
  getRsvp(id, nextRecurrenceIdInEvent, id2) {
    if (null == id) {
      return null;
    } else {
      let tmp = nextRecurrenceIdInEvent;
      if (nextRecurrenceIdInEvent == null) {
        tmp = SERIES;
      }
      let tmp4;
      if (closure_12[id] != null) {
        if (closure_12[id][tmp] != null) {
          tmp4 = tmp5[id2];
        }
      }
      return tmp4;
    }
  }
  isInterestedInEventRecurrence(id, nextRecurrenceIdInEvent) {
    id = AuthenticationStore.getId();
    const rsvp = this.getRsvp(id, null, id);
    const rsvp1 = this.getRsvp(id, nextRecurrenceIdInEvent, id);
    let response;
    if (rsvp != null) {
      response = rsvp.response;
    }
    let response1;
    const INTERESTED = metroRequire.INTERESTED;
    if (rsvp1 != null) {
      response1 = rsvp1.response;
    }
    let response2;
    const INTERESTED2 = metroRequire.INTERESTED;
    if (rsvp1 != null) {
      response2 = rsvp1.response;
    }
    return response === INTERESTED && response2 !== metroRequire.UNINTERESTED || response1 === INTERESTED2;
  }
  getUserCount(arg0, arg1) {
    if (null == arg0) {
      return 0;
    } else {
      let num;
      if (closure_13[arg0] != null) {
        num = tmp2[SERIES];
      }
      if (num == null) {
        num = 0;
      }
      let diff = num;
      if (null != arg1) {
        let num2;
        if (closure_13[arg0] != null) {
          num2 = tmp7[arg1];
        }
        if (num2 == null) {
          num2 = 0;
        }
        diff = num - num2;
      }
      return diff;
    }
  }
  hasUserCount(arg0, arg1) {
    let tmp = arg1;
    if (arg1 == null) {
      tmp = SERIES;
    }
    let tmp3;
    if (closure_13[arg0] != null) {
      tmp3 = tmp2[tmp];
    }
    return null != tmp3;
  }
  isActive(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      const value = secondaryIndexMap.get(arg0);
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
  }
  getActiveEventByChannel(id) {
    if (null != id) {
      const self = this;
      return this.getGuildScheduledEventsByIndex(obj.CHANNEL_EVENT_ACTIVE(id))[0];
    }
  }
  getUsersForGuildEvent(arg0, arg1) {
    if (null == arg0) {
      return {};
    } else {
      let tmp = arg1;
      if (arg1 == null) {
        tmp = SERIES;
      }
      let obj;
      if (closure_12[arg0] != null) {
        obj = tmp3[tmp];
      }
      if (obj == null) {
        obj = {};
      }
      return obj;
    }
  }
}
const prototype = GuildScheduledEventStore.prototype;
GuildScheduledEventStore.displayName = "GuildScheduledEventStore";
let obj2 = {
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
    let c0 = false;
    const values = secondaryIndexMap.values(obj.GUILD_EVENT(guild.id));
    const item = values.forEach((id) => {
      id = id.id;
      secondaryIndexMap.delete(id);
      delete closure_12[id];
      if (c0) {
        delete closure_13[id];
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
    let c0 = true;
    const values = secondaryIndexMap.values(obj.GUILD_EVENT(guild.guild.id));
    const item = values.forEach((id) => {
      id = id.id;
      secondaryIndexMap.delete(id);
      delete closure_12[id];
      if (c0) {
        delete closure_13[id];
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
    let obj;
    guildScheduledEvents = guildScheduledEvents.guildScheduledEvents;
    const values = secondaryIndexMap.values(obj.GUILD_EVENT(guildScheduledEvents.guildId), true);
    const mapped = values.map((id) => id.id);
    const mapped1 = guildScheduledEvents.map((id) => id.id);
    obj = _modDef12;
    const differenceResult = obj.difference(mapped, mapped1);
    const item = differenceResult.forEach((item) => {
      set.delete(item);
      delete closure_1_12[item];
      delete closure_1_13[item];
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
    const id = guildScheduledEvent.guildScheduledEvent.id;
    secondaryIndexMap.delete(id);
    delete closure_12[id];
    delete closure_13[id];
    closure_9 = closure_9 + 1;
    return true;
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function handleRsvpCreate(arg0) {
    let guildEventExceptionId;
    let guildEventId;
    let guildId;
    let member;
    let response;
    let userId;
    ({ userId, guildEventId, guildEventExceptionId } = arg0);
    let tmp = guildEventExceptionId;
    ({ guildId, response } = arg0);
    if (guildEventExceptionId == null) {
      tmp = SERIES;
    }
    let tmp3;
    if (closure_12[guildEventId] != null) {
      if (closure_12[guildEventId][tmp] != null) {
        tmp3 = tmp4[userId];
      }
    }
    if (null != tmp3) {
      removeGuildEventUser(tmp3, false);
    }
    const obj = { user_id: userId, guild_scheduled_event_id: guildEventId, member, guild_scheduled_event_exception_id: guildEventExceptionId, response };
    member = GuildMemberStore.getMember(guildId, userId);
    addGuildEventUser(obj);
    return true;
  },
  GUILD_SCHEDULED_EVENT_USER_REMOVE: function handleRsvpDelete(userId) {
    const obj = { user_id: userId.userId, guild_scheduled_event_id: userId.guildEventId, guild_scheduled_event_exception_id: userId.guildEventExceptionId, response: userId.response };
    removeGuildEventUser(obj);
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
    const eventCount = counts.eventCount;
    if (null == closure_13[eventId]) {
      closure_13[eventId] = {};
    }
    closure_13[eventId][SERIES] = eventCount;
    const obj = eventId(counts[5]);
    obj.forEachKey(counts.recurrenceCounts, (arg0) => {
      let tmp = arg0;
      const diff = counts.eventCount - counts.recurrenceCounts[arg0];
      if (arg0 == null) {
        tmp = SERIES;
      }
      if (null == closure_13[eventId]) {
        closure_13[eventId] = {};
      }
      closure_13[eventId][tmp] = diff;
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
    let found;
    eventException = eventException.eventException;
    const value = secondaryIndexMap.get(eventException.event_id);
    if (null == value) {
      return false;
    } else {
      const prop = value.guild_scheduled_event_exceptions;
      const obj2 = { guild_scheduled_event_exceptions: found };
      found = prop.filter((event_exception_id) => event_exception_id.event_exception_id !== eventException.event_exception_id);
      const merged = Object.assign(value);
      const result = secondaryIndexMap.set(obj2.id, obj2);
      closure_9 = closure_9 + 1;
      return true;
    }
  },
  GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function handleGuildScheduledEventExceptionsDelete(eventId) {
    const value = secondaryIndexMap.get(eventId.eventId);
    let flag = null != value;
    if (flag) {
      const obj2 = { guild_scheduled_event_exceptions: [] };
      const merged = Object.assign(value);
      const result = secondaryIndexMap.set(obj2.id, obj2);
      closure_9 = closure_9 + 1;
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    secondaryIndexMap.clear();
    return true;
  }
};
const guildScheduledEventStore = new GuildScheduledEventStore(DispatcherDefault, obj2);
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
  return !hasOwnProperty.has(guild_scheduled_event.status);
};
export const eventScheduledToStartWithin = function eventScheduledToStartWithin(scheduled_start_time, arg1) {
  const date = new Date(scheduled_start_time.scheduled_start_time);
  const time = date.getTime();
  return time < Date.now() + 1000 * arg1;
};
export const isGuildEventEnded = function isGuildEventEnded(guildScheduledEvent) {
  const hasItem = null != guildScheduledEvent && hasOwnProperty.has(guildScheduledEvent.status);
  return hasItem;
};