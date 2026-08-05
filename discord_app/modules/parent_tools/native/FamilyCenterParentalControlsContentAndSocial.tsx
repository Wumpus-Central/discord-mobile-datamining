import { getSystemLocale } from "../../../intl/index.native.tsx";
import { combined } from "../../../utils/HelpdeskUtils.tsx";
import { createToggle } from "../../settings/native/renderer/SettingBuilders.tsx";
import { SettingLayout } from "../../settings/native/renderer/SettingLayout.tsx";
// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx");

export default function FamilyCenterParentalControlsContentAndSocial() {
  let obj = createToggle /* createToggle */;
  obj = { sections: null };
  obj = { settings: items, subLabel: null };
  items = [MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
  const intl = getSystemLocale /* getSystemLocale */.intl;
  const obj1 = { learnMoreLink: null };
  let obj4 = combined;
  obj1[0] = obj4.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION);
  obj[1] = intl.format(getSystemLocale /* getSystemLocale */.t.dliU4j, obj1);
  const items1 = [obj, , ];
  const obj2 = { label: null, settings: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj2[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.MeYuqs);
  const items2 = [, ];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileSetting);
  obj2[1] = items2;
  items1[1] = obj2;
  const obj3 = { label: null, settings: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj3[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.XlGG9c);
  const items3 = [, , ];
  ({ PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2] } = MobileSetting);
  obj3[1] = items3;
  items1[2] = obj3;
  obj[0] = items1;
  obj4 = { children: null };
  const list = obj.createList(obj);
  obj4[0] = jsx(SettingLayout, { node: list });
  return <View>{null}</View>;
};