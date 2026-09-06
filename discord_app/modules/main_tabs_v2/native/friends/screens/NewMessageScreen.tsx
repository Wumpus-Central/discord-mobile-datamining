// discord_app/modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../../routing/router_utils.tsx";
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import UserPlusIcon from "../../../../../design/components/Icon/native/redesign/generated/UserPlusIcon.tsx";
import _modDef4498 from "../../../../../../_runtime/metro/04498__.js";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import ChannelActionCreatorsDefault from "../../../../../actions/ChannelActionCreators.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import useMountEffectDefault from "../../../../../hooks/useMountEffect.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import useAnalyticsLocationsDefault from "../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import FakePlaceholderPrivateChannel from "../../../../channel/FakePlaceholderPrivateChannel.tsx";
import _modDef10031 from "../../../../../../_runtime/metro/10031__.js";
import GroupPlusIcon from "../../../../../design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx";
import NoResultsDefault from "../../shared_components/user_list/NoResults.tsx";
import ChatViewDefault from "../../../../chat/native/ChatView.tsx";
import getGroupDMRecipientLimitDefault from "../../../../group_dm/getGroupDMRecipientLimit.tsx";
import GroupDMNitroCapExperimentDefault from "../../../../group_dm/GroupDMNitroCapExperiment.tsx";
import NewMessageUserListDefault from "../../shared_components/user_list/NewMessageUserList.tsx";
import GroupDMNitroUpsellBannerDefault from "../../../../group_dm/native/GroupDMNitroUpsellBanner.tsx";
import useOnMessageSendDefault from "../../../../messages/useOnMessageSend.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import PrivateChannelSortStore from "../../../../../stores/views/PrivateChannelSortStore.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";

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
    const items = [,];
    [arr[0], arr[1]] = _slicedToArray(PrivateChannelSortStore.getSortedChannels(), 2);
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
let closure_23 = async function _findMatchingPrivateChannelId(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          const tmp19 = findLocalMatchingPrivateChannelId(length);
          if (null != tmp19) {
            c1 = 3;
            const obj1 = { value: tmp19, done: true };
            return obj1;
          } else if (length.length > 1) {
            c1 = 3;
            return { value: null, done: true };
          } else {
            c4 = 1;
            let obj2 = ChannelActionCreatorsDefault;
            c2 = 2;
            c1 = 1;
            obj2 = { value: null, done: false };
            obj2.value = obj2.getDMChannel(length[0]);
            return obj2;
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
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c4 = 0;
        c1 = 3;
        obj = { value, done: true };
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
function Header(recipientLimit) {
  ({ title, numInGroup } = recipientLimit);
  recipientLimit = recipientLimit.recipientLimit;
  const items = [recipientLimit, numInGroup];
  const memo = noop.useMemo(() => recipientLimit - (numInGroup + 1), items);
  numInGroup(4296);
  const fn = function u() {
    let obj = timing;
    let num = 0;
    if (numInGroup >= 5) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num), maxHeight: null };
    let num2 = 0;
    if (numInGroup >= 5) {
      num2 = 20;
    }
    obj.maxHeight = timing.withTiming(num2);
    return obj;
  };
  let obj = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4561).withTiming };
  fn.__closure = obj;
  fn.__workletHash = 12426216833792;
  fn.__initData = __initData;
  if (recipientLimit.usePersonLimitCopy) {
    obj = { title, memberCount: numInGroup + 1, recipientLimit };
    return closure_17(recipientLimit(16755), obj);
  } else {
    obj = { style: tmp.header, children: null };
    const obj1 = { title };
    const items1 = [closure_17(numInGroup(7863).GenericHeaderTitle, obj1)];
    const obj2 = { style: tmp6, variant: "text-xs/medium", color: null, children: null };
    let str = "text-muted";
    if (0 === memo) {
      str = "text-feedback-critical";
    }
    obj2.color = str;
    const intl = numInGroup(1114).intl;
    if (0 === memo) {
      let stringResult = intl.string(numInGroup(1114).t.yiQW1O);
    } else {
      const obj3 = { number: null };
      const _HermesInternal = HermesInternal;
      obj3.number = "" + memo;
      stringResult = intl.formatToPlainString(numInGroup(1114).t.HrSDPF, obj3);
    }
    obj2.children = stringResult;
    items1[1] = closure_17(closure_19, obj2);
    obj.children = items1;
    return closure_18(View, obj);
  }
  tmp = closure_20();
}
function ChatPreview(channelId) {
  channelId = channelId.channelId;
  const navigateToChannel = channelId.navigateToChannel;
  const tmp = closure_20();
  const items = [channelId];
  const effect = noop.useEffect(() => {
    if (null != channelId) {
      ChannelActionCreatorsDefault.preload(guildId, tmp);
    }
  }, items);
  closure_129_0 = channelId;
  closure_129_1 = navigateToChannel;
  const items1 = [channelId, navigateToChannel];
  const callback = noop.useCallback(() => {
    const obj = { channel_id: channelId };
    obj.track(constants.MESSAGE_COMPOSER_TRANSITIONED, obj);
    closure_1_1(channelId);
  }, items1);
  useOnMessageSendDefault(callback);
  let obj = { style: tmp.background, children: null };
  obj = { style: tmp.container, children: null };
  obj = {
    guildId,
    channelId,
    chatInputRef: noop.useRef(null),
    HACK_fixModalInteraction: true,
    alwaysRespectKeyboard: true,
    screenIndex: "new-message",
    secondaryTextFieldRef: channelId.tagListInputRef,
  };
  const items2 = [closure_17(ChatViewDefault, obj)];
  const obj1 = { portal: null };
  const ref = noop.useRef(null);
  obj1.portal = channelId(1115).isAndroid();
  items2[1] = closure_17(channelId(16756).PortalKeyboardRenderer, obj1);
  obj.children = items2;
  obj.children = closure_18(View, obj);
  return closure_17(View, obj);
}
const View = fn(17).View;
const PrivateChannelRecord = fn(1961).PrivateChannelRecord;
const UserRowModes = fn(10860).UserRowModes;
const Constants = fn(1074);
({
  AnalyticEvents: closure_12,
  AnalyticsSections: map1,
  ChannelTypes: closure_14,
  ME: closure_15,
  Routes: closure_16,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(4556).Text);
let createStyles = fn(4560);
let obj = {
  container: { flex: 1 },
  background: null,
  header: null,
  emptyContainer: null,
  emptyKeyboardView: null,
  addFriendsButtonContainer: null,
};
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.background = obj;
const PlatformUtils = fn(1115);
let str = "center";
if (PlatformUtils.isAndroid()) {
  str = "flex-start";
}
obj.header = { flexDirection: "column", alignItems: str };
obj.emptyContainer = { flexGrow: 1, justifyContent: "center" };
obj.emptyKeyboardView = { flexGrow: 1 };
createStyles = {
  marginBottom: nativeDefault.space.PX_16,
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
};
obj.addFriendsButtonContainer = createStyles;
let closure_20 = createStyles.createStyles(obj);
const __initData = {
  code: "function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx");

export default function NewMessageScreen(navigation) {
  navigation = navigation.navigation;
  _require = navigation;
  ({ defaultSelectedUserId, sourcePage: importDefault } = navigation.route.params);
  let selectedUserIds;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  let relationshipCount;
  c10 = undefined;
  let enabled;
  let navigateToChannel;
  closure_13 = undefined;
  let stateFromStores1;
  let tmp = closure_20();
  dependencyMap = tmp;
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  useMountEffectDefault(() => {
    const obj = { source_page };
    obj.track(constants.MESSAGE_COMPOSER_OPENED, obj);
  });
  let obj = noop;
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
  [tmp8, c6] = selectedUserIds(obj.useState(false), 2);
  let tmp7 = selectedUserIds(obj.useState(false), 2);
  [tmp10, c7] = selectedUserIds(obj.useState(false), 2);
  closure_129_0 = selectedUserIds;
  const tmp11 = selectedUserIds(obj.useState(null), 2);
  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp11[0];
  closure_129_1 = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  closure_129_2 = tmp11[1];
  const items2 = [selectedUserIds];
  const effect = obj.useEffect(() => {
    function handleChannelCreate(channel) {
      channel = channel.channel;
      if (channel.id !== handleChannelCreate(7221).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
        if (arg0 !== handleChannelCreate(7221).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          let tmp3 = null;
          if (arg0 !== channel.channel.id) {
            tmp3 = arg0;
          }
          tmp = tmp3;
        }
        return tmp;
      });
    }
    const subscription = source_page(573).subscribe("CHANNEL_CREATE", handleChannelCreate);
    let obj = source_page(573);
    const subscription1 = source_page(573).subscribe("CHANNEL_DELETE", handleChannelDelete);
    return () => {
      DispatcherDefault.unsubscribe("CHANNEL_CREATE", handleChannelCreate);
      DispatcherDefault.unsubscribe("CHANNEL_DELETE", handleChannelDelete);
    };
  }, items2);
  let obj1 = require("initialize");
  const items3 = [FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  const stateFromStores = obj1.useStateFromStores(items3, () => ChannelStore.getChannel(source_page));
  closure_129_3 = stateFromStores;
  const items4 = [selectedUserIds, stateFromStores];
  const effect1 = obj.useEffect(() => {
    const navigation = async function _doAction() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp3;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj1 = {
                value: (function findMatchingPrivateChannelId() {
                  const self = this;
                  const apply = closure_1_23.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_0),
                done: false,
              };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (null == closure_128_0) {
              FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = recipients(closure_2_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
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
    if (0 !== navigation.length) {
      let isPrivateResult;
      if (insets != null) {
        isPrivateResult = insets.isPrivate();
      }
      if (isPrivateResult) {
        isPrivateResult = isPrivateChannelMatch(tmp, insets);
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
      closure_2(null);
    }
  }, items4);
  const items5 = [selectedUserIds, FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  const effect2 = obj.useEffect(() => {
    if (null == source_page) {
      if (null == findLocalMatchingPrivateChannelId(recipients)) {
        let obj = { id: null, type: null, name: "", guild_id: null, recipients: null };
        let tmp7 = PrivateChannelRecord;
        obj.id = FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        if (1 === recipients.length) {
          let GROUP_DM = constants2.DM;
        } else {
          GROUP_DM = constants2.GROUP_DM;
        }
        obj = { type: GROUP_DM, channel: null, recipients };
        tmp7 = new tmp7(obj);
        obj.channel = tmp7;
        obj.dispatch(obj);
        return () => {
          source_page(573);
          let obj = { type: "CHANNEL_DELETE", channel: null };
          obj = { id: navigation(7221).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "isArray" };
          obj.channel = obj;
          obj.dispatch(obj);
        };
      }
    }
  }, items5);
  const items6 = [stateFromStores];
  const effect3 = obj.useEffect(() => {
    let tmp2 = null != insets;
    if (tmp2) {
      tmp2 = insets.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    }
    if (tmp2) {
      const obj = {
        type: "LOAD_MESSAGES_SUCCESS",
        channelId: insets.id,
        messages: [],
        isBefore: false,
        isAfter: false,
        hasMoreBefore: false,
        hasMoreAfter: false,
        limit: 0,
        jump: "PX_16",
        isStale: "custom",
      };
      obj.dispatch(obj);
    }
  }, items6);
  const ref = obj.useRef(null);
  let tmp2Result = GroupDMNitroCapExperimentDefault;
  const config = tmp2Result.useConfig({ location: "NewMessageScreen" });
  const tmp20 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
  relationshipCount = tmp20;
  let tmp9 = selectedUserIds(obj.useState(false), 2);
  const result = require("GroupDMNitroUpsellModel").shouldUseGroupDMParticipantLimitUI(config.enabled, tmp20);
  c10 = result;
  require("GroupDMNitroUpsellModel");
  enabled = config.enabled;
  if (enabled) {
    let tmp13Result = tmp13(11591);
    enabled = tmp13Result.isGroupDMNitroUpsellAudience(tmp23);
  }
  const items7 = [navigation, selectedUserIds.length, FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, tmp20, result];
  const layoutEffect = obj.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle(children) {
        return closure_2_17(Header, {
          numInGroup: length.length,
          title: children.children,
          recipientLimit,
          usePersonLimitCopy,
        });
      },
      headerRight() {
        let tmp2 = null;
        if (null !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          tmp2 = null;
          if (
            FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID !== closure_0(dependencyMap[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
          ) {
            const obj = { channelId: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, screenIndex: "new-message" };
            tmp2 = closure_2_17(source_page(dependencyMap[35]), obj);
          }
        }
        return tmp2;
      },
    });
  }, items7);
  const items8 = [navigation];
  navigateToChannel = obj.useCallback((arg0) => {
    navigation.goBack();
    router_utils.transitionTo(value2.CHANNEL(guildId, arg0));
  }, items8);
  _require = insets(function* (arg0) {
    if (selectedUserIds === 2) {
      selectedUserIds = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            closure_129_0 = undefined;
            if (closure_0 instanceof c7) {
              source_page(tmp2[20]).track(callback.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
              navigateToChannel(closure_0.id);
              selectedUserIds = 3;
              const obj1 = { value: undefined, done: true };
              return obj1;
            } else if (friend.isFriend(closure_0.id)) {
              let arr = selectedUserIds;
              const index = selectedUserIds.indexOf(closure_0.id);
              let items = [];
              HermesBuiltin.arraySpread(selectedUserIds, 0);
              if (-1 === index) {
                if (arr.length >= relationshipCount - 1) {
                  if (enabled) {
                    source_page(tmp2[37])("NewMessageScreen");
                  } else {
                    closure_0(tmp2[38]).showMaxGroupMembers();
                    const obj6 = closure_0(tmp2[38]);
                  }
                  source_page(tmp2[20]).track(callback.MESSAGE_COMPOSER_MAX_USERS_ADDED);
                  selectedUserIds = 3;
                  const obj7 = source_page(tmp2[20]);
                } else {
                  arr = items.push(closure_0.id);
                }
              } else {
                items.splice(index, 1);
              }
              closure_1_5(items);
              items = _undefined2;
              arr = _undefined2(false);
              selectedUserIds = 3;
            } else {
              let obj3 = source_page(tmp2[16]);
              c3 = 1;
              selectedUserIds = 1;
              const obj2 = { value: obj3.getOrEnsurePrivateChannel(closure_0.id), done: false };
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          selectedUserIds = 3;
          throw value;
        } else if (arg0 === 2) {
          selectedUserIds = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          closure_129_0 = value;
          obj = source_page(tmp2[20]);
          obj.track(callback.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
          navigateToChannel(closure_129_0);
          selectedUserIds = 3;
          const obj4 = { value: undefined, done: true };
          return obj4;
        }
      } catch (tmp45) {
        selectedUserIds = tmp;
        throw tmp45;
      }
    }
  });
  const items9 = [selectedUserIds, navigateToChannel, tmp20, enabled];
  const callback1 = obj.useCallback(function (arg0) {
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
  [][0] = selectedUserIds;
  const callback3 = obj.useCallback((arg0) => {
    _undefined2(false);
    _undefined(arg0.length > 0);
  }, []);
  let tmp31Result;
  if (!tmp8) {
    if (!tmp10) {
      if (selectedUserIds.length > 0) {
        if (null == FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp13(7221).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        }
        obj = { channelId: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, navigateToChannel, tagListInputRef: ref };
        tmp31Result = closure_17(ChatPreview, obj, tmp29);
      }
    }
  }
  closure_13 = tmp33;
  tmp13Result = tmp13(504);
  const items10 = [relationshipCount];
  stateFromStores1 = tmp13Result.useStateFromStores(items10, () => relationshipCount.getRelationshipCount() > 0);
  const items11 = [navigation, stateFromStores1, 0 === selectedUserIds.length];
  const items12 = [navigation];
  const memo = obj.useMemo(() => {
    const items = [];
    if (constants) {
      if (stateFromStores1) {
        let obj = {
          icon: _modDef10031,
          IconComponent: GroupPlusIcon.GroupPlusIcon,
          label: null,
          iconVariant: "default",
          onPress: null,
        };
        const intl = util.intl;
        obj.label = intl.string(util.t["3hF1W4"]);
        obj.onPress = function onPress() {
          return navigation.navigate("gdm", { allowNameEdit: false, locationPage: constants.NEW_MESSAGE_COMPOSER });
        };
        items.push(obj);
      }
      obj = {
        icon: _modDef4498,
        IconComponent: UserPlusIcon.UserPlusIcon,
        label: null,
        iconVariant: "default",
        onPress: null,
      };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t["9nbDJx"]);
      obj.onPress = function onPress() {
        navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
      };
      items.push(obj);
    }
    return items;
  }, items11);
  const items13 = [navigation, tmp, insets.bottom];
  const memo1 = obj.useMemo(() => {
    const obj = {
      icon: _modDef4498,
      IconComponent: UserPlusIcon.UserPlusIcon,
      label: null,
      iconVariant: "default",
      onPress: null,
    };
    const intl = util.intl;
    obj.label = intl.string(util.t["9nbDJx"]);
    obj.onPress = function onPress() {
      navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
    };
    const items = [obj];
    return items;
  }, items12);
  const memo2 = obj.useMemo(() => {
    let obj = { style: null, children: null };
    const items = [closure_2.emptyKeyboardView];
    obj = { paddingBottom: insets.bottom };
    items[1] = obj;
    obj.style = items;
    obj = { title: null, subtitle: null, containerStyle: null, fullHeight: true, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["1ESycm"]);
    const intl2 = util.intl;
    obj.subtitle = intl2.string(util.t["5IlFpu"]);
    obj.containerStyle = closure_2.emptyContainer;
    const obj1 = { style: closure_2.addFriendsButtonContainer, children: null };
    const obj2 = { text: null, size: "lg", onPress: null, grow: true };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t.zIJnA6);
    obj2.onPress = function onPress() {
      return navigation.navigate("add-friends", { sourcePage: "New Message Composer No Results" });
    };
    obj1.children = closure_2_17(components_Button_Button.Button, obj2);
    obj.children = closure_2_17(View, obj1);
    obj.children = closure_2_17(NoResultsDefault, obj);
    return closure_2_17(View, obj);
  }, items13);
  obj = { value: tmp4(AnalyticsLocationDefault.NEW_MESSAGE_COMPOSER).analyticsLocations, children: null };
  obj1 = {
    actions: memo,
    noResultActions: memo1,
    rowMode: enabled.NONE,
    tagListInputRef: ref,
    onSelectUser: callback1,
    onQueryChanged: callback3,
    selectedUserIds,
    withAffinitySuggestions: true,
    overrideResults: tmp31Result,
    afterSearchContent: null,
    withGuildMembers: null,
    withGDMNames: true,
    forceSearchResults: null,
    onForceSearchResults: null,
    defaultNoResultsFound: null,
    autoFocusSearch: true,
  };
  tmp2Result = NewMessageUserListDefault;
  obj1.afterSearchContent = closure_17(GroupDMNitroUpsellBannerDefault, {
    location: "NewMessageScreen",
    memberCount: selectedUserIds.length + 1,
    recipientLimit: tmp20,
  });
  obj1.withGuildMembers = 0 === selectedUserIds.length;
  obj1.forceSearchResults = tmp10;
  obj1.onForceSearchResults = callback2;
  obj1.defaultNoResultsFound = memo2;
  obj.children = closure_17(tmp2Result, obj1);
  return closure_17(require("useAnalyticsLocations").AnalyticsLocationProvider, obj);
}
