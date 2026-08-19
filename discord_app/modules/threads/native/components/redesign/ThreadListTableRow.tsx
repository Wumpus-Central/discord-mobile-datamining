// discord_app/modules/threads/native/components/redesign/ThreadListTableRow.tsx
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
function ThreadListTableRow(thread) {
  thread = thread.thread;
  const onPress = thread.onPress;
  ({ start, end } = thread);
  const items = [onPress, thread.id];
  const memo = importAllResult.useMemo(() => null != onPress ? (() => callback(id.id)) : undefined, items);
  const obj = { style: callback().subLabel, children: jsx(thread(onPress[6]).ThreadSubtext, { thread }) };
  obj[1] = <View style={callback().subLabel}>{jsx(thread(onPress[6]).ThreadSubtext, { thread })}</View>;
  obj[2] = memo;
  obj[3] = start;
  obj[4] = end;
  return jsx(thread(onPress[5]).TableRow, { style: callback().subLabel, children: jsx(thread(onPress[6]).ThreadSubtext, { thread }) });
}
let closure_6 = createCacheKey.createStyles({ subLabel: { maxWidth: "100%", marginTop: 2 } });
const memoResult = importAllResult.memo((threadId) => {
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  let obj = threadId(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { thread: null, start: null, end: null, onPress: null };
    obj[0] = stateFromStores;
    obj[1] = start;
    obj[2] = end;
    obj[3] = onPress;
    tmp2 = <ThreadListTableRow thread={null} start={null} end={null} onPress={null} />;
  }
  return tmp2;
});
const result = require("obj132").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListTableRow.tsx");

export default memoResult;