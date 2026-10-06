// === Module 10693: DetailedGuildIdentityUserRow ===

// Module 10693 (DetailedGuildIdentityUserRow)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import TableRow2 from "TableRow" /* 6000 */;
import Form from "Form" /* 8924 */;
import DiscordTagDefault from "DiscordTag" /* 9331 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { mainIdentity: { flexDirection: "row", alignItems: "center" }, primaryAvatar: obj2, mainTag: obj3 };
obj2 = { marginRight: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
let closure_7 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let contentHeight;
  let guildId;
  let items;
  let items1;
  let user;
  const obj = react2;
  const cResult = obj.c(20);
  ({ contentHeight, guildId, user } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === guildId) {
    let tmp5;
    if (cResult[1] === user) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === guildId) {
      let tmp8;
      let tmp10;
      if (cResult[4] === user) {
        tmp8 = cResult[5];
      }
      if (cResult[6] !== contentHeight) {
        const obj3 = { height: contentHeight };
        cResult[6] = contentHeight;
        cResult[7] = obj3;
        tmp10 = obj3;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        let tmp11;
        let tmp17Result;
        if (cResult[9] === user) {
          tmp11 = cResult[10];
        }
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp4) {
              let tmp15;
              if (cResult[14] === user) {
                tmp15 = cResult[15];
              }
              if (cResult[16] === tmp10) {
                if (cResult[17] === tmp11) {
                  let tmp23;
                  if (cResult[18] === tmp15) {
                    tmp23 = cResult[19];
                  }
                  return tmp23;
                }
              }
              const obj4 = { style: tmp10, children: items };
              items = [tmp11, tmp15];
              const tmp26 = metroRequire(View, obj4);
              cResult[16] = tmp10;
              cResult[17] = tmp11;
              cResult[18] = tmp15;
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
          }
        }
        if (tmp8) {
          let tmp19 = null;
          const obj5 = { style: tmp4.mainIdentity, children: items1 };
          if (tmp8) {
            const obj6 = { size: native.AvatarSizes.SIZE_16, style: tmp4.primaryAvatar, user, guildId: "Array" };
            const Avatar = native.Avatar;
            tmp19 = hasOwnProperty(Avatar, obj6);
          }
          items1 = [tmp19, ];
          const obj7 = { user, usernameStyle: tmp4.mainTag, hideBotTag: true };
          items1[1] = hasOwnProperty(DiscordTagDefault, obj7);
          tmp17Result = metroRequire(View, obj5);
        } else {
          tmp17Result = null;
        }
        cResult[11] = tmp8;
        cResult[12] = tmp5;
        cResult[13] = tmp4;
        cResult[14] = user;
        cResult[15] = tmp17Result;
        tmp15 = tmp17Result;
      }
      const obj8 = { user, nick: tmp5 };
      const tmp14 = hasOwnProperty(DiscordTagDefault, obj8);
      cResult[8] = tmp5;
      cResult[9] = user;
      cResult[10] = tmp14;
      tmp11 = tmp14;
    }
    const hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
    cResult[3] = guildId;
    cResult[4] = user;
    cResult[5] = hasAvatarForGuildResult;
    tmp8 = hasAvatarForGuildResult;
  }
  const obj2 = NicknameUtilsDefault;
  let nickname = obj2.getNickname(guildId, undefined, user);
  if (nickname == null) {
    const tmp6Result = UserUtilsDefault;
    nickname = tmp6Result.getGlobalName(user);
  }
  cResult[0] = guildId;
  cResult[1] = user;
  cResult[2] = nickname;
  tmp5 = nickname;
}) : ((contentHeight) => {
  let guildId;
  let items;
  let items1;
  let tmp6Result;
  let user;
  ({ guildId, user } = contentHeight);
  contentHeight = contentHeight.contentHeight;
  const tmp = closure_7();
  const obj = NicknameUtilsDefault;
  let nickname = obj.getNickname(guildId, undefined, user);
  if (nickname == null) {
    const tmp2Result = UserUtilsDefault;
    nickname = tmp2Result.getGlobalName(user);
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
  const obj2 = { style: { height: contentHeight }, children: items };
  items = [hasOwnProperty(DiscordTagDefault, { user, nick: nickname }), ];
  if (hasAvatarForGuildResult) {
    let tmp8Result = null;
    const obj3 = { style: tmp.mainIdentity, children: items1 };
    if (hasAvatarForGuildResult) {
      const obj4 = { size: native.AvatarSizes.SIZE_16, style: tmp.primaryAvatar, user, guildId: "Array" };
      const Avatar = native.Avatar;
      tmp8Result = hasOwnProperty(Avatar, obj4);
    }
    items1 = [tmp8Result, ];
    const obj5 = { user, usernameStyle: tmp.mainTag, hideBotTag: true };
    items1[1] = hasOwnProperty(DiscordTagDefault, obj5);
    tmp6Result = metroRequire(View, obj3);
  } else {
    tmp6Result = null;
  }
  items[1] = tmp6Result;
  return metroRequire(View, obj2);
}));
const metroImportAll = memoResult;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let arrow;
  let contentHeight;
  let deprecatedFormRow;
  let disabled;
  let end;
  let first;
  let guildId;
  let leading;
  let onPress;
  let start;
  let subLabel;
  let tmp7;
  let trailing;
  let userId;
  const obj = userId(576);
  const cResult = obj.c(42);
  ({ accessibilityLabel, arrow, contentHeight, deprecatedFormRow, disabled, end, guildId, leading, onPress, trailing, userId } = arg0);
  ({ subLabel, start, accessibilityRole, accessibilityState } = arg0);
  const tmp4 = undefined !== deprecatedFormRow && deprecatedFormRow;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function n() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = userId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp16;
    if (tmp4) {
      if (cResult[3] === guildId) {
        if (cResult[4] === leading) {
          let tmp19;
          if (cResult[5] === stateFromStores) {
            tmp19 = cResult[6];
          }
          if (cResult[7] === contentHeight) {
            if (cResult[8] === guildId) {
              let tmp22;
              if (cResult[9] === stateFromStores) {
                tmp22 = cResult[10];
              }
              if (cResult[11] === accessibilityLabel) {
                if (cResult[12] === accessibilityRole) {
                  if (cResult[13] === accessibilityState) {
                    if (cResult[14] === disabled) {
                      if (cResult[15] === onPress) {
                        if (cResult[16] === subLabel) {
                          if (cResult[17] === tmp19) {
                            if (cResult[18] === tmp22) {
                              let tmp26;
                              if (cResult[19] === trailing) {
                                tmp26 = cResult[20];
                              }
                              tmp16 = tmp26;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj2 = { accessibilityLabel, disabled, leading: tmp19, label: tmp22, onPress, subLabel, trailing, accessibilityRole, accessibilityState };
              const tmp28 = closure_5(userId(8924).FormRow, obj2);
              cResult[11] = accessibilityLabel;
              cResult[12] = accessibilityRole;
              cResult[13] = accessibilityState;
              cResult[14] = disabled;
              cResult[15] = onPress;
              cResult[16] = subLabel;
              cResult[17] = tmp19;
              cResult[18] = tmp22;
              cResult[19] = trailing;
              cResult[20] = tmp28;
              tmp26 = tmp28;
            }
          }
          const obj3 = { contentHeight, user: stateFromStores, guildId };
          const tmp25 = closure_5(closure_8, obj3);
          cResult[7] = contentHeight;
          cResult[8] = guildId;
          cResult[9] = stateFromStores;
          cResult[10] = tmp25;
          tmp22 = tmp25;
        }
      }
      let tmp20 = leading;
      if (leading == null) {
        const obj4 = { source: stateFromStores.getAvatarSource(guildId), size: userId(1188).AvatarSizes.SMALL };
        const Avatar2 = userId(1188).Avatar;
        tmp20 = closure_5(Avatar2, obj4);
      }
      cResult[3] = guildId;
      cResult[4] = leading;
      cResult[5] = stateFromStores;
      cResult[6] = tmp20;
      tmp19 = tmp20;
    } else {
      if (cResult[21] === guildId) {
        if (cResult[22] === leading) {
          let tmp9;
          if (cResult[23] === stateFromStores) {
            tmp9 = cResult[24];
          }
          if (cResult[25] === contentHeight) {
            if (cResult[26] === guildId) {
              let tmp12;
              if (cResult[27] === stateFromStores) {
                tmp12 = cResult[28];
              }
              if (cResult[29] === accessibilityLabel) {
                if (cResult[30] === accessibilityRole) {
                  if (cResult[31] === accessibilityState) {
                    if (cResult[32] === arrow) {
                      if (cResult[33] === disabled) {
                        if (cResult[34] === end) {
                          if (cResult[35] === onPress) {
                            if (cResult[36] === start) {
                              if (cResult[37] === subLabel) {
                                if (cResult[38] === tmp9) {
                                  if (cResult[39] === tmp12) {
                                    if (cResult[40] === trailing) {
                                      tmp16 = cResult[41];
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
              const obj5 = { accessibilityLabel, arrow, disabled, end, icon: tmp9, label: tmp12, onPress, start, subLabel, trailing, accessibilityRole, accessibilityState };
              const tmp18 = closure_5(userId(6000).TableRow, obj5);
              cResult[29] = accessibilityLabel;
              cResult[30] = accessibilityRole;
              cResult[31] = accessibilityState;
              cResult[32] = arrow;
              cResult[33] = disabled;
              cResult[34] = end;
              cResult[35] = onPress;
              cResult[36] = start;
              cResult[37] = subLabel;
              cResult[38] = tmp9;
              cResult[39] = tmp12;
              cResult[40] = trailing;
              cResult[41] = tmp18;
              tmp16 = tmp18;
            }
          }
          const obj6 = { contentHeight, user: stateFromStores, guildId };
          const tmp15 = closure_5(closure_8, obj6);
          cResult[25] = contentHeight;
          cResult[26] = guildId;
          cResult[27] = stateFromStores;
          cResult[28] = tmp15;
          tmp12 = tmp15;
        }
      }
      let tmp10 = leading;
      if (leading == null) {
        const obj7 = { source: stateFromStores.getAvatarSource(guildId), size: userId(1188).AvatarSizes.SMALL };
        const Avatar = userId(1188).Avatar;
        tmp10 = closure_5(Avatar, obj7);
      }
      cResult[21] = guildId;
      cResult[22] = leading;
      cResult[23] = stateFromStores;
      cResult[24] = tmp10;
      tmp9 = tmp10;
    }
    tmp8 = tmp16;
  }
  return tmp8;
}) : ((arrow) => {
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let contentHeight;
  let deprecatedFormRow;
  let disabled;
  let end;
  let guildId;
  let leading;
  let obj4;
  let obj7;
  let onPress;
  let start;
  let subLabel;
  let tmp4Result2;
  let trailing;
  ({ accessibilityLabel, contentHeight, deprecatedFormRow } = arrow);
  arrow = arrow.arrow;
  if (deprecatedFormRow === undefined) {
    deprecatedFormRow = false;
  }
  ({ disabled, guildId, leading, onPress, trailing, userId: require, subLabel, accessibilityRole, accessibilityState } = arrow);
  ({ end, start } = arrow);
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(require));
  let tmp3 = null;
  if (null != stateFromStores) {
    let tmp4Result;
    if (deprecatedFormRow) {
      const obj2 = { accessibilityLabel, disabled, leading, label: closure_5(closure_8, obj4), onPress, subLabel, trailing, accessibilityRole, accessibilityState };
      const FormRow = Form.FormRow;
      if (leading == null) {
        const obj3 = { source: stateFromStores.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
        const Avatar2 = native.Avatar;
        leading = closure_5(Avatar2, obj3);
      }
      obj4 = { contentHeight, user: stateFromStores, guildId };
      tmp4Result = closure_5(FormRow, obj2);
    } else {
      const obj5 = { accessibilityLabel, arrow, disabled, end, icon: tmp4Result2, label: closure_5(closure_8, obj7), onPress, start, subLabel, trailing, accessibilityRole, accessibilityState };
      tmp4Result2 = leading;
      const TableRow = TableRow2.TableRow;
      if (leading == null) {
        const obj6 = { source: stateFromStores.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
        const Avatar = native.Avatar;
        tmp4Result2 = closure_5(Avatar, obj6);
      }
      obj7 = { contentHeight, user: stateFromStores, guildId };
      tmp4Result = closure_5(TableRow, obj5);
    }
    tmp3 = tmp4Result;
  }
  return tmp3;
}));
const result = size.fileFinishedImporting("modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx");

export default memoResult1;
export const DetailedGuildIdentityUser = memoResult;