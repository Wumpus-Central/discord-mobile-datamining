// === Module 17835: MediaPlaybackPanelContainer ===

// Module 17835 (MediaPlaybackPanelContainer)
import c from "c" /* 576 */;
import _mod4694 from "module_4694" /* 4694 */;
import MediaPlayerManager from "MediaPlayerManager" /* 14727 */;
import MediaPlaybackPanelControllerDefault from "MediaPlaybackPanelController" /* 17836 */;
import MediaPlaybackPanelUIDefault from "MediaPlaybackPanelUI" /* 17838 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelContainer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaPlaybackPanelContainer() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(showPip) {
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
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = MediaPlayerManager;
  const mediaPlayerManagerStore = tmpResult.useMediaPlayerManagerStore(_mod4694.useShallow(first));
  if (cResult[1] !== mediaPlayerManagerStore) {
    let tmp7 = null;
    if (mediaPlayerManagerStore) {
      const obj2 = { children: jsx(MediaPlaybackPanelUIDefault, {}) };
      tmp7 = jsx(MediaPlaybackPanelControllerDefault, { children: jsx(MediaPlaybackPanelUIDefault, {}) });
    }
    cResult[1] = mediaPlayerManagerStore;
    cResult[2] = tmp7;
    let tmp6 = tmp7;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (function MediaPlaybackPanelContainer() {
  const obj = MediaPlayerManager;
  let tmp2 = null;
  if (obj.useMediaPlayerManagerStore(obj2.useShallow((showPip) => {
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
    const obj3 = { children: jsx(MediaPlaybackPanelUIDefault, {}) };
    tmp2 = jsx(MediaPlaybackPanelControllerDefault, { children: jsx(MediaPlaybackPanelUIDefault, {}) });
  }
  return tmp2;
}));