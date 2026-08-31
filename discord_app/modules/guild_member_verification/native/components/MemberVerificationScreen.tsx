// === Module 16287: Loading ===

// Module 16287 (Loading)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import ActivityIndicator from "ActivityIndicator" /* 6016 */;
import _modDef6017 from "module_6017" /* 6017 */;
import MemberVerificationModalDefault from "MemberVerificationModal" /* 7616 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "comparator" /* 1982 */;
import closure_7 from "createGuildRecordFromRust" /* 1909 */;
import closure_8 from "handleGatewayJoinRequestUpdate" /* 4270 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import makeAuthenticated from "makeAuthenticated" /* 16288 */;

require = arg1;
function Loading() {
  return <View style={callback().flexLoading}>{jsx(ActivityIndicator.ActivityIndicator, {})}</View>;
}
function MemberVerificationRouteView(arg0) {
  const merged = Object.assign(arg0);
  return jsx(MemberVerificationModalDefault, {});
}
function ExistingJoinRequestHandler(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let stateFromStores;
  let stateFromStores1;
  let React;
  const items = [closure_7];
  stateFromStores = guildId(stateFromStores1[11]).useStateFromStores(items, () => closure_1_7.getGuild(guildId));
  let obj = guildId(stateFromStores1[11]);
  const items1 = [closure_6];
  const items2 = [stateFromStores];
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const defaultChannel = closure_1_6.getDefaultChannel(tmp.id);
      let id;
      if (defaultChannel != null) {
        id = defaultChannel.id;
      }
      tmp2 = id;
    }
    return tmp2;
  }, items2);
  const obj2 = guildId(stateFromStores1[11]);
  const items3 = [closure_8];
  const stateFromStores2 = guildId(stateFromStores1[11]).useStateFromStores(items3, () => closure_1_8.getRequest(guildId));
  const tmp6 = onClose(stateFromStores1[12])(stateFromStores2);
  React = tmp6;
  const items4 = [guildId, tmp6, onClose];
  const effect = React.useEffect(() => {
    let applicationStatus;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (guildId(stateFromStores1[13]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      onClose();
      let tmp2Result = tmp2(tmp3[14]);
      const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
    } else if (tmp2(tmp3[13]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      onClose();
      tmp2Result = tmp2(tmp3[14]);
      const obj = { guildId: null, canWithdraw: true };
      obj[0] = guildId;
      const result1 = tmp2Result.openMemberVerificationRejectedAlert(obj);
    }
  }, items4);
  const items5 = [stateFromStores, guildId, onClose, stateFromStores1];
  const effect1 = React.useEffect(() => {
    if (null != stateFromStores) {
      if (null != guildId) {
        if (null != stateFromStores1) {
          stateFromStores(stateFromStores1[15]).transitionTo(closure_1_10.CHANNEL(tmp, tmp2));
          const obj = stateFromStores(stateFromStores1[15]);
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
({ ME: c9, Routes: c10 } = ME);
createCacheKey = { flex: { flex: 1 }, flexLoading: null };
createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
let closure_12 = createCacheKey.createStyles(createCacheKey);
const authenticated = makeAuthenticated.makeAuthenticated(function MemberVerificationRouteContainer(navigation) {
  navigation = navigation.navigation;
  const guildId = navigation.route.params.guildId;
  const items = [navigation];
  const callback = React.useCallback(() => {
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
              let tmp12 = navigation;
              let tmp13 = closure_1_3;
              let obj4 = navigation(closure_1_3[16]);
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
      obj = { screen: "guilds", guildId: null };
      obj[1] = closure_1_9;
      navigation(closure_1_3[16]).navigateToRootTab(obj);
      const obj2 = navigation(closure_1_3[16]);
    }
  }, items);
  useSafeAreaInsetsDefault();
  if (null == guildId) {
    let tmp10 = <Loading />;
  } else {
    let obj = { guildId: null, onClose: null, children: null };
    obj[0] = guildId;
    obj[1] = callback;
    obj = { style: null, children: null };
    const items1 = [tmp.flex, ];
    obj = { marginLeft: null, marginRight: null };
    obj[0] = tmp6;
    obj[1] = tmp7;
    items1[1] = obj;
    obj[0] = items1;
    obj1 = { guildId: null, onClose: null };
    obj1[0] = guildId;
    obj1[1] = callback;
    obj[1] = <MemberVerificationRouteView guildId={null} onClose={null} />;
    obj[2] = jsx(_modDef6017, { marginLeft: null, marginRight: null });
    tmp10 = <ExistingJoinRequestHandler marginLeft={null} marginRight={null} />;
    const tmp3Result = _modDef6017;
  }
  return tmp10;
});
let result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationScreen.tsx");

export default authenticated;