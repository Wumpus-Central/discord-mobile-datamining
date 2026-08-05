// discord_app/modules/user_profile/utils/getMutualGuildsLabel.tsx
import { getSystemLocale } from "../../../intl/index.native.tsx";
const result = require("set").fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(arg0) {
  if (undefined === arg0) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    let stringResult = intl3.string(getSystemLocale /* getSystemLocale */.t["4lTDZq"]);
  } else if (0 === arg0) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    stringResult = intl2.string(getSystemLocale /* getSystemLocale */.t.jpY0X5);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = arg0;
    stringResult = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.eE3oep, obj);
  }
  return stringResult;
};