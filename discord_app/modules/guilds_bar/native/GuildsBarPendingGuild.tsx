// === Module 16587: GuildsBarPendingGuild ===

// Module 16587 (GuildsBarPendingGuild)
import nativeDefault from "native" /* 587 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4902 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6107 */;
import GuildIcon from "GuildIcon" /* 6161 */;
import getGuildsBarGuildMenuItemsDefault from "getGuildsBarGuildMenuItems" /* 16526 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16549 */;
import noop from "module_19" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4900 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;

require = fn;
const GuildRecord = fn(2082);
({ getGuildIconSource: hasOwnProperty, getGuildIconURL: metroRequire } = GuildRecord);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = { guildIcon: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = size;
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuild.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarPendingGuild(guildId) {
  const cResult = guildId(stateFromStores[9]).c(51);
  guildId = guildId.guildId;
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disableSelectedColor: true, disableBGColor: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = guildId(stateFromStores[9]);
  guildId(stateFromStores[10]).useGuildsBarAnimatedWrapperStyles(first);
  const tmpResult = guildId(stateFromStores[10]);
  token = guildId(stateFromStores[11]).useToken(token(tmp2[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    cResult[1] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== guildId) {
    const fn = function v() {
      return SelectedGuildStore.getGuildId() === guildId;
    };
    const items1 = [guildId];
    cResult[2] = guildId;
    cResult[3] = fn;
    cResult[4] = items1;
    let tmp12 = items1;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const tmpResult6 = guildId(stateFromStores[11]);
  stateFromStores = guildId(stateFromStores[12]).useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [arr8];
    cResult[5] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== guildId) {
    const fn2 = function h() {
      return UserGuildJoinRequestStore.getRequest(guildId);
    };
    const items3 = [guildId];
    cResult[6] = guildId;
    cResult[7] = fn2;
    cResult[8] = items3;
    let tmp17 = items3;
    let tmp16 = fn2;
  } else {
    tmp16 = cResult[7];
    tmp17 = cResult[8];
  }
  const tmpResult7 = guildId(stateFromStores[12]);
  const stateFromStores1 = guildId(stateFromStores[12]).useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [arr8];
    cResult[9] = items4;
    let tmp19 = items4;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] === guildId) {
    if (cResult[11] === token) {
      if (cResult[12] === stateFromStores) {
        let tmp21 = cResult[13];
        let tmp22 = cResult[14];
      }
      const tmpResult9 = tmp(tmp2[12]);
      const stateFromStores2 = tmpResult9.useStateFromStores(tmp19, tmp22, tmp21, tmp7(tmp2[14]));
      const guildName = stateFromStores2.guildName;
      let applicationStatus;
      ({ asset, icon } = stateFromStores2);
      if (stateFromStores1 != null) {
        applicationStatus = stateFromStores1.applicationStatus;
      }
      if (cResult[15] !== applicationStatus) {
        const obj3 = { mentionCount: 0, joinRequestState: applicationStatus };
        cResult[15] = applicationStatus;
        cResult[16] = obj3;
        let tmp30 = obj3;
      } else {
        tmp30 = cResult[16];
      }
      ({ badge, cutouts } = tmp7(tmp2[15])(tmp30));
      if (cResult[17] === guildId) {
        let applicationStatus1;
        if (stateFromStores1 != null) {
          applicationStatus1 = stateFromStores1.applicationStatus;
        }
        tmp7(tmp2[19])(guildId, icon, asset);
        const _Symbol = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const items5 = [SortedGuildStore];
          class N {
            constructor() {
              return closure_1_8.getGuildsTree().version;
            }
          }
          cResult[20] = items5;
          cResult[21] = N;
          let tmp37 = N;
          let tmp36 = items5;
        } else {
          tmp36 = cResult[20];
          tmp37 = cResult[21];
        }
        const stateFromStores3 = tmp(tmp2[12]).useStateFromStores(tmp36, tmp37);
        if (cResult[22] === guildId) {
          if (cResult[23] === stateFromStores3) {
            arr8 = tmp40;
            class N {
              constructor() {
                return closure_1_8.getGuildsTree().version;
              }
            }
            const obj4 = {
              accessibilityActions: cResult[25],
              onAccessibilityAction(arg0) {
                          const nativeEvent = arg0;
                          const found = arr8.find((label) => label.label === nativeEvent.nativeEvent.actionName);
                          if (found != null) {
                            const action = found.action;
                            if (action != null) {
                              action();
                            }
                          }
                        }
            };
            cResult[27] = cResult[24];
            cResult[28] = cResult[25];
            cResult[29] = obj4;
          }
        }
        arr8 = tmp7(tmp2[20])(guildId, stateFromStores3);
        const _Symbol2 = Symbol;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor(arg0) {
              obj = { name: guildId.label, label: guildId.label };
              return obj;
            }
          }
          cResult[26] = H;
          class N {
            constructor() {
              return closure_1_8.getGuildsTree().version;
            }
          }
        } else {
          class H {
            constructor(arg0) {
              obj = { name: guildId.label, label: guildId.label };
              return obj;
            }
          }
        }
        const mapped = arr8.map(tmp42);
        cResult[22] = guildId;
        cResult[23] = stateFromStores3;
        cResult[24] = arr8;
        cResult[25] = mapped;
        const tmpResult10 = tmp(tmp2[12]);
      }
      const obj5 = {
        onPress() {
              let applicationStatus;
              if (stateFromStores1 != null) {
                applicationStatus = stateFromStores1.applicationStatus;
              }
              if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
                const result = MemberVerificationAlertActionCreators.openMemberVerificationIncompleteAlert(guildId);
                const tmp2Result = MemberVerificationAlertActionCreators;
              } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
                const result1 = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
                const tmp2Result3 = MemberVerificationAlertActionCreators;
              } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
                transitionGuildsBarToGuildOrOpenSelectedChannelDefault(guildId);
              } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
                const obj = { guildId, canWithdraw: true };
                const result2 = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj);
                const tmp2Result4 = MemberVerificationAlertActionCreators;
              }
            }
      };
      cResult[17] = guildId;
      if (stateFromStores1 != null) {
        class H {
          constructor(arg0) {
            obj = { name: guildId.label, label: guildId.label };
            return obj;
          }
        }
      }
      cResult[18] = undefined;
      cResult[19] = obj5;
      const tmp31 = tmp7(tmp2[15])(tmp30);
    }
  }
  class B {
    constructor() {
      joinRequestGuild = closure_4.getJoinRequestGuild(guildId);
      tmp2 = undefined;
      if (null != joinRequestGuild) {
        tmp3 = getGuildIconURL;
        tmp4 = closure_1;
        tmp5 = closure_2;
        tmp2 = getGuildIconURL(joinRequestGuild, closure_1, closure_2);
      }
      name = undefined;
      if (joinRequestGuild != null) {
        name = joinRequestGuild.name;
      }
      obj = { guildName: name, icon: tmp2, asset: null };
      tmp7 = undefined;
      if (null != tmp2) {
        if (null != joinRequestGuild) {
          tmp8 = getGuildIconSource;
          tmp9 = closure_0;
          tmp10 = closure_2;
          tmp11 = closure_2;
          tmp7 = getGuildIconSource(joinRequestGuild, closure_0(closure_2[13]).ImageSizes[closure_0(undefined, closure_2[13]).GuildIconSizes.LARGE], closure_2);
        }
      }
      obj.asset = tmp7;
      return obj;
    }
  }
  const items6 = [guildId, token, stateFromStores];
  cResult[10] = guildId;
  cResult[11] = token;
  cResult[12] = stateFromStores;
  cResult[13] = items6;
  cResult[14] = B;
  tmp22 = B;
  tmp21 = items6;
  const tmpResult8 = guildId(stateFromStores[12]);
}) : (function GuildsBarPendingGuild(guildId) {
  guildId = guildId.guildId;
  let token;
  let stateFromStores;
  let stateFromStores3;
  const tmp = closure_10();
  let obj = guildId(stateFromStores[10]);
  const guildsBarAnimatedWrapperStyles = guildId(stateFromStores[10]).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  token = guildId(stateFromStores[11]).useToken(token(stateFromStores[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj2 = guildId(stateFromStores[11]);
  const items = [SelectedGuildStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[12]).useStateFromStores(items, () => SelectedGuildStore.getGuildId() === guildId, items1);
  const obj3 = guildId(stateFromStores[12]);
  const items2 = [stateFromStores3];
  const items3 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[12]).useStateFromStores(items2, () => UserGuildJoinRequestStore.getRequest(guildId), items3);
  const obj4 = guildId(stateFromStores[12]);
  const items4 = [stateFromStores3];
  const items5 = [guildId, token, stateFromStores];
  const stateFromStores2 = guildId(stateFromStores[12]).useStateFromStores(items4, () => {
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
  }, items5, token(stateFromStores[14]));
  ({ guildName, asset, icon } = stateFromStores2);
  let applicationStatus;
  const obj5 = guildId(stateFromStores[12]);
  if (stateFromStores1 != null) {
    applicationStatus = stateFromStores1.applicationStatus;
  }
  const tmp10 = token(stateFromStores[15]);
  const items6 = [guildId, ];
  let applicationStatus1;
  ({ badge, cutouts } = token(stateFromStores[15])({ mentionCount: 0, joinRequestState: applicationStatus }));
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
      if (guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
        const result = guildId(stateFromStores[17]).openMemberVerificationIncompleteAlert(guildId);
        const tmp2Result = guildId(stateFromStores[17]);
      } else if (guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result1 = guildId(stateFromStores[17]).openMemberVerificationPendingAlert(guildId);
        const tmp2Result3 = guildId(stateFromStores[17]);
      } else if (guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        token(stateFromStores[18])(guildId);
      } else if (guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj = { guildId, canWithdraw: true };
        const result2 = guildId(stateFromStores[17]).openMemberVerificationRejectedAlert(obj);
        const tmp2Result4 = guildId(stateFromStores[17]);
      }
    }
  }), items6);
  const tmp15 = token(stateFromStores[19])(guildId, icon, asset);
  const obj6 = stateFromStores1;
  const tmp10Result = token(stateFromStores[15])({ mentionCount: 0, joinRequestState: applicationStatus });
  const items7 = [SortedGuildStore];
  stateFromStores3 = guildId(stateFromStores[12]).useStateFromStores(items7, () => guildsTree.getGuildsTree().version);
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
  let tmp2Result = guildId(stateFromStores[12]);
  const sharedValue = guildId(stateFromStores[21]).useSharedValue(guildId);
  const obj7 = { id: guildId, accessibilityActions, onAccessibilityAction, cutouts, selected: stateFromStores, sharedId: sharedValue, circle: !stateFromStores, overState: "Reflect", unread: null, label: null, config: null, styles: null, externalChildren: null, expandedChildren: null, children: "passthroughCount" };
  let str = guildName;
  const tmp2Result2 = guildId(stateFromStores[21]);
  if (guildName == null) {
    str = "";
  }
  obj7.label = str;
  obj7.config = memo;
  obj7.styles = guildsBarAnimatedWrapperStyles;
  obj7.externalChildren = badge;
  obj7.expandedChildren = jsx(token(stateFromStores[22]), { guildId, disableSubtitle: true });
  if (null != tmp15) {
    const obj8 = { source: tmp15, style: tmp.guildIcon };
    let tmp19Result = jsx(tmp5(tmp3[23]), { source: tmp15, style: tmp.guildIcon });
  } else {
    const obj9 = { value: guildName, selected: stateFromStores, animate: stateFromStores, size: tmp2(tmp3[13]).GuildIconSizes.LARGE };
    tmp19Result = jsx(tmp5(tmp3[13]), { value: guildName, selected: stateFromStores, animate: stateFromStores, size: tmp2(tmp3[13]).GuildIconSizes.LARGE });
    const tmp5Result2 = tmp5(tmp3[13]);
  }
  obj7.children = tmp19Result;
  return jsx(token(stateFromStores[10]), { id: guildId, accessibilityActions, onAccessibilityAction, cutouts, selected: stateFromStores, sharedId: sharedValue, circle: !stateFromStores, overState: "Reflect", unread: null, label: null, config: null, styles: null, externalChildren: null, expandedChildren: null, children: "passthroughCount" });
}));