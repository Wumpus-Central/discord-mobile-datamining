// discord_app/modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx",
);

export default function useEmojiPickerViewableItemsChanged(arg0) {
  _require = arg0;
  closure_1 = noop.useRef(0);
  const items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    const result = closure_1(stateFromStores[3]).canUseEmojisEverywhere(currentUser);
    let tmp5 = !result;
    if (result) {
      tmp5 = !closure_1(stateFromStores[3]).canUseAnimatedEmojis(currentUser);
      const tmp2Result = closure_1(stateFromStores[3]);
    }
    return tmp5;
  });
  const items1 = [arg0, stateFromStores];
  return noop.useMemo(() => {
    closure_0 = closure_0(stateFromStores[4]).debounce(() => {
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
          let tmp3 = ref;
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
          tmp3.current = Math.max(0, ref.current + num);
          continue;
        }
        closure_0();
      };
    }
    return { onViewableItemsChanged };
  }, items1);
}
