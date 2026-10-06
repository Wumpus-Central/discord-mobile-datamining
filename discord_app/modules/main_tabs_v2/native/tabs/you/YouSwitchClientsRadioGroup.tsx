// discord_app/modules/main_tabs_v2/native/tabs/you/YouSwitchClientsRadioGroup.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import DiscordVariants from "../../../../links/native/DiscordVariants.android.tsx";
import DiscordVariantTypes from "../../../../links/native/DiscordVariantTypes.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let arr;
      let tmp10;
      let tmp7;
      let tmp8;
      let value;
      let obj = value(576);
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = value(16362);
        const currentVariant = tmpResult.getCurrentVariant();
        cResult[0] = currentVariant;
        value = currentVariant;
      } else {
        value = cResult[0];
      }
      [arr, importDefault] = react.useState(null);
      _slicedToArray(react.useState(null), 2);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          let _true;
          if (null != c0) {
            c0 = false;
            let DISCORD_VARIANT_LIST = first(dependencyMap[6]).DISCORD_VARIANT_LIST;
            const allResult = all(
              DISCORD_VARIANT_LIST.map((item) => {
                const obj = _true(closure_1_2[5]);
                return obj.isVariantInstalled(item);
              }),
            );
            const nextPromise = allResult.then((result) => {
              let closure_0 = result;
              if (!c0) {
                const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
                importDefault(DISCORD_VARIANT_LIST.filter((item, index) => closure_0[index]));
              }
            });
            nextPromise.catch(() => {
              if (!c0) {
                importDefault([]);
              }
            });
            return () => {
              let c0 = true;
            };
          }
        };
        const items = [value];
        cResult[1] = fn;
        cResult[2] = items;
        tmp8 = items;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = react.useEffect(tmp7, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(arg0) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (arg0 !== first) {
            const obj2 = DiscordVariants;
            const launchVariantResult = obj2.launchVariant(arg0);
            launchVariantResult.catch(() => {});
          }
        };
        cResult[3] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[3];
      }
      if (null != value) {
        if (null != arr) {
          if (arr.length >= 2) {
            let tmp14;
            if (cResult[4] !== arr) {
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor(value) {
                    const TableRadioRow = first(dependencyMap[8]).TableRadioRow;
                    ({ color: first(dependencyMap[6]).DISCORD_VARIANTS[value].color });
                    const ClydeIcon = first(dependencyMap[9]).ClydeIcon;
                    return (
                      <TableRadioRow
                        key={value}
                        value={value}
                        label={first(dependencyMap[6]).DISCORD_VARIANTS[value].label}
                        icon={null}
                      />
                    );
                  }
                }
                cResult[6] = A;
              } else {
                class A {
                  constructor(value) {
                    const TableRadioRow = first(dependencyMap[8]).TableRadioRow;
                    ({ color: first(dependencyMap[6]).DISCORD_VARIANTS[value].color });
                    const ClydeIcon = first(dependencyMap[9]).ClydeIcon;
                    return (
                      <TableRadioRow
                        key={value}
                        value={value}
                        label={first(dependencyMap[6]).DISCORD_VARIANTS[value].label}
                        icon={null}
                      />
                    );
                  }
                }
              }
              const mapped = arr.map(A);
              cResult[4] = arr;
              cResult[5] = mapped;
            } else {
              class A {
                constructor(value) {
                  const TableRadioRow = first(dependencyMap[8]).TableRadioRow;
                  ({ color: first(dependencyMap[6]).DISCORD_VARIANTS[value].color });
                  const ClydeIcon = first(dependencyMap[9]).ClydeIcon;
                  return (
                    <TableRadioRow
                      key={value}
                      value={value}
                      label={first(dependencyMap[6]).DISCORD_VARIANTS[value].label}
                      icon={null}
                    />
                  );
                }
              }
            }
            if (cResult[7] !== tmp11) {
              class A {
                constructor(value) {
                  const TableRadioRow = first(dependencyMap[8]).TableRadioRow;
                  ({ color: first(dependencyMap[6]).DISCORD_VARIANTS[value].color });
                  const ClydeIcon = first(dependencyMap[9]).ClydeIcon;
                  return (
                    <TableRadioRow
                      key={value}
                      value={value}
                      label={first(dependencyMap[6]).DISCORD_VARIANTS[value].label}
                      icon={null}
                    />
                  );
                }
              }
              const tmp15 = jsx(value(6079).TableRadioGroup, {
                title: "Switch Clients",
                value,
                onChange: tmp10,
                hasIcons: true,
                children: tmp11,
              });
              cResult[7] = tmp11;
              cResult[8] = tmp15;
              tmp14 = tmp15;
            } else {
              class A {
                constructor(value) {
                  const TableRadioRow = first(dependencyMap[8]).TableRadioRow;
                  ({ color: first(dependencyMap[6]).DISCORD_VARIANTS[value].color });
                  const ClydeIcon = first(dependencyMap[9]).ClydeIcon;
                  return (
                    <TableRadioRow
                      key={value}
                      value={value}
                      label={first(dependencyMap[6]).DISCORD_VARIANTS[value].label}
                      icon={null}
                    />
                  );
                }
              }
            }
            return tmp14;
          }
        }
      }
      return null;
    }
  : () => {
      let arr;
      const memo = react.useMemo(() => {
        const obj = memo(dependencyMap[5]);
        return obj.getCurrentVariant();
      }, []);
      [arr, importDefault] = react.useState(null);
      const items = [memo];
      _slicedToArray(react.useState(null), 2);
      const effect = react.useEffect(() => {
        let _true;
        if (null != c0) {
          c0 = false;
          let DISCORD_VARIANT_LIST = memo(dependencyMap[6]).DISCORD_VARIANT_LIST;
          const allResult = all(
            DISCORD_VARIANT_LIST.map((item) => {
              const obj = _true(closure_1_2[5]);
              return obj.isVariantInstalled(item);
            }),
          );
          const nextPromise = allResult.then((result) => {
            let closure_0 = result;
            if (!c0) {
              const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
              importDefault(DISCORD_VARIANT_LIST.filter((item, index) => closure_0[index]));
            }
          });
          nextPromise.catch(() => {
            if (!c0) {
              importDefault([]);
            }
          });
          return () => {
            let c0 = true;
          };
        }
      }, items);
      [][0] = memo;
      let tmp5 = null;
      if (null != memo) {
        tmp5 = null;
        if (null != arr) {
          tmp5 = null;
          if (arr.length >= 2) {
            const TableRadioGroup = memo(6079).TableRadioGroup;
            tmp5 = (
              <TableRadioGroup title="Switch Clients" value={memo} onChange={tmp4} hasIcons>
                {arr.map((value) => {
                  const TableRadioRow = memo(dependencyMap[8]).TableRadioRow;
                  ({ color: memo(dependencyMap[6]).DISCORD_VARIANTS[value].color });
                  const ClydeIcon = memo(dependencyMap[9]).ClydeIcon;
                  return (
                    <TableRadioRow
                      key={value}
                      value={value}
                      label={memo(dependencyMap[6]).DISCORD_VARIANTS[value].label}
                      icon={null}
                    />
                  );
                })}
              </TableRadioGroup>
            );
          }
        }
      }
      return tmp5;
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSwitchClientsRadioGroup.tsx");

export default tmp2;
