// discord_app/modules/search/native/SearchPlatformConstants.tsx
import LinkingWhitelist from "../../links/native/LinkingWhitelist.tsx";
import FacebookNeutralIcon from "../../../design/components/Icon/native/redesign/generated/FacebookNeutralIcon.tsx";
import InstagramNeutralIcon from "../../../design/components/Icon/native/redesign/generated/InstagramNeutralIcon.tsx";
import YoutubeNeutralIcon from "../../../design/components/Icon/native/redesign/generated/YoutubeNeutralIcon.tsx";
import TiktokNeutralIcon from "../../../design/components/Icon/native/redesign/generated/TiktokNeutralIcon.tsx";
import TwitterNeutralIcon from "../../../design/components/Icon/native/redesign/generated/TwitterNeutralIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { REGEX: LinkingWhitelist.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon };
const items = [obj, , , ,];
obj = { REGEX: LinkingWhitelist.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
items[1] = obj;
obj = { REGEX: LinkingWhitelist.LINKING_WHITELIST.instagram.regex, Icon: InstagramNeutralIcon.InstagramNeutralIcon };
items[2] = obj;
items[3] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
const obj1 = {
  REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex,
  Icon: FacebookNeutralIcon.FacebookNeutralIcon,
};
items[4] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon };
const result = size.fileFinishedImporting("modules/search/native/SearchPlatformConstants.tsx");

export const SEARCH_TEXT_INPUT_DEBOUNCE_TIME = 500;
export const EMPTY_MEDIA_RESULTS = [];
export const PLATFORM_REGEX_ICON_PAIRS = items;
