// discord_app/modules/phone/native/CountryCallingCodeSelect.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CountryCodeUtils from "../../i18n/CountryCodeUtils.tsx";
import fuzzysearchDefault from "../../../../_runtime/05709_fuzzysearch.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let alpha2, onCountrySelected;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const getI18NCountryName = CountryCodeUtils.getI18NCountryName;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let space;
  let space2;
  const obj = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingHorizontal: arg0 ? space.PX_24 : space.PX_12,
    paddingTop: nativeDefault.space.PX_16,
    paddingBottom: arg0 ? space2.PX_24 : space2.PX_16,
    flex: 1,
  };
  space = nativeDefault.space;
  space2 = nativeDefault.space;
  const obj2 = { container: obj, searchFieldContainer: { paddingBottom: nativeDefault.space.PX_16 } };
  ({ paddingBottom: nativeDefault.space.PX_16 });
  return obj2;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onCountrySelected) => {
      let first;
      let first1;
      let rows;
      let tmp13;
      const tmp = first;
      let obj = onCountrySelected(first[8]);
      const cResult = obj.c(28);
      onCountrySelected = onCountrySelected.onCountrySelected;
      const onClose = onCountrySelected.onClose;
      const tmp6 = closure_9(onClose(first[9])());
      first = rows(react.useState(""), 2)[0];
      rows(react.useState(""), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp5Result = onClose(first[10]);
        const flatMapResult = tmp5Result.flatMap((alpha2, index) => {
          let closure_129_2;
          let phoneCountryCodes;
          let closure_0 = index;
          alpha2 = alpha2.alpha2;
          ({ phoneCountryCodes, name: closure_129_2 } = alpha2);
          let closure_3 = getI18NCountryName(alpha2);
          return phoneCountryCodes.map((code) => {
            const obj = { translatedName, key: "" + closure_0 + "-" + code, country: obj2 };
            return obj;
          });
        });
        cResult[0] = flatMapResult;
        first1 = flatMapResult;
      } else {
        first1 = cResult[0];
      }
      const tmp12 = onClose(first[11])();
      if (cResult[1] !== first) {
        const fn = function x(str) {
          const replaced = str.replace(/\+|\s/g, "");
          return replaced.startsWith(first.replace(/\+|\s/g, ""));
        };
        cResult[1] = first;
        cResult[2] = fn;
        tmp13 = fn;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] === tmp13) {
        let arr2;
        let tmp30;
        if (cResult[4] === first) {
          arr2 = cResult[5];
        }
        if (cResult[6] !== arr2.length) {
          const items = [arr2.length];
          cResult[6] = arr2.length;
          cResult[7] = items;
          tmp30 = items;
        } else {
          tmp30 = cResult[7];
        }
        if (cResult[8] === arr2) {
          let tmp31;
          if (cResult[9] === tmp30) {
            tmp31 = cResult[10];
          }
          rows = tmp31.rows;
          const sections = tmp31.sections;
          if (cResult[11] === onClose) {
            if (cResult[12] === onCountrySelected) {
              let tmp32;
              if (cResult[13] === rows) {
                tmp32 = cResult[14];
              }
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { size: "md", onChange: null };
                class X {
                  constructor(arg0, arg1) {
                    let obj2;
                    const country = tmp.country;
                    const obj = {
                      start: 0 === arg1,
                      end: arg1 === rows.length - 1,
                      label: rows[arg1].translatedName,
                      trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
                      onPress() {
                        onCountrySelected(country);
                        if (onClose != null) {
                          onClose();
                        }
                      },
                    };
                    const TableRow = onCountrySelected(first[13]).TableRow;
                    obj2 = { variant: "text-md/semibold", children: country.code };
                    return closure_1_7(TableRow, obj);
                  }
                }
                const tmp38 = closure_7(onCountrySelected(first[15]).SearchField, obj2);
                cResult[15] = tmp38;
              }
              if (cResult[16] !== tmp6.searchFieldContainer) {
                class X {
                  constructor(arg0, arg1) {
                    let obj2;
                    const country = tmp.country;
                    const obj = {
                      start: 0 === arg1,
                      end: arg1 === rows.length - 1,
                      label: rows[arg1].translatedName,
                      trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
                      onPress() {
                        onCountrySelected(country);
                        if (onClose != null) {
                          onClose();
                        }
                      },
                    };
                    const TableRow = onCountrySelected(first[13]).TableRow;
                    obj2 = { variant: "text-md/semibold", children: country.code };
                    return closure_1_7(TableRow, obj);
                  }
                }
                cResult[16] = tmp6.searchFieldContainer;
                cResult[17] = tmp42;
              }
              class X {
                constructor(arg0, arg1) {
                  let obj2;
                  const country = tmp.country;
                  const obj = {
                    start: 0 === arg1,
                    end: arg1 === rows.length - 1,
                    label: rows[arg1].translatedName,
                    trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
                    onPress() {
                      onCountrySelected(country);
                      if (onClose != null) {
                        onClose();
                      }
                    },
                  };
                  const TableRow = onCountrySelected(first[13]).TableRow;
                  obj2 = { variant: "text-md/semibold", children: country.code };
                  return closure_1_7(TableRow, obj);
                }
              }
              if ("" !== first) {
                let tmp49;
                if (0 === rows.length) {
                  class X {
                    constructor(arg0, arg1) {
                      let obj2;
                      const country = tmp.country;
                      const obj = {
                        start: 0 === arg1,
                        end: arg1 === rows.length - 1,
                        label: rows[arg1].translatedName,
                        trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
                        onPress() {
                          onCountrySelected(country);
                          if (onClose != null) {
                            onClose();
                          }
                        },
                      };
                      const TableRow = onCountrySelected(first[13]).TableRow;
                      obj2 = { variant: "text-md/semibold", children: country.code };
                      return closure_1_7(TableRow, obj);
                    }
                  }
                  const tmp55 = onClose(first[16]);
                  tmp56[0] = onClose(first[17]);
                  const intl = onCountrySelected(first[18]).intl;
                  tmp56[1] = intl.string(onCountrySelected(first[18]).t.wEHnxW);
                  tmp49 = closure_7(tmp55, tmp56);
                }
                cResult[18] = first;
                class X {
                  constructor(arg0, arg1) {
                    let obj2;
                    const country = tmp.country;
                    const obj = {
                      start: 0 === arg1,
                      end: arg1 === rows.length - 1,
                      label: rows[arg1].translatedName,
                      trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
                      onPress() {
                        onCountrySelected(country);
                        if (onClose != null) {
                          onClose();
                        }
                      },
                    };
                    const TableRow = onCountrySelected(first[13]).TableRow;
                    obj2 = { variant: "text-md/semibold", children: country.code };
                    return closure_1_7(TableRow, obj);
                  }
                }
                cResult[20] = tmp12;
                cResult[21] = rows.length;
                cResult[22] = sections;
                cResult[23] = tmp49;
              }
              const obj4 = {
                sections,
                renderItem: tmp32,
                itemSize: tmp12,
                estimatedListSize: "windowSize",
                keyboardShouldPersistTaps: "always",
              };
              tmp49 = closure_7(onClose(first[19]), obj4);
            }
          }
          class X {
            constructor(arg0, arg1) {
              let obj2;
              const country = tmp.country;
              const obj = {
                start: 0 === arg1,
                end: arg1 === rows.length - 1,
                label: rows[arg1].translatedName,
                trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
                onPress() {
                  onCountrySelected(country);
                  if (onClose != null) {
                    onClose();
                  }
                },
              };
              const TableRow = onCountrySelected(first[13]).TableRow;
              obj2 = { variant: "text-md/semibold", children: country.code };
              return closure_1_7(TableRow, obj);
            }
          }
          cResult[11] = onClose;
          cResult[12] = onCountrySelected;
          cResult[13] = rows;
          cResult[14] = X;
          tmp32 = X;
        }
        const obj5 = { rows: arr2, sections: null };
        cResult[8] = arr2;
        cResult[9] = tmp30;
        cResult[10] = obj5;
        tmp31 = obj5;
      }
      const items1 = [];
      const iter = first1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp15 = nextResult;
        let tmp22Result = 0 === first.length;
        if (!tmp22Result) {
          tmp22Result = tmp13(tmp15.country.code);
        }
        if (!tmp22Result) {
          let tmp22 = onClose(first[12]);
          class X {
            constructor(arg0, arg1) {
              let obj2;
              const country = tmp.country;
              const obj = {
                start: 0 === arg1,
                end: arg1 === rows.length - 1,
                label: rows[arg1].translatedName,
                trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
                onPress() {
                  onCountrySelected(country);
                  if (onClose != null) {
                    onClose();
                  }
                },
              };
              const TableRow = onCountrySelected(first[13]).TableRow;
              obj2 = { variant: "text-md/semibold", children: country.code };
              return closure_1_7(TableRow, obj);
            }
          }
          let str = tmp15.country.name;
          let formatted = first.toLowerCase();
          tmp22Result = tmp22(formatted, str.toLowerCase());
        }
        if (!tmp22Result) {
          let tmp28 = onClose(first[12]);
          class X {
            constructor(arg0, arg1) {
              let obj2;
              const country = tmp.country;
              const obj = {
                start: 0 === arg1,
                end: arg1 === rows.length - 1,
                label: rows[arg1].translatedName,
                trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
                onPress() {
                  onCountrySelected(country);
                  if (onClose != null) {
                    onClose();
                  }
                },
              };
              const TableRow = onCountrySelected(first[13]).TableRow;
              obj2 = { variant: "text-md/semibold", children: country.code };
              return closure_1_7(TableRow, obj);
            }
          }
          let str2 = tmp15.translatedName;
          let formatted1 = first.toLowerCase();
          tmp22Result = tmp28(formatted1, str2.toLowerCase());
        }
        class X {
          constructor(arg0, arg1) {
            let obj2;
            const country = tmp.country;
            const obj = {
              start: 0 === arg1,
              end: arg1 === rows.length - 1,
              label: rows[arg1].translatedName,
              trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
              onPress() {
                onCountrySelected(country);
                if (onClose != null) {
                  onClose();
                }
              },
            };
            const TableRow = onCountrySelected(first[13]).TableRow;
            obj2 = { variant: "text-md/semibold", children: country.code };
            return closure_1_7(TableRow, obj);
          }
        }
        continue;
      }
      cResult[3] = tmp13;
      cResult[4] = first;
      cResult[5] = items1;
      arr2 = items1;
    }
  : (onCountrySelected) => {
      let intl;
      onCountrySelected = onCountrySelected.onCountrySelected;
      const onClose = onCountrySelected.onClose;
      let first;
      let memo;
      let rows;
      const tmp = onClose;
      let tmp3 = closure_9(onClose(first[9])());
      const tmp4 = memo(rows.useState(""), 2);
      first = tmp4[0];
      const tmp6 = tmp4[1];
      memo = rows.useMemo(() => {
        let obj = onClose(first[10]);
        return obj.flatMap((alpha2, index) => {
          let closure_129_1;
          let phoneCountryCodes;
          alpha2 = alpha2.alpha2;
          ({ phoneCountryCodes, name: closure_129_1 } = alpha2);
          let closure_2 = index;
          let closure_3 = closure_1_6(alpha2);
          return phoneCountryCodes.map((code) => {
            const obj = { translatedName, key: "" + closure_2 + "-" + code, country: obj2 };
            return obj;
          });
        });
      }, []);
      let items = [memo, first];
      let tmp8 = onClose(first[11])();
      const memo1 = rows.useMemo(() => {
        let items1;
        const items = [];
        const iter = memo[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let startsWithResult = 0 === first.length;
          if (!startsWithResult) {
            let str2 = tmp3.country.code;
            let replaced = str2.replace(/\+|\s/g, "");
            startsWithResult = replaced.startsWith(first.replace(/\+|\s/g, ""));
          }
          if (!startsWithResult) {
            let tmp8 = fuzzysearchDefault;
            let str3 = tmp3.country.name;
            let formatted = first.toLowerCase();
            startsWithResult = tmp8(formatted, str3.toLowerCase());
          }
          if (!startsWithResult) {
            let tmp13 = fuzzysearchDefault;
            let str4 = tmp3.translatedName;
            let formatted1 = first.toLowerCase();
            startsWithResult = tmp13(formatted1, str4.toLowerCase());
          }
          if (startsWithResult) {
            let arr = items.push(tmp3);
          }
          continue;
        }
        const obj = { rows: items, sections: items1 };
        items1 = [items.length];
        return obj;
      }, items);
      rows = memo1.rows;
      let items1 = [onClose, onCountrySelected, rows];
      const sections = memo1.sections;
      let obj = { style: tmp3.container, children: null };
      let obj2 = {
        style: tmp3.searchFieldContainer,
        children: closure_7(onCountrySelected(first[15]).SearchField, { size: "md", onChange: tmp6 }),
      };
      const callback = rows.useCallback((arg0, arg1) => {
        let obj2;
        const country = tmp.country;
        const obj = {
          start: 0 === arg1,
          end: arg1 === rows.length - 1,
          label: rows[arg1].translatedName,
          trailing: closure_1_7(onCountrySelected(first[14]).Text, obj2),
          onPress() {
            onCountrySelected(country);
            if (onClose != null) {
              onClose();
            }
          },
        };
        const TableRow = onCountrySelected(first[13]).TableRow;
        obj2 = { variant: "text-md/semibold", children: country.code };
        return closure_1_7(TableRow, obj);
      }, items1);
      const items2 = [closure_7(View, obj2)];
      if ("" !== first) {
        let tmp13Result;
        if (0 === rows.length) {
          const obj3 = { source: tmp(first[17]), text: intl.string(onCountrySelected(first[18]).t.wEHnxW) };
          const tmpResult = tmp(first[16]);
          intl = tmp14(tmp2[18]).intl;
          tmp13Result = closure_7(tmpResult, obj3);
        }
        items2[1] = tmp13Result;
        obj.children = items2;
        return closure_8(View, obj);
      }
      tmp13Result = closure_7(tmp(tmp2[19]), {
        sections,
        renderItem: callback,
        itemSize: tmp8,
        estimatedListSize: "windowSize",
        keyboardShouldPersistTaps: "always",
      });
    };
const result = size.fileFinishedImporting("modules/phone/native/CountryCallingCodeSelect.tsx");

export default tmp3;
