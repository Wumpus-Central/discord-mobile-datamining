// === Module 14826: QuestCustomAppStoreOverlayUtils ===

// Module 14826 (QuestCustomAppStoreOverlayUtils)
import apexExperiment from "apexExperiment" /* 10914 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10918 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 10920 */;
import size from "module_2" /* 2 */;

function fetchCustomAppStoreOverlayContent(cta) {
  let resolved;
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    const tmpResult = QuestPlatformUtils;
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  let inlineStoreParamsFromCta = null;
  if (enabled) {
    const tmpResult4 = QuestPlatformUtils;
    inlineStoreParamsFromCta = tmpResult4.getInlineStoreParamsFromCta(cta);
  }
  if (null == inlineStoreParamsFromCta) {
    resolved = Promise.resolve(null);
  } else {
    const getAppStoreOverlayContent = AppStoreOverlayContent.getAppStoreOverlayContent;
    AppStoreOverlayContent;
    const tmpResult6 = QuestPlatformUtils;
    let url = tmpResult6.getDirectAppStoreLinkFromCta(cta);
    if (url == null) {
      url = cta.url;
    }
    resolved = getAppStoreOverlayContent(inlineStoreParamsFromCta, url);
  }
  return resolved;
}
const result = size.fileFinishedImporting("modules/quests/utils/QuestCustomAppStoreOverlayUtils.native.tsx");

export const canOpenCustomAppStoreOverlayFromCta = function canOpenCustomAppStoreOverlayFromCta(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    const tmpResult = QuestPlatformUtils;
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  return enabled;
};
export { fetchCustomAppStoreOverlayContent };
export const prefetchCustomAppStoreOverlayContent = function prefetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    const tmpResult = QuestPlatformUtils;
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  if (enabled) {
    const promise = fetchCustomAppStoreOverlayContent(cta);
    promise.catch(() => {

    });
  }
};