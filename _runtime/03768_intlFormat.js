// _runtime/03768_intlFormat.js
import requiredArgs from "03477_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function intlFormat(arg0, arg1, arg2) {
  requiredArgs.default(1, arguments);
  let tmp2 = undefined !== arg1;
  if (tmp2) {
    tmp2 = !("locale" in arg1);
  }
  let tmp3;
  let tmp4 = arg1;
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
  const dateTimeFormat = new Intl.DateTimeFormat(locale, tmp3);
  return dateTimeFormat.format(arg0);
};
export default exports.default;