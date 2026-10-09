// discord_app/modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import GuildRoleSubscriptionsHooks from "../../../GuildRoleSubscriptionsHooks.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../../rebrand/native/TextStyles.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Fonts = fn(1096).Fonts;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const itemSize = fn(1204).FORM_ROW_VERTICAL_PADDING + 22;
const createStyles = fn(5091);
let obj2 = {
  list: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  label: { flex: 1, flexDirection: "row", alignItems: "center" },
  roleName: null,
  archivedBadge: null,
  archivedBadgeText: null,
  divider: null,
  saveButton: null,
  saveButtonDisabled: null,
};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj2.roleName = { flexShrink: 1 };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj4 = { flexShrink: 1 };
obj2.archivedBadge = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  marginLeft: 8,
  paddingHorizontal: 4,
  height: 16,
};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(
  TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }),
);
obj2.archivedBadgeText = {};
let obj5 = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  marginLeft: 8,
  paddingHorizontal: 4,
  height: 16,
};
let obj6 = {};
obj2.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
obj2.saveButton = {};
obj2.saveButtonDisabled = { opacity: 0.3 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const obj8 = {};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SelectEmojiRolesActionSheet(onSave) {
      const cResult = onSave(576).c(41);
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
      const subscriptionListingsForGuild = onSave(15420).useSubscriptionListingsForGuild(onSave.guildId, tmp12);
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
                    let saveButtonDisabled = tmp16;
                    if (!tmp11) {
                      saveButtonDisabled = tmp4.saveButtonDisabled;
                    }
                    if (cResult[15] === tmp4.saveButton) {
                      if (cResult[16] === saveButtonDisabled) {
                        let tmp17 = cResult[17];
                      }
                      if (cResult[18] !== tmp5) {
                        let intl = tmp(1126).intl;
                        const string = intl.string;
                        let t = tmp(1126).t;
                        if (tmp5) {
                          t = t["3UB9ad"];
                          let stringResult = string(t);
                        } else {
                          stringResult = string(t["R3BPH+"]);
                        }
                        cResult[18] = tmp5;
                        cResult[19] = stringResult;
                      } else {
                        if (cResult[20] === tmp17) {
                          if (cResult[21] === tmp18) {
                            let tmp22 = cResult[22];
                          }
                          if (cResult[23] === tmp14) {
                            if (cResult[24] === tmp22) {
                              if (cResult[25] === tmp16) {
                                let tmp25 = cResult[26];
                              }
                              const _Symbol = Symbol;
                              if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl2 = tmp(1126).intl;
                                const stringResult1 = intl2.string(tmp(1126).t.JPU0EF);
                                const intl3 = tmp(1126).intl;
                                const stringResult2 = intl3.string(tmp(1126).t.MZusPv);
                                cResult[27] = stringResult1;
                                cResult[28] = stringResult2;
                                let tmp29 = stringResult2;
                                let tmp28 = stringResult1;
                              } else {
                                tmp28 = cResult[27];
                                tmp29 = cResult[28];
                              }
                              if (cResult[29] !== tmp25) {
                                let obj3 = { title: tmp28, subtitle: tmp29, trailing: tmp25 };
                                const tmp34 = closure_6(tmp(6835).BottomSheetTitleHeader, obj3);
                                cResult[29] = tmp25;
                                cResult[30] = tmp34;
                                let tmp32 = tmp34;
                              } else {
                                tmp32 = cResult[30];
                              }
                              if (cResult[31] !== subscriptionListingsForGuild.length) {
                                let items = [subscriptionListingsForGuild.length];
                                cResult[31] = subscriptionListingsForGuild.length;
                                cResult[32] = items;
                                let tmp35 = items;
                              } else {
                                tmp35 = cResult[32];
                              }
                              if (cResult[33] === tmp15) {
                                if (cResult[34] === tmp4.list) {
                                  if (cResult[35] === tmp35) {
                                    let tmp36 = cResult[36];
                                  }
                                  if (cResult[37] === tmp32) {
                                    if (cResult[38] === onCancel) {
                                      if (cResult[39] === tmp36) {
                                        let tmp41 = cResult[40];
                                      }
                                      return tmp41;
                                    }
                                  }
                                  let obj4 = {
                                    scrollable: true,
                                    header: tmp32,
                                    startExpanded: true,
                                    onDismiss: onCancel,
                                    children: tmp36,
                                  };
                                  const tmp43 = closure_6(tmp(6892).ActionSheet, obj4);
                                  cResult[37] = tmp32;
                                  cResult[38] = onCancel;
                                  cResult[39] = tmp36;
                                  cResult[40] = tmp43;
                                  tmp41 = tmp43;
                                }
                              }
                              let obj5 = {
                                inActionSheet: true,
                                style: tmp4.list,
                                itemSize,
                                sections: tmp35,
                                renderItem: tmp15,
                              };
                              const tmp40 = closure_6(emoji(6759), obj5);
                              cResult[33] = tmp15;
                              cResult[34] = tmp4.list;
                              cResult[35] = tmp35;
                              cResult[36] = tmp40;
                              tmp36 = tmp40;
                            }
                          }
                          const obj6 = {
                            onPress: tmp14,
                            disabled: tmp16,
                            accessibilityRole: "button",
                            children: tmp22,
                          };
                          const tmp27 = closure_6(tmp(6191).PressableOpacity, obj6);
                          cResult[23] = tmp14;
                          cResult[24] = tmp22;
                          cResult[25] = tmp16;
                          cResult[26] = tmp27;
                          tmp25 = tmp27;
                        }
                        let obj7 = { style: tmp17, children: cResult[19] };
                        const tmp24 = closure_6(tmp(1200).LegacyText, obj7);
                        cResult[20] = tmp17;
                        cResult[21] = cResult[19];
                        cResult[22] = tmp24;
                        tmp22 = tmp24;
                      }
                    }
                    const items1 = [tmp4.saveButton, saveButtonDisabled];
                    cResult[15] = tmp4.saveButton;
                    cResult[16] = saveButtonDisabled;
                    cResult[17] = items1;
                    tmp17 = items1;
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
            closure_6(onSave(closure_2[13]).Text, {
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
            const intl = onSave(closure_2[14]).intl;
            obj4.children = intl.string(onSave(closure_2[14]).t.HRtfn9);
            obj3.children = closure_6(onSave(closure_2[13]).Text, obj4);
            archived = closure_6(subscriptionListingsForGuild, obj3);
          }
          const obj5 = {
            label: closure_1_7(subscriptionListingsForGuild, obj),
            onPress() {
              return closure_6(role_id.role_id);
            },
            trailing: closure_6(onSave(closure_2[12]).FormRow.Checkbox, {
              selected: first.has(subscriptionListingsForGuild[arg1].role_id),
            }),
          };
          items[1] = archived;
          obj.children = items;
          const children = [closure_6(onSave(closure_2[12]).FormRow, obj5)];
          let tmp5Result = !tmp10;
          if (arg1 !== diff) {
            const obj7 = { style: closure_2.divider };
            tmp5Result = closure_6(onSave(closure_2[12]).FormDivider, obj7);
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
      const tmpResult = onSave(15420);
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
        disabled: null,
        accessibilityRole: "button",
        children: null,
      };
      let saveButtonDisabled = !tmp4;
      obj2.disabled = saveButtonDisabled;
      let items = [tmp.saveButton];
      if (first.size <= 0) {
        saveButtonDisabled = tmp.saveButtonDisabled;
      }
      let obj3 = { style: items, children: null };
      items[1] = saveButtonDisabled;
      if (null == emoji) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t["3UB9ad"]);
      } else {
        let intl = util.intl;
        stringResult = intl.string(util.t["R3BPH+"]);
      }
      obj3.children = stringResult;
      obj2.children = closure_6(native.LegacyText, obj3);
      let obj4 = { title: null, subtitle: null, trailing: null };
      const intl3 = util.intl;
      obj4.title = intl3.string(util.t.JPU0EF);
      const intl4 = util.intl;
      obj4.subtitle = intl4.string(util.t.MZusPv);
      obj4.trailing = closure_6(Pressables.PressableOpacity, obj2);
      const tmp7Result = closure_6(Pressables.PressableOpacity, obj2);
      let obj5 = {
        scrollable: true,
        header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4),
        startExpanded: true,
        onDismiss: onCancel,
        children: null,
      };
      const obj6 = {
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
      const items1 = [subscriptionListingsForGuild.length];
      obj6.sections = items1;
      obj5.children = closure_6(emoji(6759), obj6);
      return closure_6(ActionSheet.ActionSheet, obj5);
    };
