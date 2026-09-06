// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx
import _mod17 from "../../../../../../../../_runtime/metro/00017__.js";
import util from "../../../../../../../intl/index.native.tsx";
import ClientInfoUtilsAll from "../../../../../../../utils/native/ClientInfoUtils.tsx";
import Constants from "../../../../../../instant_invite/Constants.tsx";
import RowGeneratorStyleSheet from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import BuildOverrideStore2 from "../../../../../../build_overrides/BuildOverrideStore.tsx";
import build_overrides_BuildOverrideUtils from "../../../../../../build_overrides/native/BuildOverrideUtils.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const BuildOverrideStore = BuildOverrideStore2;

const Image = _mod17.Image;
const State = BuildOverrideStore2.State;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx",
);

export const createBuildOverrideEmbed = function createBuildOverrideEmbed(code, arg1) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(arg1));
  const currentBuildOverride = BuildOverrideStore.getCurrentBuildOverride();
  const buildOverride = BuildOverrideStore.getBuildOverride(code);
  if (buildOverride.state === State.Resolving) {
    let obj = { headerText: "RESOLVING", resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
    ({ resolvingGradientEnd: obj8.resolvingGradientEnd, resolvingGradientStart: obj8.resolvingGradientStart } = colors);
    obj.type = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj;
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
    let tmpResult = tmp(13221);
    obj = ClientInfoUtilsAll;
    const tmpResultResult = tmpResult(
      buildOverride.override,
      ["discord_ios", "discord_android"],
      obj.getConstants().Version,
    );
    if (currentBuildOverride.state !== tmp6.Invalid) {
      if (buildOverride.state !== tmp6.Invalid) {
        if (null != buildOverride.override) {
          if (null != id) {
            if (tmpResultResult.valid) {
              obj = {};
              const merged1 = Object.assign(baseColors);
              const intl3 = util.intl;
              obj.headerText = intl3.string(util.t.Wj3LW4).toLocaleUpperCase();
              obj.headerColor = colors.headerColor;
              const intl4 = util.intl;
              const override = buildOverride.override;
              let type;
              if (override != null) {
                const targetBuildOverride2 = override.targetBuildOverride;
                if (targetBuildOverride2 != null) {
                  const tmp30 = targetBuildOverride2[tmp28(undefined, 11789).DEVICE_FIELD];
                  if (tmp30 != null) {
                    type = tmp30.type;
                  }
                }
              }
              if ("branch" === type) {
                let RCYGot = tmp28(1114).t.p9TwTG;
              } else {
                RCYGot = tmp28(1114).t.RCYGot;
              }
              obj.titleText = intl4.string(RCYGot);
              obj.titleColor = colors.titleColor;
              obj.subtitle = id;
              obj.subtitleColor = colors.subtitleColor;
              obj.thumbnailUrl = Image.resolveAssetSource(tmp(13219)).uri;
              let str2 = "primary";
              if (tmp10) {
                str2 = "destructive";
              }
              obj.acceptButtonVariant = str2;
              const intl5 = tmp28(1114).intl;
              const string = intl5.string;
              let tX4xrt = tmp28(1114).t;
              if (tmp10) {
                tX4xrt = tX4xrt.tX4xrt;
                let stringResult1 = string(tX4xrt);
              } else {
                stringResult1 = string(tX4xrt.nOunHC);
              }
              obj.acceptLabelText = stringResult1;
              obj.embedCanBeTapped = true;
              obj.canBeAccepted = true;
              obj.type = InviteTypes.GUILD;
              const stringResult = intl3.string(util.t.Wj3LW4);
            }
          }
        }
      }
    }
    const obj1 = {};
    const merged2 = Object.assign(baseColors);
    const intl = util.intl;
    obj1.headerText = intl.string(util.t.d34xi4).toLocaleUpperCase();
    const stringResult2 = intl.string(util.t.d34xi4);
    obj1.titleColor = RowGeneratorStyleSheet.processColorOrThrow(tmp(576).unsafe_rawColors.RED_400);
    if (tmpResultResult.valid) {
      const intl2 = tmp20(1114).intl;
      let reason = intl2.string(tmp20(1114).t.ODXApH);
    } else {
      reason = tmpResultResult.reason;
    }
    obj1.titleText = reason;
    obj1.subtitle = id;
    let subtitleColor;
    if (null != id) {
      subtitleColor = colors.subtitleColor;
    }
    obj1.subtitleColor = subtitleColor;
    if (tmp20Result.isThemeDark(arg1)) {
      tmpResult = tmp(11808);
    } else {
      tmpResult = tmp(11809);
    }
    obj1.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
    obj1.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
    obj1.type = InviteTypes.GUILD;
    return obj1;
  }
  const tmp3 = getEmbedThemeColorsDefault(arg1);
};
