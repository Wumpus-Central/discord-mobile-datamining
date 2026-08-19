// discord_app/modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx
import { ChannelFlags } from "../../../channel/ChannelConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { getAutoArchiveOptions } from "../../ThreadAutoArchive.tsx";

const require = fn;
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
  obj = { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null };
  const intl = tmp(1236).intl;
  obj[3] = intl.string(require("../../../../intl/index.native.tsx").t.H4mGfI);
  obj[4] = onSelectDuration;
  obj[6] = autoArchiveOptions.map((item, index) => jsx(_undefined(dependencyMap[6]).TableRadioRow, { value: item.value, disabled: _undefined, label: item.label }, item.value));
  return jsx(require("../../../../design/components/TableRow/native/TableRadioGroup.native.tsx").TableRadioGroup, { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null });
});
const result = require("obj132").fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = memoResult;