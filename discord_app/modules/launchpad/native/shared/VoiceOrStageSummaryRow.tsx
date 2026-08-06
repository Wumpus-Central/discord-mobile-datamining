// discord_app/modules/launchpad/native/shared/VoiceOrStageSummaryRow.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { registerAsset } from "../../../../../_runtime/15634_registerAsset.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { getLayoutStyle } from "getLayoutStyles.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles((height) => {
  let obj = { container: { flexDirection: "row", alignItems: "center", marginLeft: -2 }, overflowCircle: null, wrapper: null, badge: null, audienceBadge: null };
  obj = { backgroundColor: Themes.colors.BACKGROUND_MOD_STRONG, borderRadius: Themes.radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, width: height };
  obj[1] = obj;
  obj = { borderRadius: Themes.radii.round, borderColor: Themes.colors.BACKGROUND_BASE_LOW, backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, borderWidth: 2 };
  obj[2] = obj;
  obj[3] = { borderRadius: Themes.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height };
  const obj1 = { borderRadius: Themes.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height };
  obj[4] = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
const memoResult = require("noop").memo(function VoiceOrStageSummaryRow(arg0) {
  let audienceCount;
  let importDefault;
  let max;
  let users;
  ({ users, max } = arg0);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount } = arg0);
  let dependencyMap;
  let closure_3;
  let c4;
  let tmp3 = getLayoutStyle();
  dependencyMap = tmp3;
  const size = tmp3.voiceOrStageSummaryRow.size;
  closure_3 = Math.max(users.length - max, 0);
  let tmp4 = callback(size);
  c4 = tmp4;
  let obj = { style: items, children: null };
  items = [tmp4.container, ];
  obj = { height: size + 4 };
  items[1] = obj;
  let items1 = [
    users.map((arg0, arg1) => {
      if (arg1 < max) {
        if (arg1 === tmp - 1) {
          if (closure_3 > 0) {
            const items = [_undefined2.wrapper, ];
            let obj = 0 !== arg1;
            if (obj) {
              obj = { marginLeft: -12 };
            }
            obj = { style: null, children: null };
            items[1] = obj;
            obj[0] = items;
            const obj1 = { style: null, children: null };
            obj1[0] = _undefined2.overflowCircle;
            const obj2 = { variant: "text-xs/medium", children: null };
            const _HermesInternal = HermesInternal;
            obj2[1] = "+" + tmp2 + 1;
            obj1[1] = _undefined2(max(_undefined[6]).Text, obj2);
            obj[1] = _undefined2(closure_3, obj1);
            let tmp3Result = _undefined2(closure_3, obj, "overflow");
            const tmp13 = _undefined2;
            const tmp14 = closure_3;
            const tmp15 = _undefined2;
          }
          return tmp3Result;
        }
        const items1 = [_undefined2.wrapper, ];
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
        obj4[2] = _undefined.voiceOrStageSummaryRow.avatarSize;
        obj3[1] = _undefined2(max(_undefined[7]).Avatar, obj4);
        tmp3Result = _undefined2(closure_3, obj3, arg1);
        const tmp3 = _undefined2;
        const tmp4 = closure_3;
      }
    }),

  ];
  let tmp8Result = null != audienceCount && audienceCount > 0;
  if (tmp8Result) {
    const items2 = [tmp4.wrapper, ];
    obj = { style: null, children: null };
    items2[1] = users.length > 0 && { marginLeft: -12 };
    obj[0] = items2;
    let obj1 = { style: null, children: null };
    const items3 = [, ];
    ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp4);
    obj1[0] = items3;
    let obj2 = { size: null, style: null, source: null };
    obj2[0] = max(1297).Icon.Sizes.CUSTOM;
    obj2[1] = { height: 14, width: 14 };
    obj2[2] = registerAsset;
    const items4 = [c4(max(1297).Icon, obj2), ];
    let obj3 = { variant: "text-sm/bold", style: null, children: null };
    obj3[1] = { marginLeft: 4 };
    obj3[2] = audienceCount;
    items4[1] = c4(max(4281).Text, obj3);
    obj1[1] = items4;
    obj[1] = tmp5(tmp6, obj1);
    tmp8Result = tmp8(tmp6, obj);
    const tmp9 = users.length > 0 && { marginLeft: -12 };
  }
  items1[1] = tmp8Result;
  obj[1] = items1;
  return closure_5(closure_3, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageSummaryRow.tsx");

export default memoResult;