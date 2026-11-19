// === Module 17917: useGuildsBarProps ===

// Module 17917 (useGuildsBarProps)
import useWindowDimensions from "useWindowDimensions" /* 1496 */;
import GuildsBarFooterWrapperDefault from "GuildsBarFooterWrapper" /* 17973 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6273 */;
import LurkingStore from "LurkingStore" /* 4725 */;
import MessageRequestStore from "MessageRequestStore" /* 6513 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6514 */;
import GeoRestrictedGuildStore from "GeoRestrictedGuildStore" /* 14939 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6430 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
import GuildStore from "GuildStore" /* 4663 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 14946 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4825 */;
import SortedGuildStore from "SortedGuildStore" /* 6429 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 17910 */;

const require = globalThis.__r;

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
    if (item10016.type === GuildsNodeType.GUILD) {
      if (element.id === arg0) {
        flag = true;
        obj.return();
        break;
      }
      let tmp22 = null;
      if (flag) {
        let obj3 = { section: num + constants.GUILDS, item: num2 };
        tmp22 = obj3;
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
const GuildsNodeType = fn(6429).GuildsNodeType;
const GuildsBarConstants = fn(17907);
({ FastListRenderSections: closure_17, useGuildWrapperSize: closure_18 } = GuildsBarConstants);
const jsx = fn(21).jsx;
let closure_21 = { MESSAGES: "section-messages", FAVORITES: "section-favorites", PENDING_JOIN_REQUESTS: "section-pending-join-requests", LURKING_GUILDS: "section-lurking-guilds", GUEST_GUILDS: "section-guest-guilds", UNREAD_PRIVATE_CHANNELS: "section-private-channels", CHECKPOINT_INTRO: "section-checkpoint-intro", SEPARATOR: "section-separator", GUILDS: "section-guilds" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

export default function useGuildsBarProps(arg0) {
  _require = arg0;
  const tmp = expanded();
  importDefault = tmp;
  token = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let rect = require("useSafeAreaInsets")();
  const top = rect.top;
  const bottom = rect.bottom;
  let obj = require("useToken");
  const mobileQuestDockHeight = require("QuestHooks").useMobileQuestDockHeight();
  let obj2 = require("QuestHooks");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  let obj3 = require("useYouBarTotalHeight");
  const youBarTotalHeight1 = require("useYouBarTotalHeight").useYouBarTotalHeight(4);
  items = [mobileQuestDockHeight, top, youBarTotalHeight];
  const effect = top.useEffect(() => {
    const listInsets = GuildsBarDnDStore.getState().listInsets;
    const result = listInsets.set({ start: top, end: mobileQuestDockHeight + youBarTotalHeight });
  }, items);
  let obj4 = require("useYouBarTotalHeight");
  const waterwheelsDiscoverEnabled = require("WaterwheelsDiscoverExperiment").useWaterwheelsDiscoverEnabled("guilds_bar");
  let num = 0;
  if (require("useIsFavoritesGuildVisible")()) {
    num = 1;
  }
  let obj6 = require("WaterwheelsDiscoverExperiment");
  const checkpointGuildsBarEntrypoint = require("useCheckpointGuildsBarEntrypoint").useCheckpointGuildsBarEntrypoint("GuildsBar");
  const visible = checkpointGuildsBarEntrypoint.visible;
  const markAsDismissed = checkpointGuildsBarEntrypoint.markAsDismissed;
  const tmp2Result = require("useCheckpointGuildsBarEntrypoint");
  let items1 = [stateFromStoresArray, youBarTotalHeight, youBarTotalHeight1];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const unreadPrivateChannelIds = stateFromStoresArray.getUnreadPrivateChannelIds();
    items = [youBarTotalHeight, youBarTotalHeight1];
    return ref(token[40]).filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
  }, []);
  const tmp2Result9 = require("initialize");
  const items2 = [bottom];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => bottom.isConnected());
  const tmp2Result10 = require("initialize");
  const items3 = [waterwheelsDiscoverEnabled];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items3, () => waterwheelsDiscoverEnabled.getGeoRestrictedGuilds());
  const tmp2Result11 = require("initialize");
  const items4 = [mobileQuestDockHeight];
  const stateFromStores1 = require("initialize").useStateFromStores(items4, () => mobileQuestDockHeight.lurkingGuildIds());
  const tmp2Result12 = require("initialize");
  const items5 = [markAsDismissed, visible];
  const stateFromStoresArray2 = require("initialize").useStateFromStoresArray(items5, () => {
    const guildIds = markAsDismissed.getGuildIds();
    return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
  });
  const tmp2Result13 = require("initialize");
  const items6 = [stateFromStoresArray1];
  const stateFromStores2 = require("initialize").useStateFromStores(items6, () => ({ guildsNFolders: stateFromStoresArray1.getFastListGuildFolders(), version: stateFromStoresArray1.getGuildsTree().version }), [], tmp4(tmp3[41]));
  const guildsNFolders = stateFromStores2.guildsNFolders;
  const tmp18 = require("useGuildsBarCreatePendingFolderNode")();
  expanded = tmp18.expanded;
  const pendingFolderNode = tmp18.pendingFolderNode;
  const tmp2Result14 = require("initialize");
  const items7 = [num];
  const stateFromStores3 = require("initialize").useStateFromStores(items7, () => num.totalUnavailableGuilds);
  const tmp2Result15 = require("initialize");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const items8 = [isScreenReaderEnabled, token, youBarTotalHeight, bottom, top, mobileQuestDockHeight, youBarTotalHeight1];
  const memo = obj5.useMemo(() => {
    const obj = { showsVerticalScrollIndicator: !isScreenReaderEnabled, scrollIndicatorInsets: null, insetStart: null, insetEnd: null, chunkBase: null };
    const rect = { top: 3 * token, bottom: null };
    if (youBarTotalHeight > 0) {
      let diff = tmp2 - 16;
    } else {
      diff = bottom + 3 * token;
    }
    rect.bottom = diff;
    obj.scrollIndicatorInsets = rect;
    obj.insetStart = top;
    obj.insetEnd = mobileQuestDockHeight + 2 * token + youBarTotalHeight1;
    obj.chunkBase = useWindowDimensions.getWindowDimensions().height;
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
    const guildId = stateFromStores.getGuildId();
    let tmp2;
    if (null != guildId) {
      tmp2 = stateFromStores3(guildId);
    }
    if (null != tmp2) {
      const obj = { initialScrollItem: null, initialScrollSection: null };
      ({ item: obj.initialScrollItem, section: obj.initialScrollSection } = tmp2);
      return obj;
    }
  }, []);
  const items10 = [num, pendingFolderNode, stateFromStores1, stateFromStoresArray2, stateFromStoresArray, stateFromStoresArray1, stateFromStores3, stateFromStores, guildsNFolders, memo1, stateFromStores2.version, expanded, token, tmp, waterwheelsDiscoverEnabled, visible, markAsDismissed];
  const tmp2Result16 = require("useIsScreenReaderEnabled");
  return {
    listProps: memo,
    listDataProps: top.useMemo(() => {
      items = [1, num];
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
      let num3 = 0;
      if (visible) {
        num3 = 1;
      }
      items[6] = num3;
      items[7] = 1;
      for (const item10030 of guildsNFolders) {
        let element = item10030;
        if (item10030.type === stateFromStores1.GUILD) {
          let arr = items.push(1);
        } else if (element.type === tmp3.FOLDER) {
          let push = items.push;
          if (element.expanded) {
            let arr3 = push(element.children.length);
          } else {
            let arr11 = push(1);
          }
        }
        continue;
      }
      if (stateFromStoresArray1.length > 0) {
        items.push(arr2.length);
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
      if (waterwheelsDiscoverEnabled) {
        items1.push("waterwheels");
      }
      items1.push("create-join-guild");
      let obj = {};
      const merged = Object.assign(memo1);
      obj.sections = items;
      obj.sectionSize = function sectionSize(arg0) {
        if (arg0 !== guildsNFolders.PENDING_JOIN_REQUESTS) {
          num = 0;
          if (arg0 >= guildsNFolders.GUILDS) {
            let num2 = 0;
            if (null != tmp[arg0 - guildsNFolders.GUILDS]) {
              num2 = 0;
              if (tmp6.type === stateFromStores1.FOLDER) {
                num2 = closure_1_1;
              }
            }
            num = num2;
          }
        } else {
          num = closure_1_1;
        }
        return num;
      };
      obj.itemSize = function itemSize(arg0, arg1) {
        num = closure_1_1;
        if (guildsNFolders.MESSAGES !== arg0) {
          num = closure_1_1;
          if (guildsNFolders.FAVORITES !== arg0) {
            num = closure_1_1;
            if (guildsNFolders.LURKING_GUILDS !== arg0) {
              num = closure_1_1;
              if (guildsNFolders.GUEST_GUILDS !== arg0) {
                num = closure_1_1;
                if (guildsNFolders.CHECKPOINT_INTRO !== arg0) {
                  let num6 = arg1;
                  if (guildsNFolders.UNREAD_PRIVATE_CHANNELS === arg0) {
                    if (num6 == null) {
                      num6 = -1;
                    }
                    let num7 = 0;
                    if (null != tmp2[num6]) {
                      num7 = closure_1_1;
                    }
                    num = num7;
                  } else if (guildsNFolders.SEPARATOR === arg0) {
                    num = 1 + 2 * tmp5;
                  } else if (guildsNFolders.PENDING_JOIN_REQUESTS === arg0) {
                    let num3 = 0;
                    if (null != num6) {
                      num3 = 0;
                      if (null != pendingFolderNode) {
                        num3 = 0;
                        if (pendingFolderNode.expanded) {
                          num3 = 0;
                          if (null != pendingFolderNode.children[num6]) {
                            num3 = closure_1_1;
                          }
                        }
                      }
                    }
                    num = num3;
                  } else {
                    num = 0;
                    if (null != num6) {
                      const diff = arg0 - guildsNFolders.GUILDS;
                      if (guildsNFolders.length < diff) {
                        const element = guildsNFolders[diff];
                        let num2 = 0;
                        if (null != element) {
                          num2 = 0;
                          if (element.type !== stateFromStores1.ROOT) {
                            if (element.type !== stateFromStores1.GUILD) {
                              if (element.type !== stateFromStores1.FOLDER) {
                                num2 = closure_1_1;
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
                        num = closure_1_1;
                      }
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
        const result = items1.length * closure_1;
        const result1 = 2 * token;
        let sum = result;
        if (items1.includes("waterwheels")) {
          sum = result + (1 + result1);
        }
        return sum + 8;
      };
      obj.renderSection = function renderSection(arg0) {
        if (arg0 >= guildsNFolders.GUILDS) {
          let tmp5 = null;
          if (tmp[arg0 - guildsNFolders.GUILDS].type === stateFromStores1.FOLDER) {
            ({ id: obj2.id, expanded: obj2.expanded, name: obj2.name, color: obj2.color, children: obj2.childNodes } = tmp9);
            tmp5 = pendingFolderNode(closure_1(token[15]), { id: null, expanded: null, name: null, color: null, childNodes: null });
            const obj3 = { id: null, expanded: null, name: null, color: null, childNodes: null };
          }
        } else {
          tmp5 = null;
          if (arg0 === guildsNFolders.PENDING_JOIN_REQUESTS) {
            tmp5 = null;
            if (null != closure_1_19) {
              const obj = { id: null, expanded: null, childNodes: null };
              ({ id: obj.id, expanded: obj.expanded, children: obj.childNodes } = closure_1_19);
              tmp5 = pendingFolderNode(closure_1(token[16]), obj);
            }
          }
        }
        return tmp5;
      };
      obj.renderItem = function renderItem(arg0, arg1) {
        if (guildsNFolders.MESSAGES === arg0) {
          let tmp9 = pendingFolderNode(closure_1(token[17]), {});
        } else if (guildsNFolders.FAVORITES === arg0) {
          tmp9 = pendingFolderNode(closure_1(token[18]), {});
        } else if (guildsNFolders.LURKING_GUILDS === arg0) {
          let tmp44 = null;
          if (null != tmp2[arg1]) {
            const obj2 = { guildId: tmp43 };
            tmp44 = pendingFolderNode(closure_1(token[19]), obj2);
          }
          tmp9 = tmp44;
        } else if (guildsNFolders.GUEST_GUILDS === arg0) {
          let tmp39 = null;
          if (null != tmp3[arg1]) {
            const obj3 = { guildId: tmp38 };
            tmp39 = pendingFolderNode(closure_1(token[19]), obj3);
          }
          tmp9 = tmp39;
        } else if (guildsNFolders.UNREAD_PRIVATE_CHANNELS === arg0) {
          let tmp34 = null;
          if (null != tmp[arg1]) {
            const obj4 = { channelId: tmp33 };
            tmp34 = pendingFolderNode(closure_1(token[20]), obj4);
          }
          tmp9 = tmp34;
        } else if (guildsNFolders.CHECKPOINT_INTRO === arg0) {
          const obj5 = { markAsDismissed: tmp6 };
          tmp9 = pendingFolderNode(closure_1(token[21]), obj5);
        } else if (guildsNFolders.SEPARATOR === arg0) {
          tmp9 = pendingFolderNode(closure_1(token[22]), {});
        } else if (guildsNFolders.PENDING_JOIN_REQUESTS === arg0) {
          tmp9 = null;
          if (null != pendingFolderNode) {
            let tmp22 = null;
            if (null != pendingFolderNode.children[arg1]) {
              tmp22 = null;
              if (tmp21.type === stateFromStores1.GUILD) {
                const obj6 = { guildId: tmp21.id };
                tmp22 = pendingFolderNode(closure_1(token[23]), obj6);
              }
            }
            tmp9 = tmp22;
          }
        } else {
          const diff = arg0 - guildsNFolders.GUILDS;
          if (diff >= guildsNFolders.length) {
            let tmp16 = null;
            if (null != tmp4[arg1]) {
              const obj7 = { restrictedGuild: tmp15 };
              tmp16 = pendingFolderNode(closure_1(token[24]), obj7);
            }
            tmp9 = tmp16;
          } else {
            const element = guildsNFolders[diff];
            tmp9 = null;
            if (null != element) {
              tmp9 = null;
              if (element.type !== stateFromStores1.ROOT) {
                if (element.type !== stateFromStores1.GUILD) {
                  let tmp10 = element;
                  if (element.type === stateFromStores1.FOLDER) {
                    tmp10 = element.children[arg1];
                  }
                  let tmp11 = null;
                  if (null != tmp10) {
                    tmp11 = null;
                    if (tmp10.type === stateFromStores1.GUILD) {
                      const obj = { guildId: tmp10.id };
                      tmp11 = pendingFolderNode(closure_1(token[19]), obj);
                    }
                  }
                  tmp9 = tmp11;
                } else {
                  tmp9 = null;
                }
              }
            }
          }
        }
        return tmp9;
      };
      obj.renderFooter = function renderFooter() {
        const obj = {
          children: items1.map((item) => {
            if ("unavailable-guilds" === item) {
              return pendingFolderNode(closure_1_1(17974), {}, item);
            } else if ("empty-nux" === item) {
              return pendingFolderNode(closure_1_1(17975), {}, item);
            } else if ("waterwheels" === item) {
              return pendingFolderNode(closure_1_1(17976), {}, item);
            } else if ("create-join-guild" === item) {
              return pendingFolderNode(closure_1_1(17977), {}, item);
            }
          })
        };
        return jsx(GuildsBarFooterWrapperDefault, {
          children: items1.map((item) => {
            if ("unavailable-guilds" === item) {
              return pendingFolderNode(closure_1_1(17974), {}, item);
            } else if ("empty-nux" === item) {
              return pendingFolderNode(closure_1_1(17975), {}, item);
            } else if ("waterwheels" === item) {
              return pendingFolderNode(closure_1_1(17976), {}, item);
            } else if ("create-join-guild" === item) {
              return pendingFolderNode(closure_1_1(17977), {}, item);
            }
          })
        });
      };
      obj.getRecyclerKey = function getRecyclerKey(SECTION, section, item1) {
        if (section >= guildsNFolders.GUILDS) {
          const element = guildsNFolders[section - tmp3.GUILDS];
          if (null != element) {
            if (element.type !== stateFromStores1.ROOT) {
              if (element.type === stateFromStores1.FOLDER) {
                if (null == item1) {
                  const _HermesInternal2 = HermesInternal;
                  return "" + element.id;
                }
              }
              const _HermesInternal = HermesInternal;
              return "" + element.id;
            }
          }
        }
      };
      obj.renderAccessory = function renderAccessory(memo1) {
        return pendingFolderNode(closure_1_1(token[30]), { fastList: memo1 });
      };
      obj.getAnchorIdFromIndex = function getAnchorIdFromIndex(section, item) {
        if (null == stateFromStoresArray2.getState().dropSpecs) {
          if (null == stateFromStoresArray2.getState().dragSpecs) {
            if (guildsNFolders.MESSAGES === section) {
              let SEPARATOR = isScreenReaderEnabled.MESSAGES;
            } else if (guildsNFolders.FAVORITES === section) {
              SEPARATOR = isScreenReaderEnabled.FAVORITES;
            } else if (guildsNFolders.PENDING_JOIN_REQUESTS === section) {
              if (null == item) {
                SEPARATOR = isScreenReaderEnabled.PENDING_JOIN_REQUESTS;
              } else {
                let id1;
                if (pendingFolderNode != null) {
                  if (pendingFolderNode.children[item] != null) {
                    id1 = tmp26.id;
                  }
                }
                let combined;
                if (null != id1) {
                  const _HermesInternal5 = HermesInternal;
                  combined = "" + isScreenReaderEnabled.PENDING_JOIN_REQUESTS + ":" + id1;
                }
                SEPARATOR = combined;
              }
            } else if (guildsNFolders.LURKING_GUILDS === section) {
              if (null == item) {
                let LURKING_GUILDS = isScreenReaderEnabled.LURKING_GUILDS;
              } else {
                const _HermesInternal4 = HermesInternal;
                LURKING_GUILDS = "" + isScreenReaderEnabled.LURKING_GUILDS + ":" + tmp2[item];
              }
              SEPARATOR = LURKING_GUILDS;
            } else if (guildsNFolders.GUEST_GUILDS === section) {
              if (null == item) {
                let GUEST_GUILDS = isScreenReaderEnabled.GUEST_GUILDS;
              } else {
                const _HermesInternal3 = HermesInternal;
                GUEST_GUILDS = "" + isScreenReaderEnabled.GUEST_GUILDS + ":" + tmp3[item];
              }
              SEPARATOR = GUEST_GUILDS;
            } else if (guildsNFolders.UNREAD_PRIVATE_CHANNELS === section) {
              if (null == item) {
                let UNREAD_PRIVATE_CHANNELS = isScreenReaderEnabled.UNREAD_PRIVATE_CHANNELS;
              } else {
                const _HermesInternal2 = HermesInternal;
                UNREAD_PRIVATE_CHANNELS = "" + isScreenReaderEnabled.UNREAD_PRIVATE_CHANNELS + ":" + tmp4[item];
              }
              SEPARATOR = UNREAD_PRIVATE_CHANNELS;
            } else if (guildsNFolders.CHECKPOINT_INTRO === section) {
              SEPARATOR = isScreenReaderEnabled.CHECKPOINT_INTRO;
            } else if (guildsNFolders.SEPARATOR === section) {
              SEPARATOR = isScreenReaderEnabled.SEPARATOR;
            } else {
              const GUILDS = guildsNFolders.GUILDS;
              const diff = section - guildsNFolders.GUILDS;
              if (null == guildsNFolders[diff]) {
                let tmp9;
                if (diff >= guildsNFolders.length) {
                  if (null != item) {
                    let id2;
                    if (tmp6[item] != null) {
                      id2 = tmp10.id;
                    }
                    tmp9 = id2;
                  }
                }
                let id = tmp9;
              } else if (null == item) {
                id = tmp35.id;
              } else if (tmp35.children[item] != null) {
                id = tmp8.id;
              }
              if (null != id) {
                const _HermesInternal = HermesInternal;
                SEPARATOR = "" + isScreenReaderEnabled.GUILDS + ":" + id;
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
            const obj3 = { section: constants.MESSAGES };
            return obj3;
          } else if (constants2.FAVORITES === id) {
            const obj6 = { section: constants.FAVORITES };
            return obj6;
          } else if (constants2.PENDING_JOIN_REQUESTS === id) {
            const obj7 = { section: constants.PENDING_JOIN_REQUESTS };
            return obj7;
          } else if (constants2.LURKING_GUILDS === id) {
            const obj9 = { section: constants.LURKING_GUILDS };
            return obj9;
          } else if (constants2.GUEST_GUILDS === id) {
            const obj11 = { section: constants.GUEST_GUILDS };
            return obj11;
          } else if (constants2.UNREAD_PRIVATE_CHANNELS === id) {
            const obj13 = { section: constants.UNREAD_PRIVATE_CHANNELS };
            return obj13;
          } else if (constants2.CHECKPOINT_INTRO === id) {
            const obj14 = { section: constants.CHECKPOINT_INTRO };
            return obj14;
          } else if (constants2.SEPARATOR === id) {
            const obj15 = { section: constants.SEPARATOR };
            return obj15;
          } else if (id.startsWith(constants2.LURKING_GUILDS)) {
            let num12 = 0;
            for (const item10164 of lurkingGuildsIds) {
              if (closure_1_22(constants2.LURKING_GUILDS, id, item10164)) {
                let obj16 = { section: constants.LURKING_GUILDS, item: num12 };
                obj12.return();
                return obj16;
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
                  if (closure_1_22(constants2.PENDING_JOIN_REQUESTS, id, item10025.id)) {
                    let obj = { section: constants.PENDING_JOIN_REQUESTS, item: null };
                    obj.item = num;
                    obj22.return();
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
                  let obj17 = { section: constants.GUEST_GUILDS, item: num10 };
                  obj10.return();
                  return obj17;
                } else {
                  num10 = num10 + 1;
                  continue;
                }
              }
            } else {
              if (id.startsWith(constants2.UNREAD_PRIVATE_CHANNELS)) {
                let num4 = 0;
                for (const item10057 of privateChannelIds) {
                  if (closure_1_22(constants2.UNREAD_PRIVATE_CHANNELS, id, item10057)) {
                    let obj18 = { section: constants.UNREAD_PRIVATE_CHANNELS, item: num4 };
                    obj2.return();
                    return obj18;
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
                  if (closure_1_22(constants2.GUILDS, id, item10081.id)) {
                    let obj19 = { section: null };
                    obj19.section = num6 + constants.GUILDS;
                    obj4.return();
                    return obj19;
                  } else {
                    let children = item10081.children;
                    for (const item10095 of children) {
                      if (closure_1_22(constants2.GUILDS, id, item10095.id)) {
                        let obj20 = { section: null, item: null };
                        obj20.section = num6 + constants.GUILDS;
                        obj20.item = num7;
                        obj5.return();
                        obj4.return();
                        return obj20;
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
                    let obj21 = { section: null, item: null };
                    obj21.section = num6 + constants.GUILDS;
                    obj21.item = num8;
                    obj8.return();
                    return obj21;
                  } else {
                    num8 = num8 + 1;
                    continue;
                  }
                }
              }
            }
          }
        })({ id, lurkingGuildsIds, guestGuildIds, privateChannelIds, guildsNFolders, pendingFolderNode, geoRestrictedGuilds });
      };
      return obj;
    }, items10)
  };
};