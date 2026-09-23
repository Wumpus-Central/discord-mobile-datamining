// discord_app/modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TextField from "../../../../../design/components/TextField/native/TextField.native.tsx";
import FriendsUtils from "../../../../../utils/FriendsUtils.tsx";
import FriendRequestMessageExperimentDefault from "../../../../people/FriendRequestMessageExperiment.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function ErrorMessage(children) {
  const obj = {
    variant: "text-xs/medium",
    color: "text-feedback-critical",
    style: null,
    children: children.errorMessage,
  };
  const items = [,];
  ({ inputAccessoryText: arr[0], errorStateText: arr[1] } = closure_12());
  obj.style = items;
  return React7(Text_Text.Text, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Keyboard: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ PLACEHOLDER_TAG: closure_7, AnalyticEvents: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4827);
let obj = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  textInputContainer: { alignSelf: "stretch" },
  placeholderText: null,
  inputAccessoryText: null,
  redesignInputAccessoryText: null,
  inputHeaderText: null,
  redesignGrow: null,
  errorStateText: null,
  friendMessageContainer: null,
  messageLabel: null,
  messageFooterText: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 16,
};
obj.placeholderText = { color: nativeDefault.colors.TEXT_MUTED };
let obj4 = { color: nativeDefault.colors.TEXT_MUTED };
obj.inputAccessoryText = { fontSize: 12, lineHeight: 16, marginVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
let obj5 = { fontSize: 12, lineHeight: 16, marginVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
obj.redesignInputAccessoryText = { marginBottom: nativeDefault.space.PX_8 };
obj.inputHeaderText = { marginTop: 0 };
let obj6 = { marginBottom: nativeDefault.space.PX_8 };
obj.redesignGrow = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
let obj7 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj.errorStateText = { color: nativeDefault.unsafe_rawColors.RED_400, marginVertical: 4 };
let obj8 = { color: nativeDefault.unsafe_rawColors.RED_400, marginVertical: 4 };
obj.friendMessageContainer = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_16 };
let obj9 = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_16 };
obj.messageLabel = { marginBottom: nativeDefault.space.PX_4 };
let obj10 = { marginBottom: nativeDefault.space.PX_4 };
obj.messageFooterText = { marginTop: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj);
const constants2 = {
  SUCCESS: 0,
  [0]: "SUCCESS",
  ERROR: 1,
  [1]: "ERROR",
  LOADING: 2,
  [2]: "LOADING",
  NONE: 3,
  [3]: "NONE",
};
const constants3 = { DISCORD_TAG: "DISCORD_TAG", MESSAGE: "MESSAGE" };
let closure_16 = noop.forwardRef((headerTextStyle, ref) => {
  ({ validationState, headerText } = headerTextStyle);
  ({ textState, onChangeText, onSelectionChange, onKeyPress, onSubmitEditing, onFocus, autoFocus } = headerTextStyle);
  if (headerText === undefined) {
    const intl = util.intl;
    headerText = intl.string(util.t.YegTF2).toUpperCase();
    const str = intl.string(util.t.YegTF2);
  }
  const tmp3 = closure_12();
  let message;
  if (validationState.status === constants2.ERROR) {
    if (validationState.field === constants3.DISCORD_TAG) {
      message = validationState.message;
    }
  }
  const obj = { style: tmp3.textInputContainer, children: null };
  const obj2 = { style: null, variant: "text-sm/semibold", color: "text-muted", children: headerText };
  const items = [, ,];
  ({ redesignInputAccessoryText: arr[0], inputHeaderText: arr[1] } = tmp3);
  items[2] = headerTextStyle.headerTextStyle;
  obj2.style = items;
  const items1 = [React7(Text_Text.Text, obj2), ,];
  const obj3 = {
    ref,
    value: textState.validatedText,
    accessibilityLabel: null,
    accessibilityHint: null,
    placeholder: null,
    placeholderTextColor: null,
    onChange: null,
    onSelectionChange: null,
    onKeyPress: null,
    onSubmitEditing: null,
    autoCapitalize: "none",
    returnKeyType: "send",
    keyboardType: "twitter",
    autoCorrect: false,
    blurOnSubmit: true,
    maxLength: 37,
    autoFocus: null,
    onFocus: null,
    status: null,
  };
  const intl2 = util.intl;
  obj3.accessibilityLabel = intl2.string(util.t.qRaqel);
  let a11yMessage;
  if (validationState.status === constants2.ERROR) {
    a11yMessage = validationState.a11yMessage;
  }
  obj3.accessibilityHint = a11yMessage;
  const intl3 = util.intl;
  obj3.placeholder = intl3.string(util.t.qRaqel);
  obj3.placeholderTextColor = tmp3.placeholderText.color;
  obj3.onChange = onChangeText;
  obj3.onSelectionChange = onSelectionChange;
  obj3.onKeyPress = onKeyPress;
  obj3.onSubmitEditing = onSubmitEditing;
  obj3.autoFocus = autoFocus;
  obj3.onFocus = onFocus;
  let str2;
  if (null != message) {
    str2 = "error";
  }
  obj3.status = str2;
  items1[1] = React7(TextField.TextField, obj3);
  let tmp9Result = null;
  if (null != message) {
    const obj4 = { errorMessage: message };
    tmp9Result = React7(ErrorMessage, obj4);
  }
  items1[2] = tmp9Result;
  obj.children = items1;
  return closure_1_10(hasOwnProperty, obj);
});
let obj11 = { marginTop: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx");

export default noop.forwardRef((arg0, ref) => {
  ({ headerTextStyle, sourcePage } = arg0);
  let textState;
  noop = undefined;
  function handleSubmitEditing() {
    const trimmed = first.validatedText.trim();
    let substr = trimmed;
    const trimmed1 = first2.trim();
    if (trimmed.length <= 0) {
      let obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: null };
      let intl = sourcePage(1115).intl;
      obj2.message = intl.string(sourcePage(1115).t.mxnceg);
      closure_6(obj2);
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
      const validateDiscordTagResult = sourcePage(10086).validateDiscordTag(tmp2);
      if (null != validateDiscordTagResult) {
        let obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: validateDiscordTagResult };
        closure_6(obj3);
      } else {
        let obj4 = { status: constants.LOADING };
        closure_6(obj4);
        const obj6 = {
          discordTag: tmp2,
          context: { location: "Search - Add Friend Search" },
          errorUxConfig: sourcePage(10082).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED,
          note: null,
        };
        let tmp9;
        if (trimmed1.length > 0) {
          tmp9 = trimmed1;
        }
        obj6.note = tmp9;
        const obj5 = ref(10082);
        ref(10082)
          .sendRequest(obj6)
          .then(
            () => {
              const obj = { validatedText: "", hint: null };
              const intl = util.intl;
              obj.hint = intl.string(util.t["6p7Mhh"]);
              closure_4(obj);
              closure_8("");
              const obj2 = { status: constants.SUCCESS, message: null };
              const intl2 = util.intl;
              obj2.message = intl2.format(util.t.Rtl1Ep, { discordTag: substr });
              closure_6(obj2);
              const result = ToastUtils.presentAddedFriendToast();
              timestampProducer.dismiss();
            },
            (body) => {
              let note;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  note = body.note;
                }
              }
              if (null != note) {
                const obj2 = { status: constants.ERROR, field: constants2.MESSAGE, message: null, a11yMessage: null };
                const intl = util.intl;
                obj2.message = intl.string(util.t.ckHwck);
                const intl2 = util.intl;
                obj2.a11yMessage = intl2.string(util.t.ckHwck);
                let obj3 = obj2;
              } else {
                obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: null, a11yMessage: null };
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
                obj3.message = FriendsUtils.humanizeAbortCode(num, substr);
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
                obj3.a11yMessage = FriendsUtils.humanizeAbortCodeForA11y(num2, substr);
              }
              closure_6(obj3);
            },
          );
        const sendRequestResult = ref(10082).sendRequest(obj6);
      }
      let obj = sourcePage(10086);
    }
  }
  ({ style, onFocus, autoFocusInput, headerText } = arg0);
  const tmp = closure_12();
  importDefault = noop.useRef(0);
  dependencyMap = noop.useRef("");
  let tmp2 = textState(
    noop.useState(() => {
      const obj = { validatedText: "", hint: null };
      const intl = sourcePage(1115).intl;
      obj.hint = intl.string(sourcePage(1115).t["6p7Mhh"]);
      return obj;
    }),
    2,
  );
  textState = tmp2[0];
  noop = tmp2[1];
  const tmp5 = textState(noop.useState({ status: constants2.NONE }), 2);
  const first1 = tmp5[0];
  closure_6 = tmp5[1];
  const tmp7 = textState(noop.useState(""), 2);
  const first2 = tmp7[0];
  closure_8 = tmp7[1];
  const enabled = FriendRequestMessageExperimentDefault.useConfig({ location: "AddFriendbyId" }).enabled;
  const items = [first1];
  const items1 = [first1];
  const callback = noop.useCallback((validatedText) => {
    if (validatedText.length <= 0) {
      const obj2 = { validatedText: "", hint: null };
      const intl = util.intl;
      obj2.hint = intl.string(util.t["6p7Mhh"]);
      let obj = obj2;
    } else {
      const arr = _slicedToArray(validatedText.split("#"), 2)[1];
      let str2 = "";
      if (null != arr) {
        let num2 = 0;
        if (null != arr) {
          num2 = arr.length + 1;
        }
        str2 = validatedText + React5.slice(num2);
      }
      obj = { validatedText, hint: str2 };
    }
    closure_4(obj);
    let tmp9 = first1.status === constants.ERROR;
    if (tmp9) {
      tmp9 = first1.field === constants2.DISCORD_TAG;
    }
    if (tmp9) {
      const obj3 = { status: constants.NONE };
      closure_6(obj3);
    }
  }, items);
  const items2 = [sourcePage];
  const callback1 = noop.useCallback((str) => {
    closure_8(str.replace(/\n/g, ""));
    let tmp3 = first1.status === constants.ERROR;
    if (tmp3) {
      tmp3 = first1.field === constants2.MESSAGE;
    }
    if (tmp3) {
      const obj = { status: constants.NONE };
      closure_6(obj);
    }
  }, items1);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Id", source_page: sourcePage });
  }, items2);
  const items3 = [first1];
  const effect1 = noop.useEffect(() => {
    let tmp2 = first1.status === constants.ERROR;
    if (tmp2) {
      tmp2 = null != first1.a11yMessage;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(first1.a11yMessage);
    }
  }, items3);
  let obj3 = { style: null, children: null };
  const items4 = [tmp.container, style];
  obj3.style = items4;
  const items5 = [
    closure_9(closure_16, {
      textState,
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
      ref,
    }),
  ];
  if (!enabled) {
    let obj5 = { children: null };
    items5[1] = enabled;
    obj3.children = items5;
    const items6 = [closure_10(tmp16, obj3), ,];
    let obj6 = { style: tmp.redesignGrow };
    items6[1] = closure_9(tmp16, obj6);
    const obj7 = { size: "lg", text: null, disabled: null, onPress: null, loading: null, grow: false };
    const intl3 = sourcePage(1115).intl;
    obj7.text = intl3.string(sourcePage(1115).t["PMsq/b"]);
    obj7.disabled = str.trim().length <= 0;
    obj7.onPress = handleSubmitEditing;
    obj7.loading = first1.status === constants2.LOADING;
    items6[2] = closure_9(sourcePage(5271).Button, obj7);
    obj5.children = items6;
    return closure_10(closure_11, obj5);
  } else {
    const obj8 = { style: tmp.friendMessageContainer, children: null };
    const obj9 = { style: null, variant: "text-sm/semibold", color: "text-muted", children: null };
    const items7 = [, ,];
    ({ messageLabel: arr7[0], inputHeaderText: arr7[1] } = tmp);
    items7[2] = headerTextStyle;
    obj9.style = items7;
    let intl = sourcePage(1115).intl;
    obj9.children = intl.string(sourcePage(1115).t.Yi6Mpu);
    const items8 = [closure_9(sourcePage(4823).Text, obj9), ,];
    const obj10 = {
      returnKeyType: "done",
      submitBehavior: "submit",
      value: first2,
      maxLength: 120,
      onSubmitEditing: handleSubmitEditing,
      onChange: callback1,
      status: null,
    };
    let str2;
    if (first1.field === constants3.MESSAGE) {
      if (first1.status === constants2.ERROR) {
        str2 = "error";
      }
    }
    obj10.status = str2;
    items8[1] = closure_9(sourcePage(7416).TextArea, obj10);
    if (first1.status !== constants2.ERROR) {
      const obj11 = { style: tmp.messageFooterText, variant: "text-xs/medium", color: "text-muted", children: null };
      let intl2 = sourcePage(1115).intl;
      obj11.children = intl2.string(sourcePage(1115).t.UtfQNw);
      let tmp17Result = closure_9(sourcePage(4823).Text, obj11);
      items8[2] = tmp17Result;
      obj8.children = items8;
      closure_10(tmp16, obj8);
    }
    const obj12 = { errorMessage: first1.message };
    tmp17Result = closure_9(ErrorMessage, obj12);
  }
  let obj = { status: constants2.NONE };
  let obj4 = {
    textState,
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
    ref,
  };
  str = textState.validatedText;
});
