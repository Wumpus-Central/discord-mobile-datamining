// === Module 4528: isClientClipsCapable ===

// Module 4528 (isClientClipsCapable)
import set from "set" /* 2 */;
import setAll from "set" /* 500 */;
import apexExperiment from "apexExperiment" /* 4527 */;
import DesktopSources from "DesktopSources" /* 4529 */;

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