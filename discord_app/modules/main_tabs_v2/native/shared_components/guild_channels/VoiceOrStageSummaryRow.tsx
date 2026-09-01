// === Module 16241: ? ===

// Module 16241
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles((height) => {
  let obj = { container: { flexDirection: "row", alignItems: "center", marginLeft: -2 }, overflowCircle: null, wrapper: null, badge: null, audienceBadge: null };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: ThemesDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, width: height };
  obj[1] = obj;
  obj = { borderRadius: ThemesDefault.radii.round, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2 };
  obj[2] = obj;
  obj[3] = { borderRadius: ThemesDefault.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height };
  obj1 = { borderRadius: ThemesDefault.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height };
  obj[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
const memoResult = importAllResult.memo(function VoiceOrStageSummaryRow(layout) {
  ({ users, max } = layout);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount } = layout);
  let layoutStyles;
  closure_3 = undefined;
  closure_4 = undefined;
  let obj = max(layoutStyles[5]);
  layoutStyles = obj.getLayoutStyles(layout.layout);
  const size = layoutStyles.voiceOrStageSummaryRow.size;
  closure_3 = Math.max(users.length - max, 0);
  let tmp4 = callback(size);
  closure_4 = tmp4;
  obj = { style: items, children: null };
  items = [tmp4.container, ];
  obj = { height: size + 4 };
  items[1] = obj;
  let items1 = [
    users.map((arg0, arg1) => {
      if (arg1 < max) {
        if (arg1 === tmp - 1) {
          if (closure_3 > 0) {
            const items = [lib.wrapper, ];
            let obj = 0 !== arg1;
            if (obj) {
              obj = { marginLeft: -12 };
            }
            obj = { style: null, children: null };
            items[1] = obj;
            obj[0] = items;
            obj1 = { style: null, children: null };
            obj1[0] = lib.overflowCircle;
            const obj2 = { variant: "text-xs/medium", children: null };
            const _HermesInternal = HermesInternal;
            obj2[1] = "+" + tmp2 + 1;
            obj1[1] = lib(max(layoutStyles[6]).Text, obj2);
            obj[1] = lib(closure_3, obj1);
            let tmp3Result = lib(closure_3, obj, "overflow");
            const tmp13 = lib;
            const tmp14 = closure_3;
            const tmp15 = lib;
          }
          return tmp3Result;
        }
        const items1 = [lib.wrapper, ];
        obj = 0 !== arg1;
        if (obj) {
          obj = { marginLeft: -12 };
        }
        const obj3 = { style: null, children: null };
        items1[1] = obj;
        obj3[0] = items1;
        const obj4 = { user: null, guildId: null, size: null };
        obj4[0] = arg0;
        obj4[1] = closure_1;
        obj4[2] = layoutStyles.voiceOrStageSummaryRow.avatarSize;
        obj3[1] = lib(max(layoutStyles[7]).Avatar, obj4);
        tmp3Result = lib(closure_3, obj3, arg1);
        const tmp3 = lib;
        const tmp4 = closure_3;
      }
    }),

  ];
  let tmp8Result = null != audienceCount && audienceCount > 0;
  if (tmp8Result) {
    const items2 = [tmp4.wrapper, ];
    obj1 = { style: null, children: null };
    items2[1] = users.length > 0 && { marginLeft: -12 };
    obj1[0] = items2;
    let obj2 = { style: null, children: null };
    const items3 = [, ];
    ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp4);
    obj2[0] = items3;
    let obj3 = { size: null, style: null, source: null };
    obj3[0] = tmp(tmp2[7]).Icon.Sizes.CUSTOM;
    obj3[1] = { height: 14, width: 14 };
    obj3[2] = importDefault(tmp2[8]);
    const items4 = [closure_4(tmp(tmp2[7]).Icon, obj3), ];
    let obj4 = { variant: "text-sm/bold", style: null, children: null };
    obj4[1] = { marginLeft: 4 };
    obj4[2] = audienceCount;
    items4[1] = closure_4(tmp(tmp2[6]).Text, obj4);
    obj2[1] = items4;
    obj1[1] = tmp5(tmp6, obj2);
    tmp8Result = tmp8(tmp6, obj1);
    const tmp9 = users.length > 0 && { marginLeft: -12 };
  }
  items1[1] = tmp8Result;
  obj[1] = items1;
  return closure_5(closure_3, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx");

export default memoResult;