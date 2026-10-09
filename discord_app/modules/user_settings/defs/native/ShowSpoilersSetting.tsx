// discord_app/modules/user_settings/defs/native/ShowSpoilersSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const SpoilerRenderSetting = fn(1085).SpoilerRenderSetting;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowSpoilersOptions() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { label: null, value: null };
        const intl = util.intl;
        obj2.label = intl.string(util.t["KFH/me"]);
        obj2.value = SpoilerRenderSetting.ON_CLICK;
        const items = [obj2, ,];
        const obj3 = { label: null, value: null };
        const intl2 = util.intl;
        obj3.label = intl2.string(util.t.Pe1RbL);
        obj3.value = SpoilerRenderSetting.ALWAYS;
        items[1] = obj3;
        const obj4 = { label: null, value: null };
        const intl3 = util.intl;
        obj4.label = intl3.string(util.t.K5VTBE);
        obj4.value = SpoilerRenderSetting.IF_MODERATOR;
        items[2] = obj4;
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function useShowSpoilersOptions() {
      return noop.useMemo(() => {
        const obj = { label: null, value: null };
        const intl = util.intl;
        obj.label = intl.string(util.t["KFH/me"]);
        obj.value = constants.ON_CLICK;
        const items = [obj, ,];
        const obj2 = { label: null, value: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.Pe1RbL);
        obj2.value = constants.ALWAYS;
        items[1] = obj2;
        const obj3 = { label: null, value: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(util.t.K5VTBE);
        obj3.value = constants.IF_MODERATOR;
        items[2] = obj3;
        return items;
      }, []);
    };
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.QgwmVz);
  },
  parent: fn(7974).MobileUserSettings.CHAT,
  useValue: fn(2041).RenderSpoilers.useSetting,
  onValueChange: function onShowSpoilersChange(arg0) {
    const RenderSpoilers = UserSettings.RenderSpoilers;
    RenderSpoilers.updateSetting(arg0);
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled()
    ? function useShowSpoilersOptions() {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { label: null, value: null };
          const intl = util.intl;
          obj2.label = intl.string(util.t["KFH/me"]);
          obj2.value = SpoilerRenderSetting.ON_CLICK;
          const items = [obj2, ,];
          const obj3 = { label: null, value: null };
          const intl2 = util.intl;
          obj3.label = intl2.string(util.t.Pe1RbL);
          obj3.value = SpoilerRenderSetting.ALWAYS;
          items[1] = obj3;
          const obj4 = { label: null, value: null };
          const intl3 = util.intl;
          obj4.label = intl3.string(util.t.K5VTBE);
          obj4.value = SpoilerRenderSetting.IF_MODERATOR;
          items[2] = obj4;
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : function useShowSpoilersOptions() {
        return noop.useMemo(() => {
          const obj = { label: null, value: null };
          const intl = util.intl;
          obj.label = intl.string(util.t["KFH/me"]);
          obj.value = constants.ON_CLICK;
          const items = [obj, ,];
          const obj2 = { label: null, value: null };
          const intl2 = util.intl;
          obj2.label = intl2.string(util.t.Pe1RbL);
          obj2.value = constants.ALWAYS;
          items[1] = obj2;
          const obj3 = { label: null, value: null };
          const intl3 = util.intl;
          obj3.label = intl3.string(util.t.K5VTBE);
          obj3.value = constants.IF_MODERATOR;
          items[2] = obj3;
          return items;
        }, []);
      },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowSpoilersSetting.tsx");

export default radio;
