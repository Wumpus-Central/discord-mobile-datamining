// === Module 11962: CreateGuild ===

// Module 11962 (CreateGuild)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import react_native2 from "react-native" /* 5779 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj1, tmp2, tmp5, tmp6;

let metroImportAll;
let metroImportDefault;
let obj2;
const ScrollView = react_native.ScrollView;
const MarketingURLs = Constants.MarketingURLs;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { flex: { flex: 1 }, contentContainer: obj2, header: { textAlign: "center" }, description: { lineHeight: 18, textAlign: "center", marginBottom: 24 }, iconUploader: { alignSelf: "center", marginBottom: 4 }, hint: { marginBottom: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingBottom: 16 };
let closure_9 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let autoFocus;
  let customButtonLabel;
  let customDescription;
  let customTitle;
  let error;
  let guild;
  let isScreenReaderEnabled;
  let onCreate;
  let onIconPress;
  let onNameChange;
  let onStaffOnlyChange;
  let submitting;
  let tmp12;
  let tmp = isScreenReaderEnabled;
  let obj = isScreenReaderEnabled(576);
  const cResult = obj.c(56);
  ({ guild, onIconPress, onNameChange, onStaffOnlyChange, onCreate, submitting, error, customTitle, customDescription, customButtonLabel, autoFocus } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    cResult[0] = isStaffResult;
    let first = isStaffResult;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(5770);
  isScreenReaderEnabled = tmpResult.useIsScreenReaderEnabled();
  const ref = react.useRef(null);
  if (cResult[1] !== isScreenReaderEnabled) {
    class R {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = null;
          tmp = null != closure_1.current;
        }
        if (tmp) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[10]);
          obj1 = { ref: null, delay: 100 };
          tmp6 = closure_1;
          obj1.ref = closure_1;
          result = obj.setAccessibilityFocus(obj1);
        }
        return;
      }
    }
    const items = [isScreenReaderEnabled];
    cResult[1] = isScreenReaderEnabled;
    cResult[2] = R;
    cResult[3] = items;
    tmp12 = items;
  } else {
    class R {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = null;
          tmp = null != closure_1.current;
        }
        if (tmp) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[10]);
          obj1 = { ref: null, delay: 100 };
          tmp6 = closure_1;
          obj1.ref = closure_1;
          result = obj.setAccessibilityFocus(obj1);
        }
        return;
      }
    }
    tmp12 = cResult[3];
  }
  const effect = react.useEffect(R, tmp12);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = null;
          tmp = null != closure_1.current;
        }
        if (tmp) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[10]);
          obj1 = { ref: null, delay: 100 };
          tmp6 = closure_1;
          obj1.ref = closure_1;
          result = obj.setAccessibilityFocus(obj1);
        }
        return;
      }
    }
    cResult[4] = tmp15;
  } else {
    class R {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = null;
          tmp = null != closure_1.current;
        }
        if (tmp) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[10]);
          obj1 = { ref: null, delay: 100 };
          tmp6 = closure_1;
          obj1.ref = closure_1;
          result = obj.setAccessibilityFocus(obj1);
        }
        return;
      }
    }
  }
  if (cResult[5] !== customTitle) {
    let stringResult;
    class R {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = null;
          tmp = null != closure_1.current;
        }
        if (tmp) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[10]);
          obj1 = { ref: null, delay: 100 };
          tmp6 = closure_1;
          obj1.ref = closure_1;
          result = obj.setAccessibilityFocus(obj1);
        }
        return;
      }
    }
    if (customTitle == null) {
      class R {
        constructor() {
          tmp = closure_0;
          if (tmp) {
            tmp2 = closure_1;
            tmp3 = null;
            tmp = null != closure_1.current;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[10]);
            obj1 = { ref: null, delay: 100 };
            tmp6 = closure_1;
            obj1.ref = closure_1;
            result = obj.setAccessibilityFocus(obj1);
          }
          return;
        }
      }
      stringResult = obj5.string(tmp(1126).t.XioBx6);
    }
    cResult[5] = customTitle;
    cResult[6] = stringResult;
  } else {
    class R {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = null;
          tmp = null != closure_1.current;
        }
        if (tmp) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[10]);
          obj1 = { ref: null, delay: 100 };
          tmp6 = closure_1;
          obj1.ref = closure_1;
          result = obj.setAccessibilityFocus(obj1);
        }
        return;
      }
    }
  }
  if (cResult[7] === tmp4.header) {
    class R {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = null;
          tmp = null != closure_1.current;
        }
        if (tmp) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[10]);
          obj1 = { ref: null, delay: 100 };
          tmp6 = closure_1;
          obj1.ref = closure_1;
          result = obj.setAccessibilityFocus(obj1);
        }
        return;
      }
    }
    if (cResult[10] !== customDescription) {
      let stringResult1;
      class R {
        constructor() {
          tmp = closure_0;
          if (tmp) {
            tmp2 = closure_1;
            tmp3 = null;
            tmp = null != closure_1.current;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[10]);
            obj1 = { ref: null, delay: 100 };
            tmp6 = closure_1;
            obj1.ref = closure_1;
            result = obj.setAccessibilityFocus(obj1);
          }
          return;
        }
      }
      if (customDescription == null) {
        class R {
          constructor() {
            tmp = closure_0;
            if (tmp) {
              tmp2 = closure_1;
              tmp3 = null;
              tmp = null != closure_1.current;
            }
            if (tmp) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[10]);
              obj1 = { ref: null, delay: 100 };
              tmp6 = closure_1;
              obj1.ref = closure_1;
              result = obj.setAccessibilityFocus(obj1);
            }
            return;
          }
        }
        stringResult1 = obj7.string(tmp(1126).t["/k/L/j"]);
      }
      cResult[10] = customDescription;
      cResult[11] = stringResult1;
    } else {
      class R {
        constructor() {
          tmp = closure_0;
          if (tmp) {
            tmp2 = closure_1;
            tmp3 = null;
            tmp = null != closure_1.current;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[10]);
            obj1 = { ref: null, delay: 100 };
            tmp6 = closure_1;
            obj1.ref = closure_1;
            result = obj.setAccessibilityFocus(obj1);
          }
          return;
        }
      }
    }
    if (cResult[12] === tmp4.description) {
      class R {
        constructor() {
          tmp = closure_0;
          if (tmp) {
            tmp2 = closure_1;
            tmp3 = null;
            tmp = null != closure_1.current;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[10]);
            obj1 = { ref: null, delay: 100 };
            tmp6 = closure_1;
            obj1.ref = closure_1;
            result = obj.setAccessibilityFocus(obj1);
          }
          return;
        }
      }
      if (cResult[15] === guild.icon) {
        class R {
          constructor() {
            tmp = closure_0;
            if (tmp) {
              tmp2 = closure_1;
              tmp3 = null;
              tmp = null != closure_1.current;
            }
            if (tmp) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[10]);
              obj1 = { ref: null, delay: 100 };
              tmp6 = closure_1;
              obj1.ref = closure_1;
              result = obj.setAccessibilityFocus(obj1);
            }
            return;
          }
        }
      }
      let obj2 = { iconBackgroundColor: tmp4.contentContainer.backgroundColor, style: tmp4.iconUploader, onPress: onIconPress, icon: guild.icon };
      cResult[15] = guild.icon;
      cResult[16] = onIconPress;
      cResult[17] = tmp4.contentContainer.backgroundColor;
      cResult[18] = tmp4.iconUploader;
      cResult[19] = closure_7(ref(11409), obj2);
      const tmp27 = closure_7(ref(11409), obj2);
    }
    const obj3 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp19 };
    cResult[12] = tmp4.description;
    cResult[13] = tmp19;
    cResult[14] = closure_7(tmp(4886).Text, obj3);
    const tmp23 = closure_7(tmp(4886).Text, obj3);
  }
  const obj6 = { ref, style: tmp4.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp16 };
  cResult[7] = tmp4.header;
  cResult[8] = tmp16;
  cResult[9] = closure_7(tmp(4886).Text, obj6);
  closure_7(tmp(4886).Text, obj6);
}) : ((arg0) => {
  let Stack;
  let autoFocus;
  let customButtonLabel;
  let customDescription;
  let customTitle;
  let error;
  let firstFieldErrorMessage;
  let guild;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let obj9;
  let onCreate;
  let onIconPress;
  let onNameChange;
  let onStaffOnlyChange;
  let submitting;
  ({ guild, error, customTitle, customDescription, customButtonLabel, autoFocus } = arg0);
  ({ onIconPress, onNameChange, onStaffOnlyChange, onCreate, submitting } = arg0);
  if (autoFocus === undefined) {
    autoFocus = true;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = closure_9();
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  const tmp3 = !isStaffResult;
  let obj2 = isScreenReaderEnabled(5770);
  isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  ref = react.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native2;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items);
  let obj = { style: tmp.flex, contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: closure_8(Stack, { children: items1 }) };
  Stack = isScreenReaderEnabled(5593).Stack;
  const obj3 = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: customTitle };
  const Text = isScreenReaderEnabled(4886).Text;
  if (customTitle == null) {
    const intl = tmp4(1126).intl;
    customTitle = intl.string(tmp4(1126).t.XioBx6);
  }
  items1 = [closure_7(Text, obj3), , , , , , , ];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: customDescription };
  const Text2 = tmp4(4886).Text;
  if (customDescription == null) {
    const intl2 = tmp4(1126).intl;
    customDescription = intl2.string(tmp4(1126).t["/k/L/j"]);
  }
  items1[1] = closure_7(Text2, obj4);
  const obj5 = { iconBackgroundColor: tmp.contentContainer.backgroundColor, style: tmp.iconUploader, onPress: onIconPress, icon: guild.icon };
  items1[2] = closure_7(ref(11409), obj5);
  const obj6 = { clearable: true, label: intl3.string(isScreenReaderEnabled(1126).t.dBih7e), errorMessage: firstFieldErrorMessage, value: guild.name, onChange: onNameChange, autoFocus, autoCorrect: false, returnKeyType: "done" };
  const TextInput = tmp4(6098).TextInput;
  intl3 = tmp4(1126).intl;
  firstFieldErrorMessage = undefined;
  const tmp12 = ref;
  if (error != null) {
    firstFieldErrorMessage = error.getFirstFieldErrorMessage("name");
  }
  if (autoFocus) {
    autoFocus = !isScreenReaderEnabled;
  }
  let tmp9Result = !tmp3;
  items1[3] = closure_7(TextInput, obj6);
  if (tmp9Result) {
    const obj7 = { onValueChange: onStaffOnlyChange, value: guild.staffOnly, start: true, end: true, label: "Staff Only", subLabel: intl4.string(isScreenReaderEnabled(1126).t.edQ5va) };
    const TableSwitchRow = tmp4(6698).TableSwitchRow;
    intl4 = tmp4(1126).intl;
    tmp9Result = closure_7(TableSwitchRow, obj7);
  }
  items1[4] = tmp9Result;
  const obj8 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted", children: intl5.format(isScreenReaderEnabled(1126).t["2bprXx"], obj9) };
  const Text3 = tmp4(4886).Text;
  intl5 = tmp4(1126).intl;
  obj9 = { guidelinesURL: MarketingURLs.GUIDELINES };
  items1[5] = closure_7(Text3, obj8);
  const obj10 = { disabled: "" === guild.name, size: "md", grow: true, text: customButtonLabel, onPress: onCreate, loading: submitting };
  const Button = tmp4(5594).Button;
  if (customButtonLabel == null) {
    const intl6 = tmp4(1126).intl;
    customButtonLabel = intl6.string(tmp4(1126).t["O0p/lS"]);
  }
  items1[6] = closure_7(Button, obj10);
  let firstFieldErrorMessage1;
  if (error != null) {
    firstFieldErrorMessage1 = error.getFirstFieldErrorMessage("name");
  }
  let tmp9Result2 = null;
  if (null == firstFieldErrorMessage1) {
    let message;
    if (error != null) {
      message = error.message;
    }
    tmp9Result2 = null;
    if (null != message) {
      let message1;
      if (error != null) {
        message1 = error.message;
      }
      tmp9Result2 = null;
      if ("" !== message1) {
        let message2;
        const tmp12Result = tmp12(6428);
        if (error != null) {
          message2 = error.message;
        }
        const obj11 = { children: message2 };
        tmp9Result2 = closure_7(tmp12Result, obj11);
      }
    }
  }
  items1[7] = tmp9Result2;
  return closure_7(ScrollView, obj);
});
let result = size.fileFinishedImporting("modules/create_guild/native/CreateGuild.tsx");

export default tmp3;