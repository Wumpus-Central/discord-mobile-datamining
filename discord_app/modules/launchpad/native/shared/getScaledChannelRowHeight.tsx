// === Module 16199: getScaledChannelRowHeight ===

// Module 16199 (getScaledChannelRowHeight)
import obj132 from "obj132" /* 2 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16196 */;

const result = obj132.fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = getLayoutStyleDefault();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};