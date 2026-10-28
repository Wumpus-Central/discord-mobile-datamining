// discord_app/modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import GuildRoleSubscriptionsHooks from "../../../GuildRoleSubscriptionsHooks.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const itemSize = fn(1203).FORM_ROW_VERTICAL_PADDING + 22;
const createStyles = fn(5004);
let obj2 = {
  list: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  label: { flex: 1, flexDirection: "row", alignItems: "center" },
  roleName: { flexShrink: 1 },
  archivedBadge: null,
  archivedBadgeText: null,
  divider: null,
  saveButtonDisabled: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.archivedBadge = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  marginLeft: 8,
  paddingHorizontal: 4,
  height: 16,
};
obj2.archivedBadgeText = { textTransform: "uppercase" };
let obj4 = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  marginLeft: 8,
  paddingHorizontal: 4,
  height: 16,
};
obj2.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.saveButtonDisabled = { opacity: 0.3 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SelectEmojiRolesActionSheet(onSave) {
      const cResult = onSave(576).c(38);
      onSave = onSave.onSave;
      const emoji = onSave.emoji;
      const onCancel = onSave.onCancel;
      const tmp4 = closure_10();
      dependencyMap = tmp4;
      let roles;
      if (emoji != null) {
        roles = emoji.roles;
      }
      if (cResult[0] !== roles) {
        let roles1;
        if (emoji != null) {
          roles1 = emoji.roles;
        }
        const fn = function s() {
          let roles;
          if (emoji != null) {
            roles = emoji.roles;
          }
          if (roles == null) {
            roles = [];
          }
          return new Set(roles);
        };
        cResult[0] = roles1;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const tmp9 = first(noop.useState(tmp7), 2);
      first = tmp9[0];
      noop = tmp9[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { includeSoftDeleted: true, sortDeletedListingsLast: true };
        cResult[2] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[2];
      }
      let obj = onSave(576);
      const subscriptionListingsForGuild = onSave(16840).useSubscriptionListingsForGuild(onSave.guildId, tmp12);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        function toggleRole(arg0) {
          closure_0 = arg0;
          return closure_4((has) => {
            const set = new Set(has);
            if (has.has(closure_0)) {
              set.delete(closure_0);
            } else {
              set.add(closure_0);
            }
            return set;
          });
        }
        cResult[3] = toggleRole;
        let tmp13 = toggleRole;
      } else {
        tmp13 = cResult[3];
      }
      closure_6 = tmp13;
      if (cResult[4] === onSave) {
        if (cResult[5] === first) {
          let tmp14 = cResult[6];
        }
        if (cResult[7] === first) {
          if (cResult[8] === tmp4.archivedBadge) {
            if (cResult[9] === tmp4.archivedBadgeText) {
              if (cResult[10] === tmp4.divider) {
                if (cResult[11] === tmp4.label) {
                  if (cResult[12] === tmp4.roleName) {
                    if (cResult[13] === subscriptionListingsForGuild) {
                      let tmp15 = cResult[14];
                    }
                    if (!tmp11) {
                      const saveButtonDisabled = tmp4.saveButtonDisabled;
                    }
                    if (cResult[15] !== tmp5) {
                      let intl = tmp(1125).intl;
                      const string = intl.string;
                      let t = tmp(1125).t;
                      if (tmp5) {
                        t = t["3UB9ad"];
                        let stringResult = string(t);
                      } else {
                        stringResult = string(t["R3BPH+"]);
                      }
                      cResult[15] = tmp5;
                      cResult[16] = stringResult;
                    } else {
                      if (cResult[17] !== cResult[16]) {
                        let obj3 = { variant: "text-md/semibold", color: "text-brand", children: tmp16 };
                        const tmp22 = closure_6(tmp(5270).Text, obj3);
                        cResult[17] = tmp16;
                        cResult[18] = tmp22;
                        let tmp20 = tmp22;
                      } else {
                        tmp20 = cResult[18];
                      }
                      if (cResult[19] === tmp14) {
                        if (cResult[20] === tmp23) {
                          if (cResult[21] === saveButtonDisabled) {
                            if (cResult[22] === tmp20) {
                              let tmp24 = cResult[23];
                            }
                            const _Symbol = Symbol;
                            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl2 = tmp(1125).intl;
                              const stringResult1 = intl2.string(tmp(1125).t.JPU0EF);
                              const intl3 = tmp(1125).intl;
                              const stringResult2 = intl3.string(tmp(1125).t.MZusPv);
                              cResult[24] = stringResult1;
                              cResult[25] = stringResult2;
                              let tmp28 = stringResult2;
                              let tmp27 = stringResult1;
                            } else {
                              tmp27 = cResult[24];
                              tmp28 = cResult[25];
                            }
                            if (cResult[26] !== tmp24) {
                              let obj4 = { title: tmp27, subtitle: tmp28, trailing: tmp24 };
                              const tmp33 = closure_6(tmp(7284).BottomSheetTitleHeader, obj4);
                              cResult[26] = tmp24;
                              cResult[27] = tmp33;
                              let tmp31 = tmp33;
                            } else {
                              tmp31 = cResult[27];
                            }
                            if (cResult[28] !== subscriptionListingsForGuild.length) {
                              let items = [subscriptionListingsForGuild.length];
                              cResult[28] = subscriptionListingsForGuild.length;
                              cResult[29] = items;
                              let tmp34 = items;
                            } else {
                              tmp34 = cResult[29];
                            }
                            if (cResult[30] === tmp15) {
                              if (cResult[31] === tmp4.list) {
                                if (cResult[32] === tmp34) {
                                  let tmp35 = cResult[33];
                                }
                                if (cResult[34] === tmp31) {
                                  if (cResult[35] === onCancel) {
                                    if (cResult[36] === tmp35) {
                                      let tmp40 = cResult[37];
                                    }
                                    return tmp40;
                                  }
                                }
                                let obj5 = {
                                  scrollable: true,
                                  header: tmp31,
                                  startExpanded: true,
                                  onDismiss: onCancel,
                                  children: tmp35,
                                };
                                const tmp42 = closure_6(tmp(7334).ActionSheet, obj5);
                                cResult[34] = tmp31;
                                cResult[35] = onCancel;
                                cResult[36] = tmp35;
                                cResult[37] = tmp42;
                                tmp40 = tmp42;
                              }
                            }
                            const obj6 = {
                              inActionSheet: true,
                              style: tmp4.list,
                              itemSize,
                              sections: tmp34,
                              renderItem: tmp15,
                            };
                            const tmp39 = closure_6(emoji(7203), obj6);
                            cResult[30] = tmp15;
                            cResult[31] = tmp4.list;
                            cResult[32] = tmp34;
                            cResult[33] = tmp39;
                            tmp35 = tmp39;
                          }
                        }
                      }
                      let obj7 = {
                        onPress: tmp14,
                        disabled: !tmp11,
                        accessibilityRole: "button",
                        style: saveButtonDisabled,
                        children: tmp20,
                      };
                      const tmp26 = closure_6(tmp(6944).PressableOpacity, obj7);
                      cResult[19] = tmp14;
                      cResult[20] = !tmp11;
                      cResult[21] = saveButtonDisabled;
                      cResult[22] = tmp20;
                      cResult[23] = tmp26;
                      tmp24 = tmp26;
                    }
                  }
                }
              }
            }
          }
        }
        function renderRow(arg0, arg1) {
          const role_id = tmp;
          const diff = subscriptionListingsForGuild.length - 1;
          const obj = { style: closure_2.label, children: null };
          const items = [
            closure_6(onSave(closure_2[11]).Text, {
              style: closure_2.roleName,
              lineClamp: 1,
              variant: "text-md/medium",
              color: "interactive-text-active",
              children: subscriptionListingsForGuild[arg1].name,
            }),
          ];
          let archived = tmp.archived;
          if (archived) {
            const obj3 = { style: closure_2.archivedBadge, children: null };
            const obj4 = {
              style: closure_2.archivedBadgeText,
              variant: "text-xs/bold",
              color: "text-overlay-light",
              children: null,
            };
            const intl = onSave(closure_2[12]).intl;
            obj4.children = intl.string(onSave(closure_2[12]).t.HRtfn9);
            obj3.children = closure_6(onSave(closure_2[11]).Text, obj4);
            archived = closure_6(subscriptionListingsForGuild, obj3);
          }
          const obj5 = {
            label: closure_1_7(subscriptionListingsForGuild, obj),
            onPress() {
              return closure_6(role_id.role_id);
            },
            trailing: closure_6(onSave(closure_2[10]).FormRow.Checkbox, {
              selected: first.has(subscriptionListingsForGuild[arg1].role_id),
            }),
          };
          items[1] = archived;
          obj.children = items;
          const children = [closure_6(onSave(closure_2[10]).FormRow, obj5)];
          let tmp5Result = !tmp10;
          if (arg1 !== diff) {
            const obj7 = { style: closure_2.divider };
            tmp5Result = closure_6(onSave(closure_2[10]).FormDivider, obj7);
          }
          children[1] = tmp5Result;
          return closure_1_7(closure_1_8, { children });
        }
        cResult[7] = first;
        cResult[8] = tmp4.archivedBadge;
        cResult[9] = tmp4.archivedBadgeText;
        cResult[10] = tmp4.divider;
        cResult[11] = tmp4.label;
        cResult[12] = tmp4.roleName;
        cResult[13] = subscriptionListingsForGuild;
        cResult[14] = renderRow;
        tmp15 = renderRow;
      }
      function handleSave() {
        onSave(Array.from(first));
      }
      cResult[4] = onSave;
      cResult[5] = first;
      cResult[6] = handleSave;
      tmp14 = handleSave;
      const tmpResult = onSave(16840);
    }
  : function SelectEmojiRolesActionSheet(arg0) {
      ({ onSave: require, emoji } = arg0);
      let first;
      noop = undefined;
      ({ guildId, onCancel } = arg0);
      const tmp = closure_10();
      dependencyMap = tmp;
      const tmp2 = first(
        noop.useState(() => {
          let roles;
          if (emoji != null) {
            roles = emoji.roles;
          }
          if (roles == null) {
            roles = [];
          }
          return new Set(roles);
        }),
        2,
      );
      first = tmp2[0];
      noop = tmp2[1];
      const subscriptionListingsForGuild = GuildRoleSubscriptionsHooks.useSubscriptionListingsForGuild(guildId, {
        includeSoftDeleted: true,
        sortDeletedListingsLast: true,
      });
      const obj2 = {
        onPress: function handleSave() {
          require(Array.from(first));
        },
        disabled: first.size <= 0,
        accessibilityRole: "button",
        style: null,
        children: null,
      };
      let saveButtonDisabled;
      if (first.size <= 0) {
        saveButtonDisabled = tmp.saveButtonDisabled;
      }
      obj2.style = saveButtonDisabled;
      if (null == emoji) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t["3UB9ad"]);
      } else {
        let intl = util.intl;
        stringResult = intl.string(util.t["R3BPH+"]);
      }
      obj2.children = closure_6(Text_Text.Text, {
        variant: "text-md/semibold",
        color: "text-brand",
        children: stringResult,
      });
      let obj3 = { title: null, subtitle: null, trailing: null };
      const intl3 = util.intl;
      obj3.title = intl3.string(util.t.JPU0EF);
      const intl4 = util.intl;
      obj3.subtitle = intl4.string(util.t.MZusPv);
      obj3.trailing = closure_6(Pressables.PressableOpacity, obj2);
      const tmp7Result = closure_6(Pressables.PressableOpacity, obj2);
      let obj4 = {
        scrollable: true,
        header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3),
        startExpanded: true,
        onDismiss: onCancel,
        children: null,
      };
      let obj5 = {
        inActionSheet: true,
        style: tmp.list,
        itemSize,
        sections: null,
        renderItem: function renderRow(arg0, arg1) {
          let role_id = tmp;
          const diff = subscriptionListingsForGuild.length - 1;
          const obj = { style: closure_2.label, children: null };
          const items = [
            closure_1_6(require("Text/Text").Text, {
              style: closure_2.roleName,
              lineClamp: 1,
              variant: "text-md/medium",
              color: "interactive-text-active",
              children: subscriptionListingsForGuild[arg1].name,
            }),
          ];
          let archived = tmp.archived;
          if (archived) {
            const obj3 = { style: closure_2.archivedBadge, children: null };
            const obj4 = {
              style: closure_2.archivedBadgeText,
              variant: "text-xs/bold",
              color: "text-overlay-light",
              children: null,
            };
            const intl = require("util").intl;
            obj4.children = intl.string(require("util").t.HRtfn9);
            obj3.children = closure_1_6(require("Text/Text").Text, obj4);
            archived = closure_1_6(subscriptionListingsForGuild, obj3);
          }
          const obj5 = {
            label: closure_1_7(subscriptionListingsForGuild, obj),
            onPress() {
              role_id = role_id.role_id;
              return closure_4((has) => {
                const set = new Set(has);
                if (has.has(role_id)) {
                  set.delete(role_id);
                } else {
                  set.add(role_id);
                }
                return set;
              });
            },
            trailing: closure_1_6(require("Form").FormRow.Checkbox, {
              selected: first.has(subscriptionListingsForGuild[arg1].role_id),
            }),
          };
          items[1] = archived;
          obj.children = items;
          const children = [closure_1_6(require("Form").FormRow, obj5)];
          let tmp5Result = !tmp10;
          if (arg1 !== diff) {
            const obj7 = { style: closure_2.divider };
            tmp5Result = closure_1_6(require("Form").FormDivider, obj7);
          }
          children[1] = tmp5Result;
          return closure_1_7(closure_1_8, { children });
        },
      };
      let items = [subscriptionListingsForGuild.length];
      obj5.sections = items;
      obj4.children = closure_6(emoji(7203), obj5);
      return closure_6(ActionSheet.ActionSheet, obj4);
    };
