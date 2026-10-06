// _runtime/04256_intlFormat.js
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function intlFormat(arg0, arg1, arg2) {
  requiredArgs.default(1, arguments);
  let tmp3;
  let tmp4 = arg1;
  const tmp2 = undefined !== arg1 && !("locale" in arg1);
  if (tmp2) {
    tmp4 = arg2;
    tmp3 = arg1;
  }
  let locale;
  if (null !== tmp4) {
    if (undefined !== tmp4) {
      locale = tmp4.locale;
    }
  }
  const dateTimeFormat = new DateTimeFormat(locale, tmp3);
  return dateTimeFormat.format(arg0);
}
