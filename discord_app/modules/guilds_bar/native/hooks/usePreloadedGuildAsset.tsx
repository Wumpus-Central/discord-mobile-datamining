// discord_app/modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx
import NativeImageManagerModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import useRefValueDefault from "../../../../hooks/useRefValue.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx");

export default function usePreloadedGuildAsset(guildId, icon, asset) {
  importDefault = guildId;
  dependencyMap = icon;
  _slicedToArray = asset;
  noop = _slicedToArray(noop.useState({}), 2)[1];
  const ref = noop.useRef({ guildId, asset, icon, preloading: icon });
  const effect = noop.useEffect(
    () => () => {
      ref.current.guildId = undefined;
    },
    [],
  );
  let tmp3 = useRefValueDefault(ref);
  if (guildId === tmp3.guildId) {
    asset = tmp3.asset;
  }
  const effect1 = noop.useEffect(() => {
    if (guildId === ref.current.guildId) {
      if (null != icon) {
        if (tmp3) {
          ref.current.preloading = icon;
          const obj2 = { uri: icon };
          NativeImageManagerModuleDefault.preload(obj2).then(() => {
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
          const preloadResult = NativeImageManagerModuleDefault.preload(obj2);
        }
        tmp3 = icon !== ref.current.icon && icon !== ref.current.preloading;
      }
    }
    ref.current.guildId = guildId;
    ref.current.icon = icon;
    ref.current.preloading = icon;
    ref.current.asset = asset;
  });
  return asset;
}
