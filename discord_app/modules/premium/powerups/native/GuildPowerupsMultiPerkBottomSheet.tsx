// discord_app/modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef2429 from "../GuildPowerups.messages.js";
import themes from "../../../../design/utils/shared/themes.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useGuildPowerupRollbackEnabledDefault from "../hooks/useGuildPowerupRollbackEnabled.tsx";
import usePowerupActiveStatus from "../hooks/usePowerupActiveStatus.tsx";
import useHasAllocateBoostPermissionDefault from "../hooks/useHasAllocateBoostPermission.tsx";
import useCalculatePowerupCardStatus from "../utils/useCalculatePowerupCardStatus.tsx";
import useGetGuildPowerupBannerImageDefault from "../hooks/useGetGuildPowerupBannerImage.tsx";
import GuildPowerupsImageDefault from "GuildPowerupsImage.tsx";
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter.tsx";
import useCanGuildPowerupBeToggledDefault from "../hooks/useCanGuildPowerupBeToggled.tsx";
import useGuildPowerupOnActivateDefault from "hooks/useGuildPowerupOnActivate.tsx";
import useGuildPowerupOnShowDeactivateDefault from "hooks/useGuildPowerupOnShowDeactivate.tsx";
import useGuildPowerupColorConfigDefault from "hooks/useGuildPowerupColorConfig.tsx";
import usePowerupGroupConfigDefault from "hooks/usePowerupGroupConfig.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const usePowerupActiveStatusDefault = usePowerupActiveStatus;

