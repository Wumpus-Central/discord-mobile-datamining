// discord_app/modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ChannelFlags = fn(1965).ChannelFlags;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = noop.memo((channel) => {
  channel = channel.channel;
  _require = undefined;
  ({ title, description, selected, onSelectDuration } = channel);
  const autoArchiveOptions = require("ThreadAutoArchive").getAutoArchiveOptions();
  let hasFlagResult = null != channel && channel.isForumPost();
  if (hasFlagResult) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  _require = hasFlagResult;
  const obj2 = {
    value: selected,
    title,
    description,
    accessibilityLabel: null,
    onChange: null,
    hasIcons: false,
    children: null,
  };
  const intl = tmp(1115).intl;
  obj2.accessibilityLabel = intl.string(require("util").t.H4mGfI);
  obj2.onChange = onSelectDuration;
  obj2.children = autoArchiveOptions.map((value) =>
    jsx(TableRadioRow.TableRadioRow, { value: value.value, disabled, label: value.label }, value.value),
  );
  return jsx(require("TableRadioGroup").TableRadioGroup, {
    value: selected,
    title,
    description,
    accessibilityLabel: null,
    onChange: null,
    hasIcons: false,
    children: null,
  });
});
