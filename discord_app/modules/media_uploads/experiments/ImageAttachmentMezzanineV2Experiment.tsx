// discord_app/modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2025-09-image-attachment-mezzanine-v2",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: {
    0: { enabled: false },
    1: { enabled: true, maxFileSizeBytes: 524288 },
    2: { enabled: true, maxFileSizeBytes: 262144 },
  },
});
const result = size.fileFinishedImporting("modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx");

export const getImageAttachmentMezzanineV2Config = function getImageAttachmentMezzanineV2Config(location) {
  return config.getConfig({ location: location.location });
};
