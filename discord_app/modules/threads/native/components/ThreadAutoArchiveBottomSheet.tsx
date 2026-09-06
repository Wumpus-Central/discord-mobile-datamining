// === Module 16815: ThreadAutoArchiveBottomSheet ===

// Module 16815 (ThreadAutoArchiveBottomSheet)
import TableRadioRow from "TableRadioRow" /* 5688 */;
import noop from "module_19" /* 19 */;

require = fn;
const ChannelFlags = fn(1964).ChannelFlags;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = noop.memo((channel) => {
  channel = channel.channel;
  _require = undefined;
  ({ title, description, selected, onSelectDuration } = channel);
  let obj = require("ThreadAutoArchive");
  const autoArchiveOptions = obj.getAutoArchiveOptions();
  let hasFlagResult = null != channel && channel.isForumPost();
  if (hasFlagResult) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  _require = hasFlagResult;
  obj = { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null };
  const intl = tmp(1114).intl;
  obj.accessibilityLabel = intl.string(require("util").t.H4mGfI);
  obj.onChange = onSelectDuration;
  obj.children = autoArchiveOptions.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, disabled, label: value.label }, value.value));
  return jsx(require("TableRadioGroup").TableRadioGroup, { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null });
});