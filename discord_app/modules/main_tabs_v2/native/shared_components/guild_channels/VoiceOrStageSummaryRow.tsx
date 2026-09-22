// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
let closure_6 = createStyles.createStyles((height) => {
  const obj = {
    container: { flexDirection: "row", alignItems: "center", marginLeft: -2 },
    overflowCircle: null,
    wrapper: null,
    badge: null,
    audienceBadge: null,
  };
  const size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height,
    width: height,
  };
  obj.overflowCircle = size;
  obj.wrapper = {
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
  };
  const obj2 = {
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
  };
  obj.badge = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  const obj3 = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  obj.audienceBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx",
);

export default noop.memo(function VoiceOrStageSummaryRow(layout) {
  ({ users, max } = layout);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount } = layout);
  let layoutStyles;
  layoutStyles = max(layoutStyles[5]).getLayoutStyles(layout.layout);
  const size = layoutStyles.voiceOrStageSummaryRow.size;
  closure_3 = Math.max(users.length - max, 0);
  const tmp4 = closure_6(size);
  closure_4 = tmp4;
  let obj2 = { style: null, children: null };
  let items = [tmp4.container, { height: size + 4 }];
  obj2.style = items;
  let items1 = [
    users.map((user, index) => {
      if (index < max) {
        if (index === tmp - 1) {
          if (closure_3 > 0) {
            const items = [closure_4.wrapper];
            let obj2 = 0 !== index;
            if (obj2) {
              obj2 = { marginLeft: -12 };
            }
            const obj3 = { style: null, children: null };
            items[1] = obj2;
            obj3.style = items;
            const obj4 = { style: closure_4.overflowCircle, children: null };
            const obj5 = { variant: "text-xs/medium", children: null };
            const _HermesInternal = HermesInternal;
            obj5.children = "+" + tmp2 + 1;
            obj4.children = React4(Text_Text.Text, obj5);
            obj3.children = React4(View, obj4);
            let tmp3Result = React4(View, obj3, "overflow");
          }
          return tmp3Result;
        }
        const items1 = [closure_4.wrapper];
        let obj = 0 !== index;
        if (obj) {
          obj = { marginLeft: -12 };
        }
        const obj6 = { style: null, children: null };
        items1[1] = obj;
        obj6.style = items1;
        const obj7 = { user, guildId, size: layoutStyles.voiceOrStageSummaryRow.avatarSize };
        obj6.children = React4(native.Avatar, obj7);
        tmp3Result = React4(View, obj6, index);
      }
    }),
  ];
  let tmp8Result = null != audienceCount && audienceCount > 0;
  if (tmp8Result) {
    const items2 = [tmp4.wrapper];
    let obj4 = { style: null, children: null };
    items2[1] = users.length > 0 && { marginLeft: -12 };
    obj4.style = items2;
    let obj5 = { style: null, children: null };
    const items3 = [,];
    ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp4);
    obj5.style = items3;
    let obj6 = {
      size: tmp(tmp2[7]).Icon.Sizes.CUSTOM,
      style: { height: 14, width: 14 },
      source: require("../../../../../../_runtime/metro/17140__.js"),
    };
    const items4 = [closure_4(tmp(tmp2[7]).Icon, obj6)];
    let obj7 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
    items4[1] = closure_4(tmp(tmp2[6]).Text, obj7);
    obj5.children = items4;
    obj4.children = closure_5(tmp6, obj5);
    tmp8Result = tmp8(tmp6, obj4);
    const tmp9 = users.length > 0 && { marginLeft: -12 };
  }
  items1[1] = tmp8Result;
  obj2.children = items1;
  return closure_5(closure_3, obj2);
});
