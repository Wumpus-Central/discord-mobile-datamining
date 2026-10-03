// discord_app/modules/connections/native/FederatedSocialModal.tsx
import PlatformsDefault from "../../../lib/Platforms.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
function FederatedSocialModalScreen(onClose) {
  ({ location: require, successRedirect: importDefault, platformType } = onClose);
  onClose = onClose.onClose;
  let first;
  noop = undefined;
  closure_7 = async function _tryHandle(Button) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (Button === 1) {
        throw value;
      } else if (Button === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (Button === 1) {
            c5 = 3;
            throw value;
          } else if (Button === 2) {
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
          } else if (Button === 1) {
            c5 = 3;
            throw value;
          } else if (Button === 2) {
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
  const tmp2 = first(noop.useState(""), 2);
  first = tmp2[0];
  const tmp4 = first(noop.useState(null), 2);
  noop = tmp4[1];
  const tmp5 = first(noop.useState(false), 2);
  closure_6 = tmp5[1];
  value = require("Platforms").get(platformType);
  let name;
  if (value != null) {
    name = value.name;
  }
  if (name == null) {
    let intl = require("util").intl;
    name = intl.string(require("util").t["bU/GZm"]);
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
  let obj = require("Platforms");
  const exampleHandle = require("FederatedSocialUtils").getExampleHandle(platformType);
  let obj2 = require("FederatedSocialUtils");
  let obj3 = require("FederatedSocialUtils");
  let obj4 = { bottom: true, style: tmp.container, children: null };
  let obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl2 = require("util").intl;
  obj5.children = intl2.formatToPlainString(require("util").t["7TByKh"], { serviceName: name });
  const items = [closure_7(require("Text/Text").Text, obj5), ,];
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
  const validateHandleResult = require("FederatedSocialUtils").validateHandle(first, platformType);
  const intl3 = require("util").intl;
  obj6.label = intl3.string(require("util").t.tZ9QFR);
  obj6.placeholder = exampleHandle;
  obj6.error = tmp4[0];
  obj6.onChangeText = tmp2[1];
  obj6.onSubmitEditing = tryHandle;
  obj6.clearButtonVisibility = require("native").ClearButtonVisibility.WITH_CONTENT;
  items[1] = closure_7(require("FreeFormInputGroup"), obj6);
  let obj7 = { loading: tmp5[0], disabled: !validateHandleResult, text: null, onPress: null };
  const intl4 = require("util").intl;
  obj7.text = intl4.string(require("util").t.PDTjLN);
  obj7.onPress = tryHandle;
  items[2] = closure_7(require("components/Button/Button").Button, obj7);
  obj4.children = items;
  return closure_8(require("common/SafeAreaView").SafeAreaPaddingView, obj4);
}
const WebBrowserType = fn(1085).WebBrowserType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({
  container: { padding: 16 },
  description: { textAlign: "center" },
  input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/FederatedSocialModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (platformType) => {
      _require = platformType;
      const cResult = require("c").c(8);
      if (cResult[0] !== platformType.platformType) {
        value = PlatformsDefault.get(platformType.platformType);
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
        const formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t["ImMhq+"], obj3);
        cResult[0] = platformType.platformType;
        cResult[1] = formatToPlainStringResult;
        let tmp4 = formatToPlainStringResult;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== platformType.onClose) {
        const headerBackButton = tmp(6010).getHeaderBackButton(platformType.onClose);
        cResult[2] = platformType.onClose;
        cResult[3] = headerBackButton;
        let tmp10 = headerBackButton;
        const tmpResult = tmp(6010);
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === platformType) {
        if (cResult[5] === tmp4) {
          if (cResult[6] === tmp10) {
            let tmp12 = cResult[7];
          }
          return tmp12;
        }
      }
      const tmp13 = closure_7(require("Navigator").Navigator, {
        initialRouteName: "root",
        screens: {
          root: {
            headerTitle: tmp4,
            headerLeft: tmp10,
            render() {
              return FederatedSocialModalScreen(closure_0);
            },
          },
        },
      });
      cResult[4] = platformType;
      cResult[5] = tmp4;
      cResult[6] = tmp10;
      cResult[7] = tmp13;
      tmp12 = tmp13;
      const obj = require("c");
      const obj4 = {
        root: {
          headerTitle: tmp4,
          headerLeft: tmp10,
          render() {
            return FederatedSocialModalScreen(closure_0);
          },
        },
      };
    }
  : (platformType) => {
      _require = platformType;
      value = PlatformsDefault.get(platformType.platformType);
      let name;
      if (value != null) {
        name = value.name;
      }
      if (name == null) {
        const intl = require("util").intl;
        name = intl.string(require("util").t["bU/GZm"]);
      }
      const obj2 = { root: null };
      const obj3 = { headerTitle: null, headerLeft: null, render: null };
      const intl2 = require("util").intl;
      obj3.headerTitle = intl2.formatToPlainString(require("util").t["ImMhq+"], { serviceName: name });
      obj3.headerLeft = require("NavigatorHeader").getHeaderBackButton(platformType.onClose);
      obj3.render = function render() {
        return FederatedSocialModalScreen(closure_0);
      };
      obj2.root = obj3;
      return closure_7(require("Navigator").Navigator, { initialRouteName: "root", screens: obj2 });
    };
