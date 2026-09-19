// === Module 8621: ICYMIActionCreators ===

// Module 8621 (ICYMIActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import UserSettings from "UserSettings" /* 2019 */;
import ICYMIUtils from "ICYMIUtils" /* 8620 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const offset = tmp3;
              const category_ids = tmp7;
              let guilds;
              c3 = 1;
              const HTTP = category_ids(tmp24[2]).HTTP;
              const request = { url: constants.GRAVITY_TOPIC_GUILDS, body: null, rejectWithError: false };
              const obj5 = { category_ids, offset };
              request.body = obj5;
              constants = 2;
              c5 = 1;
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp24;
            offset(tmp24[4]).captureException(closure_128_1);
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
            const obj8 = { type: "LOAD_ICYMI_POPULAR_GUILDS", categoryIds: closure_129_0, guilds, offset: closure_129_1 };
            offset(tmp24[3]).dispatch(obj8);
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if (obj13.icymiEnabled("fetchDehydrated")) {
                if (importDefault) {
                  tmp3(tmp24[3]).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
                  const obj5 = tmp3(tmp24[3]);
                }
                c3 = 1;
                const _Date = Date;
                closure_128_0 = Date.now();
                const HTTP = tmp5(tmp24[2]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: null, rejectWithError: false };
                const obj6 = { refresh };
                request.query = obj6;
                constants = 2;
                c5 = 1;
                const obj7 = { value: HTTP.get(request), done: false };
                return obj7;
              }
              obj13 = tmp5(tmp24[5]);
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              closure_128_2 = tmp24;
              tmp3(tmp24[4]).captureException(closure_128_2);
              const obj4 = tmp3(tmp24[4]);
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                closure_128_1 = value;
                const obj9 = { type: "LOAD_ICYMI_DEHYDRATED", items: closure_128_1.body.items, loadId: closure_128_1.body.load_id, startTime: closure_128_0, isReloading: closure_129_1, isInitialLoad: closure_129_0 };
                constants = 3;
                c5 = 1;
                const obj10 = { value: tmp3(tmp24[3]).dispatch(obj9), done: false };
                return obj10;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
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
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const _location = tmp3;
              items = tmp7;
              if (obj8.icymiEnabled("gravityJoinGuild")) {
                if (0 !== items.length) {
                  c3 = 1;
                  const HTTP = items(tmp20[2]).HTTP;
                  const request = { url: constants.GRAVITY_JOIN_GUILD, body: null, rejectWithError: false };
                  const obj5 = { guild_ids: tmp16, location: _location };
                  request.body = obj5;
                  constants = 2;
                  c5 = 1;
                  const obj6 = { value: HTTP.post(request), done: false };
                  return obj6;
                }
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp20;
            _location(tmp20[4]).captureException(closure_128_0);
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              message_id = tmp3;
              channel_id = tmp7;
              closure_128_0 = undefined;
              if (obj11.icymiEnabled("fetchInitial")) {
                c3 = 1;
                const HTTP = tmp35(tmp26[2]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: null, rejectWithError: false };
                const obj5 = { message_items: null, activity_items: null };
                const obj6 = { channel_id, message_id };
                const items = [obj6];
                obj5.message_items = items;
                obj5.activity_items = [];
                request.body = obj5;
                constants = 2;
                c5 = 1;
                const obj7 = { value: HTTP.post(request), done: false };
                return obj7;
              }
              obj11 = channel_id(tmp26[5]);
              tmp35 = channel_id;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = tmp26;
              message_id(tmp26[4]).captureException(closure_128_1);
              const obj4 = message_id(tmp26[4]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_128_0 = value;
              if (0 !== closure_128_0.body.message_items.length) {
                const obj9 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: closure_128_0.body.message_items[0] };
                message_id(tmp26[3]).dispatch(obj9);
                c3 = 0;
                const obj = message_id(tmp26[3]);
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
    if (obj.icymiEnabled("fetchInitialStatus")) {
      const obj3 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem };
      DispatcherDefault.dispatch(obj3);
    }
    obj = ICYMIUtils;
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
          const obj5 = { value, done: true };
          return obj5;
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
              const obj7 = { value, done: true };
              return obj7;
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
                    const obj8 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: [], requestActivityItems: [], messageItems: [], activityItems: [], startingIndex, endingIndex };
                    endingIndex(tmp33[3]).dispatch(obj8);
                    const obj6 = endingIndex(tmp33[3]);
                  }
                }
                c3 = 1;
                const HTTP = startingIndex(tmp33[2]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: null, rejectWithError: false };
                const obj9 = { message_items: messageItems, activity_items: activityItems };
                request.body = obj9;
                constants = 2;
                c5 = 1;
                const obj10 = { value: HTTP.post(request), done: false };
                return obj10;
              }
              obj15 = startingIndex(tmp33[5]);
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_4 = tmp33;
              endingIndex(tmp33[4]).captureException(closure_128_4);
              const obj2 = endingIndex(tmp33[4]);
              closure_128_3 = startingIndex(tmp33[5]).generateHydrationId(closure_129_0, closure_129_1);
              const obj3 = startingIndex(tmp33[5]);
              const obj11 = { type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: closure_128_3 };
              endingIndex(tmp33[3]).dispatch(obj11);
              const obj4 = endingIndex(tmp33[3]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_2 = value;
              const obj12 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: closure_128_0, requestActivityItems: closure_128_1, messageItems: closure_128_2.body.message_items, activityItems: closure_128_2.body.activity_items, startingIndex: closure_129_0, endingIndex: closure_129_1 };
              endingIndex(tmp33[3]).dispatch(obj12);
              c3 = 0;
              const obj13 = endingIndex(tmp33[3]);
            }
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              if (obj9.icymiEnabled("guildChannelScores")) {
                c3 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj5 = { url: constants.GRAVITY_CUSTOM_SCORES, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.get(obj5), done: false };
                return obj6;
              }
              obj9 = ICYMIUtils;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              closure_129_1(closure_129_2[4]).captureException(closure_128_1);
              const obj4 = closure_129_1(closure_129_2[4]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              const obj7 = { type: "LOAD_ICYMI_CUSTOM_SCORES", scores: closure_128_0.body };
              closure_129_1(closure_129_2[3]).dispatch(obj7);
              c3 = 0;
              const obj = closure_129_1(closure_129_2[3]);
            }
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              if (obj9.icymiEnabled("recommendedGuilds")) {
                c3 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj5 = { url: constants.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.get(obj5), done: false };
                return obj6;
              }
              obj9 = ICYMIUtils;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              closure_129_1(closure_129_2[4]).captureException(closure_128_1);
              const obj4 = closure_129_1(closure_129_2[4]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              const obj7 = { type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: closure_128_0.body.guilds };
              closure_129_1(closure_129_2[3]).dispatch(obj7);
              c3 = 0;
              const obj = closure_129_1(closure_129_2[3]);
            }
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
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
                    const obj5 = { url: constants.GRAVITY_ATTACHMENTS, rejectWithError: false };
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: HTTP.get(obj5), done: false };
                    return obj6;
                  }
                }
              }
              obj9 = ICYMIUtils;
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              closure_128_2 = closure_2;
              closure_129_1(closure_129_2[4]).captureException(closure_128_2);
              const obj4 = closure_129_1(closure_129_2[4]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_1 = value;
              const obj7 = { type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA", attachments: closure_128_1.body.attachments, createdAtMs: null };
              const _Number = Number;
              obj7.createdAtMs = Number(closure_128_0.createdAtMs);
              closure_129_1(closure_129_2[3]).dispatch(obj7);
              c3 = 0;
              const obj = closure_129_1(closure_129_2[3]);
            }
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
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
    DispatcherDefault.dispatch({ type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId });
  },
  openICYMITab() {
    DispatcherDefault.dispatch({ type: "ICYMI_TAB_OPENED" });
  },
  closeICYMITab() {
    DispatcherDefault.dispatch({ type: "ICYMI_TAB_CLOSED" });
  },
  startItemsDwell(items) {
    DispatcherDefault.dispatch({ type: "ICYMI_ITEMS_DWELL_START", items });
  },
  triggerItemsLongImpression(items) {
    DispatcherDefault.dispatch({ type: "ICYMI_ITEMS_LONG_IMPRESSION", items });
  },
  ackGravityItems(items, override) {
    return DispatcherDefault.dispatch({ type: "ICYMI_ACK_ITEMS", items, override });
  },
  gravityScrollEvent(timestamp) {
    return DispatcherDefault.dispatch({ type: "ICYMI_SCROLL_EVENT", timestamp });
  },
  setFilters(filters) {
    return DispatcherDefault.dispatch({ type: "SET_ICYMI_FILTERS", filters });
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
    DispatcherDefault.dispatch({ type: "ICYMI_SET_VIDEOS_MUTED", muted });
  },
  setTabFocused(isFocused) {
    DispatcherDefault.dispatch({ type: "ICYMI_SET_FOCUSED_TAB", focused: isFocused });
  },
  setCardHeight(itemId, height) {
    DispatcherDefault.dispatch({ type: "ICYMI_SET_CARD_HEIGHT", itemId, height });
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
    DispatcherDefault.dispatch({ type: "ICYMI_ITEM_INTERACTED", itemId: id, itemType: hotwheels_gaming_activity, actionType: open_profile });
  },
  feedItemActioned(arg0) {
    const merged = Object.assign(arg0);
    DispatcherDefault.dispatch({ type: "ICYMI_FEED_ITEM_ACTIONED" });
  },
  feedFilterActioned(arg0) {
    const merged = Object.assign(arg0);
    DispatcherDefault.dispatch({ type: "ICYMI_FEED_FILTER_ACTIONED" });
  },
  feedPageActioned(arg0) {
    const merged = Object.assign(arg0);
    DispatcherDefault.dispatch({ type: "ICYMI_FEED_PAGE_ACTIONED" });
  }
};