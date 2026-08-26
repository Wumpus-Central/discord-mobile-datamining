// discord_app/modules/quests/QuestHomeHeroTypes.tsx
import set from "../../../_runtime/00002_set.js";
import resolveAsset from "lib/AssetUtils.tsx";
import questHomeHeroCtaFromServer from "QuestHomeHeroCta.tsx";

const result = set.fileFinishedImporting("modules/quests/QuestHomeHeroTypes.tsx");

export const questHomeHeroFromServer = function questHomeHeroFromServer(c7) {
  const creative_content = c7.creative_content;
  let obj = { id: creative_content.id, labelTitle: creative_content.label_title, labelSubtitle: creative_content.label_subtitle, heroImage: resolveAsset.resolveAdCreativeCdnUrl(creative_content.hero_image), heroVideo: null, sponsorImage: null, cta: null, questIds: null, questHomeEntrypoint: null, shelfImage: null, shelfVideo: null, startsAt: null, endsAt: null };
  const obj2 = resolveAsset;
  obj[4] = resolveAsset.resolveOptionalAdCreativeCdnUrl(creative_content.hero_video);
  const obj3 = resolveAsset;
  obj[5] = resolveAsset.resolveOptionalAdCreativeCdnUrl(creative_content.sponsor_image);
  const obj4 = resolveAsset;
  obj[6] = questHomeHeroCtaFromServer.questHomeHeroCtaFromServer(creative_content.cta);
  obj[7] = creative_content.quest_ids;
  let tmp3;
  if (null != creative_content.quest_home_entrypoint) {
    const quest_home_entrypoint = creative_content.quest_home_entrypoint;
    obj = { linearGradient: null, radialGradient: null, gradientPreset: null, image: null, tooltipImage: null, tooltipTitle: null, tooltipSubtitle: null };
    ({ linear_gradient: obj6[0], radial_gradient: obj6[1], gradient_preset: obj6[2] } = quest_home_entrypoint);
    let tmpResult = tmp(10610);
    obj[3] = tmpResult.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.image);
    tmpResult = tmp(10610);
    obj[4] = tmpResult.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.tooltip_image);
    ({ tooltip_title: obj6[5], tooltip_subtitle: obj6[6] } = quest_home_entrypoint);
    tmp3 = obj;
  }
  obj[8] = tmp3;
  const obj5 = questHomeHeroCtaFromServer;
  obj[9] = resolveAsset.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_image);
  const tmpResult1 = resolveAsset;
  obj[10] = resolveAsset.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_video);
  ({ starts_at: obj[11], ends_at: obj[12] } = c7);
  return obj;
};