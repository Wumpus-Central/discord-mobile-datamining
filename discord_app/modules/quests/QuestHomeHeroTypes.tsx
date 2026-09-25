// === Module 10693: QuestHomeHeroTypes ===

// Module 10693 (QuestHomeHeroTypes)
import AssetUtils from "AssetUtils" /* 10676 */;
import QuestHomeHeroCta from "QuestHomeHeroCta" /* 10694 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/QuestHomeHeroTypes.tsx");

export const questHomeHeroFromServer = function questHomeHeroFromServer(creative_content) {
  creative_content = creative_content.creative_content;
  const obj = { id: creative_content.id, labelTitle: creative_content.label_title, labelSubtitle: creative_content.label_subtitle, heroImage: AssetUtils.resolveAdCreativeCdnUrl(creative_content.hero_image), heroVideo: null, sponsorImage: null, cta: null, questIds: null, questHomeEntrypoint: null, shelfImage: null, shelfVideo: null, features: null, startsAt: null, endsAt: null };
  obj.heroVideo = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.hero_video);
  obj.sponsorImage = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.sponsor_image);
  obj.cta = QuestHomeHeroCta.questHomeHeroCtaFromServer(creative_content.cta);
  obj.questIds = creative_content.quest_ids;
  let tmp3;
  if (null != creative_content.quest_home_entrypoint) {
    const quest_home_entrypoint = creative_content.quest_home_entrypoint;
    const obj7 = { linearGradient: null, radialGradient: null, gradientPreset: null, image: null, tooltipImage: null, tooltipTitle: null, tooltipSubtitle: null };
    ({ linear_gradient: obj6.linearGradient, radial_gradient: obj6.radialGradient, gradient_preset: obj6.gradientPreset } = quest_home_entrypoint);
    obj7.image = AssetUtils.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.image);
    const tmpResult = AssetUtils;
    obj7.tooltipImage = AssetUtils.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.tooltip_image);
    ({ tooltip_title: obj6.tooltipTitle, tooltip_subtitle: obj6.tooltipSubtitle } = quest_home_entrypoint);
    tmp3 = obj7;
    const tmpResult4 = AssetUtils;
  }
  obj.questHomeEntrypoint = tmp3;
  obj.shelfImage = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_image);
  const tmpResult5 = AssetUtils;
  obj.shelfVideo = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_video);
  let features = creative_content.features;
  if (features == null) {
    features = [];
  }
  obj.features = features;
  ({ starts_at: obj.startsAt, ends_at: obj.endsAt } = creative_content);
  return obj;
};