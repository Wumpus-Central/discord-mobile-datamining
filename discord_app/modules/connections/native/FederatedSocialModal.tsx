// === Module 8788: FederatedSocialModal ===

// Module 8788 (FederatedSocialModal)
import Constants from "Constants" /* 1085 */;
import PlatformsDefault from "Platforms" /* 5442 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _location, _require, c4, c5, closure_2;

let metroImportAll;
let metroImportDefault;
function FederatedSocialModalScreen(onClose) {
  let closure_5;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let platformType;
  let require;
  ({ location: require, successRedirect: importDefault, platformType } = onClose);
  onClose = onClose.onClose;
  let first;
  react = undefined;
  let obj = function _tryHandle() {
    let handle;
    let successRedirect;
    obj = _asyncToGenerator(async function() {
      let closure_0;
      let closure_1;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let body;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              _location = tmp4;
              body = undefined;
              closure_2_6(true);
              closure_2_5(null);
              c3 = 1;
              const obj4 = { location: _location, successRedirect, handle };
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj6.authorize(platformType, obj4), done: false };
              obj6 = tmp(closure_2[8]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const intl = _location(closure_2[7]).intl;
              closure_129_5(intl.string(_location(closure_2[7]).t["7wbPNl"]));
              closure_129_6(false);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              body = value.body;
              let url;
              if (body != null) {
                url = body.url;
              }
              if (null == url) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error();
                throw error;
              } else {
                obj = tmp(closure_2[9]);
                obj.openURLExternally(body.url, constants.SAFARI);
                closure_129_3();
                c3 = 0;
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp26) {
          closure_2 = tmp26;
          if (0 === c3) {
            c5 = 3;
            throw tmp26;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_9();
  const tmp2 = first(react.useState(""), 2);
  first = tmp2[0];
  const tmp4 = tmp2[1];
  const tmp5 = first(react.useState(null), 2);
  react = tmp5[1];
  const first1 = tmp5[0];
  const tmp7 = first(react.useState(false), 2);
  let closure_6 = tmp7[1];
  const first2 = tmp7[0];
  obj = require("Platforms");
  const value = obj.get(platformType);
  let name;
  if (value != null) {
    name = value.name;
  }
  if (name == null) {
    let intl = require("intl").intl;
    name = intl.string(require("intl").t["bU/GZm"]);
  }
  function tryHandle() {
    return obj(...arguments);
  }
  let obj2 = require("FederatedSocialUtils");
  const exampleHandle = obj2.getExampleHandle(platformType);
  let obj3 = require("FederatedSocialUtils");
  let obj4 = { bottom: true, style: tmp.container, children: items };
  const validateHandleResult = obj3.validateHandle(first, platformType);
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  let obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: intl2.formatToPlainString(require("intl").t["7TByKh"], { serviceName: name }) };
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items = [obj(Text, obj5), , ];
  let obj6 = { autoFocus: true, style: tmp.input, label: intl3.string(require("intl").t.tZ9QFR), placeholder: exampleHandle, error: first1, returnKeyType: "done", onChangeText: tmp4, onSubmitEditing: tryHandle, clearButtonVisibility: require("native").ClearButtonVisibility.WITH_CONTENT, autoCapitalize: "none", autoComplete: "off", autoCorrect: false };
  const tmp9Result = require("FreeFormInputGroup");
  intl3 = require("intl").intl;
  items[1] = obj(tmp9Result, obj6);
  let obj7 = { loading: first2, disabled: !validateHandleResult, text: intl4.string(require("intl").t.PDTjLN), onPress: tryHandle };
  const Button = require("components/Button/Button").Button;
  intl4 = require("intl").intl;
  items[2] = obj(Button, obj7);
  return closure_8(SafeAreaPaddingView, obj4);
}
let react = react_mod;
const WebBrowserType = Constants.WebBrowserType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  let tmp10;
  let tmp4;
  _require = platformType;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] !== platformType.platformType) {
    const obj2 = PlatformsDefault;
    const value = obj2.get(platformType.platformType);
    let name;
    if (value != null) {
      name = value.name;
    }
    if (name == null) {
      const intl = tmp(1126).intl;
      name = intl.string(tmp(1126).t["bU/GZm"]);
    }
    const intl2 = tmp(1126).intl;
    const obj3 = { serviceName: name };
    const formatToPlainStringResult = intl2.formatToPlainString(require("intl").t["ImMhq+"], obj3);
    cResult[0] = platformType.platformType;
    cResult[1] = formatToPlainStringResult;
    tmp4 = formatToPlainStringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== platformType.onClose) {
    const tmpResult = require("NavigatorHeader");
    const headerBackButton = tmpResult.getHeaderBackButton(platformType.onClose);
    cResult[2] = platformType.onClose;
    cResult[3] = headerBackButton;
    tmp10 = headerBackButton;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === platformType) {
    if (cResult[5] === tmp4) {
      let tmp12;
      if (cResult[6] === tmp10) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const obj4 = {
    root: {
      headerTitle: tmp4,
      headerLeft: tmp10,
      render() {
        return FederatedSocialModalScreen(platformType);
      }
    }
  };
  const tmp13 = closure_7(require("Navigator").Navigator, { initialRouteName: "root", screens: obj4 });
  cResult[4] = platformType;
  cResult[5] = tmp4;
  cResult[6] = tmp10;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((platformType) => {
  let intl2;
  let obj3;
  let obj4;
  _require = platformType;
  const obj = PlatformsDefault;
  const value = obj.get(platformType.platformType);
  let name;
  if (value != null) {
    name = value.name;
  }
  if (name == null) {
    const intl = require("intl").intl;
    name = intl.string(require("intl").t["bU/GZm"]);
  }
  const obj2 = { root: obj3 };
  obj3 = {
    headerTitle: intl2.formatToPlainString(require("intl").t["ImMhq+"], { serviceName: name }),
    headerLeft: obj4.getHeaderBackButton(platformType.onClose),
    render() {
      return FederatedSocialModalScreen(platformType);
    }
  };
  intl2 = require("intl").intl;
  obj4 = require("NavigatorHeader");
  return closure_7(require("Navigator").Navigator, { initialRouteName: "root", screens: obj2 });
});
const result = size.fileFinishedImporting("modules/connections/native/FederatedSocialModal.tsx");

export default tmp3;