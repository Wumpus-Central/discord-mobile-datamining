// === Module 13676: isClientClipsCapable ===

// Module 13676 (isClientClipsCapable)
import set from "set" /* 2 */;
import setAll from "set" /* 1115 */;
import DesktopSources from "DesktopSources" /* 4585 */;
import apexExperiment from "apexExperiment" /* 13675 */;

const Features = DesktopSources.Features;
const result = set.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = apexExperiment.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
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
};