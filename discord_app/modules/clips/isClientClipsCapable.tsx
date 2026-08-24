// discord_app/modules/clips/isClientClipsCapable.tsx
import set from "../../../_runtime/00002_set.js";
import setAll from "../../utils/PlatformUtils.tsx";
import apexExperiment from "ClipsExperiment.tsx";
import DesktopSources from "../../../discord_common/js/packages/media-engine/Constants.tsx";

const Features = DesktopSources.Features;
const result = set.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = apexExperiment.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  if (!ignorePlatformRestriction) {
    let isDesktopResult = setAll.isDesktop();
    if (isDesktopResult) {
      const mediaEngine = getMediaEngine.getMediaEngine();
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    ignorePlatformRestriction = isDesktopResult;
    const obj = setAll;
  }
  return ignorePlatformRestriction;
};