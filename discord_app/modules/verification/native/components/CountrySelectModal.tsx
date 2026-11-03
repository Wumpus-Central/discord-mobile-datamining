// === Module 7336: CountrySelectModal ===

// Module 7336 (CountrySelectModal)
import util from "util" /* 1113 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import NavigatorHeader from "NavigatorHeader" /* 7124 */;
import Navigator from "Navigator" /* 7290 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = noop.useMemo(() => {
    const obj = { COUNTRY_SELECT: null };
    const obj2 = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.gzXECH);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj2.render = function render() {
      return closure_1_4(closure_1_1(dependencyMap[5]), {
        onClose() {
          return closure_1_1(6864).pop();
        },
        onCountrySelected(countryCode) {
          return closure_1_1(7334).setCountryCode(countryCode);
        }
      });
    };
    obj.COUNTRY_SELECT = obj2;
    return obj;
  }, []);
  const effect = noop.useEffect(() => () => {
    closure_1_1(7328).runAfterInteractions(closure_1_1(7364).setCountrySelectorClosed, 400);
  }, []);
  return jsx(Navigator.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};