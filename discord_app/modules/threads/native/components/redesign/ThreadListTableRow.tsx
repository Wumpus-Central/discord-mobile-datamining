// === Module 16891: ThreadListTableRow ===

// Module 16891 (ThreadListTableRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import TableRow2 from "TableRow" /* 5993 */;
import ThreadBrowserRowSubtext from "ThreadBrowserRowSubtext" /* 16892 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let thread, threadId;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ subLabel: { maxWidth: "100%", marginTop: 2 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  let end;
  let start;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(14);
  thread = thread.thread;
  const onPress = thread.onPress;
  ({ start, end } = thread);
  const tmp4 = closure_6();
  if (null != onPress) {
    const fn = function u() {
      return onPress(thread.id);
    };
    cResult[0] = onPress;
    cResult[1] = thread.id;
    cResult[2] = fn;
  }
  if (cResult[3] !== thread) {
    const tmp9 = jsx(ThreadBrowserRowSubtext.ThreadSubtext, { thread });
    cResult[3] = thread;
    cResult[4] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[4];
  }
  if (cResult[5] === tmp4.subLabel) {
    let tmp10;
    if (cResult[6] === tmp7) {
      tmp10 = cResult[7];
    }
    if (cResult[8] === end) {
      if (cResult[9] === tmp5) {
        if (cResult[10] === start) {
          if (cResult[11] === tmp10) {
            let tmp12;
            if (cResult[12] === thread.name) {
              tmp12 = cResult[13];
            }
            return tmp12;
          }
        }
      }
    }
    const tmp14 = jsx(TableRow2.TableRow, { label: thread.name, subLabel: tmp10, onPress: tmp5, start, end, arrow: true });
    cResult[8] = end;
    cResult[9] = tmp5;
    cResult[10] = start;
    cResult[11] = tmp10;
    cResult[12] = thread.name;
    cResult[13] = tmp14;
    tmp12 = tmp14;
  }
  const tmp11 = <View style={tmp4.subLabel}>{tmp7}</View>;
  cResult[5] = tmp4.subLabel;
  cResult[6] = tmp7;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : ((thread) => {
  let end;
  let start;
  thread = thread.thread;
  const onPress = thread.onPress;
  ({ start, end } = thread);
  const items = [onPress, thread.id];
  const tmp = closure_6();
  const memo = react.useMemo(() => {
    let id;
    return null != onPress ? (() => onPress(id.id)) : undefined;
  }, items);
  const TableRow = TableRow2.TableRow;
  return <TableRow label={thread.name} subLabel={null} onPress={memo} start={start} end={end} arrow />;
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((threadId) => {
  let end;
  let first;
  let onPress;
  let start;
  let tmp6;
  const obj = threadId(576);
  const cResult = obj.c(8);
  const tmp = threadId;
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== threadId) {
    const fn = function o() {
      return ChannelStore.getChannel(threadId);
    };
    cResult[1] = threadId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    if (cResult[3] === end) {
      if (cResult[4] === onPress) {
        if (cResult[5] === start) {
          let tmp9;
          if (cResult[6] === stateFromStores) {
            tmp9 = cResult[7];
          }
          tmp8 = tmp9;
        }
      }
    }
    const tmp12 = <closure_7 thread={stateFromStores} start={start} end={end} onPress={onPress} />;
    cResult[3] = end;
    cResult[4] = onPress;
    cResult[5] = start;
    cResult[6] = stateFromStores;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  return tmp8;
}) : ((threadId) => {
  let end;
  let onPress;
  let start;
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  const items = [ChannelStore];
  const obj = threadId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = <closure_7 thread={stateFromStores} start={start} end={end} onPress={onPress} />;
  }
  return tmp2;
}));
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListTableRow.tsx");

export default memoResult;