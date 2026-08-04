// discord_app/modules/user_profile/utils/getMutualGuildsLabel.tsx
const result = require("set").fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(arg0) {
  if (undefined === arg0) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl3.string(require(1236) /* getSystemLocale */.t["4lTDZq"]);
  } else if (0 === arg0) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1236) /* getSystemLocale */.t.jpY0X5);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = arg0;
    stringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.eE3oep, obj);
  }
  return stringResult;
};