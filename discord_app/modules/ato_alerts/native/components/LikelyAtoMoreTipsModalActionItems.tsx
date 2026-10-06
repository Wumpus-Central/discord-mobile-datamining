// === Module 9825: LikelyAtoMoreTipsModalActionItems ===

// Module 9825 (LikelyAtoMoreTipsModalActionItems)
import Fragment from "Fragment" /* 21 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let senderId;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((senderId) => {
  let first;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = senderId(576);
  const cResult = obj.c(13);
  senderId = senderId.senderId;
  const handleMutePressed = senderId.handleMutePressed;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== senderId) {
    const fn = function l() {
      return UserStore.getUser(senderId);
    };
    const items1 = [senderId];
    cResult[1] = senderId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = senderId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    const obj3 = UserUtilsDefault;
    const name = obj3.getName(stateFromStores);
    cResult[4] = stateFromStores;
    cResult[5] = name;
    tmp9 = name;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== tmp9) {
    const intl = tmp(1126).intl;
    const obj2 = { username: tmp9 };
    const formatToPlainStringResult = intl.formatToPlainString(senderId(1126).t["F/ID+9"], obj2);
    cResult[6] = tmp9;
    cResult[7] = formatToPlainStringResult;
    tmp12 = formatToPlainStringResult;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(senderId(1126).t.w2ve0t);
    cResult[8] = stringResult;
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = jsx(senderId(9826).BellSlashIcon, {});
    cResult[9] = tmp18;
  }
  if (cResult[10] === handleMutePressed) {
    let tmp19;
    if (cResult[11] === tmp12) {
      tmp19 = cResult[12];
    }
    return tmp19;
  }
  const TableRowGroup = tmp(6081).TableRowGroup;
  const tmp20 = <TableRowGroup hasIcons>{null}</TableRowGroup>;
  cResult[10] = handleMutePressed;
  cResult[11] = tmp12;
  cResult[12] = tmp20;
  tmp19 = tmp20;
}) : ((senderId) => {
  let intl;
  let intl2;
  senderId = senderId.senderId;
  const handleMutePressed = senderId.handleMutePressed;
  let obj = senderId(504);
  const items = [UserStore];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => {
    const obj = UserUtilsDefault;
    return obj.getName(stateFromStores);
  }, items2);
  const TableRowGroup = senderId(6081).TableRowGroup;
  ({ label: intl.formatToPlainString(senderId(1126).t["F/ID+9"], { username: memo }), subLabel: intl2.string(senderId(1126).t.w2ve0t), onPress: handleMutePressed, icon: null });
  const TableRow = senderId(6000).TableRow;
  intl = senderId(1126).intl;
  intl2 = senderId(1126).intl;
  return <TableRowGroup hasIcons>{null}</TableRowGroup>;
});
const result = size.fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default tmp2;