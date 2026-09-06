// discord_app/modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2428 from "../GuildPowerups.messages.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import GameServerConstants from "../../../game_server/GameServerConstants.tsx";
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import GuildSettingsServerTagUtils from "../../../guild_settings/GuildSettingsServerTagUtils.tsx";
import useGuildPowerupRollbackEnabledDefault from "../hooks/useGuildPowerupRollbackEnabled.tsx";
import usePowerupActiveStatusDefault from "../hooks/usePowerupActiveStatus.tsx";
import useHasAllocateBoostPermissionDefault from "../hooks/useHasAllocateBoostPermission.tsx";
import useCalculatePowerupCardStatus from "../utils/useCalculatePowerupCardStatus.tsx";
import useGetGuildPowerupBannerImageDefault from "../hooks/useGetGuildPowerupBannerImage.tsx";
import GuildPowerupsBoostGemDefault from "GuildPowerupsBoostGem.tsx";
import GuildPowerupsImageDefault from "GuildPowerupsImage.tsx";
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter.tsx";
import useGuildPowerupLevelPerksDefault from "../hooks/useGuildPowerupLevelPerks.tsx";
import GuildBoostingMarketingUtils from "../../../guild_boosting/native/GuildBoostingMarketingUtils.tsx";
import useGuildPowerupCardFooterConfigDefault from "../hooks/useGuildPowerupCardFooterConfig.tsx";
import useCanGuildPowerupBeToggledDefault from "../hooks/useCanGuildPowerupBeToggled.tsx";
import useGuildPowerupOnActivateDefault from "hooks/useGuildPowerupOnActivate.tsx";
import useGuildPowerupOnShowDeactivateDefault from "hooks/useGuildPowerupOnShowDeactivate.tsx";
import GuildPowerupAnalytics from "../analytics/GuildPowerupAnalytics.tsx";
import GuildPowerupsDisabledWarningDefault from "GuildPowerupsDisabledWarning.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function GuildPowerupsBottomSheetHeader(arg0) {
  ({ guildId, powerup } = arg0);
  const tmp = closure_11();
  const tmp4 = usePowerupActiveStatusDefault(guildId, powerup);
  let obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(
    powerup,
    tmp4,
    useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet"),
  );
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
    let tmp15 = React6(GuildPowerupsBoostGemDefault, obj);
    let tmp14 = React6;
  } else if (tmp10 === closure_7) {
    obj = { style: tmp.image, children: null };
    const obj1 = { stateMachine: "SM_Auto", dataBinding: null };
    const obj2 = { reducedMotion: stateFromStores };
    obj1.dataBinding = obj2;
    obj.children = React6(native.GameServerHostingRive, obj1);
    tmp15 = React6(View, obj);
    tmp14 = React6;
  } else {
    const obj3 = { imageUrl: str, style: tmp.image, isAnimated: true };
    tmp14 = React6;
    tmp15 = React6(GuildPowerupsImageDefault, obj3);
  }
  const obj4 = { children: null };
  const items1 = [tmp15];
  const obj5 = { style: tmp.headerContainer, children: null };
  const items2 = [
    tmp14(Text_Text.Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: powerup.title }),
    tmp14(GuildPowerupsCardFooter.GuildPowerupsCardFooter, {
      cost: powerup.cost,
      costDecorator: str2,
      status: calculatePowerupCardStatus,
      style: tmp.statusContainer,
    }),
  ];
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
    }),
  });
}
function GuildPowerupsBottomSheetBody(powerup) {
  powerup = powerup.powerup;
  const tmp = closure_11();
  const type = powerup.type;
  if (constants.PERK === type) {
    let obj = { style: tmp.description, variant: "text-md/medium", children: powerup.description };
    const items = [React6(Text_Text.Text, obj)];
    let tmp5Result = null != powerup.deactivationCooldownPeriodDays;
    if (tmp5Result) {
      tmp5Result = powerup.deactivationCooldownPeriodDays > 0;
    }
    if (tmp5Result) {
      obj = { style: tmp.cooldownInfo, children: null };
      const obj1 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const items1 = [React6(CircleInformationIcon.CircleInformationIcon, obj1)];
      const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = util.intl;
      const obj3 = { cooldownDays: powerup.deactivationCooldownPeriodDays };
      obj2.children = intl.formatToPlainString(_modDef2428.GMhQcE, obj3);
      items1[1] = React6(Text_Text.Text, obj2);
      obj.children = items1;
      tmp5Result = React7(View, obj);
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
  ({ showToggleButton, showConfigureButton, isPowerupActive } = useGuildPowerupCardFooterConfigDefault(
    guildId,
    powerup,
  ));
  if (showConfigureButton) {
    let result = powerup.skuId !== Powerups.GUILD_POWERUP_TAG_SKU_ID;
    if (!result) {
      result = GuildSettingsServerTagUtils.canUseMobileServerTagSettings(guildId);
      const tmp6Result = GuildSettingsServerTagUtils;
    }
    showConfigureButton = result;
  }
  const tmp5 = useGuildPowerupCardFooterConfigDefault(guildId, powerup);
  ({ disabled, reason } = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive));
  const tmp8 = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive);
  ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
  closure_2 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
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
      obj.children = intl.string(_modDef2428["jo5++h"]);
      tmp14 = React6(Text_Text.Text, obj);
    }
    const items = [tmp14, , ,];
    let tmp21 = disabled;
    if (disabled) {
      tmp21 = null != reason;
    }
    if (tmp21) {
      const obj1 = { text: reason };
      tmp21 = React6(GuildPowerupsDisabledWarningDefault, obj1);
    }
    items[1] = tmp21;
    if (showConfigureButton) {
      const obj2 = { variant: "primary", text: null, onPress: null };
      const intl2 = util.intl;
      obj2.text = intl2.string(_modDef2428.g5Ds69);
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
      return React7(View, obj);
    } else {
      let str = "primary";
      if (isPowerupActive) {
        str = "secondary";
      }
      const obj3 = { variant: str, text: null, loading: null, disabled: null, onPress: null };
      const intl3 = util.intl;
      const string = intl3.string;
      let TZsu1U = _modDef2428;
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
  } else {
    return null;
  }
  const tmp9 = useGuildPowerupOnActivateDefault(guildId, powerup);
}
const View = _mod17.View;
({ GuildPowerupType: hasOwnProperty, GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP: metroRequire } = GuildPowerupsConstants);
let closure_7 = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let obj = {
  container: null,
  headerContainer: null,
  statusContainer: null,
  levelContainer: null,
  perkContainer: null,
  perkIcon: null,
  perkText: null,
  footerContainer: null,
  image: null,
  description: null,
  cooldownInfo: null,
  gemContainer: null,
};
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
obj.cooldownInfo = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_8,
};
const obj7 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_8,
};
obj.gemContainer = { marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx");

export default function GuildPowerupsBottomSheet(arg0) {
  ({ guildId, powerup } = arg0);
  let obj = GuildPowerupAnalytics;
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, GuildPowerupAnalytics.ModalType.DETAIL);
  obj = { startExpanded: true, children: null };
  obj = { style: closure_11().container, children: null };
  const items = [
    React6(GuildPowerupsBottomSheetHeader, { guildId, powerup }),
    React6(GuildPowerupsBottomSheetBody, { guildId, powerup }),
    React6(GuildPowerupsBottomSheetFooter, { guildId, powerup }),
  ];
  obj.children = items;
  obj.children = React7(View, obj);
  return React6(Sheet_BottomSheet.BottomSheet, obj);
}
