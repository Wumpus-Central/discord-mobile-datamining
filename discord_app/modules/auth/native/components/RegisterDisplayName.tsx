// === Module 15967: RegisterDisplayName ===

// Module 15967 (RegisterDisplayName)
import nativeDefault from "native" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14709 */;

const require = fn;
const View = fn(17).View;
const RegistrationUIStore = fn(15946);
({ updateRegistrationOptions: closure_8, useRegistrationUIStore: closure_9 } = RegistrationUIStore);
const RegistrationConstants = fn(15947);
({ RegisterTransitionSteps: c10, RegistrationTransitionActionTypes: closure_11 } = RegistrationConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { globalName: null, button: null, page: null };
createStyles = { marginTop: nativeDefault.space.PX_24 };
createStyles.globalName = createStyles;
createStyles.button = { marginTop: nativeDefault.space.PX_24 };
createStyles.page = { flex: 1 };
let closure_14 = createStyles.createStyles(createStyles);
let closure_15 = ["discord", "hypesquad", "snowsgiving", "system message", "system mesage", "sustem mesage", "sustem message"];
let closure_16 = ["everyone", "here"];
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterDisplayName.tsx");

export default function RegisterDisplayName() {
  const tmp = closure_14();
  let obj = require("useNavigation");
  const navigation = obj.useNavigation();
  _require = navigation;
  const tmp7 = context(callback.useState(false), 2);
  importDefault = tmp7[1];
  let tmp4 = require("useWideAuthView")();
  const tmp9 = context(callback.useState(() => {
    str = closure_1_9.getState().registrationOptions.globalName;
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  str = tmp9[0];
  asyncGeneratorStep = tmp9[1];
  const tmp10 = (function getGlobalNameError(str) {
    if (closure_1_16.includes(str)) {
      const intl2 = options(str[10]).intl;
      return intl2.string(options(str[10]).t.WeJZyy);
    } else {
      for (const item10009 of closure_1_15) {
        let formatted = arg0.toLowerCase();
        if (formatted.includes(item10009)) {
          let intl = options(str[10]).intl;
          let stringResult = intl.string(options(str[10]).t.WeJZyy);
          obj.return();
          return stringResult;
        }
      }
    }
  })(str);
  context = callback.useContext(require("Auth").TrackRegistrationContext);
  const tmp8 = closure_9((errors) => errors.errors);
  let obj1 = require("RegistrationStepsUtils");
  require("useAuthFlowBackHandler")(obj1.getPreviousRegistrationTransitionStep(require("ConstantsIOS").AuthStates.REGISTER_DISPLAY_NAME));
  const tmp12 = require("useAuthFlowBackHandler");
  require("useInitialRegistrationStep")(require("ConstantsIOS").AuthStates.REGISTER_DISPLAY_NAME);
  const items = [context];
  const effect = callback.useEffect(() => {
    context({ step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.VIEWED });
  }, items);
  const ref = callback.useRef(null);
  require("useFocusRefOnNavigation")({ inputRef: ref });
  _require = asyncGeneratorStep(async (globalName) => {
    c2 = 0;
    c3 = 0;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let obj1 = { globalName };
              closure_2_8(obj1);
              const registrationOptions = closure_2_9.getState().registrationOptions;
              const obj2 = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.SUBMITTED };
              context(obj2);
              let tmp6 = null != registrationOptions.username;
              if (tmp6) {
                tmp6 = "" !== registrationOptions.username;
              }
              if (!tmp6) {
                tmp2(true);
                if (!UniqueUsernamesStore.wasRegistrationSuggestionFetched(tmp27)) {
                  obj1 = tmp2(str[19]);
                  c2 = 1;
                  c3 = 1;
                  let obj3 = { value: obj1.fetchSuggestionsRegistration(tmp27), done: false };
                  return obj3;
                }
              }
              obj3 = globalName(str[15]);
              const result = obj3.handleNextOrSubmitRegistration(globalName(str[16]).AuthStates.REGISTER_DISPLAY_NAME, globalName, context);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
          tmp2(false);
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
        }
      }
    })();
  });
  const items1 = [navigation, context];
  callback = callback.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [callback, navigation];
  const layoutEffect = callback.useLayoutEffect(() => {
    options.setOptions({
      headerRight() {
        const obj = { text: null, onPress: null };
        const intl = closure_0(str[10]).intl;
        obj.text = intl.string(closure_0(str[10]).t["5Wxrcd"]);
        obj.onPress = function onPress() {
          return closure_1_5(null);
        };
        return closure_2_12(closure_0(str[20]).HeaderActionButton, obj);
      }
    });
  }, items2);
  let tmp21 = require("getError")("global_name", tmp8);
  if (tmp21 == null) {
    tmp21 = tmp10;
  }
  obj = { headerText: null, children: null };
  const tmp14 = require("useInitialRegistrationStep");
  const tmp22 = closure_13;
  let intl = tmp5(tmp3[10]).intl;
  obj.headerText = intl.string(require("util").t.LYIh7j);
  obj = { style: tmp.globalName, children: null };
  obj1 = {
    ref,
    value: str,
    onChange(str) {
      str = "";
      closure_3(str);
    },
    returnKeyType: "next",
    onSubmitEditing() {
      return callback(str);
    },
    textContentType: "nickname",
    errorMessage: tmp21,
    label: null,
    description: null,
    isClearable: true
  };
  let intl2 = tmp5(tmp3[10]).intl;
  obj1.label = intl2.string(require("util").t["9AjdkD"]);
  let stringResult;
  if (null == tmp21) {
    const intl3 = tmp5(tmp3[10]).intl;
    stringResult = intl3.string(tmp5(tmp3[10]).t.fbKwSs);
  }
  obj1.description = stringResult;
  obj.children = closure_12(require("TextInput").TextInput, obj1);
  const items3 = [closure_12(View, obj), ];
  let obj2 = { style: tmp.button, children: null };
  let obj3 = { size: "lg", loading: tmp7[0], text: null, onPress: null, disabled: null };
  const intl4 = tmp5(tmp3[10]).intl;
  obj3.text = intl4.string(require("util").t.PDTjLN);
  obj3.onPress = function onPress() {
    return callback(str);
  };
  let tmp27 = null != tmp10;
  if (!tmp27) {
    tmp27 = "" === str.trim();
  }
  obj3.disabled = tmp27;
  obj2.children = closure_12(require("components/Button/Button").Button, obj3);
  items3[1] = closure_12(View, obj2);
  obj.children = items3;
  const tmp22Result = tmp22(require("AuthFormView"), obj);
  let tmp24Result = tmp22Result;
  if (!tmp4) {
    const obj4 = { style: tmp.page, children: tmp22Result };
    tmp24Result = tmp24(tmp2(tmp3[25]), obj4);
  }
  return tmp24Result;
};