// === Module 12333: ShopThisLookMarketingCoachmarkImage ===

// Module 12333 (ShopThisLookMarketingCoachmarkImage)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function ShopThisLookMarketingCoachmarkImage() {
  return <View style={callback().imageContainer}>{jsx(require(6041) /* BumpingFistsSpotIllustration */.BumpingFistsSpotIllustration, { width: 100, height: 56, resizeMode: "contain" })}</View>;
}
let closure_6 = createCacheKey.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
const result = require("ContentDismissActionType").fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookMarketingCoachmark.tsx");

export default function ShopThisLookMarketingCoachmark(visible) {
  visible = visible.visible;
  const onDismiss = visible.onDismiss;
  const onPress = visible.onPress;
  let closure_3;
  let callback;
  let callback1;
  closure_3 = onPress.useRef(false);
  const items = [onDismiss, onPress];
  callback = onPress.useCallback(() => {
    closure_3.current = true;
    onDismiss(callback.TAKE_ACTION);
    onPress();
  }, items);
  const items1 = [onDismiss];
  callback1 = onPress.useCallback(() => {
    closure_3.current = true;
    onDismiss(callback.USER_DISMISS);
  }, items1);
  const items2 = [visible, onDismiss];
  const effect = onPress.useEffect(() => visible ? (() => {
    if (!ref.current) {
      callback(outer1_4.AUTO_DISMISS);
    }
  }) : undefined, items2);
  const items3 = [visible, callback, callback1];
  const memo = onPress.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null, onDismiss: null };
    const intl = visible(onDismiss[6]).intl;
    obj[0] = intl.string(visible(onDismiss[6]).t.TrOccu);
    const intl2 = visible(onDismiss[6]).intl;
    obj[1] = intl2.string(visible(onDismiss[6]).t["Eh5+1F"]);
    obj[2] = visible;
    obj[4] = function renderImgComponent() {
      return callback(closure_7, {});
    };
    const intl3 = visible(onDismiss[6]).intl;
    obj[5] = intl3.string(visible(onDismiss[6]).t["bqZVd/"]);
    obj[7] = callback;
    obj[8] = callback1;
    return obj;
  }, items3);
  const coachmark = visible(onDismiss[7]).useCoachmark(visible.targetRef, memo);
  return null;
};