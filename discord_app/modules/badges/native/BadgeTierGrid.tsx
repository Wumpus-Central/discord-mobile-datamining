// discord_app/modules/badges/native/BadgeTierGrid.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4845);
let obj2 = {
  section: { gap: nativeDefault.space.PX_16 },
  grid: null,
  row: null,
  item: null,
  progressLabel: null,
  icon: null,
  dimmedIcon: null,
  subtitleRow: null,
  centeredText: null,
};
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.grid = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.row = { flexDirection: "row", justifyContent: "center" };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.item = {
  width: "33.333333333333336%",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_8,
};
let obj5 = {
  width: "33.333333333333336%",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_8,
};
obj2.progressLabel = { marginTop: nativeDefault.space.PX_8 };
let obj6 = { marginTop: nativeDefault.space.PX_8 };
obj2.icon = { marginBottom: nativeDefault.space.PX_4 };
obj2.dimmedIcon = { opacity: 0.4 };
obj2.subtitleRow = { flexDirection: "row", alignItems: "center", gap: 2 };
obj2.centeredText = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeTierGrid.tsx");

export default function BadgeTierGrid(badge) {
  badge = badge.badge;
  let isViewingOtherUser = badge.isViewingOtherUser;
  ({ targetUsername, isViewerOnUpgradeableNitro: dependencyMap } = badge);
  let tmp = closure_6();
  const row = tmp;
  const obj = { style: tmp.section, children: null };
  if (isViewingOtherUser) {
    isViewingOtherUser = null != targetUsername;
  }
  if (isViewingOtherUser) {
    const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.progressLabel, children: null };
    let intl = badge(1115).intl;
    let obj3 = { username: targetUsername };
    obj2.children = intl.formatToPlainString(badge(1115).t.KyTwIh, obj3);
    isViewingOtherUser = closure_4(badge(4841).Text, obj2);
  }
  let items = [isViewingOtherUser];
  let obj4 = { style: tmp.grid, accessibilityRole: "list", children: null };
  let tiers = badge.tiers;
  if (tiers == null) {
    tiers = [];
  }
  const tmp9 = isViewingOtherUser(9998);
  obj4.children = isViewingOtherUser(9998)(tiers, 3).map((arr) =>
    React4(
      View,
      {
        style: row.row,
        collapsable: false,
        children: arr.map((owned) => {
          owned = owned.owned;
          let dimmedIcon = !owned;
          if (!owned) {
            dimmedIcon = owned.owned;
          }
          let complex_icon_static_url = owned.simple_icon_url;
          if (complex_icon_static_url == null) {
            complex_icon_static_url = owned.complex_icon_static_url;
          }
          const tierRowSubtitle = badge(10859).getTierRowSubtitle({
            tier: owned,
            isUnlocked: owned,
            isViewingOtherUser,
            isViewerOnUpgradeableNitro,
          });
          const intl = badge(1115).intl;
          const t = badge(1115).t;
          const items = [owned.name, tierRowSubtitle, intl.string(owned ? t.sTFApF : t.uHtDcT)];
          const found = items.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              tmp = "" !== item;
            }
            return tmp;
          });
          const obj3 = { style: item.item, accessible: true, accessibilityLabel: found.join(", "), children: null };
          let tmp9Result = null != complex_icon_static_url;
          if (tmp9Result) {
            const obj4 = { url: complex_icon_static_url, height: 32, style: null };
            const items1 = [item.icon];
            if (dimmedIcon) {
              dimmedIcon = item.dimmedIcon;
            }
            items1[1] = dimmedIcon;
            obj4.style = items1;
            tmp9Result = closure_2_4(isViewingOtherUser(10853), obj4);
            const tmp11 = isViewingOtherUser(10853);
          }
          const items2 = [tmp9Result, ,];
          let tmp13Result = null != owned.name;
          if (tmp13Result) {
            let str = "text-muted";
            if (owned) {
              str = "text-default";
            }
            const obj5 = { variant: "text-sm/semibold", color: str, style: item.centeredText, children: owned.name };
            tmp13Result = closure_2_4(badge(4841).Text, obj5);
          }
          items2[1] = tmp13Result;
          let tmp5Result = "" !== tierRowSubtitle;
          if (tmp5Result) {
            const obj6 = { style: item.subtitleRow, children: null };
            let tmp15 = !owned;
            if (!owned) {
              const obj7 = { size: "xxs", color: isViewingOtherUser(576).colors.ICON_MUTED };
              tmp15 = closure_2_4(badge(5593).LockIcon, obj7);
            }
            const items3 = [tmp15];
            let str2 = "text-muted";
            if (owned) {
              str2 = "text-default";
            }
            const obj8 = {
              variant: "text-sm/normal",
              color: str2,
              style: item.centeredText,
              children: tierRowSubtitle,
            };
            items3[1] = closure_2_4(badge(4841).Text, obj8);
            obj6.children = items3;
            tmp5Result = closure_2_5(closure_3, obj6);
          }
          items2[2] = tmp5Result;
          obj3.children = items2;
          return closure_2_5(closure_3, obj3, owned.key);
        }),
      },
      arr[0].key,
    ),
  );
  items[1] = closure_4(row, obj4);
  obj.children = items;
  return closure_5(row, obj);
}
