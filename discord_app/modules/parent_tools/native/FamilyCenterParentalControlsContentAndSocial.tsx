// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import SettingBuilders from "../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const MobileUserSettings = fn(8194).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx",
);

export default function FamilyCenterParentalControlsContentAndSocial() {
  const obj2 = { sections: null };
  const obj3 = { settings: null, subLabel: null };
  const items = [MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
  obj3.settings = items;
  const intl = util.intl;
  const obj4 = { learnMoreLink: null };
  const obj = SettingBuilders;
  obj4.learnMoreLink = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION);
  obj3.subLabel = intl.format(util.t.dliU4j, obj4);
  const items1 = [obj3, ,];
  const obj6 = { label: null, settings: null };
  const intl2 = util.intl;
  obj6.label = intl2.string(util.t.MeYuqs);
  const items2 = [,];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileUserSettings);
  obj6.settings = items2;
  items1[1] = obj6;
  const obj7 = { label: null, settings: null };
  const intl3 = util.intl;
  obj7.label = intl3.string(util.t.XlGG9c);
  const items3 = [, ,];
  ({
    PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0],
    PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1],
    PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2],
  } = MobileUserSettings);
  obj7.settings = items3;
  items1[2] = obj7;
  obj2.sections = items1;
  const obj8 = { children: null };
  const list = obj.createList(obj2);
  obj8.children = jsx(SettingLayoutDefault, { node: list });
  return <View>{null}</View>;
}
