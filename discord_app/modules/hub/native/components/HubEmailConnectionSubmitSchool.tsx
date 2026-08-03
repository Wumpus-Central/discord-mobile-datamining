import ME from "ME";
import _slicedToArray from "_slicedToArray";
import set from "set";
import get_ActivityIndicator from "module_9181";
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_6;
let error;
const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: { paddingHorizontal: 16 }, title: null, description: null, scrollViewContainer: null, input: null, redesignTextInput: null, redesignGrowSpacing: null, redesignSubmit: null };
createCacheKey = { fontFamily: require("ME").Fonts.PRIMARY_BOLD, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center", marginBottom: 24 };
createCacheKey[3] = { flexGrow: 2 };
createCacheKey[4] = { marginBottom: 8 };
createCacheKey[5] = { borderRadius: require("Themes").radii.lg };
let obj1 = { borderRadius: require("Themes").radii.lg };
createCacheKey[6] = { flexGrow: 2, minHeight: require("Themes").space.PX_24 };
let obj2 = { flexGrow: 2, minHeight: require("Themes").space.PX_24 };
createCacheKey[7] = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { paddingHorizontal: require("Themes").space.PX_16 };
const result = require("noop").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionSubmitSchool.tsx");

export default function HubEmailConnectionSubmitSchool(arg0) {
  let c4;
  let importDefault;
  let obj2;
  let require;
  ({ onClose: require, email: importDefault } = arg0);
  let dependencyMap;
  let ME;
  let callback;
  let ref;
  let first;
  function _submitWaitlist() {
    const self = this;
    const tmp = callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c5 = 2;
          if (0 === v02) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp4;
              let closure_0 = tmp8;
              v02(null);
              let v0 = 2;
              v0(true);
              let obj2 = outer1_1(outer1_2[11]);
              v02 = 3;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.signup(outer1_1, outer1_6);
              return obj1;
            }
          } else if (1 === tmp8) {
            v0 = 0;
            v0(false);
            throw arr;
          } else {
            if (2 === tmp8) {
              v0 = 1;
              const outer1_0 = arr;
              const aPIError = new outer1_0(outer1_2[12]).APIError(outer1_0);
              v02(aPIError);
              v0 = 0;
              v0(false);
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              obj = { school: null, onClose: null };
              obj[0] = closure_6;
              obj[1] = closure_0;
              arr = arr.push(outer1_8.EMAIL_WAITLIST, obj);
              v0 = 1;
            }
            v0 = 0;
            v0(false);
            c5 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          }
        } catch (tmp47) {
          arr = tmp47;
          if (tmp5 === v0) {
            c5 = tmp3;
            throw tmp47;
          } else if (tmp2 === tmp49) {
            v02 = tmp2;
          } else {
            v02 = tmp;
          }
        }
      }
    });
    const _submitWaitlist = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  let obj = require(1480) /* useNavigation */;
  dependencyMap = obj.useNavigation();
  const tmp4 = callback(ref.useState(false), 2);
  ME = tmp4[1];
  [obj2, c4] = callback(ref.useState(null), 2);
  ref = ref.useRef(null);
  const tmp7 = callback(ref.useState(""), 2);
  first = tmp7[0];
  obj = { ref, contentContainerStyle: null, children: null };
  const items = [tmp.scrollViewContainer, ];
  obj = { paddingBottom: null };
  obj[0] = importDefault(5281)().insets.bottom + importDefault(712).space.PX_16;
  items[1] = obj;
  obj[1] = items;
  let obj1 = { style: tmp.container, children: null };
  obj2 = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj2[2] = intl.string(require(1236) /* getSystemLocale */.t["2FNWBG"]);
  const items1 = [callback2(require(1297) /* Button */.LegacyText, obj2), , ];
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj3[3] = intl2.string(require(1236) /* getSystemLocale */.t["/4y6ox"]);
  items1[1] = callback2(require(4251) /* Text */.Text, obj3);
  const obj4 = { label: null, placeholder: null, value: null, onChangeText: null, style: null, textStyle: null, clearButtonVisibility: null, error: null, onFocus: null, onBlur: null };
  const tmp11 = _submitWaitlist;
  const tmp5 = callback(ref.useState(null), 2);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl3.string(require(1236) /* getSystemLocale */.t["L+AfJr"]);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj4[1] = intl4.string(require(1236) /* getSystemLocale */.t.Y1btJd);
  obj4[2] = first;
  obj4[3] = tmp7[1];
  ({ input: obj8[4], redesignTextInput: obj8[5] } = tmp);
  obj4[6] = require(1297) /* Button */.ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (obj1 != null) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  const obj5 = { children: null };
  obj4[7] = anyErrorMessage;
  obj4[8] = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj4[9] = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items1[2] = callback2(importDefault(9181), obj4);
  obj1[1] = items1;
  const items2 = [closure_10(first, obj1), callback2(first, { style: tmp.redesignGrowSpacing }), ];
  const obj7 = { style: tmp.redesignSubmit, children: null };
  const obj8 = { size: "lg", loading: tmp4[0], text: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj8[2] = intl5.string(require(1236) /* getSystemLocale */.t.PDsYAo);
  obj8[3] = function submitWaitlist() {
    const self = this;
    const apply = _submitWaitlist.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj7[1] = callback2(require(4666) /* Button */.Button, obj8);
  items2[2] = callback2(first, obj7);
  obj[2] = items2;
  obj5[0] = closure_10(tmp11, obj);
  return callback2(require(11939) /* HubEmailConnectionModal */.HubEmailConnectionScreen, obj5);
};