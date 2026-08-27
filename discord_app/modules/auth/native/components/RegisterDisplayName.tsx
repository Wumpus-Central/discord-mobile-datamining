// === Module 15471: RegisterDisplayName ===

// Module 15471 (RegisterDisplayName)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "isRateLimited" /* 14317 */;
import useRegistrationUIStore from "useRegistrationUIStore" /* 15450 */;
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes" /* 15451 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ updateRegistrationOptions: closure_8, useRegistrationUIStore: c9 } = useRegistrationUIStore);
({ RegisterTransitionSteps: c10, RegistrationTransitionActionTypes: unpackModuleId } = RegistrationTransitionActionTypes);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { globalName: null, button: null, page: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[2] = { flex: 1 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let closure_15 = ["discord", "hypesquad", "snowsgiving", "system message", "system mesage", "sustem mesage", "sustem message"];
let closure_16 = ["everyone", "here"];
let obj1 = { marginTop: ThemesDefault.space.PX_24 };
let result = require("set").fileFinishedImporting("modules/auth/native/components/RegisterDisplayName.tsx");

export default function RegisterDisplayName() {
  const tmp = callback3();
  let obj = _require(str[12]);
  const navigation = obj.useNavigation();
  _require = navigation;
  const tmp7 = context(callback.useState(false), 2);
  importDefault = tmp7[1];
  let tmp4 = importDefault(str[11])();
  const tmp9 = context(callback.useState(() => {
    str = state.getState().registrationOptions.globalName;
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  str = tmp9[0];
  callback = tmp9[1];
  const tmp10 = (function getGlobalNameError(str) {
    if (closure_16.includes(str)) {
      const intl2 = options(str[10]).intl;
      return intl2.string(options(str[10]).t.WeJZyy);
    } else {
      for (const item10009 of closure_15) {
        let formatted = arg0.toLowerCase();
        if (formatted.includes(item10009)) {
          let tmp3 = options;
          let tmp4 = str;
          let intl = options(str[10]).intl;
          let tmp6 = obj;
          let stringResult = intl.string(options(str[10]).t.WeJZyy);
          obj.return();
          return stringResult;
        }
      }
    }
  })(str);
  context = callback.useContext(_require(str[13]).TrackRegistrationContext);
  const tmp8 = callback2((errors) => errors.errors);
  obj1 = _require(str[15]);
  importDefault(str[14])(obj1.getPreviousRegistrationTransitionStep(_require(str[16]).AuthStates.REGISTER_DISPLAY_NAME));
  const tmp12 = importDefault(str[14]);
  importDefault(str[17])(_require(str[16]).AuthStates.REGISTER_DISPLAY_NAME);
  const items = [context];
  const effect = callback.useEffect(() => {
    context({ step: closure_1_10.ACCOUNT_DISPLAY_NAME, actionType: closure_1_11.VIEWED });
  }, items);
  const ref = callback.useRef(null);
  importDefault(str[18])({ inputRef: ref });
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback2 = tmp2;
              obj1 = { globalName: null };
              obj1[0] = callback;
              closure_2_8(obj1);
              const registrationOptions = closure_2_9.getState().registrationOptions;
              const obj2 = { step: null, actionType: null };
              obj2[0] = closure_2_10.ACCOUNT_DISPLAY_NAME;
              obj2[1] = closure_2_11.SUBMITTED;
              closure_1_4(obj2);
              let tmp6 = null != registrationOptions.username;
              if (tmp6) {
                tmp6 = "" !== registrationOptions.username;
              }
              if (!tmp6) {
                closure_1_1(true);
                if (!closure_2_7.wasRegistrationSuggestionFetched(tmp28)) {
                  obj1 = callback2(str[19]);
                  c2 = 1;
                  c3 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = obj1.fetchSuggestionsRegistration(tmp28);
                  return obj3;
                }
              }
              obj3 = callback(str[15]);
              const result = obj3.handleNextOrSubmitRegistration(callback(str[16]).AuthStates.REGISTER_DISPLAY_NAME, callback, closure_1_4);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          closure_1_1(false);
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
        const intl = closure_1_0(closure_1_2[10]).intl;
        obj[0] = intl.string(closure_1_0(closure_1_2[10]).t["5Wxrcd"]);
        obj[1] = function onPress() {
          return callback(null);
        };
        return closure_1_12(closure_1_0(closure_1_2[20]).HeaderActionButton, obj);
      }
    });
  }, items2);
  let tmp21 = importDefault(str[21])("global_name", tmp8);
  if (tmp21 == null) {
    tmp21 = tmp10;
  }
  obj = { headerText: null, children: null };
  const tmp14 = importDefault(str[17]);
  const tmp22 = closure_13;
  let intl = tmp5(tmp3[10]).intl;
  obj[0] = intl.string(_require(str[10]).t.LYIh7j);
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
  obj1[7] = intl2.string(_require(str[10]).t["9AjdkD"]);
  let stringResult;
  if (null == tmp21) {
    const intl3 = tmp5(tmp3[10]).intl;
    stringResult = intl3.string(tmp5(tmp3[10]).t.fbKwSs);
  }
  obj1[8] = stringResult;
  obj[1] = closure_12(_require(str[23]).TextInput, obj1);
  const items3 = [closure_12(View, obj), ];
  let obj2 = { style: tmp.button, children: null };
  let obj3 = { size: "lg", loading: tmp7[0], text: null, onPress: null, disabled: null };
  const intl4 = tmp5(tmp3[10]).intl;
  obj3[2] = intl4.string(_require(str[10]).t.PDTjLN);
  obj3[3] = function onPress() {
    return callback(str);
  };
  let tmp27 = null != tmp10;
  if (!tmp27) {
    tmp27 = "" === str.trim();
  }
  obj3[4] = tmp27;
  obj2[1] = closure_12(_require(str[24]).Button, obj3);
  items3[1] = closure_12(View, obj2);
  obj[1] = items3;
  const tmp22Result = tmp22(importDefault(str[22]), obj);
  let tmp24Result = tmp22Result;
  if (!tmp4) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.page;
    obj4[1] = tmp22Result;
    tmp24Result = tmp24(tmp2(tmp3[25]), obj4);
  }
  return tmp24Result;
};