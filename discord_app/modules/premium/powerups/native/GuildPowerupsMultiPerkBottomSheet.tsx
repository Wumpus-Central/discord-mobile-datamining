// === Module 12547: GuildPowerupsMultiPerkBottomSheet ===

// Module 12547 (GuildPowerupsMultiPerkBottomSheet)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import themes from "themes" /* 4269 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text_Text from "Text/Text" /* 4556 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12496 */;
import usePowerupActiveStatus from "usePowerupActiveStatus" /* 12499 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12513 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12519 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12520 */;
import useCanGuildPowerupBeToggledDefault from "useCanGuildPowerupBeToggled" /* 12534 */;
import useGuildPowerupOnActivateDefault from "useGuildPowerupOnActivate" /* 12535 */;
import useGuildPowerupOnShowDeactivateDefault from "useGuildPowerupOnShowDeactivate" /* 12539 */;
import useGuildPowerupColorConfigDefault from "useGuildPowerupColorConfig" /* 12548 */;
import usePowerupGroupConfigDefault from "usePowerupGroupConfig" /* 12549 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const usePowerupActiveStatusDefault = usePowerupActiveStatus;

function GuildPowerupsMultiPerkCard(arg0) {
  ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
  c1 = undefined;
  let obj = themes;
  const tmp4 = closure_6(obj.isThemeLight(useThemeDefault()));
  const tmp5 = useHasAllocateBoostPermissionDefault(guildId);
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  let obj1 = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj1.useCalculatePowerupCardStatus(powerup, tmp6, useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet"));
  let obj2 = usePowerupActiveStatus;
  const result = obj2.isPowerupActiveStatusActive(tmp6);
  c0 = result;
  const tmp10 = useGetGuildPowerupBannerImageDefault(powerup, true, forceStaticImage);
  const disabled = useCanGuildPowerupBeToggledDefault(guildId, powerup, result).disabled;
  const tmp7 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
  ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
  closure_2 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
  const items = [tmp4.container, ];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp5;
  }
  if (disabled2) {
    disabled2 = tmp4.disabled;
  }
  obj = { style: items, children: null };
  items[1] = disabled2;
  const items1 = [tmp4.imageContainer, , , ];
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
  obj = { style: items1, children: null };
  items1[3] = "removing" === type2 && tmp4.imageContainerRemoving;
  let str = tmp10;
  let tmp3Result = tmp3(12523);
  if (tmp10 == null) {
    str = "";
  }
  obj1 = { imageUrl: str, isAnimated: !forceStaticImage, style: tmp4.image };
  const items2 = [React4(tmp3Result, obj1), ];
  if (isNewPerk) {
    obj2 = { text: null, style: null };
    const intl = tmp(1114).intl;
    obj2.text = intl.string(tmp(1114).t.y2b7CA);
    obj2.style = tmp4.badge;
    isNewPerk = tmp18(tmp(1178).TextBadge, obj2);
  }
  items2[1] = isNewPerk;
  obj.children = items2;
  const items3 = [hasOwnProperty(View, obj), ];
  const obj3 = { style: tmp4.bodyContainer, children: null };
  const obj4 = { style: tmp4.titleContainer, children: null };
  const tmp11 = useGuildPowerupOnActivateDefault(guildId, powerup);
  const tmp17 = "removing" === type2 && tmp4.imageContainerRemoving;
  const items4 = [React4(Text_Text.Text, { variant: "heading-md/semibold", color: useGuildPowerupColorConfigDefault(result).textColor, children: powerup.title }), ];
  if (null != calculatePowerupCardStatus) {
    const obj6 = { status: calculatePowerupCardStatus };
    let tmp18Result = tmp18(tmp(12524).GuildPowerupCardFooterStatus, obj6);
  } else {
    const obj7 = { cost: powerup.cost };
    tmp18Result = tmp18(tmp(12524).GuildPowerupCardFooterCost, obj7);
  }
  items4[1] = tmp18Result;
  obj4.children = items4;
  const items5 = [hasOwnProperty(View, obj4), ];
  if (!tmp5) {
    items5[1] = tmp5;
    obj3.children = items5;
    items3[1] = tmp12(tmp13, obj3);
    obj.children = items3;
    return tmp12(tmp13, obj);
  } else {
    const obj8 = { disabled, loading: isLoading, variant: null, text: null, onPress: null };
    let str2 = "primary";
    if (result) {
      str2 = "secondary";
    }
    obj8.variant = str2;
    const intl2 = tmp(1114).intl;
    tmp3Result = tmp3(2428);
    obj8.text = intl2.string(result ? tmp3Result.TZsu1U : tmp3Result.gSxlHf);
    obj8.onPress = function onPress() {
      if (c0) {
        closure_2();
      } else {
        _undefined();
      }
    };
    tmp18Result = tmp18(tmp(4975).Button, obj8);
  }
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = createStyles.createStyles((arg0) => {
  let obj = { container: null, cardsContainer: null, titleContainer: null, bodyContainer: null, imageContainer: null, imageContainerActive: null, imageContainerExpiring: null, imageContainerRemoving: null, image: null, disabled: null, badge: null };
  obj = { gap: nativeDefault.space.PX_8 };
  obj.container = obj;
  obj = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
  obj.cardsContainer = obj;
  obj.titleContainer = { flexDirection: "column", gap: 4 };
  obj.bodyContainer = { justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
  const obj1 = { borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "solid", backgroundColor: null };
  let str = "#ffffff";
  if (arg0) {
    str = "#000000";
  }
  const tmp3Result = _modDef672(str);
  obj1.backgroundColor = _modDef672(str).alpha(0.04).hex();
  obj.imageContainer = obj1;
  const obj2 = { borderColor: null };
  let tmpResult = tmp(672);
  const alphaResult = _modDef672(str).alpha(0.04);
  const tmpResultResult = tmpResult(nativeDefault.unsafe_rawColors.GREEN_360);
  obj2.borderColor = tmpResult(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35).hex();
  obj.imageContainerActive = obj2;
  const obj3 = { borderColor: null };
  tmpResult = tmp(672);
  const alphaResult1 = tmpResult(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35);
  const tmpResult1Result = tmpResult(nativeDefault.unsafe_rawColors.YELLOW_300);
  obj3.borderColor = tmpResult(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerExpiring = obj3;
  const obj4 = { borderColor: null };
  const alphaResult2 = tmpResult(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35);
  const tmpResult1 = _modDef672;
  const tmpResult2Result = _modDef672(nativeDefault.unsafe_rawColors.YELLOW_300);
  obj4.borderColor = _modDef672(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerRemoving = obj4;
  obj.image = { width: "75%", height: 180, resizeMode: "contain" };
  obj.disabled = { opacity: 0.5 };
  const rect = { position: "absolute", top: tmp(576).space.PX_8, right: tmp(576).space.PX_8 };
  obj.badge = rect;
  return obj;
});
let obj = { cardsContainer: null, disabledReasonContainer: null };
obj = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
obj.cardsContainer = obj;
obj.disabledReasonContainer = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx");

export default function GuildPowerupsMultiPerkBottomSheet(guildId) {
  guildId = guildId.guildId;
  const listing = guildId.listing;
  const tmp = closure_7();
  const tmp4 = usePowerupGroupConfigDefault(guildId, listing);
  importDefault = tmp4;
  let tmp6Result = null;
  if (null != tmp4) {
    let obj = { scrollable: true, startExpanded: true, onDismiss: guildId.onDismiss, children: null };
    obj = { contentContainerStyle: null, children: null };
    obj = { paddingBottom: useSafeAreaInsetsDefault().bottom };
    obj.contentContainerStyle = obj;
    ({ title: obj4.title, description: obj4.description } = tmp4);
    const items = [closure_4(tmp2(12552), { title: null, description: null }), , ];
    tmp6Result = null != tmp4.disabledReason;
    if (tmp6Result) {
      const obj2 = { style: tmp.disabledReasonContainer, children: null };
      const obj3 = { text: tmp4.disabledReason };
      obj2.children = tmp6(tmp2(12545), obj3);
      tmp6Result = tmp6(View, obj2);
    }
    items[1] = tmp6Result;
    const obj4 = { style: tmp.cardsContainer, children: null };
    const powerups = listing.powerups;
    obj4.children = powerups.map((powerup) => React4(GuildPowerupsMultiPerkCard, { guildId, powerup, forceStaticImage: forceStaticImages.forceStaticImages }, powerup.skuId));
    items[2] = closure_4(View, obj4);
    obj.children = items;
    obj.children = closure_5(guildId(6627).BottomSheetScrollView, obj);
    tmp6Result = tmp6(guildId(7150).BottomSheet, obj);
    const obj1 = { title: null, description: null };
  }
  return tmp6Result;
};