// === Module 7935: MediaViewerAnalyticsManager ===

// Module 7935 (MediaViewerAnalyticsManager)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let fromEntries;
let values;
({ AnalyticEvents: c3, AnalyticsSections: closure_4 } = Constants);
let obj = { VIEWER_SWIPE: "number_viewer_swipes", THUMBNAIL_SWIPE: "number_thumbnail_swipes", SELECTED_ITEM_CHANGE: "number_selected_item_changes", ZOOM_IN_BUTTON_PRESSED: "number_zoom_in_button_pressed", ZOOM_IN_IMAGE_PRESSED: "number_zoom_in_image_pressed", ZOOM_OUT_BUTTON_PRESSED: "number_zoom_out_button_pressed", ZOOM_OUT_IMAGE_PRESSED: "number_zoom_out_image_pressed", FORWARD_PRESSED: "number_forward_button_pressed", SAVE_MEDIA_PRESSED: "number_save_media_button_pressed", OPEN_LINK_PRESSED: "number_open_link_button_pressed", MORE_BUTTON_PRESSED: "number_more_button_pressed", COPY_IMAGE_PRESSED: "number_copy_image_more_menu_pressed", COPY_LINK_PRESSED: "number_copy_link_more_menu_pressed", CONTEXT_MENU_OPENED: "number_context_menu_opened" };
let obj2 = {
  guildId: "duration",
  channelId: "toCharArray$esjava$1",
  channelType: "toCharArray$esjava$1",
  numMediaItems: "Array",
  hasMediaOptions: "unicodeVersion",
  source: null,
  incrementableActions: fromEntries(values.map((item) => {
    const items = [item, 0];
    return items;
  }))
};
fromEntries = Object.fromEntries;
values = Object.values(obj);
let closure_6 = module_570.create(() => obj2);
const obj3 = {
  markSessionStarted(channelId) {
    let guild_id;
    let guild_id1;
    let type;
    let type1;
    const channel = ChannelStore.getChannel(channelId.channelId);
    const obj = { type: constants2.MEDIA_VIEWER, source: channelId.source, channel_id: channelId.channelId, channel_type: type, guild_id };
    type = undefined;
    const track = AnalyticsUtilsDefault.track;
    const OPEN_MODAL = constants.OPEN_MODAL;
    AnalyticsUtilsDefault;
    if (channel != null) {
      type = channel.type;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    track(OPEN_MODAL, obj);
    obj2 = { channelId: channelId.channelId, channelType: type1, guildId: guild_id1 };
    const setState = closure_6.setState;
    const merged = Object.assign(obj2);
    const merged1 = Object.assign(channelId);
    type1 = undefined;
    if (channel != null) {
      type1 = channel.type;
    }
    guild_id1 = undefined;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    setState(obj2);
  },
  markSessionCompleted() {
    const state = closure_6.getState();
    const track = AnalyticsUtilsDefault.track;
    const MEDIA_VIEWER_SESSION_COMPLETED = constants.MEDIA_VIEWER_SESSION_COMPLETED;
    const obj = { source: state.source, guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType, number_media_items: state.numMediaItems, has_media_options: state.hasMediaOptions };
    AnalyticsUtilsDefault;
    const merged = Object.assign(state.incrementableActions);
    track(MEDIA_VIEWER_SESSION_COMPLETED, obj);
    obj2 = {};
    const setState = closure_6.setState;
    const merged1 = Object.assign(obj2);
    setState(obj2);
  },
  markActionPerformed(SELECTED_ITEM_CHANGE) {
    let closure_0 = SELECTED_ITEM_CHANGE;
    closure_6.setState((incrementableActions) => {
      const obj = { incrementableActions: obj2 };
      obj2 = {};
      const merged = Object.assign(incrementableActions.incrementableActions);
      obj2[closure_0] = incrementableActions.incrementableActions[closure_0] + 1;
      return obj;
    });
  },
  trackMediaViewerImageSaved(arg0) {
    let success;
    let url;
    ({ url, success } = arg0);
    const state = closure_6.getState();
    const obj = AnalyticsUtilsDefault;
    obj2 = { url, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_IMAGE_SAVED, obj2);
  },
  trackMediaViewerImageCopied(arg0) {
    let success;
    let url;
    ({ url, success } = arg0);
    const state = closure_6.getState();
    const obj = AnalyticsUtilsDefault;
    obj2 = { url, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_IMAGE_COPIED, obj2);
  },
  trackMediaViewerLinkCopied(arg0) {
    let href;
    let success;
    ({ href, success } = arg0);
    const state = closure_6.getState();
    const obj = AnalyticsUtilsDefault;
    obj2 = { href, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_LINK_COPIED, obj2);
  },
  trackMediaViewerLinkOpened(href) {
    href = href.href;
    const state = closure_6.getState();
    const obj = AnalyticsUtilsDefault;
    obj2 = { href, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_LINK_OPENED, obj2);
  },
  trackMediaViewerDownloadButtonTapped() {
    const state = closure_6.getState();
    const obj = AnalyticsUtilsDefault;
    obj2 = { guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType };
    obj.track(constants.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, obj2);
  },
  trackMediaViewerShareButtonTapped() {
    const state = closure_6.getState();
    const obj = AnalyticsUtilsDefault;
    obj2 = { guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType };
    obj.track(constants.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, obj2);
  },
  trackMessageEmbedsActionCompleted(arg0) {
    let action;
    let error;
    let platform;
    ({ platform, action, error } = arg0);
    const obj = AnalyticsUtilsDefault;
    obj.track(constants.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform, error, action });
  }
};
const result = size.fileFinishedImporting("modules/media_viewer/MediaViewerAnalyticsManager.tsx");

export const IncrementableMediaViewerActions = obj;
export const MediaViewerAnalytics = obj3;