// discord_app/modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function useSponsoredContentSettings() {
  const obj = { settings: null, subLabel: null };
  const items = [MobileUserSettings.USE_DATA_FOR_QUESTS_SPONSORED_CONTENT];
  obj.settings = items;
  const intl = util.intl;
  const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  obj.subLabel = intl.format(util.t.cf9mvV, obj2);
  const items1 = [obj, ,];
  const obj4 = { settings: null, subLabel: null };
  const items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT];
  obj4.settings = items2;
  const intl2 = util.intl;
  const obj5 = { helpdeskArticle: null };
  obj5.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj4.subLabel = intl2.format(util.t["2QFDU/"], obj5);
  items1[1] = obj4;
  const obj7 = { settings: null };
  const items3 = [MobileUserSettings.MANAGE_SPONSORED_CONTENT];
  obj7.settings = items3;
  items1[2] = obj7;
  return items1;
}
const MobileUserSettings = fn(7974).MobileUserSettings;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SponsoredContentPreferencesScreen() {
      const cResult = c.c(4);
      const tmp4 = useSponsoredContentSettings();
      if (cResult[0] !== tmp4) {
        const obj2 = { sections: tmp4 };
        const list = SettingBuilders.createList(obj2);
        cResult[0] = tmp4;
        cResult[1] = list;
        let tmp5 = list;
        const tmpResult = SettingBuilders;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        const obj3 = { node: tmp5 };
        const tmp10 = jsx(SettingLayoutDefault, { node: tmp5 });
        cResult[2] = tmp5;
        cResult[3] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : function SponsoredContentPreferencesScreen() {
      const tmp = useSponsoredContentSettings();
      const sections = tmp;
      const items = [tmp];
      const node = noop.useMemo(() => SettingBuilders.createList({ sections }), items);
      return jsx(SettingLayoutDefault, { node });
    };
