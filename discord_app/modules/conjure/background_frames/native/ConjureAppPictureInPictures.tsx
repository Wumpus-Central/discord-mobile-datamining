// === Module 19516: ConjureAppPictureInPictures ===

// Module 19516 (ConjureAppPictureInPictures)
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 16714 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19520 */;
import useFloatConjureAppsOffScreenDefault from "useFloatConjureAppsOffScreen" /* 19524 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6904 */;

require = fn;
function ConjureAppPictureInPictureLayer(frameIds) {
  frameIds = frameIds.frameIds;
  let width;
  let height;
  let tmp = closure_10();
  const size = width(height[6])();
  width = size.width;
  height = size.height;
  const tmp4 = width(height[7])();
  noop = tmp4;
  const avoidance = width(height[8])(tmp4);
  const tmp5 = width(height[9])({ includeCustomKeyboard: true });
  const sharedValue = frameIds(height[10]).useSharedValue(false);
  let obj = frameIds(height[10]);
  const tmp2 = width;
  const tmp3 = height;
  const sharedValue1 = frameIds(height[10]).useSharedValue(false);
  items = [width, height, tmp4];
  const memo = noop.useMemo(() => conjureAppPictureInPictureLayout.getCloseTargetCenter(width, height, closure_3), items);
  let obj2 = frameIds(height[10]);
  const items1 = [sharedValue];
  const items2 = [frameIds, width];
  const stateFromStoresArray = frameIds(height[12]).useStateFromStoresArray(items1, () => frameIds.map((item) => {
    const tmp = sharedValue1(sharedValue.getFrame(item));
    const pictureInPictureSize = frameIds(height[11]).getPictureInPictureSize(width, memo(tmp));
    const obj = frameIds(height[11]);
    const obj2 = frameIds(height[11]);
    return obj2.getPictureInPictureWindowSize(pictureInPictureSize, frameIds(height[13]).isConjureAppPictureInPictureInteractive(tmp, frameIds(height[14]).SHOWS_STATIC_CARD)).height;
  }), items2);
  const items3 = [stateFromStoresArray];
  closure_9 = noop.useMemo(() => conjureAppPictureInPictureLayout.getStackOffsets(stateFromStoresArray), items3);
  const items4 = [tmp.layer, ];
  let hidden = tmp5;
  if (tmp5) {
    hidden = tmp.hidden;
  }
  const obj4 = { style: items4, pointerEvents: null, children: null };
  items4[1] = hidden;
  let str = "box-none";
  if (tmp5) {
    str = "none";
  }
  obj4.pointerEvents = str;
  const items5 = [
    stateFromStoresArray(tmp2(tmp3[15]), { center: memo, shown: sharedValue, hovered: sharedValue1 }),
    frameIds.map((frameId, index) => {
      const obj = { frameId, stackOffset: null, windowWidth: null, windowHeight: null, safeArea: null, avoidance: null, closeTargetCenter: null, closeTargetShown: null, closeTargetHovered: null };
      let num = closure_9[index];
      if (num == null) {
        num = 0;
      }
      obj.stackOffset = num;
      obj.windowWidth = width;
      obj.windowHeight = height;
      obj.safeArea = safeArea;
      obj.avoidance = avoidance;
      obj.closeTargetCenter = memo;
      obj.closeTargetShown = sharedValue;
      obj.closeTargetHovered = sharedValue1;
      return React5(ConjureAppPictureInPictureWithSize, obj, frameId);
    })
  ];
  obj4.children = items5;
  return closure_9(avoidance, obj4);
}
function ConjureAppPictureInPictureWithSize(frameId) {
  frameId = frameId.frameId;
  const windowWidth = frameId.windowWidth;
  items = [FramesStore];
  const items1 = [frameId];
  stateFromStores = frameId(stateFromStores[12]).useStateFromStores(items, () => metroImportDefault(timestampProducer(FramesStore.getFrame(frameId))), items1);
  const items2 = [windowWidth, stateFromStores];
  const memo = noop.useMemo(() => conjureAppPictureInPictureLayout.getPictureInPictureSize(windowWidth, stateFromStores), items2);
  const obj2 = {};
  const obj = frameId(stateFromStores[12]);
  const merged = Object.assign(frameId);
  obj2.size = memo;
  return closure_8(windowWidth(stateFromStores[14]), obj2);
}
const View = fn(17).View;
const FramesConstants = fn(6905);
({ asLaunched: closure_6, getPipOrientationLockStateForFrame: metroImportDefault } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5142);
let closure_10 = createStyles.createStyles({ layer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, hidden: { opacity: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictures.tsx");

export default function ConjureAppPictureInPictures() {
  useFloatConjureAppsOffScreenDefault();
  const conjureAppPictureInPictureFrameIds = conjureAppPictureInPictureFrames.useConjureAppPictureInPictureFrameIds();
  let tmp2 = null;
  if (conjureAppPictureInPictureFrameIds.length > 0) {
    const obj2 = { frameIds: conjureAppPictureInPictureFrameIds };
    tmp2 = React5(ConjureAppPictureInPictureLayer, obj2);
  }
  return tmp2;
};