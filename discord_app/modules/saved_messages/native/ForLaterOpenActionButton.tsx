// === Module 19048: ForLaterOpenActionButton ===

// Module 19048 (ForLaterOpenActionButton)
import nativeDefault from "native" /* 575 */;
import useThemeDefault from "useTheme" /* 5484 */;
import useToken from "useToken" /* 5839 */;
import ButtonHooks from "ButtonHooks" /* 5880 */;
import ClockIcon from "ClockIcon" /* 5979 */;
import ClipViewDefault from "ClipView" /* 9437 */;
import showForLaterModal from "showForLaterModal" /* 11844 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11845 */;
import BookmarkIcon2 from "BookmarkIcon" /* 11857 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11849 */;

require = fn;
function BadgedIcon(arg0) {
  ({ type, showRedDot } = arg0);
  const tmp3 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp3);
  const tmp6 = closure_9();
  const iconSizeStyles = ButtonHooks.useIconSizeStyles("sm", true, 2);
  if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    let BookmarkIcon = ClockIcon.ClockIcon;
  } else {
    BookmarkIcon = BookmarkIcon2.BookmarkIcon;
  }
  const obj3 = { style: null, children: null };
  items = [tmp6.container, iconSizeStyles];
  obj3.style = items;
  if (showRedDot) {
    const obj4 = { style: tmp6.iconAnchor, children: null };
    const obj5 = { cutouts: null, children: null };
    const items1 = [point];
    obj5.cutouts = items1;
    const obj6 = { size: "sm", color: token };
    obj5.children = timestampProducer(BookmarkIcon, obj6);
    const items2 = [timestampProducer(ClipViewDefault, obj5), ];
    const obj7 = { style: tmp6.dot };
    items2[1] = timestampProducer(View, obj7);
    obj4.children = items2;
    let tmp8Result = metroImportDefault(View, obj4);
    const tmpResult = ClipViewDefault;
  } else {
    const obj8 = { size: "sm", color: token };
    tmp8Result = timestampProducer(BookmarkIcon, obj8);
  }
  obj3.children = tmp8Result;
  return timestampProducer(View, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const point = { shape: fn(9437).CutoutShape.Circle, x: fn(10459).ICON_SIZE.sm - 7, y: fn(10459).ICON_SIZE.sm - 8, size: 10 };
const createStyles = fn(5243);
let obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: null, dot: null };
let size = { width: fn(10459).ICON_SIZE.sm, height: fn(10459).ICON_SIZE.sm, position: "relative" };
obj.iconAnchor = size;
const size1 = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.lg, right: -2, bottom: -0.5 };
obj.dot = size1;
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default function ForLaterActionButton(ref) {
  const type = ref.type;
  const onOpen = ref.onOpen;
  const tmp3 = type === type(11845).SavedMessageSortTypes.REMINDER;
  dependencyMap = tmp3;
  items = [SavedMessagesStore];
  const items1 = [tmp3];
  const stateFromStores = type(504).useStateFromStores(items, () => {
    let num = 0;
    if (closure_2) {
      num = SavedMessagesStore.getOverdueMessageReminderCount();
    }
    return num;
  }, items1);
  const items2 = [onOpen, type];
  const callback = noop.useCallback(() => {
    onOpen();
    showForLaterModal.showForLaterModal(type);
  }, items2);
  const intl = type(1113).intl;
  const t = type(1113).t;
  const stringResult = intl.string(tmp3 ? t.aUXxzT : t["2pAkDA"]);
  let combined = stringResult;
  if (stateFromStores > 0) {
    const intl2 = tmp(1113).intl;
    const obj2 = { count: stateFromStores };
    const _HermesInternal = HermesInternal;
    combined = "" + stringResult + ", " + intl2.formatToPlainString(tmp(1113).t.yBmFPA, obj2);
  }
  const obj3 = { ref: ref.ref, children: null };
  const obj = type(504);
  obj3.children = closure_6(type(7922).IconButton, { variant: "tertiary", size: "sm", icon: closure_6(BadgedIcon, { type, showRedDot: stateFromStores > 0 }), onPress: callback, accessibilityLabel: combined, maxFontSizeMultiplier: 2 });
  return closure_6(View, obj3);
};