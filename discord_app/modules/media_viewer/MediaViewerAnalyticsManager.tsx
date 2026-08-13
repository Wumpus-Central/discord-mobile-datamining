// discord_app/modules/media_viewer/MediaViewerAnalyticsManager.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import ME from "ME";
import keys from "keys";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";

let c3;
let c4;
({ AnalyticEvents: c3, AnalyticsSections: c4 } = ME);
let obj = { VIEWER_SWIPE: "number_viewer_swipes", THUMBNAIL_SWIPE: "number_thumbnail_swipes", SELECTED_ITEM_CHANGE: "number_selected_item_changes", ZOOM_IN_BUTTON_PRESSED: "number_zoom_in_button_pressed", ZOOM_IN_IMAGE_PRESSED: "number_zoom_in_image_pressed", ZOOM_OUT_BUTTON_PRESSED: "number_zoom_out_button_pressed", ZOOM_OUT_IMAGE_PRESSED: "number_zoom_out_image_pressed", FORWARD_PRESSED: "number_forward_button_pressed", SAVE_MEDIA_PRESSED: "number_save_media_button_pressed", OPEN_LINK_PRESSED: "number_open_link_button_pressed", MORE_BUTTON_PRESSED: "number_more_button_pressed", COPY_IMAGE_PRESSED: "number_copy_image_more_menu_pressed", COPY_LINK_PRESSED: "number_copy_link_more_menu_pressed", CONTEXT_MENU_OPENED: "number_context_menu_opened" };
obj = { guildId: "disabled", channelId: "isArray", channelType: "isArray", numMediaItems: "Array", hasMediaOptions: "call", source: 158400785, incrementableActions: 1375731712 };
const values = Object.values(obj);
obj[6] = Object.fromEntries(values.map((arg0) => {
  const items = [arg0, 0];
  return items;
}));
let closure_6 = keys.create(() => obj);
obj = {
  markSessionStarted(channelId) {
    channel = channel.getChannel(channelId.channelId);
    let obj = expandEventProperties;
    obj = { type: constants2.MEDIA_VIEWER, source: channelId.source, channel_id: channelId.channelId, channel_type: null, guild_id: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[3] = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj[4] = guild_id;
    obj.track(constants.OPEN_MODAL, obj);
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(channelId);
    obj.channelId = channelId.channelId;
    let type1;
    if (channel != null) {
      type1 = channel.type;
    }
    obj.channelType = type1;
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    obj.guildId = guild_id1;
    store.setState(obj);
  },
  markSessionCompleted() {
    const state = store.getState();
    let obj = expandEventProperties;
    obj = { source: state.source, guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType, number_media_items: state.numMediaItems, has_media_options: state.hasMediaOptions };
    const merged = Object.assign(state.incrementableActions);
    obj.track(constants.MEDIA_VIEWER_SESSION_COMPLETED, obj);
    obj = {};
    const merged1 = Object.assign(obj);
    store.setState(obj);
  },
  markActionPerformed(SELECTED_ITEM_CHANGE) {
    let closure_0 = SELECTED_ITEM_CHANGE;
    store.setState((incrementableActions) => {
      let obj = { incrementableActions: null };
      obj = {};
      const merged = Object.assign(incrementableActions.incrementableActions);
      obj[closure_0] = incrementableActions.incrementableActions[closure_0] + 1;
      obj[0] = obj;
      return obj;
    });
  },
  trackMediaViewerImageSaved(arg0) {
    let success;
    let url;
    ({ url, success } = arg0);
    const state = store.getState();
    let obj = expandEventProperties;
    obj = { url, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_IMAGE_SAVED, obj);
  },
  trackMediaViewerImageCopied(arg0) {
    let success;
    let url;
    ({ url, success } = arg0);
    const state = store.getState();
    let obj = expandEventProperties;
    obj = { url, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_IMAGE_COPIED, obj);
  },
  trackMediaViewerLinkCopied(arg0) {
    let href;
    let success;
    ({ href, success } = arg0);
    const state = store.getState();
    let obj = expandEventProperties;
    obj = { href, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_LINK_COPIED, obj);
  },
  trackMediaViewerLinkOpened(href) {
    const state = store.getState();
    let obj = expandEventProperties;
    obj = { href: href.href, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_LINK_OPENED, obj);
  },
  trackMediaViewerDownloadButtonTapped() {
    const state = store.getState();
    let obj = expandEventProperties;
    obj = { guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType };
    obj.track(constants.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, obj);
  },
  trackMediaViewerShareButtonTapped() {
    const state = store.getState();
    let obj = expandEventProperties;
    obj = { guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType };
    obj.track(constants.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, obj);
  },
  trackMessageEmbedsActionCompleted(arg0) {
    let action;
    let error;
    let platform;
    ({ platform, action, error } = arg0);
    expandEventProperties.track(constants.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform, error, action });
  }
};
const result = require("keys").fileFinishedImporting("modules/media_viewer/MediaViewerAnalyticsManager.tsx");

export const IncrementableMediaViewerActions = obj;
export const MediaViewerAnalytics = obj;