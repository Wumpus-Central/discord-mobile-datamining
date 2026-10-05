// discord_app/modules/user_settings/defs/native/TimestampHourCycleSetting.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import SystemDateFormatter from "../../../system_date_format/SystemDateFormatter.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl2;
      let intl3;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { label: intl.string(intl4.t.FMWYvb), value: preloaded_user_settings.TimestampHourCycle.AUTO };
        intl = intl4.intl;
        const items = [obj2, ,];
        const obj3 = { label: intl2.string(intl4.t.p8NOwi), value: preloaded_user_settings.TimestampHourCycle.H12 };
        intl2 = intl4.intl;
        items[1] = obj3;
        const obj4 = { label: intl3.string(intl4.t["+o/sOo"]), value: preloaded_user_settings.TimestampHourCycle.H23 };
        intl3 = intl4.intl;
        items[2] = obj4;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      react.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        const obj = { label: intl.string(intl4.t.FMWYvb), value: preloaded_user_settings.TimestampHourCycle.AUTO };
        intl = intl4.intl;
        const items = [obj, ,];
        const obj2 = { label: intl2.string(intl4.t.p8NOwi), value: preloaded_user_settings.TimestampHourCycle.H12 };
        intl2 = intl4.intl;
        items[1] = obj2;
        const obj3 = { label: intl3.string(intl4.t["+o/sOo"]), value: preloaded_user_settings.TimestampHourCycle.H23 };
        intl3 = intl4.intl;
        items[2] = obj3;
        return items;
      }, []);
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.dyamEI);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: UserSettings.TimestampHourCycle.useSetting,
  onValueChange: function onTimestampHourCycleChange(arg0) {
    const TimestampHourCycle = UserSettings.TimestampHourCycle;
    TimestampHourCycle.updateSetting(Number(arg0));
  },
  useOptions: tmp2,
  usePredicate: SystemDateFormatter.supportsSystemDateFormatter,
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default radio;
