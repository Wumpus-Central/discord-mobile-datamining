// discord_app/modules/search/native/SearchPlatformConstants.tsx
import set from "../../../../_runtime/00002_set.js";
import LINKING_WHITELIST from "../../links/native/LinkingWhitelist.tsx";
import FacebookNeutralIcon from "../../../design/components/Icon/native/redesign/generated/FacebookNeutralIcon.tsx";
import InstagramNeutralIcon from "../../../design/components/Icon/native/redesign/generated/InstagramNeutralIcon.tsx";
import TiktokNeutralIcon from "../../../design/components/Icon/native/redesign/generated/TiktokNeutralIcon.tsx";
import TwitterNeutralIcon from "../../../design/components/Icon/native/redesign/generated/TwitterNeutralIcon.tsx";
import YoutubeNeutralIcon from "../../../design/components/Icon/native/redesign/generated/YoutubeNeutralIcon.tsx";

let obj = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon };
const items = [obj, , , , ];
obj = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
items[1] = obj;
obj = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.instagram.regex, Icon: InstagramNeutralIcon.InstagramNeutralIcon };
items[2] = obj;
items[3] = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
const obj1 = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
items[4] = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon };
const obj2 = { REGEX: LINKING_WHITELIST.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon };
const result = set.fileFinishedImporting("modules/search/native/SearchPlatformConstants.tsx");

export const SEARCH_TEXT_INPUT_DEBOUNCE_TIME = 500;
export const EMPTY_MEDIA_RESULTS = [];
export const PLATFORM_REGEX_ICON_PAIRS = items;