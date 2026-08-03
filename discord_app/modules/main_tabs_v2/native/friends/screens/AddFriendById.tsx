import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "Button";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function ErrorMessage(children) {
  const style = [, ];
  ({ inputAccessoryText: arr[0], errorStateText: arr[1] } = callback2());
  return callback(require(4251) /* Text */.Text, { variant: "text-xs/medium", color: "text-feedback-critical", style, children: children.errorMessage });
}
let c4 = importAllResult;
({ View: c5, Keyboard: closure_6 } = get_ActivityIndicator);
({ PLACEHOLDER_TAG: error, AnalyticEvents: metroImportAll } = ME);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let obj = { container: null, textInputContainer: null, placeholderText: null, inputAccessoryText: null, redesignInputAccessoryText: null, inputHeaderText: null, redesignGrow: null, errorStateText: null, friendMessageContainer: null, messageLabel: null, messageFooterText: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
obj[0] = obj;
obj[1] = { alignSelf: "stretch" };
createCacheKey = { color: require("Themes").colors.TEXT_MUTED };
obj[2] = createCacheKey;
obj[3] = { fontSize: 12, lineHeight: 16, marginVertical: 8, color: require("Themes").colors.TEXT_SUBTLE };
let obj2 = { fontSize: 12, lineHeight: 16, marginVertical: 8, color: require("Themes").colors.TEXT_SUBTLE };
obj[4] = { marginBottom: require("Themes").space.PX_8 };
obj[5] = { marginTop: 0 };
let obj3 = { marginBottom: require("Themes").space.PX_8 };
obj[6] = { flexGrow: 2, minHeight: require("Themes").space.PX_24 };
let obj4 = { flexGrow: 2, minHeight: require("Themes").space.PX_24 };
obj[7] = { color: require("Themes").unsafe_rawColors.RED_400, marginVertical: 4 };
let obj5 = { color: require("Themes").unsafe_rawColors.RED_400, marginVertical: 4 };
obj[8] = { alignSelf: "stretch", marginTop: require("Themes").space.PX_16 };
let obj6 = { alignSelf: "stretch", marginTop: require("Themes").space.PX_16 };
obj[9] = { marginBottom: require("Themes").space.PX_4 };
let obj7 = { marginBottom: require("Themes").space.PX_4 };
obj[10] = { marginTop: require("Themes").space.PX_4 };
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = { SUCCESS: 0, [0]: "SUCCESS", ERROR: 1, [1]: "ERROR", LOADING: 2, [2]: "LOADING", NONE: 3, [3]: "NONE" };
let closure_14 = { DISCORD_TAG: "DISCORD_TAG", MESSAGE: "MESSAGE" };
let closure_16 = importAllResult.forwardRef((headerTextStyle, ref) => {
  let autoFocus;
  let headerText;
  let onChangeText;
  let onFocus;
  let onKeyPress;
  let onSelectionChange;
  let onSubmitEditing;
  let textState;
  let validationState;
  ({ validationState, headerText } = headerTextStyle);
  ({ textState, onChangeText, onSelectionChange, onKeyPress, onSubmitEditing, onFocus, autoFocus } = headerTextStyle);
  if (headerText === undefined) {
    const intl = require(1236) /* getSystemLocale */.intl;
    headerText = intl.string(require(1236) /* getSystemLocale */.t.YegTF2).toUpperCase();
    const str = intl.string(require(1236) /* getSystemLocale */.t.YegTF2);
  }
  const tmp3 = callback2();
  let message;
  if (validationState.status === constants.ERROR) {
    if (validationState.field === constants2.DISCORD_TAG) {
      message = validationState.message;
    }
  }
  let obj = { style: tmp3.textInputContainer, children: null };
  const items = [, , ];
  ({ redesignInputAccessoryText: arr[0], inputHeaderText: arr[1] } = tmp3);
  items[2] = headerTextStyle.headerTextStyle;
  const items1 = [callback(require(4251) /* Text */.Text, { style: items, variant: "text-sm/semibold", color: "text-muted", children: headerText }), , ];
  obj = { ref, value: textState.validatedText, accessibilityLabel: null, accessibilityHint: null, placeholder: null, placeholderTextColor: null, onChange: null, onSelectionChange: null, onKeyPress: null, onSubmitEditing: null, autoCapitalize: "none", returnKeyType: "send", keyboardType: "twitter", autoCorrect: false, blurOnSubmit: true, maxLength: 37, autoFocus: null, onFocus: null, status: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.qRaqel);
  let a11yMessage;
  if (validationState.status === constants.ERROR) {
    a11yMessage = validationState.a11yMessage;
  }
  obj[3] = a11yMessage;
  const intl3 = tmp10(1236).intl;
  obj[4] = intl3.string(require(1236) /* getSystemLocale */.t.qRaqel);
  obj[5] = tmp3.placeholderText.color;
  obj[6] = onChangeText;
  obj[7] = onSelectionChange;
  obj[8] = onKeyPress;
  obj[9] = onSubmitEditing;
  obj[16] = autoFocus;
  obj[17] = onFocus;
  let str2;
  if (null != message) {
    str2 = "error";
  }
  obj[18] = str2;
  items1[1] = callback(require(5892) /* TextField */.TextField, obj);
  let tmp9Result = null;
  if (null != message) {
    obj = { errorMessage: null };
    obj[0] = message;
    tmp9Result = tmp9(ErrorMessage, obj);
  }
  items1[2] = tmp9Result;
  obj[1] = items1;
  return closure_10(closure_5, obj);
});
let obj8 = { marginTop: require("Themes").space.PX_4 };
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let autoFocusInput;
  let headerText;
  let headerTextStyle;
  let onFocus;
  let sourcePage;
  let style;
  ({ headerTextStyle, sourcePage } = arg0);
  let importDefault;
  let dependencyMap;
  let first;
  let importAllResult;
  let first1;
  let closure_6;
  let first2;
  let closure_8;
  function handleSubmitEditing() {
    const trimmed = first.validatedText.trim();
    let substr = trimmed;
    const trimmed1 = first2.trim();
    if (trimmed.length <= 0) {
      let obj = { status: null, field: null, message: null };
      obj[0] = outer1_13.ERROR;
      obj[1] = outer1_14.DISCORD_TAG;
      let intl = sourcePage(1236).intl;
      obj[2] = intl.string(sourcePage(1236).t.mxnceg);
      callback(obj);
    } else {
      const hasItem = trimmed.includes("#");
      let startsWithResult = !hasItem;
      if (!hasItem) {
        startsWithResult = trimmed.startsWith("@");
      }
      let tmp2 = trimmed;
      if (startsWithResult) {
        substr = trimmed.substring(1);
        tmp2 = substr;
      }
      obj = sourcePage(9108);
      const validateDiscordTagResult = obj.validateDiscordTag(tmp2);
      if (null != validateDiscordTagResult) {
        obj = { status: null, field: null, message: null };
        obj[0] = outer1_13.ERROR;
        obj[1] = outer1_14.DISCORD_TAG;
        obj[2] = validateDiscordTagResult;
        callback(obj);
      } else {
        const obj1 = { status: null };
        obj1[0] = outer1_13.LOADING;
        callback(obj1);
        const obj2 = { discordTag: null, context: null, errorUxConfig: null, note: null };
        obj2[0] = tmp2;
        obj2[1] = { location: "Search - Add Friend Search" };
        obj2[2] = sourcePage(9104).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED;
        let tmp9;
        if (trimmed1.length > 0) {
          tmp9 = trimmed1;
        }
        obj2[3] = tmp9;
        const obj5 = ref(9104);
        ref(9104).sendRequest(obj2).then(() => {
          let obj = { validatedText: "", hint: null };
          const intl = sourcePage(1236).intl;
          obj[1] = intl.string(sourcePage(1236).t["6p7Mhh"]);
          outer1_4(obj);
          outer1_8("");
          obj = { status: outer2_13.SUCCESS, message: null };
          const intl2 = sourcePage(1236).intl;
          obj = { discordTag: substr };
          obj[1] = intl2.format(sourcePage(1236).t.Rtl1Ep, obj);
          outer1_6(obj);
          const result = sourcePage(3955).presentAddedFriendToast();
          closure_6.dismiss();
        }, (body) => {
          let note;
          if (body != null) {
            body = body.body;
            if (body != null) {
              note = body.note;
            }
          }
          if (null != note) {
            let obj = { status: null, field: null, message: null, a11yMessage: null };
            obj[0] = outer2_13.ERROR;
            obj[1] = outer2_14.MESSAGE;
            const intl = sourcePage(1236).intl;
            obj[2] = intl.string(sourcePage(1236).t.ckHwck);
            const intl2 = sourcePage(1236).intl;
            obj[3] = intl2.string(sourcePage(1236).t.ckHwck);
          } else {
            obj = { status: null, field: null, message: null, a11yMessage: null };
            obj[0] = outer2_13.ERROR;
            obj[1] = outer2_14.DISCORD_TAG;
            let num;
            if (body != null) {
              const body2 = body.body;
              if (body2 != null) {
                num = body2.code;
              }
            }
            if (num == null) {
              num = -1;
            }
            obj[2] = sourcePage(9108).humanizeAbortCode(num, substr);
            obj = sourcePage(9108);
            let num2;
            if (body != null) {
              const body3 = body.body;
              if (body3 != null) {
                num2 = body3.code;
              }
            }
            if (num2 == null) {
              num2 = -1;
            }
            obj[3] = obj.humanizeAbortCodeForA11y(num2, substr);
            const obj4 = sourcePage(9108);
            const tmp3 = substr;
          }
          outer1_6(obj);
        });
        const sendRequestResult = ref(9104).sendRequest(obj2);
      }
    }
  }
  ({ style, onFocus, autoFocusInput, headerText } = arg0);
  const tmp = callback2();
  importDefault = importAllResult.useRef(0);
  dependencyMap = importAllResult.useRef("");
  let tmp2 = first(importAllResult.useState(() => {
    const obj = { validatedText: "", hint: null };
    const intl = sourcePage(1236).intl;
    obj[1] = intl.string(sourcePage(1236).t["6p7Mhh"]);
    return obj;
  }), 2);
  first = tmp2[0];
  importAllResult = tmp2[1];
  let obj = { status: constants.NONE };
  const tmp5 = first(importAllResult.useState(obj), 2);
  first1 = tmp5[0];
  closure_6 = tmp5[1];
  const tmp7 = first(importAllResult.useState(""), 2);
  first2 = tmp7[0];
  closure_8 = tmp7[1];
  let obj1 = importDefault(13077);
  const enabled = obj1.useConfig({ location: "AddFriendbyId" }).enabled;
  const items = [first1];
  const items1 = [first1];
  const callback = importAllResult.useCallback((arg0) => {
    if (arg0.length <= 0) {
      let obj = { validatedText: "", hint: null };
      const intl = sourcePage(1236).intl;
      obj[1] = intl.string(sourcePage(1236).t["6p7Mhh"]);
    } else {
      const arr = first(arg0.split("#"), 2)[1];
      let str2 = "";
      if (null != arr) {
        let num2 = 0;
        if (null != arr) {
          num2 = arr.length + 1;
        }
        str2 = arg0 + first2.slice(num2);
      }
      obj = { validatedText: null, hint: null };
      obj[0] = arg0;
      obj[1] = str2;
    }
    closure_4(obj);
    let tmp9 = first1.status === outer1_13.ERROR;
    if (tmp9) {
      tmp9 = first1.field === outer1_14.DISCORD_TAG;
    }
    if (tmp9) {
      obj = { status: null };
      obj[0] = outer1_13.NONE;
      callback(obj);
    }
  }, items);
  const items2 = [sourcePage];
  const callback1 = importAllResult.useCallback((str) => {
    lib(str.replace(/\n/g, ""));
    let tmp3 = first1.status === outer1_13.ERROR;
    if (tmp3) {
      tmp3 = first1.field === outer1_14.MESSAGE;
    }
    if (tmp3) {
      const obj = { status: null };
      obj[0] = outer1_13.NONE;
      callback(obj);
    }
  }, items1);
  const effect = importAllResult.useEffect(() => {
    let obj = ref(698);
    obj = { friend_add_type: "Id", source_page: sourcePage };
    obj.track(lib.FRIEND_ADD_VIEWED, obj);
  }, items2);
  const items3 = [first1];
  const effect1 = importAllResult.useEffect(() => {
    let tmp2 = first1.status === outer1_13.ERROR;
    if (tmp2) {
      tmp2 = null != tmp.a11yMessage;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = sourcePage(3968).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp.a11yMessage);
    }
  }, items3);
  obj = { style: items4, children: null };
  items4 = [tmp.container, style];
  obj = {
    textState: first,
    onChangeText: callback,
    onSelectionChange(nativeEvent) {
      const start = nativeEvent.nativeEvent.selection.start;
      if (start !== ref.current) {
        ref.current = start;
      }
    },
    onKeyPress(nativeEvent) {
      closure_2.current = nativeEvent.nativeEvent.key;
    },
    onSubmitEditing: handleSubmitEditing,
    onFocus,
    validationState: first1,
    autoFocus: autoFocusInput,
    headerText,
    headerTextStyle,
    ref
  };
  const items5 = [callback(closure_16, obj), ];
  if (!enabled) {
    obj1 = { children: null };
    items5[1] = enabled;
    obj[1] = items5;
    const items6 = [tmp14(tmp16, obj), , ];
    let obj2 = { style: null };
    obj2[0] = tmp.redesignGrow;
    items6[1] = tmp17(tmp16, obj2);
    const obj3 = { size: "lg", text: null, disabled: null, onPress: null, loading: null, grow: false };
    const intl3 = sourcePage(1236).intl;
    obj3[1] = intl3.string(sourcePage(1236).t["PMsq/b"]);
    obj3[2] = str.trim().length <= 0;
    obj3[3] = handleSubmitEditing;
    obj3[4] = first1.status === tmp4.LOADING;
    items6[2] = tmp17(sourcePage(4666).Button, obj3);
    obj1[0] = items6;
    return tmp14(closure_11, obj1);
  } else {
    let obj4 = { style: null, children: null };
    obj4[0] = tmp.friendMessageContainer;
    let obj5 = { style: null, variant: "text-sm/semibold", color: "text-muted", children: null };
    const items7 = [, , ];
    ({ messageLabel: arr7[0], inputHeaderText: arr7[1] } = tmp);
    items7[2] = headerTextStyle;
    obj5[0] = items7;
    let intl = sourcePage(1236).intl;
    obj5[3] = intl.string(sourcePage(1236).t.Yi6Mpu);
    const items8 = [tmp17(sourcePage(4251).Text, obj5), , ];
    const obj6 = { returnKeyType: "done", submitBehavior: "submit", value: null, maxLength: 120, onSubmitEditing: null, onChange: null, status: null };
    obj6[2] = first2;
    obj6[4] = handleSubmitEditing;
    obj6[5] = callback1;
    let str2;
    if (first1.field === constants2.MESSAGE) {
      if (first1.status === tmp4.ERROR) {
        str2 = "error";
      }
    }
    obj6[6] = str2;
    items8[1] = tmp17(sourcePage(7774).TextArea, obj6);
    if (first1.status !== tmp4.ERROR) {
      const obj7 = { style: null, variant: "text-xs/medium", color: "text-muted", children: null };
      obj7[0] = tmp.messageFooterText;
      let intl2 = tmp18(1236).intl;
      obj7[3] = intl2.string(tmp18(1236).t.UtfQNw);
      let tmp17Result = tmp17(tmp18(4251).Text, obj7);
      items8[2] = tmp17Result;
      obj4[1] = items8;
      tmp14(tmp16, obj4);
    }
    const obj8 = { errorMessage: null };
    obj8[0] = first1.message;
    tmp17Result = tmp17(ErrorMessage, obj8);
    const tmp19 = constants2;
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx");

export default forwardRefResult;