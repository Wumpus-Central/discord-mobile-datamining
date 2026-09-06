// === Module 11114: EditCustomStatusWithPreview ===

// Module 11114 (EditCustomStatusWithPreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import shared from "shared" /* 4411 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 4971 */;
import Pressables from "Pressables" /* 5123 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import _modDef6940 from "module_6940" /* 6940 */;
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert" /* 10923 */;
import setCustomStatusDefault from "setCustomStatus" /* 11118 */;
import removeCustomStatusDefault from "removeCustomStatus" /* 11120 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11121 */;
import CustomStatusPreviewDefault from "CustomStatusPreview" /* 11148 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function ClearInputButton(onPress) {
  let obj = { style: { borderRadius: 10, paddingLeft: 8 }, accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.VkKicb);
  obj.onPress = onPress.onPress;
  obj.hitSlop = { top: 8, bottom: 8, right: 8 };
  obj = { source: _modDef6940, style: closure_15().closeIcon, size: native.Icon.Sizes.SMALL };
  obj.children = map1(native.Icon, obj);
  return map1(Pressables.PressableOpacity, obj);
}
function EditCustomStatusWithPreview(navigation) {
  navigation = navigation.navigation;
  const onClose = navigation.onClose;
  const analyticsLocations = navigation.analyticsLocations;
  let _prompt = navigation.prompt;
  let stateFromStores;
  value = undefined;
  closure_6 = undefined;
  let first1;
  maxLength = undefined;
  let first2;
  let onChange;
  c11 = undefined;
  let callback;
  let ref1;
  let callback2;
  let callback3;
  let ref2;
  let ref;
  let memo;
  let callback7;
  let obj = stateFromStores;
  if (null == _prompt) {
    _prompt = onClose(analyticsLocations[14])();
  }
  ref = stateFromStores.useRef(_prompt);
  const items = [analyticsLocations];
  const effect = obj.useEffect(() => {
    const obj = { type: constants2.EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW, location_stack: analyticsLocations };
    obj.track(constants.OPEN_MODAL, obj);
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
  value = tmp13[0];
  closure_6 = tmp15;
  let emoji;
  if (customStatusActivity != null) {
    emoji = customStatusActivity.emoji;
  }
  if (emoji == null) {
    emoji = null;
  }
  let tmp12Result = tmp12(obj.useState(emoji), 2);
  first1 = tmp12Result[0];
  maxLength = tmp19;
  tmp12Result = tmp12(obj.useState(onClose(analyticsLocations[18])()), 2);
  first2 = tmp12Result[0];
  onChange = tmp12Result[1];
  if (null != ref.current) {
    let current = ref.current;
    let labelResult = current.label();
  } else {
    let intl = tmp6(tmp7[11]).intl;
    labelResult = intl.string(tmp6(tmp7[11]).t.xod367);
  }
  c11 = labelResult;
  const items2 = [value, first1, first2, onClose, analyticsLocations];
  callback = obj.useCallback(() => {
    const obj = { text, emojiInfo: first1, clearAfter: first2, analyticsLocations, prompt: null };
    const current = ref.current;
    obj.prompt = current;
    setCustomStatusDefault(obj);
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.Og40Yn));
    onClose();
  }, items2);
  const items3 = [onClose];
  const callback1 = obj.useCallback(() => {
    removeCustomStatusDefault();
    const timerId = setTimeout(() => {
      const AccessibilityAnnouncer = navigation(4411).AccessibilityAnnouncer;
      const intl = navigation(1114).intl;
      AccessibilityAnnouncer.announce(intl.string(navigation(1114).t.YdUwBS));
    }, 300);
    onClose();
  }, items3);
  ref1 = obj.useRef(null);
  callback2 = obj.useCallback(() => {
    const obj = { ref: ref1, delay: 500 };
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
        obj.name = str2;
        obj.animated = id.animated;
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
    const obj = { onPressEmoji: callback3, onClose: callback2, pickerIntention: EmojiIntention.STATUS };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items5);
  const callback5 = obj.useCallback(() => {
    closure_8(null);
    closure_6("");
  }, items6);
  ref2 = obj.useRef(null);
  const ref3 = obj.useRef(null);
  const insets = tmp10(tmp7[24])({ includeKeyboardHeight: true, isKeyboardAwareOnIOS: false }).insets;
  obj = { insets, inputs: null, scrollViewRef: ref3 };
  const items7 = [{ ref: ref2 }];
  obj.inputs = items7;
  const callback6 = obj.useCallback(() => {
    const current = ref2.current;
    if (current != null) {
      current.blur();
    }
  }, []);
  ref = obj.useRef({ statusText: value, statusEmoji: first1, clearAfter: first2 });
  const items8 = [value, first1, first2];
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
    const obj = { hasEdits: memo, onHasEdits: ChatInputUtils.dismissKeyboard, resetPending, onConfirm: onClose };
    maybeShowDiscardChangesAlertDefault(obj);
  }, items9);
  const items10 = [stateFromStores, value, first1, labelResult];
  const items11 = [navigation, callback, memo, callback7];
  const memo1 = obj.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { user: tmp, pendingStatusText, pendingStatusEmoji: first1, placeholderText };
      tmp2 = map1(CustomStatusPreviewDefault, obj);
    }
    return tmp2;
  }, items10);
  const layoutEffect = obj.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        const obj = { label: null, onPress: null, disabled: null };
        const intl = navigation(analyticsLocations[11]).intl;
        obj.label = intl.string(navigation(analyticsLocations[11]).t["R3BPH+"]);
        obj.onPress = onPress;
        obj.disabled = !memo;
        return ref1(navigation(analyticsLocations[29]).HeaderTextButton, obj);
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(callback7)
    };
    navigation.setOptions(obj);
  }, items11);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { style: tmp5.container, children: null };
    obj1 = { style: tmp5.previewContainer, children: memo1 };
    const items12 = [ref1(closure_6, obj1), , , ];
    obj2 = { style: tmp5.statusSection, children: null };
    const obj3 = { style: tmp5.statusSectionHeader, children: null };
    const obj4 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
    const intl5 = tmp6(tmp7[11]).intl;
    obj4.children = intl5.string(tmp6(tmp7[11]).t.zOdg0A);
    obj3.children = ref1(tmp6(tmp7[31]).Text, obj4);
    const items13 = [ref1(closure_6, obj3), ];
    const obj5 = { style: tmp5.statusInput, children: null };
    const obj6 = { style: tmp5.statusInputRow, children: null };
    const obj7 = { ref: ref1, accessibilityLabel: null, accessibilityValue: null, accessibilityRole: "button", onPress: null, children: null };
    const intl6 = tmp6(tmp7[11]).intl;
    obj7.accessibilityLabel = intl6.string(tmp6(tmp7[11]).t.WkfRZP);
    let name;
    if (first1 != null) {
      name = first1.name;
    }
    const obj8 = { text: name };
    obj7.accessibilityValue = obj8;
    obj7.onPress = callback4;
    const obj9 = { emoji: first1, size: 20, style: tmp5.emoji, withPlaceholder: true };
    obj7.children = ref1(tmp10(tmp7[32]), obj9);
    const items14 = [ref1(tmp6(tmp7[10]).PressableOpacity, obj7), , ];
    const obj10 = { ref: ref2, maxLength, placeholder: labelResult, placeholderTextColor: tmp5.inputPlaceholder.color, accessibilityLabel: null, onSubmitEditing: null, onFocus: null, style: null, value: null, onChange: null, autoCorrect: false, showBorder: false, showTopContainer: false, autoCapitalize: "none", inputTextStyle: null, multiline: true, submitBehavior: "blurAndSubmit", returnKeyType: "done", autoFocus: true };
    const intl2 = tmp6(tmp7[11]).intl;
    obj10.accessibilityLabel = intl2.string(tmp6(tmp7[11]).t.xalUlT);
    obj10.onSubmitEditing = callback6;
    obj10.onFocus = tmp10(tmp7[25])(obj).onFocus;
    obj10.style = tmp5.status;
    obj10.value = value;
    obj10.onChange = tmp15;
    obj10.inputTextStyle = tmp5.statusText;
    items14[1] = ref1(tmp10(tmp7[33]), obj10);
    let tmp48Result = null != first1;
    if (!tmp48Result) {
      tmp48Result = "" !== value;
    }
    if (tmp48Result) {
      const obj11 = { onPress: callback5 };
      tmp48Result = tmp48(ref2, obj11);
    }
    items14[2] = tmp48Result;
    obj6.children = items14;
    obj5.children = callback2(closure_6, obj6);
    items13[1] = ref1(closure_6, obj5);
    obj2.children = items13;
    items12[1] = callback2(closure_6, obj2);
    const obj12 = { hasIcons: false, children: null };
    const obj13 = { label: null, arrow: true, onPress: null, trailing: null };
    const intl3 = tmp6(tmp7[11]).intl;
    obj13.label = intl3.string(tmp6(tmp7[11]).t["+14vvU"]);
    obj13.onPress = function onPress() {
      let obj = ChatInputUtils;
      obj.dismissKeyboard();
      obj = { initialValue: first2, onChange };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11201, dependencyMap.paths), "ClearAfterOptionsActionSheet", obj);
    };
    const obj14 = { variant: "text-sm/medium", children: tmp10(tmp7[39])(first2) };
    obj13.trailing = ref1(tmp6(tmp7[31]).Text, obj14);
    obj12.children = ref1(tmp6(tmp7[35]).TableRow, obj13);
    items12[2] = ref1(tmp6(tmp7[34]).TableRowGroup, obj12);
    tmp48Result = null != customStatusActivity;
    if (tmp48Result) {
      const obj15 = { hasIcons: true, children: null };
      const obj16 = { icon: null, label: null, onPress: null, variant: "danger" };
      const obj17 = { color: tmp10(tmp7[9]).colors.TEXT_FEEDBACK_CRITICAL };
      obj16.icon = tmp48(tmp6(tmp7[40]).TrashIcon, obj17);
      const intl4 = tmp6(tmp7[11]).intl;
      obj16.label = intl4.string(tmp6(tmp7[11]).t.wO53tu);
      obj16.onPress = callback1;
      obj15.children = tmp48(tmp6(tmp7[35]).TableRow, obj16);
      tmp48Result = tmp48(tmp6(tmp7[34]).TableRowGroup, obj15);
    }
    items12[3] = tmp48Result;
    obj.children = items12;
    const tmp46Result = callback2(closure_6, obj);
    const tmp10Result = tmp10(tmp7[33]);
    if (tmp6Result.isAndroid()) {
      const obj18 = { ref: ref3, keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
      const obj19 = { paddingBottom: insets.bottom };
      obj18.contentContainerStyle = obj19;
      obj18.children = tmp46Result;
      let tmp48Result1 = tmp48(value, obj18);
    } else {
      const obj20 = { keyboardShouldPersistTaps: "always", children: tmp46Result };
      tmp48Result1 = tmp48(tmp6(tmp7[42]).KeyboardAwareScrollView, obj20);
    }
    return tmp48Result1;
  }
  const tmp11 = onClose(analyticsLocations[18])();
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const STATUS_MAX_LENGTH = fn(11115).STATUS_MAX_LENGTH;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsSections: c10, NOOP: closure_11, Fonts } = Constants);
const EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = { container: { flexGrow: 1, padding: 16, rowGap: 24 }, statusSection: { rowGap: 8 }, statusInput: null, statusInputRow: null, emoji: null, status: null, statusText: null, inputPlaceholder: null, previewContainer: null, closeIcon: null, statusSectionHeader: null };
createStyles = { flexDirection: "column", rowGap: 4, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: 12 };
createStyles.statusInput = createStyles;
createStyles.statusInputRow = { flexDirection: "row", alignItems: "center" };
createStyles.emoji = { marginRight: 8 };
createStyles.status = { color: nativeDefault.colors.TEXT_STRONG, lineHeight: 16, flexGrow: 1, alignSelf: "flex-start", paddingVertical: 0, paddingHorizontal: 0 };
let obj1 = { color: nativeDefault.colors.TEXT_STRONG, lineHeight: 16, flexGrow: 1, alignSelf: "flex-start", paddingVertical: 0, paddingHorizontal: 0 };
createStyles.statusText = { fontSize: 16, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_STRONG, flexGrow: 1, height: "auto", textAlignVertical: "center" };
let obj2 = { fontSize: 16, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_STRONG, flexGrow: 1, height: "auto", textAlignVertical: "center" };
createStyles.inputPlaceholder = { color: nativeDefault.colors.TEXT_MUTED };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.previewContainer = { alignItems: "center" };
let obj3 = { color: nativeDefault.colors.TEXT_MUTED };
let obj4 = { alignItems: "center" };
createStyles.closeIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0 };
createStyles.statusSectionHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_status/native/EditCustomStatusWithPreview.tsx");

export default function EditCustomStatusWithPreviewModal(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const _prompt = analyticsLocations.prompt;
  const items = [analyticsLocations, _prompt];
  const memo = noop.useMemo(() => {
    let obj = { root: null };
    obj = { title: null, headerTitle: null, headerLeft: null, ignoreKeyboard: true, render: null };
    let intl = util.intl;
    obj.title = intl.string(util.t.Iuzg8R);
    obj.headerTitle = function headerTitle() {
      const obj = { title: null };
      const intl = analyticsLocations(1114).intl;
      obj.title = intl.string(analyticsLocations(1114).t.Iuzg8R);
      return closure_1_13(analyticsLocations(7863).GenericHeaderTitle, obj);
    };
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj.render = function render(arg0, navigation) {
      return closure_2_13(EditCustomStatusWithPreview, { navigation, onClose: _prompt(dependencyMap[43]).pop, analyticsLocations, prompt: _prompt });
    };
    obj.root = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "root", screens: memo, headerStatusBarHeight: 12, headerStyle: null };
  const obj2 = analyticsLocations(1116);
  const tmp2 = closure_13;
  obj = undefined;
  if (!tmp3Result.isAndroid()) {
    obj = { height: 56 };
  }
  obj.headerStyle = obj;
  return tmp2(analyticsLocations(7000).Navigator, obj);
};