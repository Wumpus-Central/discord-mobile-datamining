// === Module 15956: GuildsBarPendingGuild ===

// Module 15956 (GuildsBarPendingGuild)
import nativeDefault from "native" /* 576 */;
import GuildIcon from "GuildIcon" /* 5891 */;
import getGuildsBarGuildMenuItemsDefault from "getGuildsBarGuildMenuItems" /* 15896 */;
import noop from "module_19" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4653 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4652 */;
import SortedGuildStore from "SortedGuildStore" /* 5745 */;

require = fn;
const GuildRecord = fn(2062);
({ getGuildIconSource: hasOwnProperty, getGuildIconURL: metroRequire } = GuildRecord);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
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
  const tmp = closure_10();
  let obj = guildId(stateFromStores[8]);
  const guildsBarAnimatedWrapperStyles = guildId(stateFromStores[8]).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  token = guildId(stateFromStores[9]).useToken(token(stateFromStores[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj2 = guildId(stateFromStores[9]);
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
        const result = guildId(stateFromStores[15]).openMemberVerificationIncompleteAlert(guildId);
        const tmp2Result = guildId(stateFromStores[15]);
      } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result1 = guildId(stateFromStores[15]).openMemberVerificationPendingAlert(guildId);
        const tmp2Result3 = guildId(stateFromStores[15]);
      } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        token(stateFromStores[16])(guildId);
      } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj = { guildId, canWithdraw: true };
        const result2 = guildId(stateFromStores[15]).openMemberVerificationRejectedAlert(obj);
        const tmp2Result4 = guildId(stateFromStores[15]);
      }
    }
  }), items6);
  const tmp15 = token(stateFromStores[17])(guildId, icon, asset);
  const obj6 = stateFromStores1;
  const tmp10Result = token(stateFromStores[13])({ mentionCount: 0, joinRequestState: applicationStatus });
  const items7 = [SortedGuildStore];
  stateFromStores3 = guildId(stateFromStores[10]).useStateFromStores(items7, () => guildsTree.getGuildsTree().version);
  const items8 = [guildId, stateFromStores3];
  const memo1 = obj6.useMemo(() => {
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
  let tmp2Result = guildId(stateFromStores[10]);
  const sharedValue = guildId(stateFromStores[19]).useSharedValue(guildId);
  const obj7 = { id: guildId, accessibilityActions, onAccessibilityAction, cutouts, selected: stateFromStores, sharedId: sharedValue, circle: !stateFromStores, overState: "flex", unread: null, label: null, config: null, styles: null, externalChildren: null, expandedChildren: null, children: "M99.2224 90.9774C103.136 90.9774 106.31 87.7696 106.31 83.8127C106.31 79.8558 103.136 76.6481 99.2224 76.6481C95.3082 76.6481 92.1351 79.8558 92.1351 83.8127C92.1351 87.7696 95.3082 90.9774 99.2224 90.9774Z" };
  let str = guildName;
  const tmp2Result2 = guildId(stateFromStores[19]);
  if (guildName == null) {
    str = "";
  }
  obj7.label = str;
  obj7.config = memo;
  obj7.styles = guildsBarAnimatedWrapperStyles;
  obj7.externalChildren = badge;
  obj7.expandedChildren = jsx(token(stateFromStores[20]), { guildId, disableSubtitle: true });
  if (null != tmp15) {
    const obj8 = { source: tmp15, style: tmp.guildIcon };
    let tmp19Result = jsx(tmp5(tmp3[21]), { source: tmp15, style: tmp.guildIcon });
  } else {
    const obj9 = { value: guildName, selected: stateFromStores, animate: stateFromStores, size: tmp2(tmp3[11]).GuildIconSizes.LARGE };
    tmp19Result = jsx(tmp5(tmp3[11]), { value: guildName, selected: stateFromStores, animate: stateFromStores, size: tmp2(tmp3[11]).GuildIconSizes.LARGE });
    const tmp5Result2 = tmp5(tmp3[11]);
  }
  obj7.children = tmp19Result;
  return jsx(token(stateFromStores[8]), { id: guildId, accessibilityActions, onAccessibilityAction, cutouts, selected: stateFromStores, sharedId: sharedValue, circle: !stateFromStores, overState: "flex", unread: null, label: null, config: null, styles: null, externalChildren: null, expandedChildren: null, children: "M99.2224 90.9774C103.136 90.9774 106.31 87.7696 106.31 83.8127C106.31 79.8558 103.136 76.6481 99.2224 76.6481C95.3082 76.6481 92.1351 79.8558 92.1351 83.8127C92.1351 87.7696 95.3082 90.9774 99.2224 90.9774Z" });
});