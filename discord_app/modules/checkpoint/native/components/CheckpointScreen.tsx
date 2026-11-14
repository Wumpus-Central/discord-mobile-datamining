// === Module 14270: CheckpointScreen ===

// Module 14270 (CheckpointScreen)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const CheckpointConstants = fn(6377);
({ CHECKPOINT_CONTENT_MAX_HEIGHT: hasOwnProperty, CHECKPOINT_CONTENT_MAX_WIDTH: closure_6, CHECKPOINT_NAV_HEIGHT: metroImportDefault } = CheckpointConstants);
const jsx = fn(21).jsx;
const PX_24 = nativeDefault.space.PX_24;
const createStyles = fn(5306);
let closure_11 = createStyles.createStyles({ container: { height: "100%", width: "100%" }, scroll: { width: "100%" }, scrollContent: { flexGrow: 1 }, centered: { justifyContent: "center" } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default function CheckpointScreen(centered) {
  let flag = centered.centered;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_11();
  const tmp2 = flag(1630)();
  dependencyMap = tmp2;
  const size = flag(1496)({ ignoreKeyboard: true });
  const width = size.width;
  const height = size.height;
  items = [tmp2, flag, width, height];
  let obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.scroll, contentContainerStyle: null, showsVerticalScrollIndicator: false, children: null };
  const items1 = [tmp.scrollContent, , , ];
  const memo = width.useMemo(() => {
    let num = 0;
    if (!flag) {
      const _Math = Math;
      num = Math.max(0, (width - closure_1.left - closure_1.right - 2 * PX_24 - timestampProducer) / 2);
    }
    let num3 = 0;
    if (!flag) {
      const _Math2 = Math;
      num3 = Math.max(0, (height - closure_1.top - metroImportDefault - closure_1.bottom - PX_24 - hasOwnProperty) / 2);
    }
    const obj = { paddingLeft: closure_1.left + PX_24 + num, paddingRight: closure_1.right + PX_24 + num, paddingBottom: null, paddingTop: null };
    let num5 = 0;
    if (!flag) {
      num5 = PX_24;
    }
    obj.paddingBottom = closure_1.bottom + num5 + num3;
    let num6 = 0;
    if (!flag) {
      num6 = metroImportDefault;
    }
    obj.paddingTop = closure_1.top + num6 + num3;
    return obj;
  }, items);
  if (flag) {
    flag = tmp.centered;
  }
  items1[1] = flag;
  items1[2] = memo;
  items1[3] = centered.contentContainerStyle;
  obj2.contentContainerStyle = items1;
  obj2.children = centered.children;
  obj.children = <height style={tmp.scroll} contentContainerStyle={null} showsVerticalScrollIndicator={false}>{null}</height>;
  return <closure_4 style={tmp.container}>{null}</closure_4>;
};
export function useCheckpointScreenContentHeight(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const rect = useSafeAreaInsetsDefault();
  if (flag) {
    let diff = height - rect.top - rect.bottom;
  } else {
    const _Math = Math;
    diff = Math.min(height - rect.top - metroImportDefault - rect.bottom - PX_24, hasOwnProperty);
  }
  return diff;
}
export function useCheckpointScreenFrame() {
  ({ height, width } = useWindowDimensionsDefault({ ignoreKeyboard: true }));
  const rect = useSafeAreaInsetsDefault();
  const size = { width: Math.min(width, timestampProducer + 2 * PX_24), height: Math.min(height, height - (height - rect.top - metroImportDefault - rect.bottom - PX_24) + hasOwnProperty) };
  return size;
}