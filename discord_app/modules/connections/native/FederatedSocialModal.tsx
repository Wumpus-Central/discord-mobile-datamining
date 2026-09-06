// === Module 9283: FederatedSocialModal ===

// Module 9283 (FederatedSocialModal)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import PlatformsDefault from "Platforms" /* 5283 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6605 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import FederatedSocialUtils from "FederatedSocialUtils" /* 9284 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebBrowserType = fn(1074).WebBrowserType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/FederatedSocialModal.tsx");

export default function FederatedSocialModal(platformType) {
  _require = platformType;
  let screens = PlatformsDefault;
  value = screens.get(platformType.platformType);
  let name;
  if (value != null) {
    name = value.name;
  }
  if (name == null) {
    let intl = require("util").intl;
    name = intl.string(require("util").t["bU/GZm"]);
  }
  screens = { root: null };
  let obj = { headerTitle: null, headerLeft: null, render: null };
  let intl2 = require("util").intl;
  obj.headerTitle = intl2.formatToPlainString(require("util").t["ImMhq+"], { serviceName: name });
  obj.headerLeft = require("NavigatorHeader").getHeaderBackButton(platformType.onClose);
  obj.render = function render() {
    ({ location: closure_0, successRedirect: closure_1, platformType } = platformType);
    const onClose = platformType.onClose;
    closure_7 = async function _tryHandle(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp7;
              let body;
              WebBrowserType(true);
              noop(null);
              c3 = 1;
              const obj1 = { location: _location, successRedirect, handle };
              c4 = 2;
              c5 = 1;
              const obj2 = { value: tmp3(tmp31[8]).authorize(platformType, obj1), done: false };
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              const intl = closure_0(tmp31[7]).intl;
              closure_129_5(intl.string(closure_0(tmp31[7]).t["7wbPNl"]));
              closure_129_6(false);
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              body = value.body;
              let url;
              if (body != null) {
                url = body.url;
              }
              if (null != url) {
                obj = tmp3(tmp31[9]);
                obj.openURLExternally(body.url, constants.SAFARI);
                closure_129_3();
                c3 = 0;
              }
            }
            const _Error = Error;
            const error = new Error();
            throw error;
          }
        } catch (tmp31) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp31;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    const tmp = closure_9();
    const tmp2 = _slicedToArray(noop.useState(""), 2);
    const first = tmp2[0];
    const tmp4 = _slicedToArray(noop.useState(null), 2);
    closure_5 = tmp4[1];
    const tmp5 = _slicedToArray(noop.useState(false), 2);
    closure_6 = tmp5[1];
    let obj = PlatformsDefault;
    value = obj.get(platformType);
    let name;
    if (value != null) {
      name = value.name;
    }
    if (name == null) {
      let intl = util.intl;
      name = intl.string(util.t["bU/GZm"]);
    }
    function tryHandle() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let obj1 = FederatedSocialUtils;
    const exampleHandle = obj1.getExampleHandle(platformType);
    let obj2 = FederatedSocialUtils;
    obj = { bottom: true, style: tmp.container, children: null };
    obj = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
    const intl2 = util.intl;
    obj.children = intl2.formatToPlainString(util.t["7TByKh"], { serviceName: name });
    const items = [React5(Text_Text.Text, obj), , ];
    obj1 = { autoFocus: true, style: tmp.input, label: null, placeholder: null, error: null, returnKeyType: "done", onChangeText: null, onSubmitEditing: null, clearButtonVisibility: null, autoCapitalize: "none", autoComplete: "off", autoCorrect: false };
    const validateHandleResult = obj2.validateHandle(first, platformType);
    const intl3 = util.intl;
    obj1.label = intl3.string(util.t.tZ9QFR);
    obj1.placeholder = exampleHandle;
    obj1.error = tmp4[0];
    obj1.onChangeText = tmp2[1];
    obj1.onSubmitEditing = tryHandle;
    obj1.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
    items[1] = React5(FreeFormInputGroupDefault, obj1);
    obj2 = { loading: tmp5[0], disabled: !validateHandleResult, text: null, onPress: null };
    const intl4 = util.intl;
    obj2.text = intl4.string(util.t.PDTjLN);
    obj2.onPress = tryHandle;
    items[2] = React5(components_Button_Button.Button, obj2);
    obj.children = items;
    return React6(common_SafeAreaView.SafeAreaPaddingView, obj);
  };
  screens.root = obj;
  return closure_7(require("Navigator").Navigator, { initialRouteName: "root", screens });
};