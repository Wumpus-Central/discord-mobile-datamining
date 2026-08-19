// discord_app/modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import GameIcon from "../../game_detection/native/GameIcon.tsx";
import GameIconDefault from "../../game_detection/native/GameIcon.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.xs, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flexDirection: "row" };
createCacheKey[3] = { opacity: 0.3 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx");

export default function ChannelItemEmbeddedActivities(muted) {
  ({ embeddedApps, size } = muted);
  if (size === undefined) {
    size = GameIcon.GameIconSizes.SIZE_24;
  }
  let modeMuted = muted.muted;
  const tmp3 = callback2();
  if (embeddedApps.length <= 0) {
    return null;
  } else if (1 === embeddedApps.length) {
    let obj = { game: null, size: null, style: null };
    obj[0] = embeddedApps[0].application;
    obj[1] = size;
    if (modeMuted) {
      modeMuted = tmp3.modeMuted;
    }
    obj[2] = modeMuted;
    return callback(GameIconDefault, obj);
  } else {
    const diff = embeddedApps.length - 1;
    const tmp13 = GameIcon.GameIconImageSize[size];
    obj = { style: null, children: null };
    obj[0] = tmp3.container;
    obj1 = { game: null, size: null, style: null };
    obj1[0] = embeddedApps[0].application;
    obj1[1] = size;
    obj1[2] = { marginRight: 4 };
    const items = [callback(GameIconDefault, obj1), ];
    if (2 === embeddedApps.length) {
      obj = { game: null, size: null };
      obj[0] = embeddedApps[1].application;
      obj[1] = size;
      let tmp16Result = callback(GameIconDefault, obj);
    } else {
      const obj2 = { style: null, children: null };
      const items1 = [tmp3.overflowContainer, ];
      const obj3 = { height: null, minWidth: null };
      obj3[0] = tmp13;
      obj3[1] = tmp13;
      items1[1] = obj3;
      obj2[0] = items1;
      const obj4 = { style: null, variant: "text-xs/bold", children: null };
      obj4[0] = tmp3.overflow;
      const _HermesInternal = HermesInternal;
      obj4[2] = "+" + diff;
      obj2[1] = callback(Text.Text, obj4);
      tmp16Result = callback(View, obj2);
    }
    items[1] = tmp16Result;
    obj[1] = items;
    return callback(View, obj);
  }
};