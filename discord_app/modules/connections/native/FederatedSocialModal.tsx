// discord_app/modules/connections/native/FederatedSocialModal.tsx
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import FreeFormInputGroupDefault from "../../../design/void/Form/native/FreeFormInputGroup.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import FederatedSocialUtils from "../FederatedSocialUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const WebBrowserType = fn(1074).WebBrowserType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
let closure_9 = createStyles.createStyles({
  container: { padding: 16 },
  description: { textAlign: "center" },
  input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/FederatedSocialModal.tsx");

export default function FederatedSocialModal(platformType) {
  _require = platformType;
  value = PlatformsDefault.get(platformType.platformType);
  let name;
  if (value != null) {
    name = value.name;
  }
  if (name == null) {
    let intl = require("util").intl;
    name = intl.string(require("util").t["bU/GZm"]);
  }
  let obj2 = { root: null };
  let obj3 = { headerTitle: null, headerLeft: null, render: null };
  let intl2 = require("util").intl;
  obj3.headerTitle = intl2.formatToPlainString(require("util").t["ImMhq+"], { serviceName: name });
  obj3.headerLeft = require("NavigatorHeader").getHeaderBackButton(platformType.onClose);
  obj3.render = function render() {
    ({ location: closure_0, successRedirect: closure_1, platformType } = platformType);
    const onClose = platformType.onClose;
    first = undefined;
    closure_7 = async function _tryHandle() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp7;
              let body;
              WebBrowserType(true);
              noop(null);
              c3 = 1;
              const obj4 = { location: _location, successRedirect, handle };
              c4 = 2;
              c5 = 1;
              const obj5 = { value: tmp3(tmp31[8]).authorize(platformType, obj4), done: false };
              return obj5;
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
              const obj7 = { value, done: true };
              return obj7;
            } else {
              body = value.body;
              let url;
              if (body != null) {
                url = body.url;
              }
              if (null != url) {
                tmp3(tmp31[9]).openURLExternally(body.url, constants.SAFARI);
                closure_129_3();
                c3 = 0;
                const obj = tmp3(tmp31[9]);
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
    [first, obj6.onChangeText] = noop.useState("");
    const tmp4 = _slicedToArray(noop.useState(null), 2);
    closure_5 = tmp4[1];
    const tmp5 = _slicedToArray(noop.useState(false), 2);
    closure_6 = tmp5[1];
    value = PlatformsDefault.get(platformType);
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
    const exampleHandle = FederatedSocialUtils.getExampleHandle(platformType);
    let obj4 = { bottom: true, style: tmp.container, children: null };
    let obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
    const intl2 = util.intl;
    obj5.children = intl2.formatToPlainString(util.t["7TByKh"], { serviceName: name });
    const items = [React5(Text_Text.Text, obj5), ,];
    const obj6 = {
      autoFocus: true,
      style: tmp.input,
      label: null,
      placeholder: null,
      error: null,
      returnKeyType: "done",
      onChangeText: null,
      onSubmitEditing: null,
      clearButtonVisibility: null,
      autoCapitalize: "none",
      autoComplete: "off",
      autoCorrect: false,
    };
    const validateHandleResult = FederatedSocialUtils.validateHandle(first, platformType);
    const intl3 = util.intl;
    obj6.label = intl3.string(util.t.tZ9QFR);
    obj6.placeholder = exampleHandle;
    obj6.error = tmp4[0];
    obj6.onSubmitEditing = tryHandle;
    obj6.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
    items[1] = React5(FreeFormInputGroupDefault, obj6);
    let obj7 = { loading: tmp5[0], disabled: !validateHandleResult, text: null, onPress: null };
    const intl4 = util.intl;
    obj7.text = intl4.string(util.t.PDTjLN);
    obj7.onPress = tryHandle;
    items[2] = React5(components_Button_Button.Button, obj7);
    obj4.children = items;
    return React6(common_SafeAreaView.SafeAreaPaddingView, obj4);
  };
  obj2.root = obj3;
  return closure_7(require("Navigator").Navigator, { initialRouteName: "root", screens: obj2 });
}
