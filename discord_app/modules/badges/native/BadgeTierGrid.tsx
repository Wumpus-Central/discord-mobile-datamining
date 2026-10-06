// === Module 10986: BadgeTierGrid ===

// Module 10986 (BadgeTierGrid)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let badge, owned;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, grid: obj3, row: { flexDirection: "row", justifyContent: "center" }, item: obj4, progressLabel: obj5, icon: obj6, dimmedIcon: { opacity: 0.4 }, subtitleRow: { flexDirection: "row", alignItems: "center", gap: 2 }, centeredText: { textAlign: "center" } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { width: "33.333333333333336%", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  let intl;
  let isViewerOnUpgradeableNitro;
  let items;
  let obj5;
  let targetUsername;
  let tmp11;
  let tmp = badge;
  let obj = badge(isViewerOnUpgradeableNitro[6]);
  const cResult = obj.c(32);
  badge = badge.badge;
  const isViewingOtherUser = badge.isViewingOtherUser;
  ({ targetUsername, isViewerOnUpgradeableNitro } = badge);
  const tmp4 = closure_6();
  const row = tmp4;
  if (cResult[0] === (isViewingOtherUser && null != targetUsername)) {
    if (cResult[1] === tmp4.progressLabel) {
      let tmp8;
      let tmp12;
      if (cResult[2] === targetUsername) {
        tmp8 = cResult[3];
      }
      if (cResult[4] === badge.owned) {
        if (cResult[5] === badge.tiers) {
          if (cResult[6] === isViewerOnUpgradeableNitro) {
            if (cResult[7] === isViewingOtherUser) {
              if (cResult[8] === tmp4.centeredText) {
                if (cResult[9] === tmp4.dimmedIcon) {
                  if (cResult[10] === tmp4.icon) {
                    if (cResult[11] === tmp4.item) {
                      if (cResult[12] === tmp4.row) {
                        if (cResult[13] === tmp4.subtitleRow) {
                          tmp12 = cResult[14];
                        }
                        if (cResult[25] === tmp4.grid) {
                          let tmp18;
                          if (cResult[26] === tmp12) {
                            tmp18 = cResult[27];
                          }
                          if (cResult[28] === tmp4.section) {
                            if (cResult[29] === tmp8) {
                              let tmp22;
                              if (cResult[30] === tmp18) {
                                tmp22 = cResult[31];
                              }
                              return tmp22;
                            }
                          }
                          let obj2 = { style: tmp7, children: items };
                          items = [tmp8, tmp18];
                          const tmp25 = closure_5(row, obj2);
                          cResult[28] = tmp4.section;
                          cResult[29] = tmp8;
                          cResult[30] = tmp18;
                          cResult[31] = tmp25;
                          tmp22 = tmp25;
                        }
                        let obj3 = { style: tmp11, accessibilityRole: "list", children: tmp12 };
                        const tmp21 = closure_4(row, obj3);
                        cResult[25] = tmp4.grid;
                        cResult[26] = tmp12;
                        cResult[27] = tmp21;
                        tmp18 = tmp21;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (cResult[15] === badge.owned) {
        if (cResult[16] === isViewerOnUpgradeableNitro) {
          if (cResult[17] === isViewingOtherUser) {
            if (cResult[18] === tmp4.centeredText) {
              if (cResult[19] === tmp4.dimmedIcon) {
                if (cResult[20] === tmp4.icon) {
                  if (cResult[21] === tmp4.item) {
                    if (cResult[22] === tmp4.row) {
                      let tmp13;
                      if (cResult[23] === tmp4.subtitleRow) {
                        tmp13 = cResult[24];
                      }
                      let tiers = badge.tiers;
                      let tmp15 = isViewingOtherUser(isViewerOnUpgradeableNitro[12]);
                      if (tiers == null) {
                        tiers = [];
                      }
                      const tmp15Result = tmp15(tiers, 3);
                      const mapped = tmp15Result.map(tmp13);
                      cResult[4] = badge.owned;
                      cResult[5] = badge.tiers;
                      cResult[6] = isViewerOnUpgradeableNitro;
                      cResult[7] = isViewingOtherUser;
                      cResult[8] = tmp4.centeredText;
                      cResult[9] = tmp4.dimmedIcon;
                      cResult[10] = tmp4.icon;
                      cResult[11] = tmp4.item;
                      cResult[12] = tmp4.row;
                      cResult[13] = tmp4.subtitleRow;
                      cResult[14] = mapped;
                      tmp12 = mapped;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const fn = function f(arr) {
        let item;
        let obj = {
          style: row.row,
          collapsable: false,
          children: arr.map((owned) => {
            let items1;
            let items2;
            let items3;
            owned = owned.owned;
            let dimmedIcon = !owned;
            if (dimmedIcon) {
              dimmedIcon = owned.owned;
            }
            let complex_icon_static_url = owned.simple_icon_url;
            if (complex_icon_static_url == null) {
              complex_icon_static_url = owned.complex_icon_static_url;
            }
            const obj = badge(isViewerOnUpgradeableNitro[9]);
            const obj2 = { tier: owned, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro };
            const tierRowSubtitle = obj.getTierRowSubtitle(obj2);
            const intl = badge(isViewerOnUpgradeableNitro[8]).intl;
            const string = intl.string;
            const t = badge(isViewerOnUpgradeableNitro[8]).t;
            const items = [owned.name, tierRowSubtitle, string(owned ? t.sTFApF : t.uHtDcT)];
            const found = items.filter((item) => null != item && "" !== item);
            let tmp9Result = null != complex_icon_static_url;
            const obj3 = { style: item.item, accessible: true, accessibilityLabel: found.join(", "), children: items2 };
            if (tmp9Result) {
              const obj4 = { url: complex_icon_static_url, height: 32, style: items1 };
              items1 = [item.icon, ];
              const tmp11 = isViewingOtherUser(isViewerOnUpgradeableNitro[10]);
              if (dimmedIcon) {
                dimmedIcon = item.dimmedIcon;
              }
              items1[1] = dimmedIcon;
              tmp9Result = closure_2_4(tmp11, obj4);
            }
            items2 = [tmp9Result, , ];
            let tmp13Result = null != owned.name;
            if (tmp13Result) {
              let str = "text-muted";
              const Text = badge(isViewerOnUpgradeableNitro[7]).Text;
              if (owned) {
                str = "text-default";
              }
              const obj5 = { variant: "text-sm/semibold", color: str, style: item.centeredText, children: owned.name };
              tmp13Result = closure_2_4(Text, obj5);
            }
            items2[1] = tmp13Result;
            let tmp5Result = "" !== tierRowSubtitle;
            if (tmp5Result) {
              let tmp15 = !owned;
              const obj6 = { style: item.subtitleRow, children: items3 };
              if (tmp15) {
                const obj7 = { size: "xxs", color: isViewingOtherUser(isViewerOnUpgradeableNitro[4]).colors.ICON_MUTED };
                const LockIcon = badge(isViewerOnUpgradeableNitro[11]).LockIcon;
                tmp15 = closure_2_4(LockIcon, obj7);
              }
              items3 = [tmp15, ];
              let str2 = "text-muted";
              const Text2 = badge(isViewerOnUpgradeableNitro[7]).Text;
              if (owned) {
                str2 = "text-default";
              }
              const obj8 = { variant: "text-sm/normal", color: str2, style: item.centeredText, children: tierRowSubtitle };
              items3[1] = closure_2_4(Text2, obj8);
              tmp5Result = closure_2_5(row, obj6);
            }
            items2[2] = tmp5Result;
            return closure_2_5(row, obj3, owned.key);
          })
        };
        return React3(View, obj, arr[0].key);
      };
      cResult[15] = badge.owned;
      cResult[16] = isViewerOnUpgradeableNitro;
      cResult[17] = isViewingOtherUser;
      cResult[18] = tmp4.centeredText;
      cResult[19] = tmp4.dimmedIcon;
      cResult[20] = tmp4.icon;
      cResult[21] = tmp4.item;
      cResult[22] = tmp4.row;
      cResult[23] = tmp4.subtitleRow;
      cResult[24] = fn;
      tmp13 = fn;
    }
  }
  let tmp9 = tmp5;
  if (tmp9) {
    let obj4 = { variant: "text-sm/medium", color: "text-default", style: tmp4.progressLabel, children: intl.formatToPlainString(tmp(isViewerOnUpgradeableNitro[8]).t.KyTwIh, obj5) };
    let Text = tmp(isViewerOnUpgradeableNitro[7]).Text;
    intl = tmp(isViewerOnUpgradeableNitro[8]).intl;
    obj5 = { username: targetUsername };
    tmp9 = closure_4(Text, obj4);
  }
  cResult[0] = isViewingOtherUser && null != targetUsername;
  cResult[1] = tmp4.progressLabel;
  cResult[2] = targetUsername;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : ((badge) => {
  let intl;
  let items;
  let obj3;
  let targetUsername;
  let tmp9Result;
  badge = badge.badge;
  let isViewingOtherUser = badge.isViewingOtherUser;
  ({ targetUsername, isViewerOnUpgradeableNitro: dependencyMap } = badge);
  let tmp = closure_6();
  const row = tmp;
  let obj = { style: tmp.section, children: items };
  if (isViewingOtherUser) {
    isViewingOtherUser = null != targetUsername;
  }
  if (isViewingOtherUser) {
    let obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.progressLabel, children: intl.formatToPlainString(badge(1126).t.KyTwIh, obj3) };
    let Text = badge(4892).Text;
    intl = badge(1126).intl;
    obj3 = { username: targetUsername };
    isViewingOtherUser = closure_4(Text, obj2);
  }
  items = [isViewingOtherUser, ];
  let obj4 = {
    style: tmp.grid,
    accessibilityRole: "list",
    children: tmp9Result.map((arr) => {
      let isViewerOnUpgradeableNitro;
      let item;
      let obj = {
        style: row.row,
        collapsable: false,
        children: arr.map((owned) => {
          let items1;
          let items2;
          let items3;
          owned = owned.owned;
          let dimmedIcon = !owned;
          if (dimmedIcon) {
            dimmedIcon = owned.owned;
          }
          let complex_icon_static_url = owned.simple_icon_url;
          if (complex_icon_static_url == null) {
            complex_icon_static_url = owned.complex_icon_static_url;
          }
          const obj = badge(dependencyMap[9]);
          const obj2 = { tier: owned, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro };
          const tierRowSubtitle = obj.getTierRowSubtitle(obj2);
          const intl = badge(dependencyMap[8]).intl;
          const string = intl.string;
          const t = badge(dependencyMap[8]).t;
          const items = [owned.name, tierRowSubtitle, string(owned ? t.sTFApF : t.uHtDcT)];
          const found = items.filter((item) => null != item && "" !== item);
          let tmp9Result = null != complex_icon_static_url;
          const obj3 = { style: item.item, accessible: true, accessibilityLabel: found.join(", "), children: items2 };
          if (tmp9Result) {
            const obj4 = { url: complex_icon_static_url, height: 32, style: items1 };
            items1 = [item.icon, ];
            const tmp11 = isViewingOtherUser(dependencyMap[10]);
            if (dimmedIcon) {
              dimmedIcon = item.dimmedIcon;
            }
            items1[1] = dimmedIcon;
            tmp9Result = closure_2_4(tmp11, obj4);
          }
          items2 = [tmp9Result, , ];
          let tmp13Result = null != owned.name;
          if (tmp13Result) {
            let str = "text-muted";
            const Text = badge(dependencyMap[7]).Text;
            if (owned) {
              str = "text-default";
            }
            const obj5 = { variant: "text-sm/semibold", color: str, style: item.centeredText, children: owned.name };
            tmp13Result = closure_2_4(Text, obj5);
          }
          items2[1] = tmp13Result;
          let tmp5Result = "" !== tierRowSubtitle;
          if (tmp5Result) {
            let tmp15 = !owned;
            const obj6 = { style: item.subtitleRow, children: items3 };
            if (tmp15) {
              const obj7 = { size: "xxs", color: isViewingOtherUser(dependencyMap[4]).colors.ICON_MUTED };
              const LockIcon = badge(dependencyMap[11]).LockIcon;
              tmp15 = closure_2_4(LockIcon, obj7);
            }
            items3 = [tmp15, ];
            let str2 = "text-muted";
            const Text2 = badge(dependencyMap[7]).Text;
            if (owned) {
              str2 = "text-default";
            }
            const obj8 = { variant: "text-sm/normal", color: str2, style: item.centeredText, children: tierRowSubtitle };
            items3[1] = closure_2_4(Text2, obj8);
            tmp5Result = closure_2_5(row, obj6);
          }
          items2[2] = tmp5Result;
          return closure_2_5(row, obj3, owned.key);
        })
      };
      return React3(View, obj, arr[0].key);
    })
  };
  let tiers = badge.tiers;
  const tmp9 = isViewingOtherUser(9964);
  if (tiers == null) {
    tiers = [];
  }
  tmp9Result = tmp9(tiers, 3);
  items[1] = closure_4(row, obj4);
  return closure_5(row, obj);
});
const result = size.fileFinishedImporting("modules/badges/native/BadgeTierGrid.tsx");

export default tmp5;