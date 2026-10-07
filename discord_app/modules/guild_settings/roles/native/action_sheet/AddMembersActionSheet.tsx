// === Module 17832: action_sheet/AddMembersActionSheet ===

// Module 17832 (action_sheet/AddMembersActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4596 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4600 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import RegexUtilsDefault from "RegexUtils" /* 4880 */;
import GuildUtilsDefault from "GuildUtils" /* 5711 */;
import FormCheckbox from "FormCheckbox" /* 5998 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 10693 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 17831 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let MAX_BULK_ROLE_MEMBERS_ADD = fn(17826).MAX_BULK_ROLE_MEMBERS_ADD;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 }, inputContainer: null, tagAvatar: null, emptyStateText: null, addMembersDescription: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj2.inputContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm };
obj2.tagAvatar = size;
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
obj2.emptyStateText = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj5 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.addMembersDescription = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ start, end, guildId, userId, onPress, disabled, checked } = arg0);
  if (cResult[0] === checked) {
    if (cResult[1] === disabled) {
      let tmp4 = cResult[2];
    }
    const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp4);
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    if (cResult[3] !== checked) {
      const obj2 = { checked };
      const tmp8 = React5(FormCheckbox.FormCheckbox, obj2);
      cResult[3] = checked;
      cResult[4] = tmp8;
      let tmp6 = tmp8;
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
                    if (cResult[13] === userId) {
                      let tmp9 = cResult[14];
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
    const tmp12 = React5(DetailedGuildIdentityUserRowDefault, obj3);
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
    const tmpResult = useA11yRolesNative;
  }
  const obj4 = { checked, disabled };
  cResult[0] = checked;
  cResult[1] = disabled;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : ((arg0) => {
  ({ disabled, checked } = arg0);
  ({ start, end, guildId, userId, onPress } = arg0);
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj2 = { start, end, guildId, userId, onPress, disabled, trailing: null, accessibilityRole: null, accessibilityState: null };
  obj2.trailing = React5(FormCheckbox.FormCheckbox, { checked });
  obj2.accessibilityRole = accessibilityRole;
  obj2.accessibilityState = accessibilityState;
  return React5(DetailedGuildIdentityUserRowDefault, obj2);
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(pendingAdditions[8]).c(52);
  guild = guild.guild;
  const role = guild.role;
  ({ members, pendingAdditions } = guild);
  const setPendingAdditions = guild.setPendingAdditions;
  ({ autoFocusSearch, inActionSheet, maxCount } = guild);
  const tmp3 = closure_10();
  noop = tmp3;
  const tmp4 = setPendingAdditions(noop.useState(""), 2);
  const first = tmp4[0];
  MAX_BULK_ROLE_MEMBERS_ADD = tmp4[1];
  if (cResult[0] !== !inActionSheet) {
    let obj2 = { isKeyboardAwareOnAndroid: tmp6 };
    cResult[0] = tmp6;
    cResult[1] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  const insets = role(pendingAdditions[12])(tmp7).insets;
  if (cResult[2] === members) {
    if (cResult[3] === first) {
      let arr = cResult[4];
    }
    if (cResult[5] === role.id) {
      if (cResult[6] === setPendingAdditions) {
        if (cResult[7] === tmp3.tagAvatar) {
          let tmp11 = cResult[8];
        }
        closure_9 = tmp11;
        if (cResult[9] === pendingAdditions) {
          if (cResult[12] !== guild.id) {
            class X {
              constructor(arg0) {
                str = guild.trim();
                formatted = str.toLowerCase();
                obj = closure_1(closure_2[18]);
                members = obj.requestMembers(guild.id, formatted, closure_0(closure_2[19]).ADD_MEMBER_QUERY_LIMIT);
                tmp3 = closure_6(formatted);
                return;
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
                    const merged = Object.assign(arg0);
                    delete tmp[tmp2];
                    return {};
                  });
                  tmp6 = closure_0;
                  AccessibilityAnnouncer = closure_0(tmp[16]).AccessibilityAnnouncer;
                  intl = closure_0(tmp[17]).intl;
                  obj1 = { text: null };
                  obj1.text = tmp3.display.text;
                  str = "polite";
                  announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(tmp[17]).t.srlxB8, obj1), "polite");
                }
                return;
              }
            }
            cResult[13] = X;
          } else {
            class X {
              constructor(arg0) {
                str = guild.trim();
                formatted = str.toLowerCase();
                obj = closure_1(closure_2[18]);
                members = obj.requestMembers(guild.id, formatted, closure_0(closure_2[19]).ADD_MEMBER_QUERY_LIMIT);
                tmp3 = closure_6(formatted);
                return;
              }
            }
          }
          if (cResult[14] === maxCount) {
            class X {
              constructor(arg0) {
                str = guild.trim();
                formatted = str.toLowerCase();
                obj = closure_1(closure_2[18]);
                members = obj.requestMembers(guild.id, formatted, closure_0(closure_2[19]).ADD_MEMBER_QUERY_LIMIT);
                tmp3 = closure_6(formatted);
                return;
              }
            }
            closure_10 = tmp14;
            if (cResult[17] === arr.length) {
              class X {
                constructor(arg0) {
                  str = guild.trim();
                  formatted = str.toLowerCase();
                  obj = closure_1(closure_2[18]);
                  members = obj.requestMembers(guild.id, formatted, closure_0(closure_2[19]).ADD_MEMBER_QUERY_LIMIT);
                  tmp3 = closure_6(formatted);
                  return;
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
                    const merged = Object.assign(arg0);
                    delete tmp[tmp2];
                    return {};
                  });
                  tmp6 = closure_0;
                  AccessibilityAnnouncer = closure_0(tmp[16]).AccessibilityAnnouncer;
                  intl = closure_0(tmp[17]).intl;
                  obj1 = { text: null };
                  obj1.text = tmp3.display.text;
                  str = "polite";
                  announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(tmp[17]).t.srlxB8, obj1), "polite");
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
                  const merged = Object.assign(arg0);
                  delete tmp[tmp2];
                  return {};
                });
                tmp6 = closure_0;
                AccessibilityAnnouncer = closure_0(tmp[16]).AccessibilityAnnouncer;
                intl = closure_0(tmp[17]).intl;
                obj1 = { text: null };
                obj1.text = tmp3.display.text;
                str = "polite";
                announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(tmp[17]).t.srlxB8, obj1), "polite");
              }
              return;
            }
          }
          let tmp15 = null != maxCount;
          if (tmp15) {
            class X {
              constructor(arg0) {
                str = guild.trim();
                formatted = str.toLowerCase();
                obj = closure_1(closure_2[18]);
                members = obj.requestMembers(guild.id, formatted, closure_0(closure_2[19]).ADD_MEMBER_QUERY_LIMIT);
                tmp3 = closure_6(formatted);
                return;
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
                const merged = Object.assign(arg0);
                delete tmp[tmp2];
                return {};
              });
              tmp6 = closure_0;
              AccessibilityAnnouncer = closure_0(tmp[16]).AccessibilityAnnouncer;
              intl = closure_0(tmp[17]).intl;
              obj1 = { text: null };
              obj1.text = tmp3.display.text;
              str = "polite";
              announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(tmp[17]).t.srlxB8, obj1), "polite");
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
            const obj = {};
            const merged = Object.assign(arg0);
            if (id.id in obj) {
              id = tmp4.id;
              delete tmp[tmp2];
            } else {
              const obj2 = { text: tmp4.name, icon: null };
              const obj4 = { source: tmp4.avatarSource, avatarStyle: null, style: null };
              ({ tagAvatar: obj3.avatarStyle, tagAvatar: obj3.style } = closure_4);
              obj2.icon = React5(native.Avatar, obj4);
              const obj7 = { display: obj2, row: tmp4 };
              obj[tmp4.id] = obj7;
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
  let obj = guild(pendingAdditions[8]);
  const regExp = new RegExp(role(pendingAdditions[13]).escape(first), "i");
  const found = members.filter((name) => regExp.test(name.name) || regExp.test(name.userTag));
  cResult[2] = members;
  cResult[3] = first;
  cResult[4] = found;
  arr = found;
  const tmp8Result = role(pendingAdditions[13]);
}) : ((pendingAdditions) => {
  ({ guild: require, role: importDefault, members } = pendingAdditions);
  pendingAdditions = pendingAdditions.pendingAdditions;
  ({ setPendingAdditions: noop, inActionSheet, maxCount } = pendingAdditions);
  closure_9 = undefined;
  let length;
  const tmp = length();
  closure_5 = tmp;
  let tmp2 = pendingAdditions(noop.useState(""), 2);
  const query = tmp2[0];
  closure_7 = tmp2[1];
  let obj6 = members;
  const items = [members, query];
  const memo = noop.useMemo(() => {
    const regExp = new RegExp(RegexUtilsDefault.escape(first), "i");
    return members.filter((name) => regExp.test(name.name) || regExp.test(name.userTag));
  }, items);
  let tmp5 = null != maxCount;
  if (tmp5) {
    const _Object = Object;
    tmp5 = Object.keys(pendingAdditions).length >= maxCount;
  }
  closure_9 = tmp5;
  length = memo.length;
  const items1 = [length, query];
  const effect = noop.useEffect(() => {
    if ("" !== first) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: length };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ZGVL3g, obj), "polite");
    }
  }, items1);
  const tmp9 = require("module_8404");
  if (inActionSheet) {
    let FlashList = tmp9.BottomSheetFlashList;
    let ErpIY3 = require;
  } else {
    FlashList = tmp9.FlashList;
    ErpIY3 = require;
  }
  const obj3 = { style: tmp.inputContainer, children: null };
  let obj4 = { placeholder: null, tags: null, onChangeText: null, onRemove: null, autoFocus: null, inActionSheet: null };
  let intl = ErpIY3(obj6[17]).intl;
  obj4.placeholder = intl.string(ErpIY3(obj6[17]).t.vMiCaQ);
  const values = Object.values(pendingAdditions);
  obj4.tags = values.map((display) => {
    const obj = {};
    const merged = Object.assign(display.display);
    obj.id = display.row.id;
    return obj;
  });
  obj4.onChangeText = function onChangeText(str) {
    str = str.trim();
    const formatted = str.toLowerCase();
    members = GuildUtilsDefault.requestMembers(_require.id, formatted, GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT);
    closure_7(formatted);
  };
  obj4.onRemove = function onRemove(arg0) {
    const tmp2 = SnowflakeUtilsDefault.keys(pendingAdditions)[arg0];
    closure_0 = tmp2;
    if (null != pendingAdditions[tmp2]) {
      noop((arg0) => {
        const merged = Object.assign(arg0);
        delete tmp[tmp2];
        return {};
      });
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj2 = { text: tmp3.display.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj2), "polite");
    }
  };
  obj4.autoFocus = pendingAdditions.autoFocusSearch;
  obj4.inActionSheet = inActionSheet;
  obj3.children = closure_7(require("TagListInput"), obj4);
  const items2 = [closure_7(closure_5, obj3), ];
  if (0 === memo.length) {
    const obj5 = { Illustration: ErpIY3(obj6[22]).NoResultsAlt, bodyStyle: tmp.emptyStateText, body: null };
    if ("" !== query) {
      const intl3 = ErpIY3(obj6[17]).intl;
      ErpIY3 = ErpIY3(obj6[17]).t.ErpIY3;
      obj6 = { query };
      let formatResult = intl3.format(ErpIY3, obj6);
    } else {
      const intl2 = ErpIY3(obj6[17]).intl;
      formatResult = intl2.string(ErpIY3(obj6[17]).t.oB9grQ);
    }
    obj5.body = formatResult;
    tmp12(ErpIY3(obj6[14]).EmptyState, obj5);
  } else {
    let obj7 = { paddingHorizontal: require("native").space.PX_16, paddingTop: require("native").space.PX_12, paddingBottom: null };
    let num = 0;
    if (inActionSheet) {
      num = require("useSafeAreaInsetsKeyboardAware")(obj2).insets.bottom;
    }
    const obj8 = { contentContainerStyle: null, renderItem: null, data: null, extraData: null, keyboardShouldPersistTaps: "always" };
    obj7.paddingBottom = require("native").space.PX_12 + num;
    obj8.contentContainerStyle = obj7;
    obj8.renderItem = function renderItem(item) {
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
          let id = item;
          const roles = item.roles;
          if (!roles.includes(user.id)) {
            noop((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              if (id.id in obj) {
                id = tmp4.id;
                delete tmp[tmp2];
              } else {
                const obj2 = { text: tmp4.name, icon: null };
                const obj4 = { source: tmp4.avatarSource, avatarStyle: null, style: null };
                ({ tagAvatar: obj3.avatarStyle, tagAvatar: obj3.style } = closure_2_5);
                obj2.icon = closure_7(require("native").Avatar, obj4);
                const obj7 = { display: obj2, row: tmp4 };
                obj[tmp4.id] = obj7;
              }
              return obj;
            });
          }
        },
        disabled: null,
        checked: null
      };
      let tmp5 = hasItem;
      if (!hasItem) {
        let tmp6 = closure_9;
        if (closure_9) {
          tmp6 = !tmp2;
        }
        tmp5 = tmp6;
      }
      obj.disabled = tmp5;
      if (!hasItem) {
        hasItem = tmp2;
      }
      obj.checked = hasItem;
      return closure_7(closure_1_11, obj);
    };
    obj8.data = memo;
    obj8.extraData = pendingAdditions;
    const obj9 = { children: null };
    items2[1] = tmp12(FlashList, obj8);
    obj9.children = items2;
    return tmp10(tmp11, obj9);
  }
  obj2 = { isKeyboardAwareOnAndroid: !inActionSheet };
  tmp10 = closure_9;
  tmp11 = memo;
  const tmp4Result = require("TagListInput");
});
let closure_12 = tmp3;
ReactCompilerGating = fn(558);
let obj6 = { marginHorizontal: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(first1[8]).c(38);
  guild = guild.guild;
  const role = guild.role;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp6 = _slicedToArray(noop.useState(first), 2);
  first1 = tmp6[0];
  if (cResult[1] !== role.id) {
    const fn = function f(roles) {
      roles = roles.roles;
      return !roles.includes(role.id);
    };
    cResult[1] = role.id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = guild(first1[8]);
  const guildMembers = guild(first1[19]).useGuildMembers(guild.id, tmp8);
  if (cResult[3] !== first1) {
    const _Object = Object;
    const keys = Object.keys(first1);
    cResult[3] = first1;
    cResult[4] = keys;
    let tmp10 = keys;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === guild.id) {
    if (cResult[6] === tmp10) {
      let tmp12 = cResult[7];
    }
    const subscribeGuildMembers = tmp(tmp2[23]).useSubscribeGuildMembers(tmp12, "AddMembersActionSheet");
    if (cResult[8] === guild.id) {
      if (cResult[9] === first1) {
        if (cResult[10] === role.id) {
          let tmp14 = cResult[11];
        }
        if (cResult[12] !== first1) {
          const _Object2 = Object;
          let tmp16 = 0 === Object.keys(first1).length;
          if (!tmp16) {
            const _Object3 = Object;
            tmp16 = Object.keys(first1).length > MAX_BULK_ROLE_MEMBERS_ADD;
          }
          class T {
            constructor() {
              obj = closure_1(closure_2[24]);
              obj2 = closure_1(closure_2[15]);
              bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
              obj3 = closure_1(closure_2[25]);
              hideActionSheetResult = obj3.hideActionSheet();
              return;
            }
          }
          cResult[13] = tmp16;
          let tmp15 = tmp16;
        } else {
          tmp15 = cResult[13];
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[17]).intl;
          cResult[14] = intl.string(tmp(tmp2[17]).t.ZYOK46);
          class T {
            constructor() {
              obj = closure_1(closure_2[24]);
              obj2 = closure_1(closure_2[15]);
              bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
              obj3 = closure_1(closure_2[25]);
              hideActionSheetResult = obj3.hideActionSheet();
              return;
            }
          }
          const stringResult = intl.string(tmp(tmp2[17]).t.ZYOK46);
        } else {
          const tmp18 = cResult[14];
        }
        class T {
          constructor() {
            obj = closure_1(closure_2[24]);
            obj2 = closure_1(closure_2[15]);
            bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
            obj3 = closure_1(closure_2[25]);
            hideActionSheetResult = obj3.hideActionSheet();
            return;
          }
        }
        const name = role.name;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[17]).intl;
          cResult[15] = intl2.string(tmp(tmp2[17]).t.OYkgVk);
          class T {
            constructor() {
              obj = closure_1(closure_2[24]);
              obj2 = closure_1(closure_2[15]);
              bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
              obj3 = closure_1(closure_2[25]);
              hideActionSheetResult = obj3.hideActionSheet();
              return;
            }
          }
          const stringResult1 = intl2.string(tmp(tmp2[17]).t.OYkgVk);
        } else {
          const tmp20 = cResult[15];
        }
        let str2 = "primary";
        if (tmp15) {
          str2 = "secondary";
        }
        if (cResult[16] === tmp14) {
          if (cResult[17] === tmp15) {
            if (cResult[18] === str2) {
              let tmp22 = cResult[19];
            }
            if (cResult[20] === role.name) {
              if (cResult[21] === tmp22) {
                let tmp25 = cResult[22];
              }
              const _Symbol2 = Symbol;
              ({ container, addMembersDescription } = tmp4);
              class T {
                constructor() {
                  obj = closure_1(closure_2[24]);
                  obj2 = closure_1(closure_2[15]);
                  bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
                  obj3 = closure_1(closure_2[25]);
                  hideActionSheetResult = obj3.hideActionSheet();
                  return;
                }
              }
              if (cResult[24] !== tmp4.addMembersDescription) {
                const obj3 = { variant: "text-sm/normal", style: addMembersDescription, children: tmp29 };
                const tmp32 = closure_7(tmp(tmp2[28]).Text, obj3);
                class T {
                  constructor() {
                    obj = closure_1(closure_2[24]);
                    obj2 = closure_1(closure_2[15]);
                    bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
                    obj3 = closure_1(closure_2[25]);
                    hideActionSheetResult = obj3.hideActionSheet();
                    return;
                  }
                }
                cResult[24] = tmp4.addMembersDescription;
                cResult[25] = tmp32;
                let tmp30 = tmp32;
              } else {
                tmp30 = cResult[25];
              }
              if (cResult[26] === guild) {
                if (cResult[27] === guildMembers) {
                  if (cResult[28] === first1) {
                    if (cResult[29] === role) {
                      let tmp33 = cResult[30];
                    }
                    if (cResult[31] === tmp4.container) {
                      if (cResult[32] === tmp30) {
                        if (cResult[33] === tmp33) {
                          let tmp38 = cResult[34];
                        }
                        if (cResult[35] === tmp25) {
                          if (cResult[36] === tmp38) {
                            let tmp42 = cResult[37];
                          }
                          return tmp42;
                        }
                        const obj4 = { scrollable: true, header: tmp25, startExpanded: true, children: null };
                        class T {
                          constructor() {
                            obj = closure_1(closure_2[24]);
                            obj2 = closure_1(closure_2[15]);
                            bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
                            obj3 = closure_1(closure_2[25]);
                            hideActionSheetResult = obj3.hideActionSheet();
                            return;
                          }
                        }
                        const tmp44 = closure_7(tmp(tmp2[29]).BottomSheet, obj4);
                        cResult[35] = tmp25;
                        cResult[36] = tmp38;
                        cResult[37] = tmp44;
                        tmp42 = tmp44;
                      }
                    }
                    const obj5 = { style: null, children: null };
                    class T {
                      constructor() {
                        obj = closure_1(closure_2[24]);
                        obj2 = closure_1(closure_2[15]);
                        bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
                        obj3 = closure_1(closure_2[25]);
                        hideActionSheetResult = obj3.hideActionSheet();
                        return;
                      }
                    }
                    const items = [tmp30, tmp33];
                    obj5.children = items;
                    const tmp41 = closure_9(View, obj5);
                    cResult[31] = tmp4.container;
                    cResult[32] = tmp30;
                    cResult[33] = tmp33;
                    cResult[34] = tmp41;
                    tmp38 = tmp41;
                  }
                }
              }
              const obj6 = { guild, role, members: guildMembers, pendingAdditions: first1, setPendingAdditions: tmp6[1], autoFocusSearch: true, maxCount: MAX_BULK_ROLE_MEMBERS_ADD, inActionSheet: true };
              const tmp37 = closure_7(closure_12, obj6);
              cResult[26] = guild;
              cResult[27] = guildMembers;
              cResult[28] = first1;
              cResult[29] = role;
              cResult[30] = tmp37;
              tmp33 = tmp37;
            }
            const obj7 = { title: tmp18, subtitle: null, trailing: null };
            class T {
              constructor() {
                obj = closure_1(closure_2[24]);
                obj2 = closure_1(closure_2[15]);
                bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
                obj3 = closure_1(closure_2[25]);
                hideActionSheetResult = obj3.hideActionSheet();
                return;
              }
            }
            obj7.trailing = tmp22;
            const tmp27 = closure_7(tmp(tmp2[27]).BottomSheetTitleHeader, obj7);
            cResult[20] = role.name;
            cResult[21] = tmp22;
            cResult[22] = tmp27;
            tmp25 = tmp27;
          }
        }
        const obj8 = { size: "sm", text: tmp20, onPress: tmp14, variant: str2, disabled: tmp15 };
        const tmp24 = closure_7(tmp(tmp2[26]).Button, obj8);
        cResult[16] = tmp14;
        cResult[17] = tmp15;
        cResult[18] = str2;
        cResult[19] = tmp24;
        tmp22 = tmp24;
      }
    }
    class T {
      constructor() {
        obj = closure_1(closure_2[24]);
        obj2 = closure_1(closure_2[15]);
        bulkAddMemberRolesResult = obj.bulkAddMemberRoles(guild.id, role.id, obj2.keys(closure_2));
        obj3 = closure_1(closure_2[25]);
        hideActionSheetResult = obj3.hideActionSheet();
        return;
      }
    }
    cResult[8] = guild.id;
    cResult[9] = first1;
    cResult[10] = role.id;
    cResult[11] = T;
    tmp14 = T;
    const tmpResult2 = tmp(tmp2[23]);
  }
  const obj9 = {};
  obj9[guild.id] = tmp10;
  cResult[5] = guild.id;
  cResult[6] = tmp10;
  cResult[7] = obj9;
  tmp12 = obj9;
  const tmpResult = guild(first1[19]);
}) : ((guild) => {
  guild = guild.guild;
  const role = guild.role;
  const tmp = closure_10();
  const tmp2 = _slicedToArray(noop.useState({}), 2);
  const pendingAdditions = tmp2[0];
  const items = [role.id];
  const callback = noop.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items);
  const guildMembers = guild(pendingAdditions[19]).useGuildMembers(guild.id, callback);
  let obj = guild(pendingAdditions[19]);
  let obj2 = guild(pendingAdditions[23]);
  const subscribeGuildMembers = obj2.useSubscribeGuildMembers({ [guild.id]: Object.keys(pendingAdditions) }, "AddMembersActionSheet");
  let tmp9 = 0 === Object.keys(pendingAdditions).length;
  if (!tmp9) {
    const _Object = Object;
    tmp9 = Object.keys(pendingAdditions).length > MAX_BULK_ROLE_MEMBERS_ADD;
  }
  const obj4 = { title: null, subtitle: null, trailing: null };
  const intl = tmp5(tmp6[17]).intl;
  obj4.title = intl.string(guild(pendingAdditions[17]).t.ZYOK46);
  obj4.subtitle = role.name;
  const obj5 = { size: "sm", text: null, onPress: null, variant: null, disabled: null };
  const intl2 = tmp5(tmp6[17]).intl;
  obj5.text = intl2.string(guild(pendingAdditions[17]).t.OYkgVk);
  obj5.onPress = function onPress() {
    const obj = GuildSettingsActionCreatorsDefault;
    obj.bulkAddMemberRoles(guild.id, role.id, SnowflakeUtilsDefault.keys(first));
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let str = "primary";
  if (tmp9) {
    str = "secondary";
  }
  const obj6 = { scrollable: true, header: null, startExpanded: true, children: null };
  obj5.variant = str;
  obj5.disabled = tmp9;
  obj4.trailing = closure_7(guild(pendingAdditions[26]).Button, obj5);
  obj6.header = closure_7(guild(pendingAdditions[27]).BottomSheetTitleHeader, obj4);
  const obj7 = { style: tmp.container, children: null };
  const obj8 = { variant: "text-sm/normal", style: tmp.addMembersDescription, children: null };
  const intl3 = tmp5(tmp6[17]).intl;
  obj8.children = intl3.format(guild(pendingAdditions[17]).t["3OxP4q"], { numMembers: MAX_BULK_ROLE_MEMBERS_ADD });
  const items1 = [closure_7(guild(pendingAdditions[28]).Text, obj8), closure_7(closure_12, { guild, role, members: guildMembers, pendingAdditions, setPendingAdditions: tmp2[1], autoFocusSearch: true, maxCount: MAX_BULK_ROLE_MEMBERS_ADD, inActionSheet: true })];
  obj7.children = items1;
  obj6.children = closure_9(View, obj7);
  return closure_7(guild(pendingAdditions[29]).BottomSheet, obj6);
});
export const AddMembersBody = tmp3;