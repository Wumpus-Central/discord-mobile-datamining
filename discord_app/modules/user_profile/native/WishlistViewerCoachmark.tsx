// === Module 12617: CoachmarkImage ===

// Module 12617 (CoachmarkImage)
import metadataDefault from "metadata" /* 12618 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function CoachmarkImage() {
  const tmp = callback();
  let obj = { style: tmp.imageContainer, children: null };
  obj = { source: null, style: null };
  obj = { uri: metadataDefault };
  obj[0] = obj;
  obj[1] = tmp.image;
  obj[1] = <closure_5 uri={metadataDefault} />;
  return <closure_4 uri={metadataDefault} />;
}
({ View: c4, Image: c5 } = get_ActivityIndicator);
let closure_8 = createCacheKey.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" }, image: { width: 160, height: 106 } });
const result = require("set").fileFinishedImporting("modules/user_profile/native/WishlistViewerCoachmark.tsx");

export default function WishlistViewerCoachmark(isVisible) {
  isVisible = isVisible.isVisible;
  const markAsDismissed = isVisible.markAsDismissed;
  const onViewWishlist = isVisible.onViewWishlist;
  let callback;
  const items = [onViewWishlist];
  callback = callback.useCallback(() => {
    onViewWishlist();
  }, items);
  const items1 = [isVisible, markAsDismissed, callback];
  const memo = callback.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = isVisible(onViewWishlist[6]).intl;
    obj[0] = intl.string(isVisible(onViewWishlist[6]).t["+b6iUl"]);
    const intl2 = isVisible(onViewWishlist[6]).intl;
    obj[1] = intl2.string(isVisible(onViewWishlist[6]).t.Howsng);
    obj[3] = isVisible;
    obj[4] = function onDismiss() {
      return callback(closure_1_6.USER_DISMISS);
    };
    obj[5] = function renderImgComponent() {
      return callback2(closure_9, {});
    };
    const intl3 = isVisible(onViewWishlist[6]).intl;
    obj[6] = intl3.string(isVisible(onViewWishlist[6]).t.TxBQzD);
    obj[8] = callback;
    return obj;
  }, items1);
  const coachmark = isVisible(onViewWishlist[7]).useCoachmark(isVisible.anchorRef, memo);
  return null;
};