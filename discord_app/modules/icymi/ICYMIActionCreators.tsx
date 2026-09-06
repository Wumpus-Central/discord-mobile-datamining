// discord_app/modules/icymi/ICYMIActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import ICYMIUtils from "ICYMIUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIActionCreators.tsx");

export default {
  fetchPopularGuildsFromCategories(stateFromStoresArray1, sum) {
    closure_0 = stateFromStoresArray1;
    closure_1 = sum;
    return (async () => {
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const offset = tmp3;
              const category_ids = tmp7;
              let guilds;
              c3 = 1;
              const HTTP = category_ids(tmp24[2]).HTTP;
              const request = { url: constants.GRAVITY_TOPIC_GUILDS, body: null, rejectWithError: false };
              const obj1 = { category_ids, offset };
              request.body = obj1;
              constants = 2;
              c5 = 1;
              const obj2 = { value: HTTP.post(request), done: false };
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp24;
            let obj3 = offset(tmp24[4]);
            obj3.captureException(closure_128_1);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            guilds = value.body.guilds;
            obj = offset(tmp24[3]);
            const obj4 = {
              type: "LOAD_ICYMI_POPULAR_GUILDS",
              categoryIds: closure_129_0,
              guilds,
              offset: closure_129_1,
            };
            obj.dispatch(obj4);
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp24) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp24;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  },
  fetchDehydrated(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    ({ isInitialLoad: require, isReloading: importDefault, forceRefresh: dependencyMap } = obj);
    return (async () => {
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if (obj13.icymiEnabled("fetchDehydrated")) {
                if (importDefault) {
                  let obj4 = tmp3(tmp24[3]);
                  obj4.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
                }
                c3 = 1;
                const _Date = Date;
                closure_128_0 = Date.now();
                const HTTP = tmp5(tmp24[2]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: null, rejectWithError: false };
                const obj1 = { refresh };
                request.query = obj1;
                constants = 2;
                c5 = 1;
                const obj2 = { value: HTTP.get(request), done: false };
                return obj2;
              }
              obj13 = tmp5(tmp24[5]);
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              closure_128_2 = tmp24;
              let obj3 = tmp3(tmp24[4]);
              obj3.captureException(closure_128_2);
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_1 = value;
                obj4 = {
                  type: "LOAD_ICYMI_DEHYDRATED",
                  items: closure_128_1.body.items,
                  loadId: closure_128_1.body.load_id,
                  startTime: closure_128_0,
                  isReloading: closure_129_1,
                  isInitialLoad: closure_129_0,
                };
                constants = 3;
                c5 = 1;
                const obj5 = { value: tmp3(tmp24[3]).dispatch(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
          c5 = 3;
        } catch (tmp24) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp24;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  },
  gravityJoinGuild(items, icymi_info_modal) {
    closure_1 = icymi_info_modal;
    return (async () => {
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const _location = tmp3;
              items = tmp7;
              if (obj8.icymiEnabled("gravityJoinGuild")) {
                if (0 !== items.length) {
                  c3 = 1;
                  const HTTP = items(tmp20[2]).HTTP;
                  const request = { url: constants.GRAVITY_JOIN_GUILD, body: null, rejectWithError: false };
                  let obj1 = { guild_ids: tmp16, location: _location };
                  request.body = obj1;
                  constants = 2;
                  c5 = 1;
                  const obj2 = { value: HTTP.post(request), done: false };
                  return obj2;
                }
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp20;
            obj1 = _location(tmp20[4]);
            obj1.captureException(closure_128_0);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp20) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp20;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  },
  fetchForNotification(channel_id, message_id) {
    closure_0 = channel_id;
    closure_1 = message_id;
    return (async () => {
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              message_id = tmp3;
              channel_id = tmp7;
              closure_128_0 = undefined;
              if (obj11.icymiEnabled("fetchInitial")) {
                c3 = 1;
                const HTTP = tmp35(tmp26[2]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: null, rejectWithError: false };
                const obj1 = { message_items: null, activity_items: null };
                const obj2 = { channel_id, message_id };
                const items = [obj2];
                obj1.message_items = items;
                obj1.activity_items = [];
                request.body = obj1;
                constants = 2;
                c5 = 1;
                let obj3 = { value: HTTP.post(request), done: false };
                return obj3;
              }
              obj11 = channel_id(tmp26[5]);
              tmp35 = channel_id;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = tmp26;
              obj3 = message_id(tmp26[4]);
              obj3.captureException(closure_128_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = value;
              if (0 !== closure_128_0.body.message_items.length) {
                obj = message_id(tmp26[3]);
                const obj5 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: closure_128_0.body.message_items[0] };
                obj.dispatch(obj5);
                c3 = 0;
              }
            }
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          c5 = 3;
        } catch (tmp26) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp26;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  },
  fetchForStatusNotification(customStatusItem) {
    let obj = ICYMIUtils;
    if (obj.icymiEnabled("fetchInitialStatus")) {
      obj = { type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem };
      DispatcherDefault.dispatch(obj);
    }
  },
  fetchHydrated(arg0, dependencyMap2, arg2) {
    closure_0 = arg0;
    closure_1 = dependencyMap2;
    closure_2 = arg2;
    return (async () => {
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const endingIndex = tmp3;
              const startingIndex = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              if (obj15.icymiEnabled("fetchHydrated")) {
                const messageItems = tmp33.messageItems;
                closure_128_0 = messageItems;
                const activityItems = tmp33.activityItems;
                closure_128_1 = activityItems;
                if (0 === messageItems.length) {
                  if (0 === activityItems.length) {
                    let obj5 = endingIndex(tmp33[3]);
                    let obj1 = {
                      type: "LOAD_ICYMI_HYDRATED",
                      requestMessageItems: [],
                      requestActivityItems: [],
                      messageItems: [],
                      activityItems: [],
                      startingIndex,
                      endingIndex,
                    };
                    obj5.dispatch(obj1);
                  }
                }
                c3 = 1;
                const HTTP = startingIndex(tmp33[2]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: null, rejectWithError: false };
                let obj2 = { message_items: messageItems, activity_items: activityItems };
                request.body = obj2;
                constants = 2;
                c5 = 1;
                let obj3 = { value: HTTP.post(request), done: false };
                return obj3;
              }
              obj15 = startingIndex(tmp33[5]);
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_4 = tmp33;
              obj1 = endingIndex(tmp33[4]);
              obj1.captureException(closure_128_4);
              obj2 = startingIndex(tmp33[5]);
              closure_128_3 = obj2.generateHydrationId(closure_129_0, closure_129_1);
              obj3 = endingIndex(tmp33[3]);
              const obj4 = { type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: closure_128_3 };
              obj3.dispatch(obj4);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_2 = value;
              obj5 = {
                type: "LOAD_ICYMI_HYDRATED",
                requestMessageItems: closure_128_0,
                requestActivityItems: closure_128_1,
                messageItems: closure_128_2.body.message_items,
                activityItems: closure_128_2.body.activity_items,
                startingIndex: closure_129_0,
                endingIndex: closure_129_1,
              };
              endingIndex(tmp33[3]).dispatch(obj5);
              c3 = 0;
              const obj13 = endingIndex(tmp33[3]);
            }
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
          c5 = 3;
        } catch (tmp33) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp33;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  },
  getGuildChannelScores() {
    return (async () => {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              if (obj9.icymiEnabled("guildChannelScores")) {
                c3 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj1 = { url: constants.GRAVITY_CUSTOM_SCORES, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj2 = { value: HTTP.get(obj1), done: false };
                return obj2;
              }
              obj9 = ICYMIUtils;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              let obj3 = closure_129_1(closure_129_2[4]);
              obj3.captureException(closure_128_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              obj = closure_129_1(closure_129_2[3]);
              obj3 = { type: "LOAD_ICYMI_CUSTOM_SCORES", scores: closure_128_0.body };
              obj.dispatch(obj3);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          }
          c5 = 3;
        } catch (tmp24) {
          closure_2 = tmp24;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp24;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  getRecommendedGuilds() {
    return (async () => {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              if (obj9.icymiEnabled("recommendedGuilds")) {
                c3 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj1 = { url: constants.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj2 = { value: HTTP.get(obj1), done: false };
                return obj2;
              }
              obj9 = ICYMIUtils;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              let obj3 = closure_129_1(closure_129_2[4]);
              obj3.captureException(closure_128_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              obj = closure_129_1(closure_129_2[3]);
              obj3 = { type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: closure_128_0.body.guilds };
              obj.dispatch(obj3);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          }
          c5 = 3;
        } catch (tmp24) {
          closure_2 = tmp24;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp24;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  getMediaForCurrentStatus() {
    return (async () => {
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
              closure_1 = tmp3;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if (obj9.icymiEnabled("mediaForCurrentStatus")) {
                const CustomStatusSetting = UserSettings.CustomStatusSetting;
                const setting = CustomStatusSetting.getSetting();
                closure_128_0 = setting;
                if (null != setting) {
                  if (null != setting.createdAtMs) {
                    c3 = 1;
                    const HTTP = HTTPUtils.HTTP;
                    const obj1 = { url: constants.GRAVITY_ATTACHMENTS, rejectWithError: false };
                    c4 = 2;
                    c5 = 1;
                    const obj2 = { value: HTTP.get(obj1), done: false };
                    return obj2;
                  }
                }
              }
              obj9 = ICYMIUtils;
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              closure_128_2 = closure_2;
              let obj3 = closure_129_1(closure_129_2[4]);
              obj3.captureException(closure_128_2);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_1 = value;
              obj = closure_129_1(closure_129_2[3]);
              obj3 = {
                type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA",
                attachments: closure_128_1.body.attachments,
                createdAtMs: null,
              };
              const _Number = Number;
              obj3.createdAtMs = Number(closure_128_0.createdAtMs);
              obj.dispatch(obj3);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          }
          c5 = 3;
        } catch (tmp28) {
          closure_2 = tmp28;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp28;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  reloadICYMITab() {
    DispatcherDefault.dispatch({ type: "RELOAD_ICYMI" });
  },
  loadHydratedAttempt(hydrationId) {
    const obj = { type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId };
    obj.dispatch(obj);
  },
  openICYMITab() {
    DispatcherDefault.dispatch({ type: "ICYMI_TAB_OPENED" });
  },
  closeICYMITab() {
    DispatcherDefault.dispatch({ type: "ICYMI_TAB_CLOSED" });
  },
  startItemsDwell(items) {
    const obj = { type: "ICYMI_ITEMS_DWELL_START", items };
    obj.dispatch(obj);
  },
  triggerItemsLongImpression(items) {
    const obj = { type: "ICYMI_ITEMS_LONG_IMPRESSION", items };
    obj.dispatch(obj);
  },
  ackGravityItems(items, override) {
    const obj = { type: "ICYMI_ACK_ITEMS", items, override };
    return obj.dispatch(obj);
  },
  gravityScrollEvent(timestamp) {
    const obj = { type: "ICYMI_SCROLL_EVENT", timestamp };
    return obj.dispatch(obj);
  },
  setFilters(filters) {
    const obj = { type: "SET_ICYMI_FILTERS", filters };
    return obj.dispatch(obj);
  },
  giveFeedback() {
    return DispatcherDefault.dispatch({ type: "ICYMI_FEEDBACK_GIVEN" });
  },
  clearReadStates() {
    return DispatcherDefault.dispatch({ type: "CLEAR_ICYMI_READ_STATES" });
  },
  addedRecommendedGuild() {
    return DispatcherDefault.dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" });
  },
  setVideosMuted(muted) {
    const obj = { type: "ICYMI_SET_VIDEOS_MUTED", muted };
    obj.dispatch(obj);
  },
  setTabFocused(isFocused) {
    const obj = { type: "ICYMI_SET_FOCUSED_TAB", focused: isFocused };
    obj.dispatch(obj);
  },
  setCardHeight(itemId, height) {
    const obj = { type: "ICYMI_SET_CARD_HEIGHT", itemId, height };
    obj.dispatch(obj);
  },
  takeSurvey() {
    let timestamp = arg0;
    if (arg0 === undefined) {
      const _Date = Date;
      timestamp = Date.now();
    }
    DispatcherDefault.dispatch({ type: "ICYMI_TAKE_SURVEY", takenAt: timestamp });
  },
  itemInteracted(id, hotwheels_gaming_activity, open_profile) {
    const obj = {
      type: "ICYMI_ITEM_INTERACTED",
      itemId: id,
      itemType: hotwheels_gaming_activity,
      actionType: open_profile,
    };
    obj.dispatch(obj);
  },
  feedItemActioned(arg0) {
    const obj = { type: "ICYMI_FEED_ITEM_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
  feedFilterActioned(arg0) {
    const obj = { type: "ICYMI_FEED_FILTER_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
  feedPageActioned(arg0) {
    const obj = { type: "ICYMI_FEED_PAGE_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
};
