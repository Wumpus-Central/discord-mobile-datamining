// === Module 8667: ContextMenuState ===

// Module 8667 (ContextMenuState)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import noop from "module_19" /* 19 */;

require = fn;
let module_560 = fn(560);
module_560.create(() => ({ menu: null }));
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
module_560 = { INDEX_BOUNDS_WIDTH_OFFSET: 2, INDEX_BOUNDS_HEIGHT_OFFSET: 3, INDEX_BOUNDS_PAGE_Y_OFFSET: 1, INDEX_BOUNDS_PAGE_X_OFFSET: 0, INDEX_BOUNDS_OFFSET: 4, runOnJS: fn(4296).runOnJS, triggerHapticFeedback: fn(4528).triggerHapticFeedback, HapticFeedbackTypes: fn(4528).HapticFeedbackTypes };
updateContextMenuState.__closure = module_560;
updateContextMenuState.__workletHash = 10158111154044;
updateContextMenuState.__initData = { code: "function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuState.native.tsx");

export const INDEX_BOUNDS_OFFSET = 4;
export const INDEX_BOUNDS_PAGE_X_OFFSET = 0;
export const INDEX_BOUNDS_PAGE_Y_OFFSET = 1;
export const INDEX_BOUNDS_WIDTH_OFFSET = 2;
export const INDEX_BOUNDS_HEIGHT_OFFSET = 3;
export const ContextMenuStore = module_560;
export const showContextMenu = function showContextMenu(size) {
  _require = size;
  require("ReactBatchUpdates").batchUpdates(() => module_560.setState({ menu }));
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
export const useActiveContextMenu = function useActiveContextMenu() {
  return module_560((menu) => menu.menu);
};
export { updateContextMenuState };
export const useContextMenuState = function useContextMenuState() {
  const sharedValue = ReanimatedRexport.useSharedValue(-1);
  const sharedValue1 = ReanimatedRexport.useSharedValue([]);
  const sharedValue2 = ReanimatedRexport.useSharedValue(-1);
  const items = [sharedValue, sharedValue1, sharedValue2];
  return noop.useMemo(() => ({ pan: sharedValue, itemMeasurements: sharedValue1, activeIndex: sharedValue2 }), items);
};
export const resetContextMenuState = function resetContextMenuState(contextMenuState) {
  ({ activeIndex, pan, itemMeasurements } = contextMenuState);
  const result = activeIndex.set(-1);
  const result1 = pan.set(-1);
  if (itemMeasurements.get().length > 0) {
    const result2 = itemMeasurements.set([]);
  }
};