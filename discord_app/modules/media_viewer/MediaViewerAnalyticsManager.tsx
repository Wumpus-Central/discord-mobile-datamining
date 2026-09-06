// discord_app/modules/media_viewer/MediaViewerAnalyticsManager.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const Constants = fn(1074);
({ AnalyticEvents: c3, AnalyticsSections: closure_4 } = Constants);
let MediaViewerAnalytics = {
  VIEWER_SWIPE: "number_viewer_swipes",
  THUMBNAIL_SWIPE: "number_thumbnail_swipes",
  SELECTED_ITEM_CHANGE: "number_selected_item_changes",
  ZOOM_IN_BUTTON_PRESSED: "number_zoom_in_button_pressed",
  ZOOM_IN_IMAGE_PRESSED: "number_zoom_in_image_pressed",
  ZOOM_OUT_BUTTON_PRESSED: "number_zoom_out_button_pressed",
  ZOOM_OUT_IMAGE_PRESSED: "number_zoom_out_image_pressed",
  FORWARD_PRESSED: "number_forward_button_pressed",
  SAVE_MEDIA_PRESSED: "number_save_media_button_pressed",
  OPEN_LINK_PRESSED: "number_open_link_button_pressed",
  MORE_BUTTON_PRESSED: "number_more_button_pressed",
  COPY_IMAGE_PRESSED: "number_copy_image_more_menu_pressed",
  COPY_LINK_PRESSED: "number_copy_link_more_menu_pressed",
  CONTEXT_MENU_OPENED: "number_context_menu_opened",
};
MediaViewerAnalytics = {
  guildId: "ip",
  channelId: "isArray",
  channelType: "isArray",
  numMediaItems: "Array",
  hasMediaOptions: "PX_16",
  source: null,
  incrementableActions: null,
};
const values = Object.values(MediaViewerAnalytics);
MediaViewerAnalytics.incrementableActions = Object.fromEntries(
  values.map((item) => {
    const items = [item, 0];
    return items;
  }),
);
const module_560 = fn(560);
let closure_6 = module_560.create(() => obj);
MediaViewerAnalytics = {
  markSessionStarted(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    obj = {
      type: constants2.MEDIA_VIEWER,
      source: channelId.source,
      channel_id: channelId.channelId,
      channel_type: null,
      guild_id: null,
    };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj.guild_id = guild_id;
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
    closure_6.setState(obj);
  },
  markSessionCompleted() {
    const state = closure_6.getState();
    obj = {
      source: state.source,
      guild_id: state.guildId,
      channel_id: state.channelId,
      channel_type: state.channelType,
      number_media_items: state.numMediaItems,
      has_media_options: state.hasMediaOptions,
    };
    const merged = Object.assign(state.incrementableActions);
    obj.track(constants.MEDIA_VIEWER_SESSION_COMPLETED, obj);
    obj = {};
    const merged1 = Object.assign(obj);
    closure_6.setState(obj);
  },
  markActionPerformed(SELECTED_ITEM_CHANGE) {
    closure_0 = SELECTED_ITEM_CHANGE;
    closure_6.setState((incrementableActions) => {
      incrementableActions = { incrementableActions: null };
      incrementableActions = {};
      const merged = Object.assign(incrementableActions.incrementableActions);
      incrementableActions[closure_0] = incrementableActions.incrementableActions[closure_0] + 1;
      incrementableActions.incrementableActions = incrementableActions;
      return incrementableActions;
    });
  },
  trackMediaViewerImageSaved(arg0) {
    ({ url, success } = arg0);
    const state = closure_6.getState();
    obj = { url, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_IMAGE_SAVED, obj);
  },
  trackMediaViewerImageCopied(arg0) {
    ({ url, success } = arg0);
    const state = closure_6.getState();
    obj = { url, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_IMAGE_COPIED, obj);
  },
  trackMediaViewerLinkCopied(arg0) {
    ({ href, success } = arg0);
    const state = closure_6.getState();
    obj = { href, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_LINK_COPIED, obj);
  },
  trackMediaViewerLinkOpened(href) {
    const state = closure_6.getState();
    obj = { href: href.href, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_LINK_OPENED, obj);
  },
  trackMediaViewerDownloadButtonTapped() {
    const state = closure_6.getState();
    obj = { guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType };
    obj.track(constants.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, obj);
  },
  trackMediaViewerShareButtonTapped() {
    const state = closure_6.getState();
    obj = { guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType };
    obj.track(constants.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, obj);
  },
  trackMessageEmbedsActionCompleted(arg0) {
    ({ platform, action, error } = arg0);
    AnalyticsUtilsDefault.track(constants.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform, error, action });
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/MediaViewerAnalyticsManager.tsx");

export const IncrementableMediaViewerActions = MediaViewerAnalytics;
export { MediaViewerAnalytics };
