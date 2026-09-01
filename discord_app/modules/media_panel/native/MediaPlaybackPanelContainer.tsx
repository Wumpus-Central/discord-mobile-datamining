// discord_app/modules/media_panel/native/MediaPlaybackPanelContainer.tsx
import _initialize from "../../media/native/MediaPlayerManager.tsx";
import MediaPlaybackPanelControllerDefault from "MediaPlaybackPanelController.tsx";
import MediaPlaybackPanelUIDefault from "MediaPlaybackPanelUI.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
const memoResult = importAllResult.memo(function MediaPlaybackPanelContainer() {
  let obj = _initialize;
  let tmp2 = null;
  if (
    obj.useMediaPlayerManagerStore(
      obj2.useShallow((showPip) => {
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
      }),
    )
  ) {
    obj = { children: null };
    obj[0] = jsx(MediaPlaybackPanelUIDefault, {});
    tmp2 = jsx(MediaPlaybackPanelControllerDefault, { children: null });
    let tmp5 = MediaPlaybackPanelControllerDefault;
  }
  return tmp2;
});
const result = require("set").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelContainer.tsx");

export default memoResult;
