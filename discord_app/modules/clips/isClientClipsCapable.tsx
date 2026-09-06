// discord_app/modules/clips/isClientClipsCapable.tsx
import set from "../../../_runtime/00002_set.js";
import setAll from "../../utils/PlatformUtils.tsx";
import DesktopSources from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import apexExperiment from "ClipsExperiment.tsx";

const Features = DesktopSources.Features;
const result = set.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = apexExperiment.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({
    location: "isClipsClientCapable",
  }).ignorePlatformRestriction;
  const mediaEngine = getMediaEngine.getMediaEngine();
  if (!ignorePlatformRestriction) {
    let isDesktopResult = setAll.isDesktop();
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.hasClipsV3Support();
    }
    ignorePlatformRestriction = isDesktopResult;
    const obj2 = setAll;
  }
  return ignorePlatformRestriction;
}
