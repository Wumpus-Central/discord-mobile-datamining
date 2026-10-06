// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx
import react_native from "../../../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../../../../intl/index.native.tsx";
import react_nativeAll from "../../../../../../../utils/native/ClientInfoUtils.tsx";
import shared from "../../../../../../../design/shared.tsx";
import Constants from "../../../../../../instant_invite/Constants.tsx";
import react_native2 from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import BuildOverrideStore2 from "../../../../../../build_overrides/BuildOverrideStore.tsx";
import build_overrides_BuildOverrideUtils from "../../../../../../build_overrides/native/BuildOverrideUtils.tsx";
import AssetRegistryDefault from "../../../../../../../../_runtime/11431_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../../../_runtime/11432_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../../../../_runtime/13077_AssetRegistry.js";
import validateBuildOverrideDefault from "../../../../../../build_overrides/validateBuildOverride.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const BuildOverrideStore = BuildOverrideStore2;

const Image = react_native.Image;
const State = BuildOverrideStore2.State;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx",
);

export const createBuildOverrideEmbed = function createBuildOverrideEmbed(code, theme) {
  let RCYGot;
  let baseColors;
  let colors;
  let obj4;
  let reason;
  let resolveAssetSource;
  let str2;
  let string;
  let string2Result;
  let stringResult;
  let stringResult1;
  let subtitleColor;
  let tmpResult2;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const currentBuildOverride = BuildOverrideStore.getCurrentBuildOverride();
  const buildOverride = BuildOverrideStore.getBuildOverride(code);
  if (buildOverride.state === State.Resolving) {
    const obj2 = {
      headerText: "RESOLVING",
      resolvingGradientEnd: null,
      resolvingGradientStart: null,
      type: InviteTypes.GUILD,
    };
    ({ resolvingGradientEnd: obj8.resolvingGradientEnd, resolvingGradientStart: obj8.resolvingGradientStart } = colors);
    const merged = Object.assign(baseColors);
    return obj2;
  } else {
    const override3 = buildOverride.override;
    let id;
    if (override3 != null) {
      const targetBuildOverride = override3.targetBuildOverride;
      if (targetBuildOverride != null) {
        const tmp9 = targetBuildOverride[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
        if (tmp9 != null) {
          id = tmp9.id;
        }
      }
    }
    let tmp10 = null != id;
    if (tmp10) {
      const overrides = currentBuildOverride.overrides;
      let id1;
      if (overrides != null) {
        const tmp13 = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
        if (tmp13 != null) {
          id1 = tmp13.id;
        }
      }
      tmp10 = id === id1;
    }
    const override = buildOverride.override;
    const tmpResult = validateBuildOverrideDefault;
    const obj = react_nativeAll;
    const tmpResultResult = tmpResult(override, ["discord_ios", "discord_android"], obj.getConstants().Version);
    if (currentBuildOverride.state !== State.Invalid) {
      if (buildOverride.state !== State.Invalid) {
        if (null != buildOverride.override) {
          if (null != id) {
            let obj5;
            if (tmpResultResult.valid) {
              const obj3 = {
                headerText: stringResult.toLocaleUpperCase(),
                headerColor: colors.headerColor,
                titleText: string(RCYGot),
                titleColor: colors.titleColor,
                subtitle: id,
                subtitleColor: colors.subtitleColor,
                thumbnailUrl: Image.resolveAssetSource(AssetRegistryDefault3).uri,
                acceptButtonVariant: str2,
                acceptLabelText: string2Result,
                embedCanBeTapped: true,
                canBeAccepted: true,
                type: InviteTypes.GUILD,
              };
              const merged1 = Object.assign(baseColors);
              const intl3 = intl6.intl;
              stringResult = intl3.string(intl6.t.Wj3LW4);
              const intl4 = intl6.intl;
              const override2 = buildOverride.override;
              let type;
              string = intl4.string;
              if (override2 != null) {
                const targetBuildOverride2 = override2.targetBuildOverride;
                if (targetBuildOverride2 != null) {
                  const tmp30 = targetBuildOverride2[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
                  if (tmp30 != null) {
                    type = tmp30.type;
                  }
                }
              }
              if ("branch" === type) {
                RCYGot = intl6.t.p9TwTG;
              } else {
                RCYGot = intl6.t.RCYGot;
              }
              str2 = "primary";
              if (tmp10) {
                str2 = "destructive";
              }
              const intl5 = intl6.intl;
              const string2 = intl5.string;
              const t = intl6.t;
              if (tmp10) {
                string2Result = string2(t.tX4xrt);
              } else {
                string2Result = string2(t.nOunHC);
              }
              obj5 = obj3;
            }
            return obj5;
          }
        }
      }
    }
    obj5 = {
      headerText: stringResult1.toLocaleUpperCase(),
      titleColor: obj4.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400),
      titleText: reason,
      subtitle: id,
      subtitleColor,
      thumbnailUrl: resolveAssetSource(tmpResult2).uri,
      thumbnailBackgroundColor: colors.thumbnailBackgroundColor,
      type: InviteTypes.GUILD,
    };
    const merged2 = Object.assign(baseColors);
    const intl = intl6.intl;
    stringResult1 = intl.string(intl6.t.d34xi4);
    obj4 = react_native2;
    if (tmpResultResult.valid) {
      const intl2 = intl6.intl;
      reason = intl2.string(intl6.t.ODXApH);
    } else {
      reason = tmpResultResult.reason;
    }
    subtitleColor = undefined;
    if (null != id) {
      subtitleColor = colors.subtitleColor;
    }
    resolveAssetSource = Image.resolveAssetSource;
    const tmp20Result = shared;
    if (tmp20Result.isThemeDark(theme)) {
      tmpResult2 = AssetRegistryDefault;
    } else {
      tmpResult2 = AssetRegistryDefault2;
    }
  }
};
