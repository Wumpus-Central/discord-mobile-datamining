// === Module 19109: ConjureAppPictureInPictures ===

// Module 19109 (ConjureAppPictureInPictures)
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 18667 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19113 */;
import useFloatConjureAppsOffScreenDefault from "useFloatConjureAppsOffScreen" /* 19117 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6846 */;

require = fn;
function ConjureAppPictureInPictureLayer(frameIds) {
  frameIds = frameIds.frameIds;
  let height;
  const tmp = closure_10();
  const size = height(1491)();
  const width = size.width;
  height = size.height;
  const tmp4 = height(1625)();
  dependencyMap = tmp4;
  noop = height(19110)(tmp4);
  const tmp5 = height(7101)({ includeCustomKeyboard: true });
  const sharedValue = width(5095).useSharedValue(false);
  const obj = width(5095);
  const tmp2 = height;
  const sharedValue1 = width(5095).useSharedValue(false);
  const items = [width, height, tmp4];
  const memo = noop.useMemo(() => conjureAppPictureInPictureLayout.getCloseTargetCenter(width, height, closure_2), items);
  const items1 = [tmp.layer, ];
  let hidden = tmp5;
  if (tmp5) {
    hidden = tmp.hidden;
  }
  const obj3 = { style: items1, pointerEvents: null, children: null };
  items1[1] = hidden;
  let str = "box-none";
  if (tmp5) {
    str = "none";
  }
  obj3.pointerEvents = str;
  const items2 = [closure_8(tmp2(19114), { center: memo, shown: sharedValue, hovered: sharedValue1 }), frameIds.map((frameId, index) => React6(ConjureAppPictureInPictureWithSize, { frameId, index, windowWidth: width, windowHeight: height, safeArea, avoidance, closeTargetCenter: memo, closeTargetShown: sharedValue, closeTargetHovered: sharedValue1 }, frameId))];
  obj3.children = items2;
  return closure_9(sharedValue, obj3);
}
function ConjureAppPictureInPictureWithSize(frameId) {
  frameId = frameId.frameId;
  const windowWidth = frameId.windowWidth;
  const items = [FramesStore];
  const items1 = [frameId];
  stateFromStores = frameId(stateFromStores[13]).useStateFromStores(items, () => React5(timestampProducer(FramesStore.getFrame(frameId))), items1);
  const items2 = [windowWidth, stateFromStores];
  const memo = noop.useMemo(() => conjureAppPictureInPictureLayout.getPictureInPictureSize(windowWidth, stateFromStores), items2);
  const obj2 = {};
  const obj = frameId(stateFromStores[13]);
  const merged = Object.assign(frameId);
  obj2.size = memo;
  return closure_8(windowWidth(stateFromStores[14]), obj2);
}
const View = fn(17).View;
const FramesConstants = fn(6847);
({ asLaunched: metroRequire, getPipOrientationLockStateForFrame: closure_7 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let closure_10 = createStyles.createStyles({ layer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, hidden: { opacity: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictures.tsx");

export default function ConjureAppPictureInPictures() {
  useFloatConjureAppsOffScreenDefault();
  const conjureAppPictureInPictureFrameIds = conjureAppPictureInPictureFrames.useConjureAppPictureInPictureFrameIds();
  let tmp2 = null;
  if (conjureAppPictureInPictureFrameIds.length > 0) {
    const obj2 = { frameIds: conjureAppPictureInPictureFrameIds };
    tmp2 = React6(ConjureAppPictureInPictureLayer, obj2);
  }
  return tmp2;
};