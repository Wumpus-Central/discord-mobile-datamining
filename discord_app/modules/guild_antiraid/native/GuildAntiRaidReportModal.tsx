// === Module 13780: GuildAntiRaidReportModal ===

// Module 13780 (GuildAntiRaidReportModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildReportRaidModalConstants from "GuildReportRaidModalConstants" /* 13781 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, dependencyMap, onCloseModal, raidTypes;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ getReportRaidHelpArticleURL: metroImportDefault, getReportRaidTypeLabel: metroImportAll, REPORT_RAID_OPTIONS: c9 } = GuildReportRaidModalConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const REPORT_RAID = "REPORT_RAID";
let createStyles = createStyles_mod;
let obj = { container: obj2, headerSubtitle: { textAlign: "center", marginTop: 8 }, formBody: { marginTop: 24 }, formRow: { paddingVertical: 2 }, submitButtonContainer: rect };
obj2 = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((raidTypes) => {
  let container;
  let formRow;
  let headerSubtitle;
  let items;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = raidTypes(576);
  const cResult = obj.c(31);
  raidTypes = raidTypes.raidTypes;
  const onChange = raidTypes.onChange;
  const onSubmit = raidTypes.onSubmit;
  const tmp4 = closure_13();
  dependencyMap = tmp4;
  const bottom = onChange(1618)().bottom;
  if (cResult[0] !== tmp4.formRow) {
    const fn = function n(View) {
      const obj = { style: formRow.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: metroImportAll(View) };
      const Text = Text_Text.Text;
      return authStore(Text, obj);
    };
    cResult[0] = tmp4.formRow;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let closure_3 = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      const obj = onChange(formRow[12]);
      obj.openURL(closure_1_7());
    };
    cResult[2] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
  }
  ({ container, headerSubtitle } = tmp4);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const obj2 = { onClick: tmp6 };
    const formatResult = intl.format(raidTypes(1126).t.Hg8Ee7, obj2);
    cResult[3] = formatResult;
    tmp7 = formatResult;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp4.headerSubtitle) {
    const obj3 = { style: headerSubtitle, variant: "text-sm/medium", color: "text-default", children: tmp7 };
    const tmp11 = closure_10(raidTypes(4886).Text, obj3);
    cResult[4] = tmp4.headerSubtitle;
    cResult[5] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp5) {
    if (cResult[7] === onChange) {
      let tmp13;
      let tmp15;
      if (cResult[8] === raidTypes) {
        tmp13 = cResult[9];
      }
      if (cResult[10] !== tmp13) {
        const obj4 = { hasIcons: false, children: tmp13 };
        const tmp17 = closure_10(raidTypes(6074).TableRowGroup, obj4);
        cResult[10] = tmp13;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === tmp4.formBody) {
        let tmp18;
        let tmp23;
        if (cResult[13] === tmp15) {
          tmp18 = cResult[14];
        }
        const sum = bottom + 16;
        if (cResult[15] !== sum) {
          const obj5 = { paddingBottom: sum };
          cResult[15] = sum;
          cResult[16] = obj5;
          tmp23 = obj5;
        } else {
          tmp23 = cResult[16];
        }
        if (cResult[17] === tmp4.submitButtonContainer) {
          let tmp24;
          let tmp25;
          let tmp27;
          if (cResult[18] === tmp23) {
            tmp24 = cResult[19];
          }
          const _Symbol = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(raidTypes(1126).t.geKm7t);
            cResult[20] = stringResult;
            tmp25 = stringResult;
          } else {
            tmp25 = cResult[20];
          }
          if (cResult[21] !== onSubmit) {
            const obj6 = { size: "md", text: tmp25, onPress: onSubmit };
            const tmp29 = closure_10(raidTypes(5594).Button, obj6);
            cResult[21] = onSubmit;
            cResult[22] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[22];
          }
          if (cResult[23] === tmp24) {
            let tmp30;
            if (cResult[24] === tmp27) {
              tmp30 = cResult[25];
            }
            if (cResult[26] === tmp4.container) {
              if (cResult[27] === tmp18) {
                if (cResult[28] === tmp30) {
                  let tmp34;
                  if (cResult[29] === tmp9) {
                    tmp34 = cResult[30];
                  }
                  return tmp34;
                }
              }
            }
            const obj7 = { style: container, children: items };
            items = [tmp9, tmp18, tmp30];
            const tmp37 = closure_11(View, obj7);
            cResult[26] = tmp4.container;
            cResult[27] = tmp18;
            cResult[28] = tmp30;
            cResult[29] = tmp9;
            cResult[30] = tmp37;
            tmp34 = tmp37;
          }
          const obj8 = { style: tmp24, children: tmp27 };
          const tmp33 = closure_10(View, obj8);
          cResult[23] = tmp24;
          cResult[24] = tmp27;
          cResult[25] = tmp33;
          tmp30 = tmp33;
        }
        const items1 = [tmp4.submitButtonContainer, tmp23];
        cResult[17] = tmp4.submitButtonContainer;
        cResult[18] = tmp23;
        cResult[19] = items1;
        tmp24 = items1;
      }
      const obj9 = { style: tmp12, children: tmp15 };
      const tmp21 = closure_10(View, obj9);
      cResult[12] = tmp4.formBody;
      cResult[13] = tmp15;
      cResult[14] = tmp21;
      tmp18 = tmp21;
    }
  }
  const mapped = length.map((item, index) => {
    raidTypes = item;
    const obj = {
      start: 0 === index,
      end: index === length.length - 1,
      label: closure_3(item),
      checked: raidTypes.includes(item),
      onPress() {
        return onChange(item);
      }
    };
    const TableCheckboxRow = raidTypes(formRow[14]).TableCheckboxRow;
    return closure_1_10(TableCheckboxRow, obj, item);
  });
  cResult[6] = tmp5;
  cResult[7] = onChange;
  cResult[8] = raidTypes;
  cResult[9] = mapped;
  tmp13 = mapped;
}) : ((onSubmit) => {
  let Button;
  let TableRowGroup;
  let formRow;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj4;
  let obj7;
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const tmp = closure_13();
  dependencyMap = tmp;
  const items = [tmp];
  const bottom = useSafeAreaInsetsDefault().bottom;
  let closure_3 = react.useCallback((View) => {
    const obj = { style: formRow.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: metroImportAll(View) };
    const Text = Text_Text.Text;
    return authStore(Text, obj);
  }, items);
  let obj = { style: tmp.container, children: items1 };
  const callback = react.useCallback(() => {
    const obj = require("Linking");
    obj.openURL(closure_1_7());
  }, []);
  const obj2 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: intl.format(intl3.t.Hg8Ee7, { onClick: callback }) };
  let Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [closure_10(Text, obj2), , ];
  const obj3 = { style: tmp.formBody, children: closure_10(TableRowGroup, obj4) };
  obj4 = {
    hasIcons: false,
    children: length.map((item, index) => {
      require = item;
      const obj = {
        start: 0 === index,
        end: index === length.length - 1,
        label: closure_3(item),
        checked: require.includes(item),
        onPress() {
          return importDefault(item);
        }
      };
      const TableCheckboxRow = require("TableCheckboxRow").TableCheckboxRow;
      return closure_1_10(TableCheckboxRow, obj, item);
    })
  };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  items1[1] = closure_10(View, obj3);
  const obj5 = { style: items2, children: closure_10(Button, obj7) };
  items2 = [tmp.submitButtonContainer, ];
  const obj6 = { paddingBottom: bottom + 16 };
  items2[1] = obj6;
  obj7 = { size: "md", text: intl2.string(intl3.t.geKm7t), onPress: onSubmit };
  Button = components_Button_Button.Button;
  intl2 = intl3.intl;
  items1[2] = closure_10(View, obj5);
  return closure_11(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onCloseModal) => {
  let closure_3;
  let closure_4;
  let closure_5;
  let first;
  let first1;
  let intl;
  let tmpResult;
  const tmp2 = first1;
  let obj = onCloseModal(first1[9]);
  const cResult = obj.c(14);
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  const top = guildId(first1[10])().top;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  [first1, _asyncToGenerator] = react.useState(first);
  const tmp8 = guildId(tmp2[18])();
  _slicedToArray = tmp8;
  react = react.useRef(false);
  if (cResult[1] === tmp8) {
    if (cResult[2] === guildId) {
      if (cResult[3] === onCloseModal) {
        let tmp9;
        let tmp11;
        if (cResult[4] === first1) {
          tmp9 = cResult[5];
        }
        const tmp10 = guildId(tmp2[20])(tmp9);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function _(arg0) {
            let closure_0 = arg0;
            closure_3((arr) => {
              let found;
              if (arr.includes(closure_0)) {
                found = arr.filter((item) => item !== closure_1_0);
              } else {
                found = [];
                found[HermesBuiltin.arraySpread(found, arr, 0)] = closure_0;
              }
              return found;
            });
          };
          cResult[6] = fn2;
          tmp11 = fn2;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp10) {
          if (cResult[8] === onCloseModal) {
            let tmp12;
            if (cResult[9] === first1) {
              tmp12 = cResult[10];
            }
            if (cResult[11] === tmp12) {
              let tmp14;
              if (cResult[12] === top) {
                tmp14 = cResult[13];
              }
              return tmp14;
            }
            let obj2 = { screens: tmp12, initialRouteName: REPORT_RAID, headerStatusBarHeight: top };
            const tmp17 = closure_10(onCloseModal(tmp2[21]).Navigator, obj2);
            cResult[11] = tmp12;
            cResult[12] = top;
            cResult[13] = tmp17;
            tmp14 = tmp17;
          }
        }
        let closure_1 = tmp11;
        let closure_2 = tmp10;
        let obj3 = {};
        let obj4 = {
          ignoreKeyboard: true,
          title: intl.string(tmp(tmp2[13]).t.uYPGsS),
          headerLeft: tmpResult.getHeaderCloseButton(onCloseModal),
          render() {
                  const obj = { raidTypes, onChange, onSubmit };
                  return closure_2_10(closure_2_14, obj);
                }
        };
        intl = tmp(tmp2[13]).intl;
        obj3[REPORT_RAID] = obj4;
        cResult[7] = tmp10;
        cResult[8] = onCloseModal;
        cResult[9] = first1;
        cResult[10] = obj3;
        tmp12 = obj3;
        tmpResult = onCloseModal(tmp2[17]);
      }
    }
  }
  let closure_0 = _asyncToGenerator(async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (!ref.current) {
            tmp18.current = true;
            const obj2 = tmp3(first1[19]);
            const result = obj2.trackReportRaidViewed(c1, c2);
            const obj3 = tmp3(first1[19]);
            obj3.handleReportRaid(c1);
            const intl = tmp3(first1[13]).intl;
            c1 = 1;
            c2 = 1;
            const obj6 = { value: closure_1_4(intl.string(tmp3(first1[13]).t["54qByS"])), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          tmp3();
        }
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp14) {
        c2 = 3;
        throw tmp14;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[1] = tmp8;
  cResult[2] = guildId;
  cResult[3] = onCloseModal;
  cResult[4] = first1;
  cResult[5] = fn;
  tmp9 = fn;
}) : ((onCloseModal) => {
  let closure_3;
  let closure_4;
  let closure_5;
  let first;
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  first = undefined;
  _asyncToGenerator = undefined;
  react = undefined;
  const top = guildId(first[10])().top;
  [first, _asyncToGenerator] = react.useState([]);
  _slicedToArray = guildId(first[18])();
  react = react.useRef(false);
  const tmp3 = guildId(first[20]);
  const tmp3Result = tmp3(_asyncToGenerator(async () => {
    let c2;
    let closure_0;
    if (first === 2) {
      first = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        first = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            first = 3;
            throw value;
          } else if (arg0 === 2) {
            first = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (!ref.current) {
            tmp19.current = true;
            const obj2 = tmp(first[19]);
            const result = obj2.trackReportRaidViewed(guildId, first);
            const obj3 = tmp(first[19]);
            obj3.handleReportRaid(guildId);
            const intl = tmp(first[13]).intl;
            c1 = 1;
            first = 1;
            const obj6 = { value: closure_4(intl.string(tmp(first[13]).t["54qByS"])), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          first = 3;
          throw value;
        } else if (arg0 === 2) {
          first = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0();
        }
        first = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp15) {
        first = 3;
        throw tmp15;
      }
    }
  }));
  let closure_6 = tmp3Result;
  const items = [tmp3Result, onCloseModal, first];
  const memo = react.useMemo(() => {
    let intl;
    let obj3;
    let closure_0 = first;
    function onChange(arg0) {
      let closure_0 = arg0;
      closure_1_3((arr) => {
        let found;
        if (arr.includes(closure_0)) {
          found = arr.filter((item) => item !== closure_1_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(found, arr, 0)] = closure_0;
        }
        return found;
      });
    }
    let closure_2 = closure_6;
    let obj = {};
    const obj2 = {
      ignoreKeyboard: true,
      title: intl.string(intl3.t.uYPGsS),
      headerLeft: obj3.getHeaderCloseButton(onCloseModal),
      render() {
        const obj = { raidTypes, onChange, onSubmit };
        return closure_2_10(closure_2_14, obj);
      }
    };
    intl = intl3.intl;
    obj[REPORT_RAID] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { screens: memo, initialRouteName: REPORT_RAID, headerStatusBarHeight: top };
  return closure_10(onCloseModal(first[21]).Navigator, obj);
});
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default tmp5;