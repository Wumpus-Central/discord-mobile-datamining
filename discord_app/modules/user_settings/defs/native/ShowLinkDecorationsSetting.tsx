import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
function useShowLinkDecorationsSettingValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return require(589) /* initialize */.useStateFromStores(items, () => obj.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = require(13584) /* setFontSize */.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.OLZFB8);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default createToggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };