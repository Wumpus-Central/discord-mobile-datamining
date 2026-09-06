// discord_app/modules/guild_member_verification/native/components/MemberVerificationScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utilsAll from "../../../routing/router_utils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import MemberVerificationModalDefault from "MemberVerificationModal.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import KeyboardAwareViewDefault from "../../../keyboard/native/KeyboardAwareView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserGuildJoinRequestStore from "../../UserGuildJoinRequestStore.tsx";

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
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(
    items1,
    () => {
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
    },
    items2,
  );
  const obj2 = guildId(stateFromStores1[11]);
  const items3 = [UserGuildJoinRequestStore];
  const stateFromStores2 = guildId(stateFromStores1[11]).useStateFromStores(items3, () =>
    UserGuildJoinRequestStore.getRequest(guildId),
  );
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
      let tmp2Result = tmp2(5527);
      const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
    } else if (tmp2(4384).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      onClose();
      tmp2Result = tmp2(5527);
      const obj = { guildId, canWithdraw: true };
      const result1 = tmp2Result.openMemberVerificationRejectedAlert(obj);
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
fn(4560);
let createStyles = { flex: { flex: 1 }, flexLoading: null };
createStyles = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.flexLoading = createStyles;
let closure_12 = createStyles.createStyles(createStyles);
const makeAuthenticated = fn(16744);
const authenticated = makeAuthenticated.makeAuthenticated(function MemberVerificationRouteContainer(navigation) {
  navigation = navigation.navigation;
  guildId = navigation.route.params.guildId;
  const items = [navigation];
  const callback = noop.useCallback(() => {
    let obj = navigation;
    const state = navigation.getState();
    ({ routes, index } = state);
    if (routes.length > 1) {
      let name;
      if (routes[index - 1] != null) {
        name = tmp6.name;
      }
      if ("member-verification" !== name) {
        obj.goBack();
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
      obj = { screen: "guilds", guildId };
      NavigationRouteUtils.navigateToRootTab(obj);
    }
  }, items);
  useSafeAreaInsetsDefault();
  if (null == guildId) {
    let tmp10 = <Loading />;
  } else {
    let obj = { guildId, onClose: callback, children: null };
    obj = { style: null, children: null };
    const items1 = [tmp.flex];
    obj = { marginLeft: tmp6, marginRight: tmp7 };
    items1[1] = obj;
    obj.style = items1;
    const obj1 = { guildId, onClose: callback };
    obj.children = <MemberVerificationRouteView guildId={guildId} onClose={callback} />;
    obj.children = jsx(KeyboardAwareViewDefault, { marginLeft: tmp6, marginRight: tmp7 });
    tmp10 = <ExistingJoinRequestHandler marginLeft={tmp6} marginRight={tmp7} />;
    const tmp3Result = KeyboardAwareViewDefault;
  }
  return tmp10;
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/MemberVerificationScreen.tsx",
);

export default authenticated;
