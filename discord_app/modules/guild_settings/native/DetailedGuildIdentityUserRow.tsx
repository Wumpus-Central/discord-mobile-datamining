// === Module 10680: DetailedGuildIdentityUserRow ===

// Module 10680 (DetailedGuildIdentityUserRow)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import TableRow from "TableRow" /* 5993 */;
import Form from "Form" /* 8895 */;
import DiscordTagDefault from "DiscordTag" /* 9296 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj = { mainIdentity: { flexDirection: "row", alignItems: "center" }, primaryAvatar: { marginRight: nativeDefault.space.PX_4 }, mainTag: null };
let obj3 = { marginRight: nativeDefault.space.PX_4 };
obj.mainTag = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ contentHeight, guildId, user } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === guildId) {
    if (cResult[1] === user) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === guildId) {
      if (cResult[4] === user) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] !== contentHeight) {
        const obj3 = { height: contentHeight };
        cResult[6] = contentHeight;
        cResult[7] = obj3;
        let tmp10 = obj3;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === user) {
          let tmp11 = cResult[10];
        }
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp4) {
              if (cResult[14] === user) {
                let tmp15 = cResult[15];
              }
              if (cResult[16] === tmp10) {
                if (cResult[17] === tmp11) {
                  if (cResult[18] === tmp15) {
                    let tmp23 = cResult[19];
                  }
                  return tmp23;
                }
              }
              const obj4 = { style: tmp10, children: null };
              const items = [tmp11, tmp15];
              obj4.children = items;
              const tmp26 = timestampProducer(View, obj4);
              cResult[16] = tmp10;
              cResult[17] = tmp11;
              cResult[18] = tmp15;
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
          }
        }
        if (tmp8) {
          const obj5 = { style: tmp4.mainIdentity, children: null };
          let tmp19 = null;
          if (tmp8) {
            const obj6 = { size: native.AvatarSizes.SIZE_16, style: tmp4.primaryAvatar, user, guildId: "a" };
            tmp19 = hasOwnProperty(native.Avatar, obj6);
          }
          const items1 = [tmp19, ];
          const obj7 = { user, usernameStyle: tmp4.mainTag, hideBotTag: true };
          items1[1] = hasOwnProperty(DiscordTagDefault, obj7);
          obj5.children = items1;
          let tmp17Result = timestampProducer(View, obj5);
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
  let nickname = NicknameUtilsDefault.getNickname(guildId, undefined, user);
  if (nickname == null) {
    nickname = UserUtilsDefault.getGlobalName(user);
    const tmp6Result = UserUtilsDefault;
  }
  cResult[0] = guildId;
  cResult[1] = user;
  cResult[2] = nickname;
  tmp5 = nickname;
}) : ((height) => {
  ({ guildId, user } = height);
  const tmp = closure_7();
  let nickname = NicknameUtilsDefault.getNickname(guildId, undefined, user);
  if (nickname == null) {
    nickname = UserUtilsDefault.getGlobalName(user);
    const tmp2Result = UserUtilsDefault;
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
  const obj2 = { style: { height: height.contentHeight }, children: null };
  const items = [hasOwnProperty(DiscordTagDefault, { user, nick: nickname }), ];
  if (hasAvatarForGuildResult) {
    const obj3 = { style: tmp.mainIdentity, children: null };
    let tmp8Result = null;
    if (hasAvatarForGuildResult) {
      const obj4 = { size: native.AvatarSizes.SIZE_16, style: tmp.primaryAvatar, user, guildId: "a" };
      tmp8Result = hasOwnProperty(native.Avatar, obj4);
    }
    const items1 = [tmp8Result, ];
    const obj5 = { user, usernameStyle: tmp.mainTag, hideBotTag: true };
    items1[1] = hasOwnProperty(DiscordTagDefault, obj5);
    obj3.children = items1;
    let tmp6Result = timestampProducer(View, obj3);
  } else {
    tmp6Result = null;
  }
  items[1] = tmp6Result;
  obj2.children = items;
  return timestampProducer(View, obj2);
}));
ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let FormRow = userId;
  let tmp = dependencyMap;
  const cResult = userId(576).c(42);
  ({ accessibilityLabel, arrow, contentHeight, deprecatedFormRow, disabled, end, guildId, leading, onPress, trailing, userId } = arg0);
  ({ subLabel, start, accessibilityRole, accessibilityState } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function n() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = userId(576);
  const tmp3 = undefined !== deprecatedFormRow && deprecatedFormRow;
  const stateFromStores = FormRow(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    if (!tmp3) {
      if (cResult[21] === guildId) {
        if (cResult[22] === leading) {
          if (cResult[23] === stateFromStores) {
            let tmp7 = cResult[24];
          }
          if (cResult[25] === contentHeight) {
            if (cResult[26] === guildId) {
              if (cResult[27] === stateFromStores) {
                let tmp10 = cResult[28];
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
                                if (cResult[38] === tmp7) {
                                  if (cResult[39] === tmp10) {
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
              const obj2 = { accessibilityLabel, arrow, disabled, end, icon: tmp7, label: tmp10, onPress, start, subLabel, trailing, accessibilityRole, accessibilityState };
              const tmp16 = closure_5(FormRow(5993).TableRow, obj2);
              cResult[29] = accessibilityLabel;
              cResult[30] = accessibilityRole;
              cResult[31] = accessibilityState;
              cResult[32] = arrow;
              cResult[33] = disabled;
              cResult[34] = end;
              cResult[35] = onPress;
              cResult[36] = start;
              cResult[37] = subLabel;
              cResult[38] = tmp7;
              cResult[39] = tmp10;
              cResult[40] = trailing;
              cResult[41] = tmp16;
            }
          }
          const obj3 = { contentHeight, user: stateFromStores, guildId };
          const tmp13 = closure_5(closure_8, obj3);
          cResult[25] = contentHeight;
          cResult[26] = guildId;
          cResult[27] = stateFromStores;
          cResult[28] = tmp13;
          tmp10 = tmp13;
        }
      }
      let tmp8 = leading;
      if (leading == null) {
        const obj4 = { source: stateFromStores.getAvatarSource(guildId), size: FormRow(1188).AvatarSizes.SMALL };
        tmp8 = closure_5(FormRow(1188).Avatar, obj4);
      }
      cResult[21] = guildId;
      cResult[22] = leading;
      cResult[23] = stateFromStores;
      cResult[24] = tmp8;
      tmp7 = tmp8;
    }
    if (cResult[3] === guildId) {
      if (cResult[4] === leading) {
        if (cResult[5] === stateFromStores) {
          let tmp17 = cResult[6];
        }
        if (cResult[7] === contentHeight) {
          if (cResult[8] === guildId) {
            if (cResult[9] === stateFromStores) {
              let tmp20 = cResult[10];
            }
            if (cResult[11] === accessibilityLabel) {
              if (cResult[12] === accessibilityRole) {
                if (cResult[13] === accessibilityState) {
                  if (cResult[14] === disabled) {
                    if (cResult[15] === onPress) {
                      if (cResult[16] === subLabel) {
                        if (cResult[17] === tmp17) {
                          if (cResult[18] === tmp20) {
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            FormRow = FormRow(8895).FormRow;
            const obj5 = { accessibilityLabel, disabled, leading: tmp17, label: tmp20, onPress, subLabel, trailing, accessibilityRole, accessibilityState };
            tmp = closure_5(FormRow, obj5);
            cResult[11] = accessibilityLabel;
            cResult[12] = accessibilityRole;
            cResult[13] = accessibilityState;
            cResult[14] = disabled;
            cResult[15] = onPress;
            cResult[16] = subLabel;
            cResult[17] = tmp17;
            cResult[18] = tmp20;
            cResult[19] = trailing;
            cResult[20] = tmp;
          }
        }
        const obj6 = { contentHeight, user: stateFromStores, guildId };
        const tmp23 = closure_5(closure_8, obj6);
        cResult[7] = contentHeight;
        cResult[8] = guildId;
        cResult[9] = stateFromStores;
        cResult[10] = tmp23;
        tmp20 = tmp23;
      }
    }
    let tmp18 = leading;
    if (leading == null) {
      const obj7 = { source: stateFromStores.getAvatarSource(guildId), size: FormRow(1188).AvatarSizes.SMALL };
      tmp18 = closure_5(FormRow(1188).Avatar, obj7);
    }
    cResult[3] = guildId;
    cResult[4] = leading;
    cResult[5] = stateFromStores;
    cResult[6] = tmp18;
    tmp17 = tmp18;
  }
  const FormRowResult = FormRow(504);
}) : ((arrow) => {
  ({ accessibilityLabel, contentHeight, deprecatedFormRow } = arrow);
  if (deprecatedFormRow === undefined) {
    deprecatedFormRow = false;
  }
  ({ disabled, guildId, leading, onPress, trailing, userId: require, subLabel, accessibilityRole, accessibilityState } = arrow);
  let SMALL = dependencyMap;
  ({ end, start } = arrow);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => UserStore.getUser(require));
  if (null == stateFromStores) {
    return null;
  } else if (deprecatedFormRow) {
    const obj2 = { accessibilityLabel, disabled, leading: null, label: null, onPress: null, subLabel: null, trailing: null, accessibilityRole: null, accessibilityState: null };
    if (leading == null) {
      disabled = { source: stateFromStores.getAvatarSource(guildId), size: null };
      SMALL = native.AvatarSizes.SMALL;
      disabled.size = SMALL;
      leading = closure_5(native.Avatar, disabled);
    }
    obj2.leading = leading;
    leading = closure_8;
    const obj3 = { contentHeight, user: stateFromStores, guildId };
    obj2.label = closure_5(closure_8, obj3);
    obj2.onPress = onPress;
    obj2.subLabel = subLabel;
    obj2.trailing = trailing;
    obj2.accessibilityRole = accessibilityRole;
    obj2.accessibilityState = accessibilityState;
    let tmp2Result = closure_5(Form.FormRow, obj2);
  } else {
    const obj4 = { accessibilityLabel, arrow: arrow.arrow, disabled, end, icon: null, label: null, onPress: null, start: null, subLabel: null, trailing: null, accessibilityRole: null, accessibilityState: null };
    let tmp2Result2 = leading;
    if (leading == null) {
      const obj5 = { source: stateFromStores.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
      tmp2Result2 = closure_5(native.Avatar, obj5);
    }
    obj4.icon = tmp2Result2;
    const obj6 = { contentHeight, user: stateFromStores, guildId };
    obj4.label = closure_5(closure_8, obj6);
    obj4.onPress = onPress;
    obj4.start = start;
    obj4.subLabel = subLabel;
    obj4.trailing = trailing;
    obj4.accessibilityRole = accessibilityRole;
    obj4.accessibilityState = accessibilityState;
    tmp2Result = closure_5(TableRow.TableRow, obj4);
  }
}));
export const DetailedGuildIdentityUser = memoResult;