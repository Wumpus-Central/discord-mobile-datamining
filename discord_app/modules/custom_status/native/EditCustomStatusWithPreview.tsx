// === Module 12079: ClearInputButton ===

// Module 12079 (ClearInputButton)
import ActivityEmoji from "ActivityEmoji";
import setCustomStatus from "setCustomStatus";
import get_ActivityIndicator from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import { STATUS_MAX_LENGTH } from "StatusTypes";
import ME from "ME";
import { EmojiIntention } from "set";
import jsxProd from "removeCustomStatus";
import createCacheKey from "createCacheKey";

let Fonts;
let c10;
let c5;
let c9;
let closure_14;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
function ClearInputButton(onPress) {
  let obj = { style: { borderRadius: 10, paddingLeft: 8 }, accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.VkKicb);
  obj[3] = onPress.onPress;
  obj[4] = { top: 8, bottom: 8, right: 8 };
  obj = { source: null, style: null, size: null };
  obj[0] = importDefault(9184);
  obj[1] = createCacheKey().closeIcon;
  obj[2] = require(1297) /* Button */.Icon.Sizes.SMALL;
  obj[5] = callback(require(1297) /* Button */.Icon, obj);
  return callback(require(4783) /* PressableBase */.PressableOpacity, obj);
}
function EditCustomStatusWithPreview(navigation) {
  navigation = navigation.navigation;
  const onClose = navigation.onClose;
  const analyticsLocations = navigation.analyticsLocations;
  let _prompt = navigation.prompt;
  let ref;
  let stateFromStores;
  let first;
  let c6;
  let first1;
  let c8;
  let first2;
  let closure_10;
  let c11;
  let callback;
  let ref1;
  let callback2;
  let callback3;
  let ref2;
  let closure_17;
  let memo;
  let callback7;
  let obj = stateFromStores;
  if (null == _prompt) {
    _prompt = onClose(analyticsLocations[14])();
  }
  ref = stateFromStores.useRef(_prompt);
  const items = [analyticsLocations];
  const effect = obj.useEffect(() => {
    let obj = onClose(analyticsLocations[15]);
    obj = { type: constants.EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW, location_stack: analyticsLocations };
    obj.track(first2.OPEN_MODAL, obj);
  }, items);
  const tmp5 = callback3();
  let obj1 = navigation(analyticsLocations[16]);
  const customStatusActivity = obj1.useCustomStatusActivity();
  let obj2 = navigation(analyticsLocations[17]);
  const items1 = [first1];
  stateFromStores = obj2.useStateFromStores(items1, () => first1.getCurrentUser());
  let str;
  if (customStatusActivity != null) {
    str = customStatusActivity.state;
  }
  if (str == null) {
    str = "";
  }
  const tmp13 = ref(obj.useState(str), 2);
  first = tmp13[0];
  c6 = tmp15;
  let emoji;
  if (customStatusActivity != null) {
    emoji = customStatusActivity.emoji;
  }
  if (emoji == null) {
    emoji = null;
  }
  let tmp12Result = tmp12(obj.useState(emoji), 2);
  first1 = tmp12Result[0];
  c8 = tmp19;
  tmp12Result = tmp12(obj.useState(onClose(analyticsLocations[18])()), 2);
  first2 = tmp12Result[0];
  closure_10 = tmp12Result[1];
  if (null != ref.current) {
    let current = ref.current;
    let labelResult = current.label();
  } else {
    let intl = tmp6(tmp7[11]).intl;
    labelResult = intl.string(tmp6(tmp7[11]).t.xod367);
  }
  c11 = labelResult;
  const items2 = [first, first1, first2, onClose, analyticsLocations];
  callback = obj.useCallback(() => {
    const obj = { text: first, emojiInfo: first1, clearAfter: first2, analyticsLocations, prompt: null };
    const current = ref.current;
    obj[4] = current;
    onClose(analyticsLocations[19])(obj);
    const AccessibilityAnnouncer = navigation(tmp[20]).AccessibilityAnnouncer;
    const intl = navigation(tmp[11]).intl;
    AccessibilityAnnouncer.announce(intl.string(navigation(analyticsLocations[11]).t.Og40Yn));
    onClose();
  }, items2);
  const items3 = [onClose];
  const callback1 = obj.useCallback(() => {
    onClose(analyticsLocations[21])();
    const AccessibilityAnnouncer = navigation(analyticsLocations[20]).AccessibilityAnnouncer;
    const intl = navigation(analyticsLocations[11]).intl;
    AccessibilityAnnouncer.announce(intl.string(navigation(analyticsLocations[11]).t.YdUwBS));
    onClose();
  }, items3);
  ref1 = obj.useRef(null);
  callback2 = obj.useCallback(() => {
    let obj = navigation(analyticsLocations[22]);
    obj = { ref: ref1, delay: 500 };
    const result = obj.setAccessibilityFocus(obj);
  }, []);
  const items4 = [callback2];
  callback3 = obj.useCallback((id) => {
    const obj = { id: id.id, name: null, animated: null };
    if (null == id.id) {
      if (null != id.surrogates) {
        if ("" !== id.surrogates) {
          let str2 = id.surrogates;
        }
        obj[1] = str2;
        obj[2] = id.animated;
        tmp(obj);
        callback2();
      }
    }
    str2 = id.name;
    if (str2 == null) {
      str2 = "";
    }
  }, items4);
  const items5 = [callback3, callback2];
  const items6 = [tmp12Result[1], tmp13[1]];
  const callback4 = obj.useCallback(() => {
    let obj = navigation(analyticsLocations[23]);
    obj = { onPressEmoji: callback3, onClose: callback2, pickerIntention: callback.STATUS };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items5);
  const callback5 = obj.useCallback(() => {
    _undefined2(null);
    _undefined("");
  }, items6);
  ref2 = obj.useRef(null);
  const ref3 = obj.useRef(null);
  const insets = tmp10(tmp7[24])({ includeKeyboardHeight: true, isKeyboardAwareOnIOS: false }).insets;
  const items7 = [{ ref: ref2 }];
  const callback6 = obj.useCallback(() => {
    const current = ref2.current;
    if (current != null) {
      current.blur();
    }
  }, []);
  closure_17 = obj.useRef({ statusText: first, statusEmoji: first1, clearAfter: first2 });
  const items8 = [first, first1, first2];
  memo = obj.useMemo(() => {
    let tmp2 = first !== ref.current.statusText;
    if (!tmp2) {
      tmp2 = first1 !== tmp.current.statusEmoji;
    }
    if (!tmp2) {
      tmp2 = first2 !== tmp.current.clearAfter;
    }
    return tmp2;
  }, items8);
  const items9 = [memo, onClose];
  callback7 = obj.useCallback(() => {
    const obj = { hasEdits: memo, onHasEdits: null, resetPending: null, onConfirm: null };
    obj[1] = navigation(analyticsLocations[27]).dismissKeyboard;
    obj[2] = c11;
    obj[3] = onClose;
    onClose(analyticsLocations[26])(obj);
  }, items9);
  const items10 = [stateFromStores, first, first1, labelResult];
  const items11 = [navigation, callback, memo, callback7];
  const memo1 = obj.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { user: null, pendingStatusText: null, pendingStatusEmoji: null, placeholderText: null };
      obj[0] = tmp;
      obj[1] = first;
      obj[2] = first1;
      obj[3] = c11;
      tmp2 = ref1(onClose(analyticsLocations[28]), obj);
    }
    return tmp2;
  }, items10);
  const layoutEffect = obj.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        const obj = { label: null, onPress: null, disabled: null };
        const intl = outer1_0(outer1_2[11]).intl;
        obj[0] = intl.string(outer1_0(outer1_2[11]).t["R3BPH+"]);
        obj[1] = closure_12;
        obj[2] = !closure_18;
        return outer1_13(outer1_0(outer1_2[29]).HeaderTextButton, obj);
      },
      headerLeft: null
    };
    obj[1] = navigation(analyticsLocations[30]).getHeaderCloseButton(callback7);
    navigation.setOptions(obj);
  }, items11);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp5.container;
    obj = { style: null, children: null };
    obj[0] = tmp5.previewContainer;
    obj[1] = memo1;
    const items12 = [ref1(c6, obj), , , ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp5.statusSection;
    obj2 = { style: null, children: null };
    obj2[0] = tmp5.statusSectionHeader;
    const obj3 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
    const intl5 = tmp6(tmp7[11]).intl;
    obj3[3] = intl5.string(tmp6(tmp7[11]).t.zOdg0A);
    obj2[1] = ref1(tmp6(tmp7[31]).Text, obj3);
    const items13 = [ref1(c6, obj2), ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp5.statusInput;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp5.statusInputRow;
    const obj6 = { ref: null, accessibilityLabel: null, accessibilityValue: null, accessibilityRole: "button", onPress: null, children: null };
    obj6[0] = ref1;
    const intl6 = tmp6(tmp7[11]).intl;
    obj6[1] = intl6.string(tmp6(tmp7[11]).t.WkfRZP);
    let name;
    if (first1 != null) {
      name = first1.name;
    }
    const obj7 = { text: null };
    obj7[0] = name;
    obj6[2] = obj7;
    obj6[4] = callback4;
    const obj8 = { emoji: null, size: 20, style: null, withPlaceholder: true };
    obj8[0] = first1;
    obj8[2] = tmp5.emoji;
    obj6[5] = ref1(tmp10(tmp7[32]), obj8);
    const items14 = [ref1(tmp6(tmp7[10]).PressableOpacity, obj6), , ];
    const obj9 = { ref: null, maxLength: null, placeholder: null, placeholderTextColor: null, accessibilityLabel: null, onSubmitEditing: null, onFocus: null, style: null, value: null, onChange: null, autoCorrect: false, showBorder: false, showTopContainer: false, autoCapitalize: "none", inputTextStyle: null, multiline: true, submitBehavior: "blurAndSubmit", returnKeyType: "done", autoFocus: true };
    obj9[0] = ref2;
    obj9[1] = c8;
    obj9[2] = labelResult;
    obj9[3] = tmp5.inputPlaceholder.color;
    const intl2 = tmp6(tmp7[11]).intl;
    obj9[4] = intl2.string(tmp6(tmp7[11]).t.xalUlT);
    obj9[5] = callback6;
    obj9[6] = tmp10(tmp7[25])({ insets, inputs: items7, scrollViewRef: ref3 }).onFocus;
    obj9[7] = tmp5.status;
    obj9[8] = first;
    obj9[9] = tmp15;
    obj9[14] = tmp5.statusText;
    items14[1] = ref1(tmp10(tmp7[33]), obj9);
    let tmp48Result = null != first1;
    if (!tmp48Result) {
      tmp48Result = "" !== first;
    }
    if (tmp48Result) {
      const obj10 = { onPress: null };
      obj10[0] = callback5;
      tmp48Result = tmp48(ref2, obj10);
    }
    items14[2] = tmp48Result;
    obj5[1] = items14;
    obj4[1] = callback2(c6, obj5);
    items13[1] = ref1(c6, obj4);
    obj1[1] = items13;
    items12[1] = callback2(c6, obj1);
    const obj11 = { hasIcons: false, children: null };
    const obj12 = { label: null, arrow: true, onPress: null, trailing: null };
    const intl3 = tmp6(tmp7[11]).intl;
    obj12[0] = intl3.string(tmp6(tmp7[11]).t["+14vvU"]);
    obj12[2] = function onPress() {
      let obj = navigation(analyticsLocations[27]);
      obj.dismissKeyboard();
      obj = { initialValue: first2, onChange: closure_10 };
      onClose(analyticsLocations[36]).openLazy(navigation(analyticsLocations[38])(analyticsLocations[37], analyticsLocations.paths), "ClearAfterOptionsActionSheet", obj);
    };
    const obj13 = { variant: "text-sm/medium", children: null };
    obj13[1] = tmp10(tmp7[39])(first2);
    obj12[3] = ref1(tmp6(tmp7[31]).Text, obj13);
    obj11[1] = ref1(tmp6(tmp7[35]).TableRow, obj12);
    items12[2] = ref1(tmp6(tmp7[34]).TableRowGroup, obj11);
    tmp48Result = null != customStatusActivity;
    if (tmp48Result) {
      const obj14 = { hasIcons: true, children: null };
      const obj15 = { icon: null, label: null, onPress: null, variant: "danger" };
      const obj16 = { color: null };
      obj16[0] = tmp10(tmp7[9]).colors.TEXT_FEEDBACK_CRITICAL;
      obj15[0] = tmp48(tmp6(tmp7[40]).TrashIcon, obj16);
      const intl4 = tmp6(tmp7[11]).intl;
      obj15[1] = intl4.string(tmp6(tmp7[11]).t.wO53tu);
      obj15[2] = callback1;
      obj14[1] = tmp48(tmp6(tmp7[35]).TableRow, obj15);
      tmp48Result = tmp48(tmp6(tmp7[34]).TableRowGroup, obj14);
    }
    items12[3] = tmp48Result;
    obj[1] = items12;
    const tmp46Result = callback2(c6, obj);
    const tmp10Result = tmp10(tmp7[33]);
    if (tmp6Result.isAndroid()) {
      const obj17 = { ref: null, keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
      obj17[0] = ref3;
      const obj18 = { paddingBottom: null };
      obj18[0] = insets.bottom;
      obj17[2] = obj18;
      obj17[3] = tmp46Result;
      let tmp48Result1 = tmp48(first, obj17);
    } else {
      const obj19 = { keyboardShouldPersistTaps: "always", children: null };
      obj19[1] = tmp46Result;
      tmp48Result1 = tmp48(tmp6(tmp7[42]).KeyboardAwareScrollView, obj19);
    }
    return tmp48Result1;
  }
  const tmp11 = onClose(analyticsLocations[18])();
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c9, AnalyticsSections: c10, NOOP: unpackModuleId, Fonts } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { container: { flexGrow: 1, padding: 16, rowGap: 24 }, statusSection: { rowGap: 8 }, statusInput: null, statusInputRow: null, emoji: null, status: null, statusText: null, inputPlaceholder: null, previewContainer: null, closeIcon: null, statusSectionHeader: null };
createCacheKey = { flexDirection: "column", rowGap: 4, backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.lg, padding: 12 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
createCacheKey[4] = { marginRight: 8 };
createCacheKey[5] = { color: require("Themes").colors.TEXT_STRONG, lineHeight: 16, flexGrow: 1, alignSelf: "flex-start", paddingVertical: 0, paddingHorizontal: 0 };
let obj1 = { color: require("Themes").colors.TEXT_STRONG, lineHeight: 16, flexGrow: 1, alignSelf: "flex-start", paddingVertical: 0, paddingHorizontal: 0 };
createCacheKey[6] = { fontSize: 16, lineHeight: 20, fontFamily: Fonts.PRIMARY_MEDIUM, color: require("Themes").colors.TEXT_STRONG, flexGrow: 1, height: "auto", textAlignVertical: "center" };
let obj2 = { fontSize: 16, lineHeight: 20, fontFamily: Fonts.PRIMARY_MEDIUM, color: require("Themes").colors.TEXT_STRONG, flexGrow: 1, height: "auto", textAlignVertical: "center" };
createCacheKey[7] = { color: require("Themes").colors.TEXT_MUTED };
const merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[8] = { alignItems: "center" };
let obj3 = { color: require("Themes").colors.TEXT_MUTED };
let obj4 = { alignItems: "center" };
createCacheKey[9] = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0 };
createCacheKey[10] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/custom_status/native/EditCustomStatusWithPreview.tsx");

export default function EditCustomStatusWithPreviewModal(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const _prompt = analyticsLocations.prompt;
  const items = [analyticsLocations, _prompt];
  const memo = React.useMemo(() => {
    let obj = { root: null };
    obj = { title: null, headerTitle: null, headerLeft: null, ignoreKeyboard: true, render: null };
    let intl = analyticsLocations(outer1_2[11]).intl;
    obj[0] = intl.string(analyticsLocations(outer1_2[11]).t.Iuzg8R);
    obj[1] = function headerTitle() {
      const obj = { title: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t.Iuzg8R);
      return callback3(callback(9300).GenericHeaderTitle, obj);
    };
    obj[2] = analyticsLocations(outer1_2[30]).getHeaderCloseButton(_prompt(outer1_2[43]).pop);
    obj[4] = function render(arg0, navigation) {
      return outer1_13(outer1_17, { navigation, onClose: callback2(outer1_2[43]).pop, analyticsLocations: closure_0, prompt: callback2 });
    };
    obj[0] = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "root", screens: memo, headerStatusBarHeight: null, headerStyle: null };
  obj[2] = 12;
  const obj2 = analyticsLocations(501);
  const tmp2 = closure_13;
  const tmp3 = analyticsLocations;
  obj = undefined;
  if (!tmp3Result.isAndroid()) {
    obj = { height: 56 };
  }
  obj[3] = obj;
  return tmp2(analyticsLocations(5636).Navigator, obj);
};