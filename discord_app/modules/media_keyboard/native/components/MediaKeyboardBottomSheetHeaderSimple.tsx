// === Module 10640: MediaKeyboardBottomSheetHeaderSimple ===

// Module 10640 (MediaKeyboardBottomSheetHeaderSimple)
import nativeDefault from "native" /* 576 */;
import MediaKeyboardBottomSheetHandleDefault from "MediaKeyboardBottomSheetHandle" /* 10641 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { headerHandleOnlyWrap: null };
obj = { height: fn(1607).HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 };
obj.headerHandleOnlyWrap = obj;
let closure_4 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default noop.memo(function MediaKeyboardBottomSheetHeaderSimple(arg0) {
  ({ animatedIndex, onPress } = arg0);
  return <View style={closure_4().headerHandleOnlyWrap}>{jsx(MediaKeyboardBottomSheetHandleDefault, { animatedIndex, onPress })}</View>;
});