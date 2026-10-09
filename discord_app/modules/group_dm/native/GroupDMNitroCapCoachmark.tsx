// === Module 12815: GroupDMNitroCapCoachmark ===

// Module 12815 (GroupDMNitroCapCoachmark)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9016 */;
import _modDef10298 from "module_10298" /* 10298 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 10713 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 10714 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let number = fn(10716).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_9 = createStyles.createStyles({ nitroWheelIcon: { width: 16, height: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMNitroCapCoachmark(location) {
  const cResult = channelId(576).c(34);
  ({ children, channelId } = location);
  const _location = location.location;
  const tmp4 = closure_9();
  noop.useRef(null);
  let obj = channelId(576);
  const groupDMNitroAudience = channelId(10714).useGroupDMNitroAudience();
  dependencyMap = tmp7;
  if (cResult[0] === groupDMNitroAudience) {
    if (cResult[1] === _location) {
      let tmp8 = cResult[2];
    }
    _slicedToArray = _location(10721)(tmp8);
    if (cResult[3] !== _location) {
      const obj3 = { location: _location };
      cResult[3] = _location;
      cResult[4] = obj3;
      let tmp11 = obj3;
    } else {
      tmp11 = cResult[4];
    }
    const tmp10 = _location(10721)(tmp8);
    const enabled = _location(10717).useConfig(tmp11).enabled;
    if (cResult[5] === enabled) {
      if (cResult[6] === tmp12) {
        const tmp15 = _slicedToArray(channelId(7093).useSelectedDismissibleContent(cResult[7]), 2);
        noop = tmp17;
        const first = tmp15[0];
        const _Symbol = Symbol;
        const NITRO_GDM_CAP_COACHMARK = channelId(2049).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = channelId(1126).intl;
          const stringResult = intl.string(channelId(1126).t.d8Spvj);
          const intl2 = channelId(1126).intl;
          const obj4 = { number };
          const formatToPlainStringResult = intl2.formatToPlainString(channelId(1126).t.U3CkDg, obj4);
          cResult[8] = stringResult;
          cResult[9] = formatToPlainStringResult;
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function v() {
            const obj = { text: null, color: null };
            const intl = channelId(1126).intl;
            obj.text = intl.string(channelId(1126).t.oW0eUd);
            obj.color = channelId(1200).BadgeColors.EXPRESSIVE;
            return jsx(channelId(1200).TextBadge, { text: null, color: null });
          };
          cResult[10] = fn;
        }
        if (cResult[11] !== tmp15[1]) {
          class P {
            constructor() {
              return closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
          cResult[11] = tmp17;
          cResult[12] = P;
        } else {
          class P {
            constructor() {
              return closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[13] !== groupDMNitroAudience) {
          class P {
            constructor() {
              return closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
          const stringResult1 = obj8.string(channelId(10714).getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
          cResult[13] = groupDMNitroAudience;
          cResult[14] = stringResult1;
          const tmpResult2 = channelId(10714);
        } else {
          class P {
            constructor() {
              return closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[15] === tmp7) {
          class P {
            constructor() {
              return closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (tmp7) {
          class P {
            constructor() {
              return closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
        } else {
          class P {
            constructor() {
              return closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
          const obj5 = { size: "custom", style: tmp4.nitroWheelIcon, color: tmp9(587).unsafe_rawColors.WHITE };
          const tmp28 = jsx(channelId(9016).NitroWheelIcon, { size: "custom", style: tmp4.nitroWheelIcon, color: tmp9(587).unsafe_rawColors.WHITE });
        }
        cResult[15] = tmp7;
        cResult[16] = tmp4;
        cResult[17] = tmp28;
        const tmpResult = channelId(7093);
      }
    }
    if (enabled) {
      class P {
        constructor() {
          return closure_4(ContentDismissActionType.USER_DISMISS);
        }
      }
      cResult[5] = enabled;
      cResult[6] = tmp12;
      cResult[7] = items;
    }
    items = [];
    const tmp9Result = _location(10717);
  }
  const obj6 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: channelId(10714).GroupDMNitroAcquisitionStrategy.MARKETING };
  cResult[0] = groupDMNitroAudience;
  cResult[1] = _location;
  cResult[2] = obj6;
  tmp8 = obj6;
  const obj2 = channelId(10714);
}) : (function GroupDMNitroCapCoachmark(channelId) {
  channelId = channelId.channelId;
  const _location = channelId.location;
  noop = undefined;
  number = undefined;
  let visible;
  const tmp = closure_9();
  dependencyMap = tmp;
  const ref = noop.useRef(null);
  const groupDMNitroAudience = channelId(10714).useGroupDMNitroAudience();
  noop = tmp6;
  const obj3 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: null };
  let obj = noop;
  const obj2 = channelId(10714);
  obj3.acquisitionStrategy = channelId(10714).GroupDMNitroAcquisitionStrategy.MARKETING;
  const tmp7Result = _location(10721)(obj3);
  closure_5 = tmp7Result;
  let tmp7 = _location(10721);
  channelId(7093);
  if (obj4.useConfig({ location: _location }).enabled) {
    if ("staff" !== groupDMNitroAudience) {
      const items = [tmp3(2049).DismissibleContent.NITRO_GDM_CAP_COACHMARK];
    }
    const tmp13 = groupDMNitroAudience(tmp10([]), 2);
    number = tmp14;
    const tmp15 = tmp13[0] === tmp3(2049).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
    visible = tmp15;
    const items1 = [groupDMNitroAudience, tmp6, tmp15, tmp13[1], channelId, _location, tmp, tmp7Result];
    const memo = obj.useMemo(() => {
      let obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 12, renderImgComponent: null, onDismiss: null, buttonLabel: null, buttonIcon: null, buttonVariant: null, buttonShiny: null, onButtonPress: null };
      let intl = util.intl;
      obj.title = intl.string(util.t.d8Spvj);
      const intl2 = util.intl;
      obj.description = intl2.formatToPlainString(util.t.U3CkDg, { number });
      obj.visible = visible;
      obj.renderImgComponent = function renderImgComponent() {
        const obj = { text: null, color: null };
        const intl = channelId(1126).intl;
        obj.text = intl.string(channelId(1126).t.oW0eUd);
        obj.color = channelId(1200).BadgeColors.EXPRESSIVE;
        return closure_1_8(channelId(1200).TextBadge, obj);
      };
      obj.onDismiss = function onDismiss() {
        return number(constants.USER_DISMISS);
      };
      const intl3 = util.intl;
      obj.buttonLabel = intl3.string(GroupDMNitroUpsellModel.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
      if (closure_4) {
        let tmp7 = _modDef10298;
      } else {
        const obj4 = { size: "custom", style: nitroWheelIcon.nitroWheelIcon, color: nativeDefault.unsafe_rawColors.WHITE };
        tmp7 = jsx(NitroWheelIcon.NitroWheelIcon, { size: "custom", style: nitroWheelIcon.nitroWheelIcon, color: nativeDefault.unsafe_rawColors.WHITE });
      }
      obj.buttonIcon = tmp7;
      let str = "experimental_premium-primary";
      if (closure_4) {
        str = "primary";
      }
      obj.buttonVariant = str;
      obj.buttonShiny = !closure_4;
      obj.onButtonPress = function onButtonPress() {
        if (closure_1_4) {
          _location(10713)(channelId, closure_1_1);
        } else {
          closure_1_5();
        }
        number(constants.TAKE_ACTION);
      };
      return obj;
    }, items1);
    const coachmark = tmp3(9413).useCoachmark(ref, memo);
    const obj5 = { ref, collapsable: false, children: channelId.children };
    return <closure_5 ref={ref} collapsable={false}>{channelId.children}</closure_5>;
  }
  obj4 = _location(10717);
});