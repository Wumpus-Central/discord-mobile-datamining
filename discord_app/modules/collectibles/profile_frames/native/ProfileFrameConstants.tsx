// discord_app/modules/collectibles/profile_frames/native/ProfileFrameConstants.tsx
const result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrameConstants.tsx");

export const PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO = 0.625;
export const PROFILE_FRAME_ASPECT_RATIO = 0.66;
export const PROFILE_FRAME_Z_INDEX = { [require("../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerOrder.tsx").ProfileFrameLayerOrder.FRONT]: 3, [require("../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerOrder.tsx").ProfileFrameLayerOrder.BACK]: 2 };