// === Module 12851: GroupDMNitroCapCoachmark ===

// Module 12851 (GroupDMNitroCapCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import _modDef9491 from "module_9491" /* 9491 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11086 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(11088).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_9 = createStyles.createStyles({ nitroWheelIcon: { width: 16, height: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapCoachmark.tsx");

export default function GroupDMNitroCapCoachmark(channelId) {
  channelId = channelId.channelId;
  const _location = channelId.location;
  noop = undefined;
  let number;
  let visible;
  const tmp = closure_9();
  dependencyMap = tmp;
  const ref = noop.useRef(null);
  const groupDMNitroAudience = channelId(11086).useGroupDMNitroAudience();
  noop = tmp6;
  const obj3 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: null };
  let obj = noop;
  const obj2 = channelId(11086);
  obj3.acquisitionStrategy = channelId(11086).GroupDMNitroAcquisitionStrategy.MARKETING;
  const tmp7Result = _location(11093)(obj3);
  closure_5 = tmp7Result;
  let tmp7 = _location(11093);
  channelId(6806);
  if (obj4.useConfig({ location: _location }).enabled) {
    if ("staff" !== groupDMNitroAudience) {
      const items = [tmp3(2029).DismissibleContent.NITRO_GDM_CAP_COACHMARK];
    }
    const tmp13 = groupDMNitroAudience(tmp10([]), 2);
    number = tmp14;
    const tmp15 = tmp13[0] === tmp3(2029).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
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
        const intl = channelId(1115).intl;
        obj.text = intl.string(channelId(1115).t.oW0eUd);
        obj.color = channelId(1177).BadgeColors.EXPRESSIVE;
        return closure_1_8(channelId(1177).TextBadge, obj);
      };
      obj.onDismiss = function onDismiss() {
        return number(constants.USER_DISMISS);
      };
      const intl3 = util.intl;
      obj.buttonLabel = intl3.string(GroupDMNitroUpsellModel.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
      if (closure_4) {
        let tmp7 = _modDef9491;
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
          _location(11085)(channelId, closure_1_1);
        } else {
          closure_1_5();
        }
        number(constants.TAKE_ACTION);
      };
      return obj;
    }, items1);
    const coachmark = tmp3(10589).useCoachmark(ref, memo);
    const obj5 = { ref, collapsable: false, children: channelId.children };
    return <closure_5 ref={ref} collapsable={false}>{channelId.children}</closure_5>;
  }
  obj4 = _location(11089);
};