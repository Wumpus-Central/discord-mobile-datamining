// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import TwoFASetupModal from "TwoFASetupModal.tsx";
import _mod14792 from "../../../../../../_runtime/metro/14792__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = {
  container: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  flex: { flex: 1 },
  image: { width: 190, height: 70 },
  success: { marginTop: 33 },
  successBody: null,
  divider: null,
  buttonWrapper: null,
  ctaDescription: null,
  errorText: null,
};
createStyles = {
  fontSize: 14,
  textAlign: "center",
  marginHorizontal: 20,
  marginTop: 4,
  color: nativeDefault.colors.TEXT_STRONG,
};
createStyles.successBody = createStyles;
let size = { height: 2, width: 48, margin: 32, backgroundColor: nativeDefault.colors.BORDER_STRONG };
createStyles.divider = size;
createStyles.buttonWrapper = { alignSelf: "stretch", margin: 16, marginTop: 0 };
createStyles.ctaDescription = {
  fontSize: 14,
  textAlign: "center",
  marginTop: 4,
  marginHorizontal: 16,
  color: nativeDefault.colors.TEXT_STRONG,
};
let obj1 = {
  fontSize: 14,
  textAlign: "center",
  marginTop: 4,
  marginHorizontal: 16,
  color: nativeDefault.colors.TEXT_STRONG,
};
createStyles.errorText = {
  fontSize: 14,
  textAlign: "center",
  marginHorizontal: 16,
  marginTop: 8,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx");

export default function TwoFASetupSuccess() {
  const tmp = closure_10();
  [tmp3, require] = _slicedToArray(noop.useState(false), 2);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp5, importDefault] = _slicedToArray(noop.useState(""), 2);
  const callback = noop.useCallback(() => {
    setRegistering = async function _onRegisterSuccess(arg0, value) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              ({ ticket: closure_129_0, credential: closure_129_1 } = closure_0);
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value, done: true };
              return obj1;
            } else {
              c4 = 1;
              const intl = setRegistering(1114).intl;
              c5 = 3;
              c6 = 1;
              const obj2 = {
                value: setRegistering(6597).finishRegisterWebAuthnCredential(
                  intl.string(setRegistering(1114).t["8H5RmH"]),
                  closure_129_0,
                  closure_129_1,
                ),
                done: false,
              };
              return obj2;
            }
          } else {
            if (2 === tmp8) {
              c4 = 0;
              tmp5(tmp19.body.message);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              obj = setError(14781);
              obj.close();
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          }
        } catch (tmp19) {
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp19;
          } else {
            c5 = tmp;
          }
        }
      }
    };
    setError("");
    setError(dependencyMap[10]);
    let obj = {
      setRegistering,
      setError,
      onRegisterSuccess(arg0) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
    };
    obj.registerPasskey(obj);
  }, []);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.flex };
  const items = [closure_8(closure_6, obj), , , , , , ,];
  obj = { source: _mod14792, style: tmp.image };
  items[1] = closure_8(closure_7, obj);
  let obj1 = { style: tmp.success, variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = util.intl;
  obj1.children = intl.string(util.t.Awk3Gw);
  items[2] = closure_8(Text_Text.Text, obj1);
  let obj2 = { style: tmp.successBody, children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t["0d1bXM"]);
  items[3] = closure_8(native.LegacyText, obj2);
  items[4] = closure_8(closure_6, { style: tmp.divider });
  const obj4 = { style: tmp.ctaDescription, children: null };
  const intl3 = util.intl;
  obj4.children = intl3.string(util.t.okgGTu);
  items[5] = closure_8(native.LegacyText, obj4);
  const obj5 = { style: tmp.buttonWrapper, children: null };
  const intl4 = util.intl;
  const string = intl4.string;
  const t = util.t;
  if (tmp3) {
    let stringResult = string(t.wePEBF);
  } else {
    stringResult = string(t.NIFmCJ);
  }
  const items1 = [
    closure_8(components_Button_Button.Button, {
      text: stringResult,
      onPress: callback,
      disabled: tmp3,
      loading: tmp3,
      grow: true,
    }),
  ];
  let tmp7Result = "" !== tmp5;
  if (tmp7Result) {
    const obj6 = { style: tmp.errorText, children: tmp5 };
    tmp7Result = tmp7(native.LegacyText, obj6);
  }
  const obj7 = { children: null };
  items1[1] = tmp7Result;
  obj5.children = items1;
  items[6] = closure_9(closure_6, obj5);
  items[7] = closure_8(closure_6, { style: tmp.flex });
  obj.children = items;
  obj7.children = closure_9(closure_6, obj);
  return closure_8(TwoFASetupModal.TwoFASetupModalScreen, obj7);
}
