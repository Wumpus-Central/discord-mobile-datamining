// === Module 9213: GuildScheduledEventsActionCreators ===

// Module 9213 (GuildScheduledEventsActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1112 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5575 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9214 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c4, c5;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
({ ENTITY_TYPES_REQUIRED_CHANNEL_ID: metroRequire, ENTITY_TYPES_REQUIRED_ENTITY_METADATA: metroImportDefault, GuildScheduledEventStatus: metroImportAll, MAX_RSVP_USER_DISPLAY_COUNT: c9 } = GuildScheduledEventsConstants);
({ Endpoints: c10, Routes: unpackModuleId } = Constants);
let obj = {
  startEvent(arg0, arg1) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_EVENT(arg1, arg0), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj = { status: metroImportAll.ACTIVE };
    obj3 = HTTPUtils;
    return patch(request);
  },
  endEvent(arg0, arg1) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_EVENT(arg1, arg0), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj = { status: metroImportAll.COMPLETED };
    obj3 = HTTPUtils;
    return patch(request);
  },
  joinVoiceEvent(arg0, id) {
    const obj = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj.selectVoiceChannel(id);
    const obj2 = router_utils;
    obj2.transitionTo(unpackModuleId.CHANNEL(arg0, id));
  },
  saveEvent(arg0, entityType, arg2) {
    let image;
    let obj3;
    let obj5;
    let channelId = null;
    if (metroRequire.has(entityType.entityType)) {
      channelId = entityType.channelId;
    }
    let entityMetadata = null;
    if (metroImportDefault.has(entityType.entityType)) {
      entityMetadata = entityType.entityMetadata;
    }
    if (null == entityType.image) {
      image = entityType.image;
    }
    const obj2 = { name: entityType.name, description: entityType.description, image, privacy_level: entityType.privacyLevel, scheduled_start_time: entityType.scheduledStartTime, scheduled_end_time: entityType.scheduledEndTime, entity_type: entityType.entityType, channel_id: channelId, entity_metadata: entityMetadata, recurrence_rule: obj3.recurrenceRuleToServer(entityType.recurrenceRule) };
    obj3 = EditGuildEventUtils;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_EVENT(arg2, arg0), body: obj2, rejectWithError: obj5.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj5 = HTTPUtils;
    return patch(request);
  },
  createGuildEvent(name, id) {
    let obj2;
    let obj4;
    const obj = { name: name.name, description: name.description, image: name.image, privacy_level: name.privacyLevel, scheduled_start_time: name.scheduledStartTime, scheduled_end_time: name.scheduledEndTime, entity_type: name.entityType, channel_id: name.channelId, entity_metadata: name.entityMetadata, recurrence_rule: obj2.recurrenceRuleToServer(name.recurrenceRule) };
    obj2 = EditGuildEventUtils;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_EVENTS_FOR_GUILD(id), body: obj, rejectWithError: obj4.rejectWithMigratedError() };
    const post = HTTP.post;
    obj4 = HTTPUtils;
    return post(request);
  },
  fetchGuildEvent(c0, c1) {
    let closure_0 = c0;
    let closure_1 = c1;
    return (async () => {
      let c3;
      let closure_0;
      let closure_1;
      let obj9;
      const obj4 = { url: closure_1_10.GUILD_EVENT(tmp4, tmp), rejectWithError: obj9.rejectWithMigratedError() };
      const httpGetWithCountryCodeQuery = tmp4(c2[9]).httpGetWithCountryCodeQuery;
      const tmp17 = tmp4(c2[9]);
      obj9 = tmp4(c2[5]);
      await httpGetWithCountryCodeQuery(obj4);
      const body = value.body;
      const obj7 = { type: "FETCH_GUILD_EVENT", guildScheduledEvent: body };
      const obj = tmp(c2[10]);
      obj.dispatch(obj7);
      return body;
    })();
  },
  fetchGuildEventsForGuild(guild_id) {
    let closure_0 = guild_id;
    return (async () => {
      let c3;
      let closure_0;
      let closure_1;
      let obj9;
      const obj4 = { url: closure_1_10.GUILD_EVENTS_FOR_GUILD(tmp4), rejectWithError: obj9.rejectWithMigratedError() };
      obj9 = tmp4(c2[5]);
      const obj10 = tmp4(c2[9]);
      await obj10.httpGetWithCountryCodeQuery(obj4);
      const body = value.body;
      const obj7 = { type: "FETCH_GUILD_EVENTS_FOR_GUILD", guildId: closure_129_0, guildScheduledEvents: body };
      const obj = tmp(c2[10]);
      obj.dispatch(obj7);
      return body;
    })();
  },
  fetchGuildEventUserCounts(guild_id, id, found) {
    let closure_0 = guild_id;
    let closure_1 = id;
    let closure_2 = found;
    return (async () => {
      let c3;
      let closure_0;
      let closure_1;
      let obj11;
      let obj4;
      const request = { url: closure_1_10.GUILD_EVENT_USER_COUNTS(tmp4, tmp), query: obj4, rejectWithError: obj11.rejectWithMigratedError() };
      obj4 = { guild_scheduled_event_exception_ids };
      obj11 = tmp4(guild_scheduled_event_exception_ids[5]);
      const HTTP = tmp4(guild_scheduled_event_exception_ids[5]).HTTP;
      await HTTP.get(request);
      const body = value.body;
      const obj8 = { eventCount: body.guild_scheduled_event_count, recurrenceCounts: body.guild_scheduled_event_exception_counts };
      const obj9 = { type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS", guildId: closure_129_0, eventId: closure_129_1, counts: obj8 };
      const obj7 = tmp(guild_scheduled_event_exception_ids[10]);
      obj7.dispatch(obj9);
      return obj8;
    })();
  },
  cancelGuildEvent(arg0, arg1) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_EVENT(arg1, arg0), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj = { status: metroImportAll.CANCELED };
    obj3 = HTTPUtils;
    return patch(request);
  },
  deleteGuildEvent(arg0, c1) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    const del = HTTP.del;
    const obj = { url: authStore.GUILD_EVENT(c1, arg0), rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = HTTPUtils;
    return del(obj);
  },
  getGuildEventsForCurrentUser(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let closure_1;
      let items;
      let obj4;
      let obj9;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              body = undefined;
              const HTTP = tmp4(c2[5]).HTTP;
              const request = { url: constants.USER_GUILD_EVENTS, query: obj4, rejectWithError: obj9.rejectWithMigratedError() };
              obj4 = { guild_ids: items };
              items = [tmp4];
              const get = HTTP.get;
              obj9 = tmp4(c2[5]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            body = value.body;
            const obj7 = { type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS", guildScheduledEventUsers: body, guildId: closure_129_0 };
            const obj = tmp(c2[10]);
            obj.dispatch(obj7);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    })();
  },
  createRsvpForGuildEvent(arg0, arg1, arg2, arg3) {
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    _asyncToGenerator = arg3;
    return (async () => {
      let guildId;
      let obj12;
      let obj6;
      let userId;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let guildEventExceptionId;
          c5 = 2;
          if (0 === userId) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              guildEventExceptionId = tmp;
              const guildEventId = tmp4;
              userId = undefined;
              userId = userId.getId();
              c3 = 1;
              const obj5 = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId, guildId, guildEventId, guildEventExceptionId, response };
              const obj8 = guildEventExceptionId(guildId[10]);
              obj8.dispatch(obj5);
              const HTTP = guildEventId(guildId[5]).HTTP;
              const request = { url: closure_1_10.USER_GUILD_EVENT(guildId, guildEventId, guildEventExceptionId), body: obj6, rejectWithError: obj12.rejectWithMigratedError() };
              const put = HTTP.put;
              obj6 = { response };
              obj12 = guildEventId(guildId[5]);
              userId = 2;
              c5 = 1;
              const obj7 = { value: put(request), done: false };
              return obj7;
            }
          } else if (1 === userId) {
            c3 = 0;
            guildEventExceptionId = guildId;
            const obj9 = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId, guildId: closure_129_2, guildEventId: closure_129_0, guildEventExceptionId: closure_129_1, response: closure_129_3 };
            const obj3 = guildEventExceptionId(guildId[10]);
            obj3.dispatch(obj9);
            throw guildEventExceptionId;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp18) {
          guildId = tmp18;
          if (0 === c3) {
            c5 = 3;
            throw tmp18;
          } else {
            userId = 1;
          }
        }
      }
    })();
  },
  deleteRsvpForGuildEvent(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let guildId;
      let obj8;
      let rsvp;
      let userId;
      if (rsvp === 2) {
        rsvp = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let guildEventExceptionId;
          rsvp = 2;
          if (0 === userId) {
            if (arg0 === 1) {
              rsvp = 3;
              throw value;
            } else if (arg0 === 2) {
              rsvp = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              guildEventExceptionId = tmp;
              const guildEventId = tmp4;
              userId = undefined;
              rsvp = undefined;
              userId = userId.getId();
              rsvp = rsvp.getRsvp(guildEventId, guildEventExceptionId, userId);
              if (null != rsvp) {
                c3 = 1;
                const obj6 = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId, guildId, guildEventId, guildEventExceptionId, response: rsvp.response };
                const obj5 = guildEventExceptionId(guildId[10]);
                obj5.dispatch(obj6);
                const HTTP = guildEventId(guildId[5]).HTTP;
                const obj7 = { url: closure_1_10.USER_GUILD_EVENT(guildId, guildEventId, guildEventExceptionId), rejectWithError: obj8.rejectWithMigratedError() };
                const del = HTTP.del;
                obj8 = guildEventId(guildId[5]);
                userId = 2;
                rsvp = 1;
                const obj9 = { value: del(obj7), done: false };
                return obj9;
              } else {
                rsvp = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } else if (1 === userId) {
            c3 = 0;
            const obj10 = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId, guildId: closure_129_2, guildEventId: closure_129_0, guildEventExceptionId: closure_129_1, response: rsvp.response };
            const obj3 = guildEventExceptionId(guildId[10]);
            obj3.dispatch(obj10);
            throw guildId;
          } else if (arg0 === 1) {
            rsvp = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            rsvp = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            c3 = 0;
            rsvp = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp31) {
          guildId = tmp31;
          if (0 === c3) {
            rsvp = 3;
            throw tmp31;
          } else {
            userId = 1;
          }
        }
      }
    })();
  },
  updateRsvp(arg0, arg1, arg2, arg3, arg4) {
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    _asyncToGenerator = arg3;
    let closure_4 = arg4;
    const self = this;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp;
              closure_0 = tmp4;
              const obj7 = closure_0(closure_2[11]);
              if (null != obj7.getExistingRsvp(closure_0, closure_1)) {
                c3 = 1;
                c4 = 3;
                c5 = 1;
                const obj4 = { value: self.deleteRsvpForGuildEvent(closure_0, closure_1, closure_2), done: false };
                return obj4;
              } else {
                c3 = 2;
                c4 = 4;
                c5 = 1;
                const obj5 = { value: self.createRsvpForGuildEvent(closure_0, closure_1, closure_2, closure_3), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              if (closure_129_4 != null) {
                tmp21(closure_0);
              }
            } else if (2 === c4) {
              c3 = 0;
              closure_1 = closure_2;
              if (closure_129_4 != null) {
                tmp13(closure_1);
              }
            } else if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                if (closure_129_4 != null) {
                  closure_129_4();
                }
                c3 = 0;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              if (closure_129_4 != null) {
                closure_129_4();
              }
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp33) {
          closure_2 = tmp33;
          if (0 === c3) {
            c5 = 3;
            throw tmp33;
          } else if (1 === tmp35) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    })();
  },
  fetchUsersForGuildEvent(id, arg1, guild_id) {
    let closure_3;
    let closure_0 = id;
    let closure_1 = arg1;
    let tmp = arg3;
    if (arg3 === undefined) {
      tmp = closure_9;
    }
    _asyncToGenerator = tmp;
    return (async () => {
      let c2;
      let closure_0;
      let obj11;
      let obj4;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp4;
          c3 = 2;
          if (0 === guild_id) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp4 = undefined;
              if (null != tmp4) {
                if (null != guild_id) {
                  const HTTP = tmp4(guild_id[5]).HTTP;
                  const request = { url: closure_1_10.GUILD_EVENT_USERS(guild_id, tmp4, tmp), query: obj4, rejectWithError: obj11.rejectWithMigratedError() };
                  const get = HTTP.get;
                  obj4 = { limit, with_member: true };
                  obj11 = tmp4(guild_id[5]);
                  guild_id = 1;
                  c3 = 1;
                  const obj5 = { value: get(request), done: false };
                  return obj5;
                }
              }
              c3 = 3;
              const obj6 = { value: [], done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            tmp4 = value;
            const obj9 = { type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS", guildEventId: closure_129_0, guildScheduledEventUsers: tmp4.body, guildId: closure_129_2, guildEventExceptionId: closure_129_1 };
            const obj7 = tmp(guild_id[10]);
            obj7.dispatch(obj9);
            c3 = 3;
            const obj = { value: tmp4.body.users, done: true };
            return obj;
          }
        } catch (tmp5) {
          c3 = 3;
          throw tmp5;
        }
      }
    })();
  },
  createGuildEventException(arg0, guild_id, id) {
    let is_canceled;
    let obj2;
    let original_scheduled_start_time;
    let scheduled_end_time;
    let scheduled_start_time;
    ({ original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_EVENT_EXCEPTIONS(guild_id, id), body: { original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: obj2.rejectWithMigratedError() };
    const post = HTTP.post;
    obj2 = HTTPUtils;
    return post(request);
  },
  updateGuildEventException(arg0, guild_id, id, c2) {
    let is_canceled;
    let obj2;
    let scheduled_end_time;
    let scheduled_start_time;
    ({ scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_EVENT_EXCEPTION(guild_id, id, c2), body: { scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: obj2.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj2 = HTTPUtils;
    return patch(request);
  },
  deleteGuildEventException(guild_id, id, event_exception_id) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    const del = HTTP.del;
    const obj = { url: authStore.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = HTTPUtils;
    return del(obj);
  },
  deleteRecurrence(c1, id, c2, eventException) {
    let date;
    const self = this;
    if (null != eventException) {
      const obj2 = { scheduled_start_time: null, scheduled_end_time: null, is_canceled: true };
      ({ scheduled_start_time: obj4.scheduled_start_time, scheduled_end_time: obj4.scheduled_end_time } = eventException);
      return self.updateGuildEventException(obj2, c1, id, c2);
    } else {
      const _Date = Date;
      const self2 = this;
      const self3 = this;
      const createGuildEventException = self.createGuildEventException;
      const obj3 = { original_scheduled_start_time: date.toISOString(), is_canceled: true };
      const obj = SnowflakeUtilsDefault;
      date = new Date(obj.extractTimestamp(c2));
      return createGuildEventException(obj3, c1, id);
    }
  }
};
const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx");

export default obj;