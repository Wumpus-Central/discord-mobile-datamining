// discord_app/modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx
import { View } from "Button";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c4;
let c5;
function GuildPowerupsMultiPerkCard(arg0) {
  let c1;
  let forceStaticImage;
  let guildId;
  let isLoading;
  let isNewPerk;
  let powerup;
  ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
  let _require;
  let importDefault;
  let dependencyMap;
  let obj = _require("../../../../design/utils/shared/themes.tsx");
  const tmp4 = callback2(obj.isThemeLight(require("../../../../hooks/useTheme.tsx")()));
  const tmp5 = require("../hooks/useHasAllocateBoostPermission.tsx")(guildId);
  const tmp6 = require("../hooks/usePowerupActiveStatus.tsx")(guildId, powerup);
  let obj1 = _require("../utils/useCalculatePowerupCardStatus.tsx");
  const calculatePowerupCardStatus = obj1.useCalculatePowerupCardStatus(powerup, tmp6, require("../hooks/useGuildPowerupRollbackEnabled.tsx")(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet"));
  let obj2 = _require("../hooks/usePowerupActiveStatus.tsx");
  const result = obj2.isPowerupActiveStatusActive(tmp6);
  _require = result;
  const tmp10 = require("../hooks/useGetGuildPowerupBannerImage.tsx")(powerup, true, forceStaticImage);
  const disabled = require("../hooks/useCanGuildPowerupBeToggled.tsx")(guildId, powerup, result).disabled;
  const tmp7 = require("../hooks/useGuildPowerupRollbackEnabled.tsx")(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
  ({ onActivate: c1, isLoading } = require("hooks/useGuildPowerupOnActivate.tsx")(guildId, powerup));
  dependencyMap = require("hooks/useGuildPowerupOnShowDeactivate.tsx")(guildId, powerup);
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
  let tmp3Result = tmp3(11796);
  if (tmp10 == null) {
    str = "";
  }
  obj1 = { imageUrl: str, isAnimated: !forceStaticImage, style: tmp4.image };
  const items2 = [closure_4(tmp3Result, obj1), ];
  if (isNewPerk) {
    obj2 = { text: null, style: null };
    const intl = tmp(1236).intl;
    obj2[0] = intl.string(tmp(1236).t.y2b7CA);
    obj2[1] = tmp4.badge;
    isNewPerk = tmp18(tmp(1297).TextBadge, obj2);
  }
  items2[1] = isNewPerk;
  obj[1] = items2;
  const items3 = [closure_5(View, obj), ];
  const obj3 = { style: tmp4.bodyContainer, children: null };
  const obj4 = { style: tmp4.titleContainer, children: null };
  const tmp11 = require("hooks/useGuildPowerupOnActivate.tsx")(guildId, powerup);
  const tmp17 = "removing" === type2 && tmp4.imageContainerRemoving;
  const items4 = [closure_4(_require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "heading-md/semibold", color: require("hooks/useGuildPowerupColorConfig.tsx")(result).textColor, children: powerup.title }), ];
  if (null != calculatePowerupCardStatus) {
    const obj6 = { status: null };
    obj6[0] = calculatePowerupCardStatus;
    let tmp18Result = tmp18(tmp(11797).GuildPowerupCardFooterStatus, obj6);
  } else {
    const obj7 = { cost: null };
    obj7[0] = powerup.cost;
    tmp18Result = tmp18(tmp(11797).GuildPowerupCardFooterCost, obj7);
  }
  items4[1] = tmp18Result;
  obj4[1] = items4;
  const items5 = [closure_5(View, obj4), ];
  if (!tmp5) {
    items5[1] = tmp5;
    obj3[1] = items5;
    items3[1] = tmp12(tmp13, obj3);
    obj[1] = items3;
    return tmp12(tmp13, obj);
  } else {
    const obj8 = { disabled: null, loading: null, variant: null, text: null, onPress: null };
    obj8[0] = disabled;
    obj8[1] = isLoading;
    let str2 = "primary";
    if (result) {
      str2 = "secondary";
    }
    obj8[2] = str2;
    const intl2 = tmp(1236).intl;
    tmp3Result = tmp3(2317);
    obj8[3] = intl2.string(result ? tmp3Result.TZsu1U : tmp3Result.gSxlHf);
    obj8[4] = function onPress() {
      if (c0) {
        callback();
      } else {
        _undefined();
      }
    };
    tmp18Result = tmp18(tmp(4695).Button, obj8);
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, cardsContainer: null, titleContainer: null, bodyContainer: null, imageContainer: null, imageContainerActive: null, imageContainerExpiring: null, imageContainerRemoving: null, image: null, disabled: null, badge: null };
  obj = { gap: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_8 };
  obj[0] = obj;
  obj = { gap: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_24, marginHorizontal: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16 };
  obj[1] = obj;
  obj[2] = { flexDirection: "column", gap: 4 };
  obj[3] = { justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
  const obj1 = { borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.md, borderWidth: 1, borderColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_MOD_MUTED, borderStyle: "solid", backgroundColor: null };
  let str = "#ffffff";
  if (arg0) {
    str = "#000000";
  }
  const tmp3 = require("../../../../../_runtime/00689_n.js");
  const tmp3Result = require("../../../../../_runtime/00689_n.js")(str);
  obj1[4] = require("../../../../../_runtime/00689_n.js")(str).alpha(0.04).hex();
  obj[4] = obj1;
  const obj2 = { borderColor: null };
  let tmpResult = tmp(689);
  const alphaResult = require("../../../../../_runtime/00689_n.js")(str).alpha(0.04);
  const tmpResultResult = tmpResult(require("../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.GREEN_360);
  obj2[0] = tmpResult(require("../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.GREEN_360).alpha(0.35).hex();
  obj[5] = obj2;
  const obj3 = { borderColor: null };
  tmpResult = tmp(689);
  const alphaResult1 = tmpResult(require("../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.GREEN_360).alpha(0.35);
  const tmpResult1Result = tmpResult(require("../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.YELLOW_300);
  obj3[0] = tmpResult(require("../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj[6] = obj3;
  const obj4 = { borderColor: null };
  const alphaResult2 = tmpResult(require("../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.YELLOW_300).alpha(0.35);
  const tmpResult1 = require("../../../../../_runtime/00689_n.js");
  const tmpResult2Result = require("../../../../../_runtime/00689_n.js")(require("../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.YELLOW_300);
  obj4[0] = require("../../../../../_runtime/00689_n.js")(require("../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj[7] = obj4;
  obj[8] = { width: "75%", height: 180, resizeMode: "contain" };
  obj[9] = { opacity: 0.5 };
  const alphaResult3 = require("../../../../../_runtime/00689_n.js")(require("../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.YELLOW_300).alpha(0.35);
  obj[10] = { position: "absolute", top: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_8, right: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_8 };
  return obj;
});
let obj = { cardsContainer: null, disabledReasonContainer: null };
obj = { gap: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_16 };
obj[0] = obj;
obj[1] = { marginHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16 };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { marginHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16 };
let result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx");

export default function GuildPowerupsMultiPerkBottomSheet(guildId) {
  guildId = guildId.guildId;
  const listing = guildId.listing;
  let importDefault;
  const tmp = callback3();
  const tmp4 = require("hooks/usePowerupGroupConfig.tsx")(guildId, listing);
  importDefault = tmp4;
  let tmp6Result = null;
  if (null != tmp4) {
    let obj = { scrollable: true, startExpanded: true, onDismiss: null, children: null };
    obj[2] = guildId.onDismiss;
    obj = { contentContainerStyle: null, children: null };
    obj = { paddingBottom: null };
    obj[0] = require("../../../safe_area/useSafeAreaInsets.native.tsx")().bottom;
    obj[0] = obj;
    ({ title: obj4[0], description: obj4[1] } = tmp4);
    const items = [callback(tmp2(11823), { title: null, description: null }), , ];
    tmp6Result = null != tmp4.disabledReason;
    if (tmp6Result) {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.disabledReasonContainer;
      const obj3 = { text: null };
      obj3[0] = tmp4.disabledReason;
      obj2[1] = tmp6(tmp2(11816), obj3);
      tmp6Result = tmp6(View, obj2);
    }
    items[1] = tmp6Result;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.cardsContainer;
    const powerups = listing.powerups;
    obj4[1] = powerups.map((powerup) => outer1_4(outer1_8, { guildId, powerup, forceStaticImage: _undefined.forceStaticImages }, powerup.skuId));
    items[2] = callback(View, obj4);
    obj[1] = items;
    obj[3] = closure_5(guildId(5340).BottomSheetScrollView, obj);
    tmp6Result = tmp6(guildId(5338).BottomSheet, obj);
    const obj1 = { title: null, description: null };
    const tmp8 = closure_5;
  }
  return tmp6Result;
};