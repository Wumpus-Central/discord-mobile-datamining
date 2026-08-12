// discord_app/modules/guild_member_verification/native/components/MemberVerificationScreen.tsx
import closure_4 from "makeAuthenticated";
import { View } from "useSafeAreaInsets";
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import makeAuthenticated from "makeAuthenticated";
import { ActivityIndicator } from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import { KeyboardAwareView } from "../../../keyboard/native/KeyboardAwareView.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { MemberVerificationModal } from "MemberVerificationModal.tsx";

let c10;
let c9;
const require = arg1;
function Loading() {
  return <View style={createCacheKey().flexLoading}>{jsx(ActivityIndicator.ActivityIndicator, {})}</View>;
}
function MemberVerificationRouteView(arg0) {
  const merged = Object.assign(arg0);
  return jsx(MemberVerificationModal, {});
}
function ExistingJoinRequestHandler(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let stateFromStores;
  let stateFromStores1;
  let React;
  const items = [createGuildRecordFromRust];
  stateFromStores = guildId(stateFromStores1[11]).useStateFromStores(items, () => outer1_7.getGuild(guildId));
  let obj = guildId(stateFromStores1[11]);
  const items1 = [comparator];
  const items2 = [stateFromStores];
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const defaultChannel = outer1_6.getDefaultChannel(tmp.id);
      let id;
      if (defaultChannel != null) {
        id = defaultChannel.id;
      }
      tmp2 = id;
    }
    return tmp2;
  }, items2);
  const obj2 = guildId(stateFromStores1[11]);
  const items3 = [handleGatewayJoinRequestUpdate];
  const stateFromStores2 = guildId(stateFromStores1[11]).useStateFromStores(items3, () => outer1_8.getRequest(guildId));
  const tmp6 = onClose(stateFromStores1[12])(stateFromStores2);
  React = tmp6;
  const items4 = [guildId, tmp6, onClose];
  const effect = React.useEffect(() => {
    let applicationStatus;
    if (_undefined != null) {
      applicationStatus = _undefined.applicationStatus;
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
          stateFromStores(stateFromStores1[15]).transitionTo(outer1_10.CHANNEL(tmp, tmp2));
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
createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const authenticated = makeAuthenticated.makeAuthenticated(function MemberVerificationRouteContainer(navigation) {
  navigation = navigation.navigation;
  const guildId = navigation.route.params.guildId;
  const items = [navigation];
  const callback = React.useCallback(() => {
    let index;
    let routes;
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
              let tmp13 = outer1_3;
              let obj4 = navigation(outer1_3[16]);
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
      obj[1] = outer1_9;
      navigation(outer1_3[16]).navigateToRootTab(obj);
      const obj2 = navigation(outer1_3[16]);
    }
  }, items);
  useSafeAreaInsets();
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
    const obj1 = { guildId: null, onClose: null };
    obj1[0] = guildId;
    obj1[1] = callback;
    obj[1] = <MemberVerificationRouteView guildId={null} onClose={null} />;
    obj[2] = jsx(KeyboardAwareView, { marginLeft: null, marginRight: null });
    tmp10 = <ExistingJoinRequestHandler marginLeft={null} marginRight={null} />;
    const tmp3Result = KeyboardAwareView;
  }
  return tmp10;
});
let result = require("comparator").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationScreen.tsx");

export default authenticated;