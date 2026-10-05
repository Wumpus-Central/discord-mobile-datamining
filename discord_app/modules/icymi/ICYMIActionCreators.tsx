// discord_app/modules/icymi/ICYMIActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import ICYMIExperiment from "ICYMIExperiment.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5, constants, refresh;

const Endpoints = Constants.Endpoints;
let obj = {
  fetchPopularGuildsFromCategories(stateFromStoresArray1, sum) {
    let closure_0 = stateFromStoresArray1;
    let closure_1 = sum;
    return (async () => {
      let obj5;
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
          let offset;
          let guilds;
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              offset = tmp;
              const category_ids = tmp4;
              guilds = undefined;
              c3 = 1;
              const HTTP = category_ids(closure_2[2]).HTTP;
              const request = { url: constants.GRAVITY_TOPIC_GUILDS, body: obj5, rejectWithError: false };
              obj5 = { category_ids, offset };
              constants = 2;
              c5 = 1;
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
            }
          } else if (1 === constants) {
            c3 = 0;
            offset = closure_2;
            const obj4 = offset(closure_2[4]);
            obj4.captureException(offset);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            guilds = value.body.guilds;
            const obj8 = {
              type: "LOAD_ICYMI_POPULAR_GUILDS",
              categoryIds: closure_129_0,
              guilds,
              offset: closure_129_1,
            };
            const obj = offset(closure_2[3]);
            obj.dispatch(obj8);
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            constants = 1;
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
      let HTTP;
      let closure_1;
      let closure_2;
      let obj10;
      let obj5;
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
          let startTime;
          let tmp;
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              startTime = undefined;
              tmp = undefined;
              const obj12 = HTTP(refresh[5]);
              const tmp36 = HTTP;
              if (obj12.icymiEnabled("fetchDehydrated")) {
                if (importDefault) {
                  const obj4 = tmp(refresh[3]);
                  obj4.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
                }
                c3 = 1;
                const _Date = Date;
                startTime = Date.now();
                HTTP = tmp36(refresh[2]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: obj5, rejectWithError: false };
                obj5 = { refresh: dependencyMap };
                constants = 2;
                c5 = 1;
                const obj6 = { value: HTTP.get(request), done: false };
                return obj6;
              }
            }
          } else if (1 === constants) {
            c3 = 0;
            HTTP = tmp(refresh[4]);
            HTTP.captureException(refresh);
          } else if (2 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              tmp = value;
              const obj8 = {
                type: "LOAD_ICYMI_DEHYDRATED",
                items: tmp.body.items,
                loadId: tmp.body.load_id,
                startTime,
                isReloading: closure_129_1,
                isInitialLoad: closure_129_0,
              };
              constants = 3;
              c5 = 1;
              const obj9 = { value: obj10.dispatch(obj8), done: false };
              obj10 = tmp(refresh[3]);
              return obj9;
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
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp20) {
          refresh = tmp20;
          if (0 === c3) {
            c5 = 3;
            throw tmp20;
          } else {
            constants = 1;
          }
        }
      }
    })();
  },
  gravityJoinGuild(items, icymi_info_modal) {
    let closure_1 = icymi_info_modal;
    return (async () => {
      let closure_0;
      let obj5;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let _location;
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              _location = tmp;
              items = tmp4;
              const obj8 = items(closure_2[5]);
              const tmp23 = items;
              if (obj8.icymiEnabled("gravityJoinGuild")) {
                if (0 !== items.length) {
                  c3 = 1;
                  const HTTP = tmp23(closure_2[2]).HTTP;
                  const request = { url: constants.GRAVITY_JOIN_GUILD, body: obj5, rejectWithError: false };
                  obj5 = { guild_ids: tmp13, location: _location };
                  constants = 2;
                  c5 = 1;
                  const obj6 = { value: HTTP.post(request), done: false };
                  return obj6;
                }
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === constants) {
            c3 = 0;
            items = closure_2;
            const obj2 = _location(closure_2[4]);
            obj2.captureException(items);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp17) {
          closure_2 = tmp17;
          if (0 === c3) {
            c5 = 3;
            throw tmp17;
          } else {
            constants = 1;
          }
        }
      }
    })();
  },
  fetchForNotification(channel_id, message_id) {
    let closure_0 = channel_id;
    let closure_1 = message_id;
    return (async () => {
      let items;
      let obj5;
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              message_id = tmp;
              channel_id = undefined;
              const obj11 = channel_id(closure_2[5]);
              const tmp31 = channel_id;
              if (obj11.icymiEnabled("fetchInitial")) {
                c3 = 1;
                const HTTP = tmp31(closure_2[2]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: obj5, rejectWithError: false };
                obj5 = { message_items: items, activity_items: [] };
                const obj6 = { channel_id, message_id };
                items = [obj6];
                constants = 2;
                c5 = 1;
                const obj7 = { value: HTTP.post(request), done: false };
                return obj7;
              }
            }
          } else if (1 === constants) {
            c3 = 0;
            message_id = closure_2;
            const obj4 = message_id(closure_2[4]);
            obj4.captureException(message_id);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            channel_id = value;
            if (0 === channel_id.body.message_items.length) {
              c3 = 0;
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj9 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: channel_id.body.message_items[0] };
              const obj = message_id(closure_2[3]);
              obj.dispatch(obj9);
              c3 = 0;
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp23) {
          closure_2 = tmp23;
          if (0 === c3) {
            c5 = 3;
            throw tmp23;
          } else {
            constants = 1;
          }
        }
      }
    })();
  },
  fetchForStatusNotification(customStatusItem) {
    const obj = ICYMIExperiment;
    if (obj.icymiEnabled("fetchInitialStatus")) {
      const obj3 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  },
  fetchHydrated(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp30;
        let c3;
        try {
          let endingIndex;
          let startingIndex;
          let messageItems;
          let activityItems;
          let hydrationId;
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              endingIndex = tmp;
              startingIndex = tmp4;
              messageItems = undefined;
              activityItems = undefined;
              tmp30 = undefined;
              hydrationId = undefined;
              const obj15 = startingIndex(tmp30[5]);
              if (obj15.icymiEnabled("fetchHydrated")) {
                messageItems = tmp30.messageItems;
                activityItems = tmp30.activityItems;
                if (0 === messageItems.length) {
                  if (0 === activityItems.length) {
                    const obj8 = {
                      type: "LOAD_ICYMI_HYDRATED",
                      requestMessageItems: [],
                      requestActivityItems: [],
                      messageItems: [],
                      activityItems: [],
                      startingIndex,
                      endingIndex,
                    };
                    const obj6 = endingIndex(tmp30[3]);
                    obj6.dispatch(obj8);
                  }
                }
                c3 = 1;
                const HTTP = startingIndex(tmp30[2]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: obj9, rejectWithError: false };
                obj9 = { message_items: messageItems, activity_items: activityItems };
                constants = 2;
                c5 = 1;
                const obj10 = { value: HTTP.post(request), done: false };
                return obj10;
              }
            }
          } else if (1 === constants) {
            c3 = 0;
            let closure_4 = tmp30;
            const obj2 = endingIndex(tmp30[4]);
            obj2.captureException(closure_4);
            const obj3 = startingIndex(tmp30[6]);
            hydrationId = obj3.generateHydrationId(closure_129_0, closure_129_1);
            const obj11 = { type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId };
            const obj4 = endingIndex(tmp30[3]);
            obj4.dispatch(obj11);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp30 = value;
            const obj12 = {
              type: "LOAD_ICYMI_HYDRATED",
              requestMessageItems: messageItems,
              requestActivityItems: activityItems,
              messageItems: tmp30.body.message_items,
              activityItems: tmp30.body.activity_items,
              startingIndex: closure_129_0,
              endingIndex: closure_129_1,
            };
            const obj13 = endingIndex(tmp30[3]);
            obj13.dispatch(obj12);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp30) {
          if (0 === c3) {
            c5 = 3;
            throw tmp30;
          } else {
            constants = 1;
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
          let closure_1;
          let body;
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
              body = undefined;
              const obj9 = ICYMIExperiment;
              if (obj9.icymiEnabled("guildChannelScores")) {
                c3 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj5 = { url: constants.GRAVITY_CUSTOM_SCORES, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.get(obj5), done: false };
                return obj6;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            const obj4 = closure_129_1(closure_129_2[4]);
            obj4.captureException(closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value;
            const obj8 = { type: "LOAD_ICYMI_CUSTOM_SCORES", scores: body.body };
            const obj = closure_129_1(closure_129_2[3]);
            obj.dispatch(obj8);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
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
          let closure_1;
          let body;
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
              body = undefined;
              const obj9 = ICYMIExperiment;
              if (obj9.icymiEnabled("recommendedGuilds")) {
                c3 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj5 = { url: constants.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.get(obj5), done: false };
                return obj6;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            const obj4 = closure_129_1(closure_129_2[4]);
            obj4.captureException(closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value;
            const obj8 = { type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: body.body.guilds };
            const obj = closure_129_1(closure_129_2[3]);
            obj.dispatch(obj8);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
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
          let setting;
          let body;
          let HTTP;
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
              setting = undefined;
              body = undefined;
              const obj7 = ICYMIExperiment;
              if (obj7.icymiEnabled("mediaForCurrentStatus")) {
                const CustomStatusSetting = UserSettings.CustomStatusSetting;
                setting = CustomStatusSetting.getSetting();
                if (null != setting) {
                  if (null != setting.createdAtMs) {
                    c3 = 1;
                    HTTP = HTTPUtils.HTTP;
                    const obj4 = { url: constants.GRAVITY_ATTACHMENTS, rejectWithError: false };
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: HTTP.get(obj4), done: false };
                    return obj5;
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            HTTP = closure_129_1(closure_129_2[4]);
            HTTP.captureException(closure_2);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            body = value;
            HTTP = closure_129_1(closure_129_2[3]);
            const obj = {
              type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA",
              attachments: body.body.attachments,
              createdAtMs: Number(setting.createdAtMs),
            };
            const _Number = Number;
            const dispatch = HTTP.dispatch;
            dispatch(obj);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp24) {
          closure_2 = tmp24;
          if (0 === c3) {
            c5 = 3;
            throw tmp24;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  reloadICYMITab() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "RELOAD_ICYMI" });
  },
  loadHydratedAttempt(hydrationId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId };
    obj.dispatch(obj2);
  },
  openICYMITab() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "ICYMI_TAB_OPENED" });
  },
  closeICYMITab() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "ICYMI_TAB_CLOSED" });
  },
  startItemsDwell(items) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ICYMI_ITEMS_DWELL_START", items };
    obj.dispatch(obj2);
  },
  triggerItemsLongImpression(items) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ICYMI_ITEMS_LONG_IMPRESSION", items };
    obj.dispatch(obj2);
  },
  ackGravityItems(items, override) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ICYMI_ACK_ITEMS", items, override };
    return obj.dispatch(obj2);
  },
  gravityScrollEvent(timestamp) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ICYMI_SCROLL_EVENT", timestamp };
    return obj.dispatch(obj2);
  },
  setFilters(filters) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SET_ICYMI_FILTERS", filters };
    return obj.dispatch(obj2);
  },
  giveFeedback() {
    const obj = DispatcherDefault;
    return obj.dispatch({ type: "ICYMI_FEEDBACK_GIVEN" });
  },
  clearReadStates() {
    const obj = DispatcherDefault;
    return obj.dispatch({ type: "CLEAR_ICYMI_READ_STATES" });
  },
  addedRecommendedGuild() {
    const obj = DispatcherDefault;
    return obj.dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" });
  },
  setVideosMuted(muted) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ICYMI_SET_VIDEOS_MUTED", muted };
    obj.dispatch(obj2);
  },
  setTabFocused(isFocused) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ICYMI_SET_FOCUSED_TAB", focused: isFocused };
    obj.dispatch(obj2);
  },
  setCardHeight(itemId, height) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ICYMI_SET_CARD_HEIGHT", itemId, height };
    obj.dispatch(obj2);
  },
  takeSurvey() {
    let timestamp = arg0;
    if (arg0 === undefined) {
      const _Date = Date;
      timestamp = Date.now();
    }
    const obj = DispatcherDefault;
    obj.dispatch({ type: "ICYMI_TAKE_SURVEY", takenAt: timestamp });
  },
  itemInteracted(id, type, open_profile) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ICYMI_ITEM_INTERACTED", itemId: id, itemType: type, actionType: open_profile };
    obj.dispatch(obj2);
  },
  feedItemActioned(arg0) {
    const dispatch = DispatcherDefault.dispatch;
    const obj = { type: "ICYMI_FEED_ITEM_ACTIONED" };
    DispatcherDefault;
    const merged = Object.assign(arg0);
    dispatch(obj);
  },
  feedFilterActioned(arg0) {
    const dispatch = DispatcherDefault.dispatch;
    const obj = { type: "ICYMI_FEED_FILTER_ACTIONED" };
    DispatcherDefault;
    const merged = Object.assign(arg0);
    dispatch(obj);
  },
  feedPageActioned(arg0) {
    const dispatch = DispatcherDefault.dispatch;
    const obj = { type: "ICYMI_FEED_PAGE_ACTIONED" };
    DispatcherDefault;
    const merged = Object.assign(arg0);
    dispatch(obj);
  },
};
const result = size.fileFinishedImporting("modules/icymi/ICYMIActionCreators.tsx");

export default obj;
