// === Module 16034: AutoArchiveDurationOptions ===

// Module 16034 (AutoArchiveDurationOptions)
import { ChannelFlags } from "set" /* 1398 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let _require;
  ({ title, description, selected, onSelectDuration } = channel);
  let obj = _require(8465);
  const autoArchiveOptions = obj.getAutoArchiveOptions();
  let hasFlagResult = null != channel && channel.isForumPost();
  if (hasFlagResult) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  _require = hasFlagResult;
  obj = { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null };
  const intl = tmp(1236).intl;
  obj[3] = intl.string(_require(1236).t.H4mGfI);
  obj[4] = onSelectDuration;
  obj[6] = autoArchiveOptions.map((item, index) => jsx(_undefined(dependencyMap[6]).TableRadioRow, { value: item.value, disabled: _undefined, label: item.label }, item.value));
  return jsx(_require(8101).TableRadioGroup, { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null });
});
const result = require("obj132").fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = memoResult;