// discord_app/modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useKeyboardActionSheetHeightDefault from "../../../action_sheet/native/useKeyboardActionSheetHeight.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_4 = {
  code: "(function useBottomSheetFlashListBottomViewabilityInsetTsx1(){let[bottomSheetPosition]=this.__closure;var _bottomSheetPosition$,_bottomSheetPosition;return(_bottomSheetPosition$=(_bottomSheetPosition=bottomSheetPosition)===null||_bottomSheetPosition===void 0?void 0:_bottomSheetPosition.get())!==null&&_bottomSheetPosition$!==void 0?_bottomSheetPosition$:0;})",
};
let closure_5 = {
  code: "(function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){let[distanceBetweenExpandedScreenTopAndSheetTop,scheduleOnRN,handleBottomViewabilityInsetDebounced]=this.__closure;const bottomViewabilityInset=sheetPosition-distanceBetweenExpandedScreenTopAndSheetTop;scheduleOnRN(handleBottomViewabilityInsetDebounced,bottomViewabilityInset);})",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx",
);

export function useBottomSheetFlashListBottomViewabilityInset() {
  const context = noop.useContext(require("AppLauncherContext").AppLauncherContext);
  let bottomSheetPosition;
  if (context != null) {
    bottomSheetPosition = context.bottomSheetPosition;
  }
  const flashListRef = noop.useRef(null);
  const diff = useWindowDimensionsDefault().height - useKeyboardActionSheetHeightDefault().maximum;
  const bottomVisibilityInsetRef = noop.useRef(9999);
  importDefault = bottomVisibilityInsetRef;
  const memo = noop.useMemo(
    () =>
      _modDef12.debounce(function _handleBottomViewabilityInset(current) {
        _undefined.current = current;
        current = ref.current;
        if (current != null) {
          current.updateViewableItems();
        }
      }, 200),
    [],
  );
  const tmp3 = useWindowDimensionsDefault();
  items = [closure_4, bottomSheetPosition];
  _require = undefined;
  [tmp11, tmp12] = items;
  function useBottomSheetFlashListBottomViewabilityInsetTsx1() {
    let num;
    if (_undefined != null) {
      num = _undefined.get();
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  const items1 = [tmp12];
  useBottomSheetFlashListBottomViewabilityInsetTsx1.__closure = items1;
  useBottomSheetFlashListBottomViewabilityInsetTsx1.__workletHash = 15442314305075;
  useBottomSheetFlashListBottomViewabilityInsetTsx1.__initData = tmp11;
  const items2 = [closure_5, diff, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, memo];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items2;
  function useBottomSheetFlashListBottomViewabilityInsetTsx2(arg0) {
    _undefined(c2, arg0 - c0);
  }
  const items3 = [tmp14, tmp15, tmp16];
  useBottomSheetFlashListBottomViewabilityInsetTsx2.__closure = items3;
  useBottomSheetFlashListBottomViewabilityInsetTsx2.__workletHash = 15359386741414;
  useBottomSheetFlashListBottomViewabilityInsetTsx2.__initData = tmp13;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    useBottomSheetFlashListBottomViewabilityInsetTsx1,
    useBottomSheetFlashListBottomViewabilityInsetTsx2,
  );
  return { flashListRef, bottomVisibilityInsetRef };
}
