// discord_app/modules/custom_status/native/EditCustomStatusWithPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import shared from "../../../design/shared.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import setAccessibilityFocus from "../../a11y/native/setAccessibilityFocus.android.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _modDef7183 from "../../../../_runtime/metro/07183__.js";
import maybeShowDiscardChangesAlertDefault from "../../user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx";
import setCustomStatusDefault from "../setCustomStatus.tsx";
import removeCustomStatusDefault from "../utils/removeCustomStatus.tsx";
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import CustomStatusPreviewDefault from "CustomStatusPreview.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function ClearInputButton(onPress) {
  const obj = {
    style: { borderRadius: 10, paddingLeft: 8 },
    accessibilityRole: "button",
    accessibilityLabel: null,
    onPress: null,
    hitSlop: null,
    children: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.VkKicb);
  obj.onPress = onPress.onPress;
  obj.hitSlop = { top: 8, bottom: 8, right: 8 };
  const tmp = closure_15();
  obj.children = map1(native.Icon, {
    source: _modDef7183,
    style: closure_15().closeIcon,
    size: native.Icon.Sizes.SMALL,
  });
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
  if (null == _prompt) {
    _prompt = onClose(analyticsLocations[14])();
  }
  ref = stateFromStores.useRef(_prompt);
  const items = [analyticsLocations];
  const effect = obj.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, {
      type: constants2.EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW,
      location_stack: analyticsLocations,
    });
  }, items);
  const tmp5 = callback3();
  const customStatusActivity = navigation(analyticsLocations[16]).useCustomStatusActivity();
  const obj2 = navigation(analyticsLocations[16]);
  const items1 = [first1];
  stateFromStores = navigation(analyticsLocations[17]).useStateFromStores(items1, () => first1.getCurrentUser());
  let str;
  const obj3 = navigation(analyticsLocations[17]);
  if (customStatusActivity != null) {
    str = customStatusActivity.state;
  }
  if (str == null) {
    str = "";
  }
  const tmp13 = ref(stateFromStores.useState(str), 2);
  value = tmp13[0];
  closure_6 = tmp15;
  let emoji;
  if (customStatusActivity != null) {
    emoji = customStatusActivity.emoji;
  }
  if (emoji == null) {
    emoji = null;
  }
  const tmp12Result = ref(stateFromStores.useState(emoji), 2);
  first1 = tmp12Result[0];
  maxLength = tmp19;
  const tmp12Result2 = ref(stateFromStores.useState(onClose(analyticsLocations[18])()), 2);
  first2 = tmp12Result2[0];
  onChange = tmp12Result2[1];
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
      const AccessibilityAnnouncer = navigation(4607).AccessibilityAnnouncer;
      const intl = navigation(1115).intl;
      AccessibilityAnnouncer.announce(intl.string(navigation(1115).t.YdUwBS));
    }, 300);
    onClose();
  }, items3);
  ref1 = obj.useRef(null);
  callback2 = obj.useCallback(() => {
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref: ref1, delay: 500 });
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
    const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
      onPressEmoji: callback3,
      onClose: callback2,
      pickerIntention: EmojiIntention.STATUS,
    });
  }, items5);
  const callback5 = obj.useCallback(() => {
    closure_8(null);
    closure_6("");
  }, items6);
  ref2 = obj.useRef(null);
  const ref3 = stateFromStores.useRef(null);
  const insets = tmp10(tmp7[24])({ includeKeyboardHeight: true, isKeyboardAwareOnIOS: false }).insets;
  const obj4 = { insets, inputs: null, scrollViewRef: ref3 };
  const items7 = [{ ref: ref2 }];
  obj4.inputs = items7;
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
      tmp2 = first1 !== ref.current.statusEmoji;
    }
    if (!tmp2) {
      tmp2 = first2 !== ref.current.clearAfter;
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
      headerLeft: NavigatorHeader.getHeaderCloseButton(callback7),
    };
    navigation.setOptions(obj);
  }, items11);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj5 = { style: tmp5.container, children: null };
    const obj6 = { style: tmp5.previewContainer, children: memo1 };
    const items12 = [ref1(closure_6, obj6), , ,];
    const obj7 = { style: tmp5.statusSection, children: null };
    const obj8 = { style: tmp5.statusSectionHeader, children: null };
    const obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
    const intl5 = tmp6(tmp7[11]).intl;
    obj9.children = intl5.string(tmp6(tmp7[11]).t.zOdg0A);
    obj8.children = ref1(tmp6(tmp7[31]).Text, obj9);
    const items13 = [ref1(closure_6, obj8)];
    const obj10 = { style: tmp5.statusInput, children: null };
    const obj11 = { style: tmp5.statusInputRow, children: null };
    const obj12 = {
      ref: ref1,
      accessibilityLabel: null,
      accessibilityValue: null,
      accessibilityRole: "button",
      onPress: null,
      children: null,
    };
    const intl6 = tmp6(tmp7[11]).intl;
    obj12.accessibilityLabel = intl6.string(tmp6(tmp7[11]).t.WkfRZP);
    let name;
    if (first1 != null) {
      name = first1.name;
    }
    const obj13 = { text: name };
    obj12.accessibilityValue = obj13;
    obj12.onPress = callback4;
    const obj14 = { emoji: first1, size: 20, style: tmp5.emoji, withPlaceholder: true };
    obj12.children = ref1(tmp10(tmp7[32]), obj14);
    const items14 = [ref1(tmp6(tmp7[10]).PressableOpacity, obj12), ,];
    const obj15 = {
      ref: ref2,
      maxLength,
      placeholder: labelResult,
      placeholderTextColor: tmp5.inputPlaceholder.color,
      accessibilityLabel: null,
      onSubmitEditing: null,
      onFocus: null,
      style: null,
      value: null,
      onChange: null,
      autoCorrect: false,
      showBorder: false,
      showTopContainer: false,
      autoCapitalize: "none",
      inputTextStyle: null,
      multiline: true,
      submitBehavior: "blurAndSubmit",
      returnKeyType: "done",
      autoFocus: true,
    };
    const intl2 = tmp6(tmp7[11]).intl;
    obj15.accessibilityLabel = intl2.string(tmp6(tmp7[11]).t.xalUlT);
    obj15.onSubmitEditing = callback6;
    obj15.onFocus = tmp10(tmp7[25])(obj4).onFocus;
    obj15.style = tmp5.status;
    obj15.value = value;
    obj15.onChange = tmp15;
    obj15.inputTextStyle = tmp5.statusText;
    items14[1] = ref1(tmp10(tmp7[33]), obj15);
    let tmp48Result = null != first1;
    if (!tmp48Result) {
      tmp48Result = "" !== value;
    }
    if (tmp48Result) {
      const obj16 = { onPress: callback5 };
      tmp48Result = tmp48(ref2, obj16);
    }
    items14[2] = tmp48Result;
    obj11.children = items14;
    obj10.children = callback2(closure_6, obj11);
    items13[1] = ref1(closure_6, obj10);
    obj7.children = items13;
    items12[1] = callback2(closure_6, obj7);
    const obj17 = { hasIcons: false, children: null };
    const obj18 = { label: null, arrow: true, onPress: null, trailing: null };
    const intl3 = tmp6(tmp7[11]).intl;
    obj18.label = intl3.string(tmp6(tmp7[11]).t["+14vvU"]);
    obj18.onPress = function onPress() {
      ChatInputUtils.dismissKeyboard();
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(11467, dependencyMap.paths),
        "ClearAfterOptionsActionSheet",
        { initialValue: first2, onChange },
      );
    };
    const obj19 = { variant: "text-sm/medium", children: tmp10(tmp7[39])(first2) };
    obj18.trailing = ref1(tmp6(tmp7[31]).Text, obj19);
    obj17.children = ref1(tmp6(tmp7[35]).TableRow, obj18);
    items12[2] = ref1(tmp6(tmp7[34]).TableRowGroup, obj17);
    let tmp48Result3 = null != customStatusActivity;
    if (tmp48Result3) {
      const obj20 = { hasIcons: true, children: null };
      const obj21 = { icon: null, label: null, onPress: null, variant: "danger" };
      const obj22 = { color: tmp10(tmp7[9]).colors.TEXT_FEEDBACK_CRITICAL };
      obj21.icon = tmp48(tmp6(tmp7[40]).TrashIcon, obj22);
      const intl4 = tmp6(tmp7[11]).intl;
      obj21.label = intl4.string(tmp6(tmp7[11]).t.wO53tu);
      obj21.onPress = callback1;
      obj20.children = tmp48(tmp6(tmp7[35]).TableRow, obj21);
      tmp48Result3 = tmp48(tmp6(tmp7[34]).TableRowGroup, obj20);
    }
    items12[3] = tmp48Result3;
    obj5.children = items12;
    const tmp46Result = callback2(closure_6, obj5);
    const tmp10Result = tmp10(tmp7[33]);
    if (tmp6Result.isAndroid()) {
      const obj23 = { ref: ref3, keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
      const obj24 = { paddingBottom: insets.bottom };
      obj23.contentContainerStyle = obj24;
      obj23.children = tmp46Result;
      let tmp48Result4 = tmp48(value, obj23);
    } else {
      const obj25 = { keyboardShouldPersistTaps: "always", children: tmp46Result };
      tmp48Result4 = tmp48(tmp6(tmp7[42]).KeyboardAwareScrollView, obj25);
    }
    return tmp48Result4;
  }
  const tmp11 = onClose(analyticsLocations[18])();
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const STATUS_MAX_LENGTH = fn(11382).STATUS_MAX_LENGTH;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsSections: c10, NOOP: closure_11, Fonts } = Constants);
const EmojiIntention = fn(1375).EmojiIntention;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { flexGrow: 1, padding: 16, rowGap: 24 },
  statusSection: { rowGap: 8 },
  statusInput: {
    flexDirection: "column",
    rowGap: 4,
    backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.lg,
    padding: 12,
  },
  statusInputRow: { flexDirection: "row", alignItems: "center" },
  emoji: { marginRight: 8 },
  status: null,
  statusText: null,
  inputPlaceholder: null,
  previewContainer: null,
  closeIcon: null,
  statusSectionHeader: null,
};
let obj3 = {
  flexDirection: "column",
  rowGap: 4,
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  padding: 12,
};
obj2.status = {
  color: nativeDefault.colors.TEXT_STRONG,
  lineHeight: 16,
  flexGrow: 1,
  alignSelf: "flex-start",
  paddingVertical: 0,
  paddingHorizontal: 0,
};
let obj4 = {
  color: nativeDefault.colors.TEXT_STRONG,
  lineHeight: 16,
  flexGrow: 1,
  alignSelf: "flex-start",
  paddingVertical: 0,
  paddingHorizontal: 0,
};
obj2.statusText = {
  fontSize: 16,
  fontFamily: Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.colors.TEXT_STRONG,
  flexGrow: 1,
  height: "auto",
  textAlignVertical: "center",
};
let obj5 = {
  fontSize: 16,
  fontFamily: Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.colors.TEXT_STRONG,
  flexGrow: 1,
  height: "auto",
  textAlignVertical: "center",
};
obj2.inputPlaceholder = { color: nativeDefault.colors.TEXT_MUTED };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.previewContainer = { alignItems: "center" };
let obj6 = { color: nativeDefault.colors.TEXT_MUTED };
let obj7 = { alignItems: "center" };
obj2.closeIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0 };
obj2.statusSectionHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_status/native/EditCustomStatusWithPreview.tsx");

