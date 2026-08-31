// discord_app/modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../GuildPowerups.messages.js";
import str11 from "../../../game_server/GameServerConstants.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useGuildPowerupRollbackEnabledDefault from "../hooks/useGuildPowerupRollbackEnabled.tsx";
import usePowerupActiveStatusDefault from "../hooks/usePowerupActiveStatus.tsx";
import useHasAllocateBoostPermissionDefault from "../hooks/useHasAllocateBoostPermission.tsx";
import useCalculatePowerupCardStatus from "../utils/useCalculatePowerupCardStatus.tsx";
import useGetGuildPowerupBannerImageDefault from "../hooks/useGetGuildPowerupBannerImage.tsx";
import GuildPowerupCardFooterActive from "GuildPowerupsCardFooter.tsx";
import useGuildPowerupLevelPerksDefault from "../hooks/useGuildPowerupLevelPerks.tsx";
import useGuildPowerupCardFooterConfigDefault from "../hooks/useGuildPowerupCardFooterConfig.tsx";
import useCanGuildPowerupBeToggledDefault from "../hooks/useCanGuildPowerupBeToggled.tsx";
import useGuildPowerupOnActivateDefault from "hooks/useGuildPowerupOnActivate.tsx";
import ModalType from "../analytics/GuildPowerupAnalytics.tsx";
import closure_4 from "../../../a11y/AccessibilityStore.tsx";
import BoostedGuildTiers from "../constants/GuildPowerupsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

