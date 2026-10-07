// discord_app/modules/clips/isClientClipsCapable.tsx
import PlatformUtilsAll from "../../utils/PlatformUtils.tsx";
import Constants from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import ClipsExperiment2 from "ClipsExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Features = Constants.Features;
const result = size.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = ClipsExperiment2.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({
    location: "isClipsClientCapable",
  }).ignorePlatformRestriction;
  const mediaEngine = getMediaEngine.getMediaEngine();
  if (!ignorePlatformRestriction) {
    let isDesktopResult = PlatformUtilsAll.isDesktop();
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.hasClipsV3Support();
    }
    ignorePlatformRestriction = isDesktopResult;
  }
  return ignorePlatformRestriction;
}
