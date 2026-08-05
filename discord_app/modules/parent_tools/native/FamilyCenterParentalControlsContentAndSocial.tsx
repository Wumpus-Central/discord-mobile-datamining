// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx");

export default function FamilyCenterParentalControlsContentAndSocial() {
  let obj = require("../../settings/native/renderer/SettingBuilders.tsx") /* createToggle */;
  obj = { sections: null };
  obj = { settings: items, subLabel: null };
  items = [MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  const obj1 = { learnMoreLink: null };
  let obj4 = require("../../../utils/HelpdeskUtils.tsx");
  obj1[0] = obj4.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION);
  obj[1] = intl.format(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.dliU4j, obj1);
  const items1 = [obj, , ];
  const obj2 = { label: null, settings: null };
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[0] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.MeYuqs);
  const items2 = [, ];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileSetting);
  obj2[1] = items2;
  items1[1] = obj2;
  const obj3 = { label: null, settings: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj3[0] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.XlGG9c);
  const items3 = [, , ];
  ({ PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2] } = MobileSetting);
  obj3[1] = items3;
  items1[2] = obj3;
  obj[0] = items1;
  obj4 = { children: null };
  const list = obj.createList(obj);
  obj4[0] = jsx(require("../../settings/native/renderer/SettingLayout.tsx"), { node: list });
  return <View>{null}</View>;
};