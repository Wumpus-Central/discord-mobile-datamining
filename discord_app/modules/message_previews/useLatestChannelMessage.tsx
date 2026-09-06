// discord_app/modules/message_previews/useLatestChannelMessage.tsx
import MessagePreviewManagerDefault from "MessagePreviewManager.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import MessagePreviewStore from "MessagePreviewStore.tsx";

const require = fn;
const useEffect = fn(19).useEffect;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_previews/useLatestChannelMessage.tsx");

export default function useLatestChannelMessage(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c1 = undefined;
  id = undefined;
  _slicedToArray = undefined;
  ({ guild_id: c1, id } = arg0);
  let items = [MessagePreviewStore];
  const tmp = _slicedToArray(
    flag(id[3]).useStateFromStoresArray(items, () => {
      if (flag) {
        const items = [null, true];
        let items1 = items;
      } else {
        items1 = [MessagePreviewStore.message(c1, id), MessagePreviewStore.isLatest(c1, id)];
      }
      return items1;
    }),
    2,
  );
  _slicedToArray = tmp2;
  let items1 = [id, tmp[1]];
  useEffect(() => {
    let tmp2 = null == id;
    if (!tmp2) {
      tmp2 = closure_3;
    }
    if (!tmp2) {
      MessagePreviewManagerDefault.addWant(id);
    }
  }, items1);
  return tmp[0];
}
