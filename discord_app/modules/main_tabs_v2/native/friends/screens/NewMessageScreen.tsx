// discord_app/modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../../routing/router_utils.tsx";
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import UserPlusIcon from "../../../../../design/components/Icon/native/redesign/generated/UserPlusIcon.tsx";
import _modDef4770 from "../../../../../../_runtime/metro/04770__.js";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import ChannelActionCreatorsDefault from "../../../../../actions/ChannelActionCreators.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import useMountEffectDefault from "../../../../../hooks/useMountEffect.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import useAnalyticsLocationsDefault from "../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import FakePlaceholderPrivateChannel from "../../../../channel/FakePlaceholderPrivateChannel.tsx";
import _modDef9491 from "../../../../../../_runtime/metro/09491__.js";
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
    const items = [,];
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
let closure_23 = async function _findMatchingPrivateChannelId(arg0) {
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
function Header(recipientLimit) {
  ({ title, numInGroup } = recipientLimit);
  recipientLimit = recipientLimit.recipientLimit;
  const items = [recipientLimit, numInGroup];
  const memo = noop.useMemo(() => recipientLimit - (numInGroup + 1), items);
  numInGroup(4566);
  const fn = function u() {
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
  fn.__closure = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4837).withTiming };
  fn.__workletHash = 12426216833792;
  fn.__initData = __initData;
  if (recipientLimit.usePersonLimitCopy) {
    let obj2 = { title, memberCount: numInGroup + 1, recipientLimit };
    return closure_17(recipientLimit(16578), obj2);
  } else {
    const obj3 = { style: tmp.header, children: null };
    const obj4 = { title };
    const items1 = [closure_17(numInGroup(7288).GenericHeaderTitle, obj4)];
    const obj5 = { style: tmp6, variant: "text-xs/medium", color: null, children: null };
    let str = "text-muted";
    if (0 === memo) {
      str = "text-feedback-critical";
    }
    obj5.color = str;
    const intl = numInGroup(1115).intl;
    if (0 === memo) {
      let stringResult = intl.string(numInGroup(1115).t.yiQW1O);
    } else {
      const obj6 = { number: null };
      const _HermesInternal = HermesInternal;
      obj6.number = "" + memo;
      stringResult = intl.formatToPlainString(numInGroup(1115).t.HrSDPF, obj6);
    }
    obj5.children = stringResult;
    items1[1] = closure_17(closure_19, obj5);
    obj3.children = items1;
    return closure_18(View, obj3);
  }
  let obj = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4837).withTiming };
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
    AnalyticsUtilsDefault.track(constants.MESSAGE_COMPOSER_TRANSITIONED, { channel_id: channelId });
    closure_1_1(channelId);
  }, items1);
  useOnMessageSendDefault(callback);
  let obj = { style: tmp.background, children: null };
  const obj2 = { style: tmp.container, children: null };
  const ref = noop.useRef(null);
  const items2 = [
    closure_17(ChatViewDefault, {
      guildId,
      channelId,
      chatInputRef: noop.useRef(null),
      HACK_fixModalInteraction: true,
      alwaysRespectKeyboard: true,
      screenIndex: "new-message",
      secondaryTextFieldRef: channelId.tagListInputRef,
    }),
  ];
  const obj4 = { portal: null };
  const obj3 = {
    guildId,
    channelId,
    chatInputRef: noop.useRef(null),
    HACK_fixModalInteraction: true,
    alwaysRespectKeyboard: true,
    screenIndex: "new-message",
    secondaryTextFieldRef: channelId.tagListInputRef,
  };
  obj4.portal = channelId(1364).isAndroid();
  items2[1] = closure_17(channelId(16292).PortalKeyboardRenderer, obj4);
  obj2.children = items2;
  obj.children = closure_18(View, obj2);
  return closure_17(View, obj);
}
const View = fn(17).View;
const PrivateChannelRecord = fn(2049).PrivateChannelRecord;
const UserRowModes = fn(10320).UserRowModes;
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
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(4832).Text);
const createStyles = fn(4836);
let obj = {
  container: { flex: 1 },
  background: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  header: null,
  emptyContainer: null,
  emptyKeyboardView: null,
  addFriendsButtonContainer: null,
};
const PlatformUtils = fn(1364);
let str = "center";
if (PlatformUtils.isAndroid()) {
  str = "flex-start";
}
obj.header = { flexDirection: "column", alignItems: str };
obj.emptyContainer = { flexGrow: 1, justifyContent: "center" };
obj.emptyKeyboardView = { flexGrow: 1 };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.addFriendsButtonContainer = {
  marginBottom: nativeDefault.space.PX_16,
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
};
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
  closure_129_0 = selectedUserIds;
  const tmp11 = selectedUserIds(noop.useState(null), 2);
  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp11[0];
  closure_129_1 = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  closure_129_2 = tmp11[1];
  const items2 = [selectedUserIds];
  const effect = obj.useEffect(() => {
    function handleChannelCreate(channel) {
      channel = channel.channel;
      if (channel.id !== handleChannelCreate(6642).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
        if (arg0 !== handleChannelCreate(6642).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
  let tmp9 = selectedUserIds(noop.useState(false), 2);
  const items3 = [FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  const stateFromStores = require("initialize").useStateFromStores(items3, () => ChannelStore.getChannel(source_page));
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp3;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = {
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
        let obj2 = {
          id: FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID,
          type: null,
          name: "",
          guild_id: null,
          recipients: null,
        };
        if (1 === recipients.length) {
          let GROUP_DM = constants2.DM;
        } else {
          GROUP_DM = constants2.GROUP_DM;
        }
        const obj3 = { type: "CHANNEL_CREATE", channel: null };
        obj2.type = GROUP_DM;
        obj2.recipients = recipients;
        const tmp72 = new PrivateChannelRecord(obj2);
        obj3.channel = tmp72;
        DispatcherDefault.dispatch(obj3);
        return () => {
          const obj2 = { type: "CHANNEL_DELETE", channel: null };
          const obj = source_page(573);
          obj2.channel = {
            id: navigation(6642).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID,
            guild_id: "Array",
            parent_id: "isArray",
          };
          obj.dispatch(obj2);
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
      const obj2 = {
        type: "LOAD_MESSAGES_SUCCESS",
        channelId: insets.id,
        messages: [],
        isBefore: false,
        isAfter: false,
        hasMoreBefore: false,
        hasMoreAfter: false,
        limit: 0,
        jump: "flex",
        isStale: "custom",
      };
      DispatcherDefault.dispatch(obj2);
    }
  }, items6);
  const ref = noop.useRef(null);
  let obj2 = require("initialize");
  const config = GroupDMNitroCapExperimentDefault.useConfig({ location: "NewMessageScreen" });
  const tmp20 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
  relationshipCount = tmp20;
  const tmp2Result = GroupDMNitroCapExperimentDefault;
  const result = require("GroupDMNitroUpsellModel").shouldUseGroupDMParticipantLimitUI(config.enabled, tmp20);
  c10 = result;
  require("GroupDMNitroUpsellModel");
  enabled = config.enabled;
  if (enabled) {
    enabled = tmp13(11086).isGroupDMNitroUpsellAudience(tmp23);
    const tmp13Result = tmp13(11086);
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            closure_129_0 = undefined;
            if (closure_0 instanceof c7) {
              source_page(tmp2[20]).track(callback.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
              navigateToChannel(closure_0.id);
              selectedUserIds = 3;
              const obj5 = { value: undefined, done: true };
              return obj5;
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
                  items.push(closure_0.id);
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
              const obj9 = { value: source_page(tmp2[16]).getOrEnsurePrivateChannel(closure_0.id), done: false };
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
          source_page(tmp2[20]).track(callback.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
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
          FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp13(6642).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        }
        let obj3 = { channelId: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, navigateToChannel, tagListInputRef: ref };
        tmp31Result = closure_17(ChatPreview, obj3, tmp29);
      }
    }
  }
  closure_13 = tmp33;
  let obj4 = require("GroupDMNitroUpsellModel");
  const items10 = [relationshipCount];
  stateFromStores1 = require("initialize").useStateFromStores(
    items10,
    () => relationshipCount.getRelationshipCount() > 0,
  );
  const items11 = [navigation, stateFromStores1, 0 === selectedUserIds.length];
  const items12 = [navigation];
  const memo = obj.useMemo(() => {
    const items = [];
    if (constants) {
      if (stateFromStores1) {
        const obj = {
          icon: _modDef9491,
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
      const obj2 = {
        icon: _modDef4770,
        IconComponent: UserPlusIcon.UserPlusIcon,
        label: null,
        iconVariant: "default",
        onPress: null,
      };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t["9nbDJx"]);
      obj2.onPress = function onPress() {
        navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
      };
      items.push(obj2);
    }
    return items;
  }, items11);
  const items13 = [navigation, tmp, insets.bottom];
  const memo1 = obj.useMemo(() => {
    const obj = {
      icon: _modDef4770,
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
    obj4.children = closure_2_17(components_Button_Button.Button, obj5);
    obj3.children = closure_2_17(View, obj4);
    obj.children = closure_2_17(NoResultsDefault, obj3);
    return closure_2_17(View, obj);
  }, items13);
  let obj5 = { value: tmp4(AnalyticsLocationDefault.NEW_MESSAGE_COMPOSER).analyticsLocations, children: null };
  let obj6 = {
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
  const tmp13Result2 = require("initialize");
  obj6.afterSearchContent = closure_17(GroupDMNitroUpsellBannerDefault, {
    location: "NewMessageScreen",
    memberCount: selectedUserIds.length + 1,
    recipientLimit: tmp20,
  });
  obj6.withGuildMembers = 0 === selectedUserIds.length;
  obj6.forceSearchResults = tmp10;
  obj6.onForceSearchResults = callback2;
  obj6.defaultNoResultsFound = memo2;
  obj5.children = closure_17(NewMessageUserListDefault, obj6);
  return closure_17(require("useAnalyticsLocations").AnalyticsLocationProvider, obj5);
}
