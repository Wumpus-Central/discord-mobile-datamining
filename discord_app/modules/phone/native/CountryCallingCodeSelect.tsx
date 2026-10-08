// === Module 6728: CountryCallingCodeSelect ===

// Module 6728 (CountryCallingCodeSelect)
import nativeDefault from "native" /* 587 */;
import fuzzysearchDefault from "fuzzysearch" /* 6099 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const getI18NCountryName = fn(5908).getI18NCountryName;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: null, paddingTop: null, paddingBottom: null, flex: 1 };
  const space = nativeDefault.space;
  obj.paddingHorizontal = arg0 ? space.PX_24 : space.PX_12;
  obj.paddingTop = nativeDefault.space.PX_16;
  const space2 = nativeDefault.space;
  const obj2 = { container: obj, searchFieldContainer: { paddingBottom: nativeDefault.space.PX_16 } };
  obj.paddingBottom = arg0 ? space2.PX_24 : space2.PX_16;
  return obj2;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/phone/native/CountryCallingCodeSelect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CountryCallingCodeSelect(onCountrySelected) {
  const cResult = onCountrySelected(first[8]).c(28);
  onCountrySelected = onCountrySelected.onCountrySelected;
  const onClose = onCountrySelected.onClose;
  const tmp6 = closure_9(onClose(first[9])());
  let obj = onCountrySelected(first[8]);
  first = num8(noop.useState(""), 2)[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const flatMapResult = tmp5(tmp2[10]).flatMap((alpha2, index) => {
      closure_0 = index;
      alpha2 = alpha2.alpha2;
      ({ phoneCountryCodes, name: first } = alpha2);
      const translatedName = getI18NCountryName(alpha2);
      return phoneCountryCodes.map((code) => {
        const obj = { translatedName, key: "" + closure_0 + "-" + code, country: { code, alpha2, name } };
        return obj;
      });
    });
    cResult[0] = flatMapResult;
    let first1 = flatMapResult;
    const tmp5Result = tmp5(tmp2[10]);
  } else {
    first1 = cResult[0];
  }
  const tmp12 = onClose(first[11])();
  if (cResult[1] !== first) {
    function filterSpacesAndPluses(str) {
      const replaced = str.replace(/\+|\s/g, "");
      return replaced.startsWith(first.replace(/\+|\s/g, ""));
    }
    cResult[1] = first;
    cResult[2] = filterSpacesAndPluses;
    let tmp13 = filterSpacesAndPluses;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === tmp13) {
    if (cResult[4] === first) {
      let arr2 = cResult[5];
    }
    if (cResult[6] !== arr2.length) {
      const items = [arr2.length];
      cResult[6] = arr2.length;
      cResult[7] = items;
      let tmp30 = items;
    } else {
      tmp30 = cResult[7];
    }
    if (cResult[8] === arr2) {
      if (cResult[9] === tmp30) {
        let tmp31 = cResult[10];
      }
      num8 = tmp31.rows;
      const sections = tmp31.sections;
      if (cResult[11] === onClose) {
        if (cResult[12] === onCountrySelected) {
          if (cResult[13] === num8) {
            let tmp32 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor(arg0, arg1) {
                tmp = rows[arg1];
                country = tmp.country;
                obj = {
                  start: 0 === arg1,
                  end: arg1 === rows.length - 1,
                  label: tmp.translatedName,
                  trailing: null,
                  onPress() {
                                  onCountrySelected(country);
                                  if (onClose != null) {
                                    onClose();
                                  }
                                }
                };
                obj1 = { variant: "text-md/semibold", children: country.code };
                obj.trailing = closure_1_7(onCountrySelected(closure_2[14]).Text, obj1);
                return closure_1_7(onCountrySelected(closure_2[13]).TableRow, obj);
              }
            }
            const tmp38 = closure_7(onCountrySelected(first[15]).SearchField, { size: "md", onChange: null });
            cResult[15] = tmp38;
            let tmp33 = tmp38;
            const obj2 = { size: "md", onChange: null };
          } else {
            tmp33 = cResult[15];
          }
          if (cResult[16] !== tmp6.searchFieldContainer) {
            const obj3 = { style: tmp6.searchFieldContainer, children: tmp33 };
            class X {
              constructor(arg0, arg1) {
                tmp = rows[arg1];
                country = tmp.country;
                obj = {
                  start: 0 === arg1,
                  end: arg1 === rows.length - 1,
                  label: tmp.translatedName,
                  trailing: null,
                  onPress() {
                                  onCountrySelected(country);
                                  if (onClose != null) {
                                    onClose();
                                  }
                                }
                };
                obj1 = { variant: "text-md/semibold", children: country.code };
                obj.trailing = closure_1_7(onCountrySelected(closure_2[14]).Text, obj1);
                return closure_1_7(onCountrySelected(closure_2[13]).TableRow, obj);
              }
            }
            cResult[16] = tmp6.searchFieldContainer;
            cResult[17] = tmp42;
          }
          class X {
            constructor(arg0, arg1) {
              tmp = rows[arg1];
              country = tmp.country;
              obj = {
                start: 0 === arg1,
                end: arg1 === rows.length - 1,
                label: tmp.translatedName,
                trailing: null,
                onPress() {
                              onCountrySelected(country);
                              if (onClose != null) {
                                onClose();
                              }
                            }
              };
              obj1 = { variant: "text-md/semibold", children: country.code };
              obj.trailing = closure_1_7(onCountrySelected(closure_2[14]).Text, obj1);
              return closure_1_7(onCountrySelected(closure_2[13]).TableRow, obj);
            }
          }
          if ("" === first) {
            class X {
              constructor(arg0, arg1) {
                tmp = rows[arg1];
                country = tmp.country;
                obj = {
                  start: 0 === arg1,
                  end: arg1 === rows.length - 1,
                  label: tmp.translatedName,
                  trailing: null,
                  onPress() {
                                  onCountrySelected(country);
                                  if (onClose != null) {
                                    onClose();
                                  }
                                }
                };
                obj1 = { variant: "text-md/semibold", children: country.code };
                obj.trailing = closure_1_7(onCountrySelected(closure_2[14]).Text, obj1);
                return closure_1_7(onCountrySelected(closure_2[13]).TableRow, obj);
              }
            }
            tmp48[0] = sections;
            tmp48[1] = tmp32;
            tmp48[2] = tmp12;
            let tmp49 = closure_7(onClose(first[19]), tmp48);
            cResult[18] = first;
            cResult[19] = tmp32;
            cResult[20] = tmp12;
            cResult[21] = num8.length;
            cResult[22] = sections;
            num8 = 23;
            cResult[23] = tmp49;
          }
          const obj4 = { source: onClose(first[17]), text: null };
          const intl = onCountrySelected(first[18]).intl;
          obj4.text = intl.string(onCountrySelected(first[18]).t.wEHnxW);
          tmp49 = closure_7(onClose(first[16]), obj4);
          const tmp55 = onClose(first[16]);
        }
      }
      class X {
        constructor(arg0, arg1) {
          tmp = rows[arg1];
          country = tmp.country;
          obj = {
            start: 0 === arg1,
            end: arg1 === rows.length - 1,
            label: tmp.translatedName,
            trailing: null,
            onPress() {
                      onCountrySelected(country);
                      if (onClose != null) {
                        onClose();
                      }
                    }
          };
          obj1 = { variant: "text-md/semibold", children: country.code };
          obj.trailing = closure_1_7(onCountrySelected(closure_2[14]).Text, obj1);
          return closure_1_7(onCountrySelected(closure_2[13]).TableRow, obj);
        }
      }
      cResult[11] = onClose;
      cResult[12] = onCountrySelected;
      cResult[13] = num8;
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
          tmp = rows[arg1];
          country = tmp.country;
          obj = {
            start: 0 === arg1,
            end: arg1 === rows.length - 1,
            label: tmp.translatedName,
            trailing: null,
            onPress() {
                      onCountrySelected(country);
                      if (onClose != null) {
                        onClose();
                      }
                    }
          };
          obj1 = { variant: "text-md/semibold", children: country.code };
          obj.trailing = closure_1_7(onCountrySelected(closure_2[14]).Text, obj1);
          return closure_1_7(onCountrySelected(closure_2[13]).TableRow, obj);
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
          tmp = rows[arg1];
          country = tmp.country;
          obj = {
            start: 0 === arg1,
            end: arg1 === rows.length - 1,
            label: tmp.translatedName,
            trailing: null,
            onPress() {
                      onCountrySelected(country);
                      if (onClose != null) {
                        onClose();
                      }
                    }
          };
          obj1 = { variant: "text-md/semibold", children: country.code };
          obj.trailing = closure_1_7(onCountrySelected(closure_2[14]).Text, obj1);
          return closure_1_7(onCountrySelected(closure_2[13]).TableRow, obj);
        }
      }
      let str2 = tmp15.translatedName;
      let formatted1 = first.toLowerCase();
      tmp22Result = tmp28(formatted1, str2.toLowerCase());
    }
    class X {
      constructor(arg0, arg1) {
        tmp = rows[arg1];
        country = tmp.country;
        obj = {
          start: 0 === arg1,
          end: arg1 === rows.length - 1,
          label: tmp.translatedName,
          trailing: null,
          onPress() {
                  onCountrySelected(country);
                  if (onClose != null) {
                    onClose();
                  }
                }
        };
        obj1 = { variant: "text-md/semibold", children: country.code };
        obj.trailing = closure_1_7(onCountrySelected(closure_2[14]).Text, obj1);
        return closure_1_7(onCountrySelected(closure_2[13]).TableRow, obj);
      }
    }
    continue;
  }
  cResult[3] = tmp13;
  cResult[4] = first;
  cResult[5] = items1;
  arr2 = items1;
  const tmp7 = num8(noop.useState(""), 2);
}) : (function CountryCallingCodeSelect(onCountrySelected) {
  onCountrySelected = onCountrySelected.onCountrySelected;
  const onClose = onCountrySelected.onClose;
  let first;
  let memo;
  let rows;
  let tmp3 = closure_9(onClose(first[9])());
  const tmp4 = memo(rows.useState(""), 2);
  first = tmp4[0];
  memo = rows.useMemo(() => onClose(first[10]).flatMap((alpha2, index) => {
    alpha2 = alpha2.alpha2;
    ({ phoneCountryCodes, name: closure_1 } = alpha2);
    closure_2 = index;
    const translatedName = closure_1_6(alpha2);
    return phoneCountryCodes.map((code) => {
      const obj = { translatedName, key: "" + closure_2 + "-" + code, country: { code, alpha2, name } };
      return obj;
    });
  }), []);
  let items = [memo, first];
  const memo1 = rows.useMemo(() => {
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
    const obj = { rows: items, sections: null };
    const items1 = [items.length];
    obj.sections = items1;
    return obj;
  }, items);
  rows = memo1.rows;
  let items1 = [onClose, onCountrySelected, rows];
  let obj = { style: tmp3.container, children: null };
  const obj2 = { style: tmp3.searchFieldContainer, children: null };
  const callback = rows.useCallback((arg0, arg1) => {
    const country = tmp.country;
    const obj = {
      start: 0 === arg1,
      end: arg1 === rows.length - 1,
      label: rows[arg1].translatedName,
      trailing: closure_1_7(onCountrySelected(first[14]).Text, { variant: "text-md/semibold", children: country.code }),
      onPress() {
        onCountrySelected(country);
        if (onClose != null) {
          onClose();
        }
      }
    };
    return closure_1_7(onCountrySelected(first[13]).TableRow, obj);
  }, items1);
  obj2.children = closure_7(onCountrySelected(first[15]).SearchField, { size: "md", onChange: tmp4[1] });
  const items2 = [closure_7(View, obj2), ];
  if ("" !== first) {
    if (0 === rows.length) {
      const obj3 = { source: tmp(tmp2[17]), text: null };
      const intl = tmp13(tmp2[18]).intl;
      obj3.text = intl.string(tmp13(tmp2[18]).t.wEHnxW);
      let tmp12Result = closure_7(tmp(tmp2[16]), obj3);
      const tmpResult = tmp(tmp2[16]);
    }
    items2[1] = tmp12Result;
    obj.children = items2;
    return closure_8(View, obj);
  }
  tmp12Result = closure_7(tmp(tmp2[19]), { sections: memo1.sections, renderItem: callback, itemSize: onClose(first[11])(), estimatedListSize: "windowSize", keyboardShouldPersistTaps: "always" });
  const tmp7 = onClose(first[11])();
});