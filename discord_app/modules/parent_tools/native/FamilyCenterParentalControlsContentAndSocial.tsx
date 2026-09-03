// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";
import createToggle from "../../settings/native/renderer/SettingBuilders.tsx";
import _modDef14578 from "../../settings/native/renderer/SettingLayout.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import { MobileUserSettings } from "../../user_settings/core/native/SettingsConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx",
);

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
  const items1 = [obj, ,];
  const obj2 = { label: null, settings: null };
  const intl2 = getSystemLocale.intl;
  obj2[0] = intl2.string(getSystemLocale.t.MeYuqs);
  const items2 = [,];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileUserSettings);
  obj2[1] = items2;
  items1[1] = obj2;
  const obj3 = { label: null, settings: null };
  const intl3 = getSystemLocale.intl;
  obj3[0] = intl3.string(getSystemLocale.t.XlGG9c);
  const items3 = [, ,];
  ({
    PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0],
    PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1],
    PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2],
  } = MobileUserSettings);
  obj3[1] = items3;
  items1[2] = obj3;
  obj[0] = items1;
  obj4 = { children: null };
  const list = obj.createList(obj);
  obj4[0] = jsx(_modDef14578, { node: list });
  return <View>{null}</View>;
}
