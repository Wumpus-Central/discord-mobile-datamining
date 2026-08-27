// discord_app/modules/polls/native/EditPollCreationImageAltTextModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_POLL_ANSWER_LENGTH } from "../PollsConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ TouchableOpacity: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, header: null, separator: null, contentContainer: null, imageContainer: null, formContainer: null, textInput: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18, paddingTop: 10 };
createCacheKey[2] = { borderBottomWidth: 1, borderColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
createCacheKey[3] = { flex: 1, justifyContent: "center" };
let obj1 = { borderBottomWidth: 1, borderColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
createCacheKey[4] = { borderRadius: ThemesDefault.radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
createCacheKey[5] = { paddingHorizontal: 16 };
const obj2 = { borderRadius: ThemesDefault.radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: ThemesDefault.radii.lg };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj3 = { backgroundColor: ThemesDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: ThemesDefault.radii.lg };
let result = require("set").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModal.tsx");

export default function EditPollCreationImageAltTextModal(imageSize) {
  ({ channelId, answer, onSave } = imageSize);
  imageSize = imageSize.imageSize;
  let first;
  const tmp = callback4();
  const tmp4 = first(11696)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
  const upload = tmp4.upload;
  let obj = React;
  let str;
  if (upload != null) {
    str = upload.description;
  }
  if (str == null) {
    str = "";
  }
  const tmp5 = callback(React.useState(str), 2);
  first = tmp5[0];
  const items = [onSave, first];
  callback = obj.useCallback(() => {
    if (null != first) {
      onSave(tmp);
    }
    const result = onSave(closure_1_2[8]).closeEditPollCreationImageAltTextModal();
  }, items);
  obj = { top: true, style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { onPress: onSave(11698).closeEditPollCreationImageAltTextModal, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = onSave(1236).intl;
  obj1[3] = intl.string(onSave(1236).t.cpT0Cq);
  obj1[4] = callback2(onSave(1297).Icon, { source: first(7697) });
  const items1 = [callback2(closure_5, obj1), , ];
  const obj3 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = onSave(1236).intl;
  obj3[2] = intl2.string(onSave(1236).t.Cq44Rg);
  items1[1] = callback2(onSave(4441).Text, obj3);
  const obj4 = { onPress: callback, activeOpacity: 0.5, children: null };
  const obj5 = { variant: "text-md/medium", color: "text-brand", children: null };
  const intl3 = onSave(1236).intl;
  obj5[2] = intl3.string(onSave(1236).t["R3BPH+"]);
  obj4[2] = callback2(onSave(4441).Text, obj5);
  items1[2] = callback2(closure_5, obj4);
  obj[1] = items1;
  const items2 = [callback3(closure_6, obj), callback2(closure_6, { style: tmp.separator }), ];
  const obj7 = { style: tmp.contentContainer, children: null };
  let tmp2Result = tmp2(6001);
  const items3 = [callback2(closure_6, { style: tmp.imageContainer, children: tmp4.renderImage }), ];
  const obj9 = { style: tmp.formContainer, children: null };
  const items4 = [callback2(onSave(1297).Spacer, { size: 27 }), , , ];
  const obj10 = { children: null };
  tmp2Result = tmp2(9825);
  const intl4 = onSave(1236).intl;
  obj10[0] = intl4.string(onSave(1236).t["/2Gnoa"]);
  items4[1] = callback2(tmp2Result, obj10);
  const obj11 = { showTopContainer: false, showBorder: false, multiline: false, value: first, onChange: tmp5[1], clearButtonVisibility: onSave(1297).ClearButtonVisibility.WITH_CONTENT, style: tmp.textInput, textContentType: "none", maxLength: MAX_POLL_ANSWER_LENGTH, autoFocus: true, autoCorrect: true, accessibilityLabel: null };
  const intl5 = onSave(1236).intl;
  obj11[11] = intl5.string(onSave(1236).t["/2Gnoa"]);
  items4[2] = callback2(onSave(8295).FormInput, obj11);
  items4[3] = callback2(onSave(1297).Spacer, { size: 27 });
  obj9[1] = items4;
  items3[1] = callback3(closure_6, obj9);
  obj7[1] = items3;
  items2[2] = callback3(tmp2Result, obj7);
  obj[2] = items2;
  return callback3(onSave(5505).SafeAreaPaddingView, obj);
};