// === Module 4528: isClientClipsCapable ===

// Module 4528 (isClientClipsCapable)
import obj132 from "obj132" /* 2 */;
import obj132All from "obj132" /* 500 */;
import apexExperiment from "apexExperiment" /* 4527 */;
import DesktopSources from "DesktopSources" /* 4529 */;

const Features = DesktopSources.Features;
const result = obj132.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = apexExperiment.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  if (!ignorePlatformRestriction) {
    let isDesktopResult = obj132All.isDesktop();
    if (isDesktopResult) {
      const mediaEngine = getMediaEngine.getMediaEngine();
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    ignorePlatformRestriction = isDesktopResult;
  }
  return ignorePlatformRestriction;
};