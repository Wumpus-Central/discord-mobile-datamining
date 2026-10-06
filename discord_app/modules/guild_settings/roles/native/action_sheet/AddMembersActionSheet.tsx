// === Module 17832: AddMembersActionSheet ===

// Module 17832 (AddMembersActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4596 */;
import react_native2 from "react-native" /* 4600 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import RegexUtilsDefault from "RegexUtils" /* 4880 */;
import GuildUtilsDefault from "GuildUtils" /* 5711 */;
import FormCheckbox from "FormCheckbox" /* 5998 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 10693 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 17826 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 17831 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, announceResult, guild, obj1;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let react = react_mod;
const View = react_native.View;
let MAX_BULK_ROLE_MEMBERS_ADD = GuildSettingsRoleConstants.MAX_BULK_ROLE_MEMBERS_ADD;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, inputContainer: obj3, tagAvatar: size, emptyStateText: obj4, addMembersDescription: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm };
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj5 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let checked;
  let disabled;
  let end;
  let guildId;
  let onPress;
  let start;
  let userId;
  const obj = react2;
  const cResult = obj.c(15);
  ({ start, end, guildId, userId, onPress, disabled, checked } = arg0);
  if (cResult[0] === checked) {
    let tmp4;
    let tmp6;
    if (cResult[1] === disabled) {
      tmp4 = cResult[2];
    }
    const tmpResult = react_native2;
    const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp4);
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    if (cResult[3] !== checked) {
      const obj2 = { checked };
      const tmp8 = metroImportDefault(FormCheckbox.FormCheckbox, obj2);
      cResult[3] = checked;
      cResult[4] = tmp8;
      tmp6 = tmp8;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === accessibilityRole) {
      if (cResult[6] === accessibilityState) {
        if (cResult[7] === disabled) {
          if (cResult[8] === end) {
            if (cResult[9] === guildId) {
              if (cResult[10] === onPress) {
                if (cResult[11] === start) {
                  if (cResult[12] === tmp6) {
                    let tmp9;
                    if (cResult[13] === userId) {
                      tmp9 = cResult[14];
                    }
                    return tmp9;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj3 = { start, end, guildId, userId, onPress, disabled, trailing: tmp6, accessibilityRole, accessibilityState };
    const tmp12 = metroImportDefault(DetailedGuildIdentityUserRowDefault, obj3);
    cResult[5] = accessibilityRole;
    cResult[6] = accessibilityState;
    cResult[7] = disabled;
    cResult[8] = end;
    cResult[9] = guildId;
    cResult[10] = onPress;
    cResult[11] = start;
    cResult[12] = tmp6;
    cResult[13] = userId;
    cResult[14] = tmp12;
    tmp9 = tmp12;
  }
  const obj4 = { checked, disabled };
  cResult[0] = checked;
  cResult[1] = disabled;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let checked;
  let disabled;
  let end;
  let guildId;
  let onPress;
  let start;
  let userId;
  ({ disabled, checked } = arg0);
  ({ start, end, guildId, userId, onPress } = arg0);
  const obj = react_native2;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj2 = { start, end, guildId, userId, onPress, disabled, trailing: metroImportDefault(FormCheckbox.FormCheckbox, { checked }), accessibilityRole, accessibilityState };
  const tmp2 = DetailedGuildIdentityUserRowDefault;
  return metroImportDefault(tmp2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let autoFocusSearch;
  let closure_4;
  let closure_6;
  let count;
  let inActionSheet;
  let maxCount;
  let members;
  let pendingAdditions;
  let tmp7;
  let obj = guild(pendingAdditions[8]);
  const cResult = obj.c(52);
  guild = guild.guild;
  const role = guild.role;
  ({ members, pendingAdditions } = guild);
  const setPendingAdditions = guild.setPendingAdditions;
  ({ autoFocusSearch, inActionSheet, maxCount } = guild);
  const tmp3 = closure_10();
  react = tmp3;
  const tmp4 = setPendingAdditions(react.useState(""), 2);
  const first = tmp4[0];
  MAX_BULK_ROLE_MEMBERS_ADD = tmp4[1];
  const tmp6 = !inActionSheet;
  if (cResult[0] !== tmp6) {
    let obj2 = { isKeyboardAwareOnAndroid: tmp6 };
    cResult[0] = tmp6;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  const insets = role(pendingAdditions[12])(tmp7).insets;
  const tmp8 = role;
  if (cResult[2] === members) {
    let arr;
    if (cResult[3] === first) {
      arr = cResult[4];
    }
    if (cResult[5] === role.id) {
      if (cResult[6] === setPendingAdditions) {
        let tmp11;
        if (cResult[7] === tmp3.tagAvatar) {
          tmp11 = cResult[8];
        }
        let closure_9 = tmp11;
        if (cResult[9] === pendingAdditions) {
          if (cResult[12] !== guild.id) {
            class X {
              constructor(str) {
                str = str.trim();
                const formatted = str.toLowerCase();
                const obj = GuildUtilsDefault;
                const members = obj.requestMembers(guild.id, formatted, GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT);
                closure_6(formatted);
              }
            }
            cResult[12] = guild.id;
            class L {
              constructor(arg0) {
                tmp = closure_2;
                obj = closure_1(closure_2[15]);
                tmp2 = obj.keys(pendingAdditions)[guild];
                closure_0 = tmp2;
                tmp3 = pendingAdditions[tmp2];
                if (null != tmp3) {
                  tmp4 = setPendingAdditions;
                  tmp5 = setPendingAdditions((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    delete obj[closure_0];
                    return obj;
                  });
                  tmp6 = closure_0;
                  AccessibilityAnnouncer = closure_0(tmp[16]).AccessibilityAnnouncer;
                  announce = AccessibilityAnnouncer.announce;
                  intl = closure_0(tmp[17]).intl;
                  obj1 = { text: null };
                  obj1.text = tmp3.display.text;
                  str = "polite";
                  announceResult = announce(intl.formatToPlainString(closure_0(tmp[17]).t.srlxB8, obj1), "polite");
                }
                return;
              }
            }
            cResult[13] = X;
          } else {
            class X {
              constructor(str) {
                str = str.trim();
                const formatted = str.toLowerCase();
                const obj = GuildUtilsDefault;
                const members = obj.requestMembers(guild.id, formatted, GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT);
                closure_6(formatted);
              }
            }
          }
          if (cResult[14] === maxCount) {
            class X {
              constructor(str) {
                str = str.trim();
                const formatted = str.toLowerCase();
                const obj = GuildUtilsDefault;
                const members = obj.requestMembers(guild.id, formatted, GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT);
                closure_6(formatted);
              }
            }
            closure_10 = tmp14;
            if (cResult[17] === arr.length) {
              class X {
                constructor(str) {
                  str = str.trim();
                  const formatted = str.toLowerCase();
                  const obj = GuildUtilsDefault;
                  const members = obj.requestMembers(guild.id, formatted, GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT);
                  closure_6(formatted);
                }
              }
            }
            class L {
              constructor(arg0) {
                tmp = closure_2;
                obj = closure_1(closure_2[15]);
                tmp2 = obj.keys(pendingAdditions)[guild];
                closure_0 = tmp2;
                tmp3 = pendingAdditions[tmp2];
                if (null != tmp3) {
                  tmp4 = setPendingAdditions;
                  tmp5 = setPendingAdditions((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    delete obj[closure_0];
                    return obj;
                  });
                  tmp6 = closure_0;
                  AccessibilityAnnouncer = closure_0(tmp[16]).AccessibilityAnnouncer;
                  announce = AccessibilityAnnouncer.announce;
                  intl = closure_0(tmp[17]).intl;
                  obj1 = { text: null };
                  obj1.text = tmp3.display.text;
                  str = "polite";
                  announceResult = announce(intl.formatToPlainString(closure_0(tmp[17]).t.srlxB8, obj1), "polite");
                }
                return;
              }
            }
            cResult[17] = arr.length;
            cResult[18] = guild.id;
            cResult[19] = tmp14;
            cResult[20] = pendingAdditions;
            cResult[21] = role.id;
            cResult[22] = tmp11;
            cResult[23] = tmp17;
          }
          class L {
            constructor(arg0) {
              tmp = closure_2;
              obj = closure_1(closure_2[15]);
              tmp2 = obj.keys(pendingAdditions)[guild];
              closure_0 = tmp2;
              tmp3 = pendingAdditions[tmp2];
              if (null != tmp3) {
                tmp4 = setPendingAdditions;
                tmp5 = setPendingAdditions((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  delete obj[closure_0];
                  return obj;
                });
                tmp6 = closure_0;
                AccessibilityAnnouncer = closure_0(tmp[16]).AccessibilityAnnouncer;
                announce = AccessibilityAnnouncer.announce;
                intl = closure_0(tmp[17]).intl;
                obj1 = { text: null };
                obj1.text = tmp3.display.text;
                str = "polite";
                announceResult = announce(intl.formatToPlainString(closure_0(tmp[17]).t.srlxB8, obj1), "polite");
              }
              return;
            }
          }
          let tmp15 = null != maxCount;
          if (tmp15) {
            class X {
              constructor(str) {
                str = str.trim();
                const formatted = str.toLowerCase();
                const obj = GuildUtilsDefault;
                const members = obj.requestMembers(guild.id, formatted, GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT);
                closure_6(formatted);
              }
            }
            const _Object = Object;
            tmp15 = Object.keys(pendingAdditions).length >= maxCount;
          }
          cResult[14] = maxCount;
          cResult[15] = pendingAdditions;
          cResult[16] = tmp15;
        }
        class L {
          constructor(arg0) {
            tmp = closure_2;
            obj = closure_1(closure_2[15]);
            tmp2 = obj.keys(pendingAdditions)[guild];
            closure_0 = tmp2;
            tmp3 = pendingAdditions[tmp2];
            if (null != tmp3) {
              tmp4 = setPendingAdditions;
              tmp5 = setPendingAdditions((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                delete obj[closure_0];
                return obj;
              });
              tmp6 = closure_0;
              AccessibilityAnnouncer = closure_0(tmp[16]).AccessibilityAnnouncer;
              announce = AccessibilityAnnouncer.announce;
              intl = closure_0(tmp[17]).intl;
              obj1 = { text: null };
              obj1.text = tmp3.display.text;
              str = "polite";
              announceResult = announce(intl.formatToPlainString(closure_0(tmp[17]).t.srlxB8, obj1), "polite");
            }
            return;
          }
        }
        cResult[9] = pendingAdditions;
        cResult[10] = setPendingAdditions;
        cResult[11] = L;
      }
    }
    class F {
      constructor(arg0) {
        closure_0 = guild;
        roles = guild.roles;
        if (!roles.includes(role.id)) {
          tmp = setPendingAdditions;
          tmp2 = setPendingAdditions((arg0) => {
            let obj4;
            const obj = {};
            const merged = Object.assign(arg0);
            if (roles.id in obj) {
              delete obj[roles.id];
            } else {
              const obj2 = { text: roles.name, icon: metroImportDefault(native.Avatar, obj4) };
              obj4 = { source: roles.avatarSource, avatarStyle: null, style: null };
              ({ tagAvatar: obj3.avatarStyle, tagAvatar: obj3.style } = closure_4);
              const obj7 = { display: obj2, row: roles };
              obj[roles.id] = obj7;
            }
            return obj;
          });
        }
        return;
      }
    }
    cResult[5] = role.id;
    cResult[6] = setPendingAdditions;
    cResult[7] = tmp3.tagAvatar;
    cResult[8] = F;
    tmp11 = F;
  }
  const tmp8Result = tmp8(pendingAdditions[13]);
  const regExp = new RegExp(tmp8Result.escape(first), "i");
  const found = members.filter((name) => {
    const tmp = regExp.test(name.name) || regExp.test(name.userTag);
    return tmp;
  });
  cResult[2] = members;
  cResult[3] = first;
  cResult[4] = found;
  arr = found;
}) : ((pendingAdditions) => {
  let FlashList;
  let PX_12;
  let formatResult;
  let inActionSheet;
  let intl;
  let maxCount;
  let members;
  let num;
  let obj4;
  let require;
  let tmp11;
  let tmp14Result;
  let tmp4Result;
  let user;
  let values;
  ({ guild: require, role: importDefault, members } = pendingAdditions);
  pendingAdditions = pendingAdditions.pendingAdditions;
  ({ setPendingAdditions: react, inActionSheet, maxCount } = pendingAdditions);
  let closure_9;
  let length;
  const autoFocusSearch = pendingAdditions.autoFocusSearch;
  let tmp = length();
  let closure_5 = tmp;
  let tmp2 = pendingAdditions(react.useState(""), 2);
  const query = tmp2[0];
  let closure_7 = tmp2[1];
  let obj2 = { isKeyboardAwareOnAndroid: !inActionSheet };
  const items = [members, query];
  const insets = require("useSafeAreaInsetsKeyboardAware")(obj2).insets;
  const memo = react.useMemo(() => {
    const obj = RegexUtilsDefault;
    const regExp = new RegExp(obj.escape(first), "i");
    return members.filter((name) => {
      const tmp = regExp.test(name.name) || regExp.test(name.userTag);
      return tmp;
    });
  }, items);
  let tmp6 = null != maxCount;
  if (tmp6) {
    const _Object = Object;
    tmp6 = Object.keys(pendingAdditions).length >= maxCount;
  }
  closure_9 = tmp6;
  length = memo.length;
  const items1 = [length, query];
  const effect = react.useEffect(() => {
    if ("" !== first) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl4.intl;
      const obj = { count: length };
      announce(intl.formatToPlainString(intl4.t.ZGVL3g, obj), "polite");
    }
  }, items1);
  const tmp10 = require("defaultMVCPConfig");
  if (inActionSheet) {
    FlashList = tmp10.BottomSheetFlashList;
    tmp11 = require;
  } else {
    FlashList = tmp10.FlashList;
    tmp11 = require;
  }
  const obj3 = { style: tmp.inputContainer, children: closure_7(tmp4Result, obj4) };
  obj4 = {
    placeholder: intl.string(tmp11(members[17]).t.vMiCaQ),
    tags: values.map((row) => {
      const obj = { id };
      id = row.row.id;
      const merged = Object.assign(row.display);
      return obj;
    }),
    onChangeText(str) {
      str = str.trim();
      const formatted = str.toLowerCase();
      const obj = GuildUtilsDefault;
      members = obj.requestMembers(require.id, formatted, GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT);
      closure_7(formatted);
    },
    onRemove(arg0) {
      let obj = SnowflakeUtilsDefault;
      const tmp2 = obj.keys(pendingAdditions)[arg0];
      let closure_0 = tmp2;
      if (null != pendingAdditions[tmp2]) {
        react((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          delete obj[closure_0];
          return obj;
        });
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl4.intl;
        const obj2 = { text: pendingAdditions[tmp2].display.text };
        announce(intl.formatToPlainString(intl4.t.srlxB8, obj2), "polite");
      }
    },
    autoFocus: autoFocusSearch,
    inActionSheet
  };
  tmp4Result = require("TagListInput");
  intl = tmp11(members[17]).intl;
  values = Object.values(pendingAdditions);
  const children = [closure_7(closure_5, obj3), ];
  const tmp12 = closure_9;
  const tmp13 = memo;
  if (0 === memo.length) {
    const obj5 = { Illustration: tmp11(members[22]).NoResultsAlt, bodyStyle: tmp.emptyStateText, body: formatResult };
    const EmptyState = tmp11(members[14]).EmptyState;
    if ("" !== query) {
      const intl3 = tmp11(members[17]).intl;
      const obj6 = { query };
      formatResult = intl3.format(tmp11(members[17]).t.ErpIY3, obj6);
    } else {
      const intl2 = tmp11(members[17]).intl;
      formatResult = intl2.string(tmp11(members[17]).t.oB9grQ);
    }
    tmp14Result = tmp14(EmptyState, obj5);
  } else {
    let obj7 = { paddingHorizontal: require("native").space.PX_16, paddingTop: require("native").space.PX_12, paddingBottom: PX_12 + num };
    num = 0;
    PX_12 = require("native").space.PX_12;
    if (inActionSheet) {
      num = insets.bottom;
    }
    const obj8 = {
      contentContainerStyle: obj7,
      renderItem(item) {
          let tmp5;
          item = item.item;
          const index = item.index;
          let roles = item.roles;
          let hasItem = roles.includes(user.id);
          let obj = {
            start: 0 === index,
            end: index === memo.length - 1,
            guildId: item.id,
            userId: item.id,
            onPress() {
              let closure_0 = item;
              const roles = item.roles;
              if (!roles.includes(importDefault.id)) {
                react((arg0) => {
                  let obj4;
                  const obj = {};
                  const merged = Object.assign(arg0);
                  if (id.id in obj) {
                    delete obj[id.id];
                  } else {
                    const obj2 = { text: id.name, icon: closure_3_7(item(members[14]).Avatar, obj4) };
                    obj4 = { source: id.avatarSource, avatarStyle: null, style: null };
                    ({ tagAvatar: obj3.avatarStyle, tagAvatar: obj3.style } = closure_2_5);
                    const obj7 = { display: obj2, row: id };
                    obj[id.id] = obj7;
                  }
                  return obj;
                });
              }
            },
            disabled: tmp5,
            checked: hasItem
          };
          tmp5 = hasItem;
          if (!tmp5) {
            tmp5 = closure_9 && !tmp2;
          }
          if (!hasItem) {
            hasItem = tmp2;
          }
          return closure_7(closure_1_11, obj);
        },
      data: memo,
      extraData: pendingAdditions,
      keyboardShouldPersistTaps: "always"
    };
    tmp14Result = tmp14(FlashList, obj8);
  }
  children[1] = tmp14Result;
  return tmp12(tmp13, { children });
});
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let addMembersDescription;
  let container;
  let first;
  let first1;
  let items;
  let tmp11;
  let tmp8;
  let tmp9;
  const tmp = guild;
  let obj = guild(first1[8]);
  const cResult = obj.c(38);
  guild = guild.guild;
  const role = guild.role;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  [first1, tmp8] = react.useState(first);
  if (cResult[1] !== role.id) {
    const fn = function f(roles) {
      roles = roles.roles;
      return !roles.includes(role.id);
    };
    cResult[1] = role.id;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(first1[19]);
  const guildMembers = tmpResult.useGuildMembers(guild.id, tmp9);
  let id = guild.id;
  if (cResult[3] !== first1) {
    const _Object = Object;
    const keys = Object.keys(first1);
    cResult[3] = first1;
    cResult[4] = keys;
    tmp11 = keys;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === guild.id) {
    let tmp13;
    if (cResult[6] === tmp11) {
      tmp13 = cResult[7];
    }
    const tmpResult2 = tmp(first1[23]);
    const subscribeGuildMembers = tmpResult2.useSubscribeGuildMembers(tmp13, "AddMembersActionSheet");
    if (cResult[8] === guild.id) {
      if (cResult[9] === first1) {
        let tmp15;
        let tmp16;
        let tmp19;
        let tmp21;
        if (cResult[10] === role.id) {
          tmp15 = cResult[11];
        }
        if (cResult[12] !== first1) {
          const _Object2 = Object;
          let tmp17 = 0 === Object.keys(first1).length;
          if (!tmp17) {
            const _Object3 = Object;
            tmp17 = Object.keys(first1).length > MAX_BULK_ROLE_MEMBERS_ADD;
          }
          class T {
            constructor() {
              const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
              const id = guild.id;
              const id2 = role.id;
              GuildSettingsActionCreatorsDefault;
              const obj = SnowflakeUtilsDefault;
              bulkAddMemberRoles(id, id2, obj.keys(first1));
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
          }
          cResult[13] = tmp17;
          tmp16 = tmp17;
        } else {
          tmp16 = cResult[13];
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[17]).intl;
          cResult[14] = intl.string(tmp(first1[17]).t.ZYOK46);
          intl.string(tmp(first1[17]).t.ZYOK46);
          class T {
            constructor() {
              const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
              const id = guild.id;
              const id2 = role.id;
              GuildSettingsActionCreatorsDefault;
              const obj = SnowflakeUtilsDefault;
              bulkAddMemberRoles(id, id2, obj.keys(first1));
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
          }
        } else {
          tmp19 = cResult[14];
        }
        class T {
          constructor() {
            const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
            const id = guild.id;
            const id2 = role.id;
            GuildSettingsActionCreatorsDefault;
            const obj = SnowflakeUtilsDefault;
            bulkAddMemberRoles(id, id2, obj.keys(first1));
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
          }
        }
        const name = role.name;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[17]).intl;
          cResult[15] = intl2.string(tmp(first1[17]).t.OYkgVk);
          intl2.string(tmp(first1[17]).t.OYkgVk);
          class T {
            constructor() {
              const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
              const id = guild.id;
              const id2 = role.id;
              GuildSettingsActionCreatorsDefault;
              const obj = SnowflakeUtilsDefault;
              bulkAddMemberRoles(id, id2, obj.keys(first1));
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
          }
        } else {
          tmp21 = cResult[15];
        }
        let str2 = "primary";
        if (tmp16) {
          str2 = "secondary";
        }
        if (cResult[16] === tmp15) {
          if (cResult[17] === tmp16) {
            let tmp23;
            if (cResult[18] === str2) {
              tmp23 = cResult[19];
            }
            if (cResult[20] === role.name) {
              let tmp26;
              let tmp31;
              if (cResult[21] === tmp23) {
                tmp26 = cResult[22];
              }
              const _Symbol2 = Symbol;
              ({ container, addMembersDescription } = tmp4);
              class T {
                constructor() {
                  const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
                  const id = guild.id;
                  const id2 = role.id;
                  GuildSettingsActionCreatorsDefault;
                  const obj = SnowflakeUtilsDefault;
                  bulkAddMemberRoles(id, id2, obj.keys(first1));
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideActionSheet();
                }
              }
              if (cResult[24] !== tmp4.addMembersDescription) {
                const obj3 = { variant: "text-sm/normal", style: addMembersDescription, children: tmp30 };
                const tmp33 = closure_7(tmp(first1[28]).Text, obj3);
                class T {
                  constructor() {
                    const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
                    const id = guild.id;
                    const id2 = role.id;
                    GuildSettingsActionCreatorsDefault;
                    const obj = SnowflakeUtilsDefault;
                    bulkAddMemberRoles(id, id2, obj.keys(first1));
                    const obj2 = ActionSheetActionCreatorsDefault;
                    obj2.hideActionSheet();
                  }
                }
                cResult[24] = tmp4.addMembersDescription;
                cResult[25] = tmp33;
                tmp31 = tmp33;
              } else {
                tmp31 = cResult[25];
              }
              if (cResult[26] === guild) {
                if (cResult[27] === guildMembers) {
                  if (cResult[28] === first1) {
                    let tmp34;
                    if (cResult[29] === role) {
                      tmp34 = cResult[30];
                    }
                    if (cResult[31] === tmp4.container) {
                      if (cResult[32] === tmp31) {
                        let tmp39;
                        if (cResult[33] === tmp34) {
                          tmp39 = cResult[34];
                        }
                        if (cResult[35] === tmp26) {
                          let tmp43;
                          if (cResult[36] === tmp39) {
                            tmp43 = cResult[37];
                          }
                          return tmp43;
                        }
                        const obj4 = { scrollable: true, header: tmp26, startExpanded: true, children: null };
                        class T {
                          constructor() {
                            const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
                            const id = guild.id;
                            const id2 = role.id;
                            GuildSettingsActionCreatorsDefault;
                            const obj = SnowflakeUtilsDefault;
                            bulkAddMemberRoles(id, id2, obj.keys(first1));
                            const obj2 = ActionSheetActionCreatorsDefault;
                            obj2.hideActionSheet();
                          }
                        }
                        const tmp45 = closure_7(tmp(first1[29]).BottomSheet, obj4);
                        cResult[35] = tmp26;
                        cResult[36] = tmp39;
                        cResult[37] = tmp45;
                        tmp43 = tmp45;
                      }
                    }
                    const obj5 = { style: null, children: items };
                    class T {
                      constructor() {
                        const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
                        const id = guild.id;
                        const id2 = role.id;
                        GuildSettingsActionCreatorsDefault;
                        const obj = SnowflakeUtilsDefault;
                        bulkAddMemberRoles(id, id2, obj.keys(first1));
                        const obj2 = ActionSheetActionCreatorsDefault;
                        obj2.hideActionSheet();
                      }
                    }
                    items = [tmp31, tmp34];
                    const tmp42 = closure_9(View, obj5);
                    cResult[31] = tmp4.container;
                    cResult[32] = tmp31;
                    cResult[33] = tmp34;
                    cResult[34] = tmp42;
                    tmp39 = tmp42;
                  }
                }
              }
              const obj6 = { guild, role, members: guildMembers, pendingAdditions: first1, setPendingAdditions: tmp8, autoFocusSearch: true, maxCount: MAX_BULK_ROLE_MEMBERS_ADD, inActionSheet: true };
              const tmp38 = closure_7(closure_12, obj6);
              cResult[26] = guild;
              cResult[27] = guildMembers;
              cResult[28] = first1;
              cResult[29] = role;
              cResult[30] = tmp38;
              tmp34 = tmp38;
            }
            const obj7 = { title: tmp19, subtitle: null, trailing: tmp23 };
            class T {
              constructor() {
                const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
                const id = guild.id;
                const id2 = role.id;
                GuildSettingsActionCreatorsDefault;
                const obj = SnowflakeUtilsDefault;
                bulkAddMemberRoles(id, id2, obj.keys(first1));
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet();
              }
            }
            const tmp28 = closure_7(tmp(first1[27]).BottomSheetTitleHeader, obj7);
            cResult[20] = role.name;
            cResult[21] = tmp23;
            cResult[22] = tmp28;
            tmp26 = tmp28;
          }
        }
        const obj8 = { size: "sm", text: tmp21, onPress: tmp15, variant: str2, disabled: tmp16 };
        const tmp25 = closure_7(tmp(first1[26]).Button, obj8);
        cResult[16] = tmp15;
        cResult[17] = tmp16;
        cResult[18] = str2;
        cResult[19] = tmp25;
        tmp23 = tmp25;
      }
    }
    class T {
      constructor() {
        const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
        const id = guild.id;
        const id2 = role.id;
        GuildSettingsActionCreatorsDefault;
        const obj = SnowflakeUtilsDefault;
        bulkAddMemberRoles(id, id2, obj.keys(first1));
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }
    }
    cResult[8] = guild.id;
    cResult[9] = first1;
    cResult[10] = role.id;
    cResult[11] = T;
    tmp15 = T;
  }
  const obj9 = {};
  obj9[id] = tmp11;
  cResult[5] = guild.id;
  cResult[6] = tmp11;
  cResult[7] = obj9;
  tmp13 = obj9;
}) : ((guild) => {
  let Button;
  let id;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj5;
  let obj7;
  let obj9;
  let pendingAdditions;
  let str;
  let tmp4;
  guild = guild.guild;
  const role = guild.role;
  pendingAdditions = undefined;
  const tmp = closure_10();
  [pendingAdditions, tmp4] = react.useState({});
  const items = [role.id];
  const callback = react.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items);
  let obj = guild(pendingAdditions[19]);
  const guildMembers = obj.useGuildMembers(guild.id, callback);
  let obj2 = guild(pendingAdditions[23]);
  const obj3 = { [id]: Object.keys(pendingAdditions) };
  id = guild.id;
  const subscribeGuildMembers = obj2.useSubscribeGuildMembers(obj3, "AddMembersActionSheet");
  let tmp10 = 0 === Object.keys(pendingAdditions).length;
  if (!tmp10) {
    const _Object = Object;
    tmp10 = Object.keys(pendingAdditions).length > MAX_BULK_ROLE_MEMBERS_ADD;
  }
  BottomSheet = tmp6(tmp7[29]).BottomSheet;
  const obj4 = { title: intl.string(guild(pendingAdditions[17]).t.ZYOK46), subtitle: role.name, trailing: closure_7(Button, obj5) };
  const BottomSheetTitleHeader = tmp6(tmp7[27]).BottomSheetTitleHeader;
  intl = tmp6(tmp7[17]).intl;
  obj5 = {
    size: "sm",
    text: intl2.string(guild(pendingAdditions[17]).t.OYkgVk),
    onPress() {
      const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
      const id = guild.id;
      const id2 = role.id;
      GuildSettingsActionCreatorsDefault;
      const obj = SnowflakeUtilsDefault;
      bulkAddMemberRoles(id, id2, obj.keys(first));
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    },
    variant: str,
    disabled: tmp10
  };
  Button = tmp6(tmp7[26]).Button;
  intl2 = tmp6(tmp7[17]).intl;
  str = "primary";
  if (tmp10) {
    str = "secondary";
  }
  const obj6 = { scrollable: true, header: closure_7(BottomSheetTitleHeader, obj4), startExpanded: true, children: closure_9(View, obj7) };
  obj7 = { style: tmp.container, children: items1 };
  const obj8 = { variant: "text-sm/normal", style: tmp.addMembersDescription, children: intl3.format(guild(pendingAdditions[17]).t["3OxP4q"], obj9) };
  const Text = tmp6(tmp7[28]).Text;
  intl3 = tmp6(tmp7[17]).intl;
  obj9 = { numMembers: MAX_BULK_ROLE_MEMBERS_ADD };
  items1 = [closure_7(Text, obj8), ];
  const obj10 = { guild, role, members: guildMembers, pendingAdditions, setPendingAdditions: tmp4, autoFocusSearch: true, maxCount: MAX_BULK_ROLE_MEMBERS_ADD, inActionSheet: true };
  items1[1] = closure_7(closure_12, obj10);
  return closure_7(BottomSheet, obj6);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx");

export default tmp5;
export const AddMembersBody = tmp4;