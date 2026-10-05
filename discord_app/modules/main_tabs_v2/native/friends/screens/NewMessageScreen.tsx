// === Module 16931: NewMessageScreen ===

// Module 16931 (NewMessageScreen)
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserPlusIcon from "UserPlusIcon" /* 4833 */;
import _modDef4834 from "module_4834" /* 4834 */;
import timing from "timing" /* 4891 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6722 */;
import _modDef9715 from "module_9715" /* 9715 */;
import GroupPlusIcon from "GroupPlusIcon" /* 9716 */;
import ChatViewDefault from "ChatView" /* 9760 */;
import NoResultsDefault from "NoResults" /* 10726 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11214 */;
import GroupDMNitroCapExperimentDefault from "GroupDMNitroCapExperiment" /* 11216 */;
import NewMessageUserListDefault from "NewMessageUserList" /* 11993 */;
import GroupDMNitroUpsellBannerDefault from "GroupDMNitroUpsellBanner" /* 16875 */;
import useOnMessageSendDefault from "useOnMessageSend" /* 16932 */;
import GroupDMRecipientLimitTitleDefault from "GroupDMRecipientLimitTitle" /* 16933 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6719 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;

const require = globalThis.__r;

require = fn;
function isPrivateChannelMatch(arr, channel) {
  const recipients = channel.recipients;
  if (recipients.length !== arr.length) {
    return false;
  } else {
    for (const item10009 of recipients) {
      if (arg0.includes(item10009)) {
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
  closure_0 = handleChannelCreate;
  if (1 === handleChannelCreate.length) {
    let dMFromUserId = ChannelStore.getDMFromUserId(handleChannelCreate[0]);
    if (dMFromUserId == null) {
      dMFromUserId = null;
    }
    return dMFromUserId;
  } else {
    const items = [, ];
    [arr[0], arr[1]] = PrivateChannelSortStore.getSortedChannels();
    const iter = items[Symbol.iterator]();
    const tmp3 = _slicedToArray(PrivateChannelSortStore.getSortedChannels(), 2);
    while (iter !== undefined) {
      let found = nextResult.find((channelId) => {
        const channel = ChannelStore.getChannel(channelId.channelId);
        const tmp = null == channel || !channel.isPrivate();
        let tmp2 = !tmp;
        if (!tmp) {
          tmp2 = isPrivateChannelMatch(closure_0, channel);
        }
        return tmp2;
      });
      if (null != found) {
        iter.return();
        return found.channelId;
      }
    }
    return null;
  }
}
function findMatchingPrivateChannelId() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _findMatchingPrivateChannelId(arg0) {
  if (c1 === 2) {
    c1 = 3;
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const tmp19 = findLocalMatchingPrivateChannelId(length);
          if (null != tmp19) {
            c1 = 3;
            const obj5 = { value: tmp19, done: true };
            return obj5;
          } else if (length.length > 1) {
            c1 = 3;
            return { value: null, done: true };
          } else {
            c4 = 1;
            c2 = 2;
            c1 = 1;
            const obj6 = { value: ChannelActionCreatorsDefault.getDMChannel(length[0]), done: false };
            return obj6;
          }
        }
      } else if (1 === tmp6) {
        c4 = 0;
        c1 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c1 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c4 = 0;
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp10) {
      closure_3 = tmp10;
      if (tmp3 === c4) {
        c1 = tmp2;
        throw tmp10;
      } else {
        c2 = tmp;
      }
    }
  }
};
const View = fn(17).View;
const PrivateChannelRecord = fn(2055).PrivateChannelRecord;
const UserRowModes = fn(10592).UserRowModes;
const Constants = fn(1085);
({ AnalyticEvents: closure_12, AnalyticsSections: map1, ChannelTypes: closure_14, ME: closure_15, Routes: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(4886).Text);
const createStyles = fn(4890);
let obj = { container: { flex: 1 }, background: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, header: null, emptyContainer: null, emptyKeyboardView: null, addFriendsButtonContainer: null };
const PlatformUtils = fn(1369);
let str = "center";
if (PlatformUtils.isAndroid()) {
  str = "flex-start";
}
obj.header = { flexDirection: "column", alignItems: str };
obj.emptyContainer = { flexGrow: 1, justifyContent: "center" };
obj.emptyKeyboardView = { flexGrow: 1 };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.addFriendsButtonContainer = { marginBottom: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center", width: "100%" };
let closure_20 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(17);
  [first, dependencyMap] = noop.useState(null);
  if (cResult[0] !== arg0) {
    const fn = function c() {
      function handleChannelCreate(channel) {
        channel = channel.channel;
        if (channel.id !== handleChannelCreate(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          if (channel.isPrivate()) {
            if (isPrivateChannelMatch(handleChannelCreate, channel)) {
              dependencyMap(findLocalMatchingPrivateChannelId(handleChannelCreate));
            }
          }
        }
      }
      function handleChannelDelete(arg0) {
        const channel = arg0;
        dependencyMap((arg0) => {
          let tmp = arg0;
          if (arg0 !== handleChannelCreate(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            let tmp3 = null;
            if (arg0 !== channel.channel.id) {
              tmp3 = arg0;
            }
            tmp = tmp3;
          }
          return tmp;
        });
      }
      const subscription = first(584).subscribe("CHANNEL_CREATE", handleChannelCreate);
      let obj = first(584);
      const subscription1 = first(584).subscribe("CHANNEL_DELETE", handleChannelDelete);
      return () => {
        DispatcherDefault.unsubscribe("CHANNEL_CREATE", handleChannelCreate);
        DispatcherDefault.unsubscribe("CHANNEL_DELETE", handleChannelDelete);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== first) {
    const fn2 = function h() {
      return ChannelStore.getChannel(first);
    };
    cResult[4] = first;
    cResult[5] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp11);
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === arg0) {
      let tmp13 = cResult[8];
      let tmp14 = cResult[9];
    }
    const effect1 = noop.useEffect(tmp13, tmp14);
    if (cResult[10] === first) {
      if (cResult[11] === arg0) {
        let tmp16 = cResult[12];
        let tmp17 = cResult[13];
      }
      const effect2 = noop.useEffect(tmp16, tmp17);
      if (cResult[14] !== stateFromStores) {
        class L {
          constructor() {
            tmp = closure_3;
            tmp2 = null != closure_3;
            if (tmp2) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              tmp2 = tmp.id === closure_0(closure_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            }
            if (tmp2) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              obj = closure_1(closure_2[20]);
              obj1 = { type: "LOAD_MESSAGES_SUCCESS", channelId: null, messages: null, isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: "Set", isStale: "New Message Composer" };
              obj1.channelId = tmp.id;
              obj1.messages = [];
              dispatchResult = obj.dispatch(obj1);
            }
            return;
          }
        }
        const items2 = [stateFromStores];
        class R {
          constructor() {
            if (null == closure_1) {
              tmp4 = findLocalMatchingPrivateChannelId;
              arr = closure_0;
              num = 0;
              if (null == findLocalMatchingPrivateChannelId(closure_0)) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[20]);
                obj1 = { id: null, type: null, name: "", guild_id: null, recipients: null };
                tmp8 = closure_0;
                tmp9 = closure_2;
                tmp7 = PrivateChannelRecord;
                obj1.id = closure_0(closure_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                num2 = 1;
                if (1 === arr.length) {
                  tmp11 = ChannelTypes;
                  GROUP_DM = ChannelTypes.DM;
                } else {
                  tmp10 = ChannelTypes;
                  GROUP_DM = ChannelTypes.GROUP_DM;
                }
                obj4 = { type: "CHANNEL_CREATE", channel: null };
                obj1.type = GROUP_DM;
                obj1.recipients = arr;
                tmp12 = new.target;
                tmp13 = new.target;
                tmp14 = obj1;
                tmp71 = new tmp7(obj1);
                tmp16 = tmp71;
                obj4.channel = tmp71;
                dispatchResult = obj.dispatch(obj4);
                return () => {
                  const obj2 = { type: "CHANNEL_DELETE", channel: null };
                  const obj = first(584);
                  obj2.channel = { id: length(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" };
                  obj.dispatch(obj2);
                };
              }
            } else {
              tmp2 = closure_0;
              tmp3 = closure_2;
            }
            return;
          }
        }
        cResult[14] = stateFromStores;
        cResult[15] = L;
        cResult[16] = items2;
      } else {
        class L {
          constructor() {
            tmp = closure_3;
            tmp2 = null != closure_3;
            if (tmp2) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              tmp2 = tmp.id === closure_0(closure_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            }
            if (tmp2) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              obj = closure_1(closure_2[20]);
              obj1 = { type: "LOAD_MESSAGES_SUCCESS", channelId: null, messages: null, isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: "Set", isStale: "New Message Composer" };
              obj1.channelId = tmp.id;
              obj1.messages = [];
              dispatchResult = obj.dispatch(obj1);
            }
            return;
          }
        }
      }
      class R {
        constructor() {
          if (null == closure_1) {
            tmp4 = findLocalMatchingPrivateChannelId;
            arr = closure_0;
            num = 0;
            if (null == findLocalMatchingPrivateChannelId(closure_0)) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              obj = closure_1(closure_2[20]);
              obj1 = { id: null, type: null, name: "", guild_id: null, recipients: null };
              tmp8 = closure_0;
              tmp9 = closure_2;
              tmp7 = PrivateChannelRecord;
              obj1.id = closure_0(closure_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              num2 = 1;
              if (1 === arr.length) {
                tmp11 = ChannelTypes;
                GROUP_DM = ChannelTypes.DM;
              } else {
                tmp10 = ChannelTypes;
                GROUP_DM = ChannelTypes.GROUP_DM;
              }
              obj4 = { type: "CHANNEL_CREATE", channel: null };
              obj1.type = GROUP_DM;
              obj1.recipients = arr;
              tmp12 = new.target;
              tmp13 = new.target;
              tmp14 = obj1;
              tmp71 = new tmp7(obj1);
              tmp16 = tmp71;
              obj4.channel = tmp71;
              dispatchResult = obj.dispatch(obj4);
              return () => {
                const obj2 = { type: "CHANNEL_DELETE", channel: null };
                const obj = first(584);
                obj2.channel = { id: length(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" };
                obj.dispatch(obj2);
              };
            }
          } else {
            tmp2 = closure_0;
            tmp3 = closure_2;
          }
          return;
        }
      }
      return first;
    }
    class R {
      constructor() {
        if (null == closure_1) {
          tmp4 = findLocalMatchingPrivateChannelId;
          arr = closure_0;
          num = 0;
          if (null == findLocalMatchingPrivateChannelId(closure_0)) {
            tmp5 = closure_1;
            tmp6 = closure_2;
            obj = closure_1(closure_2[20]);
            obj1 = { id: null, type: null, name: "", guild_id: null, recipients: null };
            tmp8 = closure_0;
            tmp9 = closure_2;
            tmp7 = PrivateChannelRecord;
            obj1.id = closure_0(closure_2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            num2 = 1;
            if (1 === arr.length) {
              tmp11 = ChannelTypes;
              GROUP_DM = ChannelTypes.DM;
            } else {
              tmp10 = ChannelTypes;
              GROUP_DM = ChannelTypes.GROUP_DM;
            }
            obj4 = { type: "CHANNEL_CREATE", channel: null };
            obj1.type = GROUP_DM;
            obj1.recipients = arr;
            tmp12 = new.target;
            tmp13 = new.target;
            tmp14 = obj1;
            tmp71 = new tmp7(obj1);
            tmp16 = tmp71;
            obj4.channel = tmp71;
            dispatchResult = obj.dispatch(obj4);
            return () => {
              const obj2 = { type: "CHANNEL_DELETE", channel: null };
              const obj = first(584);
              obj2.channel = { id: length(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" };
              obj.dispatch(obj2);
            };
          }
        } else {
          tmp2 = closure_0;
          tmp3 = closure_2;
        }
        return;
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
    if (0 !== length.length) {
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = stateFromStores.isPrivate();
      }
      if (!isPrivateResult) {
        (function doAction() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
        length = stateFromStores(function*() {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
                  closure_1 = tmp5;
                  closure_128_0 = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: findMatchingPrivateChannelId(tmp2), done: false };
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
                closure_128_0 = value;
                if (null == closure_128_0) {
                  let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp2(dependencyMap[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                } else {
                  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = closure_128_0;
                }
                c2(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID);
                c3 = 3;
              }
            } catch (tmp18) {
              c3 = tmp;
              throw tmp18;
            }
          }
        });
      }
    } else {
      dependencyMap(null);
    }
  };
  const items4 = [arg0, stateFromStores];
  cResult[6] = stateFromStores;
  cResult[7] = arg0;
  cResult[8] = fn3;
  cResult[9] = items4;
  tmp14 = items4;
  tmp13 = fn3;
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  [first, dependencyMap] = noop.useState(null);
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function handleChannelCreate(channel) {
      channel = channel.channel;
      if (channel.id !== handleChannelCreate(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        if (channel.isPrivate()) {
          if (isPrivateChannelMatch(handleChannelCreate, channel)) {
            dependencyMap(findLocalMatchingPrivateChannelId(handleChannelCreate));
          }
        }
      }
    }
    function handleChannelDelete(arg0) {
      const channel = arg0;
      dependencyMap((arg0) => {
        let tmp = arg0;
        if (arg0 !== handleChannelCreate(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          let tmp3 = null;
          if (arg0 !== channel.channel.id) {
            tmp3 = arg0;
          }
          tmp = tmp3;
        }
        return tmp;
      });
    }
    const subscription = first(584).subscribe("CHANNEL_CREATE", handleChannelCreate);
    let obj = first(584);
    const subscription1 = first(584).subscribe("CHANNEL_DELETE", handleChannelDelete);
    return () => {
      DispatcherDefault.unsubscribe("CHANNEL_CREATE", handleChannelCreate);
      DispatcherDefault.unsubscribe("CHANNEL_DELETE", handleChannelDelete);
    };
  }, items);
  const items1 = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(first));
  const items2 = [arg0, stateFromStores];
  const effect1 = noop.useEffect(() => {
    const length = async function _doAction2() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: findMatchingPrivateChannelId(closure_0), done: false };
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
            closure_128_0 = value;
            if (null == closure_128_0) {
              let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = recipients(dependencyMap[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            } else {
              FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = closure_128_0;
            }
            c2(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID);
            c3 = 3;
          }
        } catch (tmp18) {
          c3 = tmp;
          throw tmp18;
        }
      }
    };
    if (0 !== length.length) {
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = stateFromStores.isPrivate();
      }
      if (isPrivateResult) {
        isPrivateResult = isPrivateChannelMatch(tmp, stateFromStores);
      }
      if (!isPrivateResult) {
        (function doAction() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
    } else {
      dependencyMap(null);
    }
  }, items2);
  const items3 = [arg0, first];
  const effect2 = noop.useEffect(() => {
    if (null == first) {
      if (null == findLocalMatchingPrivateChannelId(recipients)) {
        let obj2 = { id: FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, type: null, name: "", guild_id: null, recipients: null };
        if (1 === recipients.length) {
          let GROUP_DM = constants3.DM;
        } else {
          GROUP_DM = constants3.GROUP_DM;
        }
        const obj3 = { type: "CHANNEL_CREATE", channel: null };
        obj2.type = GROUP_DM;
        obj2.recipients = recipients;
        const tmp72 = new PrivateChannelRecord(obj2);
        obj3.channel = tmp72;
        DispatcherDefault.dispatch(obj3);
        return () => {
          const obj2 = { type: "CHANNEL_DELETE", channel: null };
          const obj = first(584);
          obj2.channel = { id: length(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "toCharArray$esjava$1" };
          obj.dispatch(obj2);
        };
      }
    }
  }, items3);
  const items4 = [stateFromStores];
  const effect3 = noop.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = stateFromStores.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    }
    if (tmp2) {
      const obj2 = { type: "LOAD_MESSAGES_SUCCESS", channelId: stateFromStores.id, messages: [], isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: "Set", isStale: "New Message Composer" };
      DispatcherDefault.dispatch(obj2);
    }
  }, items4);
  return first;
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRedirectToChannelOnMessage(channel_id, arg1) {
  _require = channel_id;
  importDefault = arg1;
  const cResult = require("c").c(3);
  if (cResult[0] === channel_id) {
    if (cResult[1] === arg1) {
      let tmp3 = cResult[2];
    }
    useOnMessageSendDefault(tmp3);
  }
  const fn = function t() {
    AnalyticsUtilsDefault.track(constants.MESSAGE_COMPOSER_TRANSITIONED, { channel_id });
    closure_1(channel_id);
  };
  cResult[0] = channel_id;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp3 = fn;
  const obj = require("c");
}) : (function useRedirectToChannelOnMessage(channel_id, arg1) {
  importDefault = arg1;
  const items = [channel_id, arg1];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.MESSAGE_COMPOSER_TRANSITIONED, { channel_id });
    closure_1(channel_id);
  }, items);
  useOnMessageSendDefault(callback);
});
const __initData = { code: "function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}" };
const __initData2 = { code: "function NewMessageScreenTsx2(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}" };
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function Header(recipientLimit) {
  const cResult = numInGroup(576).c(17);
  ({ title, numInGroup } = recipientLimit);
  recipientLimit = recipientLimit.recipientLimit;
  const tmp4 = closure_20();
  const diff = recipientLimit - (numInGroup + 1);
  let obj = numInGroup(576);
  const fn = function n() {
    let num = 0;
    if (numInGroup >= 5) {
      num = 1;
    }
    const obj2 = { opacity: timing.withTiming(num), maxHeight: null };
    let num2 = 0;
    if (numInGroup >= 5) {
      num2 = 20;
    }
    obj2.maxHeight = timing.withTiming(num2);
    return obj2;
  };
  let obj2 = numInGroup(4612);
  fn.__closure = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4891).withTiming };
  fn.__workletHash = 12426216833792;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (recipientLimit.usePersonLimitCopy) {
    const sum = numInGroup + 1;
    if (cResult[0] === recipientLimit) {
      if (cResult[1] === sum) {
        if (cResult[2] === title) {
          let tmp24 = cResult[3];
        }
        return tmp24;
      }
    }
    const obj4 = { title, memberCount: sum, recipientLimit };
    const tmp27 = closure_17(GroupDMRecipientLimitTitleDefault, obj4);
    cResult[0] = recipientLimit;
    cResult[1] = sum;
    cResult[2] = title;
    cResult[3] = tmp27;
    tmp24 = tmp27;
  } else {
    if (cResult[4] !== title) {
      const obj5 = { title };
      const tmp9 = closure_17(numInGroup(7498).GenericHeaderTitle, obj5);
      cResult[4] = title;
      cResult[5] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[5];
    }
    let str = "text-muted";
    if (0 === diff) {
      str = "text-feedback-critical";
    }
    if (cResult[6] === 0 === diff) {
      if (cResult[7] === diff) {
        if (cResult[9] === animatedStyle) {
          if (cResult[10] === str) {
            if (cResult[11] === tmp11) {
              let tmp15 = cResult[12];
            }
            if (cResult[13] === tmp4.header) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp15) {
                  let tmp19 = cResult[16];
                }
                return tmp19;
              }
            }
            const obj6 = { style: tmp4.header, children: null };
            const items = [tmp7, tmp15];
            obj6.children = items;
            const tmp22 = closure_18(View, obj6);
            cResult[13] = tmp4.header;
            cResult[14] = tmp7;
            cResult[15] = tmp15;
            cResult[16] = tmp22;
            tmp19 = tmp22;
          }
        }
        const obj7 = { style: animatedStyle, variant: "text-xs/medium", color: str, children: cResult[8] };
        const tmp18 = closure_17(closure_19, obj7);
        cResult[9] = animatedStyle;
        cResult[10] = str;
        cResult[11] = cResult[8];
        cResult[12] = tmp18;
        tmp15 = tmp18;
      }
    }
    if (0 === diff) {
      const intl2 = numInGroup(1126).intl;
      let stringResult = intl2.string(numInGroup(1126).t.yiQW1O);
    } else {
      const intl = numInGroup(1126).intl;
      const obj8 = { number: null };
      const _HermesInternal = HermesInternal;
      obj8.number = "" + diff;
      stringResult = intl.formatToPlainString(numInGroup(1126).t.HrSDPF, obj8);
    }
    cResult[6] = 0 === diff;
    cResult[7] = diff;
    cResult[8] = stringResult;
  }
  const obj3 = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4891).withTiming };
}) : (function Header(recipientLimit) {
  ({ title, numInGroup } = recipientLimit);
  recipientLimit = recipientLimit.recipientLimit;
  const items = [recipientLimit, numInGroup];
  const memo = noop.useMemo(() => recipientLimit - (numInGroup + 1), items);
  numInGroup(4612);
  const fn = function c() {
    let num = 0;
    if (numInGroup >= 5) {
      num = 1;
    }
    const obj2 = { opacity: timing.withTiming(num), maxHeight: null };
    let num2 = 0;
    if (numInGroup >= 5) {
      num2 = 20;
    }
    obj2.maxHeight = timing.withTiming(num2);
    return obj2;
  };
  const tmp = closure_20();
  fn.__closure = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4891).withTiming };
  fn.__workletHash = 13552103795459;
  fn.__initData = __initData2;
  if (recipientLimit.usePersonLimitCopy) {
    let obj2 = { title, memberCount: numInGroup + 1, recipientLimit };
    return closure_17(recipientLimit(16933), obj2);
  } else {
    const obj3 = { style: tmp.header, children: null };
    const obj4 = { title };
    const items1 = [closure_17(numInGroup(7498).GenericHeaderTitle, obj4), ];
    const obj5 = { style: tmp6, variant: "text-xs/medium", color: null, children: null };
    let str = "text-muted";
    if (0 === memo) {
      str = "text-feedback-critical";
    }
    obj5.color = str;
    const intl = numInGroup(1126).intl;
    if (0 === memo) {
      let stringResult = intl.string(numInGroup(1126).t.yiQW1O);
    } else {
      const obj6 = { number: null };
      const _HermesInternal = HermesInternal;
      obj6.number = "" + memo;
      stringResult = intl.formatToPlainString(numInGroup(1126).t.HrSDPF, obj6);
    }
    obj5.children = stringResult;
    items1[1] = closure_17(closure_19, obj5);
    obj3.children = items1;
    return closure_18(View, obj3);
  }
  let obj = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4891).withTiming };
});
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatPreview(channelId) {
  const cResult = channelId(576).c(13);
  channelId = channelId.channelId;
  const tagListInputRef = channelId.tagListInputRef;
  const tmp4 = closure_20();
  let obj = channelId(576);
  if (cResult[0] !== channelId) {
    const fn = function n() {
      if (null != channelId) {
        ChannelActionCreatorsDefault.preload(guildId, tmp);
      }
    };
    const items = [channelId];
    cResult[0] = channelId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  closure_26(channelId, channelId.navigateToChannel);
  if (cResult[3] === channelId) {
    if (cResult[4] === tagListInputRef) {
      let tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { portal: tmp(1369).isAndroid() };
      const tmp15 = closure_17(tmp(16605).PortalKeyboardRenderer, obj3);
      cResult[6] = tmp15;
      let tmp13 = tmp15;
      const tmpResult = tmp(1369);
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp10) {
        let tmp16 = cResult[9];
      }
      if (cResult[10] === tmp4.background) {
        if (cResult[11] === tmp16) {
          let tmp20 = cResult[12];
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
    const obj5 = { style: tmp4.container, children: null };
    const items1 = [tmp10, tmp13];
    obj5.children = items1;
    const tmp19 = closure_18(View, obj5);
    cResult[7] = tmp4.container;
    cResult[8] = tmp10;
    cResult[9] = tmp19;
    tmp16 = tmp19;
  }
  const ref = noop.useRef(null);
  const tmp11 = closure_17(ChatViewDefault, { guildId, channelId, chatInputRef: noop.useRef(null), HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: tagListInputRef });
  cResult[3] = channelId;
  cResult[4] = tagListInputRef;
  cResult[5] = tmp11;
  tmp10 = tmp11;
  const obj6 = { guildId, channelId, chatInputRef: noop.useRef(null), HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: tagListInputRef };
}) : (function ChatPreview(channelId) {
  channelId = channelId.channelId;
  ({ navigateToChannel, tagListInputRef } = channelId);
  const tmp = closure_20();
  const items = [channelId];
  const effect = noop.useEffect(() => {
    if (null != channelId) {
      ChannelActionCreatorsDefault.preload(guildId, tmp);
    }
  }, items);
  closure_26(channelId, navigateToChannel);
  let obj = { style: tmp.background, children: null };
  const obj2 = { style: tmp.container, children: null };
  const ref = noop.useRef(null);
  const items1 = [closure_17(ChatViewDefault, { guildId, channelId, chatInputRef: noop.useRef(null), HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: tagListInputRef }), ];
  const obj4 = { portal: null };
  const obj3 = { guildId, channelId, chatInputRef: noop.useRef(null), HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: tagListInputRef };
  obj4.portal = channelId(1369).isAndroid();
  items1[1] = closure_17(channelId(16605).PortalKeyboardRenderer, obj4);
  obj2.children = items1;
  obj.children = closure_18(View, obj2);
  return closure_17(View, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { marginBottom: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center", width: "100%" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NewMessageScreen(navigation) {
  const cResult = require("c").c(84);
  navigation = navigation.navigation;
  _require = navigation;
  ({ defaultSelectedUserId, sourcePage } = navigation.route.params);
  const tmp4 = closure_20();
  let obj = require("c");
  const analyticsLocations = sourcePage(first1[30])(sourcePage(first1[31]).NEW_MESSAGE_COMPOSER).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = sourcePage(tmp2[32])(first).insets;
  if (cResult[1] !== sourcePage) {
    const fn = function y() {
      AnalyticsUtilsDefault.track(constants.MESSAGE_COMPOSER_OPENED, { source_page: sourcePage });
    };
    cResult[1] = sourcePage;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  sourcePage(first1[33])(tmp8);
  if (cResult[3] !== defaultSelectedUserId) {
    if (null != defaultSelectedUserId) {
      let items = [defaultSelectedUserId];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[3] = defaultSelectedUserId;
    cResult[4] = items1;
  } else {
    [first1, asyncGeneratorStep] = noop.useState(cResult[4]);
    [tmp15, _slicedToArray] = noop.useState(false);
    const tmp14 = _slicedToArray(noop.useState(false), 2);
    [tmp17, noop] = noop.useState(false);
    const tmp19 = closure_25(first1);
    closure_6 = tmp19;
    const tmp16 = _slicedToArray(noop.useState(false), 2);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { location: "NewMessageScreen" };
      cResult[5] = obj4;
      let tmp22 = obj4;
    } else {
      tmp22 = cResult[5];
    }
    const ref = noop.useRef(null);
    const config = sourcePage(tmp2[34]).useConfig(tmp22);
    if (cResult[6] !== config.enabled) {
      const tmp26 = sourcePage(tmp2[35])({ useNitroCapExperiment: true });
      closure_7 = tmp26;
      const result = tmp(tmp2[36]).shouldUseGroupDMParticipantLimitUI(config.enabled, tmp26);
      cResult[6] = config.enabled;
      cResult[7] = tmp26;
      cResult[8] = result;
      let tmp25 = result;
      const tmpResult = tmp(tmp2[36]);
    } else {
      closure_7 = cResult[7];
      tmp25 = cResult[8];
    }
    closure_8 = tmp25;
    const tmp5Result = sourcePage(tmp2[34]);
    const groupDMNitroAudience = tmp(tmp2[36]).useGroupDMNitroAudience();
    if (cResult[9] === groupDMNitroAudience) {
      if (cResult[10] === config.enabled) {
        let tmp29 = cResult[11];
      }
      RelationshipStore = tmp29;
      if (cResult[12] === tmp19) {
        if (cResult[13] === navigation) {
          if (cResult[14] === tmp24) {
            if (cResult[15] === first1.length) {
              if (cResult[16] === tmp25) {
                let tmp30 = cResult[17];
                let tmp31 = cResult[18];
              }
              const layoutEffect = noop.useLayoutEffect(tmp31, tmp30);
              if (cResult[19] !== navigation) {
                function ie(arg0) {
                  navigation.goBack();
                  router_utils.transitionTo(value2.CHANNEL(guildId, arg0));
                }
                cResult[19] = navigation;
                cResult[20] = ie;
                let tmp34 = ie;
              } else {
                tmp34 = cResult[20];
              }
              closure_10 = tmp34;
              if (cResult[21] === tmp34) {
                if (cResult[22] === tmp24) {
                  if (cResult[23] === first1) {
                    const _Symbol2 = Symbol;
                    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                      function le() {
                        noop((arg0) => !arg0);
                      }
                      cResult[26] = le;
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                      function ce(arg0) {
                        noop(false);
                        _slicedToArray(arg0.length > 0);
                      }
                      cResult[27] = ce;
                    }
                    if (cResult[28] !== first1) {
                      const joined = first1.join(":");
                      cResult[28] = first1;
                      cResult[29] = joined;
                      let tmp39 = joined;
                    } else {
                      tmp39 = cResult[29];
                    }
                    if (!tmp15) {
                      if (!tmp17) {
                        if (first1.length > 0) {
                          let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp19;
                          if (null == tmp19) {
                            FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp(tmp2[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                          }
                          if (cResult[30] === tmp34) {
                            if (cResult[31] === tmp39) {
                            }
                          }
                          let obj5 = { channelId: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, navigateToChannel: tmp34, tagListInputRef: ref };
                          const tmp44 = closure_17(closure_30, obj5, tmp39);
                          cResult[30] = tmp34;
                          cResult[31] = tmp39;
                          cResult[32] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                          cResult[33] = tmp44;
                        }
                      }
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                      const items2 = [RelationshipStore];
                      class Ae {
                        constructor() {
                          return closure_9.getRelationshipCount() > 0;
                        }
                      }
                      cResult[34] = items2;
                      cResult[35] = Ae;
                      let tmp47 = Ae;
                      let tmp46 = items2;
                    } else {
                      tmp46 = cResult[34];
                      tmp47 = cResult[35];
                    }
                    const stateFromStores = tmp(tmp2[21]).useStateFromStores(tmp46, tmp47);
                    if (cResult[36] === 0 === first1.length) {
                      if (cResult[37] === stateFromStores) {
                        const _Symbol7 = Symbol;
                        class Ae {
                          constructor() {
                            return closure_9.getRelationshipCount() > 0;
                          }
                        }
                        if (cResult[47] !== navigation) {
                          let obj6 = { icon: sourcePage(tmp2[43]), IconComponent: tmp(tmp2[44]).UserPlusIcon, label: null, iconVariant: "default", onPress: null };
                          class Ae {
                            constructor() {
                              return closure_9.getRelationshipCount() > 0;
                            }
                          }
                          obj6.onPress = function onPress() {
                            navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
                          };
                          const items3 = [obj6];
                          cResult[47] = navigation;
                          cResult[48] = items3;
                        }
                        if (cResult[49] !== insets.bottom) {
                          let obj7 = { paddingBottom: insets.bottom };
                          class Ae {
                            constructor() {
                              return closure_9.getRelationshipCount() > 0;
                            }
                          }
                          cResult[50] = obj7;
                          let tmp62 = obj7;
                        } else {
                          tmp62 = cResult[50];
                        }
                        if (cResult[51] === tmp4.emptyKeyboardView) {
                          if (cResult[52] === tmp62) {
                            let tmp63 = cResult[53];
                          }
                          const _Symbol8 = Symbol;
                          class Ae {
                            constructor() {
                              return closure_9.getRelationshipCount() > 0;
                            }
                          }
                          const _Symbol9 = Symbol;
                          ({ emptyContainer, addFriendsButtonContainer } = tmp4);
                          if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl3 = tmp(tmp2[27]).intl;
                            const stringResult = intl3.string(tmp(tmp2[27]).t.zIJnA6);
                            class Ae {
                              constructor() {
                                return closure_9.getRelationshipCount() > 0;
                              }
                            }
                            cResult[56] = stringResult;
                            let tmp67 = stringResult;
                          } else {
                            tmp67 = cResult[56];
                          }
                          if (cResult[57] !== navigation) {
                            const obj8 = { text: tmp67, size: "lg", onPress: null, grow: true };
                            class Ae {
                              constructor() {
                                return closure_9.getRelationshipCount() > 0;
                              }
                            }
                            const tmp71 = closure_17(tmp(tmp2[45]).Button, obj8);
                            cResult[57] = navigation;
                            cResult[58] = tmp71;
                            let tmp69 = tmp71;
                          } else {
                            tmp69 = cResult[58];
                          }
                          if (cResult[59] === tmp4.addFriendsButtonContainer) {
                            if (cResult[60] === tmp69) {
                              let tmp72 = cResult[61];
                            }
                            if (cResult[62] === tmp4.emptyContainer) {
                              if (cResult[63] === tmp72) {
                                let tmp76 = cResult[64];
                              }
                              if (cResult[65] === tmp63) {
                                const sum = first1.length + 1;
                                class Ae {
                                  constructor() {
                                    return closure_9.getRelationshipCount() > 0;
                                  }
                                }
                                let obj9 = { location: "NewMessageScreen", memberCount: sum, recipientLimit: tmp24 };
                                const tmp86 = closure_17(sourcePage(tmp2[47]), obj9);
                                cResult[68] = tmp24;
                                cResult[69] = sum;
                                cResult[70] = tmp86;
                              }
                              class Ae {
                                constructor() {
                                  return closure_9.getRelationshipCount() > 0;
                                }
                              }
                              let obj10 = { style: tmp63, children: tmp76 };
                              const tmp82 = closure_17(closure_6, obj10);
                              cResult[65] = tmp63;
                              cResult[66] = tmp76;
                              cResult[67] = tmp82;
                            }
                            class Ae {
                              constructor() {
                                return closure_9.getRelationshipCount() > 0;
                              }
                            }
                            tmp78[0] = tmp65;
                            tmp78[1] = tmp66;
                            tmp78[2] = emptyContainer;
                            tmp78[4] = tmp72;
                            const tmp79 = closure_17(sourcePage(tmp2[46]), tmp78);
                            cResult[62] = tmp4.emptyContainer;
                            cResult[63] = tmp72;
                            cResult[64] = tmp79;
                            tmp76 = tmp79;
                          }
                          let obj11 = { style: addFriendsButtonContainer, children: tmp69 };
                          const tmp75 = closure_17(closure_6, obj11);
                          cResult[59] = tmp4.addFriendsButtonContainer;
                          cResult[60] = tmp69;
                          cResult[61] = tmp75;
                          tmp72 = tmp75;
                        }
                        const items4 = [tmp4.emptyKeyboardView, tmp62];
                        cResult[51] = tmp4.emptyKeyboardView;
                        cResult[52] = tmp62;
                        cResult[53] = items4;
                        tmp63 = items4;
                      }
                    }
                    const items5 = [];
                    if (0 !== first1.length) {
                      cResult[36] = tmp49;
                      class Ae {
                        constructor() {
                          return closure_9.getRelationshipCount() > 0;
                        }
                      }
                      cResult[38] = navigation;
                      cResult[39] = items5;
                    } else if (!stateFromStores) {
                      const _Symbol6 = Symbol;
                      if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl2 = tmp(tmp2[27]).intl;
                        const stringResult1 = intl2.string(tmp(tmp2[27]).t["9nbDJx"]);
                        class Ae {
                          constructor() {
                            return closure_9.getRelationshipCount() > 0;
                          }
                        }
                        cResult[43] = stringResult1;
                      }
                      class Ae {
                        constructor() {
                          return closure_9.getRelationshipCount() > 0;
                        }
                      }
                      items5.push(tmp58);
                    } else {
                      const _Symbol5 = Symbol;
                      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl = tmp(tmp2[27]).intl;
                        const stringResult2 = intl.string(tmp(tmp2[27]).t["3hF1W4"]);
                        class Ae {
                          constructor() {
                            return closure_9.getRelationshipCount() > 0;
                          }
                        }
                        cResult[40] = stringResult2;
                      }
                      class Ae {
                        constructor() {
                          return closure_9.getRelationshipCount() > 0;
                        }
                      }
                      items5.push(tmp54);
                    }
                    const tmpResult5 = tmp(tmp2[21]);
                  }
                }
              }
              _require = asyncGeneratorStep(async (arg0) => {
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
                        closure_1 = tmp3;
                        closure_129_0 = undefined;
                        if (navigation instanceof closure_7) {
                          sourcePage(first1[22]).track(constants.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
                          closure_1_10(navigation.id);
                          c4 = 3;
                          const obj5 = { value: undefined, done: true };
                          return obj5;
                        } else if (friend.isFriend(navigation.id)) {
                          let arr = tmp2;
                          const index = tmp2.indexOf(navigation.id);
                          let items = [];
                          HermesBuiltin.arraySpread(tmp2, 0);
                          if (-1 === index) {
                            if (arr.length >= closure_1_7 - 1) {
                              if (relationshipCount) {
                                sourcePage(first1[39])("NewMessageScreen");
                              } else {
                                navigation(first1[40]).showMaxGroupMembers();
                                const obj6 = navigation(first1[40]);
                              }
                              sourcePage(first1[22]).track(constants.MESSAGE_COMPOSER_MAX_USERS_ADDED);
                              c4 = 3;
                              const obj7 = sourcePage(first1[22]);
                            } else {
                              items.push(navigation.id);
                            }
                          } else {
                            items.splice(index, 1);
                          }
                          v1(items);
                          items = noop;
                          arr = noop(false);
                          c4 = 3;
                        } else {
                          v1 = 1;
                          c4 = 1;
                          const obj9 = { value: sourcePage(first1[16]).getOrEnsurePrivateChannel(navigation.id), done: false };
                          return obj9;
                        }
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj10 = { value, done: true };
                      return obj10;
                    } else {
                      closure_129_0 = value;
                      sourcePage(first1[22]).track(constants.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
                      closure_1_10(closure_129_0);
                      c4 = 3;
                      const obj11 = { value: undefined, done: true };
                      return obj11;
                    }
                  } catch (tmp45) {
                    c4 = tmp;
                    throw tmp45;
                  }
                }
              });
              function t12(arg0) {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              }
              cResult[21] = tmp34;
              cResult[22] = tmp24;
              cResult[23] = first1;
              cResult[24] = tmp29;
              cResult[25] = t12;
            }
          }
        }
      }
      const items6 = [navigation, first1.length, tmp19, tmp24, tmp25];
      cResult[12] = tmp19;
      cResult[13] = navigation;
      cResult[14] = tmp24;
      cResult[15] = first1.length;
      cResult[16] = tmp25;
      cResult[17] = items6;
      cResult[18] = tmp32;
      tmp31 = tmp32;
      tmp30 = items6;
    }
    let enabled = config.enabled;
    if (enabled) {
      enabled = tmp(tmp2[36]).isGroupDMNitroUpsellAudience(groupDMNitroAudience);
      const tmpResult6 = tmp(tmp2[36]);
    }
    cResult[9] = groupDMNitroAudience;
    cResult[10] = config.enabled;
    cResult[11] = enabled;
    tmp29 = enabled;
    const tmpResult4 = tmp(tmp2[36]);
  }
  const tmp6 = sourcePage(first1[30]);
}) : (function NewMessageScreen(navigation) {
  navigation = navigation.navigation;
  _require = navigation;
  ({ defaultSelectedUserId, sourcePage: importDefault } = navigation.route.params);
  let selectedUserIds;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  closure_8 = undefined;
  let relationshipCount;
  c10 = undefined;
  let enabled;
  let navigateToChannel;
  closure_13 = undefined;
  let stateFromStores;
  const tmp = closure_20();
  dependencyMap = tmp;
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  useMountEffectDefault(() => {
    AnalyticsUtilsDefault.track(constants.MESSAGE_COMPOSER_OPENED, { source_page });
  });
  if (null != defaultSelectedUserId) {
    let items = [defaultSelectedUserId];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = selectedUserIds(noop.useState(items1), 2);
  selectedUserIds = tmp6[0];
  noop = tmp6[1];
  const tmp4 = useAnalyticsLocationsDefault;
  [tmp8, c6] = selectedUserIds(noop.useState(false), 2);
  const tmp7 = selectedUserIds(noop.useState(false), 2);
  [tmp10, c7] = selectedUserIds(noop.useState(false), 2);
  const tmp11 = closure_25(selectedUserIds);
  closure_8 = tmp11;
  const ref = noop.useRef(null);
  const tmp9 = selectedUserIds(noop.useState(false), 2);
  const config = GroupDMNitroCapExperimentDefault.useConfig({ location: "NewMessageScreen" });
  const tmp14 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
  relationshipCount = tmp14;
  const tmp2Result = GroupDMNitroCapExperimentDefault;
  const result = require("GroupDMNitroUpsellModel").shouldUseGroupDMParticipantLimitUI(config.enabled, tmp14);
  c10 = result;
  require("GroupDMNitroUpsellModel");
  enabled = config.enabled;
  if (enabled) {
    enabled = tmp15(11213).isGroupDMNitroUpsellAudience(tmp18);
    const tmp15Result = tmp15(11213);
  }
  const items2 = [navigation, selectedUserIds.length, tmp11, tmp14, result];
  const layoutEffect = obj.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle(children) {
        return closure_2_17(closure_2_29, { numInGroup: length.length, title: children.children, recipientLimit, usePersonLimitCopy });
      },
      headerRight() {
        let tmp2 = null;
        if (null !== channelId) {
          tmp2 = null;
          if (channelId !== closure_0(dependencyMap[19]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            const obj = { channelId, screenIndex: "new-message" };
            tmp2 = closure_2_17(source_page(dependencyMap[37]), obj);
          }
        }
        return tmp2;
      }
    });
  }, items2);
  const items3 = [navigation];
  navigateToChannel = obj.useCallback((arg0) => {
    navigation.goBack();
    router_utils.transitionTo(value2.CHANNEL(guildId, arg0));
  }, items3);
  _require = insets(function*(arg0) {
    if (selectedUserIds === 2) {
      selectedUserIds = 3;
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
        selectedUserIds = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            selectedUserIds = 3;
            throw value;
          } else if (arg0 === 2) {
            selectedUserIds = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            closure_129_0 = undefined;
            if (navigation instanceof c7) {
              source_page(tmp2[22]).track(callback.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
              navigateToChannel(navigation.id);
              selectedUserIds = 3;
              const obj5 = { value: undefined, done: true };
              return obj5;
            } else if (friend.isFriend(navigation.id)) {
              let arr = selectedUserIds;
              const index = selectedUserIds.indexOf(navigation.id);
              let items = [];
              HermesBuiltin.arraySpread(selectedUserIds, 0);
              if (-1 === index) {
                if (arr.length >= relationshipCount - 1) {
                  if (enabled) {
                    source_page(tmp2[39])("NewMessageScreen");
                  } else {
                    navigation(tmp2[40]).showMaxGroupMembers();
                    const obj6 = navigation(tmp2[40]);
                  }
                  source_page(tmp2[22]).track(callback.MESSAGE_COMPOSER_MAX_USERS_ADDED);
                  selectedUserIds = 3;
                  const obj7 = source_page(tmp2[22]);
                } else {
                  items.push(navigation.id);
                }
              } else {
                items.splice(index, 1);
              }
              closure_1_5(items);
              items = _undefined2;
              arr = _undefined2(false);
              selectedUserIds = 3;
            } else {
              c3 = 1;
              selectedUserIds = 1;
              const obj9 = { value: source_page(tmp2[16]).getOrEnsurePrivateChannel(navigation.id), done: false };
              return obj9;
            }
          }
        } else if (arg0 === 1) {
          selectedUserIds = 3;
          throw value;
        } else if (arg0 === 2) {
          selectedUserIds = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_129_0 = value;
          source_page(tmp2[22]).track(callback.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
          navigateToChannel(closure_129_0);
          selectedUserIds = 3;
          const obj11 = { value: undefined, done: true };
          return obj11;
        }
      } catch (tmp45) {
        selectedUserIds = tmp;
        throw tmp45;
      }
    }
  });
  const items4 = [selectedUserIds, navigateToChannel, tmp14, enabled];
  const callback1 = obj.useCallback(function(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
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
  let obj3 = require("GroupDMNitroUpsellModel");
  const items5 = [relationshipCount];
  stateFromStores = require("initialize").useStateFromStores(items5, () => relationshipCount.getRelationshipCount() > 0);
  const items6 = [navigation, stateFromStores, 0 === selectedUserIds.length];
  const items7 = [navigation];
  const memo = obj.useMemo(() => {
    const items = [];
    if (constants) {
      if (stateFromStores) {
        const obj = { icon: _modDef9715, IconComponent: GroupPlusIcon.GroupPlusIcon, label: null, iconVariant: "default", onPress: null };
        const intl = util.intl;
        obj.label = intl.string(util.t["3hF1W4"]);
        obj.onPress = function onPress() {
          return navigation.navigate("gdm", { allowNameEdit: false, locationPage: constants.NEW_MESSAGE_COMPOSER });
        };
        items.push(obj);
      }
      const obj2 = { icon: _modDef4834, IconComponent: UserPlusIcon.UserPlusIcon, label: null, iconVariant: "default", onPress: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t["9nbDJx"]);
      obj2.onPress = function onPress() {
        navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
      };
      items.push(obj2);
    }
    return items;
  }, items6);
  const items8 = [navigation, tmp, insets.bottom];
  const memo1 = obj.useMemo(() => {
    const obj = { icon: _modDef4834, IconComponent: UserPlusIcon.UserPlusIcon, label: null, iconVariant: "default", onPress: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["9nbDJx"]);
    obj.onPress = function onPress() {
      navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
    };
    const items = [obj];
    return items;
  }, items7);
  const memo2 = obj.useMemo(() => {
    const obj = { style: null, children: null };
    const items = [closure_2.emptyKeyboardView, { paddingBottom: insets.bottom }];
    obj.style = items;
    const obj3 = { title: null, subtitle: null, containerStyle: null, fullHeight: true, children: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t["1ESycm"]);
    const intl2 = util.intl;
    obj3.subtitle = intl2.string(util.t["5IlFpu"]);
    obj3.containerStyle = closure_2.emptyContainer;
    const obj4 = { style: closure_2.addFriendsButtonContainer, children: null };
    const obj5 = { text: null, size: "lg", onPress: null, grow: true };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t.zIJnA6);
    obj5.onPress = function onPress() {
      return navigation.navigate("add-friends", { sourcePage: "New Message Composer No Results" });
    };
    obj4.children = constants(components_Button_Button.Button, obj5);
    obj3.children = constants(View, obj4);
    obj.children = constants(NoResultsDefault, obj3);
    return constants(View, obj);
  }, items8);
  let obj4 = { value: tmp4(AnalyticsLocationDefault.NEW_MESSAGE_COMPOSER).analyticsLocations, children: null };
  let obj5 = { actions: memo, noResultActions: memo1, rowMode: enabled.NONE, tagListInputRef: ref, onSelectUser: callback1, onQueryChanged: callback3, selectedUserIds, withAffinitySuggestions: true, overrideResults: tmp26Result, afterSearchContent: null, withGuildMembers: null, withGDMNames: true, forceSearchResults: null, onForceSearchResults: null, defaultNoResultsFound: null, autoFocusSearch: true };
  const tmp15Result2 = require("initialize");
  obj5.afterSearchContent = closure_17(GroupDMNitroUpsellBannerDefault, { location: "NewMessageScreen", memberCount: selectedUserIds.length + 1, recipientLimit: tmp14 });
  obj5.withGuildMembers = 0 === selectedUserIds.length;
  obj5.forceSearchResults = tmp10;
  obj5.onForceSearchResults = callback2;
  obj5.defaultNoResultsFound = memo2;
  obj4.children = closure_17(NewMessageUserListDefault, obj5);
  return closure_17(require("useAnalyticsLocations").AnalyticsLocationProvider, obj4);
});