// === Module 15621: findGuildSectionIndex ===

// Module 15621 (findGuildSectionIndex)
import closure_3 from "noop" /* 19 */;
import closure_4 from "_handleConnectionOpen" /* 4499 */;
import closure_5 from "initialize" /* 4025 */;
import closure_6 from "processChannel" /* 4804 */;
import closure_7 from "processChannel" /* 4805 */;
import closure_8 from "getGeoRestrictedGuilds" /* 13352 */;
import closure_9 from "handleConnectionOpen" /* 4831 */;
import closure_10 from "trackCommunicationDisabled" /* 1991 */;
import closure_11 from "createGuildRecordFromRust" /* 1910 */;
import closure_12 from "rebuildUnreads" /* 13360 */;
import closure_13 from "handleConnectionOpen" /* 4201 */;
import closure_14 from "insertUnsortedGuilds" /* 5083 */;
import { GuildsNodeType } from "insertUnsortedGuilds" /* 5083 */;
import closure_16 from "withEqualityFn" /* 15612 */;
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE" /* 15613 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function findGuildSectionIndex(arg0) {
  fastListGuildFolders = fastListGuildFolders.getFastListGuildFolders();
  let num = -1;
  let num2 = 0;
  let flag = false;
  for (const item10016 of fastListGuildFolders) {
    let element = item10016;
    let tmp2 = num;
    num = num + 1;
    num2 = 0;
    let tmp3 = GuildsNodeType;
    let tmp4 = GuildsNodeType;
    if (item10016.type === GuildsNodeType.GUILD) {
      let tmp5 = item10016;
      if (element.id === arg0) {
        flag = true;
        let tmp20 = obj;
        obj.return();
        break;
      }
      let tmp21 = flag;
      let tmp22 = null;
      if (flag) {
        let obj = { section: null, item: null };
        let tmp23 = constants;
        obj[0] = num + constants.GUILDS;
        obj[1] = num2;
        tmp22 = obj;
      }
      return tmp22;
    }
    let tmp6 = item10016;
    let tmp7 = tmp3;
    if (element.type === tmp4.FOLDER) {
      let tmp8 = item10016;
      let children = element.children;
      let tmp9 = children;
      let tmp10 = children;
      for (const item10035 of children) {
        let tmp12 = GuildsNodeType;
        let tmp13 = GuildsNodeType;
        if (item10035.type === GuildsNodeType.GUILD) {
          let tmp14 = item10035;
          if (tmp11.id === arg0) {
            let tmp16 = item10016;
            if (!element.expanded) {
              num2 = 0;
            }
            flag = true;
            let tmp17 = obj2;
            obj2.return();
            break;
          } else {
            let tmp15 = num2;
            num2 = num2 + 1;
          }
        }
        continue;
      }
    }
    let tmp18 = flag;
    if (flag) {
      let tmp19 = obj;
      obj.return();
      break;
    }
    break;
  }
}
function isAnchorIdEqual(arg0, arg1, arg2) {
  let tmp = null != arg2;
  if (tmp) {
    const _HermesInternal = HermesInternal;
    tmp = arg1 === "" + arg0 + ":" + arg2;
  }
  return tmp;
}
({ FastListRenderSections: closure_17, useGuildWrapperSize: closure_18 } = GUILD_ITEM_SIZE);
let closure_21 = { MESSAGES: "section-messages", FAVORITES: "section-favorites", PENDING_JOIN_REQUESTS: "section-pending-join-requests", LURKING_GUILDS: "section-lurking-guilds", GUEST_GUILDS: "section-guest-guilds", UNREAD_PRIVATE_CHANNELS: "section-private-channels", SEPARATOR: "section-separator", GUILDS: "section-guilds" };
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

