// discord_app/modules/favorites/native/FavoritesGuildActionSheet.tsx
import "noop";
import initializeFromUserSettings from "initializeFromUserSettings";
import jsxProd from "jsxProd";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { ActionSheet } from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { ActionSheetRowIcon } from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { useFavoritesAccess } from "../FavoritesHooks.tsx";
import { useFavoritesGuildHideAction } from "../hooks/useFavoritesGuildHideAction.tsx";
import { useFavoritesGuildResetAction } from "../hooks/useFavoritesGuildResetAction.tsx";

let c4;
let c5;
let require = arg1;
function FavoritesGuildActionSheet() {
  const tmp2 = useFavoritesGuildHideAction();
  const require = tmp2;
  const tmp3 = useFavoritesGuildResetAction();
  importDefault = tmp3;
  let obj = useFavoritesAccess;
  let obj1 = initialize;
  const items = [initializeFromUserSettings];
  const stateFromStores = obj1.useStateFromStores(items, () => initializeFromUserSettings.hasStoredFavorites());
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.wMWyci);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  let tmp7Result = null;
  if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
    tmp7Result = null;
    if (stateFromStores) {
      obj1 = { hasIcons: true, children: null };
      const obj2 = { label: null, icon: null, onPress: null };
      const intl2 = tmp4(1236).intl;
      obj2[0] = intl2.string(tmp4(1236).t["0dOFq+"]);
      const obj3 = { IconComponent: null };
      obj3[0] = tmp4(11596).ArrowsUpDownIcon;
      obj2[1] = tmp7(tmp4(5806).ActionSheetRow.Icon, obj3);
      obj2[2] = function onPress() {
        tmp3(4310).hideActionSheet(closure_6);
        tmp3(15338)();
      };
      obj1[1] = tmp7(tmp4(5806).ActionSheetRow, obj2);
      tmp7Result = tmp7(tmp4(5806).ActionSheetRow.Group, obj1);
    }
  }
  const items1 = [tmp7Result, ];
  const obj4 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp4(5366).XSmallIcon;
  } else {
    EyeSlashIcon = tmp4(8544).EyeSlashIcon;
  }
  obj4[2] = callback(ActionSheetRowIcon.ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj4[3] = str;
  obj4[4] = function onPress() {
    tmp3(outer1_2[12]).hideActionSheet(outer1_6);
    tmp2.perform();
  };
  const items2 = [callback(ActionSheetRowIcon.ActionSheetRow, obj4), ];
  tmp7Result = null;
  if (tmp3.isAvailable) {
    const obj5 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj9[0], subLabel: obj9[1] } = tmp3);
    const obj6 = { IconComponent: null };
    obj6[0] = tmp4(4301).TrashIcon;
    obj5[2] = tmp7(tmp4(5806).ActionSheetRow.Icon, obj6);
    obj5[4] = function onPress() {
      tmp3(outer1_2[12]).hideActionSheet(outer1_6);
      tmp3.perform();
    };
    tmp7Result = tmp7(tmp4(5806).ActionSheetRow, obj5);
  }
  items2[1] = tmp7Result;
  items1[1] = closure_5(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj[1] = items1;
  return closure_5(ActionSheet.ActionSheet, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export const openFavoritesGuildActionSheet = function openFavoritesGuildActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { content: callback(FavoritesGuildActionSheet, {}), key: FavoritesGuildActionSheet };
  obj.showActionSheet(obj);
};