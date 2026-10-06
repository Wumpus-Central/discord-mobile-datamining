// discord_app/modules/safety_hub/native/SafetyHubViolationsContainer.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import WarningIcon2 from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import SafetyHubUtils from "../SafetyHubUtils.tsx";
import SafetyHubModels from "../SafetyHubModels.tsx";
import TouchableHitBoxDefault from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import ChevronSmallDownIcon2 from "../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import useSafetyHubClassifications from "../hooks/useSafetyHubClassifications.tsx";
import ChevronSmallUpIcon from "../../../design/components/Icon/native/redesign/generated/ChevronSmallUpIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import SafetyHubStore from "../SafetyHubStore.tsx";
import SafetyHubConstants from "../SafetyHubConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, is_dsa_eligible, timestamp;

let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let unpackModuleId;
function ClassificationDetail(classification) {
  let items2;
  let items3;
  let obj4;
  let obj5;
  let tmp2Result;
  let tmp8Result;
  classification = classification.classification;
  const tmp = closure_14();
  const id = classification.id;
  const description = classification.description;
  const guild_metadata = classification.guild_metadata;
  let obj = description(guild_metadata[18]);
  const extractTimestampResult = obj.extractTimestamp(id);
  let obj2 = id(guild_metadata[19]);
  const isNewClassification = obj2.useIsNewClassification(classification);
  const items = [description, guild_metadata];
  const items1 = [tmp.detailContainerOuter];
  let prop = null;
  const memo = react.useMemo(() => {
    let formatResult;
    let name;
    let name1;
    function hook(children, arg1) {
      const obj = { variant: "heading-md/extrabold", children };
      return closure_1_11(id(guild_metadata[13]).Text, obj, arg1);
    }
    let obj = { description, descriptionHook: hook };
    if (null != guild_metadata) {
      let format2Result;
      let member_type;
      if (guild_metadata != null) {
        member_type = guild_metadata.member_type;
      }
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = intl4.intl;
        const format2 = intl3.format;
        const obj2 = { guildName: name };
        const Lb0HVv = intl4.t.Lb0HVv;
        const merged = Object.assign(obj);
        name = undefined;
        if (guild_metadata != null) {
          name = guild_metadata.name;
        }
        format2Result = format2(Lb0HVv, obj2);
      } else {
        const intl2 = intl4.intl;
        const format = intl2.format;
        const obj3 = { classification_type: tmp, classificationHook: hook, guildName: name1 };
        name1 = undefined;
        const rmpEPD = intl4.t.rmpEPD;
        if (guild_metadata != null) {
          name1 = guild_metadata.name;
        }
        format2Result = format(rmpEPD, obj3);
      }
      formatResult = format2Result;
    } else {
      const intl = intl4.intl;
      formatResult = intl.format(intl4.t.QY4g5t, obj);
    }
    return formatResult;
  }, items);
  const tmp2 = description;
  const tmp5 = id;
  if (isNewClassification) {
    prop = tmp.detailContainerOuterNew;
  }
  let obj3 = { style: items1, children: closure_11(tmp2Result, obj4) };
  items1[1] = prop;
  obj4 = {
    onPress() {
      const obj = ModalActionCreatorsDefault;
      const obj2 = { classificationId: id, source: metroImportAll.StandingTab };
      obj.pushLazy(asyncRequire(11503, dependencyMap.paths), obj2);
    },
    children: closure_12(closure_6, obj5),
  };
  obj5 = { style: items2, children: items3 };
  items2 = [tmp.detailContainerInner];
  tmp2Result = tmp2(guild_metadata[16]);
  if (isNewClassification) {
    tmp8Result = closure_11(closure_19, {});
  } else {
    const obj6 = { timestamp: extractTimestampResult };
    tmp8Result = closure_11(closure_18, obj6);
  }
  items3 = [tmp8Result, closure_11(tmp5(guild_metadata[13]).Text, { variant: "heading-md/normal", children: memo })];
  return closure_11(closure_6, obj3);
}
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ SafetyHubAnalyticsActionSource: metroImportAll, SafetyHubAnalyticsActions: c9 } = SafetyHubConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  connectedContainer: obj2,
  container: obj3,
  header: obj4,
  detailContainerOuter: obj5,
  detailContainerOuterNew: obj6,
  detailContainerInner: obj7,
  iconBackground: obj8,
  chevron: { marginLeft: "auto" },
  incidentDate: obj9,
  incidentDateNew: obj10,
  newText: { textTransform: "capitalize" },
  emptyState: obj11,
  separator: size,
  moreButtonContainer: { display: "flex", alignItems: "center", justifyContent: "center" },
  moreButton: size1,
  headerTextContainer: { flexShrink: 0, flexGrow: 1, gap: 2 },
};
obj2 = { display: "flex", marginTop: nativeDefault.space.PX_12, marginBottom: 36, gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_8,
  width: "100%",
};
obj4 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16, width: "100%" };
obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
  marginTop: 10,
};
obj6 = { borderColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, borderWidth: 1, borderStyle: "solid" };
obj7 = { display: "flex", gap: nativeDefault.space.PX_8 };
obj8 = {
  display: "flex",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  justifyContent: "center",
  alignItems: "center",
  padding: 6,
};
obj9 = {
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.md,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj10 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
};
obj11 = {
  display: "flex",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: nativeDefault.radii.md,
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_24,
};
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 10 };
size1 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottomEndRadius: nativeDefault.radii.xs,
  borderBottomStartRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: 29,
  width: 207,
};
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let ICON_MUTED;
      let count;
      let items3;
      let items4;
      let items5;
      let onClick;
      let opened;
      let status;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(33);
      ({ count, onClick, opened, status } = arg0);
      const tmp4 = closure_14();
      if (cResult[0] !== tmp4.header) {
        const items = [tmp4.header];
        cResult[0] = tmp4.header;
        cResult[1] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp4.iconBackground) {
        const items1 = [tmp4.iconBackground];
        cResult[2] = tmp4.iconBackground;
        cResult[3] = items1;
        tmp6 = items1;
      } else {
        tmp6 = cResult[3];
      }
      const colors = nativeDefault.colors;
      if ("active" === status) {
        ICON_MUTED = colors.INTERACTIVE_TEXT_DEFAULT;
        tmp9 = importDefault;
      } else {
        ICON_MUTED = colors.ICON_MUTED;
        tmp9 = importDefault;
      }
      if (cResult[4] !== ICON_MUTED) {
        const obj2 = { color: ICON_MUTED, size: "xs" };
        const tmp12 = unpackModuleId(WarningIcon2.WarningIcon, obj2);
        cResult[4] = ICON_MUTED;
        cResult[5] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        let tmp13;
        let tmp15;
        let formatToPlainStringResult;
        if (cResult[7] === tmp10) {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== tmp4.headerTextContainer) {
          const items2 = [tmp4.headerTextContainer];
          cResult[9] = tmp4.headerTextContainer;
          cResult[10] = items2;
          tmp15 = items2;
        } else {
          tmp15 = cResult[10];
        }
        if (cResult[11] === count) {
          let tmp16;
          let tmp18;
          let tmp21;
          let tmp23;
          if (cResult[12] === status) {
            tmp16 = cResult[13];
          }
          if (cResult[14] !== tmp16) {
            const obj3 = { variant: "heading-sm/semibold", children: tmp16 };
            const tmp20 = unpackModuleId(Text_Text.Text, obj3);
            cResult[14] = tmp16;
            cResult[15] = tmp20;
            tmp18 = tmp20;
          } else {
            tmp18 = cResult[15];
          }
          if (cResult[16] !== status) {
            let stringResult;
            const intl2 = intl4.intl;
            const string = intl2.string;
            const t2 = intl4.t;
            if ("active" === status) {
              stringResult = string(t2.XJ2YVR);
            } else {
              stringResult = string(t2.SzGV0g);
            }
            cResult[16] = status;
            cResult[17] = stringResult;
            tmp21 = stringResult;
          } else {
            tmp21 = cResult[17];
          }
          if (cResult[18] !== tmp21) {
            const obj4 = { variant: "text-xxs/normal", color: "text-muted", children: tmp21 };
            const tmp25 = unpackModuleId(Text_Text.Text, obj4);
            cResult[18] = tmp21;
            cResult[19] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[19];
          }
          if (cResult[20] === tmp23) {
            if (cResult[21] === tmp15) {
              let tmp26;
              let ChevronSmallDownIcon;
              if (cResult[22] === tmp18) {
                tmp26 = cResult[23];
              }
              if (cResult[24] === opened) {
                let tmp30;
                if (cResult[25] === tmp4.chevron) {
                  tmp30 = cResult[26];
                }
                if (cResult[27] === onClick) {
                  if (cResult[28] === tmp5) {
                    if (cResult[29] === tmp26) {
                      if (cResult[30] === tmp30) {
                        let tmp33;
                        if (cResult[31] === tmp13) {
                          tmp33 = cResult[32];
                        }
                        return tmp33;
                      }
                    }
                  }
                }
                const obj5 = { onPress: onClick, style: tmp5, children: items3 };
                items3 = [tmp13, tmp26, tmp30];
                const tmp35 = closure_12(tmp9(9455), obj5);
                cResult[27] = onClick;
                cResult[28] = tmp5;
                cResult[29] = tmp26;
                cResult[30] = tmp30;
                cResult[31] = tmp13;
                cResult[32] = tmp35;
                tmp33 = tmp35;
              }
              if (opened) {
                ChevronSmallDownIcon = ChevronSmallUpIcon.ChevronSmallUpIcon;
              } else {
                ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
              }
              const obj6 = { size: "md", style: items4 };
              items4 = [tmp4.chevron];
              const tmp31Result = unpackModuleId(ChevronSmallDownIcon, obj6);
              cResult[24] = opened;
              cResult[25] = tmp4.chevron;
              cResult[26] = tmp31Result;
              tmp30 = tmp31Result;
            }
          }
          const obj7 = { style: tmp15, children: items5 };
          items5 = [tmp18, tmp23];
          const tmp29 = closure_12(metroRequire, obj7);
          cResult[20] = tmp23;
          cResult[21] = tmp15;
          cResult[22] = tmp18;
          cResult[23] = tmp29;
          tmp26 = tmp29;
        }
        const intl = intl4.intl;
        const formatToPlainString = intl.formatToPlainString;
        const t = intl4.t;
        if ("active" === status) {
          const IeV2oY = t.IeV2oY;
          const obj8 = { count: count.toString() };
          formatToPlainStringResult = formatToPlainString(IeV2oY, obj8);
        } else {
          const fZAHBT = t.fZAHBT;
          const obj9 = { count: count.toString() };
          formatToPlainStringResult = formatToPlainString(fZAHBT, obj9);
        }
        cResult[11] = count;
        cResult[12] = status;
        cResult[13] = formatToPlainStringResult;
        tmp16 = formatToPlainStringResult;
      }
      const tmp14 = unpackModuleId(metroRequire, { style: tmp6, children: tmp10 });
      cResult[6] = tmp6;
      cResult[7] = tmp10;
      cResult[8] = tmp14;
      tmp13 = tmp14;
    }
  : (count) => {
      let ChevronSmallDownIcon;
      let WarningIcon;
      let formatToPlainStringResult;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj3;
      let onClick;
      let opened;
      let status;
      let stringResult;
      ({ onClick, opened, status } = count);
      const tmp = closure_14();
      const obj = { onPress: onClick, style: items, children: items2 };
      items = [tmp.header];
      const obj2 = { style: items1, children: unpackModuleId(WarningIcon, obj3) };
      items1 = [tmp.iconBackground];
      const tmp4 = TouchableHitBoxDefault;
      WarningIcon = WarningIcon2.WarningIcon;
      const colors = nativeDefault.colors;
      obj3 = { color: "active" === status ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_MUTED, size: "xs" };
      items2 = [unpackModuleId(metroRequire, obj2), ,];
      const obj4 = { style: items3, children: items4 };
      items3 = [tmp.headerTextContainer];
      const Text = Text_Text.Text;
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = intl4.t;
      if ("active" === status) {
        const IeV2oY = t.IeV2oY;
        const obj5 = { count: count.count.toString() };
        formatToPlainStringResult = formatToPlainString(IeV2oY, obj5);
      } else {
        const fZAHBT = t.fZAHBT;
        const obj6 = { count: count.count.toString() };
        formatToPlainStringResult = formatToPlainString(fZAHBT, obj6);
      }
      items4 = [unpackModuleId(Text, { variant: "heading-sm/semibold", children: formatToPlainStringResult })];
      const Text2 = Text_Text.Text;
      const intl2 = intl4.intl;
      const string = intl2.string;
      const t2 = intl4.t;
      if ("active" === status) {
        stringResult = string(t2.XJ2YVR);
      } else {
        stringResult = string(t2.SzGV0g);
      }
      items4[1] = unpackModuleId(Text2, { variant: "text-xxs/normal", color: "text-muted", children: stringResult });
      items2[1] = closure_12(metroRequire, obj4);
      if (opened) {
        ChevronSmallDownIcon = ChevronSmallUpIcon.ChevronSmallUpIcon;
      } else {
        ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
      }
      const obj7 = { size: "md", style: items5 };
      items5 = [tmp.chevron];
      items2[2] = unpackModuleId(ChevronSmallDownIcon, obj7);
      return closure_12(tmp4, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let intl;
      let intl2;
      let items1;
      let tmp12;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(6);
      const tmp4 = closure_14();
      if (cResult[0] !== tmp4.emptyState) {
        const items = [tmp4.emptyState];
        cResult[0] = tmp4.emptyState;
        cResult[1] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-sm/extrabold", children: intl.string(intl4.t.reLFaV) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        const tmp8 = unpackModuleId(Text, obj2);
        cResult[2] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-xs/normal", children: intl2.string(intl4.t.ERdH1o) };
        const Text2 = Text_Text.Text;
        intl2 = intl4.intl;
        const tmp11 = unpackModuleId(Text2, obj3);
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj4 = { style: tmp5, children: items1 };
        items1 = [tmp6, tmp9];
        const tmp15 = closure_12(metroRequire, obj4);
        cResult[4] = tmp5;
        cResult[5] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[5];
      }
      return tmp12;
    }
  : () => {
      let intl;
      let intl2;
      let items;
      let items1;
      const obj = { style: items, children: items1 };
      items = [closure_14().emptyState];
      const obj2 = { variant: "heading-sm/extrabold", children: intl.string(intl4.t.reLFaV) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items1 = [unpackModuleId(Text, obj2)];
      const obj3 = { variant: "text-xs/normal", children: intl2.string(intl4.t.ERdH1o) };
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items1[1] = unpackModuleId(Text2, obj3);
      return closure_12(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let intl;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(5);
      const tmp4 = closure_14();
      if (cResult[0] !== tmp4.emptyState) {
        const items = [tmp4.emptyState];
        cResult[0] = tmp4.emptyState;
        cResult[1] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-xs/normal", children: intl.string(intl4.t.RV3AXf) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        const tmp8 = unpackModuleId(Text, obj2);
        cResult[2] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        const obj3 = { style: tmp5, children: tmp6 };
        const tmp12 = unpackModuleId(metroRequire, obj3);
        cResult[3] = tmp5;
        cResult[4] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  : () => {
      let Text;
      let intl;
      let items;
      let obj2;
      const obj = { style: items, children: unpackModuleId(Text, obj2) };
      items = [closure_14().emptyState];
      obj2 = { variant: "text-xs/normal", children: intl.string(intl4.t.RV3AXf) };
      Text = Text_Text.Text;
      intl = intl4.intl;
      return unpackModuleId(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (timestamp) => {
      let tmp5;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(7);
      timestamp = timestamp.timestamp;
      const tmp4 = closure_14();
      const incidentDate = tmp4.incidentDate;
      if (cResult[0] !== timestamp) {
        const tmpResult = SafetyHubUtils;
        const classificationRelativeIncidentTime = tmpResult.getClassificationRelativeIncidentTime(timestamp);
        cResult[0] = timestamp;
        cResult[1] = classificationRelativeIncidentTime;
        tmp5 = classificationRelativeIncidentTime;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        const obj2 = { variant: "text-xs/medium", children: tmp5 };
        const tmp9 = unpackModuleId(Text_Text.Text, obj2);
        cResult[2] = tmp5;
        cResult[3] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp4.incidentDate) {
        let tmp10;
        if (cResult[5] === tmp7) {
          tmp10 = cResult[6];
        }
        return tmp10;
      }
      const tmp11 = unpackModuleId(metroRequire, { style: incidentDate, children: tmp7 });
      cResult[4] = tmp4.incidentDate;
      cResult[5] = tmp7;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (timestamp) => {
      let Text;
      let obj2;
      let obj3;
      timestamp = timestamp.timestamp;
      const obj = { style: closure_14().incidentDate, children: unpackModuleId(Text, obj2) };
      obj2 = { variant: "text-xs/medium", children: obj3.getClassificationRelativeIncidentTime(timestamp) };
      Text = Text_Text.Text;
      obj3 = SafetyHubUtils;
      return unpackModuleId(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(9);
      const tmp4 = closure_14();
      if (cResult[0] === tmp4.incidentDate) {
        let tmp5;
        let tmp7;
        let tmp9;
        if (cResult[1] === tmp4.incidentDateNew) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        const newText = tmp4.newText;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult = intl.string(intl4.t.QKMRC4);
          cResult[3] = stringResult;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4.newText) {
          const obj2 = { variant: "text-xs/medium", color: "text-overlay-light", style: newText, children: tmp7 };
          const tmp11 = unpackModuleId(Text_Text.Text, obj2);
          cResult[4] = tmp4.newText;
          cResult[5] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          let tmp12;
          if (cResult[7] === tmp9) {
            tmp12 = cResult[8];
          }
          return tmp12;
        }
        const obj3 = { style: tmp5, children: tmp9 };
        const tmp15 = unpackModuleId(metroRequire, obj3);
        cResult[6] = tmp5;
        cResult[7] = tmp9;
        cResult[8] = tmp15;
        tmp12 = tmp15;
      }
      const items = [,];
      ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp4);
      cResult[0] = tmp4.incidentDate;
      cResult[1] = tmp4.incidentDateNew;
      cResult[2] = items;
      tmp5 = items;
    }
  : () => {
      let Text;
      let intl;
      let items;
      let obj2;
      const tmp = closure_14();
      const obj = { style: items, children: unpackModuleId(Text, obj2) };
      items = [,];
      ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp);
      obj2 = {
        variant: "text-xs/medium",
        color: "text-overlay-light",
        style: tmp.newText,
        children: intl.string(intl4.t.QKMRC4),
      };
      Text = Text_Text.Text;
      intl = intl4.intl;
      return unpackModuleId(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let classifications;
      let closure_1;
      let isDsaEligible;
      let items2;
      let opened;
      let safetyHubAccountStanding;
      let stateFromStores;
      let status;
      let tmp10;
      let tmp11;
      let tmp8;
      let obj = opened(576);
      const cResult = obj.c(31);
      ({ status, classifications } = arg0);
      const tmp4 = closure_14();
      const tmp5 = safetyHubAccountStanding(stateFromStores.useState(false), 2);
      const tmp = opened;
      opened = tmp5[0];
      importDefault = tmp5[1];
      [tmp8, dependencyMap] = safetyHubAccountStanding(stateFromStores.useState(3), 2);
      safetyHubAccountStanding(stateFromStores.useState(3), 2);
      const obj3 = opened(11507);
      safetyHubAccountStanding = obj3.useSafetyHubAccountStanding();
      const obj2 = stateFromStores;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        const fn = function x() {
          return isDsaEligible.getIsDsaEligible();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = items;
        tmp11 = fn;
      } else {
        [tmp10, tmp11] = cResult;
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
      if (cResult[2] === classifications) {
        let tmp14;
        if (cResult[3] === tmp8) {
          tmp14 = cResult[4];
        }
        let closure_5 = tmp14;
        if (cResult[5] === safetyHubAccountStanding.state) {
          if (cResult[6] === tmp14) {
            if (cResult[7] === stateFromStores) {
              let tmp16;
              let tmp17;
              let tmp19;
              let tmp20;
              if (cResult[8] === opened) {
                tmp16 = cResult[9];
                tmp17 = cResult[10];
              }
              const effect = obj2.useEffect(tmp16, tmp17);
              const num9 = 3;
              class L {
                constructor() {
                  if (first) {
                    const obj = {
                      action: React4.ViewViolationsDropdown,
                      account_standing: safetyHubAccountStanding.state,
                      classification_ids: closure_5.map((id) => Number(id.id)),
                      source: metroImportAll.StandingTab,
                      is_violative_content_shown: false,
                      is_dsa_eligible: stateFromStores,
                    };
                    const track = AnalyticsUtilsDefault.track;
                    const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
                    AnalyticsUtilsDefault;
                    track(SAFETY_HUB_ACTION, obj);
                  }
                }
              }
              if (cResult[11] !== tmp4.container) {
                const items1 = [tmp4.container];
                class L {
                  constructor() {
                    if (first) {
                      const obj = {
                        action: React4.ViewViolationsDropdown,
                        account_standing: safetyHubAccountStanding.state,
                        classification_ids: closure_5.map((id) => Number(id.id)),
                        source: metroImportAll.StandingTab,
                        is_violative_content_shown: false,
                        is_dsa_eligible: stateFromStores,
                      };
                      const track = AnalyticsUtilsDefault.track;
                      const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
                      AnalyticsUtilsDefault;
                      track(SAFETY_HUB_ACTION, obj);
                    }
                  }
                }
                cResult[12] = items1;
                tmp19 = items1;
              } else {
                tmp19 = cResult[12];
              }
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function z() {
                  return closure_1((arg0) => !arg0);
                };
                cResult[13] = fn2;
                class L {
                  constructor() {
                    if (first) {
                      const obj = {
                        action: React4.ViewViolationsDropdown,
                        account_standing: safetyHubAccountStanding.state,
                        classification_ids: closure_5.map((id) => Number(id.id)),
                        source: metroImportAll.StandingTab,
                        is_violative_content_shown: false,
                        is_dsa_eligible: stateFromStores,
                      };
                      const track = AnalyticsUtilsDefault.track;
                      const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
                      AnalyticsUtilsDefault;
                      track(SAFETY_HUB_ACTION, obj);
                    }
                  }
                }
              } else {
                tmp20 = cResult[13];
              }
              if (cResult[14] === classifications.length) {
                if (cResult[15] === opened) {
                  let tmp21;
                  if (cResult[16] === status) {
                    tmp21 = cResult[17];
                  }
                  if (cResult[18] === classifications.length) {
                    if (cResult[19] === tmp14) {
                      if (cResult[20] === num9) {
                        if (cResult[21] === opened) {
                          if (cResult[22] === status) {
                            if (cResult[23] === tmp4.moreButton) {
                              if (cResult[24] === tmp4.moreButtonContainer) {
                                let tmp25;
                                if (cResult[25] === tmp4.separator) {
                                  tmp25 = cResult[26];
                                }
                                if (cResult[27] === tmp19) {
                                  if (cResult[28] === tmp21) {
                                    let tmp27;
                                    if (cResult[29] === tmp25) {
                                      tmp27 = cResult[30];
                                    }
                                    return tmp27;
                                  }
                                }
                                class L {
                                  constructor() {
                                    if (first) {
                                      const obj = {
                                        action: React4.ViewViolationsDropdown,
                                        account_standing: safetyHubAccountStanding.state,
                                        classification_ids: closure_5.map((id) => Number(id.id)),
                                        source: metroImportAll.StandingTab,
                                        is_violative_content_shown: false,
                                        is_dsa_eligible: stateFromStores,
                                      };
                                      const track = AnalyticsUtilsDefault.track;
                                      const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
                                      AnalyticsUtilsDefault;
                                      track(SAFETY_HUB_ACTION, obj);
                                    }
                                  }
                                }
                                const obj4 = { style: tmp19, children: items2 };
                                items2 = [tmp21, tmp25];
                                const tmp29 = closure_12(num9, obj4);
                                cResult[27] = tmp19;
                                cResult[28] = tmp21;
                                cResult[29] = tmp25;
                                cResult[30] = tmp29;
                                tmp27 = tmp29;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class L {
                    constructor() {
                      if (first) {
                        const obj = {
                          action: React4.ViewViolationsDropdown,
                          account_standing: safetyHubAccountStanding.state,
                          classification_ids: closure_5.map((id) => Number(id.id)),
                          source: metroImportAll.StandingTab,
                          is_violative_content_shown: false,
                          is_dsa_eligible: stateFromStores,
                        };
                        const track = AnalyticsUtilsDefault.track;
                        const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
                        AnalyticsUtilsDefault;
                        track(SAFETY_HUB_ACTION, obj);
                      }
                    }
                  }
                  cResult[18] = classifications.length;
                  cResult[19] = tmp14;
                  cResult[20] = num9;
                  cResult[21] = opened;
                  cResult[22] = status;
                  cResult[23] = tmp4.moreButton;
                  cResult[24] = tmp4.moreButtonContainer;
                  cResult[25] = tmp4.separator;
                  cResult[26] = opened;
                  tmp25 = tmp26;
                }
              }
              const obj5 = { status, onClick: tmp20, opened, count: classifications.length };
              const tmp24 = closure_11(closure_15, obj5);
              cResult[14] = classifications.length;
              cResult[15] = opened;
              cResult[16] = status;
              cResult[17] = tmp24;
              tmp21 = tmp24;
            }
          }
        }
        class L {
          constructor() {
            if (first) {
              const obj = {
                action: React4.ViewViolationsDropdown,
                account_standing: safetyHubAccountStanding.state,
                classification_ids: closure_5.map((id) => Number(id.id)),
                source: metroImportAll.StandingTab,
                is_violative_content_shown: false,
                is_dsa_eligible: stateFromStores,
              };
              const track = AnalyticsUtilsDefault.track;
              const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
              AnalyticsUtilsDefault;
              track(SAFETY_HUB_ACTION, obj);
            }
          }
        }
        const items3 = [opened, safetyHubAccountStanding.state, tmp14, stateFromStores];
        cResult[5] = safetyHubAccountStanding.state;
        cResult[6] = tmp14;
        cResult[7] = stateFromStores;
        cResult[8] = opened;
        cResult[9] = L;
        cResult[10] = items3;
        tmp17 = items3;
        tmp16 = L;
      }
      const substr = classifications.slice(0, tmp8);
      cResult[2] = classifications;
      cResult[3] = tmp8;
      cResult[4] = substr;
      tmp14 = substr;
    }
  : (arg0) => {
      let Text;
      let classifications;
      let closure_2;
      let closure_4;
      let intl;
      let items10;
      let items3;
      let items4;
      let items5;
      let items7;
      let items8;
      let items9;
      let obj10;
      let obj11;
      let obj9;
      let status;
      const f117457 = (classification) => {
        const obj = { classification };
        return closure_1_11(ClassificationDetail, obj, classification.id);
      };
      ({ status, classifications } = arg0);
      let first1;
      is_dsa_eligible = undefined;
      let memo;
      const tmp = closure_14();
      const tmp2 = first1(is_dsa_eligible.useState(false), 2);
      let opened = tmp2[0];
      dependencyMap = tmp2[1];
      const tmp4 = first1(is_dsa_eligible.useState(3), 2);
      first1 = tmp4[0];
      is_dsa_eligible = tmp4[1];
      let obj = classifications(11507);
      const safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
      const items = [memo];
      const obj2 = classifications(504);
      const stateFromStores = obj2.useStateFromStores(items, () => memo.getIsDsaEligible());
      const items1 = [classifications, first1];
      memo = is_dsa_eligible.useMemo(() => classifications.slice(0, first1), items1);
      const items2 = [opened, safetyHubAccountStanding.state, memo, stateFromStores];
      const effect = is_dsa_eligible.useEffect(() => {
        if (first) {
          const obj = {
            action: React4.ViewViolationsDropdown,
            account_standing: safetyHubAccountStanding.state,
            classification_ids: memo.map((id) => Number(id.id)),
            source: metroImportAll.StandingTab,
            is_violative_content_shown: false,
            is_dsa_eligible: stateFromStores,
          };
          const track = AnalyticsUtilsDefault.track;
          const SAFETY_HUB_ACTION = AnalyticEvents.SAFETY_HUB_ACTION;
          AnalyticsUtilsDefault;
          track(SAFETY_HUB_ACTION, obj);
        }
      }, items2);
      let num = 3;
      if (classifications.length - memo.length <= 3) {
        num = classifications.length - memo.length;
      }
      const obj3 = { style: items3, children: items4 };
      items3 = [tmp.container];
      items4 = [,];
      const obj4 = {
        status,
        onClick() {
          return closure_2((arg0) => !arg0);
        },
        opened,
        count: classifications.length,
      };
      items4[0] = closure_11(closure_15, obj4);
      if (opened) {
        const obj5 = { style: items5 };
        items5 = [tmp.separator];
        const items6 = [closure_11(stateFromStores, obj5), memo.length > 0 && memo.map(f117457), , ,];
        let tmp11Result = memo.length < classifications.length;
        memo.length > 0 && memo.map(f117457);
        if (tmp11Result) {
          const obj7 = { style: items7 };
          items7 = [tmp.separator];
          const obj6 = { children: items8 };
          items8 = [closure_11(stateFromStores, obj7)];
          const obj8 = { style: items9, children: closure_11(safetyHubAccountStanding, obj9) };
          items9 = [tmp.moreButtonContainer];
          obj9 = {
            style: items10,
            onPress() {
              return closure_4((arg0) => arg0 + num);
            },
            children: closure_11(Text, obj10),
          };
          items10 = [tmp.moreButton];
          obj10 = { variant: "heading-sm/semibold", children: intl.format(classifications(1126).t["9Ml56H"], obj11) };
          Text = classifications(4892).Text;
          intl = classifications(1126).intl;
          obj11 = { nextPageSize: num };
          items8[1] = closure_11(stateFromStores, obj8);
          tmp11Result = closure_12(closure_13, obj6);
        }
        items6[2] = tmp11Result;
        items6[3] = 0 === memo.length && "active" === status && closure_11(closure_16, {});
        const tmp13Result = 0 === memo.length && "active" === status && closure_11(closure_16, {});
        const obj12 = { children: items6 };
        items6[4] = 0 === memo.length && "expired" === status && closure_11(closure_17, {});
        const tmp13Result2 = 0 === memo.length && "expired" === status && closure_11(closure_17, {});
        opened = closure_12(tmp12, obj12);
      }
      items4[1] = opened;
      return closure_12(stateFromStores, obj3);
    };
let closure_21 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items1;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(10);
      const tmp2 = closure_14();
      const obj2 = useSafetyHubClassifications;
      const activeSafetyHubClassifications = obj2.useActiveSafetyHubClassifications();
      const obj3 = useSafetyHubClassifications;
      const expiredSafetyHubClassifications = obj3.useExpiredSafetyHubClassifications();
      if (0 !== activeSafetyHubClassifications.length) {
        let tmp4;
        let tmp5;
        let tmp9;
        if (cResult[0] !== tmp2.connectedContainer) {
          const items = [];
          ({ connectedContainer: arr3[0], connectedContainer: tmp[0] } = tmp2);
          cResult[1] = items;
          tmp4 = items;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] !== activeSafetyHubClassifications) {
          const obj4 = { status: "active", classifications: activeSafetyHubClassifications };
          const tmp8 = unpackModuleId(closure_21, obj4);
          cResult[2] = activeSafetyHubClassifications;
          cResult[3] = tmp8;
          tmp5 = tmp8;
        } else {
          tmp5 = cResult[3];
        }
        if (cResult[4] !== expiredSafetyHubClassifications) {
          const obj5 = { status: "expired", classifications: expiredSafetyHubClassifications };
          const tmp12 = unpackModuleId(closure_21, obj5);
          cResult[4] = expiredSafetyHubClassifications;
          cResult[5] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp5) {
            let tmp13;
            if (cResult[8] === tmp9) {
              tmp13 = cResult[9];
            }
            tmp3 = tmp13;
          }
        }
        const obj6 = { style: tmp4, children: items1 };
        items1 = [tmp5, tmp9];
        const tmp16 = closure_12(metroRequire, obj6);
        cResult[6] = tmp4;
        cResult[7] = tmp5;
        cResult[8] = tmp9;
        cResult[9] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp3 = null;
      }
      return tmp3;
    }
  : () => {
      let items;
      let items1;
      let tmp2;
      const tmp = closure_14();
      const obj = useSafetyHubClassifications;
      const activeSafetyHubClassifications = obj.useActiveSafetyHubClassifications();
      const obj2 = useSafetyHubClassifications;
      const expiredSafetyHubClassifications = obj2.useExpiredSafetyHubClassifications();
      if (0 !== activeSafetyHubClassifications.length) {
        const obj3 = { style: items, children: items1 };
        items = [tmp.connectedContainer];
        const obj4 = { status: "active", classifications: activeSafetyHubClassifications };
        items1 = [unpackModuleId(closure_21, obj4)];
        const obj5 = { status: "expired", classifications: expiredSafetyHubClassifications };
        items1[1] = unpackModuleId(closure_21, obj5);
        tmp2 = closure_12(metroRequire, obj3);
      } else {
        tmp2 = null;
      }
      return tmp2;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubViolationsContainer.tsx");

export default tmp6;
export const ConnectedSafetyHubViolationsContainer = tmp7;
