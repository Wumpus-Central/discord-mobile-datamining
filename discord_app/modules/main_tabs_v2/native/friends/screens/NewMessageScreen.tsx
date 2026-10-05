// === Module 16931: NewMessageScreen ===

// Module 16931 (NewMessageScreen)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import UserPlusIcon from "UserPlusIcon" /* 4833 */;
import AssetRegistryDefault from "AssetRegistry" /* 4834 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6722 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9715 */;
import GroupPlusIcon from "GroupPlusIcon" /* 9716 */;
import ChatViewDefault from "ChatView" /* 9760 */;
import UserRowConstants from "UserRowConstants" /* 10592 */;
import NoResultsDefault from "NoResults" /* 10726 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11214 */;
import GroupDMNitroCapExperimentDefault from "GroupDMNitroCapExperiment" /* 11216 */;
import NewMessageUserListDefault from "NewMessageUserList" /* 11993 */;
import GroupDMNitroUpsellBannerDefault from "GroupDMNitroUpsellBanner" /* 16875 */;
import useOnMessageSendDefault from "useOnMessageSend" /* 16932 */;
import GroupDMRecipientLimitTitleDefault from "GroupDMRecipientLimitTitle" /* 16933 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore_mod from "RelationshipStore" /* 4519 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6719 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, dependencyMap, importDefault;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let obj2;
let obj3;
let str;
function isPrivateChannelMatch(arr, channel) {
  const recipients = channel.recipients;
  if (recipients.length !== arr.length) {
    return false;
  } else {
    for (const item10009 of recipients) {
      if (arr.includes(item10009)) {
        continue;
      } else {
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
function findLocalMatchingPrivateChannelId(handleChannelCreate) {
  let closure_0 = handleChannelCreate;
  if (1 === handleChannelCreate.length) {
    let dMFromUserId = ChannelStore.getDMFromUserId(handleChannelCreate[0]);
    if (dMFromUserId == null) {
      dMFromUserId = null;
    }
    return dMFromUserId;
  } else {
    const items = [, ];
    [arr[0], arr[1]] = PrivateChannelSortStore.getSortedChannels();
    _slicedToArray(PrivateChannelSortStore.getSortedChannels(), 2);
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let found = nextResult.find((channelId) => {
        const channel = ChannelStore.getChannel(channelId.channelId);
        let tmp2 = !(null == channel || !channel.isPrivate());
        null == channel || !channel.isPrivate();
        if (tmp2) {
          tmp2 = isPrivateChannelMatch(handleChannelCreate, channel);
        }
        return tmp2;
      });
      if (null != found) {
        let channelId = found.channelId;
        iter.return();
        return channelId;
      }
    }
    return null;
  }
}
function findMatchingPrivateChannelId() {
  return obj(...arguments);
}
let __closure = function _findMatchingPrivateChannelId() {
  const obj = _asyncToGenerator(async (arg0) => {
    const length = arg0;
    let c2 = 0;
    let c1 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj3;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              const tmp15 = findLocalMatchingPrivateChannelId(length);
              if (null != tmp15) {
                c1 = 3;
                return { value: tmp15, done: true };
              } else if (length.length > 1) {
                c1 = 3;
                return { value: null, done: true };
              } else {
                c4 = 1;
                c2 = 2;
                c1 = 1;
                const obj6 = { value: obj3.getDMChannel(length[0]), done: false };
                obj3 = ChannelActionCreatorsDefault;
                return obj6;
              }
            }
          } else if (1 === tmp3) {
            c4 = 0;
            c1 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c1 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c1 = 3;
            return { value, done: true };
          }
        } catch (tmp7) {
          closure_3 = tmp7;
          if (0 === c4) {
            c1 = 3;
            throw tmp7;
          } else {
            c2 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let react = react_mod;
const View = react_native.View;
const PrivateChannelRecord = ChannelRecord.PrivateChannelRecord;
let RelationshipStore = RelationshipStore_mod;
const UserRowModes = UserRowConstants.UserRowModes;
({ AnalyticEvents: closure_12, AnalyticsSections: map1, ChannelTypes: closure_14, ME: closure_15, Routes: closure_16 } = Constants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
let createStyles = createStyles_mod;
__closure = { container: { flex: 1 }, background: obj2, header: { flexDirection: "column", alignItems: str }, emptyContainer: { flexGrow: 1, justifyContent: "center" }, emptyKeyboardView: { flexGrow: 1 }, addFriendsButtonContainer: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
str = "center";
if (PlatformUtils.isAndroid()) {
  str = "flex-start";
}
obj3 = { marginBottom: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center", width: "100%" };
let closure_20 = createStyles(__closure);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_2;
  let first;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(17);
  [first, dependencyMap] = react.useState(null);
  if (cResult[0] !== arg0) {
    const fn = function c() {
      function handleChannelCreate(channel) {
        channel = channel.channel;
        if (channel.id !== handleChannelCreate(closure_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          if (channel.isPrivate()) {
            if (isPrivateChannelMatch(handleChannelCreate, channel)) {
              closure_1_2(findLocalMatchingPrivateChannelId(handleChannelCreate));
            }
          }
        }
      }
      function handleChannelDelete(arg0) {
        let closure_0 = arg0;
        let tmp = closure_1_2((arg0) => {
          let tmp = arg0;
          if (arg0 !== handleChannelCreate(closure_2_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            let tmp3 = null;
            if (arg0 !== channel.channel.id) {
              tmp3 = arg0;
            }
            tmp = tmp3;
          }
          return tmp;
        });
      }
      let obj = first(closure_2[20]);
      const subscription = obj.subscribe("CHANNEL_CREATE", handleChannelCreate);
      let obj2 = first(closure_2[20]);
      const subscription1 = obj2.subscribe("CHANNEL_DELETE", handleChannelDelete);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("CHANNEL_CREATE", handleChannelCreate);
        const obj2 = DispatcherDefault;
        obj2.unsubscribe("CHANNEL_DELETE", handleChannelDelete);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== first) {
    const fn2 = function h() {
      return ChannelStore.getChannel(first);
    };
    cResult[4] = first;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11);
  if (cResult[6] === stateFromStores) {
    let tmp13;
    let tmp14;
    if (cResult[7] === arg0) {
      tmp13 = cResult[8];
      tmp14 = cResult[9];
    }
    const effect1 = react.useEffect(tmp13, tmp14);
    if (cResult[10] === first) {
      let tmp16;
      let tmp17;
      if (cResult[11] === arg0) {
        tmp16 = cResult[12];
        tmp17 = cResult[13];
      }
      const effect2 = react.useEffect(tmp16, tmp17);
      if (cResult[14] !== stateFromStores) {
        class L {
          constructor() {
            const tmp2 = null != stateFromStores && stateFromStores.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if (tmp2) {
              const obj2 = { type: "LOAD_MESSAGES_SUCCESS", channelId: stateFromStores.id, messages: [], isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: "Set", isStale: "New Message Composer" };
              const obj = DispatcherDefault;
              obj.dispatch(obj2);
            }
          }
        }
        const items2 = [stateFromStores];
        class R {
          constructor() {
            let GROUP_DM;
            let tmp82;
            if (null == first) {
              if (null == findLocalMatchingPrivateChannelId(length)) {
                let obj = { id: FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, type: GROUP_DM, name: "", guild_id: null, recipients: length };
                const dispatch = DispatcherDefault.dispatch;
                DispatcherDefault;
                if (1 === length.length) {
                  GROUP_DM = constants.DM;
                } else {
                  GROUP_DM = constants.GROUP_DM;
                }
                let obj2 = { type: "CHANNEL_CREATE", channel: tmp82 };
                const self = this;
                const self2 = this;
                tmp82 = new PrivateChannelRecord(obj);
                dispatch(obj2);
                return () => {
                  const obj2 = { type: "CHANNEL_DELETE", channel: { id: length(closure_1_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" } };
                  const obj = first(closure_1_2[20]);
                  ({ id: length(closure_1_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" });
                  obj.dispatch(obj2);
                };
              }
            }
          }
        }
        cResult[14] = stateFromStores;
        cResult[15] = L;
        cResult[16] = items2;
      } else {
        class L {
          constructor() {
            const tmp2 = null != stateFromStores && stateFromStores.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if (tmp2) {
              const obj2 = { type: "LOAD_MESSAGES_SUCCESS", channelId: stateFromStores.id, messages: [], isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: "Set", isStale: "New Message Composer" };
              const obj = DispatcherDefault;
              obj.dispatch(obj2);
            }
          }
        }
      }
      class R {
        constructor() {
          let GROUP_DM;
          let tmp82;
          if (null == first) {
            if (null == findLocalMatchingPrivateChannelId(length)) {
              let obj = { id: FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, type: GROUP_DM, name: "", guild_id: null, recipients: length };
              const dispatch = DispatcherDefault.dispatch;
              DispatcherDefault;
              if (1 === length.length) {
                GROUP_DM = constants.DM;
              } else {
                GROUP_DM = constants.GROUP_DM;
              }
              let obj2 = { type: "CHANNEL_CREATE", channel: tmp82 };
              const self = this;
              const self2 = this;
              tmp82 = new PrivateChannelRecord(obj);
              dispatch(obj2);
              return () => {
                const obj2 = { type: "CHANNEL_DELETE", channel: { id: length(closure_1_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" } };
                const obj = first(closure_1_2[20]);
                ({ id: length(closure_1_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" });
                obj.dispatch(obj2);
              };
            }
          }
        }
      }
      return first;
    }
    class R {
      constructor() {
        let GROUP_DM;
        let tmp82;
        if (null == first) {
          if (null == findLocalMatchingPrivateChannelId(length)) {
            let obj = { id: FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, type: GROUP_DM, name: "", guild_id: null, recipients: length };
            const dispatch = DispatcherDefault.dispatch;
            DispatcherDefault;
            if (1 === length.length) {
              GROUP_DM = constants.DM;
            } else {
              GROUP_DM = constants.GROUP_DM;
            }
            let obj2 = { type: "CHANNEL_CREATE", channel: tmp82 };
            const self = this;
            const self2 = this;
            tmp82 = new PrivateChannelRecord(obj);
            dispatch(obj2);
            return () => {
              const obj2 = { type: "CHANNEL_DELETE", channel: { id: length(closure_1_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" } };
              const obj = first(closure_1_2[20]);
              ({ id: length(closure_1_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" });
              obj.dispatch(obj2);
            };
          }
        }
      }
    }
    const items3 = [arg0, first];
    cResult[10] = first;
    cResult[11] = arg0;
    cResult[12] = R;
    cResult[13] = items3;
    tmp17 = items3;
    tmp16 = R;
  }
  const fn3 = function v() {
    let closure_0;
    function doAction() {
      return closure_0(...arguments);
    }
    if (0 !== length.length) {
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = stateFromStores.isPrivate();
      }
      if (!isPrivateResult) {
        length = stateFromStores(function*() {
          if (c3 === 2) {
            c3 = 3;
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
            try {
              let tmp;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_1 = tmp4;
                  tmp = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: findMatchingPrivateChannelId(tmp), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                tmp = value;
                const tmp7 = c2;
                if (null == tmp) {
                  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp(closure_2_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                } else {
                  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp;
                }
                tmp7(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID);
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp17) {
              c3 = 3;
              throw tmp17;
            }
          }
        });
        doAction();
      }
    } else {
      const tmp3 = null;
      const tmp4 = closure_2(null);
    }
  };
  const items4 = [arg0, stateFromStores];
  cResult[6] = stateFromStores;
  cResult[7] = arg0;
  cResult[8] = fn3;
  cResult[9] = items4;
  tmp14 = items4;
  tmp13 = fn3;
}) : ((recipients) => {
  let closure_2;
  let first;
  _require = recipients;
  [first, dependencyMap] = react.useState(null);
  const items = [recipients];
  const effect = react.useEffect(() => {
    function handleChannelCreate(channel) {
      channel = channel.channel;
      if (channel.id !== handleChannelCreate(closure_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        if (channel.isPrivate()) {
          if (isPrivateChannelMatch(handleChannelCreate, channel)) {
            closure_1_2(findLocalMatchingPrivateChannelId(handleChannelCreate));
          }
        }
      }
    }
    function handleChannelDelete(arg0) {
      let closure_0 = arg0;
      let tmp = closure_1_2((arg0) => {
        let tmp = arg0;
        if (arg0 !== handleChannelCreate(closure_2_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          let tmp3 = null;
          if (arg0 !== channel.channel.id) {
            tmp3 = arg0;
          }
          tmp = tmp3;
        }
        return tmp;
      });
    }
    let obj = first(closure_2[20]);
    const subscription = obj.subscribe("CHANNEL_CREATE", handleChannelCreate);
    let obj2 = first(closure_2[20]);
    const subscription1 = obj2.subscribe("CHANNEL_DELETE", handleChannelDelete);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("CHANNEL_CREATE", handleChannelCreate);
      const obj2 = DispatcherDefault;
      obj2.unsubscribe("CHANNEL_DELETE", handleChannelDelete);
    };
  }, items);
  let obj = require("get initialized");
  const items1 = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items1, () => ChannelStore.getChannel(first));
  const items2 = [recipients, stateFromStores];
  const effect1 = react.useEffect(() => {
    function doAction() {
      return obj(...arguments);
    }
    let obj = function _doAction2() {
      obj = _asyncToGenerator(async () => {
        if (c3 === 2) {
          c3 = 3;
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
          try {
            let closure_0;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp4;
                closure_0 = undefined;
                c2 = 1;
                c3 = 1;
                const obj4 = { value: closure_2_23(closure_0), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              closure_0 = value;
              const tmp7 = c2;
              if (null == closure_0) {
                FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = closure_2_0(closure_2_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              } else {
                FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = closure_0;
              }
              tmp7(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp17) {
            c3 = 3;
            throw tmp17;
          }
        }
      });
      return obj(...arguments);
    };
    if (0 !== obj.length) {
      obj = stateFromStores;
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = obj.isPrivate();
      }
      if (isPrivateResult) {
        isPrivateResult = isPrivateChannelMatch(tmp, obj);
      }
      if (!isPrivateResult) {
        doAction();
      }
    } else {
      const tmp3 = null;
      const tmp4 = closure_2(null);
    }
  }, items2);
  const items3 = [recipients, first];
  const effect2 = react.useEffect(function() {
    let GROUP_DM;
    let tmp82;
    if (null == first) {
      if (null == findLocalMatchingPrivateChannelId(recipients)) {
        let obj = { id: FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, type: GROUP_DM, name: "", guild_id: null, recipients };
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (1 === recipients.length) {
          GROUP_DM = constants.DM;
        } else {
          GROUP_DM = constants.GROUP_DM;
        }
        let obj2 = { type: "CHANNEL_CREATE", channel: tmp82 };
        const self = this;
        const self2 = this;
        tmp82 = new PrivateChannelRecord(obj);
        dispatch(obj2);
        return () => {
          const obj2 = { type: "CHANNEL_DELETE", channel: { id: recipients(closure_1_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" } };
          const obj = first(closure_1_2[20]);
          ({ id: recipients(closure_1_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" });
          obj.dispatch(obj2);
        };
      }
    }
  }, items3);
  const items4 = [stateFromStores];
  const effect3 = react.useEffect(() => {
    const tmp2 = null != stateFromStores && stateFromStores.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    if (tmp2) {
      const obj2 = { type: "LOAD_MESSAGES_SUCCESS", channelId: stateFromStores.id, messages: [], isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: "Set", isStale: "New Message Composer" };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items4);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRedirectToChannelOnMessage(channel_id, arg1) {
  let closure_1;
  _require = channel_id;
  importDefault = arg1;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === channel_id) {
    let tmp3;
    if (cResult[1] === arg1) {
      tmp3 = cResult[2];
    }
    useOnMessageSendDefault(tmp3);
  }
  const fn = function t() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { channel_id };
    obj.track(constants.MESSAGE_COMPOSER_TRANSITIONED, obj2);
    closure_1(channel_id);
  };
  cResult[0] = channel_id;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp3 = fn;
}) : (function useRedirectToChannelOnMessage(channel_id, arg1) {
  let closure_1;
  importDefault = arg1;
  const items = [channel_id, arg1];
  const callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { channel_id };
    obj.track(constants.MESSAGE_COMPOSER_TRANSITIONED, obj2);
    closure_1(channel_id);
  }, items);
  useOnMessageSendDefault(callback);
});
const __initData = { code: "function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}" };
const __initData2 = { code: "function NewMessageScreenTsx2(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function Header(recipientLimit) {
  let items;
  let numInGroup;
  let title;
  let obj = numInGroup(576);
  const cResult = obj.c(17);
  ({ title, numInGroup } = recipientLimit);
  recipientLimit = recipientLimit.recipientLimit;
  const usePersonLimitCopy = recipientLimit.usePersonLimitCopy;
  const tmp4 = closure_20();
  const diff = recipientLimit - (numInGroup + 1);
  const fn = function n() {
    let num2;
    let withTiming2;
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (numInGroup >= 5) {
      num = 1;
    }
    const obj = { opacity: withTiming(num), maxHeight: withTiming2(num2) };
    num2 = 0;
    withTiming2 = timing.withTiming;
    timing;
    if (numInGroup >= 5) {
      num2 = 20;
    }
    return obj;
  };
  const obj2 = numInGroup(4612);
  fn.__closure = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4891).withTiming };
  fn.__workletHash = 12426216833792;
  fn.__initData = __initData;
  ({ numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4891).withTiming });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (usePersonLimitCopy) {
    const sum = numInGroup + 1;
    if (cResult[0] === recipientLimit) {
      if (cResult[1] === sum) {
        let tmp23;
        if (cResult[2] === title) {
          tmp23 = cResult[3];
        }
        return tmp23;
      }
    }
    const obj4 = { title, memberCount: sum, recipientLimit };
    const tmp26 = closure_17(GroupDMRecipientLimitTitleDefault, obj4);
    cResult[0] = recipientLimit;
    cResult[1] = sum;
    cResult[2] = title;
    cResult[3] = tmp26;
    tmp23 = tmp26;
  } else {
    let tmp7;
    let stringResult;
    if (cResult[4] !== title) {
      const obj5 = { title };
      const tmp9 = closure_17(numInGroup(7498).GenericHeaderTitle, obj5);
      let num = 4;
      cResult[4] = title;
      let num2 = 5;
      cResult[5] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[5];
    }
    let str = "text-muted";
    if (0 === diff) {
      str = "text-feedback-critical";
    }
    if (cResult[6] === 0 === diff) {
      let tmp11;
      if (cResult[7] === diff) {
        tmp11 = cResult[8];
      }
      if (cResult[9] === animatedStyle) {
        if (cResult[10] === str) {
          let tmp14;
          if (cResult[11] === tmp11) {
            tmp14 = cResult[12];
          }
          if (cResult[13] === tmp4.header) {
            if (cResult[14] === tmp7) {
              let tmp18;
              if (cResult[15] === tmp14) {
                tmp18 = cResult[16];
              }
              return tmp18;
            }
          }
          const obj6 = { style: tmp4.header, children: items };
          items = [tmp7, tmp14];
          const tmp21 = closure_18(View, obj6);
          cResult[13] = tmp4.header;
          cResult[14] = tmp7;
          cResult[15] = tmp14;
          cResult[16] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj7 = { style: animatedStyle, variant: "text-xs/medium", color: str, children: tmp11 };
      const tmp17 = closure_17(closure_19, obj7);
      cResult[9] = animatedStyle;
      cResult[10] = str;
      cResult[11] = tmp11;
      cResult[12] = tmp17;
      tmp14 = tmp17;
    }
    if (0 === diff) {
      const intl2 = numInGroup(1126).intl;
      stringResult = intl2.string(numInGroup(1126).t.yiQW1O);
    } else {
      const intl = numInGroup(1126).intl;
      const formatToPlainString = intl.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj8 = { number: "" + diff };
      const HrSDPF = numInGroup(1126).t.HrSDPF;
      stringResult = formatToPlainString(HrSDPF, obj8);
    }
    cResult[6] = 0 === diff;
    cResult[7] = diff;
    cResult[8] = stringResult;
    tmp11 = stringResult;
  }
}) : (function Header(recipientLimit) {
  let items1;
  let numInGroup;
  let str;
  let stringResult;
  let title;
  ({ title, numInGroup } = recipientLimit);
  recipientLimit = recipientLimit.recipientLimit;
  const usePersonLimitCopy = recipientLimit.usePersonLimitCopy;
  const items = [recipientLimit, numInGroup];
  const tmp = closure_20();
  const memo = react.useMemo(() => recipientLimit - (numInGroup + 1), items);
  numInGroup(4612);
  const fn = function c() {
    let num2;
    let withTiming2;
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (numInGroup >= 5) {
      num = 1;
    }
    const obj = { opacity: withTiming(num), maxHeight: withTiming2(num2) };
    num2 = 0;
    withTiming2 = timing.withTiming;
    timing;
    if (numInGroup >= 5) {
      num2 = 20;
    }
    return obj;
  };
  __closure = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4891).withTiming };
  fn.__closure = __closure;
  fn.__workletHash = 13552103795459;
  fn.__initData = __initData2;
  if (usePersonLimitCopy) {
    let num2 = 1;
    const obj2 = { title, memberCount: numInGroup + 1, recipientLimit };
    return closure_17(recipientLimit(16933), obj2);
  } else {
    let num = 0;
    const obj3 = { style: tmp.header, children: items1 };
    const obj4 = { title };
    items1 = [closure_17(numInGroup(7498).GenericHeaderTitle, obj4), ];
    const obj5 = { style: tmp6, variant: "text-xs/medium", color: str, children: stringResult };
    str = "text-muted";
    if (0 === memo) {
      str = "text-feedback-critical";
    }
    const intl = numInGroup(1126).intl;
    if (0 === memo) {
      stringResult = intl.string(numInGroup(1126).t.yiQW1O);
    } else {
      const formatToPlainString = intl.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj6 = { number: "" + memo };
      const HrSDPF = numInGroup(1126).t.HrSDPF;
      stringResult = formatToPlainString(HrSDPF, obj6);
    }
    items1[1] = closure_17(closure_19, obj5);
    return closure_18(View, obj3);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatPreview(channelId) {
  let items1;
  let tmp6;
  let tmp7;
  let tmpResult;
  const tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(13);
  channelId = channelId.channelId;
  const tagListInputRef = channelId.tagListInputRef;
  const navigateToChannel = channelId.navigateToChannel;
  const tmp4 = closure_20();
  const ref = react.useRef(null);
  if (cResult[0] !== channelId) {
    const fn = function n() {
      if (null != channelId) {
        const obj = ChannelActionCreatorsDefault;
        obj.preload(closure_15, tmp);
      }
    };
    const items = [channelId];
    cResult[0] = channelId;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  closure_26(channelId, navigateToChannel);
  if (cResult[3] === channelId) {
    let tmp10;
    let tmp13;
    if (cResult[4] === tagListInputRef) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { portal: tmpResult.isAndroid() };
      const PortalKeyboardRenderer = tmp(16605).PortalKeyboardRenderer;
      tmpResult = tmp(1369);
      const tmp15 = closure_17(PortalKeyboardRenderer, obj3);
      cResult[6] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      let tmp16;
      if (cResult[8] === tmp10) {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp4.background) {
        let tmp20;
        if (cResult[11] === tmp16) {
          tmp20 = cResult[12];
        }
        return tmp20;
      }
      const obj4 = { style: tmp4.background, children: tmp16 };
      const tmp23 = closure_17(View, obj4);
      cResult[10] = tmp4.background;
      cResult[11] = tmp16;
      cResult[12] = tmp23;
      tmp20 = tmp23;
    }
    const obj5 = { style: tmp4.container, children: items1 };
    items1 = [tmp10, tmp13];
    const tmp19 = closure_18(View, obj5);
    cResult[7] = tmp4.container;
    cResult[8] = tmp10;
    cResult[9] = tmp19;
    tmp16 = tmp19;
  }
  const obj6 = { guildId, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: tagListInputRef };
  const tmp11 = closure_17(ChatViewDefault, obj6);
  cResult[3] = channelId;
  cResult[4] = tagListInputRef;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function ChatPreview(channelId) {
  let items1;
  let navigateToChannel;
  let obj2;
  let obj5;
  let tagListInputRef;
  channelId = channelId.channelId;
  ({ navigateToChannel, tagListInputRef } = channelId);
  const tmp = closure_20();
  const items = [channelId];
  const ref = react.useRef(null);
  const effect = react.useEffect(() => {
    if (null != channelId) {
      const obj = ChannelActionCreatorsDefault;
      obj.preload(closure_15, tmp);
    }
  }, items);
  closure_26(channelId, navigateToChannel);
  let obj = { style: tmp.background, children: closure_18(View, obj2) };
  obj2 = { style: tmp.container, children: items1 };
  items1 = [, ];
  const obj3 = { guildId, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: tagListInputRef };
  items1[0] = closure_17(ChatViewDefault, obj3);
  const obj4 = { portal: obj5.isAndroid() };
  const PortalKeyboardRenderer = channelId(16605).PortalKeyboardRenderer;
  obj5 = channelId(1369);
  items1[1] = closure_17(PortalKeyboardRenderer, obj4);
  return closure_17(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewMessageScreen(navigation) {
  let addFriendsButtonContainer;
  let closure_3;
  let defaultSelectedUserId;
  let emptyContainer;
  let first;
  let first1;
  let relationshipCount;
  let sourcePage;
  let tmp10;
  let tmp14;
  let tmp16;
  let tmp19;
  let tmp22;
  let tmp8;
  const tmp = navigation;
  let tmp2 = first1;
  let obj = navigation(first1[18]);
  const cResult = obj.c(84);
  navigation = navigation.navigation;
  ({ defaultSelectedUserId, sourcePage } = navigation.route.params);
  const tmp4 = closure_20();
  const tmp6 = sourcePage(first1[30]);
  const analyticsLocations = tmp6(sourcePage(first1[31]).NEW_MESSAGE_COMPOSER).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = sourcePage(tmp2[32])(first).insets;
  if (cResult[1] !== sourcePage) {
    const fn = function y() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source_page: sourcePage };
      obj.track(constants.MESSAGE_COMPOSER_OPENED, obj2);
    };
    cResult[1] = sourcePage;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  sourcePage(tmp2[33])(tmp8);
  if (cResult[3] !== defaultSelectedUserId) {
    let items1;
    if (null != defaultSelectedUserId) {
      let items = [defaultSelectedUserId];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[3] = defaultSelectedUserId;
    cResult[4] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  [first1, _asyncToGenerator] = react.useState(tmp10);
  const tmp13 = _slicedToArray(react.useState(false), 2);
  [tmp14, _slicedToArray] = tmp13;
  const tmp15 = _slicedToArray(react.useState(false), 2);
  [tmp16, react] = tmp15;
  const tmp17 = closure_25(first1);
  let closure_6 = tmp17;
  const ref = react.useRef(null);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { location: "NewMessageScreen" };
    cResult[5] = obj4;
    tmp19 = obj4;
  } else {
    tmp19 = cResult[5];
  }
  const tmp5Result = sourcePage(tmp2[34]);
  const config = tmp5Result.useConfig(tmp19);
  if (cResult[6] !== config.enabled) {
    const tmp23 = sourcePage(tmp2[35])({ useNitroCapExperiment: true });
    let closure_7 = tmp23;
    const tmpResult = tmp(tmp2[36]);
    const result = tmpResult.shouldUseGroupDMParticipantLimitUI(config.enabled, tmp23);
    cResult[6] = config.enabled;
    cResult[7] = tmp23;
    cResult[8] = result;
    tmp22 = result;
  } else {
    closure_7 = cResult[7];
    tmp22 = cResult[8];
  }
  let closure_8 = tmp22;
  const tmpResult4 = tmp(tmp2[36]);
  const groupDMNitroAudience = tmpResult4.useGroupDMNitroAudience();
  if (cResult[9] === groupDMNitroAudience) {
    let tmp26;
    if (cResult[10] === config.enabled) {
      tmp26 = cResult[11];
    }
    RelationshipStore = tmp26;
    if (cResult[12] === tmp17) {
      if (cResult[13] === navigation) {
        if (cResult[14] === tmp21) {
          if (cResult[15] === first1.length) {
            let tmp27;
            let tmp28;
            let tmp31;
            if (cResult[16] === tmp22) {
              tmp27 = cResult[17];
              tmp28 = cResult[18];
            }
            const layoutEffect = react.useLayoutEffect(tmp28, tmp27);
            if (cResult[19] !== navigation) {
              function ie(arg0) {
                navigation.goBack();
                const obj = router_utils;
                obj.transitionTo(authStore3.CHANNEL(closure_15, arg0));
              }
              cResult[19] = navigation;
              cResult[20] = ie;
              tmp31 = ie;
            } else {
              tmp31 = cResult[20];
            }
            let closure_10 = tmp31;
            if (cResult[21] === tmp31) {
              if (cResult[22] === tmp21) {
                if (cResult[23] === first1) {
                  let tmp36;
                  let tmp44;
                  let tmp43;
                  const _Symbol = Symbol;
                  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                    function le() {
                      react((arg0) => !arg0);
                    }
                    cResult[26] = le;
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    function ce(arg0) {
                      react(false);
                      _slicedToArray(arg0.length > 0);
                    }
                    cResult[27] = ce;
                  }
                  if (cResult[28] !== first1) {
                    const joined = first1.join(":");
                    cResult[28] = first1;
                    cResult[29] = joined;
                    tmp36 = joined;
                  } else {
                    tmp36 = cResult[29];
                  }
                  if (!tmp14) {
                    if (!tmp16) {
                      if (first1.length > 0) {
                        let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp17;
                        if (null == tmp17) {
                          FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp(tmp2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        }
                        let obj5 = { channelId: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, navigateToChannel: tmp31, tagListInputRef: ref };
                        const tmp42 = closure_17(closure_30, obj5, tmp36);
                        cResult[30] = tmp31;
                        cResult[31] = tmp36;
                        cResult[32] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                        cResult[33] = tmp42;
                      }
                    }
                  }
                  const _Symbol3 = Symbol;
                  const length = first1.length;
                  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                    const items2 = [RelationshipStore];
                    class Ae {
                      constructor() {
                        return relationshipCount.getRelationshipCount() > 0;
                      }
                    }
                    cResult[34] = items2;
                    cResult[35] = Ae;
                    tmp44 = Ae;
                    tmp43 = items2;
                  } else {
                    tmp43 = cResult[34];
                    tmp44 = cResult[35];
                  }
                  const tmpResult5 = tmp(tmp2[21]);
                  const stateFromStores = tmpResult5.useStateFromStores(tmp43, tmp44);
                  if (cResult[36] === 0 === length) {
                    if (cResult[37] === stateFromStores) {
                      let tmp58;
                      const _Symbol6 = Symbol;
                      class Ae {
                        constructor() {
                          return relationshipCount.getRelationshipCount() > 0;
                        }
                      }
                      if (cResult[47] !== navigation) {
                        let obj6 = {
                          icon: sourcePage(tmp2[43]),
                          IconComponent: tmp(tmp2[44]).UserPlusIcon,
                          label: null,
                          iconVariant: "default",
                          onPress() {
                                                  navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
                                                }
                        };
                        class Ae {
                          constructor() {
                            return relationshipCount.getRelationshipCount() > 0;
                          }
                        }
                        const items3 = [obj6];
                        cResult[47] = navigation;
                        cResult[48] = items3;
                      }
                      if (cResult[49] !== insets.bottom) {
                        let obj7 = { paddingBottom: insets.bottom };
                        class Ae {
                          constructor() {
                            return relationshipCount.getRelationshipCount() > 0;
                          }
                        }
                        cResult[50] = obj7;
                        tmp58 = obj7;
                      } else {
                        tmp58 = cResult[50];
                      }
                      if (cResult[51] === tmp4.emptyKeyboardView) {
                        let tmp59;
                        let tmp63;
                        let tmp65;
                        if (cResult[52] === tmp58) {
                          tmp59 = cResult[53];
                        }
                        const _Symbol7 = Symbol;
                        class Ae {
                          constructor() {
                            return relationshipCount.getRelationshipCount() > 0;
                          }
                        }
                        const _Symbol8 = Symbol;
                        ({ emptyContainer, addFriendsButtonContainer } = tmp4);
                        if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = tmp(tmp2[27]).intl;
                          const stringResult = intl2.string(tmp(tmp2[27]).t.zIJnA6);
                          class Ae {
                            constructor() {
                              return relationshipCount.getRelationshipCount() > 0;
                            }
                          }
                          cResult[56] = stringResult;
                          tmp63 = stringResult;
                        } else {
                          tmp63 = cResult[56];
                        }
                        if (cResult[57] !== navigation) {
                          let obj8 = { text: tmp63, size: "lg", onPress: null, grow: true };
                          class Ae {
                            constructor() {
                              return relationshipCount.getRelationshipCount() > 0;
                            }
                          }
                          const tmp67 = closure_17(tmp(tmp2[45]).Button, obj8);
                          cResult[57] = navigation;
                          cResult[58] = tmp67;
                          tmp65 = tmp67;
                        } else {
                          tmp65 = cResult[58];
                        }
                        if (cResult[59] === tmp4.addFriendsButtonContainer) {
                          let tmp68;
                          if (cResult[60] === tmp65) {
                            tmp68 = cResult[61];
                          }
                          if (cResult[62] === tmp4.emptyContainer) {
                            let tmp72;
                            if (cResult[63] === tmp68) {
                              tmp72 = cResult[64];
                            }
                            if (cResult[65] === tmp59) {
                              const sum = first1.length + 1;
                              class Ae {
                                constructor() {
                                  return relationshipCount.getRelationshipCount() > 0;
                                }
                              }
                              let obj9 = { location: "NewMessageScreen", memberCount: sum, recipientLimit: tmp21 };
                              cResult[68] = tmp21;
                              cResult[69] = sum;
                              cResult[70] = closure_17(sourcePage(tmp2[47]), obj9);
                              const tmp82 = closure_17(sourcePage(tmp2[47]), obj9);
                            }
                            class Ae {
                              constructor() {
                                return relationshipCount.getRelationshipCount() > 0;
                              }
                            }
                            let obj10 = { style: tmp59, children: tmp72 };
                            cResult[65] = tmp59;
                            cResult[66] = tmp72;
                            cResult[67] = closure_17(closure_6, obj10);
                            const tmp78 = closure_17(closure_6, obj10);
                          }
                          class Ae {
                            constructor() {
                              return relationshipCount.getRelationshipCount() > 0;
                            }
                          }
                          tmp74[0] = tmp61;
                          tmp74[1] = tmp62;
                          tmp74[2] = emptyContainer;
                          tmp74[4] = tmp68;
                          const tmp75 = closure_17(sourcePage(tmp2[46]), tmp74);
                          cResult[62] = tmp4.emptyContainer;
                          cResult[63] = tmp68;
                          cResult[64] = tmp75;
                          tmp72 = tmp75;
                        }
                        let obj11 = { style: addFriendsButtonContainer, children: tmp65 };
                        const tmp71 = closure_17(closure_6, obj11);
                        cResult[59] = tmp4.addFriendsButtonContainer;
                        cResult[60] = tmp65;
                        cResult[61] = tmp71;
                        tmp68 = tmp71;
                      }
                      const items4 = [tmp4.emptyKeyboardView, tmp58];
                      cResult[51] = tmp4.emptyKeyboardView;
                      cResult[52] = tmp58;
                      cResult[53] = items4;
                      tmp59 = items4;
                    }
                  }
                  const items5 = [];
                  if (0 === length) {
                    let tmp54;
                    if (stateFromStores) {
                      const _Symbol4 = Symbol;
                      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl = tmp(tmp2[27]).intl;
                        const stringResult1 = intl.string(tmp(tmp2[27]).t["3hF1W4"]);
                        class Ae {
                          constructor() {
                            return relationshipCount.getRelationshipCount() > 0;
                          }
                        }
                        cResult[40] = stringResult1;
                      }
                      class Ae {
                        constructor() {
                          return relationshipCount.getRelationshipCount() > 0;
                        }
                      }
                      items5.push(tmp51);
                    }
                    const _Symbol5 = Symbol;
                    class Ae {
                      constructor() {
                        return relationshipCount.getRelationshipCount() > 0;
                      }
                    }
                    if (cResult[44] !== navigation) {
                      let obj12 = {
                        icon: sourcePage(tmp2[43]),
                        IconComponent: tmp(tmp2[44]).UserPlusIcon,
                        label: null,
                        iconVariant: "default",
                        onPress() {
                                              navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
                                            }
                      };
                      class Ae {
                        constructor() {
                          return relationshipCount.getRelationshipCount() > 0;
                        }
                      }
                      cResult[44] = navigation;
                      cResult[45] = obj12;
                      tmp54 = obj12;
                    } else {
                      tmp54 = cResult[45];
                    }
                    items5.push(tmp54);
                  }
                  cResult[36] = 0 === length;
                  cResult[37] = stateFromStores;
                  cResult[38] = navigation;
                  cResult[39] = items5;
                }
              }
            }
            let closure_0 = _asyncToGenerator(async (arg0) => {
              let closure_2;
              let obj4;
              let v1;
              closure_0 = arg0;
              if (c4 === 2) {
                c4 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp5 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c4 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      let closure_1 = tmp2;
                      closure_0 = undefined;
                      if (closure_0 instanceof closure_2_7) {
                        const obj9 = sourcePage(first1[22]);
                        obj9.track(constants.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
                        closure_1_10(closure_0.id);
                        c4 = 3;
                        const obj5 = { value: undefined, done: true };
                        return obj5;
                      } else if (friend.isFriend(closure_0.id)) {
                        const index = tmp.indexOf(tmp51.id);
                        const items = [];
                        HermesBuiltin.arraySpread(items, tmp, 0);
                        if (-1 === index) {
                          if (tmp.length >= closure_1_7 - 1) {
                            if (closure_1_9) {
                              sourcePage(first1[39])("NewMessageScreen");
                            } else {
                              const obj6 = closure_0(first1[40]);
                              obj6.showMaxGroupMembers();
                            }
                            const obj7 = sourcePage(first1[22]);
                            obj7.track(constants.MESSAGE_COMPOSER_MAX_USERS_ADDED);
                            c4 = 3;
                            const obj8 = { value: undefined, done: true };
                            return obj8;
                          } else {
                            items.push(closure_0.id);
                          }
                        } else {
                          items.splice(index, 1);
                        }
                        v1(items);
                        closure_1_5(false);
                        c4 = 3;
                        return { value: "IconComponent", done: null };
                      } else {
                        v1 = 1;
                        c4 = 1;
                        const obj10 = { value: obj4.getOrEnsurePrivateChannel(closure_0.id), done: false };
                        obj4 = sourcePage(first1[16]);
                        return obj10;
                      }
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj11 = { value, done: true };
                    return obj11;
                  } else {
                    closure_0 = value;
                    const obj = sourcePage(first1[22]);
                    obj.track(constants.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
                    closure_1_10(closure_0);
                    c4 = 3;
                    const obj12 = { value: undefined, done: true };
                    return obj12;
                  }
                } catch (tmp47) {
                  c4 = 3;
                  throw tmp47;
                }
              }
            });
            function t12(arg0) {
              return closure_0(...arguments);
            }
            cResult[21] = tmp31;
            cResult[22] = tmp21;
            cResult[23] = first1;
            cResult[24] = tmp26;
            cResult[25] = t12;
          }
        }
      }
    }
    const items6 = [navigation, first1.length, tmp17, tmp21, tmp22];
    cResult[12] = tmp17;
    cResult[13] = navigation;
    cResult[14] = tmp21;
    cResult[15] = first1.length;
    cResult[16] = tmp22;
    cResult[17] = items6;
    cResult[18] = tmp29;
    tmp28 = tmp29;
    tmp27 = items6;
  }
  let enabled = config.enabled;
  if (enabled) {
    const tmpResult6 = tmp(tmp2[36]);
    enabled = tmpResult6.isGroupDMNitroUpsellAudience(groupDMNitroAudience);
  }
  cResult[9] = groupDMNitroAudience;
  cResult[10] = config.enabled;
  cResult[11] = enabled;
  tmp26 = enabled;
}) : (function NewMessageScreen(navigation) {
  let _undefined;
  let _undefined2;
  let c6;
  let c7;
  let closure_5;
  let defaultSelectedUserId;
  let items1;
  let obj5;
  let obj6;
  let source_page;
  let tmp10;
  let tmp2Result2;
  let tmp8;
  navigation = navigation.navigation;
  ({ defaultSelectedUserId, sourcePage: importDefault } = navigation.route.params);
  let selectedUserIds;
  react = undefined;
  c6 = undefined;
  c7 = undefined;
  let closure_8;
  let relationshipCount;
  let c10;
  let enabled;
  let navigateToChannel;
  let closure_13;
  let stateFromStores;
  let tmp = closure_20();
  dependencyMap = tmp;
  const tmp4 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp4(AnalyticsLocationDefault.NEW_MESSAGE_COMPOSER).analyticsLocations;
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const tmp5 = useMountEffectDefault(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { source_page: importDefault };
    obj.track(navigateToChannel.MESSAGE_COMPOSER_OPENED, obj2);
  });
  let obj = react;
  const useState = react.useState;
  if (null != defaultSelectedUserId) {
    let items = [defaultSelectedUserId];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = selectedUserIds(useState(items1), 2);
  selectedUserIds = tmp6[0];
  react = tmp6[1];
  [tmp8, c6] = selectedUserIds(obj.useState(false), 2);
  const tmp7 = selectedUserIds(obj.useState(false), 2);
  [tmp10, c7] = selectedUserIds(obj.useState(false), 2);
  selectedUserIds(obj.useState(false), 2);
  const tmp11 = closure_25(selectedUserIds);
  closure_8 = tmp11;
  const ref = obj.useRef(null);
  const tmp2Result = GroupDMNitroCapExperimentDefault;
  const config = tmp2Result.useConfig({ location: "NewMessageScreen" });
  const tmp14 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
  relationshipCount = tmp14;
  let obj3 = navigation(11213);
  const result = obj3.shouldUseGroupDMParticipantLimitUI(config.enabled, tmp14);
  c10 = result;
  navigation(11213);
  enabled = config.enabled;
  if (enabled) {
    const tmp15Result = navigation(11213);
    enabled = tmp15Result.isGroupDMNitroUpsellAudience(tmp18);
  }
  const items2 = [navigation, selectedUserIds.length, tmp11, tmp14, result];
  const layoutEffect = obj.useLayoutEffect(() => {
    let channelId;
    let length;
    let recipientLimit;
    let usePersonLimitCopy;
    let obj = {
      headerTitle(children) {
        const obj = { numInGroup: length.length, title: children.children, recipientLimit, usePersonLimitCopy };
        return closure_2_17(closure_2_29, obj);
      },
      headerRight() {
        let tmp2 = null;
        if (null !== channelId) {
          tmp2 = null;
          if (channelId !== navigation(closure_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            const obj = { channelId, screenIndex: "new-message" };
            tmp2 = closure_2_17(require("ChannelActions"), obj);
          }
        }
        return tmp2;
      }
    };
    navigation.setOptions(obj);
  }, items2);
  const items3 = [navigation];
  navigateToChannel = obj.useCallback((arg0) => {
    navigation.goBack();
    const obj = router_utils;
    obj.transitionTo(authStore3.CHANNEL(closure_15, arg0));
  }, items3);
  const useCallback = obj.useCallback;
  let closure_0 = insets(function*(arg0) {
    let obj4;
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            let closure_1 = tmp2;
            closure_0 = undefined;
            if (closure_0 instanceof _undefined2) {
              const obj9 = source_page(closure_2_2[22]);
              obj9.track(constants.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
              constants(closure_0.id);
              c4 = 3;
              const obj5 = { value: undefined, done: true };
              return obj5;
            } else if (friend.isFriend(closure_0.id)) {
              const index = c4.indexOf(tmp51.id);
              const items = [];
              HermesBuiltin.arraySpread(items, c4, 0);
              const arr = c4;
              if (-1 === index) {
                if (arr.length >= closure_1_9 - 1) {
                  if (enabled) {
                    source_page(closure_2_2[39])("NewMessageScreen");
                  } else {
                    const obj6 = closure_0(closure_2_2[40]);
                    obj6.showMaxGroupMembers();
                  }
                  const obj7 = source_page(closure_2_2[22]);
                  obj7.track(constants.MESSAGE_COMPOSER_MAX_USERS_ADDED);
                  c4 = 3;
                  const obj8 = { value: undefined, done: true };
                  return obj8;
                } else {
                  items.push(closure_0.id);
                }
              } else {
                items.splice(index, 1);
              }
              closure_1_5(items);
              closure_1_7(false);
              c4 = 3;
              return { value: "IconComponent", done: null };
            } else {
              c3 = 1;
              c4 = 1;
              const obj10 = { value: obj4.getOrEnsurePrivateChannel(closure_0.id), done: false };
              obj4 = source_page(closure_2_2[16]);
              return obj10;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_0 = value;
          const obj = source_page(closure_2_2[22]);
          obj.track(constants.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
          constants(closure_0);
          c4 = 3;
          const obj12 = { value: undefined, done: true };
          return obj12;
        }
      } catch (tmp47) {
        c4 = 3;
        throw tmp47;
      }
    }
  });
  const items4 = [selectedUserIds, navigateToChannel, tmp14, enabled];
  const callback1 = useCallback(function(arg0) {
    return closure_0(...arguments);
  }, items4);
  const callback2 = obj.useCallback(() => {
    _undefined2((arg0) => !arg0);
  }, []);
  [][0] = selectedUserIds;
  const callback3 = obj.useCallback((arg0) => {
    _undefined2(false);
    _undefined(arg0.length > 0);
  }, []);
  let tmp26Result;
  if (!tmp8) {
    if (!tmp10) {
      if (selectedUserIds.length > 0) {
        let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp11;
        if (null == tmp11) {
          FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp15(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        }
        let obj2 = { channelId: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, navigateToChannel, tagListInputRef: ref };
        tmp26Result = closure_17(closure_30, obj2, tmp24);
      }
    }
  }
  closure_13 = tmp28;
  const items5 = [relationshipCount];
  const tmp15Result2 = navigation(504);
  stateFromStores = tmp15Result2.useStateFromStores(items5, () => relationshipCount.getRelationshipCount() > 0);
  const items6 = [navigation, stateFromStores, 0 === selectedUserIds.length];
  const items7 = [navigation];
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    const items = [];
    if (constants) {
      if (stateFromStores) {
        let obj = {
          icon: AssetRegistryDefault2,
          IconComponent: GroupPlusIcon.GroupPlusIcon,
          label: intl.string(intl4.t["3hF1W4"]),
          iconVariant: "default",
          onPress() {
                const obj = { allowNameEdit: false, locationPage: constants.NEW_MESSAGE_COMPOSER };
                return navigation.navigate("gdm", obj);
              }
        };
        const push = items.push;
        intl = intl4.intl;
        push(obj);
      }
      const push2 = items.push;
      const obj2 = {
        icon: AssetRegistryDefault,
        IconComponent: UserPlusIcon.UserPlusIcon,
        label: intl2.string(intl4.t["9nbDJx"]),
        iconVariant: "default",
        onPress() {
            navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
          }
      };
      intl2 = intl4.intl;
      push2(obj2);
    }
    return items;
  }, items6);
  const items8 = [navigation, tmp, insets.bottom];
  const memo1 = obj.useMemo(() => {
    let intl;
    const obj = {
      icon: AssetRegistryDefault,
      IconComponent: UserPlusIcon.UserPlusIcon,
      label: intl.string(intl4.t["9nbDJx"]),
      iconVariant: "default",
      onPress() {
        navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
      }
    };
    intl = intl4.intl;
    const items = [obj];
    return items;
  }, items7);
  const memo2 = obj.useMemo(() => {
    let Button;
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj3;
    let obj4;
    let obj5;
    let tmp;
    const obj = { style: items, children: closure_17(tmp, obj3) };
    items = [closure_2.emptyKeyboardView, ];
    const obj2 = { paddingBottom: insets.bottom };
    items[1] = obj2;
    obj3 = { title: intl.string(intl4.t["1ESycm"]), subtitle: intl2.string(intl4.t["5IlFpu"]), containerStyle: closure_2.emptyContainer, fullHeight: true, children: closure_17(View, obj4) };
    tmp = NoResultsDefault;
    intl = intl4.intl;
    intl2 = intl4.intl;
    obj4 = { style: closure_2.addFriendsButtonContainer, children: closure_17(Button, obj5) };
    obj5 = {
      text: intl3.string(intl4.t.zIJnA6),
      size: "lg",
      onPress() {
        return navigation.navigate("add-friends", { sourcePage: "New Message Composer No Results" });
      },
      grow: true
    };
    Button = components_Button_Button.Button;
    intl3 = intl4.intl;
    return closure_17(View, obj);
  }, items8);
  let obj4 = { value: analyticsLocations, children: closure_17(tmp2Result2, obj5) };
  const AnalyticsLocationProvider = tmp15(6657).AnalyticsLocationProvider;
  obj5 = { actions: memo, noResultActions: memo1, rowMode: enabled.NONE, tagListInputRef: ref, onSelectUser: callback1, onQueryChanged: callback3, selectedUserIds, withAffinitySuggestions: true, overrideResults: tmp26Result, afterSearchContent: closure_17(GroupDMNitroUpsellBannerDefault, obj6), withGuildMembers: 0 === selectedUserIds.length, withGDMNames: true, forceSearchResults: tmp10, onForceSearchResults: callback2, defaultNoResultsFound: memo2, autoFocusSearch: true };
  obj6 = { location: "NewMessageScreen", memberCount: selectedUserIds.length + 1, recipientLimit: tmp14 };
  tmp2Result2 = NewMessageUserListDefault;
  return closure_17(AnalyticsLocationProvider, obj4);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx");

export default tmp5;