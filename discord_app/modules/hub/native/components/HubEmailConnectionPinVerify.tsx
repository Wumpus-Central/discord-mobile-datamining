// discord_app/modules/hub/native/components/HubEmailConnectionPinVerify.tsx
import _slicedToArray from "_slicedToArray";
import closure_4 from "jsxProd";
import SingleCodeInput from "SingleCodeInput";
import get_ActivityIndicator from "registerAsset";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/09057_registerAsset.js";
import { dispatcher } from "../../../toast/native/ToastActionCreators.tsx";

let c10;
let c9;
let closure_6;
let error;
const require = arg1;
function presentResendToast(content) {
  let obj = dispatcher;
  obj = { key: "HUB_EMAIL_RESET", content, icon: registerAsset };
  obj.open(obj);
}
({ View: closure_6, Image: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ container: { alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 24 }, label: { textAlign: "center", marginBottom: 12 }, error: { alignSelf: "center", marginVertical: 8 } });
const result = require("noop").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionPinVerify.tsx");

export default function HubEmailConnectionPinVerify(email) {
  let c3;
  let importDefault;
  let obj2;
  let onClose;
  email = email.email;
  ({ guildId: importDefault, onClose } = email);
  let callback;
  function _handleCodeEntered(arg0) {
    const self = this;
    const tmp = _handleCodeEntered((arg0) => {
      let closure_0 = arg0;
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*(arg0) {
        const callback = tmp3;
        let c4 = 1;
        const obj2 = outer1_1(outer1_2[12]);
        yield obj2.verifyCode(lib, outer1_1, lib);
        if (1 === tmp7) {
          c4 = 0;
          let closure_1 = _slicedToArray;
          const aPIError = new lib(outer1_2[14]).APIError(closure_1);
          outer1_3(aPIError);
          let c6 = 3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          lib = outer1_8.getGuild(closure_1);
          if (null != lib) {
            callback(true);
            const obj = lib(outer1_2[15]);
            obj.transitionToGuild(lib.id);
          }
          c4 = 0;
        }
        c4 = 0;
        return arg1;
      })();
    });
    _handleCodeEntered = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  const items = [onClose];
  const effect = React.useEffect(() => {
    outer1_1(onClose[9]).initialize(() => {
      dependencyMap(true);
      outer1_1(outer1_2[10])();
    });
    return () => {
      callback(12027).terminate();
    };
  }, items);
  let obj = importDefault(onClose[11]);
  const throttleResult = obj.throttle(_handleCodeEntered(function*() {
    let closure_2 = tmp3;
    let c4 = 1;
    yield outer1_1(outer1_2[12]).sendVerificationEmail(outer1_0, true, outer1_1);
    if (1 === tmp7) {
      c4 = 0;
      outer1_1 = _slicedToArray;
      const aPIError = new outer1_0(outer1_2[14]).APIError(outer1_1);
      outer1_0 = aPIError;
      const obj1 = outer1_0;
      let anyErrorMessage;
      if (outer1_0 != null) {
        anyErrorMessage = obj1.getAnyErrorMessage();
      }
      let closure_0 = anyErrorMessage;
      if (anyErrorMessage == null) {
        const intl2 = outer1_0(outer1_2[13]).intl;
        closure_0 = intl2.string(outer1_0(outer1_2[13]).t.FPzC5z);
      }
      outer1_12(closure_0);
      let c6 = 3;
      const tmp26 = outer1_12;
    } else if (arg0 === 1) {
      c6 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const intl = outer1_0(outer1_2[13]).intl;
      outer1_12(intl.string(outer1_0(outer1_2[13]).t["2bO4dz"]));
      c4 = 0;
    }
    c4 = 0;
    return arg1;
  }), 1000);
  const tmp3 = onClose;
  [obj2, c3] = callback(React.useState(null), 2);
  obj = { style: tmp.container, children: null };
  obj = { source: null };
  obj[0] = importDefault(onClose[17]);
  const items1 = [callback2(closure_7, obj), , , , , ];
  let obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = email(onClose[13]).intl;
  obj1[4] = intl.string(email(onClose[13]).t.SJ3Lxc);
  items1[1] = callback2(email(onClose[18]).Text, obj1);
  obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = email(onClose[13]).intl;
  obj2[3] = intl2.format(email(onClose[13]).t["b+W0oq"], { onClick: throttleResult, email });
  items1[2] = callback2(email(onClose[18]).Text, obj2);
  const obj3 = { style: tmp.label, variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl3 = email(onClose[13]).intl;
  obj3[3] = intl3.string(email(onClose[13]).t.rpWT1s);
  items1[3] = callback2(email(onClose[18]).Text, obj3);
  const obj4 = {
    hasError: false,
    count: 8,
    onCodeEntered: function handleCodeEntered(arg0) {
      const self = this;
      const apply = _handleCodeEntered.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    codeType: null
  };
  obj4[3] = email(onClose[19]).CodeType.ALPHANUMERIC;
  items1[4] = callback2(email(onClose[19]).CodeBlocks, obj4);
  let tmp6Result = null != obj1;
  if (tmp6Result) {
    const obj5 = { variant: "text-sm/medium", color: "text-feedback-critical", style: null, children: null };
    obj5[2] = tmp.error;
    obj5[3] = obj1.getAnyErrorMessage();
    tmp6Result = tmp6(tmp7(tmp3[18]).Text, obj5);
  }
  const tmp5 = callback(React.useState(null), 2);
  tmp7 = email;
  const tmp8 = closure_10;
  const tmp9 = closure_6;
  items1[5] = tmp6Result;
  obj[1] = items1;
  return callback2(email(onClose[16]).HubEmailConnectionScreen, { children: closure_10(closure_6, obj) });
};