// === Module 12729: InAppReportsShareWithParentElement ===

// Module 12729 (InAppReportsShareWithParentElement)
import Fragment from "Fragment" /* 21 */;
import FamilyCenterActionCreators from "FamilyCenterActionCreators" /* 7063 */;
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow" /* 12728 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, parents;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((parents) => {
  let tmp14;
  let tmp5;
  let username10;
  let username11;
  let username6;
  let username7;
  const tmp = parents;
  let obj = parents(576);
  const cResult = obj.c(22);
  parents = parents.parents;
  [tmp5, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === parents[0]) {
    let username;
    const tmp6 = cResult[1];
    if (parents[1] != null) {
      username = tmp7.username;
    }
    if (tmp6 === username) {
      let username1;
      const tmp10 = cResult[2];
      if (parents[2] != null) {
        username1 = tmp11.username;
      }
      if (tmp10 === username1) {
        let tmp13;
        if (cResult[3] === parents.length) {
          tmp13 = cResult[4];
        }
        if (0 === parents.length) {
          return null;
        } else {
          if (cResult[5] === parents[0].username) {
            let username2;
            const tmp18 = cResult[6];
            if (parents[1] != null) {
              username2 = tmp19.username;
            }
            if (tmp18 === username2) {
              let username3;
              const tmp22 = cResult[7];
              if (parents[2] != null) {
                username3 = tmp23.username;
              }
              if (tmp22 === username3) {
                let tmp25;
                if (cResult[8] === parents.length) {
                  tmp25 = cResult[9];
                }
                if (cResult[10] === parents[0].username) {
                  let username4;
                  const tmp36 = cResult[11];
                  if (parents[1] != null) {
                    username4 = tmp37.username;
                  }
                  if (tmp36 === username4) {
                    let username5;
                    const tmp40 = cResult[12];
                    if (parents[2] != null) {
                      username5 = tmp41.username;
                    }
                    if (tmp40 === username5) {
                      let tmp43;
                      let tmp56;
                      let tmp55;
                      if (cResult[13] === parents.length) {
                        tmp43 = cResult[14];
                      }
                      const _Symbol = Symbol;
                      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp58 = jsx(tmp(12730).ShareIcon, {});
                        const intl3 = tmp(1126).intl;
                        const stringResult = intl3.string(tmp(1126).t["5l/hlt"]);
                        cResult[15] = tmp58;
                        cResult[16] = stringResult;
                        tmp56 = stringResult;
                        tmp55 = tmp58;
                      } else {
                        tmp55 = cResult[15];
                        tmp56 = cResult[16];
                      }
                      if (cResult[17] === tmp13) {
                        if (cResult[18] === tmp5) {
                          if (cResult[19] === tmp43) {
                            let tmp60;
                            if (cResult[20] === tmp25) {
                              tmp60 = cResult[21];
                            }
                            return tmp60;
                          }
                        }
                      }
                      const tmp63 = jsx(InAppReportsUpsellsTableRowDefault, { title: tmp25, disabledTitle: tmp43, icon: tmp55, description: tmp56, disabled: tmp5, onPress: tmp13 });
                      cResult[17] = tmp13;
                      cResult[18] = tmp5;
                      cResult[19] = tmp43;
                      cResult[20] = tmp25;
                      cResult[21] = tmp63;
                      tmp60 = tmp63;
                    }
                  }
                }
                const intl2 = tmp(1126).intl;
                const formatToPlainString2 = intl2.formatToPlainString;
                const obj3 = { count: parents.length, parent1: parents[0].username, parent2: username6, parent3: username7 };
                username6 = undefined;
                const BlAMme = tmp(1126).t.BlAMme;
                if (parents[1] != null) {
                  username6 = tmp44.username;
                }
                username7 = undefined;
                if (parents[2] != null) {
                  username7 = tmp47.username;
                }
                const formatToPlainString2Result = formatToPlainString2(BlAMme, obj3);
                cResult[10] = parents[0].username;
                let username8;
                if (parents[1] != null) {
                  username8 = tmp50.username;
                }
                cResult[11] = username8;
                let username9;
                if (parents[2] != null) {
                  username9 = tmp52.username;
                }
                cResult[12] = username9;
                cResult[13] = parents.length;
                cResult[14] = formatToPlainString2Result;
                tmp43 = formatToPlainString2Result;
              }
            }
          }
          let intl = tmp(1126).intl;
          let formatToPlainString = intl.formatToPlainString;
          const obj4 = { count: parents.length, parent1: parents[0].username, parent2: username10, parent3: username11 };
          username10 = undefined;
          const HqyWeO = tmp(1126).t.HqyWeO;
          if (parents[1] != null) {
            username10 = tmp26.username;
          }
          username11 = undefined;
          if (parents[2] != null) {
            username11 = tmp29.username;
          }
          const formatToPlainStringResult = formatToPlainString(HqyWeO, obj4);
          cResult[5] = parents[0].username;
          let username12;
          if (parents[1] != null) {
            username12 = tmp32.username;
          }
          cResult[6] = username12;
          let username13;
          if (parents[2] != null) {
            username13 = tmp34.username;
          }
          cResult[7] = username13;
          cResult[8] = parents.length;
          cResult[9] = formatToPlainStringResult;
          tmp25 = formatToPlainStringResult;
        }
      }
    }
  }
  [tmp3[0], tmp14] = parents;
  let username14;
  if (tmp14 != null) {
    username14 = tmp14.username;
  }
  cResult[1] = username14;
  let username15;
  if (parents[2] != null) {
    username15 = tmp16.username;
  }
  const fn = function u() {
    let length;
    let obj = FamilyCenterActionCreators;
    const shareIarWithParentsResult = obj.shareIarWithParents();
    const nextPromise = shareIarWithParentsResult.then(() => {
      let username;
      let username1;
      const showSafetySuccess = parents(dependencyMap[6]).showSafetySuccess;
      parents(dependencyMap[6]);
      const intl = parents(dependencyMap[7]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { count: length.length, parent1: length[0].username, parent2: username, parent3: username1 };
      username = undefined;
      const wr4IT5 = parents(dependencyMap[7]).t.wr4IT5;
      if (length[1] != null) {
        username = tmp3.username;
      }
      username1 = undefined;
      if (length[2] != null) {
        username1 = tmp5.username;
      }
      showSafetySuccess("IAR_SHARE_WITH_PARENT_SUCCESS", formatToPlainString(wr4IT5, obj));
      closure_1_1(true);
    });
    nextPromise.catch(() => {
      const obj = closure_1_1(closure_1_2[8]);
      obj.showFailedToast();
    });
  };
  cResult[2] = username15;
  cResult[3] = parents.length;
  cResult[4] = fn;
  tmp13 = fn;
}) : ((parents) => {
  let closure_1;
  let first;
  let username;
  let username1;
  let username2;
  let username3;
  parents = parents.parents;
  importDefault = undefined;
  [first, importDefault] = react.useState(false);
  [][0] = parents;
  if (0 === parents.length) {
    return null;
  } else {
    const intl3 = parents(1126).intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const obj2 = { count: parents.length, parent1: parents[0].username, parent2: username, parent3: username1 };
    username = undefined;
    const HqyWeO = parents(1126).t.HqyWeO;
    if (parents[1] != null) {
      username = tmp18.username;
    }
    const tmp5 = parents[2];
    username1 = undefined;
    if (tmp5 != null) {
      username1 = tmp5.username;
    }
    formatToPlainString2(HqyWeO, obj2);
    InAppReportsUpsellsTableRowDefault;
    let intl = tmp16(1126).intl;
    let formatToPlainString = intl.formatToPlainString;
    const obj3 = { count: parents.length, parent1: parents[0].username, parent2: username2, parent3: username3 };
    username2 = undefined;
    const BlAMme = tmp16(1126).t.BlAMme;
    if (parents[1] != null) {
      username2 = tmp11.username;
    }
    username3 = undefined;
    if (parents[2] != null) {
      username3 = tmp13.username;
    }
    const intl2 = tmp16(1126).intl;
    return <tmp10 title={formatToPlainString2(HqyWeO, obj2)} disabledTitle={formatToPlainString(BlAMme, obj3)} icon={null} description={intl2.string(parents(1126).t["5l/hlt"])} disabled={first} onPress={tmp3} />;
  }
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx");

export default tmp2;