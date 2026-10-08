// discord_app/modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import useA11yRolesNative from "../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import RegexUtilsDefault from "../../../../../utils/RegexUtils.tsx";
import GuildUtilsDefault from "../../../../../utils/GuildUtils.tsx";
import FormCheckbox from "../../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import GuildSettingsActionCreatorsDefault from "../../../GuildSettingsActionCreators.tsx";
import DetailedGuildIdentityUserRowDefault from "../../../native/DetailedGuildIdentityUserRow.tsx";
import GuildSettingsRolesUtils from "../../GuildSettingsRolesUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const MAX_BULK_ROLE_MEMBERS_ADD = fn(18113).MAX_BULK_ROLE_MEMBERS_ADD;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 },
  inputContainer: null,
  tagAvatar: null,
  emptyStateText: null,
  addMembersDescription: null,
};
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
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MemberRow(arg0) {
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
        const obj3 = {
          start,
          end,
          guildId,
          userId,
          onPress,
          disabled,
          trailing: tmp6,
          accessibilityRole,
          accessibilityState,
        };
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
    }
  : function MemberRow(arg0) {
      ({ disabled, checked } = arg0);
      ({ start, end, guildId, userId, onPress } = arg0);
      const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
      ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
      const obj2 = {
        start,
        end,
        guildId,
        userId,
        onPress,
        disabled,
        trailing: null,
        accessibilityRole: null,
        accessibilityState: null,
      };
      obj2.trailing = React5(FormCheckbox.FormCheckbox, { checked });
      obj2.accessibilityRole = accessibilityRole;
      obj2.accessibilityState = accessibilityState;
      return React5(DetailedGuildIdentityUserRowDefault, obj2);
    };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddMembersBody(guild) {
      let ErpIY3 = guild;
      let obj = pendingAdditions;
      const cResult = guild(pendingAdditions[8]).c(52);
      guild = guild.guild;
      const role = guild.role;
      ({ members, pendingAdditions } = guild);
      const setPendingAdditions = guild.setPendingAdditions;
      ({ autoFocusSearch, inActionSheet, maxCount } = guild);
      let emptyStateText = closure_10();
      let tmp2 = setPendingAdditions(emptyStateText.useState(""), 2);
      const first = tmp2[0];
      closure_6 = tmp2[1];
      if (cResult[0] !== !inActionSheet) {
        let obj4 = { isKeyboardAwareOnAndroid: tmp4 };
        cResult[0] = tmp4;
        cResult[1] = obj4;
        let tmp5 = obj4;
      } else {
        tmp5 = cResult[1];
      }
      const insets = role(obj[12])(tmp5).insets;
      if (cResult[2] === members) {
        if (cResult[3] === first) {
          let data = cResult[4];
        }
        if (cResult[5] === role.id) {
          if (cResult[6] === setPendingAdditions) {
            if (cResult[7] === emptyStateText.tagAvatar) {
              let tmp9 = cResult[8];
            }
            closure_9 = tmp9;
            if (cResult[9] === pendingAdditions) {
              if (cResult[10] === setPendingAdditions) {
                let tmp10 = cResult[11];
              }
              if (cResult[12] !== guild.id) {
                function handleQueryChange(str) {
                  str = str.trim();
                  const formatted = str.toLowerCase();
                  const members = GuildUtilsDefault.requestMembers(
                    guild.id,
                    formatted,
                    GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT,
                  );
                  closure_6(formatted);
                }
                cResult[12] = guild.id;
                cResult[13] = handleQueryChange;
                let tmp11 = handleQueryChange;
              } else {
                tmp11 = cResult[13];
              }
              if (cResult[14] === maxCount) {
                if (cResult[15] === pendingAdditions) {
                  let tmp12 = cResult[16];
                }
                closure_10 = tmp12;
                if (cResult[17] === data.length) {
                  if (cResult[18] === guild.id) {
                    if (cResult[19] === tmp12) {
                      if (cResult[20] === pendingAdditions) {
                        if (cResult[21] === role.id) {
                          if (cResult[22] === tmp9) {
                            let tmp16 = cResult[23];
                          }
                          const length = data.length;
                          if (cResult[24] === first) {
                            if (cResult[25] === length) {
                              let tmp17 = cResult[26];
                              let tmp18 = cResult[27];
                            }
                            const effect = obj3.useEffect(tmp18, tmp17);
                            const ErpIY3Result = ErpIY3(obj[20]);
                            const tmp21 = inActionSheet ? ErpIY3Result.BottomSheetFlashList : ErpIY3Result.FlashList;
                            class K {
                              constructor() {
                                if ("" !== closure_5) {
                                  tmp = closure_0;
                                  tmp2 = closure_2;
                                  AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                                  intl = closure_0(closure_2[17]).intl;
                                  obj = { count: null };
                                  tmp3 = length;
                                  obj.count = length;
                                  str = "polite";
                                  announceResult = AccessibilityAnnouncer.announce(
                                    intl.formatToPlainString(closure_0(closure_2[17]).t.ZGVL3g, obj),
                                    "polite",
                                  );
                                }
                                return;
                              }
                            }
                            const _Symbol = Symbol;
                            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                              let intl = ErpIY3(obj[17]).intl;
                              class K {
                                constructor() {
                                  if ("" !== closure_5) {
                                    tmp = closure_0;
                                    tmp2 = closure_2;
                                    AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                                    intl = closure_0(closure_2[17]).intl;
                                    obj = { count: null };
                                    tmp3 = length;
                                    obj.count = length;
                                    str = "polite";
                                    announceResult = AccessibilityAnnouncer.announce(
                                      intl.formatToPlainString(closure_0(closure_2[17]).t.ZGVL3g, obj),
                                      "polite",
                                    );
                                  }
                                  return;
                                }
                              }
                              let tmp22 = intl.string(ErpIY3(obj[17]).t.vMiCaQ);
                              const stringResult = intl.string(ErpIY3(obj[17]).t.vMiCaQ);
                            } else {
                              tmp22 = cResult[28];
                            }
                            if (cResult[29] !== pendingAdditions) {
                              const _Object2 = Object;
                              const values = Object.values(pendingAdditions);
                              const mapped = values.map((display) => {
                                const obj = {};
                                const merged = Object.assign(display.display);
                                obj.id = display.row.id;
                                return obj;
                              });
                              class K {
                                constructor() {
                                  if ("" !== closure_5) {
                                    tmp = closure_0;
                                    tmp2 = closure_2;
                                    AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                                    intl = closure_0(closure_2[17]).intl;
                                    obj = { count: null };
                                    tmp3 = length;
                                    obj.count = length;
                                    str = "polite";
                                    announceResult = AccessibilityAnnouncer.announce(
                                      intl.formatToPlainString(closure_0(closure_2[17]).t.ZGVL3g, obj),
                                      "polite",
                                    );
                                  }
                                  return;
                                }
                              }
                              cResult[30] = mapped;
                              let tmp24 = mapped;
                            } else {
                              tmp24 = cResult[30];
                            }
                            if (cResult[31] === autoFocusSearch) {
                              if (cResult[32] === tmp11) {
                                if (cResult[33] === tmp10) {
                                  if (cResult[34] === inActionSheet) {
                                    if (cResult[35] === tmp24) {
                                      let tmp26 = cResult[36];
                                    }
                                    if (cResult[37] === emptyStateText.inputContainer) {
                                      if (cResult[38] === tmp26) {
                                        let tmp29 = cResult[39];
                                      }
                                      if (cResult[40] === tmp21) {
                                        if (cResult[41] === data) {
                                          if (cResult[42] === inActionSheet) {
                                            if (cResult[43] === insets) {
                                              if (cResult[44] === pendingAdditions) {
                                                if (cResult[45] === first) {
                                                  if (cResult[46] === tmp16) {
                                                    if (cResult[47] === emptyStateText.emptyStateText) {
                                                      if (cResult[49] === tmp29) {
                                                        if (cResult[50] === tmp34) {
                                                          let tmp40 = cResult[51];
                                                        }
                                                        return tmp40;
                                                      }
                                                      class K {
                                                        constructor() {
                                                          if ("" !== closure_5) {
                                                            tmp = closure_0;
                                                            tmp2 = closure_2;
                                                            AccessibilityAnnouncer = closure_0(
                                                              closure_2[16],
                                                            ).AccessibilityAnnouncer;
                                                            intl = closure_0(closure_2[17]).intl;
                                                            obj = { count: null };
                                                            tmp3 = length;
                                                            obj.count = length;
                                                            str = "polite";
                                                            announceResult = AccessibilityAnnouncer.announce(
                                                              intl.formatToPlainString(
                                                                closure_0(closure_2[17]).t.ZGVL3g,
                                                                obj,
                                                              ),
                                                              "polite",
                                                            );
                                                          }
                                                          return;
                                                        }
                                                      }
                                                      const items = [tmp29, cResult[48]];
                                                      tmp43[0] = items;
                                                      const tmp44 = closure_9(data, tmp43);
                                                      cResult[49] = tmp29;
                                                      cResult[50] = cResult[48];
                                                      cResult[51] = tmp44;
                                                      tmp40 = tmp44;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (0 !== data.length) {
                                        const obj5 = {
                                          paddingHorizontal: tmp6(obj[6]).space.PX_16,
                                          paddingTop: tmp6(obj[6]).space.PX_12,
                                          paddingBottom: null,
                                        };
                                        class K {
                                          constructor() {
                                            if ("" !== closure_5) {
                                              tmp = closure_0;
                                              tmp2 = closure_2;
                                              AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                                              intl = closure_0(closure_2[17]).intl;
                                              obj = { count: null };
                                              tmp3 = length;
                                              obj.count = length;
                                              str = "polite";
                                              announceResult = AccessibilityAnnouncer.announce(
                                                intl.formatToPlainString(closure_0(closure_2[17]).t.ZGVL3g, obj),
                                                "polite",
                                              );
                                            }
                                            return;
                                          }
                                        }
                                        if (inActionSheet) {
                                          const bottom = insets.bottom;
                                        }
                                        const obj6 = {
                                          contentContainerStyle: null,
                                          renderItem: null,
                                          data: null,
                                          extraData: null,
                                          keyboardShouldPersistTaps: "always",
                                        };
                                        obj5.paddingBottom = tmp6(obj[6]).space.PX_12 + bottom;
                                        obj6.contentContainerStyle = obj5;
                                        obj6.renderItem = tmp16;
                                        obj6.data = data;
                                        obj6.extraData = pendingAdditions;
                                        const tmp45Result = regExp(tmp21, obj6);
                                        cResult[40] = tmp21;
                                        cResult[41] = data;
                                        cResult[42] = inActionSheet;
                                        cResult[43] = insets;
                                        cResult[44] = pendingAdditions;
                                        cResult[45] = first;
                                        cResult[46] = tmp16;
                                        emptyStateText = emptyStateText.emptyStateText;
                                        cResult[47] = emptyStateText;
                                        cResult[48] = tmp45Result;
                                      }
                                      class K {
                                        constructor() {
                                          if ("" !== closure_5) {
                                            tmp = closure_0;
                                            tmp2 = closure_2;
                                            AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                                            intl = closure_0(closure_2[17]).intl;
                                            obj = { count: null };
                                            tmp3 = length;
                                            obj.count = length;
                                            str = "polite";
                                            announceResult = AccessibilityAnnouncer.announce(
                                              intl.formatToPlainString(closure_0(closure_2[17]).t.ZGVL3g, obj),
                                              "polite",
                                            );
                                          }
                                          return;
                                        }
                                      }
                                      let obj7 = {
                                        Illustration: ErpIY3(obj[22]).NoResultsAlt,
                                        bodyStyle: emptyStateText.emptyStateText,
                                        body: null,
                                      };
                                      if ("" !== first) {
                                        const intl3 = ErpIY3(obj[17]).intl;
                                        ErpIY3 = ErpIY3(obj[17]).t.ErpIY3;
                                        obj = { query: null };
                                        class K {
                                          constructor() {
                                            if ("" !== closure_5) {
                                              tmp = closure_0;
                                              tmp2 = closure_2;
                                              AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                                              intl = closure_0(closure_2[17]).intl;
                                              obj = { count: null };
                                              tmp3 = length;
                                              obj.count = length;
                                              str = "polite";
                                              announceResult = AccessibilityAnnouncer.announce(
                                                intl.formatToPlainString(closure_0(closure_2[17]).t.ZGVL3g, obj),
                                                "polite",
                                              );
                                            }
                                            return;
                                          }
                                        }
                                        let formatResult = intl3.format(ErpIY3, obj);
                                      } else {
                                        const intl2 = ErpIY3(obj[17]).intl;
                                        formatResult = intl2.string(ErpIY3(obj[17]).t.oB9grQ);
                                      }
                                      obj7.body = formatResult;
                                      tmp36(ErpIY3(obj[14]).EmptyState, obj7);
                                    }
                                    class K {
                                      constructor() {
                                        if ("" !== closure_5) {
                                          tmp = closure_0;
                                          tmp2 = closure_2;
                                          AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                                          intl = closure_0(closure_2[17]).intl;
                                          obj = { count: null };
                                          tmp3 = length;
                                          obj.count = length;
                                          str = "polite";
                                          announceResult = AccessibilityAnnouncer.announce(
                                            intl.formatToPlainString(closure_0(closure_2[17]).t.ZGVL3g, obj),
                                            "polite",
                                          );
                                        }
                                        return;
                                      }
                                    }
                                    tmp32[0] = emptyStateText.inputContainer;
                                    tmp32[1] = tmp26;
                                    const tmp33 = regExp(first, tmp32);
                                    cResult[37] = emptyStateText.inputContainer;
                                    cResult[38] = tmp26;
                                    cResult[39] = tmp33;
                                    tmp29 = tmp33;
                                  }
                                }
                              }
                            }
                            const obj8 = {
                              placeholder: tmp22,
                              tags: tmp24,
                              onChangeText: tmp11,
                              onRemove: tmp10,
                              autoFocus: autoFocusSearch,
                              inActionSheet,
                            };
                            const tmp28 = regExp(tmp6(obj[21]), obj8);
                            cResult[31] = autoFocusSearch;
                            cResult[32] = tmp11;
                            cResult[33] = tmp10;
                            cResult[34] = inActionSheet;
                            cResult[35] = tmp24;
                            cResult[36] = tmp28;
                            tmp26 = tmp28;
                          }
                          class K {
                            constructor() {
                              if ("" !== closure_5) {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                                intl = closure_0(closure_2[17]).intl;
                                obj = { count: null };
                                tmp3 = length;
                                obj.count = length;
                                str = "polite";
                                announceResult = AccessibilityAnnouncer.announce(
                                  intl.formatToPlainString(closure_0(closure_2[17]).t.ZGVL3g, obj),
                                  "polite",
                                );
                              }
                              return;
                            }
                          }
                          const items1 = [length, first];
                          cResult[24] = first;
                          cResult[25] = length;
                          cResult[26] = items1;
                          cResult[27] = K;
                          tmp18 = K;
                          tmp17 = items1;
                        }
                      }
                    }
                  }
                }
                function renderItem(item) {
                  item = item.item;
                  const index = item.index;
                  const roles = item.roles;
                  let hasItem = roles.includes(role.id);
                  const obj = {
                    start: 0 === index,
                    end: index === arr.length - 1,
                    guildId: item.id,
                    userId: item.id,
                    onPress() {
                      return closure_9(item);
                    },
                    disabled: null,
                    checked: null,
                  };
                  let tmp5 = hasItem;
                  if (!hasItem) {
                    let tmp6 = closure_10;
                    if (closure_10) {
                      tmp6 = !tmp2;
                    }
                    tmp5 = tmp6;
                  }
                  obj.disabled = tmp5;
                  if (!hasItem) {
                    hasItem = tmp2;
                  }
                  obj.checked = hasItem;
                  return regExp(length, obj);
                }
                cResult[17] = data.length;
                cResult[18] = guild.id;
                cResult[19] = tmp12;
                cResult[20] = pendingAdditions;
                cResult[21] = role.id;
                cResult[22] = tmp9;
                cResult[23] = renderItem;
                tmp16 = renderItem;
              }
              if (tmp14) {
                const _Object = Object;
                tmp14 = Object.keys(pendingAdditions).length >= maxCount;
              }
              cResult[14] = maxCount;
              cResult[15] = pendingAdditions;
              cResult[16] = tmp14;
              tmp12 = tmp14;
            }
            function handleRemoveTag(arg0) {
              const tmp2 = SnowflakeUtilsDefault.keys(pendingAdditions)[arg0];
              closure_0 = tmp2;
              if (null != pendingAdditions[tmp2]) {
                setPendingAdditions((arg0) => {
                  const merged = Object.assign(arg0);
                  delete tmp[tmp2];
                  return {};
                });
                const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                const intl = util.intl;
                const obj2 = { text: tmp3.display.text };
                AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj2), "polite");
              }
            }
            cResult[9] = pendingAdditions;
            cResult[10] = setPendingAdditions;
            cResult[11] = handleRemoveTag;
            tmp10 = handleRemoveTag;
          }
        }
        function togglePendingAddition(roles) {
          let id = roles;
          roles = roles.roles;
          if (!roles.includes(role.id)) {
            setPendingAdditions((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              if (id.id in obj) {
                id = tmp4.id;
                delete tmp[tmp2];
              } else {
                const obj2 = { text: tmp4.name, icon: null };
                const obj4 = { source: tmp4.avatarSource, avatarStyle: null, style: null };
                ({ tagAvatar: obj3.avatarStyle, tagAvatar: obj3.style } = emptyStateText);
                obj2.icon = React5(native.Avatar, obj4);
                const obj7 = { display: obj2, row: tmp4 };
                obj[tmp4.id] = obj7;
              }
              return obj;
            });
          }
        }
        cResult[5] = role.id;
        cResult[6] = setPendingAdditions;
        cResult[7] = emptyStateText.tagAvatar;
        cResult[8] = togglePendingAddition;
        tmp9 = togglePendingAddition;
      }
      let obj2 = guild(pendingAdditions[8]);
      obj3 = emptyStateText;
      regExp = new RegExp(role(obj[13]).escape(first), "i");
      const found = members.filter((name) => regExp.test(name.name) || regExp.test(name.userTag));
      cResult[2] = members;
      cResult[3] = first;
      cResult[4] = found;
      data = found;
    }
  : function AddMembersBody(pendingAdditions) {
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
      const tmp9 = require("../../../../../../discord_common/js/packages/flash-list/index.js");
      if (inActionSheet) {
        let FlashList = tmp9.BottomSheetFlashList;
        let ErpIY3 = require;
      } else {
        FlashList = tmp9.FlashList;
        ErpIY3 = require;
      }
      const obj3 = { style: tmp.inputContainer, children: null };
      let obj4 = {
        placeholder: null,
        tags: null,
        onChangeText: null,
        onRemove: null,
        autoFocus: null,
        inActionSheet: null,
      };
      let intl = ErpIY3(obj6[17]).intl;
      obj4.placeholder = intl.string(ErpIY3(obj6[17]).t.vMiCaQ);
      const values = Object.values(pendingAdditions);
      obj4.tags = values.map((display) => {
        const obj = {};
        const merged = Object.assign(display.display);
        obj.id = display.row.id;
        return obj;
      });
      obj4.onChangeText = function handleQueryChange(str) {
        str = str.trim();
        const formatted = str.toLowerCase();
        members = GuildUtilsDefault.requestMembers(
          _require.id,
          formatted,
          GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT,
        );
        closure_7(formatted);
      };
      obj4.onRemove = function handleRemoveTag(arg0) {
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
      const items2 = [closure_7(closure_5, obj3)];
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
        let obj7 = {
          paddingHorizontal: require("native").space.PX_16,
          paddingTop: require("native").space.PX_12,
          paddingBottom: null,
        };
        let num = 0;
        if (inActionSheet) {
          num = require("useSafeAreaInsetsKeyboardAware")(obj2).insets.bottom;
        }
        const obj8 = {
          contentContainerStyle: null,
          renderItem: null,
          data: null,
          extraData: null,
          keyboardShouldPersistTaps: "always",
        };
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
            checked: null,
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
    };
let closure_12 = tmp3;
ReactCompilerGating = fn(558);
let obj6 = { marginHorizontal: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AddMembersActionSheet(guild) {
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
              cResult[12] = first1;
              cResult[13] = tmp16;
              let tmp15 = tmp16;
            } else {
              tmp15 = cResult[13];
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[17]).intl;
              const stringResult = intl.string(tmp(tmp2[17]).t.ZYOK46);
              cResult[14] = stringResult;
              let tmp18 = stringResult;
            } else {
              tmp18 = cResult[14];
            }
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[17]).intl;
              const stringResult1 = intl2.string(tmp(tmp2[17]).t.OYkgVk);
              cResult[15] = stringResult1;
              let tmp20 = stringResult1;
            } else {
              tmp20 = cResult[15];
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
                  const _Symbol3 = Symbol;
                  ({ container, addMembersDescription } = tmp4);
                  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = tmp(tmp2[17]).intl;
                    const obj3 = { numMembers: MAX_BULK_ROLE_MEMBERS_ADD };
                    const formatResult = intl3.format(tmp(tmp2[17]).t["3OxP4q"], obj3);
                    cResult[23] = formatResult;
                    let tmp28 = formatResult;
                  } else {
                    tmp28 = cResult[23];
                  }
                  if (cResult[24] !== tmp4.addMembersDescription) {
                    const obj4 = { variant: "text-sm/normal", style: addMembersDescription, children: tmp28 };
                    const tmp33 = closure_7(tmp(tmp2[28]).Text, obj4);
                    cResult[24] = tmp4.addMembersDescription;
                    cResult[25] = tmp33;
                    let tmp31 = tmp33;
                  } else {
                    tmp31 = cResult[25];
                  }
                  if (cResult[26] === guild) {
                    if (cResult[27] === guildMembers) {
                      if (cResult[28] === first1) {
                        if (cResult[29] === role) {
                          let tmp34 = cResult[30];
                        }
                        if (cResult[31] === tmp4.container) {
                          if (cResult[32] === tmp31) {
                            if (cResult[33] === tmp34) {
                              let tmp39 = cResult[34];
                            }
                            if (cResult[35] === tmp25) {
                              if (cResult[36] === tmp39) {
                                let tmp43 = cResult[37];
                              }
                              return tmp43;
                            }
                            const obj5 = { scrollable: true, header: tmp25, startExpanded: true, children: tmp39 };
                            const tmp45 = closure_7(tmp(tmp2[29]).BottomSheet, obj5);
                            cResult[35] = tmp25;
                            cResult[36] = tmp39;
                            cResult[37] = tmp45;
                            tmp43 = tmp45;
                          }
                        }
                        const obj6 = { style: container, children: null };
                        const items = [tmp31, tmp34];
                        obj6.children = items;
                        const tmp42 = closure_9(View, obj6);
                        cResult[31] = tmp4.container;
                        cResult[32] = tmp31;
                        cResult[33] = tmp34;
                        cResult[34] = tmp42;
                        tmp39 = tmp42;
                      }
                    }
                  }
                  const obj7 = {
                    guild,
                    role,
                    members: guildMembers,
                    pendingAdditions: first1,
                    setPendingAdditions: tmp6[1],
                    autoFocusSearch: true,
                    maxCount: MAX_BULK_ROLE_MEMBERS_ADD,
                    inActionSheet: true,
                  };
                  const tmp38 = closure_7(closure_12, obj7);
                  cResult[26] = guild;
                  cResult[27] = guildMembers;
                  cResult[28] = first1;
                  cResult[29] = role;
                  cResult[30] = tmp38;
                  tmp34 = tmp38;
                }
                const obj8 = { title: tmp18, subtitle: role.name, trailing: tmp22 };
                const tmp27 = closure_7(tmp(tmp2[27]).BottomSheetTitleHeader, obj8);
                cResult[20] = role.name;
                cResult[21] = tmp22;
                cResult[22] = tmp27;
                tmp25 = tmp27;
              }
            }
            const obj9 = { size: "sm", text: tmp20, onPress: tmp14, variant: str2, disabled: tmp15 };
            const tmp24 = closure_7(tmp(tmp2[26]).Button, obj9);
            cResult[16] = tmp14;
            cResult[17] = tmp15;
            cResult[18] = str2;
            cResult[19] = tmp24;
            tmp22 = tmp24;
          }
        }
        function handleAddPressed() {
          const obj = GuildSettingsActionCreatorsDefault;
          obj.bulkAddMemberRoles(guild.id, role.id, SnowflakeUtilsDefault.keys(first1));
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
        cResult[8] = guild.id;
        cResult[9] = first1;
        cResult[10] = role.id;
        cResult[11] = handleAddPressed;
        tmp14 = handleAddPressed;
        const tmpResult2 = tmp(tmp2[23]);
      }
      const obj10 = {};
      obj10[guild.id] = tmp10;
      cResult[5] = guild.id;
      cResult[6] = tmp10;
      cResult[7] = obj10;
      tmp12 = obj10;
      const tmpResult = guild(first1[19]);
    }
  : function AddMembersActionSheet(guild) {
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
      const subscribeGuildMembers = obj2.useSubscribeGuildMembers(
        { [guild.id]: Object.keys(pendingAdditions) },
        "AddMembersActionSheet",
      );
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
      obj5.onPress = function handleAddPressed() {
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
      const items1 = [
        closure_7(guild(pendingAdditions[28]).Text, obj8),
        closure_7(closure_12, {
          guild,
          role,
          members: guildMembers,
          pendingAdditions,
          setPendingAdditions: tmp2[1],
          autoFocusSearch: true,
          maxCount: MAX_BULK_ROLE_MEMBERS_ADD,
          inActionSheet: true,
        }),
      ];
      obj7.children = items1;
      obj6.children = closure_9(View, obj7);
      return closure_7(guild(pendingAdditions[29]).BottomSheet, obj6);
    };
export const AddMembersBody = tmp3;
