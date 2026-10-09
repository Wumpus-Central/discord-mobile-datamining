// === Module 15127: FamilyCenterParentalControlsContentAndSocial ===

// Module 15127 (FamilyCenterParentalControlsContentAndSocial)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import SettingLayoutDefault from "SettingLayout" /* 14883 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const MobileUserSettings = fn(7974).MobileUserSettings;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterParentalControlsContentAndSocial() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: null };
    const obj3 = { settings: null, subLabel: null };
    const items = [MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
    obj3.settings = items;
    const intl = util.intl;
    const obj4 = { learnMoreLink: null };
    const tmpResult = SettingBuilders;
    obj4.learnMoreLink = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION);
    obj3.subLabel = intl.format(util.t.dliU4j, obj4);
    const items1 = [obj3, , ];
    const obj5 = { label: null, settings: null };
    const intl2 = util.intl;
    obj5.label = intl2.string(util.t.MeYuqs);
    const items2 = [, ];
    ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileUserSettings);
    obj5.settings = items2;
    items1[1] = obj5;
    const obj7 = { label: null, settings: null };
    const intl3 = util.intl;
    obj7.label = intl3.string(util.t.XlGG9c);
    const items3 = [, , ];
    ({ PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2] } = MobileUserSettings);
    obj7.settings = items3;
    items1[2] = obj7;
    obj2.sections = items1;
    const list = tmpResult.createList(obj2);
    cResult[0] = list;
    let first = list;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { children: null };
    const obj9 = { node: first };
    obj8.children = jsx(SettingLayoutDefault, { node: first });
    const tmp13 = <View>{null}</View>;
    cResult[1] = tmp13;
    let tmp9 = tmp13;
  } else {
    tmp9 = cResult[1];
  }
  return tmp9;
}) : (function FamilyCenterParentalControlsContentAndSocial() {
  const obj2 = { sections: null };
  const obj3 = { settings: null, subLabel: null };
  const items = [MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
  obj3.settings = items;
  const intl = util.intl;
  const obj4 = { learnMoreLink: null };
  const obj = SettingBuilders;
  obj4.learnMoreLink = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION);
  obj3.subLabel = intl.format(util.t.dliU4j, obj4);
  const items1 = [obj3, , ];
  const obj6 = { label: null, settings: null };
  const intl2 = util.intl;
  obj6.label = intl2.string(util.t.MeYuqs);
  const items2 = [, ];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileUserSettings);
  obj6.settings = items2;
  items1[1] = obj6;
  const obj7 = { label: null, settings: null };
  const intl3 = util.intl;
  obj7.label = intl3.string(util.t.XlGG9c);
  const items3 = [, , ];
  ({ PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2] } = MobileUserSettings);
  obj7.settings = items3;
  items1[2] = obj7;
  obj2.sections = items1;
  const obj8 = { children: null };
  const list = obj.createList(obj2);
  obj8.children = jsx(SettingLayoutDefault, { node: list });
  return <View>{null}</View>;
});