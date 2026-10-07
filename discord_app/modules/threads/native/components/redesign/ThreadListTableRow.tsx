// === Module 16916: ThreadListTableRow ===

// Module 16916 (ThreadListTableRow)
import c from "c" /* 576 */;
import TableRow from "TableRow" /* 6000 */;
import ThreadBrowserRowSubtext from "ThreadBrowserRowSubtext" /* 16917 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ subLabel: { maxWidth: "100%", marginTop: 2 } });
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  const cResult = c.c(14);
  thread = thread.thread;
  let id = thread.onPress;
  ({ start, end } = thread);
  const tmp4 = closure_6();
  if (null == id) {
    if (cResult[3] !== thread) {
      const obj2 = { thread };
      const tmp9 = jsx(ThreadBrowserRowSubtext.ThreadSubtext, { thread });
      cResult[3] = thread;
      cResult[4] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.subLabel) {
      if (cResult[6] === tmp7) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === end) {
        if (cResult[9] === undefined) {
          if (cResult[10] === start) {
            if (cResult[11] === tmp10) {
              if (cResult[12] === thread.name) {
                let tmp14 = cResult[13];
              }
              return tmp14;
            }
          }
        }
      }
      const obj3 = { label: thread.name, subLabel: tmp10, onPress: undefined, start, end, arrow: true };
      const tmp16 = jsx(TableRow.TableRow, { label: thread.name, subLabel: tmp10, onPress: undefined, start, end, arrow: true });
      cResult[8] = end;
      cResult[9] = undefined;
      cResult[10] = start;
      cResult[11] = tmp10;
      cResult[12] = thread.name;
      cResult[13] = tmp16;
      tmp14 = tmp16;
    }
    const obj4 = { style: tmp4.subLabel, children: tmp7 };
    const tmp13 = <View style={tmp4.subLabel}>{tmp7}</View>;
    cResult[5] = tmp4.subLabel;
    cResult[6] = tmp7;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  } else {
    if (cResult[0] === id) {
    }
    const fn = function u() {
      return id(thread.id);
    };
    cResult[0] = id;
    id = thread.id;
    cResult[1] = id;
    cResult[2] = fn;
  }
}) : ((thread) => {
  thread = thread.thread;
  const onPress = thread.onPress;
  ({ start, end } = thread);
  const items = [onPress, thread.id];
  const memo = noop.useMemo(() => null != onPress ? (() => onPress(id.id)) : undefined, items);
  const obj = { label: thread.name, subLabel: null, onPress: null, start: null, end: null, arrow: true };
  const tmp = closure_6();
  obj.subLabel = <View style={closure_6().subLabel}>{jsx(ThreadBrowserRowSubtext.ThreadSubtext, { thread })}</View>;
  obj.onPress = memo;
  obj.start = start;
  obj.end = end;
  return jsx(TableRow.TableRow, { label: thread.name, subLabel: null, onPress: null, start: null, end: null, arrow: true });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListTableRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((threadId) => {
  const cResult = threadId(576).c(8);
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== threadId) {
    const fn = function o() {
      return ChannelStore.getChannel(threadId);
    };
    cResult[1] = threadId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = threadId(576);
  const stateFromStores = threadId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] === end) {
      if (cResult[4] === onPress) {
        if (cResult[5] === start) {
        }
      }
    }
    const obj2 = { thread: stateFromStores, start, end, onPress };
    const tmp11 = <closure_7 thread={stateFromStores} start={start} end={end} onPress={onPress} />;
    cResult[3] = end;
    cResult[4] = onPress;
    cResult[5] = start;
    cResult[6] = stateFromStores;
    cResult[7] = tmp11;
  }
  const tmpResult = threadId(504);
}) : ((threadId) => {
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  const items = [ChannelStore];
  const stateFromStores = threadId(504).useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { thread: stateFromStores, start, end, onPress };
    tmp2 = <closure_7 thread={stateFromStores} start={start} end={end} onPress={onPress} />;
  }
  return tmp2;
}));