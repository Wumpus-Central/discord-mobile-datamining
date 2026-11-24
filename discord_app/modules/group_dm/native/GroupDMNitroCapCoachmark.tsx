// === Module 13919: GroupDMNitroCapCoachmark ===

// Module 13919 (GroupDMNitroCapCoachmark)
import util from "util" /* 1112 */;
import _modDef10404 from "module_10404" /* 10404 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(11954).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const ContentDismissActionType = fn(4763).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapCoachmark.tsx");

export default function GroupDMNitroCapCoachmark(channelId) {
  channelId = channelId.channelId;
  const _location = channelId.location;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const ref = noop.useRef(null);
  const groupDMNitroAudience = channelId(11952).useGroupDMNitroAudience();
  const obj2 = channelId(11952);
  channelId(9420);
  if (obj3.useConfig({ location: _location }).enabled) {
    if ("entitled" === groupDMNitroAudience) {
      items = [tmp2(4750).DismissibleContent.NITRO_GDM_CAP_COACHMARK];
    }
    const tmp9 = _slicedToArray(tmp6([]), 2);
    dependencyMap = tmp10;
    const tmp11 = tmp9[0] === tmp2(4750).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
    _slicedToArray = tmp11;
    const items1 = [tmp11, tmp9[1], channelId, _location];
    const memo = noop.useMemo(() => {
      const obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 12, onDismiss: null, buttonLabel: null, buttonIcon: null, buttonVariant: "primary", onButtonPress: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.d8Spvj);
      const intl2 = util.intl;
      obj.description = intl2.formatToPlainString(util.t.U3CkDg, { number });
      obj.visible = visible;
      obj.onDismiss = function onDismiss() {
        return dependencyMap(constants.USER_DISMISS);
      };
      const intl3 = util.intl;
      obj.buttonLabel = intl3.string(util.t.yZOtoD);
      obj.buttonIcon = _modDef10404;
      obj.onButtonPress = function onButtonPress() {
        _location(11951)(channelId, closure_1_1);
        dependencyMap(constants.TAKE_ACTION);
      };
      return obj;
    }, items1);
    const coachmark = tmp2(9427).useCoachmark(ref, memo);
    const obj4 = { ref, collapsable: false, children: channelId.children };
    return <View ref={ref} collapsable={false}>{channelId.children}</View>;
  }
  obj3 = _location(11955);
};