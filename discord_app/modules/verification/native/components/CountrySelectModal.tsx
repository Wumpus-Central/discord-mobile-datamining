// === Module 9246: CountrySelectModal ===

// Module 9246 (CountrySelectModal)
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
    obj[1] = callback(5147).getHeaderCloseButton(callback2(4399).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4399).pop();
        },
        onCountrySelected(countryCode) {
          return callback(9244).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5639).runAfterInteractions(callback(9266).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5574) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};