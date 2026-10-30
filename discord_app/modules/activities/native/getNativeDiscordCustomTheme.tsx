// discord_app/modules/activities/native/getNativeDiscordCustomTheme.tsx
import ClientThemesTypes from "../../client_themes/ClientThemesTypes.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import shared from "../../../design/shared.tsx";
import client_themes_ClientThemesUtils from "../../client_themes/native/ClientThemesUtils.tsx";
import MobileThemesUtils from "../../client_themes/native/MobileThemesUtils.tsx";
import ClientThemesBackgroundStore from "../../client_themes/ClientThemesBackgroundStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/getNativeDiscordCustomTheme.tsx");

export default function getNativeDiscordCustomTheme() {
  let gradientPreset = MobileThemesUtils.getCustomBackgroundGradient();
  if (gradientPreset == null) {
    gradientPreset = ClientThemesBackgroundStore.gradientPreset;
  }
  if (null == gradientPreset) {
    return null;
  } else {
    const tmp16 = gradientPreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT;
    const gradientHexColors = client_themes_ClientThemesUtils.getGradientHexColors(gradientPreset);
    if (tmp16) {
      let gradientColorStops = gradientPreset.customThemeSettings.gradientColorStops;
    } else {
      const colors = gradientPreset.colors;
      gradientColorStops = colors.map((stop) => stop.stop);
    }
    const mapped = gradientHexColors.map((item, index) => {
      let combined = item;
      if (gradientColorStops.length === gradientHexColors.length) {
        const _HermesInternal = HermesInternal;
        combined = "" + item + " " + tmp[index] + "%";
      }
      return combined;
    });
    if (1 === mapped.length) {
      mapped.push(mapped[0]);
    }
    const tmpResult = client_themes_ClientThemesUtils;
    const gradientAngle = client_themes_ClientThemesUtils.getGradientAngle(gradientPreset);
    let _HermesInternal = HermesInternal;
    let combined = "linear-gradient(" + gradientAngle + "deg, " + mapped.join(", ") + ")";
    const tmpResult5 = client_themes_ClientThemesUtils;
    const tmpResult6 = shared;
    const isThemeDarkResult = shared.isThemeDark(gradientPreset.theme);
    const OverlayColors = client_themes_ClientThemesUtils.OverlayColors;
    const tmpResult7 = ColorUtils;
    ({ r, g, b } = ColorUtils.hexToRgb(isThemeDarkResult ? OverlayColors.DARK : OverlayColors.LIGHT));
    const hexToRgbResult = ColorUtils.hexToRgb(isThemeDarkResult ? OverlayColors.DARK : OverlayColors.LIGHT);
    const _HermesInternal2 = HermesInternal;
    const combined1 =
      "rgb(" +
      r +
      " " +
      g +
      " " +
      b +
      " / " +
      1 -
      client_themes_ClientThemesUtils.getGradientShare(gradientPreset, gradientPreset.theme) +
      ")";
    const obj2 = {
      classNames: tmp16 ? ["custom-theme-background", "custom-client-theme"] : ["custom-theme-background"],
      variables: null,
    };
    const obj3 = {
      "--custom-theme-background": combined,
      "--custom-theme-primary-color": gradientHexColors[0],
      "--custom-theme-secondary-color": gradientHexColors[gradientHexColors.length - 1],
      "--background-gradient-chat": null,
    };
    const _HermesInternal3 = HermesInternal;
    obj3["--background-gradient-chat"] =
      "linear-gradient(" + combined1 + ", " + combined1 + ") fixed 0 0 / cover, " + combined + " fixed 0 0 / cover";
    obj2.variables = obj3;
    return obj2;
  }
}
