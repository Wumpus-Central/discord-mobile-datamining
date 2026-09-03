// === Module 14862: canOpenCustomAppStoreOverlayFromCta ===

// Module 14862 (canOpenCustomAppStoreOverlayFromCta)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 11313 */;
import supportedConsoles from "supportedConsoles" /* 11320 */;

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
    let tmpResult = tmp(11320);
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  let inlineStoreParamsFromCta = null;
  if (enabled) {
    tmpResult = tmp(11320);
    inlineStoreParamsFromCta = tmpResult.getInlineStoreParamsFromCta(cta);
  }
  if (null == inlineStoreParamsFromCta) {
    let resolved = Promise.resolve(null);
  } else {
    const tmpResult1 = tmp(11322);
    let url = tmp(11320).getDirectAppStoreLinkFromCta(cta);
    if (url == null) {
      url = cta.url;
    }
    resolved = tmpResult1.getAppStoreOverlayContent(inlineStoreParamsFromCta, url);
    const tmpResult2 = tmp(11320);
  }
  return resolved;
};