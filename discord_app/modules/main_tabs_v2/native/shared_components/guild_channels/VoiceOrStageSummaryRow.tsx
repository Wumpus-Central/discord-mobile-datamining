// === Module 16657: guild_channels/VoiceOrStageSummaryRow ===

// Module 16657 (guild_channels/VoiceOrStageSummaryRow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((height) => {
  let obj = { container: { flexDirection: "row", alignItems: "center", marginLeft: -2 }, overflowCircle: null, wrapper: null, badge: null, audienceBadge: null };
  const size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, width: height };
  obj.overflowCircle = size;
  obj = { borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2 };
  obj.wrapper = obj;
  obj = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height };
  obj.badge = obj;
  obj.audienceBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx");

export default noop.memo(function VoiceOrStageSummaryRow(layout) {
  ({ users, max } = layout);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount } = layout);
  let layoutStyles;
  let obj = max(layoutStyles[5]);
  layoutStyles = obj.getLayoutStyles(layout.layout);
  const size = layoutStyles.voiceOrStageSummaryRow.size;
  closure_3 = Math.max(users.length - max, 0);
  let tmp4 = closure_6(size);
  closure_4 = tmp4;
  obj = { style: null, children: null };
  let items = [tmp4.container, ];
  obj = { height: size + 4 };
  items[1] = obj;
  obj.style = items;
  let items1 = [
    users.map((user, index) => {
      if (index < max) {
        if (index === tmp - 1) {
          if (closure_3 > 0) {
            const items = [closure_4.wrapper, ];
            let obj = 0 !== index;
            if (obj) {
              obj = { marginLeft: -12 };
            }
            obj = { style: null, children: null };
            items[1] = obj;
            obj.style = items;
            const obj1 = { style: closure_4.overflowCircle, children: null };
            const obj2 = { variant: "text-xs/medium", children: null };
            const _HermesInternal = HermesInternal;
            obj2.children = "+" + tmp2 + 1;
            obj1.children = React4(Text_Text.Text, obj2);
            obj.children = React4(View, obj1);
            let tmp3Result = React4(View, obj, "overflow");
          }
          return tmp3Result;
        }
        const items1 = [closure_4.wrapper, ];
        obj = 0 !== index;
        if (obj) {
          obj = { marginLeft: -12 };
        }
        const obj3 = { style: null, children: null };
        items1[1] = obj;
        obj3.style = items1;
        const obj4 = { user, guildId, size: layoutStyles.voiceOrStageSummaryRow.avatarSize };
        obj3.children = React4(native.Avatar, obj4);
        tmp3Result = React4(View, obj3, index);
      }
    }),

  ];
  let tmp8Result = null != audienceCount && audienceCount > 0;
  if (tmp8Result) {
    const items2 = [tmp4.wrapper, ];
    let obj1 = { style: null, children: null };
    items2[1] = users.length > 0 && { marginLeft: -12 };
    obj1.style = items2;
    let obj2 = { style: null, children: null };
    const items3 = [, ];
    ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp4);
    obj2.style = items3;
    let obj3 = { size: tmp(tmp2[7]).Icon.Sizes.CUSTOM, style: { height: 14, width: 14 }, source: require("module_16658") };
    const items4 = [closure_4(tmp(tmp2[7]).Icon, obj3), ];
    let obj4 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
    items4[1] = closure_4(tmp(tmp2[6]).Text, obj4);
    obj2.children = items4;
    obj1.children = tmp5(tmp6, obj2);
    tmp8Result = tmp8(tmp6, obj1);
    const tmp9 = users.length > 0 && { marginLeft: -12 };
  }
  items1[1] = tmp8Result;
  obj.children = items1;
  return closure_5(closure_3, obj);
});