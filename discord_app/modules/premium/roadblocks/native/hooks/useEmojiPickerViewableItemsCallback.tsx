// === Module 9943: useEmojiPickerViewableItemsCallback ===

// Module 9943 (useEmojiPickerViewableItemsCallback)
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, currentUser;

let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx");

export default function useEmojiPickerViewableItemsChanged(arg0) {
  let stateFromStores;
  _require = arg0;
  let closure_1 = react.useRef(0);
  let obj = require("get initialized");
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    const obj = closure_1(stateFromStores[3]);
    const result = obj.canUseEmojisEverywhere(currentUser);
    let tmp5 = !result;
    if (result) {
      const tmp2Result = closure_1(stateFromStores[3]);
      tmp5 = !tmp2Result.canUseAnimatedEmojis(currentUser);
    }
    return tmp5;
  });
  const items1 = [arg0, stateFromStores];
  return react.useMemo(() => {
    let ref;
    const obj = closure_0(stateFromStores[4]);
    closure_0 = obj.debounce(() => {
      closure_0(ref.current > 7);
    }, 200);
    let onViewableItemsChanged;
    if (stateFromStores) {
      onViewableItemsChanged = (arg0) => {
        const iter = arg0.changed[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let item = nextResult.item;
          let isSectionNitroLocked;
          let tmp2 = nextResult;
          let _Math = Math;
          let current = ref.current;
          if (item != null) {
            isSectionNitroLocked = item.isSectionNitroLocked;
          }
          let num = 0;
          if (true === isSectionNitroLocked) {
            let num2 = -1;
            if (tmp2.isViewable) {
              num2 = 1;
            }
            num = num2;
          }
          ref.current = max(0, current + num);
          continue;
        }
        closure_0();
      };
    }
    return { onViewableItemsChanged };
  }, items1);
};