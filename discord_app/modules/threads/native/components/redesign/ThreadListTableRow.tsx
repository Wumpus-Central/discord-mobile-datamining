// === Module 16705: ThreadListTableRow ===

// Module 16705 (ThreadListTableRow)
import TableRow from "TableRow" /* 5605 */;
import ThreadBrowserRowSubtext from "ThreadBrowserRowSubtext" /* 16706 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function ThreadListTableRow(thread) {
  thread = thread.thread;
  const onPress = thread.onPress;
  ({ start, end } = thread);
  const items = [onPress, thread.id];
  const memo = noop.useMemo(() => null != onPress ? (() => onPress(id.id)) : undefined, items);
  let obj = { label: thread.name, subLabel: null, onPress: null, start: null, end: null, arrow: true };
  obj = { style: closure_6().subLabel, children: jsx(ThreadBrowserRowSubtext.ThreadSubtext, { thread }) };
  obj.subLabel = <View style={closure_6().subLabel}>{jsx(ThreadBrowserRowSubtext.ThreadSubtext, { thread })}</View>;
  obj.onPress = memo;
  obj.start = start;
  obj.end = end;
  return jsx(TableRow.TableRow, { style: closure_6().subLabel, children: jsx(ThreadBrowserRowSubtext.ThreadSubtext, { thread }) });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ subLabel: { maxWidth: "100%", marginTop: 2 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListTableRow.tsx");

export default noop.memo((threadId) => {
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  let obj = threadId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { thread: stateFromStores, start, end, onPress };
    tmp2 = <ThreadListTableRow thread={stateFromStores} start={start} end={end} onPress={onPress} />;
  }
  return tmp2;
});