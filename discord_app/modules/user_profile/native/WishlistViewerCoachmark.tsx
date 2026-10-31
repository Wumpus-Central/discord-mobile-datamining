// === Module 15019: WishlistViewerCoachmark ===

// Module 15019 (WishlistViewerCoachmark)
import util from "util" /* 1113 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _modDef15020 from "module_15020" /* 15020 */;
import noop from "module_19" /* 19 */;

require = fn;
function CoachmarkImage() {
  const tmp = closure_7();
  const obj = { style: tmp.imageContainer, children: null };
  const obj2 = { source: null, style: null };
  const obj3 = { uri: _modDef15020 };
  obj2.source = obj3;
  obj2.style = tmp.image;
  obj.children = jsx(FastImageDefault, { source: null, style: null });
  return <View style={tmp.imageContainer}>{null}</View>;
}
const View = fn(17).View;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" }, image: { width: 160, height: 106 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/WishlistViewerCoachmark.tsx");

export default function WishlistViewerCoachmark(isVisible) {
  isVisible = isVisible.isVisible;
  const markAsDismissed = isVisible.markAsDismissed;
  const onViewWishlist = isVisible.onViewWishlist;
  let onButtonPress;
  const items = [onViewWishlist];
  onButtonPress = onButtonPress.useCallback(() => {
    onViewWishlist();
  }, items);
  const items1 = [isVisible, markAsDismissed, onButtonPress];
  const memo = onButtonPress.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["+b6iUl"]);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.Howsng);
    obj.visible = isVisible;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_6(closure_1_8, {});
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.TxBQzD);
    obj.onButtonPress = onButtonPress;
    return obj;
  }, items1);
  const coachmark = isVisible(onViewWishlist[8]).useCoachmark(isVisible.anchorRef, memo);
  return null;
};