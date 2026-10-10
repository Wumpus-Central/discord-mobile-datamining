// === Module 6735: CountrySelectModal ===

// Module 6735 (CountrySelectModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import Navigator from "Navigator" /* 6687 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CountrySelectModal() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { COUNTRY_SELECT: null };
    const obj3 = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.gzXECH);
    obj3.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj3.render = function render() {
      return closure_1_4(closure_1_1(dependencyMap[5]), {
        onClose() {
          return closure_1_1(5934).pop();
        },
        onCountrySelected(countryCode) {
          return closure_1_1(6733).setCountryCode(countryCode);
        }
      });
    };
    obj2.COUNTRY_SELECT = obj3;
    cResult[0] = obj2;
    let first = obj2;
    const tmpResult = NavigatorHeader;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return () => {
        closure_1_1(6725).runAfterInteractions(closure_1_1(6764).setCountrySelectorClosed, 400);
      };
    };
    const items = [];
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { screens: first, initialRouteName: "COUNTRY_SELECT" };
    const tmp11 = jsx(Navigator.Navigator, { screens: first, initialRouteName: "COUNTRY_SELECT" });
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (function CountrySelectModal() {
  const screens = noop.useMemo(() => {
    const obj = { COUNTRY_SELECT: null };
    const obj2 = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.gzXECH);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj2.render = function render() {
      return closure_1_4(closure_1_1(dependencyMap[5]), {
        onClose() {
          return closure_1_1(5934).pop();
        },
        onCountrySelected(countryCode) {
          return closure_1_1(6733).setCountryCode(countryCode);
        }
      });
    };
    obj.COUNTRY_SELECT = obj2;
    return obj;
  }, []);
  const effect = noop.useEffect(() => () => {
    closure_1_1(6725).runAfterInteractions(closure_1_1(6764).setCountrySelectorClosed, 400);
  }, []);
  return jsx(Navigator.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
});