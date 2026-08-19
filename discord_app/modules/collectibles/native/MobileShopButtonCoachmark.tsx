// === Module 16015: MobileShopButtonCoachmark ===

// Module 16015 (MobileShopButtonCoachmark)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
const createCacheKey = { height: 80, width: 80, marginTop: ThemesDefault.space.PX_8, marginBottom: -ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/MobileShopButtonCoachmark.tsx");

export default function MobileShopButtonCoachmark(marketing) {
  marketing = marketing.marketing;
  const navigateToShop = marketing.navigateToShop;
  const visible = marketing.visible;
  const onDismiss = marketing.onDismiss;
  let callback;
  const tmp = callback();
  closure_4 = tmp;
  const assetLight = marketing.assetLight;
  visible.useRef(false);
  const items = [onDismiss, navigateToShop];
  callback = visible.useCallback(() => {
    closure_6.current = true;
    onDismiss(constants.TAKE_ACTION);
    navigateToShop();
  }, items);
  const items1 = [onDismiss];
  const callback1 = visible.useCallback(() => {
    closure_6.current = true;
    onDismiss(constants.USER_DISMISS);
  }, items1);
  closure_9 = visible.useRef(onDismiss);
  const effect = visible.useEffect(() => {
    closure_9.current = onDismiss;
  });
  const effect1 = visible.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(closure_1_4.AUTO_DISMISS);
    }
  }, []);
  const items2 = [, , , , , , , ];
  ({ title: arr3[0], body: arr3[1], buttonLabel: arr3[2] } = marketing);
  items2[3] = visible;
  items2[4] = assetLight;
  items2[5] = tmp.image;
  items2[6] = callback;
  items2[7] = callback1;
  const memo = visible.useMemo(() => {
    let obj = {
      title: marketing.title,
      description: marketing.body,
      visible,
      position: "top",
      renderImgComponent() {
        const obj = { uri: closure_5 };
        return assetLight(onDismiss, obj);
      },
      buttonLabel: null,
      buttonVariant: "secondary",
      onButtonPress: null,
      onDismiss: null
    };
    let buttonLabel = marketing.buttonLabel;
    if (buttonLabel == null) {
      const intl = marketing(navigateToShop[6]).intl;
      buttonLabel = intl.string(marketing(navigateToShop[6]).t.fYfGgK);
    }
    obj[5] = buttonLabel;
    obj[7] = callback;
    obj[8] = callback1;
    return obj;
  }, items2);
  const coachmark = marketing(navigateToShop[7]).useCoachmark(marketing.shopButtonRef, memo);
  return null;
};