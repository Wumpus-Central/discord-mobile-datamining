// discord_app/modules/connections/native/DomainVerifyModal.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "NavigationStack";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function DomainScreen(onClose) {
  onClose = onClose.onClose;
  let importDefault;
  let first;
  let callback;
  let React;
  function verify() {
    callback2(true);
    callback(null);
    const HTTP = onClose(first[8]).HTTP;
    let obj = { url: outer1_6.CONNECTION(outer1_7.DOMAIN, first), body: {}, rejectWithError: false };
    const postResult = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, first), body: {}, rejectWithError: false });
    const nextPromise = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, first), body: {}, rejectWithError: false }).then(() => {
      callback();
    });
    HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, first), body: {}, rejectWithError: false }).then(() => {
      callback();
    }).catch((body) => {
      body = body.body;
      let proof;
      if (body != null) {
        proof = body.proof;
      }
      if (proof) {
        const obj = { proof: null, domain: null };
        obj[0] = body.body.proof;
        obj[1] = closure_2;
        arr = arr.push(outer1_11.PROOF_DNS, obj);
      } else {
        const body2 = body.body;
        let message;
        if (body2 != null) {
          const errors = body2.errors;
          if (errors != null) {
            const domain = errors.domain;
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
          const body3 = body.body;
          let message1;
          if (body3 != null) {
            message1 = body3.message;
          }
          message = message1;
        }
        if (!message) {
          message = body.message;
        }
        _slicedToArray(message);
        const tmp2 = _slicedToArray;
      }
    }).finally(() => {
      callback2(false);
    });
  }
  const tmp = createCacheKey();
  let obj = onClose(first[7]);
  importDefault = obj.useNavigation();
  let tmp2 = callback(React.useState(""), 2);
  first = tmp2[0];
  const tmp4 = callback(React.useState(null), 2);
  callback = tmp4[1];
  const tmp5 = callback(React.useState(false), 2);
  React = tmp5[1];
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl = onClose(first[11]).intl;
  obj[3] = intl.string(onClose(first[11]).t.NxPUqY);
  const items = [callback2(onClose(first[10]).Text, obj), , ];
  const obj1 = { autoFocus: true, style: tmp.input, label: null, placeholder: null, error: null, returnKeyType: "done", onChangeText: null, onSubmitEditing: null };
  const intl2 = onClose(first[11]).intl;
  obj1[2] = intl2.string(onClose(first[11]).t["4jIAa+"]);
  obj1[3] = onClose(first[13]).EXAMPLE_DOMAIN;
  obj1[4] = tmp4[0];
  obj1[6] = tmp2[1];
  obj1[7] = verify;
  items[1] = callback2(importDefault(first[12]), obj1);
  const obj2 = { loading: tmp5[0], disabled: "" === first, text: null, onPress: null };
  const intl3 = onClose(first[11]).intl;
  obj2[2] = intl3.string(onClose(first[11]).t.PDTjLN);
  obj2[3] = verify;
  items[2] = callback2(onClose(first[14]).Button, obj2);
  obj[2] = items;
  return callback3(onClose(first[9]).SafeAreaPaddingView, obj);
}
function DNSProofScreen(proof) {
  let c4;
  let c5;
  let domain;
  let require;
  let tmp5;
  let tmp7;
  ({ onClose: require, domain } = proof);
  proof = proof.proof;
  let callback;
  let React;
  c5 = undefined;
  const tmp = createCacheKey();
  let obj = require(proof[7]);
  callback = obj.useNavigation();
  [tmp5, c4] = callback(React.useState(null), 2);
  const tmp4 = callback(React.useState(null), 2);
  [tmp7, c5] = callback(React.useState(false), 2);
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { variant: "text-md/normal", children: null };
  const intl = require(proof[11]).intl;
  obj[1] = intl.string(require(proof[11]).t.cSURbq);
  const items = [callback2(require(proof[10]).Text, obj), , , , ];
  const obj1 = { style: tmp.dns, children: null };
  const obj2 = { variant: "text-md/normal", children: null };
  const intl2 = require(proof[11]).intl;
  obj2[1] = intl2.string(require(proof[11]).t.GL3q7k);
  const items1 = [callback2(require(proof[10]).Text, obj2), , , , , ];
  const obj3 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: null };
  let obj6 = require(proof[13]);
  obj3[3] = obj6.getDnsName(domain);
  items1[1] = callback2(require(proof[10]).Text, obj3);
  const obj4 = { variant: "text-md/normal", children: null };
  const intl3 = require(proof[11]).intl;
  obj4[1] = intl3.string(require(proof[11]).t.Ccmixu);
  items1[2] = callback2(require(proof[10]).Text, obj4);
  items1[3] = callback2(require(proof[10]).Text, { variant: "text-md/normal", selectable: true, style: tmp.code, children: "TXT" });
  obj6 = { variant: "text-md/normal", children: null };
  const intl4 = require(proof[11]).intl;
  obj6[1] = intl4.string(require(proof[11]).t.PVLriT);
  items1[4] = callback2(require(proof[10]).Text, obj6);
  items1[5] = callback2(require(proof[10]).Text, { variant: "text-md/normal", selectable: true, style: tmp.code, children: proof });
  obj1[1] = items1;
  items[1] = callback3(c5, obj1);
  let tmp9Result = null != tmp5;
  if (tmp9Result) {
    const obj8 = { variant: "text-md/normal", color: "text-feedback-critical", style: null, children: null };
    obj8[2] = tmp.error;
    obj8[3] = tmp5;
    tmp9Result = tmp9(tmp2(tmp3[10]).Text, obj8);
  }
  items[2] = tmp9Result;
  const obj9 = { style: tmp.button, children: null };
  const obj10 = { loading: tmp7, text: null, onPress: null };
  const intl5 = tmp2(tmp3[11]).intl;
  obj10[1] = intl5.string(require(proof[11]).t["13ofGu"]);
  obj10[2] = function onPress() {
    _undefined2(true);
    _undefined(null);
    const HTTP = outer1_0(proof[8]).HTTP;
    const obj = { url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false });
    const nextPromise = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      callback();
    });
    HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      callback();
    }).catch((body) => {
      body = body.body;
      let message;
      if (body != null) {
        const errors = body.errors;
        if (errors != null) {
          const domain = errors.domain;
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
        const body2 = body.body;
        let message1;
        if (body2 != null) {
          message1 = body2.message;
        }
        message = message1;
      }
      if (!message) {
        message = body.message;
      }
      noop(message);
    }).finally(() => {
      callback2(false);
    });
  };
  obj9[1] = callback2(require(proof[14]).Button, obj10);
  items[3] = callback2(c5, obj9);
  const obj11 = { style: tmp.button, children: null };
  const obj12 = { variant: "secondary", text: null, onPress: null };
  const intl6 = tmp2(tmp3[11]).intl;
  obj12[1] = intl6.string(require(proof[11]).t.CkfdNx);
  obj12[2] = function onPress() {

  };
  obj11[1] = callback2(require(proof[14]).Button, obj12);
  items[4] = callback2(c5, obj11);
  obj[2] = items;
  return callback3(require(proof[9]).SafeAreaPaddingView, obj);
}
function HTTPProofScreen(children) {
  let c3;
  let c4;
  let domain;
  let require;
  let tmp5;
  let tmp7;
  ({ onClose: require, domain } = children);
  let dependencyMap;
  let callback;
  let React;
  const tmp = createCacheKey();
  let obj = require(1480) /* useNavigation */;
  dependencyMap = obj.useNavigation();
  [tmp5, c3] = callback(React.useState(null), 2);
  const tmp4 = callback(React.useState(null), 2);
  [tmp7, c4] = callback(React.useState(false), 2);
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { variant: "text-md/normal", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.p4ql7y);
  const items = [callback2(require(4189) /* Text */.Text, obj), , , , ];
  const obj1 = { style: tmp.dns, children: null };
  const obj2 = { variant: "text-md/normal", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj2[1] = intl2.string(require(1236) /* getSystemLocale */.t.GL3q7k);
  const items1 = [callback2(require(4189) /* Text */.Text, obj2), , , ];
  const obj3 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: null };
  let obj6 = require(9009) /* EXAMPLE_DOMAIN */;
  obj3[3] = obj6.getHttpName(domain);
  items1[1] = callback2(require(4189) /* Text */.Text, obj3);
  const obj4 = { variant: "text-md/normal", children: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj4[1] = intl3.string(require(1236) /* getSystemLocale */.t.PVLriT);
  items1[2] = callback2(require(4189) /* Text */.Text, obj4);
  items1[3] = callback2(require(4189) /* Text */.Text, { variant: "text-md/normal", selectable: true, style: tmp.code, children: children.proof });
  obj1[1] = items1;
  items[1] = callback3(View, obj1);
  let tmp9Result = null != tmp5;
  if (tmp9Result) {
    obj6 = { variant: "text-md/normal", color: "text-feedback-critical", style: null, children: null };
    obj6[2] = tmp.error;
    obj6[3] = tmp5;
    tmp9Result = tmp9(tmp2(4189).Text, obj6);
  }
  items[2] = tmp9Result;
  const obj7 = { style: tmp.button, children: null };
  const obj8 = { loading: tmp7, text: null, onPress: null };
  const intl4 = tmp2(1236).intl;
  obj8[1] = intl4.string(require(1236) /* getSystemLocale */.t["13ofGu"]);
  obj8[2] = function onPress() {
    _undefined2(true);
    _undefined(null);
    const HTTP = outer1_0(arr[8]).HTTP;
    const obj = { url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false });
    const nextPromise = HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      callback();
    });
    HTTP.post({ url: outer1_6.CONNECTION(outer1_7.DOMAIN, domain), body: {}, rejectWithError: false }).then(() => {
      callback();
    }).catch((body) => {
      body = body.body;
      let message;
      if (body != null) {
        const errors = body.errors;
        if (errors != null) {
          const domain = errors.domain;
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
        const body2 = body.body;
        let message1;
        if (body2 != null) {
          message1 = body2.message;
        }
        message = message1;
      }
      if (!message) {
        message = body.message;
      }
      _slicedToArray(message);
    }).finally(() => {
      callback2(false);
    });
  };
  obj7[1] = callback2(require(4604) /* Button */.Button, obj8);
  items[3] = callback2(View, obj7);
  const obj9 = { style: tmp.button, children: null };
  const obj10 = { variant: "secondary", text: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj10[1] = intl5.string(require(1236) /* getSystemLocale */.t.RhJMVQ);
  obj10[2] = function onPress() {

  };
  obj9[1] = callback2(require(4604) /* Button */.Button, obj10);
  items[4] = callback2(View, obj9);
  obj[2] = items;
  return callback3(require(5181) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
}
({ Endpoints: closure_6, PlatformTypes: error } = ME);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 }, dns: null, error: null, code: null, button: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.xs, padding: 8, marginTop: 16 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { marginTop: 16 };
createCacheKey[5] = { fontFamily: "monospace", marginBottom: 4 };
createCacheKey[6] = { marginTop: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_11 = { DOMAIN: "DOMAIN", PROOF_DNS: "PROOF_DNS", PROOF_HTTP: "PROOF_HTTP" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/connections/native/DomainVerifyModal.tsx");

export default function DomainVerifyModal(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    function onClose(arg0) {
      return callback(table[15]).pop();
    }
    let obj = {};
    obj = { headerTitle: null, headerLeft: null, render: null };
    const intl = onClose(1236).intl;
    obj[0] = intl.string(onClose(1236).t["7lo8+e"]);
    let obj2 = onClose(5147);
    obj[1] = obj2.getHeaderBackButton(onClose);
    obj[2] = function render() {
      return outer1_8(outer1_12, { onClose });
    };
    obj[constants.DOMAIN] = obj;
    obj = { headerTitle: null, headerLeft: null, render: null };
    const intl2 = onClose(1236).intl;
    obj[0] = intl2.string(onClose(1236).t["7lo8+e"]);
    obj[1] = onClose(5147).getHeaderBackButton(onClose);
    obj[2] = function render(domain) {
      return outer1_8(outer1_13, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants.PROOF_DNS] = obj;
    const obj1 = { headerTitle: null, headerLeft: null, render: null };
    const intl3 = onClose(1236).intl;
    obj1[0] = intl3.string(onClose(1236).t["7lo8+e"]);
    const obj5 = onClose(5147);
    obj1[1] = onClose(5147).getHeaderBackButton(onClose);
    obj1[2] = function render(domain) {
      return outer1_8(outer1_14, { domain: domain.domain, proof: domain.proof, onClose });
    };
    obj[constants.PROOF_HTTP] = obj1;
    obj2 = { screens: null, initialRouteName: null, headerBackTitle: null };
    obj2[0] = obj;
    obj2[1] = constants.DOMAIN;
    const intl4 = onClose(1236).intl;
    obj2[2] = intl4.string(onClose(1236).t["13/7kX"]);
    return callback2(onClose(5574).Navigator, obj2);
  }
};