// discord_app/modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { GameIcon } from "../../game_detection/native/GameIcon.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { overflow: { lineHeight: 16, textAlign: "center", textAlignVertical: "center", padding: 4 }, overflowContainer: null, container: null, modeMuted: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.xs, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flexDirection: "row" };
createCacheKey[3] = { opacity: 0.3 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx");

export default function ChannelItemEmbeddedActivities(muted) {
  let embeddedApps;
  let size;
  ({ embeddedApps, size } = muted);
  if (size === undefined) {
    size = GameIcon.GameIconSizes.SIZE_24;
  }
  let modeMuted = muted.muted;
  const tmp3 = createCacheKey();
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
    return callback(GameIcon, obj);
  } else {
    const diff = embeddedApps.length - 1;
    const tmp13 = GameIcon.GameIconImageSize[size];
    obj = { style: null, children: null };
    obj[0] = tmp3.container;
    const obj1 = { game: null, size: null, style: null };
    obj1[0] = embeddedApps[0].application;
    obj1[1] = size;
    obj1[2] = { marginRight: 4 };
    const items = [callback(GameIcon, obj1), ];
    if (2 === embeddedApps.length) {
      obj = { game: null, size: null };
      obj[0] = embeddedApps[1].application;
      obj[1] = size;
      let tmp16Result = tmp16(GameIcon, obj);
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
      obj2[1] = tmp16(Text.Text, obj4);
      tmp16Result = tmp16(tmp15, obj2);
    }
    items[1] = tmp16Result;
    obj[1] = items;
    return closure_5(View, obj);
  }
};