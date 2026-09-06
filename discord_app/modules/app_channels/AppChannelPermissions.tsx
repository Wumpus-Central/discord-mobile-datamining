// discord_app/modules/app_channels/AppChannelPermissions.tsx
import Constants from "../../Constants.tsx";
import "BigFlagUtils";
import BigFlagUtils from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Permissions = Constants.Permissions;
const items = [, , , , , ,];
({
  VIEW_CHANNEL: arr[0],
  SEND_MESSAGES: arr[1],
  EMBED_LINKS: arr[2],
  ATTACH_FILES: arr[3],
  READ_MESSAGE_HISTORY: arr[4],
  ADD_REACTIONS: arr[5],
  USE_EXTERNAL_EMOJIS: arr[6],
} = Permissions);
const items1 = [...items];
const items2 = [,];
({ MANAGE_CHANNELS: arr3[0], MANAGE_ROLES: arr3[1] } = Permissions);
HermesBuiltin.arraySpread(items, 2);
const items3 = [...items2];
const applyResult = BigFlagUtils.combine.apply(items1);
const result = size.fileFinishedImporting("modules/app_channels/AppChannelPermissions.tsx");

export const APP_CHANNEL_MINIMUM_BOT_PERMISSIONS = applyResult;
export const SWAP_APP_CHANNEL_APPLICATION_PERMISSION_LIST = items2;
export const SWAP_APP_CHANNEL_APPLICATION_PERMISSIONS = BigFlagUtils.combine.apply(items3);
