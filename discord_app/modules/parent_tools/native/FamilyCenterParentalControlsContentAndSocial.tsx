// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import SettingBuilders from "../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const MobileUserSettings = fn(7975).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx",
);

export default function FamilyCenterParentalControlsContentAndSocial() {
  let obj = { sections: null };
  obj = { settings: null, subLabel: null };
  const items = [MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
  obj.settings = items;
  const intl = util.intl;
  const obj1 = { learnMoreLink: null };
  let obj4 = HelpdeskUtilsDefault;
  obj1.learnMoreLink = obj4.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION);
  obj.subLabel = intl.format(util.t.dliU4j, obj1);
  const items1 = [obj, ,];
  const obj2 = { label: null, settings: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.MeYuqs);
  const items2 = [,];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileUserSettings);
  obj2.settings = items2;
  items1[1] = obj2;
  const obj3 = { label: null, settings: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.XlGG9c);
  const items3 = [, ,];
  ({
    PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0],
    PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1],
    PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2],
  } = MobileUserSettings);
  obj3.settings = items3;
  items1[2] = obj3;
  obj.sections = items1;
  obj4 = { children: null };
  const list = obj.createList(obj);
  obj4.children = jsx(SettingLayoutDefault, { node: list });
  return <View>{null}</View>;
}
