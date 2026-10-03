// discord_app/modules/user_settings/defs/native/TimestampHourCycleSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { label: null, value: null };
        const intl = util.intl;
        obj2.label = intl.string(util.t.FMWYvb);
        obj2.value = preloaded_user_settings.TimestampHourCycle.AUTO;
        const items = [obj2, ,];
        const obj3 = { label: null, value: null };
        const intl2 = util.intl;
        obj3.label = intl2.string(util.t.p8NOwi);
        obj3.value = preloaded_user_settings.TimestampHourCycle.H12;
        items[1] = obj3;
        const obj4 = { label: null, value: null };
        const intl3 = util.intl;
        obj4.label = intl3.string(util.t["+o/sOo"]);
        obj4.value = preloaded_user_settings.TimestampHourCycle.H23;
        items[2] = obj4;
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      noop.useMemo(() => {
        const obj = { label: null, value: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.FMWYvb);
        obj.value = preloaded_user_settings.TimestampHourCycle.AUTO;
        const items = [obj, ,];
        const obj2 = { label: null, value: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.p8NOwi);
        obj2.value = preloaded_user_settings.TimestampHourCycle.H12;
        items[1] = obj2;
        const obj3 = { label: null, value: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(util.t["+o/sOo"]);
        obj3.value = preloaded_user_settings.TimestampHourCycle.H23;
        items[2] = obj3;
        return items;
      }, []);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dyamEI);
  },
  parent: fn(7634).MobileUserSettings.APPEARANCE,
  useValue: fn(2028).TimestampHourCycle.useSetting,
  onValueChange: function onTimestampHourCycleChange(arg0) {
    const TimestampHourCycle = UserSettings.TimestampHourCycle;
    TimestampHourCycle.updateSetting(Number(arg0));
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { label: null, value: null };
          const intl = util.intl;
          obj2.label = intl.string(util.t.FMWYvb);
          obj2.value = preloaded_user_settings.TimestampHourCycle.AUTO;
          const items = [obj2, ,];
          const obj3 = { label: null, value: null };
          const intl2 = util.intl;
          obj3.label = intl2.string(util.t.p8NOwi);
          obj3.value = preloaded_user_settings.TimestampHourCycle.H12;
          items[1] = obj3;
          const obj4 = { label: null, value: null };
          const intl3 = util.intl;
          obj4.label = intl3.string(util.t["+o/sOo"]);
          obj4.value = preloaded_user_settings.TimestampHourCycle.H23;
          items[2] = obj4;
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () =>
        noop.useMemo(() => {
          const obj = { label: null, value: null };
          const intl = util.intl;
          obj.label = intl.string(util.t.FMWYvb);
          obj.value = preloaded_user_settings.TimestampHourCycle.AUTO;
          const items = [obj, ,];
          const obj2 = { label: null, value: null };
          const intl2 = util.intl;
          obj2.label = intl2.string(util.t.p8NOwi);
          obj2.value = preloaded_user_settings.TimestampHourCycle.H12;
          items[1] = obj2;
          const obj3 = { label: null, value: null };
          const intl3 = util.intl;
          obj3.label = intl3.string(util.t["+o/sOo"]);
          obj3.value = preloaded_user_settings.TimestampHourCycle.H23;
          items[2] = obj3;
          return items;
        }, []),
  usePredicate: fn(4555).supportsSystemDateFormatter,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default radio;
