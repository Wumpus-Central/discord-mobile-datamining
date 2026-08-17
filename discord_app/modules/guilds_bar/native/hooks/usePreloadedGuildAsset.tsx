// discord_app/modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx
import useRefValueDefault from "../../../../hooks/useRefValue.tsx";
import closure_2 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";

const result = require("set").fileFinishedImporting("modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx");

export default function usePreloadedGuildAsset(guildId, icon, asset) {
  importDefault = guildId;
  dependencyMap = icon;
  const callback = asset;
  let obj = React;
  React = callback(React.useState({}), 2)[1];
  obj = { guildId, asset, icon, preloading: icon };
  const ref = React.useRef(obj);
  const effect = React.useEffect(() => () => {
    ref.current.guildId = undefined;
  }, []);
  const tmp3 = useRefValueDefault(ref);
  if (guildId === tmp3.guildId) {
    asset = tmp3.asset;
  }
  const effect1 = obj.useEffect(() => {
    if (guildId === ref.current.guildId) {
      if (null != icon) {
        if (tmp5) {
          tmp2.current.preloading = tmp3;
          const obj = guildId(icon[3]);
          guildId(icon[3]).preload(tmp3).then(() => {
            let tmp2 = ref.current.guildId === closure_0;
            if (tmp2) {
              tmp2 = tmp.current.preloading === closure_1;
            }
            if (tmp2) {
              tmp.current.icon = closure_1;
              tmp.current.asset = closure_2;
              callback({});
            }
          });
          const preloadResult = guildId(icon[3]).preload(tmp3);
        }
        tmp5 = tmp3 !== tmp2.current.icon && tmp3 !== tmp2.current.preloading;
      }
    }
    ref.current.guildId = guildId;
    ref.current.icon = icon;
    ref.current.preloading = icon;
    ref.current.asset = closure_2;
  });
  return asset;
};