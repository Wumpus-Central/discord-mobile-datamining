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
const itemSize = fn(1192).FORM_ROW_VERTICAL_PADDING + 22;
const createStyles = fn(4890);
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
  ? (onSave) => {
      const cResult = onSave(576).c(41);
      onSave = onSave.onSave;
      const emoji = onSave.emoji;
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      const tmp8 = first(noop.useState(tmp6), 2);
      first = tmp8[0];
      noop = tmp8[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { includeSoftDeleted: true, sortDeletedListingsLast: true };
        cResult[2] = obj2;
        let tmp10 = obj2;
      } else {
        tmp10 = cResult[2];
      }
      let obj = onSave(576);
      const subscriptionListingsForGuild = onSave(15026).useSubscriptionListingsForGuild(onSave.guildId, tmp10);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0) {
            closure_0 = onSave;
            return closure_4((has) => {
              set = new Set(has);
              if (has.has(closure_0)) {
                set.delete(closure_0);
              } else {
                set.add(closure_0);
              }
              return set;
            });
          }
        }
        cResult[3] = P;
        const tmp12 = P;
      } else {
        class P {
          constructor(arg0) {
            closure_0 = onSave;
            return closure_4((has) => {
              set = new Set(has);
              if (has.has(closure_0)) {
                set.delete(closure_0);
              } else {
                set.add(closure_0);
              }
              return set;
            });
          }
        }
      }
      P = tmp12;
      if (cResult[4] === onSave) {
        class P {
          constructor(arg0) {
            closure_0 = onSave;
            return closure_4((has) => {
              set = new Set(has);
              if (has.has(closure_0)) {
                set.delete(closure_0);
              } else {
                set.add(closure_0);
              }
              return set;
            });
          }
        }
        if (cResult[7] === first) {
          class P {
            constructor(arg0) {
              closure_0 = onSave;
              return closure_4((has) => {
                set = new Set(has);
                if (has.has(closure_0)) {
                  set.delete(closure_0);
                } else {
                  set.add(closure_0);
                }
                return set;
              });
            }
          }
        }
        class O {
          constructor(arg0, arg1) {
            tmp = closure_5[arg1];
            closure_0 = tmp;
            tmp3 = closure_1_7;
            tmp5 = closure_6;
            tmp6 = onSave;
            tmp7 = closure_2;
            diff = closure_5.length - 1;
            tmp4 = closure_1_8;
            tmp8 = closure_5;
            obj = { style: closure_2.label, children: null };
            tmp9 = closure_2;
            obj1 = {
              style: closure_2.roleName,
              lineClamp: 1,
              variant: "text-md/medium",
              color: "interactive-text-active",
              children: tmp.name,
            };
            items = [,];
            items[0] = closure_6(onSave(closure_2[13]).Text, obj1);
            archived = tmp.archived;
            if (archived) {
              obj8 = { style: null, children: null };
              obj8.style = tmp9.archivedBadge;
              obj9 = { style: null, variant: "text-xs/bold", color: "text-overlay-light", children: null };
              obj9.style = tmp9.archivedBadgeText;
              intl = tmp6(tmp7[14]).intl;
              obj9.children = intl.string(tmp6(tmp7[14]).t.HRtfn9);
              obj8.children = tmp5(tmp6(tmp7[13]).Text, obj9);
              archived = tmp5(tmp8, obj8);
            }
            tmp10 = arg1 === diff;
            obj10 = {
              label: tmp3(tmp8, obj),
              onPress() {
                return closure_6(role_id.role_id);
              },
              trailing: null,
            };
            items[1] = archived;
            obj.children = items;
            obj11 = { selected: closure_3.has(tmp.role_id) };
            obj10.trailing = tmp5(tmp6(tmp7[12]).FormRow.Checkbox, obj11);
            items1 = [,];
            items1[0] = tmp5(onSave(closure_2[12]).FormRow, obj10);
            tmp5Result = !tmp10;
            if (!tmp10) {
              obj12 = { style: null };
              obj12.style = tmp9.divider;
              tmp5Result = tmp5(tmp6(tmp7[12]).FormDivider, obj12);
            }
            items1[1] = tmp5Result;
            return tmp3(tmp4, { children: items1 });
          }
        }
        cResult[7] = first;
        cResult[8] = tmp4.archivedBadge;
        cResult[9] = tmp4.archivedBadgeText;
        cResult[10] = tmp4.divider;
        cResult[11] = tmp4.label;
        cResult[12] = tmp4.roleName;
        cResult[13] = subscriptionListingsForGuild;
        cResult[14] = O;
      }
      class F {
        constructor() {
          tmp = onSave(Array.from(closure_3));
          return;
        }
      }
      cResult[4] = onSave;
      cResult[5] = first;
      cResult[6] = F;
      const tmpResult = onSave(15026);
    }
  : (arg0) => {
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
        onPress() {
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
        renderItem(arg0, arg1) {
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
                set = new Set(has);
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
      obj5.children = closure_6(emoji(6569), obj6);
      return closure_6(ActionSheet.ActionSheet, obj5);
    };
