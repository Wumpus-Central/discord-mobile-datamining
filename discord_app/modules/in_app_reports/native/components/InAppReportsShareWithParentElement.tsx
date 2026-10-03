// === Module 12714: InAppReportsShareWithParentElement ===

// Module 12714 (InAppReportsShareWithParentElement)
import FamilyCenterActionCreators from "FamilyCenterActionCreators" /* 7050 */;
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow" /* 12713 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((parents) => {
  const cResult = parents(576).c(22);
  parents = parents.parents;
  let obj = parents(576);
  [tmp5, importDefault] = noop.useState(false);
  if (cResult[0] === parents[0]) {
    let username;
    if (parents[1] != null) {
      username = tmp6.username;
    }
    if (cResult[1] === username) {
      let username1;
      if (parents[2] != null) {
        username1 = tmp9.username;
      }
      if (cResult[2] === username1) {
        if (cResult[3] === parents.length) {
          let tmp11 = cResult[4];
        }
        if (0 === parents.length) {
          return null;
        } else {
          if (cResult[5] === parents[0].username) {
            let username2;
            if (parents[1] != null) {
              username2 = tmp16.username;
            }
            if (cResult[6] === username2) {
              let username3;
              if (parents[2] != null) {
                username3 = tmp19.username;
              }
              if (cResult[7] === username3) {
                if (cResult[8] === parents.length) {
                  let tmp21 = cResult[9];
                }
                if (cResult[10] === parents[0].username) {
                  let username4;
                  if (parents[1] != null) {
                    username4 = tmp32.username;
                  }
                  if (cResult[11] === username4) {
                    let username5;
                    if (parents[2] != null) {
                      username5 = tmp35.username;
                    }
                    if (cResult[12] === username5) {
                      if (cResult[13] === parents.length) {
                        let tmp37 = cResult[14];
                      }
                      const _Symbol = Symbol;
                      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp52 = jsx(tmp(12715).ShareIcon, {});
                        const intl3 = tmp(1126).intl;
                        const stringResult = intl3.string(tmp(1126).t["5l/hlt"]);
                        cResult[15] = tmp52;
                        cResult[16] = stringResult;
                        let tmp50 = stringResult;
                        let tmp49 = tmp52;
                      } else {
                        tmp49 = cResult[15];
                        tmp50 = cResult[16];
                      }
                      if (cResult[17] === tmp11) {
                        if (cResult[18] === tmp5) {
                          if (cResult[19] === tmp37) {
                            if (cResult[20] === tmp21) {
                              let tmp54 = cResult[21];
                            }
                            return tmp54;
                          }
                        }
                      }
                      let obj2 = { title: tmp21, disabledTitle: tmp37, icon: tmp49, description: tmp50, disabled: tmp5, onPress: tmp11 };
                      const tmp57 = jsx(InAppReportsUpsellsTableRowDefault, { title: tmp21, disabledTitle: tmp37, icon: tmp49, description: tmp50, disabled: tmp5, onPress: tmp11 });
                      cResult[17] = tmp11;
                      cResult[18] = tmp5;
                      cResult[19] = tmp37;
                      cResult[20] = tmp21;
                      cResult[21] = tmp57;
                      tmp54 = tmp57;
                    }
                  }
                }
                const intl2 = tmp(1126).intl;
                const obj3 = { count: parents.length, parent1: parents[0].username, parent2: null, parent3: null };
                let username6;
                if (parents[1] != null) {
                  username6 = tmp38.username;
                }
                obj3.parent2 = username6;
                let username7;
                if (parents[2] != null) {
                  username7 = tmp41.username;
                }
                obj3.parent3 = username7;
                const formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.BlAMme, obj3);
                cResult[10] = parents[0].username;
                let username8;
                if (parents[1] != null) {
                  username8 = tmp44.username;
                }
                cResult[11] = username8;
                let username9;
                if (parents[2] != null) {
                  username9 = tmp46.username;
                }
                cResult[12] = username9;
                cResult[13] = parents.length;
                cResult[14] = formatToPlainStringResult;
                tmp37 = formatToPlainStringResult;
              }
            }
          }
          let intl = tmp(1126).intl;
          const obj4 = { count: parents.length, parent1: parents[0].username, parent2: null, parent3: null };
          let username10;
          if (parents[1] != null) {
            username10 = tmp22.username;
          }
          obj4.parent2 = username10;
          let username11;
          if (parents[2] != null) {
            username11 = tmp25.username;
          }
          obj4.parent3 = username11;
          const formatToPlainStringResult1 = intl.formatToPlainString(tmp(1126).t.HqyWeO, obj4);
          cResult[5] = parents[0].username;
          let username12;
          if (parents[1] != null) {
            username12 = tmp28.username;
          }
          cResult[6] = username12;
          let username13;
          if (parents[2] != null) {
            username13 = tmp30.username;
          }
          cResult[7] = username13;
          cResult[8] = parents.length;
          cResult[9] = formatToPlainStringResult1;
          tmp21 = formatToPlainStringResult1;
        }
      }
    }
  }
  [tmp3[0], tmp12] = parents;
  let username14;
  if (tmp12 != null) {
    username14 = tmp12.username;
  }
  cResult[1] = username14;
  let username15;
  if (parents[2] != null) {
    username15 = tmp14.username;
  }
  const fn = function u() {
    const shareIarWithParentsResult = FamilyCenterActionCreators.shareIarWithParents();
    FamilyCenterActionCreators.shareIarWithParents().then(() => {
      const intl = parents(1126).intl;
      const obj2 = { count: length.length, parent1: length[0].username, parent2: null, parent3: null };
      let username;
      if (length[1] != null) {
        username = tmp2.username;
      }
      obj2.parent2 = username;
      let username1;
      if (length[2] != null) {
        username1 = tmp4.username;
      }
      obj2.parent3 = username1;
      parents(4567).showSafetySuccess("IAR_SHARE_WITH_PARENT_SUCCESS", intl.formatToPlainString(parents(1126).t.wr4IT5, obj2));
      closure_1_1(true);
      const obj = parents(4567);
    }).catch(() => {
      closure_1_1(dependencyMap[8]).showFailedToast();
    });
  };
  cResult[2] = username15;
  cResult[3] = parents.length;
  cResult[4] = fn;
  tmp11 = fn;
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}) : ((parents) => {
  parents = parents.parents;
  const tmp = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp[1];
  [][0] = parents;
  if (0 === parents.length) {
    return null;
  } else {
    const intl3 = parents(1126).intl;
    let obj2 = { count: parents.length, parent1: parents[0].username, parent2: null, parent3: null };
    let username;
    if (parents[1] != null) {
      username = tmp17.username;
    }
    obj2.parent2 = username;
    let username1;
    if (parents[2] != null) {
      username1 = tmp4.username;
    }
    obj2.parent3 = username1;
    let obj = { title: intl3.formatToPlainString(parents(1126).t.HqyWeO, obj2), disabledTitle: null, icon: null, description: null, disabled: null, onPress: null };
    const formatToPlainStringResult = intl3.formatToPlainString(parents(1126).t.HqyWeO, obj2);
    let intl = tmp15(1126).intl;
    const obj3 = { count: parents.length, parent1: parents[0].username, parent2: null, parent3: null };
    let username2;
    if (parents[1] != null) {
      username2 = tmp10.username;
    }
    obj3.parent2 = username2;
    let username3;
    if (parents[2] != null) {
      username3 = tmp12.username;
    }
    obj3.parent3 = username3;
    obj.disabledTitle = intl.formatToPlainString(parents(1126).t.BlAMme, obj3);
    obj.icon = jsx(parents(12715).ShareIcon, {});
    const intl2 = tmp15(1126).intl;
    obj.description = intl2.string(parents(1126).t["5l/hlt"]);
    obj.disabled = tmp[0];
    obj.onPress = tmp2;
    return jsx(InAppReportsUpsellsTableRowDefault, { title: intl3.formatToPlainString(parents(1126).t.HqyWeO, obj2), disabledTitle: null, icon: null, description: null, disabled: null, onPress: null });
  }
});