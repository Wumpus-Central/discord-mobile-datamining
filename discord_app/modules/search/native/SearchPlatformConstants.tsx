// discord_app/modules/search/native/SearchPlatformConstants.tsx
import LinkingWhitelist from "../../links/native/LinkingWhitelist.tsx";
import FacebookNeutralIcon from "../../../design/components/Icon/native/redesign/generated/FacebookNeutralIcon.tsx";
import InstagramNeutralIcon from "../../../design/components/Icon/native/redesign/generated/InstagramNeutralIcon.tsx";
import YoutubeNeutralIcon from "../../../design/components/Icon/native/redesign/generated/YoutubeNeutralIcon.tsx";
import TiktokNeutralIcon from "../../../design/components/Icon/native/redesign/generated/TiktokNeutralIcon.tsx";
import TwitterNeutralIcon from "../../../design/components/Icon/native/redesign/generated/TwitterNeutralIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [
  { REGEX: LinkingWhitelist.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon },
  ,
  ,
  ,
];
const obj = { REGEX: LinkingWhitelist.LINKING_WHITELIST.tiktok.regex, Icon: TiktokNeutralIcon.TiktokNeutralIcon };
items[1] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
const obj2 = { REGEX: LinkingWhitelist.LINKING_WHITELIST.twitter.regex, Icon: TwitterNeutralIcon.TwitterNeutralIcon };
items[2] = {
  REGEX: LinkingWhitelist.LINKING_WHITELIST.instagram.regex,
  Icon: InstagramNeutralIcon.InstagramNeutralIcon,
};
const obj3 = {
  REGEX: LinkingWhitelist.LINKING_WHITELIST.instagram.regex,
  Icon: InstagramNeutralIcon.InstagramNeutralIcon,
};
items[3] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex, Icon: FacebookNeutralIcon.FacebookNeutralIcon };
const obj4 = {
  REGEX: LinkingWhitelist.LINKING_WHITELIST.facebook.regex,
  Icon: FacebookNeutralIcon.FacebookNeutralIcon,
};
items[4] = { REGEX: LinkingWhitelist.LINKING_WHITELIST.youtube.regex, Icon: YoutubeNeutralIcon.YoutubeNeutralIcon };
const result = size.fileFinishedImporting("modules/search/native/SearchPlatformConstants.tsx");

export const SEARCH_TEXT_INPUT_DEBOUNCE_TIME = 500;
export const EMPTY_MEDIA_RESULTS = [];
export const PLATFORM_REGEX_ICON_PAIRS = items;
