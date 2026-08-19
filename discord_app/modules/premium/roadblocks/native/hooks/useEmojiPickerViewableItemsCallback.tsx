// === Module 9392: useEmojiPickerViewableItemsChanged ===

// Module 9392 (useEmojiPickerViewableItemsChanged)
import noop from "noop" /* 19 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx");

export default function useEmojiPickerViewableItemsChanged(arg0) {
  const _require = arg0;
  closure_1 = React.useRef(0);
  const items = [closure_4];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    const result = callback2(stateFromStores[3]).canUseEmojisEverywhere(currentUser);
    let tmp5 = !result;
    if (result) {
      tmp5 = !callback2(stateFromStores[3]).canUseAnimatedEmojis(currentUser);
      const tmp2Result = callback2(stateFromStores[3]);
    }
    return tmp5;
  });
  const items1 = [arg0, stateFromStores];
  return React.useMemo(() => {
    callback = callback(stateFromStores[4]).debounce(() => {
      callback(ref.current > 7);
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
          closure_1_1.current = Math.max(0, closure_1_1.current + num);
          continue;
        }
        callback();
      };
    }
    return { onViewableItemsChanged };
  }, items1);
};