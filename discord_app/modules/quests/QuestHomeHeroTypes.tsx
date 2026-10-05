// === Module 10017: QuestHomeHeroTypes ===

// Module 10017 (QuestHomeHeroTypes)
import AssetUtils from "AssetUtils" /* 10000 */;
import QuestHomeHeroCta from "QuestHomeHeroCta" /* 10018 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/QuestHomeHeroTypes.tsx");

export const questHomeHeroFromServer = function questHomeHeroFromServer(creative_content) {
  let features;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let tmp3;
  let tmpResult;
  let tmpResult4;
  let tmpResult5;
  let tmpResult6;
  creative_content = creative_content.creative_content;
  const obj = { id: creative_content.id, labelTitle: creative_content.label_title, labelSubtitle: creative_content.label_subtitle, heroImage: obj2.resolveAdCreativeCdnUrl(creative_content.hero_image), heroVideo: obj3.resolveOptionalAdCreativeCdnUrl(creative_content.hero_video), sponsorImage: obj4.resolveOptionalAdCreativeCdnUrl(creative_content.sponsor_image), cta: obj5.questHomeHeroCtaFromServer(creative_content.cta), questIds: creative_content.quest_ids, questHomeEntrypoint: tmp3, shelfImage: tmpResult5.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_image), shelfVideo: tmpResult6.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_video), features, startsAt: null, endsAt: null };
  obj2 = AssetUtils;
  obj3 = AssetUtils;
  obj4 = AssetUtils;
  tmp3 = undefined;
  obj5 = QuestHomeHeroCta;
  if (null != creative_content.quest_home_entrypoint) {
    const quest_home_entrypoint = creative_content.quest_home_entrypoint;
    ({ linear_gradient: obj6.linearGradient, radial_gradient: obj6.radialGradient, gradient_preset: obj6.gradientPreset } = quest_home_entrypoint);
    const obj7 = { linearGradient: null, radialGradient: null, gradientPreset: null, image: tmpResult.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.image), tooltipImage: tmpResult4.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.tooltip_image), tooltipTitle: null, tooltipSubtitle: null };
    tmpResult = AssetUtils;
    ({ tooltip_title: obj6.tooltipTitle, tooltip_subtitle: obj6.tooltipSubtitle } = quest_home_entrypoint);
    tmp3 = obj7;
    tmpResult4 = AssetUtils;
  }
  tmpResult5 = AssetUtils;
  features = creative_content.features;
  tmpResult6 = AssetUtils;
  if (features == null) {
    features = [];
  }
  ({ starts_at: obj.startsAt, ends_at: obj.endsAt } = creative_content);
  return obj;
};