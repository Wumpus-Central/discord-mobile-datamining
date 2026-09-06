// === Module 9281: DomainVerifyModal ===

// Module 9281 (DomainVerifyModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import useNavigation from "useNavigation" /* 1483 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import DomainVerifyUtils from "DomainVerifyUtils" /* 9282 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function DomainScreen(onClose) {
  onClose = onClose.onClose;
  let first;
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
    HTTP.post(request).then(() => {
      onClose();
    }).catch((error) => {
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
    }).finally(() => {
      closure_1_4(false);
    });
  }
  const tmp = closure_10();
  let obj = onClose(first[7]);
  importDefault = obj.useNavigation();
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  first = tmp2[0];
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp4[1];
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  noop = tmp5[1];
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl = onClose(first[11]).intl;
  obj.children = intl.string(onClose(first[11]).t.NxPUqY);
  const items = [closure_8(onClose(first[10]).Text, obj), , ];
  const obj1 = { autoFocus: true, style: tmp.input, label: null, placeholder: null, error: null, returnKeyType: "done", onChangeText: null, onSubmitEditing: null };
  const intl2 = onClose(first[11]).intl;
  obj1.label = intl2.string(onClose(first[11]).t["4jIAa+"]);
  obj1.placeholder = onClose(first[13]).EXAMPLE_DOMAIN;
  obj1.error = tmp4[0];
  obj1.onChangeText = tmp2[1];
  obj1.onSubmitEditing = verify;
  items[1] = closure_8(require("FreeFormInputGroup"), obj1);
  const obj2 = { loading: tmp5[0], disabled: "" === first, text: null, onPress: null };
  const intl3 = onClose(first[11]).intl;
  obj2.text = intl3.string(onClose(first[11]).t.PDTjLN);
  obj2.onPress = verify;
  items[2] = closure_8(onClose(first[14]).Button, obj2);
  obj.children = items;
  return closure_9(onClose(first[9]).SafeAreaPaddingView, obj);
}
function DNSProofScreen(proof) {
  ({ onClose: require, domain } = proof);
  proof = proof.proof;
  noop = undefined;
  c5 = undefined;
  const tmp = closure_10();
  let obj = require("useNavigation");
  _slicedToArray = obj.useNavigation();
  [tmp5, c4] = _slicedToArray(noop.useState(null), 2);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [tmp7, c5] = _slicedToArray(noop.useState(false), 2);
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { variant: "text-md/normal", children: null };
  const intl = require("util").intl;
  obj.children = intl.string(require("util").t.cSURbq);
  const items = [closure_8(require("Text/Text").Text, obj), , , , ];
  const obj1 = { style: tmp.dns, children: null };
  const obj2 = { variant: "text-md/normal", children: null };
  const intl2 = require("util").intl;
  obj2.children = intl2.string(require("util").t.GL3q7k);
  const items1 = [closure_8(require("Text/Text").Text, obj2), , , , , ];
  const obj3 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: null };
  let obj6 = require("DomainVerifyUtils");
  obj3.children = obj6.getDnsName(domain);
  items1[1] = closure_8(require("Text/Text").Text, obj3);
  const obj4 = { variant: "text-md/normal", children: null };
  const intl3 = require("util").intl;
  obj4.children = intl3.string(require("util").t.Ccmixu);
  items1[2] = closure_8(require("Text/Text").Text, obj4);
  items1[3] = closure_8(require("Text/Text").Text, { variant: "text-md/normal", selectable: true, style: tmp.code, children: "TXT" });
  obj6 = { variant: "text-md/normal", children: null };
  const intl4 = require("util").intl;
  obj6.children = intl4.string(require("util").t.PVLriT);
  items1[4] = closure_8(require("Text/Text").Text, obj6);
  items1[5] = closure_8(require("Text/Text").Text, { variant: "text-md/normal", selectable: true, style: tmp.code, children: proof });
  obj1.children = items1;
  items[1] = closure_9(c5, obj1);
  let tmp9Result = null != tmp5;
  if (tmp9Result) {
    const obj8 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
    tmp9Result = closure_8(require("Text/Text").Text, obj8);
  }
  items[2] = tmp9Result;
  const obj9 = { style: tmp.button, children: null };
  const obj10 = { loading: tmp7, text: null, onPress: null };
  const intl5 = require("util").intl;
  obj10.text = intl5.string(require("util").t["13ofGu"]);
  obj10.onPress = function onPress() {
    _undefined2(true);
    _undefined(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = HTTP.post(request).then(() => {
      closure_1_0();
    });
    HTTP.post(request).then(() => {
      closure_1_0();
    }).catch((error) => {
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
    }).finally(() => {
      _undefined2(false);
    });
  };
  obj9.children = closure_8(require("components/Button/Button").Button, obj10);
  items[3] = closure_8(c5, obj9);
  const obj11 = { style: tmp.button, children: null };
  const obj12 = { variant: "secondary", text: null, onPress: null };
  const intl6 = require("util").intl;
  obj12.text = intl6.string(require("util").t.CkfdNx);
  obj12.onPress = function onPress() {
    closure_3.push(constants.PROOF_HTTP, { proof, domain });
  };
  obj11.children = closure_8(require("components/Button/Button").Button, obj12);
  items[4] = closure_8(c5, obj11);
  obj.children = items;
  return closure_9(require("common/SafeAreaView").SafeAreaPaddingView, obj);
}
function HTTPProofScreen(children) {
  ({ onClose: require, domain } = children);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_10();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  [tmp5, c3] = _slicedToArray(noop.useState(null), 2);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [tmp7, c4] = _slicedToArray(noop.useState(false), 2);
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { variant: "text-md/normal", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.p4ql7y);
  const items = [closure_8(Text_Text.Text, obj), , , , ];
  const obj1 = { style: tmp.dns, children: null };
  const obj2 = { variant: "text-md/normal", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.GL3q7k);
  const items1 = [closure_8(Text_Text.Text, obj2), , , ];
  const obj3 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: null };
  let obj6 = DomainVerifyUtils;
  obj3.children = obj6.getHttpName(domain);
  items1[1] = closure_8(Text_Text.Text, obj3);
  const obj4 = { variant: "text-md/normal", children: null };
  const intl3 = util.intl;
  obj4.children = intl3.string(util.t.PVLriT);
  items1[2] = closure_8(Text_Text.Text, obj4);
  items1[3] = closure_8(Text_Text.Text, { variant: "text-md/normal", selectable: true, style: tmp.code, children: children.proof });
  obj1.children = items1;
  items[1] = closure_9(View, obj1);
  let tmp9Result = null != tmp5;
  if (tmp9Result) {
    obj6 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
    tmp9Result = closure_8(Text_Text.Text, obj6);
  }
  items[2] = tmp9Result;
  const obj7 = { style: tmp.button, children: null };
  const obj8 = { loading: tmp7, text: null, onPress: null };
  const intl4 = util.intl;
  obj8.text = intl4.string(util.t["13ofGu"]);
  obj8.onPress = function onPress() {
    _undefined2(true);
    _undefined(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.CONNECTION(constants.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = HTTP.post(request).then(() => {
      closure_1_0();
    });
    HTTP.post(request).then(() => {
      closure_1_0();
    }).catch((error) => {
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
    }).finally(() => {
      _undefined2(false);
    });
  };
  obj7.children = closure_8(components_Button_Button.Button, obj8);
  items[3] = closure_8(View, obj7);
  const obj9 = { style: tmp.button, children: null };
  const obj10 = { variant: "secondary", text: null, onPress: null };
  const intl5 = util.intl;
  obj10.text = intl5.string(util.t.RhJMVQ);
  obj10.onPress = function onPress() {
    closure_2.pop();
  };
  obj9.children = closure_8(components_Button_Button.Button, obj10);
  items[4] = closure_8(View, obj9);
  obj.children = items;
  return closure_9(common_SafeAreaView.SafeAreaPaddingView, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ Endpoints: metroRequire, PlatformTypes: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 }, dns: null, error: null, code: null, button: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 8, marginTop: 16 };
createStyles.dns = createStyles;
createStyles.error = { marginTop: 16 };
createStyles.code = { fontFamily: "monospace", marginBottom: 4 };
createStyles.button = { marginTop: 16 };
let closure_10 = createStyles.createStyles(createStyles);
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
    let obj = {};
    obj = { headerTitle: null, headerLeft: null, render: null };
    const intl = onClose(1114).intl;
    obj.headerTitle = intl.string(onClose(1114).t["7lo8+e"]);
    let obj2 = onClose(5624);
    obj.headerLeft = obj2.getHeaderBackButton(onClose);
    obj.render = function render() {
      return React6(DomainScreen, { onClose });
    };
    obj[constants2.DOMAIN] = obj;
    obj = { headerTitle: null, headerLeft: null, render: null };
    const intl2 = onClose(1114).intl;
    obj.headerTitle = intl2.string(onClose(1114).t["7lo8+e"]);
    obj.headerLeft = onClose(5624).getHeaderBackButton(onClose);
    obj.render = function render(domain) {
      return React6(DNSProofScreen, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants2.PROOF_DNS] = obj;
    const obj1 = { headerTitle: null, headerLeft: null, render: null };
    const intl3 = onClose(1114).intl;
    obj1.headerTitle = intl3.string(onClose(1114).t["7lo8+e"]);
    const obj5 = onClose(5624);
    obj1.headerLeft = onClose(5624).getHeaderBackButton(onClose);
    obj1.render = function render(domain) {
      return React6(HTTPProofScreen, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants2.PROOF_HTTP] = obj1;
    obj2 = { screens: obj, initialRouteName: constants2.DOMAIN, headerBackTitle: null };
    const intl4 = onClose(1114).intl;
    obj2.headerBackTitle = intl4.string(onClose(1114).t["13/7kX"]);
    return closure_8(onClose(7000).Navigator, obj2);
  }
};