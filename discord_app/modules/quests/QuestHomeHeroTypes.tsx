// discord_app/modules/quests/QuestHomeHeroTypes.tsx
import AssetUtils from "lib/AssetUtils.tsx";
import QuestHomeHeroCta from "QuestHomeHeroCta.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/QuestHomeHeroTypes.tsx");

export const questHomeHeroFromServer = function questHomeHeroFromServer(creative_content) {
  creative_content = creative_content.creative_content;
  let obj = {
    id: creative_content.id,
    labelTitle: creative_content.label_title,
    labelSubtitle: creative_content.label_subtitle,
    heroImage: AssetUtils.resolveAdCreativeCdnUrl(creative_content.hero_image),
    heroVideo: null,
    sponsorImage: null,
    cta: null,
    questIds: null,
    questHomeEntrypoint: null,
    shelfImage: null,
    shelfVideo: null,
    startsAt: null,
    endsAt: null,
  };
  obj.heroVideo = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.hero_video);
  obj.sponsorImage = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.sponsor_image);
  obj.cta = QuestHomeHeroCta.questHomeHeroCtaFromServer(creative_content.cta);
  obj.questIds = creative_content.quest_ids;
  let tmp3;
  if (null != creative_content.quest_home_entrypoint) {
    const quest_home_entrypoint = creative_content.quest_home_entrypoint;
    obj = {
      linearGradient: null,
      radialGradient: null,
      gradientPreset: null,
      image: null,
      tooltipImage: null,
      tooltipTitle: null,
      tooltipSubtitle: null,
    };
    ({
      linear_gradient: obj6.linearGradient,
      radial_gradient: obj6.radialGradient,
      gradient_preset: obj6.gradientPreset,
    } = quest_home_entrypoint);
    let tmpResult = AssetUtils;
    obj.image = tmpResult.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.image);
    tmpResult = AssetUtils;
    obj.tooltipImage = tmpResult.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.tooltip_image);
    ({ tooltip_title: obj6.tooltipTitle, tooltip_subtitle: obj6.tooltipSubtitle } = quest_home_entrypoint);
    tmp3 = obj;
  }
  obj.questHomeEntrypoint = tmp3;
  obj.shelfImage = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_image);
  const tmpResult1 = AssetUtils;
  obj.shelfVideo = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_video);
  ({ starts_at: obj.startsAt, ends_at: obj.endsAt } = creative_content);
  return obj;
};
