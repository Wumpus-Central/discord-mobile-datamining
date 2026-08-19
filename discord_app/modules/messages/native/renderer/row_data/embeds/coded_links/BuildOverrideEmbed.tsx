// === Module 12771: createBuildOverrideEmbed ===

// Module 12771 (createBuildOverrideEmbed)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getConstantsAll from "getConstants" /* 1626 */;
import InviteSendStates from "InviteSendStates" /* 4371 */;
import processColorOrThrow from "processColorOrThrow" /* 8161 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8169 */;
import getCurrentBuildOverride from "getCurrentBuildOverride" /* 10638 */;
import setBuildOverrideForBranch from "setBuildOverrideForBranch" /* 10968 */;
import closure_5 from "getCurrentBuildOverride" /* 10638 */;

const Image = get_ActivityIndicator.Image;
const State = getCurrentBuildOverride.State;
const InviteTypes = InviteSendStates.InviteTypes;
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx");

export const createBuildOverrideEmbed = function createBuildOverrideEmbed(code, closure_2) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(closure_2));
  const currentBuildOverride = store.getCurrentBuildOverride();
  const buildOverride = store.getBuildOverride(code);
  if (buildOverride.state === State.Resolving) {
    let obj = { headerText: "RESOLVING", resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
    ({ resolvingGradientEnd: obj8[1], resolvingGradientStart: obj8[2] } = colors);
    obj[3] = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj;
  } else {
    const override2 = buildOverride.override;
    let id;
    if (override2 != null) {
      const targetBuildOverride = override2.targetBuildOverride;
      if (targetBuildOverride != null) {
        const tmp9 = targetBuildOverride[setBuildOverrideForBranch.DEVICE_FIELD];
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
        const tmp13 = overrides[setBuildOverrideForBranch.DEVICE_FIELD];
        if (tmp13 != null) {
          id1 = tmp13.id;
        }
      }
      tmp10 = id === id1;
    }
    let tmpResult = tmp(12772);
    obj = getConstantsAll;
    const tmpResultResult = tmpResult(buildOverride.override, ["discord_ios", "discord_android"], obj.getConstants().Version);
    if (currentBuildOverride.state !== tmp6.Invalid) {
      if (buildOverride.state !== tmp6.Invalid) {
        if (null != buildOverride.override) {
          if (null != id) {
            if (tmpResultResult.valid) {
              obj = {};
              const merged1 = Object.assign(baseColors);
              const intl3 = getSystemLocale.intl;
              obj.headerText = intl3.string(getSystemLocale.t.Wj3LW4).toLocaleUpperCase();
              obj.headerColor = colors.headerColor;
              const intl4 = getSystemLocale.intl;
              const override = buildOverride.override;
              let type;
              if (override != null) {
                const targetBuildOverride2 = override.targetBuildOverride;
                if (targetBuildOverride2 != null) {
                  const tmp30 = targetBuildOverride2[tmp28(undefined, 10968).DEVICE_FIELD];
                  if (tmp30 != null) {
                    type = tmp30.type;
                  }
                }
              }
              if ("branch" === type) {
                let RCYGot = tmp28(1236).t.p9TwTG;
              } else {
                RCYGot = tmp28(1236).t.RCYGot;
              }
              obj.titleText = intl4.string(RCYGot);
              obj.titleColor = colors.titleColor;
              obj.subtitle = id;
              obj.subtitleColor = colors.subtitleColor;
              obj.thumbnailUrl = Image.resolveAssetSource(tmp(12770)).uri;
              let str2 = "primary";
              if (tmp10) {
                str2 = "destructive";
              }
              obj.acceptButtonVariant = str2;
              const intl5 = tmp28(1236).intl;
              const string = intl5.string;
              let tX4xrt = tmp28(1236).t;
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
              const stringResult = intl3.string(getSystemLocale.t.Wj3LW4);
            }
          }
        }
      }
    }
    obj1 = {};
    const merged2 = Object.assign(baseColors);
    const intl = getSystemLocale.intl;
    obj1.headerText = intl.string(getSystemLocale.t.d34xi4).toLocaleUpperCase();
    const stringResult2 = intl.string(getSystemLocale.t.d34xi4);
    obj1.titleColor = processColorOrThrow.processColorOrThrow(tmp(712).unsafe_rawColors.RED_400);
    if (tmpResultResult.valid) {
      const intl2 = tmp20(1236).intl;
      let reason = intl2.string(tmp20(1236).t.ODXApH);
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
    const obj4 = processColorOrThrow;
    if (tmp20Result.isThemeDark(closure_2)) {
      tmpResult = tmp(10987);
    } else {
      tmpResult = tmp(10988);
    }
    obj1.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
    obj1.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
    obj1.type = InviteTypes.GUILD;
    return obj1;
  }
  const tmp3 = getEmbedThemeColorsDefault(closure_2);
};