export default function useGuildsBarProps(arg0) {
  const _require = arg0;
  const tmp = memo();
  importDefault = tmp;
  let obj = _require(token[29]);
  token = obj.useToken(importDefault(token[30]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const rect = importDefault(token[31])();
  const top = rect.top;
  const bottom = rect.bottom;
  const mobileQuestDockHeight = _require(token[32]).useMobileQuestDockHeight();
  let obj2 = _require(token[32]);
  const youBarTotalHeight = _require(token[33]).useYouBarTotalHeight();
  let obj3 = _require(token[33]);
  const youBarTotalHeight1 = _require(token[33]).useYouBarTotalHeight(4);
  let items = [mobileQuestDockHeight, top, youBarTotalHeight];
  const effect = top.useEffect(() => {
    const listInsets = pendingFolderNode.getState().listInsets;
    const result = listInsets.set({ start: top, end: mobileQuestDockHeight + youBarTotalHeight });
  }, items);
  let num = 0;
  if (importDefault(token[34])()) {
    num = 1;
  }
  let tmp2Result = tmp2(tmp3[35]);
  let items1 = [stateFromStores1, youBarTotalHeight, youBarTotalHeight1];
  const stateFromStoresArray = tmp2Result.useStateFromStoresArray(items1, () => {
    const unreadPrivateChannelIds = stateFromStores1.getUnreadPrivateChannelIds();
    const items = [youBarTotalHeight, youBarTotalHeight1];
    return ref(token[36]).filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
  }, []);
  tmp2Result = tmp2(tmp3[35]);
  const items2 = [bottom];
  const stateFromStores = tmp2Result.useStateFromStores(items2, () => bottom.isConnected());
  let obj4 = _require(token[33]);
  const items3 = [num];
  const stateFromStoresArray1 = _require(token[35]).useStateFromStoresArray(items3, () => num.getGeoRestrictedGuilds());
  const tmp2Result1 = _require(token[35]);
  const items4 = [mobileQuestDockHeight];
  stateFromStores1 = _require(token[35]).useStateFromStores(items4, () => mobileQuestDockHeight.lurkingGuildIds());
  const tmp2Result2 = _require(token[35]);
  const items5 = [stateFromStoresArray1, stateFromStores];
  const stateFromStoresArray2 = _require(token[35]).useStateFromStoresArray(items5, () => {
    const guildIds = stateFromStoresArray1.getGuildIds();
    return guildIds.filter((guild_id) => currentUserGuest.isCurrentUserGuest(guild_id));
  });
  const tmp2Result3 = _require(token[35]);
  const items6 = [guildsNFolders];
  const stateFromStores2 = _require(token[35]).useStateFromStores(items6, () => ({ guildsNFolders: guildsNFolders.getFastListGuildFolders(), version: guildsNFolders.getGuildsTree().version }), [], tmp4(tmp3[37]));
  guildsNFolders = stateFromStores2.guildsNFolders;
  const tmp16 = importDefault(token[38])();
  const expanded = tmp16.expanded;
  const pendingFolderNode = tmp16.pendingFolderNode;
  const tmp2Result4 = _require(token[35]);
  const items7 = [stateFromStoresArray];
  const stateFromStores3 = _require(token[35]).useStateFromStores(items7, () => stateFromStoresArray.totalUnavailableGuilds);
  const items8 = [top, mobileQuestDockHeight, bottom, youBarTotalHeight, youBarTotalHeight1, token];
  memo = obj5.useMemo(() => {
    let obj = { top: 3 * token, bottom: null };
    if (youBarTotalHeight > 0) {
      let diff = tmp2 - 16;
    } else {
      diff = bottom + 3 * tmp;
    }
    obj = { scrollIndicatorInsets: obj, insetStart: top, insetEnd: mobileQuestDockHeight + 2 * tmp + youBarTotalHeight1, chunkBase: null };
    obj[1] = diff;
    obj[3] = ref(token[39]).getWindowDimensions().height;
    return obj;
  }, items8);
  const items9 = [, , ];
  ({ insetStart: arr10[0], insetEnd: arr10[1] } = memo);
  items9[2] = arg0;
  const callback = obj5.useCallback((arg0, arg1) => {
    if (null != arg0) {
      const tmp5 = closure_1_20(arg0);
      if (null != tmp5) {
        const current2 = ref.current;
        if (current2 != null) {
          const obj = {};
          const merged = Object.assign(tmp5);
          obj.orientation = "visible";
          ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } = memo);
          current2.scrollToLocation(obj);
        }
      }
    } else {
      const current = ref.current;
      if (current != null) {
        current.scrollTo(0, arg1);
      }
    }
  }, items9);
  importDefault(token[40])(callback);
  const memo1 = obj5.useMemo(() => {
    const guildId = stateFromStoresArray2.getGuildId();
    let tmp2;
    if (null != guildId) {
      tmp2 = callback(guildId);
    }
    if (null != tmp2) {
      const obj = { initialScrollItem: null, initialScrollSection: null };
      ({ item: obj[0], section: obj[1] } = tmp2);
      return obj;
    }
  }, []);
  const items10 = [num, pendingFolderNode, stateFromStores1, stateFromStoresArray2, stateFromStoresArray, stateFromStoresArray1, stateFromStores3, stateFromStores, guildsNFolders, memo1, stateFromStores2.version, expanded, token, tmp];
  obj = {
    listProps: memo,
    listDataProps: obj5.useMemo(() => {
      let arr1;
      const items = [1, num];
      num = 0;
      if (null != pendingFolderNode) {
        let num2 = 1;
        if (expanded) {
          num2 = tmp.children.length;
        }
        num = num2;
      }
      items[2] = num;
      items[3] = stateFromStores1.length;
      items[4] = stateFromStoresArray2.length;
      items[5] = Math.min(stateFromStoresArray.length, 10);
      items[6] = 1;
      for (const item10028 of guildsNFolders) {
        let element = item10028;
        if (item10028.type === expanded.GUILD) {
          let arr = items.push(1);
        } else {
          let tmp4 = item10028;
          if (element.type === tmp3.FOLDER) {
            let tmp5 = item10028;
            let push = items.push;
            if (element.expanded) {
              let tmp7 = item10028;
              arr = push(element.children.length);
            } else {
              arr1 = push(1);
            }
          }
        }
        continue;
      }
      if (stateFromStoresArray1.length > 0) {
        items.push(arr1.length);
      }
      const items1 = [];
      if (stateFromStores3 > 0) {
        items1.push("unavailable-guilds");
      }
      let tmp13 = stateFromStores;
      if (stateFromStores) {
        tmp13 = 0 === guildsNFolders.length;
      }
      if (tmp13) {
        tmp13 = 0 === stateFromStores3;
      }
      if (tmp13) {
        items1.push("empty-nux");
      }
      items1.push("create-join-guild");
      let obj = {};
      const merged = Object.assign(memo1);
      obj.sections = items;
      obj.sectionSize = function sectionSize(arg0) {
        if (arg0 !== closure_1_17.PENDING_JOIN_REQUESTS) {
          num = 0;
          if (arg0 >= tmp4.GUILDS) {
            let num2 = 0;
            if (null != tmp[arg0 - tmp4.GUILDS]) {
              num2 = 0;
              if (tmp6.type === closure_1_15.FOLDER) {
                num2 = tmp3;
              }
            }
            num = num2;
          }
        } else {
          num = tmp3;
        }
        return num;
      };
      obj.itemSize = function itemSize(arg0, arg1) {
        num = closure_1;
        if (closure_1_17.MESSAGES !== arg0) {
          num = tmp4;
          if (tmp6.FAVORITES !== arg0) {
            num = tmp4;
            if (tmp6.LURKING_GUILDS !== arg0) {
              num = tmp4;
              if (tmp6.GUEST_GUILDS !== arg0) {
                let num6 = arg1;
                if (tmp6.UNREAD_PRIVATE_CHANNELS === arg0) {
                  if (num6 == null) {
                    num6 = -1;
                  }
                  let num7 = 0;
                  if (null != tmp2[num6]) {
                    num7 = tmp4;
                  }
                  num = num7;
                } else if (tmp6.SEPARATOR === arg0) {
                  num = 1 + 2 * tmp5;
                } else if (tmp6.PENDING_JOIN_REQUESTS === arg0) {
                  let num3 = 0;
                  if (null != num6) {
                    num3 = 0;
                    if (null != tmp) {
                      num3 = 0;
                      if (tmp.expanded) {
                        num3 = 0;
                        if (null != tmp.children[num6]) {
                          num3 = tmp4;
                        }
                      }
                    }
                  }
                  num = num3;
                } else {
                  num = 0;
                  if (null != num6) {
                    const diff = arg0 - tmp6.GUILDS;
                    if (arr.length < diff) {
                      const element = arr[diff];
                      let num2 = 0;
                      if (null != element) {
                        num2 = 0;
                        if (element.type !== closure_1_15.ROOT) {
                          if (element.type !== tmp8.GUILD) {
                            if (element.type !== tmp8.FOLDER) {
                              num2 = tmp4;
                            } else {
                              num2 = 0;
                              if (element.expanded) {
                                num2 = 0;
                              }
                            }
                          } else {
                            num2 = 0;
                          }
                        }
                      }
                      num = num2;
                    } else {
                      num = tmp4;
                    }
                  }
                }
              }
            }
          }
        }
        return num;
      };
      obj.footerSize = function footerSize() {
        return items1.length * closure_1_1 + 8;
      };
      obj.renderSection = function renderSection(arg0) {
        if (arg0 >= closure_1_17.GUILDS) {
          let tmp5 = null;
          if (tmp[arg0 - tmp3.GUILDS].type === closure_1_15.FOLDER) {
            let obj = { id: null, expanded: null, name: null, color: null, childNodes: null };
            ({ id: obj2[0], expanded: obj2[1], name: obj2[2], color: obj2[3], children: obj2[4] } = tmp9);
            tmp5 = closure_1_19(closure_1_1(closure_1_2[15]), obj);
          }
        } else {
          tmp5 = null;
          if (arg0 === tmp3.PENDING_JOIN_REQUESTS) {
            tmp5 = null;
            if (null != tmp2) {
              obj = { id: null, expanded: null, childNodes: null };
              ({ id: obj[0], expanded: obj[1], children: obj[2] } = tmp2);
              tmp5 = closure_1_19(closure_1_1(closure_1_2[16]), obj);
            }
          }
        }
        return tmp5;
      };
      obj.renderItem = function renderItem(arg0, arg1) {
        if (closure_1_17.MESSAGES === arg0) {
          let tmp8 = closure_1_19(closure_1_1(closure_1_2[17]), {});
        } else if (tmp6.FAVORITES === arg0) {
          tmp8 = closure_1_19(closure_1_1(closure_1_2[18]), {});
        } else if (tmp6.LURKING_GUILDS === arg0) {
          let tmp40 = null;
          if (null != tmp2[arg1]) {
            let obj = { guildId: null };
            obj[0] = tmp39;
            tmp40 = closure_1_19(closure_1_1(closure_1_2[19]), obj);
          }
          tmp8 = tmp40;
        } else if (tmp6.GUEST_GUILDS === arg0) {
          let tmp35 = null;
          if (null != tmp3[arg1]) {
            obj = { guildId: null };
            obj[0] = tmp34;
            tmp35 = closure_1_19(closure_1_1(closure_1_2[19]), obj);
          }
          tmp8 = tmp35;
        } else if (tmp6.UNREAD_PRIVATE_CHANNELS === arg0) {
          let tmp30 = null;
          if (null != tmp[arg1]) {
            obj1 = { channelId: null };
            obj1[0] = tmp29;
            tmp30 = closure_1_19(closure_1_1(closure_1_2[20]), obj1);
          }
          tmp8 = tmp30;
        } else if (tmp6.SEPARATOR === arg0) {
          tmp8 = closure_1_19(closure_1_1(closure_1_2[21]), {});
        } else if (tmp6.PENDING_JOIN_REQUESTS === arg0) {
          tmp8 = null;
          if (null != tmp5) {
            let tmp21 = null;
            if (null != tmp5.children[arg1]) {
              tmp21 = null;
              if (tmp20.type === closure_1_15.GUILD) {
                const obj2 = { guildId: null };
                obj2[0] = tmp20.id;
                tmp21 = closure_1_19(closure_1_1(closure_1_2[22]), obj2);
              }
            }
            tmp8 = tmp21;
          }
        } else {
          const diff = arg0 - tmp6.GUILDS;
          if (diff >= arr.length) {
            let tmp15 = null;
            if (null != tmp4[arg1]) {
              const obj3 = { restrictedGuild: null };
              obj3[0] = tmp14;
              tmp15 = closure_1_19(closure_1_1(closure_1_2[23]), obj3);
            }
            tmp8 = tmp15;
          } else {
            const element = arr[diff];
            tmp8 = null;
            if (null != element) {
              tmp8 = null;
              if (element.type !== closure_1_15.ROOT) {
                if (element.type !== tmp7.GUILD) {
                  let tmp9 = element;
                  if (element.type === tmp7.FOLDER) {
                    tmp9 = element.children[arg1];
                  }
                  let tmp10 = null;
                  if (null != tmp9) {
                    tmp10 = null;
                    if (tmp9.type === tmp7.GUILD) {
                      obj = { guildId: null };
                      obj[0] = tmp9.id;
                      tmp10 = closure_1_19(closure_1_1(closure_1_2[19]), obj);
                    }
                  }
                  tmp8 = tmp10;
                } else {
                  tmp8 = null;
                }
              }
            }
          }
        }
        return tmp8;
      };
      obj.renderFooter = function renderFooter() {
        const obj = {
          children: items1.map((arg0) => {
            if ("unavailable-guilds" === arg0) {
              return callback2(callback(15678), {}, arg0);
            } else if ("empty-nux" === arg0) {
              return callback2(callback(15679), {}, arg0);
            } else if ("create-join-guild" === arg0) {
              return callback2(callback(15681), {}, arg0);
            }
          })
        };
        return memo1(callback(token[24]), obj);
      };
      obj.getRecyclerKey = function getRecyclerKey(ITEM, section, item) {
        if (section >= closure_1_17.GUILDS) {
          const element = table2[section - tmp3.GUILDS];
          if (null != element) {
            if (element.type !== closure_1_15.ROOT) {
              let tmp5 = element;
              if (element.type === tmp10.FOLDER) {
                if (null == item) {
                  const _HermesInternal2 = HermesInternal;
                  return "" + element.id;
                } else {
                  tmp5 = element.children[item];
                }
              }
              const _HermesInternal = HermesInternal;
              return "" + tmp5.id;
            }
          }
        }
      };
      obj.renderAccessory = function renderAccessory(self) {
        return callback2(callback(table[28]), { fastList: self });
      };
      obj.getAnchorIdFromIndex = function getAnchorIdFromIndex(arg0, arg1) {
        if (null == closure_1_16.getState().dropSpecs) {
          if (null == closure_1_16.getState().dragSpecs) {
            if (closure_1_17.MESSAGES === arg0) {
              let SEPARATOR = closure_1_21.MESSAGES;
            } else if (tmp7.FAVORITES === arg0) {
              SEPARATOR = closure_1_21.FAVORITES;
            } else if (tmp7.PENDING_JOIN_REQUESTS === arg0) {
              if (null == arg1) {
                SEPARATOR = closure_1_21.PENDING_JOIN_REQUESTS;
              } else {
                let id;
                if (tmp5 != null) {
                  if (tmp5.children[arg1] != null) {
                    id = tmp25.id;
                  }
                }
                let combined;
                if (null != id) {
                  const _HermesInternal5 = HermesInternal;
                  combined = "" + closure_1_21.PENDING_JOIN_REQUESTS + ":" + id;
                }
                SEPARATOR = combined;
              }
            } else if (tmp7.LURKING_GUILDS === arg0) {
              if (null == arg1) {
                let LURKING_GUILDS = closure_1_21.LURKING_GUILDS;
              } else {
                const _HermesInternal4 = HermesInternal;
                LURKING_GUILDS = "" + closure_1_21.LURKING_GUILDS + ":" + tmp2[arg1];
              }
              SEPARATOR = LURKING_GUILDS;
            } else if (tmp7.GUEST_GUILDS === arg0) {
              if (null == arg1) {
                let GUEST_GUILDS = closure_1_21.GUEST_GUILDS;
              } else {
                const _HermesInternal3 = HermesInternal;
                GUEST_GUILDS = "" + closure_1_21.GUEST_GUILDS + ":" + tmp3[arg1];
              }
              SEPARATOR = GUEST_GUILDS;
            } else if (tmp7.UNREAD_PRIVATE_CHANNELS === arg0) {
              if (null == arg1) {
                let UNREAD_PRIVATE_CHANNELS = closure_1_21.UNREAD_PRIVATE_CHANNELS;
              } else {
                const _HermesInternal2 = HermesInternal;
                UNREAD_PRIVATE_CHANNELS = "" + closure_1_21.UNREAD_PRIVATE_CHANNELS + ":" + tmp4[arg1];
              }
              SEPARATOR = UNREAD_PRIVATE_CHANNELS;
            } else if (tmp7.SEPARATOR === arg0) {
              SEPARATOR = closure_1_21.SEPARATOR;
            } else {
              const GUILDS = tmp7.GUILDS;
              const diff = arg0 - tmp7.GUILDS;
              if (null == arr[diff]) {
                let tmp9;
                if (diff >= arr.length) {
                  if (null != arg1) {
                    let id1;
                    if (tmp6[arg1] != null) {
                      id1 = tmp10.id;
                    }
                    tmp9 = id1;
                  }
                }
                id = tmp9;
              } else if (null == arg1) {
                id = tmp34.id;
              } else if (tmp34.children[arg1] != null) {
                id = tmp8.id;
              }
              if (null != id) {
                const _HermesInternal = HermesInternal;
                SEPARATOR = "" + closure_1_21.GUILDS + ":" + id;
              }
            }
            return SEPARATOR;
          }
        }
      };
      obj.getAnchorIndexFromId = function getAnchorIndexFromId(id) {
        return (function getAnchorIndexFromId(arg0) {
          ({ id, lurkingGuildsIds, guestGuildIds, privateChannelIds, guildsNFolders, pendingFolderNode, geoRestrictedGuilds } = arg0);
          if (constants2.MESSAGES === id) {
            let obj = { section: null };
            obj[0] = constants.MESSAGES;
            return obj;
          } else if (tmp2.FAVORITES === id) {
            obj = { section: null };
            obj[0] = constants.FAVORITES;
            return obj;
          } else if (tmp2.PENDING_JOIN_REQUESTS === id) {
            obj1 = { section: null };
            obj1[0] = constants.PENDING_JOIN_REQUESTS;
            return obj1;
          } else if (tmp2.LURKING_GUILDS === id) {
            const obj2 = { section: null };
            obj2[0] = constants.LURKING_GUILDS;
            return obj2;
          } else if (tmp2.GUEST_GUILDS === id) {
            const obj3 = { section: null };
            obj3[0] = constants.GUEST_GUILDS;
            return obj3;
          } else if (tmp2.UNREAD_PRIVATE_CHANNELS === id) {
            const obj4 = { section: null };
            obj4[0] = constants.UNREAD_PRIVATE_CHANNELS;
            return obj4;
          } else if (tmp2.SEPARATOR === id) {
            const obj5 = { section: null };
            obj5[0] = constants.SEPARATOR;
            return obj5;
          } else if (id.startsWith(tmp2.LURKING_GUILDS)) {
            let num12 = 0;
            for (const item10164 of lurkingGuildsIds) {
              let tmp67 = callback;
              let tmp68 = constants2;
              let tmp69 = constants2;
              if (callback(constants2.LURKING_GUILDS, id, item10164)) {
                let obj6 = { section: null, item: null };
                let tmp71 = constants;
                obj6[0] = constants.LURKING_GUILDS;
                obj6[1] = num12;
                let tmp72 = obj11;
                obj11.return();
                return obj6;
              } else {
                let tmp70 = num12;
                num12 = num12 + 1;
                continue;
              }
            }
          } else {
            if (id.startsWith(tmp2.PENDING_JOIN_REQUESTS)) {
              if (null != pendingFolderNode) {
                num = 0;
                const children2 = pendingFolderNode.children;
                for (const item10025 of children2) {
                  let tmp6 = callback;
                  let tmp7 = constants2;
                  let tmp8 = constants2;
                  if (callback(constants2.PENDING_JOIN_REQUESTS, id, item10025.id)) {
                    obj = { section: null, item: null };
                    let tmp10 = constants;
                    obj[0] = constants.PENDING_JOIN_REQUESTS;
                    let tmp11 = num;
                    obj[1] = num;
                    let tmp12 = obj21;
                    obj21.return();
                    return obj;
                  } else {
                    let tmp9 = num;
                    num = num + 1;
                    continue;
                  }
                }
              }
            }
            if (id.startsWith(constants2.GUEST_GUILDS)) {
              let num10 = 0;
              for (const item10146 of guestGuildIds) {
                let tmp59 = callback;
                let tmp60 = constants2;
                let tmp61 = constants2;
                if (callback(constants2.GUEST_GUILDS, id, item10146)) {
                  let obj7 = { section: null, item: null };
                  let tmp63 = constants;
                  obj7[0] = constants.GUEST_GUILDS;
                  obj7[1] = num10;
                  let tmp64 = obj9;
                  obj9.return();
                  return obj7;
                } else {
                  let tmp62 = num10;
                  num10 = num10 + 1;
                  continue;
                }
              }
            } else {
              if (id.startsWith(tmp14.UNREAD_PRIVATE_CHANNELS)) {
                let num4 = 0;
                for (const item10057 of privateChannelIds) {
                  let tmp18 = callback;
                  let tmp19 = constants2;
                  let tmp20 = constants2;
                  if (callback(constants2.UNREAD_PRIVATE_CHANNELS, id, item10057)) {
                    let obj8 = { section: null, item: null };
                    let tmp22 = constants;
                    obj8[0] = constants.UNREAD_PRIVATE_CHANNELS;
                    obj8[1] = num4;
                    let tmp23 = obj1;
                    obj1.return();
                    return obj8;
                  } else {
                    let tmp21 = num4;
                    num4 = num4 + 1;
                    continue;
                  }
                }
              }
              if (id.startsWith(constants2.GUILDS)) {
                let num6 = 0;
                let num7 = 0;
                for (const item10081 of guildsNFolders) {
                  let tmp29 = callback;
                  let tmp30 = constants2;
                  let tmp31 = constants2;
                  let tmp28 = item10081;
                  if (callback(constants2.GUILDS, id, item10081.id)) {
                    let obj9 = { section: null };
                    let tmp45 = num6;
                    let tmp46 = constants;
                    obj9[0] = num6 + constants.GUILDS;
                    let tmp47 = obj3;
                    obj3.return();
                    return obj9;
                  } else {
                    let tmp32 = item10081;
                    let children = tmp28.children;
                    let tmp33 = children;
                    let tmp34 = children;
                    for (const item10095 of children) {
                      let tmp35 = callback;
                      let tmp36 = constants2;
                      let tmp37 = constants2;
                      if (callback(constants2.GUILDS, id, item10095.id)) {
                        let obj10 = { section: null, item: null };
                        let tmp39 = num6;
                        let tmp40 = constants;
                        obj10[0] = num6 + constants.GUILDS;
                        let tmp41 = num7;
                        obj10[1] = num7;
                        let tmp42 = obj4;
                        obj4.return();
                        let tmp43 = obj3;
                        obj3.return();
                        return obj10;
                      } else {
                        let tmp38 = num7;
                        num7 = num7 + 1;
                        continue;
                      }
                    }
                    let tmp44 = num6;
                    num6 = num6 + 1;
                    num7 = 0;
                    continue;
                  }
                }
                let num8 = 0;
                for (const item10125 of geoRestrictedGuilds) {
                  let tmp50 = callback;
                  let tmp51 = constants2;
                  let tmp52 = constants2;
                  if (callback(constants2.GUILDS, id, item10125.id)) {
                    let obj11 = { section: null, item: null };
                    let tmp54 = num6;
                    let tmp55 = constants;
                    obj11[0] = num6 + constants.GUILDS;
                    obj11[1] = num8;
                    let tmp56 = obj7;
                    obj7.return();
                    return obj11;
                  } else {
                    let tmp53 = num8;
                    num8 = num8 + 1;
                    continue;
                  }
                }
              }
            }
            const tmp13 = constants2;
            tmp14 = constants2;
          }
        })({ id, lurkingGuildsIds: closure_12, guestGuildIds: closure_13, privateChannelIds: closure_9, guildsNFolders: closure_14, pendingFolderNode: closure_16, geoRestrictedGuilds: closure_11 });
      };
      return obj;
    }, items10)
  };
  return obj;
};