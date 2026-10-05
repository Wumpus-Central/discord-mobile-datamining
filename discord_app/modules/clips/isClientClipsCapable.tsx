// === Module 13487: isClientClipsCapable ===

// Module 13487 (isClientClipsCapable)
import PlatformUtilsAll from "PlatformUtils" /* 1369 */;
import Constants from "Constants" /* 4915 */;
import ClipsExperiment2 from "ClipsExperiment" /* 13486 */;
import size from "module_2" /* 2 */;

const Features = Constants.Features;
const result = size.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = ClipsExperiment2.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  const mediaEngine = getMediaEngine.getMediaEngine();
  if (!ignorePlatformRestriction) {
    const obj2 = PlatformUtilsAll;
    ignorePlatformRestriction = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
    const isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  }
  return ignorePlatformRestriction;
};