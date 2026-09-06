// === Module 12738: HubEmailConnectionPinVerify ===

// Module 12738 (HubEmailConnectionPinVerify)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import _modDef9883 from "module_9883" /* 9883 */;
import HubJoinManagerDefault from "HubJoinManager" /* 12739 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
function presentResendToast(content) {
  const obj = { key: "HUB_EMAIL_RESET", content, icon: _modDef9883 };
  obj.open(obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ container: { alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 24 }, label: { textAlign: "center", marginBottom: 12 }, error: { alignSelf: "center", marginVertical: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionPinVerify.tsx");

export default function HubEmailConnectionPinVerify(email) {
  email = email.email;
  ({ guildId: importDefault, onClose } = email);
  _slicedToArray = undefined;
  asyncGeneratorStep = async function _handleCodeEntered(arg0) {
    await closure_1(tmp3[12]).verifyCode(closure_0, closure_2_1, email);
    if (1 === tmp7) {
      c4 = 0;
      closure_129_1 = closure_3;
      const aPIError = new email(tmp3[14]).APIError(closure_129_1);
      closure_130_3(aPIError);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const guild2 = guild.getGuild(closure_130_1);
      if (null != guild2) {
        closure_130_2(true);
        email(tmp3[15]).transitionToGuild(guild2.id);
        email(tmp3[15]);
      }
      c4 = 0;
    }
    return value;
  };
  const tmp = closure_11();
  const items = [onClose];
  const effect = noop.useEffect(() => {
    HubJoinManagerDefault.initialize(() => {
      dependencyMap(true);
      require("navigateToLastChannel")();
    });
    return () => {
      closure_1_1(12739).terminate();
    };
  }, items);
  let obj = require("module_12");
  const throttleResult = obj.throttle(asyncGeneratorStep(async () => {
    await closure_1(tmp3[12]).sendVerificationEmail(email, true, importDefault);
    if (1 === tmp7) {
      c4 = 0;
      closure_129_1 = closure_3;
      const aPIError = new email(tmp3[14]).APIError(closure_129_1);
      closure_129_0 = aPIError;
      let anyErrorMessage;
      if (closure_129_0 != null) {
        anyErrorMessage = obj1.getAnyErrorMessage();
      }
      email = anyErrorMessage;
      if (anyErrorMessage == null) {
        const intl2 = email(tmp3[13]).intl;
        email = intl2.string(email(tmp3[13]).t.FPzC5z);
      }
      presentResendToast(email);
      c6 = 3;
      obj1 = closure_129_0;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const intl = email(tmp3[13]).intl;
      presentResendToast(intl.string(email(tmp3[13]).t["2bO4dz"]));
      c4 = 0;
    }
    return value;
  }), 1000);
  [obj2, c3] = _slicedToArray(noop.useState(null), 2);
  obj = { style: tmp.container, children: null };
  obj = { source: require("module_12740") };
  const items1 = [closure_9(closure_7, obj), , , , , ];
  let obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = email(onClose[13]).intl;
  obj1.children = intl.string(email(onClose[13]).t.SJ3Lxc);
  items1[1] = closure_9(email(onClose[18]).Text, obj1);
  obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = email(onClose[13]).intl;
  obj2.children = intl2.format(email(onClose[13]).t["b+W0oq"], { onClick: throttleResult, email });
  items1[2] = closure_9(email(onClose[18]).Text, obj2);
  const obj3 = { style: tmp.label, variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl3 = email(onClose[13]).intl;
  obj3.children = intl3.string(email(onClose[13]).t.rpWT1s);
  items1[3] = closure_9(email(onClose[18]).Text, obj3);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  const tmp7 = email;
  items1[4] = closure_9(email(onClose[19]).CodeBlocks, {
    hasError: false,
    count: 8,
    onCodeEntered: function handleCodeEntered(arg0) {
      const self = this;
      const apply = closure_4.apply;
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
    const obj5 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp.error, children: obj1.getAnyErrorMessage() };
    tmp6Result = closure_9(tmp7(onClose[18]).Text, obj5);
  }
  const obj4 = {
    hasError: false,
    count: 8,
    onCodeEntered: function handleCodeEntered(arg0) {
      const self = this;
      const apply = closure_4.apply;
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
  obj.children = items1;
  return closure_9(email(onClose[16]).HubEmailConnectionScreen, { children: closure_10(closure_6, obj) });
};