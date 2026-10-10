// discord_app/modules/safety_hub/native/SafetyHubViolationsContainer.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import SafetyHubUtils from "../SafetyHubUtils.tsx";
import SafetyHubModels from "../SafetyHubModels.tsx";
import TouchableHitBoxDefault from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import useSafetyHubClassifications from "../hooks/useSafetyHubClassifications.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

const util = chevron(1126);
const Text_Text = chevron(5088);
const WarningIcon = chevron(7571);
const ChevronSmallDownIcon2 = chevron(10532);
const ChevronSmallUpIcon = chevron(13842);
require = fn;
function ClassificationDetail(classification) {
  classification = classification.classification;
  const tmp = closure_14();
  const id = classification.id;
  const description = classification.description;
  const guild_metadata = classification.guild_metadata;
  let obj = description(guild_metadata[18]);
  const tmp2 = description;
  const extractTimestampResult = description(guild_metadata[18]).extractTimestamp(id);
  const tmp5 = id;
  const isNewClassification = id(guild_metadata[19]).useIsNewClassification(classification);
  const items = [description, guild_metadata];
  const items1 = [tmp.detailContainerOuter];
  let prop = null;
  const memo = noop.useMemo(() => {
    function hook(children, arg1) {
      return closure_1_11(id(guild_metadata[13]).Text, { variant: "heading-md/extrabold", children }, arg1);
    }
    let obj2 = { description, descriptionHook: hook };
    let tmp4 = null;
    if (null != guild_metadata) {
      let member_type;
      if (guild_metadata != tmp4) {
        member_type = guild_metadata.member_type;
      }
      let Lb0HVv = require;
      let obj = dependencyMap;
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = Lb0HVv(1126).intl;
        Lb0HVv = Lb0HVv(1126).t.Lb0HVv;
        obj = {};
        const merged = Object.assign(obj2);
        tmp4 = guild_metadata == tmp4;
        obj2 = undefined;
        if (!tmp4) {
          obj2 = guild_metadata.name;
        }
        obj.guildName = obj2;
        let formatResult = intl3.format(Lb0HVv, obj);
      } else {
        const intl2 = Lb0HVv(1126).intl;
        const obj4 = { classification_type: tmp2, classificationHook: hook, guildName: null };
        let name;
        if (guild_metadata != tmp4) {
          name = guild_metadata.name;
        }
        obj4.guildName = name;
        formatResult = intl2.format(Lb0HVv(1126).t.rmpEPD, obj4);
      }
    } else {
      const intl = util.intl;
      return intl.format(util.t.QY4g5t, obj2);
    }
  }, items);
  if (isNewClassification) {
    prop = tmp.detailContainerOuterNew;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = prop;
  let obj4 = {
    onPress() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11469, dependencyMap.paths), {
        classificationId: id,
        source: closure_2_8.StandingTab,
      });
    },
    children: null,
  };
  const obj5 = { style: tmp.detailContainerInner, children: null };
  let obj2 = id(guild_metadata[19]);
  if (isNewClassification) {
    let tmp8Result = closure_11(closure_19, {});
  } else {
    const obj6 = { timestamp: extractTimestampResult };
    tmp8Result = closure_11(closure_18, obj6);
  }
  const items2 = [
    tmp8Result,
    closure_11(tmp5(guild_metadata[13]).Text, { variant: "heading-md/normal", children: memo }),
  ];
  obj5.children = items2;
  obj4.children = closure_12(closure_6, obj5);
  obj3.children = closure_11(tmp2(guild_metadata[16]), obj4);
  return closure_11(closure_6, obj3);
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SafetyHubConstants = fn(7512);
({ SafetyHubAnalyticsActionSource: closure_8, SafetyHubAnalyticsActions: closure_9 } = SafetyHubConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  connectedContainer: {
    display: "flex",
    marginTop: nativeDefault.space.PX_12,
    marginBottom: 36,
    gap: nativeDefault.space.PX_12,
  },
  container: null,
  header: null,
  detailContainerOuter: null,
  detailContainerOuterNew: null,
  detailContainerInner: null,
  iconBackground: null,
  chevron: null,
  incidentDate: null,
  incidentDateNew: null,
  newText: null,
  emptyState: null,
  separator: null,
  moreButtonContainer: null,
  moreButton: null,
  headerTextContainer: null,
};
let obj3 = { display: "flex", marginTop: nativeDefault.space.PX_12, marginBottom: 36, gap: nativeDefault.space.PX_12 };
obj2.container = {
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_8,
  width: "100%",
};
let obj4 = {
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_8,
  width: "100%",
};
obj2.header = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
  width: "100%",
};
let obj5 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
  width: "100%",
};
obj2.detailContainerOuter = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
  marginTop: 10,
};
let obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
  marginTop: 10,
};
obj2.detailContainerOuterNew = {
  borderColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT,
  borderWidth: 1,
  borderStyle: "solid",
};
let obj7 = {
  borderColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT,
  borderWidth: 1,
  borderStyle: "solid",
};
obj2.detailContainerInner = { display: "flex", gap: nativeDefault.space.PX_8 };
let obj8 = { display: "flex", gap: nativeDefault.space.PX_8 };
obj2.iconBackground = {
  display: "flex",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  justifyContent: "center",
  alignItems: "center",
  padding: 6,
};
obj2.chevron = { marginLeft: "auto" };
let obj9 = {
  display: "flex",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  justifyContent: "center",
  alignItems: "center",
  padding: 6,
};
obj2.incidentDate = {
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.md,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
};
let obj10 = {
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.md,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj2.incidentDateNew = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
};
obj2.newText = { textTransform: "capitalize" };
let obj11 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
};
obj2.emptyState = {
  display: "flex",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: nativeDefault.radii.md,
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_24,
};
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 10 };
obj2.separator = size;
obj2.moreButtonContainer = { display: "flex", alignItems: "center", justifyContent: "center" };
const size1 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottomEndRadius: nativeDefault.radii.xs,
  borderBottomStartRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: 29,
  width: 207,
};
obj2.moreButton = size1;
obj2.headerTextContainer = { flexShrink: 0, flexGrow: 1, gap: 2 };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SafetyHubViolationsHeader(arg0) {
      let chevron = require;
      const cResult = c.c(27);
      ({ count, onClick, opened, status } = arg0);
      const tmp3 = closure_14();
      const colors = nativeDefault.colors;
      if ("active" === status) {
        let ICON_MUTED = colors.INTERACTIVE_TEXT_DEFAULT;
        let tmp6 = importDefault;
      } else {
        ICON_MUTED = colors.ICON_MUTED;
        tmp6 = importDefault;
      }
      if (cResult[0] !== ICON_MUTED) {
        const obj2 = { color: ICON_MUTED, size: "xs" };
        const tmp9 = closure_1_11(WarningIcon.WarningIcon, obj2);
        cResult[0] = ICON_MUTED;
        cResult[1] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp3.iconBackground) {
        if (cResult[3] === tmp7) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] === count) {
          if (cResult[6] === status) {
            if (cResult[8] !== cResult[7]) {
              const obj3 = { variant: "heading-sm/semibold", children: tmp12 };
              const tmp17 = closure_1_11(Text_Text.Text, obj3);
              cResult[8] = tmp12;
              cResult[9] = tmp17;
              let tmp15 = tmp17;
            } else {
              tmp15 = cResult[9];
            }
            if (cResult[10] !== status) {
              const intl2 = util.intl;
              const string = intl2.string;
              let XJ2YVR = util.t;
              if (tmp4) {
                XJ2YVR = XJ2YVR.XJ2YVR;
                let stringResult = string(XJ2YVR);
              } else {
                stringResult = string(XJ2YVR.SzGV0g);
              }
              cResult[10] = status;
              cResult[11] = stringResult;
            } else {
              if (cResult[12] !== cResult[11]) {
                const obj4 = { variant: "text-xxs/normal", color: "text-muted", children: tmp18 };
                const tmp23 = closure_1_11(Text_Text.Text, obj4);
                cResult[12] = tmp18;
                cResult[13] = tmp23;
                let tmp21 = tmp23;
              } else {
                tmp21 = cResult[13];
              }
              if (cResult[14] === tmp3.headerTextContainer) {
                if (cResult[15] === tmp15) {
                  if (cResult[16] === tmp21) {
                    let tmp24 = cResult[17];
                  }
                  if (cResult[18] === opened) {
                    if (cResult[19] === tmp3.chevron) {
                      if (cResult[21] === onClick) {
                        if (cResult[22] === tmp3.header) {
                          if (cResult[23] === tmp10) {
                            if (cResult[24] === tmp24) {
                              if (cResult[25] === tmp28) {
                                let tmp32 = cResult[26];
                              }
                              return tmp32;
                            }
                          }
                        }
                      }
                      const obj5 = { onPress: onClick, style: tmp3.header, children: null };
                      const items = [tmp10, tmp24, cResult[20]];
                      obj5.children = items;
                      const tmp34 = __initData(tmp6(8673), obj5);
                      cResult[21] = onClick;
                      cResult[22] = tmp3.header;
                      cResult[23] = tmp10;
                      cResult[24] = tmp24;
                      cResult[25] = cResult[20];
                      cResult[26] = tmp34;
                      tmp32 = tmp34;
                    }
                  }
                  if (opened) {
                    let ChevronSmallDownIcon = ChevronSmallUpIcon.ChevronSmallUpIcon;
                  } else {
                    ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
                  }
                  const obj6 = { size: "md", style: null };
                  chevron = tmp3.chevron;
                  obj6.style = chevron;
                  const tmp29Result = closure_1_11(ChevronSmallDownIcon, obj6);
                  cResult[18] = opened;
                  opened = tmp3.chevron;
                  cResult[19] = opened;
                  cResult[20] = tmp29Result;
                }
              }
              const obj7 = { style: tmp3.headerTextContainer, children: null };
              const items1 = [tmp15, tmp21];
              obj7.children = items1;
              const tmp27 = __initData(timestampProducer, obj7);
              cResult[14] = tmp3.headerTextContainer;
              cResult[15] = tmp15;
              cResult[16] = tmp21;
              cResult[17] = tmp27;
              tmp24 = tmp27;
            }
          }
        }
        const intl = util.intl;
        const formatToPlainString = intl.formatToPlainString;
        let t = util.t;
        if (tmp4) {
          t = { count: count.toString() };
          let formatToPlainStringResult = formatToPlainString(t.IeV2oY, t);
        } else {
          const obj8 = { count: count.toString() };
          formatToPlainStringResult = formatToPlainString(t.fZAHBT, obj8);
        }
        cResult[5] = count;
        cResult[6] = status;
        cResult[7] = formatToPlainStringResult;
      }
      const tmp11 = closure_1_11(timestampProducer, { style: tmp3.iconBackground, children: tmp7 });
      cResult[2] = tmp3.iconBackground;
      cResult[3] = tmp7;
      cResult[4] = tmp11;
      tmp10 = tmp11;
      const obj9 = { style: tmp3.iconBackground, children: tmp7 };
    }
  : function SafetyHubViolationsHeader(count) {
      ({ onClick, opened, status } = count);
      const tmp = closure_14();
      const obj = { onPress: onClick, style: tmp.header, children: null };
      const obj2 = { style: tmp.iconBackground, children: null };
      const colors = nativeDefault.colors;
      obj2.children = closure_1_11(WarningIcon.WarningIcon, {
        color: "active" === status ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_MUTED,
        size: "xs",
      });
      const items = [closure_1_11(timestampProducer, obj2), ,];
      const obj4 = { style: tmp.headerTextContainer, children: null };
      const intl = util.intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = util.t;
      if ("active" === status) {
        const obj5 = { count: str.toString() };
        let formatToPlainStringResult = formatToPlainString(t.IeV2oY, obj5);
      } else {
        const obj6 = { count: str.toString() };
        formatToPlainStringResult = formatToPlainString(t.fZAHBT, obj6);
      }
      const items1 = [
        closure_1_11(Text_Text.Text, { variant: "heading-sm/semibold", children: formatToPlainStringResult }),
      ];
      const intl2 = util.intl;
      const string = intl2.string;
      const t2 = util.t;
      if ("active" === status) {
        let stringResult = string(t2.XJ2YVR);
      } else {
        stringResult = string(t2.SzGV0g);
      }
      items1[1] = closure_1_11(Text_Text.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: stringResult,
      });
      obj4.children = items1;
      items[1] = __initData(timestampProducer, obj4);
      if (opened) {
        let ChevronSmallDownIcon = ChevronSmallUpIcon.ChevronSmallUpIcon;
      } else {
        ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
      }
      items[2] = closure_1_11(ChevronSmallDownIcon, { size: "md", style: tmp.chevron });
      obj.children = items;
      return __initData(TouchableHitBoxDefault, obj);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyActiveState() {
      const cResult = c.c(4);
      const tmp4 = closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-sm/extrabold", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t.reLFaV);
        const tmp7 = closure_1_11(Text_Text.Text, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-xs/normal", children: null };
        const intl2 = util.intl;
        obj3.children = intl2.string(util.t.ERdH1o);
        const tmp10 = closure_1_11(Text_Text.Text, obj3);
        cResult[1] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.emptyState) {
        const obj4 = { style: tmp4.emptyState, children: null };
        const items = [first, tmp8];
        obj4.children = items;
        const tmp14 = __initData(timestampProducer, obj4);
        cResult[2] = tmp4.emptyState;
        cResult[3] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[3];
      }
      return tmp11;
    }
  : function EmptyActiveState() {
      const obj = { style: closure_14().emptyState, children: null };
      const obj2 = { variant: "heading-sm/extrabold", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.reLFaV);
      const items = [closure_1_11(Text_Text.Text, obj2)];
      const obj3 = { variant: "text-xs/normal", children: null };
      const intl2 = util.intl;
      obj3.children = intl2.string(util.t.ERdH1o);
      items[1] = closure_1_11(Text_Text.Text, obj3);
      obj.children = items;
      return __initData(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyExpiredState() {
      const cResult = c.c(3);
      const tmp4 = closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-xs/normal", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t.RV3AXf);
        const tmp7 = closure_1_11(Text_Text.Text, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.emptyState) {
        const obj3 = { style: tmp4.emptyState, children: first };
        const tmp11 = closure_1_11(timestampProducer, obj3);
        cResult[1] = tmp4.emptyState;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : function EmptyExpiredState() {
      const obj = { style: closure_14().emptyState, children: null };
      const obj2 = { variant: "text-xs/normal", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.RV3AXf);
      obj.children = closure_1_11(Text_Text.Text, obj2);
      return closure_1_11(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RelativeIncidentTime(timestamp) {
      const cResult = c.c(7);
      timestamp = timestamp.timestamp;
      const tmp4 = closure_14();
      if (cResult[0] !== timestamp) {
        const classificationRelativeIncidentTime = SafetyHubUtils.getClassificationRelativeIncidentTime(timestamp);
        cResult[0] = timestamp;
        cResult[1] = classificationRelativeIncidentTime;
        let tmp5 = classificationRelativeIncidentTime;
        const tmpResult = SafetyHubUtils;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        const obj2 = { variant: "text-xs/medium", children: tmp5 };
        const tmp9 = closure_1_11(Text_Text.Text, obj2);
        cResult[2] = tmp5;
        cResult[3] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp4.incidentDate) {
        if (cResult[5] === tmp7) {
          let tmp10 = cResult[6];
        }
        return tmp10;
      }
      const tmp11 = closure_1_11(timestampProducer, { style: tmp4.incidentDate, children: tmp7 });
      cResult[4] = tmp4.incidentDate;
      cResult[5] = tmp7;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : function RelativeIncidentTime(timestamp) {
      const obj = { style: closure_14().incidentDate, children: null };
      const obj2 = {
        variant: "text-xs/medium",
        children: SafetyHubUtils.getClassificationRelativeIncidentTime(timestamp.timestamp),
      };
      obj.children = closure_1_11(Text_Text.Text, obj2);
      return closure_1_11(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NewBadge() {
      const cResult = c.c(9);
      const tmp4 = closure_14();
      if (cResult[0] === tmp4.incidentDate) {
        if (cResult[1] === tmp4.incidentDateNew) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.QKMRC4);
          cResult[3] = stringResult;
          let tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4.newText) {
          const obj2 = { variant: "text-xs/medium", color: "text-overlay-light", style: tmp4.newText, children: tmp7 };
          const tmp11 = closure_1_11(Text_Text.Text, obj2);
          cResult[4] = tmp4.newText;
          cResult[5] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          if (cResult[7] === tmp9) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
        const obj3 = { style: tmp5, children: tmp9 };
        const tmp15 = closure_1_11(timestampProducer, obj3);
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
  : function NewBadge() {
      const tmp = closure_14();
      const obj = { style: null, children: null };
      const items = [,];
      ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp);
      obj.style = items;
      const obj2 = { variant: "text-xs/medium", color: "text-overlay-light", style: tmp.newText, children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.QKMRC4);
      obj.children = closure_1_11(Text_Text.Text, obj2);
      return closure_1_11(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SafetyHubViolationsContainer(arg0) {
      const cResult = opened(576).c(29);
      ({ status, classifications } = arg0);
      closure_14();
      const tmp5 = safetyHubAccountStanding(stateFromStores.useState(false), 2);
      opened = tmp5[0];
      importDefault = tmp5[1];
      let obj = opened(576);
      let obj2 = stateFromStores;
      const tmp = opened;
      [tmp8, dependencyMap] = safetyHubAccountStanding(stateFromStores.useState(3), 2);
      const tmp7 = safetyHubAccountStanding(stateFromStores.useState(3), 2);
      safetyHubAccountStanding = opened(11473).useSafetyHubAccountStanding();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        const fn = function y() {
          return isDsaEligible.getIsDsaEligible();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = items;
        tmp11 = fn;
      } else {
        [tmp10, tmp11] = cResult;
      }
      const obj3 = opened(11473);
      stateFromStores = tmp(504).useStateFromStores(tmp10, tmp11);
      if (cResult[2] === classifications) {
        if (cResult[3] === tmp8) {
          let tmp14 = cResult[4];
        }
        closure_5 = tmp14;
        if (cResult[5] === safetyHubAccountStanding.state) {
          if (cResult[6] === tmp14) {
            if (cResult[7] === stateFromStores) {
              if (cResult[8] === opened) {
                let tmp16 = cResult[9];
                let tmp17 = cResult[10];
              }
              const effect = obj2.useEffect(tmp16, tmp17);
              class L {
                constructor() {
                  if (closure_0) {
                    tmp = closure_1;
                    tmp2 = closure_2;
                    obj = closure_1(closure_2[26]);
                    tmp3 = AnalyticEvents;
                    obj1 = {
                      action: null,
                      account_standing: null,
                      classification_ids: null,
                      source: null,
                      is_violative_content_shown: false,
                      is_dsa_eligible: null,
                    };
                    tmp4 = SafetyHubAnalyticsActions;
                    obj1.action = SafetyHubAnalyticsActions.ViewViolationsDropdown;
                    tmp5 = closure_3;
                    obj1.account_standing = closure_3.state;
                    tmp6 = closure_5;
                    obj1.classification_ids = closure_5.map((id) => Number(id.id));
                    tmp7 = closure_8;
                    obj1.source = closure_8.StandingTab;
                    tmp8 = closure_4;
                    obj1.is_dsa_eligible = closure_4;
                    trackResult = obj.track(AnalyticEvents.SAFETY_HUB_ACTION, obj1);
                  }
                  return;
                }
              }
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                class G {
                  constructor() {
                    return closure_1((arg0) => !arg0);
                  }
                }
                cResult[11] = G;
                class L {
                  constructor() {
                    if (closure_0) {
                      tmp = closure_1;
                      tmp2 = closure_2;
                      obj = closure_1(closure_2[26]);
                      tmp3 = AnalyticEvents;
                      obj1 = {
                        action: null,
                        account_standing: null,
                        classification_ids: null,
                        source: null,
                        is_violative_content_shown: false,
                        is_dsa_eligible: null,
                      };
                      tmp4 = SafetyHubAnalyticsActions;
                      obj1.action = SafetyHubAnalyticsActions.ViewViolationsDropdown;
                      tmp5 = closure_3;
                      obj1.account_standing = closure_3.state;
                      tmp6 = closure_5;
                      obj1.classification_ids = closure_5.map((id) => Number(id.id));
                      tmp7 = closure_8;
                      obj1.source = closure_8.StandingTab;
                      tmp8 = closure_4;
                      obj1.is_dsa_eligible = closure_4;
                      trackResult = obj.track(AnalyticEvents.SAFETY_HUB_ACTION, obj1);
                    }
                    return;
                  }
                }
              } else {
                class G {
                  constructor() {
                    return closure_1((arg0) => !arg0);
                  }
                }
              }
              if (cResult[12] === classifications.length) {
                class G {
                  constructor() {
                    return closure_1((arg0) => !arg0);
                  }
                }
              }
              const obj4 = { status, onClick: tmp19, opened, count: classifications.length };
              const tmp23 = closure_11(closure_15, obj4);
              cResult[12] = classifications.length;
              cResult[13] = opened;
              cResult[14] = status;
              cResult[15] = tmp23;
            }
          }
        }
        class L {
          constructor() {
            if (closure_0) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[26]);
              tmp3 = AnalyticEvents;
              obj1 = {
                action: null,
                account_standing: null,
                classification_ids: null,
                source: null,
                is_violative_content_shown: false,
                is_dsa_eligible: null,
              };
              tmp4 = SafetyHubAnalyticsActions;
              obj1.action = SafetyHubAnalyticsActions.ViewViolationsDropdown;
              tmp5 = closure_3;
              obj1.account_standing = closure_3.state;
              tmp6 = closure_5;
              obj1.classification_ids = closure_5.map((id) => Number(id.id));
              tmp7 = closure_8;
              obj1.source = closure_8.StandingTab;
              tmp8 = closure_4;
              obj1.is_dsa_eligible = closure_4;
              trackResult = obj.track(AnalyticEvents.SAFETY_HUB_ACTION, obj1);
            }
            return;
          }
        }
        const items1 = [opened, safetyHubAccountStanding.state, tmp14, stateFromStores];
        cResult[5] = safetyHubAccountStanding.state;
        cResult[6] = tmp14;
        cResult[7] = stateFromStores;
        cResult[8] = opened;
        cResult[9] = L;
        cResult[10] = items1;
        tmp17 = items1;
        tmp16 = L;
      }
      const substr = classifications.slice(0, tmp8);
      cResult[2] = classifications;
      cResult[3] = tmp8;
      cResult[4] = substr;
      tmp14 = substr;
      const tmpResult = tmp(504);
    }
  : function SafetyHubViolationsContainer(arg0) {
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
      const safetyHubAccountStanding = classifications(11473).useSafetyHubAccountStanding();
      let obj = classifications(11473);
      const items = [memo];
      const stateFromStores = classifications(504).useStateFromStores(items, () => memo.getIsDsaEligible());
      const items1 = [classifications, first1];
      memo = is_dsa_eligible.useMemo(() => classifications.slice(0, first1), items1);
      const items2 = [opened, safetyHubAccountStanding.state, memo, stateFromStores];
      const effect = is_dsa_eligible.useEffect(() => {
        if (first) {
          const obj2 = {
            action: options.ViewViolationsDropdown,
            account_standing: safetyHubAccountStanding.state,
            classification_ids: memo.map((id) => Number(id.id)),
            source: closure_2_8.StandingTab,
            is_violative_content_shown: false,
            is_dsa_eligible: stateFromStores,
          };
          AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_HUB_ACTION, obj2);
        }
      }, items2);
      let num = 3;
      if (classifications.length - memo.length <= 3) {
        num = classifications.length - memo.length;
      }
      const obj3 = { style: tmp.container, children: null };
      const items3 = [
        closure_11(closure_15, {
          status,
          onClick() {
            return closure_2((arg0) => !arg0);
          },
          opened,
          count: classifications.length,
        }),
      ];
      if (opened) {
        const obj5 = { style: tmp.separator };
        const items4 = [
          closure_11(tmp12, obj5),
          memo.length > 0 &&
            memo.map((classification) => closure_1_11(ClassificationDetail, { classification }, classification.id)),
          ,
          ,
        ];
        let tmp11Result = memo.length < classifications.length;
        if (tmp11Result) {
          const obj6 = { children: null };
          const obj7 = { style: tmp.separator };
          const items5 = [closure_11(tmp12, obj7)];
          const obj8 = { style: tmp.moreButtonContainer, children: null };
          const obj9 = {
            style: tmp.moreButton,
            onPress() {
              return closure_4((arg0) => arg0 + num);
            },
            children: null,
          };
          const obj10 = { variant: "heading-sm/semibold", children: null };
          const intl = classifications(1126).intl;
          const obj11 = { nextPageSize: num };
          obj10.children = intl.format(classifications(1126).t["9Ml56H"], obj11);
          obj9.children = closure_11(classifications(5088).Text, obj10);
          obj8.children = closure_11(safetyHubAccountStanding, obj9);
          items5[1] = closure_11(tmp12, obj8);
          obj6.children = items5;
          tmp11Result = closure_12(closure_13, obj6);
        }
        items4[2] = tmp11Result;
        let tmp13Result = 0 === memo.length;
        if (tmp13Result) {
          tmp13Result = "active" === status;
        }
        if (tmp13Result) {
          tmp13Result = closure_11(closure_16, {});
        }
        items4[3] = tmp13Result;
        let tmp13Result2 = 0 === memo.length;
        if (tmp13Result2) {
          tmp13Result2 = "expired" === status;
        }
        if (tmp13Result2) {
          tmp13Result2 = closure_11(closure_17, {});
        }
        const obj12 = { children: null };
        items4[4] = tmp13Result2;
        obj12.children = items4;
        opened = closure_12(tmp12, obj12);
        const tmp14 =
          memo.length > 0 &&
          memo.map((classification) => closure_1_11(ClassificationDetail, { classification }, classification.id));
      }
      items3[1] = opened;
      obj3.children = items3;
      return closure_12(stateFromStores, obj3);
    };
let closure_21 = tmp5;
ReactCompilerGating = fn(558);
let obj12 = {
  display: "flex",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: nativeDefault.radii.md,
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_24,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubViolationsContainer.tsx");

export default tmp5;
export const ConnectedSafetyHubViolationsContainer = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectedSafetyHubViolationsContainer() {
      const cResult = c.c(8);
      let connectedContainer = closure_14();
      const activeSafetyHubClassifications = useSafetyHubClassifications.useActiveSafetyHubClassifications();
      const expiredSafetyHubClassifications = useSafetyHubClassifications.useExpiredSafetyHubClassifications();
      if (0 === activeSafetyHubClassifications.length) {
        if (0 === expiredSafetyHubClassifications.length) {
          return null;
        }
      }
      if (cResult[0] !== activeSafetyHubClassifications) {
        const obj4 = { status: "active", classifications: activeSafetyHubClassifications };
        const tmp6 = closure_1_11(closure_21, obj4);
        cResult[0] = activeSafetyHubClassifications;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] !== expiredSafetyHubClassifications) {
        const obj5 = { status: "expired", classifications: expiredSafetyHubClassifications };
        const tmp10 = closure_1_11(closure_21, obj5);
        cResult[2] = expiredSafetyHubClassifications;
        cResult[3] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === connectedContainer.connectedContainer) {
        if (cResult[5] === tmp3) {
        }
      }
      const obj6 = { style: connectedContainer.connectedContainer, children: null };
      const items = [tmp3, tmp7];
      obj6.children = items;
      const tmp12 = __initData(timestampProducer, obj6);
      connectedContainer = connectedContainer.connectedContainer;
      cResult[4] = connectedContainer;
      cResult[5] = tmp3;
      cResult[6] = tmp7;
      cResult[7] = tmp12;
    }
  : function ConnectedSafetyHubViolationsContainer() {
      const tmp = closure_14();
      const activeSafetyHubClassifications = useSafetyHubClassifications.useActiveSafetyHubClassifications();
      const expiredSafetyHubClassifications = useSafetyHubClassifications.useExpiredSafetyHubClassifications();
      if (0 !== activeSafetyHubClassifications.length) {
        const obj3 = { style: tmp.connectedContainer, children: null };
        const obj4 = { status: "active", classifications: activeSafetyHubClassifications };
        const items = [closure_1_11(closure_21, obj4)];
        const obj5 = { status: "expired", classifications: expiredSafetyHubClassifications };
        items[1] = closure_1_11(closure_21, obj5);
        obj3.children = items;
        let tmp2 = __initData(timestampProducer, obj3);
      } else {
        tmp2 = null;
      }
      return tmp2;
    };
