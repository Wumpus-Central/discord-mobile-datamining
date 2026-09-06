// discord_app/modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx
import useRefValueDefault from "../../../../hooks/useRefValue.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx");

export default function usePreloadedGuildAsset(guildId, icon, asset) {
  importDefault = guildId;
  dependencyMap = icon;
  _slicedToArray = asset;
  noop = _slicedToArray(noop.useState({}), 2)[1];
  let obj = { guildId, asset, icon, preloading: icon };
  const ref = noop.useRef(obj);
  const effect = noop.useEffect(
    () => () => {
      ref.current.guildId = undefined;
    },
    [],
  );
  const tmp3 = useRefValueDefault(ref);
  if (guildId === tmp3.guildId) {
    asset = tmp3.asset;
  }
  const effect1 = obj.useEffect(() => {
    if (guildId === ref.current.guildId) {
      if (null != icon) {
        if (tmp5) {
          ref.current.preloading = icon;
          FastImageDefault.preload(icon).then(() => {
            let tmp2 = ref.current.guildId === guildId;
            if (tmp2) {
              tmp2 = ref.current.preloading === icon;
            }
            if (tmp2) {
              ref.current.icon = icon;
              ref.current.asset = asset;
              closure_1_3({});
            }
          });
          const preloadResult = FastImageDefault.preload(icon);
        }
        tmp5 = icon !== ref.current.icon && icon !== ref.current.preloading;
      }
    }
    ref.current.guildId = guildId;
    ref.current.icon = icon;
    ref.current.preloading = icon;
    ref.current.asset = asset;
  });
  return asset;
}
