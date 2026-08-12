// discord_app/design/components/ContextMenu/native/ContextMenuState.native.tsx
import noop from "noop";
import keys from "keys";
import { batchUpdates } from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import { HapticFeedbackTypes } from "../../../../modules/haptics/HapticUtils.native.tsx";
import { ReanimatedRexport } from "../../../../modules/reanimated/ReanimatedRexport.tsx";

const require = arg1;
keys = keys.create(() => ({ menu: null }));
function updateContextMenuState(absoluteX, absoluteY, closure_17) {
  let activeIndex;
  let itemMeasurements;
  let pan;
  ({ pan, itemMeasurements, activeIndex } = closure_17);
  const result = pan.set(absoluteY);
  const value = itemMeasurements.get();
  let num = 0;
  if (0 < value.length) {
    while (true) {
      let tmp3 = value[num + 1];
      let tmp4 = value[num];
      let tmp5 = num;
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
      const obj = ReanimatedRexport;
      ReanimatedRexport.runOnJS(HapticFeedbackTypes.triggerHapticFeedback)(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_LIGHT);
      const runOnJSResult = ReanimatedRexport.runOnJS(HapticFeedbackTypes.triggerHapticFeedback);
    }
  }
  const result3 = activeIndex.set(-1);
}
keys = { INDEX_BOUNDS_WIDTH_OFFSET: 2, INDEX_BOUNDS_HEIGHT_OFFSET: 3, INDEX_BOUNDS_PAGE_Y_OFFSET: 1, INDEX_BOUNDS_PAGE_X_OFFSET: 0, INDEX_BOUNDS_OFFSET: 4, runOnJS: require("module_4083").runOnJS, triggerHapticFeedback: require("HapticFeedbackTypes").triggerHapticFeedback, HapticFeedbackTypes: require("HapticFeedbackTypes").HapticFeedbackTypes };
updateContextMenuState.__closure = keys;
updateContextMenuState.__workletHash = 10158111154044;
updateContextMenuState.__initData = { code: "function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}" };
let result = require("batchUpdates").fileFinishedImporting("design/components/ContextMenu/native/ContextMenuState.native.tsx");

export const INDEX_BOUNDS_OFFSET = 4;
export const INDEX_BOUNDS_PAGE_X_OFFSET = 0;
export const INDEX_BOUNDS_PAGE_Y_OFFSET = 1;
export const INDEX_BOUNDS_WIDTH_OFFSET = 2;
export const INDEX_BOUNDS_HEIGHT_OFFSET = 3;
export const ContextMenuStore = keys;
export const showContextMenu = function showContextMenu(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_3.setState({ menu: closure_0 }));
};
export const hideContextMenu = function hideContextMenu() {
  batchUpdates.batchUpdates(() => {
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
  return keys((menu) => menu.menu);
};
export { updateContextMenuState };
export const useContextMenuState = function useContextMenuState() {
  sharedValue = sharedValue(sharedValue1[3]).useSharedValue(-1);
  const obj = sharedValue(sharedValue1[3]);
  sharedValue1 = sharedValue(sharedValue1[3]).useSharedValue([]);
  const obj2 = sharedValue(sharedValue1[3]);
  const sharedValue2 = sharedValue(sharedValue1[3]).useSharedValue(-1);
  const items = [sharedValue, sharedValue1, sharedValue2];
  return sharedValue2.useMemo(() => ({ pan: sharedValue, itemMeasurements: sharedValue1, activeIndex: sharedValue2 }), items);
};
export const resetContextMenuState = function resetContextMenuState(contextMenuState) {
  let activeIndex;
  let itemMeasurements;
  let pan;
  ({ activeIndex, pan, itemMeasurements } = contextMenuState);
  const result = activeIndex.set(-1);
  const result1 = pan.set(-1);
  if (itemMeasurements.get().length > 0) {
    const result2 = itemMeasurements.set([]);
  }
};