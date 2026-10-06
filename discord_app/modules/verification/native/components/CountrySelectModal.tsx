// === Module 6551: CountrySelectModal ===

// Module 6551 (CountrySelectModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import Navigator from "Navigator" /* 6503 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function render() {
  let obj = {
    onClose() {
      const arr = closure_1_1(closure_1_2[4]);
      return arr.pop();
    },
    onCountrySelected(countryCode) {
      const obj = closure_1_1(closure_1_2[6]);
      return obj.setCountryCode(countryCode);
    }
  };
  return closure_1_4(closure_1_1(closure_1_2[5]), obj);
}
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let obj3;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmpResult;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { COUNTRY_SELECT: obj3 };
    obj3 = { title: intl.string(intl2.t.gzXECH), headerLeft: tmpResult.getHeaderCloseButton(ModalActionCreatorsDefault.pop), render };
    intl = intl2.intl;
    cResult[0] = obj2;
    first = obj2;
    tmpResult = NavigatorHeader;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return () => {
        const obj = closure_1_1(closure_1_2[9]);
        obj.runAfterInteractions(closure_1_1(closure_1_2[10]).setCountrySelectorClosed, 400);
      };
    };
    const items = [];
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = jsx(Navigator.Navigator, { screens: first, initialRouteName: "COUNTRY_SELECT" });
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
  const screens = react.useMemo(() => {
    let intl;
    let obj2;
    let obj3;
    let obj = { COUNTRY_SELECT: obj2 };
    obj2 = { title: intl.string(intl2.t.gzXECH), headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop), render };
    intl = intl2.intl;
    obj3 = NavigatorHeader;
    return obj;
  }, []);
  const effect = react.useEffect(() => () => {
    const obj = closure_1_1(closure_1_2[9]);
    obj.runAfterInteractions(closure_1_1(closure_1_2[10]).setCountrySelectorClosed, 400);
  }, []);
  return jsx(Navigator.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
});
const result = size.fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default tmp2;