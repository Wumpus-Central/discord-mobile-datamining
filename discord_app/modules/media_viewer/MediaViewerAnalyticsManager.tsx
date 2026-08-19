// discord_app/modules/media_viewer/MediaViewerAnalyticsManager.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import ME from "../../Constants.tsx";
import keys from "../../../_runtime/00644_keys.js";

({ AnalyticEvents: c3, AnalyticsSections: c4 } = ME);
let obj = { guildId: "disabled", channelId: "isArray", channelType: "isArray", numMediaItems: "Array", hasMediaOptions: "call", source: null, incrementableActions: null };
const values = Object.values(obj);
obj[6] = Object.fromEntries(values.map((item, index) => {
  const items = [item, 0];
  return items;
}));
let closure_6 = keys.create(() => obj);
obj = {
  markSessionStarted(channelId) {
    channel = channel.getChannel(channelId.channelId);
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
    obj = { source: state.source, guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType, number_media_items: state.numMediaItems, has_media_options: state.hasMediaOptions };
    const merged = Object.assign(state.incrementableActions);
    obj.track(constants.MEDIA_VIEWER_SESSION_COMPLETED, obj);
    obj = {};
    const merged1 = Object.assign(obj);
    store.setState(obj);
  },
  markActionPerformed(SELECTED_ITEM_CHANGE) {
    closure_0 = SELECTED_ITEM_CHANGE;
    store.setState((incrementableActions) => {
      obj = {};
      const merged = Object.assign(incrementableActions.incrementableActions);
      obj[closure_0] = incrementableActions.incrementableActions[closure_0] + 1;
      obj[0] = obj;
      return obj;
    });
  },
  trackMediaViewerImageSaved(arg0) {
    ({ url, success } = arg0);
    const state = store.getState();
    obj = { url, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_IMAGE_SAVED, obj);
  },
  trackMediaViewerImageCopied(arg0) {
    ({ url, success } = arg0);
    const state = store.getState();
    obj = { url, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_IMAGE_COPIED, obj);
  },
  trackMediaViewerLinkCopied(arg0) {
    ({ href, success } = arg0);
    const state = store.getState();
    obj = { href, success, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_LINK_COPIED, obj);
  },
  trackMediaViewerLinkOpened(href) {
    const state = store.getState();
    obj = { href: href.href, channel_id: state.channelId };
    obj.track(constants.MEDIA_VIEWER_LINK_OPENED, obj);
  },
  trackMediaViewerDownloadButtonTapped() {
    const state = store.getState();
    obj = { guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType };
    obj.track(constants.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, obj);
  },
  trackMediaViewerShareButtonTapped() {
    const state = store.getState();
    obj = { guild_id: state.guildId, channel_id: state.channelId, channel_type: state.channelType };
    obj.track(constants.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, obj);
  },
  trackMessageEmbedsActionCompleted(arg0) {
    ({ platform, action, error } = arg0);
    expandEventPropertiesDefault.track(constants.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform, error, action });
  }
};
const result = require("obj132").fileFinishedImporting("modules/media_viewer/MediaViewerAnalyticsManager.tsx");

export const IncrementableMediaViewerActions = obj;
export const MediaViewerAnalytics = obj;