// === Module 12518: GuildPowerupsBottomSheet ===

// Module 12518 (GuildPowerupsBottomSheet)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import GameServerConstants from "GameServerConstants" /* 4451 */;
import Powerups from "Powerups" /* 4453 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12496 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12499 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12513 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12519 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12520 */;
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter" /* 12524 */;
import useGuildPowerupLevelPerksDefault from "useGuildPowerupLevelPerks" /* 12526 */;
import GuildBoostingMarketingUtils from "GuildBoostingMarketingUtils" /* 12527 */;
import useGuildPowerupCardFooterConfigDefault from "useGuildPowerupCardFooterConfig" /* 12533 */;
import useCanGuildPowerupBeToggledDefault from "useCanGuildPowerupBeToggled" /* 12534 */;
import useGuildPowerupOnActivateDefault from "useGuildPowerupOnActivate" /* 12535 */;
import GuildPowerupAnalytics from "GuildPowerupAnalytics" /* 12543 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4450 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

function GuildPowerupsBottomSheetHeader(arg0) {
  ({ guildId, powerup } = arg0);
  const tmp = closure_11();
  const tmp4 = usePowerupActiveStatusDefault(guildId, powerup);
  let obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp4, useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet"));
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  if (str == null) {
    str = "";
  }
  const tmp5 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet");
  const items = [AccessibilityStore];
  let str2;
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (powerup.skuId === closure_7) {
    str2 = "+";
  }
  if (powerup.type === constants.LEVEL) {
    obj = { style: tmp.gemContainer };
    let tmp15 = React6(tmp2(12521), obj);
    let tmp14 = React6;
  } else if (tmp10 === closure_7) {
    obj = { style: tmp.image, children: null };
    const obj1 = { stateMachine: "SM_Auto", dataBinding: null };
    const obj2 = { reducedMotion: stateFromStores };
    obj1.dataBinding = obj2;
    obj.children = React6(tmp6(4271).GameServerHostingRive, obj1);
    tmp15 = React6(tmp12, obj);
    tmp14 = React6;
  } else {
    const obj3 = { imageUrl: str, style: tmp.image, isAnimated: true };
    tmp14 = React6;
    tmp15 = React6(tmp2(12523), obj3);
  }
  const obj4 = { children: null };
  const items1 = [tmp15, ];
  const obj5 = { style: tmp.headerContainer, children: null };
  const items2 = [tmp14(Text_Text.Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: powerup.title }), tmp14(GuildPowerupsCardFooter.GuildPowerupsCardFooter, { cost: powerup.cost, costDecorator: str2, status: calculatePowerupCardStatus, style: tmp.statusContainer })];
  obj5.children = items2;
  items1[1] = React7(View, obj5);
  obj4.children = items1;
  return React7(View, obj4);
}
function GuildPowerupsBottomSheetLevelBody(powerup) {
  const tmp = closure_11();
  closure_0 = tmp;
  const arr = useGuildPowerupLevelPerksDefault(powerup.powerup);
  return closure_8(View, {
    style: tmp.levelContainer,
    children: useGuildPowerupLevelPerksDefault(powerup.powerup).map((children, index) => {
      let obj = { style: closure_0.perkContainer, children: null };
      const iconForPerk = obj.getIconForPerk(children.perkIcon);
      obj = { style: closure_0.perkText, variant: "text-md/medium", children: children.description };
      const items = [React6(Text_Text.Text, obj), React6(iconForPerk, { style: closure_0.perkIcon })];
      obj.children = items;
      return React7(View, obj, "perk-" + index + "-" + children.perkIcon);
    })
  });
}
function GuildPowerupsBottomSheetBody(powerup) {
  powerup = powerup.powerup;
  const tmp = closure_11();
  const type = powerup.type;
  if (constants.PERK === type) {
    let obj = { style: tmp.description, variant: "text-md/medium", children: powerup.description };
    const items = [React6(Text_Text.Text, obj), ];
    let tmp5Result = null != powerup.deactivationCooldownPeriodDays;
    if (tmp5Result) {
      tmp5Result = powerup.deactivationCooldownPeriodDays > 0;
    }
    if (tmp5Result) {
      obj = { style: tmp.cooldownInfo, children: null };
      const obj1 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const items1 = [tmp7(tmp8(4515).CircleInformationIcon, obj1), ];
      const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = tmp8(1114).intl;
      const obj3 = { cooldownDays: powerup.deactivationCooldownPeriodDays };
      obj2.children = intl.formatToPlainString(_modDef2428.GMhQcE, obj3);
      items1[1] = tmp7(tmp8(4556).Text, obj2);
      obj.children = items1;
      tmp5Result = tmp5(View, obj);
    }
    const obj4 = { children: null };
    items[1] = tmp5Result;
    obj4.children = items;
    return React7(closure_1_10, obj4);
  } else if (tmp2.LEVEL === type) {
    obj = { powerup };
    return React6(GuildPowerupsBottomSheetLevelBody, obj);
  }
}
function GuildPowerupsBottomSheetFooter(arg0) {
  ({ guildId, powerup } = arg0);
  isPowerupActive = undefined;
  c1 = undefined;
  closure_2 = undefined;
  const tmp = closure_11();
  const tmp4 = useHasAllocateBoostPermissionDefault(guildId);
  ({ showToggleButton, showConfigureButton, isPowerupActive } = useGuildPowerupCardFooterConfigDefault(guildId, powerup));
  if (showConfigureButton) {
    let result = powerup.skuId !== Powerups.GUILD_POWERUP_TAG_SKU_ID;
    if (!result) {
      result = tmp6(9067).canUseMobileServerTagSettings(guildId);
      const tmp6Result = tmp6(9067);
    }
    showConfigureButton = result;
    tmp6 = require;
  }
  const tmp5 = useGuildPowerupCardFooterConfigDefault(guildId, powerup);
  ({ disabled, reason } = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive));
  const tmp8 = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive);
  ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
  closure_2 = tmp2(12539)(guildId, powerup);
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
    let obj = { style: tmp.footerContainer, children: null };
    if (tmp14) {
      obj = { style: tmp.description, variant: "text-md/bold", children: null };
      const intl = util.intl;
      obj.children = intl.string(tmp2(2428)["jo5++h"]);
      tmp14 = React6(Text_Text.Text, obj);
    }
    const items = [tmp14, , , ];
    let tmp21 = disabled;
    if (disabled) {
      tmp21 = null != reason;
    }
    if (tmp21) {
      const obj1 = { text: reason };
      tmp21 = React6(tmp2(12545), obj1);
    }
    items[1] = tmp21;
    if (showConfigureButton) {
      const obj2 = { variant: "primary", text: null, onPress: null };
      const intl2 = util.intl;
      obj2.text = intl2.string(tmp2(2428).g5Ds69);
      obj2.onPress = tmp10;
      showConfigureButton = React6(components_Button_Button.Button, obj2);
    }
    items[2] = showConfigureButton;
    if (showToggleButton) {
      showToggleButton = powerup.skuId !== closure_7;
    }
    if (!showToggleButton) {
      items[3] = showToggleButton;
      obj.children = items;
      return tmp17(tmp18, obj);
    } else {
      let str = "primary";
      if (isPowerupActive) {
        str = "secondary";
      }
      const obj3 = { variant: str, text: null, loading: null, disabled: null, onPress: null };
      const intl3 = util.intl;
      const string = intl3.string;
      let TZsu1U = tmp2(2428);
      if (isPowerupActive) {
        TZsu1U = TZsu1U.TZsu1U;
        let stringResult = string(TZsu1U);
      } else {
        stringResult = string(TZsu1U.gSxlHf);
      }
      obj3.text = stringResult;
      obj3.loading = isLoading;
      obj3.disabled = disabled;
      obj3.onPress = function onPress() {
        if (isPowerupActive) {
          if (closure_2 != null) {
            tmp4();
          }
        } else if (c1 != null) {
          tmp();
        }
      };
      React6(components_Button_Button.Button, obj3);
    }
    tmp17 = React7;
    tmp18 = View;
  } else {
    return null;
  }
}
const View = _mod17.View;
({ GuildPowerupType: hasOwnProperty, GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP: metroRequire } = GuildPowerupsConstants);
let closure_7 = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let obj = { container: null, headerContainer: null, statusContainer: null, levelContainer: null, perkContainer: null, perkIcon: null, perkText: null, footerContainer: null, image: null, description: null, cooldownInfo: null, gemContainer: null };
obj = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj.container = obj;
obj.headerContainer = { marginTop: nativeDefault.space.PX_24, alignItems: "center" };
let obj1 = { marginTop: nativeDefault.space.PX_24, alignItems: "center" };
obj.statusContainer = { justifyContent: "center", gap: nativeDefault.space.PX_8 };
let obj2 = { justifyContent: "center", gap: nativeDefault.space.PX_8 };
obj.levelContainer = { flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
obj.perkContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.perkIcon = { width: 20, height: 20 };
let obj3 = { flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
obj.perkText = { marginStart: nativeDefault.space.PX_8 };
let obj4 = { marginStart: nativeDefault.space.PX_8 };
obj.footerContainer = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8 };
obj.image = { width: "100%", height: 160 };
let obj5 = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8 };
obj.description = { marginHorizontal: nativeDefault.space.PX_24, textAlign: "center" };
const obj6 = { marginHorizontal: nativeDefault.space.PX_24, textAlign: "center" };
obj.cooldownInfo = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8 };
const obj7 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8 };
obj.gemContainer = { marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx");

export default function GuildPowerupsBottomSheet(arg0) {
  ({ guildId, powerup } = arg0);
  let obj = GuildPowerupAnalytics;
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, GuildPowerupAnalytics.ModalType.DETAIL);
  obj = { startExpanded: true, children: null };
  obj = { style: closure_11().container, children: null };
  const items = [React6(GuildPowerupsBottomSheetHeader, { guildId, powerup }), React6(GuildPowerupsBottomSheetBody, { guildId, powerup }), React6(GuildPowerupsBottomSheetFooter, { guildId, powerup })];
  obj.children = items;
  obj.children = React7(View, obj);
  return React6(Sheet_BottomSheet.BottomSheet, obj);
};