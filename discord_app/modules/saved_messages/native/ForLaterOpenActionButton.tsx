// discord_app/modules/saved_messages/native/ForLaterOpenActionButton.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import styleProperties from "../../../design/components/Button/native/ButtonHooks.native.tsx";
import SolidCutoutDefault from "../../../design/components/Icon/native/ClipView.tsx";
import SavedMessageSortTypes from "../SavedMessagesTypes.tsx";
import BookmarkIcon2 from "../../../design/components/Icon/native/redesign/generated/BookmarkIcon.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import getTimeSafe from "../SavedMessagesStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function BadgedIcon(arg0) {
  ({ type, showRedDot } = arg0);
  obj = map;
  const token = obj.useToken(ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, useThemeDefault());
  const tmp6 = callback2();
  obj1 = styleProperties;
  const iconSizeStyles = obj1.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    let BookmarkIcon = ClockIcon.ClockIcon;
  } else {
    BookmarkIcon = BookmarkIcon2.BookmarkIcon;
  }
  obj = { style: items, children: null };
  items = [tmp6.container, iconSizeStyles];
  if (showRedDot) {
    obj = { style: null, children: null };
    obj[0] = tmp6.iconAnchor;
    obj1 = { cutouts: null, children: null };
    const items1 = [obj];
    obj1[0] = items1;
    const obj2 = { size: "sm", color: null };
    obj2[1] = token;
    obj1[1] = callback(BookmarkIcon, obj2);
    const items2 = [callback(SolidCutoutDefault, obj1), ];
    const obj3 = { style: null };
    obj3[0] = tmp6.dot;
    items2[1] = callback(View, obj3);
    obj[1] = items2;
    let tmp8Result = callback(View, obj);
    const tmpResult = SolidCutoutDefault;
  } else {
    const obj4 = { size: "sm", color: null };
    obj4[1] = token;
    tmp8Result = callback(BookmarkIcon, obj4);
  }
  obj[1] = tmp8Result;
  return callback(View, obj);
}
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
{ shape: require("SolidCutout").CutoutShape.Circle, x: require("getIconSize").ICON_SIZE.sm - 7, y: require("getIconSize").ICON_SIZE.sm - 8, size: 10 };
let obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: { width: require("getIconSize").ICON_SIZE.sm, height: require("getIconSize").ICON_SIZE.sm, position: "relative" }, dot: null };
const createCacheKey = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: ThemesDefault.radii.lg, right: -2, bottom: -0.5 };
obj[2] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
let obj1 = { width: require("getIconSize").ICON_SIZE.sm, height: require("getIconSize").ICON_SIZE.sm, position: "relative" };
const forwardRefResult = importAllResult.forwardRef((type, ref) => {
  type = type.type;
  const onOpen = type.onOpen;
  let stateFromStores1;
  obj = type(stateFromStores1[14]);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.hasOverdueReminder(), []);
  obj1 = type(stateFromStores1[14]);
  const items1 = [closure_5];
  stateFromStores1 = obj1.useStateFromStores(items1, () => closure_5.getSavedMessageCount());
  const hasForLaterAccess = type(stateFromStores1[15]).useHasForLaterAccess("ForLaterOpenActionButton");
  const items2 = [hasForLaterAccess, onOpen, stateFromStores1, type];
  const callback = hasForLaterAccess.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      if (!hasForLaterAccess) {
        const items = [onOpen(stateFromStores1[18]).FOR_LATER_ROADBLOCK];
        onOpen(stateFromStores1[16])(type(stateFromStores1[17]).EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
        const tmp5 = onOpen(stateFromStores1[16]);
      }
    }
    type(stateFromStores1[19]).showForLaterModal(type);
    obj = type(stateFromStores1[19]);
  }, items2);
  obj = { type, showRedDot: null };
  const obj3 = type(stateFromStores1[15]);
  obj1 = { variant: "tertiary", size: "sm", icon: callback(BadgedIcon, obj), onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj[1] = type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER && stateFromStores;
  const intl = tmp(tmp2[21]).intl;
  if (type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp(tmp2[21]).t.aUXxzT;
  } else {
    aUXxzT = tmp(tmp2[21]).t["2pAkDA"];
  }
  obj1[4] = intl.string(aUXxzT);
  obj[1] = callback(type(stateFromStores1[20]).IconButton, obj1);
  return callback(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default forwardRefResult;