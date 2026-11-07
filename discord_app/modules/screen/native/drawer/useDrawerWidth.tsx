// === Module 11702: useDrawerWidth ===

// Module 11702 (useDrawerWidth)
import useChatLayoutDefault from "useChatLayout" /* 5317 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5319 */;
import useFoldSeamDefault from "useFoldSeam" /* 11703 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5171 */;

const require = fn;
const Constants = fn(1072);
const DM_WIDTH = Constants.DM_WIDTH;
const MOBILE_GUILD_UPSELL_LIST = Constants.MOBILE_GUILD_UPSELL_LIST;
const sum = 260 + DM_WIDTH;
let closure_7 = 300 + DM_WIDTH;
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export function useDrawerWidth(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const whileSliding = obj.whileSliding;
  const width = useBaseAppContainerDimensionsDefault().width;
  ({ isChatLockedOpen, isChatBesideChannelList } = useChatLayoutDefault());
  const tmp2 = useFoldSeamDefault();
  const tmp = useChatLayoutDefault();
  items = [SelectedGuildStore];
  if (isChatBesideChannelList) {
    if (!obj2.useStateFromStores(items, () => guildId.getGuildId() === MOBILE_GUILD_UPSELL_LIST)) {
      let seam;
      if (tmp2 != null) {
        seam = tmp2.seam;
      }
      if (seam == null) {
        seam = null;
      }
      if (null != seam) {
        if (seam > DM_WIDTH + 32) {
          if (seam < width - 32) {
            if (null == whileSliding) {
              return seam;
            } else {
              let settledSeam;
              if (tmp2 != null) {
                settledSeam = tmp2.settledSeam;
              }
              if (settledSeam == null) {
                settledSeam = null;
              }
              if (null != settledSeam) {
                if (settledSeam > DM_WIDTH + 32) {
                  if (settledSeam < width - 32) {
                    if ("wider" === whileSliding) {
                      const _Math4 = Math;
                      let bound = Math.max(seam, settledSeam);
                    } else {
                      const _Math3 = Math;
                      bound = Math.min(seam, settledSeam);
                    }
                    return bound;
                  }
                }
              }
              if (isChatLockedOpen) {
                let bound1 = sum;
              } else {
                const _Math2 = Math;
                bound1 = Math.min(closure_7, width - 32);
              }
            }
          }
        }
      }
      if (isChatLockedOpen) {
        let bound2 = sum;
      } else {
        const _Math = Math;
        bound2 = Math.min(closure_7, width - 32);
      }
    }
  }
  return width;
}