// === Module 18022: SelectEmojiRolesActionSheet ===

// Module 18022 (SelectEmojiRolesActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import FormConstants from "FormConstants" /* 1192 */;
import Pressables from "Pressables" /* 5916 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6651 */;
import ActionSheet2 from "ActionSheet" /* 6708 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15045 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles_mod from "TextStyles" /* 5922 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_0, dependencyMap, obj1, obj10, obj11, obj12, obj8, obj9, onSave, set, tmp3, tmp5, tmp6, tmp8;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let react = react_mod;
const View = react_native.View;
const FORM_ROW_VERTICAL_PADDING = FormConstants.FORM_ROW_VERTICAL_PADDING;
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
const itemSize = FORM_ROW_VERTICAL_PADDING + 22;
let createStyles = createStyles_mod;
let obj = { list: obj2, label: { flex: 1, flexDirection: "row", alignItems: "center" }, roleName: obj3, archivedBadge: obj4, archivedBadgeText: obj5, divider: obj6, saveButton: obj7, saveButtonDisabled: { opacity: 0.3 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1 };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj4 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.RED_400, marginLeft: 8, paddingHorizontal: 4, height: 16 };
obj5 = {};
const PRIMARY_BOLD = Fonts.PRIMARY_BOLD;
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(PRIMARY_BOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj6 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = {};
TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
let closure_10 = createStyles(obj);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSave) => {
  let closure_2;
  let closure_4;
  let first1;
  let tmp11;
  let tmp13;
  let tmp7;
  const tmp = onSave;
  let obj = onSave(576);
  const cResult = obj.c(41);
  onSave = onSave.onSave;
  const emoji = onSave.emoji;
  const guildId = onSave.guildId;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  let roles;
  const first = cResult[0];
  if (emoji != null) {
    roles = emoji.roles;
  }
  if (first !== roles) {
    let roles1;
    if (emoji != null) {
      roles1 = emoji.roles;
    }
    const fn = function s() {
      let roles;
      const _Set = Set;
      if (emoji != null) {
        roles = emoji.roles;
      }
      if (roles == null) {
        roles = [];
      }
      const _Set1 = new _Set(roles);
      return _Set1;
    };
    cResult[0] = roles1;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const tmp9 = first1(react.useState(tmp7), 2);
  first1 = tmp9[0];
  react = tmp9[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeSoftDeleted: true, sortDeletedListingsLast: true };
    cResult[2] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[2];
  }
  const tmpResult = tmp(15045);
  const subscriptionListingsForGuild = tmpResult.useSubscriptionListingsForGuild(guildId, tmp11);
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
    tmp13 = P;
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
  P = tmp13;
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
    if (cResult[7] === first1) {
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
        FormRow = onSave(closure_2[12]).FormRow;
        obj1 = { style: closure_2.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: tmp.name };
        items = [, ];
        items[0] = closure_6(onSave(closure_2[13]).Text, obj1);
        archived = tmp.archived;
        if (archived) {
          obj8 = { style: null, children: null };
          obj8.style = tmp9.archivedBadge;
          obj9 = { style: null, variant: "text-xs/bold", color: "text-overlay-light", children: null };
          obj9.style = tmp9.archivedBadgeText;
          Text = tmp6(tmp7[13]).Text;
          intl = tmp6(tmp7[14]).intl;
          obj9.children = intl.string(tmp6(tmp7[14]).t.HRtfn9);
          obj8.children = tmp5(Text, obj9);
          archived = tmp5(tmp8, obj8);
        }
        tmp10 = arg1 === diff;
        obj10 = {
          label: tmp3(tmp8, obj),
          onPress() {
                  return P(role_id.role_id);
                },
          trailing: null
        };
        items[1] = archived;
        obj.children = items;
        obj11 = { selected: null };
        Checkbox = tmp6(tmp7[12]).FormRow.Checkbox;
        obj11.selected = closure_3.has(tmp.role_id);
        obj10.trailing = tmp5(Checkbox, obj11);
        items1 = [, ];
        items1[0] = tmp5(FormRow, obj10);
        tmp5Result = !tmp10;
        if (tmp5Result) {
          obj12 = { style: null };
          obj12.style = tmp9.divider;
          tmp5Result = tmp5(tmp6(tmp7[12]).FormDivider, obj12);
        }
        items1[1] = tmp5Result;
        return tmp3(tmp4, { children: items1 });
      }
    }
    cResult[7] = first1;
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
      onSave(Array.from(first1));
    }
  }
  cResult[4] = onSave;
  cResult[5] = first1;
  cResult[6] = F;
}) : ((arg0) => {
  let LegacyText;
  let closure_2;
  let closure_4;
  let emoji;
  let guildId;
  let intl3;
  let intl4;
  let items1;
  let obj3;
  let obj6;
  let onCancel;
  let saveButtonDisabled;
  let stringResult;
  let tmp7Result;
  ({ onSave: require, emoji } = arg0);
  let first;
  react = undefined;
  ({ guildId, onCancel } = arg0);
  const tmp = closure_10();
  dependencyMap = tmp;
  const tmp2 = first(react.useState(() => {
    let roles;
    const _Set = Set;
    if (emoji != null) {
      roles = emoji.roles;
    }
    if (roles == null) {
      roles = [];
    }
    const _Set1 = new _Set(roles);
    return _Set1;
  }), 2);
  first = tmp2[0];
  react = tmp2[1];
  let obj = GuildRoleSubscriptionsHooks;
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
  let obj2 = {
    onPress() {
      require(Array.from(first));
    },
    disabled: saveButtonDisabled,
    accessibilityRole: "button",
    children: closure_6(LegacyText, obj3)
  };
  saveButtonDisabled = !tmp4;
  const PressableOpacity = Pressables.PressableOpacity;
  let items = [tmp.saveButton, ];
  LegacyText = native.LegacyText;
  if (first.size <= 0) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  obj3 = { style: items, children: stringResult };
  items[1] = saveButtonDisabled;
  if (null == emoji) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t["3UB9ad"]);
  } else {
    let intl = intl5.intl;
    stringResult = intl.string(intl5.t["R3BPH+"]);
  }
  let obj4 = { title: intl3.string(intl5.t.JPU0EF), subtitle: intl4.string(intl5.t.MZusPv), trailing: tmp7Result };
  tmp7Result = closure_6(PressableOpacity, obj2);
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  let obj5 = { scrollable: true, header: closure_6(BottomSheetTitleHeader, obj4), startExpanded: true, onDismiss: onCancel, children: closure_6(emoji(6576), obj6) };
  closure_6(BottomSheetTitleHeader, obj4);
  const ActionSheet = ActionSheet2.ActionSheet;
  obj6 = {
    inActionSheet: true,
    style: tmp.list,
    itemSize,
    sections: items1,
    renderItem(arg0, arg1) {
      let Checkbox;
      let Text;
      let intl;
      let items;
      let obj4;
      let obj6;
      let role_id = tmp;
      const diff = subscriptionListingsForGuild.length - 1;
      const obj = { style: closure_2.label, children: items };
      const FormRow = require("Form").FormRow;
      items = [, ];
      const obj2 = { style: closure_2.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: subscriptionListingsForGuild[arg1].name };
      items[0] = closure_1_6(require("Text/Text").Text, obj2);
      let archived = tmp.archived;
      if (archived) {
        const obj3 = { style: closure_2.archivedBadge, children: closure_1_6(Text, obj4) };
        obj4 = { style: closure_2.archivedBadgeText, variant: "text-xs/bold", color: "text-overlay-light", children: intl.string(require("intl").t.HRtfn9) };
        Text = require("Text/Text").Text;
        intl = require("intl").intl;
        archived = closure_1_6(subscriptionListingsForGuild, obj3);
      }
      const tmp10 = arg1 === diff;
      items[1] = archived;
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
        trailing: closure_1_6(Checkbox, obj6)
      };
      obj6 = { selected: first.has(subscriptionListingsForGuild[arg1].role_id) };
      Checkbox = require("Form").FormRow.Checkbox;
      const children = [closure_1_6(FormRow, obj5), ];
      let tmp5Result = !tmp10;
      if (tmp5Result) {
        const obj7 = { style: closure_2.divider };
        tmp5Result = closure_1_6(require("Form").FormDivider, obj7);
      }
      children[1] = tmp5Result;
      return closure_1_7(closure_1_8, { children });
    }
  };
  items1 = [subscriptionListingsForGuild.length];
  return closure_6(ActionSheet, obj5);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default tmp10;