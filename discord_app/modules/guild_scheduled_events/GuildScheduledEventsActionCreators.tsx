// === Module 9612: ? ===

// Module 9612
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import sendRequest from "sendRequest" /* 530 */;
import transitionTo from "transitionTo" /* 1222 */;
import _modDef5320 from "module_5320" /* 5320 */;
import EditGuildEventScreens from "EditGuildEventScreens" /* 9613 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "scheduledEventSort" /* 7218 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import ME from "ME" /* 676 */;

require = arg1;
({ ENTITY_TYPES_REQUIRED_CHANNEL_ID: closure_6, ENTITY_TYPES_REQUIRED_ENTITY_METADATA: error, GuildScheduledEventStatus: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: c9 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ Endpoints: c10, Routes: unpackModuleId } = ME);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx");

export default {
  startEvent(arg0, arg1) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj, rejectWithError: null };
    obj = { status: constants.ACTIVE };
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  endEvent(arg0, arg1) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj, rejectWithError: null };
    obj = { status: constants.COMPLETED };
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  joinVoiceEvent(arg0, id) {
    const voiceChannel = _modDef5320.selectVoiceChannel(id);
    const obj = _modDef5320;
    transitionTo.transitionTo(closure_11.CHANNEL(arg0, id));
  },
  saveEvent(arg0, entityType) {
    let channelId = null;
    if (set.has(entityType.entityType)) {
      channelId = entityType.channelId;
    }
    let entityMetadata = null;
    if (set2.has(entityType.entityType)) {
      entityMetadata = entityType.entityMetadata;
    }
    if (null == entityType.image) {
      const image = entityType.image;
    } else {
      let obj = /^data:/;
    }
    obj = { name: entityType.name, description: entityType.description, image, privacy_level: entityType.privacyLevel, scheduled_start_time: entityType.scheduledStartTime, scheduled_end_time: entityType.scheduledEndTime, entity_type: entityType.entityType, channel_id: channelId, entity_metadata: entityMetadata, recurrence_rule: EditGuildEventScreens.recurrenceRuleToServer(entityType.recurrenceRule) };
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg2, arg0), body: obj, rejectWithError: null };
    const obj3 = EditGuildEventScreens;
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  createGuildEvent(first, id) {
    let obj = { name: first.name, description: first.description, image: first.image, privacy_level: first.privacyLevel, scheduled_start_time: first.scheduledStartTime, scheduled_end_time: first.scheduledEndTime, entity_type: first.entityType, channel_id: first.channelId, entity_metadata: first.entityMetadata, recurrence_rule: EditGuildEventScreens.recurrenceRuleToServer(first.recurrenceRule) };
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_EVENTS_FOR_GUILD(id), body: obj, rejectWithError: null };
    const obj2 = EditGuildEventScreens;
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  fetchGuildEvent(closure_1_0, closure_1_1) {
    closure_0 = closure_1_0;
    closure_1 = closure_1_1;
    return callback(function*() {
      closure_1 = tmp2;
      let body = tmp5;
      obj1 = { url: null, rejectWithError: null };
      obj1[0] = closure_1_10.GUILD_EVENT(closure_1_0, closure_1_1);
      const obj8 = closure_1_0(4721);
      obj1[1] = closure_1_0(530).rejectWithMigratedError();
      yield obj8.httpGetWithCountryCodeQuery(obj1);
      body = arg1.body;
      const obj = closure_1_1(709);
      const obj4 = { type: "FETCH_GUILD_EVENT", guildScheduledEvent: null };
      obj4[1] = body;
      obj.dispatch(obj4);
      return body;
    })();
  },
  fetchGuildEventsForGuild(first) {
    closure_0 = first;
    return callback(function*() {
      closure_1 = tmp2;
      let body = tmp5;
      obj1 = { url: null, rejectWithError: null };
      obj1[0] = closure_1_10.GUILD_EVENTS_FOR_GUILD(closure_1_0);
      obj1[1] = closure_1_0(530).rejectWithMigratedError();
      const obj9 = closure_1_0(530);
      yield closure_1_0(4721).httpGetWithCountryCodeQuery(obj1);
      body = arg1.body;
      const obj = closure_1_1(709);
      const obj4 = { type: "FETCH_GUILD_EVENTS_FOR_GUILD", guildId: null, guildScheduledEvents: null };
      obj4[1] = body;
      obj4[2] = body;
      obj.dispatch(obj4);
      return body;
    })();
  },
  fetchGuildEventUserCounts(arg0, arg1, found) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = found;
    return callback(function*() {
      let obj5 = tmp2;
      let body = tmp5;
      obj1 = { url: null, query: null, rejectWithError: null };
      obj1[0] = closure_1_10.GUILD_EVENT_USER_COUNTS(closure_1_0, closure_1_1);
      const obj2 = { guild_scheduled_event_exception_ids: null };
      obj2[0] = dependencyMap;
      obj1[1] = obj2;
      obj1[2] = closure_1_0(530).rejectWithMigratedError();
      const HTTP = closure_1_0(530).HTTP;
      yield HTTP.get(obj1);
      body = arg1.body;
      obj5 = { eventCount: null, recurrenceCounts: null };
      obj5[0] = body.guild_scheduled_event_count;
      obj5[1] = body.guild_scheduled_event_exception_counts;
      let obj6 = closure_1_1(709);
      obj6 = { type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS", guildId: null, eventId: null, counts: null };
      obj6[1] = body;
      obj6[2] = obj5;
      obj6[3] = obj5;
      obj6.dispatch(obj6);
      return obj5;
    })();
  },
  cancelGuildEvent(arg0, arg1) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj, rejectWithError: null };
    obj = { status: constants.CANCELED };
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  deleteGuildEvent(closure_1_0, c1) {
    const HTTP = sendRequest.HTTP;
    const obj = { url: closure_10.GUILD_EVENT(c1, closure_1_0), rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  getGuildEventsForCurrentUser(arg0) {
    closure_0 = arg0;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              let body = tmp5;
              body = undefined;
              const HTTP = closure_1_0(530).HTTP;
              obj1 = { url: null, query: null, rejectWithError: null };
              obj1[0] = closure_1_10.USER_GUILD_EVENTS;
              const obj2 = { guild_ids: null };
              const items = [closure_1_0];
              obj2[0] = items;
              obj1[1] = obj2;
              obj1[2] = closure_1_0(530).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            body = arg1.body;
            obj = closure_1_1(709);
            const obj5 = { type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS", guildScheduledEventUsers: null, guildId: null };
            obj5[1] = body;
            obj5[2] = body;
            obj.dispatch(obj5);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    })();
  },
  createRsvpForGuildEvent(arg0, arg1, closure_1_2, c3) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = closure_1_2;
    const callback = c3;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === id) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              id = tmp7;
              id = undefined;
              id = id.getId();
              c3 = 1;
              obj1 = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: null, guildId: null, guildEventId: null, guildEventExceptionId: null, response: null };
              obj1[1] = id;
              obj1[2] = closure_1_2;
              obj1[3] = closure_1_0;
              obj1[4] = closure_1_1;
              obj1[5] = c3;
              closure_1_1(closure_1_2[10]).dispatch(obj1);
              const HTTP = closure_1_0(closure_1_2[5]).HTTP;
              let obj2 = { url: null, body: null, rejectWithError: null };
              obj2[0] = closure_1_10.USER_GUILD_EVENT(closure_1_2, closure_1_0, closure_1_1);
              const obj3 = { response: null };
              obj3[0] = c3;
              obj2[1] = obj3;
              const obj8 = closure_1_1(closure_1_2[10]);
              obj2[2] = closure_1_0(closure_1_2[5]).rejectWithMigratedError();
              id = 2;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.put(obj2);
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_1 = closure_2;
            obj2 = closure_1_1(closure_1_2[10]);
            const obj5 = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: null, guildId: null, guildEventId: null, guildEventExceptionId: null, response: null };
            obj5[1] = id;
            obj5[2] = closure_2;
            obj5[3] = id;
            obj5[4] = closure_1;
            obj5[5] = c3;
            obj2.dispatch(obj5);
            throw closure_1;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp21) {
          closure_2 = tmp21;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp21;
          } else {
            id = tmp;
          }
        }
      }
    })();
  },
  deleteRsvpForGuildEvent(arg0, arg1, closure_1_2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = closure_1_2;
    return callback(function*() {
      if (rsvp === 2) {
        rsvp = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          rsvp = 2;
          if (0 === id) {
            if (arg0 === 1) {
              rsvp = 3;
              throw arg1;
            } else if (arg0 === 2) {
              rsvp = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              rsvp = tmp3;
              id = tmp7;
              id = undefined;
              rsvp = undefined;
              id = id.getId();
              rsvp = rsvp.getRsvp(closure_1_0, closure_1_1, id);
              if (null != rsvp) {
                c3 = 1;
                let obj4 = closure_1_1(closure_1_2[10]);
                obj1 = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: null, guildId: null, guildEventId: null, guildEventExceptionId: null, response: null };
                obj1[1] = id;
                obj1[2] = closure_1_2;
                obj1[3] = closure_1_0;
                obj1[4] = closure_1_1;
                obj1[5] = rsvp.response;
                obj4.dispatch(obj1);
                const HTTP = closure_1_0(closure_1_2[5]).HTTP;
                let obj2 = { url: null, rejectWithError: null };
                obj2[0] = closure_1_10.USER_GUILD_EVENT(closure_1_2, closure_1_0, closure_1_1);
                obj2[1] = closure_1_0(closure_1_2[5]).rejectWithMigratedError();
                id = 2;
                rsvp = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.del(obj2);
                return obj3;
              } else {
                rsvp = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            obj2 = closure_1_1(closure_1_2[10]);
            obj4 = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: null, guildId: null, guildEventId: null, guildEventExceptionId: null, response: null };
            obj4[1] = id;
            obj4[2] = closure_2;
            obj4[3] = id;
            obj4[4] = rsvp;
            obj4[5] = rsvp.response;
            obj2.dispatch(obj4);
            throw closure_2;
          } else if (arg0 === 1) {
            rsvp = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            rsvp = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c3 = 0;
            rsvp = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp34) {
          closure_2 = tmp34;
          if (tmp4 === c3) {
            rsvp = tmp2;
            throw tmp34;
          } else {
            id = tmp;
          }
        }
      }
    })();
  },
  updateRsvp(arg0, arg1, arg2, arg3, arg4) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    const callback = arg3;
    closure_4 = arg4;
    const self = this;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              closure_0 = tmp8;
              if (null != obj7.getExistingRsvp(closure_1_0, closure_1_1)) {
                c3 = 1;
                v0 = 3;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = c5.deleteRsvpForGuildEvent(tmp48, tmp49, closure_1_2);
                return obj1;
              } else {
                c3 = 2;
                v0 = 4;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = c5.createRsvpForGuildEvent(tmp48, tmp49, closure_1_2, c3);
                return obj2;
              }
              obj7 = closure_1_0(closure_1_2[11]);
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              closure_0 = closure_2;
              if (v0 != null) {
                tmp25(closure_0);
              }
            } else {
              if (2 === tmp8) {
                c3 = 0;
                closure_1 = closure_2;
                if (v0 != null) {
                  tmp17(closure_1);
                }
              } else if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  if (v0 != null) {
                    v0();
                  }
                  c3 = 0;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                if (v0 != null) {
                  v0();
                }
                c3 = 0;
              }
              c3 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c5 = 3;
          }
        } catch (tmp37) {
          closure_2 = tmp37;
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp37;
          } else if (tmp2 === tmp39) {
            v0 = tmp2;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  },
  fetchUsersForGuildEvent(id, arg1, guild_id) {
    closure_0 = id;
    closure_1 = arg1;
    closure_2 = guild_id;
    let tmp = arg3;
    if (arg3 === undefined) {
      tmp = closure_9;
    }
    const callback = tmp;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp5;
              closure_0 = undefined;
              if (null != closure_1_0) {
                if (null != dependencyMap) {
                  const HTTP = closure_1_0(530).HTTP;
                  obj1 = { url: null, query: null, rejectWithError: null };
                  obj1[0] = closure_1_10.GUILD_EVENT_USERS(dependencyMap, closure_1_0, closure_1_1);
                  const obj2 = { limit: null, with_member: true };
                  obj2[0] = c3;
                  obj1[1] = obj2;
                  obj1[2] = closure_1_0(530).rejectWithMigratedError();
                  dependencyMap = 1;
                  c3 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = HTTP.get(obj1);
                  return obj3;
                }
              }
              c3 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = [];
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_0 = arg1;
            let obj6 = closure_1_1(709);
            obj6 = { type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS", guildEventId: null, guildScheduledEventUsers: null, guildId: null, guildEventExceptionId: null };
            obj6[1] = closure_0;
            obj6[2] = closure_0.body;
            obj6[3] = dependencyMap;
            obj6[4] = closure_1;
            obj6.dispatch(obj6);
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_0.body.users;
            return obj;
          }
        } catch (tmp6) {
          c3 = tmp;
          throw tmp6;
        }
      }
    })();
  },
  createGuildEventException(arg0, guild_id, id) {
    ({ original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = sendRequest.HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTIONS(guild_id, id), body: { original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  updateGuildEventException(arg0, guild_id, id, c2) {
    ({ scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = sendRequest.HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTION(guild_id, id, c2), body: { scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  deleteGuildEventException(guild_id, id, event_exception_id) {
    const HTTP = sendRequest.HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  deleteRecurrence(c1, closure_1_0, c2, closure_1_3) {
    const self = this;
    if (null != closure_1_3) {
      let obj = { scheduled_start_time: null, scheduled_end_time: null, is_canceled: true };
      ({ scheduled_start_time: obj4[0], scheduled_end_time: obj4[1] } = closure_1_3);
      return self.updateGuildEventException(obj, c1, closure_1_0, c2);
    } else {
      obj = DISCORD_EPOCHDefault;
      obj = { original_scheduled_start_time: null, is_canceled: true };
      const _Date = Date;
      const date = new Date(obj.extractTimestamp(c2));
      obj[0] = date.toISOString();
      return self.createGuildEventException(obj, c1, closure_1_0);
    }
  }
};