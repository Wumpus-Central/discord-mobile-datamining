// === Module 13234: SearchPlatformConstants ===

// Module 13234 (SearchPlatformConstants)
import LinkingWhitelist from "LinkingWhitelist" /* 5661 */;
import FacebookNeutralIcon from "FacebookNeutralIcon" /* 8478 */;
import InstagramNeutralIcon from "InstagramNeutralIcon" /* 8480 */;
import YoutubeNeutralIcon from "YoutubeNeutralIcon" /* 9494 */;
import TiktokNeutralIcon from "TiktokNeutralIcon" /* 13235 */;
import TwitterNeutralIcon from "TwitterNeutralIcon" /* 13237 */;
import size from "module_2" /* 2 */;

const items = [{ REGEX: LinkingWhitelist.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon }, , , , ];
const obj = { REGEX: LinkingWhitelist.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon };
items[1] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
const obj2 = { REGEX: LinkingWhitelist.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
items[2] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.instagram.regex, Icon: InstagramNeutralIcon.InstagramNeutralIcon };
const obj3 = { REGEX: LinkingWhitelist.LINKING_WHITELIST.instagram.regex, Icon: InstagramNeutralIcon.InstagramNeutralIcon };
items[3] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
const obj4 = { REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
items[4] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon };
const result = size.fileFinishedImporting("modules/search/native/SearchPlatformConstants.tsx");

export const SEARCH_TEXT_INPUT_DEBOUNCE_TIME = 500;
export const EMPTY_MEDIA_RESULTS = [];
export const PLATFORM_REGEX_ICON_PAIRS = items;