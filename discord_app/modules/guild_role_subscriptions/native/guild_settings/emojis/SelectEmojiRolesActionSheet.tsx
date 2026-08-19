// === Module 17002: SelectEmojiRolesActionSheet ===

// Module 17002 (SelectEmojiRolesActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import PressableBase from "PressableBase" /* 5433 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import useFetchListingsForGuild from "useFetchListingsForGuild" /* 14558 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { Fonts } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "createTextStyle" /* 6782 */;

require = fn;
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
let closure_9 = require("semanticColor").FORM_ROW_VERTICAL_PADDING + 22;
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center" };
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
createCacheKey[2] = { flexShrink: 1 };
createCacheKey[3] = { borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.unsafe_rawColors.RED_400, marginLeft: 8, paddingHorizontal: 4, height: 16 };
const obj3 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_BOLD, ThemesDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }));
createCacheKey[4] = obj3;
const importDefaultResult1 = importDefaultResult;
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
const obj5 = {};
const merged2 = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
createCacheKey[6] = obj5;
createCacheKey[7] = { opacity: 0.3 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const importDefaultResult2 = importDefaultResult;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default function SelectEmojiRolesActionSheet(arg0) {
  ({ onSave: require, emoji } = arg0);
  let first;
  let React;
  ({ guildId, onCancel } = arg0);
  const tmp = callback();
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
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
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
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t["3UB9ad"]);
  } else {
    let intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["R3BPH+"]);
  }
  obj[1] = stringResult;
  obj[3] = callback(Button.LegacyText, obj);
  let tmp7Result = callback(PressableBase.PressableOpacity, obj);
  obj1 = { title: null, subtitle: null, trailing: null };
  const intl3 = getSystemLocale.intl;
  obj1[0] = intl3.string(getSystemLocale.t.JPU0EF);
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t.MZusPv);
  obj1[2] = tmp7Result;
  tmp7Result = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj1);
  const items1 = [subscriptionListingsForGuild.length];
  return callback(ActionSheet.ActionSheet, { scrollable: true, header: tmp7Result, startExpanded: true, onDismiss: onCancel, children: callback(emoji(8124), obj3) });
};