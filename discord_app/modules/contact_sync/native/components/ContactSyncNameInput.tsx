// === Module 12697: ContactSyncNameInput ===

// Module 12697 (ContactSyncNameInput)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import ContactSyncErrorDefault from "ContactSyncError" /* 12694 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1 }, content: { flex: 1, padding: 16, paddingBottom: 0 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center", marginBottom: 16 }, input: null, formSubtitle: null, button: null, error: null };
createStyles = { width: "100%", marginTop: 8, marginBottom: 12, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg };
createStyles.input = createStyles;
createStyles.formSubtitle = { lineHeight: 16 };
createStyles.button = { flexGrow: 0, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 };
createStyles.error = { marginTop: 8 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameInput.tsx");

export default function ContactSyncNameInput(prefilledFromContactBook) {
  let flag = prefilledFromContactBook.prefilledFromContactBook;
  ({ loading, error, initialName } = prefilledFromContactBook);
  if (flag === undefined) {
    flag = false;
  }
  ({ onNext: require, onRemoveName } = prefilledFromContactBook);
  let tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState(initialName), 2);
  value = tmp2[0];
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (null != onRemoveName) {
    let stringResult = string(t.i4jeWR);
    let tmp9 = tmp7;
  } else {
    stringResult = string(t.PDTjLN);
    tmp9 = tmp7;
  }
  let obj = { style: null, children: null };
  const items = [tmp.content, { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom }];
  obj.style = items;
  obj = { style: tmp.flex, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp9(1114).intl;
  const string2 = intl2.string;
  const t2 = tmp9(1114).t;
  if (null != onRemoveName) {
    let string2Result = string2(t2["/OywGQ"]);
  } else {
    string2Result = string2(t2["sO+NI5"]);
  }
  obj.children = string2Result;
  const items1 = [timestampProducer(tmp9(4556).Text, obj), , , , ];
  const obj1 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = tmp9(1114).intl;
  const string3 = intl3.string;
  const t3 = tmp9(1114).t;
  if (null != onRemoveName) {
    let string3Result = string3(t3["xCHh/t"]);
  } else {
    string3Result = string3(t3.xI496M);
  }
  obj1.children = string3Result;
  items1[1] = timestampProducer(tmp9(4556).Text, obj1);
  const obj2 = { variant: "eyebrow", color: "interactive-text-default", children: null };
  const intl4 = tmp9(1114).intl;
  obj2.children = intl4.string(tmp9(1114).t["42/D2U"]);
  items1[2] = timestampProducer(tmp9(4556).Text, obj2);
  items1[3] = timestampProducer(tmp9(1178).InputView, { value, onChangeText: tmp2[1], style: tmp.input, autoFocus: true, showBorder: false, showTopContainer: false, clearButtonVisibility: tmp9(1178).ClearButtonVisibility.WITH_CONTENT, autoCorrect: true, autoComplete: "name", textContentType: "name" });
  let tmp12Result = null;
  if (flag) {
    const obj4 = { style: tmp.formSubtitle, variant: "text-xs/medium", color: "text-default", children: null };
    const intl5 = tmp9(1114).intl;
    obj4.children = intl5.string(tmp9(1114).t.bCQt9K);
    tmp12Result = tmp12(tmp9(4556).Text, obj4);
  }
  items1[4] = tmp12Result;
  obj.children = items1;
  const items2 = [React5(View, obj), , , ];
  let str = "lg";
  if (null != onRemoveName) {
    str = "md";
  }
  items2[1] = timestampProducer(tmp9(4975).Button, {
    variant: "primary",
    size: str,
    text: stringResult,
    onPress() {
      return require(first);
    },
    loading,
    disabled: "" === value
  });
  tmp12Result = null;
  if (null != onRemoveName) {
    const obj6 = { style: tmp.button, children: null };
    const obj7 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl6 = tmp9(1114).intl;
    obj7.text = intl6.string(tmp9(1114).t["91RssO"]);
    obj7.onPress = function onPress() {
      let tmp;
      if (onRemoveName != null) {
        tmp = onRemoveName();
      }
      return tmp;
    };
    obj6.children = tmp12(tmp9(4975).Button, obj7);
    tmp12Result = tmp12(tmp11, obj6);
  }
  items2[2] = tmp12Result;
  items2[3] = timestampProducer(ContactSyncErrorDefault, { style: tmp.error, error });
  obj.children = items2;
  return React5(View, obj);
};