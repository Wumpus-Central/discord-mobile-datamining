// === Module 11976: CreateGuild ===

// Module 11976 (CreateGuild)
import nativeDefault from "native" /* 587 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5786 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const MarketingURLs = fn(1085).MarketingURLs;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { flex: { flex: 1 }, contentContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingBottom: 16 }, header: { textAlign: "center" }, description: { lineHeight: 18, textAlign: "center", marginBottom: 24 }, iconUploader: { alignSelf: "center", marginBottom: 4 }, hint: { marginBottom: 8 } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingBottom: 16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/CreateGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = isScreenReaderEnabled(576).c(56);
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
  let obj = isScreenReaderEnabled(576);
  isScreenReaderEnabled = isScreenReaderEnabled(5777).useIsScreenReaderEnabled();
  const ref = noop.useRef(null);
  if (cResult[1] !== isScreenReaderEnabled) {
    class R {
      constructor() {
        tmp = closure_0;
        if (closure_0) {
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
    let tmp12 = items;
  } else {
    class R {
      constructor() {
        tmp = closure_0;
        if (closure_0) {
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
  const effect = noop.useEffect(R, tmp12);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        tmp = closure_0;
        if (closure_0) {
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
        if (closure_0) {
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
    class R {
      constructor() {
        tmp = closure_0;
        if (closure_0) {
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
          if (closure_0) {
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
      const stringResult = obj5.string(tmp(1126).t.XioBx6);
    }
    cResult[5] = customTitle;
    cResult[6] = stringResult;
  } else {
    class R {
      constructor() {
        tmp = closure_0;
        if (closure_0) {
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
        if (closure_0) {
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
      class R {
        constructor() {
          tmp = closure_0;
          if (closure_0) {
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
            if (closure_0) {
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
        const stringResult1 = obj7.string(tmp(1126).t["/k/L/j"]);
      }
      cResult[10] = customDescription;
      cResult[11] = stringResult1;
    } else {
      class R {
        constructor() {
          tmp = closure_0;
          if (closure_0) {
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
          if (closure_0) {
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
            if (closure_0) {
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
      const tmp27 = closure_7(ref(11422), obj2);
      cResult[15] = guild.icon;
      cResult[16] = onIconPress;
      cResult[17] = tmp4.contentContainer.backgroundColor;
      cResult[18] = tmp4.iconUploader;
      cResult[19] = tmp27;
    }
    const obj3 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp19 };
    const tmp23 = closure_7(tmp(4892).Text, obj3);
    cResult[12] = tmp4.description;
    cResult[13] = tmp19;
    cResult[14] = tmp23;
  }
  const obj6 = { ref, style: tmp4.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp16 };
  const tmpResult = isScreenReaderEnabled(5777);
  cResult[7] = tmp4.header;
  cResult[8] = tmp16;
  cResult[9] = closure_7(isScreenReaderEnabled(4892).Text, { ref, style: tmp4.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp16 });
  const tmp18 = closure_7(isScreenReaderEnabled(4892).Text, { ref, style: tmp4.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp16 });
}) : ((arg0) => {
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
  isScreenReaderEnabled = isScreenReaderEnabled(5777).useIsScreenReaderEnabled();
  ref = noop.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items);
  let obj = { style: tmp.flex, contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: null };
  const obj3 = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  if (customTitle == null) {
    const intl = tmp4(1126).intl;
    customTitle = intl.string(tmp4(1126).t.XioBx6);
  }
  obj3.children = customTitle;
  const items1 = [closure_7(isScreenReaderEnabled(4892).Text, obj3), , , , , , , ];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  if (customDescription == null) {
    const intl2 = tmp4(1126).intl;
    customDescription = intl2.string(tmp4(1126).t["/k/L/j"]);
  }
  obj4.children = customDescription;
  items1[1] = closure_7(isScreenReaderEnabled(4892).Text, obj4);
  items1[2] = closure_7(ref(11422), { iconBackgroundColor: tmp.contentContainer.backgroundColor, style: tmp.iconUploader, onPress: onIconPress, icon: guild.icon });
  const obj6 = { clearable: true, label: null, errorMessage: null, value: null, onChange: null, autoFocus: null, autoCorrect: false, returnKeyType: "done" };
  const intl3 = tmp4(1126).intl;
  obj6.label = intl3.string(isScreenReaderEnabled(1126).t.dBih7e);
  let firstFieldErrorMessage;
  if (error != null) {
    firstFieldErrorMessage = error.getFirstFieldErrorMessage("name");
  }
  obj6.errorMessage = firstFieldErrorMessage;
  obj6.value = guild.name;
  obj6.onChange = onNameChange;
  if (autoFocus) {
    autoFocus = !isScreenReaderEnabled;
  }
  let tmp9Result = !!isStaffResult;
  obj6.autoFocus = autoFocus;
  items1[3] = closure_7(isScreenReaderEnabled(6105).TextInput, obj6);
  if (tmp9Result) {
    const obj7 = { onValueChange: onStaffOnlyChange, value: guild.staffOnly, start: true, end: true, label: "Staff Only", subLabel: null };
    const intl4 = tmp4(1126).intl;
    obj7.subLabel = intl4.string(tmp4(1126).t.edQ5va);
    tmp9Result = closure_7(tmp4(6705).TableSwitchRow, obj7);
  }
  items1[4] = tmp9Result;
  const obj8 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl5 = tmp4(1126).intl;
  obj8.children = intl5.format(isScreenReaderEnabled(1126).t["2bprXx"], { guidelinesURL: MarketingURLs.GUIDELINES });
  items1[5] = closure_7(isScreenReaderEnabled(4892).Text, obj8);
  const obj10 = { disabled: "" === guild.name, size: "md", grow: true, text: null, onPress: null, loading: null };
  if (customButtonLabel == null) {
    const intl6 = tmp4(1126).intl;
    customButtonLabel = intl6.string(tmp4(1126).t["O0p/lS"]);
  }
  obj10.text = customButtonLabel;
  obj10.onPress = onCreate;
  obj10.loading = submitting;
  items1[6] = closure_7(isScreenReaderEnabled(5601).Button, obj10);
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
        if (error != null) {
          message2 = error.message;
        }
        const obj11 = { children: message2 };
        tmp9Result2 = closure_7(ref(6435), obj11);
        const tmp12Result = ref(6435);
      }
    }
  }
  items1[7] = tmp9Result2;
  obj.children = closure_8(isScreenReaderEnabled(5600).Stack, { children: items1 });
  return closure_7(ScrollView, obj);
});