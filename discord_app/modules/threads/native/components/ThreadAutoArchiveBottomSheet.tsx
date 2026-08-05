// discord_app/modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx
import { ChannelFlags } from "set";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((channel) => {
  let description;
  let onSelectDuration;
  let selected;
  let title;
  channel = channel.channel;
  let _require;
  ({ title, description, selected, onSelectDuration } = channel);
  let obj = _require(8167);
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
  obj[6] = autoArchiveOptions.map((value) => outer1_3(_undefined(outer1_1[6]).TableRadioRow, { value: value.value, disabled: _undefined, label: value.label }, value.value));
  return jsx(_require(7795).TableRadioGroup, { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null });
});
const result = require("jsxProd").fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = memoResult;