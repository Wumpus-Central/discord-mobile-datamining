// discord_app/modules/collectibles/native/MobileShopButtonCoachmark.tsx
import noop from "noop";
import { Image } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { image: null };
createCacheKey = { height: 80, width: 80, marginTop: require("Themes").space.PX_8, marginBottom: -require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ContentDismissActionType").fileFinishedImporting("modules/collectibles/native/MobileShopButtonCoachmark.tsx");

export default function MobileShopButtonCoachmark(marketing) {
  marketing = marketing.marketing;
  const navigateToShop = marketing.navigateToShop;
  const visible = marketing.visible;
  const onDismiss = marketing.onDismiss;
  let c4;
  let assetLight;
  let createCacheKey;
  let callback;
  let callback1;
  let closure_9;
  const tmp = createCacheKey();
  c4 = tmp;
  assetLight = marketing.assetLight;
  createCacheKey = visible.useRef(false);
  const items = [onDismiss, navigateToShop];
  callback = visible.useCallback(() => {
    closure_6.current = true;
    onDismiss(_undefined.TAKE_ACTION);
    navigateToShop();
  }, items);
  const items1 = [onDismiss];
  callback1 = visible.useCallback(() => {
    closure_6.current = true;
    onDismiss(_undefined.USER_DISMISS);
  }, items1);
  closure_9 = visible.useRef(onDismiss);
  const effect = visible.useEffect(() => {
    closure_9.current = onDismiss;
  });
  const effect1 = visible.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(outer1_4.AUTO_DISMISS);
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
        obj = { style: image.image, source: obj };
        obj = { uri: closure_5 };
        return outer1_5(outer1_3, obj);
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