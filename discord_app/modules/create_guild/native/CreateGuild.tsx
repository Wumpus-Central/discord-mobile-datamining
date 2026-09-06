// === Module 12334: CreateGuild ===

// Module 12334 (CreateGuild)
import nativeDefault from "native" /* 576 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 4971 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const MarketingURLs = fn(1074).MarketingURLs;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1 }, contentContainer: null, header: null, description: null, iconUploader: null, hint: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingBottom: 16 };
createStyles.contentContainer = createStyles;
createStyles.header = { textAlign: "center" };
createStyles.description = { lineHeight: 18, textAlign: "center", marginBottom: 24 };
createStyles.iconUploader = { alignSelf: "center", marginBottom: 4 };
createStyles.hint = { marginBottom: 8 };
let closure_9 = createStyles.createStyles(createStyles);
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
  let obj1 = isScreenReaderEnabled(4962);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = noop.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  let obj = { style: tmp.flex, contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  if (customTitle == null) {
    const intl = tmp4(1114).intl;
    customTitle = intl.string(tmp4(1114).t.XioBx6);
  }
  obj.children = customTitle;
  const items1 = [closure_7(isScreenReaderEnabled(4556).Text, obj), , , , , , , ];
  obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  if (customDescription == null) {
    const intl2 = tmp4(1114).intl;
    customDescription = intl2.string(tmp4(1114).t["/k/L/j"]);
  }
  obj1.children = customDescription;
  items1[1] = closure_7(isScreenReaderEnabled(4556).Text, obj1);
  items1[2] = closure_7(ref(11798), { iconBackgroundColor: tmp.contentContainer.backgroundColor, style: tmp.iconUploader, onPress: onIconPress, icon: guild.icon });
  const obj3 = { isClearable: true, label: null, errorMessage: null, value: null, onChange: null, autoFocus: null, autoCorrect: false, returnKeyType: "done" };
  const intl3 = tmp4(1114).intl;
  obj3.label = intl3.string(isScreenReaderEnabled(1114).t.dBih7e);
  let firstFieldErrorMessage;
  if (error != null) {
    firstFieldErrorMessage = error.getFirstFieldErrorMessage("name");
  }
  obj3.errorMessage = firstFieldErrorMessage;
  obj3.value = guild.name;
  obj3.onChange = onNameChange;
  if (autoFocus) {
    autoFocus = !isScreenReaderEnabled;
  }
  let tmp9Result = !!isStaffResult;
  obj3.autoFocus = autoFocus;
  items1[3] = closure_7(isScreenReaderEnabled(6606).TextInput, obj3);
  if (tmp9Result) {
    const obj4 = { onValueChange: onStaffOnlyChange, value: guild.staffOnly, start: true, end: true, label: "Staff Only", subLabel: null };
    const intl4 = tmp4(1114).intl;
    obj4.subLabel = intl4.string(tmp4(1114).t.edQ5va);
    tmp9Result = tmp9(tmp4(7201).TableSwitchRow, obj4);
  }
  items1[4] = tmp9Result;
  const obj5 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl5 = tmp4(1114).intl;
  obj5.children = intl5.format(isScreenReaderEnabled(1114).t["2bprXx"], { guidelinesURL: MarketingURLs.GUIDELINES });
  items1[5] = closure_7(isScreenReaderEnabled(4556).Text, obj5);
  const obj7 = { disabled: "" === guild.name, size: "md", grow: true, text: null, onPress: null, loading: null };
  if (customButtonLabel == null) {
    const intl6 = tmp4(1114).intl;
    customButtonLabel = intl6.string(tmp4(1114).t["O0p/lS"]);
  }
  obj7.text = customButtonLabel;
  obj7.onPress = onCreate;
  obj7.loading = submitting;
  items1[6] = closure_7(isScreenReaderEnabled(4975).Button, obj7);
  let firstFieldErrorMessage1;
  if (error != null) {
    firstFieldErrorMessage1 = error.getFirstFieldErrorMessage("name");
  }
  tmp9Result = null;
  if (null == firstFieldErrorMessage1) {
    let message;
    if (error != null) {
      message = error.message;
    }
    tmp9Result = null;
    if (null != message) {
      let message1;
      if (error != null) {
        message1 = error.message;
      }
      tmp9Result = null;
      if ("" !== message1) {
        let message2;
        if (error != null) {
          message2 = error.message;
        }
        const obj8 = { children: message2 };
        tmp9Result = tmp9(ref(6941), obj8);
        const tmp12Result = ref(6941);
      }
    }
  }
  items1[7] = tmp9Result;
  obj.children = closure_8(isScreenReaderEnabled(4973).Stack, { children: items1 });
  return closure_7(ScrollView, obj);
};