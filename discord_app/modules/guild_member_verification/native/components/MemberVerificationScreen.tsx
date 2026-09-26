// === Module 16566: MemberVerificationScreen ===

// Module 16566 (MemberVerificationScreen)
import nativeDefault from "native" /* 576 */;
import router_utilsAll from "router_utils" /* 1101 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5839 */;
import MemberVerificationModalDefault from "MemberVerificationModal" /* 5883 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5889 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5890 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4656 */;

require = fn;
function Loading() {
  return <View style={closure_12().flexLoading}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</View>;
}
function MemberVerificationRouteView(arg0) {
  const merged = Object.assign(arg0);
  return jsx(MemberVerificationModalDefault, {});
}
function ExistingJoinRequestHandler(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let stateFromStores1;
  const items = [GuildStore];
  const stateFromStores = guildId(stateFromStores1[11]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(stateFromStores1[11]);
  const items1 = [GuildChannelStore];
  const items2 = [stateFromStores];
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const defaultChannel = GuildChannelStore.getDefaultChannel(tmp.id);
      let id;
      if (defaultChannel != null) {
        id = defaultChannel.id;
      }
      tmp2 = id;
    }
    return tmp2;
  }, items2);
  const obj2 = guildId(stateFromStores1[11]);
  const items3 = [UserGuildJoinRequestStore];
  const stateFromStores2 = guildId(stateFromStores1[11]).useStateFromStores(items3, () => UserGuildJoinRequestStore.getRequest(guildId));
  const tmp6 = onClose(stateFromStores1[12])(stateFromStores2);
  noop = tmp6;
  const items4 = [guildId, tmp6, onClose];
  const effect = noop.useEffect(() => {
    applicationStatus = undefined;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      onClose();
      const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
      const tmp2Result = MemberVerificationAlertActionCreators;
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      onClose();
      const obj = { guildId, canWithdraw: true };
      const result1 = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj);
      const tmp2Result2 = MemberVerificationAlertActionCreators;
    }
  }, items4);
  const items5 = [stateFromStores, guildId, onClose, stateFromStores1];
  const effect1 = noop.useEffect(() => {
    if (null != stateFromStores) {
      if (null != guildId) {
        if (null != stateFromStores1) {
          router_utilsAll.transitionTo(closure_2_10.CHANNEL(tmp, tmp2));
        }
      }
    }
    if (null == guildId) {
      onClose();
    }
  }, items5);
  let applicationStatus;
  if (tmp6 != null) {
    applicationStatus = tmp6.applicationStatus;
  }
  if (guildId(stateFromStores1[13]).GuildJoinRequestApplicationStatuses.SUBMITTED !== applicationStatus) {
    if (tmp(tmp2[13]).GuildJoinRequestApplicationStatuses.APPROVED !== applicationStatus) {
      if (tmp(tmp2[13]).GuildJoinRequestApplicationStatuses.REJECTED !== applicationStatus) {
        return guildId.children;
      }
    }
  }
  return <Loading />;
}
const View = fn(17).View;
const Constants = fn(1074);
({ ME: closure_9, Routes: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { flex: { flex: 1 }, flexLoading: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_12 = createStyles.createStyles(obj2);
const makeAuthenticated = fn(16567);
const authenticated = makeAuthenticated.makeAuthenticated(function MemberVerificationRouteContainer(navigation) {
  navigation = navigation.navigation;
  guildId = navigation.route.params.guildId;
  const items = [navigation];
  const callback = noop.useCallback(() => {
    const state = navigation.getState();
    ({ routes, index } = state);
    if (routes.length > 1) {
      let name;
      if (routes[index - 1] != null) {
        name = tmp6.name;
      }
      if ("member-verification" !== name) {
        navigation.goBack();
      } else {
        let diff = index;
        if (index >= 0) {
          while (null != routes[diff]) {
            if ("member-verification" !== tmp10.name) {
              let obj4 = NavigationRouteUtils;
              let popScreensResult = obj4.popScreens(index - diff);
              break;
            } else {
              diff = diff - 1;
              if (diff >= 0) {
                continue;
              } else {
                break;
              }
              break;
            }
            break;
          }
        }
      }
    } else {
      const obj3 = { screen: "guilds", guildId };
      NavigationRouteUtils.navigateToRootTab(obj3);
    }
  }, items);
  useSafeAreaInsetsDefault();
  if (null == guildId) {
    let tmp10 = <Loading />;
  } else {
    const obj = { guildId, onClose: callback, children: null };
    let obj2 = { style: null, children: null };
    const items1 = [tmp.flex, ];
    let obj3 = { marginLeft: tmp6, marginRight: tmp7 };
    items1[1] = obj3;
    obj2.style = items1;
    let obj4 = { guildId, onClose: callback };
    obj2.children = <MemberVerificationRouteView guildId={guildId} onClose={callback} />;
    obj.children = jsx(KeyboardAwareViewDefault, { style: null, children: null });
    tmp10 = <ExistingJoinRequestHandler guildId={guildId} onClose={callback}>{null}</ExistingJoinRequestHandler>;
    const tmp3Result = KeyboardAwareViewDefault;
  }
  return tmp10;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationScreen.tsx");

export default authenticated;