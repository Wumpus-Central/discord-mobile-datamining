// === Module 16292: useGuildsBarProps ===

// Module 16292 (useGuildsBarProps)
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import GuildsBarFooterWrapperDefault from "GuildsBarFooterWrapper" /* 16348 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import LurkingStore from "LurkingStore" /* 4200 */;
import MessageRequestStore from "MessageRequestStore" /* 7219 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7220 */;
import GeoRestrictedGuildStore from "GeoRestrictedGuildStore" /* 13745 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 4902 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 13753 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 16284 */;

require = fn;
function findGuildSectionIndex(arg0) {
  const fastListGuildFolders = SortedGuildStore.getFastListGuildFolders();
  let num = -1;
  let num2 = 0;
  let flag = false;
  for (const item10016 of fastListGuildFolders) {
    let element = item10016;
    num = num + 1;
    num2 = 0;
    let tmp4 = GuildsNodeType;
    if (item10016.type === GuildsNodeType.GUILD) {
      if (element.id === arg0) {
        flag = true;
        obj.return();
        break;
      }
      let tmp22 = null;
      if (flag) {
        let obj = { section: null, item: null };
        obj.section = num + constants.GUILDS;
        obj.item = num2;
        tmp22 = obj;
      }
      return tmp22;
    }
    if (element.type === tmp4.FOLDER) {
      let children = element.children;
      for (const item10035 of children) {
        if (item10035.type === GuildsNodeType.GUILD) {
          if (tmp11.id === arg0) {
            if (!element.expanded) {
              num2 = 0;
            }
            flag = true;
            obj2.return();
            break;
          } else {
            num2 = num2 + 1;
          }
        }
        continue;
      }
    }
    if (flag) {
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
const GuildsNodeType = fn(5438).GuildsNodeType;
const GuildsBarConstants = fn(16285);
({ FastListRenderSections: closure_17, useGuildWrapperSize: closure_18 } = GuildsBarConstants);
const jsx = fn(21).jsx;
let closure_21 = { MESSAGES: "section-messages", FAVORITES: "section-favorites", PENDING_JOIN_REQUESTS: "section-pending-join-requests", LURKING_GUILDS: "section-lurking-guilds", GUEST_GUILDS: "section-guest-guilds", UNREAD_PRIVATE_CHANNELS: "section-private-channels", SEPARATOR: "section-separator", GUILDS: "section-guilds" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

export default function useGuildsBarProps(arg0) {
  _require = arg0;
  const tmp = memo();
  importDefault = tmp;
  let obj = require("useToken");
  token = obj.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let rect = require("useSafeAreaInsets")();
  const top = rect.top;
  const bottom = rect.bottom;
  const mobileQuestDockHeight = require("QuestHooks").useMobileQuestDockHeight();
  let obj2 = require("QuestHooks");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  let obj3 = require("useYouBarTotalHeight");
  const youBarTotalHeight1 = require("useYouBarTotalHeight").useYouBarTotalHeight(4);
  let items = [mobileQuestDockHeight, top, youBarTotalHeight];
  const effect = top.useEffect(() => {
    const listInsets = GuildsBarDnDStore.getState().listInsets;
    const result = listInsets.set({ start: top, end: mobileQuestDockHeight + youBarTotalHeight });
  }, items);
  let num = 0;
  if (require("useIsFavoritesGuildVisible")()) {
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
  let obj4 = require("useYouBarTotalHeight");
  const items3 = [num];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items3, () => num.getGeoRestrictedGuilds());
  const tmp2Result1 = require("initialize");
  const items4 = [mobileQuestDockHeight];
  stateFromStores1 = require("initialize").useStateFromStores(items4, () => mobileQuestDockHeight.lurkingGuildIds());
  const tmp2Result2 = require("initialize");
  const items5 = [stateFromStoresArray1, stateFromStores];
  const stateFromStoresArray2 = require("initialize").useStateFromStoresArray(items5, () => {
    const guildIds = stateFromStoresArray1.getGuildIds();
    return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
  });
  const tmp2Result3 = require("initialize");
  const items6 = [guildsNFolders];
  const stateFromStores2 = require("initialize").useStateFromStores(items6, () => ({ guildsNFolders: guildsNFolders.getFastListGuildFolders(), version: guildsNFolders.getGuildsTree().version }), [], tmp4(tmp3[37]));
  guildsNFolders = stateFromStores2.guildsNFolders;
  const tmp16 = require("useGuildsBarCreatePendingFolderNode")();
  const expanded = tmp16.expanded;
  const pendingFolderNode = tmp16.pendingFolderNode;
  const tmp2Result4 = require("initialize");
  const items7 = [stateFromStoresArray];
  const stateFromStores3 = require("initialize").useStateFromStores(items7, () => stateFromStoresArray.totalUnavailableGuilds);
  const items8 = [top, mobileQuestDockHeight, bottom, youBarTotalHeight, youBarTotalHeight1, token];
  memo = obj5.useMemo(() => {
    const rect = { top: 3 * token, bottom: null };
    if (youBarTotalHeight > 0) {
      let diff = tmp2 - 16;
    } else {
      diff = bottom + 3 * tmp;
    }
    const obj = { scrollIndicatorInsets: rect, insetStart: top, insetEnd: mobileQuestDockHeight + 2 * token + youBarTotalHeight1, chunkBase: useWindowDimensions.getWindowDimensions().height };
    rect.bottom = diff;
    return obj;
  }, items8);
  const items9 = [, , ];
  ({ insetStart: arr10[0], insetEnd: arr10[1] } = memo);
  items9[2] = arg0;
  const callback = obj5.useCallback((arg0, arg1) => {
    if (null != arg0) {
      const tmp5 = findGuildSectionIndex(arg0);
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
  require("useGuildsBarSelectedGuildScroller")(callback);
  const memo1 = obj5.useMemo(() => {
    const guildId = stateFromStoresArray2.getGuildId();
    let tmp2;
    if (null != guildId) {
      tmp2 = findGuildSectionIndex(guildId);
    }
    if (null != tmp2) {
      const obj = { initialScrollItem: null, initialScrollSection: null };
      ({ item: obj.initialScrollItem, section: obj.initialScrollSection } = tmp2);
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
        } else if (element.type === tmp3.FOLDER) {
          let push = items.push;
          if (element.expanded) {
            arr = push(element.children.length);
          } else {
            arr1 = push(1);
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
        if (arg0 !== stateFromStores3.PENDING_JOIN_REQUESTS) {
          num = 0;
          if (arg0 >= tmp4.GUILDS) {
            let num2 = 0;
            if (null != tmp[arg0 - tmp4.GUILDS]) {
              num2 = 0;
              if (tmp6.type === expanded.FOLDER) {
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
        num = closure_1_1;
        if (stateFromStores3.MESSAGES !== arg0) {
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
                        if (element.type !== expanded.ROOT) {
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
        return items1.length * closure_1 + 8;
      };
      obj.renderSection = function renderSection(arg0) {
        if (arg0 >= stateFromStores3.GUILDS) {
          let tmp5 = null;
          if (tmp[arg0 - tmp3.GUILDS].type === expanded.FOLDER) {
            let obj = { id: null, expanded: null, name: null, color: null, childNodes: null };
            ({ id: obj2.id, expanded: obj2.expanded, name: obj2.name, color: obj2.color, children: obj2.childNodes } = tmp9);
            tmp5 = memo1(closure_1(token[15]), obj);
          }
        } else {
          tmp5 = null;
          if (arg0 === tmp3.PENDING_JOIN_REQUESTS) {
            tmp5 = null;
            if (null != tmp2) {
              obj = { id: null, expanded: null, childNodes: null };
              ({ id: obj.id, expanded: obj.expanded, children: obj.childNodes } = tmp2);
              tmp5 = memo1(closure_1(token[16]), obj);
            }
          }
        }
        return tmp5;
      };
      obj.renderItem = function renderItem(arg0, arg1) {
        if (stateFromStores3.MESSAGES === arg0) {
          let tmp8 = memo1(closure_1(token[17]), {});
        } else if (tmp6.FAVORITES === arg0) {
          tmp8 = memo1(closure_1(token[18]), {});
        } else if (tmp6.LURKING_GUILDS === arg0) {
          let tmp40 = null;
          if (null != tmp2[arg1]) {
            let obj = { guildId: tmp39 };
            tmp40 = memo1(closure_1(token[19]), obj);
          }
          tmp8 = tmp40;
        } else if (tmp6.GUEST_GUILDS === arg0) {
          let tmp35 = null;
          if (null != tmp3[arg1]) {
            obj = { guildId: tmp34 };
            tmp35 = memo1(closure_1(token[19]), obj);
          }
          tmp8 = tmp35;
        } else if (tmp6.UNREAD_PRIVATE_CHANNELS === arg0) {
          let tmp30 = null;
          if (null != tmp[arg1]) {
            const obj1 = { channelId: tmp29 };
            tmp30 = memo1(closure_1(token[20]), obj1);
          }
          tmp8 = tmp30;
        } else if (tmp6.SEPARATOR === arg0) {
          tmp8 = memo1(closure_1(token[21]), {});
        } else if (tmp6.PENDING_JOIN_REQUESTS === arg0) {
          tmp8 = null;
          if (null != tmp5) {
            let tmp21 = null;
            if (null != tmp5.children[arg1]) {
              tmp21 = null;
              if (tmp20.type === expanded.GUILD) {
                const obj2 = { guildId: tmp20.id };
                tmp21 = memo1(closure_1(token[22]), obj2);
              }
            }
            tmp8 = tmp21;
          }
        } else {
          const diff = arg0 - tmp6.GUILDS;
          if (diff >= arr.length) {
            let tmp15 = null;
            if (null != tmp4[arg1]) {
              const obj3 = { restrictedGuild: tmp14 };
              tmp15 = memo1(closure_1(token[23]), obj3);
            }
            tmp8 = tmp15;
          } else {
            const element = arr[diff];
            tmp8 = null;
            if (null != element) {
              tmp8 = null;
              if (element.type !== expanded.ROOT) {
                if (element.type !== tmp7.GUILD) {
                  let tmp9 = element;
                  if (element.type === tmp7.FOLDER) {
                    tmp9 = element.children[arg1];
                  }
                  let tmp10 = null;
                  if (null != tmp9) {
                    tmp10 = null;
                    if (tmp9.type === tmp7.GUILD) {
                      obj = { guildId: tmp9.id };
                      tmp10 = memo1(closure_1(token[19]), obj);
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
          children: items1.map((item) => {
            if ("unavailable-guilds" === item) {
              return closure_1_19(closure_1_1(16349), {}, item);
            } else if ("empty-nux" === item) {
              return closure_1_19(closure_1_1(16350), {}, item);
            } else if ("create-join-guild" === item) {
              return closure_1_19(closure_1_1(16352), {}, item);
            }
          })
        };
        return jsx(GuildsBarFooterWrapperDefault, {
          children: items1.map((item) => {
            if ("unavailable-guilds" === item) {
              return closure_1_19(closure_1_1(16349), {}, item);
            } else if ("empty-nux" === item) {
              return closure_1_19(closure_1_1(16350), {}, item);
            } else if ("create-join-guild" === item) {
              return closure_1_19(closure_1_1(16352), {}, item);
            }
          })
        });
      };
      obj.getRecyclerKey = function getRecyclerKey(ITEM, section, sum2) {
        if (section >= stateFromStores3.GUILDS) {
          const element = guildsNFolders[section - tmp3.GUILDS];
          if (null != element) {
            if (element.type !== expanded.ROOT) {
              let tmp5 = element;
              if (element.type === tmp10.FOLDER) {
                if (null == sum2) {
                  const _HermesInternal2 = HermesInternal;
                  return "" + element.id;
                } else {
                  tmp5 = element.children[sum2];
                }
              }
              const _HermesInternal = HermesInternal;
              return "" + tmp5.id;
            }
          }
        }
      };
      obj.renderAccessory = function renderAccessory(self) {
        return memo1(closure_1_1(token[28]), { fastList: self });
      };
      obj.getAnchorIdFromIndex = function getAnchorIdFromIndex(arg0, arg1) {
        if (null == pendingFolderNode.getState().dropSpecs) {
          if (null == pendingFolderNode.getState().dragSpecs) {
            if (stateFromStores3.MESSAGES === arg0) {
              let SEPARATOR = constants.MESSAGES;
            } else if (tmp7.FAVORITES === arg0) {
              SEPARATOR = constants.FAVORITES;
            } else if (tmp7.PENDING_JOIN_REQUESTS === arg0) {
              if (null == arg1) {
                SEPARATOR = constants.PENDING_JOIN_REQUESTS;
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
                  combined = "" + constants.PENDING_JOIN_REQUESTS + ":" + id;
                }
                SEPARATOR = combined;
              }
            } else if (tmp7.LURKING_GUILDS === arg0) {
              if (null == arg1) {
                let LURKING_GUILDS = constants.LURKING_GUILDS;
              } else {
                const _HermesInternal4 = HermesInternal;
                LURKING_GUILDS = "" + constants.LURKING_GUILDS + ":" + tmp2[arg1];
              }
              SEPARATOR = LURKING_GUILDS;
            } else if (tmp7.GUEST_GUILDS === arg0) {
              if (null == arg1) {
                let GUEST_GUILDS = constants.GUEST_GUILDS;
              } else {
                const _HermesInternal3 = HermesInternal;
                GUEST_GUILDS = "" + constants.GUEST_GUILDS + ":" + tmp3[arg1];
              }
              SEPARATOR = GUEST_GUILDS;
            } else if (tmp7.UNREAD_PRIVATE_CHANNELS === arg0) {
              if (null == arg1) {
                let UNREAD_PRIVATE_CHANNELS = constants.UNREAD_PRIVATE_CHANNELS;
              } else {
                const _HermesInternal2 = HermesInternal;
                UNREAD_PRIVATE_CHANNELS = "" + constants.UNREAD_PRIVATE_CHANNELS + ":" + tmp4[arg1];
              }
              SEPARATOR = UNREAD_PRIVATE_CHANNELS;
            } else if (tmp7.SEPARATOR === arg0) {
              SEPARATOR = constants.SEPARATOR;
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
                SEPARATOR = "" + constants.GUILDS + ":" + id;
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
            let obj = { section: constants.MESSAGES };
            return obj;
          } else if (tmp2.FAVORITES === id) {
            obj = { section: constants.FAVORITES };
            return obj;
          } else if (tmp2.PENDING_JOIN_REQUESTS === id) {
            const obj1 = { section: constants.PENDING_JOIN_REQUESTS };
            return obj1;
          } else if (tmp2.LURKING_GUILDS === id) {
            const obj2 = { section: constants.LURKING_GUILDS };
            return obj2;
          } else if (tmp2.GUEST_GUILDS === id) {
            const obj3 = { section: constants.GUEST_GUILDS };
            return obj3;
          } else if (tmp2.UNREAD_PRIVATE_CHANNELS === id) {
            const obj4 = { section: constants.UNREAD_PRIVATE_CHANNELS };
            return obj4;
          } else if (tmp2.SEPARATOR === id) {
            const obj5 = { section: constants.SEPARATOR };
            return obj5;
          } else if (id.startsWith(tmp2.LURKING_GUILDS)) {
            let num12 = 0;
            for (const item10164 of lurkingGuildsIds) {
              if (closure_1_22(constants2.LURKING_GUILDS, id, item10164)) {
                let obj6 = { section: null, item: null };
                obj6.section = constants.LURKING_GUILDS;
                obj6.item = num12;
                obj11.return();
                return obj6;
              } else {
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
                  if (closure_1_22(constants2.PENDING_JOIN_REQUESTS, id, item10025.id)) {
                    obj = { section: null, item: null };
                    obj.section = constants.PENDING_JOIN_REQUESTS;
                    obj.item = num;
                    obj21.return();
                    return obj;
                  } else {
                    num = num + 1;
                    continue;
                  }
                }
              }
            }
            if (id.startsWith(constants2.GUEST_GUILDS)) {
              let num10 = 0;
              for (const item10146 of guestGuildIds) {
                if (closure_1_22(constants2.GUEST_GUILDS, id, item10146)) {
                  let obj7 = { section: null, item: null };
                  obj7.section = constants.GUEST_GUILDS;
                  obj7.item = num10;
                  obj9.return();
                  return obj7;
                } else {
                  num10 = num10 + 1;
                  continue;
                }
              }
            } else {
              if (id.startsWith(tmp14.UNREAD_PRIVATE_CHANNELS)) {
                let num4 = 0;
                for (const item10057 of privateChannelIds) {
                  if (closure_1_22(constants2.UNREAD_PRIVATE_CHANNELS, id, item10057)) {
                    let obj8 = { section: null, item: null };
                    obj8.section = constants.UNREAD_PRIVATE_CHANNELS;
                    obj8.item = num4;
                    obj1.return();
                    return obj8;
                  } else {
                    num4 = num4 + 1;
                    continue;
                  }
                }
              }
              if (id.startsWith(constants2.GUILDS)) {
                let num6 = 0;
                let num7 = 0;
                for (const item10081 of guildsNFolders) {
                  let tmp28 = item10081;
                  if (closure_1_22(constants2.GUILDS, id, item10081.id)) {
                    let obj9 = { section: null };
                    obj9.section = num6 + constants.GUILDS;
                    obj3.return();
                    return obj9;
                  } else {
                    let children = tmp28.children;
                    for (const item10095 of children) {
                      if (closure_1_22(constants2.GUILDS, id, item10095.id)) {
                        let obj10 = { section: null, item: null };
                        obj10.section = num6 + constants.GUILDS;
                        obj10.item = num7;
                        obj4.return();
                        obj3.return();
                        return obj10;
                      } else {
                        num7 = num7 + 1;
                        continue;
                      }
                    }
                    num6 = num6 + 1;
                    num7 = 0;
                    continue;
                  }
                }
                let num8 = 0;
                for (const item10125 of geoRestrictedGuilds) {
                  if (closure_1_22(constants2.GUILDS, id, item10125.id)) {
                    let obj11 = { section: null, item: null };
                    obj11.section = num6 + constants.GUILDS;
                    obj11.item = num8;
                    obj7.return();
                    return obj11;
                  } else {
                    num8 = num8 + 1;
                    continue;
                  }
                }
              }
            }
            tmp14 = constants2;
          }
        })({ id, lurkingGuildsIds, guestGuildIds, privateChannelIds, guildsNFolders, pendingFolderNode, geoRestrictedGuilds });
      };
      return obj;
    }, items10)
  };
  return obj;
};