function GuildPowerupsMultiPerkCard(arg0) {
  ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
  c1 = undefined;
  const tmp4 = closure_6(themes.isThemeLight(useThemeDefault()));
  const tmp5 = useHasAllocateBoostPermissionDefault(guildId);
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp7 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp6, tmp7);
  const result = usePowerupActiveStatus.isPowerupActiveStatusActive(tmp6);
  c0 = result;
  const tmp10 = useGetGuildPowerupBannerImageDefault(powerup, true, forceStaticImage);
  const disabled = useCanGuildPowerupBeToggledDefault(guildId, powerup, result).disabled;
  ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
  closure_2 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
  const items = [tmp4.container];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp5;
  }
  if (disabled2) {
    disabled2 = tmp4.disabled;
  }
  const obj4 = { style: items, children: null };
  items[1] = disabled2;
  const items1 = [tmp4.imageContainer, , ,];
  let type;
  if (calculatePowerupCardStatus != null) {
    type = calculatePowerupCardStatus.type;
  }
  items1[1] = "active" === type && tmp4.imageContainerActive;
  let type1;
  if (calculatePowerupCardStatus != null) {
    type1 = calculatePowerupCardStatus.type;
  }
  items1[2] = "expiring" === type1 && tmp4.imageContainerExpiring;
  let type2;
  if (calculatePowerupCardStatus != null) {
    type2 = calculatePowerupCardStatus.type;
  }
  const obj5 = { style: items1, children: null };
  items1[3] = "removing" === type2 && tmp4.imageContainerRemoving;
  let str = tmp10;
  const tmp11 = useGuildPowerupOnActivateDefault(guildId, powerup);
  const tmp17 = "removing" === type2 && tmp4.imageContainerRemoving;
  if (tmp10 == null) {
    str = "";
  }
  const items2 = [
    React4(GuildPowerupsImageDefault, { imageUrl: str, isAnimated: !forceStaticImage, style: tmp4.image }),
  ];
  if (isNewPerk) {
    const obj7 = { text: null, style: null };
    const intl = util.intl;
    obj7.text = intl.string(util.t.y2b7CA);
    obj7.style = tmp4.badge;
    isNewPerk = React4(native.TextBadge, obj7);
  }
  items2[1] = isNewPerk;
  obj5.children = items2;
  const items3 = [hasOwnProperty(View, obj5)];
  const obj8 = { style: tmp4.bodyContainer, children: null };
  const obj9 = { style: tmp4.titleContainer, children: null };
  const obj6 = { imageUrl: str, isAnimated: !forceStaticImage, style: tmp4.image };
  const tmp3Result = GuildPowerupsImageDefault;
  const items4 = [
    React4(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: useGuildPowerupColorConfigDefault(result).textColor,
      children: powerup.title,
    }),
  ];
  if (null != calculatePowerupCardStatus) {
    const obj11 = { status: calculatePowerupCardStatus };
    let tmp18Result = React4(GuildPowerupsCardFooter.GuildPowerupCardFooterStatus, obj11);
  } else {
    const obj12 = { cost: powerup.cost };
    tmp18Result = React4(GuildPowerupsCardFooter.GuildPowerupCardFooterCost, obj12);
  }
  items4[1] = tmp18Result;
  obj9.children = items4;
  const items5 = [hasOwnProperty(View, obj9)];
  if (!tmp5) {
    items5[1] = tmp5;
    obj8.children = items5;
    items3[1] = hasOwnProperty(View, obj8);
    obj4.children = items3;
    return hasOwnProperty(View, obj4);
  } else {
    const obj13 = { disabled, loading: isLoading, variant: null, text: null, onPress: null };
    let str2 = "primary";
    if (result) {
      str2 = "secondary";
    }
    obj13.variant = str2;
    const intl2 = util.intl;
    const tmp3Result2 = _modDef2429;
    obj13.text = intl2.string(result ? tmp3Result2.TZsu1U : tmp3Result2.gSxlHf);
    obj13.onPress = function onPress() {
      if (c0) {
        closure_2();
      } else {
        _undefined();
      }
    };
    React4(components_Button_Button.Button, obj13);
  }
  const obj10 = {
    variant: "heading-md/semibold",
    color: useGuildPowerupColorConfigDefault(result).textColor,
    children: powerup.title,
  };
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = createStyles_mod;
let closure_6 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { gap: nativeDefault.space.PX_8 },
    cardsContainer: null,
    titleContainer: null,
    bodyContainer: null,
    imageContainer: null,
    imageContainerActive: null,
    imageContainerExpiring: null,
    imageContainerRemoving: null,
    image: null,
    disabled: null,
    badge: null,
  };
  const obj2 = { gap: nativeDefault.space.PX_8 };
  obj.cardsContainer = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
  obj.titleContainer = { flexDirection: "column", gap: 4 };
  obj.bodyContainer = { justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
  const obj4 = {
    borderRadius: nativeDefault.radii.md,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderStyle: "solid",
    backgroundColor: null,
  };
  let str = "#ffffff";
  const obj3 = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
  if (arg0) {
    str = "#000000";
  }
  const tmp3Result = _modDef672(str);
  obj4.backgroundColor = _modDef672(str).alpha(0.04).hex();
  obj.imageContainer = obj4;
  const obj5 = { borderColor: null };
  const alphaResult = _modDef672(str).alpha(0.04);
  const tmpResult = _modDef672;
  const tmpResultResult = _modDef672(nativeDefault.unsafe_rawColors.GREEN_360);
  obj5.borderColor = _modDef672(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35).hex();
  obj.imageContainerActive = obj5;
  const obj6 = { borderColor: null };
  const alphaResult1 = _modDef672(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35);
  const tmpResult3 = _modDef672;
  const tmpResult1Result = _modDef672(nativeDefault.unsafe_rawColors.YELLOW_300);
  obj6.borderColor = _modDef672(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerExpiring = obj6;
  const obj7 = { borderColor: null };
  const alphaResult2 = _modDef672(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35);
  const tmpResult4 = _modDef672;
  const tmpResult2Result = _modDef672(nativeDefault.unsafe_rawColors.YELLOW_300);
  obj7.borderColor = _modDef672(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerRemoving = obj7;
  obj.image = { width: "75%", height: 180, resizeMode: "contain" };
  obj.disabled = { opacity: 0.5 };
  const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
  obj.badge = rect;
  return obj;
});
let createStyles = createStyles_mod;
let obj = {
  cardsContainer: { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 },
  disabledReasonContainer: null,
};
let obj2 = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
obj.disabledReasonContainer = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx");

export default function GuildPowerupsMultiPerkBottomSheet(guildId) {
  guildId = guildId.guildId;
  const listing = guildId.listing;
  const tmp = closure_7();
  const tmp4 = usePowerupGroupConfigDefault(guildId, listing);
  importDefault = tmp4;
  let tmp6Result2 = null;
  if (null != tmp4) {
    const obj = { scrollable: true, startExpanded: true, onDismiss: guildId.onDismiss, children: null };
    const obj2 = { contentContainerStyle: null, children: null };
    const obj3 = { paddingBottom: useSafeAreaInsetsDefault().bottom };
    obj2.contentContainerStyle = obj3;
    ({ title: obj4.title, description: obj4.description } = tmp4);
    const items = [closure_4(tmp2(12687), { title: null, description: null }), ,];
    let tmp6Result = null != tmp4.disabledReason;
    if (tmp6Result) {
      const obj6 = { style: tmp.disabledReasonContainer, children: null };
      const obj7 = { text: tmp4.disabledReason };
      obj6.children = closure_4(tmp2(12680), obj7);
      tmp6Result = closure_4(View, obj6);
    }
    items[1] = tmp6Result;
    const obj13 = { style: tmp.cardsContainer, children: null };
    const powerups = listing.powerups;
    obj13.children = powerups.map((powerup) =>
      React4(
        GuildPowerupsMultiPerkCard,
        { guildId, powerup, forceStaticImage: forceStaticImages.forceStaticImages },
        powerup.skuId,
      ),
    );
    items[2] = closure_4(View, obj13);
    obj2.children = items;
    obj.children = closure_5(guildId(6732).BottomSheetScrollView, obj2);
    tmp6Result2 = closure_4(guildId(7257).BottomSheet, obj);
    const obj5 = { title: null, description: null };
  }
  return tmp6Result2;
}
