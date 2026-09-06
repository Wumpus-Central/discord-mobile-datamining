// discord_app/modules/user_profile/native/WishlistViewerCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import _modDef13130 from "../../../../discord_assets/assets/assets/mobile_wishlist_coachmark.png.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function CoachmarkImage() {
  const tmp = closure_8();
  let obj = { style: tmp.imageContainer, children: null };
  obj = { source: null, style: null };
  obj = { uri: _modDef13130 };
  obj.source = obj;
  obj.style = tmp.image;
  obj.children = <hasOwnProperty uri={_modDef13130} />;
  return <React4 uri={_modDef13130} />;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  imageContainer: { alignItems: "center", justifyContent: "center" },
  image: { width: 160, height: 106 },
});
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
    const obj = {
      title: null,
      description: null,
      position: "bottom",
      visible: null,
      onDismiss: null,
      renderImgComponent: null,
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t["+b6iUl"]);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.Howsng);
    obj.visible = isVisible;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_7(closure_1_9, {});
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.TxBQzD);
    obj.onButtonPress = onButtonPress;
    return obj;
  }, items1);
  const coachmark = isVisible(onViewWishlist[7]).useCoachmark(isVisible.anchorRef, memo);
  return null;
}
