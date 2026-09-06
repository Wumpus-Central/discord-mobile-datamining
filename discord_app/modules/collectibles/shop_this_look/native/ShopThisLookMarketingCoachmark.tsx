// discord_app/modules/collectibles/shop_this_look/native/ShopThisLookMarketingCoachmark.tsx
import util from "../../../../intl/index.native.tsx";
import BumpingFistsSpotIllustration from "../../../../design/components/mana-assets/native/generated/BumpingFistsSpotIllustration.native.tsx";
import ShopThisLookAnalyticsUtils from "../ShopThisLookAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ShopThisLookMarketingCoachmarkImage() {
  return (
    <View style={closure_7().imageContainer}>
      {jsx(BumpingFistsSpotIllustration.BumpingFistsSpotIllustration, {
        width: 100,
        height: 56,
        resizeMode: "contain",
      })}
    </View>
  );
}
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const UserProfileThemeTypes = fn(7208).UserProfileThemeTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/collectibles/shop_this_look/native/ShopThisLookMarketingCoachmark.tsx",
);

export default function ShopThisLookMarketingCoachmark(visible) {
  visible = visible.visible;
  const onDismiss = visible.onDismiss;
  const onPress = visible.onPress;
  closure_3 = onPress.useRef(false);
  const items = [onDismiss, onPress];
  const onButtonPress = onPress.useCallback(() => {
    closure_3.current = true;
    const result = ShopThisLookAnalyticsUtils.trackShopThisLookMenuAction(
      ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_CTA_CLICKED,
      UserProfileThemeTypes.ACTION_SHEET,
    );
    onDismiss(ContentDismissActionType.TAKE_ACTION);
    onPress();
  }, items);
  const items1 = [onDismiss];
  const callback1 = onPress.useCallback(() => {
    closure_3.current = true;
    onDismiss(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const items2 = [visible];
  const effect = onPress.useEffect(() => {
    if (visible) {
      const result = ShopThisLookAnalyticsUtils.trackShopThisLookMenuAction(
        ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_VIEWED,
        UserProfileThemeTypes.ACTION_SHEET,
      );
    }
  }, items2);
  const items3 = [visible, onDismiss];
  const effect1 = onPress.useEffect(
    () =>
      visible
        ? () => {
            const result = visible(onDismiss[7]).trackShopThisLookMenuAction(
              visible(onDismiss[7]).ShopThisLookMenuAction.COACHMARK_DISMISSED,
              callback1.ACTION_SHEET,
            );
            if (!ref.current) {
              closure_1_1(callback.AUTO_DISMISS);
            }
            const obj = visible(onDismiss[7]);
          }
        : undefined,
    items3,
  );
  const items4 = [visible, onButtonPress, callback1];
  const memo = onPress.useMemo(() => {
    const obj = {
      title: null,
      description: null,
      visible: null,
      position: "bottom",
      renderImgComponent: null,
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null,
      onDismiss: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t.TrOccu);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["Eh5+1F"]);
    obj.visible = visible;
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_6(closure_1_8, {});
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t["bqZVd/"]);
    obj.onButtonPress = onButtonPress;
    obj.onDismiss = callback1;
    return obj;
  }, items4);
  const coachmark = visible(onDismiss[9]).useCoachmark(visible.targetRef, memo);
  return null;
}
