// discord_app/modules/virtual_currency/native/orb_wallet/OrbWalletCards.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2173 from "../../messages/OrbWallet.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _modDef8511 from "../../../../../_runtime/metro/08511__.js";
import useIsPremiumSubscriber from "../../../premium/useIsPremiumSubscriber.tsx";
import _modDef12291 from "../../../../../_runtime/metro/12291__.js";
import OrbWalletUtils from "OrbWalletUtils.native.tsx";
import _modDef17651 from "../../../../../discord_assets/assets/orbs/orb_spot_asset.png.js";
import _modDef17652 from "../../../../../discord_assets/assets/orbs/orb-nitro-multiplier.png.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import OrbChallengesStore from "../../stores/OrbChallengesStore.tsx";

require = fn;
function BaseOrbWalletPrimaryCard(buttonVariant) {
  let str = buttonVariant.buttonVariant;
  ({ title, imageUri, imageAccessibilityLabel, subTextDescription, buttonText, buttonIcon } = buttonVariant);
  if (str === undefined) {
    str = "secondary";
  }
  let str2 = buttonVariant.buttonSize;
  if (str2 === undefined) {
    str2 = "md";
  }
  let flag = buttonVariant.buttonLoading;
  if (flag === undefined) {
    flag = false;
  }
  ({ onCtaPress, onClose } = buttonVariant);
  const tmp = closure_11();
  const obj = { variant: "secondary", border: "faint", radius: 16, style: tmp.primaryCard, children: null };
  const obj2 = { style: tmp.primaryCardContent, children: null };
  const items = [
    React7(FastImageDefault, {
      source: { uri: imageUri },
      style: tmp.primaryCardGraphic,
      resizeMode: "contain",
      accessible: true,
      accessibilityLabel: imageAccessibilityLabel,
    }),
  ];
  const obj4 = { style: tmp.primaryCardText, children: null };
  const items1 = [
    React7(Text_Text.Text, {
      variant: "text-md/semibold",
      color: "text-strong",
      accessibilityRole: "header",
      children: title,
    }),
    React7(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: subTextDescription }),
  ];
  obj4.children = items1;
  items[1] = closure_1_10(View, obj4);
  obj2.children = items;
  const items2 = [
    closure_1_10(View, obj2),
    React7(components_Button_Button.Button, {
      text: buttonText,
      size: str2,
      icon: buttonIcon,
      variant: str,
      loading: flag,
      onPress: onCtaPress,
    }),
  ];
  const obj5 = { style: tmp.primaryCardCloseButton, children: null };
  const obj6 = {
    variant: "icon-only",
    size: "sm",
    icon: React7(XSmallIcon.XSmallIcon, { size: "xxs", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT }),
    accessibilityLabel: null,
    onPress: null,
  };
  const intl = util.intl;
  obj6.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj6.onPress = onClose;
  obj5.children = React7(IconButton.IconButton, obj6);
  items2[2] = React7(View, obj5);
  obj.children = items2;
  return closure_1_10(Card.Card, obj);
}
function openOrbsShopFromWallet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const obj3 = { analyticsLocations: null, analyticsSource: null, screen: null };
  const items = [AnalyticsLocationDefault.ORBS_BALANCE_MENU];
  obj3.analyticsLocations = items;
  obj3.analyticsSource = AnalyticsLocationDefault.ORBS_BALANCE_MENU;
  obj3.screen = constants.ORBS;
  const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj3);
}
function OrbWalletShopPrimaryCard(onClose) {
  const obj = {
    title: null,
    imageUri: null,
    imageAccessibilityLabel: null,
    subTextDescription: null,
    buttonText: null,
    buttonIcon: null,
    buttonVariant: "primary",
    buttonSize: "sm",
    onCtaPress: null,
    onClose: null,
  };
  const intl = util.intl;
  obj.title = intl.string(_modDef2173.v8QrJf);
  obj.imageUri = _modDef17651;
  const intl2 = util.intl;
  obj.imageAccessibilityLabel = intl2.string(_modDef2173.qa1xyr);
  const intl3 = util.intl;
  obj.subTextDescription = intl3.string(_modDef2173.HACucK);
  const intl4 = util.intl;
  obj.buttonText = intl4.string(_modDef2173["7raRgL"]);
  obj.buttonIcon = _modDef12291;
  obj.onCtaPress = openOrbsShopFromWallet;
  obj.onClose = onClose.onClose;
  return React7(BaseOrbWalletPrimaryCard, obj);
}
function OrbWalletNitroUpsellPrimaryCard(onClose) {
  const items = [OrbChallengesStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    let num = OrbChallengesStore.nitroGatedOrbMultiplier;
    if (num == null) {
      num = 1.2;
    }
    return num;
  });
  OrbWalletUtils;
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj2 = {
      title: null,
      imageUri: null,
      imageAccessibilityLabel: null,
      subTextDescription: null,
      buttonText: null,
      buttonIcon: null,
      buttonVariant: "expressive",
      onCtaPress: null,
      onClose: null,
    };
    const intl = util.intl;
    obj2.title = intl.string(_modDef2173.ZqCAos);
    obj2.imageUri = _modDef17652;
    const intl2 = util.intl;
    obj2.imageAccessibilityLabel = intl2.string(_modDef2173.FkfrRH);
    const intl3 = util.intl;
    const obj3 = { multiplier: stateFromStores };
    obj2.subTextDescription = intl3.format(_modDef2173["Ba/7wO"], obj3);
    const intl4 = util.intl;
    obj2.buttonText = intl4.string(_modDef2173.U9UQJE);
    obj2.buttonIcon = _modDef8511;
    obj2.onCtaPress = tmp6;
    obj2.onClose = onClose.onClose;
    tmp7 = React7(BaseOrbWalletPrimaryCard, obj2);
  }
  return tmp7;
}
const View = fn(17).View;
const constants = fn(1074).CollectiblesMobileShopScreen;
const PremiumTypes = fn(1386).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  primaryCard: { gap: nativeDefault.space.PX_16 },
  primaryCardContent: null,
  primaryCardGraphic: null,
  primaryCardText: null,
  primaryCardCloseButton: null,
};
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.primaryCardContent = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingEnd: nativeDefault.space.PX_24,
};
let size = { width: 56, height: 56, borderRadius: nativeDefault.radii.md };
obj2.primaryCardGraphic = size;
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingEnd: nativeDefault.space.PX_24,
};
obj2.primaryCardText = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj5 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj2.primaryCardCloseButton = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletCards.tsx");

export function OrbWalletPrimaryCard(orbBalance) {
  orbBalance = orbBalance.orbBalance;
  c0 = undefined;
  const isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  [tmp3, c0] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined(true), []);
  if (tmp3) {
    return null;
  } else if (isPremiumSubscriber) {
    if (null != orbBalance) {
      if (orbBalance >= 1400) {
        orbBalance = OrbWalletShopPrimaryCard;
        const obj2 = { onClose: callback };
        const tmp8 = React7(OrbWalletShopPrimaryCard, obj2);
      }
    }
  } else {
    const obj3 = { onClose: callback };
    const tmp7 = React7(OrbWalletNitroUpsellPrimaryCard, obj3);
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
}
