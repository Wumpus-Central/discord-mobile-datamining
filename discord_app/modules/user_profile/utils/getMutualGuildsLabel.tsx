// discord_app/modules/user_profile/utils/getMutualGuildsLabel.tsx
import util from "../../../intl/index.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(count) {
  if (undefined === count) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["4lTDZq"]);
  } else if (0 === count) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.jpY0X5);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(util.t.eE3oep, obj);
  }
  return stringResult;
}
