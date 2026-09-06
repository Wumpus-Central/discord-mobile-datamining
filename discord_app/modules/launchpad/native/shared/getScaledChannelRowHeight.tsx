// discord_app/modules/launchpad/native/shared/getScaledChannelRowHeight.tsx
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = getLayoutStylesDefault();
  return (
    Math.max(
      Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)),
      tmp.icon.wrapper.size,
    ) +
    2 * tmp.container.padding.paddingVertical +
    2 * tmp.layout.margin.marginVertical +
    4
  );
}
