// === Module 4541: isClientClipsCapable ===

// Module 4541 (isClientClipsCapable)
import set from "set" /* 2 */;
import setAll from "set" /* 1234 */;
import apexExperiment from "apexExperiment" /* 4540 */;
import DesktopSources from "DesktopSources" /* 4542 */;

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