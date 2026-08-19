// === Module 11870: ContactSyncNameInput ===

// Module 11870 (ContactSyncNameInput)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { width: "100%", marginTop: 8, marginBottom: 12, padding: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.lg };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { lineHeight: 16 };
createCacheKey[6] = { flexGrow: 0, paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_12 };
createCacheKey[7] = { marginTop: 8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameInput.tsx");

export default function ContactSyncNameInput(prefilledFromContactBook) {
  let flag = prefilledFromContactBook.prefilledFromContactBook;
  ({ loading, error, initialName } = prefilledFromContactBook);
  if (flag === undefined) {
    flag = false;
  }
  ({ onNext: require, onRemoveName } = prefilledFromContactBook);
  let tmp = callback2();
  const tmp2 = callback(React.useState(initialName), 2);
  const first = tmp2[0];
  const intl = require(first[7]).intl;
  const string = intl.string;
  const t = require(first[7]).t;
  if (null != onRemoveName) {
    let stringResult = string(t.i4jeWR);
    let tmp9 = require;
  } else {
    stringResult = string(t.PDTjLN);
    tmp9 = require;
  }
  const items = [tmp.content, { paddingBottom: onRemoveName(first[6])({ includeKeyboardHeight: true }).insets.bottom }];
  const obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp9(tmp5[7]).intl;
  const string2 = intl2.string;
  const t2 = tmp9(tmp5[7]).t;
  if (null != onRemoveName) {
    let string2Result = string2(t2["/OywGQ"]);
  } else {
    string2Result = string2(t2["sO+NI5"]);
  }
  obj[4] = string2Result;
  const items1 = [callback(tmp9(first[8]).Text, obj), , , , ];
  obj1 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = tmp9(tmp5[7]).intl;
  const string3 = intl3.string;
  const t3 = tmp9(tmp5[7]).t;
  if (null != onRemoveName) {
    let string3Result = string3(t3["xCHh/t"]);
  } else {
    string3Result = string3(t3.xI496M);
  }
  obj1[3] = string3Result;
  items1[1] = callback(tmp9(first[8]).Text, obj1);
  const obj2 = { variant: "eyebrow", color: "interactive-text-default", children: null };
  const intl4 = tmp9(tmp5[7]).intl;
  obj2[2] = intl4.string(tmp9(first[7]).t["42/D2U"]);
  items1[2] = callback(tmp9(first[8]).Text, obj2);
  items1[3] = callback(tmp9(first[9]).InputView, { value: first, onChangeText: tmp2[1], style: tmp.input, autoFocus: true, showBorder: false, showTopContainer: false, clearButtonVisibility: tmp9(first[9]).ClearButtonVisibility.WITH_CONTENT, autoCorrect: true, autoComplete: "name", textContentType: "name" });
  let tmp12Result = null;
  if (flag) {
    const obj4 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj4[0] = tmp.formSubtitle;
    const intl5 = tmp9(tmp5[7]).intl;
    obj4[3] = intl5.string(tmp9(tmp5[7]).t.bCQt9K);
    tmp12Result = callback(tmp9(tmp5[8]).Text, obj4);
  }
  items1[4] = tmp12Result;
  obj[1] = items1;
  const items2 = [callback2(View, obj), , , ];
  let str = "lg";
  if (null != onRemoveName) {
    str = "md";
  }
  items2[1] = callback(tmp9(first[10]).Button, {
    variant: "primary",
    size: str,
    text: stringResult,
    onPress() {
      return callback(first);
    },
    loading,
    disabled: "" === first
  });
  tmp12Result = null;
  if (null != onRemoveName) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.button;
    const obj7 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl6 = tmp9(tmp5[7]).intl;
    obj7[2] = intl6.string(tmp9(tmp5[7]).t["91RssO"]);
    obj7[3] = function onPress() {
      let tmp;
      if (onRemoveName != null) {
        tmp = onRemoveName();
      }
      return tmp;
    };
    obj6[1] = callback(tmp9(tmp5[10]).Button, obj7);
    tmp12Result = callback(View, obj6);
  }
  items2[2] = tmp12Result;
  items2[3] = callback(onRemoveName(first[11]), { style: tmp.error, error });
  obj[1] = items2;
  return callback2(View, obj);
};