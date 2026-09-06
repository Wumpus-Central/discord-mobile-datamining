// === Module 15018: QuestCustomAppStoreOverlayUtils ===

// Module 15018 (QuestCustomAppStoreOverlayUtils)
import apexExperiment from "apexExperiment" /* 11489 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11496 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 11498 */;
import size from "module_2" /* 2 */;

function fetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    let tmpResult = QuestPlatformUtils;
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  let inlineStoreParamsFromCta = null;
  if (enabled) {
    tmpResult = QuestPlatformUtils;
    inlineStoreParamsFromCta = tmpResult.getInlineStoreParamsFromCta(cta);
  }
  if (null == inlineStoreParamsFromCta) {
    let resolved = Promise.resolve(null);
  } else {
    const tmpResult1 = AppStoreOverlayContent;
    let url = QuestPlatformUtils.getDirectAppStoreLinkFromCta(cta);
    if (url == null) {
      url = cta.url;
    }
    resolved = tmpResult1.getAppStoreOverlayContent(inlineStoreParamsFromCta, url);
    const tmpResult2 = QuestPlatformUtils;
  }
  return resolved;
}
const result = size.fileFinishedImporting("modules/quests/utils/QuestCustomAppStoreOverlayUtils.native.tsx");

export const canOpenCustomAppStoreOverlayFromCta = function canOpenCustomAppStoreOverlayFromCta(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != QuestPlatformUtils.getInlineStoreParamsFromCta(cta);
    const tmpResult = QuestPlatformUtils;
  }
  return enabled;
};
export { fetchCustomAppStoreOverlayContent };
export const prefetchCustomAppStoreOverlayContent = function prefetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != QuestPlatformUtils.getInlineStoreParamsFromCta(cta);
    const tmpResult = QuestPlatformUtils;
  }
  if (enabled) {
    fetchCustomAppStoreOverlayContent(cta).catch(() => {

    });
    const promise = fetchCustomAppStoreOverlayContent(cta);
  }
};