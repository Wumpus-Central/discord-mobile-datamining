// === Module 7150: CountrySelectModal ===

// Module 7150 (CountrySelectModal)
import util from "util" /* 1114 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import Navigator from "Navigator" /* 7103 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = noop.useMemo(() => {
    let obj = { COUNTRY_SELECT: null };
    obj = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.gzXECH);
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj.render = function render() {
      return closure_1_4(closure_1_1(dependencyMap[5]), {
        onClose() {
          return closure_1_1(4839).pop();
        },
        onCountrySelected(countryCode) {
          return closure_1_1(7148).setCountryCode(countryCode);
        }
      });
    };
    obj.COUNTRY_SELECT = obj;
    return obj;
  }, []);
  const effect = noop.useEffect(() => () => {
    closure_1_1(7141).runAfterInteractions(closure_1_1(7179).setCountrySelectorClosed, 400);
  }, []);
  return jsx(Navigator.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};