// === Module 7720: CountrySelectModal ===

// Module 7720 (CountrySelectModal)
import NavigationStack from "NavigationStack" /* 5973 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => {
    let obj = { COUNTRY_SELECT: null };
    obj = { title: null, headerLeft: null, render: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.gzXECH);
    obj[1] = callback(5460).getHeaderCloseButton(callback2(4689).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4689).pop();
        },
        onCountrySelected(countryCode) {
          return callback(7718).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(6011).runAfterInteractions(callback(7746).setCountrySelectorClosed, 400);
  }, []);
  return jsx(NavigationStack.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};