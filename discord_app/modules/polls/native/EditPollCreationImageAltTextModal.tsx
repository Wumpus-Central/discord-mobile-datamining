// === Module 12229: EditPollCreationImageAltTextModal ===

// Module 12229 (EditPollCreationImageAltTextModal)
import nativeDefault from "native" /* 576 */;
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators" /* 12228 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const MAX_POLL_ANSWER_LENGTH = fn(7829).MAX_POLL_ANSWER_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, separator: null, contentContainer: null, imageContainer: null, formContainer: null, textInput: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.container = createStyles;
createStyles.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18, paddingTop: 10 };
createStyles.separator = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
createStyles.contentContainer = { flex: 1, justifyContent: "center" };
let obj1 = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
createStyles.imageContainer = { borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
createStyles.formContainer = { paddingHorizontal: 16 };
const obj2 = { borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
createStyles.textInput = { backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.radii.lg };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModal.tsx");

export default function EditPollCreationImageAltTextModal(imageSize) {
  ({ channelId, answer, onSave } = imageSize);
  imageSize = imageSize.imageSize;
  value = undefined;
  const tmp = closure_10();
  const tmp4 = value(12226)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
  const upload = tmp4.upload;
  let obj = noop;
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
  const callback = obj.useCallback(() => {
    if (null != first) {
      onSave(tmp);
    }
    const result = EditPollCreationImageAltTextModalActionCreators.closeEditPollCreationImageAltTextModal();
  }, items);
  obj = { top: true, style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const obj1 = { onPress: onSave(12228).closeEditPollCreationImageAltTextModal, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = onSave(1114).intl;
  obj1.accessibilityLabel = intl.string(onSave(1114).t.cpT0Cq);
  obj1.children = closure_8(onSave(1178).Icon, { source: value(6992) });
  const items1 = [closure_8(closure_5, obj1), , ];
  const obj3 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = onSave(1114).intl;
  obj3.children = intl2.string(onSave(1114).t.Cq44Rg);
  items1[1] = closure_8(onSave(4556).Text, obj3);
  const obj4 = { onPress: callback, activeOpacity: 0.5, children: null };
  const obj5 = { variant: "text-md/medium", color: "text-brand", children: null };
  const intl3 = onSave(1114).intl;
  obj5.children = intl3.string(onSave(1114).t["R3BPH+"]);
  obj4.children = closure_8(onSave(4556).Text, obj5);
  items1[2] = closure_8(closure_5, obj4);
  obj.children = items1;
  const items2 = [closure_9(closure_6, obj), closure_8(closure_6, { style: tmp.separator }), ];
  const obj7 = { style: tmp.contentContainer, children: null };
  tmp2(5578);
  const items3 = [closure_8(closure_6, { style: tmp.imageContainer, children: tmp4.renderImage }), ];
  const obj9 = { style: tmp.formContainer, children: null };
  const items4 = [closure_8(onSave(1178).Spacer, { size: 27 }), , , ];
  const obj10 = { children: null };
  const tmp2Result = tmp2(9816);
  const intl4 = onSave(1114).intl;
  obj10.children = intl4.string(onSave(1114).t["/2Gnoa"]);
  items4[1] = closure_8(tmp2Result, obj10);
  const obj11 = { showTopContainer: false, showBorder: false, multiline: false, value, onChange: tmp5[1], clearButtonVisibility: onSave(1178).ClearButtonVisibility.WITH_CONTENT, style: tmp.textInput, textContentType: "none", maxLength: MAX_POLL_ANSWER_LENGTH, autoFocus: true, autoCorrect: true, accessibilityLabel: null };
  const intl5 = onSave(1114).intl;
  obj11.accessibilityLabel = intl5.string(onSave(1114).t["/2Gnoa"]);
  items4[2] = closure_8(onSave(8593).FormInput, obj11);
  items4[3] = closure_8(onSave(1178).Spacer, { size: 27 });
  obj9.children = items4;
  items3[1] = closure_9(closure_6, obj9);
  obj7.children = items3;
  items2[2] = closure_9(tmp2Result, obj7);
  obj.children = items2;
  return closure_9(onSave(7123).SafeAreaPaddingView, obj);
};