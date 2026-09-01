// discord_app/modules/user_profile/utils/getMutualGuildsLabel.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";

const result = set.fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(arg0) {
  if (undefined === arg0) {
    const intl3 = getSystemLocale.intl;
    let stringResult = intl3.string(getSystemLocale.t["4lTDZq"]);
  } else if (0 === arg0) {
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t.jpY0X5);
  } else {
    const intl = getSystemLocale.intl;
    const obj = { count: null };
    obj[0] = arg0;
    stringResult = intl.formatToPlainString(getSystemLocale.t.eE3oep, obj);
  }
  return stringResult;
}
