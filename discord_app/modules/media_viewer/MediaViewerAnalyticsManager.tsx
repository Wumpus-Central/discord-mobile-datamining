// discord_app/modules/media_viewer/MediaViewerAnalyticsManager.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const Constants = fn(1074);
({ AnalyticEvents: c3, AnalyticsSections: closure_4 } = Constants);
let obj = {
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
let obj2 = {
  guildId: "ip",
  channelId: "isArray",
  channelType: "isArray",
  numMediaItems: "Array",
  hasMediaOptions: "call",
  source: 858992897,
  incrementableActions: 858993459,
};
const values = Object.values(obj);
obj2.incrementableActions = Object.fromEntries(
  values.map((item) => {
    const items = [item, 0];
    return items;
  }),
);
const module_560 = fn(560);
let closure_6 = module_560.create(() => obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/MediaViewerAnalyticsManager.tsx");

export const IncrementableMediaViewerActions = obj;
export const MediaViewerAnalytics = {
  markSessionStarted(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    obj2 = {
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
    obj2.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj2.guild_id = guild_id;
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
    const obj3 = {};
    const merged = Object.assign(obj2);
    const merged1 = Object.assign(channelId);
    obj3.channelId = channelId.channelId;
    let type1;
    if (channel != null) {
      type1 = channel.type;
    }
    obj3.channelType = type1;
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    obj3.guildId = guild_id1;
    closure_6.setState(obj3);
  },
  markSessionCompleted() {
    const state = closure_6.getState();
    obj2 = {
      source: state.source,
      guild_id: state.guildId,
      channel_id: state.channelId,
      channel_type: state.channelType,
      number_media_items: state.numMediaItems,
      has_media_options: state.hasMediaOptions,
    };
    const merged = Object.assign(state.incrementableActions);
    AnalyticsUtilsDefault.track(constants.MEDIA_VIEWER_SESSION_COMPLETED, obj2);
    const merged1 = Object.assign(obj2);
    closure_6.setState({});
  },
  markActionPerformed(SELECTED_ITEM_CHANGE) {
    closure_0 = SELECTED_ITEM_CHANGE;
    closure_6.setState((incrementableActions) => {
      const obj = { incrementableActions: null };
      obj2 = {};
      const merged = Object.assign(incrementableActions.incrementableActions);
      obj2[closure_0] = incrementableActions.incrementableActions[closure_0] + 1;
      obj.incrementableActions = obj2;
      return obj;
    });
  },
  trackMediaViewerImageSaved(arg0) {
    ({ url, success } = arg0);
    const state = closure_6.getState();
    AnalyticsUtilsDefault.track(constants.MEDIA_VIEWER_IMAGE_SAVED, { url, success, channel_id: state.channelId });
  },
  trackMediaViewerImageCopied(arg0) {
    ({ url, success } = arg0);
    const state = closure_6.getState();
    AnalyticsUtilsDefault.track(constants.MEDIA_VIEWER_IMAGE_COPIED, { url, success, channel_id: state.channelId });
  },
  trackMediaViewerLinkCopied(arg0) {
    ({ href, success } = arg0);
    const state = closure_6.getState();
    AnalyticsUtilsDefault.track(constants.MEDIA_VIEWER_LINK_COPIED, { href, success, channel_id: state.channelId });
  },
  trackMediaViewerLinkOpened(href) {
    const state = closure_6.getState();
    AnalyticsUtilsDefault.track(constants.MEDIA_VIEWER_LINK_OPENED, { href: href.href, channel_id: state.channelId });
  },
  trackMediaViewerDownloadButtonTapped() {
    const state = closure_6.getState();
    AnalyticsUtilsDefault.track(constants.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, {
      guild_id: state.guildId,
      channel_id: state.channelId,
      channel_type: state.channelType,
    });
  },
  trackMediaViewerShareButtonTapped() {
    const state = closure_6.getState();
    AnalyticsUtilsDefault.track(constants.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, {
      guild_id: state.guildId,
      channel_id: state.channelId,
      channel_type: state.channelType,
    });
  },
  trackMessageEmbedsActionCompleted(arg0) {
    ({ platform, action, error } = arg0);
    AnalyticsUtilsDefault.track(constants.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform, error, action });
  },
};
