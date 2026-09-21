// discord_app/modules/connections/native/DomainVerifyModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import DomainVerifyUtils from "../DomainVerifyUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function DomainScreen(onClose) {
  onClose = onClose.onClose;
  first = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  function verify() {
    closure_4(true);
    closure_3(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.CONNECTION(constants.DOMAIN, first), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = HTTP.post(request).then(() => {
      onClose();
    });
    HTTP.post(request)
      .then(() => {
        onClose();
      })
      .catch((error) => {
        const body = error.body;
        let proof;
        if (body != null) {
          proof = body.proof;
        }
        if (proof) {
          const obj = { proof: error.body.proof, domain };
          closure_1_1.push(constants.PROOF_DNS, obj);
        } else {
          const body2 = error.body;
          let message;
          if (body2 != null) {
            const errors = body2.errors;
            if (errors != null) {
              domain = errors.domain;
              if (domain != null) {
                const _errors = domain._errors;
                if (_errors != null) {
                  first = _errors[0];
                  if (first != null) {
                    message = first.message;
                  }
                }
              }
            }
          }
          if (!message) {
            const body3 = error.body;
            let message1;
            if (body3 != null) {
              message1 = body3.message;
            }
            message = message1;
          }
          if (!message) {
            message = error.message;
          }
          closure_1_3(message);
        }
      })
      .finally(() => {
        closure_1_4(false);
      });
  }
  const tmp = closure_10();
  importDefault = onClose(first[7]).useNavigation();
  [first, obj4.onChangeText] = noop.useState("");
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp4[1];
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  noop = tmp5[1];
  const obj2 = { bottom: true, style: tmp.container, children: null };
  const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl = onClose(first[11]).intl;
  obj3.children = intl.string(onClose(first[11]).t.NxPUqY);
  const items = [closure_8(onClose(first[10]).Text, obj3), ,];
  const obj4 = {
    autoFocus: true,
    style: tmp.input,
    label: null,
    placeholder: null,
    error: null,
    returnKeyType: "done",
    onChangeText: null,
    onSubmitEditing: null,
  };
  let obj = onClose(first[7]);
  const intl2 = onClose(first[11]).intl;
  obj4.label = intl2.string(onClose(first[11]).t["4jIAa+"]);
  obj4.placeholder = onClose(first[13]).EXAMPLE_DOMAIN;
  obj4.error = tmp4[0];
  obj4.onSubmitEditing = verify;
  items[1] = closure_8(require("FreeFormInputGroup"), obj4);
  const obj5 = { loading: tmp5[0], disabled: "" === first, text: null, onPress: null };
  const intl3 = onClose(first[11]).intl;
  obj5.text = intl3.string(onClose(first[11]).t.PDTjLN);
  obj5.onPress = verify;
  items[2] = closure_8(onClose(first[14]).Button, obj5);
  obj2.children = items;
  return closure_9(onClose(first[9]).SafeAreaPaddingView, obj2);
}
function DNSProofScreen(proof) {
  ({ onClose: require, domain } = proof);
  proof = proof.proof;
  noop = undefined;
  c5 = undefined;
  const tmp = closure_10();
  _slicedToArray = require("useNavigation").useNavigation();
  const obj = require("useNavigation");
  [tmp5, c4] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [tmp7, c5] = noop.useState(false);
  const obj2 = { bottom: true, style: tmp.container, children: null };
  const obj3 = { variant: "text-md/normal", children: null };
  const intl = require("util").intl;
  obj3.children = intl.string(require("util").t.cSURbq);
  const items = [closure_8(require("Text/Text").Text, obj3), , , ,];
  const obj4 = { style: tmp.dns, children: null };
  const obj5 = { variant: "text-md/normal", children: null };
  const intl2 = require("util").intl;
  obj5.children = intl2.string(require("util").t.GL3q7k);
  const items1 = [closure_8(require("Text/Text").Text, obj5), , , , ,];
  const obj6 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: null };
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  obj6.children = require("DomainVerifyUtils").getDnsName(domain);
  items1[1] = closure_8(require("Text/Text").Text, obj6);
  const obj8 = { variant: "text-md/normal", children: null };
  const intl3 = require("util").intl;
  obj8.children = intl3.string(require("util").t.Ccmixu);
  items1[2] = closure_8(require("Text/Text").Text, obj8);
  items1[3] = closure_8(require("Text/Text").Text, {
    variant: "text-md/normal",
    selectable: true,
    style: tmp.code,
    children: "TXT",
  });
  const obj10 = { variant: "text-md/normal", children: null };
  const intl4 = require("util").intl;
  obj10.children = intl4.string(require("util").t.PVLriT);
  items1[4] = closure_8(require("Text/Text").Text, obj10);
  items1[5] = closure_8(require("Text/Text").Text, {
    variant: "text-md/normal",
    selectable: true,
    style: tmp.code,
    children: proof,
  });
  obj4.children = items1;
  items[1] = closure_9(c5, obj4);
  let tmp9Result = null != tmp5;
  if (tmp9Result) {
    const obj12 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
    tmp9Result = closure_8(require("Text/Text").Text, obj12);
  }
  items[2] = tmp9Result;
  const obj13 = { style: tmp.button, children: null };
  const obj14 = { loading: tmp7, text: null, onPress: null };
  const intl5 = require("util").intl;
  obj14.text = intl5.string(require("util").t["13ofGu"]);
  obj14.onPress = function onPress() {
    _undefined2(true);
    _undefined(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = HTTP.post(request).then(() => {
      closure_1_0();
    });
    HTTP.post(request)
      .then(() => {
        closure_1_0();
      })
      .catch((error) => {
        const body = error.body;
        let message;
        if (body != null) {
          const errors = body.errors;
          if (errors != null) {
            domain = errors.domain;
            if (domain != null) {
              const _errors = domain._errors;
              if (_errors != null) {
                const first = _errors[0];
                if (first != null) {
                  message = first.message;
                }
              }
            }
          }
        }
        if (!message) {
          const body2 = error.body;
          let message1;
          if (body2 != null) {
            message1 = body2.message;
          }
          message = message1;
        }
        if (!message) {
          message = error.message;
        }
        _undefined(message);
      })
      .finally(() => {
        _undefined2(false);
      });
  };
  obj13.children = closure_8(require("components/Button/Button").Button, obj14);
  items[3] = closure_8(c5, obj13);
  const obj15 = { style: tmp.button, children: null };
  const obj16 = { variant: "secondary", text: null, onPress: null };
  const intl6 = require("util").intl;
  obj16.text = intl6.string(require("util").t.CkfdNx);
  obj16.onPress = function onPress() {
    closure_3.push(constants.PROOF_HTTP, { proof, domain });
  };
  obj15.children = closure_8(require("components/Button/Button").Button, obj16);
  items[4] = closure_8(c5, obj15);
  obj2.children = items;
  return closure_9(require("common/SafeAreaView").SafeAreaPaddingView, obj2);
}
function HTTPProofScreen(children) {
  ({ onClose: require, domain } = children);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_10();
  dependencyMap = useNavigation.useNavigation();
  [tmp5, c3] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [tmp7, c4] = noop.useState(false);
  const obj2 = { bottom: true, style: tmp.container, children: null };
  const obj3 = { variant: "text-md/normal", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.p4ql7y);
  const items = [closure_8(Text_Text.Text, obj3), , , ,];
  const obj4 = { style: tmp.dns, children: null };
  const obj5 = { variant: "text-md/normal", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.GL3q7k);
  const items1 = [closure_8(Text_Text.Text, obj5), , ,];
  const obj6 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: null };
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  obj6.children = DomainVerifyUtils.getHttpName(domain);
  items1[1] = closure_8(Text_Text.Text, obj6);
  const obj8 = { variant: "text-md/normal", children: null };
  const intl3 = util.intl;
  obj8.children = intl3.string(util.t.PVLriT);
  items1[2] = closure_8(Text_Text.Text, obj8);
  items1[3] = closure_8(Text_Text.Text, {
    variant: "text-md/normal",
    selectable: true,
    style: tmp.code,
    children: children.proof,
  });
  obj4.children = items1;
  items[1] = closure_9(View, obj4);
  let tmp9Result = null != tmp5;
  if (tmp9Result) {
    const obj10 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
    tmp9Result = closure_8(Text_Text.Text, obj10);
  }
  items[2] = tmp9Result;
  const obj11 = { style: tmp.button, children: null };
  const obj12 = { loading: tmp7, text: null, onPress: null };
  const intl4 = util.intl;
  obj12.text = intl4.string(util.t["13ofGu"]);
  obj12.onPress = function onPress() {
    _undefined2(true);
    _undefined(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = HTTP.post(request).then(() => {
      closure_1_0();
    });
    HTTP.post(request)
      .then(() => {
        closure_1_0();
      })
      .catch((error) => {
        const body = error.body;
        let message;
        if (body != null) {
          const errors = body.errors;
          if (errors != null) {
            domain = errors.domain;
            if (domain != null) {
              const _errors = domain._errors;
              if (_errors != null) {
                const first = _errors[0];
                if (first != null) {
                  message = first.message;
                }
              }
            }
          }
        }
        if (!message) {
          const body2 = error.body;
          let message1;
          if (body2 != null) {
            message1 = body2.message;
          }
          message = message1;
        }
        if (!message) {
          message = error.message;
        }
        _undefined(message);
      })
      .finally(() => {
        _undefined2(false);
      });
  };
  obj11.children = closure_8(components_Button_Button.Button, obj12);
  items[3] = closure_8(View, obj11);
  const obj13 = { style: tmp.button, children: null };
  const obj14 = { variant: "secondary", text: null, onPress: null };
  const intl5 = util.intl;
  obj14.text = intl5.string(util.t.RhJMVQ);
  obj14.onPress = function onPress() {
    closure_2.pop();
  };
  obj13.children = closure_8(components_Button_Button.Button, obj14);
  items[4] = closure_8(View, obj13);
  obj2.children = items;
  return closure_9(common_SafeAreaView.SafeAreaPaddingView, obj2);
}
const View = fn(17).View;
const Constants = fn(1074);
({ Endpoints: metroRequire, PlatformTypes: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { padding: 16 },
  description: { textAlign: "center" },
  input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 },
  dns: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.xs,
    padding: 8,
    marginTop: 16,
  },
  error: { marginTop: 16 },
  code: { fontFamily: "monospace", marginBottom: 4 },
  button: { marginTop: 16 },
};
let closure_10 = createStyles.createStyles(obj2);
const constants2 = { DOMAIN: "DOMAIN", PROOF_DNS: "PROOF_DNS", PROOF_HTTP: "PROOF_HTTP" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/DomainVerifyModal.tsx");

export default function DomainVerifyModal(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    function onClose() {
      return ModalActionCreatorsDefault.pop();
    }
    const obj = {};
    const obj2 = { headerTitle: null, headerLeft: null, render: null };
    const intl = onClose(1115).intl;
    obj2.headerTitle = intl.string(onClose(1115).t["7lo8+e"]);
    obj2.headerLeft = onClose(5841).getHeaderBackButton(onClose);
    obj2.render = function render() {
      return React6(DomainScreen, { onClose });
    };
    obj[constants2.DOMAIN] = obj2;
    const obj4 = { headerTitle: null, headerLeft: null, render: null };
    const intl2 = onClose(1115).intl;
    obj4.headerTitle = intl2.string(onClose(1115).t["7lo8+e"]);
    const obj3 = onClose(5841);
    obj4.headerLeft = onClose(5841).getHeaderBackButton(onClose);
    obj4.render = function render(domain) {
      return React6(DNSProofScreen, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants2.PROOF_DNS] = obj4;
    const obj6 = { headerTitle: null, headerLeft: null, render: null };
    const intl3 = onClose(1115).intl;
    obj6.headerTitle = intl3.string(onClose(1115).t["7lo8+e"]);
    const obj5 = onClose(5841);
    obj6.headerLeft = onClose(5841).getHeaderBackButton(onClose);
    obj6.render = function render(domain) {
      return React6(HTTPProofScreen, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants2.PROOF_HTTP] = obj6;
    const obj8 = { screens: obj, initialRouteName: constants2.DOMAIN, headerBackTitle: null };
    const intl4 = onClose(1115).intl;
    obj8.headerBackTitle = intl4.string(onClose(1115).t["13/7kX"]);
    return closure_8(onClose(7245).Navigator, obj8);
  }
}
