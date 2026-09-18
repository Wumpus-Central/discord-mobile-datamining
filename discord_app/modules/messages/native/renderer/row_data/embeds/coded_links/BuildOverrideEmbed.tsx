// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx
import _mod17 from "../../../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import ClientInfoUtilsAll from "../../../../../../../utils/native/ClientInfoUtils.tsx";
import Constants from "../../../../../../instant_invite/Constants.tsx";
import RowGeneratorStyleSheet from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import BuildOverrideStore2 from "../../../../../../build_overrides/BuildOverrideStore.tsx";
import build_overrides_BuildOverrideUtils from "../../../../../../build_overrides/native/BuildOverrideUtils.tsx";
import _modDef12051 from "../../../../../../../../_runtime/metro/12051__.js";
import _modDef12052 from "../../../../../../../../_runtime/metro/12052__.js";
import _modDef13465 from "../../../../../../../../_runtime/metro/13465__.js";
import validateBuildOverrideDefault from "../../../../../../build_overrides/validateBuildOverride.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const BuildOverrideStore = BuildOverrideStore2;

const Image = _mod17.Image;
const State = BuildOverrideStore2.State;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx",
);

export const createBuildOverrideEmbed = function createBuildOverrideEmbed(code, theme) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const currentBuildOverride = BuildOverrideStore.getCurrentBuildOverride();
  const buildOverride = BuildOverrideStore.getBuildOverride(code);
  if (buildOverride.state === State.Resolving) {
    const obj2 = { headerText: "RESOLVING", resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
    ({ resolvingGradientEnd: obj8.resolvingGradientEnd, resolvingGradientStart: obj8.resolvingGradientStart } = colors);
    obj2.type = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj2;
  } else {
    const override2 = buildOverride.override;
    let id;
    if (override2 != null) {
      const targetBuildOverride = override2.targetBuildOverride;
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
    const tmpResult = validateBuildOverrideDefault;
    const tmpResultResult = tmpResult(
      buildOverride.override,
      ["discord_ios", "discord_android"],
      ClientInfoUtilsAll.getConstants().Version,
    );
    if (currentBuildOverride.state !== State.Invalid) {
      if (buildOverride.state !== State.Invalid) {
        if (null != buildOverride.override) {
          if (null != id) {
            if (tmpResultResult.valid) {
              const obj3 = {};
              const merged1 = Object.assign(baseColors);
              const intl3 = util.intl;
              obj3.headerText = intl3.string(util.t.Wj3LW4).toLocaleUpperCase();
              obj3.headerColor = colors.headerColor;
              const intl4 = util.intl;
              const override = buildOverride.override;
              let type;
              if (override != null) {
                const targetBuildOverride2 = override.targetBuildOverride;
                if (targetBuildOverride2 != null) {
                  const tmp30 = targetBuildOverride2[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
                  if (tmp30 != null) {
                    type = tmp30.type;
                  }
                }
              }
              if ("branch" === type) {
                let RCYGot = util.t.p9TwTG;
              } else {
                RCYGot = util.t.RCYGot;
              }
              obj3.titleText = intl4.string(RCYGot);
              obj3.titleColor = colors.titleColor;
              obj3.subtitle = id;
              obj3.subtitleColor = colors.subtitleColor;
              obj3.thumbnailUrl = Image.resolveAssetSource(_modDef13465).uri;
              let str2 = "primary";
              if (tmp10) {
                str2 = "destructive";
              }
              obj3.acceptButtonVariant = str2;
              const intl5 = util.intl;
              const string = intl5.string;
              let tX4xrt = util.t;
              if (tmp10) {
                tX4xrt = tX4xrt.tX4xrt;
                let stringResult1 = string(tX4xrt);
              } else {
                stringResult1 = string(tX4xrt.nOunHC);
              }
              obj3.acceptLabelText = stringResult1;
              obj3.embedCanBeTapped = true;
              obj3.canBeAccepted = true;
              obj3.type = InviteTypes.GUILD;
              const stringResult = intl3.string(util.t.Wj3LW4);
            }
          }
        }
      }
    }
    const obj5 = {};
    const merged2 = Object.assign(baseColors);
    const intl = util.intl;
    obj5.headerText = intl.string(util.t.d34xi4).toLocaleUpperCase();
    const stringResult2 = intl.string(util.t.d34xi4);
    obj5.titleColor = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
    if (tmpResultResult.valid) {
      const intl2 = util.intl;
      let reason = intl2.string(util.t.ODXApH);
    } else {
      reason = tmpResultResult.reason;
    }
    obj5.titleText = reason;
    obj5.subtitle = id;
    let subtitleColor;
    if (null != id) {
      subtitleColor = colors.subtitleColor;
    }
    obj5.subtitleColor = subtitleColor;
    if (tmp20Result.isThemeDark(theme)) {
      let tmpResult2 = _modDef12051;
    } else {
      tmpResult2 = _modDef12052;
    }
    obj5.thumbnailUrl = Image.resolveAssetSource(tmpResult2).uri;
    obj5.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
    obj5.type = InviteTypes.GUILD;
    return obj5;
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
};
