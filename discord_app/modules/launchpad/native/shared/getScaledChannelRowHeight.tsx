// === Module 16473: getScaledChannelRowHeight ===

// Module 16473 (getScaledChannelRowHeight)
import set from "set" /* 2 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16470 */;

const result = set.fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = getLayoutStyleDefault();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};