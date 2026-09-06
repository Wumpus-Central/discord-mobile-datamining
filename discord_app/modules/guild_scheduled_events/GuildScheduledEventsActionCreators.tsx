// discord_app/modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import router_utils from "../routing/router_utils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../actions/SelectedChannelActionCreators.tsx";
import EditGuildEventUtils from "utils/EditGuildEventUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildScheduledEventStore from "GuildScheduledEventStore.tsx";

require = fn;
const GuildScheduledEventsConstants = fn(1963);
({ ENTITY_TYPES_REQUIRED_CHANNEL_ID: metroRequire, ENTITY_TYPES_REQUIRED_ENTITY_METADATA: closure_7, GuildScheduledEventStatus: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: closure_9 } = GuildScheduledEventsConstants);
const Constants = fn(1074);
({ Endpoints: c10, Routes: closure_11 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx");

export default {
  startEvent(arg0, arg1) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_EVENT(arg1, arg0), body: { status: constants.ACTIVE }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.patch(request);
  },
  endEvent(arg0, arg1) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_EVENT(arg1, arg0), body: { status: constants.COMPLETED }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.patch(request);
  },
  joinVoiceEvent(arg0, id) {
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(id);
    router_utils.transitionTo(closure_1_11.CHANNEL(arg0, id));
  },
  saveEvent(arg0, entityType, arg2) {
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
    obj = { name: entityType.name, description: entityType.description, image, privacy_level: entityType.privacyLevel, scheduled_start_time: entityType.scheduledStartTime, scheduled_end_time: entityType.scheduledEndTime, entity_type: entityType.entityType, channel_id: channelId, entity_metadata: entityMetadata, recurrence_rule: EditGuildEventUtils.recurrenceRuleToServer(entityType.recurrenceRule) };
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_EVENT(arg2, arg0), body: obj, rejectWithError: null };
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return HTTP.patch(request);
  },
  createGuildEvent(name, id) {
    const obj = { name: name.name, description: name.description, image: name.image, privacy_level: name.privacyLevel, scheduled_start_time: name.scheduledStartTime, scheduled_end_time: name.scheduledEndTime, entity_type: name.entityType, channel_id: name.channelId, entity_metadata: name.entityMetadata, recurrence_rule: EditGuildEventUtils.recurrenceRuleToServer(name.recurrenceRule) };
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_EVENTS_FOR_GUILD(id), body: obj, rejectWithError: null };
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return HTTP.post(request);
  },
  fetchGuildEvent(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      await tmp5(4802).httpGetWithCountryCodeQuery({ url: closure_1_10.GUILD_EVENT(tmp5, tmp2), rejectWithError: tmp5(1272).rejectWithMigratedError() });
      const body = arg1.body;
      tmp2(573).dispatch({ type: "FETCH_GUILD_EVENT", guildScheduledEvent: body });
      return body;
    })();
  },
  fetchGuildEventsForGuild(guild_id) {
    closure_0 = guild_id;
    return (async () => {
      await tmp5(4802).httpGetWithCountryCodeQuery({ url: closure_1_10.GUILD_EVENTS_FOR_GUILD(tmp5), rejectWithError: tmp5(1272).rejectWithMigratedError() });
      const body = arg1.body;
      { url: closure_1_10.GUILD_EVENTS_FOR_GUILD(tmp5), rejectWithError: tmp5(1272).rejectWithMigratedError() };
      tmp2(573).dispatch({ type: "FETCH_GUILD_EVENTS_FOR_GUILD", guildId: closure_129_0, guildScheduledEvents: body });
      return body;
    })();
  },
  fetchGuildEventUserCounts(arg0, arg1, found) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = found;
    return (async () => {
      const request = { url: closure_1_10.GUILD_EVENT_USER_COUNTS(tmp5, tmp2), query: { guild_scheduled_event_exception_ids }, rejectWithError: tmp5(guild_scheduled_event_exception_ids[5]).rejectWithMigratedError() };
      const HTTP = tmp5(guild_scheduled_event_exception_ids[5]).HTTP;
      await HTTP.get(request);
      const body = arg1.body;
      closure_128_1 = { eventCount: body.guild_scheduled_event_count, recurrenceCounts: body.guild_scheduled_event_exception_counts };
      tmp2(guild_scheduled_event_exception_ids[10]).dispatch({ type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS", guildId: closure_129_0, eventId: closure_129_1, counts: closure_128_1 });
      return closure_128_1;
    })();
  },
  cancelGuildEvent(arg0, arg1) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_EVENT(arg1, arg0), body: { status: constants.CANCELED }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.patch(request);
  },
  deleteGuildEvent(arg0, arg1) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: closure_1_10.GUILD_EVENT(arg1, arg0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  getGuildEventsForCurrentUser(arg0) {
    closure_0 = arg0;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let body;
              const HTTP = tmp5(1272).HTTP;
              const request = { url: constants.USER_GUILD_EVENTS, query: null, rejectWithError: null };
              const obj1 = { guild_ids: null };
              const items = [tmp5];
              obj1.guild_ids = items;
              request.query = obj1;
              request.rejectWithError = tmp5(1272).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj2 = { value: HTTP.get(request), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            body = value.body;
            obj = tmp2(573);
            const obj4 = { type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS", guildScheduledEventUsers: body, guildId: closure_129_0 };
            obj.dispatch(obj4);
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
  createRsvpForGuildEvent(arg0, arg1, arg2, arg3) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    asyncGeneratorStep = arg3;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const guildEventExceptionId = tmp3;
              const guildEventId = tmp7;
              closure_128_0 = undefined;
              id = id.getId();
              closure_128_0 = id;
              c3 = 1;
              const obj1 = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: id, guildId, guildEventId, guildEventExceptionId, response };
              guildEventExceptionId(guildId[10]).dispatch(obj1);
              const HTTP = guildEventId(guildId[5]).HTTP;
              const request = { url: closure_1_10.USER_GUILD_EVENT(guildId, guildEventId, guildEventExceptionId), body: null, rejectWithError: null };
              let obj2 = { response };
              request.body = obj2;
              const obj8 = guildEventExceptionId(guildId[10]);
              request.rejectWithError = guildEventId(guildId[5]).rejectWithMigratedError();
              id = 2;
              c5 = 1;
              const obj3 = { value: HTTP.put(request), done: false };
              return obj3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = guildId;
            obj2 = guildEventExceptionId(guildId[10]);
            const obj4 = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: closure_128_0, guildId: closure_129_2, guildEventId: closure_129_0, guildEventExceptionId: closure_129_1, response: closure_129_3 };
            obj2.dispatch(obj4);
            throw closure_128_1;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp21) {
          guildId = tmp21;
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
  deleteRsvpForGuildEvent(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async (arg0, value) => {
      if (rsvp === 2) {
        rsvp = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              rsvp = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const guildEventExceptionId = tmp3;
              const guildEventId = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              id = id.getId();
              closure_128_0 = id;
              rsvp = rsvp.getRsvp(guildEventId, guildEventExceptionId, id);
              closure_128_1 = rsvp;
              if (null != rsvp) {
                c3 = 1;
                let obj4 = guildEventExceptionId(guildId[10]);
                const obj1 = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: id, guildId, guildEventId, guildEventExceptionId, response: rsvp.response };
                obj4.dispatch(obj1);
                const HTTP = guildEventId(guildId[5]).HTTP;
                let obj2 = { url: closure_1_10.USER_GUILD_EVENT(guildId, guildEventId, guildEventExceptionId), rejectWithError: guildEventId(guildId[5]).rejectWithMigratedError() };
                id = 2;
                rsvp = 1;
                const obj3 = { value: HTTP.del(obj2), done: false };
                return obj3;
              } else {
                rsvp = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_2 = guildId;
            obj2 = guildEventExceptionId(guildId[10]);
            obj4 = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: closure_128_0, guildId: closure_129_2, guildEventId: closure_129_0, guildEventExceptionId: closure_129_1, response: closure_128_1.response };
            obj2.dispatch(obj4);
            throw closure_128_2;
          } else if (arg0 === 1) {
            rsvp = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            rsvp = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c3 = 0;
            rsvp = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp34) {
          guildId = tmp34;
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
    asyncGeneratorStep = arg3;
    closure_4 = arg4;
    const self = this;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp4;
              closure_0 = tmp8;
              if (null != obj7.getExistingRsvp(closure_0, closure_1)) {
                c3 = 1;
                c4 = 3;
                c5 = 1;
                const obj1 = { value: self.deleteRsvpForGuildEvent(tmp47, tmp48, tmp37), done: false };
                return obj1;
              } else {
                c3 = 2;
                c4 = 4;
                c5 = 1;
                const obj2 = { value: self.createRsvpForGuildEvent(tmp47, tmp48, tmp37, closure_3), done: false };
                return obj2;
              }
              obj7 = closure_0(tmp37[11]);
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              closure_128_0 = tmp37;
              if (closure_129_4 != null) {
                tmp25(closure_128_0);
              }
            } else {
              if (2 === tmp8) {
                c3 = 0;
                closure_128_1 = tmp37;
                if (closure_129_4 != null) {
                  tmp17(closure_128_1);
                }
              } else if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  if (closure_129_4 != null) {
                    closure_129_4();
                  }
                  c3 = 0;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 !== 2) {
                if (closure_129_4 != null) {
                  closure_129_4();
                }
                c3 = 0;
              }
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            }
            c5 = 3;
          }
        } catch (tmp37) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp37;
          } else if (tmp2 === tmp39) {
            c4 = tmp2;
          } else {
            c4 = tmp;
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
    asyncGeneratorStep = tmp;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              if (null != tmp5) {
                if (null != closure_2) {
                  const HTTP = tmp5(1272).HTTP;
                  const request = { url: closure_1_10.GUILD_EVENT_USERS(closure_2, tmp5, tmp2), query: null, rejectWithError: null };
                  const obj1 = { limit, with_member: true };
                  request.query = obj1;
                  request.rejectWithError = tmp5(1272).rejectWithMigratedError();
                  dependencyMap = 1;
                  c3 = 1;
                  const obj2 = { value: HTTP.get(request), done: false };
                  return obj2;
                }
              }
              c3 = 3;
              const obj3 = { value: [], done: true };
              return obj3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_0 = value;
            const obj5 = { type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS", guildEventId: closure_129_0, guildScheduledEventUsers: closure_128_0.body, guildId: closure_129_2, guildEventExceptionId: closure_129_1 };
            tmp2(573).dispatch(obj5);
            c3 = 3;
            obj = { value: closure_128_0.body.users, done: true };
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
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_EVENT_EXCEPTIONS(guild_id, id), body: { original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  updateGuildEventException(arg0, guild_id, id, event_exception_id) {
    ({ scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), body: { scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.patch(request);
  },
  deleteGuildEventException(guild_id, id, event_exception_id) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: closure_1_10.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  deleteRecurrence(guild_id, id, event_exception_id, arg3) {
    const self = this;
    if (null != arg3) {
      let obj = { scheduled_start_time: null, scheduled_end_time: null, is_canceled: true };
      ({ scheduled_start_time: obj4.scheduled_start_time, scheduled_end_time: obj4.scheduled_end_time } = arg3);
      return self.updateGuildEventException(obj, guild_id, id, event_exception_id);
    } else {
      obj = { original_scheduled_start_time: null, is_canceled: true };
      const _Date = Date;
      const date = new Date(obj.extractTimestamp(event_exception_id));
      obj.original_scheduled_start_time = date.toISOString();
      return self.createGuildEventException(obj, guild_id, id);
    }
  }
};