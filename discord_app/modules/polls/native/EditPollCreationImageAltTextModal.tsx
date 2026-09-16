// === Module 12371: EditPollCreationImageAltTextModal ===

// Module 12371 (EditPollCreationImageAltTextModal)
import nativeDefault from "native" /* 576 */;
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators" /* 12370 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const MAX_POLL_ANSWER_LENGTH = fn(7943).MAX_POLL_ANSWER_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18, paddingTop: 10 }, separator: null, contentContainer: null, imageContainer: null, formContainer: null, textInput: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.separator = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj2.contentContainer = { flex: 1, justifyContent: "center" };
let obj4 = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj2.imageContainer = { borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
obj2.formContainer = { paddingHorizontal: 16 };
let obj5 = { borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
obj2.textInput = { backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.radii.lg };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModal.tsx");

export default function EditPollCreationImageAltTextModal(imageSize) {
  ({ channelId, answer, onSave } = imageSize);
  imageSize = imageSize.imageSize;
  value = undefined;
  const tmp = closure_10();
  const tmp4 = value(12368)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
  const upload = tmp4.upload;
  let str;
  if (upload != null) {
    str = upload.description;
  }
  if (str == null) {
    str = "";
  }
  const tmp5 = _slicedToArray(noop.useState(str), 2);
  value = tmp5[0];
  const items = [onSave, value];
  const callback = noop.useCallback(() => {
    if (null != first) {
      onSave(tmp);
    }
    const result = EditPollCreationImageAltTextModalActionCreators.closeEditPollCreationImageAltTextModal();
  }, items);
  const obj2 = { top: true, style: tmp.container, children: null };
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { onPress: onSave(12370).closeEditPollCreationImageAltTextModal, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = onSave(1115).intl;
  obj4.accessibilityLabel = intl.string(onSave(1115).t.cpT0Cq);
  obj4.children = closure_8(onSave(1177).Icon, { source: value(7102) });
  const items1 = [closure_8(closure_5, obj4), , ];
  const obj6 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = onSave(1115).intl;
  obj6.children = intl2.string(onSave(1115).t.Cq44Rg);
  items1[1] = closure_8(onSave(4634).Text, obj6);
  const obj7 = { onPress: callback, activeOpacity: 0.5, children: null };
  const obj8 = { variant: "text-md/medium", color: "text-brand", children: null };
  const intl3 = onSave(1115).intl;
  obj8.children = intl3.string(onSave(1115).t["R3BPH+"]);
  obj7.children = closure_8(onSave(4634).Text, obj8);
  items1[2] = closure_8(closure_5, obj7);
  obj3.children = items1;
  const items2 = [closure_9(closure_6, obj3), closure_8(closure_6, { style: tmp.separator }), ];
  const obj10 = { style: tmp.contentContainer, children: null };
  const obj11 = { style: tmp.imageContainer, children: tmp4.renderImage };
  const obj5 = { source: value(7102) };
  const obj9 = { style: tmp.separator };
  const items3 = [closure_8(closure_6, obj11), ];
  const obj12 = { style: tmp.formContainer, children: null };
  const items4 = [closure_8(onSave(1177).Spacer, { size: 27 }), , , ];
  const obj13 = { children: null };
  const tmp2Result = value(5664);
  const intl4 = onSave(1115).intl;
  obj13.children = intl4.string(onSave(1115).t["/2Gnoa"]);
  items4[1] = closure_8(value(9956), obj13);
  const obj14 = { showTopContainer: false, showBorder: false, multiline: false, value, onChange: tmp5[1], clearButtonVisibility: onSave(1177).ClearButtonVisibility.WITH_CONTENT, style: tmp.textInput, textContentType: "none", maxLength: MAX_POLL_ANSWER_LENGTH, autoFocus: true, autoCorrect: true, accessibilityLabel: null };
  const intl5 = onSave(1115).intl;
  obj14.accessibilityLabel = intl5.string(onSave(1115).t["/2Gnoa"]);
  items4[2] = closure_8(onSave(8728).FormInput, obj14);
  items4[3] = closure_8(onSave(1177).Spacer, { size: 27 });
  obj12.children = items4;
  items3[1] = closure_9(closure_6, obj12);
  obj10.children = items3;
  items2[2] = closure_9(tmp2Result, obj10);
  obj2.children = items2;
  return closure_9(onSave(7233).SafeAreaPaddingView, obj2);
};