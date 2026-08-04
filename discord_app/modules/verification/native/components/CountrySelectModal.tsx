import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => {
    let obj = { COUNTRY_SELECT: null };
    obj = { title: null, headerLeft: null, render: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.gzXECH);
    obj[1] = callback(5238).getHeaderCloseButton(callback2(4490).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4490).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8330).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5730).runAfterInteractions(callback(8354).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5665) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};