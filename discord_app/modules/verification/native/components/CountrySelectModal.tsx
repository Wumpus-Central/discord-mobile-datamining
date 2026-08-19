// === Module 8631: CountrySelectModal ===

// Module 8631 (CountrySelectModal)
import NavigationStack from "NavigationStack" /* 6312 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => {
    const obj = { title: null, headerLeft: null, render: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.gzXECH);
    obj[1] = callback(6314).getHeaderCloseButton(callback2(5260).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(5260).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8629).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(6548).runAfterInteractions(callback(8653).setCountrySelectorClosed, 400);
  }, []);
  return jsx(NavigationStack.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};