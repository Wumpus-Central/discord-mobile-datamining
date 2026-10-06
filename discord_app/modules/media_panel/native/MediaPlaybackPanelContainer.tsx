// === Module 17401: MediaPlaybackPanelContainer ===

// Module 17401 (MediaPlaybackPanelContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react3 from "react" /* 4500 */;
import MediaPlayerManager from "MediaPlayerManager" /* 14396 */;
import MediaPlaybackPanelControllerDefault from "MediaPlaybackPanelController" /* 17402 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(showPip) {
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
      if (tmp3) {
        let attachmentIndex;
        ({ mediaSourceMessage, activeMediaPlayerSource } = showPip);
        if (activeMediaPlayerSource != null) {
          attachmentIndex = activeMediaPlayerSource.attachmentIndex;
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
    first = fn;
  } else {
    first = cResult[0];
  }
  const useMediaPlayerManagerStore = MediaPlayerManager.useMediaPlayerManagerStore;
  MediaPlayerManager;
  const tmpResult2 = react3;
  const mediaPlayerManagerStore = useMediaPlayerManagerStore(tmpResult2.useShallow(first));
  if (cResult[1] !== mediaPlayerManagerStore) {
    let tmp8 = null;
    if (mediaPlayerManagerStore) {
      MediaPlaybackPanelControllerDefault;
      tmp8 = <tmp11>{null}</tmp11>;
    }
    cResult[1] = mediaPlayerManagerStore;
    cResult[2] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (() => {
  const useMediaPlayerManagerStore = MediaPlayerManager.useMediaPlayerManagerStore;
  let tmp3 = null;
  const obj = react3;
  if (useMediaPlayerManagerStore(obj.useShallow((showPip) => {
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
    if (tmp3) {
      let attachmentIndex;
      ({ mediaSourceMessage, activeMediaPlayerSource } = showPip);
      if (activeMediaPlayerSource != null) {
        attachmentIndex = activeMediaPlayerSource.attachmentIndex;
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
    MediaPlaybackPanelControllerDefault;
    tmp3 = <tmp6>{null}</tmp6>;
  }
  return tmp3;
}));
const result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelContainer.tsx");

export default memoResult;