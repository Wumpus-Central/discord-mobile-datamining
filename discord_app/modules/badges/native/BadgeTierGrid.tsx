// === Module 10986: BadgeTierGrid ===

// Module 10986 (BadgeTierGrid)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { section: { gap: nativeDefault.space.PX_16 }, grid: null, row: null, item: null, progressLabel: null, icon: null, dimmedIcon: null, subtitleRow: null, centeredText: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.grid = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.row = { flexDirection: "row", justifyContent: "center" };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.item = { width: "33.333333333333336%", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8 };
let obj5 = { width: "33.333333333333336%", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8 };
obj2.progressLabel = { marginTop: nativeDefault.space.PX_8 };
let obj6 = { marginTop: nativeDefault.space.PX_8 };
obj2.icon = { marginBottom: nativeDefault.space.PX_4 };
obj2.dimmedIcon = { opacity: 0.4 };
obj2.subtitleRow = { flexDirection: "row", alignItems: "center", gap: 2 };
obj2.centeredText = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { marginBottom: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeTierGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  const cResult = badge(isViewerOnUpgradeableNitro[6]).c(32);
  badge = badge.badge;
  const isViewingOtherUser = badge.isViewingOtherUser;
  ({ targetUsername, isViewerOnUpgradeableNitro } = badge);
  const tmp4 = closure_6();
  const row = tmp4;
  let tmp5 = isViewingOtherUser;
  if (isViewingOtherUser) {
    tmp5 = null != targetUsername;
  }
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp4.progressLabel) {
      if (cResult[2] === targetUsername) {
        let tmp8 = cResult[3];
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
                          let tmp12 = cResult[14];
                        }
                        if (cResult[25] === tmp4.grid) {
                          if (cResult[26] === tmp12) {
                            let tmp18 = cResult[27];
                          }
                          if (cResult[28] === tmp4.section) {
                            if (cResult[29] === tmp8) {
                              if (cResult[30] === tmp18) {
                                let tmp22 = cResult[31];
                              }
                              return tmp22;
                            }
                          }
                          const obj2 = { style: tmp7, children: null };
                          let items = [tmp8, tmp18];
                          obj2.children = items;
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
                      if (cResult[23] === tmp4.subtitleRow) {
                        let tmp13 = cResult[24];
                      }
                      let tiers = badge.tiers;
                      if (tiers == null) {
                        tiers = [];
                      }
                      let tmp15 = isViewingOtherUser(isViewerOnUpgradeableNitro[12]);
                      const mapped = isViewingOtherUser(isViewerOnUpgradeableNitro[12])(tiers, 3).map(tmp13);
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
                      const tmp15Result = isViewingOtherUser(isViewerOnUpgradeableNitro[12])(tiers, 3);
                    }
                  }
                }
              }
            }
          }
        }
      }
      const fn = function f(arr) {
        return React4(View, {
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
            const tierRowSubtitle = badge(isViewerOnUpgradeableNitro[9]).getTierRowSubtitle({ tier: owned, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro });
            const intl = badge(isViewerOnUpgradeableNitro[8]).intl;
            const t = badge(isViewerOnUpgradeableNitro[8]).t;
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
              const items1 = [item.icon, ];
              if (dimmedIcon) {
                dimmedIcon = item.dimmedIcon;
              }
              items1[1] = dimmedIcon;
              obj4.style = items1;
              tmp9Result = closure_2_4(isViewingOtherUser(isViewerOnUpgradeableNitro[10]), obj4);
              const tmp11 = isViewingOtherUser(isViewerOnUpgradeableNitro[10]);
            }
            const items2 = [tmp9Result, , ];
            let tmp13Result = null != owned.name;
            if (tmp13Result) {
              let str = "text-muted";
              if (owned) {
                str = "text-default";
              }
              const obj5 = { variant: "text-sm/semibold", color: str, style: item.centeredText, children: owned.name };
              tmp13Result = closure_2_4(badge(isViewerOnUpgradeableNitro[7]).Text, obj5);
            }
            items2[1] = tmp13Result;
            let tmp5Result = "" !== tierRowSubtitle;
            if (tmp5Result) {
              const obj6 = { style: item.subtitleRow, children: null };
              let tmp15 = !owned;
              if (!owned) {
                const obj7 = { size: "xxs", color: isViewingOtherUser(isViewerOnUpgradeableNitro[4]).colors.ICON_MUTED };
                tmp15 = closure_2_4(badge(isViewerOnUpgradeableNitro[11]).LockIcon, obj7);
              }
              const items3 = [tmp15, ];
              let str2 = "text-muted";
              if (owned) {
                str2 = "text-default";
              }
              const obj8 = { variant: "text-sm/normal", color: str2, style: item.centeredText, children: tierRowSubtitle };
              items3[1] = closure_2_4(badge(isViewerOnUpgradeableNitro[7]).Text, obj8);
              obj6.children = items3;
              tmp5Result = closure_2_5(closure_3, obj6);
            }
            items2[2] = tmp5Result;
            obj3.children = items2;
            return closure_2_5(closure_3, obj3, owned.key);
          })
        }, arr[0].key);
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
  if (tmp5) {
    let obj4 = { variant: "text-sm/medium", color: "text-default", style: tmp4.progressLabel, children: null };
    let intl = tmp(isViewerOnUpgradeableNitro[8]).intl;
    let obj5 = { username: targetUsername };
    obj4.children = intl.formatToPlainString(tmp(isViewerOnUpgradeableNitro[8]).t.KyTwIh, obj5);
    tmp9 = closure_4(tmp(isViewerOnUpgradeableNitro[7]).Text, obj4);
  }
  cResult[0] = tmp5;
  cResult[1] = tmp4.progressLabel;
  cResult[2] = targetUsername;
  cResult[3] = tmp9;
  tmp8 = tmp9;
  const obj = badge(isViewerOnUpgradeableNitro[6]);
}) : ((badge) => {
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
    let intl = badge(1126).intl;
    let obj3 = { username: targetUsername };
    obj2.children = intl.formatToPlainString(badge(1126).t.KyTwIh, obj3);
    isViewingOtherUser = closure_4(badge(4892).Text, obj2);
  }
  let items = [isViewingOtherUser, ];
  let obj4 = { style: tmp.grid, accessibilityRole: "list", children: null };
  let tiers = badge.tiers;
  if (tiers == null) {
    tiers = [];
  }
  const tmp9 = isViewingOtherUser(9964);
  obj4.children = isViewingOtherUser(9964)(tiers, 3).map((arr) => React4(View, {
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
      const tierRowSubtitle = badge(10902).getTierRowSubtitle({ tier: owned, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro });
      const intl = badge(1126).intl;
      const t = badge(1126).t;
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
        const items1 = [item.icon, ];
        if (dimmedIcon) {
          dimmedIcon = item.dimmedIcon;
        }
        items1[1] = dimmedIcon;
        obj4.style = items1;
        tmp9Result = closure_2_4(isViewingOtherUser(10895), obj4);
        const tmp11 = isViewingOtherUser(10895);
      }
      const items2 = [tmp9Result, , ];
      let tmp13Result = null != owned.name;
      if (tmp13Result) {
        let str = "text-muted";
        if (owned) {
          str = "text-default";
        }
        const obj5 = { variant: "text-sm/semibold", color: str, style: item.centeredText, children: owned.name };
        tmp13Result = closure_2_4(badge(4892).Text, obj5);
      }
      items2[1] = tmp13Result;
      let tmp5Result = "" !== tierRowSubtitle;
      if (tmp5Result) {
        const obj6 = { style: item.subtitleRow, children: null };
        let tmp15 = !owned;
        if (!owned) {
          const obj7 = { size: "xxs", color: isViewingOtherUser(587).colors.ICON_MUTED };
          tmp15 = closure_2_4(badge(5886).LockIcon, obj7);
        }
        const items3 = [tmp15, ];
        let str2 = "text-muted";
        if (owned) {
          str2 = "text-default";
        }
        const obj8 = { variant: "text-sm/normal", color: str2, style: item.centeredText, children: tierRowSubtitle };
        items3[1] = closure_2_4(badge(4892).Text, obj8);
        obj6.children = items3;
        tmp5Result = closure_2_5(closure_3, obj6);
      }
      items2[2] = tmp5Result;
      obj3.children = items2;
      return closure_2_5(closure_3, obj3, owned.key);
    })
  }, arr[0].key));
  items[1] = closure_4(row, obj4);
  obj.children = items;
  return closure_5(row, obj);
});