function GuildPowerupsBottomSheetHeader(arg0) {
  ({ guildId, powerup } = arg0);
  const tmp = callback3();
  const tmp4 = usePowerupActiveStatusDefault(guildId, powerup);
  let obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp4, useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet"));
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  if (str == null) {
    str = "";
  }
  const tmp5 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet");
  const items = [closure_4];
  let str2;
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (powerup.skuId === closure_7) {
    str2 = "+";
  }
  if (powerup.type === constants.LEVEL) {
    obj = { style: null };
    obj[0] = tmp.gemContainer;
    let tmp15 = callback(tmp2(12052), obj);
    let tmp14 = callback;
  } else if (tmp10 === closure_7) {
    obj = { style: null, children: null };
    obj[0] = tmp.image;
    obj1 = { stateMachine: "SM_Auto", dataBinding: null };
    const obj2 = { reducedMotion: null };
    obj2[0] = stateFromStores;
    obj1[1] = obj2;
    obj[1] = callback(tmp6(4174).GameServerHostingRive, obj1);
    tmp15 = callback(tmp12, obj);
    tmp14 = callback;
  } else {
    const obj3 = { imageUrl: null, style: null, isAnimated: true };
    obj3[0] = str;
    obj3[1] = tmp.image;
    tmp14 = callback;
    tmp15 = callback(tmp2(12054), obj3);
  }
  const obj4 = { children: null };
  const items1 = [tmp15, ];
  const obj5 = { style: tmp.headerContainer, children: null };
  const items2 = [tmp14(Text.Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: powerup.title }), tmp14(GuildPowerupCardFooterActive.GuildPowerupsCardFooter, { cost: powerup.cost, costDecorator: str2, status: calculatePowerupCardStatus, style: tmp.statusContainer })];
  obj5[1] = items2;
  items1[1] = closure_9(View, obj5);
  obj4[0] = items1;
  return closure_9(View, obj4);
}
function GuildPowerupsBottomSheetLevelBody(powerup) {
  closure_0 = undefined;
  const tmp = callback3();
  closure_0 = tmp;
  const arr = useGuildPowerupLevelPerksDefault(powerup.powerup);
  return callback(View, {
    style: tmp.levelContainer,
    children: useGuildPowerupLevelPerksDefault(powerup.powerup).map((children) => {
      let obj = lib(closure_1_2[18]);
      obj = { style: lib.perkContainer, children: null };
      const iconForPerk = obj.getIconForPerk(children.perkIcon);
      obj = { style: lib.perkText, variant: "text-md/medium", children: children.description };
      const items = [closure_1_8(lib(closure_1_2[15]).Text, obj), closure_1_8(iconForPerk, { style: lib.perkIcon })];
      obj[1] = items;
      return closure_1_9(closure_1_3, obj, "perk-" + arg1 + "-" + children.perkIcon);
    })
  });
}
function GuildPowerupsBottomSheetBody(powerup) {
  powerup = powerup.powerup;
  const tmp = callback3();
  const type = powerup.type;
  if (constants.PERK === type) {
    let obj = { style: null, variant: "text-md/medium", children: null };
    obj[0] = tmp.description;
    obj[2] = powerup.description;
    const items = [callback(Text.Text, obj), ];
    let tmp5Result = null != powerup.deactivationCooldownPeriodDays;
    if (tmp5Result) {
      tmp5Result = powerup.deactivationCooldownPeriodDays > 0;
    }
    if (tmp5Result) {
      obj = { style: null, children: null };
      obj[0] = tmp.cooldownInfo;
      obj1 = { size: "xs", color: null };
      obj1[1] = ThemesDefault.colors.TEXT_MUTED;
      const items1 = [tmp7(tmp8(4403).CircleInformationIcon, obj1), ];
      const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = tmp8(1236).intl;
      const obj3 = { cooldownDays: null };
      obj3[0] = powerup.deactivationCooldownPeriodDays;
      obj2[2] = intl.formatToPlainString(messagesProxyDefault.GMhQcE, obj3);
      items1[1] = tmp7(tmp8(4444).Text, obj2);
      obj[1] = items1;
      tmp5Result = tmp5(View, obj);
    }
    const obj4 = { children: null };
    items[1] = tmp5Result;
    obj4[0] = items;
    return closure_9(closure_10, obj4);
  } else if (tmp2.LEVEL === type) {
    obj = { powerup: null };
    obj[0] = powerup;
    return callback(GuildPowerupsBottomSheetLevelBody, obj);
  }
}
function GuildPowerupsBottomSheetFooter(arg0) {
  ({ guildId, powerup } = arg0);
  isPowerupActive = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = callback3();
  const tmp4 = useHasAllocateBoostPermissionDefault(guildId);
  ({ showToggleButton, showConfigureButton, isPowerupActive } = useGuildPowerupCardFooterConfigDefault(guildId, powerup));
  if (showConfigureButton) {
    let result = powerup.skuId !== isPowerupActive(4338).GUILD_POWERUP_TAG_SKU_ID;
    if (!result) {
      result = tmp6(9692).canUseMobileServerTagSettings(guildId);
      const tmp6Result = tmp6(9692);
    }
    showConfigureButton = result;
    tmp6 = isPowerupActive;
  }
  const tmp5 = useGuildPowerupCardFooterConfigDefault(guildId, powerup);
  ({ disabled, reason } = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive));
  const tmp8 = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive);
  ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
  dependencyMap = tmp2(12070)(guildId, powerup);
  if (tmp4) {
    let tmp14 = !showConfigureButton;
    const hasItem = set.has(powerup.skuId);
    if (!showConfigureButton) {
      tmp14 = isPowerupActive;
    }
    if (tmp14) {
      tmp14 = powerup.type === constants.PERK;
    }
    if (tmp14) {
      tmp14 = hasItem;
    }
    if (!tmp14) {
      tmp14 = powerup.skuId === closure_7;
    }
    let obj = { style: null, children: null };
    obj[0] = tmp.footerContainer;
    if (tmp14) {
      obj = { style: null, variant: "text-md/bold", children: null };
      obj[0] = tmp.description;
      const intl = isPowerupActive(1236).intl;
      obj[2] = intl.string(tmp2(2401)["jo5++h"]);
      tmp14 = callback(isPowerupActive(4444).Text, obj);
    }
    const items = [tmp14, , , ];
    let tmp21 = disabled;
    if (disabled) {
      tmp21 = null != reason;
    }
    if (tmp21) {
      obj1 = { text: null };
      obj1[0] = reason;
      tmp21 = callback(tmp2(12076), obj1);
    }
    items[1] = tmp21;
    if (showConfigureButton) {
      const obj2 = { variant: "primary", text: null, onPress: null };
      const intl2 = isPowerupActive(1236).intl;
      obj2[1] = intl2.string(tmp2(2401).g5Ds69);
      obj2[2] = tmp10;
      showConfigureButton = callback(isPowerupActive(4896).Button, obj2);
    }
    items[2] = showConfigureButton;
    if (showToggleButton) {
      showToggleButton = powerup.skuId !== closure_7;
    }
    if (!showToggleButton) {
      items[3] = showToggleButton;
      obj[1] = items;
      return tmp17(tmp18, obj);
    } else {
      let str = "primary";
      if (isPowerupActive) {
        str = "secondary";
      }
      const obj3 = { variant: null, text: null, loading: null, disabled: null, onPress: null };
      obj3[0] = str;
      const intl3 = isPowerupActive(1236).intl;
      const string = intl3.string;
      let TZsu1U = tmp2(2401);
      if (isPowerupActive) {
        TZsu1U = TZsu1U.TZsu1U;
        let stringResult = string(TZsu1U);
      } else {
        stringResult = string(TZsu1U.gSxlHf);
      }
      obj3[1] = stringResult;
      obj3[2] = isLoading;
      obj3[3] = disabled;
      obj3[4] = function onPress() {
        if (isPowerupActive) {
          if (closure_2 != null) {
            tmp4();
          }
        } else if (c1 != null) {
          tmp();
        }
      };
      callback(isPowerupActive(4896).Button, obj3);
      const tmp27 = callback;
      const tmp28 = isPowerupActive;
    }
    tmp17 = closure_9;
    tmp18 = View;
  } else {
    return null;
  }
}
const View = get_ActivityIndicator.View;
({ GuildPowerupType: c5, GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP: closure_6 } = BoostedGuildTiers);
let closure_7 = str11.GAME_SERVER_POWERUP_SKU_ID;
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
let obj = { container: null, headerContainer: null, statusContainer: null, levelContainer: null, perkContainer: null, perkIcon: null, perkText: null, footerContainer: null, image: null, description: null, cooldownInfo: null, gemContainer: null };
obj = { padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { marginTop: ThemesDefault.space.PX_24, alignItems: "center" };
let obj1 = { marginTop: ThemesDefault.space.PX_24, alignItems: "center" };
obj[2] = { justifyContent: "center", gap: ThemesDefault.space.PX_8 };
let obj2 = { justifyContent: "center", gap: ThemesDefault.space.PX_8 };
obj[3] = { flexDirection: "column", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16 };
obj[4] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj[5] = { width: 20, height: 20 };
let obj3 = { flexDirection: "column", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16 };
obj[6] = { marginStart: ThemesDefault.space.PX_8 };
let obj4 = { marginStart: ThemesDefault.space.PX_8 };
obj[7] = { gap: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_8 };
obj[8] = { width: "100%", height: 160 };
let obj5 = { gap: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_8 };
obj[9] = { marginHorizontal: ThemesDefault.space.PX_24, textAlign: "center" };
const obj6 = { marginHorizontal: ThemesDefault.space.PX_24, textAlign: "center" };
obj[10] = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_4, marginTop: ThemesDefault.space.PX_8 };
const obj7 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_4, marginTop: ThemesDefault.space.PX_8 };
obj[11] = { marginTop: ThemesDefault.space.PX_16 };
let closure_11 = createCacheKey.createStyles(obj);
const obj8 = { marginTop: ThemesDefault.space.PX_16 };
let result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx");

export default function GuildPowerupsBottomSheet(arg0) {
  ({ guildId, powerup } = arg0);
  let obj = ModalType;
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, ModalType.ModalType.DETAIL);
  obj = { startExpanded: true, children: null };
  obj = { style: callback3().container, children: null };
  const items = [callback(GuildPowerupsBottomSheetHeader, { guildId, powerup }), callback(GuildPowerupsBottomSheetBody, { guildId, powerup }), callback(GuildPowerupsBottomSheetFooter, { guildId, powerup })];
  obj[1] = items;
  obj[1] = callback2(View, obj);
  return callback(Background.BottomSheet, obj);
};