// === Module 16989: ThreadAutoArchiveBottomSheet ===

// Module 16989 (ThreadAutoArchiveBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelFlags = ChannelConstants.ChannelFlags;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let description;
  let disabled;
  let onSelectDuration;
  let selected;
  let title;
  let tmp11;
  let tmp15;
  let tmp17;
  const obj = require("react");
  const cResult = obj.c(27);
  ({ title, description, channel, selected, onSelectDuration } = arg0);
  if (cResult[0] === channel) {
    if (cResult[1] === description) {
      if (cResult[2] === onSelectDuration) {
        if (cResult[3] === selected) {
          let tmp4;
          let tmp5;
          let tmp6;
          let tmp7;
          let tmp8;
          let tmp9;
          let flag;
          let tmp10;
          if (cResult[4] === title) {
            tmp4 = cResult[5];
            tmp5 = cResult[6];
            tmp6 = cResult[7];
            tmp7 = cResult[8];
            tmp8 = cResult[9];
            tmp9 = cResult[10];
            flag = cResult[11];
            tmp10 = cResult[12];
          }
          if (cResult[18] === tmp4) {
            if (cResult[19] === tmp5) {
              if (cResult[20] === tmp6) {
                if (cResult[21] === tmp7) {
                  if (cResult[22] === tmp8) {
                    if (cResult[23] === tmp9) {
                      if (cResult[24] === flag) {
                        let tmp19;
                        if (cResult[25] === tmp10) {
                          tmp19 = cResult[26];
                        }
                        return tmp19;
                      }
                    }
                  }
                }
              }
            }
          }
          const tmp21 = <tmp4 value={tmp5} title={tmp6} description={tmp7} accessibilityLabel={tmp8} onChange={tmp9} hasIcons={flag}>{tmp10}</tmp4>;
          cResult[18] = tmp4;
          cResult[19] = tmp5;
          cResult[20] = tmp6;
          cResult[21] = tmp7;
          cResult[22] = tmp8;
          cResult[23] = tmp9;
          cResult[24] = flag;
          cResult[25] = tmp10;
          cResult[26] = tmp21;
          tmp19 = tmp21;
        }
      }
    }
  }
  const tmpResult = require("ThreadAutoArchive");
  const autoArchiveOptions = tmpResult.getAutoArchiveOptions();
  if (cResult[13] !== channel) {
    const hasFlagResult = null != channel && channel.isForumPost() && channel.hasFlag(ChannelFlags.PINNED);
    cResult[13] = channel;
    cResult[14] = hasFlagResult;
    tmp11 = hasFlagResult;
  } else {
    tmp11 = cResult[14];
  }
  _require = tmp11;
  const TableRadioGroup = tmp(6072).TableRadioGroup;
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.H4mGfI);
    cResult[15] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[15];
  }
  if (cResult[16] !== tmp11) {
    const fn = function y(value) {
      return jsx(TableRadioRow.TableRadioRow, { value: value.value, disabled, label: value.label }, value.value);
    };
    cResult[16] = tmp11;
    cResult[17] = fn;
    tmp17 = fn;
  } else {
    tmp17 = cResult[17];
  }
  const mapped = autoArchiveOptions.map(tmp17);
  cResult[0] = channel;
  cResult[1] = description;
  cResult[2] = onSelectDuration;
  cResult[3] = selected;
  cResult[4] = title;
  cResult[5] = TableRadioGroup;
  cResult[6] = selected;
  cResult[7] = title;
  cResult[8] = description;
  cResult[9] = tmp15;
  cResult[10] = onSelectDuration;
  cResult[11] = false;
  cResult[12] = mapped;
  tmp10 = mapped;
  flag = false;
  tmp9 = onSelectDuration;
  tmp8 = tmp15;
  tmp7 = description;
  tmp6 = title;
  tmp5 = selected;
  tmp4 = TableRadioGroup;
}) : ((channel) => {
  let description;
  let disabled;
  let onSelectDuration;
  let selected;
  let title;
  channel = channel.channel;
  _require = undefined;
  ({ title, description, selected, onSelectDuration } = channel);
  const obj = require("ThreadAutoArchive");
  const autoArchiveOptions = obj.getAutoArchiveOptions();
  _require = null != channel && channel.isForumPost() && channel.hasFlag(ChannelFlags.PINNED);
  const hasFlagResult = null != channel && channel.isForumPost() && channel.hasFlag(ChannelFlags.PINNED);
  const TableRadioGroup = tmp(6072).TableRadioGroup;
  const intl = tmp(1126).intl;
  return <TableRadioGroup value={selected} title={title} description={description} accessibilityLabel={intl.string(require("intl").t.H4mGfI)} onChange={onSelectDuration} hasIcons={false}>{autoArchiveOptions.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, disabled, label: value.label }, value.value))}</TableRadioGroup>;
}));
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = memoResult;