// discord_app/modules/user_settings/defs/native/ToastDurationSetting.tsx
import util from "../../../../intl/index.native.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import CircleMinusIcon from "../../../../design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const Accessibility = fn(1074).Accessibility;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11215);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3oxlia"]);
  },
  parent: fn(7590).MobileUserSettings.ACCESSIBILITY,
  usePredicate() {
    return DesignSystemsNotificationComponentsExperiment.useDesignSystemsNotificationComponents(
      "ToastDurationSettingNative",
    );
  },
  useProps: function useToastDurationSettingProps() {
    const items = [AccessibilityStore];
    stateFromStores = stateFromStores(onValueChange[5]).useStateFromStores(
      items,
      () => minToastDurationMs.minToastDurationMs / 1000,
    );
    onValueChange = noop.useCallback((arg0) => {
      stateFromStores(callback[6]).setMinToastDuration(1000 * arg0);
    }, []);
    const items1 = [stateFromStores, onValueChange];
    return noop.useMemo(() => {
      const intl = util.intl;
      const obj2 = {
        value: stateFromStores,
        onValueChange,
        minimumValue: Accessibility.TOAST_DURATION_MIN_SECONDS,
        maximumValue: Accessibility.TOAST_DURATION_MAX_SECONDS,
        step: 1,
        startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
        endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
        accessibilityValue: null,
        valueLabel: null,
        defaultValue: null,
      };
      const obj3 = { text: null };
      const intl2 = util.intl;
      obj3.text = intl2.formatToPlainString(util.t.geSp4K, { seconds: stateFromStores });
      obj2.accessibilityValue = obj3;
      obj2.valueLabel = intl.format(util.t.pyvjRp, { seconds: stateFromStores });
      obj2.defaultValue = Accessibility.TOAST_DURATION_DEFAULT_MS / 1000;
      return obj2;
    }, items1);
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ToastDurationSetting.tsx");

export default slider;
