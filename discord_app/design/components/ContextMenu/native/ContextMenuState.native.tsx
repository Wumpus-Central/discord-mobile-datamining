// === Module 9336: ContextMenuState ===

// Module 9336 (ContextMenuState)
import c from "c" /* 576 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1272 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import HapticUtils from "HapticUtils" /* 5056 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const module_570 = fn(570);
let obj3 = module_570.create(() => ({ menu: null }));
fn(558);
function updateContextMenuState(absoluteX, absoluteY, callback1) {
  ({ pan, itemMeasurements, activeIndex } = callback1);
  const result = pan.set(absoluteY);
  value = itemMeasurements.get();
  let num = 0;
  if (0 < value.length) {
    while (true) {
      let tmp3 = value[num + 1];
      let tmp4 = value[num];
      if (absoluteY >= tmp3) {
        if (absoluteY <= tmp3 + value[num + 3]) {
          if (absoluteX >= tmp4) {
            if (absoluteX <= tmp4 + tmp2) {
              break;
            }
          }
        }
      }
      num = num + 4;
    }
    const result1 = num / 4;
    if (activeIndex.get() !== result1) {
      const result2 = activeIndex.set(result1);
      ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
    }
  }
  const result3 = activeIndex.set(-1);
}
const obj7 = { INDEX_BOUNDS_WIDTH_OFFSET: 2, INDEX_BOUNDS_HEIGHT_OFFSET: 3, INDEX_BOUNDS_PAGE_Y_OFFSET: 1, INDEX_BOUNDS_PAGE_X_OFFSET: 0, INDEX_BOUNDS_OFFSET: 4, runOnJS: fn(4811).runOnJS, triggerHapticFeedback: fn(5056).triggerHapticFeedback, HapticFeedbackTypes: fn(5056).HapticFeedbackTypes };
updateContextMenuState.__closure = obj7;
updateContextMenuState.__workletHash = 10158111154044;
updateContextMenuState.__initData = { code: "function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}" };
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveContextMenu() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(menu) {
      return menu.menu;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return obj3(first);
}) : (function useActiveContextMenu() {
  return obj3((menu) => menu.menu);
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuState.native.tsx");

export const INDEX_BOUNDS_OFFSET = 4;
export const INDEX_BOUNDS_PAGE_X_OFFSET = 0;
export const INDEX_BOUNDS_PAGE_Y_OFFSET = 1;
export const INDEX_BOUNDS_WIDTH_OFFSET = 2;
export const INDEX_BOUNDS_HEIGHT_OFFSET = 3;
export const ContextMenuStore = obj3;
export const showContextMenu = function showContextMenu(size) {
  _require = size;
  require("ReactBatchUpdates").batchUpdates(() => obj3.setState({ menu }));
};
export const hideContextMenu = function hideContextMenu() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState((menu) => {
      let obj = menu;
      if (null != menu.menu) {
        obj = { menu: null };
      }
      return obj;
    });
  });
};
export const useActiveContextMenu = tmp3;
export { updateContextMenuState };
export const useContextMenuState = ReactCompilerGating.isReactCompilerEnabled() ? (function useContextMenuState() {
  const cResult = c.c(4);
  const sharedValue = ReanimatedRexport.useSharedValue(-1);
  const sharedValue1 = ReanimatedRexport.useSharedValue([]);
  const sharedValue2 = ReanimatedRexport.useSharedValue(-1);
  if (cResult[0] === sharedValue2) {
    if (cResult[1] === sharedValue1) {
      if (cResult[2] === sharedValue) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const obj5 = { pan: sharedValue, itemMeasurements: sharedValue1, activeIndex: sharedValue2 };
  cResult[0] = sharedValue2;
  cResult[1] = sharedValue1;
  cResult[2] = sharedValue;
  cResult[3] = obj5;
  tmp5 = obj5;
}) : (function useContextMenuState() {
  const sharedValue = ReanimatedRexport.useSharedValue(-1);
  const sharedValue1 = ReanimatedRexport.useSharedValue([]);
  const sharedValue2 = ReanimatedRexport.useSharedValue(-1);
  const items = [sharedValue, sharedValue1, sharedValue2];
  return noop.useMemo(() => ({ pan: sharedValue, itemMeasurements: sharedValue1, activeIndex: sharedValue2 }), items);
});
export const resetContextMenuState = function resetContextMenuState(contextMenuState) {
  ({ activeIndex, pan, itemMeasurements } = contextMenuState);
  const result = activeIndex.set(-1);
  const result1 = pan.set(-1);
  if (itemMeasurements.get().length > 0) {
    const result2 = itemMeasurements.set([]);
  }
};