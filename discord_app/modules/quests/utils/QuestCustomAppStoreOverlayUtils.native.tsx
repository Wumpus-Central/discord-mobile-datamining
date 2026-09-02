// === Module 14847: canOpenCustomAppStoreOverlayFromCta ===

// Module 14847 (canOpenCustomAppStoreOverlayFromCta)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 11309 */;
import supportedConsoles from "supportedConsoles" /* 11316 */;

const result = set.fileFinishedImporting("modules/quests/utils/QuestCustomAppStoreOverlayUtils.native.tsx");

export const canOpenCustomAppStoreOverlayFromCta = function canOpenCustomAppStoreOverlayFromCta(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != supportedConsoles.getInlineStoreParamsFromCta(cta);
    const tmpResult = supportedConsoles;
  }
  return enabled;
};
export const fetchCustomAppStoreOverlayContent = function fetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    let tmpResult = tmp(11316);
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  let inlineStoreParamsFromCta = null;
  if (enabled) {
    tmpResult = tmp(11316);
    inlineStoreParamsFromCta = tmpResult.getInlineStoreParamsFromCta(cta);
  }
  if (null == inlineStoreParamsFromCta) {
    let resolved = Promise.resolve(null);
  } else {
    const tmpResult1 = tmp(11318);
    let url = tmp(11316).getDirectAppStoreLinkFromCta(cta);
    if (url == null) {
      url = cta.url;
    }
    resolved = tmpResult1.getAppStoreOverlayContent(inlineStoreParamsFromCta, url);
    const tmpResult2 = tmp(11316);
  }
  return resolved;
};