// discord_app/modules/guilds_bar/native/hooks/useGuildsBarProps.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import useWindowDimensions from "../../../screen/useWindowDimensions.native.tsx";
import SortedGuildStore2 from "../../../../stores/SortedGuildStore.tsx";
import GuildsBarGuildFolderDefault from "../GuildsBarGuildFolder.tsx";
import GuildsBarPendingGuildFolderDefault from "../GuildsBarPendingGuildFolder.tsx";
import GuildsBarMessagesDefault from "../GuildsBarMessages.tsx";
import GuildsBarFavoritesDefault from "../GuildsBarFavorites.tsx";
import GuildsBarGuildDefault from "../GuildsBarGuild.tsx";
import GuildsBarDirectMessageDefault from "../GuildsBarDirectMessage.tsx";
import GuildsBarSeparatorDefault from "../GuildsBarSeparator.tsx";
import GuildsBarPendingGuildDefault from "../GuildsBarPendingGuild.tsx";
import GuildsBarGeoRestrictedGuildDefault from "../GuildsBarGeoRestrictedGuild.tsx";
import GuildsBarFooterWrapperDefault from "../GuildsBarFooterWrapper.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GatewayConnectionStore from "../../../gateway/GatewayConnectionStore.tsx";
import LurkingStore from "../../../lurker_mode/LurkingStore.tsx";
import MessageRequestStore from "../../../message_request/MessageRequestStore.tsx";
import SpamMessageRequestStore from "../../../message_request/SpamMessageRequestStore.tsx";
import GeoRestrictedGuildStore from "../../../../stores/GeoRestrictedGuildStore.tsx";
import GuildAvailabilityStore from "../../../../stores/GuildAvailabilityStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PrivateChannelReadStateStore_mod from "../../../../stores/PrivateChannelReadStateStore.tsx";
import SelectedGuildStore_mod from "../../../../stores/SelectedGuildStore.tsx";
import GuildsBarDnDStore from "../GuildsBarDnDStore.tsx";
import GuildsBarConstants from "../GuildsBarConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const SortedGuildStore = SortedGuildStore2;
let _require, importDefault;

