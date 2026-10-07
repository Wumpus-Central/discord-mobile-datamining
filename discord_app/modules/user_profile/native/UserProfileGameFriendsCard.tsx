// discord_app/modules/user_profile/native/UserProfileGameFriendsCard.tsx
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import ApplicationIconAndNameDefault from "ApplicationIconAndName.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const UserProfileCardDefault = tmp5(6713);
const require = fn;
let jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_4 = createStyles.createStyles({ card: { flexDirection: "column" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendsCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let tmp2 = dependencyMap;
      const cResult = found(576).c(13);
      style = style.style;
      const tmp4 = closure_4();
      const arr = useGetOrFetchApplicationsDefault(style.applicationIds);
      if (cResult[0] !== arr) {
        const _Symbol = Symbol;
        const forResult = Symbol.for("react.early_return_sentinel");
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function y(arg0) {
            return null != arg0;
          };
          cResult[3] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[3];
        }
        found = arr.filter(tmp10);
        let num2 = 0;
        let formatResult;
        let tmp12 = null;
        if (0 !== found.length) {
          if (1 === found.length) {
            const intl2 = tmp(1126).intl;
            const obj2 = {
              applicationName() {
                return jsx(
                  ApplicationIconAndNameDefault,
                  { application: found[0], textVariant: "text-md/normal", iconSize: 16 },
                  found[0].id,
                );
              },
            };
            formatResult = intl2.format(tmp(1126).t.wQ6urw, obj2);
            tmp12 = forResult;
          } else if (2 !== found.length) {
            importDefault = found[found.length - 1];
            dependencyMap = found.slice(num2, -1);
            const intl4 = tmp(1126).intl;
            const obj3 = {
              applications() {
                return closure_2.map((application) =>
                  closure_1_3(
                    application(closure_1_2[7]),
                    { application, useComma: true, textVariant: "text-md/normal", iconSize: 16 },
                    application.id,
                  ),
                );
              },
              applicationNameLast() {
                return jsx(ApplicationIconAndNameDefault, { application, textVariant: "text-md/normal", iconSize: 16 });
              },
            };
            formatResult = intl4.format(tmp(1126).t.UxpwAh, obj3);
            tmp12 = forResult;
          }
          const intl = tmp(1126).intl;
          const obj4 = {
            applicationName() {
              return jsx(
                ApplicationIconAndNameDefault,
                { application: found[0], textVariant: "text-md/normal", iconSize: 16 },
                found[0].id,
              );
            },
            applicationName2() {
              return jsx(
                ApplicationIconAndNameDefault,
                { application: found[1], textVariant: "text-md/normal", iconSize: 16 },
                found[1].id,
              );
            },
          };
          formatResult = intl.format(tmp(1126).t.C98CSN, obj4);
          tmp12 = forResult;
        }
        cResult[num2] = arr;
        cResult[1] = tmp12;
        num2 = 2;
        cResult[2] = formatResult;
      } else {
        const _Symbol3 = Symbol;
        if (cResult[1] !== Symbol.for("react.early_return_sentinel")) {
          return tmp6;
        } else {
          if (cResult[4] === style) {
            if (cResult[5] === tmp4.card) {
              let tmp16 = cResult[6];
            }
            const _Symbol4 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const stringResult = intl3.string(tmp(1126).t["Uv/eTx"]);
              cResult[7] = stringResult;
              let tmp17 = stringResult;
            } else {
              tmp17 = cResult[7];
            }
            if (cResult[8] !== tmp7) {
              const obj5 = { variant: "text-md/normal", color: "text-default", children: tmp7 };
              const tmp21 = jsx(tmp(4892).Text, { variant: "text-md/normal", color: "text-default", children: tmp7 });
              cResult[8] = tmp7;
              cResult[9] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[9];
            }
            if (cResult[10] === tmp16) {
            }
            const obj6 = { style: tmp16, title: tmp17, children: tmp19 };
            tmp2 = (
              <tmp5 style={tmp16} title={tmp17}>
                {tmp19}
              </tmp5>
            );
            cResult[10] = tmp16;
            cResult[11] = tmp19;
            cResult[12] = tmp2;
          }
          const items = [tmp4.card, style];
          cResult[4] = style;
          cResult[5] = tmp4.card;
          cResult[6] = items;
          tmp16 = items;
        }
      }
      const obj = found(576);
    }
  : (arg0) => {
      importDefault = undefined;
      dependencyMap = undefined;
      jsx = undefined;
      ({ applicationIds, style } = arg0);
      const tmp = closure_4();
      const found = useGetOrFetchApplicationsDefault(applicationIds).filter((item) => null != item);
      if (0 === found.length) {
        return null;
      } else {
        importDefault = "text-md/normal";
        if (1 === found.length) {
          const intl2 = found(1126).intl;
          const obj2 = {
            applicationName() {
              return jsx(
                ApplicationIconAndNameDefault,
                { application: found[0], textVariant, iconSize: 16 },
                found[0].id,
              );
            },
          };
          let formatResult = intl2.format(found(1126).t.wQ6urw, obj2);
          let tmp6 = found;
        } else if (2 === found.length) {
          const intl = found(1126).intl;
          const obj = {
            applicationName() {
              return jsx(
                ApplicationIconAndNameDefault,
                { application: found[0], textVariant, iconSize: 16 },
                found[0].id,
              );
            },
            applicationName2() {
              return jsx(
                ApplicationIconAndNameDefault,
                { application: found[1], textVariant, iconSize: 16 },
                found[1].id,
              );
            },
          };
          formatResult = intl.format(found(1126).t.C98CSN, obj);
          tmp6 = found;
        } else {
          dependencyMap = found[found.length - 1];
          jsx = found.slice(0, -1);
          const intl4 = found(1126).intl;
          const obj3 = {
            applications() {
              return closure_3.map((application) =>
                closure_3(
                  textVariant(closure_2[7]),
                  { application, useComma: true, textVariant, iconSize: 16 },
                  application.id,
                ),
              );
            },
            applicationNameLast() {
              return jsx(ApplicationIconAndNameDefault, { application, textVariant, iconSize: 16 });
            },
          };
          formatResult = intl4.format(found(1126).t.UxpwAh, obj3);
          tmp6 = found;
        }
        const obj4 = { style: null, title: null, children: null };
        const items = [tmp.card, style];
        obj4.style = items;
        const intl3 = tmp6(1126).intl;
        obj4.title = intl3.string(tmp6(1126).t["Uv/eTx"]);
        const obj5 = { variant: "text-md/normal", color: "text-default", children: formatResult };
        obj4.children = jsx(tmp6(4892).Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: formatResult,
        });
        return jsx(UserProfileCardDefault, { style: null, title: null, children: null });
      }
      const arr = useGetOrFetchApplicationsDefault(applicationIds);
    };
