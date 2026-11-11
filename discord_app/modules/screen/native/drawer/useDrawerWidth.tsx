// discord_app/modules/screen/native/drawer/useDrawerWidth.tsx
import useChatLayoutDefault from "../../../chat/native/useChatLayout.tsx";
import useBaseAppContainerDimensionsDefault from "../useBaseAppContainerDimensions.tsx";
import useFoldSeamDefault from "../useFoldSeam.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

const require = fn;
const Constants = fn(1072);
const DM_WIDTH = Constants.DM_WIDTH;
({ MOBILE_GUILD_UPSELL_LIST: hasOwnProperty, WATERWHEELS: closure_6 } = Constants);
const sum = 260 + DM_WIDTH;
const metroImportDefault = sum;
let closure_8 = 300 + DM_WIDTH;
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
  let tmp2 = useFoldSeamDefault();
  const tmp = useChatLayoutDefault();
  items = [SelectedGuildStore];
  if (isChatBesideChannelList) {
    if (
      !obj2.useStateFromStores(items, () => {
        guildId = guildId.getGuildId();
        let tmp2 = guildId === closure_1_5;
        if (!tmp2) {
          tmp2 = guildId === closure_1_6;
        }
        return tmp2;
      })
    ) {
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
                bound1 = Math.min(closure_8, width - 32);
              }
            }
          }
        }
      }
      if (isChatLockedOpen) {
        let bound2 = sum;
      } else {
        const _Math = Math;
        bound2 = Math.min(closure_8, width - 32);
      }
    }
  }
  return width;
}
