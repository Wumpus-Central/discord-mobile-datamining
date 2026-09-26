// === Module 17605: SelectEmojiRolesActionSheet ===

// Module 17605 (SelectEmojiRolesActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Pressables from "Pressables" /* 5435 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet from "ActionSheet" /* 6618 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 14759 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 5836 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const itemSize = fn(1181).FORM_ROW_VERTICAL_PADDING + 22;
const createStyles = fn(4836);
let obj2 = { list: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, label: { flex: 1, flexDirection: "row", alignItems: "center" }, roleName: null, archivedBadge: null, archivedBadgeText: null, divider: null, saveButton: null, saveButtonDisabled: null };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj2.roleName = { flexShrink: 1 };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj4 = { flexShrink: 1 };
obj2.archivedBadge = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.RED_400, marginLeft: 8, paddingHorizontal: 4, height: 16 };
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj2.archivedBadgeText = {};
let obj5 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.RED_400, marginLeft: 8, paddingHorizontal: 4, height: 16 };
let obj6 = {};
obj2.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
obj2.saveButton = {};
obj2.saveButtonDisabled = { opacity: 0.3 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default function SelectEmojiRolesActionSheet(arg0) {
  ({ onSave: require, emoji } = arg0);
  let first;
  noop = undefined;
  ({ guildId, onCancel } = arg0);
  const tmp = closure_10();
  dependencyMap = tmp;
  const tmp2 = first(noop.useState(() => {
    let roles;
    if (emoji != null) {
      roles = emoji.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return new Set(roles);
  }), 2);
  first = tmp2[0];
  noop = tmp2[1];
  const subscriptionListingsForGuild = GuildRoleSubscriptionsHooks.useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
  const obj2 = {
    onPress() {
      require(Array.from(first));
    },
    disabled: null,
    accessibilityRole: "button",
    children: null
  };
  let saveButtonDisabled = !tmp4;
  obj2.disabled = saveButtonDisabled;
  let items = [tmp.saveButton, ];
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
  let obj5 = { scrollable: true, header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4), startExpanded: true, onDismiss: onCancel, children: null };
  const obj6 = {
    inActionSheet: true,
    style: tmp.list,
    itemSize,
    sections: null,
    renderItem(arg0, arg1) {
      let role_id = tmp;
      const diff = subscriptionListingsForGuild.length - 1;
      const obj = { style: closure_2.label, children: null };
      const items = [closure_1_6(require("Text/Text").Text, { style: closure_2.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: subscriptionListingsForGuild[arg1].name }), ];
      let archived = tmp.archived;
      if (archived) {
        const obj3 = { style: closure_2.archivedBadge, children: null };
        const obj4 = { style: closure_2.archivedBadgeText, variant: "text-xs/bold", color: "text-overlay-light", children: null };
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
        trailing: closure_1_6(require("Form").FormRow.Checkbox, { selected: first.has(subscriptionListingsForGuild[arg1].role_id) })
      };
      items[1] = archived;
      obj.children = items;
      const children = [closure_1_6(require("Form").FormRow, obj5), ];
      let tmp5Result = !tmp10;
      if (arg1 !== diff) {
        const obj7 = { style: closure_2.divider };
        tmp5Result = closure_1_6(require("Form").FormDivider, obj7);
      }
      children[1] = tmp5Result;
      return closure_1_7(closure_1_8, { children });
    }
  };
  const items1 = [subscriptionListingsForGuild.length];
  obj6.sections = items1;
  obj5.children = closure_6(emoji(6493), obj6);
  return closure_6(ActionSheet.ActionSheet, obj5);
};