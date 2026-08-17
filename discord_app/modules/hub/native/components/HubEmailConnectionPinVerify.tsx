// discord_app/modules/hub/native/components/HubEmailConnectionPinVerify.tsx
import dispatcherDefault from "dispatcher" /* 4094 */;
import registerAssetDefault from "registerAsset" /* 11917 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function presentResendToast(content) {
  let obj = dispatcherDefault;
  obj = { key: "HUB_EMAIL_RESET", content, icon: registerAssetDefault };
  obj.open(obj);
}
({ View: closure_6, Image: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ container: { alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 24 }, label: { textAlign: "center", marginBottom: 12 }, error: { alignSelf: "center", marginVertical: 8 } });
const result = require("set").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionPinVerify.tsx");

export default function HubEmailConnectionPinVerify(email) {
  email = email.email;
  ({ guildId: importDefault, onClose } = email);
  let callback;
  function _handleCodeEntered(arg0) {
    const self = this;
    const tmp = _handleCodeEntered((arg0) => {
      closure_0 = arg0;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      return (function*(arg0) {
        const callback = tmp3;
        c4 = 1;
        const obj2 = closure_1_1(closure_1_2[12]);
        yield obj2.verifyCode(lib, closure_1_1, lib);
        if (1 === tmp7) {
          c4 = 0;
          closure_1 = closure_3;
          const aPIError = new lib(closure_1_2[14]).APIError(closure_1);
          closure_1_3(aPIError);
          c6 = 3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          lib = closure_1_8.getGuild(closure_1);
          if (null != lib) {
            callback(true);
            const obj = lib(closure_1_2[15]);
            obj.transitionToGuild(lib.id);
          }
          c4 = 0;
        }
        c4 = 0;
        return arg1;
      })();
    });
    closure_4 = tmp;
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
    closure_1_1(onClose[9]).initialize(() => {
      dependencyMap(true);
      closure_1_1(closure_1_2[10])();
    });
    return () => {
      callback(11918).terminate();
    };
  }, items);
  let obj = importDefault(onClose[11]);
  const throttleResult = obj.throttle(_handleCodeEntered(function*() {
    closure_2 = tmp3;
    c4 = 1;
    yield callback(closure_1_2[12]).sendVerificationEmail(aPIError, true, callback);
    if (1 === tmp7) {
      c4 = 0;
      callback = closure_3;
      aPIError = new aPIError(closure_1_2[14]).APIError(callback);
      obj1 = aPIError;
      let anyErrorMessage;
      if (aPIError != null) {
        anyErrorMessage = obj1.getAnyErrorMessage();
      }
      closure_0 = anyErrorMessage;
      if (anyErrorMessage == null) {
        const intl2 = aPIError(closure_1_2[13]).intl;
        closure_0 = intl2.string(aPIError(closure_1_2[13]).t.FPzC5z);
      }
      closure_1_12(closure_0);
      c6 = 3;
      const tmp26 = closure_1_12;
    } else if (arg0 === 1) {
      c6 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const intl = aPIError(closure_1_2[13]).intl;
      closure_1_12(intl.string(aPIError(closure_1_2[13]).t["2bO4dz"]));
      c4 = 0;
    }
    c4 = 0;
    return arg1;
  }), 1000);
  const tmp3 = onClose;
  [obj2, c3] = callback(React.useState(null), 2);
  obj = { style: tmp.container, children: null };
  obj = { source: importDefault(onClose[17]) };
  const items1 = [callback2(closure_7, obj), , , , , ];
  obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
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
  const tmp5 = callback(React.useState(null), 2);
  const tmp7 = email;
  const tmp8 = closure_10;
  const tmp9 = closure_6;
  items1[4] = callback2(email(onClose[19]).CodeBlocks, {
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
    codeType: email(onClose[19]).CodeType.ALPHANUMERIC
  });
  let tmp6Result = null != obj1;
  if (tmp6Result) {
    const obj5 = { variant: "text-sm/medium", color: "text-feedback-critical", style: null, children: null };
    obj5[2] = tmp.error;
    obj5[3] = obj1.getAnyErrorMessage();
    tmp6Result = tmp6(tmp7(tmp3[18]).Text, obj5);
  }
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
    codeType: email(onClose[19]).CodeType.ALPHANUMERIC
  };
  items1[5] = tmp6Result;
  obj[1] = items1;
  return callback2(email(onClose[16]).HubEmailConnectionScreen, { children: tmp8(tmp9, obj) });
};