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
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const itemSize = fn(1182).FORM_ROW_VERTICAL_PADDING + 22;
fn(4560);
let createStyles = {
  list: null,
  label: null,
  roleName: null,
  archivedBadge: null,
  archivedBadgeText: null,
  divider: null,
  saveButton: null,
  saveButtonDisabled: null,
};
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.list = createStyles;
createStyles.label = { flex: 1, flexDirection: "row", alignItems: "center" };
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
createStyles.roleName = { flexShrink: 1 };
createStyles.archivedBadge = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  marginLeft: 8,
  paddingHorizontal: 4,
  height: 16,
};
const merged1 = Object.assign(
  TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }),
);
createStyles.archivedBadgeText = {};
let obj1 = { flexShrink: 1 };
let obj2 = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  marginLeft: 8,
  paddingHorizontal: 4,
  height: 16,
};
let obj3 = {};
createStyles.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
createStyles.saveButton = {};
createStyles.saveButtonDisabled = { opacity: 0.3 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx",
);

export default function SelectEmojiRolesActionSheet(arg0) {
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
  let obj = GuildRoleSubscriptionsHooks;
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId, {
    includeSoftDeleted: true,
    sortDeletedListingsLast: true,
  });
  obj = {
    onPress() {
      require(Array.from(first));
    },
    disabled: null,
    accessibilityRole: "button",
    children: null,
  };
  let saveButtonDisabled = !tmp4;
  obj.disabled = saveButtonDisabled;
  let items = [tmp.saveButton];
  if (first.size <= 0) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  obj = { style: items, children: null };
  items[1] = saveButtonDisabled;
  if (null == emoji) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["3UB9ad"]);
  } else {
    let intl = util.intl;
    stringResult = intl.string(util.t["R3BPH+"]);
  }
  obj.children = stringResult;
  obj.children = closure_6(native.LegacyText, obj);
  let tmp7Result = closure_6(Pressables.PressableOpacity, obj);
  let obj1 = { title: null, subtitle: null, trailing: null };
  const intl3 = util.intl;
  obj1.title = intl3.string(util.t.JPU0EF);
  const intl4 = util.intl;
  obj1.subtitle = intl4.string(util.t.MZusPv);
  obj1.trailing = tmp7Result;
  tmp7Result = closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj1);
  let obj2 = { scrollable: true, header: tmp7Result, startExpanded: true, onDismiss: onCancel, children: null };
  const obj3 = {
    inActionSheet: true,
    style: tmp.list,
    itemSize,
    sections: null,
    renderItem(arg0, arg1) {
      let role_id = tmp;
      const diff = subscriptionListingsForGuild.length - 1;
      let obj = { style: closure_2.label, children: null };
      obj = {
        style: closure_2.roleName,
        lineClamp: 1,
        variant: "text-md/medium",
        color: "interactive-text-active",
        children: tmp.name,
      };
      const items = [closure_1_6(require("Text/Text").Text, obj)];
      let archived = tmp.archived;
      if (archived) {
        obj = { style: closure_2.archivedBadge, children: null };
        const obj1 = {
          style: closure_2.archivedBadgeText,
          variant: "text-xs/bold",
          color: "text-overlay-light",
          children: null,
        };
        const intl = require("util").intl;
        obj1.children = intl.string(require("util").t.HRtfn9);
        obj.children = closure_1_6(require("Text/Text").Text, obj1);
        archived = closure_1_6(subscriptionListingsForGuild, obj);
      }
      const obj2 = {
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
      const children = [closure_1_6(require("Form").FormRow, obj2)];
      let tmp5Result = !tmp10;
      if (arg1 !== diff) {
        const obj4 = { style: closure_2.divider };
        tmp5Result = closure_1_6(require("Form").FormDivider, obj4);
      }
      children[1] = tmp5Result;
      return closure_1_7(closure_1_8, { children });
    },
  };
  const items1 = [subscriptionListingsForGuild.length];
  obj3.sections = items1;
  obj2.children = closure_6(emoji(7072), obj3);
  return closure_6(ActionSheet.ActionSheet, obj2);
}
