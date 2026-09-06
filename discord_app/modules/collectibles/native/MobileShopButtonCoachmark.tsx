// discord_app/modules/collectibles/native/MobileShopButtonCoachmark.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { image: null };
let size = { height: 80, width: 80, marginTop: nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_16 };
createStyles.image = size;
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileShopButtonCoachmark.tsx");

export default function MobileShopButtonCoachmark(marketing) {
  marketing = marketing.marketing;
  const navigateToShop = marketing.navigateToShop;
  const visible = marketing.visible;
  const onDismiss = marketing.onDismiss;
  closure_6 = undefined;
  const tmp = closure_6();
  closure_4 = tmp;
  const assetLight = marketing.assetLight;
  closure_6 = visible.useRef(false);
  const items = [onDismiss, navigateToShop];
  const onButtonPress = visible.useCallback(() => {
    closure_6.current = true;
    onDismiss(ContentDismissActionType.TAKE_ACTION);
    navigateToShop();
  }, items);
  const items1 = [onDismiss];
  const callback1 = visible.useCallback(() => {
    closure_6.current = true;
    onDismiss(ContentDismissActionType.USER_DISMISS);
  }, items1);
  closure_9 = visible.useRef(onDismiss);
  const effect = visible.useEffect(() => {
    closure_9.current = onDismiss;
  });
  const effect1 = visible.useEffect(
    () => () => {
      if (!ref.current) {
        ref2.current(constants.AUTO_DISMISS);
      }
    },
    [],
  );
  const items2 = [, , , , , , ,];
  ({ title: arr3[0], body: arr3[1], buttonLabel: arr3[2] } = marketing);
  items2[3] = visible;
  items2[4] = assetLight;
  items2[5] = tmp.image;
  items2[6] = onButtonPress;
  items2[7] = callback1;
  const memo = visible.useMemo(() => {
    let obj = {
      title: marketing.title,
      description: marketing.body,
      visible,
      position: "top",
      renderImgComponent() {
        let obj = { style: image.image, source: null };
        obj = { uri };
        obj.source = obj;
        return assetLight(onDismiss, obj);
      },
      buttonLabel: null,
      buttonVariant: "secondary",
      onButtonPress: null,
      onDismiss: null,
    };
    let buttonLabel = marketing.buttonLabel;
    if (buttonLabel == null) {
      const intl = util.intl;
      buttonLabel = intl.string(util.t.fYfGgK);
    }
    obj.buttonLabel = buttonLabel;
    obj.onButtonPress = onButtonPress;
    obj.onDismiss = callback1;
    return obj;
  }, items2);
  const coachmark = marketing(navigateToShop[7]).useCoachmark(marketing.shopButtonRef, memo);
  return null;
}
