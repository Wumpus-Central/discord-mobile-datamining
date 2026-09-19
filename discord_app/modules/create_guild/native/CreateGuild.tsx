// discord_app/modules/create_guild/native/CreateGuild.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import setAccessibilityFocus from "../../a11y/native/setAccessibilityFocus.android.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const ScrollView = fn(17).ScrollView;
const MarketingURLs = fn(1074).MarketingURLs;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  flex: { flex: 1 },
  contentContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  header: { textAlign: "center" },
  description: { lineHeight: 18, textAlign: "center", marginBottom: 24 },
  iconUploader: { alignSelf: "center", marginBottom: 4 },
  hint: { marginBottom: 8 },
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/CreateGuild.tsx");

export default function CreateGuild(arg0) {
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
  isScreenReaderEnabled = isScreenReaderEnabled(5171).useIsScreenReaderEnabled();
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
  let obj = {
    style: tmp.flex,
    contentInset: { top: 0 },
    automaticallyAdjustContentInsets: false,
    keyboardShouldPersistTaps: "handled",
    alwaysBounceVertical: false,
    contentContainerStyle: tmp.contentContainer,
    children: null,
  };
  const obj3 = {
    ref,
    style: tmp.header,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  if (customTitle == null) {
    const intl = tmp4(1115).intl;
    customTitle = intl.string(tmp4(1115).t.XioBx6);
  }
  obj3.children = customTitle;
  const items1 = [closure_7(isScreenReaderEnabled(4752).Text, obj3), , , , , , ,];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  if (customDescription == null) {
    const intl2 = tmp4(1115).intl;
    customDescription = intl2.string(tmp4(1115).t["/k/L/j"]);
  }
  obj4.children = customDescription;
  items1[1] = closure_7(isScreenReaderEnabled(4752).Text, obj4);
  items1[2] = closure_7(ref(12050), {
    iconBackgroundColor: tmp.contentContainer.backgroundColor,
    style: tmp.iconUploader,
    onPress: onIconPress,
    icon: guild.icon,
  });
  const obj6 = {
    clearable: true,
    label: null,
    errorMessage: null,
    value: null,
    onChange: null,
    autoFocus: null,
    autoCorrect: false,
    returnKeyType: "done",
  };
  const intl3 = tmp4(1115).intl;
  obj6.label = intl3.string(isScreenReaderEnabled(1115).t.dBih7e);
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
  items1[3] = closure_7(isScreenReaderEnabled(6843).TextInput, obj6);
  if (tmp9Result) {
    const obj7 = {
      onValueChange: onStaffOnlyChange,
      value: guild.staffOnly,
      start: true,
      end: true,
      label: "Staff Only",
      subLabel: null,
    };
    const intl4 = tmp4(1115).intl;
    obj7.subLabel = intl4.string(tmp4(1115).t.edQ5va);
    tmp9Result = closure_7(tmp4(7440).TableSwitchRow, obj7);
  }
  items1[4] = tmp9Result;
  const obj8 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl5 = tmp4(1115).intl;
  obj8.children = intl5.format(isScreenReaderEnabled(1115).t["2bprXx"], { guidelinesURL: MarketingURLs.GUIDELINES });
  items1[5] = closure_7(isScreenReaderEnabled(4752).Text, obj8);
  const obj10 = { disabled: "" === guild.name, size: "md", grow: true, text: null, onPress: null, loading: null };
  if (customButtonLabel == null) {
    const intl6 = tmp4(1115).intl;
    customButtonLabel = intl6.string(tmp4(1115).t["O0p/lS"]);
  }
  obj10.text = customButtonLabel;
  obj10.onPress = onCreate;
  obj10.loading = submitting;
  items1[6] = closure_7(isScreenReaderEnabled(5186).Button, obj10);
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
        tmp9Result2 = closure_7(ref(7179), obj11);
        const tmp12Result = ref(7179);
      }
    }
  }
  items1[7] = tmp9Result2;
  obj.children = closure_8(isScreenReaderEnabled(5184).Stack, { children: items1 });
  return closure_7(ScrollView, obj);
}
