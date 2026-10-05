// === Module 12932: UserProfileGameFriendsCard ===

// Module 12932 (UserProfileGameFriendsCard)
import Fragment from "Fragment" /* 21 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6663 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12294 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let tmp5;
const UserProfileCardDefault = tmp5(6706);
let jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ card: { flexDirection: "column" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let application;
  let closure_2;
  let found;
  let tmp6;
  let tmp7;
  let obj = found(576);
  const cResult = obj.c(13);
  style = style.style;
  const applicationIds = style.applicationIds;
  const tmp4 = closure_4();
  const arr = useGetOrFetchApplicationsDefault(applicationIds);
  if (cResult[0] !== arr) {
    let tmp10;
    const _Symbol = Symbol;
    const forResult = Symbol.for("react.early_return_sentinel");
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function y(arg0) {
        return null != arg0;
      };
      cResult[3] = fn;
      tmp10 = fn;
    } else {
      tmp10 = cResult[3];
    }
    found = arr.filter(tmp10);
    let formatResult;
    let tmp12 = null;
    if (0 !== found.length) {
      if (1 === found.length) {
        const intl2 = tmp(1126).intl;
        const obj2 = {
          applicationName() {
                  return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant: "text-md/normal", iconSize: 16 }, found[0].id);
                }
        };
        formatResult = intl2.format(tmp(1126).t.wQ6urw, obj2);
        tmp12 = forResult;
      } else if (2 === found.length) {
        const intl = tmp(1126).intl;
        const obj3 = {
          applicationName() {
                  return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant: "text-md/normal", iconSize: 16 }, found[0].id);
                },
          applicationName2() {
                  return jsx(ApplicationIconAndNameDefault, { application: found[1], textVariant: "text-md/normal", iconSize: 16 }, found[1].id);
                }
        };
        formatResult = intl.format(tmp(1126).t.C98CSN, obj3);
        tmp12 = forResult;
      } else {
        importDefault = found[found.length - 1];
        dependencyMap = found.slice(0, -1);
        const intl4 = tmp(1126).intl;
        const obj4 = {
          applications() {
                  return closure_2.map((application) => {
                    const obj = { application, useComma: true, textVariant: "text-md/normal", iconSize: 16 };
                    return closure_1_3(application(closure_1_2[7]), obj, application.id);
                  });
                },
          applicationNameLast() {
                  return jsx(ApplicationIconAndNameDefault, { application, textVariant: "text-md/normal", iconSize: 16 });
                }
        };
        formatResult = intl4.format(tmp(1126).t.UxpwAh, obj4);
        tmp12 = forResult;
      }
    }
    cResult[0] = arr;
    cResult[1] = tmp12;
    cResult[2] = formatResult;
    tmp7 = formatResult;
    tmp6 = tmp12;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (tmp6 === Symbol.for("react.early_return_sentinel")) {
    if (cResult[4] === style) {
      let tmp13;
      let tmp14;
      let tmp16;
      if (cResult[5] === tmp4.card) {
        tmp13 = cResult[6];
      }
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult = intl3.string(found(1126).t["Uv/eTx"]);
        cResult[7] = stringResult;
        tmp14 = stringResult;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tmp7) {
        const tmp18 = jsx(found(4886).Text, { variant: "text-md/normal", color: "text-default", children: tmp7 });
        cResult[8] = tmp7;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp13) {
        let tmp19;
        if (cResult[11] === tmp16) {
          tmp19 = cResult[12];
        }
        tmp6 = tmp19;
      }
      const tmp21 = jsx(UserProfileCardDefault, { style: tmp13, title: tmp14, children: tmp16 });
      cResult[10] = tmp13;
      cResult[11] = tmp16;
      cResult[12] = tmp21;
      tmp19 = tmp21;
    }
    const items = [tmp4.card, style];
    cResult[4] = style;
    cResult[5] = tmp4.card;
    cResult[6] = items;
    tmp13 = items;
  }
  return tmp6;
}) : ((arg0) => {
  let application;
  let applicationIds;
  let closure_3;
  let style;
  let textVariant;
  importDefault = undefined;
  dependencyMap = undefined;
  jsx = undefined;
  ({ applicationIds, style } = arg0);
  const tmp = closure_4();
  const arr = useGetOrFetchApplicationsDefault(applicationIds);
  const found = arr.filter((item) => null != item);
  if (0 === found.length) {
    return null;
  } else {
    let tmp6;
    importDefault = "text-md/normal";
    if (1 === found.length) {
      const intl2 = found(1126).intl;
      const obj2 = {
        applicationName() {
              return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant, iconSize: 16 }, found[0].id);
            }
      };
      let formatResult = intl2.format(found(1126).t.wQ6urw, obj2);
      tmp6 = found;
    } else if (2 === found.length) {
      const intl = found(1126).intl;
      let obj = {
        applicationName() {
              return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant, iconSize: 16 }, found[0].id);
            },
        applicationName2() {
              return jsx(ApplicationIconAndNameDefault, { application: found[1], textVariant, iconSize: 16 }, found[1].id);
            }
      };
      formatResult = intl.format(found(1126).t.C98CSN, obj);
      tmp6 = found;
    } else {
      dependencyMap = found[found.length - 1];
      jsx = found.slice(0, -1);
      const intl4 = found(1126).intl;
      const obj3 = {
        applications() {
              return closure_3.map((application) => {
                const obj = { application, useComma: true, textVariant, iconSize: 16 };
                return closure_3(textVariant(application[7]), obj, application.id);
              });
            },
        applicationNameLast() {
              return jsx(ApplicationIconAndNameDefault, { application, textVariant, iconSize: 16 });
            }
      };
      formatResult = intl4.format(found(1126).t.UxpwAh, obj3);
      tmp6 = found;
    }
    const items = [tmp.card, style];
    UserProfileCardDefault;
    const intl3 = tmp6(1126).intl;
    return <tmp2Result style={items} title={intl3.string(tmp6(1126).t["Uv/eTx"])}>{null}</tmp2Result>;
  }
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendsCard.tsx");

export default tmp3;