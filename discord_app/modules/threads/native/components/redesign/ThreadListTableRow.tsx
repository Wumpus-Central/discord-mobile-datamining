import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function ThreadListTableRow(thread) {
  let end;
  let start;
  thread = thread.thread;
  const onPress = thread.onPress;
  ({ start, end } = thread);
  const items = [onPress, thread.id];
  const memo = importAllResult.useMemo(() => null != onPress ? (() => callback(id.id)) : undefined, items);
  let obj = { label: thread.name, subLabel: null, onPress: null, start: null, end: null, arrow: true };
  obj = { style: callback().subLabel, children: null };
  obj[1] = jsx(thread(onPress[6]).ThreadSubtext, { thread });
  obj[1] = <View style={callback().subLabel}>{null}</View>;
  obj[2] = memo;
  obj[3] = start;
  obj[4] = end;
  return jsx(thread(onPress[5]).TableRow, { style: callback().subLabel, children: null });
}
let closure_6 = createCacheKey.createStyles({ subLabel: { maxWidth: "100%", marginTop: 2 } });
const memoResult = importAllResult.memo((threadId) => {
  let end;
  let onPress;
  let start;
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  let obj = threadId(589);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(threadId));
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
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListTableRow.tsx");

export default memoResult;