// discord_app/modules/forums/ForumConstants.tsx
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/forums/ForumConstants.tsx");

export const FORUM_GUIDELINES_ACTION_SHEET = "forum-guidelines-action-sheet";
export const MAX_FORUM_TAGS = 20;
export const MAX_FORUM_POST_TAGS = 5;
export const MAX_FORUM_TEMPLATE_LENGTH = 256;
export const ForumOnboardingCTAs = { PERMISSIONS: "Permissions", GUIDELINES: "Guidelines", RECOMMENDED_TAGS: "Recommended Tags", TAGS: "Tags", DEFAULT_REACTION: "Default Reaction", CREATE_POST: "Create Post" };
export const ForumTimestampFormats = { DURATION_AGO: 0, [0]: "DURATION_AGO", POSTED_DURATION_AGO: 1, [1]: "POSTED_DURATION_AGO" };