// === Module 14175: GuildAntiRaidReportModal ===

// Module 14175 (GuildAntiRaidReportModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import TableRowGroup from "TableRowGroup" /* 6264 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const GuildReportRaidModalConstants = fn(14176);
({ getReportRaidHelpArticleURL: closure_7, getReportRaidTypeLabel: closure_8, REPORT_RAID_OPTIONS: closure_9 } = GuildReportRaidModalConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const REPORT_RAID = "REPORT_RAID";
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 }, headerSubtitle: { textAlign: "center", marginTop: 8 }, formBody: { marginTop: 24 }, formRow: { paddingVertical: 2 }, submitButtonContainer: null };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.submitButtonContainer = rect;
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReportModal(raidTypes) {
  const cResult = raidTypes(576).c(31);
  raidTypes = raidTypes.raidTypes;
  const onChange = raidTypes.onChange;
  const onSubmit = raidTypes.onSubmit;
  const tmp4 = closure_13();
  dependencyMap = tmp4;
  if (cResult[0] !== tmp4.formRow) {
    const fn = function n(arg0) {
      return collapsed(Text_Text.Text, { style: formRow.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: closure_2_8(arg0) });
    };
    cResult[0] = tmp4.formRow;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  closure_3 = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      onChange(formRow[12]).openURL(closure_1_7());
    };
    cResult[2] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
  }
  ({ container, headerSubtitle } = tmp4);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const obj2 = { onClick: tmp6 };
    const formatResult = intl.format(tmp(1126).t.Hg8Ee7, obj2);
    cResult[3] = formatResult;
    let tmp7 = formatResult;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp4.headerSubtitle) {
    const obj3 = { style: headerSubtitle, variant: "text-sm/medium", color: "text-default", children: tmp7 };
    const tmp11 = closure_10(tmp(5088).Text, obj3);
    cResult[4] = tmp4.headerSubtitle;
    cResult[5] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp5) {
    if (cResult[7] === onChange) {
      if (cResult[8] === raidTypes) {
        let tmp13 = cResult[9];
      }
      if (cResult[10] !== tmp13) {
        const obj4 = { hasIcons: false, children: tmp13 };
        const tmp17 = closure_10(tmp(6264).TableRowGroup, obj4);
        cResult[10] = tmp13;
        cResult[11] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === tmp4.formBody) {
        if (cResult[13] === tmp15) {
          let tmp18 = cResult[14];
        }
        const sum = onChange(1631)().bottom + 16;
        if (cResult[15] !== sum) {
          const obj5 = { paddingBottom: sum };
          cResult[15] = sum;
          cResult[16] = obj5;
          let tmp23 = obj5;
        } else {
          tmp23 = cResult[16];
        }
        if (cResult[17] === tmp4.submitButtonContainer) {
          if (cResult[18] === tmp23) {
            let tmp24 = cResult[19];
          }
          const _Symbol = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(tmp(1126).t.geKm7t);
            cResult[20] = stringResult;
            let tmp25 = stringResult;
          } else {
            tmp25 = cResult[20];
          }
          if (cResult[21] !== onSubmit) {
            const obj6 = { size: "md", text: tmp25, onPress: onSubmit };
            const tmp29 = closure_10(tmp(5379).Button, obj6);
            cResult[21] = onSubmit;
            cResult[22] = tmp29;
            let tmp27 = tmp29;
          } else {
            tmp27 = cResult[22];
          }
          if (cResult[23] === tmp24) {
            if (cResult[24] === tmp27) {
              let tmp30 = cResult[25];
            }
            if (cResult[26] === tmp4.container) {
              if (cResult[27] === tmp18) {
                if (cResult[28] === tmp30) {
                  if (cResult[29] === tmp9) {
                    let tmp34 = cResult[30];
                  }
                  return tmp34;
                }
              }
            }
            const obj7 = { style: container, children: null };
            const items = [tmp9, tmp18, tmp30];
            obj7.children = items;
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
    closure_0 = item;
    return closure_1_10(raidTypes(formRow[14]).TableCheckboxRow, {
      start: 0 === index,
      end: index === length.length - 1,
      label: closure_3(item),
      checked: closure_0.includes(item),
      onPress() {
        return onChange(closure_0);
      }
    }, item);
  });
  cResult[6] = tmp5;
  cResult[7] = onChange;
  cResult[8] = raidTypes;
  cResult[9] = mapped;
  tmp13 = mapped;
  const obj = raidTypes(576);
}) : (function ReportModal(onSubmit) {
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  const tmp = closure_13();
  dependencyMap = tmp;
  const items = [tmp];
  closure_3 = noop.useCallback((arg0) => collapsed(Text_Text.Text, { style: formRow.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: closure_2_8(arg0) }), items);
  const obj = { style: tmp.container, children: null };
  const callback = noop.useCallback(() => {
    require("Linking").openURL(closure_1_7());
  }, []);
  const obj2 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.Hg8Ee7, { onClick: callback });
  const items1 = [closure_10(Text_Text.Text, obj2), , ];
  const obj3 = {
    style: tmp.formBody,
    children: closure_10(TableRowGroup.TableRowGroup, {
      hasIcons: false,
      children: length.map((item, index) => {
        closure_0 = item;
        return closure_1_10(require("TableCheckboxRow").TableCheckboxRow, {
          start: 0 === index,
          end: index === length.length - 1,
          label: closure_3(item),
          checked: closure_0.includes(item),
          onPress() {
            return importDefault(closure_0);
          }
        }, item);
      })
    })
  };
  items1[1] = closure_10(View, obj3);
  const obj5 = { style: null, children: null };
  const items2 = [tmp.submitButtonContainer, ];
  const obj4 = {
    hasIcons: false,
    children: length.map((item, index) => {
      closure_0 = item;
      return closure_1_10(require("TableCheckboxRow").TableCheckboxRow, {
        start: 0 === index,
        end: index === length.length - 1,
        label: closure_3(item),
        checked: closure_0.includes(item),
        onPress() {
          return importDefault(closure_0);
        }
      }, item);
    })
  };
  items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  obj5.style = items2;
  const obj7 = { size: "md", text: null, onPress: null };
  const intl2 = util.intl;
  obj7.text = intl2.string(util.t.geKm7t);
  obj7.onPress = onSubmit.onSubmit;
  obj5.children = closure_10(components_Button_Button.Button, obj7);
  items1[2] = closure_10(View, obj5);
  obj.children = items1;
  return closure_11(View, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildAntiRaidReportModal(onCloseModal) {
  const cResult = require("c").c(14);
  onCloseModal = onCloseModal.onCloseModal;
  _require = onCloseModal;
  const guildId = onCloseModal.guildId;
  const top = guildId(first1[10])().top;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  [first1, asyncGeneratorStep] = noop.useState(first);
  const tmp8 = guildId(first1[18])();
  _slicedToArray = tmp8;
  noop = noop.useRef(false);
  if (cResult[1] === tmp8) {
    if (cResult[2] === guildId) {
      if (cResult[3] === onCloseModal) {
        if (cResult[4] === first1) {
          let tmp9 = cResult[5];
        }
        const tmp10 = tmp4(tmp2[20])(tmp9);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          function handleChange(arg0) {
            closure_0 = arg0;
            closure_3((arr) => {
              if (arr.includes(closure_0)) {
                let found = arr.filter((item) => item !== closure_1_0);
              } else {
                found = [];
                found[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
              }
              return found;
            });
          }
          cResult[6] = handleChange;
          let tmp11 = handleChange;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp10) {
          if (cResult[8] === onCloseModal) {
            if (cResult[9] === first1) {
              let tmp12 = cResult[10];
            }
            if (cResult[11] === tmp12) {
              if (cResult[12] === top) {
                let tmp14 = cResult[13];
              }
              return tmp14;
            }
            let obj2 = { screens: tmp12, initialRouteName: REPORT_RAID, headerStatusBarHeight: top };
            const tmp17 = closure_10(tmp(tmp2[21]).Navigator, obj2);
            cResult[11] = tmp12;
            cResult[12] = top;
            cResult[13] = tmp17;
            tmp14 = tmp17;
          }
        }
        closure_129_0 = first1;
        closure_129_1 = tmp11;
        closure_129_2 = tmp10;
        const obj3 = {};
        let obj4 = { ignoreKeyboard: true, title: null, headerLeft: null, render: null };
        let intl = tmp(tmp2[13]).intl;
        obj4.title = intl.string(tmp(tmp2[13]).t.uYPGsS);
        obj4.headerLeft = tmp(tmp2[17]).getHeaderCloseButton(onCloseModal);
        obj4.render = function render() {
          return closure_2_10(closure_2_14, { raidTypes, onChange: handleChange, onSubmit });
        };
        obj3[REPORT_RAID] = obj4;
        cResult[7] = tmp10;
        cResult[8] = onCloseModal;
        cResult[9] = first1;
        cResult[10] = obj3;
        tmp12 = obj3;
        const tmpResult = tmp(tmp2[17]);
      }
    }
  }
  _require = asyncGeneratorStep(async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: "+51" };
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
          } else if (ref.current) {
            c2 = 3;
          } else {
            tmp20.current = true;
            const result = tmp4(first1[19]).trackReportRaidViewed(c1, c2);
            const obj2 = tmp4(first1[19]);
            tmp4(first1[19]).handleReportRaid(c1);
            const intl = tmp4(first1[13]).intl;
            c1 = 1;
            c2 = 1;
            const obj6 = { value: closure_1_4(intl.string(tmp4(first1[13]).t["54qByS"])), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          tmp4();
        }
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp15) {
        c2 = tmp;
        throw tmp15;
      }
    }
  });
  function t2() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[1] = tmp8;
  cResult[2] = guildId;
  cResult[3] = onCloseModal;
  cResult[4] = first1;
  cResult[5] = t2;
  tmp9 = t2;
  let obj = require("c");
}) : (function GuildAntiRaidReportModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  first = undefined;
  asyncGeneratorStep = undefined;
  noop = undefined;
  [first, asyncGeneratorStep] = noop.useState([]);
  _slicedToArray = guildId(first[18])();
  noop = noop.useRef(false);
  const tmp3Result = guildId(first[20])(asyncGeneratorStep(async () => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (ref.current) {
            dependencyMap = 3;
          } else {
            tmp21.current = true;
            const result = tmp2(11386).trackReportRaidViewed(guildId, first);
            const obj2 = tmp2(11386);
            tmp2(11386).handleReportRaid(guildId);
            const intl = tmp2(1126).intl;
            c1 = 1;
            dependencyMap = 1;
            const obj6 = { value: closure_4(intl.string(tmp2(1126).t["54qByS"])), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0();
        }
        dependencyMap = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  }));
  closure_6 = tmp3Result;
  const items = [tmp3Result, onCloseModal, first];
  const memo = noop.useMemo(() => {
    const raidTypes = first;
    function handleChange(arg0) {
      closure_0 = arg0;
      closure_1_3((arr) => {
        if (arr.includes(closure_0)) {
          let found = arr.filter((item) => item !== closure_1_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
        }
        return found;
      });
    }
    const onSubmit = closure_6;
    const obj = {};
    const obj2 = { ignoreKeyboard: true, title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.uYPGsS);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onCloseModal);
    obj2.render = function render() {
      return closure_2_10(closure_2_14, { raidTypes, onChange: handleChange, onSubmit });
    };
    obj[REPORT_RAID] = obj2;
    return obj;
  }, items);
  const tmp3 = guildId(first[20]);
  return closure_10(onCloseModal(first[21]).Navigator, { screens: memo, initialRouteName: REPORT_RAID, headerStatusBarHeight: guildId(first[10])().top });
});