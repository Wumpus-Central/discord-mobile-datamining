// === Module 16345: GuildsBarPendingGuild ===

// Module 16345 (GuildsBarPendingGuild)
import nativeDefault from "native" /* 576 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import getGuildsBarGuildMenuItemsDefault from "getGuildsBarGuildMenuItems" /* 16286 */;
import noop from "module_19" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4382 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

require = fn;
const GuildRecord = fn(1975);
({ getGuildIconSource: hasOwnProperty, getGuildIconURL: metroRequire } = GuildRecord);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { guildIcon: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = size;
let closure_10 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuild.tsx");

export default noop.memo(function GuildsBarPendingGuild(guildId) {
  guildId = guildId.guildId;
  let token;
  let stateFromStores;
  let stateFromStores3;
  let obj = guildId(stateFromStores[8]);
  const tmp = closure_10();
  let obj1 = guildId(stateFromStores[9]);
  token = obj1.useToken(token(stateFromStores[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const items = [SelectedGuildStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[10]).useStateFromStores(items, () => SelectedGuildStore.getGuildId() === guildId, items1);
  const obj3 = guildId(stateFromStores[10]);
  const items2 = [stateFromStores3];
  const items3 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[10]).useStateFromStores(items2, () => UserGuildJoinRequestStore.getRequest(guildId), items3);
  const obj4 = guildId(stateFromStores[10]);
  const items4 = [stateFromStores3];
  const items5 = [guildId, token, stateFromStores];
  const stateFromStores2 = guildId(stateFromStores[10]).useStateFromStores(items4, () => {
    const joinRequestGuild = UserGuildJoinRequestStore.getJoinRequestGuild(guildId);
    let tmp2;
    if (null != joinRequestGuild) {
      tmp2 = timestampProducer(joinRequestGuild, token, stateFromStores);
    }
    let name;
    if (joinRequestGuild != null) {
      name = joinRequestGuild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: null };
    let tmp7;
    if (null != tmp2) {
      if (null != joinRequestGuild) {
        tmp7 = hasOwnProperty(joinRequestGuild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], stateFromStores);
      }
    }
    obj.asset = tmp7;
    return obj;
  }, items5, token(stateFromStores[12]));
  ({ guildName, asset, icon } = stateFromStores2);
  let applicationStatus;
  const obj5 = guildId(stateFromStores[10]);
  if (stateFromStores1 != null) {
    applicationStatus = stateFromStores1.applicationStatus;
  }
  const tmp10 = token(stateFromStores[13]);
  const items6 = [guildId, ];
  let applicationStatus1;
  ({ badge, cutouts } = token(stateFromStores[13])({ mentionCount: 0, joinRequestState: applicationStatus }));
  if (stateFromStores1 != null) {
    applicationStatus1 = stateFromStores1.applicationStatus;
  }
  items6[1] = applicationStatus1;
  const memo = stateFromStores1.useMemo(() => ({
    onPress() {
      applicationStatus = undefined;
      if (applicationStatus != null) {
        applicationStatus = applicationStatus.applicationStatus;
      }
      if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
        let tmp2Result = guildId(stateFromStores[15]);
        const result = tmp2Result.openMemberVerificationIncompleteAlert(guildId);
      } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        tmp2Result = guildId(stateFromStores[15]);
        const result1 = tmp2Result.openMemberVerificationPendingAlert(guildId);
      } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        token(stateFromStores[16])(guildId);
      } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj = { guildId, canWithdraw: true };
        const result2 = guildId(stateFromStores[15]).openMemberVerificationRejectedAlert(obj);
        const tmp2Result1 = guildId(stateFromStores[15]);
      }
    }
  }), items6);
  const tmp15 = token(stateFromStores[17])(guildId, icon, asset);
  let tmp2Result = tmp2(tmp3[10]);
  const items7 = [SortedGuildStore];
  stateFromStores3 = tmp2Result.useStateFromStores(items7, () => guildsTree.getGuildsTree().version);
  const items8 = [guildId, stateFromStores3];
  const memo1 = stateFromStores1.useMemo(() => {
    const arr = getGuildsBarGuildMenuItemsDefault(guildId, stateFromStores3);
    return {
      accessibilityActions: arr.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const nativeEvent = arg0;
        const found = arr.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
  }, items8);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  tmp2Result = tmp2(tmp3[19]);
  const sharedValue = tmp2Result.useSharedValue(guildId);
  obj = { id: guildId, accessibilityActions, onAccessibilityAction, cutouts, selected: stateFromStores, sharedId: sharedValue, circle: !stateFromStores, overState: "PX_16", unread: null, label: null, config: null, styles: null, externalChildren: null, expandedChildren: null, children: "nl-CW" };
  let str = guildName;
  let tmp5Result = tmp5(tmp3[8]);
  if (guildName == null) {
    str = "";
  }
  obj.label = str;
  obj.config = memo;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.externalChildren = badge;
  obj.expandedChildren = jsx(token(stateFromStores[20]), { guildId, disableSubtitle: true });
  if (null != tmp15) {
    obj = { source: tmp15, style: tmp.guildIcon };
    let tmp19Result = jsx(tmp5(tmp3[21]), { source: tmp15, style: tmp.guildIcon });
  } else {
    obj1 = { value: guildName, selected: stateFromStores, animate: stateFromStores, size: null };
    tmp5Result = tmp5(tmp3[11]);
    obj1.size = tmp2(tmp3[11]).GuildIconSizes.LARGE;
    tmp19Result = <tmp5Result value={guildName} selected={stateFromStores} animate={stateFromStores} size={null} />;
  }
  obj.children = tmp19Result;
  return <tmp5Result id={guildId} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} cutouts={cutouts} selected={stateFromStores} sharedId={sharedValue} circle={!stateFromStores} overState="PX_16" unread={null} label={null} config={null} styles={null} externalChildren={null} expandedChildren={null}>{"nl-CW"}</tmp5Result>;
});