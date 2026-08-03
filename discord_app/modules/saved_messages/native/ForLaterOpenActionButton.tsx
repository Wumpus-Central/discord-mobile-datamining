import importAllResult from "IconButton";
import { View } from "EntitlementFeatureNames";
import getTimeSafe from "getTimeSafe";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function BadgedIcon(arg0) {
  let showRedDot;
  let type;
  ({ type, showRedDot } = arg0);
  let obj = require(3959) /* map */;
  const token = obj.useToken(importDefault(712).colors.INTERACTIVE_TEXT_DEFAULT, importDefault(4191)());
  const tmp6 = callback2();
  let obj1 = require(4671) /* styleProperties */;
  const iconSizeStyles = obj1.useIconSizeStyles("sm", true, 2);
  if (type === require(9712) /* SavedMessageSortTypes */.SavedMessageSortTypes.REMINDER) {
    let BookmarkIcon = tmp4(4219).ClockIcon;
  } else {
    BookmarkIcon = tmp4(10111).BookmarkIcon;
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
    obj1[1] = tmp8(BookmarkIcon, obj2);
    const items2 = [tmp8(importDefault(8091), obj1), ];
    const obj3 = { style: null };
    obj3[0] = tmp6.dot;
    items2[1] = tmp8(tmp9, obj3);
    obj[1] = items2;
    let tmp8Result = callback(tmp9, obj);
    const tmpResult = importDefault(8091);
  } else {
    const obj4 = { size: "sm", color: null };
    obj4[1] = token;
    tmp8Result = tmp8(BookmarkIcon, obj4);
  }
  obj[1] = tmp8Result;
  return closure_6(View, obj);
}
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { shape: require("SolidCutout").CutoutShape.Circle, x: require("getIconSize").ICON_SIZE.sm - 9, y: -1, size: 10 };
obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: null, dot: null };
obj[1] = { width: require("getIconSize").ICON_SIZE.sm, height: require("getIconSize").ICON_SIZE.sm, position: "relative" };
createCacheKey = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: require("Themes").radii.lg, right: 1, top: 0.7 };
obj[2] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
let obj1 = { width: require("getIconSize").ICON_SIZE.sm, height: require("getIconSize").ICON_SIZE.sm, position: "relative" };
const forwardRefResult = importAllResult.forwardRef((type, ref) => {
  type = type.type;
  const onOpen = type.onOpen;
  let stateFromStores1;
  let hasForLaterAccess;
  let obj = type(stateFromStores1[14]);
  const items = [getTimeSafe];
  const stateFromStores = obj.useStateFromStores(items, () => getTimeSafe.hasOverdueReminder(), []);
  let obj1 = type(stateFromStores1[14]);
  const items1 = [getTimeSafe];
  stateFromStores1 = obj1.useStateFromStores(items1, () => getTimeSafe.getSavedMessageCount());
  hasForLaterAccess = type(stateFromStores1[15]).useHasForLaterAccess("ForLaterOpenActionButton");
  const items2 = [hasForLaterAccess, onOpen, stateFromStores1, type];
  obj = { ref, children: null };
  const callback = hasForLaterAccess.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      if (!hasForLaterAccess) {
        onOpen(stateFromStores1[16])(type(stateFromStores1[17]).EntitlementFeatureNames.SAVED_MESSAGES);
        const tmp5 = onOpen(stateFromStores1[16]);
      }
    }
    type(stateFromStores1[18]).showForLaterModal(type);
  }, items2);
  obj = { type, showRedDot: null };
  const obj3 = type(stateFromStores1[15]);
  const tmp8 = View;
  const tmp9 = BadgedIcon;
  obj1 = { variant: "tertiary", size: "sm", icon: tmp7(tmp9, obj), onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj[1] = type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER && stateFromStores;
  const intl = tmp(tmp2[20]).intl;
  if (type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER) {
  } else {
  }
  obj1[4] = intl.string(_2pAkDA);
  obj[1] = closure_6(type(stateFromStores1[19]).IconButton, obj1);
  return closure_6(tmp8, obj);
});
const result = require("getTimeSafe").fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default forwardRefResult;