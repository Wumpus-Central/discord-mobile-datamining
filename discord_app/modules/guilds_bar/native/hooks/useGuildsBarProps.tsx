// discord_app/modules/guilds_bar/native/hooks/useGuildsBarProps.tsx
import useWindowDimensions from "../../../screen/useWindowDimensions.native.tsx";
import GuildsBarFooterWrapperDefault from "../GuildsBarFooterWrapper.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../../../gateway/GatewayConnectionStore.tsx";
import LurkingStore from "../../../lurker_mode/LurkingStore.tsx";
import MessageRequestStore from "../../../message_request/MessageRequestStore.tsx";
import SpamMessageRequestStore from "../../../message_request/SpamMessageRequestStore.tsx";
import GeoRestrictedGuildStore from "../../../../stores/GeoRestrictedGuildStore.tsx";
import GuildAvailabilityStore from "../../../../stores/GuildAvailabilityStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PrivateChannelReadStateStore from "../../../../stores/PrivateChannelReadStateStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import GuildsBarDnDStore from "../GuildsBarDnDStore.tsx";

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
const GuildsNodeType = fn(6907).GuildsNodeType;
const GuildsBarConstants = fn(18598);
({ FastListRenderSections: closure_17, useGuildWrapperSize: closure_18 } = GuildsBarConstants);
const jsx = fn(21).jsx;
let closure_21 = {
  MESSAGES: "section-messages",
  FAVORITES: "section-favorites",
  PENDING_JOIN_REQUESTS: "section-pending-join-requests",
  LURKING_GUILDS: "section-lurking-guilds",
  GUEST_GUILDS: "section-guest-guilds",
  UNREAD_PRIVATE_CHANNELS: "section-private-channels",
  SEPARATOR: "section-separator",
  GUILDS: "section-guilds",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

export default function useGuildsBarProps(arg0) {
  _require = arg0;
  const tmp = pendingFolderNode();
  importDefault = tmp;
  token = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let obj = require("useToken");
  const token1 = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_PADDING);
  let rect = require("useSafeAreaInsets")();
  const top = rect.top;
  const bottom = rect.bottom;
  let obj2 = require("useToken");
  const mobileQuestDockHeight = require("QuestHooks").useMobileQuestDockHeight();
  let obj3 = require("QuestHooks");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  let obj4 = require("useYouBarTotalHeight");
  const youBarTotalHeight1 = require("useYouBarTotalHeight").useYouBarTotalHeight(4);
  items = [mobileQuestDockHeight, top, youBarTotalHeight];
  const effect = token1.useEffect(() => {
    const listInsets = GuildsBarDnDStore.getState().listInsets;
    const result = listInsets.set({ start: top, end: mobileQuestDockHeight + youBarTotalHeight });
  }, items);
  let obj5 = require("useYouBarTotalHeight");
  const waterwheelsDiscoverEnabled = require("WaterwheelsDiscoverExperiment").useWaterwheelsDiscoverEnabled(
    "guilds_bar",
  );
  let num = 0;
  if (require("useIsFavoritesGuildVisible")()) {
    num = 1;
  }
  let obj7 = require("WaterwheelsDiscoverExperiment");
  let items1 = [stateFromStores, mobileQuestDockHeight, youBarTotalHeight];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const unreadPrivateChannelIds = stateFromStores.getUnreadPrivateChannelIds();
    items = [mobileQuestDockHeight, youBarTotalHeight];
    return ref(token[38]).filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
  }, []);
  const tmp2Result = require("initialize");
  const items2 = [top];
  stateFromStores = require("initialize").useStateFromStores(items2, () => top.isConnected());
  const tmp2Result8 = require("initialize");
  const items3 = [youBarTotalHeight1];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items3, () =>
    youBarTotalHeight1.getGeoRestrictedGuilds(),
  );
  const tmp2Result9 = require("initialize");
  const items4 = [bottom];
  const stateFromStores1 = require("initialize").useStateFromStores(items4, () => bottom.lurkingGuildIds());
  const tmp2Result10 = require("initialize");
  const items5 = [stateFromStoresArray, num];
  const stateFromStoresArray2 = require("initialize").useStateFromStoresArray(items5, () => {
    const guildIds = stateFromStoresArray.getGuildIds();
    return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
  });
  const tmp2Result11 = require("initialize");
  const items6 = [stateFromStores1];
  const stateFromStores2 = require("initialize").useStateFromStores(
    items6,
    () => ({
      guildsNFolders: stateFromStores1.getFastListGuildFolders(),
      version: stateFromStores1.getGuildsTree().version,
    }),
    [],
    tmp4(tmp3[39]),
  );
  const guildsNFolders = stateFromStores2.guildsNFolders;
  const tmp18 = require("useGuildsBarCreatePendingFolderNode")();
  const expanded = tmp18.expanded;
  pendingFolderNode = tmp18.pendingFolderNode;
  const tmp2Result12 = require("initialize");
  const items7 = [waterwheelsDiscoverEnabled];
  const stateFromStores3 = require("initialize").useStateFromStores(
    items7,
    () => waterwheelsDiscoverEnabled.totalUnavailableGuilds,
  );
  const tmp2Result13 = require("initialize");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const items8 = [
    isScreenReaderEnabled,
    token,
    youBarTotalHeight,
    bottom,
    top,
    mobileQuestDockHeight,
    youBarTotalHeight1,
  ];
  const memo = obj6.useMemo(() => {
    const obj = {
      showsVerticalScrollIndicator: !isScreenReaderEnabled,
      scrollIndicatorInsets: null,
      insetStart: null,
      insetEnd: null,
      chunkBase: null,
    };
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
  const items9 = [, ,];
  ({ insetStart: arr10[0], insetEnd: arr10[1] } = memo);
  items9[2] = arg0;
  const callback = obj6.useCallback((arg0, arg1) => {
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
  const memo1 = obj6.useMemo(() => {
    const guildId = stateFromStoresArray1.getGuildId();
    let tmp2;
    if (null != guildId) {
      tmp2 = isScreenReaderEnabled(guildId);
    }
    if (null != tmp2) {
      const obj = { initialScrollItem: null, initialScrollSection: null };
      ({ item: obj.initialScrollItem, section: obj.initialScrollSection } = tmp2);
      return obj;
    }
  }, []);
  const items10 = [
    num,
    pendingFolderNode,
    stateFromStores1,
    stateFromStoresArray2,
    stateFromStoresArray,
    stateFromStoresArray1,
    stateFromStores3,
    stateFromStores,
    guildsNFolders,
    memo1,
    stateFromStores2.version,
    expanded,
    token,
    tmp,
    waterwheelsDiscoverEnabled,
    token1,
  ];
  const tmp2Result14 = require("useIsScreenReaderEnabled");
  return {
    listProps: memo,
    listDataProps: token1.useMemo(() => {
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
      items[6] = 1;
      for (const item10028 of guildsNFolders) {
        let element = item10028;
        if (item10028.type === stateFromStoresArray2.GUILD) {
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
        if (arg0 !== expanded.PENDING_JOIN_REQUESTS) {
          num = 0;
          if (arg0 >= expanded.GUILDS) {
            let num2 = 0;
            if (null != tmp[arg0 - expanded.GUILDS]) {
              num2 = 0;
              if (tmp6.type === stateFromStoresArray2.FOLDER) {
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
        if (expanded.MESSAGES !== arg0) {
          num = closure_1_1;
          if (expanded.FAVORITES !== arg0) {
            num = closure_1_1;
            if (expanded.LURKING_GUILDS !== arg0) {
              num = closure_1_1;
              if (expanded.GUEST_GUILDS !== arg0) {
                let num6 = arg1;
                if (expanded.UNREAD_PRIVATE_CHANNELS === arg0) {
                  if (num6 == null) {
                    num6 = -1;
                  }
                  let num7 = 0;
                  if (null != tmp2[num6]) {
                    num7 = closure_1_1;
                  }
                  num = num7;
                } else if (expanded.SEPARATOR === arg0) {
                  num = 1 + 2 * tmp5;
                } else if (expanded.PENDING_JOIN_REQUESTS === arg0) {
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
                    const diff = arg0 - expanded.GUILDS;
                    if (guildsNFolders.length < diff) {
                      const element = guildsNFolders[diff];
                      let num2 = 0;
                      if (null != element) {
                        num2 = 0;
                        if (element.type !== stateFromStoresArray2.ROOT) {
                          if (element.type !== stateFromStoresArray2.GUILD) {
                            if (element.type !== stateFromStoresArray2.FOLDER) {
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
        return num;
      };
      obj.footerSize = function footerSize() {
        const result = items1.length * closure_1;
        const sum = 1 + 2 * token + token1;
        let sum1 = result;
        if (items1.includes("waterwheels")) {
          sum1 = result + sum;
        }
        return sum1 + 8;
      };
      obj.renderSection = function renderSection(arg0) {
        if (arg0 >= expanded.GUILDS) {
          let tmp5 = null;
          if (tmp[arg0 - expanded.GUILDS].type === stateFromStoresArray2.FOLDER) {
            ({
              id: obj2.id,
              expanded: obj2.expanded,
              name: obj2.name,
              color: obj2.color,
              children: obj2.childNodes,
            } = tmp9);
            tmp5 = stateFromStores3(closure_1(token[15]), {
              id: null,
              expanded: null,
              name: null,
              color: null,
              childNodes: null,
            });
            const obj3 = { id: null, expanded: null, name: null, color: null, childNodes: null };
          }
        } else {
          tmp5 = null;
          if (arg0 === expanded.PENDING_JOIN_REQUESTS) {
            tmp5 = null;
            if (null != pendingFolderNode) {
              const obj = { id: null, expanded: null, childNodes: null };
              ({ id: obj.id, expanded: obj.expanded, children: obj.childNodes } = pendingFolderNode);
              tmp5 = stateFromStores3(closure_1(token[16]), obj);
            }
          }
        }
        return tmp5;
      };
      obj.renderItem = function renderItem(arg0, arg1) {
        if (expanded.MESSAGES === arg0) {
          let tmp8 = stateFromStores3(closure_1(token[17]), {});
        } else if (expanded.FAVORITES === arg0) {
          tmp8 = stateFromStores3(closure_1(token[18]), {});
        } else if (expanded.LURKING_GUILDS === arg0) {
          let tmp40 = null;
          if (null != tmp2[arg1]) {
            const obj2 = { guildId: tmp39 };
            tmp40 = stateFromStores3(closure_1(token[19]), obj2);
          }
          tmp8 = tmp40;
        } else if (expanded.GUEST_GUILDS === arg0) {
          let tmp35 = null;
          if (null != tmp3[arg1]) {
            const obj3 = { guildId: tmp34 };
            tmp35 = stateFromStores3(closure_1(token[19]), obj3);
          }
          tmp8 = tmp35;
        } else if (expanded.UNREAD_PRIVATE_CHANNELS === arg0) {
          let tmp30 = null;
          if (null != tmp[arg1]) {
            const obj4 = { channelId: tmp29 };
            tmp30 = stateFromStores3(closure_1(token[20]), obj4);
          }
          tmp8 = tmp30;
        } else if (expanded.SEPARATOR === arg0) {
          tmp8 = stateFromStores3(closure_1(token[21]), {});
        } else if (expanded.PENDING_JOIN_REQUESTS === arg0) {
          tmp8 = null;
          if (null != pendingFolderNode) {
            let tmp21 = null;
            if (null != pendingFolderNode.children[arg1]) {
              tmp21 = null;
              if (tmp20.type === stateFromStoresArray2.GUILD) {
                const obj5 = { guildId: tmp20.id };
                tmp21 = stateFromStores3(closure_1(token[22]), obj5);
              }
            }
            tmp8 = tmp21;
          }
        } else {
          const diff = arg0 - expanded.GUILDS;
          if (diff >= guildsNFolders.length) {
            let tmp15 = null;
            if (null != tmp4[arg1]) {
              const obj6 = { restrictedGuild: tmp14 };
              tmp15 = stateFromStores3(closure_1(token[23]), obj6);
            }
            tmp8 = tmp15;
          } else {
            const element = guildsNFolders[diff];
            tmp8 = null;
            if (null != element) {
              tmp8 = null;
              if (element.type !== stateFromStoresArray2.ROOT) {
                if (element.type !== stateFromStoresArray2.GUILD) {
                  let tmp9 = element;
                  if (element.type === stateFromStoresArray2.FOLDER) {
                    tmp9 = element.children[arg1];
                  }
                  let tmp10 = null;
                  if (null != tmp9) {
                    tmp10 = null;
                    if (tmp9.type === stateFromStoresArray2.GUILD) {
                      const obj = { guildId: tmp9.id };
                      tmp10 = stateFromStores3(closure_1(token[19]), obj);
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
              return closure_1_19(closure_1_1(18662), {}, item);
            } else if ("empty-nux" === item) {
              return closure_1_19(closure_1_1(18663), {}, item);
            } else if ("waterwheels" === item) {
              return closure_1_19(closure_1_1(18664), {}, item);
            } else if ("create-join-guild" === item) {
              return closure_1_19(closure_1_1(18679), {}, item);
            }
          }),
        };
        return jsx(GuildsBarFooterWrapperDefault, {
          children: items1.map((item) => {
            if ("unavailable-guilds" === item) {
              return closure_1_19(closure_1_1(18662), {}, item);
            } else if ("empty-nux" === item) {
              return closure_1_19(closure_1_1(18663), {}, item);
            } else if ("waterwheels" === item) {
              return closure_1_19(closure_1_1(18664), {}, item);
            } else if ("create-join-guild" === item) {
              return closure_1_19(closure_1_1(18679), {}, item);
            }
          }),
        });
      };
      obj.getRecyclerKey = function getRecyclerKey(SECTION, section, item1) {
        if (section >= expanded.GUILDS) {
          const element = guildsNFolders[section - tmp3.GUILDS];
          if (null != element) {
            if (element.type !== stateFromStoresArray2.ROOT) {
              if (element.type === stateFromStoresArray2.FOLDER) {
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
        return stateFromStores3(closure_1_1(token[29]), { fastList: memo1 });
      };
      obj.getAnchorIdFromIndex = function getAnchorIdFromIndex(section, item) {
        if (null == guildsNFolders.getState().dropSpecs) {
          if (null == guildsNFolders.getState().dragSpecs) {
            if (expanded.MESSAGES === section) {
              let SEPARATOR = memo.MESSAGES;
            } else if (expanded.FAVORITES === section) {
              SEPARATOR = memo.FAVORITES;
            } else if (expanded.PENDING_JOIN_REQUESTS === section) {
              if (null == item) {
                SEPARATOR = memo.PENDING_JOIN_REQUESTS;
              } else {
                let id1;
                if (pendingFolderNode != null) {
                  if (pendingFolderNode.children[item] != null) {
                    id1 = tmp25.id;
                  }
                }
                let combined;
                if (null != id1) {
                  const _HermesInternal5 = HermesInternal;
                  combined = "" + memo.PENDING_JOIN_REQUESTS + ":" + id1;
                }
                SEPARATOR = combined;
              }
            } else if (expanded.LURKING_GUILDS === section) {
              if (null == item) {
                let LURKING_GUILDS = memo.LURKING_GUILDS;
              } else {
                const _HermesInternal4 = HermesInternal;
                LURKING_GUILDS = "" + memo.LURKING_GUILDS + ":" + tmp2[item];
              }
              SEPARATOR = LURKING_GUILDS;
            } else if (expanded.GUEST_GUILDS === section) {
              if (null == item) {
                let GUEST_GUILDS = memo.GUEST_GUILDS;
              } else {
                const _HermesInternal3 = HermesInternal;
                GUEST_GUILDS = "" + memo.GUEST_GUILDS + ":" + tmp3[item];
              }
              SEPARATOR = GUEST_GUILDS;
            } else if (expanded.UNREAD_PRIVATE_CHANNELS === section) {
              if (null == item) {
                let UNREAD_PRIVATE_CHANNELS = memo.UNREAD_PRIVATE_CHANNELS;
              } else {
                const _HermesInternal2 = HermesInternal;
                UNREAD_PRIVATE_CHANNELS = "" + memo.UNREAD_PRIVATE_CHANNELS + ":" + tmp4[item];
              }
              SEPARATOR = UNREAD_PRIVATE_CHANNELS;
            } else if (expanded.SEPARATOR === section) {
              SEPARATOR = memo.SEPARATOR;
            } else {
              const GUILDS = expanded.GUILDS;
              const diff = section - expanded.GUILDS;
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
                id = tmp34.id;
              } else if (tmp34.children[item] != null) {
                id = tmp8.id;
              }
              if (null != id) {
                const _HermesInternal = HermesInternal;
                SEPARATOR = "" + memo.GUILDS + ":" + id;
              }
            }
            return SEPARATOR;
          }
        }
      };
      obj.getAnchorIndexFromId = function getAnchorIndexFromId(id) {
        return (function getAnchorIndexFromId(arg0) {
          ({
            id,
            lurkingGuildsIds,
            guestGuildIds,
            privateChannelIds,
            guildsNFolders,
            pendingFolderNode,
            geoRestrictedGuilds,
          } = arg0);
          if (constants2.MESSAGES === id) {
            const obj2 = { section: constants.MESSAGES };
            return obj2;
          } else if (constants2.FAVORITES === id) {
            const obj4 = { section: constants.FAVORITES };
            return obj4;
          } else if (constants2.PENDING_JOIN_REQUESTS === id) {
            const obj7 = { section: constants.PENDING_JOIN_REQUESTS };
            return obj7;
          } else if (constants2.LURKING_GUILDS === id) {
            const obj8 = { section: constants.LURKING_GUILDS };
            return obj8;
          } else if (constants2.GUEST_GUILDS === id) {
            const obj10 = { section: constants.GUEST_GUILDS };
            return obj10;
          } else if (constants2.UNREAD_PRIVATE_CHANNELS === id) {
            const obj12 = { section: constants.UNREAD_PRIVATE_CHANNELS };
            return obj12;
          } else if (constants2.SEPARATOR === id) {
            const obj14 = { section: constants.SEPARATOR };
            return obj14;
          } else if (id.startsWith(constants2.LURKING_GUILDS)) {
            let num13 = 0;
            for (const item10168 of lurkingGuildsIds) {
              if (closure_1_22(constants2.LURKING_GUILDS, id, item10168)) {
                let obj15 = { section: constants.LURKING_GUILDS, item: num13 };
                obj13.return();
                return obj15;
              } else {
                num13 = num13 + 1;
                continue;
              }
            }
          } else {
            if (id.startsWith(constants2.PENDING_JOIN_REQUESTS)) {
              if (null != pendingFolderNode) {
                let num2 = 0;
                const children = pendingFolderNode.children;
                for (const item10030 of children) {
                  if (closure_1_22(constants2.PENDING_JOIN_REQUESTS, id, item10030.id)) {
                    let obj16 = { section: constants.PENDING_JOIN_REQUESTS, item: null };
                    obj16.item = num2;
                    obj.return();
                    return obj16;
                  } else {
                    num2 = num2 + 1;
                    continue;
                  }
                }
              }
            }
            if (id.startsWith(constants2.GUEST_GUILDS)) {
              let num11 = 0;
              for (const item10150 of guestGuildIds) {
                if (closure_1_22(constants2.GUEST_GUILDS, id, item10150)) {
                  let obj17 = { section: constants.GUEST_GUILDS, item: num11 };
                  obj11.return();
                  return obj17;
                } else {
                  num11 = num11 + 1;
                  continue;
                }
              }
            } else {
              if (id.startsWith(constants2.UNREAD_PRIVATE_CHANNELS)) {
                let num5 = 0;
                for (const item10061 of privateChannelIds) {
                  if (closure_1_22(constants2.UNREAD_PRIVATE_CHANNELS, id, item10061)) {
                    let obj18 = { section: constants.UNREAD_PRIVATE_CHANNELS, item: num5 };
                    obj3.return();
                    return obj18;
                  } else {
                    num5 = num5 + 1;
                    continue;
                  }
                }
              }
              if (id.startsWith(constants2.GUILDS)) {
                let num7 = 0;
                let num8 = 0;
                for (const item10085 of guildsNFolders) {
                  if (closure_1_22(constants2.GUILDS, id, item10085.id)) {
                    let obj19 = { section: null };
                    obj19.section = num7 + constants.GUILDS;
                    obj5.return();
                    return obj19;
                  } else {
                    let children2 = item10085.children;
                    for (const item10099 of children2) {
                      if (closure_1_22(constants2.GUILDS, id, item10099.id)) {
                        let obj20 = { section: null, item: null };
                        obj20.section = num7 + constants.GUILDS;
                        obj20.item = num8;
                        obj6.return();
                        obj5.return();
                        return obj20;
                      } else {
                        num8 = num8 + 1;
                        continue;
                      }
                    }
                    num7 = num7 + 1;
                    num8 = 0;
                    continue;
                  }
                }
                let num9 = 0;
                for (const item10129 of geoRestrictedGuilds) {
                  if (closure_1_22(constants2.GUILDS, id, item10129.id)) {
                    let obj21 = { section: null, item: null };
                    obj21.section = num7 + constants.GUILDS;
                    obj21.item = num9;
                    obj9.return();
                    return obj21;
                  } else {
                    num9 = num9 + 1;
                    continue;
                  }
                }
              }
            }
          }
        })({
          id,
          lurkingGuildsIds,
          guestGuildIds,
          privateChannelIds,
          guildsNFolders,
          pendingFolderNode,
          geoRestrictedGuilds,
        });
      };
      return obj;
    }, items10),
  };
}
