// discord_app/modules/guilds_bar/native/hooks/useGuildsBarProps.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import _handleConnectionOpen from "../../../gateway/GatewayConnectionStore.tsx";
import initialize from "../../../lurker_mode/LurkingStore.tsx";
import processChannel from "../../../message_request/MessageRequestStore.tsx";
import processChannel2 from "../../../message_request/SpamMessageRequestStore.tsx";
import getGeoRestrictedGuilds from "../../../../stores/GeoRestrictedGuildStore.tsx";
import handleConnectionOpen from "../../../../stores/GuildAvailabilityStore.tsx";
import trackCommunicationDisabled from "../../../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import rebuildUnreads from "../../../../stores/PrivateChannelReadStateStore.tsx";
import handleConnectionOpen2 from "../../../../stores/SelectedGuildStore.tsx";
import insertUnsortedGuilds from "../../../../stores/SortedGuildStore.tsx";
import { GuildsNodeType } from "../../../../stores/SortedGuildStore.tsx";
import withEqualityFn from "../GuildsBarDnDStore.tsx";
import GUILD_ITEM_SIZE from "../GuildsBarConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
function findGuildSectionIndex(arg0) {
  fastListGuildFolders = fastListGuildFolders.getFastListGuildFolders();
  let num = -1;
  let num2 = 0;
  let flag = false;
  for (const item10016 of fastListGuildFolders) {
    let element = item10016;
    num = num + 1;
    num2 = 0;
    if (item10016.type === GuildsNodeType.GUILD) {
      if (element.id === arg0) {
        flag = true;
        obj.return();
        break;
      }
      let tmp22 = null;
      if (flag) {
        let obj = { section: null, item: null };
        obj[0] = num + constants.GUILDS;
        obj[1] = num2;
        tmp22 = obj;
      }
      return tmp22;
    }
    if (element.type === GuildsNodeType.FOLDER) {
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
({ FastListRenderSections: closure_17, useGuildWrapperSize: closure_18 } = GUILD_ITEM_SIZE);
let closure_21 = { MESSAGES: "section-messages", FAVORITES: "section-favorites", PENDING_JOIN_REQUESTS: "section-pending-join-requests", LURKING_GUILDS: "section-lurking-guilds", GUEST_GUILDS: "section-guest-guilds", UNREAD_PRIVATE_CHANNELS: "section-private-channels", SEPARATOR: "section-separator", GUILDS: "section-guilds" };
let result = require("obj132").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

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
    return guildIds.filter((item, index) => currentUserGuest.isCurrentUserGuest(item));
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
      diff = bottom + 3 * token;
    }
    obj = { scrollIndicatorInsets: obj, insetStart: top, insetEnd: mobileQuestDockHeight + 2 * token + youBarTotalHeight1, chunkBase: null };
    obj[1] = diff;
    obj[3] = ref(token[39]).getWindowDimensions().height;
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
          if (arg0 >= stateFromStores3.GUILDS) {
            let num2 = 0;
            if (null != tmp[arg0 - stateFromStores3.GUILDS]) {
              num2 = 0;
              if (tmp6.type === expanded.FOLDER) {
                num2 = closure_1;
              }
            }
            num = num2;
          }
        } else {
          num = closure_1;
        }
        return num;
      };
      obj.itemSize = function itemSize(arg0, arg1) {
        num = closure_1;
        if (stateFromStores3.MESSAGES !== arg0) {
          num = closure_1;
          if (stateFromStores3.FAVORITES !== arg0) {
            num = closure_1;
            if (stateFromStores3.LURKING_GUILDS !== arg0) {
              num = closure_1;
              if (stateFromStores3.GUEST_GUILDS !== arg0) {
                let num6 = arg1;
                if (stateFromStores3.UNREAD_PRIVATE_CHANNELS === arg0) {
                  if (num6 == null) {
                    num6 = -1;
                  }
                  let num7 = 0;
                  if (null != tmp2[num6]) {
                    num7 = closure_1;
                  }
                  num = num7;
                } else if (stateFromStores3.SEPARATOR === arg0) {
                  num = 1 + 2 * tmp5;
                } else if (stateFromStores3.PENDING_JOIN_REQUESTS === arg0) {
                  let num3 = 0;
                  if (null != num6) {
                    num3 = 0;
                    if (null != closure_16) {
                      num3 = 0;
                      if (closure_16.expanded) {
                        num3 = 0;
                        if (null != closure_16.children[num6]) {
                          num3 = closure_1;
                        }
                      }
                    }
                  }
                  num = num3;
                } else {
                  num = 0;
                  if (null != num6) {
                    const diff = arg0 - stateFromStores3.GUILDS;
                    if (closure_14.length < diff) {
                      const element = closure_14[diff];
                      let num2 = 0;
                      if (null != element) {
                        num2 = 0;
                        if (element.type !== expanded.ROOT) {
                          if (element.type !== expanded.GUILD) {
                            if (element.type !== expanded.FOLDER) {
                              num2 = closure_1;
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
                      num = closure_1;
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
        if (arg0 >= stateFromStores3.GUILDS) {
          let tmp5 = null;
          if (tmp[arg0 - stateFromStores3.GUILDS].type === expanded.FOLDER) {
            let obj = { id: null, expanded: null, name: null, color: null, childNodes: null };
            ({ id: obj2[0], expanded: obj2[1], name: obj2[2], color: obj2[3], children: obj2[4] } = tmp9);
            tmp5 = memo1(closure_1_1(token[15]), obj);
          }
        } else {
          tmp5 = null;
          if (arg0 === stateFromStores3.PENDING_JOIN_REQUESTS) {
            tmp5 = null;
            if (null != closure_16) {
              obj = { id: null, expanded: null, childNodes: null };
              ({ id: obj[0], expanded: obj[1], children: obj[2] } = closure_16);
              tmp5 = memo1(closure_1_1(token[16]), obj);
            }
          }
        }
        return tmp5;
      };
      obj.renderItem = function renderItem(arg0, arg1) {
        if (stateFromStores3.MESSAGES === arg0) {
          let tmp8 = memo1(closure_1_1(token[17]), {});
        } else if (stateFromStores3.FAVORITES === arg0) {
          tmp8 = memo1(closure_1_1(token[18]), {});
        } else if (stateFromStores3.LURKING_GUILDS === arg0) {
          let tmp40 = null;
          if (null != tmp2[arg1]) {
            let obj = { guildId: null };
            obj[0] = tmp39;
            tmp40 = memo1(closure_1_1(token[19]), obj);
          }
          tmp8 = tmp40;
        } else if (stateFromStores3.GUEST_GUILDS === arg0) {
          let tmp35 = null;
          if (null != tmp3[arg1]) {
            obj = { guildId: null };
            obj[0] = tmp34;
            tmp35 = memo1(closure_1_1(token[19]), obj);
          }
          tmp8 = tmp35;
        } else if (stateFromStores3.UNREAD_PRIVATE_CHANNELS === arg0) {
          let tmp30 = null;
          if (null != tmp[arg1]) {
            obj1 = { channelId: null };
            obj1[0] = tmp29;
            tmp30 = memo1(closure_1_1(token[20]), obj1);
          }
          tmp8 = tmp30;
        } else if (stateFromStores3.SEPARATOR === arg0) {
          tmp8 = memo1(closure_1_1(token[21]), {});
        } else if (stateFromStores3.PENDING_JOIN_REQUESTS === arg0) {
          tmp8 = null;
          if (null != closure_16) {
            let tmp21 = null;
            if (null != closure_16.children[arg1]) {
              tmp21 = null;
              if (tmp20.type === expanded.GUILD) {
                const obj2 = { guildId: null };
                obj2[0] = tmp20.id;
                tmp21 = memo1(closure_1_1(token[22]), obj2);
              }
            }
            tmp8 = tmp21;
          }
        } else {
          const diff = arg0 - stateFromStores3.GUILDS;
          if (diff >= closure_14.length) {
            let tmp15 = null;
            if (null != tmp4[arg1]) {
              const obj3 = { restrictedGuild: null };
              obj3[0] = tmp14;
              tmp15 = memo1(closure_1_1(token[23]), obj3);
            }
            tmp8 = tmp15;
          } else {
            const element = closure_14[diff];
            tmp8 = null;
            if (null != element) {
              tmp8 = null;
              if (element.type !== expanded.ROOT) {
                if (element.type !== expanded.GUILD) {
                  let tmp9 = element;
                  if (element.type === expanded.FOLDER) {
                    tmp9 = element.children[arg1];
                  }
                  let tmp10 = null;
                  if (null != tmp9) {
                    tmp10 = null;
                    if (tmp9.type === expanded.GUILD) {
                      obj = { guildId: null };
                      obj[0] = tmp9.id;
                      tmp10 = memo1(closure_1_1(token[19]), obj);
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
          children: items1.map((item, index) => {
            if ("unavailable-guilds" === item) {
              return callback2(callback(15612), {}, item);
            } else if ("empty-nux" === item) {
              return callback2(callback(15613), {}, item);
            } else if ("create-join-guild" === item) {
              return callback2(callback(15615), {}, item);
            }
          })
        };
        return memo1(callback(token[24]), obj);
      };
      obj.getRecyclerKey = function getRecyclerKey(ITEM, section, item) {
        if (section >= stateFromStores3.GUILDS) {
          const element = table2[section - tmp3.GUILDS];
          if (null != element) {
            if (element.type !== expanded.ROOT) {
              let tmp5 = element;
              if (element.type === expanded.FOLDER) {
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
      obj.getAnchorIdFromIndex = function getAnchorIdFromIndex(section, item) {
        if (null == pendingFolderNode.getState().dropSpecs) {
          if (null == pendingFolderNode.getState().dragSpecs) {
            if (stateFromStores3.MESSAGES === section) {
              let SEPARATOR = closure_1_21.MESSAGES;
            } else if (stateFromStores3.FAVORITES === section) {
              SEPARATOR = closure_1_21.FAVORITES;
            } else if (stateFromStores3.PENDING_JOIN_REQUESTS === section) {
              if (null == item) {
                SEPARATOR = closure_1_21.PENDING_JOIN_REQUESTS;
              } else {
                let id;
                if (closure_16 != null) {
                  if (closure_16.children[item] != null) {
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
            } else if (stateFromStores3.LURKING_GUILDS === section) {
              if (null == item) {
                let LURKING_GUILDS = closure_1_21.LURKING_GUILDS;
              } else {
                const _HermesInternal4 = HermesInternal;
                LURKING_GUILDS = "" + closure_1_21.LURKING_GUILDS + ":" + tmp2[item];
              }
              SEPARATOR = LURKING_GUILDS;
            } else if (stateFromStores3.GUEST_GUILDS === section) {
              if (null == item) {
                let GUEST_GUILDS = closure_1_21.GUEST_GUILDS;
              } else {
                const _HermesInternal3 = HermesInternal;
                GUEST_GUILDS = "" + closure_1_21.GUEST_GUILDS + ":" + tmp3[item];
              }
              SEPARATOR = GUEST_GUILDS;
            } else if (stateFromStores3.UNREAD_PRIVATE_CHANNELS === section) {
              if (null == item) {
                let UNREAD_PRIVATE_CHANNELS = closure_1_21.UNREAD_PRIVATE_CHANNELS;
              } else {
                const _HermesInternal2 = HermesInternal;
                UNREAD_PRIVATE_CHANNELS = "" + closure_1_21.UNREAD_PRIVATE_CHANNELS + ":" + tmp4[item];
              }
              SEPARATOR = UNREAD_PRIVATE_CHANNELS;
            } else if (stateFromStores3.SEPARATOR === section) {
              SEPARATOR = closure_1_21.SEPARATOR;
            } else {
              const GUILDS = stateFromStores3.GUILDS;
              const diff = section - stateFromStores3.GUILDS;
              if (null == closure_14[diff]) {
                let tmp9;
                if (diff >= closure_14.length) {
                  if (null != item) {
                    let id1;
                    if (tmp6[item] != null) {
                      id1 = tmp10.id;
                    }
                    tmp9 = id1;
                  }
                }
                id = tmp9;
              } else if (null == item) {
                id = tmp34.id;
              } else if (tmp34.children[item] != null) {
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
          } else if (constants2.FAVORITES === id) {
            obj = { section: null };
            obj[0] = constants.FAVORITES;
            return obj;
          } else if (constants2.PENDING_JOIN_REQUESTS === id) {
            obj1 = { section: null };
            obj1[0] = constants.PENDING_JOIN_REQUESTS;
            return obj1;
          } else if (constants2.LURKING_GUILDS === id) {
            const obj2 = { section: null };
            obj2[0] = constants.LURKING_GUILDS;
            return obj2;
          } else if (constants2.GUEST_GUILDS === id) {
            const obj3 = { section: null };
            obj3[0] = constants.GUEST_GUILDS;
            return obj3;
          } else if (constants2.UNREAD_PRIVATE_CHANNELS === id) {
            const obj4 = { section: null };
            obj4[0] = constants.UNREAD_PRIVATE_CHANNELS;
            return obj4;
          } else if (constants2.SEPARATOR === id) {
            const obj5 = { section: null };
            obj5[0] = constants.SEPARATOR;
            return obj5;
          } else if (id.startsWith(constants2.LURKING_GUILDS)) {
            let num12 = 0;
            for (const item10164 of lurkingGuildsIds) {
              if (callback(constants2.LURKING_GUILDS, id, item10164)) {
                let obj6 = { section: null, item: null };
                obj6[0] = constants.LURKING_GUILDS;
                obj6[1] = num12;
                obj11.return();
                return obj6;
              } else {
                num12 = num12 + 1;
                continue;
              }
            }
          } else {
            if (id.startsWith(constants2.PENDING_JOIN_REQUESTS)) {
              if (null != pendingFolderNode) {
                num = 0;
                const children2 = pendingFolderNode.children;
                for (const item10025 of children2) {
                  if (callback(constants2.PENDING_JOIN_REQUESTS, id, item10025.id)) {
                    obj = { section: null, item: null };
                    obj[0] = constants.PENDING_JOIN_REQUESTS;
                    obj[1] = num;
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
                if (callback(constants2.GUEST_GUILDS, id, item10146)) {
                  let obj7 = { section: null, item: null };
                  obj7[0] = constants.GUEST_GUILDS;
                  obj7[1] = num10;
                  obj9.return();
                  return obj7;
                } else {
                  num10 = num10 + 1;
                  continue;
                }
              }
            } else {
              if (id.startsWith(constants2.UNREAD_PRIVATE_CHANNELS)) {
                let num4 = 0;
                for (const item10057 of privateChannelIds) {
                  if (callback(constants2.UNREAD_PRIVATE_CHANNELS, id, item10057)) {
                    let obj8 = { section: null, item: null };
                    obj8[0] = constants.UNREAD_PRIVATE_CHANNELS;
                    obj8[1] = num4;
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
                  if (callback(constants2.GUILDS, id, item10081.id)) {
                    let obj9 = { section: null };
                    obj9[0] = num6 + constants.GUILDS;
                    obj3.return();
                    return obj9;
                  } else {
                    let children = item10081.children;
                    for (const item10095 of children) {
                      if (callback(constants2.GUILDS, id, item10095.id)) {
                        let obj10 = { section: null, item: null };
                        obj10[0] = num6 + constants.GUILDS;
                        obj10[1] = num7;
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
                  if (callback(constants2.GUILDS, id, item10125.id)) {
                    let obj11 = { section: null, item: null };
                    obj11[0] = num6 + constants.GUILDS;
                    obj11[1] = num8;
                    obj7.return();
                    return obj11;
                  } else {
                    num8 = num8 + 1;
                    continue;
                  }
                }
              }
            }
          }
        })({ id, lurkingGuildsIds: closure_12, guestGuildIds: closure_13, privateChannelIds: closure_9, guildsNFolders: closure_14, pendingFolderNode: closure_16, geoRestrictedGuilds: closure_11 });
      };
      return obj;
    }, items10)
  };
  return obj;
};