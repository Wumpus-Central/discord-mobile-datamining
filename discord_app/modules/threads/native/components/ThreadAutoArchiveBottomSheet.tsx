// discord_app/modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx
import { ChannelFlags } from "../../../channel/ChannelConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { getAutoArchiveOptions } from "../../ThreadAutoArchive.tsx";

const require = arg1;
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let _require;
  ({ title, description, selected, onSelectDuration } = channel);
  let obj = getAutoArchiveOptions;
  const autoArchiveOptions = obj.getAutoArchiveOptions();
  let hasFlagResult = null != channel && channel.isForumPost();
  if (hasFlagResult) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  _require = hasFlagResult;
  obj = {
    value: selected,
    title,
    description,
    accessibilityLabel: null,
    onChange: null,
    hasIcons: false,
    children: null,
  };
  const intl = tmp(1233).intl;
  obj[3] = intl.string(require("../../../../intl/index.native.tsx").t.H4mGfI);
  obj[4] = onSelectDuration;
  obj[6] = autoArchiveOptions.map((value) =>
    closure_1_3(
      _undefined(closure_1_1[6]).TableRadioRow,
      { value: value.value, disabled: _undefined, label: value.label },
      value.value,
    ),
  );
  return jsx(require("../../../../design/components/TableRow/native/TableRadioGroup.native.tsx").TableRadioGroup, {
    value: selected,
    title,
    description,
    accessibilityLabel: null,
    onChange: null,
    hasIcons: false,
    children: null,
  });
});
const result = require("set").fileFinishedImporting(
  "modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx",
);

export const AutoArchiveDurationOptions = memoResult;
