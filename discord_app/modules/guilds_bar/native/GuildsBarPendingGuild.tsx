// discord_app/modules/guilds_bar/native/GuildsBarPendingGuild.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../guild_member_verification/UserGuildJoinRequestStore.tsx";
import GuildNSFWContentLevel from "../../../records/GuildRecord.tsx";
import closure_7 from "../../../stores/SelectedGuildStore.tsx";
import closure_8 from "../../../stores/SortedGuildStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ getGuildIconSource: c5, getGuildIconURL: closure_6 } = GuildNSFWContentLevel);
let obj = { guildIcon: null };
obj = {
  width: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarPendingGuild(guildId) {
  guildId = guildId.guildId;
  let token;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores3;
  let obj = guildId(stateFromStores[8]);
  const tmp = callback();
  obj1 = guildId(stateFromStores[9]);
  token = obj1.useToken(token(stateFromStores[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({
    disableSelectedColor: true,
    disableBGColor: true,
  });
  const items = [closure_7];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[10]).useStateFromStores(
    items,
    () => closure_1_7.getGuildId() === guildId,
    items1,
  );
  const obj3 = guildId(stateFromStores[10]);
  const items2 = [stateFromStores3];
  const items3 = [guildId];
  stateFromStores1 = guildId(stateFromStores[10]).useStateFromStores(
    items2,
    () => stateFromStores3.getRequest(guildId),
    items3,
  );
  const obj4 = guildId(stateFromStores[10]);
  const items4 = [stateFromStores3];
  const items5 = [guildId, token, stateFromStores];
  const stateFromStores2 = guildId(stateFromStores[10]).useStateFromStores(
    items4,
    () => {
      const joinRequestGuild = stateFromStores3.getJoinRequestGuild(guildId);
      let tmp2;
      if (null != joinRequestGuild) {
        tmp2 = closure_1_6(joinRequestGuild, token, stateFromStores);
      }
      let name;
      if (joinRequestGuild != null) {
        name = joinRequestGuild.name;
      }
      const obj = { guildName: name, icon: tmp2, asset: null };
      let tmp7;
      if (null != tmp2) {
        if (null != joinRequestGuild) {
          tmp7 = closure_1_5(
            joinRequestGuild,
            guildId(stateFromStores[11]).ImageSizes[guildId(undefined, stateFromStores[11]).GuildIconSizes.LARGE],
            stateFromStores,
          );
        }
      }
      obj[2] = tmp7;
      return obj;
    },
    items5,
    token(stateFromStores[12]),
  );
  ({ guildName, asset, icon } = stateFromStores2);
  let applicationStatus;
  const obj5 = guildId(stateFromStores[10]);
  if (stateFromStores1 != null) {
    applicationStatus = stateFromStores1.applicationStatus;
  }
  const tmp10 = token(stateFromStores[13]);
  const items6 = [guildId];
  let applicationStatus1;
  ({ badge, cutouts } = token(stateFromStores[13])({ mentionCount: 0, joinRequestState: applicationStatus }));
  if (stateFromStores1 != null) {
    applicationStatus1 = stateFromStores1.applicationStatus;
  }
  items6[1] = applicationStatus1;
  const memo = stateFromStores1.useMemo(
    () => ({
      onPress() {
        let applicationStatus;
        if (applicationStatus != null) {
          applicationStatus = applicationStatus.applicationStatus;
        }
        if (closure_1_0(closure_1_2[14]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
          let tmp2Result = tmp2(tmp3[15]);
          const result = tmp2Result.openMemberVerificationIncompleteAlert(closure_0);
        } else if (tmp2(tmp3[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
          tmp2Result = tmp2(tmp3[15]);
          const result1 = tmp2Result.openMemberVerificationPendingAlert(closure_0);
        } else if (tmp2(tmp3[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
          closure_1_1(tmp3[16])(closure_0);
        } else if (tmp2(tmp3[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const obj = { guildId: null, canWithdraw: true };
          obj[0] = closure_0;
          const result2 = tmp2(tmp3[15]).openMemberVerificationRejectedAlert(obj);
          const tmp2Result1 = tmp2(tmp3[15]);
        }
      },
    }),
    items6,
  );
  const tmp15 = token(stateFromStores[17])(guildId, icon, asset);
  let tmp2Result = tmp2(tmp3[10]);
  const items7 = [closure_8];
  stateFromStores3 = tmp2Result.useStateFromStores(items7, () => guildsTree.getGuildsTree().version);
  const items8 = [guildId, stateFromStores3];
  const memo1 = stateFromStores1.useMemo(() => {
    arr = token(stateFromStores[18])(arr, stateFromStores3);
    return {
      accessibilityActions: arr.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const found = arg0.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      },
    };
  }, items8);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  tmp2Result = tmp2(tmp3[19]);
  const sharedValue = tmp2Result.useSharedValue(guildId);
  obj = {
    id: guildId,
    accessibilityActions,
    onAccessibilityAction,
    cutouts,
    selected: stateFromStores,
    sharedId: sharedValue,
    circle: !stateFromStores,
    overState: "PX_16",
    unread: null,
    label: null,
    config: null,
    styles: null,
    externalChildren: null,
    expandedChildren: null,
    children: "nl-CW",
  };
  let str = guildName;
  let tmp5Result = tmp5(tmp3[8]);
  if (guildName == null) {
    str = "";
  }
  obj[9] = str;
  obj[10] = memo;
  obj[11] = guildsBarAnimatedWrapperStyles;
  obj[12] = badge;
  obj[13] = jsx(token(stateFromStores[20]), { guildId, disableSubtitle: true });
  if (null != tmp15) {
    obj = { source: null, style: null };
    obj[0] = tmp15;
    obj[1] = tmp.guildIcon;
    let tmp19Result = tmp19(tmp5(tmp3[21]), obj);
  } else {
    obj1 = { value: null, selected: null, animate: null, size: null };
    obj1[0] = guildName;
    obj1[1] = stateFromStores;
    obj1[2] = stateFromStores;
    tmp5Result = tmp5(tmp3[11]);
    obj1[3] = tmp2(tmp3[11]).GuildIconSizes.LARGE;
    tmp19Result = tmp19(tmp5Result, obj1);
  }
  obj[14] = tmp19Result;
  return (
    <tmp5Result
      id={guildId}
      accessibilityActions={accessibilityActions}
      onAccessibilityAction={onAccessibilityAction}
      cutouts={cutouts}
      selected={stateFromStores}
      sharedId={sharedValue}
      circle={!stateFromStores}
      overState="PX_16"
      unread={null}
      label={null}
      config={null}
      styles={null}
      externalChildren={null}
      expandedChildren={null}
    >
      {"nl-CW"}
    </tmp5Result>
  );
});
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuild.tsx");

export default memoResult;
