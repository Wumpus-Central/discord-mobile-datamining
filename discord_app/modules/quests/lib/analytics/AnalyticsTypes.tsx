// === Module 7420: getQuestContentName ===

// Module 7420 (getQuestContentName)
import set from "set" /* 2 */;
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource" /* 5355 */;

let closure_2 = Object.keys(QuestsVisibleMessagesChangedSource.QuestContent);
const result = set.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsTypes.tsx");

export const getQuestContentName = function getQuestContentName(questContent) {
  closure_0 = questContent;
  let str = closure_2.find((arg0) => questContent(closure_1_1[0]).QuestContent[arg0] === questContent);
  if (str == null) {
    str = "";
  }
  return str;
};
export const getQuestStatus = function getQuestStatus(quest) {
  const userStatus = quest.userStatus;
  let claimedAt;
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  let str = "COMPLETED_CLAIMED";
  if (null == claimedAt) {
    const userStatus2 = quest.userStatus;
    let completedAt;
    if (userStatus2 != null) {
      completedAt = userStatus2.completedAt;
    }
    let str2 = "COMPLETED";
    if (null == completedAt) {
      const userStatus3 = quest.userStatus;
      let enrolledAt;
      if (userStatus3 != null) {
        enrolledAt = userStatus3.enrolledAt;
      }
      let str3 = "NONE";
      if (null != enrolledAt) {
        str3 = "ENROLLED";
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
export const getContentProperties = function getContentProperties(questContent, questContentPosition, questContentRowIndex) {
  const obj = { content_id: questContent, content_name: null, content_position: null, row_index: null };
  closure_0 = questContent;
  let str = closure_2.find((arg0) => questContent(closure_1_1[0]).QuestContent[arg0] === questContent);
  if (str == null) {
    str = "";
  }
  obj[1] = str;
  obj[2] = questContentPosition;
  obj[3] = questContentRowIndex;
  return obj;
};
export const BountyScrollingType = { AUTO: "AUTO", MANUAL: "MANUAL" };
export const HorizontalScrollingDirection = { LEFT: "LEFT", RIGHT: "RIGHT" };
export const VerticalScrollingDirection = { UP: "UP", DOWN: "DOWN" };
export const QuestHomeScrollingType = { ARROW: "ARROW", AUTO: "AUTO", MANUAL: "MANUAL" };
export const QuestContentCTA = { LEARN_MORE: "LEARN_MORE", SHOW_REWARD: "SHOW_REWARD", CLAIM_REWARD: "CLAIM_REWARD", GET_REWARD_CODE: "GET_REWARD_CODE", COPY_REWARD_CODE: "COPY_REWARD_CODE", ACCEPT_QUEST: "ACCEPT_QUEST", COPY_QUEST_URL: "COPY_QUEST_URL", MOBILE_SHARESHEET: "MOBILE_SHARESHEET", TRACK_PROGRESS: "TRACK_PROGRESS", CONNECT_CONSOLE: "CONNECT_CONSOLE", CONNECT_CONSOLE_LINK: "CONNECT_CONSOLE_LINK", VIEW_CONSOLE_CONNECTIONS: "VIEW_CONSOLE_CONNECTION", VIEW_CONSOLE_CONNECTIONS_LINK: "VIEW_CONSOLE_CONNECTIONS_LINK", VIEW_REQUIREMENTS: "VIEW_REQUIREMENTS", SELECT_CONSOLE_PLATFORM: "SELECT_CONSOLE_PLATFORM", SELECT_DESKTOP_PLATFORM: "SELECT_DESKTOP_PLATFORM", DESELECT_PLATFORM: "DESELECT_PLATFORM", OPEN_ACCOUNT_LINK_MODAL: "OPEN_ACCOUNT_LINK_MODAL", OPEN_ACCOUNT_LINK_INSTRUCTIONS: "OPEN_ACCOUNT_LINK_INSTRUCTIONS", SELECT_IN_GAME_AUTH_METHOD: "SELECT_IN_GAME_AUTH_METHOD", SELECT_WEB_AUTH_METHOD: "SELECT_WEB_AUTH_METHOD", START_WEB_AUTHORIZATION: "START_WEB_AUTHORIZATION", DEFIBRILLATOR: "DEFIBRILLATOR", DEFIBRILLATOR_RECONNECT_CONSOLE: "DEFIBRILLATOR_RECONNECT_CONSOLE", OPEN_DISCLOSURE: "OPEN_DISCLOSURE", WATCH_STREAM: "WATCH_STREAM", WATCH_STREAM_CONFIRM: "WATCH_STREAM_CONFIRM", REWARD_LEARN_MORE: "REWARD_LEARN_MORE", OPEN_GAME_LINK: "OPEN_GAME_LINK", OPEN_CONTEXT_MENU: "OPEN_CONTEXT_MENU", OPEN_QUEST_HOME: "OPEN_QUEST_HOME", OPEN_QUEST_HOME_TO_CLAIM: "OPEN_QUEST_HOME_TO_CLAIM", QUEST_BAR_COPY_LINK: "QUEST_BAR.COPY_LINK", CONTEXT_MENU_COPY_LINK: "CONTEXT_MENU.COPY_LINK", REWARD_MODAL_COPY_LINK: "REWARD_MODAL.COPY_LINK", CONTEXT_MENU_HIDE_CONTENT: "CONTEXT_MENU.HIDE_CONTENT", CONTEXT_MENU_OPEN_GAME_LINK: "CONTEXT_MENU.OPEN_GAME_LINK", CONTEXT_MENU_OPEN_DISCLOSURE: "CONTEXT_MENU.OPEN_DISCLOSURE", CONTEXT_MENU_LEARN_MORE: "CONTEXT_MENU.LEARN_MORE", HOW_TO_HELP_ARTICLE_XBOX: "HOW_TO_HELP_ARTICLE_XBOX", HOW_TO_HELP_ARTICLE_PLAYSTATION: "HOW_TO_HELP_ARTICLE_PLAYSTATION", VIEW_QUESTS: "VIEW_QUESTS", EXPAND: "EXPAND", COLLAPSE: "COLLAPSE", START_QUEST: "START_QUEST", TRANSCRIPT_ENABLE: "TRANSCRIPT_ENABLE", TRANSCRIPT_DISABLE: "TRANSCRIPT_DISABLE", CLOSED_CAPTIONING_ENABLE: "CLOSED_CAPTIONING_ENABLE", CLOSED_CAPTIONING_DISABLE: "CLOSED_CAPTIONING_DISABLE", SEEK_BACKWARD: "SEEK_BACKWARD", SEEK_FORWARD: "SEEK_FORWARD", WATCH_VIDEO: "WATCH_VIDEO", QUEST_BAR_VIDEO_QUEST_PREVIEW: "QUEST_BAR_VIDEO_QUEST_PREVIEW", QUEST_HOME_TILE_HEADER_WATCH_VIDEO: "QUEST_HOME_TILE_HEADER_WATCH_VIDEO", REDEEM_REWARD: "REDEEM_REWARD", VISIT_REDEMPTION_LINK: "VISIT_REDEMPTION_LINK", SPONSORED_QUEST_SHEET: "SPONSORED_QUEST_SHEET", GAME_PROFILE_OPEN: "GAME_PROFILE_OPEN", GAME_STORE_OPEN_GAME_LINK: "GAME_STORE_OPEN_GAME_LINK", MOBILE_ORBS_ONBOARDING_DC: "MOBILE_ORBS_ONBOARDING_DC", LAUNCH_MOBILE_ACTIVITY: "LAUNCH_MOBILE_ACTIVITY", OPEN_NITRO_CHECKOUT: "OPEN_NITRO_CHECKOUT", OPEN_NITRO_HOME: "OPEN_NITRO_HOME", START_BOUNTY: "START_BOUNTY", BACK_TO_BOUNTIES: "BACK_TO_BOUNTIES", QUEST_ACCESS_SUSPENDED: "QUEST_ACCESS_SUSPENDED" };