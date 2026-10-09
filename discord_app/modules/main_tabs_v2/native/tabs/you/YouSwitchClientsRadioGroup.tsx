// discord_app/modules/main_tabs_v2/native/tabs/you/YouSwitchClientsRadioGroup.tsx
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import DiscordVariants from "../../../../links/native/DiscordVariants.android.tsx";
import DiscordVariantTypes from "../../../../links/native/DiscordVariantTypes.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSwitchClientsRadioGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function YouSwitchClientsRadioGroup() {
      const cResult = value(576).c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const currentVariant = tmp(16747).getCurrentVariant();
        cResult[0] = currentVariant;
        value = currentVariant;
        const tmpResult = tmp(16747);
      } else {
        value = cResult[0];
      }
      let obj = value(576);
      [arr, importDefault] = noop.useState(null);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          if (null != c0) {
            c0 = false;
            let DISCORD_VARIANT_LIST = first(16748).DISCORD_VARIANT_LIST;
            const allPromises = Promise.all(
              DISCORD_VARIANT_LIST.map((item) => _true(dependencyMap[5]).isVariantInstalled(item)),
            );
            Promise.all(DISCORD_VARIANT_LIST.map((item) => _true(dependencyMap[5]).isVariantInstalled(item)))
              .then((result) => {
                closure_0 = result;
                if (!c0) {
                  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
                  importDefault(DISCORD_VARIANT_LIST.filter((item, index) => closure_0[index]));
                }
              })
              .catch(() => {
                if (!c0) {
                  importDefault([]);
                }
              });
            return () => {
              c0 = true;
            };
          }
        };
        const items = [value];
        cResult[1] = fn;
        cResult[2] = items;
        let tmp8 = items;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = noop.useEffect(tmp7, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(arg0) {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          if (arg0 !== first) {
            DiscordVariants.launchVariant(arg0).catch(() => {});
            const launchVariantResult = DiscordVariants.launchVariant(arg0);
          }
        };
        cResult[3] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[3];
      }
      if (null != value) {
        if (null != arr) {
          if (arr.length >= 2) {
            if (cResult[4] !== arr) {
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor(arg0) {
                    obj = { value: arg0, label: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].label, icon: null };
                    obj1 = { color: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].color };
                    obj.icon = closure_1_5(closure_0(closure_1_2[9]).ClydeIcon, obj1);
                    return closure_1_5(closure_0(closure_1_2[8]).TableRadioRow, obj, arg0);
                  }
                }
                cResult[6] = A;
              } else {
                class A {
                  constructor(arg0) {
                    obj = { value: arg0, label: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].label, icon: null };
                    obj1 = { color: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].color };
                    obj.icon = closure_1_5(closure_0(closure_1_2[9]).ClydeIcon, obj1);
                    return closure_1_5(closure_0(closure_1_2[8]).TableRadioRow, obj, arg0);
                  }
                }
              }
              const mapped = arr.map(A);
              cResult[4] = arr;
              cResult[5] = mapped;
            } else {
              class A {
                constructor(arg0) {
                  obj = { value: arg0, label: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].label, icon: null };
                  obj1 = { color: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].color };
                  obj.icon = closure_1_5(closure_0(closure_1_2[9]).ClydeIcon, obj1);
                  return closure_1_5(closure_0(closure_1_2[8]).TableRadioRow, obj, arg0);
                }
              }
              if (cResult[7] !== tmp11) {
                class A {
                  constructor(arg0) {
                    obj = { value: arg0, label: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].label, icon: null };
                    obj1 = { color: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].color };
                    obj.icon = closure_1_5(closure_0(closure_1_2[9]).ClydeIcon, obj1);
                    return closure_1_5(closure_0(closure_1_2[8]).TableRadioRow, obj, arg0);
                  }
                }
                let obj2 = { title: "Switch Clients", value, onChange: tmp10, hasIcons: true, children: tmp11 };
                const tmp16 = jsx(tmp(6267).TableRadioGroup, {
                  title: "Switch Clients",
                  value,
                  onChange: tmp10,
                  hasIcons: true,
                  children: tmp11,
                });
                cResult[7] = tmp11;
                cResult[8] = tmp16;
                const tmp15 = tmp16;
              } else {
                class A {
                  constructor(arg0) {
                    obj = { value: arg0, label: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].label, icon: null };
                    obj1 = { color: closure_0(closure_1_2[6]).DISCORD_VARIANTS[arg0].color };
                    obj.icon = closure_1_5(closure_0(closure_1_2[9]).ClydeIcon, obj1);
                    return closure_1_5(closure_0(closure_1_2[8]).TableRadioRow, obj, arg0);
                  }
                }
              }
              return tmp15;
            }
          }
        }
      }
      return null;
    }
  : function YouSwitchClientsRadioGroup() {
      const memo = noop.useMemo(() => memo(16747).getCurrentVariant(), []);
      [arr, importDefault] = noop.useState(null);
      const items = [memo];
      const effect = noop.useEffect(() => {
        if (null != c0) {
          c0 = false;
          let DISCORD_VARIANT_LIST = memo(16748).DISCORD_VARIANT_LIST;
          const allPromises = Promise.all(
            DISCORD_VARIANT_LIST.map((item) => _true(dependencyMap[5]).isVariantInstalled(item)),
          );
          Promise.all(DISCORD_VARIANT_LIST.map((item) => _true(dependencyMap[5]).isVariantInstalled(item)))
            .then((result) => {
              closure_0 = result;
              if (!c0) {
                const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
                importDefault(DISCORD_VARIANT_LIST.filter((item, index) => closure_0[index]));
              }
            })
            .catch(() => {
              if (!c0) {
                importDefault([]);
              }
            });
          return () => {
            c0 = true;
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
            let obj = {
              title: "Switch Clients",
              value: memo,
              onChange: tmp4,
              hasIcons: true,
              children: arr.map((value) => {
                const obj = {
                  value,
                  label: memo(16748).DISCORD_VARIANTS[value].label,
                  icon: jsx(memo(10142).ClydeIcon, { color: memo(16748).DISCORD_VARIANTS[value].color }),
                };
                return jsx(
                  memo(6266).TableRadioRow,
                  {
                    value,
                    label: memo(16748).DISCORD_VARIANTS[value].label,
                    icon: jsx(memo(10142).ClydeIcon, { color: memo(16748).DISCORD_VARIANTS[value].color }),
                  },
                  value,
                );
              }),
            };
            tmp5 = jsx(memo(6267).TableRadioGroup, {
              title: "Switch Clients",
              value: memo,
              onChange: tmp4,
              hasIcons: true,
              children: arr.map((value) => {
                const obj = {
                  value,
                  label: memo(16748).DISCORD_VARIANTS[value].label,
                  icon: jsx(memo(10142).ClydeIcon, { color: memo(16748).DISCORD_VARIANTS[value].color }),
                };
                return jsx(
                  memo(6266).TableRadioRow,
                  {
                    value,
                    label: memo(16748).DISCORD_VARIANTS[value].label,
                    icon: jsx(memo(10142).ClydeIcon, { color: memo(16748).DISCORD_VARIANTS[value].color }),
                  },
                  value,
                );
              }),
            });
          }
        }
      }
      return tmp5;
    };