export default function EditCustomStatusWithPreviewModal(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const _prompt = analyticsLocations.prompt;
  const items = [analyticsLocations, _prompt];
  const memo = noop.useMemo(() => {
    let obj = { root: null };
    const obj2 = { title: null, headerTitle: null, headerLeft: null, ignoreKeyboard: true, render: null };
    let intl = util.intl;
    obj2.title = intl.string(util.t.Iuzg8R);
    obj2.headerTitle = function headerTitle() {
      const obj = { title: null };
      const intl = analyticsLocations(1115).intl;
      obj.title = intl.string(analyticsLocations(1115).t.Iuzg8R);
      return closure_1_13(analyticsLocations(8107).GenericHeaderTitle, obj);
    };
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj2.render = function render(arg0, navigation) {
      return closure_2_13(EditCustomStatusWithPreview, {
        navigation,
        onClose: _prompt(dependencyMap[43]).pop,
        analyticsLocations,
        prompt: _prompt,
      });
    };
    obj.root = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "root", screens: memo, headerStatusBarHeight: null, headerStyle: null };
  analyticsLocations(1365);
  obj.headerStatusBarHeight = 12;
  let obj3;
  if (!tmp3Result.isAndroid()) {
    obj3 = { height: 56 };
  }
  obj.headerStyle = obj3;
  return closure_13(analyticsLocations(7245).Navigator, obj);
}
