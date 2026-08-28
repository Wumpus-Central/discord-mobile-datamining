// discord_app/modules/icymi/ICYMIActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import generateHydrationId from "ICYMIUtils.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/ICYMIActionCreators.tsx");

export default {
  fetchPopularGuildsFromCategories(stateFromStoresArray1, sum) {
    closure_0 = stateFromStoresArray1;
    closure_1 = sum;
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback = tmp3;
              let guilds = tmp7;
              guilds = undefined;
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[2]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = constants.GRAVITY_TOPIC_GUILDS;
              const obj2 = { category_ids: null, offset: null };
              obj2[0] = closure_1_0;
              obj2[1] = callback;
              obj1[1] = obj2;
              constants = 2;
              c5 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            callback = closure_2;
            obj3 = callback(closure_1_2[4]);
            obj3.captureException(callback);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            guilds = arg1.body.guilds;
            obj = callback(closure_1_2[3]);
            const obj5 = { type: "LOAD_ICYMI_POPULAR_GUILDS", categoryIds: null, guilds: null, offset: null };
            obj5[1] = guilds;
            obj5[2] = guilds;
            obj5[3] = callback;
            obj.dispatch(obj5);
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp24) {
          closure_2 = tmp24;
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
          if (0 === constants) {
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
              closure_0 = tmp5;
              closure_0 = undefined;
              closure_1 = undefined;
              if (obj13.icymiEnabled("fetchDehydrated")) {
                if (closure_1_1) {
                  let obj4 = closure_1_1(709);
                  obj4.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
                }
                c3 = 1;
                const _Date = Date;
                closure_0 = Date.now();
                const HTTP = tmp42(530).HTTP;
                obj1 = { url: null, query: null, rejectWithError: false };
                obj1[0] = constants.GRAVITY_ITEMS_DEHYDRATED;
                const obj2 = { refresh: null };
                obj2[0] = dependencyMap;
                obj1[1] = obj2;
                constants = 2;
                c5 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj1);
                return obj3;
              }
              obj13 = closure_1_0(8567);
              tmp42 = closure_1_0;
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              obj3 = closure_1_1(1208);
              obj3.captureException(dependencyMap);
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                closure_1 = arg1;
                const obj5 = { type: "LOAD_ICYMI_DEHYDRATED", items: null, loadId: null, startTime: null, isReloading: null, isInitialLoad: null };
                obj5[1] = closure_1.body.items;
                obj5[2] = closure_1.body.load_id;
                obj5[3] = closure_0;
                obj5[4] = closure_1;
                obj5[5] = closure_0;
                constants = 3;
                c5 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = closure_1_1(709).dispatch(obj5);
                return obj6;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c5 = 3;
        } catch (tmp24) {
          dependencyMap = tmp24;
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
    closure_0 = items;
    closure_1 = icymi_info_modal;
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
          if (0 === constants) {
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
              closure_0 = tmp7;
              if (obj8.icymiEnabled("gravityJoinGuild")) {
                if (0 !== closure_1_0.length) {
                  c3 = 1;
                  const HTTP = closure_1_0(closure_1_2[2]).HTTP;
                  obj1 = { url: null, body: null, rejectWithError: false };
                  obj1[0] = constants.GRAVITY_JOIN_GUILD;
                  const obj2 = { guild_ids: null, location: null };
                  obj2[0] = tmp16;
                  obj2[1] = closure_1_1;
                  obj1[1] = obj2;
                  constants = 2;
                  c5 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = HTTP.post(obj1);
                  return obj3;
                }
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_0 = closure_2;
            obj1 = closure_1_1(closure_1_2[4]);
            obj1.captureException(closure_0);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp20) {
          closure_2 = tmp20;
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback = tmp3;
              closure_0 = tmp7;
              closure_0 = undefined;
              if (obj11.icymiEnabled("fetchInitial")) {
                c3 = 1;
                const HTTP = tmp36(closure_1_2[2]).HTTP;
                obj1 = { url: null, body: null, rejectWithError: false };
                obj1[0] = constants.GRAVITY_ITEMS_HYDRATE;
                const obj2 = { message_items: null, activity_items: null };
                let obj3 = { channel_id: null, message_id: null };
                obj3[0] = closure_1_0;
                obj3[1] = callback;
                const items = [obj3];
                obj2[0] = items;
                obj2[1] = [];
                obj1[1] = obj2;
                constants = 2;
                c5 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.post(obj1);
                return obj4;
              }
              obj11 = closure_1_0(closure_1_2[5]);
              tmp36 = closure_1_0;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              callback = closure_2;
              obj3 = callback(closure_1_2[4]);
              obj3.captureException(callback);
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              closure_0 = arg1;
              if (0 !== closure_0.body.message_items.length) {
                obj = callback(closure_1_2[3]);
                const obj6 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: null };
                obj6[1] = closure_0.body.message_items[0];
                obj.dispatch(obj6);
                c3 = 0;
              }
            }
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          c5 = 3;
        } catch (tmp26) {
          closure_2 = tmp26;
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
  fetchForStatusNotification(arg0) {
    let obj = generateHydrationId;
    if (obj.icymiEnabled("fetchInitialStatus")) {
      obj = { type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem: null };
      obj[1] = arg0;
      dispatcherDefault.dispatch(obj);
      const obj2 = dispatcherDefault;
    }
  },
  fetchHydrated(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let activityItems = tmp3;
              let messageItems = tmp7;
              messageItems = undefined;
              activityItems = undefined;
              closure_2 = undefined;
              c3 = undefined;
              if (obj15.icymiEnabled("fetchHydrated")) {
                messageItems = closure_1_2.messageItems;
                activityItems = closure_1_2.activityItems;
                if (0 === messageItems.length) {
                  if (0 === activityItems.length) {
                    let obj5 = closure_1_1(closure_1_2[3]);
                    obj1 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: null, requestActivityItems: null, messageItems: null, activityItems: null, startingIndex: null, endingIndex: null };
                    obj1[1] = [];
                    obj1[2] = [];
                    obj1[3] = [];
                    obj1[4] = [];
                    obj1[5] = closure_1_0;
                    obj1[6] = closure_1_1;
                    obj5.dispatch(obj1);
                  }
                }
                c3 = 1;
                const HTTP = closure_1_0(closure_1_2[2]).HTTP;
                let obj2 = { url: null, body: null, rejectWithError: false };
                obj2[0] = constants.GRAVITY_ITEMS_HYDRATE;
                let obj3 = { message_items: null, activity_items: null };
                obj3[0] = messageItems;
                obj3[1] = activityItems;
                obj2[1] = obj3;
                constants = 2;
                c5 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.post(obj2);
                return obj4;
              }
              obj15 = closure_1_0(closure_1_2[5]);
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              constants = closure_2;
              obj1 = closure_1_1(closure_1_2[4]);
              obj1.captureException(constants);
              obj2 = closure_1_0(closure_1_2[5]);
              c3 = obj2.generateHydrationId(messageItems, activityItems);
              obj3 = closure_1_1(closure_1_2[3]);
              obj5 = { type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: null };
              obj5[1] = c3;
              obj3.dispatch(obj5);
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_2 = arg1;
              const obj6 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: null, requestActivityItems: null, messageItems: null, activityItems: null, startingIndex: null, endingIndex: null };
              obj6[1] = messageItems;
              obj6[2] = activityItems;
              obj6[3] = closure_2.body.message_items;
              obj6[4] = closure_2.body.activity_items;
              obj6[5] = messageItems;
              obj6[6] = activityItems;
              closure_1_1(closure_1_2[3]).dispatch(obj6);
              c3 = 0;
              const obj13 = closure_1_1(closure_1_2[3]);
            }
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c5 = 3;
        } catch (tmp33) {
          closure_2 = tmp33;
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback = tmp3;
              let body = tmp7;
              body = undefined;
              if (obj9.icymiEnabled("guildChannelScores")) {
                c3 = 1;
                const HTTP = tmp32(closure_1_2[2]).HTTP;
                obj1 = { url: null, rejectWithError: false };
                obj1[0] = constants.GRAVITY_CUSTOM_SCORES;
                constants = 2;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = HTTP.get(obj1);
                return obj2;
              }
              obj9 = closure_1_0(closure_1_2[5]);
              tmp32 = closure_1_0;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              callback = dependencyMap;
              let obj3 = callback(1208);
              obj3.captureException(callback);
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              obj = callback(709);
              obj3 = { type: "LOAD_ICYMI_CUSTOM_SCORES", scores: null };
              obj3[1] = body.body;
              obj.dispatch(obj3);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
          c5 = 3;
        } catch (tmp24) {
          dependencyMap = tmp24;
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
  getRecommendedGuilds() {
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback = tmp3;
              let body = tmp7;
              body = undefined;
              if (obj9.icymiEnabled("recommendedGuilds")) {
                c3 = 1;
                const HTTP = tmp32(closure_1_2[2]).HTTP;
                obj1 = { url: null, rejectWithError: false };
                obj1[0] = constants.GRAVITY_RECOMMENDED_GUILDS;
                constants = 2;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = HTTP.get(obj1);
                return obj2;
              }
              obj9 = closure_1_0(closure_1_2[5]);
              tmp32 = closure_1_0;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              callback = dependencyMap;
              let obj3 = callback(1208);
              obj3.captureException(callback);
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              obj = callback(709);
              obj3 = { type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: null };
              obj3[1] = body.body.guilds;
              obj.dispatch(obj3);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
          c5 = 3;
        } catch (tmp24) {
          dependencyMap = tmp24;
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
  getMediaForCurrentStatus() {
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
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let lib = tmp3;
              let setting = tmp5;
              setting = undefined;
              lib = undefined;
              if (obj9.icymiEnabled("mediaForCurrentStatus")) {
                const CustomStatusSetting = tmp38(closure_1_2[6]).CustomStatusSetting;
                setting = CustomStatusSetting.getSetting();
                if (null != setting) {
                  if (null != setting.createdAtMs) {
                    c3 = 1;
                    const HTTP = tmp38(closure_1_2[2]).HTTP;
                    obj1 = { url: null, rejectWithError: false };
                    obj1[0] = constants.GRAVITY_ATTACHMENTS;
                    constants = 2;
                    c5 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = HTTP.get(obj1);
                    return obj2;
                  }
                }
              }
              obj9 = closure_1_0(closure_1_2[5]);
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              let obj3 = lib(1208);
              obj3.captureException(dependencyMap);
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj = lib(709);
              obj3 = { type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA", attachments: null, createdAtMs: null };
              obj3[1] = lib.body.attachments;
              const _Number = Number;
              obj3[2] = Number(setting.createdAtMs);
              obj.dispatch(obj3);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
          c5 = 3;
        } catch (tmp28) {
          dependencyMap = tmp28;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp28;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  },
  reloadICYMITab() {
    dispatcherDefault.dispatch({ type: "RELOAD_ICYMI" });
  },
  loadHydratedAttempt(hydrationId) {
    let obj = dispatcherDefault;
    obj = { type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId };
    obj.dispatch(obj);
  },
  openICYMITab() {
    dispatcherDefault.dispatch({ type: "ICYMI_TAB_OPENED" });
  },
  closeICYMITab() {
    dispatcherDefault.dispatch({ type: "ICYMI_TAB_CLOSED" });
  },
  startItemsDwell(items) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_ITEMS_DWELL_START", items };
    obj.dispatch(obj);
  },
  triggerItemsLongImpression(found) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_ITEMS_LONG_IMPRESSION", items: found };
    obj.dispatch(obj);
  },
  ackGravityItems(items, override) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_ACK_ITEMS", items, override };
    return obj.dispatch(obj);
  },
  gravityScrollEvent(timestamp) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_SCROLL_EVENT", timestamp };
    return obj.dispatch(obj);
  },
  setFilters(filters) {
    let obj = dispatcherDefault;
    obj = { type: "SET_ICYMI_FILTERS", filters };
    return obj.dispatch(obj);
  },
  giveFeedback() {
    return dispatcherDefault.dispatch({ type: "ICYMI_FEEDBACK_GIVEN" });
  },
  clearReadStates() {
    return dispatcherDefault.dispatch({ type: "CLEAR_ICYMI_READ_STATES" });
  },
  addedRecommendedGuild() {
    return dispatcherDefault.dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" });
  },
  setVideosMuted(muted) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_SET_VIDEOS_MUTED", muted };
    obj.dispatch(obj);
  },
  setTabFocused(isFocused) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_SET_FOCUSED_TAB", focused: isFocused };
    obj.dispatch(obj);
  },
  setCardHeight(itemId, height) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_SET_CARD_HEIGHT", itemId, height };
    obj.dispatch(obj);
  },
  takeSurvey() {
    let timestamp = arg0;
    if (arg0 === undefined) {
      const _Date = Date;
      timestamp = Date.now();
    }
    dispatcherDefault.dispatch({ type: "ICYMI_TAKE_SURVEY", takenAt: timestamp });
  },
  itemInteracted(id, type, open_profile) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_ITEM_INTERACTED", itemId: id, itemType: type, actionType: open_profile };
    obj.dispatch(obj);
  },
  feedItemActioned(arg0) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_FEED_ITEM_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
  feedFilterActioned(arg0) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_FEED_FILTER_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
  feedPageActioned(arg0) {
    let obj = dispatcherDefault;
    obj = { type: "ICYMI_FEED_PAGE_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};