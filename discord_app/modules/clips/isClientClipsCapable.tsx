// discord_app/modules/clips/isClientClipsCapable.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import obj132All from "../../utils/PlatformUtils.tsx";
import apexExperiment from "ClipsExperiment.tsx";
import DesktopSources from "../../../discord_common/js/packages/media-engine/Constants.tsx";

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