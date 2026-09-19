// === Module 10899: MediaKeyboardBottomSheetHeaderSimple ===

// Module 10899 (MediaKeyboardBottomSheetHeaderSimple)
import nativeDefault from "native" /* 576 */;
import MediaKeyboardBottomSheetHandleDefault from "MediaKeyboardBottomSheetHandle" /* 10900 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
const obj = { headerHandleOnlyWrap: { height: fn(1608).HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 } };
let closure_4 = createStyles.createStyles(obj);
const obj3 = { height: fn(1608).HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default noop.memo(function MediaKeyboardBottomSheetHeaderSimple(arg0) {
  ({ animatedIndex, onPress } = arg0);
  return <View style={closure_4().headerHandleOnlyWrap}>{jsx(MediaKeyboardBottomSheetHandleDefault, { animatedIndex, onPress })}</View>;
});