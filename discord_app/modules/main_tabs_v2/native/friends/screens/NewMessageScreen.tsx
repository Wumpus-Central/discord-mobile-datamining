// discord_app/modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import JoinCallButton from "JoinCallButton";
import initialize from "initialize";
import { View } from "FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID";
import { PrivateChannelRecord } from "createChannelRecord";
import closure_8 from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import makeSortedChannel from "makeSortedChannel";
import { UserRowModes } from "UserRowModes";
import ME from "ME";
import jsxProd from "useOnMessageSend";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "noop";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { context } from "../../../../app_analytics/useAnalyticsLocations.tsx";

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
const require = arg1;
function isPrivateChannelMatch(arr, recipients) {
  recipients = recipients.recipients;
  if (recipients.length !== arr.length) {
    return false;
  } else {
    for (const item10009 of recipients) {
      if (arg0.includes(item10009)) {
        continue;
      } else {
        let tmp3 = obj;
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
function findLocalMatchingPrivateChannelId(arg0) {
  let closure_0 = arg0;
  if (1 === arg0.length) {
    dMFromUserId = dMFromUserId.getDMFromUserId(arg0[0]);
    if (dMFromUserId == null) {
      dMFromUserId = null;
    }
    return dMFromUserId;
  } else {
    const items = [, ];
    [arr[0], arr[1]] = callback2(sortedChannels.getSortedChannels(), 2);
    const iter = items[Symbol.iterator]();
    const tmp3 = callback2(sortedChannels.getSortedChannels(), 2);
    while (iter !== undefined) {
      let found = nextResult.find((channelId) => {
        const channel = outer1_8.getChannel(channelId.channelId);
        const tmp = null == channel || !channel.isPrivate();
        let tmp2 = !tmp;
        if (!tmp) {
          tmp2 = outer1_21(closure_0, channel);
        }
        return tmp2;
      });
      let tmp9 = found;
      if (null != found) {
        let tmp10 = iter;
        iter.return();
        return found.channelId;
      }
    }
    return null;
  }
}
function _findMatchingPrivateChannelId() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const tmp20 = outer1_22(closure_0);
              if (null != tmp20) {
                v0 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = tmp20;
                return obj1;
              } else if (arr.length > 1) {
                v0 = 3;
                return { value: null, done: true };
              } else {
                let c4 = 1;
                let obj2 = v0(table[16]);
                table = 2;
                v0 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.getDMChannel(arr[0]);
                return obj2;
              }
            }
          } else if (1 === tmp6) {
            c4 = 0;
            v0 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            v0 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c4 = 0;
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp10) {
          let ensureGuildLoaded = tmp10;
          if (tmp3 === c4) {
            v0 = tmp2;
            throw tmp10;
          } else {
            table = tmp;
          }
        }
      }
    })();
  });
  const _findMatchingPrivateChannelId = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function Header(title) {
  const numInGroup = title.numInGroup;
  const items = [numInGroup];
  const memo = React.useMemo(() => outer1_1(outer1_2[22])() - (numInGroup + 1), items);
  let obj = numInGroup(4162);
  const fn = function s() {
    let obj = numInGroup(outer1_2[23]);
    let num = 0;
    if (numInGroup >= 5) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num), maxHeight: null };
    let num2 = 0;
    if (numInGroup >= 5) {
      num2 = 20;
    }
    obj[1] = numInGroup(outer1_2[23]).withTiming(num2);
    return obj;
  };
  obj = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4303).withTiming };
  fn.__closure = obj;
  fn.__workletHash = 12426216833792;
  fn.__initData = closure_24;
  obj = { style: callback5().header, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items1 = [callback3(numInGroup(8322).GenericHeaderTitle, { title: title.title }), ];
  const obj1 = { style: animatedStyle, variant: "text-xs/medium", color: null, children: null };
  let str = "text-muted";
  if (0 === memo) {
    str = "text-feedback-critical";
  }
  obj1[2] = str;
  const intl = tmp3(1236).intl;
  if (0 === memo) {
    let stringResult = intl.string(tmp3(1236).t.yiQW1O);
  } else {
    const obj2 = { number: null };
    const _HermesInternal = HermesInternal;
    obj2[0] = "" + memo;
    stringResult = intl.formatToPlainString(tmp3(1236).t.HrSDPF, obj2);
  }
  obj1[3] = stringResult;
  items1[1] = callback3(closure_19, obj1);
  obj[1] = items1;
  return closure_18(View, obj);
}
function ChatPreview(channelId) {
  channelId = channelId.channelId;
  const navigateToChannel = channelId.navigateToChannel;
  const tmp = callback5();
  const items = [channelId];
  const effect = React.useEffect(() => {
    if (null != channelId) {
      navigateToChannel(outer1_2[16]).preload(outer1_15, tmp);
      const obj = navigateToChannel(outer1_2[16]);
    }
  }, items);
  const items1 = [channelId, navigateToChannel];
  const callback = React.useCallback(() => {
    let obj = navigateToChannel(outer1_2[20]);
    obj = { channel_id: channelId };
    obj.track(outer1_12.MESSAGE_COMPOSER_TRANSITIONED, obj);
    navigateToChannel(channelId);
  }, items1);
  navigateToChannel(15748)(callback);
  let obj = { style: tmp.background, children: null };
  obj = { style: tmp.container, children: null };
  obj = { guildId: closure_15, channelId, chatInputRef: React.useRef(null), HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: channelId.tagListInputRef };
  const items2 = [callback3(navigateToChannel(10249), obj), ];
  const obj1 = { portal: null };
  const ref = React.useRef(null);
  obj1[0] = channelId(500).isAndroid();
  items2[1] = callback3(channelId(15750).PortalKeyboardRenderer, obj1);
  obj[1] = items2;
  obj[1] = callback4(View, obj);
  return callback3(View, obj);
}
({ AnalyticEvents: closure_12, AnalyticsSections: map1, ChannelTypes: closure_14, ME: closure_15, Routes: closure_16 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = require("module_4162").createAnimatedComponent(require("Text").Text);
let obj = { container: { flex: 1 }, background: null, header: null, emptyContainer: null, emptyKeyboardView: null, addFriendsButtonContainer: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[1] = obj;
let str = "center";
if (set.isAndroid()) {
  str = "flex-start";
}
obj[2] = { flexDirection: "column", alignItems: str };
obj[3] = { flexGrow: 1, justifyContent: "center" };
obj[4] = { flexGrow: 1 };
createCacheKey = { marginBottom: require("Themes").space.PX_16, flexDirection: "row", justifyContent: "center", width: "100%" };
obj[5] = createCacheKey;
let closure_20 = createCacheKey.createStyles(obj);
let closure_24 = { code: "function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}" };
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx");

export default function NewMessageScreen(navigation) {
  let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  let c6;
  let c7;
  let defaultSelectedUserId;
  let tmp10;
  let tmp8;
  navigation = navigation.navigation;
  let _require = navigation;
  ({ defaultSelectedUserId, sourcePage: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID } = navigation.route.params);
  let dependencyMap;
  let stateFromStores;
  let first;
  let React;
  c6 = undefined;
  c7 = undefined;
  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = undefined;
  let callback;
  let c10;
  let stateFromStores1;
  let tmp = callback5();
  dependencyMap = tmp;
  const insets = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(5368)({ includeKeyboardHeight: true }).insets;
  stateFromStores = insets;
  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(4728)(() => {
    let obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[20]);
    obj = { source_page: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID };
    obj.track(outer1_12.MESSAGE_COMPOSER_OPENED, obj);
  });
  let obj = React;
  if (null != defaultSelectedUserId) {
    let items = [defaultSelectedUserId];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = first(React.useState(items1), 2);
  first = tmp6[0];
  React = tmp6[1];
  let tmp2 = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  let tmp4 = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(5668);
  [tmp8, c6] = first(obj.useState(false), 2);
  let tmp7 = first(obj.useState(false), 2);
  [tmp10, c7] = first(obj.useState(false), 2);
  _require = first;
  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = undefined;
  dependencyMap = undefined;
  stateFromStores = undefined;
  const tmp11 = first(obj.useState(null), 2);
  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp11[0];
  dependencyMap = tmp11[1];
  const items2 = [first];
  const effect = obj.useEffect(() => {
    function handleChannelCreate(channel) {
      channel = channel.channel;
      if (channel.id !== handleChannelCreate(outer1_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        if (channel.isPrivate()) {
          if (outer1_21(handleChannelCreate, channel)) {
            dependencyMap(outer1_22(tmp2));
          }
          tmp2 = handleChannelCreate;
        }
      }
    }
    function handleChannelDelete(arg0) {
      let closure_0 = arg0;
      dependencyMap((arg0) => {
        let tmp = arg0;
        if (arg0 !== lib(outer1_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          let tmp3 = null;
          if (arg0 !== lib.channel.id) {
            tmp3 = arg0;
          }
          tmp = tmp3;
        }
        return tmp;
      });
    }
    const subscription = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[18]).subscribe("CHANNEL_CREATE", handleChannelCreate);
    let obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[18]);
    const subscription1 = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[18]).subscribe("CHANNEL_DELETE", handleChannelDelete);
    return () => {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(709).unsubscribe("CHANNEL_CREATE", handleChannelCreate);
      const obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(709);
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(709).unsubscribe("CHANNEL_DELETE", handleChannelDelete);
    };
  }, items2);
  let obj1 = _initialize;
  const items3 = [FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  stateFromStores = obj1.useStateFromStores(items3, () => FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.getChannel(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID));
  const items4 = [first, stateFromStores];
  const effect1 = obj.useEffect(() => {
    function _doAction() {
      let self = this;
      const tmp = stateFromStores(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp5 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp2;
                let callback = tmp3;
                callback = undefined;
                c2 = 1;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = (function findMatchingPrivateChannelId(outer1_0) {
                  const self = this;
                  const apply = closure_23.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(outer1_0);
                return obj1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              callback = arg1;
              if (null == callback) {
                let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = callback(outer2_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              } else {
                FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = callback;
              }
              c2(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID);
              c3 = 3;
              const tmp9 = c2;
            }
          } catch (tmp18) {
            c3 = tmp;
            throw tmp18;
          }
        }
      });
      const _doAction = tmp;
      let apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (0 !== _doAction.length) {
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = obj.isPrivate();
      }
      if (isPrivateResult) {
        isPrivateResult = outer1_21(tmp, obj);
      }
      if (!isPrivateResult) {
        (function doAction() {
          const self = this;
          const apply = _doAction.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
    } else {
      lib(null);
    }
  }, items4);
  const items5 = [first, FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  const effect2 = obj.useEffect(() => {
    if (null == FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      if (null == outer1_22(navigation)) {
        let obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[18]);
        obj = { id: null, type: null, name: "", guild_id: null, recipients: null };
        let tmp7 = c7;
        obj[0] = navigation(lib[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        if (1 === arr.length) {
          let GROUP_DM = outer1_14.DM;
        } else {
          GROUP_DM = outer1_14.GROUP_DM;
        }
        obj = { type: "CHANNEL_CREATE", channel: null };
        obj[1] = GROUP_DM;
        obj[4] = arr;
        tmp7 = new tmp7(obj);
        obj[1] = tmp7;
        obj.dispatch(obj);
        return () => {
          let obj = callback2(709);
          obj = { type: "CHANNEL_DELETE", channel: null };
          obj = { id: callback(5783).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "accessible" };
          obj[1] = obj;
          obj.dispatch(obj);
        };
      }
    }
  }, items5);
  const items6 = [stateFromStores];
  const effect3 = obj.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp.id === navigation(lib[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    }
    if (tmp2) {
      let obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[18]);
      obj = { type: "LOAD_MESSAGES_SUCCESS", channelId: null, messages: null, isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: "PX_8", isStale: "custom" };
      obj[1] = tmp.id;
      obj[2] = [];
      obj.dispatch(obj);
    }
  }, items6);
  const ref = obj.useRef(null);
  const items7 = [navigation, first.length, FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  const layoutEffect = obj.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle(children) {
        return outer1_17(outer1_25, { numInGroup: length.length, title: children.children });
      },
      headerRight() {
        let tmp2 = null;
        if (null !== closure_8) {
          tmp2 = null;
          if (tmp !== outer1_0(outer1_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            const obj = { channelId: null, screenIndex: "new-message" };
            obj[0] = tmp;
            tmp2 = outer1_17(outer1_1(tmp4[32]), obj);
          }
          tmp4 = outer1_2;
        }
        return tmp2;
      }
    });
  }, items7);
  const items8 = [navigation];
  callback = obj.useCallback((arg0) => {
    navigation.goBack();
    navigation(lib[33]).transitionTo(outer1_16.CHANNEL(outer1_15, arg0));
  }, items8);
  _require = undefined;
  _require = stateFromStores((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp2;
              let closure_1 = tmp3;
              let callback;
              if (callback instanceof c7) {
                FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(698).track(outer2_12.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
                outer1_9(tmp49.id);
                c4 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = undefined;
                return obj1;
              } else if (callback.isFriend(tmp49.id)) {
                let arr = c4;
                const index = c4.indexOf(tmp49.id);
                const items = [];
                HermesBuiltin.arraySpread(c4, 0);
                if (-1 === index) {
                  if (arr.length >= FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(15749)() - 1) {
                    let obj5 = callback(4001);
                    obj5.showMaxGroupMembers();
                    FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(698).track(outer2_12.MESSAGE_COMPOSER_MAX_USERS_ADDED);
                    c4 = 3;
                    const obj2 = { value: null, done: true };
                    obj2[0] = undefined;
                    return obj2;
                  } else {
                    arr = items.push(tmp49.id);
                  }
                } else {
                  items.splice(index, 1);
                }
                outer1_5(items);
                arr = outer1_7;
                outer1_7(false);
                c4 = 3;
              } else {
                let obj3 = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(4312);
                c3 = 1;
                c4 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = obj3.getOrEnsurePrivateChannel(tmp49.id);
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            callback = arg1;
            obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(698);
            obj.track(outer2_12.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
            outer1_9(callback);
            c4 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = undefined;
            return obj5;
          }
        } catch (tmp43) {
          c4 = tmp;
          throw tmp43;
        }
      }
    })();
  });
  const items9 = [first, callback];
  const callback1 = obj.useCallback(function(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items9);
  const callback2 = obj.useCallback(() => {
    _undefined2((arg0) => !arg0);
  }, []);
  [][0] = first;
  const callback3 = obj.useCallback((arg0) => {
    _undefined2(false);
    _undefined(arg0.length > 0);
  }, []);
  let tmp26Result;
  if (!tmp8) {
    if (!tmp10) {
      if (first.length > 0) {
        if (null == FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp13(5783).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        }
        obj = { channelId: null, navigateToChannel: null, tagListInputRef: null };
        obj[0] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        obj[1] = callback;
        obj[2] = ref;
        tmp26Result = callback3(ChatPreview, obj, tmp24);
        const tmp26 = callback3;
        const tmp27 = ChatPreview;
      }
    }
  }
  c10 = tmp28;
  let tmp9 = first(obj.useState(false), 2);
  const items10 = [callback];
  stateFromStores1 = _initialize.useStateFromStores(items10, () => callback.getRelationshipCount() > 0);
  const items11 = [navigation, stateFromStores1, 0 === first.length];
  const items12 = [navigation];
  const memo = obj.useMemo(() => {
    const items = [];
    if (c10) {
      if (stateFromStores1) {
        let obj = { icon: null, IconComponent: null, label: null, iconVariant: "default", onPress: null };
        obj[0] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[35]);
        obj[1] = navigation(lib[36]).GroupPlusIcon;
        const intl = navigation(lib[25]).intl;
        obj[2] = intl.string(navigation(lib[25]).t["3hF1W4"]);
        obj[4] = function onPress() {
          return navigation.navigate("gdm", { allowNameEdit: false, locationPage: outer1_13.NEW_MESSAGE_COMPOSER });
        };
        items.push(obj);
      }
      obj = { icon: null, IconComponent: null, label: null, iconVariant: "default", onPress: null };
      obj[0] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[37]);
      obj[1] = navigation(lib[38]).UserPlusIcon;
      const intl2 = navigation(lib[25]).intl;
      obj[2] = intl2.string(navigation(lib[25]).t["9nbDJx"]);
      obj[4] = function onPress() {
        navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
      };
      items.push(obj);
    }
    return items;
  }, items11);
  const items13 = [navigation, tmp, insets.bottom];
  const memo1 = obj.useMemo(() => {
    const obj = { icon: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[37]), IconComponent: navigation(lib[38]).UserPlusIcon, label: null, iconVariant: "default", onPress: null };
    const intl = navigation(lib[25]).intl;
    obj[2] = intl.string(navigation(lib[25]).t["9nbDJx"]);
    obj[4] = function onPress() {
      navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
    };
    const items = [obj];
    return items;
  }, items12);
  const memo2 = obj.useMemo(() => {
    let obj = { style: items, children: null };
    items = [lib.emptyKeyboardView, ];
    obj = { paddingBottom: stateFromStores.bottom };
    items[1] = obj;
    obj = { title: null, subtitle: null, containerStyle: null, fullHeight: true, children: null };
    const intl = navigation(lib[25]).intl;
    obj[0] = intl.string(navigation(lib[25]).t["1ESycm"]);
    const intl2 = navigation(lib[25]).intl;
    obj[1] = intl2.string(navigation(lib[25]).t["5IlFpu"]);
    obj[2] = lib.emptyContainer;
    const obj1 = { style: lib.addFriendsButtonContainer, children: null };
    const obj2 = { text: null, size: "lg", onPress: null, grow: true };
    const intl3 = navigation(lib[25]).intl;
    obj2[0] = intl3.string(navigation(lib[25]).t.zIJnA6);
    obj2[2] = function onPress() {
      return navigation.navigate("add-friends", { sourcePage: "New Message Composer No Results" });
    };
    obj1[1] = outer1_17(navigation(lib[40]).Button, obj2);
    obj[4] = outer1_17(c6, obj1);
    obj[1] = outer1_17(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(lib[39]), obj);
    return outer1_17(c6, obj);
  }, items13);
  obj = { value: tmp4(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(5688).NEW_MESSAGE_COMPOSER).analyticsLocations, children: null };
  obj1 = { actions: memo, noResultActions: memo1, rowMode: stateFromStores1.NONE, tagListInputRef: ref, onSelectUser: callback1, onQueryChanged: callback3, selectedUserIds: first, withAffinitySuggestions: true, overrideResults: tmp26Result, withGuildMembers: tmp28, withGDMNames: true, forceSearchResults: tmp10, onForceSearchResults: callback2, defaultNoResultsFound: memo2, autoFocusSearch: true };
  obj[1] = callback3(tmp2(11673), obj1);
  return callback3(_context.AnalyticsLocationProvider, obj);
};