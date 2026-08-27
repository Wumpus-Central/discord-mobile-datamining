// === Module 4804: MessageEmbedTypes ===

// Module 4804 (MessageEmbedTypes)
import ME from "ME" /* 676 */;
import set from "set" /* 2 */;

const MessageEmbedTypes = ME.MessageEmbedTypes;
const items = [, , , , , , , ];
({ AUTO_MODERATION_MESSAGE: arr[0], AUTO_MODERATION_NOTIFICATION: arr[1], RICH: arr[2], SAFETY_POLICY_NOTICE: arr[3], SAFETY_SYSTEM_NOTIFICATION: arr[4], AGE_VERIFICATION_SYSTEM_NOTIFICATION: arr[5], VOICE_CHANNEL: arr[6], POLL_RESULT: arr[7] } = MessageEmbedTypes);
let set = new Set(items);
const items1 = [, , , , , , , , ];
({ AUTO_MODERATION_MESSAGE: arr2[0], AUTO_MODERATION_NOTIFICATION: arr2[1], AGE_VERIFICATION_SYSTEM_NOTIFICATION: arr2[2], APPLICATION_NEWS: arr2[3], POST_PREVIEW: arr2[4], SAFETY_POLICY_NOTICE: arr2[5], SAFETY_SYSTEM_NOTIFICATION: arr2[6], VOICE_CHANNEL: arr2[7], POLL_RESULT: arr2[8] } = MessageEmbedTypes);
const result = set.fileFinishedImporting("modules/messages/EmbedConstants.tsx");

export const EMBED_TYPES_WITH_PARSEABLE_FIELDS = set;
export const EMBED_TYPES_WITH_SPECIAL_RENDERER = new Set(items1);