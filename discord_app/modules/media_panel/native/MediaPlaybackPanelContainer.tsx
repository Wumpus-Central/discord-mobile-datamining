// discord_app/modules/media_panel/native/MediaPlaybackPanelContainer.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function MediaPlaybackPanelContainer() {
  let obj = require("../../media/native/MediaPlayerManager.tsx") /* _initialize */;
  let tmp2 = null;
  if (obj.useMediaPlayerManagerStore(obj2.useShallow((showPip) => {
    let activeMediaPlayerSource;
    let mediaSourceMessage;
    showPip = showPip.showPip;
    let tmp = !showPip;
    if (showPip) {
      tmp = !showPip.canAccessMedia;
    }
    if (!tmp) {
      tmp = null == showPip.activeMediaPlayerSource;
    }
    let tmp3 = !tmp;
    if (!tmp) {
      ({ mediaSourceMessage, activeMediaPlayerSource } = showPip);
      if (activeMediaPlayerSource != null) {
        const attachmentIndex = activeMediaPlayerSource.attachmentIndex;
      }
      let flag = false;
      if (null != mediaSourceMessage) {
        flag = false;
        if (null != attachmentIndex) {
          let tmp5;
          if (mediaSourceMessage != null) {
            const contentMessage = mediaSourceMessage.getContentMessage();
            if (contentMessage != null) {
              tmp5 = contentMessage.attachments[attachmentIndex];
            }
          }
          let flag2;
          if (tmp5 != null) {
            const content_type = tmp5.content_type;
            if (content_type != null) {
              flag2 = content_type.startsWith("audio");
            }
          }
          if (flag2 == null) {
            flag2 = false;
          }
          flag = flag2;
        }
      }
      tmp3 = flag;
    }
    return tmp3;
  }))) {
    obj = { children: null };
    obj[0] = jsx(require("MediaPlaybackPanelUI.tsx"), {});
    tmp2 = jsx(require("MediaPlaybackPanelController.tsx"), { children: null });
    let tmp5 = require("MediaPlaybackPanelController.tsx");
  }
  return tmp2;
});
const result = require("_initialize").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelContainer.tsx");

export default memoResult;