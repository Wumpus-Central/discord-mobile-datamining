// discord_app/modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import SettingsScreenNotices from "../../privacy_and_safety/native/SettingsScreenNotices.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const SettingsScreenNoticesDefault = SettingsScreenNotices;

require = fn;
function getContentCategory() {
  const obj = { label: null, settings: null, subLabel: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.GYpoAq);
  const items = [, ,];
  ({
    EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0],
    EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1],
    EXPLICIT_MEDIA_FILTERS_GUILDS: arr[2],
  } = MobileUserSettings);
  obj.settings = items;
  const intl2 = util.intl;
  obj.subLabel = intl2.string(util.t.Wnojv1);
  const items1 = [obj];
  const obj2 = { label: null, settings: null, subLabel: null };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t["16/3Bi"]);
  const items2 = [, ,];
  ({
    GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0],
    GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1],
    GORE_MEDIA_FILTERS_GUILDS: arr3[2],
  } = MobileUserSettings);
  obj2.settings = items2;
  const intl4 = util.intl;
  obj2.subLabel = intl4.string(util.t.XgH9eh);
  items1[1] = obj2;
  return items1;
}
const MobileUserSettings = fn(7634).MobileUserSettings;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const ListHeaderComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isListHeader: true, screen: SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS };
        const tmp8 = jsx(SettingsScreenNoticesDefault, {
          isListHeader: true,
          screen: SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS,
        });
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const obj = { isListHeader: true, screen: SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS };
      return jsx(SettingsScreenNoticesDefault, {
        isListHeader: true,
        screen: SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS,
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { sections: null, ListHeaderComponent: null };
        const items = [];
        HermesBuiltin.arraySpread(getContentCategory(), 0);
        obj2.sections = items;
        obj2.ListHeaderComponent = ListHeaderComponent;
        const list = SettingBuilders.createList(obj2);
        cResult[0] = list;
        let first = list;
        const tmpResult = SettingBuilders;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { node: first };
        const tmp13 = jsx(SettingLayoutDefault, { node: first });
        cResult[1] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[1];
      }
      return tmp10;
    }
  : () => {
      const node = noop.useMemo(() => {
        const obj2 = { sections: null, ListHeaderComponent };
        const items = [...closure_1_6()];
        obj2.sections = items;
        return SettingBuilders.createList(obj2);
      }, []);
      return jsx(SettingLayoutDefault, { node });
    };
