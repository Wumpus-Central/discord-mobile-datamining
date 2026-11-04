// === Module 10054: ContextMenuState ===

// Module 10054 (ContextMenuState)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import _mod1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const module_560 = fn(560);
const obj3 = module_560.create(() => ({ menu: null }));
let items = [{ code: "(function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){let[INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);})" }, 2, 3, 1, 0, 4, fn(1705).scheduleOnRN, fn(5384).triggerHapticFeedback, fn(5384).HapticFeedbackTypes];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
let closure_129_4;
let closure_129_5;
let closure_129_6;
let closure_129_7;
[tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
function updateContextMenuState(arg0, arg1, callback) {
  ({ pan, itemMeasurements, activeIndex } = callback);
  const result = pan.set(arg1);
  value = itemMeasurements.get();
  let num = 0;
  if (0 < value.length) {
    while (true) {
      let tmp6 = value[num + noop];
      let tmp8 = value[num + obj3];
      if (arg1 >= tmp6) {
        if (arg1 <= tmp6 + value[num + dependencyMap]) {
          if (arg0 >= tmp8) {
            if (arg0 <= tmp8 + tmp3) {
              break;
            }
          }
        }
      }
      num = num + React4;
    }
    const result1 = num / React4;
    if (activeIndex.get() !== result1) {
      const result2 = activeIndex.set(result1);
      hasOwnProperty(timestampProducer, constants.IMPACT_LIGHT);
    }
  }
  const result3 = activeIndex.set(-1);
}
const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
updateContextMenuState.__closure = items1;
updateContextMenuState.__workletHash = 7765355212136;
updateContextMenuState.__initData = tmp3;
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuState.native.tsx");

export const INDEX_BOUNDS_OFFSET = 4;
export const INDEX_BOUNDS_PAGE_X_OFFSET = 0;
export const INDEX_BOUNDS_PAGE_Y_OFFSET = 1;
export const INDEX_BOUNDS_WIDTH_OFFSET = 2;
export const INDEX_BOUNDS_HEIGHT_OFFSET = 3;
export const ContextMenuStore = obj3;
export function showContextMenu(size) {
  _require = size;
  require("ReactBatchUpdates").batchUpdates(() => obj3.setState({ menu }));
}
export function hideContextMenu() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState((menu) => {
      let obj = menu;
      if (null != menu.menu) {
        obj = { menu: null };
      }
      return obj;
    });
  });
}
export function useActiveContextMenu() {
  return obj3((menu) => menu.menu);
}
export { updateContextMenuState };
export function useContextMenuState() {
  const sharedValue = _mod1652.useSharedValue(-1);
  const sharedValue1 = _mod1652.useSharedValue([]);
  const sharedValue2 = _mod1652.useSharedValue(-1);
  items = [sharedValue, sharedValue1, sharedValue2];
  return noop.useMemo(() => ({ pan: sharedValue, itemMeasurements: sharedValue1, activeIndex: sharedValue2 }), items);
}
export function resetContextMenuState(c14) {
  ({ activeIndex, pan, itemMeasurements } = c14);
  const result = activeIndex.set(-1);
  const result1 = pan.set(-1);
  if (itemMeasurements.get().length > 0) {
    const result2 = itemMeasurements.set([]);
  }
}