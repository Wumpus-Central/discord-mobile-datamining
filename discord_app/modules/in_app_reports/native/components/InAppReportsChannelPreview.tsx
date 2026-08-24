// discord_app/modules/in_app_reports/native/components/InAppReportsChannelPreview.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/GuildStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, itemContainer: null, guildInfo: null, guildName: null, topic: null };
createCacheKey = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { lineHeight: 16, marginBottom: 8 };
createCacheKey[3] = { minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 8 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { lineHeight: 18, marginStart: 8 };
createCacheKey[6] = { lineHeight: 20, marginTop: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 8 };
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsChannelPreview.tsx");

export default function ChannelPreview(stageInstance) {
  stageInstance = stageInstance.stageInstance;
  const tmp = callback3();
  let obj = stageInstance(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(stageInstance.guild_id));
  if (null != stateFromStores) {
    if (null != stageInstance) {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      const tmp2Result = tmp2(4227);
      obj = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
      obj[0] = tmp.title;
      const intl = tmp2(1236).intl;
      obj[3] = intl.string(tmp2(1236).t.InbJ8x);
      const items1 = [callback(tmp2(4739).Text, obj), ];
      obj1 = { style: null, children: null };
      const items2 = [tmp.itemContainer, ];
      const obj2 = { borderColor: null };
      obj2[0] = tmp2(4227).hexWithOpacity(tmp.borderColor.color, 0.08);
      items2[1] = obj2;
      obj1[0] = items2;
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.guildInfo;
      const obj4 = { guild: null, size: null, selected: false };
      obj4[0] = stateFromStores;
      const hexWithOpacityResult = tmp2(4227).hexWithOpacity(tmp.borderColor.color, 0.08);
      obj4[1] = tmp2(7226).GuildIconSizes.XXSMALL;
      const items3 = [callback(GuildIconSizesDefault, obj4), ];
      const obj5 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj5[0] = tmp.guildName;
      obj5[3] = stateFromStores.name;
      items3[1] = callback(tmp2(4739).Text, obj5);
      obj3[1] = items3;
      const items4 = [callback2(View, obj3), ];
      const obj6 = { style: null, variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
      obj6[0] = tmp.topic;
      obj6[3] = stageInstance.topic;
      items4[1] = callback(tmp2(4739).Text, obj6);
      obj1[1] = items4;
      items1[1] = callback2(View, obj1);
      obj[1] = items1;
      return callback2(View, obj);
    }
  }
  return null;
};