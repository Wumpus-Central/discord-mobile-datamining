// discord_app/modules/verification/native/components/CountrySelectModal.tsx
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
const result = require("set").fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => {
    let obj = { COUNTRY_SELECT: null };
    obj = { title: null, headerLeft: null, render: null };
    const intl = callback(1114).intl;
    obj[0] = intl.string(callback(1114).t.gzXECH);
    obj[1] = callback(5624).getHeaderCloseButton(callback2(4763).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4763).pop();
        },
        onCountrySelected(countryCode) {
          return callback(7045).setCountryCode(countryCode);
        },
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(
    () => () => {
      callback(7038).runAfterInteractions(callback(7076).setCountrySelectorClosed, 400);
    },
    [],
  );
  return jsx(NavigationStack.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
}
