// discord_app/modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "Text";
import { Fonts } from "sum";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import importDefaultResult2 from "createTextStyle";
import { ActionSheet } from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { PressableBase } from "../../../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { useFetchListingsForGuild } from "../../../GuildRoleSubscriptionsHooks.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
let closure_9 = require("semanticColor").FORM_ROW_VERTICAL_PADDING + 22;
createCacheKey = { list: null, label: null, roleName: null, archivedBadge: null, archivedBadgeText: null, divider: null, saveButton: null, saveButtonDisabled: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center" };
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, 16));
createCacheKey[2] = { flexShrink: 1 };
let obj1 = { flexShrink: 1 };
createCacheKey[3] = { borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").unsafe_rawColors.RED_400, marginLeft: 8, paddingHorizontal: 4, height: 16 };
let obj2 = { borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").unsafe_rawColors.RED_400, marginLeft: 8, paddingHorizontal: 4, height: 16 };
let obj3 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_BOLD, require("Themes").unsafe_rawColors.WHITE, 12, { uppercase: true }));
createCacheKey[4] = obj3;
createCacheKey[5] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let obj4 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE };
const obj5 = {};
const merged2 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("Themes").colors.CONTROL_BRAND_FOREGROUND, 16));
createCacheKey[6] = obj5;
createCacheKey[7] = { opacity: 0.3 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default function SelectEmojiRolesActionSheet(arg0) {
  let emoji;
  let guildId;
  let onCancel;
  let require;
  ({ onSave: require, emoji } = arg0);
  let dependencyMap;
  let first;
  let React;
  let subscriptionListingsForGuild;
  ({ guildId, onCancel } = arg0);
  const tmp = createCacheKey();
  dependencyMap = tmp;
  const tmp2 = first(React.useState(() => {
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
  React = tmp2[1];
  let obj = useFetchListingsForGuild;
  subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
  obj = {
    onPress() {
      callback(Array.from(first));
    },
    disabled: saveButtonDisabled,
    accessibilityRole: "button",
    children: null
  };
  saveButtonDisabled = !tmp4;
  let items = [tmp.saveButton, ];
  if (first.size <= 0) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  obj = { style: items, children: null };
  items[1] = saveButtonDisabled;
  if (null == emoji) {
    const intl2 = tmp5(1236).intl;
    let stringResult = intl2.string(tmp5(1236).t["3UB9ad"]);
  } else {
    let intl = tmp5(1236).intl;
    stringResult = intl.string(tmp5(1236).t["R3BPH+"]);
  }
  obj[1] = stringResult;
  obj[3] = closure_6(Button.LegacyText, obj);
  let tmp7Result = tmp7(PressableBase.PressableOpacity, obj);
  let obj1 = { title: null, subtitle: null, trailing: null };
  const intl3 = tmp5(1236).intl;
  obj1[0] = intl3.string(getSystemLocale.t.JPU0EF);
  const intl4 = tmp5(1236).intl;
  obj1[1] = intl4.string(getSystemLocale.t.MZusPv);
  obj1[2] = tmp7Result;
  tmp7Result = tmp7(tmp5(6949).BottomSheetTitleHeader, obj1);
  let obj2 = { scrollable: true, header: tmp7Result, startExpanded: true, onDismiss: onCancel, children: null };
  const items1 = [subscriptionListingsForGuild.length];
  obj2[4] = closure_6(emoji(8124), {
    inActionSheet: true,
    style: tmp.list,
    itemSize: closure_9,
    sections: items1,
    renderItem(arg0, arg1) {
      let closure_0 = tmp;
      const diff = subscriptionListingsForGuild.length - 1;
      let obj = { style: _undefined.label, children: null };
      obj = { style: _undefined.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: tmp.name };
      const items = [outer1_6(outer1_0(_undefined[17]).Text, obj), ];
      let archived = tmp.archived;
      if (archived) {
        obj = { style: null, children: null };
        obj[0] = tmp9.archivedBadge;
        const obj1 = { style: null, variant: "text-xs/bold", color: "text-overlay-light", children: null };
        obj1[0] = tmp9.archivedBadgeText;
        const intl = tmp6(tmp7[12]).intl;
        obj1[3] = intl.string(tmp6(tmp7[12]).t.HRtfn9);
        obj[1] = tmp5(tmp6(tmp7[17]).Text, obj1);
        archived = tmp5(tmp8, obj);
      }
      const obj2 = {
        label: outer1_7(subscriptionListingsForGuild, obj),
        onPress() {
          role_id = role_id.role_id;
          return outer1_4((has) => {
            const set = new Set(has);
            if (has.has(role_id)) {
              set.delete(tmp);
            } else {
              set.add(tmp);
            }
            return set;
          });
        },
        trailing: null
      };
      items[1] = archived;
      obj[1] = items;
      const obj3 = { selected: null };
      obj3[0] = first.has(subscriptionListingsForGuild[arg1].role_id);
      obj2[2] = outer1_6(outer1_0(_undefined[16]).FormRow.Checkbox, obj3);
      const children = [outer1_6(outer1_0(_undefined[16]).FormRow, obj2), ];
      let tmp5Result = !tmp10;
      if (arg1 !== diff) {
        const obj4 = { style: null };
        obj4[0] = tmp9.divider;
        tmp5Result = tmp5(tmp6(tmp7[16]).FormDivider, obj4);
      }
      children[1] = tmp5Result;
      return outer1_7(outer1_8, { children });
    }
  });
  return closure_6(ActionSheet.ActionSheet, obj2);
};