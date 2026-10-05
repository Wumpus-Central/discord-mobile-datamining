// === Module 16287: GuildsBarPendingGuild ===

// Module 16287 (GuildsBarPendingGuild)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4702 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5917 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import getGuildsBarGuildMenuItemsDefault from "getGuildsBarGuildMenuItems" /* 16226 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16249 */;
import react from "react" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4700 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let guildId;

let hasOwnProperty;
let metroRequire;
let size;
({ getGuildIconSource: hasOwnProperty, getGuildIconURL: metroRequire } = GuildRecord);
const jsx = Fragment.jsx;
let obj = { guildIcon: size };
size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let accessibilityActions;
  let arr8;
  let asset;
  let badge;
  let cutouts;
  let first;
  let guildsTree;
  let icon;
  let onAccessibilityAction;
  let stateFromStores;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp9;
  let token;
  let tmp2 = stateFromStores;
  let obj = guildId(stateFromStores[9]);
  const cResult = obj.c(51);
  guildId = guildId.guildId;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disableSelectedColor: true, disableBGColor: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = guildId(tmp2[10]);
  const guildsBarAnimatedWrapperStyles = tmpResult.useGuildsBarAnimatedWrapperStyles(first);
  let tmp7 = token;
  const tmpResult6 = guildId(tmp2[11]);
  token = tmpResult6.useToken(token(tmp2[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    cResult[1] = items;
    tmp9 = items;
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
    tmp12 = items1;
    tmp11 = fn;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const tmpResult7 = guildId(tmp2[12]);
  stateFromStores = tmpResult7.useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [arr8];
    cResult[5] = items2;
    tmp14 = items2;
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
    tmp17 = items3;
    tmp16 = fn2;
  } else {
    tmp16 = cResult[7];
    tmp17 = cResult[8];
  }
  const tmpResult8 = guildId(tmp2[12]);
  const stateFromStores1 = tmpResult8.useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [arr8];
    cResult[9] = items4;
    tmp19 = items4;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] === guildId) {
    if (cResult[11] === token) {
      let tmp21;
      let tmp22;
      let tmp30;
      if (cResult[12] === stateFromStores) {
        tmp21 = cResult[13];
        tmp22 = cResult[14];
      }
      const tmpResult9 = guildId(tmp2[12]);
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
        tmp30 = obj3;
      } else {
        tmp30 = cResult[16];
      }
      ({ badge, cutouts } = tmp7(tmp2[15])(tmp30));
      tmp7(tmp2[15])(tmp30);
      if (cResult[17] === guildId) {
        let tmp34;
        let tmp38;
        let tmp37;
        let applicationStatus1;
        const tmp32 = cResult[18];
        if (stateFromStores1 != null) {
          applicationStatus1 = stateFromStores1.applicationStatus;
        }
        if (tmp32 === applicationStatus1) {
          tmp34 = cResult[19];
        }
        const tmp36 = tmp7(tmp2[19])(guildId, icon, asset);
        const _Symbol = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const items5 = [SortedGuildStore];
          class N {
            constructor() {
              return guildsTree.getGuildsTree().version;
            }
          }
          cResult[20] = items5;
          cResult[21] = N;
          tmp38 = N;
          tmp37 = items5;
        } else {
          tmp37 = cResult[20];
          tmp38 = cResult[21];
        }
        const tmpResult10 = guildId(tmp2[12]);
        const stateFromStores3 = tmpResult10.useStateFromStores(tmp37, tmp38);
        if (cResult[22] === guildId) {
          let tmp42;
          if (cResult[23] === stateFromStores3) {
            arr8 = cResult[24];
            tmp42 = cResult[25];
          }
          if (cResult[27] === tmp41) {
            let tmp45;
            let tmp48;
            let tmp54;
            if (cResult[28] === tmp42) {
              tmp45 = cResult[29];
            }
            ({ accessibilityActions, onAccessibilityAction } = tmp45);
            class N {
              constructor() {
                return guildsTree.getGuildsTree().version;
              }
            }
            const sharedValue = obj12.useSharedValue(guildId);
            let str = guildName;
            if (guildName == null) {
              str = "";
            }
            if (cResult[30] !== guildId) {
              class N {
                constructor() {
                  return guildsTree.getGuildsTree().version;
                }
              }
              cResult[30] = guildId;
              cResult[31] = tmp50;
              tmp48 = tmp50;
            } else {
              tmp48 = cResult[31];
            }
            if (cResult[32] === tmp36) {
              if (cResult[33] === tmp4) {
                if (cResult[34] === guildName) {
                  let tmp51;
                  if (cResult[35] === stateFromStores) {
                    tmp51 = cResult[36];
                  }
                  if (cResult[37] === accessibilityActions) {
                    if (cResult[38] === badge) {
                      if (cResult[39] === tmp34) {
                        if (cResult[40] === cutouts) {
                          if (cResult[41] === guildId) {
                            if (cResult[42] === onAccessibilityAction) {
                              if (cResult[43] === stateFromStores) {
                                if (cResult[44] === sharedValue) {
                                  if (cResult[45] === !stateFromStores) {
                                    if (cResult[46] === str) {
                                      if (cResult[47] === tmp48) {
                                        if (cResult[48] === tmp51) {
                                          let tmp56;
                                          if (cResult[49] === guildsBarAnimatedWrapperStyles) {
                                            tmp56 = cResult[50];
                                          }
                                          return tmp56;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class N {
                    constructor() {
                      return guildsTree.getGuildsTree().version;
                    }
                  }
                  tmp58[0] = guildId;
                  tmp58[1] = accessibilityActions;
                  tmp58[2] = onAccessibilityAction;
                  tmp58[3] = cutouts;
                  tmp58[4] = stateFromStores;
                  tmp58[5] = sharedValue;
                  tmp58[6] = !stateFromStores;
                  tmp58[9] = str;
                  tmp58[10] = tmp34;
                  tmp58[11] = guildsBarAnimatedWrapperStyles;
                  tmp58[12] = badge;
                  tmp58[13] = tmp48;
                  tmp58[14] = tmp51;
                  const tmp59 = jsx(tmp7(tmp2[10]), tmp58);
                  cResult[37] = accessibilityActions;
                  cResult[38] = badge;
                  cResult[39] = tmp34;
                  cResult[40] = cutouts;
                  cResult[41] = guildId;
                  cResult[42] = onAccessibilityAction;
                  cResult[43] = stateFromStores;
                  cResult[44] = sharedValue;
                  cResult[45] = !stateFromStores;
                  cResult[46] = str;
                  cResult[47] = tmp48;
                  class C {
                    constructor() {
                      let tmp7;
                      const joinRequestGuild = UserGuildJoinRequestStore.getJoinRequestGuild(guildId);
                      let tmp2;
                      if (null != joinRequestGuild) {
                        tmp2 = metroRequire(joinRequestGuild, token, stateFromStores);
                      }
                      let name;
                      if (joinRequestGuild != null) {
                        name = joinRequestGuild.name;
                      }
                      const obj = { guildName: name, icon: tmp2, asset: tmp7 };
                      tmp7 = undefined;
                      if (null != tmp2) {
                        if (null != joinRequestGuild) {
                          tmp7 = hasOwnProperty(joinRequestGuild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], stateFromStores);
                        }
                      }
                      return obj;
                    }
                  }
                  cResult[49] = guildsBarAnimatedWrapperStyles;
                  cResult[50] = tmp59;
                  tmp56 = tmp59;
                }
              }
            }
            if (null != tmp36) {
              class N {
                constructor() {
                  return guildsTree.getGuildsTree().version;
                }
              }
              tmp54 = jsx(tmp7(tmp2[23]), { source: tmp36, style: null });
            } else {
              class N {
                constructor() {
                  return guildsTree.getGuildsTree().version;
                }
              }
              tmp7(tmp2[13]);
              tmp54 = <tmp7Result value={guildName} selected={null} animate={stateFromStores} size={guildId(tmp2[13]).GuildIconSizes.LARGE} />;
            }
            cResult[32] = tmp36;
            cResult[33] = tmp4;
            cResult[34] = guildName;
            cResult[35] = stateFromStores;
            cResult[36] = tmp54;
            tmp51 = tmp54;
          }
          const obj7 = {
            accessibilityActions: null,
            onAccessibilityAction(arg0) {
                      let closure_0 = arg0;
                      const found = arr8.find((label) => label.label === nativeEvent.nativeEvent.actionName);
                      if (found != null) {
                        const action = found.action;
                        if (action != null) {
                          action();
                        }
                      }
                    }
          };
          class N {
            constructor() {
              return guildsTree.getGuildsTree().version;
            }
          }
          cResult[27] = tmp41;
          cResult[28] = tmp42;
          cResult[29] = obj7;
          tmp45 = obj7;
        }
        arr8 = tmp7(tmp2[20])(guildId, stateFromStores3);
        const _Symbol2 = Symbol;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor(label) {
              return { name: label.label, label: label.label };
            }
          }
          cResult[26] = H;
          class N {
            constructor() {
              return guildsTree.getGuildsTree().version;
            }
          }
        } else {
          class H {
            constructor(label) {
              return { name: label.label, label: label.label };
            }
          }
        }
        const mapped = arr8.map(tmp43);
        cResult[22] = guildId;
        cResult[23] = stateFromStores3;
        cResult[24] = arr8;
        cResult[25] = mapped;
        tmp42 = mapped;
      }
      const obj8 = {
        onPress() {
              let applicationStatus;
              if (stateFromStores1 != null) {
                applicationStatus = stateFromStores1.applicationStatus;
              }
              if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
                const tmp2Result = MemberVerificationAlertActionCreators;
                const result = tmp2Result.openMemberVerificationIncompleteAlert(guildId);
              } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
                const tmp2Result3 = MemberVerificationAlertActionCreators;
                const result1 = tmp2Result3.openMemberVerificationPendingAlert(guildId);
              } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
                transitionGuildsBarToGuildOrOpenSelectedChannelDefault(guildId);
              } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
                const obj = { guildId, canWithdraw: true };
                const tmp2Result4 = MemberVerificationAlertActionCreators;
                const result2 = tmp2Result4.openMemberVerificationRejectedAlert(obj);
              }
            }
      };
      cResult[17] = guildId;
      if (stateFromStores1 != null) {
        class H {
          constructor(label) {
            return { name: label.label, label: label.label };
          }
        }
      }
      cResult[18] = undefined;
      cResult[19] = obj8;
      tmp34 = obj8;
    }
  }
  class C {
    constructor() {
      let tmp7;
      const joinRequestGuild = UserGuildJoinRequestStore.getJoinRequestGuild(guildId);
      let tmp2;
      if (null != joinRequestGuild) {
        tmp2 = metroRequire(joinRequestGuild, token, stateFromStores);
      }
      let name;
      if (joinRequestGuild != null) {
        name = joinRequestGuild.name;
      }
      const obj = { guildName: name, icon: tmp2, asset: tmp7 };
      tmp7 = undefined;
      if (null != tmp2) {
        if (null != joinRequestGuild) {
          tmp7 = hasOwnProperty(joinRequestGuild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], stateFromStores);
        }
      }
      return obj;
    }
  }
  const items6 = [guildId, token, stateFromStores];
  cResult[10] = guildId;
  cResult[11] = token;
  cResult[12] = stateFromStores;
  cResult[13] = items6;
  cResult[14] = C;
  tmp22 = C;
  tmp21 = items6;
}) : ((guildId) => {
  let accessibilityActions;
  let asset;
  let badge;
  let cutouts;
  let guildName;
  let guildsTree;
  let icon;
  let onAccessibilityAction;
  let tmp19Result;
  guildId = guildId.guildId;
  let token;
  let stateFromStores;
  let stateFromStores3;
  let tmp2 = guildId;
  const tmp = closure_10();
  let obj = guildId(stateFromStores[10]);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const obj2 = guildId(stateFromStores[11]);
  token = obj2.useToken(token(stateFromStores[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const items = [SelectedGuildStore];
  const items1 = [guildId];
  const obj3 = guildId(stateFromStores[12]);
  stateFromStores = obj3.useStateFromStores(items, () => SelectedGuildStore.getGuildId() === guildId, items1);
  const items2 = [stateFromStores3];
  const items3 = [guildId];
  const obj4 = guildId(stateFromStores[12]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => UserGuildJoinRequestStore.getRequest(guildId), items3);
  const items4 = [stateFromStores3];
  const items5 = [guildId, token, stateFromStores];
  const obj5 = guildId(stateFromStores[12]);
  const stateFromStores2 = obj5.useStateFromStores(items4, () => {
    let tmp7;
    const joinRequestGuild = UserGuildJoinRequestStore.getJoinRequestGuild(guildId);
    let tmp2;
    if (null != joinRequestGuild) {
      tmp2 = metroRequire(joinRequestGuild, token, stateFromStores);
    }
    let name;
    if (joinRequestGuild != null) {
      name = joinRequestGuild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: tmp7 };
    tmp7 = undefined;
    if (null != tmp2) {
      if (null != joinRequestGuild) {
        tmp7 = hasOwnProperty(joinRequestGuild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], stateFromStores);
      }
    }
    return obj;
  }, items5, token(stateFromStores[14]));
  ({ guildName, asset, icon } = stateFromStores2);
  let applicationStatus;
  const tmp10 = token(stateFromStores[15]);
  if (stateFromStores1 != null) {
    applicationStatus = stateFromStores1.applicationStatus;
  }
  const items6 = [guildId, ];
  let applicationStatus1;
  ({ badge, cutouts } = tmp10({ mentionCount: 0, joinRequestState: applicationStatus }));
  const useMemo = stateFromStores1.useMemo;
  tmp10({ mentionCount: 0, joinRequestState: applicationStatus });
  const obj6 = stateFromStores1;
  if (stateFromStores1 != null) {
    applicationStatus1 = stateFromStores1.applicationStatus;
  }
  items6[1] = applicationStatus1;
  const memo = useMemo(() => {
    let obj = {
      onPress() {
        applicationStatus = undefined;
        if (applicationStatus != null) {
          applicationStatus = applicationStatus.applicationStatus;
        }
        if (guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
          const tmp2Result = guildId(stateFromStores[17]);
          const result = tmp2Result.openMemberVerificationIncompleteAlert(guildId);
        } else if (guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
          const tmp2Result3 = guildId(stateFromStores[17]);
          const result1 = tmp2Result3.openMemberVerificationPendingAlert(guildId);
        } else if (guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
          token(stateFromStores[18])(guildId);
        } else if (guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const obj = { guildId, canWithdraw: true };
          const tmp2Result4 = guildId(stateFromStores[17]);
          const result2 = tmp2Result4.openMemberVerificationRejectedAlert(obj);
        }
      }
    };
    return obj;
  }, items6);
  const tmp15 = token(stateFromStores[19])(guildId, icon, asset);
  let tmp2Result = tmp2(tmp3[12]);
  const items7 = [SortedGuildStore];
  stateFromStores3 = tmp2Result.useStateFromStores(items7, () => guildsTree.getGuildsTree().version);
  const items8 = [guildId, stateFromStores3];
  const memo1 = obj6.useMemo(() => {
    const arr = getGuildsBarGuildMenuItemsDefault(guildId, stateFromStores3);
    const obj = {
      accessibilityActions: arr.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        let closure_0 = arg0;
        const found = arr.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
    return obj;
  }, items8);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const tmp2Result2 = tmp2(stateFromStores[21]);
  const sharedValue = tmp2Result2.useSharedValue(guildId);
  let str = guildName;
  token(stateFromStores[10]);
  if (guildName == null) {
    str = "";
  }
  if (null != tmp15) {
    tmp19Result = jsx(tmp5(tmp3[23]), { source: tmp15, style: tmp.guildIcon });
  } else {
    token(stateFromStores[13]);
    tmp19Result = <tmp5Result2 value={guildName} selected={stateFromStores} animate={stateFromStores} size={tmp2(stateFromStores[13]).GuildIconSizes.LARGE} />;
  }
  return <tmp5Result id={guildId} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} cutouts={cutouts} selected={stateFromStores} sharedId={sharedValue} circle={!stateFromStores} overState="Set" unread={null} label={str} config={memo} styles={guildsBarAnimatedWrapperStyles} externalChildren={badge} expandedChildren={null}>{tmp19Result}</tmp5Result>;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuild.tsx");

export default memoResult;