let closure_17;
let closure_18;
const f123546 = (item) => {
  if ("unavailable-guilds" === item) {
    return closure_1_19(itemSize(itemMargin[25]), {}, item);
  } else if ("empty-nux" === item) {
    return closure_1_19(itemSize(itemMargin[26]), {}, item);
  } else if ("create-join-guild" === item) {
    return closure_1_19(itemSize(itemMargin[27]), {}, item);
  }
};
function getItemSize(arg0) {
  let guildsNFolders;
  let itemSize;
  let pendingFolderNode;
  let row;
  let section;
  ({ section, row, guildsNFolders, pendingFolderNode, itemSize } = arg0);
  if (constants.MESSAGES !== section) {
    if (constants.FAVORITES !== section) {
      if (constants.LURKING_GUILDS !== section) {
        if (constants.GUEST_GUILDS !== section) {
          if (constants.UNREAD_PRIVATE_CHANNELS === section) {
            if (row == null) {
              row = -1;
            }
            let num7 = 0;
            if (null != tmp[row]) {
              num7 = itemSize;
            }
            return num7;
          } else if (constants.SEPARATOR === section) {
            return 1 + 2 * tmp3;
          } else if (constants.PENDING_JOIN_REQUESTS === section) {
            let num4 = 0;
            if (null != row) {
              num4 = 0;
              if (null != pendingFolderNode) {
                num4 = 0;
                if (pendingFolderNode.expanded) {
                  num4 = 0;
                  if (null != pendingFolderNode.children[row]) {
                    num4 = itemSize;
                  }
                }
              }
            }
            return num4;
          } else if (null == row) {
            return 0;
          } else {
            const diff = section - constants.GUILDS;
            if (guildsNFolders.length >= diff) {
              if (null != tmp2[row]) {
                return itemSize;
              }
            }
            const element = guildsNFolders[diff];
            let num2 = 0;
            if (null != element) {
              num2 = 0;
              if (element.type !== GuildsNodeType.ROOT) {
                if (element.type !== GuildsNodeType.GUILD) {
                  if (element.type !== GuildsNodeType.FOLDER) {
                    num2 = itemSize;
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
            return num2;
          }
        }
      }
    }
  }
  return itemSize;
}
function renderItemJSX(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  if (constants.MESSAGES === arg0) {
    return jsx(GuildsBarMessagesDefault, {});
  } else if (constants.FAVORITES === arg0) {
    return jsx(GuildsBarFavoritesDefault, {});
  } else if (constants.LURKING_GUILDS === arg0) {
    let tmp40 = null;
    if (null != arg4[arg1]) {
      tmp40 = jsx(GuildsBarGuildDefault, { guildId: arg4[arg1] });
    }
    return tmp40;
  } else if (constants.GUEST_GUILDS === arg0) {
    let tmp34 = null;
    if (null != arg5[arg1]) {
      tmp34 = jsx(GuildsBarGuildDefault, { guildId: arg5[arg1] });
    }
    return tmp34;
  } else if (constants.UNREAD_PRIVATE_CHANNELS === arg0) {
    let tmp28 = null;
    if (null != arg3[arg1]) {
      tmp28 = jsx(GuildsBarDirectMessageDefault, { channelId: arg3[arg1] });
    }
    return tmp28;
  } else if (constants.SEPARATOR === arg0) {
    return jsx(GuildsBarSeparatorDefault, {});
  } else if (constants.PENDING_JOIN_REQUESTS === arg0) {
    if (null == arg7) {
      return null;
    } else {
      let tmp18 = null;
      if (null != arg7.children[arg1]) {
        tmp18 = null;
        if (arg7.children[arg1].type === GuildsNodeType.GUILD) {
          tmp18 = jsx(GuildsBarPendingGuildDefault, { guildId: arg7.children[arg1].id });
        }
      }
      return tmp18;
    }
  } else {
    const diff = arg0 - constants.GUILDS;
    if (diff >= arg2.length) {
      let tmp11 = null;
      if (null != arg6[arg1]) {
        tmp11 = jsx(GuildsBarGeoRestrictedGuildDefault, { restrictedGuild: arg6[arg1] });
      }
      return tmp11;
    } else {
      const element = arg2[diff];
      let tmp3 = null;
      if (null != element) {
        tmp3 = null;
        if (element.type !== GuildsNodeType.ROOT) {
          if (element.type !== GuildsNodeType.GUILD) {
            let tmp4 = element;
            if (element.type === GuildsNodeType.FOLDER) {
              tmp4 = element.children[arg1];
            }
            let tmp5 = null;
            if (null != tmp4) {
              tmp5 = null;
              if (tmp4.type === GuildsNodeType.GUILD) {
                tmp5 = jsx(GuildsBarGuildDefault, { guildId: tmp4.id });
              }
            }
            tmp3 = tmp5;
          } else {
            tmp3 = null;
          }
        }
      }
      return tmp3;
    }
  }
}
function findGuildSectionIndex(guildId) {
  const fastListGuildFolders = SortedGuildStore.getFastListGuildFolders();
  let num = -1;
  let num2 = 0;
  let flag = false;
  for (const item10016 of fastListGuildFolders) {
    let element = item10016;
    num = num + 1;
    num2 = 0;
    if (item10016.type === GuildsNodeType.GUILD) {
      if (element.id === guildId) {
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
          if (tmp11.id === guildId) {
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
    let tmp18 = flag;
    if (tmp18) {
      obj.return();
      break;
    }
    break;
  }
}
function getAnchorIdFromIndex(arg0) {
  let guildsNFolders;
  let item;
  let pendingFolderNode;
  let section;
  ({ section, item, guildsNFolders, pendingFolderNode } = arg0);
  if (constants.MESSAGES === section) {
    return constants2.MESSAGES;
  } else if (constants.FAVORITES === section) {
    return constants2.FAVORITES;
  } else if (constants.PENDING_JOIN_REQUESTS === section) {
    if (null == item) {
      return constants2.PENDING_JOIN_REQUESTS;
    } else {
      let id1;
      if (pendingFolderNode != null) {
        if (pendingFolderNode.children[item] != null) {
          id1 = tmp28.id;
        }
      }
      let combined;
      if (null != id1) {
        const _HermesInternal5 = HermesInternal;
        combined = "" + constants2.PENDING_JOIN_REQUESTS + ":" + id1;
      }
      return combined;
    }
  } else if (constants.LURKING_GUILDS === section) {
    let LURKING_GUILDS;
    if (null == item) {
      LURKING_GUILDS = constants2.LURKING_GUILDS;
    } else {
      const _HermesInternal4 = HermesInternal;
      LURKING_GUILDS = "" + constants2.LURKING_GUILDS + ":" + tmp[item];
    }
    return LURKING_GUILDS;
  } else if (constants.GUEST_GUILDS === section) {
    let GUEST_GUILDS;
    if (null == item) {
      GUEST_GUILDS = constants2.GUEST_GUILDS;
    } else {
      const _HermesInternal3 = HermesInternal;
      GUEST_GUILDS = "" + constants2.GUEST_GUILDS + ":" + tmp2[item];
    }
    return GUEST_GUILDS;
  } else if (constants.UNREAD_PRIVATE_CHANNELS === section) {
    let UNREAD_PRIVATE_CHANNELS;
    if (null == item) {
      UNREAD_PRIVATE_CHANNELS = constants2.UNREAD_PRIVATE_CHANNELS;
    } else {
      const _HermesInternal2 = HermesInternal;
      UNREAD_PRIVATE_CHANNELS = "" + constants2.UNREAD_PRIVATE_CHANNELS + ":" + tmp3[item];
    }
    return UNREAD_PRIVATE_CHANNELS;
  } else if (constants.SEPARATOR === section) {
    return constants2.SEPARATOR;
  } else {
    let id;
    const GUILDS = constants.GUILDS;
    const diff = section - constants.GUILDS;
    if (null == guildsNFolders[diff]) {
      let tmp7;
      if (diff >= guildsNFolders.length) {
        if (null != item) {
          let id2;
          if (tmp4[item] != null) {
            id2 = tmp8.id;
          }
          tmp7 = id2;
        }
      }
      id = tmp7;
    } else if (null == item) {
      id = tmp36.id;
    } else if (guildsNFolders[diff].children[item] != null) {
      id = tmp6.id;
    }
    let combined1;
    if (null != id) {
      const _HermesInternal = HermesInternal;
      combined1 = "" + constants2.GUILDS + ":" + id;
    }
    return combined1;
  }
}
function isAnchorIdEqual(GUILDS, id, id2) {
  let tmp = null != id2;
  if (tmp) {
    const _HermesInternal = HermesInternal;
    tmp = id === "" + GUILDS + ":" + id2;
  }
  return tmp;
}
function getAnchorIndexFromId(arg0) {
  let geoRestrictedGuilds;
  let guestGuildIds;
  let guildsNFolders;
  let id;
  let lurkingGuildsIds;
  let pendingFolderNode;
  let privateChannelIds;
  ({ id, lurkingGuildsIds, guestGuildIds, privateChannelIds, guildsNFolders, pendingFolderNode, geoRestrictedGuilds } =
    arg0);
  if (constants2.MESSAGES === id) {
    return { section: constants.MESSAGES };
  } else if (constants2.FAVORITES === id) {
    return { section: constants.FAVORITES };
  } else if (constants2.PENDING_JOIN_REQUESTS === id) {
    return { section: constants.PENDING_JOIN_REQUESTS };
  } else if (constants2.LURKING_GUILDS === id) {
    return { section: constants.LURKING_GUILDS };
  } else if (constants2.GUEST_GUILDS === id) {
    return { section: constants.GUEST_GUILDS };
  } else if (constants2.UNREAD_PRIVATE_CHANNELS === id) {
    return { section: constants.UNREAD_PRIVATE_CHANNELS };
  } else if (constants2.SEPARATOR === id) {
    return { section: constants.SEPARATOR };
  } else if (id.startsWith(constants2.LURKING_GUILDS)) {
    let num12 = 0;
    for (const item10164 of lurkingGuildsIds) {
      if (isAnchorIdEqual(constants2.LURKING_GUILDS, id, item10164)) {
        let obj15 = { section: constants.LURKING_GUILDS, item: num12 };
        obj12.return();
        return obj15;
      } else {
        num12 = num12 + 1;
        continue;
      }
    }
  } else {
    if (id.startsWith(constants2.PENDING_JOIN_REQUESTS)) {
      if (null != pendingFolderNode) {
        let num = 0;
        const children2 = pendingFolderNode.children;
        for (const item10025 of children2) {
          if (isAnchorIdEqual(constants2.PENDING_JOIN_REQUESTS, id, item10025.id)) {
            let obj = { section: constants.PENDING_JOIN_REQUESTS, item: num };
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
        if (isAnchorIdEqual(constants2.GUEST_GUILDS, id, item10146)) {
          let obj16 = { section: constants.GUEST_GUILDS, item: num10 };
          obj10.return();
          return obj16;
        } else {
          num10 = num10 + 1;
          continue;
        }
      }
    } else {
      if (id.startsWith(constants2.UNREAD_PRIVATE_CHANNELS)) {
        let num4 = 0;
        for (const item10057 of privateChannelIds) {
          if (isAnchorIdEqual(constants2.UNREAD_PRIVATE_CHANNELS, id, item10057)) {
            let obj17 = { section: constants.UNREAD_PRIVATE_CHANNELS, item: num4 };
            obj2.return();
            return obj17;
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
          if (isAnchorIdEqual(constants2.GUILDS, id, item10081.id)) {
            let obj18 = { section: num6 + constants.GUILDS };
            obj4.return();
            return obj18;
          } else {
            let children = item10081.children;
            for (const item10095 of children) {
              if (isAnchorIdEqual(constants2.GUILDS, id, item10095.id)) {
                let obj19 = { section: num6 + constants.GUILDS, item: num7 };
                obj5.return();
                obj4.return();
                return obj19;
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
          if (isAnchorIdEqual(constants2.GUILDS, id, item10125.id)) {
            let obj20 = { section: num6 + constants.GUILDS, item: num8 };
            obj8.return();
            return obj20;
          } else {
            num8 = num8 + 1;
            continue;
          }
        }
      }
    }
  }
}
let PrivateChannelReadStateStore = PrivateChannelReadStateStore_mod;
let SelectedGuildStore = SelectedGuildStore_mod;
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
({ FastListRenderSections: closure_17, useGuildWrapperSize: closure_18 } = GuildsBarConstants);
const jsx = Fragment.jsx;
const constants2 = {
  MESSAGES: "section-messages",
  FAVORITES: "section-favorites",
  PENDING_JOIN_REQUESTS: "section-pending-join-requests",
  LURKING_GUILDS: "section-lurking-guilds",
  GUEST_GUILDS: "section-guest-guilds",
  UNREAD_PRIVATE_CHANNELS: "section-private-channels",
  SEPARATOR: "section-separator",
  GUILDS: "section-guilds",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildsNFolders;
      let itemSize;
      let pendingFolderNode;
      let ref;
      let stateFromStores1;
      let stateFromStoresArray;
      let stateFromStoresArray1;
      let token;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(62);
      const tmp4 = closure_18();
      importDefault = tmp4;
      let obj2 = require("useToken");
      let tmp5 = importDefault;
      token = obj2.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
      const rect = require("useSafeAreaInsets")();
      const top = rect.top;
      const bottom = rect.bottom;
      const obj3 = require("QuestHooks");
      const mobileQuestDockHeight = obj3.useMobileQuestDockHeight();
      const obj4 = require("useYouBarTotalHeight");
      const youBarTotalHeight = obj4.useYouBarTotalHeight();
      require("useYouBarTotalHeight");
      if (cResult[0] === mobileQuestDockHeight) {
        if (cResult[1] === top) {
          let tmp11;
          let tmp12;
          let tmp18;
          let tmp17;
          let tmp16;
          let tmp23;
          let tmp22;
          let tmp27;
          let tmp26;
          let tmp31;
          let tmp30;
          let tmp35;
          let tmp34;
          let tmp39;
          let tmp38;
          let tmp37;
          let tmp48;
          let tmp47;
          let diff;
          if (cResult[2] === youBarTotalHeight) {
            tmp11 = cResult[3];
            tmp12 = cResult[4];
          }
          const effect = top.useEffect(tmp11, tmp12);
          let num = 0;
          let num2 = 0;
          if (tmp5(token[36])()) {
            num2 = 1;
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [PrivateChannelReadStateStore, stateFromStoresArray, stateFromStoresArray1];
            class C {
              constructor() {
                unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                const items = [stateFromStoresArray, stateFromStoresArray1];
                const obj = ref(token[37]);
                return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
              }
            }
            const items1 = [];
            cResult[5] = items;
            cResult[6] = C;
            cResult[7] = items1;
            tmp18 = items1;
            tmp17 = C;
            tmp16 = items;
          } else {
            tmp16 = cResult[5];
            tmp17 = cResult[6];
            tmp18 = cResult[7];
          }
          const tmpResult = tmp(token[38]);
          stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp16, tmp17, tmp18);
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [mobileQuestDockHeight];
            class V {
              constructor() {
                return mobileQuestDockHeight.isConnected();
              }
            }
            cResult[8] = items2;
            class C {
              constructor() {
                unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                const items = [stateFromStoresArray, stateFromStoresArray1];
                const obj = ref(token[37]);
                return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
              }
            }
            tmp23 = V;
            tmp22 = items2;
          } else {
            tmp22 = cResult[8];
            tmp23 = cResult[9];
          }
          const tmpResult8 = tmp(token[38]);
          const stateFromStores = tmpResult8.useStateFromStores(tmp22, tmp23);
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const items3 = [stateFromStores1];
            class V {
              constructor() {
                return mobileQuestDockHeight.isConnected();
              }
            }
            cResult[10] = items3;
            class C {
              constructor() {
                unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                const items = [stateFromStoresArray, stateFromStoresArray1];
                const obj = ref(token[37]);
                return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
              }
            }
            tmp27 = tmp29;
            tmp26 = items3;
          } else {
            tmp26 = cResult[10];
            tmp27 = cResult[11];
          }
          const tmpResult9 = tmp(token[38]);
          stateFromStoresArray1 = tmpResult9.useStateFromStoresArray(tmp26, tmp27);
          const _Symbol4 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const items4 = [youBarTotalHeight];
            class V {
              constructor() {
                return mobileQuestDockHeight.isConnected();
              }
            }
            cResult[12] = tmp33;
            class C {
              constructor() {
                unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                const items = [stateFromStoresArray, stateFromStoresArray1];
                const obj = ref(token[37]);
                return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
              }
            }
            tmp31 = items4;
            tmp30 = tmp33;
          } else {
            tmp30 = cResult[12];
            tmp31 = cResult[13];
          }
          const tmpResult10 = tmp(token[38]);
          stateFromStores1 = tmpResult10.useStateFromStores(tmp31, tmp30);
          const _Symbol5 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const items5 = [pendingFolderNode];
            class V {
              constructor() {
                return mobileQuestDockHeight.isConnected();
              }
            }
            items5[1] = guildsNFolders;
            class B {
              constructor() {
                guildIds = pendingFolderNode.getGuildIds();
                return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
              }
            }
            class C {
              constructor() {
                unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                const items = [stateFromStoresArray, stateFromStoresArray1];
                const obj = ref(token[37]);
                return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
              }
            }
            cResult[15] = B;
            tmp35 = B;
            tmp34 = items5;
          } else {
            tmp34 = cResult[14];
            tmp35 = cResult[15];
          }
          const tmpResult11 = tmp(token[38]);
          const stateFromStoresArray2 = tmpResult11.useStateFromStoresArray(tmp34, tmp35);
          const _Symbol6 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const items6 = [SortedGuildStore];
            class Y {
              constructor() {
                const obj = {
                  guildsNFolders: SortedGuildStore.getFastListGuildFolders(),
                  version: SortedGuildStore.getGuildsTree().version,
                };
                return obj;
              }
            }
            const items7 = [];
            class B {
              constructor() {
                guildIds = pendingFolderNode.getGuildIds();
                return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
              }
            }
            cResult[16] = items6;
            class C {
              constructor() {
                unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                const items = [stateFromStoresArray, stateFromStoresArray1];
                const obj = ref(token[37]);
                return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
              }
            }
            cResult[17] = Y;
            cResult[18] = items7;
            tmp39 = items7;
            tmp38 = Y;
            tmp37 = items6;
          } else {
            tmp37 = cResult[16];
            tmp38 = cResult[17];
            tmp39 = cResult[18];
          }
          const tmpResult12 = tmp(token[38]);
          const stateFromStores2 = tmpResult12.useStateFromStores(tmp37, tmp38, tmp39, tmp5(tmp2[39]));
          guildsNFolders = stateFromStores2.guildsNFolders;
          const version = stateFromStores2.version;
          const tmp46 = tmp5(token[40])();
          pendingFolderNode = tmp46.pendingFolderNode;
          const _Symbol7 = Symbol;
          const expanded = tmp46.expanded;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const items8 = [stateFromStoresArray2];
            class Y {
              constructor() {
                const obj = {
                  guildsNFolders: SortedGuildStore.getFastListGuildFolders(),
                  version: SortedGuildStore.getGuildsTree().version,
                };
                return obj;
              }
            }
            class B {
              constructor() {
                guildIds = pendingFolderNode.getGuildIds();
                return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
              }
            }
            class C {
              constructor() {
                unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                const items = [stateFromStoresArray, stateFromStoresArray1];
                const obj = ref(token[37]);
                return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
              }
            }
            tmp48 = tmp50;
            tmp47 = items8;
          } else {
            tmp47 = cResult[19];
            tmp48 = cResult[20];
          }
          const tmpResult13 = tmp(token[38]);
          const stateFromStores3 = tmpResult13.useStateFromStores(tmp47, tmp48);
          const tmpResult14 = tmp(token[41]);
          const tmp52 = !tmpResult14.useIsScreenReaderEnabled();
          let result = 3 * token;
          if (youBarTotalHeight > 0) {
            diff = youBarTotalHeight - 16;
          } else {
            diff = bottom + 3 * token;
          }
          if (cResult[21] === result) {
            let tmp55;
            if (cResult[22] === diff) {
              tmp55 = cResult[23];
            }
            const sum = mobileQuestDockHeight + 2 * token + tmp10;
            class Y {
              constructor() {
                const obj = {
                  guildsNFolders: SortedGuildStore.getFastListGuildFolders(),
                  version: SortedGuildStore.getGuildsTree().version,
                };
                return obj;
              }
            }
            class B {
              constructor() {
                guildIds = pendingFolderNode.getGuildIds();
                return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
              }
            }
            if (cResult[25] === top) {
              if (cResult[26] === tmp52) {
                if (cResult[27] === tmp55) {
                  let tmp59;
                  if (cResult[28] === sum) {
                    tmp59 = cResult[29];
                  }
                  PrivateChannelReadStateStore = tmp59;
                  if (cResult[30] === arg0) {
                    if (cResult[31] === tmp59.insetEnd) {
                      let tmp61;
                      if (cResult[32] === tmp59.insetStart) {
                        tmp61 = cResult[33];
                      }
                      tmp5(token[43])(tmp61);
                      const _Symbol8 = Symbol;
                      class Ee {
                        constructor(guildId, arg1) {
                          if (null != guildId) {
                            const tmp5 = findGuildSectionIndex(guildId);
                            if (null != tmp5) {
                              const current2 = ref.current;
                              if (current2 != null) {
                                const obj = { orientation: "visible" };
                                const scrollToLocation = current2.scrollToLocation;
                                const merged = Object.assign(tmp5);
                                ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } = unreadPrivateChannelIds);
                                scrollToLocation(obj);
                              }
                            }
                          } else {
                            const current = ref.current;
                            if (current != null) {
                              current.scrollTo(0, arg1);
                            }
                          }
                        }
                      }
                      if (tmp63 === Symbol.for("react.memo_cache_sentinel")) {
                        let tmp68;
                        const guildId = SelectedGuildStore.getGuildId();
                        class Ee {
                          constructor(guildId, arg1) {
                            if (null != guildId) {
                              const tmp5 = findGuildSectionIndex(guildId);
                              if (null != tmp5) {
                                const current2 = ref.current;
                                if (current2 != null) {
                                  const obj = { orientation: "visible" };
                                  const scrollToLocation = current2.scrollToLocation;
                                  const merged = Object.assign(tmp5);
                                  ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } =
                                    unreadPrivateChannelIds);
                                  scrollToLocation(obj);
                                }
                              }
                            } else {
                              const current = ref.current;
                              if (current != null) {
                                current.scrollTo(0, arg1);
                              }
                            }
                          }
                        }
                        if (null != guildId) {
                          tmp68 = findGuildSectionIndex(guildId);
                        }
                        class B {
                          constructor() {
                            guildIds = pendingFolderNode.getGuildIds();
                            return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
                          }
                        }
                        cResult[34] = tmp68;
                        class C {
                          constructor() {
                            unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                            const items = [stateFromStoresArray, stateFromStoresArray1];
                            const obj = ref(token[37]);
                            return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
                          }
                        }
                      }
                      class B {
                        constructor() {
                          guildIds = pendingFolderNode.getGuildIds();
                          return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
                        }
                      }
                      class C {
                        constructor() {
                          unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                          const items = [stateFromStoresArray, stateFromStoresArray1];
                          const obj = ref(token[37]);
                          return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
                        }
                      }
                      let num32 = 0;
                      if (null != pendingFolderNode) {
                        let num33 = 1;
                        if (expanded) {
                          num33 = pendingFolderNode.children.length;
                        }
                        num32 = num33;
                      }
                      const _Math = Math;
                      const length = stateFromStores1.length;
                      const length2 = stateFromStoresArray2.length;
                      const bound = Math.min(stateFromStoresArray.length, 10);
                      if (cResult[36] === num2) {
                        if (cResult[37] === stateFromStoresArray1) {
                          if (cResult[38] === stateFromStoresArray2.length) {
                            if (cResult[39] === guildsNFolders) {
                              if (cResult[40] === stateFromStores1.length) {
                                if (cResult[41] === num32) {
                                  let tmp72;
                                  if (cResult[42] === bound) {
                                    tmp72 = cResult[43];
                                  }
                                  if (cResult[44] === guildsNFolders) {
                                    if (cResult[45] === stateFromStores) {
                                      if (cResult[46] === stateFromStores3) {
                                        SelectedGuildStore = cResult[47];
                                      }
                                      if (cResult[48] === tmp83) {
                                        if (cResult[49] === stateFromStoresArray1) {
                                          if (cResult[50] === stateFromStoresArray2) {
                                            if (cResult[51] === token) {
                                              if (cResult[52] === guildsNFolders) {
                                                if (cResult[53] === tmp4) {
                                                  if (cResult[54] === stateFromStores1) {
                                                    if (cResult[55] === pendingFolderNode) {
                                                      if (cResult[56] === stateFromStoresArray) {
                                                        let tmp88;
                                                        if (cResult[57] === tmp72) {
                                                          tmp88 = cResult[58];
                                                        }
                                                        if (cResult[59] === tmp88) {
                                                          let tmp90;
                                                          if (cResult[60] === tmp59) {
                                                            tmp90 = cResult[61];
                                                          }
                                                          return tmp90;
                                                        }
                                                        const obj5 = { listProps: null, listDataProps: tmp88 };
                                                        class Ee {
                                                          constructor(guildId, arg1) {
                                                            if (null != guildId) {
                                                              const tmp5 = findGuildSectionIndex(guildId);
                                                              if (null != tmp5) {
                                                                const current2 = ref.current;
                                                                if (current2 != null) {
                                                                  const obj = { orientation: "visible" };
                                                                  const scrollToLocation = current2.scrollToLocation;
                                                                  const merged = Object.assign(tmp5);
                                                                  ({
                                                                    insetStart: obj.paddingStart,
                                                                    insetEnd: obj.paddingEnd,
                                                                  } = unreadPrivateChannelIds);
                                                                  scrollToLocation(obj);
                                                                }
                                                              }
                                                            } else {
                                                              const current = ref.current;
                                                              if (current != null) {
                                                                current.scrollTo(0, arg1);
                                                              }
                                                            }
                                                          }
                                                        }
                                                        class B {
                                                          constructor() {
                                                            guildIds = pendingFolderNode.getGuildIds();
                                                            return guildIds.filter((item) =>
                                                              currentUserGuest.isCurrentUserGuest(item),
                                                            );
                                                          }
                                                        }
                                                        cResult[59] = tmp88;
                                                        class C {
                                                          constructor() {
                                                            unreadPrivateChannelIds =
                                                              unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                                                            const items = [stateFromStoresArray, stateFromStoresArray1];
                                                            const obj = ref(token[37]);
                                                            return obj.filterOutMessageRequestsAndSpamById(
                                                              unreadPrivateChannelIds,
                                                              items,
                                                            );
                                                          }
                                                        }
                                                        cResult[60] = tmp59;
                                                        cResult[61] = obj5;
                                                        tmp90 = obj5;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj6 = {
                                        sections: tmp72,
                                        itemSize(section, row) {
                                          const obj = {
                                            section,
                                            row,
                                            guildsNFolders,
                                            pendingFolderNode,
                                            privateChannelIds: stateFromStoresArray,
                                            geoRestrictedGuilds: stateFromStoresArray1,
                                            itemSize,
                                            itemMargin: token,
                                          };
                                          return getItemSize(obj);
                                        },
                                        footerSize() {
                                          return length.length * itemSize + 8;
                                        },
                                        renderSection(arg0) {
                                          let tmp5;
                                          if (arg0 >= constants.GUILDS) {
                                            tmp5 = null;
                                            if (tmp[arg0 - constants.GUILDS].type === GuildsNodeType.FOLDER) {
                                              ({
                                                id: obj2.id,
                                                expanded: obj2.expanded,
                                                name: obj2.name,
                                                color: obj2.color,
                                                children: obj2.childNodes,
                                              } = tmp[arg0 - constants.GUILDS]);
                                              tmp5 = jsx(GuildsBarGuildFolderDefault, {
                                                id: null,
                                                expanded: null,
                                                name: null,
                                                color: null,
                                                childNodes: null,
                                              });
                                            }
                                          } else {
                                            tmp5 = null;
                                            if (arg0 === constants.PENDING_JOIN_REQUESTS) {
                                              tmp5 = null;
                                              if (null != pendingFolderNode) {
                                                const obj = { id: null, expanded: null, childNodes: null };
                                                ({
                                                  id: obj.id,
                                                  expanded: obj.expanded,
                                                  children: obj.childNodes,
                                                } = pendingFolderNode);
                                                tmp5 = jsx(GuildsBarPendingGuildFolderDefault, {
                                                  id: null,
                                                  expanded: null,
                                                  childNodes: null,
                                                });
                                              }
                                            }
                                          }
                                          return tmp5;
                                        },
                                        renderItem(arg0, arg1) {
                                          return renderItemJSX(
                                            arg0,
                                            arg1,
                                            guildsNFolders,
                                            stateFromStoresArray,
                                            stateFromStores1,
                                            stateFromStoresArray2,
                                            stateFromStoresArray1,
                                            pendingFolderNode,
                                          );
                                        },
                                        renderFooter() {
                                          GuildsBarFooterWrapperDefault;
                                          return <tmp>{closure_13.map(f123546)}</tmp>;
                                        },
                                        getRecyclerKey(arg0, arg1, arg2) {
                                          if (arg1 >= constants.GUILDS) {
                                            const element = guildsNFolders[arg1 - tmp3.GUILDS];
                                            if (null != element) {
                                              if (element.type !== GuildsNodeType.ROOT) {
                                                const tmp5 = element;
                                                if (element.type === GuildsNodeType.FOLDER) {
                                                  if (null == arg2) {
                                                    const _HermesInternal2 = HermesInternal;
                                                    return "" + element.id;
                                                  }
                                                }
                                                const _HermesInternal = HermesInternal;
                                                return "" + tmp5.id;
                                              }
                                            }
                                          }
                                        },
                                        renderAccessory(fastList) {
                                          return jsx(itemSize(token[28]), { fastList });
                                        },
                                        getAnchorIdFromIndex(section, item) {
                                          if (null == GuildsBarDnDStore.getState().dropSpecs) {
                                            if (null == GuildsBarDnDStore.getState().dragSpecs) {
                                              const obj2 = {
                                                section,
                                                item,
                                                lurkingGuildsIds: stateFromStores1,
                                                guestGuildIds: stateFromStoresArray2,
                                                privateChannelIds: stateFromStoresArray,
                                                guildsNFolders,
                                                pendingFolderNode,
                                                geoRestrictedGuilds: stateFromStoresArray1,
                                              };
                                              return getAnchorIdFromIndex(obj2);
                                            }
                                          }
                                        },
                                        getAnchorIndexFromId(id) {
                                          const obj = {
                                            id,
                                            lurkingGuildsIds: stateFromStores1,
                                            guestGuildIds: stateFromStoresArray2,
                                            privateChannelIds: stateFromStoresArray,
                                            guildsNFolders,
                                            pendingFolderNode,
                                            geoRestrictedGuilds: stateFromStoresArray1,
                                          };
                                          return getAnchorIndexFromId(obj);
                                        },
                                      };
                                      class Ee {
                                        constructor(guildId, arg1) {
                                          if (null != guildId) {
                                            const tmp5 = findGuildSectionIndex(guildId);
                                            if (null != tmp5) {
                                              const current2 = ref.current;
                                              if (current2 != null) {
                                                const obj = { orientation: "visible" };
                                                const scrollToLocation = current2.scrollToLocation;
                                                const merged = Object.assign(tmp5);
                                                ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } =
                                                  unreadPrivateChannelIds);
                                                scrollToLocation(obj);
                                              }
                                            }
                                          } else {
                                            const current = ref.current;
                                            if (current != null) {
                                              current.scrollTo(0, arg1);
                                            }
                                          }
                                        }
                                      }
                                      class B {
                                        constructor() {
                                          guildIds = pendingFolderNode.getGuildIds();
                                          return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
                                        }
                                      }
                                      class C {
                                        constructor() {
                                          unreadPrivateChannelIds =
                                            unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                                          const items = [stateFromStoresArray, stateFromStoresArray1];
                                          const obj = ref(token[37]);
                                          return obj.filterOutMessageRequestsAndSpamById(
                                            unreadPrivateChannelIds,
                                            items,
                                          );
                                        }
                                      }
                                      cResult[48] = tmp83;
                                      cResult[49] = stateFromStoresArray1;
                                      cResult[50] = stateFromStoresArray2;
                                      cResult[51] = token;
                                      cResult[52] = guildsNFolders;
                                      cResult[53] = tmp4;
                                      cResult[54] = stateFromStores1;
                                      cResult[55] = pendingFolderNode;
                                      cResult[56] = stateFromStoresArray;
                                      cResult[57] = tmp72;
                                      cResult[58] = obj6;
                                      tmp88 = obj6;
                                    }
                                  }
                                  const items9 = [];
                                  class Ee {
                                    constructor(guildId, arg1) {
                                      if (null != guildId) {
                                        const tmp5 = findGuildSectionIndex(guildId);
                                        if (null != tmp5) {
                                          const current2 = ref.current;
                                          if (current2 != null) {
                                            const obj = { orientation: "visible" };
                                            const scrollToLocation = current2.scrollToLocation;
                                            const merged = Object.assign(tmp5);
                                            ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } =
                                              unreadPrivateChannelIds);
                                            scrollToLocation(obj);
                                          }
                                        }
                                      } else {
                                        const current = ref.current;
                                        if (current != null) {
                                          current.scrollTo(0, arg1);
                                        }
                                      }
                                    }
                                  }
                                  if (stateFromStores3 > 0) {
                                    items9.push("unavailable-guilds");
                                  }
                                  class B {
                                    constructor() {
                                      guildIds = pendingFolderNode.getGuildIds();
                                      return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
                                    }
                                  }
                                  if (tmp85) {
                                    items9.push("empty-nux");
                                  }
                                  class C {
                                    constructor() {
                                      unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                                      const items = [stateFromStoresArray, stateFromStoresArray1];
                                      const obj = ref(token[37]);
                                      return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
                                    }
                                  }
                                  items9.push("create-join-guild");
                                  cResult[44] = guildsNFolders;
                                  cResult[45] = stateFromStores;
                                  cResult[46] = stateFromStores3;
                                  cResult[47] = items9;
                                }
                              }
                            }
                          }
                        }
                      }
                      const items10 = [1, num2, num32, length, length2, bound, 1];
                      for (const item10298 of guildsNFolders) {
                        let element = item10298;
                        if (item10298.type === GuildsNodeType.GUILD) {
                          let arr4 = items10.push(1);
                        } else if (element.type === tmp75.FOLDER) {
                          let push = items10.push;
                          if (element.expanded) {
                            let arr5 = push(element.children.length);
                          } else {
                            let arr6 = push(1);
                          }
                        }
                        continue;
                      }
                      if (stateFromStoresArray1.length > 0) {
                        items10.push(stateFromStoresArray1.length);
                      }
                      cResult[36] = num2;
                      cResult[37] = stateFromStoresArray1;
                      cResult[38] = stateFromStoresArray2.length;
                      cResult[39] = guildsNFolders;
                      cResult[40] = stateFromStores1.length;
                      cResult[41] = num32;
                      cResult[42] = bound;
                      cResult[43] = items10;
                      tmp72 = items10;
                    }
                  }
                  class Ee {
                    constructor(guildId, arg1) {
                      if (null != guildId) {
                        const tmp5 = findGuildSectionIndex(guildId);
                        if (null != tmp5) {
                          const current2 = ref.current;
                          if (current2 != null) {
                            const obj = { orientation: "visible" };
                            const scrollToLocation = current2.scrollToLocation;
                            const merged = Object.assign(tmp5);
                            ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } = unreadPrivateChannelIds);
                            scrollToLocation(obj);
                          }
                        }
                      } else {
                        const current = ref.current;
                        if (current != null) {
                          current.scrollTo(0, arg1);
                        }
                      }
                    }
                  }
                  class B {
                    constructor() {
                      guildIds = pendingFolderNode.getGuildIds();
                      return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
                    }
                  }
                  class C {
                    constructor() {
                      unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                      const items = [stateFromStoresArray, stateFromStoresArray1];
                      const obj = ref(token[37]);
                      return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
                    }
                  }
                  cResult[32] = tmp59.insetStart;
                  cResult[33] = Ee;
                  tmp61 = Ee;
                }
              }
            }
            class C {
              constructor() {
                unreadPrivateChannelIds = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
                const items = [stateFromStoresArray, stateFromStoresArray1];
                const obj = ref(token[37]);
                return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
              }
            }
            tmp60[0] = tmp52;
            tmp60[1] = tmp55;
            tmp60[2] = top;
            tmp60[3] = sum;
            tmp60[4] = tmp58.height;
            cResult[25] = top;
            cResult[26] = tmp52;
            cResult[27] = tmp55;
            cResult[28] = sum;
            cResult[29] = tmp60;
            tmp59 = tmp60;
          }
          const rect1 = { top: result, bottom: diff };
          cResult[21] = result;
          cResult[22] = diff;
          cResult[23] = rect1;
          tmp55 = rect1;
        }
      }
      const fn = function _() {
        const listInsets = GuildsBarDnDStore.getState().listInsets;
        const obj = { start: top, end: mobileQuestDockHeight + youBarTotalHeight };
        const result = listInsets.set(obj);
      };
      const items11 = [mobileQuestDockHeight, top, youBarTotalHeight];
      cResult[0] = mobileQuestDockHeight;
      cResult[1] = top;
      cResult[2] = youBarTotalHeight;
      cResult[3] = fn;
      cResult[4] = items11;
      tmp12 = items11;
      tmp11 = fn;
    }
  : (arg0) => {
      let closure_1;
      let guildsNFolders;
      let isScreenReaderEnabled;
      let ref;
      let stateFromStores1;
      let token;
      _require = arg0;
      const tmp = isScreenReaderEnabled();
      importDefault = tmp;
      let tmp2 = _require;
      const tmp3 = token;
      let obj = require("useToken");
      token = obj.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
      let rect = require("useSafeAreaInsets")();
      const top = rect.top;
      const bottom = rect.bottom;
      let obj2 = require("QuestHooks");
      const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
      let obj3 = require("useYouBarTotalHeight");
      const youBarTotalHeight = obj3.useYouBarTotalHeight();
      const obj4 = require("useYouBarTotalHeight");
      const youBarTotalHeight1 = obj4.useYouBarTotalHeight(4);
      let items = [mobileQuestDockHeight, top, youBarTotalHeight];
      const effect = top.useEffect(() => {
        const listInsets = GuildsBarDnDStore.getState().listInsets;
        const obj = { start: top, end: mobileQuestDockHeight + youBarTotalHeight };
        const result = listInsets.set(obj);
      }, items);
      let num = 0;
      if (require("useIsFavoritesGuildVisible")()) {
        num = 1;
      }
      let items1 = [stateFromStores1, youBarTotalHeight, youBarTotalHeight1];
      const tmp2Result = tmp2(tmp3[38]);
      const stateFromStoresArray = tmp2Result.useStateFromStoresArray(items1, () => {
        const unreadPrivateChannelIds = stateFromStores1.getUnreadPrivateChannelIds();
        const items = [youBarTotalHeight, youBarTotalHeight1];
        const obj = ref(token[37]);
        return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
      }, []);
      const items2 = [bottom];
      const tmp2Result8 = tmp2(tmp3[38]);
      const stateFromStores = tmp2Result8.useStateFromStores(items2, () => bottom.isConnected());
      const items3 = [num];
      const tmp2Result9 = tmp2(tmp3[38]);
      const stateFromStoresArray1 = tmp2Result9.useStateFromStoresArray(items3, () => num.getGeoRestrictedGuilds());
      const items4 = [mobileQuestDockHeight];
      const tmp2Result10 = tmp2(tmp3[38]);
      stateFromStores1 = tmp2Result10.useStateFromStores(items4, () => mobileQuestDockHeight.lurkingGuildIds());
      const items5 = [stateFromStoresArray1, stateFromStores];
      const tmp2Result11 = tmp2(tmp3[38]);
      const stateFromStoresArray2 = tmp2Result11.useStateFromStoresArray(items5, () => {
        let currentUserGuest;
        const guildIds = stateFromStoresArray1.getGuildIds();
        return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
      });
      const items6 = [guildsNFolders];
      const tmp2Result12 = tmp2(tmp3[38]);
      const stateFromStores2 = tmp2Result12.useStateFromStores(
        items6,
        () => {
          const obj = {
            guildsNFolders: guildsNFolders.getFastListGuildFolders(),
            version: guildsNFolders.getGuildsTree().version,
          };
          return obj;
        },
        [],
        tmp4(tmp3[39]),
      );
      guildsNFolders = stateFromStores2.guildsNFolders;
      const version = stateFromStores2.version;
      const tmp16 = require("useGuildsBarCreatePendingFolderNode")();
      const expanded = tmp16.expanded;
      const pendingFolderNode = tmp16.pendingFolderNode;
      const items7 = [stateFromStoresArray];
      const tmp2Result13 = tmp2(tmp3[38]);
      const stateFromStores3 = tmp2Result13.useStateFromStores(
        items7,
        () => stateFromStoresArray.totalUnavailableGuilds,
      );
      const tmp2Result14 = tmp2(tmp3[41]);
      isScreenReaderEnabled = tmp2Result14.useIsScreenReaderEnabled();
      const items8 = [
        isScreenReaderEnabled,
        token,
        youBarTotalHeight,
        bottom,
        top,
        mobileQuestDockHeight,
        youBarTotalHeight1,
      ];
      const memo = obj5.useMemo(() => {
        let diff;
        let obj3;
        let rect;
        const obj = {
          showsVerticalScrollIndicator: !isScreenReaderEnabled,
          scrollIndicatorInsets: rect,
          insetStart: top,
          insetEnd: mobileQuestDockHeight + 2 * token + youBarTotalHeight1,
          chunkBase: obj3.getWindowDimensions().height,
        };
        rect = { top: 3 * token, bottom: diff };
        if (youBarTotalHeight > 0) {
          diff = tmp2 - 16;
        } else {
          diff = bottom + 3 * token;
        }
        obj3 = useWindowDimensions;
        return obj;
      }, items8);
      const items9 = [, ,];
      ({ insetStart: arr10[0], insetEnd: arr10[1] } = memo);
      items9[2] = arg0;
      const callback = obj5.useCallback((guildId, arg1) => {
        if (null != guildId) {
          const tmp5 = findGuildSectionIndex(guildId);
          if (null != tmp5) {
            const current2 = ref.current;
            if (current2 != null) {
              const obj = { orientation: "visible" };
              const scrollToLocation = current2.scrollToLocation;
              const merged = Object.assign(tmp5);
              ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } = memo);
              scrollToLocation(obj);
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
        version,
        expanded,
        token,
        tmp,
      ];
      const obj6 = {
        listProps: memo,
        listDataProps: top.useMemo(() => {
          let geoRestrictedGuilds;
          let guestGuildIds;
          let itemMargin;
          let itemSize;
          let lurkingGuildsIds;
          let privateChannelIds;
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
                let arr3 = push(element.children.length);
              } else {
                let arr10 = push(1);
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
          const tmp13 = stateFromStores && 0 === guildsNFolders.length && 0 === stateFromStores3;
          if (tmp13) {
            items1.push("empty-nux");
          }
          items1.push("create-join-guild");
          let obj = {
            sections: items,
            sectionSize(arg0) {
              if (arg0 !== stateFromStores3.PENDING_JOIN_REQUESTS) {
                num = 0;
                if (arg0 >= stateFromStores3.GUILDS) {
                  let num2 = 0;
                  if (null != tmp[arg0 - stateFromStores3.GUILDS]) {
                    num2 = 0;
                    if (tmp[arg0 - stateFromStores3.GUILDS].type === expanded.FOLDER) {
                      num2 = itemSize;
                    }
                  }
                  num = num2;
                }
              } else {
                num = itemSize;
              }
              return num;
            },
            itemSize(section, row) {
              const obj = {
                section,
                row,
                guildsNFolders,
                pendingFolderNode,
                privateChannelIds,
                geoRestrictedGuilds,
                itemSize,
                itemMargin,
              };
              return memo1(obj);
            },
            footerSize() {
              return items1.length * closure_1 + 8;
            },
            renderSection(arg0) {
              let tmp5;
              if (arg0 >= stateFromStores3.GUILDS) {
                tmp5 = null;
                if (tmp[arg0 - stateFromStores3.GUILDS].type === expanded.FOLDER) {
                  const obj3 = { id: null, expanded: null, name: null, color: null, childNodes: null };
                  ({
                    id: obj2.id,
                    expanded: obj2.expanded,
                    name: obj2.name,
                    color: obj2.color,
                    children: obj2.childNodes,
                  } = tmp[arg0 - stateFromStores3.GUILDS]);
                  tmp5 = memo(itemSize(token[15]), obj3);
                }
              } else {
                tmp5 = null;
                if (arg0 === stateFromStores3.PENDING_JOIN_REQUESTS) {
                  tmp5 = null;
                  if (null != pendingFolderNode) {
                    const obj = { id: null, expanded: null, childNodes: null };
                    ({ id: obj.id, expanded: obj.expanded, children: obj.childNodes } = pendingFolderNode);
                    tmp5 = memo(itemSize(token[16]), obj);
                  }
                }
              }
              return tmp5;
            },
            renderItem(arg0, arg1) {
              return renderItemJSX(
                arg0,
                arg1,
                guildsNFolders,
                privateChannelIds,
                lurkingGuildsIds,
                guestGuildIds,
                geoRestrictedGuilds,
                pendingFolderNode,
              );
            },
            renderFooter() {
              GuildsBarFooterWrapperDefault;
              return <tmp>{items1.map(f123546)}</tmp>;
            },
            getRecyclerKey(arg0, arg1, arg2) {
              if (arg1 >= stateFromStores3.GUILDS) {
                const element = guildsNFolders[arg1 - tmp3.GUILDS];
                if (null != element) {
                  if (element.type !== expanded.ROOT) {
                    const tmp5 = element;
                    if (element.type === expanded.FOLDER) {
                      if (null == arg2) {
                        const _HermesInternal2 = HermesInternal;
                        return "" + element.id;
                      }
                    }
                    const _HermesInternal = HermesInternal;
                    return "" + tmp5.id;
                  }
                }
              }
            },
            renderAccessory(fastList) {
              const obj = { fastList };
              return memo(itemSize(itemMargin[28]), obj);
            },
            getAnchorIdFromIndex(section, item) {
              if (null == pendingFolderNode.getState().dropSpecs) {
                if (null == pendingFolderNode.getState().dragSpecs) {
                  const obj2 = {
                    section,
                    item,
                    lurkingGuildsIds,
                    guestGuildIds,
                    privateChannelIds,
                    guildsNFolders,
                    pendingFolderNode,
                    geoRestrictedGuilds,
                  };
                  return getAnchorIdFromIndex(obj2);
                }
              }
            },
            getAnchorIndexFromId(id) {
              const obj = {
                id,
                lurkingGuildsIds,
                guestGuildIds,
                privateChannelIds,
                guildsNFolders,
                pendingFolderNode,
                geoRestrictedGuilds,
              };
              return getAnchorIndexFromId(obj);
            },
          };
          const merged = Object.assign(memo1);
          return obj;
        }, items10),
      };
      return obj6;
    };
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

export default tmp3;
