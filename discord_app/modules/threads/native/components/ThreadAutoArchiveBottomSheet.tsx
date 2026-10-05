// === Module 16989: ThreadAutoArchiveBottomSheet ===

// Module 16989 (ThreadAutoArchiveBottomSheet)
import TableRadioRow from "TableRadioRow" /* 6071 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ChannelFlags = fn(2058).ChannelFlags;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(27);
  ({ title, description, channel, selected, onSelectDuration } = arg0);
  if (cResult[0] === channel) {
    if (cResult[1] === description) {
      if (cResult[2] === onSelectDuration) {
        if (cResult[3] === selected) {
          if (cResult[4] === title) {
            if (cResult[18] === cResult[5]) {
              if (cResult[19] === tmp5) {
                if (cResult[20] === tmp6) {
                  if (cResult[21] === tmp7) {
                    if (cResult[22] === tmp8) {
                      if (cResult[23] === tmp9) {
                        if (cResult[24] === tmp10) {
                          if (cResult[25] === tmp11) {
                            let tmp20 = cResult[26];
                          }
                          return tmp20;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj2 = { value: cResult[6], title: cResult[7], description: cResult[8], accessibilityLabel: cResult[9], onChange: cResult[10], hasIcons: cResult[11], children: cResult[12] };
            const tmp22 = jsx(cResult[5], { value: cResult[6], title: cResult[7], description: cResult[8], accessibilityLabel: cResult[9], onChange: cResult[10], hasIcons: cResult[11], children: cResult[12] });
            cResult[18] = cResult[5];
            cResult[19] = cResult[6];
            cResult[20] = cResult[7];
            cResult[21] = cResult[8];
            cResult[22] = cResult[9];
            cResult[23] = cResult[10];
            cResult[24] = cResult[11];
            cResult[25] = cResult[12];
            cResult[26] = tmp22;
            tmp20 = tmp22;
          }
        }
      }
    }
  }
  const obj = require("c");
  const autoArchiveOptions = require("ThreadAutoArchive").getAutoArchiveOptions();
  if (cResult[13] !== channel) {
    let hasFlagResult = null != channel && channel.isForumPost();
    if (hasFlagResult) {
      hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
    }
    cResult[13] = channel;
    cResult[14] = hasFlagResult;
    let tmp12 = hasFlagResult;
  } else {
    tmp12 = cResult[14];
  }
  _require = tmp12;
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.H4mGfI);
    cResult[15] = stringResult;
    let tmp16 = stringResult;
  } else {
    tmp16 = cResult[15];
  }
  if (cResult[16] !== tmp12) {
    const fn = function y(value) {
      return jsx(TableRadioRow.TableRadioRow, { value: value.value, disabled, label: value.label }, value.value);
    };
    cResult[16] = tmp12;
    cResult[17] = fn;
    let tmp18 = fn;
  } else {
    tmp18 = cResult[17];
  }
  const mapped = autoArchiveOptions.map(tmp18);
  cResult[0] = channel;
  cResult[1] = description;
  cResult[2] = onSelectDuration;
  cResult[3] = selected;
  cResult[4] = title;
  cResult[5] = require("TableRadioGroup").TableRadioGroup;
  cResult[6] = selected;
  cResult[7] = title;
  cResult[8] = description;
  cResult[9] = tmp16;
  cResult[10] = onSelectDuration;
  cResult[11] = false;
  cResult[12] = mapped;
  const tmpResult = require("ThreadAutoArchive");
}) : ((channel) => {
  channel = channel.channel;
  _require = undefined;
  ({ title, description, selected, onSelectDuration } = channel);
  const autoArchiveOptions = require("ThreadAutoArchive").getAutoArchiveOptions();
  let hasFlagResult = null != channel && channel.isForumPost();
  if (hasFlagResult) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  _require = hasFlagResult;
  const obj2 = { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null };
  const intl = tmp(1126).intl;
  obj2.accessibilityLabel = intl.string(require("util").t.H4mGfI);
  obj2.onChange = onSelectDuration;
  obj2.children = autoArchiveOptions.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, disabled, label: value.label }, value.value));
  return jsx(require("TableRadioGroup").TableRadioGroup, { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null });
}));