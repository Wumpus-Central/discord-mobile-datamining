// === Module 16487: ForLaterOpenActionButton ===

// Module 16487 (ForLaterOpenActionButton)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4306 */;
import useThemeDefault from "useTheme" /* 4540 */;
import ClockIcon from "ClockIcon" /* 4568 */;
import ButtonHooks from "ButtonHooks" /* 5031 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7234 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7901 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7904 */;
import showForLaterModal from "showForLaterModal" /* 7910 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7911 */;
import ClipViewDefault from "ClipView" /* 8884 */;
import BookmarkIcon2 from "BookmarkIcon" /* 11778 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11731 */;

require = fn;
function BadgedIcon(arg0) {
  ({ type, showRedDot } = arg0);
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, useThemeDefault());
  const tmp6 = closure_9();
  let obj1 = ButtonHooks;
  const iconSizeStyles = obj1.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    let BookmarkIcon = ClockIcon.ClockIcon;
  } else {
    BookmarkIcon = BookmarkIcon2.BookmarkIcon;
  }
  obj = { style: null, children: null };
  const items = [tmp6.container, iconSizeStyles];
  obj.style = items;
  if (showRedDot) {
    obj = { style: tmp6.iconAnchor, children: null };
    obj1 = { cutouts: null, children: null };
    const items1 = [point];
    obj1.cutouts = items1;
    const obj2 = { size: "sm", color: token };
    obj1.children = timestampProducer(BookmarkIcon, obj2);
    const items2 = [timestampProducer(ClipViewDefault, obj1), ];
    const obj3 = { style: tmp6.dot };
    items2[1] = timestampProducer(View, obj3);
    obj.children = items2;
    let tmp8Result = React5(View, obj);
    const tmpResult = ClipViewDefault;
  } else {
    const obj4 = { size: "sm", color: token };
    tmp8Result = timestampProducer(BookmarkIcon, obj4);
  }
  obj.children = tmp8Result;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const point = { shape: fn(8884).CutoutShape.Circle, x: fn(16488).ICON_SIZE.sm - 7, y: fn(16488).ICON_SIZE.sm - 8, size: 10 };
const createStyles = fn(4605);
let obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: null, dot: null };
let size = { width: fn(16488).ICON_SIZE.sm, height: fn(16488).ICON_SIZE.sm, position: "relative" };
obj.iconAnchor = size;
const size1 = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.lg, right: -2, bottom: -0.5 };
obj.dot = size1;
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default noop.forwardRef((type, ref) => {
  type = type.type;
  const onOpen = type.onOpen;
  let stateFromStores1;
  let obj = type(stateFromStores1[14]);
  let items = [SavedMessagesStore];
  const stateFromStores = obj.useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
  let obj1 = type(stateFromStores1[14]);
  const items1 = [SavedMessagesStore];
  stateFromStores1 = obj1.useStateFromStores(items1, () => SavedMessagesStore.getSavedMessageCount());
  const hasForLaterAccess = type(stateFromStores1[15]).useHasForLaterAccess("ForLaterOpenActionButton");
  const items2 = [hasForLaterAccess, onOpen, stateFromStores1, type];
  obj = { ref, children: null };
  const callback = hasForLaterAccess.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      if (!hasForLaterAccess) {
        const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
        openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
      }
    }
    showForLaterModal.showForLaterModal(type);
  }, items2);
  obj = { type, showRedDot: null };
  const obj3 = type(stateFromStores1[15]);
  obj1 = { variant: "tertiary", size: "sm", icon: closure_6(BadgedIcon, obj), onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj.showRedDot = type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER && stateFromStores;
  const intl = tmp(tmp2[21]).intl;
  if (type === type(stateFromStores1[11]).SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp(tmp2[21]).t.aUXxzT;
  } else {
    aUXxzT = tmp(tmp2[21]).t["2pAkDA"];
  }
  obj1.accessibilityLabel = intl.string(aUXxzT);
  obj.children = closure_6(type(stateFromStores1[20]).IconButton, obj1);
  return closure_6(View, obj);
});