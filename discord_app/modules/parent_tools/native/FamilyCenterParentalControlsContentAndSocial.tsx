// === Module 14385: FamilyCenterParentalControlsContentAndSocial ===

// Module 14385 (FamilyCenterParentalControlsContentAndSocial)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1995 */;
import createToggle from "createToggle" /* 10516 */;
import _modDef14094 from "module_14094" /* 14094 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8235 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx");

export default function FamilyCenterParentalControlsContentAndSocial() {
  let obj = createToggle;
  obj = { sections: null };
  obj = { settings: items, subLabel: null };
  items = [MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
  const intl = getSystemLocale.intl;
  obj1 = { learnMoreLink: null };
  let obj4 = combinedDefault;
  obj1[0] = obj4.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION);
  obj[1] = intl.format(getSystemLocale.t.dliU4j, obj1);
  const items1 = [obj, , ];
  const obj2 = { label: null, settings: null };
  const intl2 = getSystemLocale.intl;
  obj2[0] = intl2.string(getSystemLocale.t.MeYuqs);
  const items2 = [, ];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileUserSettings);
  obj2[1] = items2;
  items1[1] = obj2;
  const obj3 = { label: null, settings: null };
  const intl3 = getSystemLocale.intl;
  obj3[0] = intl3.string(getSystemLocale.t.XlGG9c);
  const items3 = [, , ];
  ({ PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2] } = MobileUserSettings);
  obj3[1] = items3;
  items1[2] = obj3;
  obj[0] = items1;
  obj4 = { children: null };
  const list = obj.createList(obj);
  obj4[0] = jsx(_modDef14094, { node: list });
  return <View>{null}</View>;
};