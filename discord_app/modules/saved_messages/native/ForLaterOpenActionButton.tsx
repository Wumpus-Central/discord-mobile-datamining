// === Module 18466: ForLaterOpenActionButton ===

// Module 18466 (ForLaterOpenActionButton)
import nativeDefault from "native" /* 575 */;
import useThemeDefault from "useTheme" /* 5253 */;
import useToken from "useToken" /* 5596 */;
import ButtonHooks from "ButtonHooks" /* 5641 */;
import ClockIcon from "ClockIcon" /* 5740 */;
import ClipViewDefault from "ClipView" /* 9509 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10192 */;
import showForLaterModal from "showForLaterModal" /* 11150 */;
import BookmarkIcon2 from "BookmarkIcon" /* 11161 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10191 */;

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
  const items = [tmp6.container, iconSizeStyles];
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
    let tmp8Result = React5(View, obj4);
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
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const point = { shape: fn(9509).CutoutShape.Circle, x: fn(14703).ICON_SIZE.sm - 7, y: fn(14703).ICON_SIZE.sm - 8, size: 10 };
const createStyles = fn(5014);
let obj = { container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" }, iconAnchor: null, dot: null };
let size = { width: fn(14703).ICON_SIZE.sm, height: fn(14703).ICON_SIZE.sm, position: "relative" };
obj.iconAnchor = size;
const size1 = { position: "absolute", height: 6.5, width: 6.5, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.lg, right: -2, bottom: -0.5 };
obj.dot = size1;
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default function ForLaterActionButton(ref) {
  const type = ref.type;
  const onOpen = ref.onOpen;
  const items = [SavedMessagesStore];
  const items1 = [onOpen, type];
  const stateFromStores = type(504).useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
  const obj2 = { ref: ref.ref, children: null };
  const callback = noop.useCallback(() => {
    onOpen();
    showForLaterModal.showForLaterModal(type);
  }, items1);
  const obj3 = { type, showRedDot: null };
  const obj = type(504);
  const obj4 = { variant: "tertiary", size: "sm", icon: closure_6(BadgedIcon, obj3), onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj3.showRedDot = type === type(10192).SavedMessageSortTypes.REMINDER && stateFromStores;
  const intl = tmp(1113).intl;
  if (type === type(10192).SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp(1113).t.aUXxzT;
  } else {
    aUXxzT = tmp(1113).t["2pAkDA"];
  }
  obj4.accessibilityLabel = intl.string(aUXxzT);
  obj2.children = closure_6(type(8028).IconButton, obj4);
  return closure_6(View, obj2);
};